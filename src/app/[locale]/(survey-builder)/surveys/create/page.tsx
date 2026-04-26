"use client"
import { Trash, Trash2 } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";

import { ComboboxFieldController } from "@/components/controls/ComboboxField/ComboboxFieldController.component";
import { TextField } from "@/components/controls/TextField/TextField.component";
import { TextFieldController } from "@/components/controls/TextField/TextFieldController.component";
import { BuilderHeader } from "@/components/features/survey/survey-builder/BuilderHeader/BuilderHeader.component";
import { SurveyHeader } from "@/components/features/survey/survey-builder/SurveyHeader/SurveyHeader.component";
import { Button } from "@/components/shared/Button/Button.component";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const payloadMock = {
  title: "untitled survey",
  description: "lorem20",
  fields: [
    {
      type: "shortText",
      question: "what's your name?",
      required: true
    }
  ]
}

const options = [
  {
    value: "1",
    label: "Short text",
  },
  {
    value: "2",
    label: "Long text",
  }
]

export default function SurveyBuilderPage() {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      fields: [],
    }
  })

  return (
    <FormProvider {...form}>
      <SurveyHeader />
      <main className="bg-background scrollbar-subtle mx-4 mb-4 flex flex-1 flex-col items-center overflow-scroll rounded-lg p-4 lg:p-8">
        <section className="mt-6 w-full max-w-md">
          <TextFieldController
            name="description"
            placeholder="Untitled survey Untitled survey ..."
            textarea={true}
          />

          <div className="bg-card mt-4 rounded-xl border p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="ml-auto max-w-30 sm:hidden">
                <ComboboxFieldController
                  name="type.0.question"
                  items={options}
                  fieldSize="sm"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TextFieldController
                  name="fields.0.question"
                  placeholder="Type your question..."
                />

                <div className="max-w-30">
                  <ComboboxFieldController
                    name="type.0.question"
                    items={options}
                    fieldSize="sm"
                  />
                </div>
              </div>

              <TextField id="short-text-preview" disabled={true} value="asdf asdf asdf" />

              <Separator orientation="vertical" className="h-px" />

              <div className="flex justify-between">
                <label className="flex cursor-pointer items-center gap-2 text-sm">
                  <Switch id="status-mode" />
                  Required
                </label>

                <Button size="icon" variant="ghost">
                  <Trash2 />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-card mt-4 rounded-xl border p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="ml-auto max-w-30 sm:hidden">
                <ComboboxFieldController
                  name="type.0.question"
                  items={options}
                  fieldSize="sm"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TextFieldController
                  name="fields.0.question"
                  placeholder="Type your question..."
                />

                <div className="max-w-30">
                  <ComboboxFieldController
                    name="type.0.question"
                    items={options}
                    fieldSize="sm"
                  />
                </div>
              </div>

              <TextField id="short-text-preview" disabled={true} value="asdf asdf asdf" />

              <Separator orientation="vertical" className="h-px" />

              <div className="flex justify-between">
                <label className="flex cursor-pointer items-center gap-2 text-sm">
                  <Switch id="status-mode" />
                  Required
                </label>

                <Button size="icon" variant="ghost">
                  <Trash2 />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-card mt-4 rounded-xl border p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="ml-auto max-w-30 sm:hidden">
                <ComboboxFieldController
                  name="type.0.question"
                  items={options}
                  fieldSize="sm"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TextFieldController
                  name="fields.0.question"
                  placeholder="Type your question..."
                />

                <div className="max-w-30">
                  <ComboboxFieldController
                    name="type.0.question"
                    items={options}
                    fieldSize="sm"
                  />
                </div>
              </div>

              <TextField id="short-text-preview" disabled={true} value="asdf asdf asdf" />

              <Separator orientation="vertical" className="h-px" />

              <div className="flex justify-between">
                <label className="flex cursor-pointer items-center gap-2 text-sm">
                  <Switch id="status-mode" />
                  Required
                </label>

                <Button size="icon" variant="ghost">
                  <Trash2 />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-card mt-4 rounded-xl border p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="ml-auto max-w-30 sm:hidden">
                <ComboboxFieldController
                  name="type.0.question"
                  items={options}
                  fieldSize="sm"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TextFieldController
                  name="fields.0.question"
                  placeholder="Type your question..."
                />

                <div className="max-w-30">
                  <ComboboxFieldController
                    name="type.0.question"
                    items={options}
                    fieldSize="sm"
                  />
                </div>
              </div>

              <TextField id="short-text-preview" disabled={true} value="asdf asdf asdf" />

              <Separator orientation="vertical" className="h-px" />

              <div className="flex justify-between">
                <label className="flex cursor-pointer items-center gap-2 text-sm">
                  <Switch id="status-mode" />
                  Required
                </label>

                <Button size="icon" variant="ghost">
                  <Trash2 />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </FormProvider>
  )
}
