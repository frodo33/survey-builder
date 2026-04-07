"use client"
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { Button } from "@/components/shared/Button/Button.component";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

import { themeOptions } from "./ThemePicker.config";

export function ThemePicker() {
  const t = useTranslations("common.themePicker")
  const { theme, setTheme } = useTheme()

  const currentTheme = 
    themeOptions.find((opt) => opt.value === theme) ?? 
    themeOptions.find((opt) => opt.value === "system")!;

  const CurrentThemeIcon = currentTheme.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <span aria-hidden="true" className="select-none"><CurrentThemeIcon className="h-4 w-4" /></span>
          
          <span className="hidden items-center gap-2 lg:flex">
            {t(currentTheme.label)}
            <ChevronDown className="h-3 w-3 opacity-50" />
          </span>

          <span className="sr-only">{t(currentTheme.label)}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-[180px]">
        <DropdownMenuLabel>{t("label")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={setTheme}
        >
          {themeOptions.map(option => (
            <DropdownMenuRadioItem
              key={option.value}
              value={option.value}
              className="flex items-center gap-2"
            >
              <option.icon className="h-4 w-4" />
              {t(option.label)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
