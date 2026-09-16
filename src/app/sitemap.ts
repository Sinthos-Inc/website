import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://sinthosinc.com", changeFrequency: "monthly", priority: 1 },
  ];
}
