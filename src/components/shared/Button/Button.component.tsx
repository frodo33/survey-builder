import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./Button.styles"
import type { ButtonProps } from "./Button.types"
import { ButtonSpinner } from "./ButtonSpinner.component"

export const Button = ({
  className,
  variant,
  size,
  loading,
  disabled,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      type="button"
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled || loading}
      {...props}
    >
      {asChild ? props.children : (
        <span className="flex items-center justify-center gap-2">
          {loading && <ButtonSpinner />}
          {props.children}
        </span>
      )}
    </Comp>
  )
}
