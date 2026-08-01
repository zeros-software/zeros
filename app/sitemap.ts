import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/es", priority: 1, changeFrequency: "monthly" as const },
    { path: "/en", priority: 0.8, changeFrequency: "monthly" as const },
    {
      path: "/es/automation",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/en/automation",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date("2026-07-30"),
    changeFrequency,
    priority,
  }))
}
