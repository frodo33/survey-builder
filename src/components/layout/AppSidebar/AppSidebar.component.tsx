"use client"
import type { ComponentProps } from "react"

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar"

import { NavFooter } from "./NavFooter/NavFooter.component";
import { NavHeader } from "./NavHeader/NavHeader.component"
import { NavMain } from "./NavMain/NavMain.component"

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="group-data-[side=left]:border-accent group-data-[side=left]:border-r"
      collapsible="icon"
      {...props}
    >
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      
      <SidebarContent>
        <NavMain />
      </SidebarContent>

      <SidebarFooter>
        <NavFooter />
      </SidebarFooter>
    </Sidebar>
  )
}
