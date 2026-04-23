// "use client"
import { Plus } from "lucide-react"
// import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

import { Button } from "@/components/shared/Button/Button.component"
import { Typography } from "@/components/shared/Typography/Typography.component"
import { Link } from "@/lib/i18n/navigation"
import { ROUTES } from "@/lib/routes"

export default async function SurveysEmptyState() {
  // const t = useTranslations()
  const t = await getTranslations()
  
  return (
    <div className="mt-24 flex w-full flex-col items-center justify-center text-center">
      <div className="space-y-2">
        <Typography variant="h2">
          No surveys yet
        </Typography>
        <Typography variant="p" className="text-muted-foreground">
          Create your first survey to start collecting responses.
        </Typography>
      </div>

      <Button 
        size="lg"
        className="mt-8"
        asChild
      >
        <Link href={ROUTES.PRIVATE.SURVEY_NEW}>
          <Plus />
        Nowa ankieta
        </Link>
      </Button>
    </div>
  )
}
