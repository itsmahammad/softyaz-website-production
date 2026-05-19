import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig, type Locale } from "@/config/site";
import { isLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return siteConfig.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    areaServed: ["Azerbaijan", "Baku"],
    availableLanguage: ["Azerbaijani", "Russian", "English"],
    sameAs: [siteConfig.instagram, siteConfig.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.whatsappDisplay,
      contactType: "customer support",
      availableLanguage: ["az", "ru", "en"]
    }
  };

  return (
    <>
      <JsonLd data={businessSchema} />
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
      <FloatingContactButton locale={locale} />
    </>
  );
}
