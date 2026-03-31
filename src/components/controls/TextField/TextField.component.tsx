import type { ComponentProps } from "react"

import type { TextFieldOwnProps, TextFieldProps } from "./TextField.types"
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/shared/Field/Field.component"
import { InputGroup, InputGroupInput, InputGroupTextarea } from "@/components/ui/input-group"
import { cn } from "@/lib/utils"

export const TextField = <T extends boolean = false>({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  helperText,
  className,
  inputGroupClassName,
  addons,
  textarea,
  ...props
}: TextFieldProps<T>) => {
  const helperId = error || helperText ? `${id}-helper` : undefined
  
  return (
    <Field className={className}>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      <InputGroup
        data-disabled={props.disabled}
        className={cn(
          "[&:has([data-slot=input-group-control]:focus-visible)]:border-ring/70 [&:has([data-slot=input-group-control]:focus-visible)]:ring-0",
          props.disabled && "bg-muted dark:bg-muted cursor-not-allowed",
          error && "border-destructive text-destructive",
          inputGroupClassName
        )}
      >
        {textarea ? (
          <InputGroupTextarea
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            aria-invalid={!!error}
            aria-describedby={helperId}
            {...(props as Omit<ComponentProps<"textarea">, keyof TextFieldOwnProps>)}
          />
        ) : (
          <InputGroupInput
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            aria-invalid={!!error}
            aria-describedby={helperId}
            {...(props as Omit<ComponentProps<"input">, keyof TextFieldOwnProps>)}
          />
        )}
        {addons}
      </InputGroup>

      {error ? (
        <FieldError id={helperId} role="alert">
          {error}
        </FieldError>
      ) : helperText ? (
        <FieldDescription id={helperId}>
          {helperText}
        </FieldDescription>
      ) : null}
    </Field>
  )
}
