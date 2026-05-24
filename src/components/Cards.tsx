import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Locale } from "@/config/site";
import { getDictionary } from "@/i18n";
import { localizedPath } from "@/lib/i18n";
import type { Service } from "@/content/services";
import type { Package } from "@/content/packages";
import type { BlogPost } from "@/content/blog";
import { getSoftwareItems, packageSoftware, serviceSoftware } from "@/content/software";
import { SoftwareLogoGroup } from "@/components/SoftwareLogo";

export function ServiceCard({ service, locale }: { service: Service; locale: Locale }) {
  const Icon = service.icon;
  const logos = getSoftwareItems(serviceSoftware[service.slug] ?? []);
  return (
    <Link href={localizedPath(locale, `xidmetler/${service.slug}`)} className="group glass block h-full rounded-2xl p-6 transition duration-200 motion-safe:hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(79,70,229,0.12)]">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#2563EB]/14 via-[#4F46E5]/10 to-[#8B5CF6]/16 text-violet-100 shadow-[inset_0_1px_0_rgba(248,250,252,0.03)] transition duration-200 group-hover:brightness-105">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold tracking-[-0.01em] text-white">{service.title[locale]}</h3>
      <p className="mt-3 text-base leading-7 text-slate-300/95">{service.short[locale]}</p>
      {logos.length ? <SoftwareLogoGroup items={logos} maxVisible={4} size="sm" className="mt-5" /> : null}
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-200">
        {getDictionary(locale).cta.chooseService} <ArrowRight className="transition group-hover:translate-x-1" size={16} />
      </span>
    </Link>
  );
}

export function PackageCard({ pack, locale }: { pack: Package; locale: Locale }) {
  const logos = getSoftwareItems(packageSoftware[pack.id] ?? []);
  return (
    <div className={`glass group relative flex h-full flex-col rounded-2xl p-6 transition duration-200 motion-safe:hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(79,70,229,0.12)] ${pack.featured ? "shadow-[0_20px_62px_rgba(139,92,246,0.11)]" : ""}`}>
      {pack.featured ? <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] px-3 py-1 text-xs font-semibold text-white">Popular</span> : null}
      <h3 className="pr-20 text-xl font-semibold tracking-[-0.01em] text-white">{pack.title[locale]}</h3>
      <p className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-violet-200">{pack.price[locale]}</p>
      <p className="mt-3 text-base leading-7 text-slate-300/95">{pack.description[locale]}</p>
      {logos.length ? <SoftwareLogoGroup items={logos} maxVisible={4} size="sm" className="mt-5" /> : null}
      <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-200">
        {pack.includes[locale].map((item) => (
          <li key={item} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 shrink-0 text-violet-200" size={17} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BlogCard({ post, locale }: { post: BlogPost; locale: Locale }) {
  return (
    <Link href={localizedPath(locale, `blog/${post.slug}`)} className="group glass block h-full rounded-2xl p-6 transition duration-200 motion-safe:hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(79,70,229,0.10)]">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-200">{new Date(post.date).getFullYear()}</p>
      <h3 className="mt-3 text-lg font-bold text-white">{post.title[locale]}</h3>
      <p className="mt-3 text-base leading-7 text-slate-300/95">{post.excerpt[locale]}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-200">
        {getDictionary(locale).labels.readMore} <ArrowRight className="transition group-hover:translate-x-1" size={16} />
      </span>
    </Link>
  );
}

export function TestimonialCard({ text, name, service }: { text: string; name: string; service: string }) {
  return (
    <figure className="glass rounded-2xl p-6">
      <div className="mb-5 flex h-20 items-center justify-center rounded-xl border border-dashed border-violet-200/12 bg-white/[0.035] text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
        Screenshot ready
      </div>
      <blockquote className="text-base leading-7 text-slate-200/95">“{text}”</blockquote>
      <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
        {name} · {service}
      </figcaption>
    </figure>
  );
}

