import type { MetadataRoute } from "next"

const siteUrl = "https://alexrivera.dev" // ← replace with your domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
