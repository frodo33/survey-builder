import { describe, it, expect } from "vitest"

import type { ComboboxGroup, ComboboxOption } from "./ComboboxField.types"
import { normalizeToGroups } from "./ComboboxField.utils"

describe("normalizeToGroups", () => {
  it("normalizes flat options into a single group", () => {
    const options: ComboboxOption[] = [
      { value: "a", label: "A" },
      { value: "b", label: "B" },
    ]

    const result = normalizeToGroups(options)

    expect(result).toEqual([
      {
        label: "",
        items: options,
      },
    ])
  })

  it("normalizes grouped options correctly", () => {
    const options: ComboboxGroup[] = [
      {
        label: "Group 1",
        items: [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
        ],
      },
      {
        label: "Group 2",
        items: [
          { value: "c", label: "C" },
        ],
      },
    ]

    const result = normalizeToGroups(options)

    expect(result).toEqual([
      {
        label: "Group 1",
        items: options[0].items,
      },
      {
        label: "Group 2",
        items: options[1].items,
      },
    ])
  })

  it("returns empty group when options array is empty", () => {
    const options: ComboboxOption[] = []

    const result = normalizeToGroups(options)

    expect(result).toEqual([])
  })

  it("preserves generic data type", () => {
    type ExtraData = { id: number }

    const options: ComboboxOption<string, ExtraData>[] = [
      {
        value: "a",
        label: "A",
        data: { id: 1 },
      },
    ]

    const result = normalizeToGroups(options)
    expect(result[0].items[0].data).toEqual({ id: 1 })
  })

  it("returns empty array when options are undefined", () => {
    const result = normalizeToGroups(undefined)
  
    expect(result).toEqual([])
  })

  it("returns empty array when options are not provided", () => {
    const result = normalizeToGroups()
  
    expect(result).toEqual([])
  })

  it("returns the same reference if already grouped", () => {
    const options: ComboboxGroup[] = [{ label: "G1", items: [] }]
    const result = normalizeToGroups(options)
    expect(result).toBe(options)
  })
})