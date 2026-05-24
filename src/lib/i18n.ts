import { siteConfig, type Locale } from "@/config/site";

export function isLocale(value: string): value is Locale {
  return siteConfig.locales.includes(value as Locale);
}

export function localizedPath(locale: Locale, path = "") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean === "/" ? "" : clean}`;
}

export function localeAlternates(path = "") {
  return Object.fromEntries(siteConfig.locales.map((locale) => [locale, new URL(localizedPath(locale, path), siteConfig.siteUrl).toString()]));
}

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
