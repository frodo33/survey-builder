import type { ReactNode } from "react";

import { AuthTopBar } from "@/components/layout/AuthTopBar/AuthTopBar.component";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background flex min-h-dvh">
      <AuthTopBar />
      {children}
    </div>
  );
}