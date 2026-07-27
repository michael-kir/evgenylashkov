import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
const siteUrl =
    "https://www.evgeny-lashkov.ru";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
