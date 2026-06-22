export const siteConfig = {
  // Основна інформація
  version: "1.0.0",
  releaseDate: "2026-06-20",
  platform: "Astro 6.4",
  email: "feedback@foodprocessportal.com",
  name: "FoodProcessPortal",
  title: "FoodProcessPortal",

  // Переклади для всіх частин сайту
  translations: {
    uk: {
      // Header
      siteTitle: "FoodProcessPortal",

      // Головна сторінка
      welcome: "Ласкаво просимо до FoodProcessPortal",
      subtitle:
        "Віртуальний підручник з процесів і апаратів харчових виробництв",
      goTo: "Перейти",

      // Картки на головній
      sections: {
        home: { title: "Головна", desc: "Головна сторінка" },
        topics: { title: "Теми", desc: "Теоретичний матеріал" },
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
      backToTopics: "Назад до тем",

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
        "heat-exchange": "Теплообмін",
        "mass-transfer": "Масообмін",
        hydromechanical: "Гідромеханічні процеси",
        mechanical: "Механічні процеси",
      },

      // В uk:
      searchPlaceholder: "Пошук тем...",
      noResults: "Нічого не знайдено",
      searchResults: "Знайдено тем",
    },

    ru: {
      // Header
      siteTitle: "FoodProcessPortal",

      // Головна сторінка
      welcome: "Добро пожаловать в FoodProcessPortal",
      subtitle:
        "Виртуальный учебник по процессам и аппаратам пищевых производств",
      goTo: "Перейти",

      // Картки на головній
      sections: {
        home: { title: "Главная", desc: "Главная страница" },
        topics: { title: "Темы", desc: "Теоретический материал" },
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
      backToTopics: "Назад к темам",

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
    },

    en: {
      // Header
      siteTitle: "FoodProcessPortal",

      // Головна сторінка
      welcome: "Welcome to FoodProcessPortal",
      subtitle:
        "Virtual textbook on processes and apparatus of food production",
      goTo: "Go to",

      // Картки на головній
      sections: {
        home: { title: "Home", desc: "Home page" },
        topics: { title: "Topics", desc: "Theoretical material" },
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
      backToTopics: "Back to topics",

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
        "heat-exchange": "Heat exchange",
        "mass-transfer": "Mass transfer",
        hydromechanical: "Hydromechanical processes",
        mechanical: "Mechanical processes",
      },

      searchPlaceholder: "Search topics...",
      noResults: "No results found",
      searchResults: "Topics found",
    },

    de: {
      // Header
      siteTitle: "FoodProcessPortal",

      // Головна сторінка
      welcome: "Willkommen bei FoodProcessPortal",
      subtitle:
        "Virtuelles Lehrbuch für Prozesse und Apparate der Lebensmittelproduktion",
      goTo: "Gehen zu",

      // Картки на головній
      sections: {
        home: { title: "Startseite", desc: "Startseite" },
        topics: { title: "Themen", desc: "Theoretisches Material" },
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
      backToTopics: "Zurück zu Themen",

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
        "heat-exchange": "Wärmeübertragung",
        "mass-transfer": "Stoffübertragung",
        hydromechanical: "Hydromechanische Prozesse",
        mechanical: "Mechanische Prozesse",
      },

      searchPlaceholder: "Themen suchen...",
      noResults: "Keine Ergebnisse gefunden",
      searchResults: "Gefundene Themen",
    },
  },

  // Соціальні посилання
  social: {
    github: "#",
    telegram: "#",
  },
};

export type Locale = "uk" | "ru" | "en" | "de";
