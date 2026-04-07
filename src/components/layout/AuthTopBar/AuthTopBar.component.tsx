"use client"
import dynamic from "next/dynamic";

import { LanguagePicker } from "@/components/shared/LanguagePicker/LanguagePicker.component";
import { Typography } from "@/components/shared/Typography/Typography.component";

const ThemePicker = dynamic(
  () => import("@/components/shared/ThemePicker/ThemePicker.component").then(mod => mod.ThemePicker),
  { ssr: false }
);

export function AuthTopBar() {
  return (
    <div className="fixed z-20 flex w-full justify-end gap-1 py-2 pr-2 pl-4">
      <Typography variant="h3" className="mr-auto lg:hidden">
          FormFlow
      </Typography>

      <div className="flex gap-2">
        <ThemePicker />
        <LanguagePicker />
      </div>
    </div>
  );
}
