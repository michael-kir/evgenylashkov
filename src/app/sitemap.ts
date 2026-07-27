import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
const siteUrl =
    "https://www.evgeny-lashkov.ru";

  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date("2026-06-10"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
