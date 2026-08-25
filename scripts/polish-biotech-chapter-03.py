from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE = ROOT / "src" / "content" / "courses"
SLUG = "bioprocess-engineering/chapter-03-heterogeneous-systems-separation.md"


def eq(expr: str, num: str) -> str:
    return (
        '<div class="equation-block">\n'
        f'  <span class="equation-main">{expr}</span>\n'
        f'  <span class="equation-number">({num})</span>\n'
        '</div>'
    )


def fig(name: str, alt: str) -> str:
    return f"![{alt}](/images/courses/bioprocess-engineering/chapter-03/{name}.webp)"


E = [
    eq("μ = μ<sub>0</sub>(1 + 4.5φ)", "3.1"),
    eq("w = gτ", "3.2"),
    eq("G - A = R", "3.3"),
    eq("G - A = V(ρ<sub>1</sub> - ρ<sub>2</sub>)g = (πd<sup>3</sup>/6)(ρ<sub>1</sub> - ρ<sub>2</sub>)g", "3.4"),
    eq("R = ξF w<sub>0</sub><sup>2</sup>ρ<sub>2</sub>/2 = ξπd<sup>2</sup>w<sub>0</sub><sup>2</sup>ρ<sub>2</sub>/8", "3.5"),
    eq("w<sub>0</sub> = √(4gd(ρ<sub>1</sub> - ρ<sub>2</sub>)/(3ξρ<sub>2</sub>))", "3.6"),
    eq("w<sub>0</sub> = √(4gdρ<sub>1</sub>/(3ξρ<sub>2</sub>))", "3.7"),
    eq("ξ = 24/Re", "3.8"),
    eq("ξ = 18.5/Re<sup>0.6</sup>", "3.9"),
    eq("w<sub>0</sub> = gd<sup>2</sup>(ρ<sub>1</sub> - ρ<sub>2</sub>)/(18μ)", "3.10"),
    eq("d<sub>max</sub> = √(36μ<sup>2</sup>/(gρ<sub>2</sub>(ρ<sub>1</sub> - ρ<sub>2</sub>))) = 1.54√(μ<sup>2</sup>/(ρ<sub>2</sub>(ρ<sub>1</sub> - ρ<sub>2</sub>)))", "3.11"),
    eq("ξRe<sup>2</sup> = (4/3) · gd<sup>3</sup>(ρ<sub>1</sub> - ρ<sub>2</sub>)/(ν<sup>2</sup>ρ<sub>2</sub>)", "3.12"),
    eq("Ar = gd<sup>3</sup>(ρ<sub>1</sub> - ρ<sub>2</sub>)/(ν<sup>2</sup>ρ<sub>2</sub>)", "3.13"),
    eq("Ar = (3/4)ξRe<sup>2</sup>", "3.14"),
    eq("Ar<sub>cr</sub> = 18 · 2 = 36", "3.15"),
    eq("Ar<sub>cr</sub> = (3 · 18.5/4) · 500<sup>1.4</sup> = 83500", "3.16"),
    eq("Re = Ar/18", "3.17"),
    eq("Re = 0.153Ar<sup>0.714</sup>", "3.18"),
    eq("Re = 1.74√Ar", "3.19"),
    eq("w<sub>p</sub> = w<sub>0</sub>φ", "3.20"),
    eq("V/τ = Fh/τ = Fw<sub>0</sub>", "3.22"),
    eq("w = dV/(F dτ)", "3.23"),
    eq("q = (πd<sup>2</sup>/4)(Δpd<sup>2</sup>/(32μl)) = αΔpd<sup>4</sup>/(32μl)", "3.24"),
    eq("dV = qdτFz = (αΔpd<sup>4</sup>/(32μl))dτFz", "3.25"),
    eq("w = dV/(F dτ) = Δp/(rS)", "3.26"),
    eq("r = 32μβ/(αεδD<sup>2</sup>) = φμ/D<sup>2</sup>", "3.27"),
    eq("σ = r/μ", "3.28"),
    eq("w = Δp/(σμS)", "3.29"),
    eq("w = Δp/(σμS + R)", "3.30"),
    eq("w = Δp/(μ(σS + R<sub>0</sub>))", "3.31"),
    eq("D = D<sub>0</sub>(1 - Δp/G)", "3.32"),
    eq("S = S<sub>0</sub>/(1 - Δp/G)", "3.33"),
    eq("w = Δp(1 - Δp/G)/(σS<sub>0</sub>μ + R(1 - Δp/G))", "3.34"),
    eq("S = Vε<sub>0</sub>/F", "3.35"),
    eq("dV = (Δp(1 - Δp/G)F<sup>2</sup>dτ)/(σμVε<sub>0</sub>)", "3.36"),
    eq("VdV = (Δp(1 - Δp/G)F<sup>2</sup>dτ)/(σμε<sub>0</sub>)", "3.36a"),
    eq("V = F√(2Δp(1 - Δp/G)τ/(σμε<sub>0</sub>))", "3.37"),
    eq("σ<sub>0</sub>μS<sub>0</sub> = (Δp - Δp<sup>2</sup>/G)/w", "3.38"),
    eq("σ<sub>0</sub>μdS = (dΔp - 2Δp dΔp/G)/w", "3.39"),
    eq("dτ = (dΔp - 2Δp dΔp/G)/(w<sup>2</sup>σ<sub>0</sub>με<sub>0</sub>)", "3.40"),
    eq("τ = ((Δp<sub>2</sub> - Δp<sub>1</sub>) - (Δp<sub>2</sub><sup>2</sup> - Δp<sub>1</sub><sup>2</sup>)/G)/(w<sup>2</sup>σ<sub>0</sub>με<sub>0</sub>)", "3.41"),
    eq("w = √(((Δp<sub>2</sub> - Δp<sub>1</sub>) - (Δp<sub>2</sub><sup>2</sup> - Δp<sub>1</sub><sup>2</sup>)/G)/(σ<sub>0</sub>με<sub>0</sub>τ))", "3.42"),
    eq("V = Fwτ", "3.43"),
    eq("G<sub>c</sub> = ma = mω<sup>2</sup>r", "3.44"),
    eq("G<sub>c</sub> = G<sub>g</sub>ω<sup>2</sup>r/g = G<sub>g</sub>Fr", "3.45"),
    eq("Fr = ω<sup>2</sup>r/g = 4π<sup>2</sup>n<sup>2</sup>r/g", "3.46"),
    eq("Ar · Fr = (3/4)ξRe<sup>2</sup>", "3.47"),
    eq("dm = dVρ = 2πrdrHρ", "3.48"),
    eq("dG<sub>c</sub> = ω<sup>2</sup>r dm = 2πHρω<sup>2</sup>r<sup>2</sup>dr", "3.49"),
    eq("dp = dG<sub>c</sub>/(2πrH) = ρω<sup>2</sup>rdr", "3.50"),
    eq("Δp = ρω<sup>2</sup>(R<sup>2</sup> - R<sub>0</sub><sup>2</sup>)/2", "3.51"),
    eq("N = (N<sub>1</sub> + N<sub>2</sub> + N<sub>3</sub> + N<sub>4</sub>)/η", "3.52"),
    eq("N<sub>1</sub> = mw<sub>b</sub><sup>2</sup>/(2τ)", "3.53"),
    eq("N<sub>2</sub> = εmω<sup>2</sup>R<sup>2</sup>/(2τ)", "3.54"),
    eq("N<sub>3</sub> = fG<sub>b</sub>w<sub>v</sub>", "3.55"),
    eq("N<sub>4</sub> = Cρ<sub>air</sub>HD<sup>4</sup>n<sup>3</sup>", "3.56"),
]


def block_uk() -> str:
    return f"""## Матеріал підручника

### 3.1. Класифікація і характеристика неоднорідних систем

Неоднорідні системи складаються щонайменше з двох фаз: дисперсної фази та дисперсійного середовища. У біотехнологічних виробництвах це суспензії клітин, культуральні рідини з біомасою, емульсії, піни, аерозолі та пилогазові потоки. Завдання розділення полягає в тому, щоб отримати освітлену рідину, концентрат, осад або очищений газ із заданою якістю.

В'язкість суспензії з достатньою для інженерних розрахунків точністю визначають за емпіричною формулою А. І. Бачинського:

{E[0]}

### 3.2. Методи розділення неоднорідних систем

Основними методами є осідання під дією сили тяжіння, фільтрування крізь пористу перегородку, центрифугування, циклонне розділення, сепарування та комбіновані схеми. Вибір методу залежить від розміру частинок, різниці густин фаз, в'язкості середовища, концентрації твердої фази та вимог до стерильності процесу.

### 3.3. Осідання в гравітаційному полі

Для великих тіл у безповітряному просторі швидкість падіння:

{E[1]}

Для частинки у в'язкому середовищі після короткого періоду розгону встановлюється рівновага сил:

{E[2]}

{fig("fig-3-1", "Рис. 3.1. Сили, що діють на частинку під час осідання")}

Різниця сили тяжіння та архімедової сили для кулькоподібної частинки:

{E[3]}

Сила опору середовища:

{E[4]}

Звідси узагальнена швидкість вільного осідання:

{E[5]}

Для осідання у газовому середовищі, коли густиною газу в чисельнику нехтують:

{E[6]}

Коефіцієнт опору залежить від режиму руху. Для ламінарної області:

{E[7]}

Для перехідної області:

{E[8]}

У межах закону Стокса:

{E[9]}

Максимальний діаметр частинки, для якого ще застосовний ламінарний режим:

{E[10]}

Критеріальний метод використовує зв'язок між коефіцієнтом опору, Re та Ar:

{E[11]}

Критерій Архімеда:

{E[12]}

Зручна форма рівняння:

{E[13]}

Критичні значення для меж режимів:

{E[14]}

{E[15]}

Для визначення Re за Ar використовують:

{E[16]}

{E[17]}

{E[18]}

Поправка на форму частинок:

{E[19]}

Для відстійника періодичної дії продуктивність визначається площею вільної поверхні та швидкістю осідання:

{E[20]}

{fig("fig-3-2", "Рис. 3.2. Схема відстійника періодичної дії")}

### 3.4. Фільтрування

Фільтрування застосовують для розділення суспензій за допомогою пористої перегородки. Рушійною силою є різниця тисків, а опір створюють фільтрувальна перегородка та шар осаду, що наростає на її поверхні.

Швидкість фільтрування:

{E[21]}

Для одного капіляра витрата:

{E[22]}

Продуктивність елементарної системи капілярів:

{E[23]}

Після введення геометричних характеристик осаду:

{E[24]}

Питомий опір осаду:

{E[25]}

Структурний опір:

{E[26]}

Для нестисливого осаду:

{E[27]}

З урахуванням опору перегородки:

{E[28]}

{E[29]}

Для стисливих осадів:

{E[30]}

{E[31]}

{E[32]}

Зв'язок товщини осаду з об'ємом фільтрату:

{E[33]}

Фільтрування за сталого тиску:

{E[34]}

{E[35]}

{E[36]}

Фільтрування за сталої швидкості:

{E[37]}

{E[38]}

{E[39]}

{E[40]}

{E[41]}

{E[42]}

{fig("fig-3-7", "Рис. 3.7. Схема фільтрувальної камери")}

{fig("fig-3-10", "Рис. 3.10. Рамний фільтр-прес")}

{fig("fig-3-13", "Рис. 3.13. Схема барабанного вакуум-фільтра")}

### 3.5. Відцентрові методи розділення неоднорідних систем

Відцентрові методи застосовують тоді, коли гравітаційне осідання надто повільне або потрібне компактне обладнання з великою продуктивністю. У біотехнологічних процесах центрифуги використовують для відділення біомаси, клітинних уламків, кристалів, білкових преципітатів і твердих домішок.

Відцентрова сила:

{E[43]}

Порівняння її з силою тяжіння:

{E[44]}

Фактор розділення:

{E[45]}

У критеріальному розрахунку замість Ar використовують добуток Ar · Fr:

{E[46]}

{fig("fig-3-18", "Рис. 3.18. Схема циклона і руху потоку в ньому")}

Для відцентрового фільтрування елементарна маса кільцевого шару:

{E[47]}

Відцентрова сила елементарного шару:

{E[48]}

Елементарний тиск:

{E[49]}

Рушійна сила відцентрового фільтрування:

{E[50]}

{fig("fig-3-19", "Рис. 3.19. Відцентрове фільтрування")}

Пускова потужність центрифуги:

{E[51]}

Окремі складові потужності:

{E[52]}

{E[53]}

{E[54]}

{E[55]}

{fig("fig-3-26", "Рис. 3.26. Схеми камерного і тарілчастого сепараторів")}
"""


def translate(base: str, locale: str) -> str:
    replacements = {
        "en": {
            "## Матеріал підручника": "## Lecture Notes",
            "### 3.1. Класифікація і характеристика неоднорідних систем": "### 3.1. Classification and Characteristics of Heterogeneous Systems",
            "### 3.2. Методи розділення неоднорідних систем": "### 3.2. Methods for Separating Heterogeneous Systems",
            "### 3.3. Осідання в гравітаційному полі": "### 3.3. Settling in a Gravitational Field",
            "### 3.4. Фільтрування": "### 3.4. Filtration",
            "### 3.5. Відцентрові методи розділення неоднорідних систем": "### 3.5. Centrifugal Separation Methods",
            "Рис.": "Fig.",
            "Схема": "Scheme",
        },
        "de": {
            "## Матеріал підручника": "## Vorlesungsskript",
            "### 3.1. Класифікація і характеристика неоднорідних систем": "### 3.1. Klassifikation und Charakteristik heterogener Systeme",
            "### 3.2. Методи розділення неоднорідних систем": "### 3.2. Methoden zur Trennung heterogener Systeme",
            "### 3.3. Осідання в гравітаційному полі": "### 3.3. Sedimentation im Schwerefeld",
            "### 3.4. Фільтрування": "### 3.4. Filtration",
            "### 3.5. Відцентрові методи розділення неоднорідних систем": "### 3.5. Zentrifugale Trennmethoden",
            "Рис.": "Abb.",
            "Схема": "Schema",
        },
        "ru": {
            "## Матеріал підручника": "## Конспект лекции",
            "### 3.1. Класифікація і характеристика неоднорідних систем": "### 3.1. Классификация и характеристика неоднородных систем",
            "### 3.2. Методи розділення неоднорідних систем": "### 3.2. Методы разделения неоднородных систем",
            "### 3.3. Осідання в гравітаційному полі": "### 3.3. Осаждение в гравитационном поле",
            "### 3.4. Фільтрування": "### 3.4. Фильтрование",
            "### 3.5. Відцентрові методи розділення неоднорідних систем": "### 3.5. Центробежные методы разделения неоднородных систем",
        },
    }
    if locale == "uk":
        return base
    text = base
    for old, new in replacements[locale].items():
        text = text.replace(old, new)
    if locale == "en":
        text = text.replace(
            "Неоднорідні системи складаються щонайменше з двох фаз: дисперсної фази та дисперсійного середовища. У біотехнологічних виробництвах це суспензії клітин, культуральні рідини з біомасою, емульсії, піни, аерозолі та пилогазові потоки. Завдання розділення полягає в тому, щоб отримати освітлену рідину, концентрат, осад або очищений газ із заданою якістю.",
            "Heterogeneous systems contain at least two phases: a dispersed phase and a continuous medium. In biotechnological production these include cell suspensions, culture broths with biomass, emulsions, foams, aerosols and dust-gas streams. Separation aims to obtain clarified liquid, concentrate, cake or purified gas of the required quality.",
        )
        text = text.replace("В'язкість суспензії з достатньою для інженерних розрахунків точністю визначають за емпіричною формулою А. І. Бачинського:", "Suspension viscosity for engineering calculations is estimated by the empirical Bachynskyi formula:")
        text = text.replace("Основними методами є осідання під дією сили тяжіння, фільтрування крізь пористу перегородку, центрифугування, циклонне розділення, сепарування та комбіновані схеми. Вибір методу залежить від розміру частинок, різниці густин фаз, в'язкості середовища, концентрації твердої фази та вимог до стерильності процесу.", "The main methods are gravitational settling, filtration through a porous partition, centrifugation, cyclone separation, separator operation and combined schemes. Method selection depends on particle size, density difference, medium viscosity, solids concentration and sterility requirements.")
        text = text.replace("Для великих тіл у безповітряному просторі швидкість падіння:", "For large bodies in air-free space the falling velocity is:")
        text = text.replace("Для частинки у в'язкому середовищі після короткого періоду розгону встановлюється рівновага сил:", "For a particle in a viscous medium, after a short acceleration period the forces become balanced:")
        text = text.replace("Різниця сили тяжіння та архімедової сили для кулькоподібної частинки:", "The difference between gravity and buoyancy for a spherical particle is:")
        text = text.replace("Сила опору середовища:", "Medium resistance force:")
        text = text.replace("Звідси узагальнена швидкість вільного осідання:", "The generalized free-settling velocity is:")
        text = text.replace("Фільтрування застосовують для розділення суспензій за допомогою пористої перегородки. Рушійною силою є різниця тисків, а опір створюють фільтрувальна перегородка та шар осаду, що наростає на її поверхні.", "Filtration separates suspensions with a porous partition. The driving force is pressure difference, while resistance is created by the filter medium and the cake growing on its surface.")
        text = text.replace("Відцентрові методи застосовують тоді, коли гравітаційне осідання надто повільне або потрібне компактне обладнання з великою продуктивністю. У біотехнологічних процесах центрифуги використовують для відділення біомаси, клітинних уламків, кристалів, білкових преципітатів і твердих домішок.", "Centrifugal methods are used when gravitational settling is too slow or compact high-capacity equipment is needed. In bioprocessing, centrifuges separate biomass, cell debris, crystals, protein precipitates and solid impurities.")
        extra = {
            "Для осідання у газовому середовищі, коли густиною газу в чисельнику нехтують:": "For settling in a gas medium, when gas density is neglected in the numerator:",
            "Коефіцієнт опору залежить від режиму руху. Для ламінарної області:": "The drag coefficient depends on the flow regime. For the laminar region:",
            "Для перехідної області:": "For the transition region:",
            "У межах закону Стокса:": "Within the Stokes-law range:",
            "Максимальний діаметр частинки, для якого ще застосовний ламінарний режим:": "Maximum particle diameter for which the laminar regime is still applicable:",
            "Критеріальний метод використовує зв'язок між коефіцієнтом опору, Re та Ar:": "The criterion method uses the relation between drag coefficient, Re and Ar:",
            "Критерій Архімеда:": "Archimedes criterion:",
            "Зручна форма рівняння:": "Convenient form of the equation:",
            "Критичні значення для меж режимів:": "Critical values at regime boundaries:",
            "Для визначення Re за Ar використовують:": "To determine Re from Ar, use:",
            "Поправка на форму частинок:": "Particle-shape correction:",
            "Для відстійника періодичної дії продуктивність визначається площею вільної поверхні та швидкістю осідання:": "For a batch settling tank, capacity is determined by free-surface area and settling velocity:",
            "Швидкість фільтрування:": "Filtration rate:",
            "Для одного капіляра витрата:": "Flow rate through one capillary:",
            "Продуктивність елементарної системи капілярів:": "Capacity of an elementary capillary system:",
            "Після введення геометричних характеристик осаду:": "After introducing cake geometry characteristics:",
            "Питомий опір осаду:": "Specific cake resistance:",
            "Структурний опір:": "Structural resistance:",
            "Для нестисливого осаду:": "For an incompressible cake:",
            "З урахуванням опору перегородки:": "With filter-medium resistance included:",
            "Для стисливих осадів:": "For compressible cakes:",
            "Зв'язок товщини осаду з об'ємом фільтрату:": "Relation between cake thickness and filtrate volume:",
            "Фільтрування за сталого тиску:": "Constant-pressure filtration:",
            "Фільтрування за сталої швидкості:": "Constant-rate filtration:",
            "Відцентрова сила:": "Centrifugal force:",
            "Порівняння її з силою тяжіння:": "Comparison with gravity:",
            "Фактор розділення:": "Separation factor:",
            "У критеріальному розрахунку замість Ar використовують добуток Ar · Fr:": "In criterion calculations, the product Ar · Fr is used instead of Ar:",
            "Для відцентрового фільтрування елементарна маса кільцевого шару:": "For centrifugal filtration, the elementary mass of an annular layer is:",
            "Відцентрова сила елементарного шару:": "Centrifugal force of the elementary layer:",
            "Елементарний тиск:": "Elementary pressure:",
            "Рушійна сила відцентрового фільтрування:": "Driving force of centrifugal filtration:",
            "Пускова потужність центрифуги:": "Starting power of a centrifuge:",
            "Окремі складові потужності:": "Individual power components:",
            "Сили, що діють на частинку під час осідання": "Forces acting on a particle during settling",
            "Scheme відстійника періодичної дії": "Batch settling tank scheme",
            "Scheme фільтрувальної камери": "Filtration chamber scheme",
            "Рамний фільтр-прес": "Plate-and-frame filter press",
            "Scheme барабанного вакуум-фільтра": "Rotary drum vacuum filter scheme",
            "Scheme циклона і руху потоку в ньому": "Cyclone scheme and flow motion inside it",
            "Відцентрове фільтрування": "Centrifugal filtration",
            "Схеми камерного і тарілчастого сепараторів": "Chamber and disc separator schemes",
        }
        for old, new in extra.items():
            text = text.replace(old, new)
    elif locale == "de":
        text = text.replace("Неоднорідні системи складаються щонайменше з двох фаз: дисперсної фази та дисперсійного середовища. У біотехнологічних виробництвах це суспензії клітин, культуральні рідини з біомасою, емульсії, піни, аерозолі та пилогазові потоки. Завдання розділення полягає в тому, щоб отримати освітлену рідину, концентрат, осад або очищений газ із заданою якістю.", "Heterogene Systeme bestehen mindestens aus dispergierter Phase und Dispersionsmedium. In biotechnologischen Produktionen sind dies Zellsuspensionen, Kulturbruehen mit Biomasse, Emulsionen, Schaeume, Aerosole und Staub-Gas-Stroeme. Ziel der Trennung ist geklaerte Fluessigkeit, Konzentrat, Filterkuchen oder gereinigtes Gas.")
        text = text.replace("В'язкість суспензії з достатньою для інженерних розрахунків точністю визначають за емпіричною формулою А. І. Бачинського:", "Die Viskositaet einer Suspension wird fuer technische Berechnungen mit der empirischen Formel von Bachynskyi abgeschaetzt:")
        text = text.replace("Основними методами є осідання під дією сили тяжіння, фільтрування крізь пористу перегородку, центрифугування, циклонне розділення, сепарування та комбіновані схеми. Вибір методу залежить від розміру частинок, різниці густин фаз, в'язкості середовища, концентрації твердої фази та вимог до стерильності процесу.", "Wichtige Methoden sind Sedimentation, Filtration durch poroese Medien, Zentrifugation, Zyklontrennung, Separation und kombinierte Schemata. Die Wahl haengt von Partikelgroesse, Dichtedifferenz, Viskositaet, Feststoffgehalt und Sterilitaetsanforderungen ab.")
        text = text.replace("Для великих тіл у безповітряному просторі швидкість падіння:", "Fuer grosse Koerper im luftleeren Raum gilt:")
        text = text.replace("Фільтрування застосовують для розділення суспензій за допомогою пористої перегородки. Рушійною силою є різниця тисків, а опір створюють фільтрувальна перегородка та шар осаду, що наростає на її поверхні.", "Filtration trennt Suspensionen mit einer poroesen Trennwand. Die treibende Kraft ist die Druckdifferenz; Widerstand entsteht in Filtermedium und Filterkuchen.")
        text = text.replace("Відцентрові методи застосовують тоді, коли гравітаційне осідання надто повільне або потрібне компактне обладнання з великою продуктивністю. У біотехнологічних процесах центрифуги використовують для відділення біомаси, клітинних уламків, кристалів, білкових преципітатів і твердих домішок.", "Zentrifugale Methoden werden eingesetzt, wenn Schwerkraftsedimentation zu langsam ist oder kompakte Hochleistungsapparate erforderlich sind. In Bioprozessen dienen Zentrifugen zur Abtrennung von Biomasse, Zelltruemmern, Kristallen, Proteinpraezipitaten und Feststoffverunreinigungen.")
        extra = {
            "Для частинки у в'язкому середовищі після короткого періоду розгону встановлюється рівновага сил:": "Fuer ein Partikel in einem viskosen Medium stellt sich nach kurzer Beschleunigung ein Kraeftegleichgewicht ein:",
            "Різниця сили тяжіння та архімедової сили для кулькоподібної частинки:": "Differenz aus Gewichtskraft und Auftrieb fuer ein kugelfoermiges Partikel:",
            "Сила опору середовища:": "Widerstandskraft des Mediums:",
            "Звідси узагальнена швидкість вільного осідання:": "Daraus folgt die allgemeine Geschwindigkeit der freien Sedimentation:",
            "Для осідання у газовому середовищі, коли густиною газу в чисельнику нехтують:": "Fuer Sedimentation in Gasen, wenn die Gasdichte im Zaehler vernachlaessigt wird:",
            "Коефіцієнт опору залежить від режиму руху. Для ламінарної області:": "Der Widerstandskoeffizient haengt vom Bewegungsregime ab. Fuer den laminaren Bereich:",
            "Для перехідної області:": "Fuer den Uebergangsbereich:",
            "У межах закону Стокса:": "Im Bereich des Stokes-Gesetzes:",
            "Максимальний діаметр частинки, для якого ще застосовний ламінарний режим:": "Maximaler Partikeldurchmesser, fuer den das laminare Regime noch gilt:",
            "Критеріальний метод використовує зв'язок між коефіцієнтом опору, Re та Ar:": "Die Kriterienmethode nutzt den Zusammenhang zwischen Widerstandskoeffizient, Re und Ar:",
            "Критерій Архімеда:": "Archimedes-Kriterium:",
            "Зручна форма рівняння:": "Praktische Form der Gleichung:",
            "Критичні значення для меж режимів:": "Kritische Werte an den Regimegrenzen:",
            "Для визначення Re за Ar використовують:": "Zur Bestimmung von Re aus Ar verwendet man:",
            "Поправка на форму частинок:": "Korrektur fuer die Partikelform:",
            "Для відстійника періодичної дії продуктивність визначається площею вільної поверхні та швидкістю осідання:": "Beim periodischen Absetzbehaelter wird die Leistung durch freie Oberflaeche und Sedimentationsgeschwindigkeit bestimmt:",
            "Швидкість фільтрування:": "Filtrationsgeschwindigkeit:",
            "Для одного капіляра витрата:": "Volumenstrom durch eine Kapillare:",
            "Продуктивність елементарної системи капілярів:": "Leistung eines elementaren Kapillarsystems:",
            "Після введення геометричних характеристик осаду:": "Nach Einfuehrung geometrischer Kuchenkennwerte:",
            "Питомий опір осаду:": "Spezifischer Kuchenwiderstand:",
            "Структурний опір:": "Strukturwiderstand:",
            "Для нестисливого осаду:": "Fuer inkompressiblen Kuchen:",
            "З урахуванням опору перегородки:": "Mit Widerstand des Filtermediums:",
            "Для стисливих осадів:": "Fuer kompressible Kuchen:",
            "Зв'язок товщини осаду з об'ємом фільтрату:": "Zusammenhang zwischen Kuchendicke und Filtratvolumen:",
            "Фільтрування за сталого тиску:": "Filtration bei konstantem Druck:",
            "Фільтрування за сталої швидкості:": "Filtration bei konstanter Geschwindigkeit:",
            "Відцентрова сила:": "Zentrifugalkraft:",
            "Порівняння її з силою тяжіння:": "Vergleich mit der Gewichtskraft:",
            "Фактор розділення:": "Trennfaktor:",
            "У критеріальному розрахунку замість Ar використовують добуток Ar · Fr:": "In Kriterienrechnungen verwendet man statt Ar das Produkt Ar · Fr:",
            "Для відцентрового фільтрування елементарна маса кільцевого шару:": "Bei der Zentrifugalfiltration ist die Elementarmasse einer Ringschicht:",
            "Відцентрова сила елементарного шару:": "Zentrifugalkraft der Elementarschicht:",
            "Елементарний тиск:": "Elementardruck:",
            "Рушійна сила відцентрового фільтрування:": "Treibende Kraft der Zentrifugalfiltration:",
            "Пускова потужність центрифуги:": "Anfahrleistung der Zentrifuge:",
            "Окремі складові потужності:": "Einzelne Leistungsanteile:",
            "Сили, що діють на частинку під час осідання": "Kraefte auf ein Partikel waehrend der Sedimentation",
            "Schema відстійника періодичної дії": "Schema eines periodischen Absetzbehaelters",
            "Schema фільтрувальної камери": "Schema einer Filtrationskammer",
            "Рамний фільтр-прес": "Rahmenfilterpresse",
            "Schema барабанного вакуум-фільтра": "Schema eines Trommelvakuumfilters",
            "Schema циклона і руху потоку в ньому": "Schema eines Zyklons und der Stroemung darin",
            "Відцентрове фільтрування": "Zentrifugalfiltration",
            "Схеми камерного і тарілчастого сепараторів": "Schemata eines Kammer- und Tellerseparators",
        }
        for old, new in extra.items():
            text = text.replace(old, new)
    elif locale == "ru":
        text = text.replace("Неоднорідні системи складаються щонайменше з двох фаз: дисперсної фази та дисперсійного середовища. У біотехнологічних виробництвах це суспензії клітин, культуральні рідини з біомасою, емульсії, піни, аерозолі та пилогазові потоки. Завдання розділення полягає в тому, щоб отримати освітлену рідину, концентрат, осад або очищений газ із заданою якістю.", "Неоднородные системы состоят как минимум из двух фаз: дисперсной фазы и дисперсионной среды. В биотехнологических производствах это суспензии клеток, культуральные жидкости с биомассой, эмульсии, пены, аэрозоли и пылегазовые потоки. Цель разделения - получить осветленную жидкость, концентрат, осад или очищенный газ заданного качества.")
        text = text.replace("В'язкість суспензії з достатньою для інженерних розрахунків точністю визначають за емпіричною формулою А. І. Бачинського:", "Вязкость суспензии с достаточной для инженерных расчетов точностью определяют по эмпирической формуле А. И. Бачинского:")
        text = text.replace("Основними методами є осідання під дією сили тяжіння, фільтрування крізь пористу перегородку, центрифугування, циклонне розділення, сепарування та комбіновані схеми. Вибір методу залежить від розміру частинок, різниці густин фаз, в'язкості середовища, концентрації твердої фази та вимог до стерильності процесу.", "Основные методы - осаждение под действием силы тяжести, фильтрование через пористую перегородку, центрифугирование, циклонное разделение, сепарирование и комбинированные схемы. Выбор зависит от размера частиц, разности плотностей фаз, вязкости среды, концентрации твердой фазы и требований к стерильности.")
        text = text.replace("Для великих тіл у безповітряному просторі швидкість падіння:", "Для крупных тел в безвоздушном пространстве скорость падения:")
        text = text.replace("Фільтрування застосовують для розділення суспензій за допомогою пористої перегородки. Рушійною силою є різниця тисків, а опір створюють фільтрувальна перегородка та шар осаду, що наростає на її поверхні.", "Фильтрование применяют для разделения суспензий с помощью пористой перегородки. Движущей силой является разность давлений, а сопротивление создают фильтровальная перегородка и слой осадка.")
        text = text.replace("Відцентрові методи застосовують тоді, коли гравітаційне осідання надто повільне або потрібне компактне обладнання з великою продуктивністю. У біотехнологічних процесах центрифуги використовують для відділення біомаси, клітинних уламків, кристалів, білкових преципітатів і твердих домішок.", "Центробежные методы применяют, когда гравитационное осаждение слишком медленное или требуется компактное оборудование высокой производительности. В биотехнологических процессах центрифуги используют для отделения биомассы, клеточных обломков, кристаллов, белковых преципитатов и твердых примесей.")
    return text


materials = {locale: translate(block_uk(), locale) for locale in ("uk", "en", "de", "ru")}

markers = {
    "uk": ("## Матеріал підручника", "## Після опрацювання розділу студент має вміти"),
    "en": ("## Lecture Notes", "## After studying this chapter, students should be able to"),
    "de": ("## Vorlesungsskript", "## Nach dem Durcharbeiten dieses Kapitels sollen Studierende"),
    "ru": ("## Конспект лекции", "## После изучения раздела студент должен уметь"),
}

notes = {
    "uk": "Під час наступного проходу варто звірити формули фільтрування і потужності центрифуг з друкованим макетом підручника та додати розрахунковий приклад відстійника або фільтр-преса.",
    "en": "In the next pass, filtration formulas and centrifuge power equations should be checked against the printed textbook layout, and a worked settling-tank or filter-press example can be added.",
    "de": "Im nächsten Durchgang sollten Filtrationsformeln und Leistungsformeln fuer Zentrifugen mit dem gedruckten Lehrbuchlayout abgeglichen werden; ausserdem kann ein Rechenbeispiel fuer Absetzbehaelter oder Filterpresse ergaenzt werden.",
    "ru": "На следующем проходе стоит сверить формулы фильтрования и мощности центрифуг с печатным макетом учебника, а также добавить расчетный пример отстойника или фильтр-пресса.",
}


for locale, material in materials.items():
    path = COURSE / locale / SLUG
    text = path.read_text(encoding="utf-8")
    start_marker, end_marker = markers[locale]
    start = text.index(start_marker)
    end = text.index(end_marker)
    text = text[:start] + material.rstrip() + "\n\n" + text[end:]
    if "## " in text and locale in notes:
        further = {
            "uk": "## Подальше опрацювання",
            "en": "## Further Development",
            "de": "## Weitere Ausarbeitung",
            "ru": "## Дальнейшая проработка",
        }[locale]
        if further in text:
            head, tail = text.split(further, 1)
            lines = tail.splitlines()
            if len(lines) >= 2:
                tail = "\n" + notes[locale] + "\n" + "\n".join(lines[2:]) + ("\n" if text.endswith("\n") else "")
                text = head + further + tail
    path.write_text(text, encoding="utf-8")
    print(f"updated {path.relative_to(ROOT)}")
