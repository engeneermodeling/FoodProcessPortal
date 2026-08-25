import type { Locale } from "../config";

export interface TopicQuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
}

type TopicQuizBank = Record<string, Record<Locale, TopicQuizQuestion[]>>;

const fallbackLocale: Locale = "uk";

export const topicQuizUi: Record<
  Locale,
  {
    title: string;
    description: string;
    shuffle: string;
    check: string;
    reset: string;
    result: string;
    best: string;
    correct: string;
    incorrect: string;
    chooseAnswer: string;
    explanation: string;
  }
> = {
  uk: {
    title: "Міні-тест за темою",
    description:
      "Оберіть одну правильну відповідь у кожному питанні. Питання і варіанти перемішуються, а найкращий результат зберігається в браузері.",
    shuffle: "Новий варіант",
    check: "Перевірити відповіді",
    reset: "Очистити результат",
    result: "Результат",
    best: "Найкращий результат",
    correct: "Правильно",
    incorrect: "Потрібно повторити",
    chooseAnswer: "Оберіть відповідь",
    explanation: "Пояснення",
  },
  en: {
    title: "Topic Mini-Test",
    description:
      "Choose one correct answer for each question. Questions and options are shuffled, and the best score is stored in the browser.",
    shuffle: "New variant",
    check: "Check answers",
    reset: "Reset result",
    result: "Result",
    best: "Best score",
    correct: "Correct",
    incorrect: "Review needed",
    chooseAnswer: "Choose an answer",
    explanation: "Explanation",
  },
  de: {
    title: "Mini-Test zum Thema",
    description:
      "Wählen Sie pro Frage eine richtige Antwort. Fragen und Antworten werden gemischt, das beste Ergebnis wird im Browser gespeichert.",
    shuffle: "Neue Variante",
    check: "Antworten prüfen",
    reset: "Ergebnis löschen",
    result: "Ergebnis",
    best: "Bestes Ergebnis",
    correct: "Richtig",
    incorrect: "Wiederholen",
    chooseAnswer: "Antwort wählen",
    explanation: "Erläuterung",
  },
  ru: {
    title: "Мини-тест по теме",
    description:
      "Выберите один правильный ответ в каждом вопросе. Вопросы и варианты перемешиваются, лучший результат сохраняется в браузере.",
    shuffle: "Новый вариант",
    check: "Проверить ответы",
    reset: "Очистить результат",
    result: "Результат",
    best: "Лучший результат",
    correct: "Правильно",
    incorrect: "Нужно повторить",
    chooseAnswer: "Выберите ответ",
    explanation: "Пояснение",
  },
};

const makeLocalizedQuiz = (
  uk: TopicQuizQuestion[],
  en: TopicQuizQuestion[],
  de: TopicQuizQuestion[],
  ru: TopicQuizQuestion[],
): Record<Locale, TopicQuizQuestion[]> => ({ uk, en, de, ru });

export const topicQuizzes: TopicQuizBank = {
  "general-principles": makeLocalizedQuiz(
    [
      {
        id: "gp-01",
        prompt: "Що найточніше описує процес у курсі процесів і апаратів?",
        options: [
          "Фізико-хімічна зміна стану матеріального потоку",
          "Тільки конструкція машини",
          "Лише перелік операцій цеху",
          "Будь-яка технологічна інструкція",
        ],
        answer: 0,
        explanation: "Процес описує зміну потоку, а апарат є технічним засобом її реалізації.",
      },
      {
        id: "gp-02",
        prompt: "Який баланс потрібен для перевірки кількості сировини, продукту і втрат?",
        options: ["Матеріальний", "Тепловий", "Гідравлічний", "Економічний"],
        answer: 0,
        explanation: "Матеріальний баланс порівнює вхідні, вихідні та накопичені масові потоки.",
      },
      {
        id: "gp-03",
        prompt: "Що показує критерій Рейнольдса?",
        options: [
          "Співвідношення інерційних і в'язкісних сил",
          "Кількість теплоти в продукті",
          "Вологість сипкого матеріалу",
          "Концентрацію сухих речовин",
        ],
        answer: 0,
        explanation: "Re допомагає визначити режим руху і вибрати залежності для розрахунку.",
      },
      {
        id: "gp-04",
        prompt: "Чому властивості продукту беруть за робочої температури?",
        options: [
          "Бо густина, в'язкість і теплоємність змінюються з температурою",
          "Бо так легше оформити таблицю",
          "Бо температура не впливає на розрахунок",
          "Бо всі продукти мають однакові властивості",
        ],
        answer: 0,
        explanation: "Похибка у властивостях прямо переходить у похибку швидкостей, втрат і теплообміну.",
      },
      {
        id: "gp-05",
        prompt: "Що є головною метою методу подібності?",
        options: [
          "Перенести закономірності між моделлю і промисловим апаратом",
          "Замінити всі експерименти довідником",
          "Визначити тільки колір продукту",
          "Скоротити матеріальний баланс",
        ],
        answer: 0,
        explanation: "Подібність дає змогу масштабувати процес із контролем важливих безрозмірних критеріїв.",
      },
      {
        id: "gp-06",
        prompt: "Що обов'язково треба сформулювати перед вибором формул?",
        options: [
          "Мету розрахунку і шукані величини",
          "Колір корпусу апарата",
          "Назву кафедри",
          "Порядок рисунків у конспекті",
        ],
        answer: 0,
        explanation: "Формули добирають під конкретну задачу: продуктивність, розміри, потужність або режим.",
      },
      {
        id: "gp-07",
        prompt: "Який фактор особливо важливий саме для харчових виробництв?",
        options: [
          "Якість і безпечність продукту після оброблення",
          "Максимальна маса апарата",
          "Мінімальна кількість пояснень",
          "Однакова схема для всіх продуктів",
        ],
        answer: 0,
        explanation: "У харчових процесах технічний режим не можна відривати від якості, гігієни та безпечності.",
      },
      {
        id: "gp-08",
        prompt: "Що означає стаціонарний режим процесу?",
        options: [
          "Основні параметри в часі не змінюються або змінюються неістотно",
          "Апарат не має рухомих частин",
          "Продукт не нагрівається",
          "Розрахунок не потребує одиниць вимірювання",
        ],
        answer: 0,
        explanation: "За стаціонарності баланси спрощуються, бо накопичення в апараті часто приймають нульовим.",
      },
      {
        id: "gp-09",
        prompt: "Який набір даних найкраще підходить для старту розрахунку апарата?",
        options: [
          "Продуктивність, склад, властивості, температури і допустимі втрати",
          "Тільки назва продукту",
          "Лише розміри приміщення",
          "Тільки ціна обладнання",
        ],
        answer: 0,
        explanation: "Без вихідних даних неможливо коректно вибрати розрахункові залежності й перевірити режим.",
      },
      {
        id: "gp-10",
        prompt: "Чим небезпечне пряме масштабування лабораторної установки?",
        options: [
          "Можна втратити подібність потоків, теплообміну або масообміну",
          "Воно завжди зменшує витрати енергії",
          "Воно автоматично покращує якість",
          "Воно не потребує перевірок",
        ],
        answer: 0,
        explanation: "При збільшенні масштабу змінюються швидкості, площі, об'єми і співвідношення сил.",
      },
    ],
    [
      {
        id: "gp-01",
        prompt: "What best describes a process in process engineering?",
        options: [
          "A physical or physicochemical change in a material stream",
          "Only the mechanical design of a machine",
          "Only a list of shop-floor operations",
          "Any written production instruction",
        ],
        answer: 0,
        explanation: "The process describes the change in the stream; equipment is the technical means that performs it.",
      },
      {
        id: "gp-02",
        prompt: "Which balance checks raw material, product, and losses?",
        options: ["Material balance", "Heat balance", "Hydraulic balance", "Economic balance"],
        answer: 0,
        explanation: "A material balance compares inlet, outlet, and accumulated mass flows.",
      },
      {
        id: "gp-03",
        prompt: "What does the Reynolds number indicate?",
        options: [
          "The ratio of inertial to viscous forces",
          "The amount of heat in a product",
          "The moisture of a bulk material",
          "The concentration of dry matter",
        ],
        answer: 0,
        explanation: "Re helps identify the flow regime and select calculation correlations.",
      },
      {
        id: "gp-04",
        prompt: "Why should product properties be taken at operating temperature?",
        options: [
          "Because density, viscosity, and heat capacity change with temperature",
          "Because it makes tables easier to format",
          "Because temperature does not affect calculations",
          "Because all products have identical properties",
        ],
        answer: 0,
        explanation: "Errors in properties directly affect calculated velocities, losses, and heat transfer.",
      },
      {
        id: "gp-05",
        prompt: "What is the main purpose of similarity methods?",
        options: [
          "To transfer relationships between a model and industrial equipment",
          "To replace all experiments with a handbook",
          "To determine only product color",
          "To shorten the material balance",
        ],
        answer: 0,
        explanation: "Similarity supports scale-up by controlling the key dimensionless criteria.",
      },
      {
        id: "gp-06",
        prompt: "What must be defined before choosing equations?",
        options: [
          "The calculation goal and unknown quantities",
          "The equipment body color",
          "The department name",
          "The order of figures in the notes",
        ],
        answer: 0,
        explanation: "Equations are selected for a specific task: capacity, dimensions, power, or operating regime.",
      },
      {
        id: "gp-07",
        prompt: "Which factor is especially important in food production?",
        options: [
          "Product quality and safety after processing",
          "Maximum equipment mass",
          "Minimum explanation length",
          "One identical scheme for all products",
        ],
        answer: 0,
        explanation: "In food processing, technical regimes are tied to quality, hygiene, and safety.",
      },
      {
        id: "gp-08",
        prompt: "What does steady-state operation mean?",
        options: [
          "Main parameters do not change significantly with time",
          "The equipment has no moving parts",
          "The product is not heated",
          "The calculation needs no units",
        ],
        answer: 0,
        explanation: "Under steady state, balances are simplified because accumulation is often taken as zero.",
      },
      {
        id: "gp-09",
        prompt: "Which data set is best for starting an equipment calculation?",
        options: [
          "Capacity, composition, properties, temperatures, and allowable losses",
          "Only the product name",
          "Only room dimensions",
          "Only equipment price",
        ],
        answer: 0,
        explanation: "Input data are needed to choose correlations and check operating regimes correctly.",
      },
      {
        id: "gp-10",
        prompt: "Why is direct scale-up from a laboratory unit risky?",
        options: [
          "Similarity of flow, heat transfer, or mass transfer may be lost",
          "It always reduces energy consumption",
          "It automatically improves quality",
          "It requires no checks",
        ],
        answer: 0,
        explanation: "Scale changes velocities, areas, volumes, and force ratios.",
      },
    ],
    [
      {
        id: "gp-01",
        prompt: "Was beschreibt einen Prozess in der Verfahrenstechnik am besten?",
        options: [
          "Eine physikalische oder physikalisch-chemische Änderung eines Stoffstroms",
          "Nur die mechanische Konstruktion einer Maschine",
          "Nur eine Liste von Betriebsoperationen",
          "Jede schriftliche Produktionsanweisung",
        ],
        answer: 0,
        explanation: "Der Prozess beschreibt die Änderung des Stroms; der Apparat setzt sie technisch um.",
      },
      {
        id: "gp-02",
        prompt: "Welche Bilanz prüft Rohstoff, Produkt und Verluste?",
        options: ["Stoffbilanz", "Wärmebilanz", "Hydraulische Bilanz", "Wirtschaftliche Bilanz"],
        answer: 0,
        explanation: "Die Stoffbilanz vergleicht ein- und austretende sowie gespeicherte Massenströme.",
      },
      {
        id: "gp-03",
        prompt: "Was zeigt die Reynolds-Zahl?",
        options: [
          "Das Verhältnis von Trägheits- zu Zähigkeitskräften",
          "Die Wärmemenge im Produkt",
          "Die Feuchte eines Schüttguts",
          "Die Trockenstoffkonzentration",
        ],
        answer: 0,
        explanation: "Re hilft, das Strömungsregime und passende Berechnungsgleichungen zu wählen.",
      },
      {
        id: "gp-04",
        prompt: "Warum nimmt man Produkteigenschaften bei Betriebstemperatur?",
        options: [
          "Weil Dichte, Viskosität und Wärmekapazität temperaturabhängig sind",
          "Weil Tabellen dann einfacher aussehen",
          "Weil Temperatur keine Rolle spielt",
          "Weil alle Produkte gleiche Eigenschaften haben",
        ],
        answer: 0,
        explanation: "Fehler in Stoffwerten führen direkt zu Fehlern bei Geschwindigkeiten, Verlusten und Wärmeübergang.",
      },
      {
        id: "gp-05",
        prompt: "Wozu dient die Ähnlichkeitsmethode hauptsächlich?",
        options: [
          "Zur Übertragung von Gesetzmäßigkeiten zwischen Modell und Industrieapparat",
          "Zum Ersatz aller Versuche durch Tabellen",
          "Nur zur Bestimmung der Produktfarbe",
          "Zur Verkürzung der Stoffbilanz",
        ],
        answer: 0,
        explanation: "Ähnlichkeit ermöglicht Scale-up unter Kontrolle wichtiger dimensionsloser Kennzahlen.",
      },
      {
        id: "gp-06",
        prompt: "Was muss vor der Formelwahl festgelegt werden?",
        options: [
          "Ziel der Berechnung und gesuchte Größen",
          "Farbe des Apparatekörpers",
          "Name des Lehrstuhls",
          "Reihenfolge der Abbildungen",
        ],
        answer: 0,
        explanation: "Formeln hängen von der Aufgabe ab: Leistung, Abmessungen, Leistungseintrag oder Betriebsregime.",
      },
      {
        id: "gp-07",
        prompt: "Was ist für Lebensmittelprozesse besonders wichtig?",
        options: [
          "Qualität und Sicherheit des Produkts nach der Behandlung",
          "Maximale Masse des Apparats",
          "Möglichst kurze Erklärungen",
          "Ein Schema für alle Produkte",
        ],
        answer: 0,
        explanation: "Technische Regime sind in der Lebensmitteltechnik eng mit Qualität, Hygiene und Sicherheit verbunden.",
      },
      {
        id: "gp-08",
        prompt: "Was bedeutet stationärer Betrieb?",
        options: [
          "Wesentliche Parameter ändern sich zeitlich kaum",
          "Der Apparat hat keine beweglichen Teile",
          "Das Produkt wird nicht erwärmt",
          "Die Rechnung braucht keine Einheiten",
        ],
        answer: 0,
        explanation: "Bei stationärem Betrieb werden Bilanzen einfacher, weil Speicherung oft null gesetzt wird.",
      },
      {
        id: "gp-09",
        prompt: "Welche Angaben eignen sich für den Start einer Apparateberechnung?",
        options: [
          "Leistung, Zusammensetzung, Stoffwerte, Temperaturen und zulässige Verluste",
          "Nur der Produktname",
          "Nur die Raummaße",
          "Nur der Apparatepreis",
        ],
        answer: 0,
        explanation: "Ohne Eingangsdaten lassen sich Gleichungen und Betriebsregime nicht zuverlässig prüfen.",
      },
      {
        id: "gp-10",
        prompt: "Warum ist direktes Scale-up aus dem Labor riskant?",
        options: [
          "Ähnlichkeit von Strömung, Wärme- oder Stoffübertragung kann verloren gehen",
          "Es senkt immer den Energieverbrauch",
          "Es verbessert automatisch die Qualität",
          "Es braucht keine Prüfung",
        ],
        answer: 0,
        explanation: "Mit dem Maßstab ändern sich Geschwindigkeiten, Flächen, Volumina und Kräfteverhältnisse.",
      },
    ],
    [
      {
        id: "gp-01",
        prompt: "Что точнее всего описывает процесс в курсе процессов и аппаратов?",
        options: [
          "Физическое или физико-химическое изменение материального потока",
          "Только конструкция машины",
          "Только перечень операций цеха",
          "Любая технологическая инструкция",
        ],
        answer: 0,
        explanation: "Процесс описывает изменение потока, а аппарат является техническим средством его реализации.",
      },
      {
        id: "gp-02",
        prompt: "Какой баланс нужен для проверки количества сырья, продукта и потерь?",
        options: ["Материальный", "Тепловой", "Гидравлический", "Экономический"],
        answer: 0,
        explanation: "Материальный баланс сопоставляет входные, выходные и накопленные массовые потоки.",
      },
      {
        id: "gp-03",
        prompt: "Что показывает критерий Рейнольдса?",
        options: [
          "Соотношение инерционных и вязкостных сил",
          "Количество теплоты в продукте",
          "Влажность сыпучего материала",
          "Концентрацию сухих веществ",
        ],
        answer: 0,
        explanation: "Re помогает определить режим движения и выбрать расчётные зависимости.",
      },
      {
        id: "gp-04",
        prompt: "Почему свойства продукта берут при рабочей температуре?",
        options: [
          "Потому что плотность, вязкость и теплоёмкость зависят от температуры",
          "Потому что так проще оформить таблицу",
          "Потому что температура не влияет на расчёт",
          "Потому что все продукты имеют одинаковые свойства",
        ],
        answer: 0,
        explanation: "Ошибка в свойствах сразу переходит в ошибку скоростей, потерь и теплообмена.",
      },
      {
        id: "gp-05",
        prompt: "Какова главная цель метода подобия?",
        options: [
          "Перенести закономерности между моделью и промышленным аппаратом",
          "Заменить все эксперименты справочником",
          "Определить только цвет продукта",
          "Сократить материальный баланс",
        ],
        answer: 0,
        explanation: "Подобие позволяет масштабировать процесс с контролем важных безразмерных критериев.",
      },
      {
        id: "gp-06",
        prompt: "Что нужно сформулировать перед выбором формул?",
        options: [
          "Цель расчёта и искомые величины",
          "Цвет корпуса аппарата",
          "Название кафедры",
          "Порядок рисунков в конспекте",
        ],
        answer: 0,
        explanation: "Формулы выбирают под конкретную задачу: производительность, размеры, мощность или режим.",
      },
      {
        id: "gp-07",
        prompt: "Какой фактор особенно важен для пищевых производств?",
        options: [
          "Качество и безопасность продукта после обработки",
          "Максимальная масса аппарата",
          "Минимальное количество пояснений",
          "Одинаковая схема для всех продуктов",
        ],
        answer: 0,
        explanation: "В пищевых процессах технический режим связан с качеством, гигиеной и безопасностью.",
      },
      {
        id: "gp-08",
        prompt: "Что означает стационарный режим процесса?",
        options: [
          "Основные параметры во времени существенно не изменяются",
          "Аппарат не имеет движущихся частей",
          "Продукт не нагревается",
          "Расчёт не требует единиц измерения",
        ],
        answer: 0,
        explanation: "При стационарности балансы упрощаются, потому что накопление часто принимают равным нулю.",
      },
      {
        id: "gp-09",
        prompt: "Какой набор данных лучше всего подходит для начала расчёта аппарата?",
        options: [
          "Производительность, состав, свойства, температуры и допустимые потери",
          "Только название продукта",
          "Только размеры помещения",
          "Только цена оборудования",
        ],
        answer: 0,
        explanation: "Без исходных данных нельзя корректно выбрать зависимости и проверить режим.",
      },
      {
        id: "gp-10",
        prompt: "Чем опасно прямое масштабирование лабораторной установки?",
        options: [
          "Можно потерять подобие потоков, теплообмена или массообмена",
          "Оно всегда уменьшает расход энергии",
          "Оно автоматически улучшает качество",
          "Оно не требует проверок",
        ],
        answer: 0,
        explanation: "При увеличении масштаба меняются скорости, площади, объёмы и соотношение сил.",
      },
    ],
  ),
};

const topicBlueprints: Record<string, { uk: string; en: string; de: string; ru: string }[]> = {
  hydraulics: [
    { uk: "ламінарний режим руху рідини", en: "laminar liquid flow", de: "laminare Flüssigkeitsströmung", ru: "ламинарный режим движения жидкости" },
    { uk: "турбулентний режим руху рідини", en: "turbulent liquid flow", de: "turbulente Flüssigkeitsströmung", ru: "турбулентный режим движения жидкости" },
    { uk: "втрати тиску в трубопроводі", en: "pressure losses in a pipeline", de: "Druckverluste in einer Rohrleitung", ru: "потери давления в трубопроводе" },
    { uk: "місцеві опори харчової лінії", en: "local resistances in a food line", de: "örtliche Widerstände in einer Lebensmittellinie", ru: "местные сопротивления пищевой линии" },
    { uk: "вибір насоса для в'язкого продукту", en: "pump selection for a viscous product", de: "Pumpenauswahl für ein viskoses Produkt", ru: "выбор насоса для вязкого продукта" },
    { uk: "кавітація в насосі", en: "pump cavitation", de: "Kavitation in der Pumpe", ru: "кавитация в насосе" },
    { uk: "рівняння Бернуллі", en: "Bernoulli equation", de: "Bernoulli-Gleichung", ru: "уравнение Бернулли" },
    { uk: "гідростатичний тиск", en: "hydrostatic pressure", de: "hydrostatischer Druck", ru: "гидростатическое давление" },
    { uk: "розрахунок діаметра трубопроводу", en: "pipeline diameter calculation", de: "Berechnung des Rohrdurchmessers", ru: "расчёт диаметра трубопровода" },
    { uk: "санітарне проектування трубопроводів", en: "hygienic pipeline design", de: "hygienische Rohrleitungsgestaltung", ru: "санитарное проектирование трубопроводов" },
  ],
  separation: [
    { uk: "відстоювання суспензій", en: "sedimentation of suspensions", de: "Sedimentation von Suspensionen", ru: "отстаивание суспензий" },
    { uk: "фільтрування харчових рідин", en: "filtration of food liquids", de: "Filtration von Lebensmittelflüssigkeiten", ru: "фильтрование пищевых жидкостей" },
    { uk: "центрифугування", en: "centrifugation", de: "Zentrifugation", ru: "центрифугирование" },
    { uk: "рушійну силу розділення", en: "the driving force of separation", de: "die Triebkraft der Trennung", ru: "движущую силу разделения" },
    { uk: "опір фільтрувальної перегородки", en: "filter medium resistance", de: "Widerstand des Filtermediums", ru: "сопротивление фильтрующей перегородки" },
    { uk: "осад у фільтрі", en: "filter cake", de: "Filterkuchen", ru: "осадок в фильтре" },
    { uk: "сепарацію вершків", en: "cream separation", de: "Rahmseparation", ru: "сепарирование сливок" },
    { uk: "очищення соків", en: "juice clarification", de: "Saftklärung", ru: "очистку соков" },
    { uk: "вплив розміру частинок", en: "particle size influence", de: "Einfluss der Partikelgröße", ru: "влияние размера частиц" },
    { uk: "вибір апарата розділення", en: "selection of separation equipment", de: "Auswahl eines Trennapparats", ru: "выбор аппарата разделения" },
  ],
  mixing: [
    { uk: "мету перемішування", en: "the purpose of mixing", de: "den Zweck des Mischens", ru: "цель перемешивания" },
    { uk: "турбінну мішалку", en: "a turbine impeller", de: "einen Turbinenrührer", ru: "турбинную мешалку" },
    { uk: "лопатеву мішалку", en: "a paddle impeller", de: "einen Blattrührer", ru: "лопастную мешалку" },
    { uk: "в'язкість продукту під час перемішування", en: "product viscosity during mixing", de: "Produktviskosität beim Mischen", ru: "вязкость продукта при перемешивании" },
    { uk: "потужність на валу мішалки", en: "shaft power of an agitator", de: "Wellenleistung eines Rührers", ru: "мощность на валу мешалки" },
    { uk: "утворення воронки", en: "vortex formation", de: "Trombenbildung", ru: "образование воронки" },
    { uk: "відбивні перегородки", en: "baffles", de: "Stromstörer", ru: "отбойные перегородки" },
    { uk: "емульгування", en: "emulsification", de: "Emulgieren", ru: "эмульгирование" },
    { uk: "суспендування твердих частинок", en: "suspension of solid particles", de: "Suspension fester Partikel", ru: "суспендирование твёрдых частиц" },
    { uk: "масштабування апарата з мішалкою", en: "scale-up of a stirred vessel", de: "Scale-up eines Rührbehälters", ru: "масштабирование аппарата с мешалкой" },
  ],
  "heat-exchange": [
    { uk: "теплопровідність", en: "thermal conduction", de: "Wärmeleitung", ru: "теплопроводность" },
    { uk: "конвективний теплообмін", en: "convective heat transfer", de: "konvektiven Wärmeübergang", ru: "конвективный теплообмен" },
    { uk: "коефіцієнт теплопередачі", en: "overall heat-transfer coefficient", de: "Wärmedurchgangskoeffizienten", ru: "коэффициент теплопередачи" },
    { uk: "середню різницю температур", en: "mean temperature difference", de: "mittlere Temperaturdifferenz", ru: "среднюю разность температур" },
    { uk: "пастеризацію", en: "pasteurization", de: "Pasteurisation", ru: "пастеризацию" },
    { uk: "регенерацію теплоти", en: "heat regeneration", de: "Wärmerückgewinnung", ru: "регенерацию теплоты" },
    { uk: "пластинчастий теплообмінник", en: "plate heat exchanger", de: "Plattenwärmeübertrager", ru: "пластинчатый теплообменник" },
    { uk: "забруднення поверхні теплообміну", en: "fouling of a heat-transfer surface", de: "Belagbildung auf Wärmeübertragungsflächen", ru: "загрязнение поверхности теплообмена" },
    { uk: "перегрів харчового продукту", en: "overheating of a food product", de: "Überhitzung eines Lebensmittels", ru: "перегрев пищевого продукта" },
    { uk: "тепловий баланс апарата", en: "heat balance of equipment", de: "Wärmebilanz eines Apparats", ru: "тепловой баланс аппарата" },
  ],
  "mass-transfer": [
    { uk: "рушійну силу масообміну", en: "the driving force of mass transfer", de: "die Triebkraft des Stoffübergangs", ru: "движущую силу массообмена" },
    { uk: "дифузію", en: "diffusion", de: "Diffusion", ru: "диффузию" },
    { uk: "екстрагування", en: "extraction", de: "Extraktion", ru: "экстрагирование" },
    { uk: "сушіння харчових матеріалів", en: "drying of food materials", de: "Trocknung von Lebensmittelstoffen", ru: "сушку пищевых материалов" },
    { uk: "сорбцію", en: "sorption", de: "Sorption", ru: "сорбцию" },
    { uk: "кристалізацію", en: "crystallization", de: "Kristallisation", ru: "кристаллизацию" },
    { uk: "випарювання", en: "evaporation", de: "Eindampfung", ru: "выпаривание" },
    { uk: "рівновагу фаз", en: "phase equilibrium", de: "Phasengleichgewicht", ru: "равновесие фаз" },
    { uk: "площу контакту фаз", en: "interfacial contact area", de: "Phasenkontaktfläche", ru: "площадь контакта фаз" },
    { uk: "якість продукту під час масообміну", en: "product quality during mass transfer", de: "Produktqualität beim Stoffübergang", ru: "качество продукта при массообмене" },
  ],
  mechanical: [
    { uk: "подрібнення", en: "size reduction", de: "Zerkleinerung", ru: "измельчение" },
    { uk: "сортування за розміром", en: "size classification", de: "Klassierung nach Größe", ru: "сортирование по размеру" },
    { uk: "пресування", en: "pressing", de: "Pressen", ru: "прессование" },
    { uk: "екструзію", en: "extrusion", de: "Extrusion", ru: "экструзию" },
    { uk: "різання харчової сировини", en: "cutting of food raw materials", de: "Schneiden von Lebensmittelrohstoffen", ru: "резание пищевого сырья" },
    { uk: "енерговитрати механічного процесу", en: "energy demand of a mechanical process", de: "Energiebedarf eines mechanischen Prozesses", ru: "энергозатраты механического процесса" },
    { uk: "ситовий аналіз", en: "sieve analysis", de: "Siebanalyse", ru: "ситовой анализ" },
    { uk: "деформацію продукту", en: "product deformation", de: "Produktverformung", ru: "деформацию продукта" },
    { uk: "знос робочих органів", en: "wear of working parts", de: "Verschleiß der Arbeitsorgane", ru: "износ рабочих органов" },
    { uk: "безпеку механічного обладнання", en: "safety of mechanical equipment", de: "Sicherheit mechanischer Anlagen", ru: "безопасность механического оборудования" },
  ],
  "automation-control": [
    { uk: "датчик температури", en: "temperature sensor", de: "Temperatursensor", ru: "датчик температуры" },
    { uk: "контур регулювання", en: "control loop", de: "Regelkreis", ru: "контур регулирования" },
    { uk: "PID-регулятор", en: "PID controller", de: "PID-Regler", ru: "PID-регулятор" },
    { uk: "зворотний зв'язок", en: "feedback", de: "Rückkopplung", ru: "обратную связь" },
    { uk: "автоматизацію пастеризації", en: "pasteurization automation", de: "Automatisierung der Pasteurisation", ru: "автоматизацию пастеризации" },
    { uk: "сигналізацію аварійних режимів", en: "alarm signaling", de: "Alarmmeldung", ru: "сигнализацию аварийных режимов" },
    { uk: "реєстрацію параметрів", en: "parameter logging", de: "Parameteraufzeichnung", ru: "регистрацию параметров" },
    { uk: "виконавчий механізм", en: "actuator", de: "Stellglied", ru: "исполнительный механизм" },
    { uk: "точність вимірювання", en: "measurement accuracy", de: "Messgenauigkeit", ru: "точность измерения" },
    { uk: "санітарний контроль процесу", en: "hygienic process control", de: "hygienische Prozesskontrolle", ru: "санитарный контроль процесса" },
  ],
  "process-design": [
    { uk: "технологічну схему", en: "process flow diagram", de: "Prozessfließbild", ru: "технологическую схему" },
    { uk: "вибір обладнання", en: "equipment selection", de: "Apparateauswahl", ru: "выбор оборудования" },
    { uk: "компонування лінії", en: "line layout", de: "Linienlayout", ru: "компоновку линии" },
    { uk: "продуктивність лінії", en: "line capacity", de: "Linienleistung", ru: "производительность линии" },
    { uk: "санітарні розриви", en: "hygienic clearances", de: "hygienische Abstände", ru: "санитарные разрывы" },
    { uk: "резерв продуктивності", en: "capacity reserve", de: "Leistungsreserve", ru: "резерв производительности" },
    { uk: "енергоефективність", en: "energy efficiency", de: "Energieeffizienz", ru: "энергоэффективность" },
    { uk: "CIP-миття", en: "CIP cleaning", de: "CIP-Reinigung", ru: "CIP-мойку" },
    { uk: "ризики перехресного забруднення", en: "cross-contamination risks", de: "Risiken der Kreuzkontamination", ru: "риски перекрёстного загрязнения" },
    { uk: "економічне обґрунтування", en: "economic justification", de: "wirtschaftliche Begründung", ru: "экономическое обоснование" },
  ],
};

function makeQuestion(
  id: string,
  subject: { uk: string; en: string; de: string; ru: string },
  index: number,
): Record<Locale, TopicQuizQuestion> {
  const variant = index % 5;
  const ukVariants = [
    {
      prompt: `Яке твердження найкраще характеризує ${subject.uk}?`,
      options: [
        "Його оцінюють через мету процесу, властивості продукту, режим роботи та вплив на якість",
        "Його можна вибирати незалежно від властивостей продукту",
        "Його враховують лише після купівлі обладнання",
        "Його завжди розраховують однією універсальною формулою",
      ],
      explanation:
        "У харчових виробництвах будь-який процес пов'язують із властивостями продукту, режимом, продуктивністю та якістю.",
    },
    {
      prompt: `Що насамперед треба перевірити, коли в розрахунку з'являється ${subject.uk}?`,
      options: [
        "Вихідні дані, одиниці вимірювання, допустимі режими та обмеження якості продукту",
        "Лише порядковий номер формули",
        "Тільки назву виробника обладнання",
        "Тільки колір і матеріал зовнішнього кожуха",
      ],
      explanation:
        "Правильність інженерного розрахунку починається з даних, одиниць, меж застосування формул і технологічних обмежень.",
    },
    {
      prompt: `Яка помилка найімовірніша під час вибору параметрів для ${subject.uk}?`,
      options: [
        "Ігнорувати реальні властивості харчового продукту та приймати режим за довідковим прикладом без перевірки",
        "Перевіряти температуру продукту перед розрахунком",
        "Уточнювати продуктивність лінії",
        "Порівнювати кілька типів обладнання",
      ],
      explanation:
        "Довідковий приклад допомагає, але його потрібно адаптувати до конкретного продукту, температури, концентрації та режиму.",
    },
    {
      prompt: `Для чого студенту важливо розуміти ${subject.uk}, а не лише підставляти числа у формулу?`,
      options: [
        "Щоб пояснити фізичний зміст режиму і перевірити реалістичність отриманого результату",
        "Щоб не будувати матеріальний баланс",
        "Щоб уникнути вибору обладнання",
        "Щоб не враховувати якість продукту",
      ],
      explanation:
        "Осмислення процесу дозволяє побачити помилки масштабу, одиниць, режиму руху або технологічної доцільності.",
    },
    {
      prompt: `Який підхід найкращий для інженерного рішення, пов'язаного з ${subject.uk}?`,
      options: [
        "Порівняти кілька допустимих режимів і вибрати той, що поєднує продуктивність, якість, безпечність та енергоефективність",
        "Вибрати перше знайдене значення з таблиці",
        "Збільшити всі розміри без перевірки подібності",
        "Ігнорувати санітарні вимоги, якщо розрахунок зійшовся",
      ],
      explanation:
        "Для харчової лінії правильне рішення має бути не лише математично можливим, а й технологічно та санітарно прийнятним.",
    },
  ];
  const enVariants = [
    {
      prompt: `Which statement best characterizes ${subject.en}?`,
      options: [
        "It is evaluated through the process goal, product properties, operating regime, and quality impact",
        "It can be selected independently of product properties",
        "It is considered only after equipment has been purchased",
        "It is always calculated by one universal formula",
      ],
      explanation:
        "In food production, any process must be tied to product properties, operating regime, capacity, and quality.",
    },
    {
      prompt: `What should be checked first when a calculation involves ${subject.en}?`,
      options: [
        "Input data, units, allowable regimes, and product-quality constraints",
        "Only the formula number",
        "Only the equipment manufacturer",
        "Only the color and outer casing material",
      ],
      explanation:
        "Reliable engineering calculation starts with data, units, correlation limits, and technological constraints.",
    },
    {
      prompt: `Which error is most likely when selecting parameters for ${subject.en}?`,
      options: [
        "Ignoring real food-product properties and copying a handbook example without checking",
        "Checking product temperature before calculation",
        "Clarifying line capacity",
        "Comparing several equipment types",
      ],
      explanation:
        "Handbook examples help, but they must be adapted to the product, temperature, concentration, and regime.",
    },
    {
      prompt: `Why should students understand ${subject.en} instead of only substituting numbers?`,
      options: [
        "To explain the physical meaning and judge whether the result is realistic",
        "To avoid making a material balance",
        "To avoid equipment selection",
        "To ignore product quality",
      ],
      explanation:
        "Understanding the process helps detect errors in scale, units, flow regime, or technological feasibility.",
    },
    {
      prompt: `Which approach is best for an engineering decision related to ${subject.en}?`,
      options: [
        "Compare acceptable regimes and choose one that balances capacity, quality, safety, and energy efficiency",
        "Use the first value found in a table",
        "Increase all dimensions without similarity checks",
        "Ignore hygiene requirements if the calculation converges",
      ],
      explanation:
        "For a food line, a correct decision must be mathematically possible and technologically acceptable.",
    },
  ];
  const deVariants = [
    {
      prompt: `Welche Aussage beschreibt ${subject.de} am besten?`,
      options: [
        "Es wird über Prozessziel, Produkteigenschaften, Betriebsregime und Qualitätswirkung bewertet",
        "Es kann unabhängig von Produkteigenschaften gewählt werden",
        "Es wird erst nach dem Kauf der Anlage berücksichtigt",
        "Es wird immer mit einer universellen Formel berechnet",
      ],
      explanation:
        "In der Lebensmittelproduktion müssen Prozesse mit Stoffwerten, Betriebsweise, Leistung und Qualität verbunden werden.",
    },
    {
      prompt: `Was ist zuerst zu prüfen, wenn eine Berechnung ${subject.de} betrifft?`,
      options: [
        "Eingangsdaten, Einheiten, zulässige Regime und Qualitätsgrenzen des Produkts",
        "Nur die Nummer der Formel",
        "Nur der Anlagenhersteller",
        "Nur Farbe und Material der Außenverkleidung",
      ],
      explanation:
        "Zuverlässige Berechnung beginnt mit Daten, Einheiten, Gültigkeitsbereichen und technologischen Grenzen.",
    },
    {
      prompt: `Welcher Fehler ist bei Parametern für ${subject.de} besonders wahrscheinlich?`,
      options: [
        "Reale Produkteigenschaften zu ignorieren und ein Tabellenbeispiel ungeprüft zu übernehmen",
        "Die Produkttemperatur vor der Rechnung zu prüfen",
        "Die Linienleistung zu klären",
        "Mehrere Apparatearten zu vergleichen",
      ],
      explanation:
        "Beispiele helfen, müssen aber an Produkt, Temperatur, Konzentration und Betriebsregime angepasst werden.",
    },
    {
      prompt: `Warum soll man ${subject.de} verstehen und nicht nur Zahlen einsetzen?`,
      options: [
        "Um den physikalischen Sinn zu erklären und die Plausibilität des Ergebnisses zu prüfen",
        "Um keine Stoffbilanz zu erstellen",
        "Um keine Apparateauswahl zu treffen",
        "Um Produktqualität nicht zu beachten",
      ],
      explanation:
        "Verständnis hilft, Fehler bei Maßstab, Einheiten, Strömungsregime oder technologischer Eignung zu erkennen.",
    },
    {
      prompt: `Welcher Ansatz passt am besten zu einer Entscheidung über ${subject.de}?`,
      options: [
        "Mehrere zulässige Regime vergleichen und Leistung, Qualität, Sicherheit sowie Energieeffizienz abwägen",
        "Den ersten Tabellenwert übernehmen",
        "Alle Abmessungen ohne Ähnlichkeitsprüfung vergrößern",
        "Hygieneanforderungen ignorieren, wenn die Rechnung aufgeht",
      ],
      explanation:
        "Für Lebensmittelanlagen muss die Lösung rechnerisch möglich und technologisch-hygienisch geeignet sein.",
    },
  ];
  const ruVariants = [
    {
      prompt: `Какое утверждение лучше всего характеризует ${subject.ru}?`,
      options: [
        "Его оценивают через цель процесса, свойства продукта, режим работы и влияние на качество",
        "Его можно выбирать независимо от свойств продукта",
        "Его учитывают только после покупки оборудования",
        "Его всегда рассчитывают одной универсальной формулой",
      ],
      explanation:
        "В пищевых производствах любой процесс связывают со свойствами продукта, режимом, производительностью и качеством.",
    },
    {
      prompt: `Что сначала нужно проверить, если в расчёте появляется ${subject.ru}?`,
      options: [
        "Исходные данные, единицы измерения, допустимые режимы и ограничения качества продукта",
        "Только номер формулы",
        "Только производителя оборудования",
        "Только цвет и материал внешнего кожуха",
      ],
      explanation:
        "Надёжный инженерный расчёт начинается с данных, единиц, границ применимости формул и технологических ограничений.",
    },
    {
      prompt: `Какая ошибка наиболее вероятна при выборе параметров для ${subject.ru}?`,
      options: [
        "Игнорировать реальные свойства пищевого продукта и без проверки брать справочный пример",
        "Проверять температуру продукта перед расчётом",
        "Уточнять производительность линии",
        "Сравнивать несколько типов оборудования",
      ],
      explanation:
        "Справочный пример полезен, но его нужно адаптировать к продукту, температуре, концентрации и режиму.",
    },
    {
      prompt: `Зачем студенту понимать ${subject.ru}, а не только подставлять числа в формулу?`,
      options: [
        "Чтобы объяснить физический смысл режима и проверить реалистичность результата",
        "Чтобы не строить материальный баланс",
        "Чтобы избежать выбора оборудования",
        "Чтобы не учитывать качество продукта",
      ],
      explanation:
        "Понимание процесса помогает увидеть ошибки масштаба, единиц, режима движения или технологической целесообразности.",
    },
    {
      prompt: `Какой подход лучше для инженерного решения, связанного с ${subject.ru}?`,
      options: [
        "Сравнить допустимые режимы и выбрать баланс производительности, качества, безопасности и энергоэффективности",
        "Взять первое найденное значение из таблицы",
        "Увеличить все размеры без проверки подобия",
        "Игнорировать санитарные требования, если расчёт сошёлся",
      ],
      explanation:
        "Для пищевой линии решение должно быть не только математически возможным, но и технологически приемлемым.",
    },
  ];

  return {
    uk: {
      id,
      prompt: ukVariants[variant].prompt,
      options: ukVariants[variant].options,
      answer: 0,
      explanation: ukVariants[variant].explanation,
    },
    en: {
      id,
      prompt: enVariants[variant].prompt,
      options: enVariants[variant].options,
      answer: 0,
      explanation: enVariants[variant].explanation,
    },
    de: {
      id,
      prompt: deVariants[variant].prompt,
      options: deVariants[variant].options,
      answer: 0,
      explanation: deVariants[variant].explanation,
    },
    ru: {
      id,
      prompt: ruVariants[variant].prompt,
      options: ruVariants[variant].options,
      answer: 0,
      explanation: ruVariants[variant].explanation,
    },
  };
}

Object.entries(topicBlueprints).forEach(([topic, items]) => {
  const localized: Record<Locale, TopicQuizQuestion[]> = { uk: [], en: [], de: [], ru: [] };

  items.forEach((item, index) => {
    const question = makeQuestion(`${topic}-${String(index + 1).padStart(2, "0")}`, item, index);
    localized.uk.push(question.uk);
    localized.en.push(question.en);
    localized.de.push(question.de);
    localized.ru.push(question.ru);
  });

  topicQuizzes[topic] = localized;
});

export function getTopicQuiz(topic: string | undefined, locale: Locale): TopicQuizQuestion[] {
  if (!topic) return [];
  const bank = topicQuizzes[topic];
  if (!bank) return [];
  return bank[locale] || bank[fallbackLocale] || [];
}
