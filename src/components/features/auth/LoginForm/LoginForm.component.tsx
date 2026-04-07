"use client"
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useTranslations } from "next-intl";
import { FormProvider, useForm } from "react-hook-form";

import { TextFieldController } from "@/components/controls/TextField/TextFieldController.component";
import { Button } from "@/components/shared/Button/Button.component";
import { InputGroupAddon } from "@/components/ui/input-group";
import { Link } from "@/lib/i18n/navigation";
import { ROUTES } from "@/lib/routes";

export default function LoginForm() {
  const t = useTranslations()
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onSubmit",
  })

  const handleSubmit = form.handleSubmit(async ({ email, password }) => {
    console.log("values", email, password)
  })

  return (

    <FormProvider {...form}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextFieldController
          type="email"
          name="email"
          label={t("auth.login.form.emailLabel")}
          placeholder="name@example.com"
          addons={(
            <InputGroupAddon align="inline-start">
              <Mail />
            </InputGroupAddon>
          )}
        />

        <div className="flex flex-col">
          <TextFieldController
            type={showPassword ? "text" : "password"}
            name="password"
            label={t("auth.login.form.passwordLabel")}
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

          <Button
            asChild
            variant="link"
            className="text-muted-foreground mt-1 ml-auto text-xs"
          >
            <Link href={ROUTES.PUBLIC.FORGOT_PASSWORD}>
              {t("auth.login.form.forgotPassword")}
            </Link>
          </Button>
        </div>

        <Button
          size="lg"
          type="submit"
          className="w-full"
        >
          {t("auth.login.form.submit")}
        </Button>
      </form>
    </FormProvider>
  );
}