import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jetBrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Medium.woff2",
  // variable: "--font-jetbrainsmono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BetterMemory Technology Ltd.",
  description: "Empowering the Next Generation of Learners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
