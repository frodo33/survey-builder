import { getRequestConfig } from "next-intl/server";

import type { Locale } from "./routing";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  const resolvedLocale =
    locale && routing.locales.includes(locale as Locale)
      ? (locale as Locale)
      : (routing.defaultLocale as Locale);

  const messages = (await import(`./locales/${resolvedLocale}.ts`)).default;

  return {
    locale: resolvedLocale,
    messages
  };
});