import { FileText } from "lucide-react"
import { useTranslations } from "next-intl"

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

export function NavHeader() {
  const t = useTranslations("nav.header")
  
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          size="lg"
          className="cursor-default shadow-none select-none hover:bg-transparent active:bg-transparent"
        >
          <div>
            <div className="bg-primary-gradient text-sidebar-primary-foreground pointer-events-none flex aspect-square size-8 items-center justify-center rounded-sm">
              <FileText className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{t("title")}</span>
              <span className="truncate text-xs">{t("subtitle")}</span>
            </div>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
