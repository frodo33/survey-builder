import type { ReactNode } from "react"

import { BuilderHeader } from "@/components/features/survey/survey-builder/BuilderHeader/BuilderHeader.component"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function BuilderLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarInset className="mx-auto max-w-7xl">
        <div className="bg-sidebar absolute flex h-full w-full flex-1 flex-col overflow-y-hidden">
          <BuilderHeader />
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
