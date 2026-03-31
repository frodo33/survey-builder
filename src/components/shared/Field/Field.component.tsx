import type { ComponentProps } from "react";

import { Field as ShadField, FieldLabel as ShadFieldLabel, FieldDescription as ShadFieldDescription, FieldError as ShadFieldError } from "@/components/ui/field";
import { cn } from "@/lib/utils"

export const Field = ({ className, ...props }: ComponentProps<typeof ShadField>) => (
  <ShadField {...props} className={cn("gap-1", className)} />
)

export const FieldLabel = ({ className, ...props }: ComponentProps<typeof ShadFieldLabel>) => (
  <ShadFieldLabel {...props} className={cn("text-xs", className)} />
)

export const FieldDescription = ({ className, ...props }: ComponentProps<typeof ShadFieldDescription>) => (
  <ShadFieldDescription {...props} className={cn("text-xs text-muted-foreground", className)} />
)

export const FieldError = ({ className, ...props }: ComponentProps<typeof ShadFieldError>) => (
  <ShadFieldError {...props} className={cn("text-xs text-destructive", className)} />
)