import type { MetadataRoute } from "next";
import { school } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: school.name,
    short_name: school.name,
    description: school.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fcfaf5",
    theme_color: "#123f34",
    lang: "en-KE",
    icons: [
      {
        src: "/brand/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
