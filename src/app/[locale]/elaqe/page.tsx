import type { Metadata } from "next";
import { Instagram, Linkedin, MessageCircle, UserRound } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig, type Locale } from "@/config/site";
import { getDictionary } from "@/i18n";
import { isLocale, whatsappLink } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "az";
  return createMetadata({ locale, path: "elaqe", title: locale === "az" ? "Əlaqə | Softy.az" : locale === "ru" ? "Контакты | Softy.az" : "Contact | Softy.az", description: locale === "az" ? "Softy.az ilə WhatsApp, Instagram Direct və LinkedIn vasitəsilə əlaqə saxlayın." : locale === "ru" ? "Свяжитесь с Softy.az через WhatsApp, Instagram Direct и LinkedIn." : "Contact Softy.az through WhatsApp, Instagram Direct and LinkedIn." });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "az") as Locale;
  const t = getDictionary(locale);
  const message = locale === "az" ? "Salam, Softy.az xidmətləri ilə maraqlanıram." : locale === "ru" ? "Здравствуйте, интересуюсь услугами Softy.az." : "Hi, I am interested in Softy.az services.";
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title={t.nav.contact} text={locale === "az" ? "Ən sürətli cavab üçün WhatsApp və ya Instagram Direct ilə yazın." : locale === "ru" ? "Для быстрого ответа напишите в WhatsApp или Instagram Direct." : "For the fastest response, message us on WhatsApp or Instagram Direct."} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <ButtonLink href={whatsappLink(message)} external className="min-h-28 flex-col"><MessageCircle /> {siteConfig.whatsappDisplay}</ButtonLink>
          <ButtonLink href={siteConfig.instagram} external variant="secondary" className="min-h-28 flex-col"><Instagram /> Instagram</ButtonLink>
          <ButtonLink href={siteConfig.linkedin} external variant="ghost" className="min-h-28 flex-col"><Linkedin /> LinkedIn</ButtonLink>
          <ButtonLink href={siteConfig.personalWebsite} external variant="ghost" className="min-h-28 flex-col"><UserRound /> Portfolio</ButtonLink>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-black">{locale === "az" ? "Necə məlumat göndərmək daha yaxşıdır?" : locale === "ru" ? "Что лучше отправить?" : "What should you send?"}</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
              <li>{locale === "az" ? "Cihaz modeli və Windows/macOS/Linux versiyası" : locale === "ru" ? "Модель устройства и версия Windows/macOS/Linux" : "Device model and Windows/macOS/Linux version"}</li>
              <li>{locale === "az" ? "Lazım olan proqramların siyahısı" : locale === "ru" ? "Список нужных программ" : "List of required apps"}</li>
              <li>{locale === "az" ? "Varsa xəta mesajının screenshot-u" : locale === "ru" ? "Скриншот ошибки, если есть" : "Screenshot of the error, if any"}</li>
            </ul>
          </div>
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-black">{locale === "az" ? "Xidmət formatı" : locale === "ru" ? "Формат услуги" : "Service format"}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{locale === "az" ? "Bakı üzrə cihaz təhvil xidməti razılaşdırıla bilər. Azərbaycan üzrə uyğun proqram və sistem problemləri üçün uzaqdan dəstək verilir." : locale === "ru" ? "В Баку можно договориться о передаче устройства. По Азербайджану доступна удаленная поддержка для подходящих задач." : "Device handoff can be arranged in Baku. Remote support is available across Azerbaijan for suitable software and system issues."}</p>
          </div>
        </div>
      </section>
      <CTASection locale={locale} title={locale === "az" ? "Elə indi yazın" : locale === "ru" ? "Напишите сейчас" : "Message now"} text={locale === "az" ? "Proqram siyahınızı göndərin, qiymət və vaxt barədə məlumat verək." : locale === "ru" ? "Отправьте список программ, и мы уточним цену и сроки." : "Send your app list and we will clarify price and timing."} />
    </>
  );
}
