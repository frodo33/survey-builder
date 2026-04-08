import { ChevronLeft } from "lucide-react"

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export function NavFooter() {
  const { toggleSidebar, state } = useSidebar()
  
  return (
    <SidebarMenu>
      <SidebarMenuItem
        onClick={toggleSidebar}
        className="ml-auto"
      >
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-sm">
            <ChevronLeft className={cn(
              "size-4 transition-transform duration-200",
              state === "collapsed" && "rotate-180"
            )} />
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
