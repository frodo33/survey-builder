"use client"
import { ArrowLeftIcon } from "lucide-react"

import { Button } from "@/components/shared/Button/Button.component"
import { LanguagePicker } from "@/components/shared/LanguagePicker/LanguagePicker.component"
import { ThemePicker } from "@/components/shared/ThemePicker/ThemePicker.component"
import { Link } from "@/lib/i18n/navigation"
import { ROUTES } from "@/lib/routes"

export const BuilderHeader = () => (
  <div className="bg-sidebar sticky top-0 z-50 flex h-14 items-center justify-between px-4">
    <Button size="icon-lg" variant="ghost" asChild>
      <Link href={ROUTES.PRIVATE.SURVEYS}>
        <ArrowLeftIcon />
      </Link>
    </Button>
    
    <div className="ml-auto flex items-center gap-4">
      <ThemePicker />
      <LanguagePicker />
    </div>
  </div>
)
