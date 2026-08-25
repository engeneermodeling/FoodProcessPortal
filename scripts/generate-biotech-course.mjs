import { access, mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const courseSlug = "bioprocess-engineering";
const updated = "2026-08-23";

const courseTitles = {
  uk: "Інжиніринг біопроцесів: процеси та апарати біотехнологічних виробництв",
  en: "Bioprocess Engineering: Processes and Equipment of Biotechnological Production",
  de: "Bioverfahrenstechnik: Prozesse und Apparate biotechnologischer Produktionen",
  ru: "Инжиниринг биопроцессов: процессы и аппараты биотехнологических производств",
};

const sourceLabels = {
  uk: "Основа матеріалу: підручник «Інжиніринг біопроцесів. Модуль 1. Процеси та апарати біотехнологічних виробництв» за редакцією В.Л. Зав’ялова, НУХТ, 2024.",
  en: "Material basis: the textbook \"Bioprocess Engineering. Module 1. Processes and Equipment of Biotechnological Production\", edited by V.L. Zavialov, NUFT, 2024.",
  de: "Materialgrundlage: das Lehrbuch \"Bioverfahrenstechnik. Modul 1. Prozesse und Apparate biotechnologischer Produktionen\", herausgegeben von V.L. Zavialov, NUFT, 2024.",
  ru: "Основа материала: учебник «Инжиниринг биопроцессов. Модуль 1. Процессы и аппараты биотехнологических производств» под редакцией В.Л. Завьялова, НУХТ, 2024.",
};

const ui = {
  uk: {
    source: "Джерело і межі розділу",
    outline: "Структура матеріалу за підручником",
    figures: "Наочні матеріали",
    learning: "Після опрацювання розділу студент має вміти",
    test: "Тест для самоперевірки",
    answers: "Відповіді",
    check: "Перевірити",
    reset: "Скинути",
    best: "Найкращий результат",
    result: "Результат",
    chooseAnswer: "Оберіть відповідь.",
    correctFeedback: "Правильно.",
    incorrectFeedback: "Потрібно повторити.",
    next: "Подальше опрацювання",
    basedOn: "Матеріал сторінки збережено за логікою відповідного розділу підручника; формулювання тестів додано як навчальний інструмент для перевірки засвоєння.",
    nextText: "На наступному проході цей розділ можна деталізувати формулами, прикладами розрахунку, рисунками апаратів і посиланнями на сучасні біотехнологічні виробництва.",
    qPrefix: "Питання",
    correct: "Правильна відповідь",
  },
  en: {
    source: "Source and Scope",
    outline: "Textbook-Based Structure",
    figures: "Visual Materials",
    learning: "After studying this chapter, students should be able to",
    test: "Self-Check Test",
    answers: "Answers",
    check: "Check",
    reset: "Reset",
    best: "Best score",
    result: "Result",
    chooseAnswer: "Choose an answer.",
    correctFeedback: "Correct.",
    incorrectFeedback: "Review needed.",
    next: "Further Development",
    basedOn: "The page follows the logic of the corresponding textbook chapter; the test items are added as a learning tool for checking comprehension.",
    nextText: "In the next pass, this chapter can be expanded with formulas, calculation examples, equipment figures and links to current biotechnological production cases.",
    qPrefix: "Question",
    correct: "Correct answer",
  },
  de: {
    source: "Quelle und Umfang",
    outline: "Struktur nach dem Lehrbuch",
    figures: "Anschauliche Materialien",
    learning: "Nach dem Durcharbeiten dieses Kapitels sollen Studierende",
    test: "Selbsttest",
    answers: "Antworten",
    check: "Pruefen",
    reset: "Zuruecksetzen",
    best: "Bestes Ergebnis",
    result: "Ergebnis",
    chooseAnswer: "Antwort auswaehlen.",
    correctFeedback: "Richtig.",
    incorrectFeedback: "Wiederholen.",
    next: "Weitere Ausarbeitung",
    basedOn: "Die Seite folgt der Logik des entsprechenden Lehrbuchkapitels; die Testfragen wurden als Lernwerkzeug zur Selbstkontrolle ergänzt.",
    nextText: "Im nächsten Durchgang kann dieses Kapitel mit Formeln, Rechenbeispielen, Apparatebildern und Links zu aktuellen biotechnologischen Produktionen ergänzt werden.",
    qPrefix: "Frage",
    correct: "Richtige Antwort",
  },
  ru: {
    source: "Источник и границы раздела",
    outline: "Структура материала по учебнику",
    figures: "Наглядные материалы",
    learning: "После изучения раздела студент должен уметь",
    test: "Тест для самопроверки",
    answers: "Ответы",
    check: "Проверить",
    reset: "Сбросить",
    best: "Лучший результат",
    result: "Результат",
    chooseAnswer: "Выберите ответ.",
    correctFeedback: "Правильно.",
    incorrectFeedback: "Нужно повторить.",
    next: "Дальнейшая проработка",
    basedOn: "Материал страницы сохранен по логике соответствующего раздела учебника; тестовые вопросы добавлены как учебный инструмент для проверки усвоения.",
    nextText: "На следующем проходе этот раздел можно детализировать формулами, примерами расчетов, рисунками аппаратов и ссылками на современные биотехнологические производства.",
    qPrefix: "Вопрос",
    correct: "Правильный ответ",
  },
};

const chapters = [
  {
    chapter: 1,
    slug: "chapter-01-general-information",
    titles: {
      uk: "Розділ 1. Загальні відомості",
      en: "Chapter 1. General Information",
      de: "Kapitel 1. Allgemeine Angaben",
      ru: "Раздел 1. Общие сведения",
    },
    descriptions: {
      uk: "Основні закони технологічних процесів, метод подібності та фізичні властивості речовин.",
      en: "Basic laws of technological processes, similarity method and physical properties of substances.",
      de: "Grundgesetze technologischer Prozesse, Aehnlichkeitsmethode und physikalische Stoffeigenschaften.",
      ru: "Основные законы технологических процессов, метод подобия и физические свойства веществ.",
    },
    sections: {
      uk: ["1.1. Основні закони технологічних процесів", "1.2. Метод подібності та його роль у вивченні процесів і апаратів біотехнологічних виробництв", "1.3. Основні фізичні властивості речовин", "1.4. Основні фізико-технічні властивості речовин"],
      en: ["1.1. Basic laws of technological processes", "1.2. Similarity method and its role in studying processes and equipment of biotechnological production", "1.3. Basic physical properties of substances", "1.4. Basic physical and technical properties of substances"],
      de: ["1.1. Grundgesetze technologischer Prozesse", "1.2. Aehnlichkeitsmethode und ihre Rolle beim Studium von Prozessen und Apparaten biotechnologischer Produktionen", "1.3. Grundlegende physikalische Stoffeigenschaften", "1.4. Grundlegende physikalisch-technische Stoffeigenschaften"],
      ru: ["1.1. Основные законы технологических процессов", "1.2. Метод подобия и его роль в изучении процессов и аппаратов биотехнологических производств", "1.3. Основные физические свойства веществ", "1.4. Основные физико-технические свойства веществ"],
    },
    concepts: {
      uk: ["матеріальний баланс", "енергетичний баланс", "критерії подібності", "фізичні властивості"],
      en: ["material balance", "energy balance", "similarity criteria", "physical properties"],
      de: ["Stoffbilanz", "Energiebilanz", "Aehnlichkeitskriterien", "physikalische Eigenschaften"],
      ru: ["материальный баланс", "энергетический баланс", "критерии подобия", "физические свойства"],
    },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-01/fig-1-1.webp",
        alt: { uk: "Схема матеріального балансу", en: "Material balance scheme", de: "Schema der Stoffbilanz", ru: "Схема материального баланса" },
        caption: { uk: "Рис. 1.1. Схема матеріального балансу", en: "Fig. 1.1. Material balance scheme", de: "Abb. 1.1. Schema der Stoffbilanz", ru: "Рис. 1.1. Схема материального баланса" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-01/fig-1-2.webp",
        alt: { uk: "Схема теплового балансу", en: "Heat balance scheme", de: "Schema der Waermebilanz", ru: "Схема теплового баланса" },
        caption: { uk: "Рис. 1.2. Схема теплового балансу", en: "Fig. 1.2. Heat balance scheme", de: "Abb. 1.2. Schema der Waermebilanz", ru: "Рис. 1.2. Схема теплового баланса" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-01/fig-1-3.webp",
        alt: { uk: "Діаграма Сенкі", en: "Sankey diagram", de: "Sankey-Diagramm", ru: "Диаграмма Сенки" },
        caption: { uk: "Рис. 1.3. Діаграма Сенкі", en: "Fig. 1.3. Sankey diagram", de: "Abb. 1.3. Sankey-Diagramm", ru: "Рис. 1.3. Диаграмма Сенки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-01/fig-1-4.webp",
        alt: { uk: "Протитечійний, паралельний і перехресний рух середовищ", en: "Countercurrent, parallel and cross flow of media", de: "Gegenstrom, Gleichstrom und Kreuzstrom der Medien", ru: "Противоточное, параллельное и перекрестное движение сред" },
        caption: { uk: "Рис. 1.4. Протитечійний (1), паралельний (2) і перехресний (3) рух середовищ", en: "Fig. 1.4. Countercurrent (1), parallel (2) and cross-flow (3) movement of media", de: "Abb. 1.4. Gegenstrom (1), Gleichstrom (2) und Kreuzstrom (3) der Medien", ru: "Рис. 1.4. Противоточное (1), параллельное (2) и перекрестное (3) движение сред" },
      },
    ],
  },
  {
    chapter: 2,
    slug: "chapter-02-hydraulics-basics",
    titles: { uk: "Розділ 2. Основи гідравліки", en: "Chapter 2. Fundamentals of Hydraulics", de: "Kapitel 2. Grundlagen der Hydraulik", ru: "Раздел 2. Основы гидравлики" },
    descriptions: { uk: "Гідростатика, гідродинаміка, рівняння Бернуллі, режими руху рідини, насоси і газодувні машини.", en: "Hydrostatics, hydrodynamics, Bernoulli equation, flow regimes, pumps and gas blowers.", de: "Hydrostatik, Hydrodynamik, Bernoulli-Gleichung, Stroemungsregime, Pumpen und Gasfoerdermaschinen.", ru: "Гидростатика, гидродинамика, уравнение Бернулли, режимы движения жидкости, насосы и газодувные машины." },
    sections: { uk: ["2.1. Гідростатика", "2.2. Гідродинаміка", "2.3. Насоси і газодувні машини"], en: ["2.1. Hydrostatics", "2.2. Hydrodynamics", "2.3. Pumps and gas blowers"], de: ["2.1. Hydrostatik", "2.2. Hydrodynamik", "2.3. Pumpen und Gasfoerdermaschinen"], ru: ["2.1. Гидростатика", "2.2. Гидродинамика", "2.3. Насосы и газодувные машины"] },
    concepts: { uk: ["гідростатичний тиск", "рівняння Бернуллі", "число Рейнольдса", "насос"], en: ["hydrostatic pressure", "Bernoulli equation", "Reynolds number", "pump"], de: ["hydrostatischer Druck", "Bernoulli-Gleichung", "Reynolds-Zahl", "Pumpe"], ru: ["гидростатическое давление", "уравнение Бернулли", "число Рейнольдса", "насос"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-02/fig-2-1.webp",
        alt: { uk: "Елемент рідини для виведення рівнянь рівноваги Ейлера", en: "Fluid element for deriving Euler equilibrium equations", de: "Fluessigkeitselement zur Herleitung der Euler-Gleichgewichte", ru: "Элемент жидкости для вывода уравнений равновесия Эйлера" },
        caption: { uk: "Рис. 2.1. До виведення диференціальних рівнянь рівноваги Ейлера", en: "Fig. 2.1. Derivation of Euler differential equilibrium equations", de: "Abb. 2.1. Herleitung der differentiellen Gleichgewichtsgleichungen nach Euler", ru: "Рис. 2.1. К выводу дифференциальных уравнений равновесия Эйлера" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-02/fig-2-2.webp",
        alt: { uk: "Об'єм рідини в координатній системі", en: "Liquid volume in a coordinate system", de: "Fluessigkeitsvolumen im Koordinatensystem", ru: "Объем жидкости в системе координат" },
        caption: { uk: "Рис. 2.2. До вивчення основного рівняння гідростатики", en: "Fig. 2.2. Study of the basic hydrostatics equation", de: "Abb. 2.2. Zur Grundgleichung der Hydrostatik", ru: "Рис. 2.2. К изучению основного уравнения гидростатики" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-02/fig-2-3.webp",
        alt: { uk: "Схема до виведення закону Паскаля", en: "Scheme for deriving Pascal's law", de: "Schema zur Herleitung des Pascal-Gesetzes", ru: "Схема к выводу закона Паскаля" },
        caption: { uk: "Рис. 2.3. До виведення закону Паскаля", en: "Fig. 2.3. Derivation of Pascal's law", de: "Abb. 2.3. Herleitung des Pascal-Gesetzes", ru: "Рис. 2.3. К выводу закона Паскаля" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-02/fig-2-4.webp",
        alt: { uk: "Рідинний манометр", en: "Liquid manometer", de: "Fluessigkeitsmanometer", ru: "Жидкостный манометр" },
        caption: { uk: "Рис. 2.4. Рідинний манометр", en: "Fig. 2.4. Liquid manometer", de: "Abb. 2.4. Fluessigkeitsmanometer", ru: "Рис. 2.4. Жидкостный манометр" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-02/fig-2-5.webp",
        alt: { uk: "Схема до виведення рівняння Бернуллі", en: "Scheme for deriving the Bernoulli equation", de: "Schema zur Herleitung der Bernoulli-Gleichung", ru: "Схема к выводу уравнения Бернулли" },
        caption: { uk: "Рис. 2.5. До виведення рівняння Бернуллі", en: "Fig. 2.5. Derivation of the Bernoulli equation", de: "Abb. 2.5. Herleitung der Bernoulli-Gleichung", ru: "Рис. 2.5. К выводу уравнения Бернулли" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-02/fig-2-7.webp",
        alt: { uk: "Схема установки Рейнольдса", en: "Reynolds experiment setup", de: "Versuchsaufbau nach Reynolds", ru: "Схема установки Рейнольдса" },
        caption: { uk: "Рис. 2.7. Схема установки Рейнольдса", en: "Fig. 2.7. Reynolds experiment setup", de: "Abb. 2.7. Versuchsaufbau nach Reynolds", ru: "Рис. 2.7. Схема установки Рейнольдса" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-02/fig-2-8.webp",
        alt: { uk: "Профіль швидкості для формул Стокса і Пуазейля", en: "Velocity profile for the Stokes and Poiseuille formulas", de: "Geschwindigkeitsprofil fuer Stokes- und Poiseuille-Formeln", ru: "Профиль скорости для формул Стокса и Пуазейля" },
        caption: { uk: "Рис. 2.8. До виведення формул Стокса і Пуазейля", en: "Fig. 2.8. Derivation of the Stokes and Poiseuille formulas", de: "Abb. 2.8. Herleitung der Stokes- und Poiseuille-Formeln", ru: "Рис. 2.8. К выводу формул Стокса и Пуазейля" },
      },
    ],
  },
  {
    chapter: 3,
    slug: "chapter-03-heterogeneous-systems-separation",
    titles: { uk: "Розділ 3. Розділення неоднорідних систем", en: "Chapter 3. Separation of Heterogeneous Systems", de: "Kapitel 3. Trennung heterogener Systeme", ru: "Раздел 3. Разделение неоднородных систем" },
    descriptions: { uk: "Класифікація неоднорідних систем, осідання, фільтрування та відцентрові методи розділення.", en: "Classification of heterogeneous systems, settling, filtration and centrifugal separation methods.", de: "Klassifikation heterogener Systeme, Sedimentation, Filtration und zentrifugale Trennmethoden.", ru: "Классификация неоднородных систем, осаждение, фильтрование и центробежные методы разделения." },
    sections: { uk: ["3.1. Класифікація і характеристика неоднорідних систем", "3.2. Методи розділення неоднорідних систем", "3.3. Осідання в гравітаційному полі", "3.4. Фільтрування", "3.5. Відцентрові методи розділення неоднорідних систем"], en: ["3.1. Classification and characteristics of heterogeneous systems", "3.2. Methods for separating heterogeneous systems", "3.3. Settling in a gravitational field", "3.4. Filtration", "3.5. Centrifugal methods for separating heterogeneous systems"], de: ["3.1. Klassifikation und Charakteristik heterogener Systeme", "3.2. Methoden zur Trennung heterogener Systeme", "3.3. Sedimentation im Schwerefeld", "3.4. Filtration", "3.5. Zentrifugale Methoden zur Trennung heterogener Systeme"], ru: ["3.1. Классификация и характеристика неоднородных систем", "3.2. Методы разделения неоднородных систем", "3.3. Осаждение в гравитационном поле", "3.4. Фильтрование", "3.5. Центробежные методы разделения неоднородных систем"] },
    concepts: { uk: ["суспензія", "осідання", "фільтрування", "центрифуга"], en: ["suspension", "settling", "filtration", "centrifuge"], de: ["Suspension", "Sedimentation", "Filtration", "Zentrifuge"], ru: ["суспензия", "осаждение", "фильтрование", "центрифуга"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-03/fig-3-1.webp",
        alt: { uk: "Сили, що діють на частинку під час осідання", en: "Forces acting on a particle during settling", de: "Kraefte auf ein Partikel waehrend der Sedimentation", ru: "Силы, действующие на частицу при осаждении" },
        caption: { uk: "Рис. 3.1. Сили, що діють на частинку під час осідання", en: "Fig. 3.1. Forces acting on a particle during settling", de: "Abb. 3.1. Kraefte auf ein Partikel waehrend der Sedimentation", ru: "Рис. 3.1. Силы, действующие на частицу при осаждении" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-03/fig-3-2.webp",
        alt: { uk: "Схема відстійника періодичної дії", en: "Batch settling tank scheme", de: "Schema eines periodisch arbeitenden Absetzbehaelters", ru: "Схема отстойника периодического действия" },
        caption: { uk: "Рис. 3.2. Схема відстійника періодичної дії", en: "Fig. 3.2. Batch settling tank scheme", de: "Abb. 3.2. Schema eines periodisch arbeitenden Absetzbehaelters", ru: "Рис. 3.2. Схема отстойника периодического действия" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-03/fig-3-7.webp",
        alt: { uk: "Схема фільтрувальної камери", en: "Filtration chamber scheme", de: "Schema einer Filtrationskammer", ru: "Схема фильтровальной камеры" },
        caption: { uk: "Рис. 3.7. Схема фільтрувальної камери", en: "Fig. 3.7. Filtration chamber scheme", de: "Abb. 3.7. Schema einer Filtrationskammer", ru: "Рис. 3.7. Схема фильтровальной камеры" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-03/fig-3-10.webp",
        alt: { uk: "Рамний фільтрпрес", en: "Plate-and-frame filter press", de: "Rahmenfilterpresse", ru: "Рамный фильтр-пресс" },
        caption: { uk: "Рис. 3.10. Рамний фільтрпрес", en: "Fig. 3.10. Plate-and-frame filter press", de: "Abb. 3.10. Rahmenfilterpresse", ru: "Рис. 3.10. Рамный фильтр-пресс" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-03/fig-3-13.webp",
        alt: { uk: "Схема барабанного вакуум-фільтра", en: "Rotary drum vacuum filter scheme", de: "Schema eines Trommelvakuumfilters", ru: "Схема барабанного вакуум-фильтра" },
        caption: { uk: "Рис. 3.13. Схема барабанного вакуум-фільтра", en: "Fig. 3.13. Rotary drum vacuum filter scheme", de: "Abb. 3.13. Schema eines Trommelvakuumfilters", ru: "Рис. 3.13. Схема барабанного вакуум-фильтра" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-03/fig-3-18.webp",
        alt: { uk: "Схема циклона і руху потоку в ньому", en: "Cyclone scheme and flow motion inside it", de: "Schema eines Zyklons und der Stroemung darin", ru: "Схема циклона и движения потока в нем" },
        caption: { uk: "Рис. 3.18. Схема циклона і руху потоку в ньому", en: "Fig. 3.18. Cyclone scheme and flow motion inside it", de: "Abb. 3.18. Schema eines Zyklons und der Stroemung darin", ru: "Рис. 3.18. Схема циклона и движения потока в нем" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-03/fig-3-19.webp",
        alt: { uk: "Схема відцентрового фільтрування", en: "Centrifugal filtration scheme", de: "Schema der Zentrifugalfiltration", ru: "Схема центробежного фильтрования" },
        caption: { uk: "Рис. 3.19. Відцентрове фільтрування", en: "Fig. 3.19. Centrifugal filtration", de: "Abb. 3.19. Zentrifugalfiltration", ru: "Рис. 3.19. Центробежное фильтрование" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-03/fig-3-26.webp",
        alt: { uk: "Схеми камерного і тарілчастого сепараторів", en: "Chamber and disc separator schemes", de: "Schemata eines Kammer- und Tellerseparators", ru: "Схемы камерного и тарельчатого сепараторов" },
        caption: { uk: "Рис. 3.26. Схеми сепараторів: камерного і тарілчастого", en: "Fig. 3.26. Separator schemes: chamber and disc types", de: "Abb. 3.26. Separatorbauarten: Kammer- und Tellertyp", ru: "Рис. 3.26. Схемы сепараторов: камерного и тарельчатого" },
      },
    ],
  },
  {
    chapter: 4,
    slug: "chapter-04-membrane-separation",
    titles: { uk: "Розділ 4. Мембранні процеси розділення", en: "Chapter 4. Membrane Separation Processes", de: "Kapitel 4. Membrantrennprozesse", ru: "Раздел 4. Мембранные процессы разделения" },
    descriptions: { uk: "Зворотний осмос, нано-, ультра- і мікрофільтрація, діафільтрація та мембранні апарати.", en: "Reverse osmosis, nano-, ultra- and microfiltration, diafiltration and membrane equipment.", de: "Umkehrosmose, Nano-, Ultra- und Mikrofiltration, Diafiltration und Membranapparate.", ru: "Обратный осмос, нано-, ультра- и микрофильтрация, диафильтрация и мембранные аппараты." },
    sections: { uk: ["4.1. Загальні положення", "4.2. Теоретичні основи баромембранних процесів", "4.3. Діафільтрація", "4.4. Мембранні апарати"], en: ["4.1. General provisions", "4.2. Theoretical basis of pressure-driven membrane processes", "4.3. Diafiltration", "4.4. Membrane equipment"], de: ["4.1. Allgemeine Grundlagen", "4.2. Theoretische Grundlagen druckgetriebener Membranprozesse", "4.3. Diafiltration", "4.4. Membranapparate"], ru: ["4.1. Общие положения", "4.2. Теоретические основы баромембранных процессов", "4.3. Диафильтрация", "4.4. Мембранные аппараты"] },
    concepts: { uk: ["мембрана", "зворотний осмос", "ультрафільтрація", "діафільтрація"], en: ["membrane", "reverse osmosis", "ultrafiltration", "diafiltration"], de: ["Membran", "Umkehrosmose", "Ultrafiltration", "Diafiltration"], ru: ["мембрана", "обратный осмос", "ультрафильтрация", "диафильтрация"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-04/fig-4-1.webp",
        alt: { uk: "Схеми осмотичного і зворотноосмотичного процесів", en: "Osmosis and reverse osmosis process schemes", de: "Schemata von Osmose und Umkehrosmose", ru: "Схемы осмотического и обратноосмотического процессов" },
        caption: { uk: "Рис. 4.1. Схеми осмотичного і зворотноосмотичного процесів", en: "Fig. 4.1. Osmosis and reverse osmosis process schemes", de: "Abb. 4.1. Schemata von Osmose und Umkehrosmose", ru: "Рис. 4.1. Схемы осмотического и обратноосмотического процессов" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-04/fig-4-2.webp",
        alt: { uk: "Принципові схеми діафільтрації", en: "Principle schemes of diafiltration", de: "Prinzipschemata der Diafiltration", ru: "Принципиальные схемы диафильтрации" },
        caption: { uk: "Рис. 4.2. Принципові схеми діафільтрації: періодичної і безперервної", en: "Fig. 4.2. Principle schemes of batch and continuous diafiltration", de: "Abb. 4.2. Prinzipschemata der periodischen und kontinuierlichen Diafiltration", ru: "Рис. 4.2. Принципиальные схемы периодической и непрерывной диафильтрации" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-04/fig-4-3.webp",
        alt: { uk: "Мембранний апарат типу фільтрпрес", en: "Filter-press type membrane apparatus", de: "Membranapparat vom Typ Filterpresse", ru: "Мембранный аппарат типа фильтр-пресс" },
        caption: { uk: "Рис. 4.3. Схема мембранного апарата типу фільтрпрес", en: "Fig. 4.3. Filter-press type membrane apparatus scheme", de: "Abb. 4.3. Schema eines Membranapparats vom Typ Filterpresse", ru: "Рис. 4.3. Схема мембранного аппарата типа фильтр-пресс" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-04/fig-4-4.webp",
        alt: { uk: "Схеми трубчастих мембранних елементів", en: "Tubular membrane element schemes", de: "Schemata rohrfoermiger Membranelemente", ru: "Схемы трубчатых мембранных элементов" },
        caption: { uk: "Рис. 4.4. Схеми трубчастих мембранних елементів", en: "Fig. 4.4. Tubular membrane element schemes", de: "Abb. 4.4. Schemata rohrfoermiger Membranelemente", ru: "Рис. 4.4. Схемы трубчатых мембранных элементов" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-04/fig-4-6.webp",
        alt: { uk: "Модуль з мембранами у вигляді порожнистих волокон", en: "Module with hollow-fibre membranes", de: "Modul mit Hohlfasermembranen", ru: "Модуль с мембранами в виде полых волокон" },
        caption: { uk: "Рис. 4.6. Схема модуля з мембранами у вигляді порожнистих волокон", en: "Fig. 4.6. Module with hollow-fibre membranes", de: "Abb. 4.6. Schema eines Moduls mit Hohlfasermembranen", ru: "Рис. 4.6. Схема модуля с мембранами в виде полых волокон" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-04/fig-4-7.webp",
        alt: { uk: "Баромембранний апарат періодичної дії", en: "Batch pressure-driven membrane apparatus", de: "Periodisch arbeitender baromembraner Apparat", ru: "Баромембранный аппарат периодического действия" },
        caption: { uk: "Рис. 4.7. Баромембранний апарат періодичної дії", en: "Fig. 4.7. Batch pressure-driven membrane apparatus", de: "Abb. 4.7. Periodisch arbeitender baromembraner Apparat", ru: "Рис. 4.7. Баромембранный аппарат периодического действия" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-04/fig-4-8.webp",
        alt: { uk: "Баромембранні апарати безперервної дії з циркуляційними контурами", en: "Continuous pressure-driven membrane apparatuses with circulation loops", de: "Kontinuierliche baromembrane Apparate mit Zirkulationskreisen", ru: "Баромембранные аппараты непрерывного действия с циркуляционными контурами" },
        caption: { uk: "Рис. 4.8. Схеми баромембранних апаратів безперервної дії з циркуляційними контурами", en: "Fig. 4.8. Continuous pressure-driven membrane apparatuses with circulation loops", de: "Abb. 4.8. Kontinuierliche baromembrane Apparate mit Zirkulationskreisen", ru: "Рис. 4.8. Схемы баромембранных аппаратов непрерывного действия с циркуляционными контурами" },
      },
    ],
  },
  {
    chapter: 5,
    slug: "chapter-05-mixing",
    titles: { uk: "Розділ 5. Перемішування", en: "Chapter 5. Mixing", de: "Kapitel 5. Mischen", ru: "Раздел 5. Перемешивание" },
    descriptions: { uk: "Перемішування у рідкому середовищі, витрати енергії, ефективність та перемішування сипких і пластичних матеріалів.", en: "Mixing in liquids, power consumption, efficiency and mixing of bulk and plastic materials.", de: "Mischen in Fluessigkeiten, Energiebedarf, Wirksamkeit und Mischen von Schuettguetern und plastischen Stoffen.", ru: "Перемешивание в жидкой среде, расход энергии, эффективность и перемешивание сыпучих и пластичных материалов." },
    sections: { uk: ["5.1. Загальні відомості", "5.2. Перемішування у рідкому середовищі", "5.3. Витрати енергії на механічне перемішування", "5.4. Оцінювання ефективності перемішування", "5.5. Перемішування сипких і пластичних матеріалів"], en: ["5.1. General information", "5.2. Mixing in a liquid medium", "5.3. Energy consumption for mechanical mixing", "5.4. Evaluation of mixing efficiency", "5.5. Mixing of bulk and plastic materials"], de: ["5.1. Allgemeines", "5.2. Mischen in fluessigem Medium", "5.3. Energiebedarf fuer mechanisches Mischen", "5.4. Bewertung der Mischwirksamkeit", "5.5. Mischen von Schuettguetern und plastischen Stoffen"], ru: ["5.1. Общие сведения", "5.2. Перемешивание в жидкой среде", "5.3. Расход энергии на механическое перемешивание", "5.4. Оценка эффективности перемешивания", "5.5. Перемешивание сыпучих и пластичных материалов"] },
    concepts: { uk: ["мішалка", "циркуляція", "критерій потужності", "однорідність"], en: ["agitator", "circulation", "power number", "uniformity"], de: ["Ruehrer", "Zirkulation", "Leistungszahl", "Homogenitaet"], ru: ["мешалка", "циркуляция", "критерий мощности", "однородность"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-05/fig-5-2.webp",
        alt: { uk: "Механічне перемішування з обертовим робочим органом", en: "Mechanical mixing with a rotating working element", de: "Mechanisches Mischen mit rotierendem Arbeitsorgan", ru: "Механическое перемешивание с вращающимся рабочим органом" },
        caption: { uk: "Рис. 5.2. Приклад механічного перемішування з обертовим робочим органом", en: "Fig. 5.2. Example of mechanical mixing with a rotating working element", de: "Abb. 5.2. Beispiel fuer mechanisches Mischen mit rotierendem Arbeitsorgan", ru: "Рис. 5.2. Пример механического перемешивания с вращающимся рабочим органом" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-05/fig-5-3.webp",
        alt: { uk: "Потоки в апаратах з відбивними перегородками і мішалками", en: "Flow patterns in vessels with baffles and agitators", de: "Stroemungsbilder in Apparaten mit Stromstoerern und Ruehrern", ru: "Потоки в аппаратах с отражательными перегородками и мешалками" },
        caption: { uk: "Рис. 5.3. Схеми обертових мішалок з відбивними перегородками і структура потоків", en: "Fig. 5.3. Rotating agitators with baffles and the resulting flow patterns", de: "Abb. 5.3. Rotierende Ruehrer mit Stromstoerern und entstehende Stroemungsbilder", ru: "Рис. 5.3. Схемы вращающихся мешалок с отражательными перегородками и структура потоков" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-05/fig-5-5.webp",
        alt: { uk: "Залежність критерію потужності від критерію Рейнольдса для мішалок", en: "Power number as a function of Reynolds number for agitators", de: "Leistungszahl in Abhaengigkeit von der Reynolds-Zahl fuer Ruehrer", ru: "Зависимость критерия мощности от критерия Рейнольдса для мешалок" },
        caption: { uk: "Рис. 5.5. Залежність критерію потужності від Re для різних типів мішалок", en: "Fig. 5.5. Power number versus Re for different agitator types", de: "Abb. 5.5. Leistungszahl gegen Re fuer verschiedene Ruehrertypen", ru: "Рис. 5.5. Зависимость критерия мощности от Re для разных типов мешалок" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-05/fig-5-6.webp",
        alt: { uk: "Типи мішалок для експериментальних кривих потужності", en: "Agitator types corresponding to experimental power curves", de: "Ruehrertypen zu experimentellen Leistungskurven", ru: "Типы мешалок для экспериментальных кривых мощности" },
        caption: { uk: "Рис. 5.6. Типи мішалок, для яких наведено експериментальні криві Eu = f(Re)", en: "Fig. 5.6. Agitator types for which experimental Eu = f(Re) curves are given", de: "Abb. 5.6. Ruehrertypen fuer experimentelle Kurven Eu = f(Re)", ru: "Рис. 5.6. Типы мешалок, для которых приведены экспериментальные кривые Eu = f(Re)" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-05/fig-5-8.webp",
        alt: { uk: "Схеми лопатевих мішалок", en: "Blade agitator schemes", de: "Schemata von Blatt- und Rahmenruehrern", ru: "Схемы лопастных мешалок" },
        caption: { uk: "Рис. 5.8. Схеми лопатевих мішалок", en: "Fig. 5.8. Blade agitator schemes", de: "Abb. 5.8. Schemata von Blatt- und Rahmenruehrern", ru: "Рис. 5.8. Схемы лопастных мешалок" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-05/fig-5-9.webp",
        alt: { uk: "Лопатева мішалка з планетарним приводом", en: "Blade agitator with planetary drive", de: "Blattruehrer mit Planetenantrieb", ru: "Лопастная мешалка с планетарным приводом" },
        caption: { uk: "Рис. 5.9. Схема лопатевої мішалки з планетарним приводом", en: "Fig. 5.9. Blade agitator with a planetary drive", de: "Abb. 5.9. Schema eines Blattruehrers mit Planetenantrieb", ru: "Рис. 5.9. Схема лопастной мешалки с планетарным приводом" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-05/fig-5-10.webp",
        alt: { uk: "Трилопатевий гвинт пропелерної мішалки", en: "Three-blade propeller for an agitator", de: "Dreiblattpropeller eines Ruehrers", ru: "Трехлопастной винт пропеллерной мешалки" },
        caption: { uk: "Рис. 5.10. Трилопатевий гвинт пропелерної мішалки", en: "Fig. 5.10. Three-blade propeller agitator", de: "Abb. 5.10. Dreiblattpropeller eines Propellerruehrers", ru: "Рис. 5.10. Трехлопастной винт пропеллерной мешалки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-05/fig-5-11.webp",
        alt: { uk: "Турбінне колесо з напрямним пристроєм", en: "Turbine impeller with a guide device", de: "Turbinenlaufrad mit Leiteinrichtung", ru: "Турбинное колесо с направляющим устройством" },
        caption: { uk: "Рис. 5.11. Турбінне колесо з напрямним пристроєм", en: "Fig. 5.11. Turbine impeller with a guide device", de: "Abb. 5.11. Turbinenlaufrad mit Leiteinrichtung", ru: "Рис. 5.11. Турбинное колесо с направляющим устройством" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-05/fig-5-14.webp",
        alt: { uk: "Схеми барботажного змішувача та барботерів", en: "Sparged mixer and sparger schemes", de: "Schemata eines Begasungsmischers und von Begasern", ru: "Схемы барботажного смесителя и барботеров" },
        caption: { uk: "Рис. 5.14. Схеми барботажного змішувача та барботерів основних типів", en: "Fig. 5.14. Main types of sparged mixers and spargers", de: "Abb. 5.14. Haupttypen von Begasungsmischern und Begasern", ru: "Рис. 5.14. Схемы барботажного смесителя и барботеров основных типов" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-05/fig-5-15.webp",
        alt: { uk: "Апарати для пневматичного перемішування та аерації", en: "Equipment for pneumatic mixing and aeration", de: "Apparate fuer pneumatisches Mischen und Belueftung", ru: "Аппараты для пневматического перемешивания и аэрации" },
        caption: { uk: "Рис. 5.15. Схеми апаратів для пневматичного перемішування та аерації", en: "Fig. 5.15. Equipment schemes for pneumatic mixing and aeration", de: "Abb. 5.15. Apparateschemata fuer pneumatisches Mischen und Belueftung", ru: "Рис. 5.15. Схемы аппаратов для пневматического перемешивания и аэрации" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-05/fig-5-16.webp",
        alt: { uk: "Рух рідини, що виходить із зануреного сопла", en: "Liquid motion from a submerged nozzle", de: "Fluessigkeitsbewegung aus einer eingetauchten Duese", ru: "Движение жидкости, выходящей из погруженного сопла" },
        caption: { uk: "Рис. 5.16. Схема руху рідини, що виходить із зануреного сопла", en: "Fig. 5.16. Flow pattern of liquid leaving a submerged nozzle", de: "Abb. 5.16. Stroemungsbild einer aus einer eingetauchten Duese austretenden Fluessigkeit", ru: "Рис. 5.16. Схема движения жидкости, выходящей из погруженного сопла" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-05/fig-5-19.webp",
        alt: { uk: "Схема циркуляційного перемішування", en: "Circulation mixing scheme", de: "Schema des Zirkulationsmischens", ru: "Схема циркуляционного перемешивания" },
        caption: { uk: "Рис. 5.19. Схема циркуляційного перемішування", en: "Fig. 5.19. Circulation mixing scheme", de: "Abb. 5.19. Schema des Zirkulationsmischens", ru: "Рис. 5.19. Схема циркуляционного перемешивания" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-05/fig-5-22.webp",
        alt: { uk: "Перемішувальні пристрої для сипких і пластичних мас", en: "Mixing devices for bulk and plastic masses", de: "Mischvorrichtungen fuer Schuettgueter und plastische Massen", ru: "Перемешивающие устройства для сыпучих и пластичных масс" },
        caption: { uk: "Рис. 5.22. Перемішувальні пристрої для сипких і пластичних мас", en: "Fig. 5.22. Mixing devices for bulk and plastic masses", de: "Abb. 5.22. Mischvorrichtungen fuer Schuettgueter und plastische Massen", ru: "Рис. 5.22. Перемешивающие устройства для сыпучих и пластичных масс" },
      },
    ],
  },
  {
    chapter: 6,
    slug: "chapter-06-heat-transfer-basics",
    titles: { uk: "Розділ 6. Основи теплопередачі", en: "Chapter 6. Fundamentals of Heat Transfer", de: "Kapitel 6. Grundlagen der Waermeuebertragung", ru: "Раздел 6. Основы теплопередачи" },
    descriptions: { uk: "Критерії подібності теплових процесів, теплопровідність, конвективний і променистий теплообмін, теплопередача.", en: "Similarity criteria for thermal processes, conduction, convective and radiative heat exchange, heat transfer.", de: "Aehnlichkeitskriterien thermischer Prozesse, Waermeleitung, konvektiver und strahlender Waermeaustausch, Waermeuebertragung.", ru: "Критерии подобия тепловых процессов, теплопроводность, конвективный и лучистый теплообмен, теплопередача." },
    sections: { uk: ["6.1. Загальні відомості", "6.2. Основні критерії подібності теплових процесів", "6.3. Теплопровідність", "6.4. Конвективний теплообмін", "6.5. Тепловіддача за зміни агрегатного стану", "6.6. Променистий теплообмін", "6.7. Теплопередача"], en: ["6.1. General information", "6.2. Main similarity criteria of thermal processes", "6.3. Heat conduction", "6.4. Convective heat exchange", "6.5. Heat transfer during phase change", "6.6. Radiative heat exchange", "6.7. Overall heat transfer"], de: ["6.1. Allgemeines", "6.2. Wichtige Aehnlichkeitskriterien thermischer Prozesse", "6.3. Waermeleitung", "6.4. Konvektiver Waermeaustausch", "6.5. Waermeuebergang bei Phasenwechsel", "6.6. Strahlungswaermeaustausch", "6.7. Waermeuebertragung"], ru: ["6.1. Общие сведения", "6.2. Основные критерии подобия тепловых процессов", "6.3. Теплопроводность", "6.4. Конвективный теплообмен", "6.5. Теплоотдача при изменении агрегатного состояния", "6.6. Лучистый теплообмен", "6.7. Теплопередача"] },
    concepts: { uk: ["теплопровідність", "конвекція", "тепловіддача", "теплопередача"], en: ["thermal conductivity", "convection", "heat transfer coefficient", "overall heat transfer"], de: ["Waermeleitfaehigkeit", "Konvektion", "Waermeuebergang", "Waermeuebertragung"], ru: ["теплопроводность", "конвекция", "теплоотдача", "теплопередача"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-06/fig-6-1.webp",
        alt: { uk: "Теплопровідність плоскої стінки", en: "Heat conduction through a plane wall", de: "Waermeleitung durch eine ebene Wand", ru: "Теплопроводность плоской стенки" },
        caption: { uk: "Рис. 6.1. Схема теплопровідності плоскої стінки", en: "Fig. 6.1. Heat conduction through a plane wall", de: "Abb. 6.1. Schema der Waermeleitung durch eine ebene Wand", ru: "Рис. 6.1. Схема теплопроводности плоской стенки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-06/fig-6-2.webp",
        alt: { uk: "Теплопередача через плоску стінку", en: "Overall heat transfer through a plane wall", de: "Waermeuebertragung durch eine ebene Wand", ru: "Теплопередача через плоскую стенку" },
        caption: { uk: "Рис. 6.2. Схема теплопередачі через плоску стінку", en: "Fig. 6.2. Overall heat transfer through a plane wall", de: "Abb. 6.2. Schema der Waermeuebertragung durch eine ebene Wand", ru: "Рис. 6.2. Схема теплопередачи через плоскую стенку" },
      },
    ],
  },
  {
    chapter: 7,
    slug: "chapter-07-heating-cooling",
    titles: { uk: "Розділ 7. Нагрівання і охолодження", en: "Chapter 7. Heating and Cooling", de: "Kapitel 7. Erwaermen und Kuehlen", ru: "Раздел 7. Нагревание и охлаждение" },
    descriptions: { uk: "Класифікація, конструкції, тепловий, конструкційний і гідравлічний розрахунок теплообмінників.", en: "Classification, designs, thermal, structural and hydraulic calculation of heat exchangers.", de: "Klassifikation, Bauarten sowie thermische, konstruktive und hydraulische Berechnung von Waermeuebertragern.", ru: "Классификация, конструкции, тепловой, конструкционный и гидравлический расчет теплообменников." },
    sections: { uk: ["7.1. Загальні відомості", "7.2. Класифікація теплообмінників", "7.3. Конструкції теплообмінників", "7.4. Тепловий розрахунок теплообмінників", "7.5. Конструкційний розрахунок теплообмінників", "7.6. Гідравлічний розрахунок теплообмінників", "7.7. Оптимізація та інтенсифікація теплообміну", "7.8. Перевірний розрахунок теплообмінників"], en: ["7.1. General information", "7.2. Classification of heat exchangers", "7.3. Heat exchanger designs", "7.4. Thermal calculation of heat exchangers", "7.5. Structural calculation of heat exchangers", "7.6. Hydraulic calculation of heat exchangers", "7.7. Optimization and intensification of heat exchange", "7.8. Check calculation of heat exchangers"], de: ["7.1. Allgemeines", "7.2. Klassifikation von Waermeuebertragern", "7.3. Bauarten von Waermeuebertragern", "7.4. Thermische Berechnung", "7.5. Konstruktive Berechnung", "7.6. Hydraulische Berechnung", "7.7. Optimierung und Intensivierung", "7.8. Nachrechnungen"], ru: ["7.1. Общие сведения", "7.2. Классификация теплообменников", "7.3. Конструкции теплообменников", "7.4. Тепловой расчет теплообменников", "7.5. Конструкционный расчет теплообменников", "7.6. Гидравлический расчет теплообменников", "7.7. Оптимизация и интенсификация теплообмена", "7.8. Проверочный расчет теплообменников"] },
    concepts: { uk: ["теплообмінник", "поверхня теплообміну", "гідравлічний опір", "інтенсифікація"], en: ["heat exchanger", "heat-transfer area", "hydraulic resistance", "intensification"], de: ["Waermeuebertrager", "Waermeaustauschflaeche", "hydraulischer Widerstand", "Intensivierung"], ru: ["теплообменник", "поверхность теплообмена", "гидравлическое сопротивление", "интенсификация"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-07/fig-7-1.webp",
        alt: { uk: "Одноходовий кожухотрубний теплообмінник", en: "Single-pass shell-and-tube heat exchanger", de: "Einweg-Rohrbuendelwaermeuebertrager", ru: "Одноходовой кожухотрубный теплообменник" },
        caption: { uk: "Рис. 7.1. Схема кожухотрубного одноходового теплообмінника", en: "Fig. 7.1. Single-pass shell-and-tube heat exchanger", de: "Abb. 7.1. Schema eines einwegigen Rohrbuendelwaermeuebertragers", ru: "Рис. 7.1. Схема кожухотрубного одноходового теплообменника" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-07/fig-7-2.webp",
        alt: { uk: "Багатоходовий кожухотрубний теплообмінник", en: "Multi-pass shell-and-tube heat exchanger", de: "Mehrweg-Rohrbuendelwaermeuebertrager", ru: "Многоходовой кожухотрубный теплообменник" },
        caption: { uk: "Рис. 7.2. Схема кожухотрубного багатоходового теплообмінника", en: "Fig. 7.2. Multi-pass shell-and-tube heat exchanger", de: "Abb. 7.2. Schema eines mehrwegigen Rohrbuendelwaermeuebertragers", ru: "Рис. 7.2. Схема кожухотрубного многоходового теплообменника" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-07/fig-7-3.webp",
        alt: { uk: "Розміщення труб у трубних решітках", en: "Tube layout in tube sheets", de: "Rohranordnung in Rohrplatten", ru: "Размещение труб в трубных решетках" },
        caption: { uk: "Рис. 7.3. Схеми розміщення труб у трубних решітках", en: "Fig. 7.3. Tube layout schemes in tube sheets", de: "Abb. 7.3. Schemata der Rohranordnung in Rohrplatten", ru: "Рис. 7.3. Схемы размещения труб в трубных решетках" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-07/fig-7-5.webp",
        alt: { uk: "Теплообмінник типу труба в трубі", en: "Tube-in-tube heat exchanger", de: "Doppelrohr-Waermeuebertrager", ru: "Теплообменник типа труба в трубе" },
        caption: { uk: "Рис. 7.5. Схема теплообмінника типу «труба в трубі»", en: "Fig. 7.5. Tube-in-tube heat exchanger scheme", de: "Abb. 7.5. Schema eines Doppelrohr-Waermeuebertragers", ru: "Рис. 7.5. Схема теплообменника типа «труба в трубе»" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-07/fig-7-6.webp",
        alt: { uk: "Заглибний теплообмінник", en: "Immersion heat exchanger", de: "Tauchwaermeuebertrager", ru: "Погружной теплообменник" },
        caption: { uk: "Рис. 7.6. Схема заглибного теплообмінника", en: "Fig. 7.6. Immersion heat exchanger scheme", de: "Abb. 7.6. Schema eines Tauchwaermeuebertragers", ru: "Рис. 7.6. Схема погружного теплообменника" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-07/fig-7-7.webp",
        alt: { uk: "Зрошувальний змійовиковий теплообмінник", en: "Spray coil heat exchanger", de: "Berieselter Schlangenrohr-Waermeuebertrager", ru: "Оросительный змеевиковый теплообменник" },
        caption: { uk: "Рис. 7.7. Схема зрошувального змійовикового теплообмінника", en: "Fig. 7.7. Spray coil heat exchanger scheme", de: "Abb. 7.7. Schema eines berieselten Schlangenrohr-Waermeuebertragers", ru: "Рис. 7.7. Схема оросительного змеевикового теплообменника" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-07/fig-7-8.webp",
        alt: { uk: "Спіральний теплообмінник", en: "Spiral heat exchanger", de: "Spiralwaermeuebertrager", ru: "Спиральный теплообменник" },
        caption: { uk: "Рис. 7.8. Схема спірального теплообмінника", en: "Fig. 7.8. Spiral heat exchanger scheme", de: "Abb. 7.8. Schema eines Spiralwaermeuebertragers", ru: "Рис. 7.8. Схема спирального теплообменника" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-07/fig-7-9.webp",
        alt: { uk: "Однопакетний пластинчастий теплообмінник", en: "Single-pack plate heat exchanger", de: "Einpaket-Plattenwaermeuebertrager", ru: "Однопакетный пластинчатый теплообменник" },
        caption: { uk: "Рис. 7.9. Просторова схема руху середовищ в однопакетному пластинчастому теплообміннику", en: "Fig. 7.9. Spatial flow scheme in a single-pack plate heat exchanger", de: "Abb. 7.9. Raeumliches Stroemungsschema in einem Einpaket-Plattenwaermeuebertrager", ru: "Рис. 7.9. Пространственная схема движения сред в однопакетном пластинчатом теплообменнике" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-07/fig-7-10.webp",
        alt: { uk: "Поверхня з оребрених труб", en: "Finned tube surface", de: "Oberflaeche aus Rippenrohren", ru: "Поверхность из оребренных труб" },
        caption: { uk: "Рис. 7.10. Поверхня з оребрених труб теплообмінника", en: "Fig. 7.10. Finned tube surface of a heat exchanger", de: "Abb. 7.10. Oberflaeche aus Rippenrohren eines Waermeuebertragers", ru: "Рис. 7.10. Поверхность из оребренных труб теплообменника" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-07/fig-7-11.webp",
        alt: { uk: "Оболонковий теплообмінник", en: "Jacketed heat exchanger", de: "Mantelwaermeuebertrager", ru: "Оболочковый теплообменник" },
        caption: { uk: "Рис. 7.11. Схема оболонкового теплообмінника", en: "Fig. 7.11. Jacketed heat exchanger scheme", de: "Abb. 7.11. Schema eines Mantelwaermeuebertragers", ru: "Рис. 7.11. Схема оболочкового теплообменника" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-07/fig-7-12.webp",
        alt: { uk: "Графіки зміни температур теплоносіїв", en: "Temperature profiles of heat carriers", de: "Temperaturverlaeufe der Waermetraeger", ru: "Графики изменения температур теплоносителей" },
        caption: { uk: "Рис. 7.12. Графіки зміни температур теплоносіїв", en: "Fig. 7.12. Temperature profiles of heat carriers", de: "Abb. 7.12. Temperaturverlaeufe der Waermetraeger", ru: "Рис. 7.12. Графики изменения температур теплоносителей" },
      },
    ],
  },
  {
    chapter: 8,
    slug: "chapter-08-evaporation",
    titles: { uk: "Розділ 8. Випарювання", en: "Chapter 8. Evaporation", de: "Kapitel 8. Eindampfen", ru: "Раздел 8. Выпаривание" },
    descriptions: { uk: "Однокорпусні та багатокорпусні випарні установки, теплові насоси, конструкції апаратів і розрахунок.", en: "Single-effect and multiple-effect evaporators, heat pumps, equipment designs and calculation.", de: "Ein- und Mehrkoerperverdampfer, Waermepumpen, Apparatebauarten und Berechnung.", ru: "Однокорпусные и многокорпусные выпарные установки, тепловые насосы, конструкции аппаратов и расчет." },
    sections: { uk: ["8.1. Загальні відомості", "8.2. Випарювання в однокорпусній установці періодичної дії", "8.3. Багатокорпусні випарні установки", "8.4. Випарні установки з тепловими насосами", "8.5. Конструкції випарних апаратів", "8.6. Розрахунок багатокорпусної випарної установки"], en: ["8.1. General information", "8.2. Evaporation in a single-effect batch unit", "8.3. Multiple-effect evaporators", "8.4. Evaporators with heat pumps", "8.5. Evaporator designs", "8.6. Calculation of a multiple-effect evaporator"], de: ["8.1. Allgemeines", "8.2. Eindampfen in einer einteiligen periodischen Anlage", "8.3. Mehrkoerperverdampfer", "8.4. Verdampferanlagen mit Waermepumpen", "8.5. Bauarten von Verdampfern", "8.6. Berechnung eines Mehrkoerperverdampfers"], ru: ["8.1. Общие сведения", "8.2. Выпаривание в однокорпусной установке периодического действия", "8.3. Многокорпусные выпарные установки", "8.4. Выпарные установки с тепловыми насосами", "8.5. Конструкции выпарных аппаратов", "8.6. Расчет многокорпусной выпарной установки"] },
    concepts: { uk: ["вторинна пара", "корпус", "концентрування", "тепловий баланс"], en: ["secondary vapour", "effect", "concentration", "heat balance"], de: ["Brudendampf", "Koerper", "Konzentrieren", "Waermebilanz"], ru: ["вторичный пар", "корпус", "концентрирование", "тепловой баланс"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-08/fig-8-1.webp",
        alt: { uk: "Схема випарного апарата", en: "Evaporator scheme", de: "Schema eines Verdampfers", ru: "Схема выпарного аппарата" },
        caption: { uk: "Рис. 8.1. Схема випарного апарата", en: "Fig. 8.1. Evaporator scheme", de: "Abb. 8.1. Schema eines Verdampfers", ru: "Рис. 8.1. Схема выпарного аппарата" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-08/fig-8-2.webp",
        alt: { uk: "Однокорпусна випарна установка", en: "Single-effect evaporator unit", de: "Einkoerper-Verdampferanlage", ru: "Однокорпусная выпарная установка" },
        caption: { uk: "Рис. 8.2. Однокорпусна випарна установка", en: "Fig. 8.2. Single-effect evaporator unit", de: "Abb. 8.2. Einkoerper-Verdampferanlage", ru: "Рис. 8.2. Однокорпусная выпарная установка" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-08/fig-8-3.webp",
        alt: { uk: "Багатокорпусна випарна установка з конденсатором", en: "Multiple-effect evaporator with condenser", de: "Mehrkoerper-Verdampferanlage mit Kondensator", ru: "Многокорпусная выпарная установка с конденсатором" },
        caption: { uk: "Рис. 8.3. Схема багатокорпусної випарної установки з конденсатором", en: "Fig. 8.3. Multiple-effect evaporator with condenser", de: "Abb. 8.3. Mehrkoerper-Verdampferanlage mit Kondensator", ru: "Рис. 8.3. Схема многокорпусной выпарной установки с конденсатором" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-08/fig-8-4.webp",
        alt: { uk: "Однокорпусна випарна установка з турбокомпресором", en: "Single-effect evaporator unit with turbocompressor", de: "Einkoerper-Verdampferanlage mit Turbokompressor", ru: "Однокорпусная выпарная установка с турбокомпрессором" },
        caption: { uk: "Рис. 8.4. Однокорпусна випарна установка з турбокомпресором", en: "Fig. 8.4. Single-effect evaporator unit with turbocompressor", de: "Abb. 8.4. Einkoerper-Verdampferanlage mit Turbokompressor", ru: "Рис. 8.4. Однокорпусная выпарная установка с турбокомпрессором" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-08/fig-8-5.webp",
        alt: { uk: "Випарний апарат з інжекторним тепловим насосом", en: "Evaporator with an injector heat pump", de: "Verdampfer mit Injektor-Waermepumpe", ru: "Выпарной аппарат с инжекторным тепловым насосом" },
        caption: { uk: "Рис. 8.5. Випарний апарат з інжекторним тепловим насосом", en: "Fig. 8.5. Evaporator with an injector heat pump", de: "Abb. 8.5. Verdampfer mit Injektor-Waermepumpe", ru: "Рис. 8.5. Выпарной аппарат с инжекторным тепловым насосом" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-08/fig-8-6.webp",
        alt: { uk: "Випарний апарат з центральною циркуляційною трубкою", en: "Evaporator with a central circulation tube", de: "Verdampfer mit zentralem Umlaufrohr", ru: "Выпарной аппарат с центральной циркуляционной трубой" },
        caption: { uk: "Рис. 8.6. Схема випарного апарата з центральною циркуляційною трубкою", en: "Fig. 8.6. Evaporator with a central circulation tube", de: "Abb. 8.6. Verdampfer mit zentralem Umlaufrohr", ru: "Рис. 8.6. Схема выпарного аппарата с центральной циркуляционной трубой" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-08/fig-8-7.webp",
        alt: { uk: "Випарний апарат з винесеними циркуляційними трубами", en: "Evaporator with external circulation tubes", de: "Verdampfer mit externen Umlaufrohren", ru: "Выпарной аппарат с вынесенными циркуляционными трубами" },
        caption: { uk: "Рис. 8.7. Схема випарного апарата з винесеними циркуляційними трубами", en: "Fig. 8.7. Evaporator with external circulation tubes", de: "Abb. 8.7. Verdampfer mit externen Umlaufrohren", ru: "Рис. 8.7. Схема выпарного аппарата с вынесенными циркуляционными трубами" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-08/fig-8-8.webp",
        alt: { uk: "Випарний апарат із винесеною поверхнею нагрівання", en: "Evaporator with an external heating surface", de: "Verdampfer mit ausgelagerter Heizflaeche", ru: "Выпарной аппарат с вынесенной поверхностью нагрева" },
        caption: { uk: "Рис. 8.8. Випарний апарат із винесеною поверхнею нагрівання", en: "Fig. 8.8. Evaporator with an external heating surface", de: "Abb. 8.8. Verdampfer mit ausgelagerter Heizflaeche", ru: "Рис. 8.8. Выпарной аппарат с вынесенной поверхностью нагрева" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-08/fig-8-9.webp",
        alt: { uk: "Випарний апарат з одноразовим проходженням рідини", en: "Evaporator with single-pass liquid flow", de: "Verdampfer mit einmaligem Fluessigkeitsdurchgang", ru: "Выпарной аппарат с однократным прохождением жидкости" },
        caption: { uk: "Рис. 8.9. Випарний апарат з одноразовим проходженням рідини", en: "Fig. 8.9. Evaporator with single-pass liquid flow", de: "Abb. 8.9. Verdampfer mit einmaligem Fluessigkeitsdurchgang", ru: "Рис. 8.9. Выпарной аппарат с однократным прохождением жидкости" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-08/fig-8-10.webp",
        alt: { uk: "Випарний апарат з примусовою циркуляцією", en: "Forced-circulation evaporator", de: "Verdampfer mit Zwangsumlauf", ru: "Выпарной аппарат с принудительной циркуляцией" },
        caption: { uk: "Рис. 8.10. Випарний апарат з примусовою циркуляцією", en: "Fig. 8.10. Forced-circulation evaporator", de: "Abb. 8.10. Verdampfer mit Zwangsumlauf", ru: "Рис. 8.10. Выпарной аппарат с принудительной циркуляцией" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-08/fig-8-11.webp",
        alt: { uk: "Випарний апарат зі спадною плівкою", en: "Falling-film evaporator", de: "Fallfilmverdampfer", ru: "Выпарной аппарат со стекающей пленкой" },
        caption: { uk: "Рис. 8.11. Випарний апарат зі спадною плівкою", en: "Fig. 8.11. Falling-film evaporator", de: "Abb. 8.11. Fallfilmverdampfer", ru: "Рис. 8.11. Выпарной аппарат со стекающей пленкой" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-08/fig-8-12.webp",
        alt: { uk: "Роторний плівковий випарний апарат", en: "Rotor film evaporator", de: "Rotor-Filmverdampfer", ru: "Роторный пленочный выпарной аппарат" },
        caption: { uk: "Рис. 8.12. Принципова схема роторного плівкового випарного апарата", en: "Fig. 8.12. Rotor film evaporator scheme", de: "Abb. 8.12. Prinzipschema eines Rotor-Filmverdampfers", ru: "Рис. 8.12. Принципиальная схема роторного пленочного выпарного аппарата" },
      },
    ],
  },
  {
    chapter: 9,
    slug: "chapter-09-condensation",
    titles: { uk: "Розділ 9. Конденсація", en: "Chapter 9. Condensation", de: "Kapitel 9. Kondensation", ru: "Раздел 9. Конденсация" },
    descriptions: { uk: "Поверхневі конденсатори та конденсатори змішування.", en: "Surface condensers and mixing condensers.", de: "Oberflaechenkondensatoren und Mischkondensatoren.", ru: "Поверхностные конденсаторы и конденсаторы смешения." },
    sections: { uk: ["9.1. Загальні відомості", "9.2. Поверхневі конденсатори", "9.3. Конденсатори змішування"], en: ["9.1. General information", "9.2. Surface condensers", "9.3. Mixing condensers"], de: ["9.1. Allgemeines", "9.2. Oberflaechenkondensatoren", "9.3. Mischkondensatoren"], ru: ["9.1. Общие сведения", "9.2. Поверхностные конденсаторы", "9.3. Конденсаторы смешения"] },
    concepts: { uk: ["конденсація", "поверхневий конденсатор", "барометричний конденсатор", "вакуум"], en: ["condensation", "surface condenser", "barometric condenser", "vacuum"], de: ["Kondensation", "Oberflaechenkondensator", "barometrischer Kondensator", "Vakuum"], ru: ["конденсация", "поверхностный конденсатор", "барометрический конденсатор", "вакуум"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-09/fig-9-1.webp",
        alt: { uk: "Схема процесу в конденсаторі", en: "Process scheme in a condenser", de: "Prozessschema in einem Kondensator", ru: "Схема процесса в конденсаторе" },
        caption: { uk: "Рис. 9.1. Схематичне зображення процесу в конденсаторі", en: "Fig. 9.1. Schematic representation of the process in a condenser", de: "Abb. 9.1. Schematische Darstellung des Prozesses in einem Kondensator", ru: "Рис. 9.1. Схематическое изображение процесса в конденсаторе" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-09/fig-9-2.webp",
        alt: { uk: "Схема мокрого конденсатора", en: "Wet condenser scheme", de: "Schema eines Nasskondensators", ru: "Схема мокрого конденсатора" },
        caption: { uk: "Рис. 9.2. Схема мокрого конденсатора", en: "Fig. 9.2. Wet condenser scheme", de: "Abb. 9.2. Schema eines Nasskondensators", ru: "Рис. 9.2. Схема мокрого конденсатора" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-09/fig-9-3.webp",
        alt: { uk: "Схема барометричного сухого конденсатора", en: "Barometric dry condenser scheme", de: "Schema eines barometrischen Trockenkondensators", ru: "Схема барометрического сухого конденсатора" },
        caption: { uk: "Рис. 9.3. Схема барометричного сухого конденсатора", en: "Fig. 9.3. Barometric dry condenser scheme", de: "Abb. 9.3. Schema eines barometrischen Trockenkondensators", ru: "Рис. 9.3. Схема барометрического сухого конденсатора" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-09/fig-9-4.webp",
        alt: { uk: "Схема двоступінчастого барометричного конденсатора", en: "Two-stage barometric condenser scheme", de: "Schema eines zweistufigen barometrischen Kondensators", ru: "Схема двухступенчатого барометрического конденсатора" },
        caption: { uk: "Рис. 9.4. Схема двоступінчастого барометричного конденсатора", en: "Fig. 9.4. Two-stage barometric condenser scheme", de: "Abb. 9.4. Schema eines zweistufigen barometrischen Kondensators", ru: "Рис. 9.4. Схема двухступенчатого барометрического конденсатора" },
      },
    ],
  },
  {
    chapter: 10,
    slug: "chapter-10-mass-transfer-basics",
    titles: { uk: "Розділ 10. Основи масопередачі", en: "Chapter 10. Fundamentals of Mass Transfer", de: "Kapitel 10. Grundlagen der Stoffuebertragung", ru: "Раздел 10. Основы массопередачи" },
    descriptions: { uk: "Молекулярна і конвективна дифузія, масопередача, теорії масопередачі, критерії подібності та термодифузія.", en: "Molecular and convective diffusion, mass transfer, mass-transfer theories, similarity criteria and thermodiffusion.", de: "Molekulare und konvektive Diffusion, Stoffuebertragung, Theorien der Stoffuebertragung, Aehnlichkeitskriterien und Thermodiffusion.", ru: "Молекулярная и конвективная диффузия, массопередача, теории массопередачи, критерии подобия и термодиффузия." },
    sections: { uk: ["10.1. Загальні відомості", "10.2. Молекулярна дифузія", "10.3. Конвективна дифузія", "10.4. Масопередача", "10.5. Подібність дифузійних процесів", "10.6. Поняття про термодифузію"], en: ["10.1. General information", "10.2. Molecular diffusion", "10.3. Convective diffusion", "10.4. Mass transfer", "10.5. Similarity of diffusion processes", "10.6. Concept of thermodiffusion"], de: ["10.1. Allgemeines", "10.2. Molekulare Diffusion", "10.3. Konvektive Diffusion", "10.4. Stoffuebertragung", "10.5. Aehnlichkeit von Diffusionsprozessen", "10.6. Begriff der Thermodiffusion"], ru: ["10.1. Общие сведения", "10.2. Молекулярная диффузия", "10.3. Конвективная диффузия", "10.4. Массопередача", "10.5. Подобие диффузионных процессов", "10.6. Понятие о термодиффузии"] },
    concepts: { uk: ["дифузія", "масовіддача", "масопередача", "рушійна сила"], en: ["diffusion", "mass transfer coefficient", "mass transfer", "driving force"], de: ["Diffusion", "Stoffuebergangskoeffizient", "Stoffuebertragung", "Triebkraft"], ru: ["диффузия", "массоотдача", "массопередача", "движущая сила"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-10/fig-10-1.webp",
        alt: { uk: "Градієнт концентрації", en: "Concentration gradient", de: "Konzentrationsgradient", ru: "Градиент концентрации" },
        caption: { uk: "Рис. 10.1. До визначення градієнта концентрацій", en: "Fig. 10.1. Defining the concentration gradient", de: "Abb. 10.1. Zur Bestimmung des Konzentrationsgradienten", ru: "Рис. 10.1. К определению градиента концентраций" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-10/fig-10-2.webp",
        alt: { uk: "Примежові плівки біля межі поділу фаз", en: "Boundary films at the phase interface", de: "Grenzfilme an der Phasengrenze", ru: "Пограничные пленки у границы раздела фаз" },
        caption: { uk: "Рис. 10.2. Схема примежових плівок біля межі поділу фаз", en: "Fig. 10.2. Boundary-film scheme at the phase interface", de: "Abb. 10.2. Schema der Grenzfilme an der Phasengrenze", ru: "Рис. 10.2. Схема пограничных пленок у границы раздела фаз" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-10/fig-10-3.webp",
        alt: { uk: "Структура турбулентного потоку", en: "Turbulent-flow structure", de: "Struktur einer turbulenten Stroemung", ru: "Структура турбулентного потока" },
        caption: { uk: "Рис. 10.3. Структура турбулентного потоку", en: "Fig. 10.3. Turbulent-flow structure", de: "Abb. 10.3. Struktur einer turbulenten Stroemung", ru: "Рис. 10.3. Структура турбулентного потока" },
      },
    ],
  },
  {
    chapter: 11,
    slug: "chapter-11-drying",
    titles: { uk: "Розділ 11. Сушіння", en: "Chapter 11. Drying", de: "Kapitel 11. Trocknung", ru: "Раздел 11. Сушка" },
    descriptions: { uk: "Вологе повітря, І-х діаграма, статика і кінетика сушіння, конструкції сушарок та інтенсифікація.", en: "Humid air, I-x diagram, drying statics and kinetics, dryer designs and intensification.", de: "Feuchte Luft, I-x-Diagramm, Statik und Kinetik der Trocknung, Trocknerbauarten und Intensivierung.", ru: "Влажный воздух, I-x диаграмма, статика и кинетика сушки, конструкции сушилок и интенсификация." },
    sections: { uk: ["11.1. Загальні відомості", "11.2. Фізичні властивості вологого повітря", "11.3. Діаграма стану вологого повітря", "11.4. Вологий матеріал як об'єкт сушіння", "11.5. Статика сушіння", "11.6. Кінетика сушіння", "11.7. Конструкції сушарок"], en: ["11.1. General information", "11.2. Physical properties of humid air", "11.3. State diagram of humid air", "11.4. Wet material as a drying object", "11.5. Drying statics", "11.6. Drying kinetics", "11.7. Dryer designs"], de: ["11.1. Allgemeines", "11.2. Physikalische Eigenschaften feuchter Luft", "11.3. Zustandsdiagramm feuchter Luft", "11.4. Feuchtes Gut als Trocknungsobjekt", "11.5. Statik der Trocknung", "11.6. Kinetik der Trocknung", "11.7. Trocknerbauarten"], ru: ["11.1. Общие сведения", "11.2. Физические свойства влажного воздуха", "11.3. Диаграмма состояния влажного воздуха", "11.4. Влажный материал как объект сушки", "11.5. Статика сушки", "11.6. Кинетика сушки", "11.7. Конструкции сушилок"] },
    concepts: { uk: ["вологе повітря", "матеріальний баланс", "тепловий баланс", "кінетика сушіння"], en: ["humid air", "material balance", "heat balance", "drying kinetics"], de: ["feuchte Luft", "Stoffbilanz", "Waermebilanz", "Trocknungskinetik"], ru: ["влажный воздух", "материальный баланс", "тепловой баланс", "кинетика сушки"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-1.webp",
        alt: { uk: "I-x діаграма вологого повітря", en: "I-x diagram of humid air", de: "I-x-Diagramm feuchter Luft", ru: "I-x диаграмма влажного воздуха" },
        caption: { uk: "Рис. 11.1. Діаграма I-x вологого повітря", en: "Fig. 11.1. I-x diagram of humid air", de: "Abb. 11.1. I-x-Diagramm feuchter Luft", ru: "Рис. 11.1. I-x диаграмма влажного воздуха" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-2.webp",
        alt: { uk: "Схема повітряної сушарки", en: "Air dryer scheme", de: "Schema eines Lufttrockners", ru: "Схема воздушной сушилки" },
        caption: { uk: "Рис. 11.2. Схема повітряної сушарки", en: "Fig. 11.2. Air dryer scheme", de: "Abb. 11.2. Schema eines Lufttrockners", ru: "Рис. 11.2. Схема воздушной сушилки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-3.webp",
        alt: { uk: "Діаграма процесу сушіння", en: "Drying-process diagram", de: "Diagramm des Trocknungsprozesses", ru: "Диаграмма процесса сушки" },
        caption: { uk: "Рис. 11.3. Діаграма процесу сушіння в теоретичній і реальній сушарці", en: "Fig. 11.3. Drying-process diagram for theoretical and real dryers", de: "Abb. 11.3. Diagramm des Trocknungsprozesses im theoretischen und realen Trockner", ru: "Рис. 11.3. Диаграмма процесса сушки в теоретической и реальной сушилке" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-5.webp",
        alt: { uk: "Сушарка з проміжним підігріванням повітря", en: "Dryer with intermediate air heating", de: "Trockner mit Zwischenlufterwaermung", ru: "Сушилка с промежуточным подогревом воздуха" },
        caption: { uk: "Рис. 11.5. Схема сушарки з проміжним підігріванням повітря", en: "Fig. 11.5. Dryer with intermediate air heating", de: "Abb. 11.5. Schema eines Trockners mit Zwischenlufterwaermung", ru: "Рис. 11.5. Схема сушилки с промежуточным подогревом воздуха" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-7.webp",
        alt: { uk: "Сушарка з частковим поверненням відпрацьованого повітря", en: "Dryer with partial return of exhaust air", de: "Trockner mit teilweiser Rueckfuehrung der Abluft", ru: "Сушилка с частичным возвратом отработанного воздуха" },
        caption: { uk: "Рис. 11.7. Схема сушарки з частковим поверненням відпрацьованого повітря", en: "Fig. 11.7. Dryer with partial exhaust-air recirculation", de: "Abb. 11.7. Trockner mit teilweiser Rueckfuehrung der Abluft", ru: "Рис. 11.7. Схема сушилки с частичным возвратом отработанного воздуха" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-8.webp",
        alt: { uk: "Діаграма сушіння з поверненням повітря", en: "Drying diagram with air recirculation", de: "Trocknungsdiagramm mit Luftrueckfuehrung", ru: "Диаграмма сушки с возвратом воздуха" },
        caption: { uk: "Рис. 11.8. Діаграма процесу сушіння в сушарці з частковим поверненням повітря", en: "Fig. 11.8. Drying-process diagram with partial exhaust-air return", de: "Abb. 11.8. Trocknungsprozess mit teilweiser Abluftrueckfuehrung", ru: "Рис. 11.8. Диаграмма процесса сушки с частичным возвратом воздуха" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-9.webp",
        alt: { uk: "Крива сушіння вологого матеріалу", en: "Drying curve of a wet material", de: "Trocknungskurve eines feuchten Materials", ru: "Кривая сушки влажного материала" },
        caption: { uk: "Рис. 11.9. Крива сушіння вологого матеріалу", en: "Fig. 11.9. Drying curve of a wet material", de: "Abb. 11.9. Trocknungskurve eines feuchten Materials", ru: "Рис. 11.9. Кривая сушки влажного материала" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-10.webp",
        alt: { uk: "Криві швидкості сушіння різних матеріалів", en: "Drying-rate curves for different materials", de: "Trocknungsgeschwindigkeitskurven verschiedener Materialien", ru: "Кривые скорости сушки разных материалов" },
        caption: { uk: "Рис. 11.10. Криві швидкості сушіння різних матеріалів", en: "Fig. 11.10. Drying-rate curves for different materials", de: "Abb. 11.10. Trocknungsgeschwindigkeitskurven verschiedener Materialien", ru: "Рис. 11.10. Кривые скорости сушки разных материалов" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-13.webp",
        alt: { uk: "Камерна сушарка", en: "Chamber dryer", de: "Kammertrockner", ru: "Камерная сушилка" },
        caption: { uk: "Рис. 11.13. Схема камерної сушарки", en: "Fig. 11.13. Chamber dryer scheme", de: "Abb. 11.13. Schema eines Kammertrockners", ru: "Рис. 11.13. Схема камерной сушилки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-14.webp",
        alt: { uk: "Барабанна сушарка", en: "Drum dryer", de: "Trommeltrockner", ru: "Барабанная сушилка" },
        caption: { uk: "Рис. 11.14. Схема барабанної сушарки", en: "Fig. 11.14. Drum dryer scheme", de: "Abb. 11.14. Schema eines Trommeltrockners", ru: "Рис. 11.14. Схема барабанной сушилки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-15.webp",
        alt: { uk: "Насадки барабанної сушарки", en: "Drum dryer internals", de: "Einbauten eines Trommeltrockners", ru: "Насадки барабанной сушилки" },
        caption: { uk: "Рис. 11.15. Типи насадок у барабанній сушарці", en: "Fig. 11.15. Types of internals in a drum dryer", de: "Abb. 11.15. Einbautypen in einem Trommeltrockner", ru: "Рис. 11.15. Типы насадок в барабанной сушилке" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-16.webp",
        alt: { uk: "Тунельна сушарка", en: "Tunnel dryer", de: "Tunneltrockner", ru: "Туннельная сушилка" },
        caption: { uk: "Рис. 11.16. Схема тунельної сушарки", en: "Fig. 11.16. Tunnel dryer scheme", de: "Abb. 11.16. Schema eines Tunneltrockners", ru: "Рис. 11.16. Схема туннельной сушилки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-17.webp",
        alt: { uk: "Стрічкова сушарка", en: "Belt dryer", de: "Bandtrockner", ru: "Ленточная сушилка" },
        caption: { uk: "Рис. 11.17. Схема стрічкової сушарки", en: "Fig. 11.17. Belt dryer scheme", de: "Abb. 11.17. Schema eines Bandtrockners", ru: "Рис. 11.17. Схема ленточной сушилки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-18.webp",
        alt: { uk: "Шахтна сушарка", en: "Shaft dryer", de: "Schachttrockner", ru: "Шахтная сушилка" },
        caption: { uk: "Рис. 11.18. Схема шахтної сушарки", en: "Fig. 11.18. Shaft dryer scheme", de: "Abb. 11.18. Schema eines Schachttrockners", ru: "Рис. 11.18. Схема шахтной сушилки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-19.webp",
        alt: { uk: "Розпилювальна сушарка", en: "Spray dryer", de: "Spruehtrockner", ru: "Распылительная сушилка" },
        caption: { uk: "Рис. 11.19. Схема розпилювальної сушарки", en: "Fig. 11.19. Spray dryer scheme", de: "Abb. 11.19. Schema eines Spruehtrockners", ru: "Рис. 11.19. Схема распылительной сушилки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-20.webp",
        alt: { uk: "Сушарка з киплячим шаром", en: "Fluidized-bed dryer", de: "Wirbelschichttrockner", ru: "Сушилка с кипящим слоем" },
        caption: { uk: "Рис. 11.20. Схема сушарки з висушуванням у киплячому шарі", en: "Fig. 11.20. Fluidized-bed dryer scheme", de: "Abb. 11.20. Schema eines Wirbelschichttrockners", ru: "Рис. 11.20. Схема сушилки с высушиванием в кипящем слое" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-21.webp",
        alt: { uk: "Аерофонтанна сушарка", en: "Spouted-bed dryer", de: "Strahlschichttrockner", ru: "Аэрофонтанная сушилка" },
        caption: { uk: "Рис. 11.21. Схема аерофонтанної сушарки", en: "Fig. 11.21. Spouted-bed dryer scheme", de: "Abb. 11.21. Schema eines Strahlschichttrockners", ru: "Рис. 11.21. Схема аэрофонтанной сушилки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-22.webp",
        alt: { uk: "Двовальцьова сушарка", en: "Double-roll dryer", de: "Doppelwalzentrockner", ru: "Двухвальцовая сушилка" },
        caption: { uk: "Рис. 11.22. Схема двовальцьової сушарки", en: "Fig. 11.22. Double-roll dryer scheme", de: "Abb. 11.22. Schema eines Doppelwalzentrockners", ru: "Рис. 11.22. Схема двухвальцовой сушилки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-23.webp",
        alt: { uk: "Сублімаційна сушарка", en: "Freeze dryer", de: "Gefriertrockner", ru: "Сублимационная сушилка" },
        caption: { uk: "Рис. 11.23. Схема сублімаційної сушарки", en: "Fig. 11.23. Freeze dryer scheme", de: "Abb. 11.23. Schema eines Gefriertrockners", ru: "Рис. 11.23. Схема сублимационной сушилки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-11/fig-11-25.webp",
        alt: { uk: "Високочастотна сушарка", en: "High-frequency dryer", de: "Hochfrequenztrockner", ru: "Высокочастотная сушилка" },
        caption: { uk: "Рис. 11.25. Схема високочастотної сушарки", en: "Fig. 11.25. High-frequency dryer scheme", de: "Abb. 11.25. Schema eines Hochfrequenztrockners", ru: "Рис. 11.25. Схема высокочастотной сушилки" },
      },
    ],
  },
  {
    chapter: 12,
    slug: "chapter-12-distillation",
    titles: { uk: "Розділ 12. Перегонка", en: "Chapter 12. Distillation", de: "Kapitel 12. Destillation", ru: "Раздел 12. Перегонка" },
    descriptions: { uk: "Фазова рівновага, проста перегонка, ректифікація бінарних і багатокомпонентних сумішей, екстрактивна та азеотропна ректифікація.", en: "Phase equilibrium, simple distillation, rectification of binary and multicomponent mixtures, extractive and azeotropic rectification.", de: "Phasengleichgewicht, einfache Destillation, Rektifikation binaerer und mehrkomponentiger Gemische, extraktive und azeotrope Rektifikation.", ru: "Фазовое равновесие, простая перегонка, ректификация бинарных и многокомпонентных смесей, экстрактивная и азеотропная ректификация." },
    sections: { uk: ["12.1. Фазова рівновага", "12.2. Проста перегонка", "12.3. Ректифікація бінарних сумішей", "12.4. Конструкції ректифікаційних апаратів", "12.5. Ректифікація багатокомпонентних сумішей", "12.6. Екстрактивна ректифікація", "12.7. Азеотропна ректифікація"], en: ["12.1. Phase equilibrium", "12.2. Simple distillation", "12.3. Rectification of binary mixtures", "12.4. Designs of rectification equipment", "12.5. Rectification of multicomponent mixtures", "12.6. Extractive rectification", "12.7. Azeotropic rectification"], de: ["12.1. Phasengleichgewicht", "12.2. Einfache Destillation", "12.3. Rektifikation binaerer Gemische", "12.4. Bauarten von Rektifikationsapparaten", "12.5. Rektifikation mehrkomponentiger Gemische", "12.6. Extraktive Rektifikation", "12.7. Azeotrope Rektifikation"], ru: ["12.1. Фазовое равновесие", "12.2. Простая перегонка", "12.3. Ректификация бинарных смесей", "12.4. Конструкции ректификационных аппаратов", "12.5. Ректификация многокомпонентных смесей", "12.6. Экстрактивная ректификация", "12.7. Азеотропная ректификация"] },
    concepts: { uk: ["фазова рівновага", "флегмове число", "тарілка", "ректифікаційна колона"], en: ["phase equilibrium", "reflux ratio", "tray", "rectification column"], de: ["Phasengleichgewicht", "Ruecklaufverhaeltnis", "Boden", "Rektifikationskolonne"], ru: ["фазовое равновесие", "флегмовое число", "тарелка", "ректификационная колонна"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-12/fig-12-1.webp",
        alt: { uk: "Криві фазової рівноваги", en: "Phase-equilibrium curves", de: "Phasengleichgewichtskurven", ru: "Кривые фазового равновесия" },
        caption: { uk: "Рис. 12.1. Криві фазової рівноваги для бінарних сумішей", en: "Fig. 12.1. Phase-equilibrium curves for binary mixtures", de: "Abb. 12.1. Phasengleichgewichtskurven fuer binaere Gemische", ru: "Рис. 12.1. Кривые фазового равновесия для бинарных смесей" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-12/fig-12-2.webp",
        alt: { uk: "Одноразова проста перегонка", en: "Single simple distillation", de: "Einmalige einfache Destillation", ru: "Однократная простая перегонка" },
        caption: { uk: "Рис. 12.2. Одноразова проста перегонка: схема установки і зображення процесу на діаграмі y-x", en: "Fig. 12.2. Single simple distillation: unit scheme and process representation on a y-x diagram", de: "Abb. 12.2. Einmalige einfache Destillation: Anlagenschema und Prozessdarstellung im y-x-Diagramm", ru: "Рис. 12.2. Однократная простая перегонка: схема установки и изображение процесса на диаграмме y-x" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-12/fig-12-3.webp",
        alt: { uk: "Проста перегонка з дефлегмацією", en: "Simple distillation with dephlegmation", de: "Einfache Destillation mit Dephlegmation", ru: "Простая перегонка с дефлегмацией" },
        caption: { uk: "Рис. 12.3. Проста перегонка з дефлегмацією", en: "Fig. 12.3. Simple distillation with dephlegmation", de: "Abb. 12.3. Einfache Destillation mit Dephlegmation", ru: "Рис. 12.3. Простая перегонка с дефлегмацией" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-12/fig-12-4.webp",
        alt: { uk: "Ректифікаційна установка періодичної дії", en: "Batch rectification unit", de: "Diskontinuierliche Rektifikationsanlage", ru: "Ректификационная установка периодического действия" },
        caption: { uk: "Рис. 12.4. Схема ректифікаційної установки періодичної дії", en: "Fig. 12.4. Scheme of a batch rectification unit", de: "Abb. 12.4. Schema einer diskontinuierlichen Rektifikationsanlage", ru: "Рис. 12.4. Схема ректификационной установки периодического действия" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-12/fig-12-5.webp",
        alt: { uk: "Ректифікаційні установки безперервної дії", en: "Continuous rectification units", de: "Kontinuierliche Rektifikationsanlagen", ru: "Ректификационные установки непрерывного действия" },
        caption: { uk: "Рис. 12.5. Схеми ректифікаційних установок безперервної дії з повною, концентраційною та виснажною колонами", en: "Fig. 12.5. Continuous rectification units with complete, enriching and stripping columns", de: "Abb. 12.5. Kontinuierliche Rektifikationsanlagen mit vollstaendiger, Verstaerkungs- und Abtriebskolonne", ru: "Рис. 12.5. Схемы ректификационных установок непрерывного действия с полной, концентрационной и исчерпывающей колоннами" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-12/fig-12-6.webp",
        alt: { uk: "Матеріальні потоки повної колони", en: "Material flows in a complete column", de: "Stoffstroeme einer vollstaendigen Kolonne", ru: "Материальные потоки полной колонны" },
        caption: { uk: "Рис. 12.6. Схема матеріальних потоків повної ректифікаційної колони", en: "Fig. 12.6. Material-flow scheme for a complete rectification column", de: "Abb. 12.6. Stoffstromschema einer vollstaendigen Rektifikationskolonne", ru: "Рис. 12.6. Схема материальных потоков полной ректификационной колонны" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-12/fig-12-7.webp",
        alt: { uk: "Визначення кількості теоретичних тарілок", en: "Determining the number of theoretical trays", de: "Bestimmung der Zahl theoretischer Boeden", ru: "Определение числа теоретических тарелок" },
        caption: { uk: "Рис. 12.7. Визначення кількості теоретичних тарілок у ректифікаційній колоні", en: "Fig. 12.7. Determining the number of theoretical trays in a rectification column", de: "Abb. 12.7. Bestimmung der Zahl theoretischer Boeden in einer Rektifikationskolonne", ru: "Рис. 12.7. Определение числа теоретических тарелок в ректификационной колонне" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-12/fig-12-8-9.webp",
        alt: { uk: "Вплив флегмового числа на кількість тарілок", en: "Influence of reflux ratio on tray count", de: "Einfluss des Ruecklaufverhaeltnisses auf die Bodenzahl", ru: "Влияние флегмового числа на число тарелок" },
        caption: { uk: "Рис. 12.8-12.9. Вплив флегмового числа на кількість тарілок у колоні", en: "Fig. 12.8-12.9. Influence of reflux ratio on the number of trays in a column", de: "Abb. 12.8-12.9. Einfluss des Ruecklaufverhaeltnisses auf die Bodenzahl einer Kolonne", ru: "Рис. 12.8-12.9. Влияние флегмового числа на число тарелок в колонне" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-12/fig-12-10.webp",
        alt: { uk: "Теплові потоки колон", en: "Column heat flows", de: "Waermestroeme von Kolonnen", ru: "Тепловые потоки колонн" },
        caption: { uk: "Рис. 12.10. Схеми теплових потоків ректифікаційних колон", en: "Fig. 12.10. Heat-flow schemes for rectification columns", de: "Abb. 12.10. Waermestromschemata von Rektifikationskolonnen", ru: "Рис. 12.10. Схемы тепловых потоков ректификационных колонн" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-12/fig-12-11.webp",
        alt: { uk: "Конструкції тарілок", en: "Tray designs", de: "Bodenkonstruktionen", ru: "Конструкции тарелок" },
        caption: { uk: "Рис. 12.11. Конструкції тарілок ректифікаційних колон", en: "Fig. 12.11. Tray designs for rectification columns", de: "Abb. 12.11. Bodenkonstruktionen fuer Rektifikationskolonnen", ru: "Рис. 12.11. Конструкции тарелок ректификационных колонн" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-12/fig-12-12.webp",
        alt: { uk: "Насадкова колона", en: "Packed column", de: "Packungskolonne", ru: "Насадочная колонна" },
        caption: { uk: "Рис. 12.12. Схема насадкової колони", en: "Fig. 12.12. Scheme of a packed column", de: "Abb. 12.12. Schema einer Packungskolonne", ru: "Рис. 12.12. Схема насадочной колонны" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-12/fig-12-13.webp",
        alt: { uk: "Плівкова колона", en: "Film column", de: "Filmkolonne", ru: "Пленочная колонна" },
        caption: { uk: "Рис. 12.13. Схема плівкової колони", en: "Fig. 12.13. Scheme of a film column", de: "Abb. 12.13. Schema einer Filmkolonne", ru: "Рис. 12.13. Схема пленочной колонны" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-12/fig-12-14.webp",
        alt: { uk: "Залежність ККД тарілок від швидкості пари", en: "Tray efficiency versus vapor velocity", de: "Bodenwirkungsgrad in Abhaengigkeit von der Dampfgeschwindigkeit", ru: "Зависимость КПД тарелок от скорости пара" },
        caption: { uk: "Рис. 12.14. Залежність ККД тарілок від швидкості пари", en: "Fig. 12.14. Tray efficiency as a function of vapor velocity", de: "Abb. 12.14. Bodenwirkungsgrad in Abhaengigkeit von der Dampfgeschwindigkeit", ru: "Рис. 12.14. Зависимость КПД тарелок от скорости пара" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-12/fig-12-15.webp",
        alt: { uk: "Розділення багатокомпонентних сумішей", en: "Separation of multicomponent mixtures", de: "Trennung mehrkomponentiger Gemische", ru: "Разделение многокомпонентных смесей" },
        caption: { uk: "Рис. 12.15. Схеми розділення багатокомпонентних сумішей", en: "Fig. 12.15. Schemes for separating multicomponent mixtures", de: "Abb. 12.15. Schemata zur Trennung mehrkomponentiger Gemische", ru: "Рис. 12.15. Схемы разделения многокомпонентных смесей" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-12/fig-12-16.webp",
        alt: { uk: "Установки для ректифікації спирту-сирцю і бражної колони", en: "Units for raw-spirit rectification and a beer column", de: "Anlagen fuer Rohspiritusrektifikation und Maischekolonne", ru: "Установки для ректификации спирта-сырца и бражной колонны" },
        caption: { uk: "Рис. 12.16. Схеми установок для ректифікації спирту-сирцю і бражної колони", en: "Fig. 12.16. Schemes of units for raw-spirit rectification and a beer column", de: "Abb. 12.16. Anlagenschemata fuer Rohspiritusrektifikation und Maischekolonne", ru: "Рис. 12.16. Схемы установок для ректификации спирта-сырца и бражной колонны" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-12/fig-12-17.webp",
        alt: { uk: "Екстрактивна і сольова ректифікація", en: "Extractive and salt rectification", de: "Extraktive und Salzrektifikation", ru: "Экстрактивная и солевая ректификация" },
        caption: { uk: "Рис. 12.17. Схеми установок для екстрактивної та сольової ректифікації", en: "Fig. 12.17. Unit schemes for extractive and salt rectification", de: "Abb. 12.17. Anlagenschemata fuer extraktive und Salzrektifikation", ru: "Рис. 12.17. Схемы установок для экстрактивной и солевой ректификации" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-12/fig-12-18.webp",
        alt: { uk: "Азеотропна ректифікація", en: "Azeotropic rectification", de: "Azeotrope Rektifikation", ru: "Азеотропная ректификация" },
        caption: { uk: "Рис. 12.18. Схема установки для азеотропної ректифікації", en: "Fig. 12.18. Unit scheme for azeotropic rectification", de: "Abb. 12.18. Anlagenschema fuer azeotrope Rektifikation", ru: "Рис. 12.18. Схема установки для азеотропной ректификации" },
      },
    ],
  },
  {
    chapter: 13,
    slug: "chapter-13-sorption-processes",
    titles: { uk: "Розділ 13. Сорбційні процеси", en: "Chapter 13. Sorption Processes", de: "Kapitel 13. Sorptionsprozesse", ru: "Раздел 13. Сорбционные процессы" },
    descriptions: { uk: "Абсорбція, адсорбція та конструкції відповідних апаратів.", en: "Absorption, adsorption and designs of corresponding equipment.", de: "Absorption, Adsorption und Bauarten entsprechender Apparate.", ru: "Абсорбция, адсорбция и конструкции соответствующих аппаратов." },
    sections: { uk: ["13.1. Абсорбція", "13.1.1. Конструкції абсорберів", "13.2. Адсорбція", "13.2.1. Конструкції адсорберів"], en: ["13.1. Absorption", "13.1.1. Absorber designs", "13.2. Adsorption", "13.2.1. Adsorber designs"], de: ["13.1. Absorption", "13.1.1. Bauarten von Absorbern", "13.2. Adsorption", "13.2.1. Bauarten von Adsorbern"], ru: ["13.1. Абсорбция", "13.1.1. Конструкции абсорберов", "13.2. Адсорбция", "13.2.1. Конструкции адсорберов"] },
    concepts: { uk: ["абсорбція", "адсорбція", "сорбент", "насадковий апарат"], en: ["absorption", "adsorption", "sorbent", "packed apparatus"], de: ["Absorption", "Adsorption", "Sorbens", "Packungsapparat"], ru: ["абсорбция", "адсорбция", "сорбент", "насадочный аппарат"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-13/fig-13-1.webp",
        alt: { uk: "Крива абсорбційної рівноваги", en: "Absorption-equilibrium curve", de: "Absorptionsgleichgewichtskurve", ru: "Кривая абсорбционного равновесия" },
        caption: { uk: "Рис. 13.1. Крива абсорбційної рівноваги", en: "Fig. 13.1. Absorption-equilibrium curve", de: "Abb. 13.1. Absorptionsgleichgewichtskurve", ru: "Рис. 13.1. Кривая абсорбционного равновесия" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-13/fig-13-2.webp",
        alt: { uk: "Протитечійний абсорбційний апарат", en: "Countercurrent absorption apparatus", de: "Gegenstrom-Absorptionsapparat", ru: "Противоточный абсорбционный аппарат" },
        caption: { uk: "Рис. 13.2. Схема протитечійного абсорбційного апарата", en: "Fig. 13.2. Scheme of a countercurrent absorption apparatus", de: "Abb. 13.2. Schema eines Gegenstrom-Absorptionsapparats", ru: "Рис. 13.2. Схема противоточного абсорбционного аппарата" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-13/fig-13-3.webp",
        alt: { uk: "Каскадні абсорбери", en: "Cascade absorbers", de: "Kaskadenabsorber", ru: "Каскадные абсорберы" },
        caption: { uk: "Рис. 13.3. Схема каскадних абсорберів", en: "Fig. 13.3. Scheme of cascade absorbers", de: "Abb. 13.3. Schema von Kaskadenabsorbern", ru: "Рис. 13.3. Схема каскадных абсорберов" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-13/fig-13-4.webp",
        alt: { uk: "Трубчастий абсорбер", en: "Tubular absorber", de: "Rohrabsorber", ru: "Трубчатый абсорбер" },
        caption: { uk: "Рис. 13.4. Схема трубчастого абсорбера", en: "Fig. 13.4. Scheme of a tubular absorber", de: "Abb. 13.4. Schema eines Rohrabsorbers", ru: "Рис. 13.4. Схема трубчатого абсорбера" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-13/fig-13-5.webp",
        alt: { uk: "Насадковий абсорбер", en: "Packed absorber", de: "Packungsabsorber", ru: "Насадочный абсорбер" },
        caption: { uk: "Рис. 13.5. Схема насадкового абсорбера", en: "Fig. 13.5. Scheme of a packed absorber", de: "Abb. 13.5. Schema eines Packungsabsorbers", ru: "Рис. 13.5. Схема насадочного абсорбера" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-13/fig-13-6.webp",
        alt: { uk: "Типи насадок", en: "Packing types", de: "Packungstypen", ru: "Типы насадок" },
        caption: { uk: "Рис. 13.6. Типи насадок для масообмінних апаратів", en: "Fig. 13.6. Packing types for mass-transfer equipment", de: "Abb. 13.6. Packungstypen fuer Stoffuebertragungsapparate", ru: "Рис. 13.6. Типы насадок для массообменных аппаратов" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-13/fig-13-7.webp",
        alt: { uk: "Поверхневий абсорбер", en: "Surface absorber", de: "Oberflaechenabsorber", ru: "Поверхностный абсорбер" },
        caption: { uk: "Рис. 13.7. Схема поверхневого абсорбера", en: "Fig. 13.7. Scheme of a surface absorber", de: "Abb. 13.7. Schema eines Oberflaechenabsorbers", ru: "Рис. 13.7. Схема поверхностного абсорбера" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-13/fig-13-8.webp",
        alt: { uk: "Барботажний абсорбер", en: "Bubbling absorber", de: "Blasenabsorber", ru: "Барботажный абсорбер" },
        caption: { uk: "Рис. 13.8. Схема барботажного абсорбера", en: "Fig. 13.8. Scheme of a bubbling absorber", de: "Abb. 13.8. Schema eines Blasenabsorbers", ru: "Рис. 13.8. Схема барботажного абсорбера" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-13/fig-13-9.webp",
        alt: { uk: "Розпилювальний абсорбер", en: "Spray absorber", de: "Spruehabsorber", ru: "Распылительный абсорбер" },
        caption: { uk: "Рис. 13.9. Схема розпилювального абсорбера", en: "Fig. 13.9. Scheme of a spray absorber", de: "Abb. 13.9. Schema eines Spruehabsorbers", ru: "Рис. 13.9. Схема распылительного абсорбера" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-13/fig-13-10.webp",
        alt: { uk: "Механічний абсорбер", en: "Mechanical absorber", de: "Mechanischer Absorber", ru: "Механический абсорбер" },
        caption: { uk: "Рис. 13.10. Схема механічного абсорбера", en: "Fig. 13.10. Scheme of a mechanical absorber", de: "Abb. 13.10. Schema eines mechanischen Absorbers", ru: "Рис. 13.10. Схема механического абсорбера" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-13/fig-13-11.webp",
        alt: { uk: "Зони процесу адсорбції", en: "Adsorption-process zones", de: "Zonen des Adsorptionsprozesses", ru: "Зоны процесса адсорбции" },
        caption: { uk: "Рис. 13.11. Три зони процесу адсорбції в адсорбері безперервної дії", en: "Fig. 13.11. Three adsorption-process zones in a continuous adsorber", de: "Abb. 13.11. Drei Zonen des Adsorptionsprozesses in einem kontinuierlichen Adsorber", ru: "Рис. 13.11. Три зоны процесса адсорбции в адсорбере непрерывного действия" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-13/fig-13-12.webp",
        alt: { uk: "Графік кількості ступенів концентрації", en: "Graph for concentration-stage count", de: "Diagramm zur Zahl der Konzentrationsstufen", ru: "График числа ступеней концентрации" },
        caption: { uk: "Рис. 13.12. Графік знаходження кількості ступенів концентрації речовини", en: "Fig. 13.12. Graph for determining the number of concentration stages", de: "Abb. 13.12. Diagramm zur Bestimmung der Zahl der Konzentrationsstufen", ru: "Рис. 13.12. График определения числа ступеней концентрации вещества" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-13/fig-13-13.webp",
        alt: { uk: "Адсорбер періодичної дії", en: "Batch adsorber", de: "Diskontinuierlicher Adsorber", ru: "Адсорбер периодического действия" },
        caption: { uk: "Рис. 13.13. Схема адсорбера періодичної дії", en: "Fig. 13.13. Scheme of a batch adsorber", de: "Abb. 13.13. Schema eines diskontinuierlichen Adsorbers", ru: "Рис. 13.13. Схема адсорбера периодического действия" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-13/fig-13-14.webp",
        alt: { uk: "Кільцевий адсорбер", en: "Annular adsorber", de: "Ringadsorber", ru: "Кольцевой адсорбер" },
        caption: { uk: "Рис. 13.14. Кільцевий адсорбер", en: "Fig. 13.14. Annular adsorber", de: "Abb. 13.14. Ringadsorber", ru: "Рис. 13.14. Кольцевой адсорбер" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-13/fig-13-15.webp",
        alt: { uk: "Адсорбер безперервної дії з рухомим шаром", en: "Continuous adsorber with moving bed", de: "Kontinuierlicher Adsorber mit bewegter Schicht", ru: "Адсорбер непрерывного действия с движущимся слоем" },
        caption: { uk: "Рис. 13.15. Схема адсорбера безперервної дії у вигляді колони з рухомим шаром", en: "Fig. 13.15. Continuous column adsorber with a moving bed", de: "Abb. 13.15. Kontinuierlicher Kolonnenadsorber mit bewegter Schicht", ru: "Рис. 13.15. Схема адсорбера непрерывного действия в виде колонны с движущимся слоем" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-13/fig-13-16.webp",
        alt: { uk: "Адсорбер з киплячим шаром", en: "Fluidized-bed adsorber", de: "Wirbelschichtadsorber", ru: "Адсорбер с кипящим слоем" },
        caption: { uk: "Рис. 13.16. Схема адсорбера періодичної дії з киплячим шаром", en: "Fig. 13.16. Scheme of a batch fluidized-bed adsorber", de: "Abb. 13.16. Schema eines diskontinuierlichen Wirbelschichtadsorbers", ru: "Рис. 13.16. Схема адсорбера периодического действия с кипящим слоем" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-13/fig-13-17.webp",
        alt: { uk: "Тарілчастий адсорбер з псевдозрідженим шаром", en: "Tray adsorber with fluidized sorbent bed", de: "Bodenadsorber mit fluidisierter Sorbensschicht", ru: "Тарельчатый адсорбер с псевдоожиженным слоем сорбента" },
        caption: { uk: "Рис. 13.17. Тарілчастий адсорбер безперервної дії з псевдозрідженим шаром сорбенту", en: "Fig. 13.17. Continuous tray adsorber with a fluidized sorbent bed", de: "Abb. 13.17. Kontinuierlicher Bodenadsorber mit fluidisierter Sorbensschicht", ru: "Рис. 13.17. Тарельчатый адсорбер непрерывного действия с псевдоожиженным слоем сорбента" },
      },
    ],
  },
  {
    chapter: 14,
    slug: "chapter-14-extraction",
    titles: { uk: "Розділ 14. Екстрагування", en: "Chapter 14. Extraction", de: "Kapitel 14. Extraktion", ru: "Раздел 14. Экстрагирование" },
    descriptions: { uk: "Екстрагування з твердих тіл, дифузійний опір, розрахунок процесу, інтенсифікація і конструкції екстракторів.", en: "Extraction from solids, diffusion resistance, process calculation, intensification and extractor designs.", de: "Extraktion aus Feststoffen, Diffusionswiderstand, Prozessberechnung, Intensivierung und Extraktorbauarten.", ru: "Экстрагирование из твердых тел, диффузионное сопротивление, расчет процесса, интенсификация и конструкции экстракторов." },
    sections: { uk: ["14.1. Загальні відомості", "14.2. Екстрагування із твердого тіла", "14.2.4. Розрахунок екстракційного процесу", "14.2.5. Методи інтенсифікації", "14.2.7. Апарати для екстрагування з твердих тіл"], en: ["14.1. General information", "14.2. Extraction from a solid body", "14.2.4. Calculation of the extraction process", "14.2.5. Intensification methods", "14.2.7. Equipment for extraction from solids"], de: ["14.1. Allgemeines", "14.2. Extraktion aus einem Feststoff", "14.2.4. Berechnung des Extraktionsprozesses", "14.2.5. Intensivierungsmethoden", "14.2.7. Apparate fuer die Extraktion aus Feststoffen"], ru: ["14.1. Общие сведения", "14.2. Экстрагирование из твердого тела", "14.2.4. Расчет экстракционного процесса", "14.2.5. Методы интенсификации", "14.2.7. Аппараты для экстрагирования из твердых тел"] },
    concepts: { uk: ["екстрагент", "тверде тіло - рідина", "дифузійний опір", "екстрактор"], en: ["extractant", "solid-liquid system", "diffusion resistance", "extractor"], de: ["Extraktionsmittel", "Feststoff-Fluessig-System", "Diffusionswiderstand", "Extraktor"], ru: ["экстрагент", "система твердое тело - жидкость", "диффузионное сопротивление", "экстрактор"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-1.webp",
        alt: { uk: "Способи оброблення сировини перед екстрагуванням", en: "Raw-material pretreatment methods before extraction", de: "Vorbehandlungsmethoden des Rohstoffs vor der Extraktion", ru: "Способы обработки сырья перед экстрагированием" },
        caption: { uk: "Рис. 14.1. Способи оброблення сировини перед екстрагуванням", en: "Fig. 14.1. Raw-material pretreatment methods before extraction", de: "Abb. 14.1. Vorbehandlungsmethoden des Rohstoffs vor der Extraktion", ru: "Рис. 14.1. Способы обработки сырья перед экстрагированием" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-2.webp",
        alt: { uk: "Класифікація екстрагентів", en: "Classification of extractants", de: "Klassifikation von Extraktionsmitteln", ru: "Классификация экстрагентов" },
        caption: { uk: "Рис. 14.2. Класифікація екстрагентів", en: "Fig. 14.2. Classification of extractants", de: "Abb. 14.2. Klassifikation von Extraktionsmitteln", ru: "Рис. 14.2. Классификация экстрагентов" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-4.webp",
        alt: { uk: "Екстракційні криві", en: "Extraction curves", de: "Extraktionskurven", ru: "Экстракционные кривые" },
        caption: { uk: "Рис. 14.4. Екстракційні криві протитечійного і прямотечійного процесів", en: "Fig. 14.4. Extraction curves for countercurrent and cocurrent processes", de: "Abb. 14.4. Extraktionskurven fuer Gegenstrom- und Gleichstromprozesse", ru: "Рис. 14.4. Экстракционные кривые противоточного и прямоточного процессов" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-5.webp",
        alt: { uk: "Трикутна діаграма тверде тіло - рідина", en: "Triangular diagram for a solid-liquid system", de: "Dreiecksdiagramm fuer ein Feststoff-Fluessig-System", ru: "Треугольная диаграмма системы твердое тело - жидкость" },
        caption: { uk: "Рис. 14.5. Трикутна діаграма для системи тверде тіло - рідина", en: "Fig. 14.5. Triangular diagram for a solid-liquid system", de: "Abb. 14.5. Dreiecksdiagramm fuer ein Feststoff-Fluessig-System", ru: "Рис. 14.5. Треугольная диаграмма для системы твердое тело - жидкость" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-7.webp",
        alt: { uk: "n-секційне протитечійне екстрагування", en: "n-section countercurrent extraction", de: "n-stufige Gegenstromextraktion", ru: "n-секционное противоточное экстрагирование" },
        caption: { uk: "Рис. 14.7. Схема n-секційного протитечійного екстрагування", en: "Fig. 14.7. Scheme of n-section countercurrent extraction", de: "Abb. 14.7. Schema der n-stufigen Gegenstromextraktion", ru: "Рис. 14.7. Схема n-секционного противоточного экстрагирования" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-8.webp",
        alt: { uk: "Графічний розрахунок протитечійного екстрагування", en: "Graphical calculation of countercurrent extraction", de: "Grafische Berechnung der Gegenstromextraktion", ru: "Графический расчет противоточного экстрагирования" },
        caption: { uk: "Рис. 14.8. Графічний розрахунок багатоступінчастого протитечійного екстрагування з твердих тіл", en: "Fig. 14.8. Graphical calculation of multistage countercurrent extraction from solids", de: "Abb. 14.8. Grafische Berechnung der mehrstufigen Gegenstromextraktion aus Feststoffen", ru: "Рис. 14.8. Графический расчет многоступенчатого противоточного экстрагирования из твердых тел" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-9.webp",
        alt: { uk: "Кількість ступенів концентрації", en: "Number of concentration stages", de: "Zahl der Konzentrationsstufen", ru: "Число ступеней концентрации" },
        caption: { uk: "Рис. 14.9. Графічне визначення кількості ступенів концентрації під час екстрагування", en: "Fig. 14.9. Graphical determination of the number of concentration stages during extraction", de: "Abb. 14.9. Grafische Bestimmung der Zahl der Konzentrationsstufen bei der Extraktion", ru: "Рис. 14.9. Графическое определение числа ступеней концентрации при экстрагировании" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-10.webp",
        alt: { uk: "Методи інтенсифікації екстрагування", en: "Extraction-intensification methods", de: "Methoden zur Intensivierung der Extraktion", ru: "Методы интенсификации экстрагирования" },
        caption: { uk: "Рис. 14.10. Класифікація методів інтенсифікації процесу екстрагування", en: "Fig. 14.10. Classification of extraction-process intensification methods", de: "Abb. 14.10. Klassifikation der Methoden zur Intensivierung des Extraktionsprozesses", ru: "Рис. 14.10. Классификация методов интенсификации процесса экстрагирования" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-13.webp",
        alt: { uk: "Схеми екстракторів періодичної дії", en: "Batch extractor schemes", de: "Schemata diskontinuierlicher Extraktoren", ru: "Схемы экстракторов периодического действия" },
        caption: { uk: "Рис. 14.13. Схеми екстракторів з нерухомим шаром, мішалкою та циркуляційним контуром", en: "Fig. 14.13. Extractor schemes with a fixed bed, agitator and circulation loop", de: "Abb. 14.13. Extraktorschemata mit Festbett, Ruehrwerk und Umlaufkreislauf", ru: "Рис. 14.13. Схемы экстракторов с неподвижным слоем, мешалкой и циркуляционным контуром" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-14.webp",
        alt: { uk: "Екстрактор з висхідним потоком екстрагента", en: "Extractor with upward extractant flow", de: "Extraktor mit aufsteigendem Extraktionsmittelstrom", ru: "Экстрактор с восходящим потоком экстрагента" },
        caption: { uk: "Рис. 14.14. Схема екстрактора з висхідним потоком екстрагента", en: "Fig. 14.14. Scheme of an extractor with upward extractant flow", de: "Abb. 14.14. Schema eines Extraktors mit aufsteigendem Extraktionsmittelstrom", ru: "Рис. 14.14. Схема экстрактора с восходящим потоком экстрагента" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-16.webp",
        alt: { uk: "Комбінований екстрактор періодичної дії", en: "Combined batch extractor", de: "Kombinierter diskontinuierlicher Extraktor", ru: "Комбинированный экстрактор периодического действия" },
        caption: { uk: "Рис. 14.16. Комбінований екстрактор періодичної дії", en: "Fig. 14.16. Combined batch extractor", de: "Abb. 14.16. Kombinierter diskontinuierlicher Extraktor", ru: "Рис. 14.16. Комбинированный экстрактор периодического действия" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-17.webp",
        alt: { uk: "Екстрактор з кавітаційним ефектом", en: "Extractor with cavitation effect", de: "Extraktor mit Kavitationseffekt", ru: "Экстрактор с кавитационным эффектом" },
        caption: { uk: "Рис. 14.17. Екстрактор з кавітаційним ефектом", en: "Fig. 14.17. Extractor with cavitation effect", de: "Abb. 14.17. Extraktor mit Kavitationseffekt", ru: "Рис. 14.17. Экстрактор с кавитационным эффектом" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-18.webp",
        alt: { uk: "Віброекстрактор із ситчастим контейнером", en: "Vibroextractor with mesh container", de: "Vibroextraktor mit Siebbehaelter", ru: "Виброэкстрактор с сетчатым контейнером" },
        caption: { uk: "Рис. 14.18. Принципова схема віброекстрактора із ситчастим контейнером", en: "Fig. 14.18. Principal scheme of a vibroextractor with a mesh container", de: "Abb. 14.18. Prinzipschema eines Vibroextraktors mit Siebbehaelter", ru: "Рис. 14.18. Принципиальная схема виброэкстрактора с сетчатым контейнером" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-19.webp",
        alt: { uk: "Ротаційна дифузійна установка", en: "Rotary diffusion unit", de: "Rotations-Diffusionsanlage", ru: "Ротационная диффузионная установка" },
        caption: { uk: "Рис. 14.19. Схема ротаційної дифузійної установки", en: "Fig. 14.19. Scheme of a rotary diffusion unit", de: "Abb. 14.19. Schema einer Rotations-Diffusionsanlage", ru: "Рис. 14.19. Схема ротационной диффузионной установки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-21.webp",
        alt: { uk: "Шнековий горизонтальний екстрактор", en: "Horizontal screw extractor", de: "Horizontaler Schneckenextraktor", ru: "Шнековый горизонтальный экстрактор" },
        caption: { uk: "Рис. 14.21. Шнековий горизонтальний екстрактор", en: "Fig. 14.21. Horizontal screw extractor", de: "Abb. 14.21. Horizontaler Schneckenextraktor", ru: "Рис. 14.21. Шнековый горизонтальный экстрактор" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-23.webp",
        alt: { uk: "Екстрактор нахиленого типу", en: "Inclined extractor", de: "Geneigter Extraktor", ru: "Экстрактор наклонного типа" },
        caption: { uk: "Рис. 14.23. Схема екстрактора нахиленого типу", en: "Fig. 14.23. Scheme of an inclined extractor", de: "Abb. 14.23. Schema eines geneigten Extraktors", ru: "Рис. 14.23. Схема экстрактора наклонного типа" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-25.webp",
        alt: { uk: "Віброекстрактор", en: "Vibroextractor", de: "Vibroextraktor", ru: "Виброэкстрактор" },
        caption: { uk: "Рис. 14.25. Принципова схема віброекстрактора", en: "Fig. 14.25. Principal scheme of a vibroextractor", de: "Abb. 14.25. Prinzipschema eines Vibroextraktors", ru: "Рис. 14.25. Принципиальная схема виброэкстрактора" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-14/fig-14-27.webp",
        alt: { uk: "Вібраційний екстрактор", en: "Vibration extractor", de: "Vibrationsextraktor", ru: "Вибрационный экстрактор" },
        caption: { uk: "Рис. 14.27. Вібраційний екстрактор", en: "Fig. 14.27. Vibration extractor", de: "Abb. 14.27. Vibrationsextraktor", ru: "Рис. 14.27. Вибрационный экстрактор" },
      },
    ],
  },
  {
    chapter: 15,
    slug: "chapter-15-crystallization",
    titles: { uk: "Розділ 15. Кристалізація", en: "Chapter 15. Crystallization", de: "Kapitel 15. Kristallisation", ru: "Раздел 15. Кристаллизация" },
    descriptions: { uk: "Фізичні основи, кінетика, зародкоутворення, ріст кристалів, апарати і принципи розрахунку кристалізаторів.", en: "Physical basis, kinetics, nucleation, crystal growth, equipment and calculation principles for crystallizers.", de: "Physikalische Grundlagen, Kinetik, Keimbildung, Kristallwachstum, Apparate und Berechnungsprinzipien fuer Kristallisatoren.", ru: "Физические основы, кинетика, зародышеобразование, рост кристаллов, аппараты и принципы расчета кристаллизаторов." },
    sections: { uk: ["15.1. Загальні відомості", "15.2. Фізичні основи кристалізації із розчинів", "15.3. Кінетика процесу кристалізації", "15.4. Кристалоутворення", "15.5. Ріст кристалів", "15.10. Фактори впливу", "15.11. Апарати для кристалізації", "15.12. Основні принципи розрахунку"], en: ["15.1. General information", "15.2. Physical basis of crystallization from solutions", "15.3. Crystallization kinetics", "15.4. Crystal nucleation", "15.5. Crystal growth", "15.10. Influence factors", "15.11. Crystallization equipment", "15.12. Basic calculation principles"], de: ["15.1. Allgemeines", "15.2. Physikalische Grundlagen der Kristallisation aus Loesungen", "15.3. Kinetik des Kristallisationsprozesses", "15.4. Kristallbildung", "15.5. Kristallwachstum", "15.10. Einflussfaktoren", "15.11. Kristallisationsapparate", "15.12. Grundprinzipien der Berechnung"], ru: ["15.1. Общие сведения", "15.2. Физические основы кристаллизации из растворов", "15.3. Кинетика процесса кристаллизации", "15.4. Кристаллообразование", "15.5. Рост кристаллов", "15.10. Факторы влияния", "15.11. Аппараты для кристаллизации", "15.12. Основные принципы расчета"] },
    concepts: { uk: ["пересичення", "зародкоутворення", "ріст кристалів", "кристалізатор"], en: ["supersaturation", "nucleation", "crystal growth", "crystallizer"], de: ["Uebersaettigung", "Keimbildung", "Kristallwachstum", "Kristallisator"], ru: ["пересыщение", "зародышеобразование", "рост кристаллов", "кристаллизатор"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-15/fig-15-1.webp",
        alt: { uk: "Кристал цукрози", en: "Sucrose crystal", de: "Saccharosekristall", ru: "Кристалл сахарозы" },
        caption: { uk: "Рис. 15.1. Кристал цукрози", en: "Fig. 15.1. Sucrose crystal", de: "Abb. 15.1. Saccharosekristall", ru: "Рис. 15.1. Кристалл сахарозы" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-15/fig-15-2.webp",
        alt: { uk: "Графік розчинності системи цукроза - вода", en: "Solubility graph for the sucrose-water system", de: "Loeslichkeitsdiagramm des Systems Saccharose-Wasser", ru: "График растворимости системы сахароза - вода" },
        caption: { uk: "Рис. 15.2. Графік розчинності двокомпонентної системи цукроза - вода", en: "Fig. 15.2. Solubility graph for the binary sucrose-water system", de: "Abb. 15.2. Loeslichkeitsdiagramm des binaeren Systems Saccharose-Wasser", ru: "Рис. 15.2. График растворимости двухкомпонентной системы сахароза - вода" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-15/fig-15-3.webp",
        alt: { uk: "Кінематичні криві кристалізації", en: "Kinematic crystallization curves", de: "Kinematische Kristallisationskurven", ru: "Кинематические кривые кристаллизации" },
        caption: { uk: "Рис. 15.3. Кінематичні криві кристалізації", en: "Fig. 15.3. Kinematic crystallization curves", de: "Abb. 15.3. Kinematische Kristallisationskurven", ru: "Рис. 15.3. Кинематические кривые кристаллизации" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-15/fig-15-5.webp",
        alt: { uk: "Вакуум-апарат типу А2-ПВР", en: "A2-PVR vacuum pan", de: "Vakuumapparat Typ A2-PVR", ru: "Вакуум-аппарат типа А2-ПВР" },
        caption: { uk: "Рис. 15.5. Вакуум-апарат типу А2-ПВР", en: "Fig. 15.5. A2-PVR vacuum pan", de: "Abb. 15.5. Vakuumapparat Typ A2-PVR", ru: "Рис. 15.5. Вакуум-аппарат типа А2-ПВР" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-15/fig-15-6.webp",
        alt: { uk: "Потоки безперервного уварювання і кристалізації", en: "Flows of continuous boiling and crystallization", de: "Stroeme beim kontinuierlichen Einkochen und Kristallisieren", ru: "Потоки непрерывного уваривания и кристаллизации" },
        caption: { uk: "Рис. 15.6. Схема потоків безперервного уварювання та кристалізації цукрових утфелів", en: "Fig. 15.6. Flow scheme for continuous boiling and crystallization of sugar massecuite", de: "Abb. 15.6. Flussschema des kontinuierlichen Einkochens und Kristallisierens von Zuckermassecuite", ru: "Рис. 15.6. Схема потоков непрерывного уваривания и кристаллизации сахарных утфелей" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-15/fig-15-7.webp",
        alt: { uk: "Вакуум-апарат безперервної дії системи КТІХП", en: "Continuous KTIHP vacuum pan", de: "Kontinuierlicher Vakuumapparat des KTIHP-Systems", ru: "Вакуум-аппарат непрерывного действия системы КТИПП" },
        caption: { uk: "Рис. 15.7. Вакуум-апарат безперервної дії системи КТІХП: а - структурна схема; б - конструкція", en: "Fig. 15.7. Continuous KTIHP vacuum pan: a - block scheme; b - design", de: "Abb. 15.7. Kontinuierlicher Vakuumapparat des KTIHP-Systems: a - Strukturschema; b - Konstruktion", ru: "Рис. 15.7. Вакуум-аппарат непрерывного действия системы КТИПП: а - структурная схема; б - конструкция" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-15/fig-15-8.webp",
        alt: { uk: "Горизонтальний перемішувач-кристалізатор", en: "Horizontal mixer-crystallizer", de: "Horizontaler Ruehrkristallisator", ru: "Горизонтальный перемешиватель-кристаллизатор" },
        caption: { uk: "Рис. 15.8. Горизонтальний перемішувач-кристалізатор", en: "Fig. 15.8. Horizontal mixer-crystallizer", de: "Abb. 15.8. Horizontaler Ruehrkristallisator", ru: "Рис. 15.8. Горизонтальный перемешиватель-кристаллизатор" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-15/fig-15-9.webp",
        alt: { uk: "Вертикальний перемішувач-кристалізатор", en: "Vertical mixer-crystallizer", de: "Vertikaler Ruehrkristallisator", ru: "Вертикальный перемешиватель-кристаллизатор" },
        caption: { uk: "Рис. 15.9. Вертикальний перемішувач-кристалізатор", en: "Fig. 15.9. Vertical mixer-crystallizer", de: "Abb. 15.9. Vertikaler Ruehrkristallisator", ru: "Рис. 15.9. Вертикальный перемешиватель-кристаллизатор" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-15/fig-15-10.webp",
        alt: { uk: "Статичний матеріальний баланс багатоступеневої кристалізації", en: "Static material balance for multistage crystallization", de: "Statische Stoffbilanz der mehrstufigen Kristallisation", ru: "Статический материальный баланс многоступенчатой кристаллизации" },
        caption: { uk: "Рис. 15.10. Схема статичного матеріального балансу багатоступеневої кристалізації", en: "Fig. 15.10. Static material-balance scheme for multistage crystallization", de: "Abb. 15.10. Schema der statischen Stoffbilanz der mehrstufigen Kristallisation", ru: "Рис. 15.10. Схема статического материального баланса многоступенчатой кристаллизации" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-15/fig-15-11.webp",
        alt: { uk: "Масовий графік варіння і кристалізації цукрових утфелів", en: "Mass graph of boiling and crystallization of sugar massecuite", de: "Massendiagramm des Kochens und Kristallisierens von Zuckermassecuite", ru: "Массовый график варки и кристаллизации сахарных утфелей" },
        caption: { uk: "Рис. 15.11. Масовий графік варіння та кристалізації цукрових утфелів у вакуум-апараті та перемішувачі-кристалізаторі", en: "Fig. 15.11. Mass graph of boiling and crystallization of sugar massecuite in a vacuum pan and mixer-crystallizer", de: "Abb. 15.11. Massendiagramm des Kochens und Kristallisierens von Zuckermassecuite im Vakuumapparat und Ruehrkristallisator", ru: "Рис. 15.11. Массовый график варки и кристаллизации сахарных утфелей в вакуум-аппарате и перемешивателе-кристаллизаторе" },
      },
    ],
  },
  {
    chapter: 16,
    slug: "chapter-16-size-reduction",
    titles: { uk: "Розділ 16. Подрібнення", en: "Chapter 16. Size Reduction", de: "Kapitel 16. Zerkleinerung", ru: "Раздел 16. Измельчение" },
    descriptions: { uk: "Способи подрібнення, енерговитрати, класифікація і будова подрібнювальних машин.", en: "Size-reduction methods, energy consumption, classification and design of grinding machines.", de: "Zerkleinerungsverfahren, Energieaufwand, Klassifikation und Aufbau von Zerkleinerungsmaschinen.", ru: "Способы измельчения, энергозатраты, классификация и устройство измельчительных машин." },
    sections: { uk: ["16.1. Загальні відомості", "16.2. Способи подрібнення", "16.3. Витрати енергії на подрібнення", "16.4. Класифікація подрібнювачів", "16.5. Будова і принцип дії подрібнювальних машин"], en: ["16.1. General information", "16.2. Size-reduction methods", "16.3. Energy consumption for size reduction", "16.4. Classification of grinders", "16.5. Design and operation of grinding machines"], de: ["16.1. Allgemeines", "16.2. Zerkleinerungsverfahren", "16.3. Energiebedarf der Zerkleinerung", "16.4. Klassifikation von Zerkleinerern", "16.5. Aufbau und Wirkprinzip von Zerkleinerungsmaschinen"], ru: ["16.1. Общие сведения", "16.2. Способы измельчения", "16.3. Расход энергии на измельчение", "16.4. Классификация измельчителей", "16.5. Устройство и принцип действия измельчительных машин"] },
    concepts: { uk: ["подрібнення", "ступінь подрібнення", "млин", "енерговитрати"], en: ["size reduction", "reduction ratio", "mill", "energy consumption"], de: ["Zerkleinerung", "Zerkleinerungsgrad", "Muehle", "Energiebedarf"], ru: ["измельчение", "степень измельчения", "мельница", "энергозатраты"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-16/fig-16-2.webp",
        alt: { uk: "Схема щокової дробарки", en: "Jaw crusher scheme", de: "Schema eines Backenbrechers", ru: "Схема щековой дробилки" },
        caption: { uk: "Рис. 16.2. Схема щокової дробарки", en: "Fig. 16.2. Jaw crusher scheme", de: "Abb. 16.2. Schema eines Backenbrechers", ru: "Рис. 16.2. Схема щековой дробилки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-16/fig-16-3.webp",
        alt: { uk: "Схема конусної дробарки", en: "Cone crusher scheme", de: "Schema eines Kegelbrechers", ru: "Схема конусной дробилки" },
        caption: { uk: "Рис. 16.3. Схема конусної дробарки", en: "Fig. 16.3. Cone crusher scheme", de: "Abb. 16.3. Schema eines Kegelbrechers", ru: "Рис. 16.3. Схема конусной дробилки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-16/fig-16-4.webp",
        alt: { uk: "Схема валкової дробарки", en: "Roll crusher scheme", de: "Schema eines Walzenbrechers", ru: "Схема валковой дробилки" },
        caption: { uk: "Рис. 16.4. Схема валкової дробарки", en: "Fig. 16.4. Roll crusher scheme", de: "Abb. 16.4. Schema eines Walzenbrechers", ru: "Рис. 16.4. Схема валковой дробилки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-16/fig-16-5.webp",
        alt: { uk: "Схема бігунів", en: "Edge-runner mill scheme", de: "Schema eines Kollergangs", ru: "Схема бегунов" },
        caption: { uk: "Рис. 16.5. Схема бігунів", en: "Fig. 16.5. Edge-runner mill scheme", de: "Abb. 16.5. Schema eines Kollergangs", ru: "Рис. 16.5. Схема бегунов" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-16/fig-16-6.webp",
        alt: { uk: "Схема молоткової дробарки", en: "Hammer crusher scheme", de: "Schema eines Hammerbrechers", ru: "Схема молотковой дробилки" },
        caption: { uk: "Рис. 16.6. Схема молоткової дробарки", en: "Fig. 16.6. Hammer crusher scheme", de: "Abb. 16.6. Schema eines Hammerbrechers", ru: "Рис. 16.6. Схема молотковой дробилки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-16/fig-16-7.webp",
        alt: { uk: "Схема однобарабанної дробарки", en: "Single-drum crusher scheme", de: "Schema eines Ein-Trommel-Brechers", ru: "Схема однобарабанной дробилки" },
        caption: { uk: "Рис. 16.7. Схема однобарабанної дробарки", en: "Fig. 16.7. Single-drum crusher scheme", de: "Abb. 16.7. Schema eines Ein-Trommel-Brechers", ru: "Рис. 16.7. Схема однобарабанной дробилки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-16/fig-16-8.webp",
        alt: { uk: "Схема дезінтегратора", en: "Disintegrator scheme", de: "Schema eines Desintegrators", ru: "Схема дезинтегратора" },
        caption: { uk: "Рис. 16.8. Схема дезінтегратора", en: "Fig. 16.8. Disintegrator scheme", de: "Abb. 16.8. Schema eines Desintegrators", ru: "Рис. 16.8. Схема дезинтегратора" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-16/fig-16-9.webp",
        alt: { uk: "Схема барабанного млина", en: "Drum mill scheme", de: "Schema einer Trommelmuehle", ru: "Схема барабанной мельницы" },
        caption: { uk: "Рис. 16.9. Схема барабанного млина", en: "Fig. 16.9. Drum mill scheme", de: "Abb. 16.9. Schema einer Trommelmuehle", ru: "Рис. 16.9. Схема барабанной мельницы" },
      },
    ],
  },
  {
    chapter: 17,
    slug: "chapter-17-bulk-material-sorting",
    titles: { uk: "Розділ 17. Сортування сипких матеріалів", en: "Chapter 17. Sorting of Bulk Materials", de: "Kapitel 17. Sortieren von Schuettguetern", ru: "Раздел 17. Сортирование сыпучих материалов" },
    descriptions: { uk: "Просіювання, розподіл за густиною і швидкістю осідання, магнітне сепарування.", en: "Sieving, separation by density and settling velocity, magnetic separation.", de: "Sieben, Trennung nach Dichte und Sinkgeschwindigkeit, Magnetscheidung.", ru: "Просеивание, разделение по плотности и скорости осаждения, магнитное сепарирование." },
    sections: { uk: ["17.1. Просіювання", "17.3. Розподіл за густиною і швидкістю осідання частинок", "17.4. Магнітне сепарування"], en: ["17.1. Sieving", "17.3. Separation by density and particle settling velocity", "17.4. Magnetic separation"], de: ["17.1. Sieben", "17.3. Trennung nach Dichte und Sinkgeschwindigkeit der Partikel", "17.4. Magnetscheidung"], ru: ["17.1. Просеивание", "17.3. Разделение по плотности и скорости осаждения частиц", "17.4. Магнитное сепарирование"] },
    concepts: { uk: ["сито", "фракція", "швидкість осідання", "магнітний сепаратор"], en: ["sieve", "fraction", "settling velocity", "magnetic separator"], de: ["Sieb", "Fraktion", "Sinkgeschwindigkeit", "Magnetabscheider"], ru: ["сито", "фракция", "скорость осаждения", "магнитный сепаратор"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-17/fig-17-1.webp",
        alt: { uk: "Форми отворів сит", en: "Shapes of sieve openings", de: "Formen von Sieboeffnungen", ru: "Формы отверстий сит" },
        caption: { uk: "Рис. 17.1. Форми отворів сит", en: "Fig. 17.1. Shapes of sieve openings", de: "Abb. 17.1. Formen von Sieboeffnungen", ru: "Рис. 17.1. Формы отверстий сит" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-17/fig-17-2.webp",
        alt: { uk: "Плоский хитний грохот", en: "Flat oscillating screen", de: "Flaches Schwingsieb", ru: "Плоский качающийся грохот" },
        caption: { uk: "Рис. 17.2. Схема плоского хитного грохота: A - прохід; Б - схід", en: "Fig. 17.2. Scheme of a flat oscillating screen: A - undersize; B - oversize", de: "Abb. 17.2. Schema eines flachen Schwingsiebs: A - Durchgang; B - Ueberlauf", ru: "Рис. 17.2. Схема плоского качающегося грохота: A - проход; Б - сход" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-17/fig-17-3.webp",
        alt: { uk: "Схеми хитних грохотів", en: "Oscillating screen schemes", de: "Schemata von Schwingsieben", ru: "Схемы качающихся грохотов" },
        caption: { uk: "Рис. 17.3. Схеми хитних грохотів", en: "Fig. 17.3. Oscillating screen schemes", de: "Abb. 17.3. Schemata von Schwingsieben", ru: "Рис. 17.3. Схемы качающихся грохотов" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-17/fig-17-4.webp",
        alt: { uk: "Барабанний грохот", en: "Drum screen", de: "Trommelsieb", ru: "Барабанный грохот" },
        caption: { uk: "Рис. 17.4. Схема барабанного грохота: A - прохід; Б - схід", en: "Fig. 17.4. Drum-screen scheme: A - undersize; B - oversize", de: "Abb. 17.4. Schema eines Trommelsiebs: A - Durchgang; B - Ueberlauf", ru: "Рис. 17.4. Схема барабанного грохота: A - проход; Б - сход" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-17/fig-17-5.webp",
        alt: { uk: "Вібраційний грохот", en: "Vibrating screen", de: "Vibrationssieb", ru: "Вибрационный грохот" },
        caption: { uk: "Рис. 17.5. Схема вібраційного грохота: A - прохід; Б - схід", en: "Fig. 17.5. Vibrating-screen scheme: A - undersize; B - oversize", de: "Abb. 17.5. Schema eines Vibrationssiebs: A - Durchgang; B - Ueberlauf", ru: "Рис. 17.5. Схема вибрационного грохота: A - проход; Б - сход" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-17/fig-17-6.webp",
        alt: { uk: "Циліндричний трієр", en: "Cylindrical trieur", de: "Zylindrischer Trieur", ru: "Цилиндрический триер" },
        caption: { uk: "Рис. 17.6. Схема циліндричного трієра", en: "Fig. 17.6. Scheme of a cylindrical trieur", de: "Abb. 17.6. Schema eines zylindrischen Trieurs", ru: "Рис. 17.6. Схема цилиндрического триера" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-17/fig-17-7.webp",
        alt: { uk: "Повітряно-ситовий сепаратор", en: "Air-and-sieve separator", de: "Luft-Sieb-Separator", ru: "Воздушно-ситовой сепаратор" },
        caption: { uk: "Рис. 17.7. Схема повітряно-ситового сепаратора", en: "Fig. 17.7. Scheme of an air-and-sieve separator", de: "Abb. 17.7. Schema eines Luft-Sieb-Separators", ru: "Рис. 17.7. Схема воздушно-ситового сепаратора" },
      },
    ],
  },
  {
    chapter: 18,
    slug: "chapter-18-pressing",
    titles: { uk: "Розділ 18. Пресування", en: "Chapter 18. Pressing", de: "Kapitel 18. Pressen", ru: "Раздел 18. Прессование" },
    descriptions: { uk: "Віджимання рідини з твердих матеріалів, формування пластичних матеріалів, брикетування і гранулювання.", en: "Liquid expression from solids, forming of plastic materials, briquetting and granulation.", de: "Abpressen von Fluessigkeit aus Feststoffen, Formen plastischer Stoffe, Brikettieren und Granulieren.", ru: "Отжим жидкости из твердых материалов, формование пластичных материалов, брикетирование и гранулирование." },
    sections: { uk: ["18.1. Віджимання рідини з твердих матеріалів", "18.2. Формування пластичних матеріалів", "18.3. Брикетування і гранулювання твердих матеріалів"], en: ["18.1. Liquid expression from solid materials", "18.2. Forming of plastic materials", "18.3. Briquetting and granulation of solid materials"], de: ["18.1. Abpressen von Fluessigkeit aus Feststoffen", "18.2. Formen plastischer Stoffe", "18.3. Brikettieren und Granulieren fester Stoffe"], ru: ["18.1. Отжим жидкости из твердых материалов", "18.2. Формование пластичных материалов", "18.3. Брикетирование и гранулирование твердых материалов"] },
    concepts: { uk: ["тиск", "віджимання", "формування", "гранулювання"], en: ["pressure", "expression", "forming", "granulation"], de: ["Druck", "Abpressen", "Formen", "Granulieren"], ru: ["давление", "отжим", "формование", "гранулирование"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-18/fig-18-1.webp",
        alt: { uk: "Схема гідравлічного преса", en: "Hydraulic press scheme", de: "Schema einer hydraulischen Presse", ru: "Схема гидравлического пресса" },
        caption: { uk: "Рис. 18.1. Схема гідравлічного преса", en: "Fig. 18.1. Hydraulic press scheme", de: "Abb. 18.1. Schema einer hydraulischen Presse", ru: "Рис. 18.1. Схема гидравлического пресса" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-18/fig-18-2.webp",
        alt: { uk: "Схема шнекового преса", en: "Screw press scheme", de: "Schema einer Schneckenpresse", ru: "Схема шнекового пресса" },
        caption: { uk: "Рис. 18.2. Схема шнекового преса", en: "Fig. 18.2. Screw press scheme", de: "Abb. 18.2. Schema einer Schneckenpresse", ru: "Рис. 18.2. Схема шнекового пресса" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-18/fig-18-3.webp",
        alt: { uk: "Схема одношнекового екструдера", en: "Single-screw extruder scheme", de: "Schema eines Einschneckenextruders", ru: "Схема одношнекового экструдера" },
        caption: { uk: "Рис. 18.3. Схема одношнекового екструдера", en: "Fig. 18.3. Single-screw extruder scheme", de: "Abb. 18.3. Schema eines Einschneckenextruders", ru: "Рис. 18.3. Схема одношнекового экструдера" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-18/fig-18-4.webp",
        alt: { uk: "Пресування на карусельному пресі", en: "Pressing on a carousel press", de: "Pressen auf einer Karussellpresse", ru: "Прессование на карусельном прессе" },
        caption: { uk: "Рис. 18.4. Схема процесу пресування на карусельному пресі", en: "Fig. 18.4. Pressing-process scheme on a carousel press", de: "Abb. 18.4. Schema des Pressvorgangs auf einer Karussellpresse", ru: "Рис. 18.4. Схема процесса прессования на карусельном прессе" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-18/fig-18-5.webp",
        alt: { uk: "Гранулювання сухого жому", en: "Dry pulp granulation", de: "Granulierung von Trockenschnitzeln", ru: "Гранулирование сухого жома" },
        caption: { uk: "Рис. 18.5. Схема гранулювання сухого жому", en: "Fig. 18.5. Dry pulp granulation scheme", de: "Abb. 18.5. Schema der Granulierung von Trockenschnitzeln", ru: "Рис. 18.5. Схема гранулирования сухого жома" },
      },
    ],
  },
  {
    chapter: 19,
    slug: "chapter-19-bioengineering-processes",
    titles: { uk: "Розділ 19. Особливості біоінженерних процесів", en: "Chapter 19. Features of Bioengineering Processes", de: "Kapitel 19. Besonderheiten bioingenieurtechnischer Prozesse", ru: "Раздел 19. Особенности биоинженерных процессов" },
    descriptions: { uk: "Періодичне і безперервне культивування, кінетика росту мікроорганізмів, експоненціальна та логістична криві.", en: "Batch and continuous cultivation, microbial growth kinetics, exponential and logistic curves.", de: "Batch- und kontinuierliche Kultivierung, Wachstumskinetik von Mikroorganismen, exponentielle und logistische Kurven.", ru: "Периодическое и непрерывное культивирование, кинетика роста микроорганизмов, экспоненциальная и логистическая кривые." },
    sections: { uk: ["19.1. Періодичне культивування", "19.1.1. Загальні відомості", "19.1.2. Основні рівняння кінетики росту популяції мікроорганізмів", "19.1.2.1. Рівняння експоненціальної кривої", "19.1.2.2. Рівняння логістичної кривої", "19.2. Безперервне культивування", "19.2.2. Класифікація безперервних процесів", "19.2.3. Гомогенне безперервне культивування мікроорганізмів"], en: ["19.1. Batch cultivation", "19.1.1. General information", "19.1.2. Basic equations of microbial population growth kinetics", "19.1.2.1. Equation of the exponential curve", "19.1.2.2. Equation of the logistic curve", "19.2. Continuous cultivation", "19.2.2. Classification of continuous processes", "19.2.3. Homogeneous continuous cultivation of microorganisms"], de: ["19.1. Periodische Kultivierung", "19.1.1. Allgemeines", "19.1.2. Grundgleichungen der Wachstumskinetik mikrobieller Populationen", "19.1.2.1. Gleichung der exponentiellen Kurve", "19.1.2.2. Gleichung der logistischen Kurve", "19.2. Kontinuierliche Kultivierung", "19.2.2. Klassifikation kontinuierlicher Prozesse", "19.2.3. Homogene kontinuierliche Kultivierung von Mikroorganismen"], ru: ["19.1. Периодическое культивирование", "19.1.1. Общие сведения", "19.1.2. Основные уравнения кинетики роста популяции микроорганизмов", "19.1.2.1. Уравнение экспоненциальной кривой", "19.1.2.2. Уравнение логистической кривой", "19.2. Непрерывное культивирование", "19.2.2. Классификация непрерывных процессов", "19.2.3. Гомогенное непрерывное культивирование микроорганизмов"] },
    concepts: { uk: ["культивування", "питома швидкість росту", "експоненціальна крива", "хемостат"], en: ["cultivation", "specific growth rate", "exponential curve", "chemostat"], de: ["Kultivierung", "spezifische Wachstumsrate", "exponentielle Kurve", "Chemostat"], ru: ["культивирование", "удельная скорость роста", "экспоненциальная кривая", "хемостат"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-19/fig-19-1.webp",
        alt: { uk: "Схема і основні елементи ферментера", en: "Scheme and main elements of a fermenter", de: "Schema und Hauptelemente eines Fermenters", ru: "Схема и основные элементы ферментера" },
        caption: { uk: "Рис. 19.1. Схема і основні елементи ферментера", en: "Fig. 19.1. Scheme and main elements of a fermenter", de: "Abb. 19.1. Schema und Hauptelemente eines Fermenters", ru: "Рис. 19.1. Схема и основные элементы ферментера" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-19/fig-19-2.webp",
        alt: { uk: "Крива росту біомаси", en: "Biomass growth curve", de: "Kurve des Biomassewachstums", ru: "Кривая роста биомассы" },
        caption: { uk: "Рис. 19.2. Крива росту біомаси", en: "Fig. 19.2. Biomass growth curve", de: "Abb. 19.2. Kurve des Biomassewachstums", ru: "Рис. 19.2. Кривая роста биомассы" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-19/fig-19-3.webp",
        alt: { uk: "Миттєва та середня продуктивність ферментера періодичної дії", en: "Instantaneous and average productivity of a batch fermenter", de: "Momentane und mittlere Produktivitaet eines Batch-Fermenters", ru: "Мгновенная и средняя производительность ферментера периодического действия" },
        caption: { uk: "Рис. 19.3. Миттєва та середня продуктивність ферментера періодичної дії", en: "Fig. 19.3. Instantaneous and average productivity of a batch fermenter", de: "Abb. 19.3. Momentane und mittlere Produktivitaet eines Batch-Fermenters", ru: "Рис. 19.3. Мгновенная и средняя производительность ферментера периодического действия" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-19/fig-19-4.webp",
        alt: { uk: "Залежність відносної питомої швидкості росту від концентрації субстрату", en: "Relative specific growth rate versus substrate concentration", de: "Relative spezifische Wachstumsrate in Abhaengigkeit von der Substratkonzentration", ru: "Зависимость относительной удельной скорости роста от концентрации субстрата" },
        caption: { uk: "Рис. 19.4. Залежність відносної питомої швидкості росту від концентрації субстрату", en: "Fig. 19.4. Relative specific growth rate versus substrate concentration", de: "Abb. 19.4. Relative spezifische Wachstumsrate in Abhaengigkeit von der Substratkonzentration", ru: "Рис. 19.4. Зависимость относительной удельной скорости роста от концентрации субстрата" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-19/fig-19-5.webp",
        alt: { uk: "Графік рівняння Моно у логарифмічній формі", en: "Monod equation graph in logarithmic form", de: "Diagramm der Monod-Gleichung in logarithmischer Form", ru: "График уравнения Моно в логарифмической форме" },
        caption: { uk: "Рис. 19.5. Графік рівняння Моно у логарифмічній формі", en: "Fig. 19.5. Monod equation graph in logarithmic form", de: "Abb. 19.5. Diagramm der Monod-Gleichung in logarithmischer Form", ru: "Рис. 19.5. График уравнения Моно в логарифмической форме" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-19/fig-19-6.webp",
        alt: { uk: "Графік для визначення констант K_s та максимальної питомої швидкості росту", en: "Graph for determining K_s and the maximum specific growth rate", de: "Diagramm zur Bestimmung von K_s und der maximalen spezifischen Wachstumsrate", ru: "График для определения констант K_s и максимальной удельной скорости роста" },
        caption: { uk: "Рис. 19.6. Графік для визначення констант K_s та максимальної питомої швидкості росту", en: "Fig. 19.6. Graph for determining K_s and the maximum specific growth rate", de: "Abb. 19.6. Diagramm zur Bestimmung von K_s und der maximalen spezifischen Wachstumsrate", ru: "Рис. 19.6. График для определения констант K_s и максимальной удельной скорости роста" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-19/fig-19-7.webp",
        alt: { uk: "Залежність швидкості росту від концентрації інгібуючого продукту метаболізму", en: "Growth-rate dependence on the concentration of an inhibitory metabolic product", de: "Abhaengigkeit der Wachstumsrate von der Konzentration eines hemmenden Stoffwechselprodukts", ru: "Зависимость скорости роста от концентрации ингибирующего продукта метаболизма" },
        caption: { uk: "Рис. 19.7. Залежність швидкості росту від концентрації інгібуючого продукту метаболізму", en: "Fig. 19.7. Growth-rate dependence on the concentration of an inhibitory metabolic product", de: "Abb. 19.7. Abhaengigkeit der Wachstumsrate von der Konzentration eines hemmenden Stoffwechselprodukts", ru: "Рис. 19.7. Зависимость скорости роста от концентрации ингибирующего продукта метаболизма" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-19/fig-19-8.webp",
        alt: { uk: "Залежність концентрації субстрату та біомаси від часу процесу", en: "Substrate and biomass concentration versus process time", de: "Substrat- und Biomassekonzentration in Abhaengigkeit von der Prozesszeit", ru: "Зависимость концентрации субстрата и биомассы от времени процесса" },
        caption: { uk: "Рис. 19.8. Залежність концентрації субстрату та біомаси від часу процесу", en: "Fig. 19.8. Substrate and biomass concentration versus process time", de: "Abb. 19.8. Substrat- und Biomassekonzentration in Abhaengigkeit von der Prozesszeit", ru: "Рис. 19.8. Зависимость концентрации субстрата и биомассы от времени процесса" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-19/fig-19-9.webp",
        alt: { uk: "Залежність логарифму швидкості росту від концентрації біомаси", en: "Logarithm of growth rate versus biomass concentration", de: "Logarithmus der Wachstumsrate in Abhaengigkeit von der Biomassekonzentration", ru: "Зависимость логарифма скорости роста от концентрации биомассы" },
        caption: { uk: "Рис. 19.9. Залежність логарифму швидкості росту від концентрації біомаси", en: "Fig. 19.9. Logarithm of growth rate versus biomass concentration", de: "Abb. 19.9. Logarithmus der Wachstumsrate in Abhaengigkeit von der Biomassekonzentration", ru: "Рис. 19.9. Зависимость логарифма скорости роста от концентрации биомассы" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-19/fig-19-10.webp",
        alt: { uk: "Концентрація біомаси та продуктивність у періодичному і безперервному процесах", en: "Biomass concentration and productivity in batch and continuous processes", de: "Biomassekonzentration und Produktivitaet in Batch- und kontinuierlichen Prozessen", ru: "Концентрация биомассы и производительность в периодическом и непрерывном процессах" },
        caption: { uk: "Рис. 19.10. Концентрація біомаси та продуктивність у періодичному і безперервному процесах", en: "Fig. 19.10. Biomass concentration and productivity in batch and continuous processes", de: "Abb. 19.10. Biomassekonzentration und Produktivitaet in Batch- und kontinuierlichen Prozessen", ru: "Рис. 19.10. Концентрация биомассы и производительность в периодическом и непрерывном процессах" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-19/fig-19-11.webp",
        alt: { uk: "Схема культиватора безперервної дії", en: "Continuous cultivator scheme", de: "Schema eines kontinuierlichen Kultivators", ru: "Схема культиватора непрерывного действия" },
        caption: { uk: "Рис. 19.11. Схема культиватора безперервної дії", en: "Fig. 19.11. Continuous cultivator scheme", de: "Abb. 19.11. Schema eines kontinuierlichen Kultivators", ru: "Рис. 19.11. Схема культиватора непрерывного действия" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-19/fig-19-12.webp",
        alt: { uk: "Схема потоків при неперервному культивуванні в апараті з рециркуляцією", en: "Flow scheme for continuous cultivation in a recirculating apparatus", de: "Stromschema bei kontinuierlicher Kultivierung in einem Apparat mit Rueckfuehrung", ru: "Схема потоков при непрерывном культивировании в аппарате с рециркуляцией" },
        caption: { uk: "Рис. 19.12. Схема потоків при неперервному культивуванні в апараті з рециркуляцією", en: "Fig. 19.12. Flow scheme for continuous cultivation in a recirculating apparatus", de: "Abb. 19.12. Stromschema bei kontinuierlicher Kultivierung in einem Apparat mit Rueckfuehrung", ru: "Рис. 19.12. Схема потоков при непрерывном культивировании в аппарате с рециркуляцией" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-19/fig-19-13.webp",
        alt: { uk: "Схема потоків при безперервному багатоступінчастому культивуванні", en: "Flow scheme for continuous multistage cultivation", de: "Stromschema bei kontinuierlicher mehrstufiger Kultivierung", ru: "Схема потоков при непрерывном многоступенчатом культивировании" },
        caption: { uk: "Рис. 19.13. Схема потоків при безперервному багатоступінчастому культивуванні", en: "Fig. 19.13. Flow scheme for continuous multistage cultivation", de: "Abb. 19.13. Stromschema bei kontinuierlicher mehrstufiger Kultivierung", ru: "Рис. 19.13. Схема потоков при непрерывном многоступенчатом культивировании" },
      },
    ],
  },
  {
    chapter: 20,
    slug: "chapter-20-mixing-during-cultivation",
    titles: { uk: "Розділ 20. Перемішування при культивуванні", en: "Chapter 20. Mixing During Cultivation", de: "Kapitel 20. Mischen bei der Kultivierung", ru: "Раздел 20. Перемешивание при культивировании" },
    descriptions: { uk: "Аерувальні перемішуючі пристрої та масштабування процесів культивування.", en: "Aerating mixing devices and scale-up of cultivation processes.", de: "Belueftende Ruehrvorrichtungen und Massstabsuebertragung von Kultivierungsprozessen.", ru: "Аэрирующие перемешивающие устройства и масштабирование процессов культивирования." },
    sections: { uk: ["20.1. Аерувальні перемішуючі пристрої", "20.2. Масштабування при культивуванні"], en: ["20.1. Aerating mixing devices", "20.2. Scale-up during cultivation"], de: ["20.1. Belueftende Ruehrvorrichtungen", "20.2. Massstabsuebertragung bei der Kultivierung"], ru: ["20.1. Аэрирующие перемешивающие устройства", "20.2. Масштабирование при культивировании"] },
    concepts: { uk: ["аерація", "перемішування", "масштабування", "культиватор"], en: ["aeration", "mixing", "scale-up", "cultivator"], de: ["Belueftung", "Mischen", "Massstabsuebertragung", "Kultivator"], ru: ["аэрация", "перемешивание", "масштабирование", "культиватор"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-20/fig-20-1.webp",
        alt: { uk: "Схема потоків в апараті з відбивною перегородкою", en: "Flow scheme in an apparatus with baffles", de: "Stroemungsschema in einem Apparat mit Stromstoerern", ru: "Схема потоков в аппарате с отражательной перегородкой" },
        caption: { uk: "Рис. 20.1. Схема потоків в апараті з відбивною перегородкою при одноярусній та триярусній турбінних мішалках", en: "Fig. 20.1. Flow scheme in a baffled apparatus with one- and three-stage turbine agitators", de: "Abb. 20.1. Stroemungsschema in einem Apparat mit Stromstoerern bei ein- und dreistufigen Turbinenruehrern", ru: "Рис. 20.1. Схема потоков в аппарате с отражательной перегородкой при одноярусной и трехъярусной турбинных мешалках" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-20/fig-20-2.webp",
        alt: { uk: "Основні типи барботерів", en: "Main sparger types", de: "Grundtypen von Begasern", ru: "Основные типы барботеров" },
        caption: { uk: "Рис. 20.2. Основні типи барботерів: прямокутний, кільцевий, променевий", en: "Fig. 20.2. Main sparger types: rectangular, ring and radial", de: "Abb. 20.2. Grundtypen von Begasern: rechteckig, ringfoermig und radial", ru: "Рис. 20.2. Основные типы барботеров: прямоугольный, кольцевой, лучевой" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-20/fig-20-3.webp",
        alt: { uk: "Турбінні мішалки", en: "Turbine agitators", de: "Turbinenruehrer", ru: "Турбинные мешалки" },
        caption: { uk: "Рис. 20.3. Турбінні мішалки різних конструкцій", en: "Fig. 20.3. Turbine agitators of different designs", de: "Abb. 20.3. Turbinenruehrer unterschiedlicher Bauarten", ru: "Рис. 20.3. Турбинные мешалки различных конструкций" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-20/fig-20-4.webp",
        alt: { uk: "Поверхнева аерація", en: "Surface aeration", de: "Oberflaechenbelueftung", ru: "Поверхностная аэрация" },
        caption: { uk: "Рис. 20.4. Поверхнева аерація", en: "Fig. 20.4. Surface aeration", de: "Abb. 20.4. Oberflaechenbelueftung", ru: "Рис. 20.4. Поверхностная аэрация" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-20/fig-20-5.webp",
        alt: { uk: "Самовсмоктуюча мішалка", en: "Self-aspirating agitator", de: "Selbstansaugender Ruehrer", ru: "Самовсасывающая мешалка" },
        caption: { uk: "Рис. 20.5. Самовсмоктуюча мішалка", en: "Fig. 20.5. Self-aspirating agitator", de: "Abb. 20.5. Selbstansaugender Ruehrer", ru: "Рис. 20.5. Самовсасывающая мешалка" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-20/fig-20-6.webp",
        alt: { uk: "Культиватор Вальдгофа з напрямною трубою", en: "Waldhof cultivator with a draft tube", de: "Waldhof-Kultivator mit Leitrohr", ru: "Культиватор Вальдгофа с направляющей трубой" },
        caption: { uk: "Рис. 20.6. Культиватор Вальдгофа з напрямною трубою", en: "Fig. 20.6. Waldhof cultivator with a draft tube", de: "Abb. 20.6. Waldhof-Kultivator mit Leitrohr", ru: "Рис. 20.6. Культиватор Вальдгофа с направляющей трубой" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-20/fig-20-7.webp",
        alt: { uk: "Система аерації з дифузором", en: "Aeration system with a diffuser", de: "Belueftungssystem mit Diffusor", ru: "Система аэрации с диффузором" },
        caption: { uk: "Рис. 20.7. Система аерації з дифузором", en: "Fig. 20.7. Aeration system with a diffuser", de: "Abb. 20.7. Belueftungssystem mit Diffusor", ru: "Рис. 20.7. Система аэрации с диффузором" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-20/fig-20-8.webp",
        alt: { uk: "Залежність відносної концентрації стрептоміцину від сульфітного числа", en: "Relative streptomycin concentration versus sulfite number", de: "Relative Streptomycin-Konzentration in Abhaengigkeit von der Sulfitzahl", ru: "Зависимость относительной концентрации стрептомицина от сульфитного числа" },
        caption: { uk: "Рис. 20.8. Залежність відносної концентрації стрептоміцину від сульфітного числа", en: "Fig. 20.8. Relative streptomycin concentration versus sulfite number", de: "Abb. 20.8. Relative Streptomycin-Konzentration in Abhaengigkeit von der Sulfitzahl", ru: "Рис. 20.8. Зависимость относительной концентрации стрептомицина от сульфитного числа" },
      },
    ],
  },
  {
    chapter: 21,
    slug: "chapter-21-mass-transfer-and-air-sterilization",
    titles: { uk: "Розділ 21. Особливості масоперенесення під час культивування мікроорганізмів. Тонке очищення аерувального повітря", en: "Chapter 21. Mass Transfer During Microbial Cultivation. Fine Purification of Aeration Air", de: "Kapitel 21. Stoffuebertragung bei der Kultivierung von Mikroorganismen. Feinreinigung der Belueftungsluft", ru: "Раздел 21. Особенности массопереноса при культивировании микроорганизмов. Тонкая очистка аэрирующего воздуха" },
    descriptions: { uk: "Масопередача кисню, тепловий баланс культиватора, асептичні умови та стерилізація повітря.", en: "Oxygen mass transfer, heat balance of the cultivator, aseptic conditions and air sterilization.", de: "Sauerstoff-Stoffuebertragung, Waermebilanz des Kultivators, aseptische Bedingungen und Luftsterilisation.", ru: "Массопередача кислорода, тепловой баланс культиватора, асептические условия и стерилизация воздуха." },
    sections: {
      uk: ["21.1. Основне рівняння масопередачі по кисню", "21.2. Рівняння матеріального балансу культиватора за киснем", "21.3. Методи визначення концентрації розчиненого кисню", "21.4. Теплообмін при мікробіологічному культивуванні", "21.5. Забезпечення асептичних умов при культивуванні", "21.6. Способи тонкого очищення та стерилізації повітря"],
      en: ["21.1. Basic equation of oxygen mass transfer", "21.2. Oxygen material balance equation for a cultivator", "21.3. Methods for determining dissolved oxygen concentration", "21.4. Heat exchange during microbiological cultivation", "21.5. Ensuring aseptic conditions during cultivation", "21.6. Methods of fine air purification and sterilization"],
      de: ["21.1. Grundgleichung der Sauerstoff-Stoffuebertragung", "21.2. Sauerstoff-Stoffbilanzgleichung des Kultivators", "21.3. Methoden zur Bestimmung der Konzentration geloesten Sauerstoffs", "21.4. Waermeaustausch bei mikrobiologischer Kultivierung", "21.5. Sicherstellung aseptischer Bedingungen bei der Kultivierung", "21.6. Methoden der Feinreinigung und Sterilisation von Luft"],
      ru: ["21.1. Основное уравнение массопередачи по кислороду", "21.2. Уравнение материального баланса культиватора по кислороду", "21.3. Методы определения концентрации растворенного кислорода", "21.4. Теплообмен при микробиологическом культивировании", "21.5. Обеспечение асептических условий при культивировании", "21.6. Способы тонкой очистки и стерилизации воздуха"],
    },
    concepts: { uk: ["кисень", "масопередача", "асептика", "стерилізація повітря"], en: ["oxygen", "mass transfer", "asepsis", "air sterilization"], de: ["Sauerstoff", "Stoffuebertragung", "Asepsis", "Luftsterilisation"], ru: ["кислород", "массопередача", "асептика", "стерилизация воздуха"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-1.webp",
        alt: { uk: "Залежність питомої швидкості росту від концентрації розчиненого кисню", en: "Specific growth rate versus dissolved oxygen concentration", de: "Spezifische Wachstumsrate in Abhaengigkeit von der Konzentration geloesten Sauerstoffs", ru: "Зависимость удельной скорости роста от концентрации растворенного кислорода" },
        caption: { uk: "Рис. 21.1. Залежність питомої швидкості росту від концентрації розчиненого кисню", en: "Fig. 21.1. Specific growth rate versus dissolved oxygen concentration", de: "Abb. 21.1. Spezifische Wachstumsrate in Abhaengigkeit von der Konzentration geloesten Sauerstoffs", ru: "Рис. 21.1. Зависимость удельной скорости роста от концентрации растворенного кислорода" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-2.webp",
        alt: { uk: "Схема масопередачі крізь поверхню поділу газ - рідина", en: "Mass-transfer scheme across a gas-liquid interface", de: "Schema der Stoffuebertragung ueber die Gas-Fluessig-Grenzflaeche", ru: "Схема массопередачи через поверхность раздела газ - жидкость" },
        caption: { uk: "Рис. 21.2. Схема масопередачі крізь поверхню поділу газ - рідина", en: "Fig. 21.2. Mass-transfer scheme across a gas-liquid interface", de: "Abb. 21.2. Schema der Stoffuebertragung ueber die Gas-Fluessig-Grenzflaeche", ru: "Рис. 21.2. Схема массопередачи через поверхность раздела газ - жидкость" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-3.webp",
        alt: { uk: "Принципова схема датчика гальванічного типу", en: "Principle scheme of a galvanic sensor", de: "Prinzipschema eines galvanischen Sensors", ru: "Принципиальная схема датчика гальванического типа" },
        caption: { uk: "Рис. 21.3. Принципова схема датчика гальванічного типу", en: "Fig. 21.3. Principle scheme of a galvanic sensor", de: "Abb. 21.3. Prinzipschema eines galvanischen Sensors", ru: "Рис. 21.3. Принципиальная схема датчика гальванического типа" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-4.webp",
        alt: { uk: "Залежність питомого тепловиділення від часу при мікробіологічному синтезі", en: "Specific heat release versus time during microbiological synthesis", de: "Spezifische Waermefreisetzung in Abhaengigkeit von der Zeit bei mikrobiologischer Synthese", ru: "Зависимость удельного тепловыделения от времени при микробиологическом синтезе" },
        caption: { uk: "Рис. 21.4. Залежність питомого тепловиділення від часу при мікробіологічному синтезі", en: "Fig. 21.4. Specific heat release versus time during microbiological synthesis", de: "Abb. 21.4. Spezifische Waermefreisetzung in Abhaengigkeit von der Zeit bei mikrobiologischer Synthese", ru: "Рис. 21.4. Зависимость удельного тепловыделения от времени при микробиологическом синтезе" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-5.webp",
        alt: { uk: "Графік зміни температури процесу в часі", en: "Process temperature versus time", de: "Prozesstemperatur in Abhaengigkeit von der Zeit", ru: "График изменения температуры процесса во времени" },
        caption: { uk: "Рис. 21.5. Графік зміни температури процесу в часі", en: "Fig. 21.5. Process temperature versus time", de: "Abb. 21.5. Prozesstemperatur in Abhaengigkeit von der Zeit", ru: "Рис. 21.5. График изменения температуры процесса во времени" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-6.webp",
        alt: { uk: "Теплообмінні пристрої культиваторів", en: "Heat-exchange devices of cultivators", de: "Waermeaustauschvorrichtungen von Kultivatoren", ru: "Теплообменные устройства культиваторов" },
        caption: { uk: "Рис. 21.6. Теплообмінні пристрої культиваторів", en: "Fig. 21.6. Heat-exchange devices of cultivators", de: "Abb. 21.6. Waermeaustauschvorrichtungen von Kultivatoren", ru: "Рис. 21.6. Теплообменные устройства культиваторов" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-7.webp",
        alt: { uk: "Залежність смертельного часу від температури", en: "Lethal time versus temperature", de: "Abtoetungszeit in Abhaengigkeit von der Temperatur", ru: "Зависимость смертельного времени от температуры" },
        caption: { uk: "Рис. 21.7. Залежність смертельного часу від температури", en: "Fig. 21.7. Lethal time versus temperature", de: "Abb. 21.7. Abtoetungszeit in Abhaengigkeit von der Temperatur", ru: "Рис. 21.7. Зависимость смертельного времени от температуры" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-8.webp",
        alt: { uk: "Залежність ln(X) від часу", en: "ln(X) versus time", de: "ln(X) in Abhaengigkeit von der Zeit", ru: "Зависимость ln(X) от времени" },
        caption: { uk: "Рис. 21.8. Залежність ln(X) від часу", en: "Fig. 21.8. ln(X) versus time", de: "Abb. 21.8. ln(X) in Abhaengigkeit von der Zeit", ru: "Рис. 21.8. Зависимость ln(X) от времени" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-9.webp",
        alt: { uk: "Залежність ln(K_T) від 1/tau", en: "ln(K_T) versus 1/tau", de: "ln(K_T) in Abhaengigkeit von 1/tau", ru: "Зависимость ln(K_T) от 1/tau" },
        caption: { uk: "Рис. 21.9. Залежність ln(K_T) від 1/tau", en: "Fig. 21.9. ln(K_T) versus 1/tau", de: "Abb. 21.9. ln(K_T) in Abhaengigkeit von 1/tau", ru: "Рис. 21.9. Зависимость ln(K_T) от 1/tau" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-10.webp",
        alt: { uk: "Приклади відхилення від закону логарифмічної загибелі мікроорганізмів", en: "Examples of deviations from the law of logarithmic microbial death", de: "Beispiele fuer Abweichungen vom Gesetz des logarithmischen Absterbens von Mikroorganismen", ru: "Примеры отклонения от закона логарифмической гибели микроорганизмов" },
        caption: { uk: "Рис. 21.10. Приклади відхилення від закону логарифмічної загибелі мікроорганізмів", en: "Fig. 21.10. Examples of deviations from the law of logarithmic microbial death", de: "Abb. 21.10. Beispiele fuer Abweichungen vom Gesetz des logarithmischen Absterbens von Mikroorganismen", ru: "Рис. 21.10. Примеры отклонения от закона логарифмической гибели микроорганизмов" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-11.webp",
        alt: { uk: "Залежність температури від часу при циклічній і безперервній стерилізації", en: "Temperature versus time during cyclic and continuous sterilization", de: "Temperatur in Abhaengigkeit von der Zeit bei zyklischer und kontinuierlicher Sterilisation", ru: "Зависимость температуры от времени при циклической и непрерывной стерилизации" },
        caption: { uk: "Рис. 21.11. Залежність температури від часу при циклічній і безперервній стерилізації", en: "Fig. 21.11. Temperature versus time during cyclic and continuous sterilization", de: "Abb. 21.11. Temperatur in Abhaengigkeit von der Zeit bei zyklischer und kontinuierlicher Sterilisation", ru: "Рис. 21.11. Зависимость температуры от времени при циклической и непрерывной стерилизации" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-12.webp",
        alt: { uk: "Залежність константи термічної загибелі від часу при періодичній стерилізації", en: "Thermal-death constant versus time during batch sterilization", de: "Konstante des thermischen Absterbens in Abhaengigkeit von der Zeit bei Batch-Sterilisation", ru: "Зависимость константы термической гибели от времени при периодической стерилизации" },
        caption: { uk: "Рис. 21.12. Залежність константи термічної загибелі від часу при періодичній стерилізації", en: "Fig. 21.12. Thermal-death constant versus time during batch sterilization", de: "Abb. 21.12. Konstante des thermischen Absterbens in Abhaengigkeit von der Zeit bei Batch-Sterilisation", ru: "Рис. 21.12. Зависимость константы термической гибели от времени при периодической стерилизации" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-13.webp",
        alt: { uk: "Розподіл часу витримки в ультрависокотемпературній установці для стерилізації рідин", en: "Holding-time distribution in an ultra-high-temperature liquid sterilization unit", de: "Verteilung der Verweilzeit in einer UHT-Anlage zur Fluessigkeitssterilisation", ru: "Распределение времени выдержки в ультравысокотемпературной установке для стерилизации жидкостей" },
        caption: { uk: "Рис. 21.13. Розподіл часу витримки в ультрависокотемпературній установці для стерилізації рідин", en: "Fig. 21.13. Holding-time distribution in an ultra-high-temperature liquid sterilization unit", de: "Abb. 21.13. Verteilung der Verweilzeit in einer UHT-Anlage zur Fluessigkeitssterilisation", ru: "Рис. 21.13. Распределение времени выдержки в ультравысокотемпературной установке для стерилизации жидкостей" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-14.webp",
        alt: { uk: "Принципова схема установки для безперервної теплової стерилізації живильних середовищ", en: "Principle scheme of a unit for continuous thermal sterilization of nutrient media", de: "Prinzipschema einer Anlage zur kontinuierlichen thermischen Sterilisation von Naehrmedien", ru: "Принципиальная схема установки для непрерывной тепловой стерилизации питательных сред" },
        caption: { uk: "Рис. 21.14. Принципова схема установки для безперервної теплової стерилізації живильних середовищ", en: "Fig. 21.14. Principle scheme of a unit for continuous thermal sterilization of nutrient media", de: "Abb. 21.14. Prinzipschema einer Anlage zur kontinuierlichen thermischen Sterilisation von Naehrmedien", ru: "Рис. 21.14. Принципиальная схема установки для непрерывной тепловой стерилизации питательных сред" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-15.webp",
        alt: { uk: "Схема установки для безперервної теплової стерилізації живильних середовищ з рекуперацією тепла", en: "Unit scheme for continuous thermal sterilization of nutrient media with heat recovery", de: "Anlagenschema zur kontinuierlichen thermischen Sterilisation von Naehrmedien mit Waermerueckgewinnung", ru: "Схема установки для непрерывной тепловой стерилизации питательных сред с рекуперацией тепла" },
        caption: { uk: "Рис. 21.15. Схема установки для безперервної теплової стерилізації живильних середовищ з рекуперацією тепла", en: "Fig. 21.15. Unit scheme for continuous thermal sterilization of nutrient media with heat recovery", de: "Abb. 21.15. Anlagenschema zur kontinuierlichen thermischen Sterilisation von Naehrmedien mit Waermerueckgewinnung", ru: "Рис. 21.15. Схема установки для непрерывной тепловой стерилизации питательных сред с рекуперацией тепла" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-16.webp",
        alt: { uk: "Нагрівна колонка з тангенціальним підведенням пари", en: "Heating column with tangential steam supply", de: "Heizkolonne mit tangentialer Dampfzufuhr", ru: "Нагревательная колонка с тангенциальным подводом пара" },
        caption: { uk: "Рис. 21.16. Нагрівна колонка з тангенціальним підведенням пари", en: "Fig. 21.16. Heating column with tangential steam supply", de: "Abb. 21.16. Heizkolonne mit tangentialer Dampfzufuhr", ru: "Рис. 21.16. Нагревательная колонка с тангенциальным подводом пара" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-17.webp",
        alt: { uk: "Схема осадження під дією сил інерції", en: "Scheme of deposition under inertial forces", de: "Schema der Abscheidung durch Traegheitskraefte", ru: "Схема осаждения под действием сил инерции" },
        caption: { uk: "Рис. 21.17. Схема осадження під дією сил інерції", en: "Fig. 21.17. Scheme of deposition under inertial forces", de: "Abb. 21.17. Schema der Abscheidung durch Traegheitskraefte", ru: "Рис. 21.17. Схема осаждения под действием сил инерции" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-18.webp",
        alt: { uk: "Залежність коефіцієнта проскакування від діаметра частинок і швидкості аерозольного потоку", en: "Penetration coefficient versus particle diameter and aerosol-flow velocity", de: "Durchdringungskoeffizient in Abhaengigkeit vom Partikeldurchmesser und von der Aerosolstromgeschwindigkeit", ru: "Зависимость коэффициента проскока от диаметра частиц и скорости аэрозольного потока" },
        caption: { uk: "Рис. 21.18. Залежність коефіцієнта проскакування від діаметра частинок і швидкості аерозольного потоку", en: "Fig. 21.18. Penetration coefficient versus particle diameter and aerosol-flow velocity", de: "Abb. 21.18. Durchdringungskoeffizient in Abhaengigkeit vom Partikeldurchmesser und von der Aerosolstromgeschwindigkeit", ru: "Рис. 21.18. Зависимость коэффициента проскока от диаметра частиц и скорости аэрозольного потока" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-21/fig-21-19.webp",
        alt: { uk: "Основні типи фільтрів тонкого очищення і стерилізації повітря", en: "Main filter types for fine purification and sterilization of air", de: "Grundtypen von Filtern zur Feinreinigung und Sterilisation von Luft", ru: "Основные типы фильтров тонкой очистки и стерилизации воздуха" },
        caption: { uk: "Рис. 21.19. Основні типи фільтрів тонкого очищення і стерилізації повітря", en: "Fig. 21.19. Main filter types for fine purification and sterilization of air", de: "Abb. 21.19. Grundtypen von Filtern zur Feinreinigung und Sterilisation von Luft", ru: "Рис. 21.19. Основные типы фильтров тонкой очистки и стерилизации воздуха" },
      },
    ],
  },
  {
    chapter: 22,
    slug: "chapter-22-foaming-product-recovery-membranes",
    titles: { uk: "Розділ 22. Піноутворення і піногасіння. Мембранні методи розділення", en: "Chapter 22. Foaming and Antifoaming. Membrane Separation Methods", de: "Kapitel 22. Schaumbildung und Schaumdaempfung. Membrantrennverfahren", ru: "Раздел 22. Пенообразование и пеногашение. Мембранные методы разделения" },
    descriptions: { uk: "Піноутворення культуральних рідин, піногасіння, концентрування і виділення цільових продуктів.", en: "Foaming of culture liquids, antifoaming, concentration and recovery of target products.", de: "Schaumbildung von Kulturfluessigkeiten, Schaumdaempfung, Konzentrierung und Gewinnung von Zielprodukten.", ru: "Пенообразование культуральных жидкостей, пеногашение, концентрирование и выделение целевых продуктов." },
    sections: {
      uk: ["22.1. Методи дослідження піноутворюючої здатності культуральних рідин", "22.2. Методи піногасіння", "22.3. Концентрування та виділення цільових продуктів", "22.3.1. Седиментація", "22.3.2. Фільтрування", "22.3.3. Мембранні методи виділення", "22.3.4. Центрифугування", "22.5. Сушіння", "22.6. Механічні процеси і апарати"],
      en: ["22.1. Methods for studying foaming capacity of culture liquids", "22.2. Antifoaming methods", "22.3. Concentration and recovery of target products", "22.3.1. Sedimentation", "22.3.2. Filtration", "22.3.3. Membrane recovery methods", "22.3.4. Centrifugation", "22.5. Drying", "22.6. Mechanical processes and equipment"],
      de: ["22.1. Methoden zur Untersuchung der Schaumbildungsfaehigkeit von Kulturfluessigkeiten", "22.2. Schaumdaempfungsverfahren", "22.3. Konzentrierung und Gewinnung von Zielprodukten", "22.3.1. Sedimentation", "22.3.2. Filtration", "22.3.3. Membranverfahren zur Abtrennung", "22.3.4. Zentrifugation", "22.5. Trocknung", "22.6. Mechanische Prozesse und Apparate"],
      ru: ["22.1. Методы исследования пенообразующей способности культуральных жидкостей", "22.2. Методы пеногашения", "22.3. Концентрирование и выделение целевых продуктов", "22.3.1. Седиментация", "22.3.2. Фильтрование", "22.3.3. Мембранные методы выделения", "22.3.4. Центрифугирование", "22.5. Сушка", "22.6. Механические процессы и аппараты"],
    },
    concepts: { uk: ["піноутворення", "піногасіння", "мембранне виділення", "цільовий продукт"], en: ["foaming", "antifoaming", "membrane recovery", "target product"], de: ["Schaumbildung", "Schaumdaempfung", "Membranabtrennung", "Zielprodukt"], ru: ["пенообразование", "пеногашение", "мембранное выделение", "целевой продукт"] },
    figures: [
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-1.webp",
        alt: { uk: "Схема електродіалізатора", en: "Electrodialyzer scheme", de: "Schema eines Elektrodialysators", ru: "Схема электродиализатора" },
        caption: { uk: "Рис. 22.1. Схема електродіалізатора", en: "Fig. 22.1. Electrodialyzer scheme", de: "Abb. 22.1. Schema eines Elektrodialysators", ru: "Рис. 22.1. Схема электродиализатора" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-2.webp",
        alt: { uk: "Схема осмотичних процесів", en: "Scheme of osmotic processes", de: "Schema osmotischer Prozesse", ru: "Схема осмотических процессов" },
        caption: { uk: "Рис. 22.2. Схема осмотичних процесів: а - осмос; б - рівновага", en: "Fig. 22.2. Scheme of osmotic processes: a - osmosis; b - equilibrium", de: "Abb. 22.2. Schema osmotischer Prozesse: a - Osmose; b - Gleichgewicht", ru: "Рис. 22.2. Схема осмотических процессов: а - осмос; б - равновесие" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-3.webp",
        alt: { uk: "Схема апарата пластинчастого типу", en: "Scheme of a plate-type apparatus", de: "Schema eines Plattenapparates", ru: "Схема аппарата пластинчатого типа" },
        caption: { uk: "Рис. 22.3. Схема апарата пластинчастого типу", en: "Fig. 22.3. Scheme of a plate-type apparatus", de: "Abb. 22.3. Schema eines Plattenapparates", ru: "Рис. 22.3. Схема аппарата пластинчатого типа" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-4.webp",
        alt: { uk: "Схема апарата з трубчастим елементом", en: "Scheme of an apparatus with a tubular element", de: "Schema eines Apparates mit Rohrelement", ru: "Схема аппарата с трубчатым элементом" },
        caption: { uk: "Рис. 22.4. Схема апарата з трубчастим елементом", en: "Fig. 22.4. Scheme of an apparatus with a tubular element", de: "Abb. 22.4. Schema eines Apparates mit Rohrelement", ru: "Рис. 22.4. Схема аппарата с трубчатым элементом" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-5.webp",
        alt: { uk: "Схема апарата з фільтрувальними елементами рулонного типу", en: "Scheme of an apparatus with roll-type filtering elements", de: "Schema eines Apparates mit Filterelementen in Rollenbauart", ru: "Схема аппарата с фильтрующими элементами рулонного типа" },
        caption: { uk: "Рис. 22.5. Схема апарата з фільтрувальними елементами рулонного типу", en: "Fig. 22.5. Scheme of an apparatus with roll-type filtering elements", de: "Abb. 22.5. Schema eines Apparates mit Filterelementen in Rollenbauart", ru: "Рис. 22.5. Схема аппарата с фильтрующими элементами рулонного типа" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-6.webp",
        alt: { uk: "Схема роботи тарілчастого барабана сепаратора", en: "Operating scheme of a separator disc bowl", de: "Arbeitsschema einer Tellerseparator-Trommel", ru: "Схема работы тарельчатого барабана сепаратора" },
        caption: { uk: "Рис. 22.6. Схема роботи тарілчастого барабана сепаратора при розділенні емульсій і суспензій", en: "Fig. 22.6. Operating scheme of a separator disc bowl for separating emulsions and suspensions", de: "Abb. 22.6. Arbeitsschema einer Tellerseparator-Trommel zur Trennung von Emulsionen und Suspensionen", ru: "Рис. 22.6. Схема работы тарельчатого барабана сепаратора при разделении эмульсий и суспензий" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-7.webp",
        alt: { uk: "Пневматична сушарка конструкції МІТХТ ім. Ломоносова", en: "Pneumatic dryer designed by MITHT named after Lomonosov", de: "Pneumatischer Trockner der MITHT-Konstruktion nach Lomonossow", ru: "Пневматическая сушилка конструкции МИТХТ им. Ломоносова" },
        caption: { uk: "Рис. 22.7. Пневматична сушарка конструкції МІТХТ ім. Ломоносова", en: "Fig. 22.7. Pneumatic dryer designed by MITHT named after Lomonosov", de: "Abb. 22.7. Pneumatischer Trockner der MITHT-Konstruktion nach Lomonossow", ru: "Рис. 22.7. Пневматическая сушилка конструкции МИТХТ им. Ломоносова" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-8.webp",
        alt: { uk: "Аерофонтанна сушарка", en: "Aero-fountain dryer", de: "Aerofontain-Trockner", ru: "Аэрофонтанная сушилка" },
        caption: { uk: "Рис. 22.8. Аерофонтанна сушарка", en: "Fig. 22.8. Aero-fountain dryer", de: "Abb. 22.8. Aerofontain-Trockner", ru: "Рис. 22.8. Аэрофонтанная сушилка" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-9.webp",
        alt: { uk: "Сушарка з киплячим шаром", en: "Fluidized-bed dryer", de: "Wirbelschichttrockner", ru: "Сушилка с кипящим слоем" },
        caption: { uk: "Рис. 22.9. Сушарка з киплячим шаром", en: "Fig. 22.9. Fluidized-bed dryer", de: "Abb. 22.9. Wirbelschichttrockner", ru: "Рис. 22.9. Сушилка с кипящим слоем" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-10.webp",
        alt: { uk: "Криві сушіння і швидкості сушіння", en: "Drying and drying-rate curves", de: "Trocknungs- und Trocknungsgeschwindigkeitskurven", ru: "Кривые сушки и скорости сушки" },
        caption: { uk: "Рис. 22.10. Криві сушіння і швидкості сушіння", en: "Fig. 22.10. Drying and drying-rate curves", de: "Abb. 22.10. Trocknungs- und Trocknungsgeschwindigkeitskurven", ru: "Рис. 22.10. Кривые сушки и скорости сушки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-11.webp",
        alt: { uk: "Графік зміни температури частинки при розпилювальному сушінні", en: "Particle temperature during spray drying", de: "Temperaturaenderung eines Partikels bei der Spruehtrocknung", ru: "График изменения температуры частицы при распылительной сушке" },
        caption: { uk: "Рис. 22.11. Графік зміни температури частинки при розпилювальному сушінні", en: "Fig. 22.11. Particle temperature during spray drying", de: "Abb. 22.11. Temperaturaenderung eines Partikels bei der Spruehtrocknung", ru: "Рис. 22.11. График изменения температуры частицы при распылительной сушке" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-12.webp",
        alt: { uk: "Схема розпилювальної сушарки з конічним днищем і верхнім теплопідведенням", en: "Scheme of a spray dryer with a conical bottom and top heat supply", de: "Schema eines Spruehtrockners mit konischem Boden und oberer Waermezufuhr", ru: "Схема распылительной сушилки с коническим днищем и верхним теплоподводом" },
        caption: { uk: "Рис. 22.12. Схема розпилювальної сушарки з конічним днищем і верхнім теплопідведенням", en: "Fig. 22.12. Scheme of a spray dryer with a conical bottom and top heat supply", de: "Abb. 22.12. Schema eines Spruehtrockners mit konischem Boden und oberer Waermezufuhr", ru: "Рис. 22.12. Схема распылительной сушилки с коническим днищем и верхним теплоподводом" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-13.webp",
        alt: { uk: "Схема фізичних явищ у клітинах при заморожуванні продукту", en: "Scheme of physical phenomena in cells during product freezing", de: "Schema physikalischer Vorgaenge in Zellen beim Einfrieren des Produkts", ru: "Схема физических явлений в клетках при замораживании продукта" },
        caption: { uk: "Рис. 22.13. Схема фізичних явищ, що відбуваються в клітинах при заморожуванні продукту", en: "Fig. 22.13. Scheme of physical phenomena in cells during product freezing", de: "Abb. 22.13. Schema physikalischer Vorgaenge in Zellen beim Einfrieren des Produkts", ru: "Рис. 22.13. Схема физических явлений, происходящих в клетках при замораживании продукта" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-14.webp",
        alt: { uk: "Залежність виживання дріжджів при заморожуванні від швидкості охолоджування", en: "Yeast survival during freezing versus cooling rate", de: "Ueberleben von Hefe beim Einfrieren in Abhaengigkeit von der Abkuehlgeschwindigkeit", ru: "Зависимость выживания дрожжей при замораживании от скорости охлаждения" },
        caption: { uk: "Рис. 22.14. Залежність виживання дріжджів при заморожуванні від швидкості охолоджування", en: "Fig. 22.14. Yeast survival during freezing versus cooling rate", de: "Abb. 22.14. Ueberleben von Hefe beim Einfrieren in Abhaengigkeit von der Abkuehlgeschwindigkeit", ru: "Рис. 22.14. Зависимость выживания дрожжей при замораживании от скорости охлаждения" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-15.webp",
        alt: { uk: "Схема вакуум-сублімаційної установки", en: "Scheme of a vacuum sublimation unit", de: "Schema einer Vakuum-Sublimationsanlage", ru: "Схема вакуум-сублимационной установки" },
        caption: { uk: "Рис. 22.15. Схема вакуум-сублімаційної установки", en: "Fig. 22.15. Scheme of a vacuum sublimation unit", de: "Abb. 22.15. Schema einer Vakuum-Sublimationsanlage", ru: "Рис. 22.15. Схема вакуум-сублимационной установки" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-16.webp",
        alt: { uk: "Схеми теплопередачі та розподілення температур при сушінні сублімацією", en: "Heat-transfer and temperature-distribution schemes during sublimation drying", de: "Waermeuebertragungs- und Temperaturverteilungsschemata bei der Sublimationstrocknung", ru: "Схемы теплопередачи и распределения температур при сушке сублимацией" },
        caption: { uk: "Рис. 22.16. Схеми теплопередачі та розподілення температур при сушінні сублімацією", en: "Fig. 22.16. Heat-transfer and temperature-distribution schemes during sublimation drying", de: "Abb. 22.16. Waermeuebertragungs- und Temperaturverteilungsschemata bei der Sublimationstrocknung", ru: "Рис. 22.16. Схемы теплопередачи и распределения температур при сушке сублимацией" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-17.webp",
        alt: { uk: "Схема сублімаційної сушильної установки безперервної дії", en: "Scheme of a continuous sublimation drying unit", de: "Schema einer kontinuierlichen Sublimationstrocknungsanlage", ru: "Схема сублимационной сушильной установки непрерывного действия" },
        caption: { uk: "Рис. 22.17. Схема сублімаційної сушильної установки безперервної дії", en: "Fig. 22.17. Scheme of a continuous sublimation drying unit", de: "Abb. 22.17. Schema einer kontinuierlichen Sublimationstrocknungsanlage", ru: "Рис. 22.17. Схема сублимационной сушильной установки непрерывного действия" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-18.webp",
        alt: { uk: "Схеми конструкцій струминних млинів", en: "Design schemes of jet mills", de: "Konstruktionsschemata von Strahlmuehlen", ru: "Схемы конструкций струйных мельниц" },
        caption: { uk: "Рис. 22.18. Схеми конструкцій струминних млинів", en: "Fig. 22.18. Design schemes of jet mills", de: "Abb. 22.18. Konstruktionsschemata von Strahlmuehlen", ru: "Рис. 22.18. Схемы конструкций струйных мельниц" },
      },
      {
        src: "/images/courses/bioprocess-engineering/chapter-22/fig-22-19.webp",
        alt: { uk: "Схема вихрового гранулятора фірми Аероматик", en: "Scheme of the Aeromatic vortex granulator", de: "Schema des Wirbelgranulators der Firma Aeromatic", ru: "Схема вихревого гранулятора фирмы Аэроматик" },
        caption: { uk: "Рис. 22.19. Схема вихрового гранулятора фірми Аероматик", en: "Fig. 22.19. Scheme of the Aeromatic vortex granulator", de: "Abb. 22.19. Schema des Wirbelgranulators der Firma Aeromatic", ru: "Рис. 22.19. Схема вихревого гранулятора фирмы Аэроматик" },
      },
    ],
  },
];

function learningItems(chapter, locale) {
  const [a, b, c, d] = chapter.concepts[locale];
  const templates = {
    uk: [
      `пояснювати роль поняття «${a}» у межах розділу;`,
      `пов'язувати «${b}» з апаратурним оформленням біотехнологічного виробництва;`,
      `розрізняти основні параметри, що впливають на «${c}»;`,
      `обґрунтовувати вибір або оцінку процесу через «${d}».`,
    ],
    en: [
      `explain the role of \"${a}\" within the chapter;`,
      `connect \"${b}\" with equipment design in biotechnological production;`,
      `distinguish the main parameters that affect \"${c}\";`,
      `justify process selection or evaluation through \"${d}\".`,
    ],
    de: [
      `die Rolle von \"${a}\" im Kapitel erklaeren;`,
      `\"${b}\" mit der apparativen Gestaltung biotechnologischer Produktion verbinden;`,
      `wichtige Einflussgroessen fuer \"${c}\" unterscheiden;`,
      `die Auswahl oder Bewertung des Prozesses ueber \"${d}\" begruenden.`,
    ],
    ru: [
      `объяснять роль понятия «${a}» в пределах раздела;`,
      `связывать «${b}» с аппаратурным оформлением биотехнологического производства;`,
      `различать основные параметры, влияющие на «${c}»;`,
      `обосновывать выбор или оценку процесса через «${d}».`,
    ],
  };
  return templates[locale];
}

function renderLectureBody(chapter, locale) {
  const title = chapter.titles[locale];
  const sections = chapter.sections[locale];
  const concepts = chapter.concepts[locale];
  const [primary, model, parameter, equipment] = concepts;

  const intro = {
    uk: `Цей конспект розкриває розділ не як перелік термінів, а як інженерну логіку: від фізичного змісту процесу до параметрів, за якими обирають, розраховують і перевіряють апарат у біотехнологічному виробництві.`,
    en: `This lecture note treats the chapter as engineering logic rather than a list of terms: from the physical meaning of the process to the parameters used to select, calculate, and check equipment in biotechnological production.`,
    de: `Diese Vorlesungsnotiz behandelt das Kapitel als ingenieurtechnische Logik und nicht nur als Begriffsliste: vom physikalischen Sinn des Prozesses bis zu den Parametern fuer Auswahl, Berechnung und Pruefung des Apparats in der biotechnologischen Produktion.`,
    ru: `Этот конспект раскрывает раздел не как перечень терминов, а как инженерную логику: от физического смысла процесса до параметров, по которым выбирают, рассчитывают и проверяют аппарат в биотехнологическом производстве.`,
  }[locale];

  const labels = {
    uk: {
      heading: "Лекційний конспект",
      place: "Місце теми в розділі",
      engineering: "Інженерний зміст",
      bio: "Біотехнологічний акцент",
      checkpoints: "На що звернути увагу",
      detail: (concept, nextConcept) =>
        `У цій частині окремо фіксується поняття «${concept}» і його зв'язок із «${nextConcept}», бо саме такі зв'язки переходять у формули, графіки, критерії подібності та конструктивні рішення.`,
      points: [
        (section) => `${section} задає мову опису процесу у межах теми «${title}». Тут важливо не запам'ятати окреме означення, а зрозуміти, яку величину або явище воно дозволяє оцінити.`,
        () => `У розрахунках цей матеріал пов'язує «${primary}», «${model}» і «${parameter}»: спочатку визначають рушійну силу або режим, далі встановлюють зв'язок між параметрами, після цього переходять до вибору «${equipment}» чи перевірки його роботи.`,
        () => `Для біотехнологічних виробництв ключовим є м'яке поводження з середовищем: культуральні рідини, суспензії, ферментаційні середовища й напівпродукти часто чутливі до температури, зсуву, забруднення та втрати стерильності.`,
      ],
      bullets: [
        () => `які величини потрібно виміряти або задати перед розрахунком;`,
        () => `як зміна режиму впливає на продукт, апарат і енергоспоживання;`,
        () => `де в апаратурній схемі проявляється «${equipment}» і які обмеження він накладає.`,
      ],
    },
    en: {
      heading: "Lecture Notes",
      place: "Place of the topic in the chapter",
      engineering: "Engineering meaning",
      bio: "Biotechnological emphasis",
      checkpoints: "What to watch",
      detail: (concept, nextConcept) =>
        `This part highlights "${concept}" and its relation to "${nextConcept}", because such links become formulas, diagrams, similarity criteria, and design decisions.`,
      points: [
        (section) => `${section} gives the language for describing the process within "${title}". The important task is not to memorize a separate definition, but to understand which quantity or phenomenon it helps to evaluate.`,
        () => `In calculations, the material connects "${primary}", "${model}", and "${parameter}": first the driving force or regime is identified, then the relation between parameters is established, and only after that the "${equipment}" is selected or checked.`,
        () => `For biotechnological production, gentle handling of the medium is essential: culture liquids, suspensions, fermentation media, and intermediates are often sensitive to temperature, shear, contamination, and loss of sterility.`,
      ],
      bullets: [
        () => `which quantities must be measured or specified before calculation;`,
        () => `how the operating regime affects the product, equipment, and energy demand;`,
        () => `where "${equipment}" appears in the equipment scheme and what limits it imposes.`,
      ],
    },
    de: {
      heading: "Vorlesungsskript",
      place: "Stellung des Themas im Kapitel",
      engineering: "Ingenieurtechnische Bedeutung",
      bio: "Biotechnologischer Schwerpunkt",
      checkpoints: "Worauf zu achten ist",
      detail: (concept, nextConcept) =>
        `Dieser Teil hebt "${concept}" und den Zusammenhang mit "${nextConcept}" hervor, weil solche Beziehungen in Formeln, Diagramme, Aehnlichkeitskriterien und konstruktive Entscheidungen uebergehen.`,
      points: [
        (section) => `${section} liefert die Sprache zur Beschreibung des Prozesses im Thema "${title}". Wichtig ist nicht das isolierte Auswendiglernen, sondern das Verstehen, welche Groesse oder welches Phaenomen damit bewertet wird.`,
        () => `In Berechnungen verbindet dieses Material "${primary}", "${model}" und "${parameter}": zuerst werden Triebkraft oder Betriebsregime bestimmt, danach die Beziehung zwischen den Parametern, und anschliessend die Auswahl oder Kontrolle von "${equipment}".`,
        () => `In biotechnologischen Produktionen ist eine schonende Behandlung des Mediums entscheidend: Kulturfluessigkeiten, Suspensionen, Fermentationsmedien und Zwischenprodukte reagieren oft empfindlich auf Temperatur, Scherung, Verunreinigung und Verlust der Sterilitaet.`,
      ],
      bullets: [
        () => `welche Groessen vor der Berechnung gemessen oder festgelegt werden muessen;`,
        () => `wie das Betriebsregime Produkt, Apparat und Energiebedarf beeinflusst;`,
        () => `wo "${equipment}" im Apparateschema erscheint und welche Grenzen dadurch entstehen.`,
      ],
    },
    ru: {
      heading: "Конспект лекции",
      place: "Место темы в разделе",
      engineering: "Инженерный смысл",
      bio: "Биотехнологический акцент",
      checkpoints: "На что обратить внимание",
      detail: (concept, nextConcept) =>
        `В этой части отдельно фиксируется понятие «${concept}» и его связь с «${nextConcept}», потому что такие связи переходят в формулы, графики, критерии подобия и конструктивные решения.`,
      points: [
        (section) => `${section} задаёт язык описания процесса в теме «${title}». Важно не просто запомнить отдельное определение, а понять, какую величину или явление оно позволяет оценить.`,
        () => `В расчётах этот материал связывает «${primary}», «${model}» и «${parameter}»: сначала определяют движущую силу или режим, затем устанавливают связь между параметрами, после этого переходят к выбору «${equipment}» или проверке его работы.`,
        () => `Для биотехнологических производств принципиально щадящее обращение со средой: культуральные жидкости, суспензии, ферментационные среды и полупродукты часто чувствительны к температуре, сдвигу, загрязнению и потере стерильности.`,
      ],
      bullets: [
        () => `какие величины нужно измерить или задать перед расчётом;`,
        () => `как изменение режима влияет на продукт, аппарат и энергопотребление;`,
        () => `где в аппаратурной схеме проявляется «${equipment}» и какие ограничения он накладывает.`,
      ],
    },
  }[locale];

  const sectionBlocks = sections
    .map((section, index) => {
      const concept = concepts[index % concepts.length];
      const nextConcept = concepts[(index + 1) % concepts.length];
      return `### ${section}

**${labels.place}.** ${labels.points[0](section)}

**${labels.engineering}.** ${labels.points[1]()} ${labels.detail(concept, nextConcept)}

**${labels.bio}.** ${labels.points[2]()}

**${labels.checkpoints}:**

${labels.bullets.map((item) => `- ${item()}`).join("\n")}`;
    })
    .join("\n\n");

  return `## ${labels.heading}

${intro}

${sectionBlocks}`;
}

function testItems(chapter, locale) {
  const concepts = chapter.concepts[locale];
  const sections = chapter.sections[locale];
  const labels = {
    uk: {
      conceptRole: "Яке поняття найкраще характеризує зміст розділу?",
      sectionTopic: "Який підрозділ безпосередньо входить до структури розділу за підручником?",
      analysisBasis: "На яке поняття передусім спирається інженерний аналіз цього розділу?",
      equipmentFocus: "Що найтісніше пов'язує теорію процесу з апаратурним оформленням?",
      controlFocus: "Який параметр або явище доцільно контролювати під час аналізу процесу?",
      startTopic: "З якої теми починається розділ за структурою підручника?",
      finalTopic: "Яка тема завершує структуру розділу за підручником?",
      compare: "Яку пару понять доцільно зіставляти під час самоперевірки?",
      practical: "Що найкраще підходить для практичного обґрунтування вибору процесу?",
      figureFocus: "Який об'єкт подано як наочний рисунок у цьому розділі?",
      misleading: ["опис апарата без режимних параметрів", "розрахунок без визначення рушійної сили", "висновок без матеріального або енергетичного балансу"],
    },
    en: {
      conceptRole: "Which concept best characterizes the chapter content?",
      sectionTopic: "Which subsection directly belongs to the textbook structure of this chapter?",
      analysisBasis: "Which concept should engineering analysis of this chapter rely on first?",
      equipmentFocus: "What most closely connects process theory with equipment design?",
      controlFocus: "Which parameter or phenomenon should be controlled during process analysis?",
      startTopic: "Which topic opens the chapter in the textbook structure?",
      finalTopic: "Which topic closes the chapter in the textbook structure?",
      compare: "Which pair of concepts is useful to compare during self-check?",
      practical: "What best supports practical justification of process selection?",
      figureFocus: "Which object is presented as a visual figure in this chapter?",
      misleading: ["equipment description without operating parameters", "calculation without defining the driving force", "conclusion without a material or energy balance"],
    },
    de: {
      conceptRole: "Welcher Begriff charakterisiert den Inhalt dieses Kapitels am besten?",
      sectionTopic: "Welcher Unterabschnitt gehoert direkt zur Lehrbuchstruktur dieses Kapitels?",
      analysisBasis: "Auf welchen Begriff soll sich die ingenieurtechnische Analyse zuerst stuetzen?",
      equipmentFocus: "Was verbindet Prozesstheorie am deutlichsten mit der Apparategestaltung?",
      controlFocus: "Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?",
      startTopic: "Mit welchem Thema beginnt das Kapitel in der Lehrbuchstruktur?",
      finalTopic: "Welches Thema schliesst die Struktur des Kapitels ab?",
      compare: "Welches Begriffspaar eignet sich fuer den Selbsttest?",
      practical: "Was eignet sich am besten zur praktischen Begruendung der Prozessauswahl?",
      figureFocus: "Welches Objekt wird in diesem Kapitel als Abbildung dargestellt?",
      misleading: ["Apparatebeschreibung ohne Betriebsparameter", "Berechnung ohne Festlegung der Triebkraft", "Schlussfolgerung ohne Stoff- oder Energiebilanz"],
    },
    ru: {
      conceptRole: "Какое понятие лучше всего характеризует содержание раздела?",
      sectionTopic: "Какой подраздел непосредственно входит в структуру раздела по учебнику?",
      analysisBasis: "На какое понятие прежде всего опирается инженерный анализ этого раздела?",
      equipmentFocus: "Что теснее всего связывает теорию процесса с аппаратурным оформлением?",
      controlFocus: "Какой параметр или явление целесообразно контролировать при анализе процесса?",
      startTopic: "С какой темы начинается раздел в структуре учебника?",
      finalTopic: "Какая тема завершает структуру раздела по учебнику?",
      compare: "Какую пару понятий целесообразно сопоставлять при самопроверке?",
      practical: "Что лучше всего подходит для практического обоснования выбора процесса?",
      figureFocus: "Какой объект представлен в этом разделе как наглядный рисунок?",
      misleading: ["описание аппарата без режимных параметров", "расчет без определения движущей силы", "вывод без материального или энергетического баланса"],
    },
  }[locale];

  const pair = (a, b) => `${a} / ${b}`;
  const candidates = [...sections, ...concepts, ...labels.misleading];
  const figureLabels = (chapter.figures || []).map((figure) => figure.alt[locale]).filter(Boolean);
  const pickDistractors = (correct, preferred = candidates) => {
    const unique = [];
    const addOption = (option) => {
      if (typeof option !== "string") return;
      if (option === correct || unique.includes(option)) return;
      if (unique.length < 3) unique.push(option);
    };
    for (const option of preferred) addOption(option);
    for (const option of candidates) addOption(option);
    return unique.slice(0, 3);
  };

  const makeItem = (q, correct, index, preferred) => {
    const correctIndex = (chapter.chapter + index) % 4;
    const options = pickDistractors(correct, preferred).slice(0, 3);
    options.splice(correctIndex, 0, correct);
    return { q, options: options.slice(0, 4), a: String.fromCharCode(65 + correctIndex) };
  };

  return [
    makeItem(labels.conceptRole, concepts[0], 0, concepts),
    makeItem(labels.sectionTopic, sections[0], 1, sections),
    makeItem(labels.analysisBasis, concepts[1], 2, concepts),
    makeItem(labels.equipmentFocus, concepts[3], 3, concepts),
    makeItem(labels.controlFocus, concepts[2], 4, concepts),
    makeItem(labels.startTopic, sections[0], 5, sections),
    makeItem(labels.sectionTopic, sections[Math.min(1, sections.length - 1)], 6, sections),
    makeItem(labels.finalTopic, sections[sections.length - 1], 7, sections),
    makeItem(labels.compare, pair(concepts[0], concepts[1]), 8, [pair(concepts[2], concepts[3]), pair(concepts[0], concepts[2]), pair(concepts[1], concepts[3]), ...candidates]),
    makeItem(labels.practical, concepts[3], 9, concepts),
    makeItem(labels.controlFocus, concepts[1], 10, concepts),
    figureLabels.length
      ? makeItem(labels.figureFocus, figureLabels[0], 11, [...concepts, ...sections, ...labels.misleading])
      : makeItem(labels.analysisBasis, concepts[0], 11, concepts),
  ];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderTestBlock(tests, localUi, locale, chapter) {
  const questions = tests
    .map((item, index) => {
      const correctIndex = item.a.charCodeAt(0) - 65;
      const options = item.options
        .map((option, optIdx) => {
          const letter = String.fromCharCode(65 + optIdx);
          return `<label class="course-test-option">
  <input type="radio" name="course-test-${chapter.chapter}-${index}" value="${optIdx}" data-correct="${optIdx === correctIndex ? "1" : "0"}" />
  <span class="course-test-letter">${letter}</span>
  <span>${escapeHtml(option)}</span>
</label>`;
        })
        .join("\n");

      return `<fieldset class="course-test-item" data-course-test-item>
<legend>${index + 1}. ${escapeHtml(item.q)}</legend>
<div class="course-test-options" data-course-test-options>
${options}
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>`;
    })
    .join("\n\n");

  const answerItems = tests
    .map((item, index) => `<li>${escapeHtml(localUi.qPrefix)} ${index + 1}: ${escapeHtml(localUi.correct)} - ${escapeHtml(item.a)}</li>`)
    .join("\n");

  return `<section
  class="course-self-test"
  data-course-self-test
  data-locale="${locale}"
  data-course="${courseSlug}"
  data-chapter="${chapter.slug}"
  data-result-label="${escapeHtml(localUi.result)}"
  data-best-label="${escapeHtml(localUi.best)}"
  data-choose-label="${escapeHtml(localUi.chooseAnswer)}"
  data-correct-label="${escapeHtml(localUi.correctFeedback)}"
  data-incorrect-label="${escapeHtml(localUi.incorrectFeedback)}"
>
<form data-course-test-form>
${questions}
<div class="course-test-actions">
  <button type="submit" class="course-test-primary">${escapeHtml(localUi.check)}</button>
  <button type="button" class="course-test-secondary" data-course-test-reset>${escapeHtml(localUi.reset)}</button>
</div>
</form>
<p class="course-test-status" aria-live="polite">
  <strong data-course-test-result>${escapeHtml(localUi.result)}: 0/${tests.length}</strong>
  <span data-course-test-best>${escapeHtml(localUi.best)}: -</span>
</p>
<details class="course-test-answers">
<summary>${escapeHtml(localUi.answers)}</summary>
<ol>
${answerItems}
</ol>
</details>
</section>`;
}

function renderChapter(chapter, locale) {
  const localUi = ui[locale];
  const title = chapter.titles[locale];
  const description = chapter.descriptions[locale];
  const sections = chapter.sections[locale];
  const learning = learningItems(chapter, locale);
  const lectureBody = renderLectureBody(chapter, locale);
  const tests = testItems(chapter, locale);
  const testBlock = renderTestBlock(tests, localUi, locale, chapter);
  const figures = chapter.figures || [];
  const figureBlock = figures.length
    ? `\n\n## ${localUi.figures}\n\n${figures.map((figure) => `![${figure.alt[locale]}](${figure.src})\n*${figure.caption[locale]}*`).join("\n\n")}`
    : "";

  return `---
title: "${title}"
course: "${courseSlug}"
course_title: "${courseTitles[locale]}"
chapter: ${chapter.chapter}
description: "${description}"
updated: "${updated}"
---

## ${localUi.source}

${sourceLabels[locale]}

${localUi.basedOn}

## ${localUi.outline}

${sections.map((item) => `- ${item}`).join("\n")}

${lectureBody}${figureBlock}

## ${localUi.learning}

${learning.map((item) => `- ${item}`).join("\n")}

## ${localUi.test}

${testBlock}

## ${localUi.next}

${localUi.nextText}
`;
}

let created = 0;
let preserved = 0;
let overwritten = 0;
const overwrite = process.argv.includes("--overwrite");

for (const locale of ["uk", "en", "de", "ru"]) {
  for (const chapter of chapters) {
    const filePath = join(process.cwd(), "src", "content", "courses", locale, courseSlug, `${chapter.slug}.md`);
    try {
      await access(filePath);
      if (!overwrite) {
        preserved += 1;
        continue;
      }
      overwritten += 1;
    } catch {
      // Create only missing pages; existing course pages may contain hand-curated figures.
    }
    await mkdir(dirname(filePath), { recursive: true });
    await writeFile(filePath, renderChapter(chapter, locale), "utf8");
    if (!overwrite) created += 1;
  }
}

console.log(`Course pages for ${courseSlug}: ${created} created, ${overwritten} overwritten, ${preserved} preserved.`);
