import type { Metadata } from "next";
import { PackageCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig, type Locale } from "@/config/site";
import { packages } from "@/content/packages";
import { getDictionary } from "@/i18n";
import { isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "az";
  return createMetadata({ locale, path: "paketler", title: locale === "az" ? "Paketlər və qiymətlər | Softy.az" : locale === "ru" ? "Пакеты и цены | Softy.az" : "Packages and pricing | Softy.az", description: locale === "az" ? "Adobe 20 AZN-dən, memarlıq proqramları 25 AZN-dən başlayaraq. 3 və daha çox proqramda 20% endirim." : locale === "ru" ? "Adobe от 20 AZN, архитектурные программы от 25 AZN. 20% скидка на 3 и более программ." : "Adobe from 20 AZN, architecture apps from 25 AZN. 20% discount for 3 or more apps." });
}

export default async function PackagesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "az") as Locale;
  const t = getDictionary(locale);
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title={t.nav.packages} text={siteConfig.discount[locale]} />
        <div className="mb-8 rounded-xl border border-cyan-300/10 bg-[#0A1228]/46 p-5 text-sm leading-6 text-cyan-50 shadow-[inset_0_1px_0_rgba(248,250,252,0.025)]">{t.labels.exactPrice}</div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{packages.map((pack) => <PackageCard key={pack.id} pack={pack} locale={locale} />)}</div>
      </section>
      <CTASection locale={locale} title={locale === "az" ? "Dəqiq qiymət istəyirsiniz?" : locale === "ru" ? "Хотите точную цену?" : "Need an exact price?"} text={locale === "az" ? "Dəqiq qiymət üçün WhatsApp və ya Instagram Direct vasitəsilə yazın." : locale === "ru" ? "Для точной цены напишите в WhatsApp или Instagram Direct." : "For an exact quote, message us on WhatsApp or Instagram Direct."} />
    </>
  );
}
