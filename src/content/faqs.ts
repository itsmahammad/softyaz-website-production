import type { Locale } from "@/config/site";

export const faqs: Record<Locale, { q: string; a: string }[]> = {
  az: [
    { q: "Proqram quraşdırılması nə qədər vaxt aparır?", a: "Adətən sadə proqramlar qısa vaxtda hazırlanır. Windows, driverlər və bir neçə peşəkar proqram olan tam qurulum isə cihazın vəziyyətindən və proqram sayından asılıdır." },
    { q: "Uzaqdan proqram quraşdırmaq mümkündür?", a: "Bəli, uyğun hallarda uzaqdan bağlantı ilə proqram quraşdırılması, sazlama və xətaların həlli mümkündür." },
    { q: "Bakıda laptopu təhvil verib sonra götürmək olur?", a: "Bəli, Bakı üzrə razılaşdırılmış qaydada laptop və ya PC qəbul edilə bilər və hazır olduqdan sonra geri qaytarılır." },
    { q: "Hansı proqramları quraşdırırsınız?", a: "Windows, Linux, Office, Adobe, AutoCAD, Revit, 3ds Max, SketchUp, SolidWorks, MATLAB, render alətləri, driverlər və gündəlik istifadə proqramları üzrə dəstək verilir." },
    { q: "Windows quraşdırıldıqdan sonra driverlər də yazılır?", a: "Bəli, GPU, Wi-Fi, Bluetooth, audio, chipset, printer və laptop modelinə uyğun driverlər yoxlanılır." },
    { q: "AutoCAD, Revit, 3ds Max kimi proqramları quraşdırırsınız?", a: "Bəli, memarlıq və mühəndislik proqramları üçün quraşdırma, sazlama və uyğunluq dəstəyi mövcuddur." },
    { q: "Adobe proqramları quraşdırırsınız?", a: "Bəli, Photoshop, Illustrator, Premiere Pro, After Effects, Lightroom, Acrobat və digər Adobe tətbiqləri üçün quraşdırma və istifadə ehtiyacına uyğun konsultasiya edilir." },
    { q: "macOS üçün proqram quraşdırılması mümkündür?", a: "Mümkün olan proqramlar üçün macOS dəstəyi də verilir. Dəqiq uyğunluq proqramdan və macOS versiyasından asılıdır." },
    { q: "3 və daha çox proqram üçün endirim var?", a: "Bəli, 3 və daha çox proqram quraşdırılmasında 20% endirim tətbiq olunur." },
    { q: "Quraşdırmadan sonra problem olsa kömək edirsiniz?", a: "Bəli, quraşdırmadan sonra yaranan uyğun texniki problemlər üçün dəstək göstərilir." },
    { q: "Tələbələr üçün uyğun paketlər var?", a: "Bəli, memarlıq, dizayn, mühəndislik və ofis işləri üçün tələbələrə uyğun paketlər seçilə bilər." },
    { q: "Qiymətlər nədən asılıdır?", a: "Qiymət proqram sayından, proqram növündən, cihazın vəziyyətindən, uzaqdan dəstək və ya cihaz təhvili formatından asılıdır." },
    { q: "Oyun və lazımi komponentləri quraşdırırsınız?", a: "Bəli, oyun quraşdırılması, DirectX, Visual C++ redistributable paketləri, driver dəstəyi və performans ayarları üzrə kömək edilir." },
    { q: "Kompüter zəifdirsə hansı proqramların uyğun olduğunu deyirsiniz?", a: "Bəli, cihazın RAM, prosessor, disk və video kartına görə uyğun proqram və versiya seçimi üzrə məsləhət verilir." },
    { q: "Antivirus və təhlükəsizlik ayarları edirsiniz?", a: "Bəli, təhlükəsizlik alətləri, brauzer təhlükəsizliyi ayarları, zərərli proqram yoxlanışı və təhlükəsiz istifadə tövsiyələri verilir." }
  ],
  ru: [
    { q: "Сколько времени занимает установка программ?", a: "Зависит от количества программ и состояния устройства. Простые задачи выполняются быстро, полный setup занимает больше времени." },
    { q: "Можно установить программы удаленно?", a: "Да, если задача подходит для удаленной работы, установка и настройка возможны через безопасное подключение." },
    { q: "Можно передать ноутбук в Баку и забрать позже?", a: "Да, устройство можно передать по договоренности и получить обратно после завершения работ." },
    { q: "Какие программы вы устанавливаете?", a: "Windows, Linux, Office, Adobe, AutoCAD, Revit, 3ds Max, SketchUp, SolidWorks, MATLAB, render tools, драйверы и повседневные программы." },
    { q: "После Windows устанавливаются драйверы?", a: "Да, проверяются драйверы GPU, Wi-Fi, Bluetooth, audio, chipset, printer и драйверы под модель ноутбука." },
    { q: "Устанавливаете AutoCAD, Revit, 3ds Max?", a: "Да, есть поддержка архитектурных и инженерных программ." },
    { q: "Устанавливаете Adobe-программы?", a: "Да, Photoshop, Illustrator, Premiere Pro, After Effects, Lightroom, Acrobat и другие приложения Adobe." },
    { q: "Есть поддержка macOS?", a: "Да, для доступных программ. Совместимость зависит от приложения и версии macOS." },
    { q: "Есть скидка на 3 и более программ?", a: "Да, действует скидка 20% при установке 3 и более программ." },
    { q: "Помогаете после установки?", a: "Да, по подходящим техническим вопросам после установки предоставляется поддержка." }
  ],
  en: [
    { q: "How long does software installation take?", a: "It depends on the number of apps and device condition. Simple apps are faster, full system setup takes longer." },
    { q: "Can software be installed remotely?", a: "Yes, when suitable, installation and configuration can be handled through a secure remote connection." },
    { q: "Can I hand off my laptop in Baku and pick it up later?", a: "Yes, device handoff in Baku is available by agreement." },
    { q: "Which apps do you install?", a: "Windows, Linux, Office, Adobe, AutoCAD, Revit, 3ds Max, SketchUp, SolidWorks, MATLAB, render tools, drivers and everyday apps." },
    { q: "Are drivers installed after Windows setup?", a: "Yes, GPU, Wi-Fi, Bluetooth, audio, chipset, printer and laptop-specific drivers are checked." },
    { q: "Do you install AutoCAD, Revit and 3ds Max?", a: "Yes, architecture and engineering software setup is available." },
    { q: "Do you install Adobe apps?", a: "Yes, Photoshop, Illustrator, Premiere Pro, After Effects, Lightroom, Acrobat and other Adobe apps." },
    { q: "Is macOS software setup available?", a: "Yes, where the requested app supports macOS. Compatibility depends on the app and macOS version." },
    { q: "Is there a discount for 3 or more apps?", a: "Yes, a 20% discount applies when installing 3 or more apps." },
    { q: "Do you help after installation?", a: "Yes, support is available for suitable technical issues after setup." }
  ]
};
