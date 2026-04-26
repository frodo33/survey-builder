import { cookies } from "next/headers";

import type { ViewVariant } from "@/components/features/survey/dashboard/dashboard.types";

import { SurveysPageClient } from "./SurveysPageClient.component";

const VIEW_COOKIE_NAME = "surveys_view";

const parseViewVariant = (value: string | undefined): ViewVariant =>
  value === "list" ? "list" : "grid";

export default async function SurveysPage() {
  const cookieStore = await cookies();
  const initialView = parseViewVariant(cookieStore.get(VIEW_COOKIE_NAME)?.value);

  return <SurveysPageClient initialView={initialView} />;
}
