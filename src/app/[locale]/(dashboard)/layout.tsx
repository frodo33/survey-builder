import type { ReactNode } from "react"
import { cookies } from "next/headers"

import { AppHeader } from "@/components/layout/AppHeader/AppHeader.component"
import { AppSidebar } from "@/components/layout/AppSidebar/AppSidebar.component"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

type DashboardLayoutProps = {
  children: ReactNode
}

const SIDEBAR_COOKIE_NAME = "sidebar_state"

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const cookieStore = await cookies()
  const sidebarCookie = cookieStore.get(SIDEBAR_COOKIE_NAME)?.value
  const defaultSidebarOpen = sidebarCookie === "true" ? true : sidebarCookie === "false" ? false : true

  return (
    <SidebarProvider defaultOpen={defaultSidebarOpen}>
      <AppSidebar />
      <SidebarInset className="mx-auto max-w-7xl">
        <div className="bg-sidebar absolute flex h-full w-full flex-1 flex-col overflow-y-hidden">
          <AppHeader />
          <main className="bg-background scrollbar-subtle mx-4 mb-4 flex flex-1 flex-col overflow-scroll rounded-lg p-4 lg:p-8">
            {children}
          </main>  
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
