export const ROUTES = {
  PUBLIC: {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
  },
  PRIVATE: {
    DASHBOARD: "/dashboard"
  }
} as const

export type AppRoutes = typeof ROUTES