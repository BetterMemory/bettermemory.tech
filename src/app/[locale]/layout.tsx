import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const jetBrainsMono = localFont({
  src: "../fonts/JetBrainsMono[wght].ttf",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BETTERMEMORY LTD",
  description: "Empowering the Next Generation of Learners.",
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <body className={`${jetBrainsMono.className} antialiased bg-[#F5F4EF]`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
