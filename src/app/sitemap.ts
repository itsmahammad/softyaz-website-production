import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/content/blog";
import { services } from "@/content/services";
import { localizedPath } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = ["", "xidmetler", "paketler", "faq", "blog", "elaqe"];
  const servicePaths = services.map((service) => `xidmetler/${service.slug}`);
  const blogPaths = blogPosts.map((post) => `blog/${post.slug}`);
  const paths = [...base, ...servicePaths, ...blogPaths];
  return siteConfig.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteConfig.siteUrl}${localizedPath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: path.includes("blog/") ? "monthly" : "weekly",
      priority: path === "" ? 1 : path.includes("xidmetler/") ? 0.85 : 0.7
    }))
  );
}
