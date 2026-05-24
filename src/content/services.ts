import { MonitorCog, AppWindow, DraftingCompass, FileText, Cpu, ShieldCheck, Gamepad2, Headphones, Laptop, Code2 } from "lucide-react";
import type { Locale } from "@/config/site";
import { seoLandingServices } from "@/content/seoLandingServices";

export type Service = {
  slug: string;
  category: "systems" | "pro" | "office" | "drivers" | "security" | "support";
  icon: typeof MonitorCog;
  title: Record<Locale, string>;
  short: Record<Locale, string>;
  seoTitle: Record<Locale, string>;
  meta: Record<Locale, string>;
  intro: Record<Locale, string>;
  h1?: Record<Locale, string>;
  keywords?: string[];
  problems?: Record<Locale, string[]>;
  process?: Record<Locale, string[]>;
  relatedSlugs?: string[];
  disclaimer?: Record<Locale, string>;
  includes: Record<Locale, string[]>;
  audience: Record<Locale, string[]>;
  faq: Record<Locale, { q: string; a: string }[]>;
};

export const categoryLabels: Record<Locale, Record<Service["category"], string>> = {
  az: { systems: "Əməliyyat sistemləri", pro: "Peşəkar proqramlar", office: "Ofis və gündəlik istifadə", drivers: "Driver və optimizasiya", security: "Təhlükəsizlik", support: "Uzaqdan dəstək" },
  ru: { systems: "Операционные системы", pro: "Профессиональные программы", office: "Офис и ежедневная работа", drivers: "Драйверы и оптимизация", security: "Безопасность", support: "Удаленная поддержка" },
  en: { systems: "Operating systems", pro: "Professional software", office: "Office and daily use", drivers: "Drivers and optimization", security: "Security", support: "Remote support" }
};

const commonFaq = {
  az: [
    { q: "Uzaqdan quraşdırmaq mümkündür?", a: "Bəli, uyğun hallarda təhlükəsiz uzaqdan bağlantı ilə dəstək göstərilir." },
    { q: "Bakıda cihazı təhvil vermək olur?", a: "Bəli, laptop və ya PC razılaşdırılmış vaxtda qəbul edilərək hazır vəziyyətdə geri qaytarıla bilər." }
  ],
  ru: [
    { q: "Можно установить удаленно?", a: "Да, если задача подходит для удаленной работы, помощь оказывается через безопасное подключение." },
    { q: "Можно передать устройство в Баку?", a: "Да, ноутбук или ПК можно передать по договоренности и получить обратно после настройки." }
  ],
  en: [
    { q: "Can this be done remotely?", a: "Yes, when suitable, support is provided through a secure remote connection." },
    { q: "Can I hand off my device in Baku?", a: "Yes, laptop or PC handoff is available in Baku by agreement." }
  ]
};

const coreServices: Service[] = [
  {
    slug: "windows-qurasdirilmasi",
    category: "systems",
    icon: MonitorCog,
    title: { az: "Windows quraşdırılması və formatlama", ru: "Установка Windows и форматирование", en: "Windows installation and formatting" },
    short: { az: "Windows 10/11, driverlər, əsas proqramlar və ilkin optimizasiya.", ru: "Windows 10/11, драйверы, базовые программы и первичная оптимизация.", en: "Windows 10/11, drivers, basic apps and initial optimization." },
    seoTitle: { az: "Windows quraşdırılması Bakı | Formatlama və driver qurulumu | Softy.az", ru: "Установка Windows в Баку | Форматирование и драйверы | Softy.az", en: "Windows installation in Baku | Formatting and drivers | Softy.az" },
    meta: { az: "Windows quraşdırılması, laptop formatlama, driver yazılması və əsas proqramların sazlanması. Bakı üzrə xidmət və Azərbaycan üzrə uzaqdan dəstək.", ru: "Установка Windows, форматирование ноутбука, драйверы и базовая настройка программ в Баку и удаленно по Азербайджану.", en: "Windows setup, laptop formatting, driver installation and basic app configuration in Baku and remotely across Azerbaijan." },
    intro: { az: "Laptop və kompüteriniz üçün təmiz Windows quraşdırılması, lazımi driverlərin yazılması və gündəlik istifadə üçün əsas proqramların hazırlanması.", ru: "Чистая установка Windows для ноутбука или ПК с драйверами и базовыми программами для ежедневной работы.", en: "Clean Windows setup for laptops and PCs with drivers and everyday apps prepared for comfortable use." },
    includes: { az: ["Windows 10/11 quraşdırılması", "Təmiz quraşdırma və formatlama", "Driver qurulumu", "Ofis və gündəlik proqramlar", "Sistem optimizasiyası", "Ehtiyat nüsxə üçün məsləhət"], ru: ["Установка Windows 10/11", "Чистая установка и форматирование", "Настройка драйверов", "Офисные и базовые программы", "Оптимизация системы", "Рекомендации по backup"], en: ["Windows 10/11 setup", "Clean installation and formatting", "Driver setup", "Office and daily apps", "System optimization", "Backup guidance"] },
    audience: { az: ["Laptopu yavaş işləyən istifadəçilər", "Yeni cihaz alanlar", "Tələbələr və ofis işçiləri"], ru: ["Пользователи с медленным ноутбуком", "Владельцы новых устройств", "Студенты и офисные сотрудники"], en: ["Users with slow laptops", "New device owners", "Students and office workers"] },
    faq: commonFaq
  },
  {
    slug: "linux-qurasdirilmasi",
    category: "systems",
    icon: Code2,
    title: { az: "Linux quraşdırılması və dəstək", ru: "Установка Linux и поддержка", en: "Linux installation and support" },
    short: { az: "Linux qurulumu, dual-boot yönləndirməsi və developer mühiti dəstəyi.", ru: "Linux setup, помощь с dual-boot и средой разработчика.", en: "Linux setup, dual-boot guidance and developer environment support." },
    seoTitle: { az: "Linux quraşdırılması və texniki dəstək | Softy.az", ru: "Установка Linux и техническая поддержка | Softy.az", en: "Linux installation and technical support | Softy.az" },
    meta: { az: "Linux quraşdırılması, ilkin sazlama, developer alətləri və nasazlıqlar üçün dəstək.", ru: "Установка Linux, базовая настройка, инструменты разработчика и помощь с ошибками.", en: "Linux installation, base setup, developer tools and troubleshooting support." },
    intro: { az: "Linux ilə işləmək istəyən tələbələr, developerlər və texniki istifadəçilər üçün rahat başlanğıc quraşdırması.", ru: "Удобная начальная настройка Linux для студентов, разработчиков и технических пользователей.", en: "A smooth Linux start for students, developers and technical users." },
    includes: { az: ["Linux distributivi seçimi", "Quraşdırma və ilkin sazlama", "Dual-boot məsləhəti", "Terminal və əsas alətlər", "Developer mühiti dəstəyi"], ru: ["Выбор дистрибутива", "Установка и базовая настройка", "Советы по dual-boot", "Терминал и базовые инструменты", "Поддержка среды разработки"], en: ["Distro selection", "Installation and base setup", "Dual-boot advice", "Terminal and core tools", "Developer environment support"] },
    audience: { az: ["Developerlər", "Kibertəhlükəsizlik öyrənənlər", "Linux istifadə etmək istəyən tələbələr"], ru: ["Разработчики", "Изучающие кибербезопасность", "Студенты, которым нужен Linux"], en: ["Developers", "Cybersecurity learners", "Students who need Linux"] },
    faq: commonFaq
  },
  {
    slug: "autocad-qurasdirilmasi",
    category: "pro",
    icon: DraftingCompass,
    title: { az: "AutoCAD quraşdırılması", ru: "Установка AutoCAD", en: "AutoCAD installation" },
    short: { az: "AutoCAD qurulumu, sazlama və memarlıq/mühəndislik işləri üçün hazırlıq.", ru: "Настройка AutoCAD для архитектурных и инженерных задач.", en: "AutoCAD setup for architecture and engineering workflows." },
    seoTitle: { az: "AutoCAD quraşdırılması Bakıda və Azərbaycanda | Softy.az", ru: "Установка AutoCAD в Баку и Азербайджане | Softy.az", en: "AutoCAD installation in Baku and Azerbaijan | Softy.az" },
    meta: { az: "AutoCAD quraşdırılması, sazlanması və texniki dəstək. Bakı üzrə xidmət və Azərbaycan üzrə uzaqdan dəstək.", ru: "Установка и настройка AutoCAD. Услуги в Баку и удаленная поддержка по Азербайджану.", en: "AutoCAD installation, configuration and support in Baku and remotely across Azerbaijan." },
    intro: { az: "Memarlar, mühəndislər və tələbələr üçün AutoCAD quraşdırılması, ilkin sazlama və rahat iş mühiti hazırlığı.", ru: "Установка AutoCAD для архитекторов, инженеров и студентов с базовой настройкой рабочего окружения.", en: "AutoCAD setup for architects, engineers and students with a practical work environment." },
    includes: { az: ["AutoCAD quraşdırılması", "İlkin sazlama", "Lisenziya və istifadə variantları üzrə yönləndirmə", "Plugin və əlavə komponent məsləhəti", "Sistem uyğunluğu yoxlanışı"], ru: ["Установка AutoCAD", "Базовая настройка", "Консультация по лицензии и вариантам использования", "Советы по плагинам", "Проверка совместимости"], en: ["AutoCAD installation", "Base configuration", "License and usage guidance", "Plugin advice", "System compatibility check"] },
    audience: { az: ["Memarlıq tələbələri", "İnşaat və mexanika mühəndisləri", "Freelance layihəçilər"], ru: ["Студенты архитектуры", "Инженеры строительства и механики", "Фриланс-проектировщики"], en: ["Architecture students", "Civil and mechanical engineers", "Freelance designers"] },
    faq: commonFaq
  },
  {
    slug: "revit-qurasdirilmasi",
    category: "pro",
    icon: DraftingCompass,
    title: { az: "Revit quraşdırılması", ru: "Установка Revit", en: "Revit installation" },
    short: { az: "BIM layihələri üçün Revit qurulumu, uyğunluq yoxlanışı və dəstək.", ru: "Revit setup для BIM-проектов, проверка совместимости и поддержка.", en: "Revit setup for BIM projects with compatibility checks." },
    seoTitle: { az: "Revit quraşdırılması və BIM proqram dəstəyi | Softy.az", ru: "Установка Revit и поддержка BIM-программ | Softy.az", en: "Revit installation and BIM software support | Softy.az" },
    meta: { az: "Revit quraşdırılması, BIM işləri üçün sazlama, render və memarlıq proqramları ilə uyğunluq dəstəyi.", ru: "Установка Revit, настройка для BIM-задач и совместимость с архитектурными программами.", en: "Revit installation, BIM setup and compatibility support for architecture tools." },
    intro: { az: "BIM dərsləri və real layihələr üçün Revit-in düzgün quraşdırılması və sistemə uyğun hazırlanması.", ru: "Корректная установка Revit для учебы и реальных BIM-проектов.", en: "Proper Revit setup for coursework and real BIM projects." },
    includes: { az: ["Revit quraşdırılması", "Sistem tələblərinin yoxlanması", "Əsas sazlamalar", "BIM workflow üçün məsləhət", "Render və plugin uyğunluğu"], ru: ["Установка Revit", "Проверка требований", "Базовые настройки", "Советы по BIM workflow", "Совместимость render/plugin"], en: ["Revit installation", "Requirement check", "Base settings", "BIM workflow advice", "Render/plugin compatibility"] },
    audience: { az: ["BIM mütəxəssisləri", "Memarlıq tələbələri", "Layihə ofisləri"], ru: ["BIM-специалисты", "Студенты архитектуры", "Проектные офисы"], en: ["BIM specialists", "Architecture students", "Design offices"] },
    faq: commonFaq
  },
  {
    slug: "adobe-qurasdirilmasi",
    category: "pro",
    icon: AppWindow,
    title: { az: "Adobe proqramlarının quraşdırılması", ru: "Установка программ Adobe", en: "Adobe app installation" },
    short: { az: "Photoshop, Illustrator, Premiere Pro, After Effects, Lightroom və Acrobat qurulumu.", ru: "Photoshop, Illustrator, Premiere Pro, After Effects, Lightroom и Acrobat.", en: "Photoshop, Illustrator, Premiere Pro, After Effects, Lightroom and Acrobat setup." },
    seoTitle: { az: "Adobe proqram quraşdırılması | Photoshop, Premiere Pro, Illustrator | Softy.az", ru: "Установка Adobe | Photoshop, Premiere Pro, Illustrator | Softy.az", en: "Adobe installation | Photoshop, Premiere Pro, Illustrator | Softy.az" },
    meta: { az: "Adobe proqramları üçün quraşdırma, aktivasiya dəstəyi və istifadə ehtiyacınıza uyğun konsultasiya.", ru: "Установка программ Adobe, поддержка активации в применимых случаях и консультация по вариантам использования.", en: "Adobe app setup, activation support where applicable and usage guidance." },
    intro: { az: "Dizayn, video montaj və foto redaktə işləri üçün Adobe tətbiqlərinin peşəkar quraşdırılması və sazlanması.", ru: "Профессиональная настройка Adobe-приложений для дизайна, монтажа и обработки фото.", en: "Professional Adobe app setup for design, video editing and photo workflows." },
    includes: { az: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Lightroom", "Acrobat", "Plugin ehtiyacları üzrə məsləhət"], ru: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Lightroom", "Acrobat", "Советы по плагинам"], en: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Lightroom", "Acrobat", "Plugin guidance"] },
    audience: { az: ["Dizaynerlər", "Video montajçılar", "SMM və kontent mütəxəssisləri"], ru: ["Дизайнеры", "Видеомонтажеры", "SMM и контент-специалисты"], en: ["Designers", "Video editors", "SMM and content specialists"] },
    faq: commonFaq
  },
  {
    slug: "office-qurasdirilmasi",
    category: "office",
    icon: FileText,
    title: { az: "Microsoft Office quraşdırılması", ru: "Установка Microsoft Office", en: "Microsoft Office installation" },
    short: { az: "Word, Excel, PowerPoint, Outlook və PDF alətləri üçün rahat qurulum.", ru: "Word, Excel, PowerPoint, Outlook и PDF-инструменты.", en: "Word, Excel, PowerPoint, Outlook and PDF tool setup." },
    seoTitle: { az: "Microsoft Office quraşdırılması | Word, Excel, PowerPoint | Softy.az", ru: "Установка Microsoft Office | Word, Excel, PowerPoint | Softy.az", en: "Microsoft Office installation | Word, Excel, PowerPoint | Softy.az" },
    meta: { az: "Microsoft Office quraşdırılması, Word, Excel, PowerPoint və Outlook sazlanması.", ru: "Установка Microsoft Office, настройка Word, Excel, PowerPoint и Outlook.", en: "Microsoft Office installation and Word, Excel, PowerPoint, Outlook configuration." },
    intro: { az: "Təhsil, ofis və gündəlik sənəd işləri üçün Office proqramlarının hazırlanması.", ru: "Настройка Office для учебы, офиса и ежедневной работы с документами.", en: "Office setup for study, office work and everyday documents." },
    includes: { az: ["Word", "Excel", "PowerPoint", "Outlook", "Office sazlamaları", "PDF alətləri"], ru: ["Word", "Excel", "PowerPoint", "Outlook", "Настройки Office", "PDF-инструменты"], en: ["Word", "Excel", "PowerPoint", "Outlook", "Office configuration", "PDF tools"] },
    audience: { az: ["Tələbələr", "Ofis işçiləri", "Müəllimlər və sahibkarlar"], ru: ["Студенты", "Офисные сотрудники", "Преподаватели и предприниматели"], en: ["Students", "Office workers", "Teachers and business owners"] },
    faq: commonFaq
  },
  {
    slug: "driver-qurasdirilmasi",
    category: "drivers",
    icon: Cpu,
    title: { az: "Driver quraşdırılması", ru: "Установка драйверов", en: "Driver installation" },
    short: { az: "GPU, Wi-Fi, Bluetooth, audio, printer, chipset və laptop driverləri.", ru: "GPU, Wi-Fi, Bluetooth, audio, printer, chipset и драйверы ноутбука.", en: "GPU, Wi-Fi, Bluetooth, audio, printer, chipset and laptop drivers." },
    seoTitle: { az: "Driver quraşdırılması Bakı | Laptop və PC driver qurulumu | Softy.az", ru: "Установка драйверов в Баку | Ноутбук и ПК | Softy.az", en: "Driver installation in Baku | Laptop and PC setup | Softy.az" },
    meta: { az: "Laptop və kompüter üçün driver quraşdırılması: video kart, Wi-Fi, Bluetooth, audio, printer və chipset driverləri.", ru: "Установка драйверов для ноутбука и ПК: видеокарта, Wi-Fi, Bluetooth, audio, printer, chipset.", en: "Driver installation for laptops and PCs: GPU, Wi-Fi, Bluetooth, audio, printer and chipset." },
    intro: { az: "Sistem stabil işləsin deyə cihazınıza uyğun driverlərin tapılması, quraşdırılması və yoxlanması.", ru: "Подбор, установка и проверка драйверов для стабильной работы системы.", en: "Finding, installing and checking the right drivers for stable system performance." },
    includes: { az: ["GPU driverləri", "Wi-Fi/Bluetooth", "Audio driverləri", "Printer driverləri", "Chipset driverləri", "Laptop modelinə uyğun driverlər"], ru: ["GPU-драйверы", "Wi-Fi/Bluetooth", "Audio-драйверы", "Printer-драйверы", "Chipset-драйверы", "Драйверы под модель ноутбука"], en: ["GPU drivers", "Wi-Fi/Bluetooth", "Audio drivers", "Printer drivers", "Chipset drivers", "Laptop-specific drivers"] },
    audience: { az: ["Formatdan sonra problemi olanlar", "Wi-Fi və səs işləməyən cihazlar", "Oyun və render performansı istəyənlər"], ru: ["После форматирования", "Когда не работает Wi-Fi или звук", "Для игр и render-производительности"], en: ["After formatting", "Devices with Wi-Fi/audio issues", "Gaming and render performance needs"] },
    faq: commonFaq
  },
  {
    slug: "komputer-optimallasdirma",
    category: "drivers",
    icon: Laptop,
    title: { az: "Kompüter optimallaşdırılması", ru: "Оптимизация компьютера", en: "PC optimization" },
    short: { az: "Startup cleanup, storage təmizliyi, performans sazlamaları və sistem yoxlanışı.", ru: "Startup cleanup, очистка storage, настройки производительности и проверка системы.", en: "Startup cleanup, storage cleanup, performance tuning and health check." },
    seoTitle: { az: "Kompüter optimallaşdırılması və sürətləndirmə | Softy.az", ru: "Оптимизация и ускорение компьютера | Softy.az", en: "PC optimization and performance tuning | Softy.az" },
    meta: { az: "Kompüter və laptop optimallaşdırılması, startup təmizliyi, storage cleanup, software cleanup və tövsiyələr.", ru: "Оптимизация ноутбука и ПК, startup cleanup, очистка storage, software cleanup и рекомендации.", en: "Laptop and PC optimization, startup cleanup, storage cleanup, software cleanup and recommendations." },
    intro: { az: "Zəif və ya yavaş cihazlarda gündəlik istifadəni daha rahat etmək üçün sistem yoxlanışı və optimizasiya.", ru: "Проверка и оптимизация системы, чтобы слабые или медленные устройства работали комфортнее.", en: "System check and optimization to make older or slower devices more comfortable." },
    includes: { az: ["Startup təmizliyi", "Storage cleanup", "Sistem health check", "Proqram təmizliyi", "Performans tövsiyələri"], ru: ["Startup cleanup", "Очистка storage", "Проверка состояния системы", "Software cleanup", "Рекомендации по производительности"], en: ["Startup cleanup", "Storage cleanup", "System health check", "Software cleanup", "Performance recommendations"] },
    audience: { az: ["Zəif laptop istifadəçiləri", "Köhnə cihaz sahibləri", "Dərs və iş üçün stabil sistem istəyənlər"], ru: ["Пользователи слабых ноутбуков", "Владельцы старых устройств", "Кому нужна стабильная система"], en: ["Low-end laptop users", "Older device owners", "Users who need a stable work system"] },
    faq: commonFaq
  },
  {
    slug: "uzagdan-destek",
    category: "support",
    icon: Headphones,
    title: { az: "Uzaqdan texniki dəstək", ru: "Удаленная техническая поддержка", en: "Remote technical support" },
    short: { az: "Proqram xətaları, quraşdırma, sazlama və konsultasiya üzrə uzaqdan kömək.", ru: "Удаленная помощь с ошибками программ, установкой, настройкой и консультацией.", en: "Remote help with software errors, setup, configuration and consultation." },
    seoTitle: { az: "Uzaqdan texniki dəstək Azərbaycanda | Softy.az", ru: "Удаленная техническая поддержка в Азербайджане | Softy.az", en: "Remote technical support in Azerbaijan | Softy.az" },
    meta: { az: "Azərbaycan üzrə uzaqdan texniki dəstək: proqram quraşdırılması, xətaların həlli və sazlama.", ru: "Удаленная поддержка по Азербайджану: установка программ, решение ошибок и настройка.", en: "Remote support across Azerbaijan for software installation, troubleshooting and configuration." },
    intro: { az: "Cihazı gətirmədən, uyğun hallarda uzaqdan bağlantı ilə proqram və sistem problemlərinin həlli.", ru: "Решение программных и системных проблем через удаленное подключение, когда это возможно.", en: "Software and system issue solving through remote connection when suitable." },
    includes: { az: ["Remote troubleshooting", "Proqram quraşdırma köməyi", "Software error həlli", "Konfiqurasiya dəstəyi", "Konsultasiya"], ru: ["Remote troubleshooting", "Помощь с установкой программ", "Решение software errors", "Настройка", "Консультация"], en: ["Remote troubleshooting", "Software installation help", "Software error solving", "Configuration support", "Consultation"] },
    audience: { az: ["Bakıdan kənarda olan müştərilər", "Təcili proqram problemi olanlar", "Cihazı təhvil vermək istəməyənlər"], ru: ["Клиенты вне Баку", "Кому нужна срочная помощь", "Кто не хочет передавать устройство"], en: ["Customers outside Baku", "Urgent software issues", "Users who prefer not to hand off a device"] },
    faq: commonFaq
  },
  {
    slug: "arxitektura-proqramlari",
    category: "pro",
    icon: DraftingCompass,
    title: { az: "Memarlıq və mühəndislik proqramları", ru: "Архитектурные и инженерные программы", en: "Architecture and engineering software" },
    short: { az: "AutoCAD, Revit, 3ds Max, SketchUp, SolidWorks, MATLAB, D5 Render, Lumion, Enscape, V-Ray.", ru: "AutoCAD, Revit, 3ds Max, SketchUp, SolidWorks, MATLAB, D5 Render, Lumion, Enscape, V-Ray.", en: "AutoCAD, Revit, 3ds Max, SketchUp, SolidWorks, MATLAB, D5 Render, Lumion, Enscape, V-Ray." },
    seoTitle: { az: "Memarlıq proqramlarının quraşdırılması | AutoCAD, Revit, 3ds Max | Softy.az", ru: "Установка архитектурных программ | AutoCAD, Revit, 3ds Max | Softy.az", en: "Architecture software installation | AutoCAD, Revit, 3ds Max | Softy.az" },
    meta: { az: "Memarlıq və mühəndislik proqramlarının quraşdırılması: AutoCAD, Revit, 3ds Max, SketchUp, SolidWorks, MATLAB, render alətləri.", ru: "Установка архитектурных и инженерных программ: AutoCAD, Revit, 3ds Max, SketchUp, SolidWorks, MATLAB, render tools.", en: "Architecture and engineering software setup: AutoCAD, Revit, 3ds Max, SketchUp, SolidWorks, MATLAB and render tools." },
    intro: { az: "Təhsil və peşəkar layihələr üçün memarlıq, render və mühəndislik proqramlarının uyğun paketlə hazırlanması.", ru: "Подготовка архитектурных, render и инженерных программ для учебы и профессиональных проектов.", en: "Architecture, render and engineering software prepared for study and professional projects." },
    includes: { az: ["AutoCAD", "Revit", "3ds Max", "SketchUp", "SolidWorks", "MATLAB", "D5 Render, Lumion, Enscape, V-Ray"], ru: ["AutoCAD", "Revit", "3ds Max", "SketchUp", "SolidWorks", "MATLAB", "D5 Render, Lumion, Enscape, V-Ray"], en: ["AutoCAD", "Revit", "3ds Max", "SketchUp", "SolidWorks", "MATLAB", "D5 Render, Lumion, Enscape, V-Ray"] },
    audience: { az: ["Memarlıq tələbələri", "Dizaynerlər", "Mühəndislər və render mütəxəssisləri"], ru: ["Студенты архитектуры", "Дизайнеры", "Инженеры и render-специалисты"], en: ["Architecture students", "Designers", "Engineers and render specialists"] },
    faq: commonFaq
  }
];

export const services: Service[] = [...coreServices, ...seoLandingServices];

export const extraServices = [
  { icon: ShieldCheck, title: { az: "Antivirus və təhlükəsizlik quraşdırılması", ru: "Антивирус и безопасность", en: "Antivirus and security setup" }, text: { az: "Təhlükəsizlik alətləri, brauzer təhlükəsizliyi ayarları və təhlükəsiz istifadə tövsiyələri.", ru: "Инструменты защиты, browser safety settings и рекомендации.", en: "Security tools, browser safety settings and safe usage recommendations." } },
  { icon: Gamepad2, title: { az: "Oyun quraşdırılması", ru: "Установка игр", en: "Game installation" }, text: { az: "DirectX, Visual C++ komponentləri, driver dəstəyi və performans ayarları.", ru: "DirectX, Visual C++ components, драйверы и настройки производительности.", en: "DirectX, Visual C++ components, driver support and performance settings." } }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
