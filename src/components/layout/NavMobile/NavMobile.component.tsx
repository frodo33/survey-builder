"use client"
import { MenuIcon } from "lucide-react"
import { useTranslations } from "next-intl"

import { Button } from "@/components/shared/Button/Button.component"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import { navConfig } from "../Navigation/nav.config"
import { NavHeader } from "../Navigation/NavHeader/NavHeader.component"
import { NavItem } from "../Navigation/NavItem/NavItem.component"

export function NavMobile() {
  const t = useTranslations("nav.header")

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon-lg"
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left" 
        className="bg-sidebar"
      >
        <SheetHeader>
          <div className="sr-only">
            <SheetTitle>{t("title")}</SheetTitle>
            <SheetDescription>
              {t("subtitle")}
            </SheetDescription>
          </div>

          <NavHeader />
        </SheetHeader>

        <nav className="flex-1 px-4">
          <ul>
            {navConfig.map((item) => (
              <SheetClose asChild key={item.url}>
                <NavItem item={item} />
              </SheetClose>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}