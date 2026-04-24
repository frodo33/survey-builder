"use client"
import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";

import { useSurveys } from "@/api/surveys/hooks/useSurveys/useSurveys";
import { Button } from "@/components/shared/Button/Button.component";
import { Link } from "@/lib/i18n/navigation";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

import type { ViewVariant } from "../dashboard.types";
import { SurveysListSkeleton } from "./SurveysList.skeleton";
import { SurveyCard } from "../SurveyCard/SurveyCard.component";
import { SurveysState } from "../SurveysState/SurveysState.component";

type SurveysListProps = {
  search: string
  view: ViewVariant
}

export const ListWrapper = ({ view, children }: { view: ViewVariant, children: ReactNode }) => (
  <div
    key={view}
    className={cn(
      "mt-8 w-full gap-4 grid grid-cols-1",
      view === "grid" && "md:grid-cols-2 xl:grid-cols-3"
    )}>
    {children}
  </div>
);

export const SurveysList = ({ search, view }: SurveysListProps) => {
  const t = useTranslations("survey.dashboard.states")
  const { data: surveys, isLoading, isError } = useSurveys();

  const filtered = surveys?.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.description?.toLowerCase().includes(search.toLowerCase())
  ) ?? [];

  if (isLoading) return <SurveysListSkeleton view={view} />;

  if (isError) return (
    <SurveysState
      title={t("error.title")}
      description={t("error.description")}
    />
  );

  if (surveys?.length === 0) return (
    <SurveysState
      title={t("empty.title")}
      description={t("empty.description")}
    >
      <Button
        size="lg"
        className="mt-8"
        asChild
      >
        <Link href={ROUTES.PRIVATE.SURVEY_NEW}>
          <Plus />
          {t("empty.button")}
        </Link>
      </Button>
    </SurveysState>
  )

  if (filtered.length === 0) return (
    <SurveysState
      title={t("noResults.title")}
      description={t("noResults.description", { search })}
    />
  )

  return (
    <ListWrapper view={view}>
      {filtered?.map((survey) => (
        <SurveyCard
          key={survey.id}
          survey={survey}
          view={view}
        />
      ))}
    </ListWrapper>
  );
};