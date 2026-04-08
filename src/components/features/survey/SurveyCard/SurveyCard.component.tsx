import type { Survey } from "../surveys.mock";

type SurveyCardProps = {
  survey: Survey;
}

export function SurveyCard({ survey }: SurveyCardProps) {
  return (
    <div className="group border-border bg-card shadow-card hover:shadow-elevated hover:border-primary/20 animate-fade-in relative rounded-xl border p-5 transition-all duration-300">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex items-center gap-2">
            <h3 className="text-card-foreground truncate text-sm font-semibold">{survey.title}</h3>
          </div>
          <p className="text-muted-foreground mb-3 line-clamp-2 text-xs">{survey.description}</p>
          <div className="text-muted-foreground flex items-center gap-4 text-xs">
            <span>{survey.questionsCount} questions</span>
            <span>{survey.responsesCount} responses</span>
            <span>Updated {survey.updatedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}