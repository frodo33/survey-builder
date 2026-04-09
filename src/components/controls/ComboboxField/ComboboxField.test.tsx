import { useState } from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { ComboboxField } from "./ComboboxField.component"
import type { ComboboxOption } from "./ComboboxField.types"

const options = [
  { value: "1", label: "option 1" },
  { value: "2", label: "option 2" },
]

describe("ComboboxField", () => {
  const id = "uniqId"

  it("passes basic combobox props (id, label and placeholder) correctly", () => {
    render(
      <ComboboxField
        id={id}
        label="Test label"
        placeholder="Pick value"
      />
    )

    expect(screen.getByText("Test label")).toBeInTheDocument()
    expect(screen.getByLabelText("Test label")).toHaveAttribute("id", id)
    expect(screen.getByPlaceholderText("Pick value")).toBeInTheDocument()
  })

  it.each([
    { mode: "single", props: {} },
    { mode: "multiple", props: { multiple: true } },
  ])("applies error prop correctly in (%s) mode", ({ props }) => {
    render(
      <ComboboxField
        id={id}
        label="Test"
        error="error"
        {...props}
      />
    )

    const helperText = screen.getByText("error")
    const helperId = `${id}-helper`

    expect(helperText).toHaveAttribute("role", "alert")
    expect(helperText).toHaveClass("text-destructive")
    expect(helperText).toHaveAttribute("id", helperId)
    
    const combobox = screen.getByRole("combobox")
    expect(combobox).toHaveAttribute("aria-invalid", "true")
    expect(combobox).toHaveAttribute("aria-describedby", helperId)
  })

  it("renders helper text without alert role when not invalid", () => {
    render(
      <ComboboxField
        id={id}
        helperText="hint"
      />
    )

    const helperText = screen.getByText("hint")

    expect(helperText).not.toHaveAttribute("role")
    expect(helperText).toHaveClass("text-muted-foreground")
  })

  it("renders custom option correctly", async () => {
    const user = userEvent.setup()
    render(
      <ComboboxField
        id={id}
        items={[options[0]]}
        renderOption={(item) => <span data-testid="custom">{item.label}</span>}
      />
    )

    const combobox = screen.getByRole("combobox")
    await user.click(combobox)

    const customOption = await screen.findByTestId("custom")
    expect(customOption).toBeInTheDocument()
    expect(customOption).toHaveTextContent(options[0].label)
  })

  it.each([
    { mode: "single", props: {} },
    { mode: "multiple", props: { multiple: true } },
  ])("renders addons correctly in (%s) mode", ({ props }) => {
    render(
      <ComboboxField
        id={id}
        addons={(<span data-testid="addon">addon</span>)}
        {...props}
      />
    )

    const addon = screen.getByTestId("addon")
    expect(addon).toBeInTheDocument()
  })

  it.each([
    { mode: "single", props: {} },
    { mode: "multiple", props: { multiple: true } },
  ])("applies disabled state correctly in (%s) mode", ({ props }) => {
    render(
      <ComboboxField
        id={id}
        disabled={true}
        {...props}
      />
    )

    const combobox = screen.getByRole("combobox")
    expect(combobox).toBeDisabled()
  })

  it("renders all values as ComboboxChips in multiple mode", () => {
    render(
      <ComboboxField
        id={id}
        multiple={true}
        value={options}
        items={options}
      />
    )

    const chips = screen.getAllByTestId("combobox-chip")
    expect(chips).toHaveLength(options.length)

    options.forEach((opt, ind) => {
      expect(chips[ind]).toHaveTextContent(opt.label)
    })
  })

  it("calls onValueChange with single value in single mode", async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    render(
      <ComboboxField
        id={id}
        items={options}
        value={options[0]}
        onValueChange={handleChange}
      />
    )

    const combobox = screen.getByRole("combobox")

    await user.click(combobox)
    await user.click(screen.getByText(options[1].label))

    expect(handleChange).toHaveBeenCalledTimes(1)
    const arg = handleChange.mock.calls[0][0]
    expect(Array.isArray(arg)).toBe(false)
    expect(arg).toHaveProperty("label", options[1].label)
  })

  it("calls onValueChange with array in multiple mode", async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    const Wrapper = () => {
      const [value, setValue] = useState<ComboboxOption<string>[] | null>([])
      return (
        <ComboboxField
          id={id}
          multiple
          items={options}
          value={value}
          onValueChange={(v) => {
            setValue(v)
            handleChange(v)
          }}
        />
      )
    }

    render(<Wrapper />)

    const combobox = screen.getByRole("combobox")

    await user.click(combobox)
    await user.click(screen.getByText(options[0].label))
    await user.click(screen.getByText(options[1].label))

    expect(handleChange).toHaveBeenCalled()
    const arg = handleChange.mock.calls[handleChange.mock.calls.length - 1][0]
    expect(Array.isArray(arg)).toBe(true)
    expect(arg.length).toBe(2)
    expect(arg[0]).toHaveProperty("label", options[0].label)
    expect(arg[1]).toHaveProperty("label", options[1].label)
  })

  it("displays empty state message when no items match", async () => {
    const user = userEvent.setup()
    render(<ComboboxField id={id} items={[]} />)
    
    await user.click(screen.getByRole("combobox"))
    expect(screen.getByText("common.noItems")).toBeInTheDocument()
  })
})
