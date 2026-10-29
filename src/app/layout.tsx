import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Serif, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { siteName } from "@/data/site";
import "@/styles/globals.scss";

const body = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const accent = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteName} — Strona Główna`,
    template: `${siteName} — %s`,
  },
  description: "GoldenRails — projektowanie, budowa i utrzymanie infrastruktury kolejowej.",
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" className={`${body.variable} ${display.variable} ${accent.variable}`}>
      <body>
        <AmbientBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
