import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Betha Academy",
    short_name: "Betha Academy",
    description:
      "Quality CBC education in a safe, caring, and supportive environment.",
    start_url: "/",
    display: "standalone",
    background_color: "#fcfaf5",
    theme_color: "#123f34",
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
