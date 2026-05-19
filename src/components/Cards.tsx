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
    <Link href={localizedPath(locale, `xidmetler/${service.slug}`)} className="group glass block h-full rounded-2xl p-6 transition duration-200 motion-safe:hover:-translate-y-1">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#38E8FF]/12 via-[#2563EB]/12 to-[#9333EA]/16 text-cyan-100 ring-1 ring-cyan-300/10 transition duration-200 group-hover:brightness-110">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-white">{service.title[locale]}</h3>
      <p className="mt-3 text-base leading-7 text-slate-300">{service.short[locale]}</p>
      {logos.length ? <SoftwareLogoGroup items={logos} maxVisible={4} size="sm" className="mt-5" /> : null}
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
        {getDictionary(locale).cta.chooseService} <ArrowRight className="transition group-hover:translate-x-1" size={16} />
      </span>
    </Link>
  );
}

export function PackageCard({ pack, locale }: { pack: Package; locale: Locale }) {
  const logos = getSoftwareItems(packageSoftware[pack.id] ?? []);
  return (
    <div className={`glass group relative flex h-full flex-col rounded-2xl p-6 transition duration-200 motion-safe:hover:-translate-y-1 ${pack.featured ? "shadow-[0_20px_70px_rgba(103,232,249,0.12)]" : ""}`}>
      {pack.featured ? <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-[#38E8FF] to-[#67E8F9] px-3 py-1 text-xs font-black text-[#030712]">Popular</span> : null}
      <h3 className="pr-20 text-xl font-black text-white">{pack.title[locale]}</h3>
      <p className="mt-3 text-2xl font-black text-[#67E8F9]">{pack.price[locale]}</p>
      <p className="mt-3 text-base leading-7 text-slate-300">{pack.description[locale]}</p>
      {logos.length ? <SoftwareLogoGroup items={logos} maxVisible={4} size="sm" className="mt-5" /> : null}
      <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-200">
        {pack.includes[locale].map((item) => (
          <li key={item} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-200" size={17} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BlogCard({ post, locale }: { post: BlogPost; locale: Locale }) {
  return (
    <Link href={localizedPath(locale, `blog/${post.slug}`)} className="group glass block h-full rounded-2xl p-6 transition duration-200 hover:-translate-y-1">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">{new Date(post.date).getFullYear()}</p>
      <h3 className="mt-3 text-lg font-bold text-white">{post.title[locale]}</h3>
      <p className="mt-3 text-base leading-7 text-slate-300">{post.excerpt[locale]}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
        {getDictionary(locale).labels.readMore} <ArrowRight className="transition group-hover:translate-x-1" size={16} />
      </span>
    </Link>
  );
}

export function TestimonialCard({ text, name, service }: { text: string; name: string; service: string }) {
  return (
    <figure className="glass rounded-2xl p-6">
      <div className="mb-5 flex h-20 items-center justify-center rounded-xl border border-dashed border-cyan-200/15 bg-slate-950/25 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
        Screenshot ready
      </div>
      <blockquote className="text-base leading-7 text-slate-200">“{text}”</blockquote>
      <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
        {name} · {service}
      </figcaption>
    </figure>
  );
}

