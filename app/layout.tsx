import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "./Providers";
import "./globals.css";
import { SiteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <html lang="fr" className="h-full" suppressHydrationWarning>
        <head />
        <body className="flex h-full  min-h-screen flex-col">
          <Providers>
            <Header />
            {children}
            <Footer />
            <TailwindIndicator />
          </Providers>
        </body>
      </html>
    </>
  );
}
