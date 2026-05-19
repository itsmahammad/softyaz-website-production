import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/content/blog";
import { services } from "@/content/services";
import { localizedPath } from "@/lib/i18n";

const coreRoutes = ["", "xidmetler", "paketler", "faq", "blog", "elaqe"] as const;

function normalizeRoute(route: unknown) {
  if (typeof route !== "string") {
    return null;
  }

  const clean = route.trim().replace(/^\/+/, "").replace(/\/+$/, "");
  if (clean.includes("//")) {
    return null;
  }

  return clean;
}

function toAbsoluteUrl(locale: (typeof siteConfig.locales)[number], route: string) {
  try {
    return new URL(localizedPath(locale, route), siteConfig.siteUrl).toString();
  } catch {
    return null;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map((service) => (service.slug ? `xidmetler/${service.slug}` : null));
  const blogRoutes = blogPosts.map((post) => (post.slug ? `blog/${post.slug}` : null));
  const routes = Array.from(new Set([...coreRoutes, ...serviceRoutes, ...blogRoutes].map(normalizeRoute).filter((route): route is string => route !== null)));
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of siteConfig.locales) {
    for (const route of routes) {
      const url = toAbsoluteUrl(locale, route);
      if (!url) {
        continue;
      }

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.includes("blog/") ? "monthly" : "weekly",
        priority: route === "" ? 1 : route.includes("xidmetler/") ? 0.85 : 0.7
      });
    }
  }

  return entries;
}
