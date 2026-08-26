from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE = ROOT / "src" / "content" / "courses"
SLUG = "bioprocess-engineering/chapter-15-crystallization.md"
IMG = "/images/courses/bioprocess-engineering/chapter-15"


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
    "Π = c - c<sub>s</sub>",
    "α = c/c<sub>s</sub>",
    "τ<sub>l</sub> = τ<sub>2</sub> - τ<sub>1</sub>",
    "δF = -[(μ<sub>1</sub> - μ<sub>2</sub>)/V] + σS",
    "δF = 4πr<sup>2</sup>σ - (4/3)πr<sup>3</sup>(μ<sub>1</sub> - μ<sub>2</sub>)/V",
    "r<sub>k</sub> = 2σV/(μ<sub>1</sub> - μ<sub>2</sub>)",
    "ΔF<sub>max</sub> = (δF)<sub>max</sub> = σS<sub>k</sub>/3 = 16πσ<sup>3</sup>V<sup>2</sup>/[3(μ<sub>1</sub> - μ<sub>2</sub>)<sup>2</sup>]",
    "I = K exp(-ΔF<sub>max</sub>/RT)",
    "I = K exp{-16πσ<sup>3</sup>V<sup>2</sup>/[3RT(μ<sub>1</sub> - μ<sub>2</sub>)<sup>2</sup>]}",
    "μ<sub>1</sub> = RT ln c + j",
    "μ<sub>2</sub> = RT ln c<sub>s</sub> + j",
    "μ<sub>1</sub> - μ<sub>2</sub> = RT ln(c/c<sub>s</sub>) = RT ln[(Δc + c<sub>s</sub>)/c<sub>s</sub>]",
    "I = K exp{-16πσ<sup>3</sup>V<sup>2</sup>/[3R<sup>3</sup>T<sup>3</sup>ln<sup>2</sup>(c/c<sub>s</sub>)]}",
    "I = K exp{-4εσ<sup>3</sup>V<sup>2</sup>/[R<sup>3</sup>T<sup>3</sup>ln<sup>2</sup>(c/c<sub>s</sub>)]}",
    "dG/(Fdτ) = kΔc",
    "Δc = Δc<sub>1</sub> + Δc<sub>2</sub>",
    "M<sub>1</sub> = k<sub>1</sub>(c - c<sub>1</sub>) = k<sub>1</sub>Δc<sub>1</sub>",
    "M<sub>2</sub> = k<sub>2</sub>Δc<sub>2</sub><sup>2</sup> = k<sub>2</sub>(c<sub>1</sub> - c<sub>s</sub>)<sup>2</sup>",
    "M = M<sub>1</sub> = M<sub>2</sub> = kΔc = k<sub>1</sub>Δc<sub>1</sub> = k<sub>2</sub>Δc<sub>2</sub><sup>2</sup>",
    "M = M<sub>1</sub> = D(c - c<sub>1</sub>)/δ",
    "M = D(c - c<sub>1</sub>)/δ = k<sub>2</sub>(c<sub>1</sub> - c<sub>s</sub>)<sup>2</sup>",
    "M = [D/(2δ)](√(1 + 4k<sub>2</sub>δΔc/D) - 1)",
    "J<sub>1</sub> = L<sub>11</sub>X<sub>1</sub> + L<sub>12</sub>X<sub>2</sub>; J<sub>2</sub> = L<sub>21</sub>X<sub>1</sub> + L<sub>22</sub>X<sub>2</sub>",
    "L<sub>12</sub> = L<sub>21</sub>",
    "dW<sub>p</sub> = dW<sub>v</sub>; dM<sub>kr</sub> = dM<sub>p,cz</sub>; dM<sub>kr</sub> = (Cz<sub>p</sub>/W<sub>p</sub>)dW<sub>v</sub>",
    "M<sub>kr</sub> = qFCz<sub>p</sub>/(arW<sub>p</sub>)",
    "dM<sub>kr</sub>/dτ = [Cz<sub>p</sub>/W<sub>p</sub>][FΔt k<sub>0</sub>/(ar)] exp(-τ/θ)",
    "φ = ε<sub>r</sub>/ε<sub>t</sub> = [V<sub>r</sub>(s)/V<sub>t</sub>(s)]/[V<sub>r</sub>(y)/V<sub>t</sub>(y)]",
    "ε = m<sub>(s)i</sub>/m<sub>(y)i</sub>",
    "Fo′ = f(Pr′, Ar, Π, Π<sub>ρ</sub>, Π<sub>V</sub>)",
    "Fo′ = Dτ/l<sup>2</sup>; Pr′ = ν/D; Ar = gl<sup>3</sup>Δρ/(ν<sup>2</sup>ρ); Π = c<sub>s</sub>/Δc; Π<sub>ρ</sub> = ΔG/(ρ<sub>kr</sub>l<sup>3</sup>); Π<sub>V</sub> = ρ<sub>p</sub>/ρ<sub>kr</sub>",
    "τ<sub>l</sub> = A<sub>l</sub> exp(-B<sub>l</sub>P)",
    "M = b(Π - 1)<sup>n</sup>",
    "M = d<sub>0</sub> exp[-E/(RT)]",
    "M = lP<sup>m</sup>",
    "ΣG = G<sub>1</sub> + G<sub>2</sub>; G<sub>1</sub> = G<sub>n.sr</sub> + W<sub>1</sub> = G<sub>n.cz</sub> + G<sub>n.nz</sub> + W<sub>1</sub>; G<sub>2</sub> = G<sub>p.sr</sub> + W<sub>p</sub>",
    "ΔQ + i<sub>p</sub>ΔG<sub>p</sub> + r<sub>kr</sub>ΔG<sub>kr</sub> = i<sub>v</sub>ΔW<sub>v</sub> + Δ(i<sub>y</sub>G<sub>y</sub>) + Q<sub>loss</sub>",
    "G<sub>y</sub>c<sub>y,p</sub>T<sub>p</sub> + r<sub>kr</sub>G<sub>kr</sub> = G<sub>y</sub>c<sub>y,k</sub>T<sub>k</sub> + Q<sub>cool</sub> + Q<sub>loss</sub>",
]

FIG_DATA = [
    ("fig-15-1.webp", 1),
    ("fig-15-2.webp", 2),
    ("fig-15-3.webp", 3),
    ("fig-15-5.webp", 5),
    ("fig-15-6.webp", 6),
    ("fig-15-7.webp", 7),
    ("fig-15-8.webp", 8),
    ("fig-15-9.webp", 9),
    ("fig-15-10.webp", 10),
    ("fig-15-11.webp", 11),
]

CAPTIONS = {
    "uk": ("Рис.", [
        "Кристал цукрози",
        "Графік розчинності двокомпонентної системи цукроза - вода",
        "Кінематичні криві кристалізації",
        "Вакуум-апарат типу А2-ПВР",
        "Схема потоків безперервного уварювання та кристалізації цукрових утфелів",
        "Вакуум-апарат безперервної дії системи КТІХП: а - структурна схема; б - конструкція",
        "Горизонтальний перемішувач-кристалізатор",
        "Вертикальний перемішувач-кристалізатор",
        "Схема статичного матеріального балансу багатоступеневої кристалізації",
        "Масовий графік варіння та кристалізації цукрових утфелів у вакуум-апараті та перемішувачі-кристалізаторі",
    ]),
    "en": ("Fig.", [
        "Sucrose crystal",
        "Solubility graph for the binary sucrose-water system",
        "Kinematic crystallization curves",
        "A2-PVR vacuum pan",
        "Flow scheme for continuous boiling and crystallization of sugar massecuite",
        "Continuous KTIHP vacuum pan: a - block scheme; b - design",
        "Horizontal mixer-crystallizer",
        "Vertical mixer-crystallizer",
        "Static material-balance scheme for multistage crystallization",
        "Mass graph of boiling and crystallization of sugar massecuite in a vacuum pan and mixer-crystallizer",
    ]),
    "de": ("Abb.", [
        "Saccharosekristall",
        "Loeslichkeitsdiagramm des binaeren Systems Saccharose-Wasser",
        "Kinematische Kristallisationskurven",
        "Vakuumapparat Typ A2-PVR",
        "Flussschema des kontinuierlichen Einkochens und Kristallisierens von Zuckermassecuite",
        "Kontinuierlicher Vakuumapparat des KTIHP-Systems: a - Strukturschema; b - Konstruktion",
        "Horizontaler Ruehrkristallisator",
        "Vertikaler Ruehrkristallisator",
        "Schema der statischen Stoffbilanz der mehrstufigen Kristallisation",
        "Massendiagramm des Kochens und Kristallisierens von Zuckermassecuite im Vakuumapparat und Ruehrkristallisator",
    ]),
    "ru": ("Рис.", [
        "Кристалл сахарозы",
        "График растворимости двухкомпонентной системы сахароза - вода",
        "Кинематические кривые кристаллизации",
        "Вакуум-аппарат типа А2-ПВР",
        "Схема потоков непрерывного уваривания и кристаллизации сахарных утфелей",
        "Вакуум-аппарат непрерывного действия системы КТИПП: а - структурная схема; б - конструкция",
        "Горизонтальный перемешиватель-кристаллизатор",
        "Вертикальный перемешиватель-кристаллизатор",
        "Схема статического материального баланса многоступенчатой кристаллизации",
        "Массовый график варки и кристаллизации сахарных утфелей в вакуум-аппарате и перемешивателе-кристаллизаторе",
    ]),
}


TEXT = {
    "uk": {
        "start": "## Матеріал підручника",
        "end": "## Після опрацювання розділу студент має вміти",
        "title": "## Матеріал підручника",
        "intro": "Кристалізація - масообмінний процес утворення твердої фази у вигляді кристалів із розчинів, розплавів, газів або пари. У харчових і біотехнологічних виробництвах вона використовується для одержання та очищення цукрози, глюкози, лактози, фруктози, лимонної кислоти, солей та інших кристалічних продуктів.",
        "sections": [
            ("15.1. Загальні відомості", "Кристал має упорядковану кристалічну гратку, а його форма визначається симетрією, поверхневою енергією граней і умовами росту. Промислова кристалізація найчастіше відбувається з пересичених розчинів. Її проводять охолодженням, випарюванням розчинника, виморожуванням, висолюванням, хімічною реакцією або поєднанням кількох факторів."),
            ("15.2. Фізичні основи кристалізації із розчинів", "Статика кристалізації задає рівновагу між кристалами та міжкристальним розчином, кінетика описує швидкість переходу речовини з рідкої фази у тверду, а динаміка показує зміну параметрів у часі. Рушійною силою є пересичення, тобто перевищення концентрації розчиненої речовини над її рівноважною розчинністю."),
            ("15.3. Кінетика процесу кристалізації", "Кінетика складається з двох головних стадій: утворення центрів кристалізації та росту кристалів. На кривих кристалізації виділяють період створення пересичення, латентний період зародкоутворення і період росту. Підживлення системи свіжим розчином та випарювання розчинника можуть підтримувати потрібне пересичення."),
            ("15.4. Кристалоутворення", "Центри кристалізації виникають унаслідок гомогенного або гетерогенного зародкоутворення. У реальних промислових розчинах, зокрема цукрових, механізм переважно гетерогенний: на процес впливають домішки, перемішування, в'язкість, ультразвук, електричні й магнітні поля, коливання температури та наявність внесених кристалів."),
            ("15.5. Ріст кристалів", "Після утворення стійкого зародка кристал росте через дифузію речовини до поверхні, адсорбцію, поверхневу міграцію частинок і вбудовування їх у кристалічну гратку. Швидкість росту може визначатися дифузійною, дифузійно-кінетичною або кінетичною стадією; у масовій кристалізації важливими є полідисперсність, рекристалізація і гідродинаміка суспензії."),
            ("15.6-15.9. Вторинне зародкоутворення, рекристалізація і тепломасообмін", "Вторинне зародкоутворення пов'язане з уже наявними кристалами, їх зіткненнями, стиранням і локальними змінами пересичення. Рекристалізація зменшує сумарну поверхневу енергію дисперсної системи: дрібні частинки розчиняються, а більші ростуть. У промислових кристалізаторах тепломасообмін, циркуляція, кипіння, випарювання води та конструкція апарата взаємно пов'язані."),
            ("15.10. Фактори впливу на хід процесу", "На утворення зародків і ріст кристалів впливають пересичення, температура, чистота розчину, в'язкість, домішки, питома поверхнева енергія, перемішування, циркуляція і парова фаза під час кипіння. Для цукрових розчинів зниження чистоти збільшує латентний період, а підвищення температури та зменшення в'язкості прискорюють ріст."),
            ("15.11. Апарати для кристалізації", "Кристалізатори працюють у періодичному або безперервному режимі. Їх класифікують за просторовим розміщенням, формою корпусу, кількістю секцій, циркуляцією суспензії та типом поверхні теплообміну. У цукровому виробництві використовують вакуум-апарати періодичної дії, безперервні вакуум-апарати, горизонтальні та вертикальні перемішувачі-кристалізатори."),
            ("15.12. Основні принципи розрахунку", "Розрахунок кристалізаторів виконують у послідовності: технологічний, теплотехнічний, гідродинамічний, конструктивний, механічний і техніко-економічний. Його основою є матеріальні та теплові баланси, масові графіки кристалізації, оцінка теплопередачі, циркуляції, часу перебування продукту й міцності елементів апарата."),
        ],
    },
    "en": {
        "start": "## Lecture Notes",
        "end": "## After studying this chapter, students should be able to",
        "title": "## Lecture Notes",
        "intro": "Crystallization is a mass-transfer process in which a solid phase forms as crystals from solutions, melts, gases or vapours. In food and biotechnology it is used to obtain and purify sucrose, glucose, lactose, fructose, citric acid, salts and other crystalline products.",
        "sections": [
            ("15.1. General Information", "A crystal has an ordered lattice, and its shape is governed by symmetry, surface energy of faces and growth conditions. Industrial crystallization usually proceeds from supersaturated solutions. It can be performed by cooling, solvent evaporation, freezing-out, salting-out, chemical reaction or a combined action of several factors."),
            ("15.2. Physical Basis of Crystallization from Solutions", "Crystallization statics defines equilibrium between crystals and mother liquor; kinetics describes the transfer rate from liquid to solid phase; dynamics shows how parameters change with time. The driving force is supersaturation, the excess of solute concentration over equilibrium solubility."),
            ("15.3. Crystallization Kinetics", "Kinetics consists of two main stages: formation of crystallization centres and crystal growth. Crystallization curves identify supersaturation build-up, the latent nucleation period and the growth period. Feeding fresh solution and evaporating solvent can maintain the required supersaturation."),
            ("15.4. Crystal Nucleation", "Crystallization centres arise through homogeneous or heterogeneous nucleation. In real industrial solutions, especially sugar solutions, the mechanism is mostly heterogeneous: impurities, mixing, viscosity, ultrasound, electric and magnetic fields, temperature oscillations and seed crystals affect nucleation."),
            ("15.5. Crystal Growth", "After a stable nucleus forms, the crystal grows through diffusion to the surface, adsorption, surface migration and incorporation into the lattice. Growth rate may be controlled by diffusion, diffusion-kinetic or kinetic stages; in mass crystallization, polydispersity, recrystallization and suspension hydrodynamics are important."),
            ("15.6-15.9. Secondary Nucleation, Recrystallization and Heat-Mass Transfer", "Secondary nucleation is related to existing crystals, collisions, abrasion and local supersaturation changes. Recrystallization reduces total surface free energy: small particles dissolve while larger crystals grow. In industrial crystallizers, heat and mass transfer, circulation, boiling, water evaporation and apparatus design are tightly coupled."),
            ("15.10. Influence Factors", "Nucleation and growth depend on supersaturation, temperature, solution purity, viscosity, impurities, surface energy, mixing, circulation and vapour phase during boiling. For sugar solutions, lower purity increases the latent period, while higher temperature and lower viscosity accelerate growth."),
            ("15.11. Crystallization Equipment", "Crystallizers operate in batch or continuous mode. They are classified by spatial arrangement, shell shape, number of sections, suspension circulation and heat-transfer surface. Sugar production uses batch vacuum pans, continuous vacuum pans, and horizontal or vertical mixer-crystallizers."),
            ("15.12. Basic Calculation Principles", "Crystallizer calculation proceeds through process, thermal, hydrodynamic, structural, mechanical and techno-economic calculations. It is based on material and heat balances, crystallization mass graphs, heat-transfer estimates, circulation, residence time and strength of apparatus elements."),
        ],
    },
    "de": {
        "start": "## Vorlesungsskript",
        "end": "## Nach dem Durcharbeiten dieses Kapitels sollen Studierende",
        "title": "## Vorlesungsskript",
        "intro": "Kristallisation ist ein Stoffuebertragungsprozess, bei dem sich aus Loesungen, Schmelzen, Gasen oder Daempfen eine feste Phase in Form von Kristallen bildet. In Lebensmittel- und Bioprozessen dient sie zur Gewinnung und Reinigung von Saccharose, Glucose, Lactose, Fructose, Zitronensaeure, Salzen und anderen kristallinen Produkten.",
        "sections": [
            ("15.1. Allgemeines", "Ein Kristall besitzt ein geordnetes Gitter; seine Form wird durch Symmetrie, Oberflaechenenergie der Flaechen und Wachstumsbedingungen bestimmt. Industrielle Kristallisation erfolgt meist aus uebersaettigten Loesungen. Sie kann durch Kuehlung, Loesungsmittelverdampfung, Ausfrieren, Aussalzen, chemische Reaktion oder kombinierte Einwirkungen ablaufen."),
            ("15.2. Physikalische Grundlagen der Kristallisation aus Loesungen", "Die Statik beschreibt das Gleichgewicht zwischen Kristallen und Mutterloesung; die Kinetik die Geschwindigkeit des Uebergangs von der fluessigen in die feste Phase; die Dynamik die zeitliche Aenderung der Parameter. Triebkraft ist die Uebersaettigung, also der Konzentrationsueberschuss gegenueber der Gleichgewichtsloeslichkeit."),
            ("15.3. Kinetik des Kristallisationsprozesses", "Die Kinetik umfasst zwei Hauptstufen: Bildung von Kristallisationszentren und Kristallwachstum. Kristallisationskurven zeigen Aufbau der Uebersaettigung, latente Keimbildungszeit und Wachstumsperiode. Frischloesung und Verdampfung koennen die erforderliche Uebersaettigung aufrechterhalten."),
            ("15.4. Kristallbildung", "Kristallisationszentren entstehen durch homogene oder heterogene Keimbildung. In realen industriellen Loesungen, besonders Zuckerloesungen, ueberwiegt der heterogene Mechanismus: Verunreinigungen, Ruehren, Viskositaet, Ultraschall, elektrische und magnetische Felder, Temperaturschwankungen und Impfkristalle beeinflussen den Prozess."),
            ("15.5. Kristallwachstum", "Nach Bildung eines stabilen Keims waechst der Kristall durch Diffusion zur Oberflaeche, Adsorption, Oberflaechenmigration und Einbau in das Gitter. Die Wachstumsrate kann durch Diffusion, diffusionskinetische oder kinetische Stufen bestimmt werden; bei Massenkristallisation sind Polydispersitaet, Rekristallisation und Hydrodynamik wichtig."),
            ("15.6-15.9. Sekundaere Keimbildung, Rekristallisation und Waerme-Stoff-Uebertragung", "Sekundaere Keimbildung haengt mit vorhandenen Kristallen, Stoessen, Abrieb und lokalen Uebersaettigungsaenderungen zusammen. Rekristallisation vermindert die freie Oberflaechenenergie: kleine Teilchen loesen sich, groessere wachsen. In industriellen Kristallisatoren sind Waerme- und Stoffuebergang, Zirkulation, Sieden, Wasserverdampfung und Apparatekonstruktion eng verknuepft."),
            ("15.10. Einflussfaktoren", "Keimbildung und Wachstum haengen von Uebersaettigung, Temperatur, Reinheit, Viskositaet, Verunreinigungen, Oberflaechenenergie, Ruehren, Zirkulation und Dampfphase beim Sieden ab. Bei Zuckerloesungen verlaengert geringere Reinheit die latente Zeit; hoehere Temperatur und geringere Viskositaet beschleunigen das Wachstum."),
            ("15.11. Kristallisationsapparate", "Kristallisatoren arbeiten diskontinuierlich oder kontinuierlich. Sie werden nach Anordnung, Gehaeuseform, Sektionszahl, Suspensionszirkulation und Waermeuebertragungsflaeche klassifiziert. In der Zuckerproduktion nutzt man diskontinuierliche und kontinuierliche Vakuumapparate sowie horizontale und vertikale Ruehrkristallisatoren."),
            ("15.12. Grundprinzipien der Berechnung", "Die Berechnung erfolgt als verfahrenstechnische, waermetechnische, hydrodynamische, konstruktive, mechanische und wirtschaftliche Berechnung. Grundlage sind Stoff- und Waermebilanzen, Massendiagramme der Kristallisation, Waermeuebergang, Zirkulation, Verweilzeit und Festigkeit der Apparateelemente."),
        ],
    },
    "ru": {
        "start": "## Конспект лекции",
        "end": "## После изучения раздела студент должен уметь",
        "title": "## Конспект лекции",
        "intro": "Кристаллизация - массообменный процесс образования твердой фазы в виде кристаллов из растворов, расплавов, газов или пара. В пищевых и биотехнологических производствах ее используют для получения и очистки сахарозы, глюкозы, лактозы, фруктозы, лимонной кислоты, солей и других кристаллических продуктов.",
        "sections": [
            ("15.1. Общие сведения", "Кристалл имеет упорядоченную кристаллическую решетку, а его форма определяется симметрией, поверхностной энергией граней и условиями роста. Промышленная кристаллизация чаще всего происходит из пересыщенных растворов. Ее проводят охлаждением, выпариванием растворителя, вымораживанием, высаливанием, химической реакцией или сочетанием нескольких факторов."),
            ("15.2. Физические основы кристаллизации из растворов", "Статика кристаллизации задает равновесие между кристаллами и межкристальным раствором, кинетика описывает скорость перехода вещества из жидкой фазы в твердую, а динамика показывает изменение параметров во времени. Движущая сила - пересыщение, то есть превышение концентрации над равновесной растворимостью."),
            ("15.3. Кинетика процесса кристаллизации", "Кинетика состоит из двух главных стадий: образования центров кристаллизации и роста кристаллов. На кривых кристаллизации выделяют период создания пересыщения, латентный период зародышеобразования и период роста. Подпитка свежим раствором и выпаривание растворителя могут поддерживать нужное пересыщение."),
            ("15.4. Кристаллообразование", "Центры кристаллизации возникают вследствие гомогенного или гетерогенного зародышеобразования. В реальных промышленных растворах, в частности сахарных, механизм преимущественно гетерогенный: на процесс влияют примеси, перемешивание, вязкость, ультразвук, электрические и магнитные поля, колебания температуры и внесенные кристаллы."),
            ("15.5. Рост кристаллов", "После образования устойчивого зародыша кристалл растет через диффузию вещества к поверхности, адсорбцию, поверхностную миграцию частиц и встраивание их в кристаллическую решетку. Скорость роста может определяться диффузионной, диффузионно-кинетической или кинетической стадией; при массовой кристаллизации важны полидисперсность, рекристаллизация и гидродинамика суспензии."),
            ("15.6-15.9. Вторичное зародышеобразование, рекристаллизация и тепломассообмен", "Вторичное зародышеобразование связано с уже имеющимися кристаллами, их столкновениями, истиранием и локальными изменениями пересыщения. Рекристаллизация уменьшает суммарную свободную поверхностную энергию дисперсной системы: мелкие частицы растворяются, а крупные растут. В промышленных кристаллизаторах тепломассообмен, циркуляция, кипение, выпаривание воды и конструкция аппарата взаимосвязаны."),
            ("15.10. Факторы влияния на ход процесса", "На образование зародышей и рост кристаллов влияют пересыщение, температура, чистота раствора, вязкость, примеси, удельная поверхностная энергия, перемешивание, циркуляция и паровая фаза при кипении. Для сахарных растворов снижение чистоты увеличивает латентный период, а повышение температуры и уменьшение вязкости ускоряют рост."),
            ("15.11. Аппараты для кристаллизации", "Кристаллизаторы работают в периодическом или непрерывном режиме. Их классифицируют по пространственному размещению, форме корпуса, числу секций, циркуляции суспензии и типу поверхности теплообмена. В сахарном производстве используют вакуум-аппараты периодического действия, непрерывные вакуум-аппараты, горизонтальные и вертикальные перемешиватели-кристаллизаторы."),
            ("15.12. Основные принципы расчета", "Расчет кристаллизаторов выполняют в последовательности: технологический, теплотехнический, гидродинамический, конструктивный, механический и технико-экономический. Его основа - материальные и тепловые балансы, массовые графики кристаллизации, оценка теплопередачи, циркуляции, времени пребывания продукта и прочности элементов аппарата."),
        ],
    },
}

FORMULA_SPLIT = [0, 2, 1, 11, 8, 9, 4, 0, 2]
FIG_SPLIT = [1, 1, 1, 0, 0, 0, 0, 5, 2]


def build(locale):
    data = TEXT[locale]
    prefix, captions = CAPTIONS[locale]
    lines = [data["title"], "", data["intro"]]
    formula_i = 0
    fig_i = 0
    for section_i, (title, text) in enumerate(data["sections"]):
        lines += ["", f"### {title}", "", text]
        for _ in range(FORMULA_SPLIT[section_i]):
            lines += ["", eq(FORMULAS[formula_i], f"(15.{formula_i + 1})")]
            formula_i += 1
        for _ in range(FIG_SPLIT[section_i]):
            file, num = FIG_DATA[fig_i]
            caption = f"{prefix} 15.{num}. {captions[fig_i]}"
            lines += ["", fig(file, captions[fig_i], caption)]
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
