import { useMutation } from "@tanstack/react-query"
import { useTranslations } from "next-intl"

import { redirect, useRouter } from "@/lib/i18n/navigation"
import { ROUTES } from "@/lib/routes"

import { loginWithEmail, registerWithEmail } from "../../auth.api"

export const useRegister = () => {
  const t = useTranslations()
  const router = useRouter()

  return useMutation({
    mutationFn: registerWithEmail,
    onSuccess: async (_data, variables) => {
      try {
        await loginWithEmail({
          email: variables.email,
          password: variables.password,
        })
  
        router.push(ROUTES.PRIVATE.DASHBOARD);
      } catch {
        // toast.error(t("errors:unexpected"))
        // redirect({ to: Routes.PUBLIC.LOGIN })
      }
    }
  })
}