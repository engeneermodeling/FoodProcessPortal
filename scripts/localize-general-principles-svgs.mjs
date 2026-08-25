import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const sourceDir = join(process.cwd(), "public", "images", "lectures", "general-principles");

const dictionaries = {
  en: {
    "Рушійна сила і опір у процесах перенесення": "Driving force and resistance in transfer processes",
    "Три аналогічні процеси: тепло переноситься через різницю температур, компонент через різницю концентрацій, рідина через різницю тисків; швидкість визначається рушійною силою і опором.":
      "Three analogous processes: heat is transferred by a temperature difference, a component by a concentration difference, and liquid by a pressure difference; rate is determined by driving force and resistance.",
    "Одна ідея для всього курсу: швидкість = рушійна сила / опір":
      "One idea for the whole course: rate = driving force / resistance",
    Теплоперенесення: "Heat transfer",
    гаряче: "hot",
    холодне: "cold",
    "Δt / Rт": "Δt / R_h",
    Масоперенесення: "Mass transfer",
    "Δc / Rм": "Δc / R_m",
    Гідродинаміка: "Hydrodynamics",
    "Δp / Rг": "Δp / R_hyd",
    "Щоб пришвидшити процес, або збільшують рушійну силу, або зменшують опір конструкцією апарата та режимом потоку.":
      "To speed up a process, increase the driving force or reduce resistance through equipment design and flow regime.",
    "Карта критеріїв подібності": "Map of similarity criteria",
    "Схема групує безрозмірні критерії за фізичним змістом: режим течії, теплообмін, масообмін, гравітаційні сили і втрати тиску.":
      "The diagram groups dimensionless criteria by physical meaning: flow regime, heat transfer, mass transfer, gravitational forces and pressure losses.",
    "Критерії подібності читаються як співвідношення фізичних ефектів":
      "Similarity criteria are read as ratios of physical effects",
    процес: "process",
    "у трубі, мішалці,": "in a pipe, mixer,",
    теплообміннику: "heat exchanger",
    "інерція / в'язкість": "inertia / viscosity",
    "режим течії продукту": "product flow regime",
    "конвекція / провідність": "convection / conduction",
    "пастеризація, охолодження": "pasteurization, cooling",
    "інерція / гравітація": "inertia / gravity",
    "осідання, піна, краплі": "settling, foam, droplets",
    "масовіддача / дифузія": "mass transfer / diffusion",
    "екстракція, сушіння, мембрани": "extraction, drying, membranes",
    "Фізичні властивості у розрахунках харчових процесів":
      "Physical properties in food process calculations",
    "Схема показує, як густина, в'язкість, теплоємність і теплопровідність впливають на гідравліку, теплообмін і вибір обладнання.":
      "The diagram shows how density, viscosity, heat capacity and thermal conductivity affect hydraulics, heat transfer and equipment selection.",
    "Властивості продукту визначають розмір апарата і режим роботи":
      "Product properties determine equipment size and operating mode",
    "харчовий продукт": "food product",
    "молоко, сік, олія, соус,": "milk, juice, oil, sauce,",
    "сироп, пюре, фарш": "syrup, puree, minced product",
    густина: "density",
    "витрата, тиск, Re": "flow rate, pressure, Re",
    "в'язкість": "viscosity",
    "насос, втрати напору, Re": "pump, head losses, Re",
    теплоємність: "heat capacity",
    "тепловий баланс, пара": "heat balance, steam",
    теплопровідність: "thermal conductivity",
    "Nu, Pr, прогрівання": "Nu, Pr, heating",
    "Реологічна поведінка харчових продуктів": "Rheological behaviour of food products",
    "Графік показує залежність напруження зсуву від швидкості зсуву для ньютонівських, псевдопластичних, дилатантних і пластичних харчових систем.":
      "The chart shows shear stress versus shear rate for Newtonian, pseudoplastic, dilatant and plastic food systems.",
    "В'язкість харчових продуктів часто залежить від швидкості зсуву":
      "Food product viscosity often depends on shear rate",
    "швидкість зсуву γ, с⁻¹": "shear rate γ, s⁻¹",
    "напруження τ, Па": "stress τ, Pa",
    Ньютонівські: "Newtonian",
    "вода, молоко, соки": "water, milk, juices",
    Псевдопластичні: "Pseudoplastic",
    "кетчуп, йогурт, пюре": "ketchup, yogurt, puree",
    Дилатантні: "Dilatant",
    "крохмальні суспензії": "starch suspensions",
    Пластичні: "Plastic",
    "паста, шоколадна маса": "paste, chocolate mass",
    "Матеріальний баланс випарної установки": "Material balance of an evaporator",
    "Схема показує, що в апарат надходить сік, а виходять концентрат і випарена вода; сухі речовини зберігаються.":
      "The diagram shows that juice enters the unit, while concentrate and evaporated water leave; dry solids are conserved.",
    "Матеріальний баланс: нічого не зникає": "Material balance: nothing disappears",
    вхід: "inlet",
    "сік 10 000 кг/год": "juice 10 000 kg/h",
    "10% сухих речовин": "10% dry solids",
    вихід: "outlet",
    "концентрат 1538 кг/год": "concentrate 1538 kg/h",
    "65% сухих речовин": "65% dry solids",
    "випарена вода": "evaporated water",
    "8462 кг/год": "8462 kg/h",
    "сухі речовини: 10 000 · 0,10 = 1538 · 0,65":
      "dry solids: 10 000 · 0.10 = 1538 · 0.65",
    "баланс можна складати за всією масою або за ключовим компонентом":
      "balance can be written for total mass or for a key component",
    "Тепловий баланс і діаграма Санкі": "Heat balance and Sankey diagram",
    "Схема показує вхід тепла у пастеризатор і його розподіл на нагрівання продукту, рекуперацію та втрати.":
      "The diagram shows heat input to a pasteurizer and its distribution to product heating, heat recovery and losses.",
    "Тепловий баланс: ширина потоку показує величину енергії":
      "Heat balance: stream width shows energy quantity",
    пастеризатор: "pasteurizer",
    "молоко 4 → 72 °C": "milk 4 -> 72 °C",
    "пара / гаряча вода": "steam / hot water",
    "зовнішнє тепло": "external heat",
    рекуперація: "heat recovery",
    "тепло повертається в процес": "heat returns to the process",
    "корисне нагрівання": "useful heating",
    втрати: "losses",
    "Санкі допомагає швидко побачити, де найбільша економія: ізоляція, рекуперація, правильний режим роботи.":
      "Sankey helps quickly see where the largest savings are: insulation, heat recovery and correct operating mode.",
    "Рекуперація тепла у HTST пастеризаторі": "Heat recovery in an HTST pasteurizer",
    "Схема показує, як холодне сире молоко нагрівається гарячим пастеризованим молоком у секції регенерації, а зовнішнє тепло додається лише для доведення до температури пастеризації.":
      "The diagram shows how cold raw milk is heated by hot pasteurized milk in the regeneration section, while external heat is added only to reach pasteurization temperature.",
    "HTST: чому рекуперація економить пару і холод":
      "HTST: why recovery saves steam and cooling",
    регенерація: "regeneration",
    "холодне молоко": "cold milk",
    "гріється гарячим": "heated by hot product",
    нагрівання: "heating",
    "до 72...75 °C": "to 72...75 °C",
    витримка: "holding",
    "15...20 с": "15...20 s",
    охолодження: "cooling",
    "до 4 °C": "to 4 °C",
    "сире молоко 4 °C": "raw milk 4 °C",
    "пастеризоване молоко": "pasteurized milk",
    "готовий продукт 4 °C": "finished product 4 °C",
    "до 90%+ тепла можна повернути у процес": "up to 90%+ of heat can be returned to the process",
    "Ідея оптимізації проста: гарячий продукт не викидає тепло назовні, а підігріває наступну порцію холодного продукту.":
      "The optimization idea is simple: the hot product does not dump heat outside, but preheats the next portion of cold product.",
    "Масштабний перехід у харчовому виробництві": "Scale-up in food manufacturing",
    "Схема показує перехід від лабораторної проби до пілотної установки і промислового апарата з контролем геометричної, кінематичної та динамічної подібності.":
      "The diagram shows transition from lab sample to pilot plant and industrial equipment with control of geometric, kinematic and dynamic similarity.",
    "Масштабування: збільшити розмір не означає зберегти процес":
      "Scale-up: increasing size does not mean preserving the process",
    Лабораторія: "Laboratory",
    "2 л": "2 L",
    "смак, рецептура,": "taste, recipe,",
    "перші властивості": "initial properties",
    Пілот: "Pilot",
    "200 л": "200 L",
    "перевірка Re, Nu,": "checking Re, Nu,",
    "часу перемішування": "mixing time",
    Виробництво: "Production",
    "2000 л": "2000 L",
    "якість партії,": "batch quality,",
    "енергія, стабільність": "energy, stability",
    "не копіюємо": "do not copy",
    "а перевіряємо": "verify instead",
    "Подібність = геометрія + швидкості + співвідношення сил":
      "Similarity = geometry + velocities + force ratios",
  },
  de: {
    "Рушійна сила і опір у процесах перенесення": "Treibkraft und Widerstand in Transportprozessen",
    "Три аналогічні процеси: тепло переноситься через різницю температур, компонент через різницю концентрацій, рідина через різницю тисків; швидкість визначається рушійною силою і опором.":
      "Drei analoge Prozesse: Waerme wird durch Temperaturdifferenz, Stoff durch Konzentrationsdifferenz und Fluessigkeit durch Druckdifferenz uebertragen.",
    "Одна ідея для всього курсу: швидкість = рушійна сила / опір":
      "Eine Idee fuer den ganzen Kurs: Rate = Treibkraft / Widerstand",
    Теплоперенесення: "Waermeuebertragung",
    гаряче: "heiss",
    холодне: "kalt",
    "Δt / Rт": "Δt / R_w",
    Масоперенесення: "Stoffuebertragung",
    "Δc / Rм": "Δc / R_m",
    Гідродинаміка: "Hydrodynamik",
    "Δp / Rг": "Δp / R_hyd",
    "Щоб пришвидшити процес, або збільшують рушійну силу, або зменшують опір конструкцією апарата та режимом потоку.":
      "Zur Beschleunigung erhoeht man die Treibkraft oder senkt den Widerstand durch Apparatgestaltung und Stroemungsregime.",
    "Карта критеріїв подібності": "Karte der Aehnlichkeitskriterien",
    "Схема групує безрозмірні критерії за фізичним змістом: режим течії, теплообмін, масообмін, гравітаційні сили і втрати тиску.":
      "Das Schema gruppiert dimensionslose Kriterien nach physikalischer Bedeutung: Stroemung, Waermeuebergang, Stoffuebergang, Gravitation und Druckverlust.",
    "Критерії подібності читаються як співвідношення фізичних ефектів":
      "Aehnlichkeitskriterien liest man als Verhaeltnisse physikalischer Effekte",
    процес: "Prozess",
    "у трубі, мішалці,": "in Rohr, Ruehrer,",
    теплообміннику: "Waermeuebertrager",
    "інерція / в'язкість": "Traegheit / Viskositaet",
    "режим течії продукту": "Stroemungsregime des Produkts",
    "конвекція / провідність": "Konvektion / Leitung",
    "пастеризація, охолодження": "Pasteurisation, Kuehlung",
    "інерція / гравітація": "Traegheit / Gravitation",
    "осідання, піна, краплі": "Sedimentation, Schaum, Tropfen",
    "масовіддача / дифузія": "Stoffuebergang / Diffusion",
    "екстракція, сушіння, мембрани": "Extraktion, Trocknung, Membranen",
    "Фізичні властивості у розрахунках харчових процесів":
      "Physikalische Eigenschaften in Berechnungen von Lebensmittelprozessen",
    "Схема показує, як густина, в'язкість, теплоємність і теплопровідність впливають на гідравліку, теплообмін і вибір обладнання.":
      "Das Schema zeigt, wie Dichte, Viskositaet, Waermekapazitaet und Waermeleitfaehigkeit Hydraulik, Waermeuebergang und Apparatewahl beeinflussen.",
    "Властивості продукту визначають розмір апарата і режим роботи":
      "Produkteigenschaften bestimmen Apparatgroesse und Betriebsweise",
    "харчовий продукт": "Lebensmittelprodukt",
    "молоко, сік, олія, соус,": "Milch, Saft, Oel, Sauce,",
    "сироп, пюре, фарш": "Sirup, Pueree, Hackmasse",
    густина: "Dichte",
    "витрата, тиск, Re": "Durchfluss, Druck, Re",
    "в'язкість": "Viskositaet",
    "насос, втрати напору, Re": "Pumpe, Druckverlust, Re",
    теплоємність: "Waermekapazitaet",
    "тепловий баланс, пара": "Waermebilanz, Dampf",
    теплопровідність: "Waermeleitfaehigkeit",
    "Nu, Pr, прогрівання": "Nu, Pr, Erwaermung",
    "Реологічна поведінка харчових продуктів": "Rheologisches Verhalten von Lebensmitteln",
    "Графік показує залежність напруження зсуву від швидкості зсуву для ньютонівських, псевдопластичних, дилатантних і пластичних харчових систем.":
      "Das Diagramm zeigt Schubspannung gegen Schergeschwindigkeit fuer newtonsche, pseudoplastische, dilatante und plastische Lebensmittelsysteme.",
    "В'язкість харчових продуктів часто залежить від швидкості зсуву":
      "Die Viskositaet von Lebensmitteln haengt oft von der Schergeschwindigkeit ab",
    "швидкість зсуву γ, с⁻¹": "Schergeschwindigkeit γ, s⁻¹",
    "напруження τ, Па": "Schubspannung τ, Pa",
    Ньютонівські: "Newtonsch",
    "вода, молоко, соки": "Wasser, Milch, Saefte",
    Псевдопластичні: "Pseudoplastisch",
    "кетчуп, йогурт, пюре": "Ketchup, Joghurt, Pueree",
    Дилатантні: "Dilatant",
    "крохмальні суспензії": "Staerkesuspensionen",
    Пластичні: "Plastisch",
    "паста, шоколадна маса": "Paste, Schokoladenmasse",
    "Матеріальний баланс випарної установки": "Stoffbilanz eines Verdampfers",
    "Схема показує, що в апарат надходить сік, а виходять концентрат і випарена вода; сухі речовини зберігаються.":
      "Das Schema zeigt: Saft tritt ein, Konzentrat und verdampftes Wasser treten aus; Trockensubstanz bleibt erhalten.",
    "Матеріальний баланс: нічого не зникає": "Stoffbilanz: nichts verschwindet",
    вхід: "Eintritt",
    "сік 10 000 кг/год": "Saft 10 000 kg/h",
    "10% сухих речовин": "10% Trockensubstanz",
    вихід: "Austritt",
    "концентрат 1538 кг/год": "Konzentrat 1538 kg/h",
    "65% сухих речовин": "65% Trockensubstanz",
    "випарена вода": "verdampftes Wasser",
    "8462 кг/год": "8462 kg/h",
    "сухі речовини: 10 000 · 0,10 = 1538 · 0,65":
      "Trockensubstanz: 10 000 · 0,10 = 1538 · 0,65",
    "баланс можна складати за всією масою або за ключовим компонентом":
      "Bilanz nach Gesamtmasse oder nach Schluesselkomponente",
    "Тепловий баланс і діаграма Санкі": "Waermebilanz und Sankey-Diagramm",
    "Схема показує вхід тепла у пастеризатор і його розподіл на нагрівання продукту, рекуперацію та втрати.":
      "Das Schema zeigt den Waermeeintrag in einen Pasteurisator und seine Verteilung auf Produkterwaermung, Rueckgewinnung und Verluste.",
    "Тепловий баланс: ширина потоку показує величину енергії":
      "Waermebilanz: die Strombreite zeigt die Energiemenge",
    пастеризатор: "Pasteurisator",
    "молоко 4 → 72 °C": "Milch 4 -> 72 °C",
    "пара / гаряча вода": "Dampf / heisses Wasser",
    "зовнішнє тепло": "externe Waerme",
    рекуперація: "Rueckgewinnung",
    "тепло повертається в процес": "Waerme kehrt in den Prozess zurueck",
    "корисне нагрівання": "nutzbare Erwaermung",
    втрати: "Verluste",
    "Санкі допомагає швидко побачити, де найбільша економія: ізоляція, рекуперація, правильний режим роботи.":
      "Sankey zeigt schnell die groessten Einsparungen: Isolierung, Rueckgewinnung und richtiger Betrieb.",
    "Рекуперація тепла у HTST пастеризаторі": "Waermerueckgewinnung im HTST-Pasteurisator",
    "Схема показує, як холодне сире молоко нагрівається гарячим пастеризованим молоком у секції регенерації, а зовнішнє тепло додається лише для доведення до температури пастеризації.":
      "Das Schema zeigt, wie kalte Rohmilch in der Regenerationssektion durch heisse pasteurisierte Milch erwaermt wird.",
    "HTST: чому рекуперація економить пару і холод":
      "HTST: warum Rueckgewinnung Dampf und Kaelte spart",
    регенерація: "Regeneration",
    "холодне молоко": "kalte Milch",
    "гріється гарячим": "durch heisses Produkt erwaermt",
    нагрівання: "Erwaermung",
    "до 72...75 °C": "auf 72...75 °C",
    витримка: "Halten",
    "15...20 с": "15...20 s",
    охолодження: "Kuehlung",
    "до 4 °C": "auf 4 °C",
    "сире молоко 4 °C": "Rohmilch 4 °C",
    "пастеризоване молоко": "pasteurisierte Milch",
    "готовий продукт 4 °C": "Fertigprodukt 4 °C",
    "до 90%+ тепла можна повернути у процес": "bis zu 90%+ Waerme koennen in den Prozess zurueck",
    "Ідея оптимізації проста: гарячий продукт не викидає тепло назовні, а підігріває наступну порцію холодного продукту.":
      "Die Idee ist einfach: heisses Produkt gibt Waerme nicht ab, sondern waermt die naechste kalte Portion vor.",
    "Масштабний перехід у харчовому виробництві": "Scale-up in der Lebensmittelproduktion",
    "Схема показує перехід від лабораторної проби до пілотної установки і промислового апарата з контролем геометричної, кінематичної та динамічної подібності.":
      "Das Schema zeigt den Uebergang von Laborprobe zu Pilotanlage und Industrieapparat mit Kontrolle geometrischer, kinematischer und dynamischer Aehnlichkeit.",
    "Масштабування: збільшити розмір не означає зберегти процес":
      "Scale-up: groesser machen heisst nicht, den Prozess zu bewahren",
    Лабораторія: "Labor",
    "2 л": "2 L",
    "смак, рецептура,": "Geschmack, Rezeptur,",
    "перші властивості": "erste Eigenschaften",
    Пілот: "Pilot",
    "200 л": "200 L",
    "перевірка Re, Nu,": "Pruefung von Re, Nu,",
    "часу перемішування": "Mischzeit",
    Виробництво: "Produktion",
    "2000 л": "2000 L",
    "якість партії,": "Chargenqualitaet,",
    "енергія, стабільність": "Energie, Stabilitaet",
    "не копіюємо": "nicht kopieren",
    "а перевіряємо": "sondern pruefen",
    "Подібність = геометрія + швидкості + співвідношення сил":
      "Aehnlichkeit = Geometrie + Geschwindigkeiten + Kraefteverhaeltnisse",
  },
  ru: {
    "Рушійна сила і опір у процесах перенесення": "Движущая сила и сопротивление в процессах переноса",
    "Три аналогічні процеси: тепло переноситься через різницю температур, компонент через різницю концентрацій, рідина через різницю тисків; швидкість визначається рушійною силою і опором.":
      "Три аналогичных процесса: тепло переносится из-за разности температур, компонент из-за разности концентраций, жидкость из-за разности давлений.",
    "Одна ідея для всього курсу: швидкість = рушійна сила / опір":
      "Одна идея для всего курса: скорость = движущая сила / сопротивление",
    Теплоперенесення: "Теплоперенос",
    гаряче: "горячее",
    холодне: "холодное",
    "Δt / Rт": "Δt / Rт",
    Масоперенесення: "Массоперенос",
    "Δc / Rм": "Δc / Rм",
    Гідродинаміка: "Гидродинамика",
    "Δp / Rг": "Δp / Rг",
    "Щоб пришвидшити процес, або збільшують рушійну силу, або зменшують опір конструкцією апарата та режимом потоку.":
      "Чтобы ускорить процесс, увеличивают движущую силу или уменьшают сопротивление конструкцией аппарата и режимом потока.",
    "Карта критеріїв подібності": "Карта критериев подобия",
    "Схема групує безрозмірні критерії за фізичним змістом: режим течії, теплообмін, масообмін, гравітаційні сили і втрати тиску.":
      "Схема группирует безразмерные критерии по физическому смыслу: режим течения, теплообмен, массообмен, гравитация и потери давления.",
    "Критерії подібності читаються як співвідношення фізичних ефектів":
      "Критерии подобия читают как соотношения физических эффектов",
    процес: "процесс",
    "у трубі, мішалці,": "в трубе, мешалке,",
    теплообміннику: "теплообменнике",
    "інерція / в'язкість": "инерция / вязкость",
    "режим течії продукту": "режим течения продукта",
    "конвекція / провідність": "конвекция / проводимость",
    "пастеризація, охолодження": "пастеризация, охлаждение",
    "інерція / гравітація": "инерция / гравитация",
    "осідання, піна, краплі": "осаждение, пена, капли",
    "масовіддача / дифузія": "массоотдача / диффузия",
    "екстракція, сушіння, мембрани": "экстракция, сушка, мембраны",
    "Фізичні властивості у розрахунках харчових процесів":
      "Физические свойства в расчетах пищевых процессов",
    "Схема показує, як густина, в'язкість, теплоємність і теплопровідність впливають на гідравліку, теплообмін і вибір обладнання.":
      "Схема показывает, как плотность, вязкость, теплоемкость и теплопроводность влияют на гидравлику, теплообмен и выбор оборудования.",
    "Властивості продукту визначають розмір апарата і режим роботи":
      "Свойства продукта определяют размер аппарата и режим работы",
    "харчовий продукт": "пищевой продукт",
    "молоко, сік, олія, соус,": "молоко, сок, масло, соус,",
    "сироп, пюре, фарш": "сироп, пюре, фарш",
    густина: "плотность",
    "витрата, тиск, Re": "расход, давление, Re",
    "в'язкість": "вязкость",
    "насос, втрати напору, Re": "насос, потери напора, Re",
    теплоємність: "теплоемкость",
    "тепловий баланс, пара": "тепловой баланс, пар",
    теплопровідність: "теплопроводность",
    "Nu, Pr, прогрівання": "Nu, Pr, прогрев",
    "Реологічна поведінка харчових продуктів": "Реологическое поведение пищевых продуктов",
    "Графік показує залежність напруження зсуву від швидкості зсуву для ньютонівських, псевдопластичних, дилатантних і пластичних харчових систем.":
      "График показывает зависимость напряжения сдвига от скорости сдвига для ньютоновских, псевдопластичных, дилатантных и пластичных пищевых систем.",
    "В'язкість харчових продуктів часто залежить від швидкості зсуву":
      "Вязкость пищевых продуктов часто зависит от скорости сдвига",
    "швидкість зсуву γ, с⁻¹": "скорость сдвига γ, с⁻¹",
    "напруження τ, Па": "напряжение τ, Па",
    Ньютонівські: "Ньютоновские",
    "вода, молоко, соки": "вода, молоко, соки",
    Псевдопластичні: "Псевдопластичные",
    "кетчуп, йогурт, пюре": "кетчуп, йогурт, пюре",
    Дилатантні: "Дилатантные",
    "крохмальні суспензії": "крахмальные суспензии",
    Пластичні: "Пластичные",
    "паста, шоколадна маса": "паста, шоколадная масса",
    "Матеріальний баланс випарної установки": "Материальный баланс выпарной установки",
    "Схема показує, що в апарат надходить сік, а виходять концентрат і випарена вода; сухі речовини зберігаються.":
      "Схема показывает, что в аппарат поступает сок, а выходят концентрат и выпаренная вода; сухие вещества сохраняются.",
    "Матеріальний баланс: нічого не зникає": "Материальный баланс: ничего не исчезает",
    вхід: "вход",
    "сік 10 000 кг/год": "сок 10 000 кг/ч",
    "10% сухих речовин": "10% сухих веществ",
    вихід: "выход",
    "концентрат 1538 кг/год": "концентрат 1538 кг/ч",
    "65% сухих речовин": "65% сухих веществ",
    "випарена вода": "выпаренная вода",
    "8462 кг/год": "8462 кг/ч",
    "сухі речовини: 10 000 · 0,10 = 1538 · 0,65":
      "сухие вещества: 10 000 · 0,10 = 1538 · 0,65",
    "баланс можна складати за всією масою або за ключовим компонентом":
      "баланс можно составлять по всей массе или по ключевому компоненту",
    "Тепловий баланс і діаграма Санкі": "Тепловой баланс и диаграмма Санки",
    "Схема показує вхід тепла у пастеризатор і його розподіл на нагрівання продукту, рекуперацію та втрати.":
      "Схема показывает подвод тепла в пастеризатор и его распределение на нагрев продукта, рекуперацию и потери.",
    "Тепловий баланс: ширина потоку показує величину енергії":
      "Тепловой баланс: ширина потока показывает количество энергии",
    пастеризатор: "пастеризатор",
    "молоко 4 → 72 °C": "молоко 4 -> 72 °C",
    "пара / гаряча вода": "пар / горячая вода",
    "зовнішнє тепло": "внешнее тепло",
    рекуперація: "рекуперация",
    "тепло повертається в процес": "тепло возвращается в процесс",
    "корисне нагрівання": "полезный нагрев",
    втрати: "потери",
    "Санкі допомагає швидко побачити, де найбільша економія: ізоляція, рекуперація, правильний режим роботи.":
      "Санки помогает быстро увидеть, где наибольшая экономия: изоляция, рекуперация, правильный режим работы.",
    "Рекуперація тепла у HTST пастеризаторі": "Рекуперация тепла в HTST-пастеризаторе",
    "Схема показує, як холодне сире молоко нагрівається гарячим пастеризованим молоком у секції регенерації, а зовнішнє тепло додається лише для доведення до температури пастеризації.":
      "Схема показывает, как холодное сырое молоко нагревается горячим пастеризованным молоком в секции регенерации.",
    "HTST: чому рекуперація економить пару і холод":
      "HTST: почему рекуперация экономит пар и холод",
    регенерація: "регенерация",
    "холодне молоко": "холодное молоко",
    "гріється гарячим": "нагревается горячим",
    нагрівання: "нагрев",
    "до 72...75 °C": "до 72...75 °C",
    витримка: "выдержка",
    "15...20 с": "15...20 с",
    охолодження: "охлаждение",
    "до 4 °C": "до 4 °C",
    "сире молоко 4 °C": "сырое молоко 4 °C",
    "пастеризоване молоко": "пастеризованное молоко",
    "готовий продукт 4 °C": "готовый продукт 4 °C",
    "до 90%+ тепла можна повернути у процес": "до 90%+ тепла можно вернуть в процесс",
    "Ідея оптимізації проста: гарячий продукт не викидає тепло назовні, а підігріває наступну порцію холодного продукту.":
      "Идея оптимизации проста: горячий продукт не отдает тепло наружу, а подогревает следующую порцию холодного продукта.",
    "Масштабний перехід у харчовому виробництві": "Масштабный переход в пищевом производстве",
    "Схема показує перехід від лабораторної проби до пілотної установки і промислового апарата з контролем геометричної, кінематичної та динамічної подібності.":
      "Схема показывает переход от лабораторной пробы к пилотной установке и промышленному аппарату с контролем геометрического, кинематического и динамического подобия.",
    "Масштабування: збільшити розмір не означає зберегти процес":
      "Масштабирование: увеличить размер не значит сохранить процесс",
    Лабораторія: "Лаборатория",
    "2 л": "2 л",
    "смак, рецептура,": "вкус, рецептура,",
    "перші властивості": "первые свойства",
    Пілот: "Пилот",
    "200 л": "200 л",
    "перевірка Re, Nu,": "проверка Re, Nu,",
    "часу перемішування": "времени перемешивания",
    Виробництво: "Производство",
    "2000 л": "2000 л",
    "якість партії,": "качество партии,",
    "енергія, стабільність": "энергия, стабильность",
    "не копіюємо": "не копируем",
    "а перевіряємо": "а проверяем",
    "Подібність = геометрія + швидкості + співвідношення сил":
      "Подобие = геометрия + скорости + соотношение сил",
  },
};

const fileNames = [
  "dimensionless-groups-map.svg",
  "driving-force-resistance.svg",
  "food-properties-map.svg",
  "htst-regeneration.svg",
  "material-balance-evaporator.svg",
  "rheology-food-curves.svg",
  "sankey-heat-balance.svg",
  "scale-up-similarity.svg",
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
    const outputPath = join(process.cwd(), "public", "images", "lectures", locale, "general-principles", fileName);
    const source = await readFile(sourcePath, "utf8");
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, replaceAllText(source, dictionary), "utf8");
  }
}
