"use client"
import dynamic from "next/dynamic";

import { LanguagePicker } from "@/components/shared/LanguagePicker/LanguagePicker.component"

import { NavMobile } from "../NavMobile/NavMobile.component"

const ThemePicker = dynamic(
  () => import("@/components/shared/ThemePicker/ThemePicker.component").then(mod => mod.ThemePicker),
  { ssr: false }
);

export function AppHeader() {
  return (
    <div className="bg-sidebar sticky top-0 z-50 flex h-14 items-center justify-between px-4">
      <div className="md:hidden">
        <NavMobile />
      </div>
  
      <div className="ml-auto flex items-center gap-4">
        <ThemePicker />
        <LanguagePicker />
      </div>
    </div>
  )
}