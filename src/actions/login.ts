"use server"

import { createClient } from "@/lib/supabase/server"

type LoginModel = {
  email: string;
  password: string;
}

export async function loginAction({ email, password }: LoginModel) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return { success: false, error: error.message }
  }

  return { success: true, user: data.user }
}