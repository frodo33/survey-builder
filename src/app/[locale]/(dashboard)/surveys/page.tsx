"use client"

import { useEffect, useState } from "react"
import { IceCream } from "lucide-react"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"

import { TextField } from "@/components/controls/TextField/TextField.component"
import { Button } from "@/components/shared/Button/Button.component"
import { Typography } from "@/components/shared/Typography/Typography.component"
import { InputGroupAddon } from "@/components/ui/input-group"
// import { useTheme } from "@/hooks/useTheme"

export default function Page() {
  const variants = ["default", "destructive", "outline", "link"] as const
  const sizes = ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"] as const
  const Tvariants = ["h1", "h2", "h3", "p", "small"] as const
  const [value, setValue] = useState("")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    console.log("mounted");
  }, []);

  return (
    <>
      asdf
    </>
  )
}
