import Link from "next/link";
import type { Locale } from "@/config/site";
import { getDictionary } from "@/i18n";
import { localizedPath } from "@/lib/i18n";

export function Breadcrumbs({ locale, items }: { locale: Locale; items: { label: string; href?: string }[] }) {
  const t = getDictionary(locale);
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-400">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link className="hover:text-violet-200" href={localizedPath(locale)}>{t.nav.home}</Link></li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span>/</span>
            {item.href ? <Link className="hover:text-violet-200" href={item.href}>{item.label}</Link> : <span className="text-slate-200">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
