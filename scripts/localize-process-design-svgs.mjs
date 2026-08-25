import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const sourceDir = join(process.cwd(), "public", "images", "lectures", "process-design");

const en = {
  "Цикл приймального тесту": "Acceptance test loop",
  "Приймання - це тест із критеріями, а не “здається працює”": "Acceptance is a test with criteria, not 'seems to work'",
  "критерій": "criterion",
  "тест": "test",
  "результат": "result",
  "відхилення": "deviation",
  "корекція": "correction",
  "Цикл ТО і калібрування": "Maintenance and calibration loop",
  "Після ремонту лінія має повернутися в санітарно безпечний стан":
    "After repair the line must return to a hygienically safe state",
  "ТО +": "maintenance +",
  "калібрування": "calibration",
  "План": "Plan",
  "Робота": "Work",
  "Прибирання": "Cleaning",
  "і збір": "and assembly",
  "Перевірка": "Check",
  "Запис": "Record",
  "Аналіз": "Analysis",
  "Дешеве обладнання не завжди дешеве в експлуатації": "Cheap equipment is not always cheap to operate",
  "купівля, монтаж,": "purchase, installation,",
  "пусконалагодження": "commissioning",
  "енергія, вода, персонал,": "energy, water, staff,",
  "CIP, сервіс, простої": "CIP, service, downtime",
  "повна вартість": "total cost",
  "за весь період роботи": "over the whole service life",
  "Етапи запуску лінії": "Line commissioning stages",
  "Запуск лінії проходить через послідовні перевірки": "Line startup passes through sequential checks",
  "Чекліст технологічної схеми": "Process scheme checklist",
  "Чекліст схеми для курсового проєкту": "Scheme checklist for course project",
  "□ основні апарати пронумеровані і підписані": "□ main equipment is numbered and labelled",
  "□ показані потоки сировини, продукту, води, пари, холоду і CIP":
    "□ raw material, product, water, steam, cooling and CIP flows are shown",
  "□ є насоси, клапани, дренажі, байпаси і буферні ємності":
    "□ pumps, valves, drains, bypasses and buffer tanks are present",
  "□ нанесені ключові датчики: T, p, F, L, pH, провідність, маса":
    "□ key sensors are shown: T, p, F, L, pH, conductivity, mass",
  "□ зрозуміло, що відбувається при митті, пуску, зупинці і аварії":
    "□ cleaning, startup, shutdown and emergency behaviour is clear",
  "□ схема узгоджена з розрахунками продуктивності і балансами":
    "□ scheme matches capacity calculations and balances",
  "Мертві зони у трубопроводі": "Dead legs in piping",
  "Довге глухе відгалуження стає мертвою зоною": "A long blind branch becomes a dead zone",
  "Менший ризик": "Lower risk",
  "короткий патрубок": "short branch",
  "Вищий ризик": "Higher risk",
  "застій і слабке промивання": "stagnation and weak cleaning",
  "Матриця вибору обладнання": "Equipment selection matrix",
  "Вибір обладнання краще робити через прозорі критерії": "Equipment selection is better with transparent criteria",
  "критерій": "criterion",
  "варіант A": "option A",
  "варіант B": "option B",
  "вага": "weight",
  "якість продукту": "product quality",
  "енергія і вода": "energy and water",
  "CIP і гігієна": "CIP and hygiene",
  "ціна і сервіс": "price and service",
  "гнучкість": "flexibility",
  "Вхідні дані для проєктування": "Design inputs",
  "Підбір обладнання починається з вхідних даних": "Equipment selection starts from design inputs",
  "рішення": "decision",
  "апарат, режим, лінія": "equipment, mode, line",
  "продукт": "product",
  "продуктивність": "capacity",
  "режими": "modes",
  "обмеження": "constraints",
  "сервіси": "utilities",
  "Дерево рішення при відхиленні": "Deviation decision tree",
  "Відхилення має вести до рішення щодо продукту": "A deviation must lead to a product decision",
  "Виявлено відхилення": "Deviation detected",
  "Ізолювати продукт": "Isolate product",
  "Оцінити ризик": "Assess risk",
  "Випуск": "Release",
  "Переробка": "Rework",
  "Утилізація": "Disposal",
  "Цілісність цифрових записів": "Digital record integrity",
  "Цифровий запис має бути надійним доказом процесу": "A digital record must be reliable process evidence",
  "Запис": "Record",
  "партії/процесу": "batch/process",
  "Доступ і ролі": "Access and roles",
  "Час і зона": "Time and zone",
  "Карта завершення інженерного проєкту": "Engineering project completion map",
  "Завершений проєкт показує не рецептуру, а інженерну реалізацію процесу":
    "A completed project shows engineering implementation, not a recipe",
  "Курсова /": "Course /",
  "проєкт лінії": "line project",
  "Процес": "Process",
  "Апарати": "Equipment",
  "Розрахунки": "Calculations",
  "Контроль": "Control",
  "Трубопроводи": "Piping",
  "Ієрархія використання харчових потоків": "Food stream use hierarchy",
  "Найкращий відхід - той, який не виник": "The best waste is the waste that never appears",
  "Запобігання втратам": "Loss prevention",
  "Харчове використання": "Food use",
  "Корм / інгредієнти": "Feed / ingredients",
  "Промислова переробка": "Industrial processing",
  "Утилізація": "Disposal",
  "Контрольні точки HACCP": "HACCP control points",
  "Не кожна контрольна точка є CCP": "Not every control point is a CCP",
  "гігієна, вода, персонал": "hygiene, water, personnel",
  "значущий контроль": "significant control",
  "критична межа + коригування": "critical limit + correction",
  "Карта небезпек харчової лінії": "Food line hazard map",
  "Небезпеки треба шукати по всій лінії, а не лише в готовому продукті":
    "Hazards must be sought across the whole line, not only in the finished product",
  "харчова лінія": "food line",
  "сировина - процес - пакування": "raw material - process - packaging",
  "біологічні": "biological",
  "хімічні": "chemical",
  "фізичні": "physical",
  "алергени": "allergens",
  "Гігієнічний вузол харчової лінії": "Hygienic node of a food line",
  "Апаратурний вузол має показувати продукт, CIP, дренаж і контроль":
    "An equipment node must show product, CIP, drain and control",
  "Апарат": "Equipment",
  "проба": "sample",
  "Маршрути продукту і CIP": "Product and CIP routes",
  "У схемі мають бути видні маршрути продукту і CIP": "The scheme must show product and CIP routes",
  "танк продукту": "product tank",
  "CIP-станція": "CIP station",
  "клапанний": "valve",
  "вузол": "node",
  "лінія": "line",
  "дренаж": "drain",
  "Стратегія технічного обслуговування": "Maintenance strategy",
  "Обслуговування має рухатися від аварій до керування ризиком":
    "Maintenance should move from failures to risk management",
  "Реактивний ремонт": "Reactive repair",
  "Планове ТО": "Scheduled maintenance",
  "Профілактика": "Prevention",
  "Прогноз": "Prediction",
  "Втрати OEE харчової лінії": "OEE losses of a food line",
  "OEE показує, де лінія втрачає корисний час і продукт":
    "OEE shows where the line loses useful time and product",
  "OEE лінії": "Line OEE",
  "Доступність": "Availability",
  "Швидкість": "Speed",
  "Якість": "Quality",
  "аварії, переналадки,": "failures, changeovers,",
  "очікування CIP, сервісів": "waiting for CIP, utilities",
  "мала подача, зупинки,": "low feed, stops,",
  "нестабільне дозування": "unstable dosing",
  "брак, повернення,": "rejects, returns,",
  "втрати першого продукту": "first-product losses",
  "Окупність і чутливість": "Payback and sensitivity",
  "Окупність залежить від реальних річних заощаджень": "Payback depends on real annual savings",
  "інвестиція": "investment",
  "додатковий CAPEX": "additional CAPEX",
  "економія/рік": "savings/year",
  "енергія + продукт + простої": "energy + product + downtime",
  "окупність = CAPEX / savings": "payback = CAPEX / savings",
  "Рівні деталізації PFD і P&ID": "PFD and P&ID detail levels",
  "PFD і P&amp;ID показують різну глибину однієї лінії":
    "PFD and P&amp;ID show different depth of the same line",
  "Блок-схема": "Block diagram",
  "операції": "operations",
  "основні потоки": "main flows",
  "логіка процесу": "process logic",
  "апарати": "equipment",
  "витрати і режими": "flows and modes",
  "потоки продукту": "product flows",
  "клапани": "valves",
  "прилади": "instruments",
  "дренажі, CIP": "drains, CIP",
  "блокування": "interlocks",
  "PFD показує процес, P&amp;ID показує як ним керувати":
    "PFD shows the process, P&amp;ID shows how to control it",
  "основні апарати і потоки": "main equipment and flows",
  "танк": "tank",
  "нагрів": "heating",
  "фас.": "filling",
  "труби, клапани, датчики, блокування": "pipes, valves, sensors, interlocks",
  "Фактори проєктування трубопроводу": "Piping design factors",
  "Діаметр труби обирають не лише за витратою": "Pipe diameter is not selected by flow rate alone",
  "Трубопровід": "Pipeline",
  "лінії": "line",
  "Витрата": "Flow rate",
  "Швидкість": "Velocity",
  "Втрати тиску": "Pressure loss",
  "Дренаж": "Drainage",
  "Гігієнічність": "Hygiene",
  "Баланс продуктивності лінії": "Line capacity balance",
  "Лінія працює зі швидкістю найвужчого місця": "A line runs at the speed of its bottleneck",
  "подача": "feed",
  "6 т/год": "6 t/h",
  "нагрів": "heating",
  "5 т/год": "5 t/h",
  "витримка": "holding",
  "4 т/год": "4 t/h",
  "фасування": "filling",
  "вузьке місце": "bottleneck",
  "Від процесу до апаратурної схеми": "From process to equipment scheme",
  "Процес перетворюється на апаратурне оформлення поетапно":
    "A process turns into an equipment scheme step by step",
  "Операція": "Operation",
  "процесу": "process",
  "Потоки": "Flows",
  "і зв'язки": "and links",
  "Арматура": "Valves",
  "і CIP": "and CIP",
  "і безпека": "and safety",
  "Петля контролю якості": "Quality control loop",
  "Контроль якості працює як замкнена петля": "Quality control works as a closed loop",
  "Продукт": "Product",
  "і процес": "and process",
  "Специфікація": "Specification",
  "Вимірювання": "Measurement",
  "Рішення": "Decision",
  "Коригування": "Correction",
  "Карта ресурсних втрат": "Resource loss map",
  "Кожна втрата має місце, причину і власника": "Every loss has a place, cause and owner",
  "Продукт": "Product",
  "пуск, зупинка, брак": "startup, shutdown, rejects",
  "Вода": "Water",
  "CIP, ополіскування": "CIP, rinsing",
  "Тепло": "Heat",
  "пара, конденсат": "steam, condensate",
  "Холод": "Cold",
  "охолодження, втрати": "cooling, losses",
  "Хімія": "Chemistry",
  "мийні засоби": "cleaning agents",
  "Пакування": "Packaging",
  "плівка, тара, етикетка": "film, container, label",
  "Потік даних PLC SCADA MES ERP": "PLC SCADA MES ERP data flow",
  "Дані лінії проходять від датчика до виробничого рішення":
    "Line data moves from sensor to production decision",
  "Датчики, приводи, ваги, металодетектор": "Sensors, drives, scales, metal detector",
  "PLC / локальне керування": "PLC / local control",
  "SCADA / HMI / журнали процесу": "SCADA / HMI / process logs",
  "MES / ERP / якість / склад": "MES / ERP / quality / warehouse",
  "Ризики масштабування": "Scale-up risks",
  "Масштабування не є простим множенням розмірів": "Scale-up is not simple multiplication of dimensions",
  "лабораторія": "laboratory",
  "пілот": "pilot",
  "перевірка режиму": "mode check",
  "виробництво": "production",
  "надійність і якість": "reliability and quality",
  "Самодренований трубопровід": "Self-draining pipe",
  "Трубопровід має спорожнюватися без кишень": "A pipe must drain without pockets",
  "Добре: малий ухил до дренажу": "Good: slight slope to drain",
  "Погано: кишеня": "Bad: pocket",
  "залишок продукту/CIP": "product/CIP residue",
  "SPC-карта процесу": "SPC process chart",
  "SPC відрізняє природну мінливість від сигналу проблеми":
    "SPC separates natural variation from a problem signal",
  "Готовність до старту": "Startup readiness",
  "Перед першою партією лінія має бути готова системно":
    "Before the first batch the line must be systematically ready",
  "□ обладнання змонтоване за схемою і доступне для обслуговування":
    "□ equipment is installed by scheme and accessible for maintenance",
  "□ датчики відкалібровані, клапани і насоси перевірені":
    "□ sensors are calibrated, valves and pumps checked",
  "□ CIP, дренажі, аварійні режими і блокування протестовані":
    "□ CIP, drains, emergency modes and interlocks are tested",
  "□ оператори мають інструкції, рецепти і межі параметрів":
    "□ operators have instructions, recipes and parameter limits",
  "□ перша партія має план контролю якості і відбраковки":
    "□ first batch has a quality control and reject plan",
  "□ відхилення, корекції і рішення записуються": "□ deviations, corrections and decisions are recorded",
  "Ланцюг простежуваності": "Traceability chain",
  "Простежуваність зв'язує матеріальний потік із даними партії":
    "Traceability links material flow with batch data",
  "Приймання": "Receiving",
  "сировини": "raw material",
  "Підготовка": "Preparation",
  "Пакування": "Packaging",
  "і склад": "and warehouse",
  "Відвантаження": "Shipment",
  "Водний баланс харчової лінії": "Water balance of a food line",
  "Водний баланс показує, де лінія споживає і втрачає ресурс":
    "Water balance shows where the line consumes and loses resource",
  "Харчова": "Food",
  "Вода продукту": "Product water",
  "CIP / миття": "CIP / washing",
  "Охолодження": "Cooling",
  "Готовий продукт": "Finished product",
  "Стоки": "Wastewater",
  "Повернення": "Return",
  "Зонування і перехресне забруднення": "Zoning and cross-contamination",
  "Зонування зменшує ризик перехресного забруднення":
    "Zoning reduces the risk of cross-contamination",
  "сира зона": "raw zone",
  "сировина, тара, земля, мікрофлора": "raw material, packaging, soil, microflora",
  "готова зона": "ready zone",
  "охолоджений продукт, пакування": "cooled product, packaging",
  "санітарний бар'єр": "hygienic barrier",
  "контрольований потік продукту": "controlled product flow",
  "персонал і відходи не мають рухатись назад": "personnel and waste must not move backward",
};

const ukToRu = {
  і: "и",
  І: "И",
  ї: "и",
  Ї: "И",
  є: "е",
  Є: "Е",
  ґ: "г",
  Ґ: "Г",
};

const translit = {
  а: "a",
  б: "b",
  в: "v",
  г: "h",
  ґ: "g",
  д: "d",
  е: "e",
  є: "ie",
  ж: "zh",
  з: "z",
  и: "y",
  і: "i",
  ї: "i",
  й: "i",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ь: "",
  ю: "iu",
  я: "ia",
};

function latinFallback(text) {
  return [...text]
    .map((char) => {
      const lower = char.toLowerCase();
      const mapped = translit[lower];
      if (!mapped) return char;
      return lower === char ? mapped : mapped.toUpperCase();
    })
    .join("");
}

function ruFallback(text) {
  return [...text].map((char) => ukToRu[char] ?? char).join("");
}

function replaceAllText(svg, dictionary, fallback) {
  let localized = svg;
  const entries = Object.entries(dictionary).sort((a, b) => b[0].length - a[0].length);
  for (const [source, target] of entries) {
    localized = localized.split(source).join(target);
  }
  localized = localized.replace(/>([^<>]*[А-Яа-яІіЇїЄєҐґ][^<>]*)</g, (_, text) => `>${fallback(text)}<`);
  return localized
    .replace(/[ьЬ]/g, "")
    .replace(/[А-Яа-яІіЇїЄєҐґ]/g, (char) => fallback(char))
    .replace(/[ьЬ]/g, "");
}

const files = (await readdir(sourceDir)).filter((fileName) => fileName.endsWith(".svg")).sort();

for (const locale of ["en", "de", "ru"]) {
  const outputDir = join(process.cwd(), "public", "images", "lectures", locale, "process-design");
  const dictionary = locale === "ru" ? {} : en;
  const fallback = locale === "ru" ? ruFallback : latinFallback;

  for (const fileName of files) {
    const sourcePath = join(sourceDir, fileName);
    const outputPath = join(outputDir, fileName);
    const source = await readFile(sourcePath, "utf8");
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, replaceAllText(source, dictionary, fallback), "utf8");
  }
}
