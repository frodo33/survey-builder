import { useFormatter, useNow, useTranslations } from "next-intl";

import type { SurveyResponseModel } from "@/api/surveys/surveys.types";
import { Typography } from "@/components/shared/Typography/Typography.component";
import { cn } from "@/lib/utils";

import type { ViewVariant } from "../dashboard.types";

type SurveyCardProps = {
  survey: SurveyResponseModel;
  view: ViewVariant
}

export const SurveyCard = ({ survey, view }: SurveyCardProps) => {
  const t = useTranslations("survey.dashboard.card")
  const format = useFormatter()
  const now = useNow()

  const formattedDate = format.relativeTime(new Date(survey.updatedAt), now);

  return (
    <div className="group border-border bg-card shadow-card hover:shadow-elevated hover:border-primary/20 animate-in fade-in slide-in-from-bottom-2 relative flex min-h-[160px] flex-col rounded-xl border p-5 transition-all duration-300">
      <div className="mb-1.5 flex items-center gap-2">
        <Typography variant="h3" className="text-card-foreground truncate text-sm font-semibold">
          {survey.title}
        </Typography>
      </div>

      {survey.description && (
        <Typography variant="small" className="text-muted-foreground mb-3 line-clamp-2">
          {survey.description}
        </Typography>
      )}

      <div className={cn(
        "text-muted-foreground mt-auto flex items-center gap-4 text-xs",
        view === "grid" && "justify-between"
      )}>
        <Typography variant="small" className="whitespace-nowrap">
          {t("questionsCount", { count: survey.questionsCount })}
        </Typography>

        <span className="text-muted-foreground/30 font-light">•</span>
        
        <Typography variant="small" className="whitespace-nowrap">
          {t("responsesCount", { count: survey.answersCount })}
        </Typography>

        <span className="text-muted-foreground/30 font-light">•</span>

        <Typography variant="small" className="whitespace-nowrap">
          {formattedDate}
        </Typography>
      </div>
    </div>
  );
}