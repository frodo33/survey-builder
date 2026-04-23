import { useQuery } from "@tanstack/react-query"

import { getSurveys } from "../../surveys.api"
import type { SurveyResponseModel } from "../../surveys.types"

export const useSurveys = () => useQuery<SurveyResponseModel[]>({
  queryKey: ["surveys"],
  queryFn: getSurveys,
  staleTime: 1000 * 60
})