import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { ServiceCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { FAQList } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig, type Locale } from "@/config/site";
import { getService, services } from "@/content/services";
import { getSoftwareItems, serviceSoftware } from "@/content/software";
import { getDictionary } from "@/i18n";
import { isLocale, localizedPath, whatsappLink } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";
import { SoftwareLogoGroup } from "@/components/SoftwareLogo";

export function generateStaticParams() {
  return siteConfig.locales.flatMap((locale) => services.map((service) => ({ locale, slug: service.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : "az";
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({ locale, path: `xidmetler/${slug}`, title: service.seoTitle[locale], description: service.meta[locale] });
}

export default async function ServiceLandingPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const service = getService(slug);
  if (!service) notFound();
  const t = getDictionary(locale);
  const related = services.filter((item) => item.slug !== service.slug && item.category === service.category).slice(0, 3);
  const supportedSoftware = getSoftwareItems(serviceSoftware[service.slug] ?? []);
  const message = locale === "az" ? `Salam, ${service.title.az} xidməti haqqında məlumat almaq istəyirəm.` : locale === "ru" ? `Здравствуйте, хочу узнать про услугу: ${service.title.ru}.` : `Hi, I want to ask about ${service.title.en}.`;
  const serviceUrl = `${siteConfig.siteUrl}${localizedPath(locale, `xidmetler/${service.slug}`)}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title[locale],
    description: service.meta[locale],
    provider: { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.siteUrl },
    areaServed: ["Baku", "Azerbaijan"],
    url: serviceUrl
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq[locale].map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } }))
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.nav.home, item: `${siteConfig.siteUrl}${localizedPath(locale)}` },
      { "@type": "ListItem", position: 2, name: t.nav.services, item: `${siteConfig.siteUrl}${localizedPath(locale, "xidmetler")}` },
      { "@type": "ListItem", position: 3, name: service.title[locale], item: serviceUrl }
    ]
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs locale={locale} items={[{ label: t.nav.services, href: localizedPath(locale, "xidmetler") }, { label: service.title[locale] }]} />
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Softy.az</p>
            <h1 className="text-balance text-4xl font-black text-white md:text-5xl">{service.title[locale]}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{service.intro[locale]}</p>
            {supportedSoftware.length ? (
              <div className="mt-7 rounded-2xl border border-cyan-300/8 bg-[#0A1228]/42 p-4 shadow-[inset_0_1px_0_rgba(248,250,252,0.025)]">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-cyan-200">
                  {locale === "az" ? "Dəstəklənən proqramlar" : locale === "ru" ? "Поддерживаемые программы" : "Supported software"}
                </p>
                <SoftwareLogoGroup items={supportedSoftware} maxVisible={6} size="md" showLabels />
              </div>
            ) : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappLink(message)} external><MessageCircle size={18} /> {t.cta.whatsapp}</ButtonLink>
              <ButtonLink href={localizedPath(locale, "paketler")} variant="secondary">{t.nav.packages}</ButtonLink>
            </div>

            <section className="mt-12">
              <h2 className="text-2xl font-black text-white">{locale === "az" ? "Xidmətə nələr daxildir?" : locale === "ru" ? "Что входит в услугу?" : "What is included?"}</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.includes[locale].map((item) => (
                  <div key={item} className="flex gap-3 rounded-xl border border-cyan-300/8 bg-[#0A1228]/42 p-4 text-sm text-slate-200">
                    <CheckCircle2 className="shrink-0 text-cyan-300" size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-black text-white">{locale === "az" ? "Kimlər üçün uyğundur?" : locale === "ru" ? "Кому подходит?" : "Who is it for?"}</h2>
              <ul className="mt-5 grid gap-3 text-slate-300">
                {service.audience[locale].map((item) => <li key={item} className="rounded-xl border border-cyan-300/8 bg-[#0A1228]/42 p-4">{item}</li>)}
              </ul>
            </section>
          </div>
          <aside className="glass h-fit rounded-xl p-6">
            <h2 className="text-xl font-black text-white">{t.cta.askPrice}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{locale === "az" ? "Proqram adı, cihaz modeli və istədiyiniz xidmət formatını yazın. Qiymət və vaxt barədə məlumat verək." : locale === "ru" ? "Напишите программу, модель устройства и формат услуги. Уточним цену и сроки." : "Send the app name, device model and preferred service format. We will clarify price and timing."}</p>
            <ButtonLink href={whatsappLink(message)} external className="mt-5 w-full"><MessageCircle size={18} /> {t.cta.whatsapp}</ButtonLink>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-black text-white">FAQ</h2>
        <FAQList items={service.faq[locale]} />
      </section>

      {related.length ? (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-black text-white">{t.labels.related}</h2>
          <div className="grid gap-5 md:grid-cols-3">{related.map((item) => <ServiceCard key={item.slug} service={item} locale={locale} />)}</div>
        </section>
      ) : null}

      <CTASection locale={locale} title={locale === "az" ? "Bu xidmət sizə uyğundur?" : locale === "ru" ? "Эта услуга вам подходит?" : "Is this service right for you?"} text={locale === "az" ? "WhatsApp ilə yazın, proqram və cihazınıza görə ən rahat həlli seçək." : locale === "ru" ? "Напишите в WhatsApp, подберем решение под программу и устройство." : "Message us on WhatsApp and we will choose the best option for your app and device."} />
    </>
  );
}
