import type { Metadata } from "next";
import { images, school, siteUrl } from "@/lib/content";

export const ogImage = {
  url: images.hero.src,
  width: images.hero.width,
  height: images.hero.height,
  alt: images.hero.alt,
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
