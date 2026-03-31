import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en"],
  defaultLocale: "en",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];

export function isValidLocale(locale: unknown): locale is Locale {
  return routing.locales.includes(locale as Locale);
}