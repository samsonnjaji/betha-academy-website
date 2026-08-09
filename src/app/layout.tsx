import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollTop } from "@/components/scroll-top";
import { JsonLd } from "@/components/json-ld";
import { school, siteUrl } from "@/lib/content";
import { siteGraph } from "@/lib/schema";
import { ogImage } from "@/lib/seo";

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: school.name,
  title: {
    default: "Betha Academy Timau | CBC School in Meru County",
    template: "%s | Betha Academy",
  },
  description: school.description,
  authors: [{ name: school.name, url: siteUrl }],
  creator: school.name,
  publisher: school.name,
  category: "education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/brand/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      {
        url: "/brand/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Betha Academy Timau | CBC School in Meru County",
    description: school.description,
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: school.name,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Betha Academy Timau | CBC School in Meru County",
    description: school.description,
    images: [ogImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-KE">
      <body>
        <JsonLd data={siteGraph()} />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <ScrollTop />
      </body>
    </html>
  );
}
