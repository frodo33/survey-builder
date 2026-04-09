"use client"
import type { ComboboxRoot } from "@base-ui/react"
import { ChevronDownIcon } from "lucide-react"
import { useTranslations } from "next-intl"

import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/shared/Field/Field.component"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { cn } from "@/lib/utils"

import type { ComboboxFieldProps, ComboboxOption } from "./ComboboxField.types"
import { normalizeToGroups } from "./ComboboxField.utils"

const sizeClasses: Record<string, string> = {
  sm: "min-h-8 text-base",
  md: "min-h-10 text-base",
}

export const ComboboxField = <V extends string | number = string, T = unknown>({
  id,
  label,
  placeholder,
  error,
  helperText,
  items,
  renderOption,
  value,
  onValueChange,
  multiple,
  addons,
  disabled,
  fieldSize = "md",
  ...comboboxProps
}: ComboboxFieldProps<V, T>) => {
  const t = useTranslations()
  const anchor = useComboboxAnchor()
  const groups = normalizeToGroups(items)
  const disabledClass = "has-disabled:bg-input/50 has-disabled:opacity-50 dark:has-disabled:bg-input/80 has-disabled:cursor-not-allowed"
  const helperId = `${id}-helper`

  const handleChange = (val: unknown, event: ComboboxRoot.ChangeEventDetails) => {
    if (multiple) {
      onValueChange?.(val as ComboboxOption<V, T>[] | null, event)
      return
    }
    onValueChange?.(val as ComboboxOption<V, T> | null, event)
  }

  return (
    <Combobox
      items={groups}
      value={value}
      multiple={multiple}
      disabled={disabled}
      onValueChange={handleChange}
      isItemEqualToValue={(itemValue, selectedValue) =>
        (itemValue as ComboboxOption<V, T>)?.value === (selectedValue as ComboboxOption<V, T>)?.value
      }
      {...comboboxProps}
    >
      <Field>
        {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}

        {multiple ? (
          <ComboboxChips
            ref={anchor}
            className={cn(
              "focus-within:ring-0 focus-within:ring-offset-0",
              "has-aria-invalid:focus-within:border-ring dark:has-aria-invalid:focus-within:border-ring/70",
              "dark:has-aria-invalid:border-destructive has-aria-invalid:border-destructive w-full dark:has-aria-invalid:ring-0 has-aria-invalid:ring-0",
              sizeClasses[fieldSize],
              disabled && disabledClass,
            )}
          >
            <ComboboxValue>
              {(values) => (
                <>
                  {values?.map((value: ComboboxOption<V, T>) => (
                    <ComboboxChip
                      key={value.value}
                      data-testid="combobox-chip"
                      className="bg-accent/80 text-foreground h-6 gap-2 rounded-md px-2"
                    >
                      {value.label}
                    </ComboboxChip>
                  ))}
                  <ComboboxChipsInput
                    id={id}
                    placeholder={placeholder}
                    aria-invalid={!!error}
                    aria-describedby={helperId}
                    className={cn(disabled && disabledClass)}
                  />
                </>
              )}
            </ComboboxValue>
            <ChevronDownIcon
              data-slot="combobox-trigger-icon"
              className="text-muted-foreground pointer-events-none size-4 px-0"
            />
            {addons}
          </ComboboxChips>
        ) : (
          <div ref={anchor}>
            <ComboboxInput
              id={id}
              placeholder={placeholder}
              aria-invalid={!!error}
              aria-describedby={helperId}
              disabled={disabled}
              className={cn(
                "[&:has([data-slot=input-group-control]:focus-visible)]:border-ring/70 [&:has([data-slot=input-group-control]:focus-visible)]:ring-0 rounded-md",
                sizeClasses[fieldSize],
                disabled && disabledClass,
                error && "border-destructive has-[[data-slot][aria-invalid=true]]:ring-1",
              )}
            >
              {addons}
            </ComboboxInput>
          </div>
        )}

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
      
      <ComboboxContent className="w-full" anchor={anchor}>
        <ComboboxEmpty>{t("common.noItems")}</ComboboxEmpty>
        <ComboboxList>
          {(group) => (
            <ComboboxGroup key={group.label} items={group.items}>
              {group.label && <ComboboxLabel>{group.label}</ComboboxLabel>}
              <ComboboxCollection>
                {(item) => (
                  <ComboboxItem key={item.value} value={item} disabled={item.disabled}>
                    {renderOption
                      ? renderOption(item)
                      : item.label }
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
