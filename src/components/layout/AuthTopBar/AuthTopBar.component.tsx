"use client"
import { Moon, Sun, Monitor, Globe, ChevronDown, FileText, Flag } from "lucide-react";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";

import { Button } from "@/components/shared/Button/Button.component";
import { Typography } from "@/components/shared/Typography/Typography.component";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { languagesConfig } from "@/lib/i18n/routing";

// import { useLanguage } from "@/hooks/useLanguage";
// import { useTheme } from "@/hooks/useTheme";

const themeOptions = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

const languageOptions = [
  { value: "en", label: "English", flag: "🇬🇧" },
  { value: "pl", label: "Polski", flag: "🇵🇱" },
] as const;

export function AuthTopBar() {
  const { theme, setTheme } = useTheme()
  //   const { lang, setLang } = useLanguage();
  const lang = "en"
  const setLang = () => {}
  const mode = "dark"
  const setMode = () => {}

  const currentTheme = themeOptions.find(o => o.value === mode)!;
  const CurrentThemeIcon = currentTheme.icon;
  const currentLang = languageOptions.find(o => o.value === lang)!;

  const router = useRouter();
  const pathname = usePathname();
  // const params = useParams();
  const locale = useLocale();

  console.log(locale, "LOCALE")

  const handleLanguageChange = (nextLocale: string) => {
    console.log(nextLocale, "LELELEL")
    // router.replace(
    //   { pathname, params },
    //   { locale: nextLocale }
    // );

    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="fixed z-20 flex w-full justify-end gap-1 py-2 pr-2 pl-4">
      <div className="mr-auto flex items-center justify-center gap-3 lg:hidden">
        <Typography variant="h3">
          FormFlow
        </Typography>
      </div>

      <div className="flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 border-none shadow-none">
              <div aria-hidden="true" className="select-none">{currentLang.flag}</div>
              <div className="hidden items-center gap-2 lg:flex">
                {currentLang.label}
                <ChevronDown className="h-3 w-3 opacity-50" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-[180px]">
            <DropdownMenuLabel>Language</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={locale}
              onValueChange={(v) => {
                console.log("v", v)
                handleLanguageChange(v)
              }}>
              {languagesConfig.map(lang => (
                <DropdownMenuRadioItem key={lang.code} value={lang.code}>
                  {lang.flag} {lang.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 border-none shadow-none">
              <div aria-hidden="true" className="select-none"><CurrentThemeIcon className="h-4 w-4" /></div>
              <div className="hidden items-center gap-2 lg:flex">
                {currentTheme.label}
                <ChevronDown className="h-3 w-3 opacity-50" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-[180px]">
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={mode} onValueChange={(v) => setTheme(v as "light" | "dark" | "system")}>
              {themeOptions.map(o => (
                <DropdownMenuRadioItem key={o.value} value={o.value} className="flex items-center gap-2">
                  <o.icon className="h-4 w-4" />
                  {o.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
