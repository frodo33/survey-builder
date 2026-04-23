"use client"

import { useState } from "react";
import { useMutation } from "@tanstack/react-query"
import { ClipboardList, LayoutGrid, LayoutPanelTop, List, Plus, Search } from "lucide-react";

import { useSurveys } from "@/api/surveys/hooks/useSurveys/useSurveys";
import { TextField } from "@/components/controls/TextField/TextField.component";
import { SurveyCard } from "@/components/features/survey/SurveyCard/SurveyCard.component"
import { SURVEYS_MOCK } from "@/components/features/survey/surveys.mock";
import SurveysEmptyState from "@/components/features/survey/SurveysEmptyState/SurveysEmptyState.component";
import { Button } from "@/components/shared/Button/Button.component"
import { Typography } from "@/components/shared/Typography/Typography.component"
import { typographyVariants } from "@/components/shared/Typography/Typography.styles";
import { InputGroupAddon } from "@/components/ui/input-group";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";

// Definicja typu danych wejściowych (zgodna z tym, co przyjmuje Edge Function)
type SurveyPayload = {
  title: string
  description: string
  questions: {
    type: "text" | "long_text" | "choice" | "yes_no" | "rating"
    text: string
    order: number
    options?: string[]
  }[]
}

export const useCreateSurvey = () => {
  const supabase = createClient()

  return useMutation({
    mutationFn: async (payload: SurveyPayload) => {
      const { data, error } = await supabase.functions.invoke("create-survey", {
        body: payload,
      })

      if (error) {
        // Supabase functions zwracają błędy w specyficzny sposób
        throw new Error(error.message || "Failed to create survey")
      }

      return data // Zwróci { id: "uuid-ankiety" }
    },
    onSuccess: (data) => {
      console.log("Ankieta stworzona! ID:", data.id)
      // Tutaj możesz np. przekierować usera: router.push(`/editor/${data.id}`)
    },
    onError: (error) => {
      console.error("Błąd tworzenia ankiety:", error.message)
    }
  })
}

export default function SurveysPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");
  const { data: surveys, isLoading, isError, isFetching } = useSurveys()
  const surveysTotal = surveys?.length && surveys?.length - 1

  const filtered = surveys?.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.description?.toLowerCase().includes(search.toLowerCase())
  );

  const { mutate, isPending } = useCreateSurvey()

  // const handleSave = () => {
  //   // Przykładowe dane z Twojego stanu formularza
  //   const mockData = {
  //     title: "Ankieta Satysfakcji 2024",
  //     description: "Daj nam znać co myślisz",
  //     questions: [
  //       { type: "text", text: "Jak masz na imię?", order: 1 },
  //       { type: "rating", text: "Oceń nas", order: 2 }
  //     ]
  //   }

  //   mutate(mockData)
  // }

  return (
    <>
      <div className="flex justify-between">
        <div>
          <Typography variant="h1">My surveys</Typography>
          <Typography variant="p" className="text-muted-foreground mt-1">{surveysTotal} surveys total</Typography>
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
          disabled={true}
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

      {/* <div className={cn(
        "mt-8",
        view === "grid"
          ? "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
          : "space-y-3"
      
      )}>
        {filtered?.map(survey => (
          <SurveyCard
            key={survey.id}
            survey={survey}
          />
        ))}
      </div> */}

      <SurveysEmptyState />
    </>
  )
}
