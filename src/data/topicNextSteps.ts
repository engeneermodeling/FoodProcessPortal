import type { Locale } from "../config";

export interface TopicNextStep {
  kind: "practice" | "problems" | "reference" | "course" | "videos";
  href: string;
  title: string;
  description: string;
}

const fallbackLocale: Locale = "uk";

export const topicNextStepsUi: Record<
  Locale,
  {
    title: string;
    description: string;
    action: string;
    empty: string;
  }
> = {
  uk: {
    title: "Що опрацювати далі",
    description:
      "Після лекцій і міні-тесту переходьте до практичних матеріалів: задач, лабораторних робіт, довідкових таблиць або прикладів проєктування.",
    action: "Перейти",
    empty: "Для цієї теми рекомендації ще уточнюються.",
  },
  en: {
    title: "What To Study Next",
    description:
      "After lectures and the mini-test, continue with applied materials: problems, labs, reference data, or design examples.",
    action: "Open",
    empty: "Recommendations for this topic are still being refined.",
  },
  de: {
    title: "Was Als Nächstes Bearbeiten",
    description:
      "Nach Vorlesungen und Mini-Test geht es weiter mit Aufgaben, Laborarbeiten, Referenzdaten oder Konstruktionsbeispielen.",
    action: "Öffnen",
    empty: "Empfehlungen für dieses Thema werden noch ergänzt.",
  },
  ru: {
    title: "Что Изучить Дальше",
    description:
      "После лекций и мини-теста переходите к прикладным материалам: задачам, лабораторным работам, справочным данным или примерам проектирования.",
    action: "Перейти",
    empty: "Рекомендации для этой темы ещё уточняются.",
  },
};

const labels = {
  practice: {
    uk: "Практикум",
    en: "Practice",
    de: "Praktikum",
    ru: "Практикум",
  },
  problems: {
    uk: "Задачник",
    en: "Problems",
    de: "Aufgaben",
    ru: "Задачник",
  },
  reference: {
    uk: "Довідник",
    en: "Reference",
    de: "Nachschlagewerk",
    ru: "Справочник",
  },
  course: {
    uk: "Курсові",
    en: "Course Projects",
    de: "Kursprojekte",
    ru: "Курсовые",
  },
  videos: {
    uk: "Відео",
    en: "Videos",
    de: "Videos",
    ru: "Видео",
  },
};

const descriptions = {
  hydromechanicalPractice: {
    uk: "Лабораторні роботи з гідростатики, гідродинаміки, відстоювання, фільтрування та перемішування.",
    en: "Labs on hydrostatics, hydrodynamics, settling, filtration, and mixing.",
    de: "Laborarbeiten zu Hydrostatik, Hydrodynamik, Sedimentation, Filtration und Mischen.",
    ru: "Лабораторные работы по гидростатике, гидродинамике, отстаиванию, фильтрованию и перемешиванию.",
  },
  heatPractice: {
    uk: "Лабораторні роботи з теплообміну, теплообмінників, випарювання, охолодження та конденсації.",
    en: "Labs on heat transfer, heat exchangers, evaporation, cooling, and condensation.",
    de: "Laborarbeiten zu Wärmeübertragung, Wärmeübertragern, Eindampfung, Kühlung und Kondensation.",
    ru: "Лабораторные работы по теплообмену, теплообменникам, выпариванию, охлаждению и конденсации.",
  },
  massPractice: {
    uk: "Практичні роботи із сушіння, екстрагування, ректифікації, абсорбції та інших масообмінних процесів.",
    en: "Practice work on drying, extraction, rectification, absorption, and other mass-transfer processes.",
    de: "Praktische Arbeiten zu Trocknung, Extraktion, Rektifikation, Absorption und weiteren Stoffübergangsprozessen.",
    ru: "Практические работы по сушке, экстрагированию, ректификации, абсорбции и другим массообменным процессам.",
  },
  mechanicalPractice: {
    uk: "Лабораторні роботи з подрібнення, сортування, пресування та механічного оброблення сировини.",
    en: "Labs on size reduction, classification, pressing, and mechanical treatment of raw materials.",
    de: "Laborarbeiten zu Zerkleinerung, Klassierung, Pressen und mechanischer Rohstoffbehandlung.",
    ru: "Лабораторные работы по измельчению, сортированию, прессованию и механической обработке сырья.",
  },
  problems: {
    uk: "Розрахункові приклади та контрольні задачі для закріплення інженерних методик.",
    en: "Calculation examples and control problems for consolidating engineering methods.",
    de: "Rechenbeispiele und Kontrollaufgaben zur Festigung technischer Methoden.",
    ru: "Расчётные примеры и контрольные задачи для закрепления инженерных методик.",
  },
  reference: {
    uk: "Довідкові властивості рідин, води, пари та харчових продуктів для розрахунків.",
    en: "Reference properties of fluids, water, steam, and food products for calculations.",
    de: "Referenzwerte für Flüssigkeiten, Wasser, Dampf und Lebensmittelprodukte.",
    ru: "Справочные свойства жидкостей, воды, пара и пищевых продуктов для расчётов.",
  },
  courseProject: {
    uk: "Приклади курсового проєктування апаратів і технологічних ліній.",
    en: "Examples of equipment and process-line course design.",
    de: "Beispiele zur Kursprojektierung von Apparaten und Prozesslinien.",
    ru: "Примеры курсового проектирования аппаратов и технологических линий.",
  },
  videos: {
    uk: "Відеоматеріали для швидкого повторення ключових процесів і конструкцій апаратів.",
    en: "Video materials for quick review of key processes and equipment designs.",
    de: "Videomaterial zur schnellen Wiederholung wichtiger Prozesse und Apparatekonstruktionen.",
    ru: "Видеоматериалы для быстрого повторения ключевых процессов и конструкций аппаратов.",
  },
};

const ukProblemLinks: Record<string, string> = {
  hydraulics: "/uk/problems/chapter-01-hydraulics-basics",
  separation: "/uk/problems/chapter-03-gravity-settling",
  mixing: "/uk/problems/chapter-07-mixing",
  "heat-exchange": "/uk/problems/chapter-08-heat-transfer",
};

function localize<T extends Record<Locale, string>>(items: T, locale: Locale) {
  return items[locale] || items[fallbackLocale];
}

function path(locale: Locale, route: string) {
  return `/${locale}${route}`;
}

function problemHref(topic: string, locale: Locale) {
  if (locale === "uk" && ukProblemLinks[topic]) return ukProblemLinks[topic];
  return path(locale, "/problems");
}

function courseHref(locale: Locale, course: "mixers" | "course-project") {
  if (locale === "uk") return path(locale, `/courses/${course}`);
  return path(locale, "/courses");
}

export function getTopicNextSteps(topic: string | undefined, locale: Locale): TopicNextStep[] {
  if (!topic) return [];

  const steps: Record<string, TopicNextStep[]> = {
    "general-principles": [
      {
        kind: "reference",
        href: path(locale, "/reference/food-props"),
        title: localize(labels.reference, locale),
        description: localize(descriptions.reference, locale),
      },
      {
        kind: "problems",
        href: problemHref("hydraulics", locale),
        title: localize(labels.problems, locale),
        description: localize(descriptions.problems, locale),
      },
      {
        kind: "videos",
        href: path(locale, "/videos"),
        title: localize(labels.videos, locale),
        description: localize(descriptions.videos, locale),
      },
    ],
    hydraulics: [
      {
        kind: "practice",
        href: path(locale, "/practice/hydromechanical"),
        title: localize(labels.practice, locale),
        description: localize(descriptions.hydromechanicalPractice, locale),
      },
      {
        kind: "problems",
        href: problemHref(topic, locale),
        title: localize(labels.problems, locale),
        description: localize(descriptions.problems, locale),
      },
      {
        kind: "reference",
        href: path(locale, "/reference/fluids"),
        title: localize(labels.reference, locale),
        description: localize(descriptions.reference, locale),
      },
    ],
    separation: [
      {
        kind: "practice",
        href: path(locale, "/practice/hydromechanical"),
        title: localize(labels.practice, locale),
        description: localize(descriptions.hydromechanicalPractice, locale),
      },
      {
        kind: "problems",
        href: problemHref(topic, locale),
        title: localize(labels.problems, locale),
        description: localize(descriptions.problems, locale),
      },
      {
        kind: "videos",
        href: path(locale, "/videos"),
        title: localize(labels.videos, locale),
        description: localize(descriptions.videos, locale),
      },
    ],
    mixing: [
      {
        kind: "practice",
        href: path(locale, "/practice/hydromechanical"),
        title: localize(labels.practice, locale),
        description: localize(descriptions.hydromechanicalPractice, locale),
      },
      {
        kind: "course",
        href: courseHref(locale, "mixers"),
        title: localize(labels.course, locale),
        description: localize(descriptions.courseProject, locale),
      },
      {
        kind: "problems",
        href: problemHref(topic, locale),
        title: localize(labels.problems, locale),
        description: localize(descriptions.problems, locale),
      },
    ],
    "heat-exchange": [
      {
        kind: "practice",
        href: path(locale, "/practice/heat-exchange"),
        title: localize(labels.practice, locale),
        description: localize(descriptions.heatPractice, locale),
      },
      {
        kind: "problems",
        href: problemHref(topic, locale),
        title: localize(labels.problems, locale),
        description: localize(descriptions.problems, locale),
      },
      {
        kind: "reference",
        href: path(locale, "/reference/water"),
        title: localize(labels.reference, locale),
        description: localize(descriptions.reference, locale),
      },
    ],
    "mass-transfer": [
      {
        kind: "practice",
        href: path(locale, "/practice/mass-transfer"),
        title: localize(labels.practice, locale),
        description: localize(descriptions.massPractice, locale),
      },
      {
        kind: "problems",
        href: path(locale, "/problems"),
        title: localize(labels.problems, locale),
        description: localize(descriptions.problems, locale),
      },
      {
        kind: "videos",
        href: path(locale, "/videos"),
        title: localize(labels.videos, locale),
        description: localize(descriptions.videos, locale),
      },
    ],
    mechanical: [
      {
        kind: "practice",
        href: locale === "uk" ? "/uk/practice/mechanical" : path(locale, "/practice"),
        title: localize(labels.practice, locale),
        description: localize(descriptions.mechanicalPractice, locale),
      },
      {
        kind: "reference",
        href: path(locale, "/reference/food-props"),
        title: localize(labels.reference, locale),
        description: localize(descriptions.reference, locale),
      },
      {
        kind: "videos",
        href: path(locale, "/videos"),
        title: localize(labels.videos, locale),
        description: localize(descriptions.videos, locale),
      },
    ],
    "automation-control": [
      {
        kind: "reference",
        href: path(locale, "/reference"),
        title: localize(labels.reference, locale),
        description: localize(descriptions.reference, locale),
      },
      {
        kind: "practice",
        href: path(locale, "/practice"),
        title: localize(labels.practice, locale),
        description: localize(descriptions.hydromechanicalPractice, locale),
      },
      {
        kind: "videos",
        href: path(locale, "/videos"),
        title: localize(labels.videos, locale),
        description: localize(descriptions.videos, locale),
      },
    ],
    "process-design": [
      {
        kind: "course",
        href: courseHref(locale, "course-project"),
        title: localize(labels.course, locale),
        description: localize(descriptions.courseProject, locale),
      },
      {
        kind: "practice",
        href: path(locale, "/practice"),
        title: localize(labels.practice, locale),
        description: localize(descriptions.hydromechanicalPractice, locale),
      },
      {
        kind: "reference",
        href: path(locale, "/reference/food-props"),
        title: localize(labels.reference, locale),
        description: localize(descriptions.reference, locale),
      },
    ],
  };

  return steps[topic] || [];
}
