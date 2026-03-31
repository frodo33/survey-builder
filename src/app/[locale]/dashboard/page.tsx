"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"

import { TextField } from "@/components/controls/TextField/TextField.component"
import { Button } from "@/components/shared/Button/Button.component"
import { Typography } from "@/components/shared/Typography/Typography.component"

export default function Page() {
  const variants = ["default", "destructive", "outline", "link"] as const
  const sizes = ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"] as const
  const Tvariants = ["h1", "h2", "h3", "p", "small"] as const
  const [value, setValue] = useState("")

  return (
    <>
      <div className="space-y-12 p-8">
        <h1 className="text-2xl font-bold">Button Playground</h1>

        {variants.map((variant) => (
          <div key={variant} className="space-y-4">
            <h2 className="text-xl font-semibold">{variant} variant</h2>

            <div className="flex flex-wrap items-center gap-4">
              {sizes.map((size) => (
                <Button key={size} variant={variant} size={size}>
                  {size} button
                </Button>
              ))}

              {/* Disabled state */}
              <Button variant={variant} size="default" disabled>
              Disabled
              </Button>

              {/* Loading state */}
              <Button variant={variant} size="default" loading>
              Loading
              </Button>

              {/* AsChild example */}
              <Button variant={variant} size="default" asChild>
                <a href="#" className="underline">
                Link Button
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-12 p-8">
        <h1 className="text-2xl font-bold">Typography Playground</h1>

        {Tvariants.map((variant) => (
          <div key={variant} className="space-y-2">
            <Typography variant={variant} className="text-primary">
              {variant} variant
            </Typography>

            {/* Example with 'as' override */}
            <Typography variant={variant} as="span" className="text-secondary">
              {variant} rendered as &lt;span&gt;
            </Typography>

            <Typography variant={variant} as="div" className="bg-gray-100 p-2">
              {variant} rendered as &lt;div&gt; with extra classes
            </Typography>
          </div>
        ))}
      </div>
      <div className="space-y-12 p-8">
        <h1 className="text-2xl font-bold">TextField Playground</h1>

        {/* Normal TextField */}
        <div className="space-y-2">
          <TextField
            label="normal"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type here..."
          />
        </div>

        {/* Disabled */}
        <div className="space-y-2">
          <TextField label="disabled" value="Cannot type" disabled />
        </div>

        {/* Error */}
        <div className="space-y-2">
          <TextField
            label="Error"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Something went wrong"
            error="Something went wrong"
          />
        </div>

        {/* With icon / prefix */}
        <div className="space-y-2">
          <TextField
            label="with icon"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search..."
            addons={<span className="material-icons">search</span>}
          />
        </div>

        {/* Custom className */}
        <div className="space-y-2">
          <TextField
            label="Custom Styles"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Custom bg"
            className="border-yellow-400 bg-yellow-50"
          />
        </div>
      </div>
    </>
  )
}
