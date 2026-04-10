"use server"

import type { RegisterPostModel } from "@/api/auth/auth.types"
import { createClient } from "@/lib/supabase/server"

export async function registerAction({ email, password }: RegisterPostModel) {
  const supabase = await createClient()

  const { data: authData, error } = await supabase.auth.signUp({ email, password })

  if (error) {
    return { success: false, error: error.message }
  }

  return { success: true, user: authData.user }
}