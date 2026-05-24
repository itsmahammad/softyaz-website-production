import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig, type Locale } from "@/config/site";
import { getSeoPackage, seoPackages } from "@/content/seoPackages";
import { getService } from "@/content/services";
import { getDictionary } from "@/i18n";
import { isLocale, localizedPath, whatsappLink } from "@/lib/i18n";
import { createMetadata, siteUrl } from "@/lib/seo";
import { MessageCircle } from "lucide-react";

export function generateStaticParams() {
  return siteConfig.locales.flatMap((locale) => seoPackages.map((pack) => ({ locale, slug: pack.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : "az";
  const pack = getSeoPackage(slug);
  if (!pack) return {};
  return createMetadata({ locale, path: `paketler/${slug}`, title: pack.seoTitle[locale], description: pack.description[locale] });
}

export default async function PackageLandingPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const pack = getSeoPackage(slug);
  if (!pack) notFound();
  const t = getDictionary(locale);
  const Icon = pack.icon;
  const url = siteUrl(localizedPath(locale, `paketler/${pack.slug}`));
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: pack.title[locale],
    description: pack.description[locale],
    provider: { "@id": `${siteConfig.siteUrl}/#business`, "@type": "ProfessionalService", name: siteConfig.name },
    areaServed: ["Baku", "Azerbaijan"],
    url
  };
  const message = `${pack.title[locale]} haqqinda melumat almaq isteyirem.`;
  return (
    <>
      <JsonLd data={schema} />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-violet-300/10 text-violet-200"><Icon size={28} /></div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-200">Softy.az</p>
            <h1 className="mt-4 text-balance text-4xl font-black text-white md:text-5xl">{pack.title[locale]}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{pack.description[locale]}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappLink(message)} external><MessageCircle size={18} /> {t.cta.whatsapp}</ButtonLink>
              <ButtonLink href={localizedPath(locale, "paketler")} variant="secondary">{t.nav.packages}</ButtonLink>
            </div>
          </div>
          <aside className="glass rounded-2xl p-6">
            <h2 className="text-xl font-black text-white">{locale === "az" ? "Paketə daxildir" : "Includes"}</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
              {pack.includes[locale].map((item) => <li key={item} className="rounded-xl border border-violet-300/12 bg-[#102A5C]/34 p-3">{item}</li>)}
            </ul>
          </aside>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="mb-5 text-2xl font-black text-white">{t.labels.related}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pack.related.map((slug) => {
            const service = getService(slug);
            if (!service) return null;
            return <Link key={slug} className="glass rounded-2xl p-5 text-sm font-bold text-violet-100 transition hover:border-violet-200/24" href={localizedPath(locale, `xidmetler/${slug}`)}>{service.title[locale]}</Link>;
          })}
        </div>
      </section>
    </>
  );
}
