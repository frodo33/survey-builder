import type { NextRequest } from "next/server";

import { i18nMiddleware } from "./lib/i18n/i18nMiddleware";

export default function middleware(request: NextRequest) {
  return i18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"]
};