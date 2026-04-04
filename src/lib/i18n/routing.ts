import { defineRouting } from "next-intl/routing"

export const languagesConfig = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "pl", label: "Polski", flag: "🇵🇱" },
] as const;

export const locales = languagesConfig.map(lang => lang.code);
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
});

export function isLocale(value: string): value is Locale {
  return routing.locales.includes(value as Locale);
}