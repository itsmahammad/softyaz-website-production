import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig, type Locale } from "@/config/site";
import { isLocale, localizedPath } from "@/lib/i18n";

export function generateStaticParams() {
  return siteConfig.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const currentUrl = new URL(localizedPath(locale), siteConfig.siteUrl).toString();
  const logoUrl = new URL("/icons/softyaz-mark-512.png", siteConfig.siteUrl).toString();
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.siteUrl}/#business`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    image: new URL("/og.jpg", siteConfig.siteUrl).toString(),
    logo: logoUrl,
    description: siteConfig.tagline[locale],
    priceRange: "AZN 15+",
    areaServed: [
      { "@type": "Country", name: "Azerbaijan" },
      { "@type": "City", name: "Baku" }
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country
    },
    availableLanguage: ["az", "ru", "en"],
    sameAs: [siteConfig.instagram, siteConfig.linkedin, siteConfig.personalWebsite],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.whatsappDisplay,
      contactType: "customer support",
      areaServed: "AZ",
      availableLanguage: ["az", "ru", "en"]
    }
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    inLanguage: locale,
    publisher: { "@id": `${siteConfig.siteUrl}/#business` },
    potentialAction: {
      "@type": "CommunicateAction",
      target: currentUrl,
      name: siteConfig.tagline[locale]
    }
  };

  return (
    <>
      <JsonLd data={businessSchema} />
      <JsonLd data={websiteSchema} />
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
      <FloatingContactButton locale={locale} />
    </>
  );
}
