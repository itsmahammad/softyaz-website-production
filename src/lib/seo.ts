import type { Metadata } from "next";
import { siteConfig, type Locale } from "@/config/site";
import { localeAlternates, localizedPath } from "@/lib/i18n";

type MetaInput = {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
};

const ogLocales: Record<Locale, string> = {
  az: "az_AZ",
  ru: "ru_RU",
  en: "en_US"
};

export function siteUrl(path = "") {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function createMetadata({ locale, path = "", title, description, image = "/og.jpg", type = "website" }: MetaInput): Metadata {
  const pathname = localizedPath(locale, path);
  const url = siteUrl(pathname);
  const imageUrl = siteUrl(image);

  return {
    title,
    description,
    applicationName: siteConfig.name,
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology services",
    metadataBase: new URL(siteConfig.siteUrl),
    alternates: {
      canonical: url,
      languages: {
        ...localeAlternates(path),
        "x-default": siteUrl(localizedPath(siteConfig.defaultLocale as Locale, path))
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: ogLocales[locale],
      alternateLocale: siteConfig.locales.filter((item) => item !== locale).map((item) => ogLocales[item]),
      type,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: siteConfig.name + " - " + siteConfig.tagline[locale] }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    }
  };
}
