"use client"
import { useState } from "react";
// import { Link } from 'react-router-dom';
import { FileText, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useTranslations } from "next-intl";
import { FormProvider, useForm } from "react-hook-form";

import { TextFieldController } from "@/components/controls/TextField/TextFieldController.component";
import { Button } from "@/components/shared/Button/Button.component";
import { Input } from "@/components/ui/input";
import { InputGroupAddon } from "@/components/ui/input-group";
import { Link } from "@/lib/i18n/navigation";
// import { useToast } from '@/hooks/use-toast';
// import { motion } from 'framer-motion';

export default function LoginPage() {
  const t = useTranslations("common")
  // const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginFormState>({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onSubmit",
    // resolver: useYupResolver(LoginFormSchema)
  })

  const handleSubmit = form.handleSubmit(async ({ email, password }) => {
    console.log(email, password, "values")
    try {
      // await mutateAsync({ email, password })
      
    } catch(err) {
      // const error = err as ApiErrorResponse

      // if (error.code === "invalid_credentials") {
      //   toast.error(t("errors:validation:invalid_credentials"))
      //   return
      // }

      // toast.error(t("errors:unexpected"))
    }
  })

  return (
    <div className="flex flex-1 items-center justify-center px-6 py-12">
      <div
        //   initial={{ opacity: 0, y: 20 }}
        //   animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm space-y-8"
      >
        {/* Mobile logo */}
        {/* <div className="flex items-center justify-center gap-3 lg:hidden">
          <div className="bg-gradient-primary flex h-10 w-10 items-center justify-center rounded-xl">
            <FileText className="text-primary-foreground h-5 w-5" />
          </div>
          <span className="text-foreground text-xl font-bold">FormFlow</span>
        </div> */}

        <div className="text-center lg:text-left">
          <h1 className="text-foreground text-2xl font-bold">{t("signIn")}</h1>
          <p className="text-muted-foreground mt-1 text-sm">Enter your credentials to access your account</p>
        </div>

        <FormProvider {...form}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextFieldController
              type="email"
              name="email"
              // label={t("user:emailLabel")}
              label="email"
              placeholder="you@example.com"
              addons={(
                <InputGroupAddon align="inline-start">
                  <Mail />
                </InputGroupAddon>
              )}
              // disabled={isPending}
            />

            <div className="flex flex-col">
              <TextFieldController
                type={showPassword ? "text" : "password"}
                name="password"
                label="email"
                placeholder="••••••••"
                addons={(
                  <>
                    <InputGroupAddon align="inline-start">
                      <Lock />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </InputGroupAddon>
                  </>
                
                )}
              />

              <Button
                asChild
                variant="link"
                className="text-muted-foreground mt-1 ml-auto text-xs"
              >
                <Link href="/forgot-password">
                  Forgot password?
                </Link>
              </Button>
            </div>

            <Button size="lg" type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in…" : "Sign in"}
            </Button>
          </form>
        </FormProvider>

        <p className="text-muted-foreground text-center text-sm">
            Don't have an account?{" "}
          <Button variant="link" asChild>
            <Link href="/register">Create one</Link>
          </Button>
        </p>
        
      </div>
    </div>
  );
}