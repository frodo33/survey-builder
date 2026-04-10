import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

import { envConfig } from "@/app.config"
import { routing } from "@/lib/i18n/routing"

import { ROUTES } from "../routes"

function stripLocalePrefix(pathname: string): string {
  for (const locale of routing.locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      return pathname.slice(locale.length + 1) || "/"
    }
  }
  return pathname
}

function detectLocale(pathname: string): string {
  for (const locale of routing.locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      return locale
    }
  }
  return routing.defaultLocale
}

function isPublicPath(pathname: string): boolean {
  const normalized = stripLocalePrefix(pathname);
  return Object.values(ROUTES.PUBLIC).some((p) => 
    normalized.startsWith(p)
  );
}

function isAuthPath(pathname: string): boolean {
  const GUEST_ONLY_PATHS = [ROUTES.PUBLIC.LOGIN, ROUTES.PUBLIC.REGISTER];
  const normalized = stripLocalePrefix(pathname);
  return GUEST_ONLY_PATHS.some((p) => normalized.startsWith(p));
}

function isValidPath(pathname: string): boolean {
  const normalized = stripLocalePrefix(pathname);
  
  const allValidPaths = [
    ...Object.values(ROUTES.PUBLIC),
    ...Object.values(ROUTES.PRIVATE),
  ];
  
  return allValidPaths.some((p) => 
    p === "/" ? normalized === "/" : normalized.startsWith(p)
  );
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    envConfig.API_HOST_URL,
    envConfig.API_HOST_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet, headers) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
          Object.entries(headers ?? {}).forEach(([key, value]) =>
            supabaseResponse.headers.set(key, value)
          )
        },
      },
    }
  )

  const { data } = await supabase.auth.getClaims()
  const user = data?.claims
  const { pathname } = request.nextUrl

  const locale = detectLocale(pathname)

  if (!isValidPath(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${user ? ROUTES.PRIVATE.DASHBOARD : ROUTES.PUBLIC.LOGIN}`;
    return NextResponse.redirect(url);
  }

  if (!user && !isPublicPath(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${ROUTES.PUBLIC.LOGIN}`;
    return NextResponse.redirect(url);
  }

  if (user && isAuthPath(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/`;
    return NextResponse.redirect(url);
  }

  return supabaseResponse
}