import type { Metadata } from "next";
import { school, siteUrl } from "@/lib/content";

export const ogImage = {
  url: `${siteUrl}/images/share/betha-academy-og.jpg`,
  secureUrl: `${siteUrl}/images/share/betha-academy-og.jpg`,
  type: "image/jpeg",
  width: 1200,
  height: 630,
  alt: "Betha Academy campus gate in Timau with school branding, promise, and Meru County location",
};

export function pageUrl(path: string) {
  if (path === "/") {
    return siteUrl;
  }
  return `${siteUrl}${path}`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = pageUrl(path);

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: school.name,
      locale: "en_KE",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
