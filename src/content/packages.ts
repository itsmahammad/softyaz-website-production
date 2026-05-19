import type { Locale } from "@/config/site";

export type Package = {
  id: string;
  title: Record<Locale, string>;
  price: Record<Locale, string>;
  description: Record<Locale, string>;
  includes: Record<Locale, string[]>;
  featured?: boolean;
};

export const packages: Package[] = [
  {
    id: "office",
    title: { az: "Ofis Paketi", ru: "Офисный пакет", en: "Office Pack" },
    price: { az: "15 AZN-dən başlayaraq", ru: "от 15 AZN", en: "starting from 15 AZN" },
    description: { az: "Təhsil, ofis və gündəlik sənəd işləri üçün əsas proqramlar.", ru: "Базовые программы для учебы, офиса и документов.", en: "Essential apps for study, office and documents." },
    includes: { az: ["Microsoft Office", "PDF tools", "Browser setup", "Əsas faydalı proqramlar"], ru: ["Microsoft Office", "PDF tools", "Browser setup", "Полезные базовые программы"], en: ["Microsoft Office", "PDF tools", "Browser setup", "Useful everyday apps"] }
  },
  {
    id: "adobe",
    title: { az: "Adobe Paketi", ru: "Пакет Adobe", en: "Adobe Pack" },
    price: { az: "20 AZN-dən başlayaraq", ru: "от 20 AZN", en: "starting from 20 AZN" },
    description: { az: "Dizayn, foto və video montaj işləri üçün Adobe tətbiqləri.", ru: "Adobe-приложения для дизайна, фото и видео.", en: "Adobe apps for design, photo and video work." },
    includes: { az: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Lightroom", "Pluginlər lazım olduqda"], ru: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Lightroom", "Плагины при необходимости"], en: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Lightroom", "Plugins when needed"] },
    featured: true
  },
  {
    id: "architecture",
    title: { az: "Memarlıq Paketi", ru: "Архитектурный пакет", en: "Architecture Pack" },
    price: { az: "25 AZN-dən başlayaraq", ru: "от 25 AZN", en: "starting from 25 AZN" },
    description: { az: "Memarlar, mühəndislər və tələbələr üçün peşəkar proqram dəsti.", ru: "Профессиональный набор для архитекторов, инженеров и студентов.", en: "Professional suite for architects, engineers and students." },
    includes: { az: ["AutoCAD", "Revit", "3ds Max", "SketchUp", "D5 Render", "Lumion", "Enscape", "V-Ray"], ru: ["AutoCAD", "Revit", "3ds Max", "SketchUp", "D5 Render", "Lumion", "Enscape", "V-Ray"], en: ["AutoCAD", "Revit", "3ds Max", "SketchUp", "D5 Render", "Lumion", "Enscape", "V-Ray"] }
  },
  {
    id: "full",
    title: { az: "Tam Quraşdırma Paketi", ru: "Полный пакет настройки", en: "Full Setup Pack" },
    price: { az: "Qiymət üçün yazın", ru: "Уточнить цену", en: "Contact for price" },
    description: { az: "Yeni və ya format olunmuş cihazı işə tam hazır vəziyyətə gətirmək.", ru: "Подготовка нового или отформатированного устройства к работе.", en: "Prepare a new or formatted device for real work." },
    includes: { az: ["Windows/Linux", "Driverlər", "Office", "Peşəkar proqramlar", "Optimizasiya", "Təhlükəsizlik setup"], ru: ["Windows/Linux", "Драйверы", "Office", "Профессиональные программы", "Оптимизация", "Безопасность"], en: ["Windows/Linux", "Drivers", "Office", "Professional apps", "Optimization", "Security setup"] }
  },
  {
    id: "remote",
    title: { az: "Uzaqdan Dəstək", ru: "Удаленная поддержка", en: "Remote Support Pack" },
    price: { az: "Qiymət üçün yazın", ru: "Уточнить цену", en: "Contact for price" },
    description: { az: "Cihazı gətirmədən proqram problemi və sazlama üçün dəstək.", ru: "Помощь с программами и настройкой без передачи устройства.", en: "Software troubleshooting and setup without handing off the device." },
    includes: { az: ["Remote problem solving", "App setup", "Software errors", "Konsultasiya"], ru: ["Remote problem solving", "App setup", "Software errors", "Консультация"], en: ["Remote problem solving", "App setup", "Software errors", "Consultation"] }
  }
];
