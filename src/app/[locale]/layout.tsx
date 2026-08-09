import { NextIntlClientProvider } from "next-intl";
import { PostHogProvider } from "@/components/providers/PostHogProvider";

import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";


export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;


  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <PostHogProvider locale={locale}>
        {children}
      </PostHogProvider>
    </NextIntlClientProvider>
  );
}