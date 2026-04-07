import { useTranslations } from "next-intl";

import LoginForm from "@/components/features/auth/LoginForm/LoginForm.component";
import { Button } from "@/components/shared/Button/Button.component";
import { Typography } from "@/components/shared/Typography/Typography.component";
import { Link } from "@/lib/i18n/navigation";
import { ROUTES } from "@/lib/routes";

export default function LoginPage() {
  const t = useTranslations()

  return (
    <div className="flex flex-1 items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center lg:text-left">
          <Typography variant="h1">{t("auth.login.form.title")}</Typography>
          <Typography
            variant="p"
            className="text-muted-foreground mt-1"
          >
            {t("auth.login.form.subtitle")}
          </Typography>
        </div>

        <LoginForm />

        <Typography variant="p" className="text-muted-foreground text-center">
          {t("auth.login.form.noAccount")}&nbsp;
          <Button variant="link" asChild>
            <Link href={ROUTES.PUBLIC.REGISTER}>{t("auth.login.form.registerLink")}</Link>
          </Button>
        </Typography>
      </div>
    </div>
  );
}