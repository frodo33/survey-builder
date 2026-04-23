export type SurveyResponseModel = {
  id: string
  title: string
  description?: string
  isPublished: boolean
  answersCount: number
  questionsCount: number
  updatedAt: string
}