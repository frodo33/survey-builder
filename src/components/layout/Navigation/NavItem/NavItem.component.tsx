import { useTranslations } from "next-intl"

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Link, usePathname } from "@/lib/i18n/navigation"
import { cn } from "@/lib/utils"

import type { NavItemModel } from "../nav.config"

export function NavItem({ item, ...props }: { item: NavItemModel}) {
  const t = useTranslations("nav.items")
  const pathname = usePathname()
  const isActive = item.url === "/" 
    ? pathname === "/" 
    : pathname.startsWith(item.url)

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        tooltip={t(item.nameKey)}
        isActive={isActive}
        size="lg"
        {...props}
        className={cn(
          "text-base text-sidebar-accent-foreground font-medium [&_svg]:size-5",
          "hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground dark:hover:bg-sidebar-accent/30",
          "data-[active=true]:bg-sidebar-accent/70 dark:data-[active=true]:bg-sidebar-accent/30 data-[active=true]:text-sidebar-accent-foreground",
        )}
      >
        <Link href={item.url} className="flex w-full items-center gap-3">
          <span className="flex aspect-square size-8 items-center justify-center rounded-sm">
            {item.icon && <item.icon aria-hidden="true" />}
          </span>
          <span className="truncate">{t(item.nameKey)}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}