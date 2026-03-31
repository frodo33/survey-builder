import type { en } from "@/lib/i18n/en";

declare module "next-intl" {
    type AppConfig = {
      Messages: typeof en;
    }
  }