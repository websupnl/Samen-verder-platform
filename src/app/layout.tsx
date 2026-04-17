import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samen Verder - Steun voor ouders bij een uithuisplaatsing",
  description: "Je staat er niet alleen voor. Een ervaren buddy luistert zonder oordeel, helpt je overzicht te bewaren in moeilijke gesprekken en vertaalt ingewikkelde taal naar heldere stappen.",
};

import { AnonymousChat } from "@/components/shared/AnonymousChat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${manrope.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body bg-background text-on-background">
        {children}
        <AnonymousChat />
      </body>
    </html>
  );
}
