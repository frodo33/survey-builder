import { createClient } from "@/lib/supabase/client"

const supabase = createClient()

export const getSurveys = async () => {
  const { data, error } = await supabase
    .from("surveys_v")
    .select("*")
    .order("updatedAt", { ascending: false });

  if (error) {
    throw new Error(error.message)
  }

  return data
}