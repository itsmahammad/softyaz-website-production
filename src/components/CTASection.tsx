import { Instagram, MessageCircle } from "lucide-react";
import { siteConfig, type Locale } from "@/config/site";
import { getDictionary } from "@/i18n";
import { whatsappLink } from "@/lib/i18n";
import { ButtonLink } from "@/components/ButtonLink";

export function CTASection({ locale, title, text }: { locale: Locale; title: string; text: string }) {
  const t = getDictionary(locale);
  const message =
    locale === "az"
      ? "Salam, proqram quraşdırılmasına başlamaq istəyirəm."
      : locale === "ru"
        ? "Здравствуйте, хочу начать установку программ."
        : "Hi, I want to start software installation.";

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-violet-300/14 bg-gradient-to-br from-[#0B1733] via-[#102A5C] to-[#24194F] p-8 shadow-[0_22px_70px_rgba(7,17,38,0.3)] md:p-12">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#2563EB]/16 blur-3xl" />
        <div className="absolute -bottom-28 left-16 h-72 w-72 rounded-full bg-[#8B5CF6]/16 blur-3xl" />
        <div className="relative max-w-3xl">
          <h2 className="text-balance text-3xl font-black text-white md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">{text}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappLink(message)} external>
              <MessageCircle size={18} /> {t.cta.whatsapp}
            </ButtonLink>
            <ButtonLink href={siteConfig.instagram} external variant="secondary">
              <Instagram size={18} /> {t.cta.instagram}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
