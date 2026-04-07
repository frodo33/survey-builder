import { FileText } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Typography } from "@/components/shared/Typography/Typography.component";

type AuthHeroSectionScopeType = "login" | "register"

export default async function AuthHeroSection({ scope }: { scope: AuthHeroSectionScopeType }) {
  const t = await getTranslations(`auth.${scope}.marketing`)

  return (
    <div className="bg-primary relative hidden items-center justify-center overflow-hidden lg:flex lg:w-1/2">
      <div className="relative z-10 max-w-md px-8 text-center">
        <div className="bg-primary-foreground/20 mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl">
          <FileText className="text-primary-foreground h-8 w-8" />
        </div>

        <Typography variant="h1" as="h2" className="text-primary-foreground mb-4">
          {t("title")}
        </Typography>

        <Typography variant="p" className="text-secondary text-base">
          {t("subtitle")}
        </Typography>
      </div>

      <div className="bg-primary-foreground/5 absolute -bottom-20 -left-20 h-64 w-64 rounded-full" />
      <div className="bg-primary-foreground/5 absolute -top-10 -right-10 h-40 w-40 rounded-full" />
    </div>
  );
}