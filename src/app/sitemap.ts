import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/mdx";

export const dynamic = "force-static";

const siteUrl = "https://arockia.cloud";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/profile", "/services", "/projects", "/blog", "/contact"].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
    })
  );

  const blogRoutes = getAllSlugs().map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...blogRoutes];
}
