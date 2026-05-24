import type { Locale } from "@/config/site";
import { seoBlogPosts } from "@/content/seoBlogPosts";

export type BlogPost = {
  slug: string;
  date: string;
  serviceSlug?: string;
  title: Record<Locale, string>;
  meta: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  sections: Record<Locale, { heading: string; body: string[] }[]>;
};

const ruSoon = "Материал подготовлен для клиентов Softy.az в Азербайджане. Для точной консультации по вашему устройству напишите в WhatsApp.";
const enSoon = "This guide is prepared for Softy.az customers in Azerbaijan. For exact advice about your device, message us on WhatsApp.";

const coreBlogPosts: BlogPost[] = [
  {
    slug: "windows-qurasdirildiqdan-sonra-lazim-olan-proqramlar",
    date: "2026-05-20",
    serviceSlug: "windows-qurasdirilmasi",
    title: { az: "Windows quraşdırıldıqdan sonra hansı proqramlar lazımdır?", ru: "Какие программы нужны после установки Windows?", en: "Which apps do you need after installing Windows?" },
    meta: { az: "Windows quraşdırıldıqdan sonra lazım olan əsas proqramlar: driverlər, Office, PDF, browser, təhlükəsizlik və gündəlik istifadə alətləri.", ru: "Какие программы установить после Windows: драйверы, Office, PDF, browser, безопасность.", en: "Essential apps after Windows setup: drivers, Office, PDF, browser, security and everyday tools." },
    excerpt: { az: "Yeni Windows-dan sonra sistemi rahat və stabil istifadə etmək üçün əsas proqram siyahısı.", ru: "Список базовых программ для удобной работы после Windows setup.", en: "A practical checklist for a comfortable Windows setup." },
    sections: {
      az: [
        { heading: "Əvvəlcə driverlər yoxlanmalıdır", body: ["Windows quraşdırıldıqdan sonra Wi-Fi, səs, video kart, chipset və printer driverləri yoxlanmalıdır. Driver düzgün olmayanda sistem işləsə də performans və stabilik zəif ola bilər."] },
        { heading: "Gündəlik istifadə üçün əsas proqramlar", body: ["Browser, Office, PDF alətləri, arxiv proqramı, media player və lazım olan messencerlər sistemi gündəlik işə hazır edir. Tələbə və ofis istifadəçiləri üçün bu mərhələ xüsusilə vacibdir."] },
        { heading: "Təhlükəsizlik və optimizasiya", body: ["Lazımsız startup proqramlarını azaltmaq, browser safety ayarlarını yoxlamaq və storage təmizliyini planlamaq laptopun daha rahat işləməsinə kömək edir.", "Softy.az Windows setup zamanı cihazınıza uyğun əsas proqramları və driverləri hazırlaya bilər."] }
      ],
      ru: [{ heading: "Кратко", body: [ruSoon, "После Windows обычно нужны драйверы, Office, PDF tools, browser, security settings и базовая оптимизация."] }],
      en: [{ heading: "Quick guide", body: [enSoon, "After Windows, you usually need drivers, Office, PDF tools, a browser, security settings and basic optimization."] }]
    }
  },
  {
    slug: "autocad-qurasdirilmasi-sistem-telebleri",
    date: "2026-05-20",
    serviceSlug: "autocad-qurasdirilmasi",
    title: { az: "AutoCAD quraşdırılması üçün minimum sistem tələbləri", ru: "Минимальные требования для установки AutoCAD", en: "Minimum system requirements for AutoCAD installation" },
    meta: { az: "AutoCAD üçün RAM, prosessor, disk və video kart tələbləri. Zəif laptopda AutoCAD seçimi üçün praktik məsləhətlər.", ru: "RAM, CPU, disk and GPU guidance for AutoCAD.", en: "RAM, CPU, disk and GPU guidance for AutoCAD." },
    excerpt: { az: "AutoCAD quraşdırmadan əvvəl laptopunuzun uyğun olub-olmadığını necə yoxlamaq olar.", ru: "Как проверить, подходит ли ноутбук для AutoCAD.", en: "How to check whether your laptop is suitable for AutoCAD." },
    sections: {
      az: [
        { heading: "RAM və disk vacibdir", body: ["Sadə 2D işlər üçün daha zəif cihazlar da istifadə oluna bilər, amma rahat iş üçün ən azı 8 GB RAM və SSD tövsiyə edilir. Böyük layihələr üçün 16 GB RAM daha rahatdır."] },
        { heading: "Video kart və prosessor", body: ["2D çizimlərdə prosessor və RAM daha çox hiss olunur. 3D modelləmə və render işlərində isə ayrıca video kart üstünlük yaradır."] },
        { heading: "Uyğun versiya seçimi", body: ["Hər laptop üçün ən yeni versiya ən yaxşı seçim olmaya bilər. Softy.az cihaz göstəricilərinə görə uyğun AutoCAD versiyası və əlavə komponentlər barədə məsləhət verə bilər."] }
      ],
      ru: [{ heading: "Кратко", body: [ruSoon, "Для комфортной работы с AutoCAD обычно важны SSD, достаточная RAM и подходящая версия программы."] }],
      en: [{ heading: "Quick guide", body: [enSoon, "For comfortable AutoCAD work, SSD, enough RAM and the right software version matter most."] }]
    }
  },
  {
    slug: "revit-acilmirsa-ne-etmeli",
    date: "2026-05-20",
    serviceSlug: "revit-qurasdirilmasi",
    title: { az: "Revit açılmırsa nə etmək lazımdır?", ru: "Что делать, если Revit не открывается?", en: "What to do if Revit does not open" },
    meta: { az: "Revit açılmır, donur və ya xəta verir? Driver, sistem tələbləri, plugin və quraşdırma problemləri üçün praktik addımlar.", ru: "Revit does not open: drivers, system requirements, plugins and setup issues.", en: "Revit does not open: drivers, requirements, plugins and setup issues." },
    excerpt: { az: "Revit xətalarının ən yayılmış səbəbləri və ilk yoxlanmalı addımlar.", ru: "Common reasons why Revit fails to open.", en: "Common reasons why Revit fails to open." },
    sections: {
      az: [
        { heading: "Sistem tələblərini yoxlayın", body: ["Revit ağır BIM proqramıdır. RAM azlığı, köhnə video driver və zəif disk proqramın açılmasına və stabil işləməsinə təsir edə bilər."] },
        { heading: "Plugin və komponent problemləri", body: ["Bəzi pluginlər və əlavə komponentlər Revit-in açılmasına mane ola bilər. Problemi tapmaq üçün son quraşdırılan əlavələri yoxlamaq lazımdır."] },
        { heading: "Dəqiq xəta mesajı önəmlidir", body: ["Xəta mesajının screenshot-u problemi daha tez anlamağa kömək edir. Softy.az uzaqdan qoşulub uyğun hallarda Revit xətalarını yoxlaya bilər."] }
      ],
      ru: [{ heading: "Кратко", body: [ruSoon, "Чаще всего проблема связана с требованиями системы, драйверами, компонентами или плагинами."] }],
      en: [{ heading: "Quick guide", body: [enSoon, "The issue is often related to system requirements, drivers, components or plugins."] }]
    }
  },
  {
    slug: "adobe-photoshop-premiere-pro-sistem-telebleri",
    date: "2026-05-20",
    serviceSlug: "adobe-qurasdirilmasi",
    title: { az: "Adobe Photoshop və Premiere Pro üçün kompüter tələbləri", ru: "Требования для Adobe Photoshop и Premiere Pro", en: "Computer requirements for Adobe Photoshop and Premiere Pro" },
    meta: { az: "Photoshop və Premiere Pro üçün RAM, SSD, video kart və prosessor seçimi. Dizayn və montaj üçün praktik tövsiyələr.", ru: "RAM, SSD, GPU and CPU tips for Photoshop and Premiere Pro.", en: "RAM, SSD, GPU and CPU tips for Photoshop and Premiere Pro." },
    excerpt: { az: "Adobe proqramları üçün hansı cihaz daha uyğundur və zəif laptopda nə gözləmək olar.", ru: "Which device is suitable for Adobe apps.", en: "Which device is suitable for Adobe apps." },
    sections: {
      az: [
        { heading: "Photoshop və Premiere fərqli yüklənir", body: ["Photoshop üçün RAM və SSD böyük rol oynayır. Premiere Pro isə video montajda prosessor, RAM, disk sürəti və GPU-dan daha çox istifadə edir."] },
        { heading: "Zəif laptopda düzgün gözlənti", body: ["4 GB RAM və köhnə i3 cihazlarda yüngül işlər mümkündür, amma ağır video montaj və böyük fayllar rahat olmaya bilər. Uyğun versiya seçimi vacibdir."] },
        { heading: "Quraşdırma və sazlama", body: ["Softy.az Adobe tətbiqlərinin quraşdırılması, istifadə ehtiyacınıza uyğun seçimlər və plugin məsələləri üzrə konsultasiya verə bilər."] }
      ],
      ru: [{ heading: "Кратко", body: [ruSoon, "Photoshop больше зависит от RAM/SSD, Premiere Pro также требует CPU/GPU ресурсов."] }],
      en: [{ heading: "Quick guide", body: [enSoon, "Photoshop depends heavily on RAM/SSD, while Premiere Pro also needs CPU/GPU power."] }]
    }
  },
  {
    slug: "laptop-formatlamadan-evvel",
    date: "2026-05-20",
    serviceSlug: "windows-qurasdirilmasi",
    title: { az: "Laptop formatlamadan əvvəl nələrə diqqət etmək lazımdır?", ru: "Что учесть перед форматированием ноутбука?", en: "What to check before formatting a laptop" },
    meta: { az: "Laptop formatlamadan əvvəl backup, driver, proqram siyahısı və hesab məlumatları barədə vacib məsləhətlər.", ru: "Backup, drivers, app list and account tips before formatting.", en: "Backup, drivers, app list and account tips before formatting." },
    excerpt: { az: "Formatdan əvvəl məlumat itkisini və sonradan yaranan problemləri azaltmaq üçün checklist.", ru: "Checklist before formatting a laptop.", en: "Checklist before formatting a laptop." },
    sections: {
      az: [
        { heading: "Faylları backup edin", body: ["Desktop, Documents, Downloads, şəkillər və layihə qovluqları yoxlanmalıdır. Formatdan sonra silinən faylları geri qaytarmaq həmişə mümkün olmur."] },
        { heading: "Lazım olan proqramları yazın", body: ["Office, Adobe, AutoCAD, Revit, browser, printer driver və digər ehtiyaclar əvvəlcədən siyahıya alınsa, setup daha düzgün planlanır."] },
        { heading: "Hesab və parollar", body: ["Microsoft, Google, Adobe və digər hesab girişlərini əvvəlcədən yoxlamaq formatdan sonra vaxt itkisinin qarşısını alır."] }
      ],
      ru: [{ heading: "Кратко", body: [ruSoon, "Перед форматированием важно проверить backup, список программ, драйверы и доступ к аккаунтам."] }],
      en: [{ heading: "Quick guide", body: [enSoon, "Before formatting, check backups, app list, drivers and account access."] }]
    }
  },
  {
    slug: "driver-qurasdirilmasi-niye-vacibdir",
    date: "2026-05-20",
    serviceSlug: "driver-qurasdirilmasi",
    title: { az: "Driver quraşdırılması niyə vacibdir?", ru: "Почему важна установка драйверов?", en: "Why driver installation matters" },
    meta: { az: "Driverlər performans, Wi-Fi, səs, printer, Bluetooth və video kart stabil işləməsi üçün niyə vacibdir?", ru: "Why drivers matter for Wi-Fi, audio, printer, Bluetooth and GPU.", en: "Why drivers matter for Wi-Fi, audio, printer, Bluetooth and GPU." },
    excerpt: { az: "Driver olmadan sistem işləyə bilər, amma stabil və tam güclü olmaya bilər.", ru: "Without proper drivers the system may work, but not well.", en: "Without proper drivers the system may work, but not well." },
    sections: {
      az: [
        { heading: "Driver cihazla sistem arasında körpüdür", body: ["Video kart, Wi-Fi, Bluetooth, audio və printer kimi hissələr düzgün driver olmadan tam işləməyə bilər."] },
        { heading: "Performans fərqi yarada bilər", body: ["Xüsusilə oyun, render və peşəkar proqramlarda GPU driverləri performansa ciddi təsir edir."] },
        { heading: "Modelə uyğun driver seçimi", body: ["Laptoplarda eyni seriyanın müxtəlif modelləri fərqli komponentlərə sahib ola bilər. Ona görə driver seçimi diqqətli edilməlidir."] }
      ],
      ru: [{ heading: "Кратко", body: [ruSoon, "Драйверы влияют на стабильность, Wi-Fi, звук, GPU performance и работу устройств."] }],
      en: [{ heading: "Quick guide", body: [enSoon, "Drivers affect stability, Wi-Fi, audio, GPU performance and device support."] }]
    }
  },
  {
    slug: "memarliq-telebeleri-ucun-proqramlar",
    date: "2026-05-20",
    serviceSlug: "arxitektura-proqramlari",
    title: { az: "Memarlıq tələbələri üçün ən vacib proqramlar", ru: "Самые важные программы для студентов архитектуры", en: "Essential software for architecture students" },
    meta: { az: "Memarlıq tələbələri üçün AutoCAD, Revit, SketchUp, 3ds Max, Lumion, Enscape, V-Ray və Adobe proqramları haqqında qısa bələdçi.", ru: "AutoCAD, Revit, SketchUp, 3ds Max, Lumion, Enscape, V-Ray and Adobe for architecture students.", en: "AutoCAD, Revit, SketchUp, 3ds Max, Lumion, Enscape, V-Ray and Adobe for architecture students." },
    excerpt: { az: "Memarlıq dərsləri və layihələr üçün ən çox lazım olan proqramlar.", ru: "Most needed tools for architecture studies.", en: "Most needed tools for architecture studies." },
    sections: {
      az: [
        { heading: "Çizim və BIM", body: ["AutoCAD 2D çizimlər üçün, Revit isə BIM layihələri üçün ən çox istifadə olunan proqramlardandır."] },
        { heading: "Model və render", body: ["SketchUp, 3ds Max, Lumion, D5 Render, Enscape və V-Ray təqdimat və vizualizasiya işlərində istifadə olunur."] },
        { heading: "Post-processing və təqdimat", body: ["Photoshop, Illustrator və InDesign kimi Adobe proqramları layihə təqdimatlarının daha professional görünməsinə kömək edir."] }
      ],
      ru: [{ heading: "Кратко", body: [ruSoon, "Architecture students usually need AutoCAD, Revit, SketchUp/3ds Max, render tools and Adobe apps."] }],
      en: [{ heading: "Quick guide", body: [enSoon, "Architecture students usually need AutoCAD, Revit, SketchUp/3ds Max, render tools and Adobe apps."] }]
    }
  },
  {
    slug: "uzagdan-texniki-destek-nece-isleyir",
    date: "2026-05-20",
    serviceSlug: "uzagdan-destek",
    title: { az: "Uzaqdan texniki dəstək necə işləyir?", ru: "Как работает удаленная техническая поддержка?", en: "How remote technical support works" },
    meta: { az: "Uzaqdan texniki dəstək prosesi: problem təsviri, təhlükəsiz bağlantı, quraşdırma, sazlama və yekun yoxlama.", ru: "Remote support process: issue, secure connection, setup and final check.", en: "Remote support process: issue, secure connection, setup and final check." },
    excerpt: { az: "Cihazı gətirmədən proqram problemini həll etmək üçün proses necə gedir.", ru: "How software issues can be solved without bringing the device.", en: "How software issues can be solved without bringing the device." },
    sections: {
      az: [
        { heading: "Əvvəl problem dəqiqləşdirilir", body: ["WhatsApp və ya Instagram Direct vasitəsilə cihaz, sistem və problem haqqında məlumat alınır. Screenshot və xəta mesajı işi sürətləndirir."] },
        { heading: "Təhlükəsiz bağlantı", body: ["Uyğun hallarda uzaqdan bağlantı proqramı ilə cihazınıza qoşulub quraşdırma və sazlama edilir. Şəxsi fayllarla bağlı davranış əvvəlcədən razılaşdırılır."] },
        { heading: "Yekun yoxlama", body: ["Problem həll olunduqdan sonra proqramın açılması, əsas funksiyaların işləməsi və lazımi ayarlar yoxlanılır."] }
      ],
      ru: [{ heading: "Кратко", body: [ruSoon, "Remote support starts with issue details, then secure connection, setup and final check."] }],
      en: [{ heading: "Quick guide", body: [enSoon, "Remote support starts with issue details, then secure connection, setup and final check."] }]
    }
  }
];

export const blogPosts: BlogPost[] = [...seoBlogPosts, ...coreBlogPosts];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
