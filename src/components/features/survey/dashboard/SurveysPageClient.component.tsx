"use client"

import { useState } from "react";
import { Plus } from "lucide-react";

import type { ViewVariant } from "@/components/features/survey/dashboard/dashboard.types";
import { SurveysList } from "@/components/features/survey/dashboard/SurveysList/SurveysList.component";
import { SurveysToolbar } from "@/components/features/survey/dashboard/SurveysToolbar/SurveysToolbar.component";
import { Button } from "@/components/shared/Button/Button.component";
import { Typography } from "@/components/shared/Typography/Typography.component";

type SurveysPageClientProps = {
  initialView: ViewVariant;
};

const VIEW_COOKIE_NAME = "surveys_view";
const VIEW_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export const SurveysPageClient = ({ initialView }: SurveysPageClientProps) => {
  const [view, setView] = useState<ViewVariant>(initialView);
  const [search, setSearch] = useState("");

  const handleViewChange = (nextView: ViewVariant) => {
    setView(nextView);
    document.cookie = `${VIEW_COOKIE_NAME}=${nextView}; path=/; max-age=${VIEW_COOKIE_MAX_AGE}; samesite=lax`;
  };

  return (
    <>
      <div className="flex justify-between">
        <div>
          <Typography variant="h1">My surveys</Typography>
        </div>
        <Button size="lg">
          <Plus />
          New survey
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
