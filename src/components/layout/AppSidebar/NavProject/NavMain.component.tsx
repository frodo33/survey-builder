import { navMainConfig } from "./NavMain.config"
import { NavItem } from "../NavItem/NavItem.component"
import { SidebarGroup, SidebarGroupLabel, SidebarMenu } from "@/components/ui/sidebar"

export const NavMain = () => {
  const navItems = navMainConfig()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Workspace</SidebarGroupLabel>
      <SidebarMenu>
        {navItems.map((item) => (
          <NavItem
            key={item.url}
            item={item}
          />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
