import { Home } from "lucide-react"

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

export const NavHeader = () => (
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton
        isActive={false}
        size="lg"
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <div className="bg-primary-gradient text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-sm">
          <Home className="size-4" />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam dolor consequuntur enim officiis aspernatur perferendis tempore incidunt officia obcaecati?</span>
          <span className="truncate text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab quibusdam esse et placeat praesentium ad totam, dolore natus amet? Saepe?</span>
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
)
