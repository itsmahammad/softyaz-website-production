import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { siteConfig, type Locale } from "@/config/site";
import { getDictionary } from "@/i18n";
import { localizedPath, whatsappLink } from "@/lib/i18n";
import { ButtonLink } from "@/components/ButtonLink";

const navPaths = [
  ["home", ""],
  ["services", "xidmetler"],
  ["packages", "paketler"],
  ["faq", "faq"],
  ["blog", "blog"],
  ["contact", "elaqe"]
] as const;

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const message =
    locale === "az"
      ? "Salam, proqram quraşdırılması üçün məlumat almaq istəyirəm."
      : locale === "ru"
        ? "Здравствуйте, хочу узнать об установке программ."
        : "Hi, I want to ask about software installation.";

  return (
    <header className="sticky top-0 z-40 border-b border-cyan-300/8 bg-[#030712]/84 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={localizedPath(locale)} className="flex items-center gap-3" aria-label="Softy.az home">
          <Image src="/icons/softyaz-mark-512.png" alt="Softy.az" width={44} height={44} priority className="h-11 w-11 rounded-xl shadow-[0_12px_34px_rgba(56,232,255,0.2)]" />
          <span className="hidden text-2xl font-black tracking-tight text-white sm:block">softy.az</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navPaths.map(([key, path]) => (
            <Link key={key} className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-cyan-300/10 hover:text-white hover:shadow-[inset_0_0_0_1px_rgba(56,232,255,0.08)]" href={localizedPath(locale, path)}>
              {t.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          <ButtonLink href={whatsappLink(message)} external>
            <MessageCircle size={18} /> {t.cta.whatsapp}
          </ButtonLink>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-cyan-300/12 bg-[#0A1228]/72 text-slate-100">
            <Menu size={22} />
          </summary>
          <div className="menu-drop absolute right-0 mt-3 w-[min(88vw,340px)] rounded-2xl border border-cyan-300/10 bg-[#050816]/95 p-3 shadow-2xl motion-reduce:animate-none">
            {navPaths.map(([key, path]) => (
              <Link key={key} className="block rounded-xl px-3 py-3 text-sm font-semibold text-slate-200 hover:bg-cyan-300/10" href={localizedPath(locale, path)}>
                {t.nav[key]}
              </Link>
            ))}
            <div className="my-2 border-t border-cyan-200/10" />
            <LanguageSwitcher locale={locale} />
            <ButtonLink href={whatsappLink(message)} external className="mt-3 w-full">
              <MessageCircle size={18} /> {t.cta.whatsapp}
            </ButtonLink>
          </div>
        </details>
      </div>
    </header>
  );
}

function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div className="flex rounded-xl border border-cyan-300/10 bg-[#0A1228]/60 p-1" aria-label="Language switcher">
      {siteConfig.locales.map((item) => (
        <Link
          key={item}
          href={localizedPath(item)}
          className={`rounded-lg px-2.5 py-1.5 text-xs font-bold uppercase transition ${item === locale ? "bg-gradient-to-r from-[#38E8FF] to-[#67E8F9] text-[#030712]" : "text-slate-300 hover:bg-cyan-300/10 hover:text-white"}`}
          hrefLang={item}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
