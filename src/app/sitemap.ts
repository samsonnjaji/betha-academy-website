import type { MetadataRoute } from "next";
import { pageUrl } from "@/lib/seo";

const routes = [
  "/",
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
    url: pageUrl(route),
  }));
}
