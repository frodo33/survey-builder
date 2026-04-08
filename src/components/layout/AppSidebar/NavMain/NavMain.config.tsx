import { SquareTerminal, type LucideIcon } from "lucide-react"

import { ROUTES } from "@/lib/routes"

export type NavItemModel = {
  nameKey: string
  url: string
  icon?: LucideIcon
}

export const navConfig = [
  {
    nameKey: "dashboard",
    url: ROUTES.PRIVATE.DASHBOARD,
    icon: SquareTerminal,
  },
  {
    nameKey: "surveys",
    url: ROUTES.PRIVATE.SURVEYS,
    icon: SquareTerminal,
  },
  {
    nameKey: "settings",
    url: ROUTES.PRIVATE.SETTINGS,
    icon: SquareTerminal,
  },
]