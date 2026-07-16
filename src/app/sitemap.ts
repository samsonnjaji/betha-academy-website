import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";

const routes = [
  "",
  "/about-us",
  "/vision-mission",
  "/cbc-curriculum",
  "/admissions",
  "/fees-structure",
  "/gallery",
  "/contact-us",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
