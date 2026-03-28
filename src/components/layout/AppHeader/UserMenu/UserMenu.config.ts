import type { TFunction } from "i18next"

import { Routes } from "@/routes/router/routes.config"

export type UserMenuItemModel = {
	path: string
	name: string
}

export const userMenuConfig = (t: TFunction): UserMenuItemModel[] => [
  {
    name: t("user:userMenu:profile"),
    path: Routes.PRIVATE.PROFILE,
  },
]