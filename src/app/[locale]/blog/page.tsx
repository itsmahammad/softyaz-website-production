import type { Metadata } from "next";
import { BlogCard } from "@/components/Cards";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale } from "@/config/site";
import { blogPosts } from "@/content/blog";
import { getDictionary } from "@/i18n";
import { isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "az";
  return createMetadata({ locale, path: "blog", title: locale === "az" ? "Blog | Proqram quraşdırılması məsləhətləri | Softy.az" : locale === "ru" ? "Блог | Советы по установке программ | Softy.az" : "Blog | Software setup guides | Softy.az", description: locale === "az" ? "Windows, AutoCAD, Revit, Adobe, driverlər və uzaqdan texniki dəstək haqqında faydalı məqalələr." : locale === "ru" ? "Полезные статьи про Windows, AutoCAD, Revit, Adobe, драйверы и remote support." : "Helpful articles about Windows, AutoCAD, Revit, Adobe, drivers and remote support." });
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "az") as Locale;
  const t = getDictionary(locale);
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading title={t.nav.blog} text={locale === "az" ? "Google axtarışından gələn müştərilər üçün praktik, faydalı və yerli kontekstə uyğun məqalələr." : locale === "ru" ? "Практичные статьи для клиентов в Азербайджане." : "Practical guides for customers in Azerbaijan."} />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{blogPosts.map((post) => <BlogCard key={post.slug} post={post} locale={locale} />)}</div>
    </section>
  );
}
