"use client"

import { useState } from "react"
import { IceCream } from "lucide-react"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"

import { TextField } from "@/components/controls/TextField/TextField.component"
import { Button } from "@/components/shared/Button/Button.component"
import { Typography } from "@/components/shared/Typography/Typography.component"
// import { useTheme } from "@/hooks/useTheme"

export default function Page() {
  const variants = ["default", "destructive", "outline", "link"] as const
  const sizes = ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"] as const
  const Tvariants = ["h1", "h2", "h3", "p", "small"] as const
  const [value, setValue] = useState("")
  const { theme, setTheme } = useTheme()

  return (
    <>
      <Button onClick={() => setTheme("dark")} className="mb-4">
                  dark mode
      </Button>
      <Button onClick={() => setTheme("light")}>
                  light mode
      </Button>
      <div className="space-y-12 p-8">
        <h1 className="text-2xl font-bold">Button Playground</h1>

        <div className="flex space-x-4">
          <Button
            variant="default"
            size="sm"
            loading={false}
            disabled={false}
            
          >
            small
          </Button>

          <Button
            variant="default"
            size="default"
            loading={false}
            disabled={false}
          >
            Default
          </Button>

          <Button
            variant="default"
            size="default"
            loading={true}
            disabled={false}
          >
            Default
          </Button>

          <Button
            variant="default"
            size="default"
            loading={false}
            disabled={true}
          >
            Default
          </Button>

          <Button
            variant="default"
            size="lg"
            loading={false}
            disabled={false}
          >
            large
          </Button>

          <Button
            variant="default"
            size="icon-sm"
            loading={false}
            disabled={false}
          >
            <IceCream />
          </Button>

          <Button
            variant="default"
            size="icon"
            loading={false}
            disabled={false}
          >
            <IceCream />
          </Button>

          <Button
            variant="default"
            size="icon-lg"
            loading={false}
            disabled={false}
          >
            <IceCream />
          </Button>
        </div>

        <div className="flex space-x-4">
          <Button
            variant="destructive"
            size="sm"
            loading={false}
            disabled={false}
            
          >
            small
          </Button>

          <Button
            variant="destructive"
            size="default"
            loading={false}
            disabled={false}
          >
            Default
          </Button>

          <Button
            variant="destructive"
            size="default"
            loading={true}
            disabled={false}
          >
            Default
          </Button>

          <Button
            variant="destructive"
            size="default"
            loading={false}
            disabled={true}
          >
            Default
          </Button>

          <Button
            variant="destructive"
            size="lg"
            loading={false}
            disabled={false}
          >
            large
          </Button>

          <Button
            variant="destructive"
            size="icon-sm"
            loading={false}
            disabled={false}
          >
            <IceCream />
          </Button>

          <Button
            variant="destructive"
            size="icon"
            loading={false}
            disabled={false}
          >
            <IceCream />
          </Button>

          <Button
            variant="destructive"
            size="icon-lg"
            loading={false}
            disabled={false}
          >
            <IceCream />
          </Button>
        </div>

        <div className="flex space-x-4">
          <Button
            variant="outline"
            size="sm"
            loading={false}
            disabled={false}
            
          >
            small
          </Button>

          <Button
            variant="outline"
            size="default"
            loading={false}
            disabled={false}
          >
            Default
          </Button>

          <Button
            variant="outline"
            size="default"
            loading={true}
            disabled={false}
          >
            Default
          </Button>

          <Button
            variant="outline"
            size="default"
            loading={false}
            disabled={true}
          >
            Default
          </Button>

          <Button
            variant="outline"
            size="lg"
            loading={false}
            disabled={false}
          >
            large
          </Button>

          <Button
            variant="outline"
            size="icon-sm"
            loading={false}
            disabled={false}
          >
            <IceCream />
          </Button>

          <Button
            variant="outline"
            size="icon"
            loading={false}
            disabled={false}
          >
            <IceCream />
          </Button>

          <Button
            variant="outline"
            size="icon-lg"
            loading={false}
            disabled={false}
          >
            <IceCream />
          </Button>
        </div>

        <div className="flex space-x-4">
          <Button
            variant="link"
            size="sm"
            loading={false}
            disabled={false}
            
          >
            small
          </Button>

          <Button
            variant="link"
            size="default"
            loading={false}
            disabled={false}
          >
            Default
          </Button>

          <Button
            variant="link"
            size="default"
            loading={true}
            disabled={false}
          >
            Default
          </Button>

          <Button
            variant="link"
            size="default"
            loading={false}
            disabled={true}
          >
            Default
          </Button>

          <Button
            variant="link"
            size="lg"
            loading={false}
            disabled={false}
          >
            large
          </Button>

          <Button
            variant="link"
            size="icon-sm"
            loading={false}
            disabled={false}
          >
            <IceCream />
          </Button>

          <Button
            variant="link"
            size="icon"
            loading={false}
            disabled={false}
          >
            <IceCream />
          </Button>

          <Button
            variant="link"
            size="icon-lg"
            loading={false}
            disabled={false}
          >
            <IceCream />
          </Button>
        </div>
      </div>

      <div className={"grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"}>
        <div className="group border-border bg-card shadow-card hover:shadow-elevated hover:border-primary/20 animate-in fade-in relative rounded-xl border p-5 transition-opacity duration-300">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="mb-1.5 flex items-center gap-2">
                <h3 className="text-card-foreground truncate text-sm font-semibold">Employee Engagement Survey</h3>
                {/* <Badge variant="outline" className={cn("text-[10px] px-1.5 py-0 font-medium border", status.className)}>
                {status.label}
              </Badge> */}
              </div>
              <p className="text-muted-foreground mb-3 line-clamp-2 text-xs">Annual employee satisfaction and engagement assessment</p>
              <div className="text-muted-foreground flex items-center gap-4 text-xs">
                <span>2 questions</span>
                <span>87 responses</span>
                <span>Updated 2024-03-03</span>
              </div>
            </div>
          </div>
        </div>

        <div className="group border-border bg-card shadow-card hover:shadow-elevated hover:border-primary/20 animate-fade-in relative rounded-xl border p-5 transition-all duration-300">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="mb-1.5 flex items-center gap-2">
                <h3 className="text-card-foreground truncate text-sm font-semibold">Employee Engagement Survey</h3>
                {/* <Badge variant="outline" className={cn("text-[10px] px-1.5 py-0 font-medium border", status.className)}>
                {status.label}
              </Badge> */}
              </div>
              <p className="text-muted-foreground mb-3 line-clamp-2 text-xs">Annual employee satisfaction and engagement assessment</p>
              <div className="text-muted-foreground flex items-center gap-4 text-xs">
                <span>2 questions</span>
                <span>87 responses</span>
                <span>Updated 2024-03-03</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="space-y-12 p-8">
        <h1 className="text-2xl font-bold">Typography Playground</h1>

        {Tvariants.map((variant) => (
          <div key={variant} className="space-y-2">
            <Typography variant={variant} className="text-primary">
              {variant} variant
            </Typography>

            <Typography variant={variant} as="span" className="text-secondary">
              {variant} rendered as &lt;span&gt;
            </Typography>

            <Typography variant={variant} as="div" className="bg-gray-100 p-2">
              {variant} rendered as &lt;div&gt; with extra classes
            </Typography>
          </div>
        ))}
      </div> */}
      
      {/* <div className="space-y-12 p-8">
        <h1 className="text-2xl font-bold">TextField Playground</h1>

        <div className="space-y-2">
          <TextField
            label="normal"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type here..."
          />
        </div>

        <div className="space-y-2">
          <TextField label="disabled" value="Cannot type" disabled />
        </div>

        <div className="space-y-2">
          <TextField
            label="Error"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Something went wrong"
            error="Something went wrong"
          />
        </div>

        <div className="space-y-2">
          <TextField
            label="with icon"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search..."
            addons={<span className="material-icons">search</span>}
          />
        </div>

        <div className="space-y-2">
          <TextField
            label="Custom Styles"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Custom bg"
            className="border-yellow-400 bg-yellow-50"
          />
        </div>
      </div> */}
    </>
  )
}
