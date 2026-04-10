import { createBrowserClient } from "@supabase/ssr"

import { envConfig } from "@/app.config"

export const createClient = () =>
  createBrowserClient(
    envConfig.API_HOST_URL,
    envConfig.API_HOST_KEY,
  )