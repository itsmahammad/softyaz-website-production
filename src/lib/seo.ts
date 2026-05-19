import type { Metadata } from "next";
import { siteConfig, type Locale } from "@/config/site";
import { localeAlternates, localizedPath } from "@/lib/i18n";

type MetaInput = {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  image?: string;
};

export function createMetadata({ locale, path = "", title, description, image = "/og.jpg" }: MetaInput): Metadata {
  const url = `${siteConfig.siteUrl}${localizedPath(locale, path)}`;
  return {
    title,
    description,
    metadataBase: new URL(siteConfig.siteUrl),
    alternates: {
      canonical: url,
      languages: {
        ...localeAlternates(path),
        "x-default": `${siteConfig.siteUrl}/az${path ? `/${path}` : ""}`
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    },
    robots: { index: true, follow: true }
  };
}
