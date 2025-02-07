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
  title: "BETTERMEMORY EdTech",
  description: "Empowering the Next Generation of Learners.",
};

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="254620c4-493c-4913-bc08-898cc20107e0"
        ></script>
      </head>
      <body className={`${jetBrainsMono.className} antialiased bg-[#F5F4EF]`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
