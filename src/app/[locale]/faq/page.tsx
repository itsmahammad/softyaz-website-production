import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FAQList } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale } from "@/config/site";
import { faqs } from "@/content/faqs";
import { getDictionary } from "@/i18n";
import { isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "az";
  return createMetadata({ locale, path: "faq", title: locale === "az" ? "FAQ | Proqram quraşdırılması sualları | Softy.az" : locale === "ru" ? "FAQ | Вопросы по установке программ | Softy.az" : "FAQ | Software installation questions | Softy.az", description: locale === "az" ? "Proqram quraşdırılması, Windows formatlama, AutoCAD, Adobe, driver və uzaqdan dəstək haqqında tez-tez verilən suallar." : locale === "ru" ? "Частые вопросы об установке программ, Windows, AutoCAD, Adobe, драйверах и remote support." : "Frequently asked questions about software installation, Windows, AutoCAD, Adobe, drivers and remote support." });
}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "az") as Locale;
  const t = getDictionary(locale);
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs[locale].map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  return (
    <>
      <JsonLd data={schema} />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title={t.nav.faq} text={locale === "az" ? "Softy.az xidmətləri haqqında ən çox verilən suallar." : locale === "ru" ? "Самые частые вопросы об услугах Softy.az." : "Common questions about Softy.az services."} />
        <FAQList items={faqs[locale]} />
      </section>
      <CTASection locale={locale} title={locale === "az" ? "Sualınız siyahıda yoxdur?" : locale === "ru" ? "Не нашли свой вопрос?" : "Did not find your question?"} text={locale === "az" ? "WhatsApp ilə yazın, vəziyyətinizə uyğun cavab verək." : locale === "ru" ? "Напишите в WhatsApp, и мы ответим по вашей ситуации." : "Message us on WhatsApp and we will answer based on your situation."} />
    </>
  );
}
