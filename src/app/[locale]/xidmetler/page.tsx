import type { Metadata } from "next";
import { ServiceCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { categoryLabels, extraServices, services } from "@/content/services";
import { getDictionary } from "@/i18n";
import { isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";
import type { Locale } from "@/config/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "az";
  return createMetadata({
    locale,
    path: "xidmetler",
    title: locale === "az" ? "Xidmətlər | Proqram quraşdırılması Bakı və Azərbaycan | Softy.az" : locale === "ru" ? "Услуги | Установка программ в Баку | Softy.az" : "Services | Software installation in Baku | Softy.az",
    description: locale === "az" ? "Windows, Linux, Adobe, AutoCAD, Revit, Office, driver, optimizasiya və uzaqdan texniki dəstək xidmətləri." : locale === "ru" ? "Windows, Linux, Adobe, AutoCAD, Revit, Office, драйверы, оптимизация и удаленная поддержка." : "Windows, Linux, Adobe, AutoCAD, Revit, Office, drivers, optimization and remote support."
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "az") as Locale;
  const t = getDictionary(locale);
  const categories = Object.keys(categoryLabels[locale]) as Array<keyof typeof categoryLabels[typeof locale]>;

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title={t.nav.services} text={locale === "az" ? "Proqram quraşdırılması, sistem setup, driverlər və texniki dəstək üçün bütün əsas xidmətlər." : locale === "ru" ? "Все основные услуги по установке программ, настройке системы, драйверам и поддержке." : "All core services for software installation, system setup, drivers and support."} />
        <div className="grid gap-10">
          {categories.map((category) => {
            const group = services.filter((service) => service.category === category);
            if (!group.length) return null;
            return (
              <section key={category}>
                <h2 className="mb-5 text-2xl font-black text-white">{categoryLabels[locale][category]}</h2>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{group.map((service) => <ServiceCard key={service.slug} service={service} locale={locale} />)}</div>
              </section>
            );
          })}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {extraServices.map((item) => {
            const Icon = item.icon;
            return <div key={item.title[locale]} className="glass rounded-xl p-5"><Icon className="mb-4 text-cyan-300" /><h3 className="text-lg font-bold">{item.title[locale]}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{item.text[locale]}</p></div>;
          })}
        </div>
      </section>
      <CTASection locale={locale} title={locale === "az" ? "Hansı proqram lazımdır?" : locale === "ru" ? "Какая программа нужна?" : "Which software do you need?"} text={locale === "az" ? "WhatsApp ilə yazın, cihazınıza və ehtiyacınıza uyğun variantı seçək." : locale === "ru" ? "Напишите в WhatsApp, и мы подберем вариант под устройство и задачу." : "Message us on WhatsApp and we will suggest the right option for your device and needs."} />
    </>
  );
}
