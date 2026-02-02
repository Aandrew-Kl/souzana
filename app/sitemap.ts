import type { MetadataRoute } from "next"
import { site } from "@/lib/site"
import { posts } from "@/lib/content"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/practice-areas", "/team", "/insights", "/contact", "/privacy"]
  const postRoutes = posts.map((post) => `/insights/${post.slug}`)

  return [...routes, ...postRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }))
}
