import { getRequestConfig } from "next-intl/server";

import { en } from "./en";
import { routing, isValidLocale, type Locale } from "./routing";

const messages: Record<Locale, typeof en> = { en };

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale: Locale =
    requested && isValidLocale(requested)
      ? requested
      : routing.defaultLocale;

  return {
    locale,
    messages: messages[locale],
    timeZone: "Europe/Warsaw",
  };
});