export const siteConfig = {
  // Основна інформація
  version: "1.3.0",
  releaseDate: "2026-07-13",
  platform: "Astro 6.4",
  email: "feedback@foodprocessportal.com",
  name: "FoodProcessPortal",
  title: "FoodProcessPortal",
  url: "https://foodprocessportal.com",

  // Переклади для всіх частин сайту
  translations: {
    uk: {
      // Header
      siteTitle: "FoodProcessPortal",

      // Головна сторінка
      welcome: "Ласкаво просимо до FoodProcessPortal",
      subtitle:
        "Віртуальний підручник з процесів і апаратів харчових виробництв",
      languagePrompt: "Оберіть мову",
      goTo: "Перейти",

      // Картки на головній
      sections: {
        home: { title: "Головна", desc: "Головна сторінка" },
        topics: {
          title: "Лекційні матеріали",
          desc: "Лекції, теми та навчальні траєкторії",
        },
        problems: { title: "Задачник", desc: "Задачі та розв'язки" },
        practice: { title: "Практикум", desc: "Лабораторні роботи" },
        reference: { title: "Довідник", desc: "Формули та таблиці" },
        courses: { title: "Курсові", desc: "Методичні вказівки" },
        videos: { title: "Відео", desc: "Відеоматеріали" },
      },

      // Footer
      footer: {
        navigation: "Навігація",
        contacts: "Контакти",
        copyright: "Всі права захищені",
        madeWith: "Зроблено з",
        forStudents: "для студентів",
        updated: "Оновлено",
        tagline: "Процеси і апарати харчових виробництв",
        description: "Віртуальний підручник для студентів харчових технологій",
      },

      // Сторінка теми
      backToTopics: "Назад до лекційних матеріалів",

      // Сторінки-заглушки
      comingSoon: "Незабаром",
      underConstruction: "Розділ у розробці",
      underConstructionTitle: " Цей розділ у розробці",
      underConstructionText:
        "Ми працюємо над наповненням цього розділу. Незабаром тут з'явиться корисний матеріал.",
      feature1: "Працюємо над контентом",
      feature2: "Готуємо якісні матеріали",
      feature3: "Слідкуйте за оновленнями",
      backHome: "← Повернутися на головну",

      prevTopic: "Попередня тема",
      nextTopic: "Наступна тема",

      tableOfContents: "Зміст",
      categories: {
        all: "Всі теми",
        general: "Загальні відомості",
        "heat-exchange": "Теплообмін",
        "mass-transfer": "Масообмін",
        hydromechanical: "Гідромеханічні процеси",
        mechanical: "Механічні процеси",
      },

      // В uk:
      searchPlaceholder: "Пошук тем...",
      noResults: "Нічого не знайдено",
      searchResults: "Знайдено тем",
      searchHint: "Спробуйте змінити пошуковий запит або категорію",

      reference: {
        hubSubtitle:
          "Інтерактивні калькулятори, формули та довідкові таблиці для розрахунків у харчових технологіях",
        waterTitle: "Теплофізичні властивості води",
        waterDesc:
          "Калькулятор густини, теплоємності, теплопровідності, в'язкості та інших властивостей води, льоду і пари за температурою та тиском.",
        waterEyebrow: "Термодинамічний калькулятор",
        backToReference: "← Назад до довідника",
        externalNote: "Окрема версія калькулятора також доступна на",
        openStandalone: "Відкрити автономну версію калькулятора:",
      },
      practice: {
        hubSubtitle:
          "Лабораторні роботи з гідростатики, гідродинаміки, теплообміну, масообміну та механічних процесів харчових виробництв",
        labsWord: "робота",
        labWord: "Лабораторна робота",
        goal: "Мета роботи",
        backToPractice: "← Назад до практикуму",
        backToCategory: "← Назад до категорії",
        prevLab: "Попередня робота",
        nextLab: "Наступна робота",
      },
    },

    ru: {
      // Header
      siteTitle: "FoodProcessPortal",

      // Головна сторінка
      welcome: "Добро пожаловать в FoodProcessPortal",
      subtitle:
        "Виртуальный учебник по процессам и аппаратам пищевых производств",
      languagePrompt: "Выберите язык",
      goTo: "Перейти",

      // Картки на головній
      sections: {
        home: { title: "Главная", desc: "Главная страница" },
        topics: {
          title: "Лекционные материалы",
          desc: "Лекции, темы и учебные траектории",
        },
        problems: { title: "Задачник", desc: "Задачи и решения" },
        practice: { title: "Практикум", desc: "Лабораторные работы" },
        reference: { title: "Справочник", desc: "Формулы и таблицы" },
        courses: { title: "Курсовые", desc: "Методические указания" },
        videos: { title: "Видео", desc: "Видеоматериалы" },
      },

      // Footer
      footer: {
        navigation: "Навигация",
        contacts: "Контакты",
        copyright: "Все права защищены",
        madeWith: "Сделано с",
        forStudents: "для студентов",
        updated: "Обновлено",
        tagline: "Процессы и аппараты пищевых производств",
        description: "Виртуальный учебник для студентов пищевых технологий",
      },

      // Сторінка теми
      backToTopics: "Назад к лекционным материалам",

      // Сторінки-заглушки
      comingSoon: "Скоро",
      underConstruction: "Раздел в разработке",
      underConstructionTitle: "🚧 Этот раздел в разработке",
      underConstructionText:
        "Мы работаем над наполнением этого раздела. Скоро здесь появится полезный материал.",
      feature1: "Работаем над контентом",
      feature2: "Готовим качественные материалы",
      feature3: "Следите за обновлениями",
      backHome: "← Вернуться на главную",

      prevTopic: "Предыдущая тема",
      nextTopic: "Следующая тема",

      tableOfContents: "Содержание",

      categories: {
        all: "Все темы",
        heatExchange: "Теплообмен",
        "mass-transfer": "Массообмен",
        hydromechanical: "Гидромеханические процессы",
        mechanical: "Механические процессы",
      },

      searchPlaceholder: "Поиск тем...",
      noResults: "Ничего не найдено",
      searchResults: "Найдено тем",
      searchHint: "Попробуйте изменить поисковый запрос или категорию",

      reference: {
        hubSubtitle:
          "Интерактивные калькуляторы, формулы и справочные таблицы для расчётов в пищевых технологиях",
        waterTitle: "Теплофизические свойства воды",
        waterDesc:
          "Калькулятор плотности, теплоёмкости, теплопроводности, вязкости и других свойств воды, льда и пара по температуре и давлению.",
        waterEyebrow: "Термодинамический калькулятор",
        backToReference: "← Назад к справочнику",
        externalNote: "Отдельная версия калькулятора также доступна на",
        openStandalone: "Открыть автономную версию калькулятора:",
      },
      practice: {
        hubSubtitle:
          "Лабораторные работы по гидростатике, гидродинамике, теплообмену, массообмену и механическим процессам пищевых производств",
        labsWord: "работа",
        labWord: "Лабораторная работа",
        goal: "Цель работы",
        backToPractice: "← Назад к практикуму",
        backToCategory: "← Назад к категории",
        prevLab: "Предыдущая работа",
        nextLab: "Следующая работа",
      },
    },

    en: {
      // Header
      siteTitle: "FoodProcessPortal",

      // Головна сторінка
      welcome: "Welcome to FoodProcessPortal",
      subtitle:
        "Virtual textbook on processes and apparatus of food production",
      languagePrompt: "Select language",
      goTo: "Go to",

      // Картки на головній
      sections: {
        home: { title: "Home", desc: "Home page" },
        topics: {
          title: "Lecture Materials",
          desc: "Lectures, topics, and learning tracks",
        },
        problems: { title: "Problem Book", desc: "Problems & solutions" },
        practice: { title: "Practice", desc: "Laboratory work" },
        reference: { title: "Reference", desc: "Formulas & tables" },
        courses: { title: "Courses", desc: "Methodological guides" },
        videos: { title: "Videos", desc: "Video materials" },
      },

      // Footer
      footer: {
        navigation: "Navigation",
        contacts: "Contacts",
        copyright: "All rights reserved",
        madeWith: "Made with",
        forStudents: "for students",
        updated: "Updated",
        tagline: "Processes and Apparatus of Food Production",
        description: "Virtual textbook for food technology students",
      },

      // Сторінка теми
      backToTopics: "Back to lecture materials",

      // Сторінки-заглушки
      comingSoon: "Coming soon",
      underConstruction: "Section under construction",
      underConstructionTitle: "🚧 This section is under construction",
      underConstructionText:
        "We are working on filling this section. Useful material will appear here soon.",
      feature1: "Working on content",
      feature2: "Preparing quality materials",
      feature3: "Stay tuned for updates",
      backHome: "← Back to home",

      prevTopic: "Previous topic",
      nextTopic: "Next topic",

      tableOfContents: "Table of Contents",

      categories: {
        all: "All topics",
        general: "General principles",
        "heat-exchange": "Heat exchange",
        "mass-transfer": "Mass transfer",
        hydromechanical: "Hydromechanical processes",
        mechanical: "Mechanical processes",
      },

      searchPlaceholder: "Search topics...",
      noResults: "No results found",
      searchResults: "Topics found",
      searchHint: "Try changing the search query or category",

      reference: {
        hubSubtitle:
          "Interactive calculators, formulas, and reference tables for food process engineering",
        waterTitle: "Thermophysical properties of water",
        waterDesc:
          "Calculator for density, heat capacity, thermal conductivity, viscosity, and other properties of water, ice, and steam by temperature and pressure.",
        waterEyebrow: "Thermodynamic calculator",
        backToReference: "← Back to reference",
        externalNote:
          "A standalone version of the calculator is also available at",
        openStandalone: "Open the standalone calculator:",
      },
      practice: {
        hubSubtitle:
          "Laboratory work on hydrostatics, hydrodynamics, heat transfer, mass transfer, and mechanical processes in food production",
        labsWord: "lab",
        labWord: "Laboratory work",
        goal: "Objective",
        backToPractice: "← Back to practice",
        backToCategory: "← Back to category",
        prevLab: "Previous lab",
        nextLab: "Next lab",
      },
    },

    de: {
      // Header
      siteTitle: "FoodProcessPortal",

      // Головна сторінка
      welcome: "Willkommen bei FoodProcessPortal",
      subtitle:
        "Virtuelles Lehrbuch für Prozesse und Apparate der Lebensmittelproduktion",
      languagePrompt: "Sprache wählen",
      goTo: "Gehen zu",

      // Картки на головній
      sections: {
        home: { title: "Startseite", desc: "Startseite" },
        topics: {
          title: "Vorlesungsmaterialien",
          desc: "Vorlesungen, Themen und Lernpfade",
        },
        problems: { title: "Aufgabenbuch", desc: "Aufgaben & Lösungen" },
        practice: { title: "Praktikum", desc: "Laborarbeiten" },
        reference: { title: "Nachschlagewerk", desc: "Formeln & Tabellen" },
        courses: { title: "Kursarbeiten", desc: "Methodische Anleitungen" },
        videos: { title: "Videos", desc: "Videomaterialien" },
      },

      // Footer
      footer: {
        navigation: "Navigation",
        contacts: "Kontakte",
        copyright: "Alle Rechte vorbehalten",
        madeWith: "Gemacht mit",
        forStudents: "für Studenten",
        updated: "Aktualisiert",
        tagline: "Prozesse und Apparate der Lebensmittelproduktion",
        description:
          "Virtuelles Lehrbuch für Lebensmitteltechnologie-Studenten",
      },

      // Сторінка теми
      backToTopics: "Zurück zu Vorlesungsmaterialien",

      // Сторінки-заглушки
      comingSoon: "Demnächst",
      underConstruction: "Abschnitt im Aufbau",
      underConstructionTitle: "🚧 Dieser Abschnitt ist in Entwicklung",
      underConstructionText:
        "Wir arbeiten an der Füllung dieses Abschnitts. Nützliches Material wird hier bald erscheinen.",
      feature1: "Arbeiten an Inhalten",
      feature2: "Bereiten qualitativ hochwertige Materialien vor",
      feature3: "Bleiben Sie dran für Updates",
      backHome: "← Zurück zur Startseite",

      prevTopic: "Vorheriges Thema",
      nextTopic: "Nächstes Thema",

      tableOfContents: "Inhaltsverzeichnis",

      categories: {
        all: "Alle Themen",
        general: "Grundlagen",
        "heat-exchange": "Wärmeübertragung",
        "mass-transfer": "Stoffübertragung",
        hydromechanical: "Hydromechanische Prozesse",
        mechanical: "Mechanische Prozesse",
      },

      searchPlaceholder: "Themen suchen...",
      noResults: "Keine Ergebnisse gefunden",
      searchResults: "Gefundene Themen",
      searchHint: "Versuchen Sie, die Suche oder Kategorie zu ändern",

      reference: {
        hubSubtitle:
          "Interaktive Rechner, Formeln und Referenztabellen für Berechnungen in der Lebensmitteltechnologie",
        waterTitle: "Thermophysikalische Eigenschaften von Wasser",
        waterDesc:
          "Rechner für Dichte, Wärmekapazität, Wärmeleitfähigkeit, Viskosität und weitere Eigenschaften von Wasser, Eis und Dampf nach Temperatur und Druck.",
        waterEyebrow: "Thermodynamischer Rechner",
        backToReference: "← Zurück zum Nachschlagewerk",
        externalNote:
          "Eine eigenständige Version des Rechners ist auch verfügbar unter",
        openStandalone: "Eigenständigen Rechner öffnen:",
      },
      practice: {
        hubSubtitle:
          "Laborarbeiten zu Hydrostatik, Hydrodynamik, Wärmeübertragung, Stoffübertragung und mechanischen Prozessen der Lebensmittelproduktion",
        labsWord: "Laborarbeit",
        labWord: "Laborarbeit",
        goal: "Ziel",
        backToPractice: "← Zurück zum Praktikum",
        backToCategory: "← Zurück zur Kategorie",
        prevLab: "Vorherige Laborarbeit",
        nextLab: "Nächste Laborarbeit",
      },
    },
  },

  // Соціальні посилання
  social: {
    github: "#",
    telegram: "#",
  },
};

export type Locale = "uk" | "ru" | "en" | "de";
