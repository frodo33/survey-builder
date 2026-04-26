export const ROUTES = {
  PUBLIC: {
    LOGIN: "/login",
    REGISTER: "/register",
  },
  PRIVATE: {
    DASHBOARD: "/",
    SURVEYS: "/surveys",
    SURVEY_CREATE: "/surveys/create",
    SETTINGS: "/settings"
  }
} as const

export type AppRoutes = typeof ROUTES