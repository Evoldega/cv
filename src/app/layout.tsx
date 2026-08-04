import type { Metadata } from "next";
import { Roboto, Outfit } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip"
import ServiceWorkerRegister from "@/components/providers/ServiceWorkerRegister";

import "./globals.css";
import "@fontsource/outfit";
import "@fontsource/roboto";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"]
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "CV",
  description: "Dmitry Lukyanov CV",
  manifest: "/manifest.webmanifest"
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout(
  { children }: { children: React.ReactNode }
) {

  return (
    <html>
      <body className="min-h-screen flex flex-col items-center">
        <ServiceWorkerRegister />
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}