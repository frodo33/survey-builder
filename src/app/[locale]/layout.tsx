import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { TooltipProvider } from "@/components/ui/tooltip";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function AppLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages} key={locale}>
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </NextIntlClientProvider>
  );
}