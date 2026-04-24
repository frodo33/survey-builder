"use client"
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

import type { ViewVariant } from "../dashboard.types";
import { ListWrapper } from "./SurveysList.component";

const SurveyCardSkeleton = ({ view }: { view: ViewVariant }) => (
  <div className="border-border bg-card relative flex min-h-[160px] flex-col rounded-xl border p-5">
    <div className="flex-1">
      <Skeleton className={cn("bg-muted/10 mb-2 h-5", view === "list" ? "sm:w-1/4 w-3/4" : "w-3/4" )} />
      <Skeleton className={cn("bg-muted/10 mb-1.5 h-3", view === "list" ? "sm:w-2/4 w-full" : "w-full")} />
      <Skeleton className={cn("bg-muted/10 h-3", view === "list" ? "sm:w-2/6 w-5/6" : "w-5/6")} />
    </div>

    <div className={cn( "mt-4 flex items-center gap-2 sm:gap-4 justify-between sm:justify-start", view === "grid" && "sm:justify-between")}>
      <Skeleton className="bg-muted/10 h-3 w-16" />
      <div className="bg-muted/10 h-3 w-1 rounded-full" />
      <Skeleton className="bg-muted/10 h-3 w-16" />
      <div className="bg-muted/10 h-3 w-1 rounded-full" />
      <Skeleton className="bg-muted/10 h-3 w-16" />
    </div>
  </div>
);

export const SurveysListSkeleton = ({ view }: { view: ViewVariant }) => (
  <ListWrapper view={view}>
    {Array.from({ length: 6 }).map((_, i) => (
      <SurveyCardSkeleton key={i} view={view} />
    ))}
  </ListWrapper>
);