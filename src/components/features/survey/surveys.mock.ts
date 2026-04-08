export type SurveyStatus = "draft" | "active" | "closed";

export type Survey = {
  id: number;
  title: string;
  description: string;
  questionsCount: number;
  responsesCount: number;
  updatedAt: string;
  status: SurveyStatus;
}

export const SURVEYS_MOCK: Survey[] = [
  {
    id: 1,
    title: "Employee Engagement Survey",
    description: "Annual employee satisfaction and engagement assessment for the Q1 period.",
    questionsCount: 12,
    responsesCount: 87,
    updatedAt: "2024-03-03",
    status: "active"
  },
  {
    id: 2,
    title: "Product Feedback 2.0",
    description: "Gathering insights about the new dashboard features and user experience.",
    questionsCount: 5,
    responsesCount: 142,
    updatedAt: "2024-03-10",
    status: "active"
  },
  {
    id: 3,
    title: "Customer Onboarding",
    description: "Post-onboarding survey to improve our initial user journey.",
    questionsCount: 8,
    responsesCount: 0,
    updatedAt: "2024-03-12",
    status: "draft"
  },
  {
    id: 4,
    title: "Website Exit Intent",
    description: "Understanding why users leave the pricing page without conversion.",
    questionsCount: 3,
    responsesCount: 567,
    updatedAt: "2024-02-28",
    status: "closed"
  }
];