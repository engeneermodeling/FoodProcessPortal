import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const sourceDir = join(process.cwd(), "public", "images", "lectures", "hydraulics");

const dictionaries = {
  en: {
    "Режими руху рідини за числом Рейнольдса": "Flow regimes by Reynolds number",
    "Порівняння ламінарного, перехідного і турбулентного руху у трубі, а також профілів швидкості.":
      "Comparison of laminar, transitional and turbulent flow in a pipe and their velocity profiles.",
    "Режими течії: не тільки формула Re, а й якість процесу":
      "Flow regimes: not only Re, but also process quality",
    "Ламінарний": "Laminar",
    "параболічний профіль": "parabolic profile",
    "слабке перемішування": "weak mixing",
    "Перехідний": "Transitional",
    "нестійка зона": "unstable zone",
    "для розрахунків небажана": "undesirable for calculations",
    "Турбулентний": "Turbulent",
    "краще перемішування": "better mixing",
    "важливо для пастеризації і CIP": "important for pasteurization and CIP",
    "Для пастеризації та миття важлива не лише витрата, а й режим: турбулентність вирівнює час перебування і посилює тепло- та масообмін.":
      "For pasteurization and washing, not only flow rate matters: turbulence evens residence time and strengthens heat and mass transfer.",
    "Робоча точка насоса": "Pump operating point",
    "Перетин спадної характеристики насоса H від Q та зростаючої характеристики трубопроводу визначає фактичну витрату і напір.":
      "The intersection of the falling pump H(Q) curve and the rising pipeline curve determines actual flow rate and head.",
    "Робоча точка: насос + трубопровід": "Operating point: pump + pipeline",
    "характеристика насоса H(Q)": "pump curve H(Q)",
    "трубопровід Hₜᵣ(Q)": "pipeline H_pipe(Q)",
    "робоча точка": "operating point",
    "зона кращого ККД": "best-efficiency zone",
    "Засувка, фільтр, діаметр труби або частотник змінюють криву трубопроводу чи насоса, а разом з ними фактичну витрату.":
      "A valve, filter, pipe diameter or VFD changes the pipeline or pump curve and therefore the actual flow rate.",
    "Вибір насоса для харчового продукту": "Pump selection for a food product",
    "Схема вибору типу насоса за в'язкістю, наявністю частинок, чутливістю продукту до зсуву та потрібним тиском.":
      "Pump type selection by viscosity, particles, shear sensitivity and required pressure.",
    "Як обрати насос для харчового потоку": "How to choose a pump for a food stream",
    "Який продукт перекачуємо?": "What product is pumped?",
    "вода, молоко, сироп, пюре, йогурт, CIP": "water, milk, syrup, puree, yogurt, CIP",
    "Низька в'язкість і без частинок?": "Low viscosity and no particles?",
    "вода, молоко, пиво, соки без м'якоті": "water, milk, beer, pulp-free juices",
    "Відцентровий": "Centrifugal",
    "велика витрата,": "high flow rate,",
    "простий CIP": "simple CIP",
    "В'язкий або ніжний продукт?": "Viscous or delicate product?",
    "йогурт, паста, соус, шоколад, пюре": "yogurt, paste, sauce, chocolate, puree",
    "Роторний": "Rotary",
    "гвинтовий,": "screw,",
    "лобовий, зубчастий": "lobe, gear",
    "Потрібен високий тиск або точна доза?": "Need high pressure or accurate dosing?",
    "гомогенізація, дозування, мийні головки": "homogenization, dosing, spray balls",
    "Поршневий": "Piston",
    "тиск, дозування,": "pressure, dosing,",
    "гомогенізатор": "homogenizer",
    "Перистальтичний": "Peristaltic",
    "ягоди, культури,": "berries, cultures,",
    "стерильна трубка": "sterile tube",
    "Для харчових ліній після гідравліки перевіряють ще гігієнічність: CIP, дренованість, ущільнення, матеріали і сертифікацію.":
      "For food lines, after hydraulics also check hygiene: CIP, drainability, seals, materials and certification.",
    "Гідростатичний тиск у резервуарі": "Hydrostatic pressure in a tank",
    "Схема резервуара з рідиною показує, що тиск збільшується з глибиною за законом p дорівнює p0 плюс rho g h.":
      "A liquid tank diagram shows that pressure increases with depth according to p equals p0 plus rho g h.",
    "Гідростатика: тиск росте з глибиною": "Hydrostatics: pressure grows with depth",
    "малий тиск": "low pressure",
    "більший тиск": "higher pressure",
    "найбільший тиск": "highest pressure",
    "датчик рівня": "level sensor",
    "Манометр на дні бачить вагу стовпа рідини.": "The bottom gauge sees the weight of the liquid column.",
    "Так працює гідростатичний рівнемір.": "This is how a hydrostatic level meter works.",
    "Для молока, соку чи сиропу контролер перераховує тиск у рівень, але густину продукту треба знати або компенсувати.":
      "For milk, juice or syrup, the controller converts pressure to level, but product density must be known or compensated.",
    "Втрати напору у харчовому трубопроводі": "Head losses in a food pipeline",
    "Схема показує втрати по довжині труби та місцеві втрати на колінах, клапанах, фільтрах і звуженнях.":
      "The diagram shows pipe friction losses and local losses at elbows, valves, filters and contractions.",
    "Втрати напору: труба + місцеві опори": "Head losses: pipe + local resistances",
    "клапан": "valve",
    "енергетична лінія падає вздовж потоку": "energy grade line falls along the flow",
    "hт = λ · l/d · w²/(2g)": "h_f = λ · l/d · w²/(2g)",
    "hм.о. = Σξ · w²/(2g)": "h_loc = Σξ · w²/(2g)",
    "тертя по довжині": "friction along length",
    "коліна, трійники, вентилі, фільтри": "elbows, tees, valves, filters",
    "У харчових лініях великий внесок часто дають не метри труби, а неправильно підібрані клапани, різкі коліна і забруднені фільтри.":
      "In food lines, major losses often come not from pipe length but from poor valves, sharp elbows and dirty filters.",
    "Принцип роботи відцентрового насоса": "Operating principle of a centrifugal pump",
    "Рідина входить у центр робочого колеса, лопаті надають їй швидкість, а спіральний корпус перетворює частину швидкісної енергії на тиск.":
      "Liquid enters the impeller center, blades give it velocity, and the volute converts part of kinetic energy to pressure.",
    "Відцентровий насос: перетворення енергії": "Centrifugal pump: energy conversion",
    "всмоктування": "suction",
    "рідина входить у центр колеса": "liquid enters impeller center",
    "нагнітання": "discharge",
    "у корпусі швидкість частково переходить у тиск": "in the casing velocity partly becomes pressure",
    "Перед пуском корпус має бути заповнений рідиною: звичайний відцентровий насос не самовсмоктувальний.":
      "Before start-up the casing must be filled with liquid: a standard centrifugal pump is not self-priming.",
    "Кавітація і кавітаційний запас на всмоктуванні": "Cavitation and suction NPSH margin",
    "Схема показує, що насос вище рівня гарячої рідини має менший тиск на вході; коли тиск падає нижче тиску насиченої пари, утворюються парові бульбашки.":
      "The diagram shows that a pump above hot liquid level has lower inlet pressure; when pressure falls below vapor pressure, vapor bubbles form.",
    "Кавітація: коли на вході насоса тиск стає занадто малим":
      "Cavitation: when pump inlet pressure becomes too low",
    "гарячий продукт": "hot product",
    "ризик кавітації": "cavitation risk",
    "pᵥх ↓ через висоту, втрати, температуру": "p_in ↓ due to height, losses, temperature",
    "якщо pᵥх ≤ pₜ, рідина закипає локально": "if p_in ≤ p_v, liquid boils locally",
    "краще рішення": "better solution",
    "насос нижче рівня продукту + коротке всмоктування": "pump below product level + short suction",
    "Для гарячого молока, сиропів і мийних розчинів запас NPSH перевіряють обов'язково: тиск насиченої пари швидко зростає з температурою.":
      "For hot milk, syrups and cleaning solutions, NPSH margin must be checked: vapor pressure rises quickly with temperature.",
    "Рівняння Бернуллі як баланс напорів": "Bernoulli equation as a head balance",
    "Схема трубопроводу з двома перерізами показує геодезичний, п'єзометричний і швидкісний напори, а також втрати між перерізами.":
      "A pipe with two sections shows elevation, pressure and velocity heads, plus losses between sections.",
    "Бернуллі: енергія потоку у метрах напору": "Bernoulli: flow energy in meters of head",
    "рівень відліку z = 0": "reference level z = 0",
    "геодезичний + тисковий + швидкісний": "elevation + pressure + velocity",
    "усе у метрах стовпа рідини": "all in meters of liquid column",
    "hвтр": "h_loss",
    "тертя, коліна, клапани, фільтри": "friction, elbows, valves, filters",
    "У реальному харчовому трубопроводі повний напір зменшується, тому насос має компенсувати висоту, тиск і втрати.":
      "In a real food pipeline total head decreases, so the pump must compensate elevation, pressure and losses.",
  },
  de: {
    "Режими руху рідини за числом Рейнольдса": "Stroemungsregime nach Reynolds-Zahl",
    "Порівняння ламінарного, перехідного і турбулентного руху у трубі, а також профілів швидкості.":
      "Vergleich von laminarer, Uebergangs- und turbulenter Rohrstroemung sowie der Geschwindigkeitsprofile.",
    "Режими течії: не тільки формула Re, а й якість процесу":
      "Stroemungsregime: nicht nur Re, sondern auch Prozessqualitaet",
    "Ламінарний": "Laminar",
    "параболічний профіль": "parabolisches Profil",
    "слабке перемішування": "schwaches Mischen",
    "Перехідний": "Uebergang",
    "нестійка зона": "instabile Zone",
    "для розрахунків небажана": "fuer Berechnungen unguenstig",
    "Турбулентний": "Turbulent",
    "краще перемішування": "bessere Durchmischung",
    "важливо для пастеризації і CIP": "wichtig fuer Pasteurisation und CIP",
    "Для пастеризації та миття важлива не лише витрата, а й режим: турбулентність вирівнює час перебування і посилює тепло- та масообмін.":
      "Bei Pasteurisation und Reinigung zaehlen Durchfluss und Regime: Turbulenz gleicht Verweilzeit aus und verbessert Waerme- und Stoffuebergang.",
    "Робоча точка насоса": "Betriebspunkt der Pumpe",
    "Перетин спадної характеристики насоса H від Q та зростаючої характеристики трубопроводу визначає фактичну витрату і напір.":
      "Der Schnitt der fallenden Pumpenkennlinie H(Q) und der steigenden Rohrleitungskennlinie bestimmt Durchfluss und Foerderhoehe.",
    "Робоча точка: насос + трубопровід": "Betriebspunkt: Pumpe + Rohrleitung",
    "характеристика насоса H(Q)": "Pumpenkennlinie H(Q)",
    "трубопровід Hₜᵣ(Q)": "Rohrleitung H_R(Q)",
    "робоча точка": "Betriebspunkt",
    "зона кращого ККД": "Zone besten Wirkungsgrads",
    "Засувка, фільтр, діаметр труби або частотник змінюють криву трубопроводу чи насоса, а разом з ними фактичну витрату.":
      "Schieber, Filter, Rohrdurchmesser oder Frequenzumrichter veraendern Rohr- oder Pumpenkennlinie und damit den Durchfluss.",
    "Вибір насоса для харчового продукту": "Pumpenauswahl fuer ein Lebensmittelprodukt",
    "Схема вибору типу насоса за в'язкістю, наявністю частинок, чутливістю продукту до зсуву та потрібним тиском.":
      "Auswahl des Pumpentyps nach Viskositaet, Partikeln, Scherempfindlichkeit und erforderlichem Druck.",
    "Як обрати насос для харчового потоку": "Wie man eine Pumpe fuer einen Lebensmittelstrom waehlt",
    "Який продукт перекачуємо?": "Welches Produkt wird gefoerdert?",
    "вода, молоко, сироп, пюре, йогурт, CIP": "Wasser, Milch, Sirup, Pueree, Joghurt, CIP",
    "Низька в'язкість і без частинок?": "Niedrige Viskositaet und keine Partikel?",
    "вода, молоко, пиво, соки без м'якоті": "Wasser, Milch, Bier, Saefte ohne Fruchtfleisch",
    "Відцентровий": "Kreiselpumpe",
    "велика витрата,": "hoher Durchfluss,",
    "простий CIP": "einfaches CIP",
    "В'язкий або ніжний продукт?": "Viskoses oder empfindliches Produkt?",
    "йогурт, паста, соус, шоколад, пюре": "Joghurt, Paste, Sauce, Schokolade, Pueree",
    "Роторний": "Rotationspumpe",
    "гвинтовий,": "Schnecken-,",
    "лобовий, зубчастий": "Drehkolben-, Zahnradpumpe",
    "Потрібен високий тиск або точна доза?": "Hoher Druck oder genaue Dosierung?",
    "гомогенізація, дозування, мийні головки": "Homogenisieren, Dosieren, Spruehkoepfe",
    "Поршневий": "Kolbenpumpe",
    "тиск, дозування,": "Druck, Dosierung,",
    "гомогенізатор": "Homogenisator",
    "Перистальтичний": "Peristaltisch",
    "ягоди, культури,": "Beeren, Kulturen,",
    "стерильна трубка": "steriler Schlauch",
    "Для харчових ліній після гідравліки перевіряють ще гігієнічність: CIP, дренованість, ущільнення, матеріали і сертифікацію.":
      "Bei Lebensmittellinien prueft man nach der Hydraulik auch Hygiene: CIP, Entleerbarkeit, Dichtungen, Werkstoffe und Zertifizierung.",
    "Гідростатичний тиск у резервуарі": "Hydrostatischer Druck im Behaelter",
    "Схема резервуара з рідиною показує, що тиск збільшується з глибиною за законом p дорівнює p0 плюс rho g h.":
      "Das Behaelterschema zeigt: der Druck steigt mit der Tiefe nach p gleich p0 plus rho g h.",
    "Гідростатика: тиск росте з глибиною": "Hydrostatik: Druck steigt mit Tiefe",
    "малий тиск": "kleiner Druck",
    "більший тиск": "groesserer Druck",
    "найбільший тиск": "groesster Druck",
    "датчик рівня": "Fuellstandsensor",
    "Манометр на дні бачить вагу стовпа рідини.": "Das Manometer unten sieht das Gewicht der Fluessigkeitssaeule.",
    "Так працює гідростатичний рівнемір.": "So funktioniert eine hydrostatische Fuellstandmessung.",
    "Для молока, соку чи сиропу контролер перераховує тиск у рівень, але густину продукту треба знати або компенсувати.":
      "Bei Milch, Saft oder Sirup rechnet der Regler Druck in Fuellstand um; die Dichte muss bekannt oder kompensiert sein.",
    "Втрати напору у харчовому трубопроводі": "Druckhoehenverluste in einer Lebensmittelrohrleitung",
    "Схема показує втрати по довжині труби та місцеві втрати на колінах, клапанах, фільтрах і звуженнях.":
      "Das Schema zeigt Rohrreibungsverluste und Einzelverluste an Boegen, Ventilen, Filtern und Verengungen.",
    "Втрати напору: труба + місцеві опори": "Druckhoehenverluste: Rohr + Einzelwiderstaende",
    "клапан": "Ventil",
    "енергетична лінія падає вздовж потоку": "Energielinie faellt entlang der Stroemung",
    "hт = λ · l/d · w²/(2g)": "h_R = λ · l/d · w²/(2g)",
    "hм.о. = Σξ · w²/(2g)": "h_E = Σξ · w²/(2g)",
    "тертя по довжині": "Reibung entlang der Laenge",
    "коліна, трійники, вентилі, фільтри": "Boegen, T-Stuecke, Ventile, Filter",
    "У харчових лініях великий внесок часто дають не метри труби, а неправильно підібрані клапани, різкі коліна і забруднені фільтри.":
      "In Lebensmittellinien kommen grosse Verluste oft von falschen Ventilen, engen Boegen und verschmutzten Filtern.",
    "Принцип роботи відцентрового насоса": "Funktionsprinzip einer Kreiselpumpe",
    "Рідина входить у центр робочого колеса, лопаті надають їй швидкість, а спіральний корпус перетворює частину швидкісної енергії на тиск.":
      "Fluessigkeit tritt in die Laufradmitte ein, Schaufeln geben Geschwindigkeit, das Spiralgehaeuse wandelt einen Teil in Druck um.",
    "Відцентровий насос: перетворення енергії": "Kreiselpumpe: Energieumwandlung",
    "всмоктування": "Saugseite",
    "рідина входить у центр колеса": "Fluessigkeit tritt in die Laufradmitte ein",
    "нагнітання": "Druckseite",
    "у корпусі швидкість частково переходить у тиск": "im Gehaeuse wird Geschwindigkeit teils zu Druck",
    "Перед пуском корпус має бути заповнений рідиною: звичайний відцентровий насос не самовсмоктувальний.":
      "Vor dem Start muss das Gehaeuse gefuellt sein: eine normale Kreiselpumpe ist nicht selbstansaugend.",
    "Кавітація і кавітаційний запас на всмоктуванні": "Kavitation und NPSH-Reserve an der Saugseite",
    "Схема показує, що насос вище рівня гарячої рідини має менший тиск на вході; коли тиск падає нижче тиску насиченої пари, утворюються парові бульбашки.":
      "Das Schema zeigt: eine Pumpe ueber dem Niveau heisser Fluessigkeit hat geringeren Eintrittsdruck; unter Dampfdruck entstehen Dampfblasen.",
    "Кавітація: коли на вході насоса тиск стає занадто малим":
      "Kavitation: wenn der Pumpeneintrittsdruck zu klein wird",
    "гарячий продукт": "heisses Produkt",
    "ризик кавітації": "Kavitationsrisiko",
    "pᵥх ↓ через висоту, втрати, температуру": "p_ein ↓ durch Hoehe, Verluste, Temperatur",
    "якщо pᵥх ≤ pₜ, рідина закипає локально": "wenn p_ein ≤ p_D, siedet die Fluessigkeit lokal",
    "краще рішення": "bessere Loesung",
    "насос нижче рівня продукту + коротке всмоктування": "Pumpe unter Produktniveau + kurze Saugleitung",
    "Для гарячого молока, сиропів і мийних розчинів запас NPSH перевіряють обов'язково: тиск насиченої пари швидко зростає з температурою.":
      "Bei heisser Milch, Sirupen und Reinigungsloesungen muss NPSH geprueft werden: Dampfdruck steigt schnell mit Temperatur.",
    "Рівняння Бернуллі як баланс напорів": "Bernoulli-Gleichung als Druckhoehenbilanz",
    "Схема трубопроводу з двома перерізами показує геодезичний, п'єзометричний і швидкісний напори, а також втрати між перерізами.":
      "Ein Rohr mit zwei Schnitten zeigt geodaetische, Druck- und Geschwindigkeitshoehe sowie Verluste zwischen den Schnitten.",
    "Бернуллі: енергія потоку у метрах напору": "Bernoulli: Stroemungsenergie in Metern Druckhoehe",
    "рівень відліку z = 0": "Bezugsebene z = 0",
    "геодезичний + тисковий + швидкісний": "Lage + Druck + Geschwindigkeit",
    "усе у метрах стовпа рідини": "alles in Metern Fluessigkeitssaeule",
    "hвтр": "h_V",
    "тертя, коліна, клапани, фільтри": "Reibung, Boegen, Ventile, Filter",
    "У реальному харчовому трубопроводі повний напір зменшується, тому насос має компенсувати висоту, тиск і втрати.":
      "In einer realen Lebensmittelrohrleitung sinkt die Gesamtfoerderhoehe; die Pumpe muss Hoehe, Druck und Verluste ausgleichen.",
  },
  ru: {
    "Режими руху рідини за числом Рейнольдса": "Режимы движения жидкости по числу Рейнольдса",
    "Порівняння ламінарного, перехідного і турбулентного руху у трубі, а також профілів швидкості.":
      "Сравнение ламинарного, переходного и турбулентного движения в трубе, а также профилей скорости.",
    "Режими течії: не тільки формула Re, а й якість процесу":
      "Режимы течения: не только формула Re, но и качество процесса",
    "Ламінарний": "Ламинарный",
    "параболічний профіль": "параболический профиль",
    "слабке перемішування": "слабое перемешивание",
    "Перехідний": "Переходный",
    "нестійка зона": "неустойчивая зона",
    "для розрахунків небажана": "нежелательна для расчетов",
    "Турбулентний": "Турбулентный",
    "краще перемішування": "лучшее перемешивание",
    "важливо для пастеризації і CIP": "важно для пастеризации и CIP",
    "Для пастеризації та миття важлива не лише витрата, а й режим: турбулентність вирівнює час перебування і посилює тепло- та масообмін.":
      "Для пастеризации и мойки важен не только расход, но и режим: турбулентность выравнивает время пребывания и усиливает тепло- и массообмен.",
    "Робоча точка насоса": "Рабочая точка насоса",
    "Перетин спадної характеристики насоса H від Q та зростаючої характеристики трубопроводу визначає фактичну витрату і напір.":
      "Пересечение падающей характеристики насоса H(Q) и возрастающей характеристики трубопровода определяет фактический расход и напор.",
    "Робоча точка: насос + трубопровід": "Рабочая точка: насос + трубопровод",
    "характеристика насоса H(Q)": "характеристика насоса H(Q)",
    "трубопровід Hₜᵣ(Q)": "трубопровод Hтр(Q)",
    "робоча точка": "рабочая точка",
    "зона кращого ККД": "зона лучшего КПД",
    "Засувка, фільтр, діаметр труби або частотник змінюють криву трубопроводу чи насоса, а разом з ними фактичну витрату.":
      "Задвижка, фильтр, диаметр трубы или частотник меняют кривую трубопровода или насоса, а вместе с ними фактический расход.",
    "Вибір насоса для харчового продукту": "Выбор насоса для пищевого продукта",
    "Схема вибору типу насоса за в'язкістю, наявністю частинок, чутливістю продукту до зсуву та потрібним тиском.":
      "Схема выбора типа насоса по вязкости, наличию частиц, чувствительности продукта к сдвигу и требуемому давлению.",
    "Як обрати насос для харчового потоку": "Как выбрать насос для пищевого потока",
    "Який продукт перекачуємо?": "Какой продукт перекачиваем?",
    "вода, молоко, сироп, пюре, йогурт, CIP": "вода, молоко, сироп, пюре, йогурт, CIP",
    "Низька в'язкість і без частинок?": "Низкая вязкость и без частиц?",
    "вода, молоко, пиво, соки без м'якоті": "вода, молоко, пиво, соки без мякоти",
    "Відцентровий": "Центробежный",
    "велика витрата,": "большой расход,",
    "простий CIP": "простой CIP",
    "В'язкий або ніжний продукт?": "Вязкий или деликатный продукт?",
    "йогурт, паста, соус, шоколад, пюре": "йогурт, паста, соус, шоколад, пюре",
    "Роторний": "Роторный",
    "гвинтовий,": "винтовой,",
    "лобовий, зубчастий": "кулачковый, шестеренный",
    "Потрібен високий тиск або точна доза?": "Нужны высокий напор или точная доза?",
    "гомогенізація, дозування, мийні головки": "гомогенизация, дозирование, моющие головки",
    "Поршневий": "Поршневой",
    "тиск, дозування,": "давление, дозирование,",
    "гомогенізатор": "гомогенизатор",
    "Перистальтичний": "Перистальтический",
    "ягоди, культури,": "ягоды, культуры,",
    "стерильна трубка": "стерильная трубка",
    "Для харчових ліній після гідравліки перевіряють ще гігієнічність: CIP, дренованість, ущільнення, матеріали і сертифікацію.":
      "Для пищевых линий после гидравлики проверяют еще гигиеничность: CIP, дренируемость, уплотнения, материалы и сертификацию.",
    "Гідростатичний тиск у резервуарі": "Гидростатическое давление в резервуаре",
    "Схема резервуара з рідиною показує, що тиск збільшується з глибиною за законом p дорівнює p0 плюс rho g h.":
      "Схема резервуара с жидкостью показывает, что давление увеличивается с глубиной по закону p равно p0 плюс rho g h.",
    "Гідростатика: тиск росте з глибиною": "Гидростатика: давление растет с глубиной",
    "малий тиск": "малое давление",
    "більший тиск": "большее давление",
    "найбільший тиск": "наибольшее давление",
    "датчик рівня": "датчик уровня",
    "Манометр на дні бачить вагу стовпа рідини.": "Манометр на дне видит вес столба жидкости.",
    "Так працює гідростатичний рівнемір.": "Так работает гидростатический уровнемер.",
    "Для молока, соку чи сиропу контролер перераховує тиск у рівень, але густину продукту треба знати або компенсувати.":
      "Для молока, сока или сиропа контроллер пересчитывает давление в уровень, но плотность продукта нужно знать или компенсировать.",
    "Втрати напору у харчовому трубопроводі": "Потери напора в пищевом трубопроводе",
    "Схема показує втрати по довжині труби та місцеві втрати на колінах, клапанах, фільтрах і звуженнях.":
      "Схема показывает потери по длине трубы и местные потери на коленах, клапанах, фильтрах и сужениях.",
    "Втрати напору: труба + місцеві опори": "Потери напора: труба + местные сопротивления",
    "клапан": "клапан",
    "енергетична лінія падає вздовж потоку": "энергетическая линия падает вдоль потока",
    "hт = λ · l/d · w²/(2g)": "hтр = λ · l/d · w²/(2g)",
    "hм.о. = Σξ · w²/(2g)": "hм.с. = Σξ · w²/(2g)",
    "тертя по довжині": "трение по длине",
    "коліна, трійники, вентилі, фільтри": "колена, тройники, вентили, фильтры",
    "У харчових лініях великий внесок часто дають не метри труби, а неправильно підібрані клапани, різкі коліна і забруднені фільтри.":
      "В пищевых линиях большой вклад часто дают не метры трубы, а плохо подобранные клапаны, резкие колена и загрязненные фильтры.",
    "Принцип роботи відцентрового насоса": "Принцип работы центробежного насоса",
    "Рідина входить у центр робочого колеса, лопаті надають їй швидкість, а спіральний корпус перетворює частину швидкісної енергії на тиск.":
      "Жидкость входит в центр рабочего колеса, лопасти придают ей скорость, а спиральный корпус превращает часть скоростной энергии в давление.",
    "Відцентровий насос: перетворення енергії": "Центробежный насос: преобразование энергии",
    "всмоктування": "всасывание",
    "рідина входить у центр колеса": "жидкость входит в центр колеса",
    "нагнітання": "нагнетание",
    "у корпусі швидкість частково переходить у тиск": "в корпусе скорость частично переходит в давление",
    "Перед пуском корпус має бути заповнений рідиною: звичайний відцентровий насос не самовсмоктувальний.":
      "Перед пуском корпус должен быть заполнен жидкостью: обычный центробежный насос не самовсасывающий.",
    "Кавітація і кавітаційний запас на всмоктуванні": "Кавитация и кавитационный запас на всасывании",
    "Схема показує, що насос вище рівня гарячої рідини має менший тиск на вході; коли тиск падає нижче тиску насиченої пари, утворюються парові бульбашки.":
      "Схема показывает, что насос выше уровня горячей жидкости имеет меньшее давление на входе; когда оно ниже давления насыщенного пара, образуются паровые пузырьки.",
    "Кавітація: коли на вході насоса тиск стає занадто малим":
      "Кавитация: когда на входе насоса давление становится слишком малым",
    "гарячий продукт": "горячий продукт",
    "ризик кавітації": "риск кавитации",
    "pᵥх ↓ через висоту, втрати, температуру": "pвх ↓ из-за высоты, потерь, температуры",
    "якщо pᵥх ≤ pₜ, рідина закипає локально": "если pвх ≤ pп, жидкость локально закипает",
    "краще рішення": "лучшее решение",
    "насос нижче рівня продукту + коротке всмоктування": "насос ниже уровня продукта + короткое всасывание",
    "Для гарячого молока, сиропів і мийних розчинів запас NPSH перевіряють обов'язково: тиск насиченої пари швидко зростає з температурою.":
      "Для горячего молока, сиропов и моющих растворов запас NPSH проверяют обязательно: давление насыщенного пара быстро растет с температурой.",
    "Рівняння Бернуллі як баланс напорів": "Уравнение Бернулли как баланс напоров",
    "Схема трубопроводу з двома перерізами показує геодезичний, п'єзометричний і швидкісний напори, а також втрати між перерізами.":
      "Схема трубопровода с двумя сечениями показывает геодезический, пьезометрический и скоростной напоры, а также потери между сечениями.",
    "Бернуллі: енергія потоку у метрах напору": "Бернулли: энергия потока в метрах напора",
    "рівень відліку z = 0": "уровень отсчета z = 0",
    "геодезичний + тисковий + швидкісний": "геодезический + пьезометрический + скоростной",
    "усе у метрах стовпа рідини": "все в метрах столба жидкости",
    "hвтр": "hпот",
    "тертя, коліна, клапани, фільтри": "трение, колена, клапаны, фильтры",
    "У реальному харчовому трубопроводі повний напір зменшується, тому насос має компенсувати висоту, тиск і втрати.":
      "В реальном пищевом трубопроводе полный напор уменьшается, поэтому насос должен компенсировать высоту, давление и потери.",
  },
};

const fileNames = [
  "bernoulli-energy.svg",
  "cavitation-npsh.svg",
  "centrifugal-pump.svg",
  "head-loss-pipeline.svg",
  "hydrostatic-pressure.svg",
  "pump-selection-map.svg",
  "pump-system-curve.svg",
  "reynolds-flow-regimes.svg",
];

function replaceAllText(svg, replacements) {
  let localized = svg;
  for (const [source, target] of Object.entries(replacements).sort((a, b) => b[0].length - a[0].length)) {
    localized = localized.split(source).join(target);
  }
  return localized;
}

for (const [locale, dictionary] of Object.entries(dictionaries)) {
  for (const fileName of fileNames) {
    const sourcePath = join(sourceDir, fileName);
    const outputPath = join(process.cwd(), "public", "images", "lectures", locale, "hydraulics", fileName);
    const source = await readFile(sourcePath, "utf8");
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, replaceAllText(source, dictionary), "utf8");
  }
}
