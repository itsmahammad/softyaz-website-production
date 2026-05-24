import { siteConfig, type Locale } from "@/config/site";
import { blogPosts } from "@/content/blog";
import { services } from "@/content/services";
import { seoPackages } from "@/content/seoPackages";
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

function absoluteUrl(locale: Locale, route: string) {
  try {
    return new URL(localizedPath(locale, route), siteConfig.siteUrl).toString();
  } catch {
    return null;
  }
}

function xmlEscape(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function sitemapRoutes() {
  const serviceRoutes = services.map((service) => (service.slug ? `xidmetler/${service.slug}` : null));
  const blogRoutes = blogPosts.map((post) => (post.slug ? `blog/${post.slug}` : null));
  const packageRoutes = seoPackages.map((pack) => (pack.slug ? `paketler/${pack.slug}` : null));
  return Array.from(new Set([...coreRoutes, ...serviceRoutes, ...blogRoutes, ...packageRoutes].map(normalizeRoute).filter((route): route is string => route !== null)));
}

function priority(route: string) {
  if (route === "") return "1.0";
  if (route.includes("xidmetler/")) return "0.85";
  return "0.7";
}

function changeFrequency(route: string) {
  return route.includes("blog/") ? "monthly" : "weekly";
}

export async function GET() {
  const now = new Date().toISOString();
  const routes = sitemapRoutes();
  const urlBlocks: string[] = [];

  for (const locale of siteConfig.locales) {
    for (const route of routes) {
      const loc = absoluteUrl(locale, route);
      if (!loc) {
        continue;
      }

      urlBlocks.push(`  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changeFrequency(route)}</changefreq>
    <priority>${priority(route)}</priority>
  </url>`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlBlocks.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
}
