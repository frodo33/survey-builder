import type { ElementType } from "react"

import { cn } from "@/lib/utils"

import { typographyVariants } from "./Typography.styles"
import type { TypographyProps } from "./Typography.types"
import { variantToTag } from "./Typography.utils"

export const Typography = <E extends ElementType = "p">({
  as,
  variant,
  className,
  children,
  ...props
}: TypographyProps<E>) => {
  const Comp = as || (variant ? variantToTag[variant] : "p")
  
  return (
    <Comp
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    >
      {children}
    </Comp>
  )
}
