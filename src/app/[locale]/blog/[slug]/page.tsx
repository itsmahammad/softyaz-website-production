import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig, type Locale } from "@/config/site";
import { blogPosts, getBlogPost } from "@/content/blog";
import { services } from "@/content/services";
import { getDictionary } from "@/i18n";
import { isLocale, localizedPath } from "@/lib/i18n";
import { createMetadata, siteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return siteConfig.locales.flatMap((locale) => blogPosts.map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : "az";
  const post = getBlogPost(slug);
  if (!post) return {};
  return createMetadata({ locale, path: `blog/${slug}`, title: `${post.title[locale]} | Softy.az`, description: post.meta[locale], type: "article" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const t = getDictionary(locale);
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const service = post.serviceSlug ? services.find((item) => item.slug === post.serviceSlug) : undefined;
  const url = siteUrl(localizedPath(locale, `blog/${post.slug}`));
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title[locale],
    description: post.meta[locale],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: locale,
    url,
    image: siteUrl("/og.jpg"),
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.siteUrl },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: siteUrl("/icons/softyaz-mark-512.png") }
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.nav.home, item: siteUrl(localizedPath(locale)) },
      { "@type": "ListItem", position: 2, name: t.nav.blog, item: siteUrl(localizedPath(locale, "blog")) },
      { "@type": "ListItem", position: 3, name: post.title[locale], item: url }
    ]
  };

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema} />
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-200">{new Date(post.date).toLocaleDateString("az-AZ")}</p>
        <h1 className="mt-4 text-balance text-4xl font-black text-white md:text-5xl">{post.title[locale]}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">{post.excerpt[locale]}</p>
        <div className="mt-10 space-y-9">
          {post.sections[locale].map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-black text-white">{section.heading}</h2>
              {section.body.map((paragraph) => <p key={paragraph} className="mt-4 text-base leading-8 text-slate-300">{paragraph}</p>)}
            </section>
          ))}
        </div>
        {service ? <a className="mt-10 inline-flex rounded-lg border border-violet-300/14 bg-[#102A5C]/36 px-5 py-3 text-sm font-bold text-violet-100 transition hover:border-violet-200/24 hover:bg-violet-300/8" href={localizedPath(locale, `xidmetler/${service.slug}`)}>{service.title[locale]}</a> : null}
      </article>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="mb-5 text-2xl font-black text-white">{locale === "az" ? "Oxşar məqalələr" : locale === "ru" ? "Похожие статьи" : "Related articles"}</h2>
        <div className="grid gap-5 md:grid-cols-3">{related.map((item) => <BlogCard key={item.slug} post={item} locale={locale} />)}</div>
      </section>
      <CTASection locale={locale} title={locale === "az" ? "Proqram qurulumu üçün kömək lazımdır?" : locale === "ru" ? "Нужна помощь с настройкой?" : "Need help with setup?"} text={locale === "az" ? "WhatsApp ilə yazın, cihazınıza uyğun ən rahat variantı seçək." : locale === "ru" ? "Напишите в WhatsApp, подберем удобный вариант." : "Message us on WhatsApp and we will suggest the right option."} />
    </>
  );
}
