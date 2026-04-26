"use client"
import { ArrowLeftIcon, Eye, Save, Share } from "lucide-react"

import { TextFieldController } from "@/components/controls/TextField/TextFieldController.component"
import { Button } from "@/components/shared/Button/Button.component"
import { LanguagePicker } from "@/components/shared/LanguagePicker/LanguagePicker.component"
import { ThemePicker } from "@/components/shared/ThemePicker/ThemePicker.component"
import { Link } from "@/lib/i18n/navigation"
import { ROUTES } from "@/lib/routes"

export const SurveyHeader = () => (
  <div className="bg-sidebar sticky top-0 z-50 mb-4 flex flex-col items-start gap-4 px-4 sm:flex-row">
    <div className="w-full sm:w-100">
      <TextFieldController
        name="title"
        placeholder="Untitled survey"
      />
    </div>
    
    <div className="flex w-full justify-between sm:justify-end sm:gap-4">
      <Button variant="outline">
        <Eye />
      Preview
      </Button>

      <Button variant="outline">
        <Share />
      Share
      </Button>

      <Button>
        <Save />
      Save
      </Button>
    </div>
  </div>
)
