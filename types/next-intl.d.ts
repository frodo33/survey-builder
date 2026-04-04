import type { en } from "@/lib/i18n/locales/en";

declare module "next-intl" {
    type AppConfig = {
      Messages: typeof en;
    }
  }