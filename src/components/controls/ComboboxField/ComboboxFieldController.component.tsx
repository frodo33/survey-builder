import type { ComboboxRoot } from "@base-ui/react"
import { useController } from "react-hook-form"

import { ComboboxField } from "../ComboboxField/ComboboxField.component"
import type { ComboboxFieldControllerProps, ComboboxOption } from "../ComboboxField/ComboboxField.types"

export const ComboboxFieldController = <V extends string | number = string, T = unknown>({
  name,
  onValueChange,
  helperText,
  multiple,
  ...props
}: ComboboxFieldControllerProps<V, T>) => {
  const { field, fieldState: { error } } = useController({ name })

  const handleChange = (val: ComboboxOption<V, T> | ComboboxOption<V, T>[] | null, event?: ComboboxRoot.ChangeEventDetails) => {
    field.onChange(val)

    if (multiple) {
      onValueChange?.(val as ComboboxOption<V, T>[] | null, event)
      return
    }

    onValueChange?.(val as ComboboxOption<V, T> | null, event)
  }

  return (
    <ComboboxField<V, T>
      id={name}
      value={field.value}
      onValueChange={handleChange}
      error={error?.message}
      helperText={helperText}
      multiple={multiple}
      {...props}
    />
  )
}
