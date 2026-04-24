"use client"

import { useState } from "react";
import { useMutation } from "@tanstack/react-query"
import { Plus } from "lucide-react";

import type { ViewVariant } from "@/components/features/survey/dashboard/dashboard.types";
import { SurveysList } from "@/components/features/survey/dashboard/SurveysList/SurveysList.component";
import { SurveysToolbar } from "@/components/features/survey/dashboard/SurveysToolbar/SurveysToolbar.component";
import { Button } from "@/components/shared/Button/Button.component"
import { Typography } from "@/components/shared/Typography/Typography.component"
import { createClient } from "@/lib/supabase/client";

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
        throw new Error(error.message || "Failed to create survey")
      }

      return data
    },
    onSuccess: (data) => {
      console.log("Ankieta stworzona! ID:", data.id)
    },
    onError: (error) => {
      console.error("Błąd tworzenia ankiety:", error.message)
    }
  })
}

export default function SurveysPage() {
  const [view, setView] = useState<ViewVariant>("grid");
  const [search, setSearch] = useState("");
  // const { data: surveys, isLoading, isError, isFetching } = useSurveys()
  // const surveysTotal = surveys?.length && surveys?.length - 1

  // const filtered = surveys?.filter(s =>
  //   s.title.toLowerCase().includes(search.toLowerCase()) ||
  //   s.description?.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <>
      <div className="flex justify-between">
        <div>
          <Typography variant="h1">My surveys</Typography>
          {/* <Typography variant="p" className="text-muted-foreground mt-1">{surveysTotal} surveys total</Typography> */}
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
        onViewChange={setView}
        isDisabled={false}
      />

      <SurveysList
        search={search}
        view={view}
      />
    </>
  )
}
