export const ROUTES = {
  PUBLIC: {
    LOGIN: "/login",
    REGISTER: "/register",
  },
  PRIVATE: {
    DASHBOARD: "/",
    SURVEYS: "/surveys",
    SETTINGS: "/settings"
  }
} as const

export type AppRoutes = typeof ROUTES