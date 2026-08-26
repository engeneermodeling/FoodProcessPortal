from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE = ROOT / "src" / "content" / "courses"
SLUG = "bioprocess-engineering/chapter-16-size-reduction.md"
IMG = "/images/courses/bioprocess-engineering/chapter-16"


def eq(expr, num=""):
    return (
        '<div class="equation-block">\n'
        f'  <span class="equation-main">{expr}</span>\n'
        f'  <span class="equation-number">{num}</span>\n'
        "</div>"
    )


def fig(file, alt, caption):
    return f"![{alt}]({IMG}/{file})\n*{caption}*"


FORMULAS = {
    "degree": 'i = D/d',
    "cubes": 'z = D<sup>3</sup>/d<sup>3</sup> = i<sup>3</sup>',
    "initial_area": 'F<sub>p</sub> = 6D<sup>2</sup>',
    "final_area": 'F<sub>k</sub> = 6d<sup>2</sup>i<sup>3</sup> = 6(D/i)<sup>2</sup>i<sup>3</sup> = 6D<sup>2</sup>i',
    "delta_area": 'ΔF = F<sub>k</sub> - F<sub>p</sub> = 6D<sup>2</sup>(i - 1)',
    "rittinger": 'A = A<sub>p</sub>ΔF = 6A<sub>p</sub>D<sup>2</sup>(i - 1)',
    "kirpichev": 'A = σ<sub>p</sub><sup>2</sup>ΔV/(2E)',
    "kick_ratio": 'A<sub>1</sub>/A<sub>2</sub> = V<sub>1</sub>/V<sub>2</sub>',
    "rebinder": 'A = kV + A<sub>p</sub>ΔF',
    "roll_capacity": 'G = 60blπDnρφ',
    "hammer_power": 'N = (0.1...0.15)iG',
}


FIGS = {
    "uk": [
        ("fig-16-1.webp", "Рис. 16.1. Способи подрібнення матеріалу", "Рис. 16.1. Способи подрібнення матеріалу"),
        ("fig-16-2.webp", "Рис. 16.2. Схема щокової дробарки", "Рис. 16.2. Схема щокової дробарки"),
        ("fig-16-3.webp", "Рис. 16.3. Схема конусної дробарки", "Рис. 16.3. Схема конусної дробарки"),
        ("fig-16-4.webp", "Рис. 16.4. Схема валкової дробарки", "Рис. 16.4. Схема валкової дробарки"),
        ("fig-16-5.webp", "Рис. 16.5. Схема бігунів", "Рис. 16.5. Схема бігунів"),
        ("fig-16-6.webp", "Рис. 16.6. Схема молоткової дробарки", "Рис. 16.6. Схема молоткової дробарки"),
        ("fig-16-7.webp", "Рис. 16.7. Схема однобарабанної дробарки", "Рис. 16.7. Схема однобарабанної дробарки"),
        ("fig-16-8.webp", "Рис. 16.8. Схема дезінтегратора", "Рис. 16.8. Схема дезінтегратора"),
        ("fig-16-9.webp", "Рис. 16.9. Схема барабанного млина", "Рис. 16.9. Схема барабанного млина"),
    ],
    "en": [
        ("fig-16-1.webp", "Fig. 16.1. Methods of size reduction", "Fig. 16.1. Methods of size reduction"),
        ("fig-16-2.webp", "Fig. 16.2. Jaw crusher diagram", "Fig. 16.2. Jaw crusher diagram"),
        ("fig-16-3.webp", "Fig. 16.3. Cone crusher diagram", "Fig. 16.3. Cone crusher diagram"),
        ("fig-16-4.webp", "Fig. 16.4. Roll crusher diagram", "Fig. 16.4. Roll crusher diagram"),
        ("fig-16-5.webp", "Fig. 16.5. Edge runner mill diagram", "Fig. 16.5. Edge runner mill diagram"),
        ("fig-16-6.webp", "Fig. 16.6. Hammer crusher diagram", "Fig. 16.6. Hammer crusher diagram"),
        ("fig-16-7.webp", "Fig. 16.7. Single-drum crusher diagram", "Fig. 16.7. Single-drum crusher diagram"),
        ("fig-16-8.webp", "Fig. 16.8. Disintegrator diagram", "Fig. 16.8. Disintegrator diagram"),
        ("fig-16-9.webp", "Fig. 16.9. Drum mill diagram", "Fig. 16.9. Drum mill diagram"),
    ],
    "de": [
        ("fig-16-1.webp", "Abb. 16.1. Zerkleinerungsverfahren", "Abb. 16.1. Zerkleinerungsverfahren"),
        ("fig-16-2.webp", "Abb. 16.2. Schema eines Backenbrechers", "Abb. 16.2. Schema eines Backenbrechers"),
        ("fig-16-3.webp", "Abb. 16.3. Schema eines Kegelbrechers", "Abb. 16.3. Schema eines Kegelbrechers"),
        ("fig-16-4.webp", "Abb. 16.4. Schema eines Walzenbrechers", "Abb. 16.4. Schema eines Walzenbrechers"),
        ("fig-16-5.webp", "Abb. 16.5. Schema eines Kollergangs", "Abb. 16.5. Schema eines Kollergangs"),
        ("fig-16-6.webp", "Abb. 16.6. Schema eines Hammerbrechers", "Abb. 16.6. Schema eines Hammerbrechers"),
        ("fig-16-7.webp", "Abb. 16.7. Schema eines Ein-Trommel-Brechers", "Abb. 16.7. Schema eines Ein-Trommel-Brechers"),
        ("fig-16-8.webp", "Abb. 16.8. Schema eines Desintegrators", "Abb. 16.8. Schema eines Desintegrators"),
        ("fig-16-9.webp", "Abb. 16.9. Schema einer Trommelmuehle", "Abb. 16.9. Schema einer Trommelmuehle"),
    ],
    "ru": [
        ("fig-16-1.webp", "Рис. 16.1. Способы измельчения материала", "Рис. 16.1. Способы измельчения материала"),
        ("fig-16-2.webp", "Рис. 16.2. Схема щековой дробилки", "Рис. 16.2. Схема щековой дробилки"),
        ("fig-16-3.webp", "Рис. 16.3. Схема конусной дробилки", "Рис. 16.3. Схема конусной дробилки"),
        ("fig-16-4.webp", "Рис. 16.4. Схема валковой дробилки", "Рис. 16.4. Схема валковой дробилки"),
        ("fig-16-5.webp", "Рис. 16.5. Схема бегунов", "Рис. 16.5. Схема бегунов"),
        ("fig-16-6.webp", "Рис. 16.6. Схема молотковой дробилки", "Рис. 16.6. Схема молотковой дробилки"),
        ("fig-16-7.webp", "Рис. 16.7. Схема однобарабанной дробилки", "Рис. 16.7. Схема однобарабанной дробилки"),
        ("fig-16-8.webp", "Рис. 16.8. Схема дезинтегратора", "Рис. 16.8. Схема дезинтегратора"),
        ("fig-16-9.webp", "Рис. 16.9. Схема барабанной мельницы", "Рис. 16.9. Схема барабанной мельницы"),
    ],
}


TABLES = {
    "uk": """| Клас подрібнення | Розмір кусків до подрібнення D, мм | Розмір кусків після подрібнення d, мм |
|---|---:|---:|
| Крупне подрібнення | 1000 | 250 |
| Середнє подрібнення | 250 | 20 |
| Дрібне подрібнення | 20 | 1...5 |
| Грубий помел | 1...5 | 0.1...0.04 |
| Середній помел | 0.1...0.04 | 0.005...0.015 |
| Тонкий помел | 0.1...0.04 | 0.001...0.005 |
| Колоїдний помел | <= 0.1 | <= 0.001 |""",
    "en": """| Size-reduction class | Particle size before reduction D, mm | Particle size after reduction d, mm |
|---|---:|---:|
| Coarse crushing | 1000 | 250 |
| Medium crushing | 250 | 20 |
| Fine crushing | 20 | 1...5 |
| Coarse grinding | 1...5 | 0.1...0.04 |
| Medium grinding | 0.1...0.04 | 0.005...0.015 |
| Fine grinding | 0.1...0.04 | 0.001...0.005 |
| Colloidal grinding | <= 0.1 | <= 0.001 |""",
    "de": """| Zerkleinerungsklasse | Stueckgroesse vor der Zerkleinerung D, mm | Stueckgroesse nach der Zerkleinerung d, mm |
|---|---:|---:|
| Grobzerkleinerung | 1000 | 250 |
| Mittelzerkleinerung | 250 | 20 |
| Feinzerkleinerung | 20 | 1...5 |
| Grobmahlung | 1...5 | 0.1...0.04 |
| Mittelmahlung | 0.1...0.04 | 0.005...0.015 |
| Feinmahlung | 0.1...0.04 | 0.001...0.005 |
| Kolloidmahlung | <= 0.1 | <= 0.001 |""",
    "ru": """| Класс измельчения | Размер кусков до измельчения D, мм | Размер кусков после измельчения d, мм |
|---|---:|---:|
| Крупное измельчение | 1000 | 250 |
| Среднее измельчение | 250 | 20 |
| Мелкое измельчение | 20 | 1...5 |
| Грубый помол | 1...5 | 0.1...0.04 |
| Средний помол | 0.1...0.04 | 0.005...0.015 |
| Тонкий помол | 0.1...0.04 | 0.001...0.005 |
| Коллоидный помол | <= 0.1 | <= 0.001 |""",
}


TEXT = {
    "uk": {
        "header": "## Матеріал підручника",
        "intro": "Подрібненням називають процес поділу твердого тіла на частинки зовнішніми силами. У біотехнологічних, фармацевтичних і харчових виробництвах подрібнення прискорює теплові, дифузійні та хімічні процеси за участю твердої фази.",
        "degree": "Процес характеризують ступенем подрібнення - відношенням середнього розміру кусків матеріалу до подрібнення D до середнього розміру після подрібнення d:",
        "table_title": "**Таблиця 16.1. Класи подрібнення**",
        "methods": "Твердий матеріал руйнують роздавлюванням, розколюванням, розламуванням, різанням, розпилюванням, розтиранням, розбиванням і розриванням. На практиці способи часто комбінують: розтирання супроводжується роздавлюванням або ударом, а розламування - розколюванням чи роздавлюванням.",
        "energy": "Витрати енергії на подрібнення залишаються складною задачею, бо робота залежить від властивостей матеріалу, способу руйнування і режиму роботи машини. Для кубічного тіла з ребром D, подрібненого до кубів з ребром d, отримують такі співвідношення:",
        "energy_after": "За Ріттінгером робота пропорційна новоутвореній поверхні. За Кирпичовим-Кіком вона пов'язана з деформацією об'єму перед руйнуванням. Ребіндер запропонував розглядати суму роботи деформації і роботи утворення нових поверхонь.",
        "class": "Подрібнювачі поділяють за основним способом руйнування: розколювальної і розламувальної дії, роздавлювальної дії, розтирально-роздавлювальної дії, ударної дії, різальні машини та колоїдні подрібнювачі.",
        "machines": "Щокові дробарки ефективні для крупного і середнього подрібнення. Матеріал надходить зверху між нерухомою і рухомою щоками; під час зближення щік куски руйнуються, а під час розходження продукт виходить через нижню щілину. Конусні дробарки працюють безперервно: матеріал роздавлюється між нерухомим зовнішнім і рухомим внутрішнім конусами.",
        "rolls": "У валкових дробарках матеріал роздавлюється між валками. Розмір продукту визначається шириною щілини, а для рифлених валків додатково діє розколювання. Продуктивність валкової дробарки G, кг/год, оцінюють за формулою:",
        "rolls_vars": "де b - ширина щілини між валками, м; l - довжина валків, м; D - діаметр валка, м; n - частота обертання, об/хв; ρ - густина матеріалу, кг/м3; φ - коефіцієнт нерівномірності живлення.",
        "impact": "До машин розтирально-роздавлювальної дії належать жорна, бігуни і дискові млини. Ударне подрібнення реалізують молоткові дробарки, однобарабанні дробарки та дезінтегратори. Для молоткової дробарки наближену потужність N, кВт, визначають емпірично:",
        "cutting": "Барабанні млини використовують для тонкого помелу: подрібнювальні тіла падають або скочуються всередині барабана, руйнуючи матеріал ударом, роздавлюванням і розтиранням. Різальні машини застосовують переважно для сировини рослинного походження; робочим органом у них є ніж.",
    },
    "en": {
        "header": "## Lecture Notes",
        "intro": "Size reduction is the division of a solid body into particles by external forces. In biotechnological, pharmaceutical, and food-processing production it accelerates heat-transfer, diffusion, and chemical operations involving a solid phase.",
        "degree": "The process is characterized by the reduction ratio, that is, the ratio of the average particle size before reduction D to the average size after reduction d:",
        "table_title": "**Table 16.1. Size-reduction classes**",
        "methods": "Solids may be broken by compression, splitting, bending fracture, cutting, sawing, abrasion, impact, and tearing. In practice these methods are often combined: abrasion is accompanied by compression or impact, while bending fracture is accompanied by splitting or compression.",
        "energy": "Energy consumption in size reduction is a difficult problem because the work depends on material properties, the fracture mechanism, and machine operating conditions. For a cubic body with edge D reduced to cubes with edge d, the following relationships are used:",
        "energy_after": "According to Rittinger, the work is proportional to the newly formed surface. According to Kirpichev-Kick, it is related to the deformation of volume before fracture. Rebinder proposed treating the total work as the sum of deformation work and surface-formation work.",
        "class": "Comminution machines are classified by the dominant fracture mechanism: splitting and bending-fracture machines, compression machines, abrasion-compression machines, impact machines, cutting machines, and colloid mills.",
        "machines": "Jaw crushers are effective for coarse and medium crushing. Material enters from above between a fixed and a moving jaw; when the jaws approach each other the pieces are fractured, and when they separate the product leaves through the lower gap. Cone crushers operate continuously: material is compressed between a fixed outer cone and a moving inner cone.",
        "rolls": "In roll crushers, material is compressed between rolls. Product size is governed by the roll gap; corrugated rolls additionally split the material. The capacity G, kg/h, of a roll crusher is estimated as:",
        "rolls_vars": "where b is the roll gap width, m; l is the roll length, m; D is roll diameter, m; n is rotational speed, rpm; ρ is material density, kg/m3; φ accounts for nonuniform feeding.",
        "impact": "Abrasion-compression machines include millstones, edge runner mills, and disk mills. Impact size reduction is implemented in hammer crushers, single-drum crushers, and disintegrators. For a hammer crusher, the approximate shaft power N, kW, is estimated empirically:",
        "cutting": "Drum mills are used for fine grinding: grinding media fall or roll inside the drum and break material by impact, compression, and abrasion. Cutting machines are used mainly for plant raw materials; their working element is a knife.",
    },
    "de": {
        "header": "## Vorlesungsskript",
        "intro": "Zerkleinerung ist die Teilung eines festen Koerpers in Partikel durch aeussere Kraefte. In biotechnologischen, pharmazeutischen und lebensmitteltechnischen Produktionen beschleunigt sie Waerme-, Diffusions- und chemische Prozesse mit Beteiligung einer festen Phase.",
        "degree": "Der Prozess wird durch den Zerkleinerungsgrad beschrieben, also durch das Verhaeltnis der mittleren Stueckgroesse vor der Zerkleinerung D zur mittleren Groesse nach der Zerkleinerung d:",
        "table_title": "**Tabelle 16.1. Klassen der Zerkleinerung**",
        "methods": "Feste Stoffe koennen durch Druck, Spalten, Brechen durch Biegung, Schneiden, Saegen, Reiben, Schlag und Zerreissen zerkleinert werden. In der Praxis werden diese Verfahren oft kombiniert: Reiben geht mit Druck oder Schlag einher, Biegebruch mit Spalten oder Druck.",
        "energy": "Der Energiebedarf der Zerkleinerung ist schwierig zu berechnen, weil die Arbeit von Stoffeigenschaften, Bruchmechanismus und Betriebsbedingungen der Maschine abhaengt. Fuer einen Wuerfel mit Kantenlaenge D, der in Wuerfel mit Kantenlaenge d zerkleinert wird, gelten folgende Beziehungen:",
        "energy_after": "Nach Rittinger ist die Arbeit proportional zur neu gebildeten Oberflaeche. Nach Kirpichev-Kick ist sie mit der Volumendeformation vor dem Bruch verbunden. Rebinder betrachtete die Gesamtarbeit als Summe aus Deformationsarbeit und Arbeit zur Bildung neuer Oberflaechen.",
        "class": "Zerkleinerungsmaschinen werden nach dem dominierenden Bruchmechanismus eingeteilt: Spalt- und Biegebruchmaschinen, Druckmaschinen, Reib-Druck-Maschinen, Schlagmaschinen, Schneidmaschinen und Kolloidmuehlen.",
        "machines": "Backenbrecher sind fuer grobe und mittlere Zerkleinerung wirksam. Das Material gelangt von oben zwischen eine feste und eine bewegliche Backe; beim Annaehern wird es gebrochen, beim Auseinandergehen verlaesst das Produkt den unteren Spalt. Kegelbrecher arbeiten kontinuierlich: das Material wird zwischen festem Aussenkegel und beweglichem Innenkegel gedrueckt.",
        "rolls": "In Walzenbrechern wird das Material zwischen Walzen zusammengedrueckt. Die Produktgroesse wird durch den Walzenspalt bestimmt; geriffelte Walzen spalten den Stoff zusaetzlich. Die Leistung G, kg/h, eines Walzenbrechers wird abgeschaetzt mit:",
        "rolls_vars": "Dabei ist b die Spaltbreite, m; l die Walzenlaenge, m; D der Walzendurchmesser, m; n die Drehzahl, min-1; ρ die Stoffdichte, kg/m3; φ der Faktor fuer ungleichmaessige Beschickung.",
        "impact": "Zu Reib-Druck-Maschinen gehoeren Mahlsteine, Kollergang und Scheibenmuehlen. Schlagzerkleinerung erfolgt in Hammerbrechern, Ein-Trommel-Brechern und Desintegratoren. Fuer einen Hammerbrecher wird die angenaeherte Wellenleistung N, kW, empirisch bestimmt:",
        "cutting": "Trommelmuehlen werden zur Feinmahlung eingesetzt: Mahlkoerper fallen oder rollen im Inneren der Trommel und zerkleinern das Material durch Schlag, Druck und Reibung. Schneidmaschinen werden vor allem fuer pflanzliche Rohstoffe verwendet; ihr Arbeitsorgan ist ein Messer.",
    },
    "ru": {
        "header": "## Конспект лекции",
        "intro": "Измельчением называют процесс разделения твердого тела на частицы внешними силами. В биотехнологических, фармацевтических и пищевых производствах измельчение ускоряет тепловые, диффузионные и химические процессы с участием твердой фазы.",
        "degree": "Процесс характеризуют степенью измельчения - отношением среднего размера кусков материала до измельчения D к среднему размеру после измельчения d:",
        "table_title": "**Таблица 16.1. Классы измельчения**",
        "methods": "Твердый материал разрушают раздавливанием, раскалыванием, разламыванием, резанием, распиливанием, истиранием, ударом и разрыванием. На практике способы часто комбинируют: истирание сопровождается раздавливанием или ударом, а разламывание - раскалыванием либо раздавливанием.",
        "energy": "Затраты энергии на измельчение остаются сложной задачей, потому что работа зависит от свойств материала, способа разрушения и режима работы машины. Для кубического тела с ребром D, измельченного до кубов с ребром d, используют такие соотношения:",
        "energy_after": "По Риттингеру работа пропорциональна вновь образованной поверхности. По Кирпичеву-Кику она связана с деформацией объема перед разрушением. Ребиндер предложил рассматривать сумму работы деформации и работы образования новых поверхностей.",
        "class": "Измельчители делят по основному способу разрушения: раскалывающего и разламывающего действия, раздавливающего действия, истирающе-раздавливающего действия, ударного действия, резальные машины и коллоидные измельчители.",
        "machines": "Щековые дробилки эффективны для крупного и среднего измельчения. Материал поступает сверху между неподвижной и подвижной щеками; при сближении щек куски разрушаются, а при расхождении продукт выходит через нижнюю щель. Конусные дробилки работают непрерывно: материал раздавливается между неподвижным наружным и подвижным внутренним конусами.",
        "rolls": "В валковых дробилках материал раздавливается между валками. Размер продукта определяется шириной щели, а рифленые валки дополнительно раскалывают материал. Производительность валковой дробилки G, кг/ч, оценивают по формуле:",
        "rolls_vars": "где b - ширина щели между валками, м; l - длина валков, м; D - диаметр валка, м; n - частота вращения, об/мин; ρ - плотность материала, кг/м3; φ - коэффициент неравномерности питания.",
        "impact": "К машинам истирающе-раздавливающего действия относятся жернова, бегуны и дисковые мельницы. Ударное измельчение реализуют молотковые дробилки, однобарабанные дробилки и дезинтеграторы. Для молотковой дробилки приближенную мощность N, кВт, определяют эмпирически:",
        "cutting": "Барабанные мельницы используют для тонкого помола: мелющие тела падают или скатываются внутри барабана, разрушая материал ударом, раздавливанием и истиранием. Резальные машины применяют преимущественно для сырья растительного происхождения; рабочим органом в них является нож.",
    },
}


MARKERS = {
    "uk": ("## Матеріал підручника", "## Після опрацювання розділу студент має вміти"),
    "en": ("## Lecture Notes", "## After studying this chapter, students should be able to"),
    "de": ("## Vorlesungsskript", "## Nach dem Durcharbeiten dieses Kapitels sollen Studierende"),
    "ru": ("## Конспект лекции", "## После изучения раздела студент должен уметь"),
}

SECTIONS = {
    "uk": [
        "### 16.1. Загальні відомості",
        "### 16.2. Способи подрібнення",
        "### 16.3. Витрати енергії на подрібнення",
        "### 16.4. Класифікація подрібнювачів",
        "### 16.5. Будова і принцип дії подрібнювальних машин",
    ],
    "en": [
        "### 16.1. General information",
        "### 16.2. Size-reduction methods",
        "### 16.3. Energy consumption for size reduction",
        "### 16.4. Classification of size-reduction machines",
        "### 16.5. Design and operation of size-reduction machines",
    ],
    "de": [
        "### 16.1. Allgemeine Angaben",
        "### 16.2. Zerkleinerungsverfahren",
        "### 16.3. Energiebedarf der Zerkleinerung",
        "### 16.4. Klassifikation der Zerkleinerungsmaschinen",
        "### 16.5. Aufbau und Wirkungsweise von Zerkleinerungsmaschinen",
    ],
    "ru": [
        "### 16.1. Общие сведения",
        "### 16.2. Способы измельчения",
        "### 16.3. Затраты энергии на измельчение",
        "### 16.4. Классификация измельчителей",
        "### 16.5. Устройство и принцип действия измельчительных машин",
    ],
}


def build(locale):
    t = TEXT[locale]
    s = SECTIONS[locale]
    figs = [fig(*args) for args in FIGS[locale]]
    return f"""{t['header']}

{s[0]}

{t['intro']}

{t['degree']}

{eq(FORMULAS['degree'], '(16.1)')}

{t['table_title']}

{TABLES[locale]}

{s[1]}

{t['methods']}

{figs[0]}

{s[2]}

{t['energy']}

{eq(FORMULAS['cubes'])}

{eq(FORMULAS['initial_area'])}

{eq(FORMULAS['final_area'])}

{eq(FORMULAS['delta_area'])}

{eq(FORMULAS['rittinger'], '(16.2)')}

{eq(FORMULAS['kirpichev'], '(16.3)')}

{eq(FORMULAS['kick_ratio'], '(16.4)')}

{eq(FORMULAS['rebinder'], '(16.5)')}

{t['energy_after']}

{s[3]}

{t['class']}

{s[4]}

{t['machines']}

{figs[1]}

{figs[2]}

{t['rolls']}

{figs[3]}

{eq(FORMULAS['roll_capacity'], '(16.6)')}

{t['rolls_vars']}

{figs[4]}

{t['impact']}

{figs[5]}

{eq(FORMULAS['hammer_power'], '(16.7)')}

{figs[6]}

{figs[7]}

{t['cutting']}

{figs[8]}
"""


def replace_between(text, start, end, replacement):
    i = text.index(start)
    j = text.index(end, i)
    return text[:i] + replacement.rstrip() + "\n\n" + text[j:]


def main():
    for locale, markers in MARKERS.items():
        path = COURSE / locale / SLUG
        text = path.read_text(encoding="utf-8")
        updated = replace_between(text, markers[0], markers[1], build(locale))
        path.write_text(updated, encoding="utf-8", newline="\n")
        print(path)


if __name__ == "__main__":
    main()
