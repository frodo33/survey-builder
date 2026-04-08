export const ROUTES = {
  PUBLIC: {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
  },
  PRIVATE: {
    DASHBOARD: "/dashboard",
    SURVEYS: "/surveys",
    SETTINGS: "/settings"
  }
} as const

export type AppRoutes = typeof ROUTES