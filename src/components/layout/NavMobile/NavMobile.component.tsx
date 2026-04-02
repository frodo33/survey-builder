"use client"
import { useEffect, useState } from "react"
import { LogOutIcon, MenuIcon  } from "lucide-react"

import { Button } from "@/components/shared/Button/Button.component"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

import { NavItem } from "../AppSidebar/NavItem/NavItem.component"
import { navMainConfig } from "../AppSidebar/NavMain/NavMain.config"

export const NavMobile = () => {
  const navItems = navMainConfig()
  // const { mutate } = useLogout()
  // const handleLogout = () => mutate()
  const handleLogout = () => {}
  useEffect(() => {
    console.log("SheetContent mounted")
  }, [])

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
          <SheetTitle>Your car</SheetTitle>
          <SheetDescription>
                  some car
          </SheetDescription>
        </SheetHeader>

        <nav className="flex-1 px-4">
          <ul>
            {navItems.map((item) => (
              <SheetClose asChild key={item.url}>
                <NavItem
                  item={item}
                />
              </SheetClose>
            ))}
          </ul>
        </nav>

        <SheetFooter className="flex-row-reverse">
          <Button
            variant="outline"
            onClick={handleLogout}
          >
            <LogOutIcon />
            Log out
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}