from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE = ROOT / "src" / "content" / "courses"
SLUG = "bioprocess-engineering/chapter-14-extraction.md"
IMG = "/images/courses/bioprocess-engineering/chapter-14"


def eq(expr, num=""):
    return (
        '<div class="equation-block">\n'
        f'  <span class="equation-main">{expr}</span>\n'
        f'  <span class="equation-number">{num}</span>\n'
        "</div>"
    )


def fig(file, alt, caption):
    return f"![{alt}]({IMG}/{file})\n*{caption}*"


FORMULAS = [
    "q = L/G",
    "M = -D<sub>in</sub>Fτ(C<sub>1</sub> - C′<sub>1</sub>)/R",
    "M/[Fτ(C<sub>1</sub> - C′<sub>1</sub>)] = D<sub>in</sub>/R",
    "M/[Fτ(C′<sub>1</sub> - C<sub>2</sub>)] = D<sub>out</sub>/δ = β",
    "M = [R/D<sub>in</sub> + δ/D<sub>out</sub>]<sup>-1</sup>(C<sub>1</sub> - C<sub>2</sub>)Fτ",
    "M = [R/D<sub>in</sub> + 1/β]<sup>-1</sup>(C<sub>1</sub> - C<sub>2</sub>)Fτ",
    "Bi<sub>D</sub> = βR/D<sub>in</sub>",
    "q = (C<sub>p</sub> - C<sub>k</sub>)/(C′<sub>k</sub> - C′<sub>p</sub>)",
    "q<sub>i</sub> = (C<sub>i-1</sub> - C<sub>i</sub>)/(C′<sub>i-1</sub> - C′<sub>i</sub>)",
    "∂c/∂τ = D(∂<sup>2</sup>c/∂x<sup>2</sup> + ∂<sup>2</sup>c/∂y<sup>2</sup> + ∂<sup>2</sup>c/∂z<sup>2</sup>)",
    "q = dG/(Fdτ) = -D dc/dn",
    "D = kT/(6πμr)",
    "M = -DFτ(C<sub>1</sub> - C′<sub>1</sub>)/R",
    "M = βFτ(C′<sub>1</sub> - C<sub>2</sub>)",
    "M = [R/D + 1/β]<sup>-1</sup>(C<sub>1</sub> - C<sub>2</sub>)Fτ",
    "Bi<sub>D</sub> = βR/D",
    "Fo<sub>D</sub> = Dτ/R<sup>2</sup>",
    "Nu<sub>D</sub> = 0.99Pr<sub>D</sub><sup>1/3</sup>Re<sup>1/3</sup>",
    "Nu<sub>D</sub> = 0.99Pr<sub>D</sub><sup>1/3</sup>Re<sup>1/3</sup>[1 + Re/16 + Re<sup>2</sup>ln(Re)/160]",
    "Nu<sub>D</sub> = Pr<sub>D</sub><sup>1/3</sup>(0.51Re<sup>0.5</sup> + 0.0224Re<sup>0.78</sup>)",
    "Nu<sub>D</sub> = 0.0387(Pr<sub>D</sub>Gr)<sup>1/3</sup>",
    "Nu<sub>D</sub> = 0.38Pr<sub>D</sub><sup>0.4</sup>(Re<sup>0.2</sup> + 0.102Re<sup>0.8</sup>)",
    "Re = 2dw<sub>f</sub> / [3(1 - ε)ν]",
    "Nu<sub>D</sub> = 0.8Pr<sub>D</sub><sup>1/3</sup>Re<sup>1/2</sup>",
    "Nu<sub>D</sub> = 4.33 · 10<sup>-3</sup>Re<sup>0.73</sup>Pr<sub>D</sub><sup>0.33</sup>",
    "Nu<sub>D</sub> = 3.8 · 10<sup>-4</sup>Re<sup>1.38</sup>Pr<sub>D</sub><sup>0.33</sup>",
    "Nu<sub>D</sub> = 1.41 · 10<sup>-2</sup>RePr<sub>D</sub><sup>0.5</sup>",
    "∂c/∂τ = D(∂<sup>2</sup>c/∂x<sup>2</sup> + ∂<sup>2</sup>c/∂y<sup>2</sup> + ∂<sup>2</sup>c/∂z<sup>2</sup>) - (w<sub>x</sub>∂c/∂x + w<sub>y</sub>∂c/∂y + w<sub>z</sub>∂c/∂z)",
    "G = V<sub>k</sub>Bn/τ",
    "L = L<sub>1</sub> + L<sub>2</sub>",
    "L<sub>2</sub>dy = Ldx",
    "L<sub>2</sub>(y<sub>p</sub> - y<sub>k</sub>) = L(x<sub>k</sub> - x<sub>p</sub>)",
    "L<sub>2</sub>(y<sub>p</sub> - y) = L(x<sub>k</sub> - x)",
    "G<sub>p</sub> + W<sub>p</sub> = W<sub>k</sub> + G<sub>k</sub>",
    "G<sub>p</sub>x<sub>p</sub> + W<sub>p</sub>y<sub>p</sub> = W<sub>k</sub>y<sub>k</sub> + G<sub>k</sub>x<sub>k</sub>",
    "G<sub>p</sub>C<sub>G,p</sub>t<sub>G,p</sub> + W<sub>p</sub>C<sub>W,p</sub>t<sub>W,p</sub> + Q<sub>add</sub> = G<sub>k</sub>C<sub>G,k</sub>t<sub>G,k</sub> + W<sub>k</sub>C<sub>W,k</sub>t<sub>W,k</sub> + Q<sub>loss</sub>",
    "G<sub>M</sub> · MS = G<sub>N</sub> · SN",
    "G<sub>F</sub> + S<sub>0</sub> = G<sub>R</sub> + S<sub>E</sub>",
    "G<sub>F</sub>x<sub>F</sub> + S<sub>0</sub>y<sub>0</sub> = G<sub>R</sub>x<sub>R</sub> + S<sub>E</sub>y<sub>E</sub>",
    "G<sub>F</sub> - S<sub>E</sub> = G<sub>i</sub> - S<sub>i+1</sub>",
    "G<sub>F</sub>x<sub>F</sub> - S<sub>E</sub>y<sub>E</sub> = G<sub>i</sub>x<sub>i</sub> - S<sub>i+1</sub>y<sub>i+1</sub>",
    "P = G<sub>F</sub> - S<sub>E</sub> = G<sub>1</sub> - S<sub>2</sub> = G<sub>R</sub> - S<sub>0</sub>",
    "Px<sub>P</sub> = G<sub>F</sub>x<sub>F</sub> - S<sub>E</sub>y<sub>E</sub> = G<sub>1</sub>x<sub>1</sub> - S<sub>2</sub>y<sub>2</sub> = ... = G<sub>R</sub>x<sub>R</sub> - S<sub>0</sub>y<sub>0</sub>",
]

FIG_FILES = [f"fig-14-{i}.webp" for i in range(1, 28)]

CAPTIONS = {
    "uk": ("Рис.", [
        "Способи оброблення сировини перед екстрагуванням",
        "Класифікація екстрагентів",
        "Схема перенесення маси цільового компонента",
        "Екстракційні криві протитечійного і прямотечійного процесів",
        "Трикутна діаграма для системи тверде тіло - рідина",
        "Визначення складу та кількості утворених сумішей",
        "Схема n-секційного протитечійного екстрагування",
        "Графічний розрахунок багатоступінчастого протитечійного екстрагування з твердих тіл",
        "Графічне визначення кількості ступенів концентрації",
        "Класифікація методів інтенсифікації процесу екстрагування",
        "Загальна класифікація апаратів для екстрагування з твердих тіл",
        "Класифікація екстракційної апаратури за режимом роботи",
        "Схеми екстракторів періодичної дії",
        "Екстрактор з висхідним потоком екстрагента",
        "Екстрактор зі спадним потоком екстрагента",
        "Комбінований екстрактор періодичної дії",
        "Екстрактор з кавітаційним ефектом",
        "Віброекстрактор із сітчастим контейнером",
        "Ротаційна дифузійна установка",
        "Схема шнекового горизонтального екстрактора",
        "Шнековий горизонтальний екстрактор",
        "Пружинно-лопатевий горизонтальний екстрактор",
        "Екстрактор нахиленого типу",
        "Двоколонний екстрактор типу НД-1000",
        "Принципова схема віброекстрактора",
        "Вібротранспортувальна тарілка",
        "Вібраційний екстрактор",
    ]),
    "en": ("Fig.", [
        "Raw-material pretreatment methods before extraction",
        "Classification of extractants",
        "Mass-transfer scheme for the target component",
        "Extraction curves for counter-current and cocurrent processes",
        "Triangular diagram for a solid-liquid system",
        "Determining the composition and amount of formed mixtures",
        "Scheme of n-section counter-current extraction",
        "Graphical calculation of multistage counter-current extraction from solids",
        "Graphical determination of concentration stages",
        "Classification of extraction-process intensification methods",
        "General classification of equipment for extraction from solids",
        "Classification of extraction equipment by operating mode",
        "Batch extractor schemes",
        "Extractor with upward extractant flow",
        "Extractor with downward extractant flow",
        "Combined batch extractor",
        "Extractor with a cavitation effect",
        "Vibroextractor with a mesh container",
        "Rotary diffusion unit",
        "Horizontal screw extractor scheme",
        "Horizontal screw extractor",
        "Spring-blade horizontal extractor",
        "Inclined extractor",
        "ND-1000 double-column extractor",
        "Vibroextractor principle scheme",
        "Vibrotransport tray",
        "Vibration extractor",
    ]),
    "de": ("Abb.", [
        "Vorbehandlungsmethoden des Rohstoffs vor der Extraktion",
        "Klassifikation von Extraktionsmitteln",
        "Schema der Stoffuebertragung der Zielkomponente",
        "Extraktionskurven fuer Gegenstrom- und Gleichstromprozesse",
        "Dreiecksdiagramm fuer ein Feststoff-Fluessig-System",
        "Bestimmung von Zusammensetzung und Menge gebildeter Mischungen",
        "Schema der n-stufigen Gegenstromextraktion",
        "Grafische Berechnung der mehrstufigen Gegenstromextraktion aus Feststoffen",
        "Grafische Bestimmung der Konzentrationsstufen",
        "Klassifikation der Methoden zur Intensivierung des Extraktionsprozesses",
        "Allgemeine Klassifikation von Apparaten fuer die Extraktion aus Feststoffen",
        "Klassifikation der Extraktionsapparate nach Betriebsweise",
        "Schemata diskontinuierlicher Extraktoren",
        "Extraktor mit aufsteigendem Extraktionsmittelstrom",
        "Extraktor mit absteigendem Extraktionsmittelstrom",
        "Kombinierter diskontinuierlicher Extraktor",
        "Extraktor mit Kavitationseffekt",
        "Vibroextraktor mit Siebbehaelter",
        "Rotations-Diffusionsanlage",
        "Schema eines horizontalen Schneckenextraktors",
        "Horizontaler Schneckenextraktor",
        "Feder-Schaufel-Horizontalextraktor",
        "Geneigter Extraktor",
        "Doppelsaeulenextraktor ND-1000",
        "Prinzipschema eines Vibroextraktors",
        "Vibrotransportboden",
        "Vibrationsextraktor",
    ]),
    "ru": ("Рис.", [
        "Способы обработки сырья перед экстрагированием",
        "Классификация экстрагентов",
        "Схема переноса массы целевого компонента",
        "Экстракционные кривые противоточного и прямоточного процессов",
        "Треугольная диаграмма для системы твердое тело - жидкость",
        "Определение состава и количества образованных смесей",
        "Схема n-секционного противоточного экстрагирования",
        "Графический расчет многоступенчатого противоточного экстрагирования из твердых тел",
        "Графическое определение числа ступеней концентрации",
        "Классификация методов интенсификации процесса экстрагирования",
        "Общая классификация аппаратов для экстрагирования из твердых тел",
        "Классификация экстракционной аппаратуры по режиму работы",
        "Схемы экстракторов периодического действия",
        "Экстрактор с восходящим потоком экстрагента",
        "Экстрактор с нисходящим потоком экстрагента",
        "Комбинированный экстрактор периодического действия",
        "Экстрактор с кавитационным эффектом",
        "Виброэкстрактор с сетчатым контейнером",
        "Ротационная диффузионная установка",
        "Схема шнекового горизонтального экстрактора",
        "Шнековый горизонтальный экстрактор",
        "Пружинно-лопастной горизонтальный экстрактор",
        "Экстрактор наклонного типа",
        "Двухколонный экстрактор типа НД-1000",
        "Принципиальная схема виброэкстрактора",
        "Вибротранспортирующая тарелка",
        "Вибрационный экстрактор",
    ]),
}


TEXT = {
    "uk": {
        "start": "## Матеріал підручника",
        "end": "## Після опрацювання розділу студент має вміти",
        "title": "## Матеріал підручника",
        "intro": "Екстрагування - масообмінний процес вилучення одного або кількох компонентів із твердої чи рідкої складної речовини розчинником, який вибірково розчиняє цільову речовину. У біотехнологічних і харчових виробництвах цей процес використовують для одержання ферментів, екстрактів рослинної сировини, ароматичних, біологічно активних та інших цільових компонентів.",
        "sections": [
            ("14.1. Загальні відомості", "В екстрактор подають сировину й екстрагент, а відводять екстракт і залишок твердої фази. За агрегатним станом вихідної фази розрізняють системи тверде тіло - рідина та рідина - рідина. У цьому розділі головний акцент зроблено на твердофазовому екстрагуванні, де результат визначається вибірковістю розчинника, гідромодулем, способом руху фаз і підготовкою сировини."),
            ("14.2.1. Дифузійний опір усередині частинки", "Швидкість екстрагування прямо пропорційна рушійній силі та обернено пропорційна сумарному опору масоперенесенню. Для капілярно-пористої сировини важливими є руйнування клітинних оболонок, подрібнення, нагрівання, ферментація або інша попередня обробка. Після підготовки основний опір часто створює молекулярна дифузія всередині пор частинки."),
            ("14.2.2. Фізична суть процесу тверде тіло - рідина", "Процес складається з проникнення розчинника в пори, розчинення цільового компонента, перенесення речовини всередині частинки до поверхні та масовіддачі в об'єм екстрагента. Якщо внутрішня дифузія повільніша за зовнішню, процес лімітує коефіцієнт внутрішньої дифузії та розмір частинки; якщо повільніша зовнішня стадія, визначальними стають коефіцієнт масовіддачі й товщина приграничного шару."),
            ("14.2.3. Особливості перебігу процесу", "Найважливішими схемами взаємодії фаз є протитечія, прямотечія та комбінований рух. Протитечія забезпечує найповніше вилучення цільового компонента, але потребує узгодженого підбору гідромодуля. Надмірна кількість екстрагента збільшує рушійну силу, проте зменшує концентрацію екстракту й підвищує витрати на подальше концентрування."),
            ("14.2.4. Розрахунок екстракційного процесу", "Розрахунок охоплює кінетику внутрішнього й зовнішнього масоперенесення, продуктивність, матеріальний та тепловий баланси, а також графічне визначення кількості теоретичних ступенів. Для інженерних оцінок застосовують критерії Біо, Фур'є, Нуссельта, Прандтля, Рейнольдса і відповідні критеріальні рівняння."),
            ("14.2.4.1. Продуктивність і матеріальний баланс", "Продуктивність екстрактора пов'язують із корисним об'ємом, завантаженням твердої фази, тривалістю процесу та кількістю апаратів у батареї. Матеріальні баланси враховують витрати сировини й екстрагента, концентрації цільового компонента у твердій і рідкій фазах, а також набухання сировини та утримання частини розчинника у твердому тілі."),
            ("14.2.4.2. Графічне визначення ступенів", "Для систем тверде тіло - рідина використовують трикутні діаграми та робочі лінії процесу. Правило важеля дає змогу знайти склад і кількість сумішей, а побудова ступенів між робочою лінією та лінією рівноваги показує потрібну кількість теоретичних ступенів або апаратів у батареї."),
            ("14.2.5. Методи інтенсифікації", "Інтенсифікація спрямована на збільшення виходу цільового компонента, скорочення тривалості, зниження енерговитрат і металомісткості обладнання. Використовують раціональну організацію руху фаз, подрібнення, підвищення температури, вібрації, пульсації, ультразвук, електричні та електромагнітні поля, а також способи дискретно-імпульсного введення енергії."),
            ("14.2.7. Апарати для екстрагування з твердих тіл", "Екстрактори класифікують за режимом роботи, способом контакту фаз, транспортуванням твердої фази та методом підведення енергії. До апаратів періодичної дії належать настійні, циркуляційні, апарати з мішалками, комбіновані й кавітаційні конструкції. Безперервні апарати можуть бути колонними, шнековими, нахиленими, ротаційними або вібраційними."),
        ],
    },
    "en": {
        "start": "## Lecture Notes",
        "end": "## After studying this chapter, students should be able to",
        "title": "## Lecture Notes",
        "intro": "Extraction is a mass-transfer process in which one or more components are removed from a solid or liquid material by a solvent that selectively dissolves the target substance. In biotechnology and food production it is used to obtain enzymes, plant extracts, aromatic compounds, biologically active substances and other target components.",
        "sections": [
            ("14.1. General Information", "An extractor receives the raw material and the extractant, and discharges the extract and the remaining solid phase. Depending on the initial phase, extraction is considered as a solid-liquid or liquid-liquid system. This chapter focuses mainly on solid-phase extraction, where solvent selectivity, hydromodule, phase-flow arrangement and raw-material preparation determine the result."),
            ("14.2.1. Diffusion Resistance Inside a Particle", "The extraction rate is proportional to the driving force and inversely proportional to the total mass-transfer resistance. For capillary-porous materials, cell-wall disruption, comminution, heating, fermentation or other pretreatment is essential. After pretreatment, molecular diffusion through particle pores often forms the main resistance."),
            ("14.2.2. Physical Meaning of Solid-Liquid Extraction", "The process includes solvent penetration into pores, dissolution of the target component, internal transport to the phase boundary and mass transfer into the extractant volume. If internal diffusion is slower than external transfer, the internal diffusion coefficient and particle size limit the process; if the external stage is slower, the mass-transfer coefficient and boundary-layer thickness dominate."),
            ("14.2.3. Process Features", "The main phase-contact schemes are counter-current, cocurrent and combined flow. Counter-current extraction provides the most complete recovery of the target component, but requires a coordinated hydromodule. More extractant increases the driving force, yet dilutes the extract and raises the cost of later concentration."),
            ("14.2.4. Calculation of the Extraction Process", "Calculation covers internal and external mass-transfer kinetics, productivity, material and heat balances, and graphical determination of theoretical stages. Engineering estimates use the Biot, Fourier, Nusselt, Prandtl and Reynolds criteria together with corresponding correlations."),
            ("14.2.4.1. Productivity and Material Balance", "Extractor productivity is related to useful volume, solid-phase loading, process time and the number of apparatuses in a battery. Material balances account for raw-material and extractant flows, target-component concentrations in the solid and liquid phases, swelling of the raw material and solvent retained in the solid."),
            ("14.2.4.2. Graphical Determination of Stages", "For solid-liquid systems, triangular diagrams and operating lines are used. The lever rule determines mixture compositions and amounts, while stepping between the operating and equilibrium lines gives the required number of theoretical stages or apparatuses in a battery."),
            ("14.2.5. Intensification Methods", "Intensification aims to increase target-component yield, shorten process duration, and reduce energy demand and equipment metal consumption. It uses rational phase-flow organization, comminution, temperature increase, vibration, pulsation, ultrasound, electric and electromagnetic fields, and discrete-pulse energy input."),
            ("14.2.7. Equipment for Extraction from Solids", "Extractors are classified by operating mode, phase-contact method, solid-phase transport and energy input. Batch equipment includes steeping, circulation, stirred, combined and cavitation designs. Continuous units may be column, screw, inclined, rotary or vibration extractors."),
        ],
    },
    "de": {
        "start": "## Vorlesungsskript",
        "end": "## Nach dem Durcharbeiten dieses Kapitels sollen Studierende",
        "title": "## Vorlesungsskript",
        "intro": "Extraktion ist ein Stoffuebertragungsprozess, bei dem eine oder mehrere Komponenten aus einem festen oder fluessigen Stoff durch ein Loesungsmittel entfernt werden, das die Zielsubstanz selektiv loest. In Bio- und Lebensmittelprozessen dient sie zur Gewinnung von Enzymen, Pflanzenextrakten, Aromastoffen, biologisch aktiven Stoffen und weiteren Zielkomponenten.",
        "sections": [
            ("14.1. Allgemeines", "Dem Extraktor werden Rohstoff und Extraktionsmittel zugefuehrt; abgefuehrt werden Extrakt und Rueckstand der festen Phase. Je nach Ausgangsphase unterscheidet man Feststoff-Fluessig- und Fluessig-Fluessig-Systeme. Dieser Abschnitt konzentriert sich auf die Feststoffextraktion, bei der Selektivitaet des Loesungsmittels, Hydromodul, Phasenfuehrung und Rohstoffvorbereitung entscheidend sind."),
            ("14.2.1. Diffusionswiderstand im Partikel", "Die Extraktionsgeschwindigkeit ist proportional zur Triebkraft und umgekehrt proportional zum gesamten Stoffuebertragungswiderstand. Bei kapillar-poroesen Stoffen sind Zellwandaufschluss, Zerkleinerung, Erwaermung, Fermentation oder andere Vorbehandlungen wichtig. Danach bildet haeufig die molekulare Diffusion in den Poren den Hauptwiderstand."),
            ("14.2.2. Physikalischer Sinn der Feststoff-Fluessig-Extraktion", "Der Prozess umfasst das Eindringen des Loesungsmittels in die Poren, das Loesen der Zielkomponente, den inneren Transport zur Phasengrenze und die Stoffabgabe in das Extraktionsmittel. Ist die innere Diffusion langsamer, begrenzen Diffusionskoeffizient und Partikelgroesse den Prozess; ist die aeussere Stufe langsamer, bestimmen Stoffuebergangskoeffizient und Grenzschichtdicke."),
            ("14.2.3. Prozessmerkmale", "Die wichtigsten Kontaktarten sind Gegenstrom, Gleichstrom und kombinierte Fuehrung. Gegenstrom ermoeglicht die vollstaendigste Rueckgewinnung, verlangt aber ein abgestimmtes Hydromodul. Mehr Extraktionsmittel erhoeht die Triebkraft, verduennt jedoch den Extrakt und erhoeht den Aufwand fuer die nachfolgende Konzentration."),
            ("14.2.4. Berechnung des Extraktionsprozesses", "Die Berechnung umfasst die Kinetik des inneren und aeusseren Stofftransports, Leistung, Stoff- und Waermebilanz sowie die grafische Bestimmung theoretischer Stufen. Fuer ingenieurtechnische Abschaetzungen werden Biot-, Fourier-, Nusselt-, Prandtl- und Reynolds-Kriterien mit entsprechenden Korrelationen genutzt."),
            ("14.2.4.1. Leistung und Stoffbilanz", "Die Leistung eines Extraktors haengt mit Nutzvolumen, Feststoffbeladung, Prozessdauer und Zahl der Apparate in der Batterie zusammen. Stoffbilanzen beruecksichtigen Rohstoff- und Loesungsmittelstroeme, Konzentrationen der Zielkomponente in Feststoff und Fluessigkeit, Quellen des Rohstoffs und im Feststoff zurueckgehaltenes Loesungsmittel."),
            ("14.2.4.2. Grafische Bestimmung der Stufen", "Fuer Feststoff-Fluessig-Systeme werden Dreiecksdiagramme und Arbeitslinien verwendet. Die Hebelregel liefert Zusammensetzung und Menge der Mischungen; die Stufenkonstruktion zwischen Arbeits- und Gleichgewichtslinie ergibt die erforderliche Zahl theoretischer Stufen oder Apparate."),
            ("14.2.5. Intensivierungsmethoden", "Die Intensivierung soll Ausbeute erhoehen, Prozessdauer verkuerzen sowie Energiebedarf und Metallverbrauch der Apparate senken. Eingesetzt werden geeignete Phasenfuehrung, Zerkleinerung, Temperaturerhoehung, Vibration, Pulsation, Ultraschall, elektrische und elektromagnetische Felder sowie diskret-impulsfoermige Energiezufuhr."),
            ("14.2.7. Apparate fuer die Extraktion aus Feststoffen", "Extraktoren werden nach Betriebsweise, Phasenkontakt, Feststofftransport und Energieeintrag klassifiziert. Diskontinuierliche Apparate umfassen Mazerations-, Umlauf-, Ruehr-, kombinierte und Kavitationsausfuehrungen. Kontinuierliche Apparate koennen Saeulen-, Schnecken-, geneigte, rotierende oder vibrierende Extraktoren sein."),
        ],
    },
    "ru": {
        "start": "## Конспект лекции",
        "end": "## После изучения раздела студент должен уметь",
        "title": "## Конспект лекции",
        "intro": "Экстрагирование - массообменный процесс извлечения одного или нескольких компонентов из твердого либо жидкого сложного вещества растворителем, который избирательно растворяет целевое вещество. В биотехнологических и пищевых производствах его используют для получения ферментов, растительных экстрактов, ароматических, биологически активных и других целевых компонентов.",
        "sections": [
            ("14.1. Общие сведения", "В экстрактор подают сырье и экстрагент, а отводят экстракт и остаток твердой фазы. По агрегатному состоянию исходной фазы различают системы твердое тело - жидкость и жидкость - жидкость. В этом разделе основной акцент сделан на твердофазном экстрагировании, где результат определяют избирательность растворителя, гидромодуль, движение фаз и подготовка сырья."),
            ("14.2.1. Диффузионное сопротивление внутри частицы", "Скорость экстрагирования прямо пропорциональна движущей силе и обратно пропорциональна суммарному сопротивлению массопереносу. Для капиллярно-пористого сырья важны разрушение клеточных оболочек, измельчение, нагревание, ферментация или другая предварительная обработка. После подготовки основной сопротивление часто создает молекулярная диффузия в порах частицы."),
            ("14.2.2. Физическая сущность процесса твердое тело - жидкость", "Процесс включает проникновение растворителя в поры, растворение целевого компонента, перенос вещества внутри частицы к поверхности и массоотдачу в объем экстрагента. Если внутренняя диффузия медленнее внешней, процесс лимитируют коэффициент внутренней диффузии и размер частицы; если медленнее внешняя стадия, определяющими становятся коэффициент массоотдачи и толщина пограничного слоя."),
            ("14.2.3. Особенности протекания процесса", "Основные схемы взаимодействия фаз - противоток, прямоток и комбинированное движение. Противоток обеспечивает наиболее полное извлечение целевого компонента, но требует согласованного выбора гидромодуля. Избыток экстрагента увеличивает движущую силу, однако разбавляет экстракт и повышает затраты на последующее концентрирование."),
            ("14.2.4. Расчет экстракционного процесса", "Расчет охватывает кинетику внутреннего и внешнего массопереноса, производительность, материальный и тепловой балансы, а также графическое определение числа теоретических ступеней. Для инженерных оценок применяют критерии Био, Фурье, Нуссельта, Прандтля, Рейнольдса и соответствующие критериальные уравнения."),
            ("14.2.4.1. Производительность и материальный баланс", "Производительность экстрактора связывают с полезным объемом, загрузкой твердой фазы, длительностью процесса и числом аппаратов в батарее. Материальные балансы учитывают расходы сырья и экстрагента, концентрации целевого компонента в твердой и жидкой фазах, набухание сырья и удержание части растворителя в твердом теле."),
            ("14.2.4.2. Графическое определение ступеней", "Для систем твердое тело - жидкость используют треугольные диаграммы и рабочие линии процесса. Правило рычага позволяет найти состав и количество смесей, а построение ступеней между рабочей линией и линией равновесия показывает необходимое число теоретических ступеней или аппаратов в батарее."),
            ("14.2.5. Методы интенсификации", "Интенсификация направлена на увеличение выхода целевого компонента, сокращение длительности, снижение энергозатрат и металлоемкости оборудования. Используют рациональную организацию движения фаз, измельчение, повышение температуры, вибрации, пульсации, ультразвук, электрические и электромагнитные поля, а также дискретно-импульсный ввод энергии."),
            ("14.2.7. Аппараты для экстрагирования из твердых тел", "Экстракторы классифицируют по режиму работы, способу контакта фаз, транспортированию твердой фазы и методу подвода энергии. К аппаратам периодического действия относятся настаивающие, циркуляционные, аппараты с мешалками, комбинированные и кавитационные конструкции. Непрерывные аппараты могут быть колонными, шнековыми, наклонными, ротационными или вибрационными."),
        ],
    },
}

FORMULA_SPLIT = [0, 0, 8, 2, 18, 8, 7, 0, 0]
FIG_SPLIT = [2, 1, 1, 1, 0, 0, 4, 3, 15]


def build(locale):
    data = TEXT[locale]
    prefix, captions = CAPTIONS[locale]
    lines = [data["title"], "", data["intro"]]
    formula_i = 0
    fig_i = 0
    for section_i, (title, text) in enumerate(data["sections"]):
        lines += ["", f"### {title}", "", text]
        for _ in range(FORMULA_SPLIT[section_i]):
            lines += ["", eq(FORMULAS[formula_i], f"(14.{formula_i + 1})")]
            formula_i += 1
        for _ in range(FIG_SPLIT[section_i]):
            caption = f"{prefix} 14.{fig_i + 1}. {captions[fig_i]}"
            lines += ["", fig(FIG_FILES[fig_i], captions[fig_i], caption)]
            fig_i += 1
    return "\n".join(lines)


def replace_between(text, start, end, replacement):
    start_i = text.index(start)
    end_i = text.index(end)
    return text[:start_i] + replacement.rstrip() + "\n\n" + text[end_i:]


for locale, data in TEXT.items():
    path = COURSE / locale / SLUG
    original = path.read_text(encoding="utf-8")
    updated = replace_between(original, data["start"], data["end"], build(locale))
    path.write_text(updated, encoding="utf-8")
    print(f"updated {path}")
