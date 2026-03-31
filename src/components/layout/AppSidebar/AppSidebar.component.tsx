"use client";

import type { ComponentProps } from "react"
import { ChevronLeft } from "lucide-react"

import { NavHeader } from "./NavHeader/NavHeader.component"
import { NavMain } from "./NavMain/NavMain.component"
import { Separator } from "@/components/ui/separator"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"

export const AppSidebar = ({ ...props }: ComponentProps<typeof Sidebar>) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      
      <SidebarContent>
        <NavMain />

        <div className="px-4">
          <Separator />
        </div>

        {/* <NavMain /> */}
      </SidebarContent>

      <SidebarFooter>
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
                <ChevronLeft className="size-4" />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
