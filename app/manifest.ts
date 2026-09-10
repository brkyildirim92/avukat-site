import type { MetadataRoute } from "next";
import { siteConfig } from "./lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Gamze Yıldırım",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#10263e",
    theme_color: "#10263e",
    icons: [
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
