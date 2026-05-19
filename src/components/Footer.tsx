import Link from "next/link";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { siteConfig, type Locale } from "@/config/site";
import { getDictionary } from "@/i18n";
import { localizedPath, whatsappLink } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const message = locale === "az" ? "Salam, Softy.az xidmətləri haqqında məlumat almaq istəyirəm." : locale === "ru" ? "Здравствуйте, хочу узнать об услугах Softy.az." : "Hi, I want to ask about Softy.az services.";
  return (
    <footer className="border-t border-cyan-300/10 bg-[#030712]/78">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <p className="text-xl font-black">Softy.az</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            {locale === "az" ? "Proqram quraşdırılması, sistem setup, driverlər və uzaqdan texniki dəstək. Bakı üzrə xidmət, Azərbaycan üzrə remote yardım." : locale === "ru" ? "Установка программ, настройка систем, драйверы и удаленная техническая поддержка в Азербайджане." : "Software installation, system setup, drivers and remote technical support in Azerbaijan."}
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">{t.nav.services}</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-400">
            <Link href={localizedPath(locale, "xidmetler/windows-qurasdirilmasi")}>Windows</Link>
            <Link href={localizedPath(locale, "xidmetler/adobe-qurasdirilmasi")}>Adobe</Link>
            <Link href={localizedPath(locale, "xidmetler/autocad-qurasdirilmasi")}>AutoCAD</Link>
            <Link href={localizedPath(locale, "xidmetler/uzagdan-destek")}>{locale === "az" ? "Uzaqdan dəstək" : locale === "ru" ? "Удаленная поддержка" : "Remote support"}</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">{t.nav.contact}</p>
          <div className="mt-3 grid gap-3 text-sm text-slate-300">
            <a className="inline-flex items-center gap-2" href={whatsappLink(message)} target="_blank" rel="noreferrer"><MessageCircle size={16} /> {siteConfig.whatsappDisplay}</a>
            <a className="inline-flex items-center gap-2" href={siteConfig.instagram} target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a>
            <a className="inline-flex items-center gap-2" href={siteConfig.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="border-t border-cyan-300/8 px-4 py-5 text-center text-xs leading-6 text-slate-500">
        <p>© {new Date().getFullYear()} Softy.az. {locale === "az" ? "Bütün hüquqlar qorunur." : locale === "ru" ? "Все права защищены." : "All rights reserved."}</p>
        <p className="mx-auto mt-2 max-w-3xl">
          {locale === "az"
            ? "Bütün proqram adları və loqolar müvafiq sahiblərinə məxsusdur. Softy.az müstəqil quraşdırma və texniki dəstək xidməti göstərir."
            : locale === "ru"
              ? "Все названия программ и логотипы принадлежат их владельцам. Softy.az предоставляет независимые услуги установки и технической поддержки."
              : "All software names and logos belong to their respective owners. Softy.az provides independent installation and technical support services."}
        </p>
      </div>
    </footer>
  );
}
