import type { ChangeEvent, ComponentProps, ReactNode } from "react"

export type TextFieldSize = "sm" | "md"

type TextFieldSharedProps = {
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
  fieldSize?: TextFieldSize
}

export type TextFieldSharedPropsKeys = keyof TextFieldSharedProps

export type TextFieldProps = TextFieldSharedProps &
  Omit<ComponentProps<"input">, keyof TextFieldSharedProps | "value" | "onChange" | "ref"> &
  Omit<ComponentProps<"textarea">, keyof TextFieldSharedProps | "value" | "onChange" | "ref"> & {
    textarea?: boolean
  }