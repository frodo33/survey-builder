"use client"

import { useState } from "react";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";

import type { ViewVariant } from "@/components/features/survey/dashboard/dashboard.types";
import { SurveysList } from "@/components/features/survey/dashboard/SurveysList/SurveysList.component";
import { SurveysToolbar } from "@/components/features/survey/dashboard/SurveysToolbar/SurveysToolbar.component";
import { Button } from "@/components/shared/Button/Button.component";
import { Typography } from "@/components/shared/Typography/Typography.component";
import { Link } from "@/lib/i18n/navigation";
import { ROUTES } from "@/lib/routes";

type SurveysPageClientProps = {
  initialView: ViewVariant;
};

const VIEW_COOKIE_NAME = "surveys_view";
const VIEW_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export const SurveysPageClient = ({ initialView }: SurveysPageClientProps) => {
  const t = useTranslations("survey.dashboard.header")
  const [view, setView] = useState<ViewVariant>(initialView);
  const [search, setSearch] = useState("");

  const handleViewChange = (nextView: ViewVariant) => {
    setView(nextView);
    document.cookie = `${VIEW_COOKIE_NAME}=${nextView}; path=/; max-age=${VIEW_COOKIE_MAX_AGE}; samesite=lax`;
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Typography variant="h1">{t("title")}</Typography>
        <Button size="lg" asChild>
          <Link href={ROUTES.PRIVATE.SURVEY_NEW}>
            <Plus />
            <span className="hidden sm:inline">{t("createButton")}</span>
          </Link>
        </Button>
      </div>

      <SurveysToolbar
        search={search}
        onSearchChange={setSearch}
        view={view}
        onViewChange={handleViewChange}
        isDisabled={false}
      />

      <SurveysList
        search={search}
        view={view}
      />
    </>
  );
};
