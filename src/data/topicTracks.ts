import type { Locale } from "../config";

export type TopicTrackSlug =
  | "food-tech"
  | "food-engineering"
  | "chemical"
  | "biotech";

export type TopicTrackStatus = "active" | "planned";

interface LocalizedTrackText {
  shortTitle: string;
  title: string;
  description: string;
  badge: string;
  action: string;
}

export interface TopicTrack extends LocalizedTrackText {
  slug: TopicTrackSlug;
  status: TopicTrackStatus;
  sourceNote: string;
  href?: string;
}

const trackOrder: TopicTrackSlug[] = [
  "food-tech",
  "food-engineering",
  "chemical",
  "biotech",
];

const trackStatus: Record<TopicTrackSlug, TopicTrackStatus> = {
  "food-tech": "active",
  "food-engineering": "planned",
  chemical: "active",
  biotech: "active",
};

const trackHref: Partial<Record<TopicTrackSlug, string>> = {
  "food-tech": "/topics#topics-list",
  chemical: "/courses/chemical-process-engineering",
  biotech: "/courses/bioprocess-engineering",
};

const fallbackLocale: Locale = "uk";

const sourceNotes: Record<Locale, Record<TopicTrackSlug, string>> = {
  uk: {
    "food-tech": "Поточний курс порталу, вже наповнений лекціями та темами.",
    "food-engineering":
      "Для цього треку варто взяти розрахунковий підручник і посилити задачами.",
    chemical:
      "Пілотний розділ створено на базі конспекту лекцій і віртуального підручника, з рисунками, відео та тестами.",
    biotech:
      "Курс створено на базі підручника Зав'ялова, з тестами, рисунками та багатомовними версіями.",
  },
  en: {
    "food-tech": "The current portal course with existing topics and lectures.",
    "food-engineering":
      "This track should be based on the calculation-heavy textbook and stronger problem sets.",
    chemical:
      "The pilot chapter is based on the lecture notes and virtual textbook, with figures, video, and tests.",
    biotech:
      "The course is built from Zavialov's textbook, with tests, figures, and multilingual versions.",
  },
  de: {
    "food-tech":
      "Der aktuelle Portalkurs mit vorhandenen Themen und Vorlesungen.",
    "food-engineering":
      "Dieser Track sollte auf dem rechenorientierten Lehrbuch und erweiterten Aufgaben aufbauen.",
    chemical:
      "Das Pilotkapitel basiert auf Vorlesungsnotizen und virtuellem Lehrbuch, mit Abbildungen, Video und Tests.",
    biotech:
      "Der Kurs basiert auf dem Lehrbuch von Sawjalow, mit Tests, Abbildungen und mehrsprachigen Versionen.",
  },
  ru: {
    "food-tech": "Текущий курс портала с уже подготовленными темами и лекциями.",
    "food-engineering":
      "Для этого трека стоит взять расчётный учебник и усилить задачи.",
    chemical:
      "Пилотный раздел создан на основе конспекта лекций и виртуального учебника, с рисунками, видео и тестами.",
    biotech:
      "Курс создан на базе учебника Завьялова, с тестами, рисунками и многоязычными версиями.",
  },
};

const trackText: Record<Locale, Record<TopicTrackSlug, LocalizedTrackText>> = {
  uk: {
    "food-tech": {
      shortTitle: "ПАХВ для технологів",
      title: "Процеси і апарати харчових виробництв (для технологів)",
      description:
        "Базова траєкторія для студентів харчових технологій: процеси, апарати, приклади та технологічний контекст.",
      badge: "Відкрито",
      action: "Переглянути теми",
    },
    "food-engineering": {
      shortTitle: "ПАХВ для технарів",
      title: "Процеси і апарати харчових виробництв (для технарів)",
      description:
        "Більше розрахунків, конструкцій, режимів роботи апаратів, інженерної логіки та прикладних задач.",
      badge: "Готується",
      action: "Потрібне джерело",
    },
    chemical: {
      shortTitle: "Хімічні виробництва",
      title: "Процеси і апарати хімічних виробництв",
      description:
        "Та сама процесна база, але з акцентом на хімічні технології, реакційні системи та промислові апарати.",
      badge: "Відкрито",
      action: "Переглянути курс",
    },
    biotech: {
      shortTitle: "Біотехнологічні виробництва",
      title: "Процеси і апарати біотехнологічних виробництв",
      description:
        "Траєкторія для біотехнологів: культивування, ферментація, стерилізація, біореактори та downstream-процеси.",
      badge: "Відкрито",
      action: "Переглянути курс",
    },
  },
  en: {
    "food-tech": {
      shortTitle: "Food PA for technologists",
      title: "Processes and Apparatus of Food Production (for technologists)",
      description:
        "The base track for food technology students: processes, equipment, examples, and technological context.",
      badge: "Open",
      action: "View topics",
    },
    "food-engineering": {
      shortTitle: "Food PA for engineers",
      title: "Processes and Apparatus of Food Production (for engineers)",
      description:
        "More calculations, equipment design, operating regimes, engineering logic, and applied problems.",
      badge: "Preparing",
      action: "Source needed",
    },
    chemical: {
      shortTitle: "Chemical production",
      title: "Processes and Apparatus of Chemical Production",
      description:
        "The same process foundation with emphasis on chemical technology, reaction systems, and industrial equipment.",
      badge: "Open",
      action: "View course",
    },
    biotech: {
      shortTitle: "Biotechnology production",
      title: "Processes and Apparatus of Biotechnology Production",
      description:
        "A biotechnology track covering cultivation, fermentation, sterilization, bioreactors, and downstream processing.",
      badge: "Open",
      action: "View course",
    },
  },
  de: {
    "food-tech": {
      shortTitle: "PA Lebensmitteltechnologie",
      title:
        "Prozesse und Apparate der Lebensmittelproduktion (für Technologen)",
      description:
        "Der Basistrack für Lebensmitteltechnologie: Prozesse, Apparate, Beispiele und technologischer Kontext.",
      badge: "Offen",
      action: "Themen ansehen",
    },
    "food-engineering": {
      shortTitle: "PA Lebensmitteltechnik",
      title: "Prozesse und Apparate der Lebensmittelproduktion (für Techniker)",
      description:
        "Mehr Berechnungen, Apparatekonstruktion, Betriebsregime, Ingenieurdenken und angewandte Aufgaben.",
      badge: "In Vorbereitung",
      action: "Quelle benötigt",
    },
    chemical: {
      shortTitle: "Chemische Produktion",
      title: "Prozesse und Apparate der chemischen Produktion",
      description:
        "Dieselbe Prozessbasis mit Schwerpunkt auf chemischer Technologie, Reaktionssystemen und Industrieapparaten.",
      badge: "Offen",
      action: "Kurs ansehen",
    },
    biotech: {
      shortTitle: "Biotechnologische Produktion",
      title: "Prozesse und Apparate der biotechnologischen Produktion",
      description:
        "Ein Biotechnologie-Track zu Kultivierung, Fermentation, Sterilisation, Bioreaktoren und Downstream-Prozessen.",
      badge: "Offen",
      action: "Kurs ansehen",
    },
  },
  ru: {
    "food-tech": {
      shortTitle: "ПАХП для технологов",
      title: "Процессы и аппараты пищевых производств (для технологов)",
      description:
        "Базовая траектория для студентов пищевых технологий: процессы, аппараты, примеры и технологический контекст.",
      badge: "Открыто",
      action: "Смотреть темы",
    },
    "food-engineering": {
      shortTitle: "ПАХП для технарей",
      title: "Процессы и аппараты пищевых производств (для технарей)",
      description:
        "Больше расчётов, конструкций, режимов работы аппаратов, инженерной логики и прикладных задач.",
      badge: "Готовится",
      action: "Нужен источник",
    },
    chemical: {
      shortTitle: "Химические производства",
      title: "Процессы и аппараты химических производств",
      description:
        "Та же процессная база с акцентом на химические технологии, реакционные системы и промышленные аппараты.",
      badge: "Открыто",
      action: "Смотреть курс",
    },
    biotech: {
      shortTitle: "Биотехнологические производства",
      title: "Процессы и аппараты биотехнологических производств",
      description:
        "Траектория для биотехнологов: культивирование, ферментация, стерилизация, биореакторы и downstream-процессы.",
      badge: "Открыто",
      action: "Смотреть курс",
    },
  },
};

export const topicTrackHubText: Record<
  Locale,
  {
    title: string;
    description: string;
    currentTitle: string;
    currentDescription: string;
  }
> = {
  uk: {
    title: "Навчальні траєкторії",
    description:
      "Одна процесна основа може працювати для різних спеціальностей, але приклади, розрахунки й акценти мають бути різними.",
    currentTitle: "Поточна траєкторія",
    currentDescription:
      "Нижче залишено чинний курс для технологів харчових виробництв. Старі посилання на теми й лекції не змінюються.",
  },
  en: {
    title: "Learning Tracks",
    description:
      "One process foundation can serve different majors, but examples, calculations, and emphasis should differ.",
    currentTitle: "Current Track",
    currentDescription:
      "The current food technology track remains below. Existing topic and lecture links are unchanged.",
  },
  de: {
    title: "Lernpfade",
    description:
      "Eine Prozessbasis kann für verschiedene Fachrichtungen funktionieren, aber Beispiele, Berechnungen und Akzente müssen unterschiedlich sein.",
    currentTitle: "Aktueller Track",
    currentDescription:
      "Der aktuelle Track für Lebensmitteltechnologie bleibt unten. Bestehende Themen- und Vorlesungslinks ändern sich nicht.",
  },
  ru: {
    title: "Учебные траектории",
    description:
      "Одна процессная основа может работать для разных специальностей, но примеры, расчёты и акценты должны отличаться.",
    currentTitle: "Текущая траектория",
    currentDescription:
      "Ниже оставлен текущий курс для пищевых технологов. Старые ссылки на темы и лекции не меняются.",
  },
};

export function normalizeLocale(locale: string | undefined): Locale {
  if (locale === "uk" || locale === "en" || locale === "de" || locale === "ru") {
    return locale;
  }

  return fallbackLocale;
}

export function getTopicTracks(locale: string | undefined): TopicTrack[] {
  const normalizedLocale = normalizeLocale(locale);

  return trackOrder.map((slug) => ({
    slug,
    status: trackStatus[slug],
    sourceNote: sourceNotes[normalizedLocale][slug],
    href: trackHref[slug],
    ...trackText[normalizedLocale][slug],
  }));
}
