"use client"

import { useState } from "react";
import { LayoutGrid, List, Plus, Search } from "lucide-react";

import { TextField } from "@/components/controls/TextField/TextField.component";
import { SurveyCard } from "@/components/features/survey/SurveyCard/SurveyCard.component"
import { SURVEYS_MOCK } from "@/components/features/survey/surveys.mock";
import { Button } from "@/components/shared/Button/Button.component"
import { Typography } from "@/components/shared/Typography/Typography.component"
import { InputGroupAddon } from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

export default function SurveysPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");

  const filtered = SURVEYS_MOCK.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-between">
        <div>
          <Typography variant="h1">My surveys</Typography>
          <Typography variant="p" className="text-muted-foreground mt-1">4 surveys total</Typography>
        </div>
        <Button size="lg">
          <Plus />
          New survey
        </Button>
      </div>

      <div className="mt-8 flex max-w-sm items-center gap-3">
        <TextField
          id="search-survey"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search surveys..."
          addons={(
            <InputGroupAddon align={"inline-start"}><Search /></InputGroupAddon>
          )}
        />
        <div className="border-border flex items-center rounded-lg border">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setView("grid")}
            className={`rounded-l-lg rounded-r-none p-2 transition-colors ${view === "grid" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setView("list")}
            className={`rounded-l-none rounded-r-lg p-2 transition-colors ${view === "list" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className={cn(
        "mt-8",
        view === "grid"
          ? "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
          : "space-y-3"
      
      )}>
        {filtered.map(survey => (
          <SurveyCard
            key={survey.id}
            survey={survey}
          />
        ))}
      </div>
    </>
  )
}
