from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE = ROOT / "src" / "content" / "courses"
SLUG = "bioprocess-engineering/chapter-02-hydraulics-basics.md"


def eq(expr: str, num: str) -> str:
    replacements = {
        "&part;": "∂",
        "Delta_bar": "Δ̄",
        "Delta": "Δ",
        "lambda": "λ",
        "epsilon": "ε",
        "alpha": "α",
        "phi": "φ",
        "rho": "ρ",
        "eta": "η",
        "mu": "μ",
        "tau": "τ",
        "xi": "ξ",
        "sum ξ": "Σξ",
        "Pi": "Π",
        "sqrt(": "√(",
    }
    for old, new in replacements.items():
        expr = expr.replace(old, new)
    return (
        '<div class="equation-block">\n'
        f'  <span class="equation-main">{expr}</span>\n'
        f'  <span class="equation-number">({num})</span>\n'
        '</div>'
    )


def fig(name: str, alt: str) -> str:
    return f"![{alt}](/images/courses/bioprocess-engineering/chapter-02/{name}.webp)"


equations = [
    eq("dP<sub>1</sub> - dP<sub>2</sub> + dG<sub>x</sub> = 0", "2.1"),
    eq("p<sub>1</sub>dy dz - p<sub>2</sub>dy dz + rho X dx dy dz = 0", "2.2"),
    eq("rho X - &part;p/&part;x = 0;<br />rho Y - &part;p/&part;y = 0;<br />rho Z - &part;p/&part;z = 0", "2.3"),
    eq("dp = rho(Xdx + Ydy + Zdz)", "2.4"),
    eq("Xdx + Ydy + Zdz = 0", "2.5"),
    eq("z + p/(rho g) = const", "2.6"),
    eq("H<sub>s</sub> = z + p/(rho g)", "2.7"),
    eq("z<sub>1</sub> + p<sub>1</sub>/(rho g) = z<sub>2</sub> + p<sub>2</sub>/(rho g)", "2.8"),
    eq("p = p<sub>0</sub> + rho g h", "2.9"),
    eq("Q = w<sub>1</sub>F<sub>1</sub> = w<sub>2</sub>F<sub>2</sub> = wF = const", "2.10"),
    eq("M = rho<sub>1</sub>w<sub>1</sub>F<sub>1</sub> = rho<sub>2</sub>w<sub>2</sub>F<sub>2</sub> = const", "2.11"),
    eq("R = F/Pi", "2.12"),
    eq("d<sub>eq</sub> = 4R = 4F/Pi", "2.13"),
    eq("X - (1/rho)&part;p/&part;x = 0;<br />Y - (1/rho)&part;p/&part;y = 0;<br />Z - (1/rho)&part;p/&part;z = 0", "2.14"),
    eq("X - (1/rho)&part;p/&part;x = dw<sub>x</sub>/d tau;<br />Y - (1/rho)&part;p/&part;y = dw<sub>y</sub>/d tau;<br />Z - (1/rho)&part;p/&part;z = dw<sub>z</sub>/d tau", "2.15"),
    eq("dw<sub>x</sub>/d tau = &part;w<sub>x</sub>/&part;tau + w<sub>x</sub>&part;w<sub>x</sub>/&part;x + w<sub>y</sub>&part;w<sub>x</sub>/&part;y + w<sub>z</sub>&part;w<sub>x</sub>/&part;z;<br />dw<sub>y</sub>/d tau = &part;w<sub>y</sub>/&part;tau + w<sub>x</sub>&part;w<sub>y</sub>/&part;x + w<sub>y</sub>&part;w<sub>y</sub>/&part;y + w<sub>z</sub>&part;w<sub>y</sub>/&part;z;<br />dw<sub>z</sub>/d tau = &part;w<sub>z</sub>/&part;tau + w<sub>x</sub>&part;w<sub>z</sub>/&part;x + w<sub>y</sub>&part;w<sub>z</sub>/&part;y + w<sub>z</sub>&part;w<sub>z</sub>/&part;z", "2.16"),
    eq("z<sub>1</sub> + p<sub>1</sub>/(rho g) + w<sub>1</sub><sup>2</sup>/(2g) = z<sub>2</sub> + p<sub>2</sub>/(rho g) + w<sub>2</sub><sup>2</sup>/(2g)", "2.17"),
    eq("z<sub>1</sub> + p<sub>1</sub>/(rho g) + w<sub>1</sub><sup>2</sup>/(2g) = z<sub>2</sub> + p<sub>2</sub>/(rho g) + w<sub>2</sub><sup>2</sup>/(2g) + h<sub>loss</sub>", "2.18"),
    eq("w = sqrt(2gH)", "2.19"),
    eq("w = sqrt(2g(H + (p<sub>1</sub> - p<sub>2</sub>)/(rho g)))", "2.19a"),
    eq("Q = F<sub>j</sub>w = epsilon phi F<sub>0</sub>sqrt(2gH) = alpha F<sub>0</sub>sqrt(2gH)", "2.20"),
    eq("w<sub>r</sub> = Delta p(R<sup>2</sup> - r<sup>2</sup>)/(4mu l)", "2.21"),
    eq("w<sub>max</sub> = Delta p R<sup>2</sup>/(4mu l)", "2.21a"),
    eq("Q = pi Delta p d<sup>4</sup>/(128mu l)", "2.22"),
    eq("w = Q/(pi R<sup>2</sup>) = Delta p R<sup>2</sup>/(8mu l) = Delta p d<sup>2</sup>/(32mu l)", "2.23"),
    eq("h<sub>loss</sub> = h<sub>fr</sub> + h<sub>loc</sub>", "2.24"),
    eq("h<sub>fr</sub> = lambda(l/d) w<sup>2</sup>/(2g)", "2.25"),
    eq("Delta p<sub>fr</sub> = lambda(l/d) rho w<sup>2</sup>/2", "2.25a"),
    eq("lambda = 0.3164 Re<sup>-0.25</sup>", "2.26"),
    eq("lambda = 0.11(Delta_bar + 68/Re)<sup>0.25</sup>", "2.27"),
    eq("lambda = 0.11 Delta_bar<sup>0.25</sup>", "2.28"),
    eq("h<sub>loc</sub> = xi w<sup>2</sup>/(2g)", "2.29"),
    eq("Delta p<sub>loc</sub> = xi rho w<sup>2</sup>/2", "2.29a"),
    eq("h<sub>loc</sub> = (sum xi) w<sup>2</sup>/(2g)", "2.30"),
    eq("h<sub>loss</sub> = (lambda l/d + sum xi) w<sup>2</sup>/(2g)", "2.31"),
    eq("Delta p<sub>loss</sub> = (lambda l/d + sum xi) rho w<sup>2</sup>/2", "2.31a"),
    eq("h<sub>loss</sub> = lambda((l + l<sub>eq</sub>)/d) w<sup>2</sup>/(2g)", "2.32"),
    eq("eta = eta<sub>vol</sub> eta<sub>h</sub> eta<sub>m</sub>", "2.33"),
    eq("eta<sub>vol</sub> = Q/(Q + q)", "2.34"),
    eq("eta<sub>h</sub> = H/(H + h)", "2.35"),
    eq("N = QH rho g/(1000 eta)", "2.36"),
    eq("(p<sub>atm</sub> - p<sub>s</sub>)/(rho g) = z<sub>1</sub> + h<sub>1</sub> + w<sub>s</sub><sup>2</sup>/(2g) = p<sub>vac</sub>/(rho g)", "2.37"),
    eq("p<sub>d</sub>/(rho g) = z<sub>2</sub> + h<sub>2</sub> + p<sub>2</sub>/(rho g)", "2.38"),
    eq("H<sub>req</sub> = z<sub>1</sub> + z<sub>2</sub> + (p<sub>2</sub> - p<sub>1</sub>)/(rho g) + h<sub>1</sub> + h<sub>2</sub>", "2.39"),
]

eq_text = "\n\n".join(equations)


materials = {
    "uk": f"""## Матеріал підручника

### 2.1. Гідростатика

Гідравліка розглядає закони рівноваги та руху рідин і газів. Для апаратів біотехнологічних виробництв ці закони потрібні під час розрахунку трубопроводів, резервуарів, ферментерів, теплообмінників, насосів, компресорів і систем подавання середовищ. Рідину в розділі розглядають як суцільне середовище, а тиск у будь-якій точці передається в усіх напрямках.

Для елементарного паралелепіпеда рідини, на який діють сили тиску та масові сили, умова рівноваги за віссю x записується так:

{equations[0]}

Якщо виразити сили тиску через площі граней, отримують:

{equations[1]}

Після переходу до границі одержують диференціальні рівняння рівноваги Ейлера:

{equations[2]}

{fig("fig-2-1", "Рис. 2.1. До виведення диференціальних рівнянь рівноваги Ейлера")}

Загальний диференціал тиску для нерухомої рідини:

{equations[3]}

Поверхнею однакового тиску називають поверхню, у всіх точках якої p = const, тобто dp = 0. Тоді рівняння поверхні однакового тиску має вигляд:

{equations[4]}

Якщо на рідину діє тільки сила тяжіння, основне рівняння гідростатики після інтегрування набуває форми:

{equations[5]}

Величина гідростатичного напору:

{equations[6]}

Для двох точок однієї нерухомої рідини:

{equations[7]}

{fig("fig-2-2", "Рис. 2.2. До вивчення основного рівняння гідростатики")}

Звідси випливає закон Паскаля: зовнішній тиск, прикладений до рідини, передається нею однаково в усіх напрямках. Абсолютний тиск на глибині h:

{equations[8]}

{fig("fig-2-3", "Рис. 2.3. До виведення закону Паскаля")}

Для вимірювання тиску застосовують рідинні манометри, вакуумметри та пружинні манометри. У біотехнологічному обладнанні контроль тиску особливо важливий у стерилізаторах, ферментерах, фільтрах і магістралях подавання стерильного повітря.

{fig("fig-2-4", "Рис. 2.4. Рідинний манометр")}

### 2.2. Гідродинаміка

Гідродинаміка вивчає рух рідин. Рух буває сталим, коли швидкість і тиск у фіксованій точці не змінюються з часом, і несталим, коли вони залежать від часу. Витрата рідини Q пов'язана із середньою швидкістю w і площею перерізу F співвідношенням Q = wF.

Для нестисливої рідини рівняння нерозривності потоку:

{equations[9]}

Для стисливого середовища сталість має масова витрата:

{equations[10]}

Гідравлічний радіус потоку:

{equations[11]}

Для каналів некруглого перерізу користуються еквівалентним діаметром:

{equations[12]}

Рівняння рівноваги ідеальної рідини, записані для одиниці маси:

{equations[13]}

З урахуванням прискорення частинки рідини отримують диференціальні рівняння руху Ейлера:

{equations[14]}

Повне прискорення включає локальну й конвективну складові:

{equations[15]}

Для елементарного струменя ідеальної рідини рівняння Бернуллі:

{equations[16]}

Для реальної рідини до рівняння вводять втрати напору:

{equations[17]}

{fig("fig-2-5", "Рис. 2.5. До виведення рівняння Бернуллі")}

Під час витікання рідини з отвору швидкість у першому наближенні:

{equations[18]}

Якщо враховано різницю тисків над вільними поверхнями:

{equations[19]}

Дійсна витрата через отвір враховує коефіцієнти швидкості, стиснення струменя та витрати:

{equations[20]}

Характер руху рідини визначають числом Рейнольдса Re = wd/ν. За малих Re рух ламінарний, струмені рідини не перемішуються поперек потоку. За великих Re рух турбулентний, з інтенсивними пульсаціями швидкості.

{fig("fig-2-7", "Рис. 2.7. Схема установки Рейнольдса")}

Для ламінарної течії у круглій трубі розподіл швидкості має параболічний характер:

{equations[21]}

Найбільша швидкість у центрі труби:

{equations[22]}

Об'ємна витрата за законом Пуазейля:

{equations[23]}

Середня швидкість:

{equations[24]}

{fig("fig-2-8", "Рис. 2.8. До виведення формул Стокса і Пуазейля")}

Повні втрати напору складаються з втрат на тертя по довжині та місцевих втрат:

{equations[25]}

Втрати напору на тертя:

{equations[26]}

Відповідні втрати тиску:

{equations[27]}

Для гладких труб у певній області турбулентного руху застосовують формулу Блазіуса:

{equations[28]}

Для шорстких труб використовують узагальнені залежності, зокрема:

{equations[29]}

У зоні автомодельного руху:

{equations[30]}

Місцеві опори спричинені входами, виходами, колінами, вентилями, звуженнями та розширеннями:

{equations[31]}

{equations[32]}

Якщо місцевих опорів декілька:

{equations[33]}

Загальні втрати у трубопроводі:

{equations[34]}

{equations[35]}

Через еквівалентну довжину місцевих опорів:

{equations[36]}

### 2.3. Насоси та газодувні машини

Для переміщення рідин застосовують насоси, а для газів — вентилятори, газодувки та компресори. Основними параметрами насоса є подача Q, напір H, потужність N, частота обертання, коефіцієнт корисної дії та допустима висота всмоктування.

Повний ККД насоса дорівнює добутку об'ємного, гідравлічного та механічного ККД:

{equations[37]}

Об'ємний ККД:

{equations[38]}

Гідравлічний ККД:

{equations[39]}

Потужність на валу насоса:

{equations[40]}

Для всмоктувальної лінії:

{equations[41]}

Для нагнітальної лінії:

{equations[42]}

Потрібний напір насоса для подавання рідини між апаратами:

{equations[43]}

Характеристика трубопроводу показує, як потрібний напір зростає зі збільшенням витрати. Робоча точка насосної установки визначається перетином характеристики насоса з характеристикою трубопроводу. Для біотехнологічних процесів це важливо, бо надмірний напір може пошкоджувати клітини, руйнувати флокули або погіршувати піногасіння, а недостатній напір порушує режим живлення апаратів.
""",
    "en": f"""## Lecture Notes

### 2.1. Hydrostatics

Hydraulics describes equilibrium and motion of liquids and gases. In bioprocess equipment it is used for calculating pipelines, tanks, fermenters, heat exchangers, pumps, compressors and medium-feeding systems. A liquid is treated as a continuous medium, and pressure at a point is transmitted in all directions.

For an elementary liquid parallelepiped, the equilibrium condition along the x-axis is:

{equations[0]}

After expressing pressure forces through face areas:

{equations[1]}

The limiting form gives Euler's differential equilibrium equations:

{equations[2]}

{fig("fig-2-1", "Fig. 2.1. Derivation of Euler differential equilibrium equations")}

The total pressure differential in a liquid at rest is:

{equations[3]}

For an isobaric surface, p = const and dp = 0:

{equations[4]}

If gravity is the only body force, integration gives the basic hydrostatic equation:

{equations[5]}

Hydrostatic head:

{equations[6]}

For two points in the same liquid at rest:

{equations[7]}

{fig("fig-2-2", "Fig. 2.2. Basic hydrostatic equation")}

Pascal's law follows from this relation: external pressure applied to a liquid is transmitted equally in all directions. Absolute pressure at depth h:

{equations[8]}

{fig("fig-2-3", "Fig. 2.3. Scheme for Pascal's law")}

Liquid manometers, vacuum gauges and elastic manometers are used for pressure measurement. In bioprocess equipment pressure control is essential in sterilizers, fermenters, filters and sterile-air lines.

{fig("fig-2-4", "Fig. 2.4. Liquid manometer")}

### 2.2. Hydrodynamics

Hydrodynamics studies liquid motion. Flow is steady when velocity and pressure at a fixed point do not change with time, and unsteady when they depend on time. Volumetric flow rate Q is related to mean velocity w and cross-sectional area F by Q = wF.

Continuity equation for an incompressible liquid:

{equations[9]}

For a compressible medium, mass flow rate is conserved:

{equations[10]}

Hydraulic radius:

{equations[11]}

Equivalent diameter for non-circular channels:

{equations[12]}

Euler equations for an ideal liquid per unit mass:

{equations[13]}

With acceleration included:

{equations[14]}

The total acceleration contains local and convective components:

{equations[15]}

Bernoulli equation for an elementary stream of ideal liquid:

{equations[16]}

For a real liquid, head losses are added:

{equations[17]}

{fig("fig-2-5", "Fig. 2.5. Derivation of Bernoulli equation")}

The approximate velocity of liquid outflow through an orifice:

{equations[18]}

With pressure difference above free surfaces:

{equations[19]}

Actual flow rate through an orifice includes velocity, contraction and discharge coefficients:

{equations[20]}

Flow regime is determined by the Reynolds number Re = wd/ν. At low Re the flow is laminar; at high Re it becomes turbulent with intense velocity pulsations.

{fig("fig-2-7", "Fig. 2.7. Reynolds experiment setup")}

For laminar flow in a circular pipe, the velocity profile is parabolic:

{equations[21]}

Maximum velocity on the pipe axis:

{equations[22]}

Poiseuille volumetric flow rate:

{equations[23]}

Mean velocity:

{equations[24]}

{fig("fig-2-8", "Fig. 2.8. Stokes and Poiseuille formulas")}

Total head loss consists of friction loss and local loss:

{equations[25]}

Friction head loss:

{equations[26]}

Corresponding pressure loss:

{equations[27]}

For smooth pipes in a turbulent-flow range, the Blasius formula is used:

{equations[28]}

For rough pipes:

{equations[29]}

In the fully rough self-similar region:

{equations[30]}

Local resistances are caused by inlets, outlets, bends, valves, contractions and expansions:

{equations[31]}

{equations[32]}

For several local resistances:

{equations[33]}

Total pipeline loss:

{equations[34]}

{equations[35]}

Using equivalent length:

{equations[36]}

### 2.3. Pumps and Gas Blowers

Liquids are transported by pumps, while gases are transported by fans, blowers and compressors. The main pump parameters are flow rate Q, head H, power N, rotational speed, efficiency and allowable suction height.

Overall pump efficiency:

{equations[37]}

Volumetric efficiency:

{equations[38]}

Hydraulic efficiency:

{equations[39]}

Pump shaft power:

{equations[40]}

For the suction line:

{equations[41]}

For the discharge line:

{equations[42]}

Required pump head:

{equations[43]}

The pipeline characteristic shows how required head increases with flow rate. The operating point is the intersection of the pump characteristic and the pipeline characteristic. In bioprocessing this is important because excessive head can damage cells or flocs, while insufficient head disrupts stable feeding of equipment.
""",
    "de": f"""## Vorlesungsskript

### 2.1. Hydrostatik

Die Hydraulik beschreibt Gleichgewicht und Bewegung von Fluessigkeiten und Gasen. In Apparaten biotechnologischer Produktionen wird sie fuer Rohrleitungen, Behaelter, Fermenter, Waermeuebertrager, Pumpen, Verdichter und Zufuehrsysteme benoetigt. Die Fluessigkeit wird als kontinuierliches Medium betrachtet; der Druck in einem Punkt wird in alle Richtungen uebertragen.

Fuer ein elementares Fluessigkeitselement gilt entlang der x-Achse:

{equations[0]}

Nach Darstellung der Druckkraefte ueber die Flaechen:

{equations[1]}

Im Grenzuebergang erhaelt man die Euler-Gleichgewichtsbedingungen:

{equations[2]}

{fig("fig-2-1", "Abb. 2.1. Herleitung der Euler-Gleichgewichtsbedingungen")}

Das totale Druckdifferential lautet:

{equations[3]}

Fuer eine Flaeche gleichen Drucks ist p = const und dp = 0:

{equations[4]}

Wirkt nur die Schwerkraft, folgt die Grundgleichung der Hydrostatik:

{equations[5]}

Hydrostatische Hoehe:

{equations[6]}

Fuer zwei Punkte derselben ruhenden Fluessigkeit:

{equations[7]}

{fig("fig-2-2", "Abb. 2.2. Grundgleichung der Hydrostatik")}

Daraus folgt das Pascal-Gesetz: ein aeusserer Druck wird in einer Fluessigkeit gleichmaessig in alle Richtungen uebertragen. Absoluter Druck in der Tiefe h:

{equations[8]}

{fig("fig-2-3", "Abb. 2.3. Schema zum Pascal-Gesetz")}

Zur Druckmessung verwendet man Fluessigkeitsmanometer, Vakuummeter und Federdruckmesser. In biotechnologischen Anlagen ist die Druckkontrolle besonders wichtig in Sterilisatoren, Fermentern, Filtern und Sterilluftleitungen.

{fig("fig-2-4", "Abb. 2.4. Fluessigkeitsmanometer")}

### 2.2. Hydrodynamik

Die Hydrodynamik untersucht die Bewegung von Fluessigkeiten. Eine Stroemung ist stationaer, wenn Geschwindigkeit und Druck in einem festen Punkt zeitlich unveraendert bleiben; sie ist instationaer, wenn sie von der Zeit abhaengen. Der Volumenstrom Q ist mit mittlerer Geschwindigkeit w und Querschnitt F durch Q = wF verbunden.

Kontinuitaetsgleichung fuer inkompressible Fluessigkeit:

{equations[9]}

Fuer kompressible Medien bleibt der Massenstrom konstant:

{equations[10]}

Hydraulischer Radius:

{equations[11]}

Aequivalenter Durchmesser fuer nichtkreisfoermige Kanaele:

{equations[12]}

Euler-Gleichungen fuer ideale Fluessigkeit bezogen auf die Masseneinheit:

{equations[13]}

Mit Beschleunigung:

{equations[14]}

Die Gesamtbeschleunigung besteht aus lokaler und konvektiver Komponente:

{equations[15]}

Bernoulli-Gleichung fuer einen Elementarstrom idealer Fluessigkeit:

{equations[16]}

Fuer reale Fluessigkeiten kommen Verluste hinzu:

{equations[17]}

{fig("fig-2-5", "Abb. 2.5. Herleitung der Bernoulli-Gleichung")}

Ausstroemgeschwindigkeit aus einer Oeffnung:

{equations[18]}

Bei Druckunterschied ueber den freien Oberflaechen:

{equations[19]}

Tatsaechlicher Volumenstrom durch eine Oeffnung:

{equations[20]}

Das Stroemungsregime wird durch die Reynolds-Zahl Re = wd/ν bestimmt. Bei kleinen Werten ist die Stroemung laminar, bei grossen turbulent.

{fig("fig-2-7", "Abb. 2.7. Reynolds-Versuchsaufbau")}

Bei laminarer Rohrstroemung ist das Geschwindigkeitsprofil parabolisch:

{equations[21]}

Maximale Geschwindigkeit auf der Rohrachse:

{equations[22]}

Poiseuille-Gesetz fuer den Volumenstrom:

{equations[23]}

Mittlere Geschwindigkeit:

{equations[24]}

{fig("fig-2-8", "Abb. 2.8. Formeln von Stokes und Poiseuille")}

Gesamtverlusthoehe:

{equations[25]}

Reibungsverlust:

{equations[26]}

Druckverlust:

{equations[27]}

Blasius-Formel:

{equations[28]}

Fuer raue Rohre:

{equations[29]}

Im voll rauen Bereich:

{equations[30]}

Oertliche Widerstaende entstehen an Einlaeufen, Auslaeufen, Boegen, Ventilen, Verengungen und Erweiterungen:

{equations[31]}

{equations[32]}

Mehrere oertliche Widerstaende:

{equations[33]}

Gesamtverlust in der Rohrleitung:

{equations[34]}

{equations[35]}

Darstellung ueber aequivalente Laenge:

{equations[36]}

### 2.3. Pumpen und Gasfoerdermaschinen

Fluessigkeiten werden mit Pumpen gefoerdert, Gase mit Ventilatoren, Geblaesen und Verdichtern. Wichtige Pumpengroessen sind Foerderstrom Q, Foerderhoehe H, Leistung N, Drehzahl, Wirkungsgrad und zulaessige Saughoehe.

Gesamtwirkungsgrad:

{equations[37]}

Volumetrischer Wirkungsgrad:

{equations[38]}

Hydraulischer Wirkungsgrad:

{equations[39]}

Wellenleistung:

{equations[40]}

Saugleitung:

{equations[41]}

Druckleitung:

{equations[42]}

Erforderliche Foerderhoehe:

{equations[43]}

Die Rohrleitungskennlinie zeigt, wie die erforderliche Foerderhoehe mit dem Volumenstrom steigt. Der Betriebspunkt ergibt sich aus dem Schnittpunkt von Pumpen- und Rohrleitungskennlinie.
""",
    "ru": f"""## Конспект лекции

### 2.1. Гидростатика

Гидравлика рассматривает законы равновесия и движения жидкостей и газов. Для аппаратов биотехнологических производств эти законы нужны при расчете трубопроводов, резервуаров, ферментеров, теплообменников, насосов, компрессоров и систем подачи сред. Жидкость рассматривают как сплошную среду, а давление в любой точке передается во всех направлениях.

Для элементарного параллелепипеда жидкости условие равновесия по оси x:

{equations[0]}

После выражения сил давления через площади граней:

{equations[1]}

В предельной форме получают дифференциальные уравнения равновесия Эйлера:

{equations[2]}

{fig("fig-2-1", "Рис. 2.1. К выводу дифференциальных уравнений равновесия Эйлера")}

Полный дифференциал давления:

{equations[3]}

Для поверхности одинакового давления p = const и dp = 0:

{equations[4]}

Если действует только сила тяжести, основное уравнение гидростатики имеет вид:

{equations[5]}

Гидростатический напор:

{equations[6]}

Для двух точек одной покоящейся жидкости:

{equations[7]}

{fig("fig-2-2", "Рис. 2.2. Основное уравнение гидростатики")}

Отсюда следует закон Паскаля: внешнее давление, приложенное к жидкости, передается ею одинаково во всех направлениях. Абсолютное давление на глубине h:

{equations[8]}

{fig("fig-2-3", "Рис. 2.3. Схема к закону Паскаля")}

Для измерения давления применяют жидкостные манометры, вакуумметры и пружинные манометры. В биотехнологическом оборудовании контроль давления особенно важен в стерилизаторах, ферментерах, фильтрах и линиях стерильного воздуха.

{fig("fig-2-4", "Рис. 2.4. Жидкостный манометр")}

### 2.2. Гидродинамика

Гидродинамика изучает движение жидкостей. Движение бывает установившимся, когда скорость и давление в фиксированной точке не меняются во времени, и неустановившимся, когда они зависят от времени. Расход Q связан со средней скоростью w и площадью сечения F соотношением Q = wF.

Уравнение неразрывности для несжимаемой жидкости:

{equations[9]}

Для сжимаемой среды сохраняется массовый расход:

{equations[10]}

Гидравлический радиус:

{equations[11]}

Эквивалентный диаметр для каналов некруглого сечения:

{equations[12]}

Уравнения Эйлера для идеальной жидкости, отнесенные к единице массы:

{equations[13]}

С учетом ускорения:

{equations[14]}

Полное ускорение включает локальную и конвективную составляющие:

{equations[15]}

Уравнение Бернулли для элементарной струйки идеальной жидкости:

{equations[16]}

Для реальной жидкости добавляют потери напора:

{equations[17]}

{fig("fig-2-5", "Рис. 2.5. К выводу уравнения Бернулли")}

Скорость истечения через отверстие:

{equations[18]}

Если учитывается разность давлений над свободными поверхностями:

{equations[19]}

Действительный расход через отверстие:

{equations[20]}

Режим движения определяют числом Рейнольдса Re = wd/ν. При малых Re течение ламинарное, при больших Re - турбулентное.

{fig("fig-2-7", "Рис. 2.7. Схема установки Рейнольдса")}

Для ламинарного течения в круглой трубе профиль скорости параболический:

{equations[21]}

Максимальная скорость на оси трубы:

{equations[22]}

Объемный расход по Пуазейлю:

{equations[23]}

Средняя скорость:

{equations[24]}

{fig("fig-2-8", "Рис. 2.8. К выводу формул Стокса и Пуазейля")}

Полные потери напора:

{equations[25]}

Потери на трение:

{equations[26]}

Потери давления:

{equations[27]}

Формула Блазиуса:

{equations[28]}

Для шероховатых труб:

{equations[29]}

В автомодельной области:

{equations[30]}

Местные сопротивления вызваны входами, выходами, коленами, вентилями, сужениями и расширениями:

{equations[31]}

{equations[32]}

Для нескольких местных сопротивлений:

{equations[33]}

Общие потери в трубопроводе:

{equations[34]}

{equations[35]}

Через эквивалентную длину:

{equations[36]}

### 2.3. Насосы и газодувные машины

Для перемещения жидкостей применяют насосы, а для газов - вентиляторы, газодувки и компрессоры. Основные параметры насоса: подача Q, напор H, мощность N, частота вращения, КПД и допустимая высота всасывания.

Полный КПД:

{equations[37]}

Объемный КПД:

{equations[38]}

Гидравлический КПД:

{equations[39]}

Мощность на валу насоса:

{equations[40]}

Для всасывающей линии:

{equations[41]}

Для нагнетательной линии:

{equations[42]}

Требуемый напор насоса:

{equations[43]}

Характеристика трубопровода показывает, как требуемый напор возрастает с увеличением расхода. Рабочая точка насосной установки определяется пересечением характеристики насоса и характеристики трубопровода.
""",
}

markers = {
    "uk": ("## Матеріал підручника", "## Після опрацювання розділу студент має вміти"),
    "en": ("## Lecture Notes", "## After studying this chapter, students should be able to"),
    "de": ("## Vorlesungsskript", "## Nach dem Durcharbeiten dieses Kapitels sollen Studierende"),
    "ru": ("## Конспект лекции", "## После изучения раздела студент должен уметь"),
}


for locale, material in materials.items():
    path = COURSE / locale / SLUG
    text = path.read_text(encoding="utf-8")
    start_marker, end_marker = markers[locale]
    start = text.index(start_marker)
    end = text.index(end_marker)
    path.write_text(text[:start] + material.rstrip() + "\n\n" + text[end:], encoding="utf-8")
    print(f"updated {path.relative_to(ROOT)}")
