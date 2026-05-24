import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Cpu,
  DraftingCompass,
  GraduationCap,
  Headphones,
  Instagram,
  Laptop,
  MapPin,
  MessageCircle,
  MonitorCog,
  Palette,
  ShieldCheck,
  Sparkles,
  UserRound,
  WandSparkles,
  Wrench
} from "lucide-react";
import { BlogCard, PackageCard } from "@/components/Cards";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FAQList } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig, type Locale } from "@/config/site";
import { blogPosts } from "@/content/blog";
import { faqs } from "@/content/faqs";
import { packages } from "@/content/packages";
import { getSoftwareItems, softwareById, type SoftwareId } from "@/content/software";
import { getDictionary } from "@/i18n";
import { isLocale, localizedPath, whatsappLink } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";
import { SoftwareLogo, SoftwareLogoGroup } from "@/components/SoftwareLogo";

type CardIcon = typeof MonitorCog;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "az";
  const t = getDictionary(locale);
  return createMetadata({
    locale,
    title:
      locale === "az"
        ? "Softy.az | Proqram quraşdırılması və texniki dəstək"
        : locale === "ru"
          ? "Softy.az | Установка программ и техническая поддержка"
          : "Softy.az | Software installation and technical support",
    description: t.home.description
  });
}

const popularRequests = [
  { label: "Windows 11", status: "setup", software: "windows" },
  { label: "Adobe", status: "popular", software: "photoshop" },
  { label: "AutoCAD", status: "popular", software: "autocad" },
  { label: "Revit", status: "popular", software: "revit" },
  { label: "Office", status: "setup", software: "office" },
  { label: "Driverl?r", status: "setup", software: "nvidia" }
] satisfies Array<{ label: string; status: "setup" | "popular"; software: SoftwareId }>;

const popularStatus: Record<Locale, Record<"setup" | "popular", string>> = {
  az: { setup: "Qurulum", popular: "Populyar" },
  ru: { setup: "?????????", popular: "?????????" },
  en: { setup: "Setup", popular: "Popular" }
};

const categoryLogoIds: Record<string, SoftwareId[]> = {
  "xidmetler/windows-qurasdirilmasi": ["windows", "linux", "macos"],
  "xidmetler/arxitektura-proqramlari": ["autocad", "revit", "3ds-max", "sketchup", "d5-render", "vray"],
  "xidmetler/adobe-qurasdirilmasi": ["photoshop", "illustrator", "premiere", "after-effects", "lightroom"],
  "xidmetler/driver-qurasdirilmasi": ["nvidia", "intel", "windows"],
  "xidmetler/uzagdan-destek": ["windows", "office", "autocad"]
};

const serviceCategories: Record<Locale, Array<{ title: string; text: string; href: string; icon: CardIcon }>> = {
  az: [
    { title: "Əməliyyat sistemləri", text: "Windows, Linux, formatlama və ilkin sazlama", href: "xidmetler/windows-qurasdirilmasi", icon: MonitorCog },
    { title: "Peşəkar proqramlar", text: "AutoCAD, Revit, 3ds Max, SketchUp, SolidWorks və MATLAB", href: "xidmetler/arxitektura-proqramlari", icon: DraftingCompass },
    { title: "Adobe və dizayn", text: "Photoshop, Illustrator, Premiere Pro, After Effects, Lightroom", href: "xidmetler/adobe-qurasdirilmasi", icon: Palette },
    { title: "Render və pluginlər", text: "D5 Render, Lumion, Enscape, V-Ray və digər pluginlər", href: "xidmetler/arxitektura-proqramlari", icon: WandSparkles },
    { title: "Driver və optimizasiya", text: "Driverlər, performans ayarları və sistem təmizliyi", href: "xidmetler/driver-qurasdirilmasi", icon: Wrench },
    { title: "Uzaqdan texniki dəstək", text: "Proqram xətaları, quraşdırma köməyi və məsləhət", href: "xidmetler/uzagdan-destek", icon: Headphones }
  ],
  ru: [
    { title: "Операционные системы", text: "Windows, Linux, форматирование и базовая настройка", href: "xidmetler/windows-qurasdirilmasi", icon: MonitorCog },
    { title: "Профессиональные программы", text: "AutoCAD, Revit, 3ds Max, SketchUp, SolidWorks, MATLAB", href: "xidmetler/arxitektura-proqramlari", icon: DraftingCompass },
    { title: "Adobe и дизайн", text: "Photoshop, Illustrator, Premiere Pro, After Effects, Lightroom", href: "xidmetler/adobe-qurasdirilmasi", icon: Palette },
    { title: "Render и плагины", text: "D5 Render, Lumion, Enscape, V-Ray и другие плагины", href: "xidmetler/arxitektura-proqramlari", icon: WandSparkles },
    { title: "Драйверы и оптимизация", text: "Драйверы, performance settings и очистка системы", href: "xidmetler/driver-qurasdirilmasi", icon: Wrench },
    { title: "Удаленная поддержка", text: "Ошибки программ, помощь с установкой, консультация", href: "xidmetler/uzagdan-destek", icon: Headphones }
  ],
  en: [
    { title: "Operating systems", text: "Windows, Linux, formatting and base setup", href: "xidmetler/windows-qurasdirilmasi", icon: MonitorCog },
    { title: "Professional software", text: "AutoCAD, Revit, 3ds Max, SketchUp, SolidWorks, MATLAB", href: "xidmetler/arxitektura-proqramlari", icon: DraftingCompass },
    { title: "Adobe and design", text: "Photoshop, Illustrator, Premiere Pro, After Effects, Lightroom", href: "xidmetler/adobe-qurasdirilmasi", icon: Palette },
    { title: "Render and plugins", text: "D5 Render, Lumion, Enscape, V-Ray and other plugins", href: "xidmetler/arxitektura-proqramlari", icon: WandSparkles },
    { title: "Drivers and optimization", text: "Drivers, performance settings and system cleanup", href: "xidmetler/driver-qurasdirilmasi", icon: Wrench },
    { title: "Remote technical support", text: "Software errors, installation help and consultation", href: "xidmetler/uzagdan-destek", icon: Headphones }
  ]
};

const audience: Record<Locale, Array<{ title: string; text: string; icon: CardIcon }>> = {
  az: [
    { title: "Tələbələr", text: "Dərs, kurs işi və layihələr üçün lazım olan proqramlar.", icon: GraduationCap },
    { title: "Memarlar və dizaynerlər", text: "Çizim, model, render və təqdimat alətləri.", icon: DraftingCompass },
    { title: "Mühəndislər", text: "Texniki proqramlar və stabil iş mühiti.", icon: Cpu },
    { title: "Freelancerlər", text: "İşə hazır laptop və uzaqdan problem həlli.", icon: Laptop },
    { title: "Ofis işçiləri", text: "Office, PDF, printer və gündəlik alətlər.", icon: BriefcaseBusiness },
    { title: "Gündəlik istifadəçilər", text: "Formatlama, driver, təhlükəsizlik və optimizasiya.", icon: UserRound }
  ],
  ru: [
    { title: "Студенты", text: "Программы для учебы и проектов.", icon: GraduationCap },
    { title: "Архитекторы и дизайнеры", text: "Чертежи, моделирование, render и презентации.", icon: DraftingCompass },
    { title: "Инженеры", text: "Технические программы и стабильная среда.", icon: Cpu },
    { title: "Фрилансеры", text: "Готовый к работе ноутбук и remote help.", icon: Laptop },
    { title: "Офисные сотрудники", text: "Office, PDF, printer и ежедневные инструменты.", icon: BriefcaseBusiness },
    { title: "Обычные пользователи", text: "Форматирование, драйверы, безопасность и оптимизация.", icon: UserRound }
  ],
  en: [
    { title: "Students", text: "Software for classes, projects and coursework.", icon: GraduationCap },
    { title: "Architects and designers", text: "Drawing, modeling, render and presentation tools.", icon: DraftingCompass },
    { title: "Engineers", text: "Technical software and a stable work setup.", icon: Cpu },
    { title: "Freelancers", text: "Ready-to-work laptops and remote issue solving.", icon: Laptop },
    { title: "Office workers", text: "Office, PDF, printer and everyday tools.", icon: BriefcaseBusiness },
    { title: "Daily users", text: "Formatting, drivers, security and optimization.", icon: UserRound }
  ]
};

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "az") as Locale;
  const t = getDictionary(locale);
  const heroMessage =
    locale === "az"
      ? "Salam, proqram quraşdırılması üçün məlumat almaq istəyirəm."
      : locale === "ru"
        ? "Здравствуйте, хочу узнать об установке программ."
        : "Hi, I want to ask about software installation.";

  const heroLines =
    locale === "az"
      ? [
          "Windows, Linux, Adobe, AutoCAD, Revit, Office və driverlər üçün sürətli quraşdırma xidməti.",
          "Bakı üzrə yerində xidmət, bütün Azərbaycan üzrə uzaqdan dəstək."
        ]
      : locale === "ru"
        ? [
            "Установка и поддержка Windows, Linux, Adobe, AutoCAD, Revit, Office и драйверов.",
            "Услуги в Баку и удаленная помощь по всему Азербайджану."
          ]
        : [
            "Fast setup and support for Windows, Linux, Adobe, AutoCAD, Revit, Office and drivers.",
            "In-person service in Baku and remote help across Azerbaijan."
          ];

  const trustBadges =
    locale === "az"
      ? [
          { text: "Bakı üzrə xidmət", icon: MapPin },
          { text: "Azərbaycan üzrə uzaqdan dəstək", icon: Headphones },
          { text: "3 və daha çox proqramda 20% endirim", icon: BadgeCheck },
          { text: "Tələbələr və peşəkarlar üçün", icon: GraduationCap },
          { text: "Windows / Linux / macOS dəstəyi", icon: MonitorCog }
        ]
      : locale === "ru"
        ? [
            { text: "Услуги в Баку", icon: MapPin },
            { text: "Удаленная поддержка по Азербайджану", icon: Headphones },
            { text: siteConfig.discount.ru, icon: BadgeCheck },
            { text: "Для студентов и специалистов", icon: GraduationCap },
            { text: "Windows / Linux / macOS support", icon: MonitorCog }
          ]
        : [
            { text: "Service in Baku", icon: MapPin },
            { text: "Remote support across Azerbaijan", icon: Headphones },
            { text: siteConfig.discount.en, icon: BadgeCheck },
            { text: "For students and professionals", icon: GraduationCap },
            { text: "Windows / Linux / macOS support", icon: MonitorCog }
          ];

  const homepagePackages = packages.filter((pack) => ["adobe", "architecture", "full"].includes(pack.id));
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs[locale].slice(0, 5).map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } }))
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="relative overflow-hidden">
        <div className="absolute left-[-12rem] top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-[#2563EB]/14 blur-3xl" />
        <div className="absolute right-[-10rem] top-20 h-[30rem] w-[30rem] rounded-full bg-[#8B5CF6]/14 blur-3xl" />
        <div className="absolute bottom-[-16rem] right-[-12rem] h-[36rem] w-[36rem] rounded-full bg-[#A78BFA]/9 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-14 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:pb-24 md:pt-20 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-violet-300/10 bg-[#102A5C]/32 px-4 py-2 text-sm font-semibold text-violet-100 shadow-[inset_0_1px_0_rgba(248,250,252,0.02)]">
              <Sparkles size={16} /> {t.labels.serviceArea}
            </p>
            <h1 className="text-balance text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">{t.home.title}</h1>
            <div className="mt-6 max-w-2xl space-y-3 text-lg leading-8 text-slate-300/95">
              {heroLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappLink(heroMessage)} external>
                <MessageCircle size={18} /> {t.cta.whatsapp}
              </ButtonLink>
              <ButtonLink href={localizedPath(locale, "xidmetler")} variant="secondary">
                {t.cta.viewServices}
              </ButtonLink>
              <ButtonLink href={siteConfig.instagram} external variant="ghost">
                <Instagram size={18} /> Instagram
              </ButtonLink>
            </div>
          </div>

          <div className="glass soft-float relative overflow-hidden rounded-[1.75rem] p-5 motion-reduce:animate-none sm:p-6">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#2563EB]/14 blur-3xl" />
            <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-[#8B5CF6]/16 blur-3xl" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-200">Softy.az</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white">{locale === "az" ? "Ən çox istənilənlər" : locale === "ru" ? "Чаще всего просят" : "Most requested"}</h2>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#3B6FF2] via-[#5B6EF1] to-[#8B5CF6] text-white shadow-[0_16px_38px_rgba(139,92,246,0.16)]">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {popularRequests.map((item) => {
                  return (
                    <div key={item.label} className="rounded-2xl border border-violet-300/8 bg-white/[0.035] p-4 transition duration-200 hover:bg-white/[0.05] hover:border-violet-300/14">
                      <div className="flex items-center gap-3">
                        <SoftwareLogo item={softwareById[item.software]} size="md" />
                        <div className="min-w-0">
                          <p className="font-semibold text-white">{item.label}</p>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.13em] text-violet-200/90">{popularStatus[locale][item.status]}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.text} className="rounded-2xl border border-violet-300/9 bg-gradient-to-br from-[#102A5C]/34 to-[#24194F]/28 p-4 text-sm font-semibold leading-6 text-slate-100 shadow-[inset_0_1px_0_rgba(248,250,252,0.018)] transition duration-200 hover:bg-violet-300/[0.035]">
                <span className="mb-3 grid h-9 w-9 place-items-center rounded-xl bg-violet-300/8 text-violet-200">
                  <Icon size={20} />
                </span>
                {badge.text}
              </div>
            );
          })}
        </div>
      </section>

      {locale === "az" ? (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-200">{"Populyar xidm\u0259t istiqam\u0259tl\u0259ri"}</p>
            <h2 className="mt-3 text-3xl font-black text-white">{"Bak\u0131da proqram qura\u015fd\u0131r\u0131lmas\u0131 v\u0259 komp\u00fcter format\u0131"}</h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300">{"Softy.az komp\u00fcter v\u0259 noutbuklar \u00fc\u00e7\u00fcn proqram yaz\u0131lmas\u0131, Windows qura\u015fd\u0131r\u0131lmas\u0131, komp\u00fcter format\u0131, driver, Office, antivirus, Adobe, AutoCAD, Revit, 3ds Max v\u0259 dig\u0259r dizayn/memarl\u0131q proqramlar\u0131 \u00fczr\u0259 texniki d\u0259st\u0259k g\u00f6st\u0259rir. Bak\u0131 \u00fczr\u0259 cihaz t\u0259hvili, uy\u011fun hallarda is\u0259 Az\u0259rbaycan \u00fczr\u0259 uzaqdan d\u0259st\u0259k m\u00fcmk\u00fcnd\u00fcr."}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                ["Proqram yaz\u0131lmas\u0131", "proqram-yazilmasi"],
                ["Komp\u00fcter format\u0131", "komputer-formati"],
                ["Windows qura\u015fd\u0131r\u0131lmas\u0131", "windows-qurasdirilmasi"],
                ["AutoCAD qura\u015fd\u0131r\u0131lmas\u0131", "autocad-qurasdirilmasi"],
                ["Adobe proqramlar\u0131", "adobe-proqramlari"],
                ["Driver qura\u015fd\u0131r\u0131lmas\u0131", "driver-qurasdirilmasi"],
                ["Formatdan sonra proqramlar", "formatdan-sonra-proqramlar"]
              ].map(([label, slug]) => (
                <Link key={slug} href={localizedPath(locale, "xidmetler/" + slug)} className="rounded-xl border border-violet-300/12 bg-[#102A5C]/36 px-4 py-3 text-sm font-bold text-violet-100 transition hover:border-violet-200/24 hover:bg-violet-300/8">{label}</Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          title={locale === "az" ? "Nə quraşdırırıq?" : locale === "ru" ? "Что устанавливаем?" : "What do we install?"}
          text={locale === "az" ? "Lazım olan xidməti daha rahat tapmağınız üçün əsas istiqamətləri qısa göstərdik." : locale === "ru" ? "Основные услуги сгруппированы, чтобы быстро найти нужное." : "Core services are grouped so you can find what you need quickly."}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories[locale].map((category) => (
            <CategoryCard key={category.title} locale={locale} {...category} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading title={t.home.howTitle} text={locale === "az" ? "Əvvəlcə ehtiyacınızı dəqiqləşdiririk, sonra uyğun quraşdırma formasını seçirik." : locale === "ru" ? "Процесс простой: пишете, уточняем задачу, готовим устройство и программы." : "The process is simple: message us, clarify the need, then your device and apps are prepared."} />
        <div className="grid gap-4 md:grid-cols-4">
          {t.home.steps.map((step, index) => (
            <div key={step} className="glass rounded-2xl p-6">
              <span className="text-4xl font-black text-violet-200">0{index + 1}</span>
              <p className="mt-5 text-lg font-bold leading-7 text-white">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading title={locale === "az" ? "Paketlər və qiymətlər" : locale === "ru" ? "Пакеты и цены" : "Packages and pricing"} text={locale === "az" ? "Ən çox seçilən paketləri burada qısa göstərdik. Tam məlumat paketlər səhifəsindədir." : locale === "ru" ? "На главной показаны самые популярные пакеты. Детали есть на странице пакетов." : "The homepage shows the most selected packages. Full details are on the packages page."} />
        <div className="mb-6 rounded-2xl border border-violet-300/12 bg-gradient-to-r from-[#2563EB]/10 via-[#4F46E5]/8 to-[#8B5CF6]/12 p-5 text-center text-base font-black text-violet-50">
          {siteConfig.discount[locale]}
        </div>
        <div className="grid gap-5 md:grid-cols-3">{homepagePackages.map((pack) => <PackageCard key={pack.id} pack={pack} locale={locale} />)}</div>
        <div className="mt-7 text-center">
          <ButtonLink href={localizedPath(locale, "paketler")} variant="secondary">
            {t.nav.packages}
          </ButtonLink>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading title={locale === "az" ? "Kimlər üçün uyğundur?" : locale === "ru" ? "Кому подходит?" : "Who is it for?"} text={locale === "az" ? "Softy.az tələbə, freelancer və peşəkarların gündəlik proqram ehtiyaclarına uyğun dəstək verir." : locale === "ru" ? "Softy.az помогает с программами для учебы, работы и ежедневных задач." : "Softy.az supports software needs for study, work and everyday use."} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audience[locale].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-violet-300/12 bg-gradient-to-br from-[#102A5C]/38 to-[#24194F]/28 p-5">
                <Icon className="mb-4 text-violet-200" size={24} />
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-2 text-base leading-7 text-slate-300">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading title={t.home.whyTitle} text={locale === "az" ? "Texniki işi aydın, rahat və əlavə qarışıqlıq olmadan həll etmək üçün." : locale === "ru" ? "Чтобы техническая задача была понятной и спокойной." : "To make technical setup clear, calm and comfortable."} />
        <div className="grid gap-4 md:grid-cols-2">
          {t.home.why.map((item) => (
            <div key={item} className="rounded-2xl border border-violet-300/12 bg-gradient-to-br from-[#102A5C]/38 to-[#24194F]/28 p-6 text-base leading-7 text-slate-200">
              <BadgeCheck className="mb-4 text-violet-200" size={22} />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading title={t.home.faqTitle} text={locale === "az" ? "Ən çox soruşulan sualları qısa cavablandırdıq. Tam siyahı FAQ səhifəsindədir." : locale === "ru" ? "Самые частые вопросы. Полный список на странице FAQ." : "The most common questions. The full list is on the FAQ page."} />
        <FAQList items={faqs[locale].slice(0, 5)} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading title={t.home.blogTitle} text={locale === "az" ? "Quraşdırmadan əvvəl qərar verməyə kömək edən qısa və praktik yazılar." : locale === "ru" ? "Короткие практичные статьи перед установкой." : "Short practical guides before installation."} />
        <div className="grid gap-5 md:grid-cols-3">{blogPosts.slice(0, 3).map((post) => <BlogCard key={post.slug} post={post} locale={locale} />)}</div>
      </section>

      <CTASection locale={locale} title={t.home.finalTitle} text={t.home.finalText} />
    </>
  );
}

function CategoryCard({ locale, title, text, href, icon: Icon }: { locale: Locale; title: string; text: string; href: string; icon: CardIcon }) {
  const t = getDictionary(locale);
  const logos = getSoftwareItems(categoryLogoIds[href] ?? []);
  return (
    <Link href={localizedPath(locale, href)} className="group glass block rounded-2xl p-6 transition duration-200 motion-safe:hover:-translate-y-1">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#2563EB]/16 via-[#4F46E5]/14 to-[#8B5CF6]/18 text-violet-100 transition duration-200 group-hover:brightness-110">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-black text-white">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-300">{text}</p>
      {logos.length ? <SoftwareLogoGroup items={logos} maxVisible={4} size="sm" className="mt-5" /> : null}
      <span className="mt-5 inline-flex items-center text-sm font-black text-violet-200 group-hover:text-violet-100">{locale === "az" ? "Ətraflı bax" : t.cta.chooseService}</span>
    </Link>
  );
}
