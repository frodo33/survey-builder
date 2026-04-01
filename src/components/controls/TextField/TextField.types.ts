import type { ChangeEvent, ComponentProps, ReactNode } from "react"

export type TextFieldSize = "sm" | "md"

export type TextFieldOwnProps = {
  id: string
  label?: string
  placeholder?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  helperText?: string
  className?: string
  inputGroupClassName?: string
  addons?: ReactNode
  textarea?: boolean
  fieldSize?: TextFieldSize
}

export type TextFieldProps<T extends boolean = false> = TextFieldOwnProps &
  (T extends true ? ComponentProps<"textarea"> : ComponentProps<"input">) & { textarea?: T }