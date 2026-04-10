export const envConfig: Record<string, string> = {
  API_HOST_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  API_HOST_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
}