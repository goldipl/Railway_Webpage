import type { Metadata, Viewport } from "next";
import { Krona_One, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { siteName } from "@/data/site";
import "@/styles/globals.scss";

const body = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const display = Krona_One({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteName} — Strona Główna`,
    template: `${siteName} — %s`,
  },
  description: "GoldenRails — projektowanie, budowa i utrzymanie infrastruktury kolejowej.",
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" className={`${body.variable} ${display.variable}`}>
      <body>
        <AmbientBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
