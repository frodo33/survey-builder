import { SidebarGroup, SidebarMenu } from "@/components/ui/sidebar"

import { navConfig } from "./NavMain.config"
import { NavItem } from "../NavItem/NavItem.component"

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarMenu className="space-y-2">
        {navConfig.map((item) => (
          <NavItem
            key={item.url}
            item={item}
          />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
