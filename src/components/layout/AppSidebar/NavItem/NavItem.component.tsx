// import { useRouterState } from "@tanstack/react-router"
import { ChevronRight } from "lucide-react"

import type { NavItemModel } from "../NavMain/NavMain.config"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"

export const NavItem = ({ item }: { item: NavItemModel}) => {
  const isCollapsible = item?.items && item.items.length > 0
  // const { location: { pathname } } = useRouterState()
  // const { pathname } = usePath

  return (
    <Collapsible
      asChild
      className="group/collapsible"
    >
      {isCollapsible ? (
        <SidebarMenuItem>
          <CollapsibleTrigger asChild className="cursor-pointer">
            <SidebarMenuButton tooltip={item.name} asChild>
              {/* TODO: <Link to */}
              <a href={item.url}>
                {item.icon && <item.icon />}
                <span>{item.name}</span>
                {isCollapsible ? <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> : null}
              </a>
            </SidebarMenuButton>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <SidebarMenuSub>
              {item.items?.map((subItem) => (
                <SidebarMenuSubItem key={subItem.name}>
                  <SidebarMenuSubButton asChild>
                    <a href={subItem.url}>
                      <span>{subItem.name}</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      ) : (
        <SidebarMenuItem>
          <SidebarMenuButton tooltip={item.name} asChild
          // isActive={pathname === item.url}
          >
            <a href={item.url}>
              {item.icon && <item.icon />}
              <span>{item.name}</span>
              {isCollapsible ? <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> : null}
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      )}
    </Collapsible>
  )
}