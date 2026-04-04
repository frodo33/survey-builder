import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing, isLocale } from "./routing";

const intlMiddleware = createMiddleware(routing);

export function i18nMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);

  const firstSegment = segments[0];

  if (firstSegment && !isLocale(firstSegment)) {
    const url = request.nextUrl.clone();

    url.pathname = `/${routing.defaultLocale}/${segments.slice(1).join("/")}`;

    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}