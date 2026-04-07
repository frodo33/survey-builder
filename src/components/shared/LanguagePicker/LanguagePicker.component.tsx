"use client"
import { ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/shared/Button/Button.component";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { languagesConfig } from "@/lib/i18n/routing";

export function LanguagePicker() {
  const t = useTranslations()
  const locale = useLocale();
  const currentLang = languagesConfig.find(lang => lang.code === locale) ?? languagesConfig[0];
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (nextLocale: string) => {
    router.replace(
      { pathname },
      { locale: nextLocale }
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <span aria-hidden="true" className="select-none">{currentLang.flag}</span>
          
          <span className="hidden items-center gap-2 lg:flex">
            {currentLang.label}
            <ChevronDown className="h-3 w-3 opacity-50" />
          </span>

          <span className="sr-only">{currentLang.label}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-[180px]">
        <DropdownMenuLabel>{t("common.languagePicker.label")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(locale) => handleLanguageChange(locale)}
        >
          {languagesConfig.map(lang => (
            <DropdownMenuRadioItem key={lang.code} value={lang.code}>
              {lang.flag} {lang.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
