import type { ComboboxGroup, ComboboxOption, ComboboxOptions } from "./ComboboxField.types"

export const normalizeToGroups = <V extends string | number = string, T = unknown>(options?: ComboboxOptions<V, T>): ComboboxGroup<V, T>[] => {
  if (!options || !options.length) return []
  if (isGrouped(options)) return options

  return [
    {
      label: "",
      items: options as ComboboxOption<V, T>[],
    },
  ]
}

const isGrouped = <V extends string | number = string, T = unknown>(items: ComboboxOptions<V, T>): items is ComboboxGroup<V, T>[] => (
  Array.isArray(items) && 
  items.length > 0 && 
  typeof items[0] === "object" && 
  items[0] !== null &&
  "items" in items[0]
)