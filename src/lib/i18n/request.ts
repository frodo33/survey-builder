import { getRequestConfig } from "next-intl/server"

import { en } from "./en";
import { routing, isValidLocale, type Locale } from "./routing";

const messages: Record<Locale, typeof en> = {
  en
};

export default getRequestConfig(async ({ requestLocale }: { requestLocale: Promise<string | undefined> }) => {
  const requested = await requestLocale;

  const locale =
    requested && isValidLocale(requested)
      ? requested
      : routing.defaultLocale;

  return {
    locale,
    messages: messages[locale]
  };
});