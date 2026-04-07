import { getTranslations } from "next-intl/server";

import AuthHeroSection from "@/components/features/auth/AuthHeroSection/AuthHeroSection.component";
import RegisterForm from "@/components/features/auth/RegisterForm/RegisterForm.component";
import { Button } from "@/components/shared/Button/Button.component";
import { Typography } from "@/components/shared/Typography/Typography.component";
import { Link } from "@/lib/i18n/navigation";
import { ROUTES } from "@/lib/routes";

export default async function RegisterPage() {
  const t = await getTranslations()

  return (
    <>
      <AuthHeroSection scope="register" />

      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm space-y-8">
          <div className="text-center lg:text-left">
            <Typography variant="h1">{t("auth.register.form.title")}</Typography>
            <Typography
              variant="p"
              className="text-muted-foreground mt-1"
            >
              {t("auth.register.form.subtitle")}
            </Typography>
          </div>

          <RegisterForm />

          <Typography variant="p" className="text-muted-foreground text-center">
            {t("auth.register.form.haveAccount")}&nbsp;
            <Button variant="link" asChild>
              <Link href={ROUTES.PUBLIC.LOGIN}>{t("auth.register.form.loginLink")}</Link>
            </Button>
          </Typography>
        </div>
      </div>
    </>
  );
}