import {
  school,
  siteUrl,
  verifiedSocialUrls,
  images,
} from "@/lib/content";
import { pageUrl } from "@/lib/seo";

export function schoolEntity() {
  const sameAs = verifiedSocialUrls();

  return {
    "@type": "School",
    "@id": `${siteUrl}/#school`,
    name: school.name,
    alternateName: school.alternateName,
    url: siteUrl,
    logo: `${siteUrl}/brand/favicon-512.png`,
    image: `${siteUrl}${images.hero.src}`,
    description: school.description,
    telephone: school.phoneE164,
    address: {
      "@type": "PostalAddress",
      addressLocality: school.location.locality,
      addressRegion: school.location.region,
      postalCode: school.location.postalCode,
      addressCountry: school.location.countryCode,
    },
    areaServed: [
      {
        "@type": "Place",
        name: school.location.locality,
      },
      {
        "@type": "AdministrativeArea",
        name: school.location.region,
      },
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function websiteEntity() {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: school.name,
    alternateName: school.alternateName,
    inLanguage: "en-KE",
    publisher: {
      "@id": `${siteUrl}/#school`,
    },
  };
}

export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [schoolEntity(), websiteEntity()],
  };
}

export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}
