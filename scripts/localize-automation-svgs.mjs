import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const sourceDir = join(process.cwd(), "public", "images", "lectures", "automation-control");

const dictionaries = {
  en: {
    "Карта вимірювань харчового процесу": "Food process instrumentation map",
    "Схема основних параметрів, які вимірюють у харчовій технологічній лінії.":
      "Diagram of the main parameters measured in a food processing line.",
    "Що вимірюють у харчовій лінії": "What is measured in a food line",
    процес: "process",
    "апарат, трубопровід, лінія": "vessel, pipeline, line",
    температура: "temperature",
    витрата: "flow rate",
    тиск: "pressure",
    рівень: "level",
    провідність: "conductivity",
    "Замкнений контур регулювання": "Closed control loop",
    "Схема датчика, контролера, виконавчого механізму і процесу у замкненому контурі керування.":
      "Diagram of a sensor, controller, actuator and process in a closed control loop.",
    "Замкнений контур: виміряти, порівняти, вплинути":
      "Closed loop: measure, compare, act",
    завдання: "setpoint",
    контролер: "controller",
    "PID / логіка": "PID / logic",
    клапан: "valve",
    "насос, ТЕН": "pump, heater",
    "датчик PV": "PV sensor",
    "Дані і простежуваність": "Data and traceability",
    "Схема руху даних від датчиків до PLC, HMI, журналу партії, тривог і аналізу ефективності.":
      "Diagram of data flow from sensors to PLC, HMI, batch record, alarms and efficiency analysis.",
    "Автоматизація дає не лише керування, а й дані":
      "Automation provides not only control, but also data",
    датчики: "sensors",
    "логіка, блокування": "logic, interlocks",
    "оператор, рецепти": "operator, recipes",
    архів: "archive",
    "партія, тренди": "batch, trends",
    "тривоги і блокування": "alarms and interlocks",
    простежуваність: "traceability",
    "OEE і ресурси": "OEE and resources",
    "Карта ресурсних втрат харчової лінії": "Resource loss map of a food line",
    "Схема типових місць втрат енергії, води, пари, холоду, стисненого повітря і продукту.":
      "Diagram of typical losses of energy, water, steam, cooling, compressed air and product.",
    "Ресурсоефективність починається з карти втрат":
      "Resource efficiency starts with a loss map",
    "харчова технологічна лінія": "food processing line",
    "нагрівання, охолодження, миття, транспортування, фасування":
      "heating, cooling, washing, conveying, filling",
    "пара і тепло": "steam and heat",
    холод: "cooling",
    вода: "water",
    повітря: "air",
    електроенергія: "electricity",
    продукт: "product",
    "хімія CIP": "CIP chemicals",
    "Каскад рекуперації тепла": "Heat recovery cascade",
    "Схема використання тепла гарячого продукту для попереднього нагрівання холодного потоку.":
      "Diagram of using heat from a hot product to preheat a cold stream.",
    "Рекуперація: тепло продукту не викидають, а повертають":
      "Recovery: product heat is returned, not wasted",
    теплообмінник: "heat exchanger",
    "гарячий потік віддає тепло": "hot stream gives up heat",
    "холодний потік підігрівається": "cold stream is preheated",
    "холодний продукт": "cold product",
    "попередньо нагрітий": "preheated",
    "гарячий продукт": "hot product",
    "охолоджений після віддачі тепла": "cooled after heat recovery",
    "Менше пари на нагрівання і менше холоду на охолодження.":
      "Less steam for heating and less cooling duty.",
    "Контур енергомоніторингу": "Energy monitoring loop",
    "Схема циклу вимірювання ресурсів, аналізу, дії і перевірки результату.":
      "Diagram of the cycle of resource measurement, analysis, action and result verification.",
    "Ресурси зменшують циклом, а не разовою акцією":
      "Resource use is reduced by a cycle, not a one-off action",
    виміряти: "measure",
    "лічильники, тренди": "meters, trends",
    порівняти: "compare",
    "кВт·год/т, вода/т": "kWh/t, water/t",
    діяти: "act",
    "налаштування, ремонт": "settings, repair",
    "перевірити економію": "verify savings",
    "Без вимірювання немає керованого енергозбереження.":
      "Without measurement there is no controlled energy saving.",
  },
  de: {
    "Карта вимірювань харчового процесу": "Messkarte des Lebensmittelprozesses",
    "Схема основних параметрів, які вимірюють у харчовій технологічній лінії.":
      "Schema der wichtigsten Parameter, die in einer Lebensmittellinie gemessen werden.",
    "Що вимірюють у харчовій лінії": "Was in einer Lebensmittellinie gemessen wird",
    процес: "Prozess",
    "апарат, трубопровід, лінія": "Apparat, Rohrleitung, Linie",
    температура: "Temperatur",
    витрата: "Durchfluss",
    тиск: "Druck",
    рівень: "Fuellstand",
    провідність: "Leitfaehigkeit",
    "Замкнений контур регулювання": "Geschlossener Regelkreis",
    "Схема датчика, контролера, виконавчого механізму і процесу у замкненому контурі керування.":
      "Schema von Sensor, Regler, Stellglied und Prozess im geschlossenen Regelkreis.",
    "Замкнений контур: виміряти, порівняти, вплинути":
      "Regelkreis: messen, vergleichen, eingreifen",
    завдання: "Sollwert",
    контролер: "Regler",
    "PID / логіка": "PID / Logik",
    клапан: "Ventil",
    "насос, ТЕН": "Pumpe, Heizer",
    "датчик PV": "PV-Sensor",
    "Дані і простежуваність": "Daten und Rueckverfolgbarkeit",
    "Схема руху даних від датчиків до PLC, HMI, журналу партії, тривог і аналізу ефективності.":
      "Datenfluss von Sensoren zu PLC, HMI, Chargenprotokoll, Alarmen und Effizienzanalyse.",
    "Автоматизація дає не лише керування, а й дані":
      "Automatisierung liefert nicht nur Steuerung, sondern auch Daten",
    датчики: "Sensoren",
    "логіка, блокування": "Logik, Verriegelungen",
    "оператор, рецепти": "Bediener, Rezepte",
    архів: "Archiv",
    "партія, тренди": "Charge, Trends",
    "тривоги і блокування": "Alarme und Verriegelungen",
    простежуваність: "Rueckverfolgbarkeit",
    "OEE і ресурси": "OEE und Ressourcen",
    "Карта ресурсних втрат харчової лінії": "Karte der Ressourcenverluste einer Lebensmittellinie",
    "Схема типових місць втрат енергії, води, пари, холоду, стисненого повітря і продукту.":
      "Schema typischer Verluste von Energie, Wasser, Dampf, Kaelte, Druckluft und Produkt.",
    "Ресурсоефективність починається з карти втрат":
      "Ressourceneffizienz beginnt mit einer Verlustkarte",
    "харчова технологічна лінія": "Lebensmittelprozesslinie",
    "нагрівання, охолодження, миття, транспортування, фасування":
      "Erwaermen, Kuehlen, Waschen, Foerdern, Abfuellen",
    "пара і тепло": "Dampf und Waerme",
    холод: "Kaelte",
    вода: "Wasser",
    повітря: "Luft",
    електроенергія: "Strom",
    продукт: "Produkt",
    "хімія CIP": "CIP-Chemie",
    "Каскад рекуперації тепла": "Kaskade der Waermerueckgewinnung",
    "Схема використання тепла гарячого продукту для попереднього нагрівання холодного потоку.":
      "Schema zur Nutzung der Waerme eines heissen Produkts zum Vorwaermen eines kalten Stroms.",
    "Рекуперація: тепло продукту не викидають, а повертають":
      "Rueckgewinnung: Produktwaerme wird zurueckgefuehrt",
    теплообмінник: "Waermeuebertrager",
    "гарячий потік віддає тепло": "heisser Strom gibt Waerme ab",
    "холодний потік підігрівається": "kalter Strom wird vorgewaermt",
    "холодний продукт": "kaltes Produkt",
    "попередньо нагрітий": "vorgewaermt",
    "гарячий продукт": "heisses Produkt",
    "охолоджений після віддачі тепла": "nach Waermeabgabe gekuehlt",
    "Менше пари на нагрівання і менше холоду на охолодження.":
      "Weniger Dampf zum Heizen und weniger Kaelte zum Kuehlen.",
    "Контур енергомоніторингу": "Energiemonitoring-Zyklus",
    "Схема циклу вимірювання ресурсів, аналізу, дії і перевірки результату.":
      "Schema des Zyklus aus Ressourcenmessung, Analyse, Massnahme und Ergebnispruefung.",
    "Ресурси зменшують циклом, а не разовою акцією":
      "Ressourcen werden durch einen Zyklus gesenkt, nicht durch eine Einzelaktion",
    виміряти: "messen",
    "лічильники, тренди": "Zaehler, Trends",
    порівняти: "vergleichen",
    "кВт·год/т, вода/т": "kWh/t, Wasser/t",
    діяти: "handeln",
    "налаштування, ремонт": "Einstellung, Reparatur",
    "перевірити економію": "Einsparung pruefen",
    "Без вимірювання немає керованого енергозбереження.":
      "Ohne Messung gibt es keine gesteuerte Energieeinsparung.",
  },
  ru: {
    "Карта вимірювань харчового процесу": "Карта измерений пищевого процесса",
    "Схема основних параметрів, які вимірюють у харчовій технологічній лінії.":
      "Схема основных параметров, измеряемых в пищевой технологической линии.",
    "Що вимірюють у харчовій лінії": "Что измеряют в пищевой линии",
    процес: "процесс",
    "апарат, трубопровід, лінія": "аппарат, трубопровод, линия",
    температура: "температура",
    витрата: "расход",
    тиск: "давление",
    рівень: "уровень",
    провідність: "проводимость",
    "Замкнений контур регулювання": "Замкнутый контур регулирования",
    "Схема датчика, контролера, виконавчого механізму і процесу у замкненому контурі керування.":
      "Схема датчика, контроллера, исполнительного механизма и процесса в замкнутом контуре управления.",
    "Замкнений контур: виміряти, порівняти, вплинути":
      "Замкнутый контур: измерить, сравнить, воздействовать",
    завдання: "задание",
    контролер: "контроллер",
    "PID / логіка": "PID / логика",
    клапан: "клапан",
    "насос, ТЕН": "насос, нагреватель",
    "датчик PV": "датчик PV",
    "Дані і простежуваність": "Данные и прослеживаемость",
    "Схема руху даних від датчиків до PLC, HMI, журналу партії, тривог і аналізу ефективності.":
      "Схема движения данных от датчиков к PLC, HMI, журналу партии, тревогам и анализу эффективности.",
    "Автоматизація дає не лише керування, а й дані":
      "Автоматизация дает не только управление, но и данные",
    датчики: "датчики",
    "логіка, блокування": "логика, блокировки",
    "оператор, рецепти": "оператор, рецепты",
    архів: "архив",
    "партія, тренди": "партия, тренды",
    "тривоги і блокування": "тревоги и блокировки",
    простежуваність: "прослеживаемость",
    "OEE і ресурси": "OEE и ресурсы",
    "Карта ресурсних втрат харчової лінії": "Карта ресурсных потерь пищевой линии",
    "Схема типових місць втрат енергії, води, пари, холоду, стисненого повітря і продукту.":
      "Схема типичных мест потерь энергии, воды, пара, холода, сжатого воздуха и продукта.",
    "Ресурсоефективність починається з карти втрат":
      "Ресурсоэффективность начинается с карты потерь",
    "харчова технологічна лінія": "пищевая технологическая линия",
    "нагрівання, охолодження, миття, транспортування, фасування":
      "нагрев, охлаждение, мойка, транспортирование, фасование",
    "пара і тепло": "пар и тепло",
    холод: "холод",
    вода: "вода",
    повітря: "воздух",
    електроенергія: "электроэнергия",
    продукт: "продукт",
    "хімія CIP": "химия CIP",
    "Каскад рекуперації тепла": "Каскад рекуперации тепла",
    "Схема використання тепла гарячого продукту для попереднього нагрівання холодного потоку.":
      "Схема использования тепла горячего продукта для предварительного нагрева холодного потока.",
    "Рекуперація: тепло продукту не викидають, а повертають":
      "Рекуперация: тепло продукта не теряют, а возвращают",
    теплообмінник: "теплообменник",
    "гарячий потік віддає тепло": "горячий поток отдает тепло",
    "холодний потік підігрівається": "холодный поток подогревается",
    "холодний продукт": "холодный продукт",
    "попередньо нагрітий": "предварительно нагретый",
    "гарячий продукт": "горячий продукт",
    "охолоджений після віддачі тепла": "охлажденный после отдачи тепла",
    "Менше пари на нагрівання і менше холоду на охолодження.":
      "Меньше пара на нагрев и меньше холода на охлаждение.",
    "Контур енергомоніторингу": "Контур энергомониторинга",
    "Схема циклу вимірювання ресурсів, аналізу, дії і перевірки результату.":
      "Схема цикла измерения ресурсов, анализа, действия и проверки результата.",
    "Ресурси зменшують циклом, а не разовою акцією":
      "Расход ресурсов снижают циклом, а не разовой акцией",
    виміряти: "измерить",
    "лічильники, тренди": "счетчики, тренды",
    порівняти: "сравнить",
    "кВт·год/т, вода/т": "кВт·ч/т, вода/т",
    діяти: "действовать",
    "налаштування, ремонт": "настройки, ремонт",
    "перевірити економію": "проверить экономию",
    "Без вимірювання немає керованого енергозбереження.":
      "Без измерения нет управляемого энергосбережения.",
  },
};

function replaceAllText(svg, replacements) {
  let localized = svg;
  for (const [source, target] of Object.entries(replacements).sort((a, b) => b[0].length - a[0].length)) {
    localized = localized.split(source).join(target);
  }
  return localized;
}

const fileNames = [
  "instrumentation-map.svg",
  "control-loop.svg",
  "data-traceability.svg",
  "resource-loss-map.svg",
  "heat-recovery-cascade.svg",
  "energy-monitoring-loop.svg",
];

for (const [locale, dictionary] of Object.entries(dictionaries)) {
  for (const fileName of fileNames) {
    const sourcePath = join(sourceDir, fileName);
    const outputPath = join(process.cwd(), "public", "images", "lectures", locale, "automation-control", fileName);
    const source = await readFile(sourcePath, "utf8");
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, replaceAllText(source, dictionary), "utf8");
  }
}
