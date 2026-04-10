import { useMutation } from "@tanstack/react-query"

import { useRouter } from "@/lib/i18n/navigation"
import { ROUTES } from "@/lib/routes"

import { loginWithEmail } from "../../auth.api"

export const useLogin = () => {
  const router = useRouter()

  return useMutation({
    mutationFn: loginWithEmail,
    onSuccess: () => router.push(ROUTES.PRIVATE.DASHBOARD)
  })
}