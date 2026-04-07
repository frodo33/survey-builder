export const ROUTES = {
  PUBLIC: {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
  },
  PRIVATE: {
    DASHBOARD: "/dashboard"
  }
} as const

export type AppRoutes = typeof ROUTES