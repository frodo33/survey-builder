"use client"
import { ComboboxField } from "@/components/controls/ComboboxField/ComboboxField.component";
import { TextField } from "@/components/controls/TextField/TextField.component";
import { createClient } from "@/lib/supabase/server";

// id,
//   label,
//   placeholder,
//   error,
//   helperText,
//   items,
//   renderOption,
//   value,
//   onValueChange,
//   multiple,
//   addons,
//   disabled,

const options = [
  {
    label: "asdfasdf",
    items: Array.from({ length: 5 }, (_, i) => ({
      value: `option-${i + 1}`,
      label: `Option ${i + 1}`,
    }))
  },
  {
    label: "bbbbbb",
    items: Array.from({ length: 5 }, (_, i) => ({
      value: `option--${i + 1}`,
      label: `Option ${i + 1}`,
    }))
  }
]

const options2 = Array.from({ length: 15 }, (_, i) => ({
  value: `option-${i + 1}`,
  label: `Option ${i + 1}`,
}));

export default function NewSurveyPage() {
  return (
    <div className="max-w-sm space-y-8">
      <div className="space-y-4">
        <TextField
          id={"1"}
          label={"label"}
          placeholder={"placeholder"}
          // value={""}
          // error="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloremque? 1"
          // helperText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloremque? 2"
          disabled={false}
          textarea={false}
          fieldSize="sm"
        />

        <TextField
          id={"1"}
          label={"label"}
          placeholder={"placeholder"}
          // value={""}
          // error="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloremque? 1"
          // helperText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloremque? 2"
          disabled={false}
          textarea={false}
        />
        <TextField
          id={"1"}
          label={"label"}
          placeholder={"placeholder"}
          // value={""}
          // error="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloremque? 1"
          // helperText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloremque? 2"
          disabled={true}
          textarea={false}
        />
        <TextField
          id={"1"}
          label={"label"}
          placeholder={"placeholder"}
          // value={""}
          // error="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloremque? 1"
          // helperText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloremque? 2"
          error={"true"}
          textarea={false}
        />
      </div>

--------------------------------
      <div className="space-y-4">
        <ComboboxField
          id="test"
          label="label"
          placeholder="placeholder"
          items={options}
          fieldSize="sm"
        // multiple
        />
        <ComboboxField
          id="test"
          label="label"
          placeholder="placeholder"
          items={options}
          fieldSize="md"
        // multiple
        />
        <ComboboxField
          id="test"
          label="label"
          placeholder="placeholder"
          items={options}
          fieldSize="md"
          disabled
        // multiple
        />
        <ComboboxField
          id="test"
          label="label"
          placeholder="placeholder"
          items={options}
          fieldSize="md"
          error="asdf"
        // multiple
        />
      </div>
      --------------------------------

      <div className="space-y-4">
        <ComboboxField
          id="test"
          label="label"
          placeholder="placeholder"
          items={options}
          fieldSize="sm"
          multiple
        />
        <ComboboxField
          id="test"
          label="label"
          placeholder="placeholder"
          items={options}
          fieldSize="md"
          multiple
        />
        <ComboboxField
          id="test"
          label="label"
          placeholder="placeholder"
          items={options}
          fieldSize="md"
          disabled
          multiple
        />
        <ComboboxField
          id="test"
          label="label"
          placeholder="placeholder"
          items={options}
          fieldSize="md"
          error="asdf"
          multiple
        />
      </div>
    </div>
  )
}
