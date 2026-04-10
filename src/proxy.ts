import type { NextRequest } from "next/server";

import { i18nMiddleware } from "./lib/i18n/i18nMiddleware";
import { updateSession } from "./lib/supabase/proxy";

export default async function middleware(request: NextRequest) {
  const supabaseResponse = await updateSession(request);

  if (supabaseResponse.status === 301 || supabaseResponse.status === 302 || supabaseResponse.status === 307 || supabaseResponse.status === 308) {
    return supabaseResponse;
  }

  const i18nResponse = i18nMiddleware(request);

  supabaseResponse.cookies.getAll().forEach((cookie) => {
    i18nResponse.cookies.set(cookie.name, cookie.value, cookie);
  });

  return i18nResponse;
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};