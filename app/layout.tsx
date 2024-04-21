import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Lab",
  description: "A lab for my learning of Nextjs",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <html lang="fr" className="h-full" suppressHydrationWarning>
        <head />
        <body className="flex h-full  min-h-screen flex-col">
          <Header />
          {children}
          <Footer />
          <TailwindIndicator />
        </body>
      </html>
    </>
  );
}
