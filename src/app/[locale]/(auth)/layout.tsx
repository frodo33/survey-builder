import type { ReactNode } from "react";
import { FileText } from "lucide-react";
import { useTranslations } from "next-intl";

import { AuthTopBar } from "@/components/layout/AuthTopBar/AuthTopBar.component";
import { Typography } from "@/components/shared/Typography/Typography.component";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const t = useTranslations()

  return (
    <div className="bg-background flex min-h-dvh">
      <AuthTopBar />

      <div className="bg-primary relative hidden items-center justify-center overflow-hidden lg:flex lg:w-1/2">
        <div className="relative z-10 max-w-md px-8 text-center">
          <div className="bg-primary-foreground/20 mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl">
            <FileText className="text-primary-foreground h-8 w-8" />
          </div>

          <Typography variant="h1" as="h2" className="text-primary-foreground mb-4">
            {t("auth.login.marketing.title")}
          </Typography>

          <Typography variant="p" className="text-secondary text-base">
            {t("auth.login.marketing.subtitle")}
          </Typography>
        </div>

        <div className="bg-primary-foreground/5 absolute -bottom-20 -left-20 h-64 w-64 rounded-full" />
        <div className="bg-primary-foreground/5 absolute -top-10 -right-10 h-40 w-40 rounded-full" />
      </div>

      {children}
    </div>
  );
}