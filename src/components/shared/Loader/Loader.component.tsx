import { Loader2Icon } from "lucide-react"

import type { LoaderProps } from "./Loader.types"
import { cn } from "@/lib/utils"

export const Loader = ({ className, fullScreen = false }: LoaderProps) => (
  <div className={cn(
    "flex items-center justify-center",
    fullScreen && "bg-background/60 fixed inset-0 z-50 backdrop-blur-sm",
    className
  )}>
    <Loader2Icon
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={cn("size-12 animate-spin", className)}
    />
  </div>
)
