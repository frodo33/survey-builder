"use client"

import type { LucideIcon } from "lucide-react";
import { LayoutGrid, List, Search } from "lucide-react";
import { useTranslations } from "next-intl";

import { TextField } from "@/components/controls/TextField/TextField.component";
import { Button } from "@/components/shared/Button/Button.component";
import { InputGroupAddon } from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

import type { ViewVariant } from "../dashboard.types";
import type { SurveysToolbarProps } from "./SurveysToolbar.types";

const VIEW_OPTIONS: { mode: ViewVariant; icon: LucideIcon }[] = [
  { mode: "grid", icon: LayoutGrid },
  { mode: "list", icon: List },
];

export const SurveysToolbar = ({ search, onSearchChange, view, onViewChange, isDisabled }: SurveysToolbarProps) => {
  const t = useTranslations("survey.dashboard.toolbar")

  return (
    <div className="mt-8 flex max-w-sm items-center gap-3">
      <TextField
        id="search-survey"
        value={search}
        onChange={e => onSearchChange(e.target.value)}
        placeholder={t("searchPlaceholder")}
        disabled={isDisabled}
        addons={( <InputGroupAddon align="inline-start"><Search /></InputGroupAddon> )}
      />
  
      <div className="border-border flex items-center rounded-lg border">
        {VIEW_OPTIONS.map(({ mode, icon: Icon }) => (
          <Button
            key={mode}
            variant="ghost"
            size="icon-sm"
            onClick={() => onViewChange(mode)}
            aria-pressed={view === mode}
            aria-label={t("viewMode", { mode: t(`modes.${mode}`) })}
            className={cn(
              "rounded-none p-2 transition-colors first:rounded-l-md last:rounded-r-md",
              view === mode
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="h-4 w-4" />
          </Button>  
        ))}
      </div>
    </div>
  )
}
