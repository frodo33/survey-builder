import type { ChangeEvent } from "react"
import { useController } from "react-hook-form"

import type { TextFieldProps } from "./TextField.types"
import { TextField } from "../TextField/TextField.component"

export type TextFieldControllerProps = Omit<TextFieldProps, "value" | "onChange" | "id"> & {
  name: string
}

export const TextFieldController = ({ name, ...props }: TextFieldControllerProps) => {
  const { field, fieldState: { error } } = useController({ name })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => field.onChange(e.target.value)
  
  return (
    <TextField
      {...props}
      id={name}
      value={field.value ?? ""}
      onChange={handleChange}
      error={error?.message}
    />
  )
}
