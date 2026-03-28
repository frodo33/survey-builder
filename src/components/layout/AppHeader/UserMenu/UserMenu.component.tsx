import { Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

import { userMenuConfig } from "./UserMenu.config"
import { useLogout } from "@/api/auth/hooks/useLogout"
import { Button } from "@/components/common/Button/Button.component"
import { Typography } from "@/components/common/Typography/Typography.component"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/hooks/useTheme/useTheme"
import { useSelectUser } from "@/store/auth/auth.selectors"

export const UserMenu = () => {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const { email, username } = useSelectUser()
  const initials = username.slice(0,2)
  const userMenuItems = userMenuConfig(t)
  const { mutate } = useLogout()

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      await mutate()
    } catch {
      console.log("error")
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-9 w-9 rounded-full">
          {initials}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="bg-popover min-w-50 border-0 shadow-2xl backdrop-blur-lg">
        <DropdownMenuLabel className="flex items-center gap-4">
          <Button className="h-9 w-9 rounded-full">
            {initials}
          </Button>
          <div>
            <Typography variant="p">{username}</Typography>
            <Typography variant="small">{email}</Typography>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {userMenuItems.map(({ name, path }) => (
          <DropdownMenuItem asChild key={path}>
            <Link
              to={path}
              className="cursor-pointer"
            >
              {name}
            </Link>
          </DropdownMenuItem>
        ))}

        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Label className="flex cursor-pointer items-center gap-2">
            <Switch
              checked={theme === "dark"}
              onCheckedChange={toggleTheme}
              className="cursor-pointer"
            />
            {t("common:switchModeLabel")}
          </Label>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="hover:bg-destructive! cursor-pointer"
        >
          {t("user:logout")}          
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}