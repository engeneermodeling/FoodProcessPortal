import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const sourceDir = join(process.cwd(), "public", "images", "lectures", "mixing");

const translations = {
  en: {
    "agitator-geometry.svg": {
    "Основні геометричні параметри апарата з мішалкою": "Main geometric parameters of a stirred vessel",
    "Схема циліндричного апарата з мішалкою, валом, перегородками, сорочкою і позначеннями D, H, d_m, h та b.":
      "Diagram of a cylindrical stirred vessel with shaft, baffles, jacket and D, H, d_m, h and b dimensions.",
    "Типові співвідношення: d_m/D, H/D, h/d_m, b/D": "Typical ratios: d_m/D, H/D, h/d_m, b/D",
    "D - діаметр апарата, H - висота продукту, d_m - діаметр мішалки, h - відстань від дна, b - ширина перегородки":
      "D - vessel diameter, H - product height, d_m - impeller diameter, h - bottom clearance, b - baffle width",
    },
    "emulsion-droplets.svg": {
    "Вплив інтенсивності перемішування на краплі емульсії":
      "Effect of mixing intensity on emulsion droplets",
    "Низький зсув дає великі краплі, достатній зсув і стабілізатор формують дрібнішу стабільну емульсію.":
      "Low shear produces large droplets; sufficient shear and stabilizer form a finer stable emulsion.",
    "Недостатній зсув": "Insufficient shear",
    "великі краплі швидко зливаються": "large droplets coalesce quickly",
    "Достатній зсув + стабілізатор": "Sufficient shear + stabilizer",
    "дрібніші краплі, вища стійкість": "finer droplets, higher stability",
    },
    "impeller-flow-patterns.svg": {
    "Типові потоки в апараті з мішалкою": "Typical flow patterns in a stirred vessel",
    "Три схеми показують осьовий, радіальний і тангенціальний потік у резервуарі.":
      "Three diagrams show axial, radial and tangential flow in a vessel.",
    "Осьовий потік": "Axial flow",
    "пропелерна, лопатева": "propeller, pitched-blade",
    "суспензії, теплообмін": "suspensions, heat transfer",
    "Радіальний потік": "Radial flow",
    "турбінна": "turbine",
    "емульсії, диспергування": "emulsions, dispersion",
    "Тангенціальний потік": "Tangential flow",
    "якірна, рамна": "anchor, gate",
    "в'язкі продукти": "viscous products",
    },
    "mixing-power-regimes.svg": {
    "Режими перемішування і критерій потужності": "Mixing regimes and power number",
    "Графік показує ламінарну, перехідну і турбулентну області залежності критерію потужності від числа Рейнольдса мішалки.":
      "The chart shows laminar, transitional and turbulent regions of power number versus impeller Reynolds number.",
    "Ламінарний": "Laminar",
    "Перехідний": "Transitional",
    "Турбулентний": "Turbulent",
    },
    "mixing-tasks-map.svg": {
    "Карта задач перемішування у харчових виробництвах": "Map of mixing tasks in food manufacturing",
    "Центральний блок перемішування пов'язаний із розчиненням, суспендуванням, емульгуванням, теплообміном, газорідинним диспергуванням і гомогенізацією.":
      "The central mixing block is connected with dissolution, suspension, emulsification, heat transfer, gas-liquid dispersion and homogenization.",
    "Перемішування": "Mixing",
    "мета визначає тип мішалки": "the goal determines the impeller type",
    "Розчинення": "Dissolution",
    "цукор, сіль, сухі суміші": "sugar, salt, dry blends",
    "важливі час і температура": "time and temperature matter",
    "Суспендування": "Suspension",
    "м'якоть, какао, спеції": "pulp, cocoa, spices",
    "не дати частинкам осісти": "keep particles from settling",
    "Емульгування": "Emulsification",
    "соуси, майонез, молоко": "sauces, mayonnaise, milk",
    "потрібні зсув і стабілізатор": "shear and stabilizer are needed",
    "Теплообмін": "Heat transfer",
    "варіння, охолодження, пасти": "cooking, cooling, pastes",
    "менше пригару і застійних зон": "less fouling and dead zones",
    "Газ-рідина": "Gas-liquid",
    "аерація, карбонізація": "aeration, carbonation",
    "контроль піни і бульбашок": "foam and bubble control",
    "Гомогенізація": "Homogenization",
    "вирівнювання складу і текстури": "uniform composition and texture",
    "якість вимірюють стабільністю": "quality is measured by stability",
    },
    "mixing-time-scale.svg": {
    "Оцінка часу перемішування за трасером": "Tracer-based mixing time estimate",
    "Крива концентрації трасера наближається до усталеного значення, а зона плюс-мінус п'ять відсотків задає час перемішування.":
      "The tracer concentration curve approaches the steady value; the plus-minus five percent band defines mixing time.",
    "Час перемішування: сигнал увійшов у зону ±5%": "Mixing time: signal entered the +/-5% band",
    "час, с": "time, s",
    "концентрація трасера": "tracer concentration",
    "після t_m продукт вважають достатньо однорідним": "after t_m the product is considered sufficiently uniform",
    },
    "multiphase-mixing-map.svg": {
    "Багатофазне перемішування у харчових системах": "Multiphase mixing in food systems",
    "Три основні групи: тверде-рідина, рідина-рідина і газ-рідина з типовими харчовими прикладами.":
      "Three main groups: solid-liquid, liquid-liquid and gas-liquid with typical food examples.",
    "Багатофазні системи: задача мішалки - керувати розміром і рухом фази":
      "Multiphase systems: the impeller must control phase size and motion",
    "Тверде + рідина": "Solid + liquid",
    "суспензії какао, спеції,": "cocoa suspensions, spices,",
    "м'якоть, кристали цукру": "pulp, sugar crystals",
    "Рідина + рідина": "Liquid + liquid",
    "майонез, соуси,": "mayonnaise, sauces,",
    "молочно-жирові емульсії": "milk-fat emulsions",
    "Газ + рідина": "Gas + liquid",
    "аерація десертів,": "dessert aeration,",
    "карбонізація, піна": "carbonation, foam",
    },
    "stirred-heat-transfer.svg": {
    "Теплообмін в апараті з перемішуванням": "Heat transfer in a stirred vessel",
    "Схема апарата з сорочкою, потоком теплоносія, мішалкою і тепловим потоком через стінку.":
      "Diagram of a jacketed stirred vessel with heat-transfer medium, impeller and heat flow through the wall.",
    "пара / вода": "steam / water",
    "вихід": "outlet",
    "Перемішування зменшує термічний опір біля стінки":
      "Mixing reduces thermal resistance near the wall",
    "Q = K · F · ΔT_сер": "Q = K · F · ΔT_avg",
    "більша циркуляція - вищий коефіцієнт тепловіддачі, але більше енергоспоживання":
      "more circulation - higher heat-transfer coefficient, but higher energy use",
    },
    "suspension-states.svg": {
    "Стани суспендування твердих частинок": "States of solid particle suspension",
    "Порівняння осаду на дні, часткового суспендування та повного відриву частинок від дна.":
      "Comparison of sediment on the bottom, partial suspension and complete lift-off from the bottom.",
    "Осад": "Sediment",
    "замало швидкості або невдалий потік": "too little speed or poor flow pattern",
    "Часткове суспендування": "Partial suspension",
    "частинки ще затримуються біля дна": "particles still remain near the bottom",
    "Повне суспендування": "Complete suspension",
    "мінімальна швидкість повного відриву": "minimum speed for complete lift-off",
    },
  },
  de: {
    "agitator-geometry.svg": {
      "Основні геометричні параметри апарата з мішалкою": "Wichtige geometrische Parameter eines Ruehrbehaelters",
      "Схема циліндричного апарата з мішалкою, валом, перегородками, сорочкою і позначеннями D, H, d_m, h та b.":
        "Schema eines zylindrischen Ruehrbehaelters mit Welle, Strombrechern, Mantel und den Massen D, H, d_m, h und b.",
      "Типові співвідношення: d_m/D, H/D, h/d_m, b/D": "Typische Verhaeltnisse: d_m/D, H/D, h/d_m, b/D",
      "D - діаметр апарата, H - висота продукту, d_m - діаметр мішалки, h - відстань від дна, b - ширина перегородки":
        "D - Behaelterdurchmesser, H - Produkthoehe, d_m - Ruehrerdurchmesser, h - Bodenabstand, b - Strombrecherbreite",
    },
    "emulsion-droplets.svg": {
      "Вплив інтенсивності перемішування на краплі емульсії":
        "Einfluss der Mischintensitaet auf Emulsionstropfen",
      "Низький зсув дає великі краплі, достатній зсув і стабілізатор формують дрібнішу стабільну емульсію.":
        "Geringe Scherung erzeugt grosse Tropfen; ausreichende Scherung und Stabilisator bilden eine feinere stabile Emulsion.",
      "Недостатній зсув": "Unzureichende Scherung",
      "великі краплі швидко зливаються": "grosse Tropfen koaleszieren schnell",
      "Достатній зсув + стабілізатор": "Ausreichende Scherung + Stabilisator",
      "дрібніші краплі, вища стійкість": "feinere Tropfen, hoehere Stabilitaet",
    },
    "impeller-flow-patterns.svg": {
      "Типові потоки в апараті з мішалкою": "Typische Stroemungsbilder im Ruehrbehaelter",
      "Три схеми показують осьовий, радіальний і тангенціальний потік у резервуарі.":
        "Drei Schemata zeigen axiale, radiale und tangentiale Stroemung im Behaelter.",
      "Осьовий потік": "Axiale Stroemung",
      "пропелерна, лопатева": "Propeller, Schraegblatt",
      "суспензії, теплообмін": "Suspensionen, Waermeuebergang",
      "Радіальний потік": "Radiale Stroemung",
      "турбінна": "Turbine",
      "емульсії, диспергування": "Emulsionen, Dispergieren",
      "Тангенціальний потік": "Tangentiale Stroemung",
      "якірна, рамна": "Anker, Rahmen",
      "в'язкі продукти": "viskose Produkte",
    },
    "mixing-power-regimes.svg": {
      "Режими перемішування і критерій потужності": "Ruehrregime und Leistungszahl",
      "Графік показує ламінарну, перехідну і турбулентну області залежності критерію потужності від числа Рейнольдса мішалки.":
        "Das Diagramm zeigt laminare, Uebergangs- und turbulente Bereiche der Leistungszahl in Abhaengigkeit von der Ruehrer-Reynolds-Zahl.",
      "Ламінарний": "Laminar",
      "Перехідний": "Uebergang",
      "Турбулентний": "Turbulent",
    },
    "mixing-tasks-map.svg": {
      "Карта задач перемішування у харчових виробництвах": "Aufgaben des Mischens in der Lebensmittelherstellung",
      "Центральний блок перемішування пов'язаний із розчиненням, суспендуванням, емульгуванням, теплообміном, газорідинним диспергуванням і гомогенізацією.":
        "Der zentrale Mischblock ist mit Loesen, Suspendieren, Emulgieren, Waermeuebergang, Gas-Fluessig-Dispergieren und Homogenisieren verbunden.",
      "Перемішування": "Mischen",
      "мета визначає тип мішалки": "das Ziel bestimmt den Ruehrertyp",
      "Розчинення": "Loesen",
      "цукор, сіль, сухі суміші": "Zucker, Salz, Trockenmischungen",
      "важливі час і температура": "Zeit und Temperatur sind wichtig",
      "Суспендування": "Suspendieren",
      "м'якоть, какао, спеції": "Fruchtmark, Kakao, Gewuerze",
      "не дати частинкам осісти": "Partikel am Absetzen hindern",
      "Емульгування": "Emulgieren",
      "соуси, майонез, молоко": "Saucen, Mayonnaise, Milch",
      "потрібні зсув і стабілізатор": "Scherung und Stabilisator noetig",
      "Теплообмін": "Waermeuebergang",
      "варіння, охолодження, пасти": "Kochen, Kuehlen, Pasten",
      "менше пригару і застійних зон": "weniger Anbrennen und Totzonen",
      "Газ-рідина": "Gas-Fluessig",
      "аерація, карбонізація": "Aeration, Karbonisierung",
      "контроль піни і бульбашок": "Kontrolle von Schaum und Blasen",
      "Гомогенізація": "Homogenisieren",
      "вирівнювання складу і текстури": "gleichmaessige Zusammensetzung und Textur",
      "якість вимірюють стабільністю": "Qualitaet wird an Stabilitaet gemessen",
    },
    "mixing-time-scale.svg": {
      "Оцінка часу перемішування за трасером": "Bestimmung der Mischzeit mit Tracer",
      "Крива концентрації трасера наближається до усталеного значення, а зона плюс-мінус п'ять відсотків задає час перемішування.":
        "Die Tracerkonzentration naeher sich dem stationaeren Wert; das Band von plus/minus fuenf Prozent definiert die Mischzeit.",
      "Час перемішування: сигнал увійшов у зону ±5%": "Mischzeit: Signal liegt im Bereich +/-5%",
      "час, с": "Zeit, s",
      "концентрація трасера": "Tracerkonzentration",
      "після t_m продукт вважають достатньо однорідним": "nach t_m gilt das Produkt als ausreichend homogen",
    },
    "multiphase-mixing-map.svg": {
      "Багатофазне перемішування у харчових системах": "Mehrphasiges Mischen in Lebensmittelsystemen",
      "Три основні групи: тверде-рідина, рідина-рідина і газ-рідина з типовими харчовими прикладами.":
        "Drei Hauptgruppen: Feststoff-Fluessig, Fluessig-Fluessig und Gas-Fluessig mit typischen Lebensmittelbeispielen.",
      "Багатофазні системи: задача мішалки - керувати розміром і рухом фази":
        "Mehrphasige Systeme: Aufgabe des Ruehrers ist die Steuerung von Phasengroesse und Bewegung",
      "Тверде + рідина": "Feststoff + Fluessig",
      "суспензії какао, спеції,": "Kakaosuspensionen, Gewuerze,",
      "м'якоть, кристали цукру": "Fruchtmark, Zuckerkristalle",
      "Рідина + рідина": "Fluessig + Fluessig",
      "майонез, соуси,": "Mayonnaise, Saucen,",
      "молочно-жирові емульсії": "Milch-Fett-Emulsionen",
      "Газ + рідина": "Gas + Fluessig",
      "аерація десертів,": "Dessertbelueftung,",
      "карбонізація, піна": "Karbonisierung, Schaum",
    },
    "stirred-heat-transfer.svg": {
      "Теплообмін в апараті з перемішуванням": "Waermeuebergang im Ruehrbehaelter",
      "Схема апарата з сорочкою, потоком теплоносія, мішалкою і тепловим потоком через стінку.":
        "Schema eines Behaelters mit Mantel, Waermetraegerstrom, Ruehrer und Waermestrom durch die Wand.",
      "пара / вода": "Dampf / Wasser",
      "вихід": "Austritt",
      "Перемішування зменшує термічний опір біля стінки":
        "Mischen verringert den thermischen Widerstand an der Wand",
      "Q = K · F · ΔT_сер": "Q = K · F · ΔT_m",
      "більша циркуляція - вищий коефіцієнт тепловіддачі, але більше енергоспоживання":
        "mehr Umlauf - hoeherer Waermeuebergangskoeffizient, aber hoeherer Energiebedarf",
    },
    "suspension-states.svg": {
      "Стани суспендування твердих частинок": "Zustaende der Feststoffsuspendierung",
      "Порівняння осаду на дні, часткового суспендування та повного відриву частинок від дна.":
        "Vergleich von Bodensatz, teilweiser Suspendierung und vollstaendigem Abheben der Partikel vom Boden.",
      "Осад": "Bodensatz",
      "замало швидкості або невдалий потік": "zu geringe Drehzahl oder unguenstige Stroemung",
      "Часткове суспендування": "Teilweise Suspendierung",
      "частинки ще затримуються біля дна": "Partikel bleiben noch nahe am Boden",
      "Повне суспендування": "Vollstaendige Suspendierung",
      "мінімальна швидкість повного відриву": "Mindestdrehzahl fuer vollstaendiges Abheben",
    },
  },
  ru: {
    "agitator-geometry.svg": {
      "Основні геометричні параметри апарата з мішалкою": "Основные геометрические параметры аппарата с мешалкой",
      "Схема циліндричного апарата з мішалкою, валом, перегородками, сорочкою і позначеннями D, H, d_m, h та b.":
        "Схема цилиндрического аппарата с мешалкой, валом, перегородками, рубашкой и обозначениями D, H, d_m, h и b.",
      "Типові співвідношення: d_m/D, H/D, h/d_m, b/D": "Типовые соотношения: d_m/D, H/D, h/d_m, b/D",
      "D - діаметр апарата, H - висота продукту, d_m - діаметр мішалки, h - відстань від дна, b - ширина перегородки":
        "D - диаметр аппарата, H - высота продукта, d_m - диаметр мешалки, h - расстояние от дна, b - ширина перегородки",
    },
    "emulsion-droplets.svg": {
      "Вплив інтенсивності перемішування на краплі емульсії":
        "Влияние интенсивности перемешивания на капли эмульсии",
      "Низький зсув дає великі краплі, достатній зсув і стабілізатор формують дрібнішу стабільну емульсію.":
        "Низкий сдвиг дает крупные капли; достаточный сдвиг и стабилизатор формируют более мелкую устойчивую эмульсию.",
      "Недостатній зсув": "Недостаточный сдвиг",
      "великі краплі швидко зливаються": "крупные капли быстро сливаются",
      "Достатній зсув + стабілізатор": "Достаточный сдвиг + стабилизатор",
      "дрібніші краплі, вища стійкість": "более мелкие капли, выше устойчивость",
    },
    "impeller-flow-patterns.svg": {
      "Типові потоки в апараті з мішалкою": "Типовые потоки в аппарате с мешалкой",
      "Три схеми показують осьовий, радіальний і тангенціальний потік у резервуарі.":
        "Три схемы показывают осевой, радиальный и тангенциальный поток в резервуаре.",
      "Осьовий потік": "Осевой поток",
      "пропелерна, лопатева": "пропеллерная, лопастная",
      "суспензії, теплообмін": "суспензии, теплообмен",
      "Радіальний потік": "Радиальный поток",
      "турбінна": "турбинная",
      "емульсії, диспергування": "эмульсии, диспергирование",
      "Тангенціальний потік": "Тангенциальный поток",
      "якірна, рамна": "якорная, рамная",
      "в'язкі продукти": "вязкие продукты",
    },
    "mixing-power-regimes.svg": {
      "Режими перемішування і критерій потужності": "Режимы перемешивания и критерий мощности",
      "Графік показує ламінарну, перехідну і турбулентну області залежності критерію потужності від числа Рейнольдса мішалки.":
        "График показывает ламинарную, переходную и турбулентную области зависимости критерия мощности от числа Рейнольдса мешалки.",
      "Ламінарний": "Ламинарный",
      "Перехідний": "Переходный",
      "Турбулентний": "Турбулентный",
    },
    "mixing-tasks-map.svg": {
      "Карта задач перемішування у харчових виробництвах": "Карта задач перемешивания в пищевых производствах",
      "Центральний блок перемішування пов'язаний із розчиненням, суспендуванням, емульгуванням, теплообміном, газорідинним диспергуванням і гомогенізацією.":
        "Центральный блок перемешивания связан с растворением, суспендированием, эмульгированием, теплообменом, газожидкостным диспергированием и гомогенизацией.",
      "Перемішування": "Перемешивание",
      "мета визначає тип мішалки": "цель определяет тип мешалки",
      "Розчинення": "Растворение",
      "цукор, сіль, сухі суміші": "сахар, соль, сухие смеси",
      "важливі час і температура": "важны время и температура",
      "Суспендування": "Суспендирование",
      "м'якоть, какао, спеції": "мякоть, какао, специи",
      "не дати частинкам осісти": "не дать частицам осесть",
      "Емульгування": "Эмульгирование",
      "соуси, майонез, молоко": "соусы, майонез, молоко",
      "потрібні зсув і стабілізатор": "нужны сдвиг и стабилизатор",
      "Теплообмін": "Теплообмен",
      "варіння, охолодження, пасти": "варка, охлаждение, пасты",
      "менше пригару і застійних зон": "меньше пригара и застойных зон",
      "Газ-рідина": "Газ-жидкость",
      "аерація, карбонізація": "аэрация, карбонизация",
      "контроль піни і бульбашок": "контроль пены и пузырьков",
      "Гомогенізація": "Гомогенизация",
      "вирівнювання складу і текстури": "выравнивание состава и текстуры",
      "якість вимірюють стабільністю": "качество измеряют стабильностью",
    },
    "mixing-time-scale.svg": {
      "Оцінка часу перемішування за трасером": "Оценка времени перемешивания по трассеру",
      "Крива концентрації трасера наближається до усталеного значення, а зона плюс-мінус п'ять відсотків задає час перемішування.":
        "Кривая концентрации трассера приближается к установившемуся значению, а зона плюс-минус пять процентов задает время перемешивания.",
      "Час перемішування: сигнал увійшов у зону ±5%": "Время перемешивания: сигнал вошел в зону +/-5%",
      "час, с": "время, с",
      "концентрація трасера": "концентрация трассера",
      "після t_m продукт вважають достатньо однорідним": "после t_m продукт считают достаточно однородным",
    },
    "multiphase-mixing-map.svg": {
      "Багатофазне перемішування у харчових системах": "Многофазное перемешивание в пищевых системах",
      "Три основні групи: тверде-рідина, рідина-рідина і газ-рідина з типовими харчовими прикладами.":
        "Три основные группы: твердое-жидкость, жидкость-жидкость и газ-жидкость с типовыми пищевыми примерами.",
      "Багатофазні системи: задача мішалки - керувати розміром і рухом фази":
        "Многофазные системы: задача мешалки - управлять размером и движением фазы",
      "Тверде + рідина": "Твердое + жидкость",
      "суспензії какао, спеції,": "суспензии какао, специи,",
      "м'якоть, кристали цукру": "мякоть, кристаллы сахара",
      "Рідина + рідина": "Жидкость + жидкость",
      "майонез, соуси,": "майонез, соусы,",
      "молочно-жирові емульсії": "молочно-жировые эмульсии",
      "Газ + рідина": "Газ + жидкость",
      "аерація десертів,": "аэрация десертов,",
      "карбонізація, піна": "карбонизация, пена",
    },
    "stirred-heat-transfer.svg": {
      "Теплообмін в апараті з перемішуванням": "Теплообмен в аппарате с перемешиванием",
      "Схема апарата з сорочкою, потоком теплоносія, мішалкою і тепловим потоком через стінку.":
        "Схема аппарата с рубашкой, потоком теплоносителя, мешалкой и тепловым потоком через стенку.",
      "пара / вода": "пар / вода",
      "вихід": "выход",
      "Перемішування зменшує термічний опір біля стінки":
        "Перемешивание уменьшает термическое сопротивление у стенки",
      "Q = K · F · ΔT_сер": "Q = K · F · ΔT_ср",
      "більша циркуляція - вищий коефіцієнт тепловіддачі, але більше енергоспоживання":
        "больше циркуляция - выше коэффициент теплоотдачи, но больше энергопотребление",
    },
    "suspension-states.svg": {
      "Стани суспендування твердих частинок": "Состояния суспендирования твердых частиц",
      "Порівняння осаду на дні, часткового суспендування та повного відриву частинок від дна.":
        "Сравнение осадка на дне, частичного суспендирования и полного отрыва частиц от дна.",
      "Осад": "Осадок",
      "замало швидкості або невдалий потік": "малая скорость или неудачный поток",
      "Часткове суспендування": "Частичное суспендирование",
      "частинки ще затримуються біля дна": "частицы еще задерживаются у дна",
      "Повне суспендування": "Полное суспендирование",
      "мінімальна швидкість повного відриву": "минимальная скорость полного отрыва",
    },
  },
};

function replaceAllText(svg, replacements) {
  let localized = svg;
  const entries = Object.entries(replacements).sort((a, b) => b[0].length - a[0].length);
  for (const [source, target] of entries) {
    localized = localized.split(source).join(target);
  }
  return localized;
}

for (const [locale, files] of Object.entries(translations)) {
  const outputDir = join(process.cwd(), "public", "images", "lectures", locale, "mixing");

  for (const [fileName, replacements] of Object.entries(files)) {
    const sourcePath = join(sourceDir, fileName);
    const outputPath = join(outputDir, fileName);
    const source = await readFile(sourcePath, "utf8");
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, replaceAllText(source, replacements), "utf8");
  }
}
