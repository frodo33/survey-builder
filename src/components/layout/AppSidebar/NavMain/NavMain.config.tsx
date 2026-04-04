import { SquareTerminal, type LucideIcon } from "lucide-react"

export type NavItemModel = {
  name: string
  url: string
  icon?: LucideIcon
  items?: Omit<NavItemModel, "items">[]
}

export const navMainConfig = (): NavItemModel[] => [
  {
    name: "Projekty",
    // url: projectsRoute.to,
    url: "/",
    icon: SquareTerminal,
    items: []
  },
  {
    name: "Archiwum",
    // url: archiveRoute.to,
    url: "/dashboard",
    icon: SquareTerminal,
    items: []
  },
]