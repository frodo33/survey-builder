import { i18nMiddleware } from "./lib/i18n/middleware";

export default i18nMiddleware;

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)",],
};