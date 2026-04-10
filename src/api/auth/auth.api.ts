"use client"
import { loginAction } from "@/actions/login"
import { registerAction } from "@/actions/register"

import type { LoginPostModel, RegisterPostModel } from "./auth.types"

export const loginWithEmail = async (data: LoginPostModel) => {
  const result = await loginAction(data)
  
  if (!result.success) {
    throw new Error(result.error)
  }
  
  return result.user
}

export const registerWithEmail = async (data: RegisterPostModel) => {
  const result = await registerAction(data)
  
  if (!result.success) {
    throw new Error(result.error)
  }
  
  return result.user
}