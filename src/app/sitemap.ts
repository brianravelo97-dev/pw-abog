import type { MetadataRoute } from "next";
import { areas } from "@/lib/areas";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...areas.map((a) => ({
      url: `${site.url}/areas/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${site.url}/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
