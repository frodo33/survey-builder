import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Link } from "@/lib/i18n/navigation"
import { cn } from "@/lib/utils"

import type { NavItemModel } from "../NavMain/NavMain.config"

export const NavItem = ({ item }: { item: NavItemModel}) => {
  const isCollapsible = item?.items && item.items.length > 0
  // const { location: { pathname } } = useRouterState()
  // const { pathname } = usePath

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        tooltip={item.name}
        asChild
        size={"lg"}
        className={cn(
          "text-base text-sidebar-accent-foreground font-medium [&_svg]:size-5",
          "hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground dark:hover:bg-sidebar-accent/30",
          "data-[active=true]:bg-sidebar-accent/70 dark:data-[active=true]:bg-sidebar-accent/30 data-[active=true]:text-sidebar-accent-foreground",
        )}
      >
        <Link href={item.url} className="flex w-full items-center gap-3">
          <span className="flex aspect-square size-8 items-center justify-center rounded-sm">
            {item.icon && <item.icon />}
          </span>
          <span className="truncate">{item.name}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}