import { Instagram, MessageCircle } from "lucide-react";
import { siteConfig, type Locale } from "@/config/site";
import { getDictionary } from "@/i18n";
import { whatsappLink } from "@/lib/i18n";

export function FloatingContactButton({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const message =
    locale === "az"
      ? "Salam, qiymət soruşmaq istəyirəm."
      : locale === "ru"
        ? "Здравствуйте, хочу узнать цену."
        : "Hi, I want to ask for the price.";

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex gap-2 sm:left-auto sm:right-5 sm:w-auto">
      <a
        className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#8B5CF6] px-4 text-sm font-black text-white shadow-[0_18px_52px_rgba(139,92,246,0.2)] sm:flex-none"
        href={whatsappLink(message)}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={18} /> {t.cta.askPrice}
      </a>
      <a
        className="flex min-h-12 items-center justify-center rounded-2xl border border-purple-300/35 bg-gradient-to-br from-blue-600/24 to-purple-600/28 px-4 text-sm font-bold text-white backdrop-blur"
        href={siteConfig.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram Direct"
      >
        <Instagram size={18} />
      </a>
    </div>
  );
}
