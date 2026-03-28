import { SquareTerminal, type LucideIcon } from "lucide-react"

import { archiveRoute } from "@/routes/pages/ArchivePage/Archive.route"
import { projectsRoute } from "@/routes/pages/ProjectsPage/Projects.route"

export type NavItemModel = {
  name: string
  url: string
  icon?: LucideIcon
  items?: Omit<NavItemModel, "items">[]
}

export const navMainConfig = (): NavItemModel[] => [
  {
    name: "Projekty",
    url: projectsRoute.to,
    icon: SquareTerminal,
    items: []
  },
  {
    name: "Archiwum",
    url: archiveRoute.to,
    icon: SquareTerminal,
    items: []
  },
]