"use client"
import type { ReactNode } from "react"

import { Typography } from "@/components/shared/Typography/Typography.component"

type SurveysStateProps = {
  title: string
  description?: string
  children?: ReactNode
}

export const SurveysState = ({ title, description, children }: SurveysStateProps) => (
  <div className="mt-24 flex w-full flex-col items-center justify-center text-center">
    <div className="space-y-2">
      <Typography variant="h2">
        {title}
      </Typography>

      {description && (
        <Typography variant="p" className="text-muted-foreground">
          {description}
        </Typography>
      )}
    </div>
    {children}
  </div>
)
