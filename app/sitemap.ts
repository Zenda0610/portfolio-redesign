import type { MetadataRoute } from "next"

const siteUrl = "https://alexrivera.dev" // ← replace with your domain

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
