from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE = ROOT / "src" / "content" / "courses"
SLUG = "bioprocess-engineering/chapter-06-heat-transfer-basics.md"


def eq(expr: str, num: str) -> str:
    number = f"({num})" if num else ""
    return (
        '<div class="equation-block">\n'
        f'  <span class="equation-main">{expr}</span>\n'
        f'  <span class="equation-number">{number}</span>\n'
        '</div>'
    )


def fig(name: str, alt: str) -> str:
    return f"![{alt}](/images/courses/bioprocess-engineering/chapter-06/{name}.webp)"


E = {
    "6.1": eq("dQ/dτ = -λF · dt/dx", "6.1"),
    "6.2": eq("q = λ(t<sub>1</sub> - t<sub>2</sub>)/δ", "6.2"),
    "6.3": eq("R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + ... + R<sub>n</sub>", "6.3"),
    "6.4": eq("Q = αF(t<sub>w</sub> - t)", "6.4"),
    "6.5": eq("Nu = 0.021Re<sup>0.8</sup>Pr<sup>0.43</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup>", "6.5"),
    "6.6": eq("Nu = 0.023Re<sup>0.8</sup>Pr<sup>0.4</sup>", "6.6"),
    "6.7": eq("Nu = 0.15Re<sup>0.33</sup>Pr<sup>0.43</sup>Gr<sup>0.1</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup>", "6.7"),
    "air1": eq("Nu = 0.018Re<sup>0.8</sup>", ""),
    "air2": eq("Nu = 0.13Re<sup>0.33</sup>Gr<sup>0.1</sup>", ""),
    "6.8": eq("Nu = f(Re)Pr<sup>0.43</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup>", "6.8"),
    "6.9": eq("Nu = 0.41Re<sup>0.6</sup>Pr<sup>0.33</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup>", "6.9"),
    "6.10": eq("Nu = 0.23Re<sup>0.65</sup>Pr<sup>0.33</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup>", "6.10"),
    "6.11": eq("Nu = C(GrPr)<sup>n</sup>", "6.11"),
    "6.12": eq("Nu = 1.18(GrPr)<sup>0.125</sup>", "6.12"),
    "6.13": eq("Nu = 0.54(GrPr)<sup>0.25</sup>", "6.13"),
    "6.14": eq("Nu = 0.135(GrPr)<sup>0.33</sup>", "6.14"),
    "6.15": eq("Nu = C(Ga · Pr · K<sub>u</sub>)<sup>0.25</sup>", "6.15"),
    "6.16": eq("Nu = 54K<sup>0.6</sup>Pr<sup>-0.3</sup>", "6.16"),
    "6.17": eq("α = Aq<sup>0.6</sup>", "6.17"),
    "6.18": eq("α<sub>rad</sub> = 5.7ε[(T<sub>1</sub>/100)<sup>4</sup> - (T<sub>2</sub>/100)<sup>4</sup>]/(T<sub>1</sub> - T<sub>2</sub>)", "6.18"),
    "6.19": eq("α = 9.76 + 0.07Δt", "6.19"),
    "6.20": eq("Q = kFΔt<sub>m</sub>", "6.20"),
    "wall1": eq("q = α<sub>1</sub>(t<sub>1</sub> - t<sub>w1</sub>)", ""),
    "wall2": eq("q = λ(t<sub>w1</sub> - t<sub>w2</sub>)/δ", ""),
    "wall3": eq("q = α<sub>2</sub>(t<sub>w2</sub> - t<sub>2</sub>)", ""),
    "6.21": eq("q = (t<sub>1</sub> - t<sub>2</sub>)/(1/α<sub>1</sub> + δ/λ + 1/α<sub>2</sub>) = k(t<sub>1</sub> - t<sub>2</sub>)", "6.21"),
    "6.22": eq("k = 1/(1/α<sub>1</sub> + δ/λ + 1/α<sub>2</sub>)", "6.22"),
    "6.23": eq("R = 1/k = 1/α<sub>1</sub> + δ/λ + 1/α<sub>2</sub>", "6.23"),
    "6.24": eq("k = 1/(1/α<sub>1</sub> + Σ(δ<sub>i</sub>/λ<sub>i</sub>) + 1/α<sub>2</sub>)", "6.24"),
}


def table_criteria(lang: str) -> str:
    if lang == "uk":
        rows = [
            ("Нуссельта", "Nu = αl/λ", "Інтенсивність переходу теплоти на межі потік - стінка."),
            ("Прандтля", "Pr = ν/a = cμ/λ", "Зв'язок температурного і швидкісного полів теплоносія."),
            ("Пекле", "Pe = wl/a = RePr", "Відношення конвективного і молекулярного перенесення теплоти."),
            ("Грасгофа", "Gr = gl<sup>3</sup>βΔt/ν<sup>2</sup>", "Вплив підіймальної сили під час вільної конвекції."),
            ("Кутателадзе", "Ku", "Теплообмін під час фазового переходу."),
        ]
        head = "| Критерій | Складові критерію | Фізичний зміст |\n|---|---|---|"
    elif lang == "en":
        rows = [
            ("Nusselt", "Nu = αl/λ", "Intensity of heat transfer at the flow-wall boundary."),
            ("Prandtl", "Pr = ν/a = cμ/λ", "Relation between temperature and velocity fields of the heat carrier."),
            ("Peclet", "Pe = wl/a = RePr", "Ratio of convective to molecular heat transport."),
            ("Grashof", "Gr = gl<sup>3</sup>βΔt/ν<sup>2</sup>", "Effect of buoyancy in free convection."),
            ("Kutateladze", "Ku", "Heat exchange during phase change."),
        ]
        head = "| Criterion | Components | Physical meaning |\n|---|---|---|"
    elif lang == "de":
        rows = [
            ("Nusselt", "Nu = αl/λ", "Intensitaet des Waermeuebergangs an der Grenze Strom - Wand."),
            ("Prandtl", "Pr = ν/a = cμ/λ", "Zusammenhang zwischen Temperatur- und Geschwindigkeitsfeld."),
            ("Peclet", "Pe = wl/a = RePr", "Verhaeltnis von konvektivem zu molekularem Waermetransport."),
            ("Grashof", "Gr = gl<sup>3</sup>βΔt/ν<sup>2</sup>", "Einfluss des Auftriebs bei freier Konvektion."),
            ("Kutateladze", "Ku", "Waermeaustausch beim Phasenuebergang."),
        ]
        head = "| Kriterium | Bestandteile | Physikalische Bedeutung |\n|---|---|---|"
    else:
        rows = [
            ("Нуссельта", "Nu = αl/λ", "Интенсивность перехода теплоты на границе поток - стенка."),
            ("Прандтля", "Pr = ν/a = cμ/λ", "Связь температурного и скоростного полей теплоносителя."),
            ("Пекле", "Pe = wl/a = RePr", "Отношение конвективного и молекулярного переноса теплоты."),
            ("Грасгофа", "Gr = gl<sup>3</sup>βΔt/ν<sup>2</sup>", "Влияние подъемной силы при свободной конвекции."),
            ("Кутателадзе", "Ku", "Теплообмен при фазовом переходе."),
        ]
        head = "| Критерий | Состав критерия | Физический смысл |\n|---|---|---|"
    return head + "\n" + "\n".join(f"| {a} | {b} | {c} |" for a, b, c in rows)


def table_f(lang: str) -> str:
    title = {
        "uk": "**Таблиця 6.2. Значення комплексу f(Re) за різних значень Re**",
        "en": "**Table 6.2. Values of the f(Re) complex for different Re values**",
        "de": "**Tabelle 6.2. Werte des Komplexes f(Re) fuer verschiedene Re-Werte**",
        "ru": "**Таблица 6.2. Значения комплекса f(Re) при разных значениях Re**",
    }[lang]
    return (
        f"{title}\n\n"
        "| Re · 10<sup>-3</sup> | 2.1 | 2.2 | 2.3 | 2.4 | 2.5 | 3 | 4 | 5 | 6 | 8 | 10 |\n"
        "|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|\n"
        "| f(Re) | 1.9 | 2.2 | 3.3 | 3.8 | 4.4 | 6.0 | 10.3 | 15.5 | 19.5 | 27.0 | 33.3 |"
    )


TEXT = {
    "uk": {
        "mat": "## Матеріал підручника",
        "h": ["Загальні відомості", "Основні критерії подібності теплових процесів", "Теплопровідність", "Конвективний теплообмін", "Тепловіддача за зміни агрегатного стану речовини", "Променистий теплообмін", "Теплопередача"],
        "p1": "Теплопередачею називають процес перенесення теплоти від одного тіла до іншого, необхідною і достатньою умовою якого є різниця температур. Мірою теплообміну є кількість переданої теплоти; у системі СІ її вимірюють у джоулях. Речовини, що беруть участь у перенесенні теплоти, називають теплоносіями: гарячий теплоносій віддає теплоту, холодний - сприймає її.",
        "p2": "У виробництві як гарячі теплоносії використовують водяну пару, гарячу воду, нагріте повітря, димові гази та мінеральні масла; як холодні - воду, повітря, розсоли, вуглекислоту, аміак і фреони. Теплота переноситься теплопровідністю, конвекцією і випромінюванням. Тепловіддача описує теплообмін між стінкою та середовищем, що її омиває, а теплопередача - обмін між двома середовищами через тверду перегородку.",
        "t61": "**Таблиця 6.1. Критерії подібності теплових процесів**",
        "fourier": "Основне рівняння перенесення теплоти способом теплопровідності за законом Фур'є для одновимірного потоку:",
        "wall": "Для однорідної плоскої стінки завтовшки δ зі сталим коефіцієнтом теплопровідності λ температури зовнішніх поверхонь дорівнюють t<sub>1</sub> і t<sub>2</sub>. Тоді питомий тепловий потік визначають так:",
        "r": "Величину δ/λ називають тепловим, або термічним, опором стінки. Для багатошарової стінки повний опір дорівнює сумі опорів окремих шарів:",
        "fig1": "Рис. 6.1. Схема теплопровідності плоскої стінки",
        "conv": "У рідинах і газах теплота переноситься переважно конвекцією. Вільна конвекція виникає через різницю густин нагрітих і холодних частинок, а примусова - під дією насоса, вентилятора або іншої зовнішньої сили. За турбулентного руху теплообмін значно інтенсивніший, ніж за ламінарного.",
        "newton": "Основним законом конвективного теплообміну є закон Ньютона:",
        "forced": "Для розвиненого турбулентного руху в трубах і каналах при Re > 10000 застосовують критеріальне рівняння:",
        "simple": "Для рідин з в'язкістю, що не перевищує приблизно подвоєну в'язкість води, користуються спрощеною залежністю:",
        "lam": "Для ламінарного руху при Re < 2300 рекомендують:",
        "air": "Для повітря наведені залежності спрощують:",
        "trans": "У перехідному режимі 2300 < Re < 10000 тепловіддачу оцінюють наближено:",
        "bundle": "За поперечного обтікання пучка труб при куті атаки φ = 90° для шахового і коридорного розміщення труб використовують:",
        "free": "Для вільної конвекції середній коефіцієнт тепловіддачі визначають через добуток GrPr:",
        "phase": "Під час конденсації пари основний термічний опір створює плівка конденсату на твердій поверхні. Для визначення коефіцієнта тепловіддачі використовують залежність Нуссельта:",
        "boil": "Під час кипіння рідини теплообмін складний, тому для вертикальних труб із природною циркуляцією застосовують наближене рівняння:",
        "rad": "Випромінювання властиве всім тілам: частина теплової енергії перетворюється на променисту, а після поглинання іншими тілами знову переходить у теплоту. Коефіцієнт тепловіддачі випромінюванням визначають так:",
        "loss": "Для апаратів у закритих приміщеннях при температурі поверхні до 150 °C сумарний коефіцієнт тепловіддачі випромінюванням і конвекцією можна оцінити:",
        "overall": "Кількість теплоти, що передається від гарячого теплоносія до холодного через стінку, визначають загальним рівнянням теплопередачі:",
        "plane": "Для плоскої стінки завтовшки δ з коефіцієнтом теплопровідності λ за усталеного процесу записують три рівняння теплового потоку:",
        "fig2": "Рис. 6.2. Схема теплопередачі через плоску стінку",
    },
    "en": {
        "mat": "## Lecture Notes",
        "h": ["General Information", "Main Similarity Criteria of Thermal Processes", "Heat Conduction", "Convective Heat Exchange", "Heat Transfer During Phase Change", "Radiative Heat Exchange", "Overall Heat Transfer"],
        "p1": "Heat transfer is the transfer of heat from one body to another; the necessary and sufficient condition is a temperature difference. The measure of heat exchange is the amount of heat transferred, expressed in joules in SI. Substances participating in heat transfer are heat carriers: the hot carrier releases heat, and the cold carrier receives it.",
        "p2": "Industrial hot heat carriers include steam, hot water, heated air, flue gases and mineral oils; cold carriers include water, air, brines, carbon dioxide, ammonia and refrigerants. Heat is transferred by conduction, convection and radiation. Heat emission describes exchange between a wall and the medium flowing around it; overall heat transfer describes exchange between two media through a solid partition.",
        "t61": "**Table 6.1. Similarity criteria of thermal processes**",
        "fourier": "The basic one-dimensional heat-conduction equation according to Fourier's law is:",
        "wall": "For a homogeneous plane wall of thickness δ with constant thermal conductivity λ and surface temperatures t<sub>1</sub> and t<sub>2</sub>, the specific heat flux is:",
        "r": "The value δ/λ is called the thermal resistance of the wall. For a multilayer wall the total resistance is the sum of the separate layer resistances:",
        "fig1": "Fig. 6.1. Heat conduction through a plane wall",
        "conv": "In liquids and gases, heat is transferred mainly by convection. Free convection is caused by density differences between heated and cold particles, while forced convection is produced by a pump, fan or another external force. Turbulent flow gives much more intensive heat exchange than laminar flow.",
        "newton": "The basic law of convective heat exchange is Newton's law:",
        "forced": "For developed turbulent flow in tubes and channels at Re > 10000, the criterion equation is:",
        "simple": "For liquids whose viscosity is not more than about twice that of water, a simplified relation is used:",
        "lam": "For laminar flow at Re < 2300, the recommended equation is:",
        "air": "For air these relations are simplified:",
        "trans": "In the transition region 2300 < Re < 10000, heat transfer is estimated approximately:",
        "bundle": "For cross-flow over a tube bundle at an attack angle φ = 90°, staggered and in-line tube arrangements are calculated as:",
        "free": "For free convection, the average heat-transfer coefficient is determined through the product GrPr:",
        "phase": "During steam condensation, the main thermal resistance is the condensate film on the solid surface. The Nusselt relation is used to determine the heat-transfer coefficient:",
        "boil": "Boiling heat transfer is complex, so for vertical tubes with natural circulation an approximate equation is used:",
        "rad": "Radiation is characteristic of all bodies: part of thermal energy is converted to radiant energy and, after absorption by other bodies, becomes heat again. The radiative heat-transfer coefficient is:",
        "loss": "For equipment in closed rooms with surface temperature up to 150 °C, the total heat-transfer coefficient by radiation and convection may be estimated as:",
        "overall": "The heat transferred from a hot carrier to a cold carrier through a wall is determined by the general heat-transfer equation:",
        "plane": "For a plane wall of thickness δ and thermal conductivity λ, the steady heat flux is described by three equations:",
        "fig2": "Fig. 6.2. Overall heat transfer through a plane wall",
    },
    "de": {
        "mat": "## Vorlesungsskript",
        "h": ["Allgemeines", "Wichtigste Aehnlichkeitskriterien thermischer Prozesse", "Waermeleitung", "Konvektiver Waermeaustausch", "Waermeuebergang beim Phasenwechsel", "Strahlungswaermeaustausch", "Waermeuebertragung"],
        "p1": "Waermeuebertragung ist die Uebertragung von Waerme von einem Koerper auf einen anderen; notwendige Bedingung ist ein Temperaturunterschied. Das Mass des Waermeaustauschs ist die uebertragene Waermemenge, im SI-System in Joule. Stoffe, die am Waermetransport teilnehmen, heissen Waermetraeger: der heisse Waermetraeger gibt Waerme ab, der kalte nimmt sie auf.",
        "p2": "Als heisse Waermetraeger verwendet man Dampf, heisses Wasser, erwaermte Luft, Rauchgase und Mineraloele; als kalte Waermetraeger Wasser, Luft, Sole, Kohlendioxid, Ammoniak und Kaeltemittel. Waerme wird durch Leitung, Konvektion und Strahlung uebertragen. Waermeuebergang beschreibt den Austausch zwischen Wand und umstroemendem Medium, Waermeuebertragung den Austausch zwischen zwei Medien durch eine feste Trennwand.",
        "t61": "**Tabelle 6.1. Aehnlichkeitskriterien thermischer Prozesse**",
        "fourier": "Die Grundgleichung der eindimensionalen Waermeleitung nach Fourier lautet:",
        "wall": "Fuer eine homogene ebene Wand der Dicke δ mit konstanter Waermeleitfaehigkeit λ und Oberflaechentemperaturen t<sub>1</sub> und t<sub>2</sub> gilt fuer den spezifischen Waermestrom:",
        "r": "Der Ausdruck δ/λ ist der thermische Widerstand der Wand. Bei einer mehrschichtigen Wand ist der Gesamtwiderstand die Summe der Einzelwiderstaende:",
        "fig1": "Abb. 6.1. Waermeleitung durch eine ebene Wand",
        "conv": "In Fluessigkeiten und Gasen wird Waerme hauptsaechlich durch Konvektion uebertragen. Freie Konvektion entsteht durch Dichteunterschiede, erzwungene Konvektion durch Pumpe, Ventilator oder eine andere aeussere Kraft. Bei turbulenter Stroemung ist der Waermeaustausch deutlich intensiver als bei laminarer Stroemung.",
        "newton": "Das Grundgesetz des konvektiven Waermeaustauschs ist das Newtonsche Gesetz:",
        "forced": "Fuer ausgebildete turbulente Stroemung in Rohren und Kanaelen bei Re > 10000 gilt:",
        "simple": "Fuer Fluessigkeiten mit einer Viskositaet bis etwa zum Doppelten der Wasserviskositaet wird eine vereinfachte Beziehung benutzt:",
        "lam": "Fuer laminare Stroemung bei Re < 2300 wird empfohlen:",
        "air": "Fuer Luft vereinfachen sich diese Beziehungen:",
        "trans": "Im Uebergangsbereich 2300 < Re < 10000 wird der Waermeuebergang angenaehert berechnet:",
        "bundle": "Bei Queranstroemung eines Rohrbuendels mit Angriffswinkel φ = 90° gelten fuer versetzte und fluchtende Rohrordnung:",
        "free": "Bei freier Konvektion wird der mittlere Waermeuebergangskoeffizient ueber das Produkt GrPr bestimmt:",
        "phase": "Bei der Dampfkondensation bildet der Kondensatfilm auf der festen Oberflaeche den wichtigsten thermischen Widerstand. Zur Bestimmung des Waermeuebergangskoeffizienten nutzt man die Nusselt-Beziehung:",
        "boil": "Der Waermeaustausch beim Sieden ist komplex; fuer vertikale Rohre mit Naturumlauf verwendet man daher eine Naeherung:",
        "rad": "Strahlung ist allen Koerpern eigen: Ein Teil der Waermeenergie wird in Strahlungsenergie umgewandelt und nach Absorption wieder zu Waerme. Der Strahlungs-Waermeuebergangskoeffizient ist:",
        "loss": "Fuer Apparate in geschlossenen Raeumen bei Oberflaechentemperaturen bis 150 °C kann der gesamte Waermeuebergangskoeffizient durch Strahlung und Konvektion abgeschaetzt werden:",
        "overall": "Die von einem heissen an einen kalten Waermetraeger durch eine Wand uebertragene Waermemenge wird bestimmt durch:",
        "plane": "Fuer eine ebene Wand der Dicke δ und Waermeleitfaehigkeit λ beschreibt man den stationaeren Waermestrom mit drei Gleichungen:",
        "fig2": "Abb. 6.2. Waermeuebertragung durch eine ebene Wand",
    },
    "ru": {
        "mat": "## Конспект лекции",
        "h": ["Общие сведения", "Основные критерии подобия тепловых процессов", "Теплопроводность", "Конвективный теплообмен", "Теплоотдача при изменении агрегатного состояния вещества", "Лучистый теплообмен", "Теплопередача"],
        "p1": "Теплопередачей называют перенос теплоты от одного тела к другому; необходимым и достаточным условием является разность температур. Мерой теплообмена является количество переданной теплоты, в системе СИ его измеряют в джоулях. Вещества, участвующие в переносе теплоты, называют теплоносителями: горячий теплоноситель отдает теплоту, холодный воспринимает ее.",
        "p2": "В промышленности как горячие теплоносители используют водяной пар, горячую воду, нагретый воздух, дымовые газы и минеральные масла; как холодные - воду, воздух, рассолы, углекислоту, аммиак и фреоны. Теплота переносится теплопроводностью, конвекцией и излучением. Теплоотдача описывает теплообмен между стенкой и омывающей средой, а теплопередача - обмен между двумя средами через твердую перегородку.",
        "t61": "**Таблица 6.1. Критерии подобия тепловых процессов**",
        "fourier": "Основное уравнение переноса теплоты теплопроводностью по закону Фурье для одномерного потока:",
        "wall": "Для однородной плоской стенки толщиной δ с постоянным коэффициентом теплопроводности λ и температурами поверхностей t<sub>1</sub> и t<sub>2</sub> удельный тепловой поток равен:",
        "r": "Величину δ/λ называют тепловым, или термическим, сопротивлением стенки. Для многослойной стенки полное сопротивление равно сумме сопротивлений отдельных слоев:",
        "fig1": "Рис. 6.1. Схема теплопроводности плоской стенки",
        "conv": "В жидкостях и газах теплота переносится преимущественно конвекцией. Свободная конвекция возникает из-за разности плотностей нагретых и холодных частиц, а вынужденная - под действием насоса, вентилятора или другой внешней силы. При турбулентном движении теплообмен значительно интенсивнее, чем при ламинарном.",
        "newton": "Основным законом конвективного теплообмена является закон Ньютона:",
        "forced": "Для развитого турбулентного движения в трубах и каналах при Re > 10000 применяют критериальное уравнение:",
        "simple": "Для жидкостей с вязкостью не более примерно двойной вязкости воды используют упрощенную зависимость:",
        "lam": "Для ламинарного движения при Re < 2300 рекомендуется:",
        "air": "Для воздуха эти зависимости упрощаются:",
        "trans": "В переходной области 2300 < Re < 10000 теплоотдачу оценивают приближенно:",
        "bundle": "При поперечном обтекании пучка труб с углом атаки φ = 90° для шахматного и коридорного размещения труб используют:",
        "free": "Для свободной конвекции средний коэффициент теплоотдачи определяют через произведение GrPr:",
        "phase": "При конденсации пара основное термическое сопротивление создает пленка конденсата на твердой поверхности. Для определения коэффициента теплоотдачи используют зависимость Нуссельта:",
        "boil": "Теплообмен при кипении жидкости сложен, поэтому для вертикальных труб с естественной циркуляцией применяют приближенное уравнение:",
        "rad": "Излучение свойственно всем телам: часть тепловой энергии превращается в лучистую, а после поглощения другими телами снова переходит в теплоту. Коэффициент теплоотдачи излучением определяют так:",
        "loss": "Для аппаратов в закрытых помещениях при температуре поверхности до 150 °C суммарный коэффициент теплоотдачи излучением и конвекцией можно оценить:",
        "overall": "Количество теплоты, передаваемой от горячего теплоносителя к холодному через стенку, определяют общим уравнением теплопередачи:",
        "plane": "Для плоской стенки толщиной δ с коэффициентом теплопроводности λ при установившемся процессе записывают три уравнения теплового потока:",
        "fig2": "Рис. 6.2. Схема теплопередачи через плоскую стенку",
    },
}


def material(lang: str) -> str:
    t = TEXT[lang]
    h = t["h"]
    return f"""{t["mat"]}

### 6.1. {h[0]}

{t["p1"]}

{t["p2"]}

### 6.2. {h[1]}

{t["t61"]}

{table_criteria(lang)}

### 6.3. {h[2]}

{t["fourier"]}

{E["6.1"]}

{t["wall"]}

{E["6.2"]}

{fig("fig-6-1", t["fig1"])}
*{t["fig1"]}*

{t["r"]}

{E["6.3"]}

### 6.4. {h[3]}

{t["conv"]}

{t["newton"]}

{E["6.4"]}

{t["forced"]}

{E["6.5"]}

{t["simple"]}

{E["6.6"]}

{t["lam"]}

{E["6.7"]}

{t["air"]}

{E["air1"]}

{E["air2"]}

{t["trans"]}

{E["6.8"]}

{table_f(lang)}

{t["bundle"]}

{E["6.9"]}

{E["6.10"]}

{t["free"]}

{E["6.11"]}

{E["6.12"]}

{E["6.13"]}

{E["6.14"]}

### 6.5. {h[4]}

{t["phase"]}

{E["6.15"]}

{t["boil"]}

{E["6.16"]}

{E["6.17"]}

### 6.6. {h[5]}

{t["rad"]}

{E["6.18"]}

{t["loss"]}

{E["6.19"]}

### 6.7. {h[6]}

{t["overall"]}

{E["6.20"]}

{fig("fig-6-2", t["fig2"])}
*{t["fig2"]}*

{t["plane"]}

{E["wall1"]}

{E["wall2"]}

{E["wall3"]}

{E["6.21"]}

{E["6.22"]}

{E["6.23"]}

{E["6.24"]}
"""


SPLITS = {
    "uk": ("## Матеріал підручника", "## Після опрацювання"),
    "en": ("## Lecture Notes", "## After studying"),
    "de": ("## Vorlesungsskript", "## Nach dem Durcharbeiten"),
    "ru": ("## Конспект лекции", "## После изучения"),
}


def replace_material(path: Path, lang: str) -> None:
    text = path.read_text(encoding="utf-8")
    start_marker, end_marker = SPLITS[lang]
    if start_marker not in text:
        raise ValueError(f"Missing start marker in {path}")
    start = text.index(start_marker)
    end = text.index(end_marker, start)
    text = text[:start] + material(lang).rstrip() + "\n\n" + text[end:]
    path.write_text(text, encoding="utf-8")


for lang in ("uk", "en", "de", "ru"):
    replace_material(COURSE / lang / SLUG, lang)
    print(f"updated {lang}")
