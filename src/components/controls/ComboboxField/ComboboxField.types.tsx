import type { ComponentProps, ReactNode } from "react"
import type { ComboboxRoot } from "@base-ui/react"

import type { Combobox } from "@/components/ui/combobox"

/**
 * Generic option for ComboboxField.
 * 
 * @template V - the type of the value (string | number)
 * @template T - optional payload type, can be used to store extra data
 * @property value V - the actual value of the option
 * @property label string - the displayed label
 * @property data T - optional extra data
 * @property disabled boolean - disables the option
 */
export type ComboboxOption<V extends string | number = string, T = unknown> = {
  value: V
  label: string
  data?: T
  disabled?: boolean
}

export type ComboboxGroup<V extends string | number = string, T = unknown> = {
  label: string
  items: ComboboxOption<V, T>[]
}

export type ComboboxOptions<V extends string | number = string, T = unknown> =
  | ComboboxOption<V, T>[]
  | ComboboxGroup<V, T>[]

type BaseComboboxProps = ComponentProps<typeof Combobox>

export type ComboboxFieldSingleProps<V extends string | number = string, T = unknown> = {
  multiple?: false
  value?: ComboboxOption<V, T> | null
  onValueChange?: (value: ComboboxOption<V, T> | null, event?: ComboboxRoot.ChangeEventDetails ) => void
}

export type ComboboxFieldMultipleProps<V extends string | number = string, T = unknown> = {
  multiple: true
  value?: ComboboxOption<V, T>[] | null
  onValueChange?: (value: ComboboxOption<V, T>[] | null, event?: ComboboxRoot.ChangeEventDetails ) => void
}

export type ComboboxSize = "sm" | "md"

export type ComboboxFieldProps<V extends string | number = string, T = unknown> = (
  | ComboboxFieldSingleProps<V, T>
  | ComboboxFieldMultipleProps<V, T>
) & {
  id: string
  items?: ComboboxOptions<V, T>
  label?: string
  placeholder?: string
  error?: string
  helperText?: string
  renderOption?: (item: ComboboxOption<V, T>) => ReactNode
  addons?: ReactNode
  fieldSize?: ComboboxSize
} & Omit<BaseComboboxProps, "children" | "onValueChange">

export type ComboboxFieldControllerProps<
  V extends string | number = string,
  T = unknown
> = (
  | ComboboxFieldSingleProps<V, T>
  | ComboboxFieldMultipleProps<V, T>
) & Omit<ComboboxFieldProps<V, T>, "value" | "id">
  & {
    name: string
  }