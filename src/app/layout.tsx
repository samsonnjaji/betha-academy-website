import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollTop } from "@/components/scroll-top";
import { siteUrl } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Betha Academy | Excellence, Character & Responsibility",
    template: "%s | Betha Academy",
  },
  description:
    "Betha Academy provides quality CBC education in a safe, caring and supportive environment for learners from Playgroup to Grade 4.",
  keywords: [
    "Betha Academy",
    "CBC school",
    "Playgroup",
    "PP1",
    "PP2",
    "Primary school",
    "Kenya education",
  ],
  openGraph: {
    title: "Betha Academy",
    description:
      "Nurturing excellence, character and responsibility from Playgroup to Grade 4.",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/images/school/01-main-gate.webp",
        width: 1600,
        height: 737,
        alt: "The main entrance gate of Betha Academy",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <ScrollTop />
      </body>
    </html>
  );
}
