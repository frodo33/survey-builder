import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

import { envConfig } from "@/app.config"

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    envConfig.API_HOST_URL,
    envConfig.API_HOST_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Middleware zajmie się aktualizacją ciasteczek, 
            // jeśli Server Component nie będzie mógł tego zrobić.
          }
        },
      },
    }
  )
}