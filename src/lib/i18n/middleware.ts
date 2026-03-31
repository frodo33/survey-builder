import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing, isValidLocale } from "./routing";

const handleI18nRouting = createMiddleware(routing);

export function i18nMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const localeSegment = segments[0];

  if (localeSegment && !isValidLocale(localeSegment)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}/${segments.slice(1).join("/")}`;
    return NextResponse.redirect(url);
  }

  return handleI18nRouting(request);
}