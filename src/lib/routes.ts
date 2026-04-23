export const ROUTES = {
  PUBLIC: {
    LOGIN: "/login",
    REGISTER: "/register",
  },
  PRIVATE: {
    DASHBOARD: "/",
    SURVEYS: "/surveys",
    SURVEY_NEW: "/surveys/new",
    SETTINGS: "/settings"
  }
} as const

export type AppRoutes = typeof ROUTES