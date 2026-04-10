"use client"
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useTranslations } from "next-intl";
import { FormProvider, useForm } from "react-hook-form";

import { registerAction } from "@/actions/register";
import { useRegister } from "@/api/auth/hooks/useRegister/useRegister";
import { TextFieldController } from "@/components/controls/TextField/TextFieldController.component";
import { Button } from "@/components/shared/Button/Button.component";
import { InputGroupAddon } from "@/components/ui/input-group";

export default function RegisterForm() {
  const t = useTranslations()
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, mutateAsync, isPending, error } = useRegister()

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
  })

  const handleSubmit = form.handleSubmit(async ({ email, password }) => {
    mutate({ email, password })
    try {
      // await mutateAsync({ email, password })
    } catch(e) {}
  })

  console.log("ERRRRRRRRRRROR", error)
  return (

    <FormProvider {...form}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextFieldController
          type="email"
          name="email"
          label={t("auth.register.form.emailLabel")}
          placeholder="name@example.com"
          addons={(
            <InputGroupAddon align="inline-start">
              <Mail />
            </InputGroupAddon>
          )}
        />

        <TextFieldController
          type={showPassword ? "text" : "password"}
          name="password"
          label={t("auth.register.form.passwordLabel")}
          placeholder="••••••••"
          addons={(
            <>
              <InputGroupAddon align="inline-start">
                <Lock />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <Button
                  variant="link"
                  size="icon"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </Button>
              </InputGroupAddon>
            </>
                
          )}
        />

        <TextFieldController
          type="password"
          name="confirmPassword"
          label={t("auth.register.form.confirmPasswordLabel")}
          placeholder="••••••••"
          addons={(
            <>
              <InputGroupAddon align="inline-start">
                <Lock />
              </InputGroupAddon>
            </>
                
          )}
        />

        <Button
          size="lg"
          type="submit"
          className="mt-4 w-full"
        >
          {t("auth.register.form.submit")}
        </Button>
      </form>
    </FormProvider>
  );
}