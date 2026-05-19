import type { Locale } from "@/config/site";

export const testimonials: Record<Locale, { text: string; name: string; service: string }[]> = {
  az: [
    { text: "AutoCAD və Revit quraşdırılması rahat və sürətli oldu.", name: "Müştəri rəyi", service: "Memarlıq paketi" },
    { text: "Windows və driverlər yazıldı, laptop daha stabil işləyir.", name: "Müştəri rəyi", service: "Windows setup" },
    { text: "Uzaqdan qoşulub problemi həll etdilər.", name: "Müştəri rəyi", service: "Uzaqdan dəstək" }
  ],
  ru: [
    { text: "AutoCAD и Revit установили быстро и удобно.", name: "Отзыв клиента", service: "Архитектурный пакет" },
    { text: "Windows и драйверы настроены, ноутбук работает стабильнее.", name: "Отзыв клиента", service: "Windows setup" },
    { text: "Подключились удаленно и решили проблему.", name: "Отзыв клиента", service: "Удаленная поддержка" }
  ],
  en: [
    { text: "AutoCAD and Revit setup was smooth and fast.", name: "Customer feedback", service: "Architecture pack" },
    { text: "Windows and drivers were installed, the laptop feels more stable.", name: "Customer feedback", service: "Windows setup" },
    { text: "They connected remotely and fixed the issue.", name: "Customer feedback", service: "Remote support" }
  ]
};
