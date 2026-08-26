from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE = ROOT / "src" / "content" / "courses"
SLUG = "bioprocess-engineering/chapter-18-pressing.md"
IMG = "/images/courses/bioprocess-engineering/chapter-18"


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
    "poiseuille": "Q = Δp α d<sub>k</sub><sup>4</sup>/(32 μ l<sub>k</sub>)",
    "compression": "dp = a dε",
    "porosity": "ε = f(p)",
    "kinetics": "(ε<sub>p</sub> - ε)/(ε<sub>p</sub> - ε<sub>k</sub>) = 1 - (8/π<sup>2</sup>) exp[-π<sup>2</sup>cτ/(4h<sup>2</sup>)]",
    "hydraulic_force": "F = p<sub>p</sub>πD<sub>p</sub><sup>2</sup>/4 = p<sub>c</sub>πD<sub>c</sub><sup>2</sup>/4",
    "hydraulic_pressure": "p<sub>c</sub> = p<sub>p</sub>(D<sub>p</sub>/D<sub>c</sub>)<sup>2</sup>",
    "screw_compression": "K = h<sub>1</sub>/h<sub>2</sub>",
    "screw_pressure": "p<sub>k</sub> = p<sub>0</sub>e<sup>lβ</sup>",
    "screw_capacity": "G = fw<sub>o</sub>ρφ",
    "section_area": "f = π(D<sup>2</sup> - d<sup>2</sup>)/4",
    "axial_speed": "w<sub>o</sub> = hn",
    "helix_angle": "tgφ = h/(πD)",
    "extrusion_capacity": "Q = Δpk/μ",
    "compaction": "β = V/V<sub>c</sub>",
    "pressing_law": "ψ ln(p<sub>k</sub>/p<sub>p</sub>) = β<sub>p</sub> - β<sub>k</sub>",
    "press_work": "A = ∫<sub>h<sub>k</sub></sub><sup>h<sub>p</sub></sup> Fp dh",
}


FIGS = {
    "uk": [
        ("fig-18-1.webp", "Рис. 18.1. Схема гідравлічного преса", "Рис. 18.1. Схема гідравлічного преса"),
        ("fig-18-2.webp", "Рис. 18.2. Схема шнекового преса", "Рис. 18.2. Схема шнекового преса"),
        ("fig-18-3.webp", "Рис. 18.3. Схема одношнекового екструдера", "Рис. 18.3. Схема одношнекового екструдера"),
        ("fig-18-4.webp", "Рис. 18.4. Схема процесу пресування на карусельному пресі", "Рис. 18.4. Схема процесу пресування на карусельному пресі"),
        ("fig-18-5.webp", "Рис. 18.5. Схема гранулювання сухого жому", "Рис. 18.5. Схема гранулювання сухого жому"),
    ],
    "en": [
        ("fig-18-1.webp", "Fig. 18.1. Hydraulic press diagram", "Fig. 18.1. Hydraulic press diagram"),
        ("fig-18-2.webp", "Fig. 18.2. Screw press diagram", "Fig. 18.2. Screw press diagram"),
        ("fig-18-3.webp", "Fig. 18.3. Single-screw extruder diagram", "Fig. 18.3. Single-screw extruder diagram"),
        ("fig-18-4.webp", "Fig. 18.4. Pressing sequence in a rotary press", "Fig. 18.4. Pressing sequence in a rotary press"),
        ("fig-18-5.webp", "Fig. 18.5. Dry pulp granulation diagram", "Fig. 18.5. Dry pulp granulation diagram"),
    ],
    "de": [
        ("fig-18-1.webp", "Abb. 18.1. Schema einer hydraulischen Presse", "Abb. 18.1. Schema einer hydraulischen Presse"),
        ("fig-18-2.webp", "Abb. 18.2. Schema einer Schneckenpresse", "Abb. 18.2. Schema einer Schneckenpresse"),
        ("fig-18-3.webp", "Abb. 18.3. Schema eines Einschneckenextruders", "Abb. 18.3. Schema eines Einschneckenextruders"),
        ("fig-18-4.webp", "Abb. 18.4. Pressfolge in einer Rundlaeuferpresse", "Abb. 18.4. Pressfolge in einer Rundlaeuferpresse"),
        ("fig-18-5.webp", "Abb. 18.5. Schema der Granulierung trockener Ruebenpressschnitzel", "Abb. 18.5. Schema der Granulierung trockener Ruebenpressschnitzel"),
    ],
    "ru": [
        ("fig-18-1.webp", "Рис. 18.1. Схема гидравлического пресса", "Рис. 18.1. Схема гидравлического пресса"),
        ("fig-18-2.webp", "Рис. 18.2. Схема шнекового пресса", "Рис. 18.2. Схема шнекового пресса"),
        ("fig-18-3.webp", "Рис. 18.3. Схема одношнекового экструдера", "Рис. 18.3. Схема одношнекового экструдера"),
        ("fig-18-4.webp", "Рис. 18.4. Схема процесса прессования на карусельном прессе", "Рис. 18.4. Схема процесса прессования на карусельном прессе"),
        ("fig-18-5.webp", "Рис. 18.5. Схема гранулирования сухого жома", "Рис. 18.5. Схема гранулирования сухого жома"),
    ],
}


TEXT = {
    "uk": [
        "## Матеріал підручника",
        "### Розділ 18. Пресування",
        "Пресуванням називають процес оброблення матеріалів тиском під дією зовнішніх сил. Матеріал підлягає односторонньому або об'ємному стисненню у пресах. Пресування застосовують для віджимання рідини з твердих матеріалів, формування пластичних матеріалів, ущільнення, брикетування і гранулювання.",
        "### 18.1. Віджимання рідини з твердих матеріалів",
        "Віджимання, як і фільтрування, використовують для розділення рідкої і твердої фаз. Його застосовують, коли потрібно повніше відділити рідину від осаду або попередньо вилучити вологу перед сушінням. Зі збільшенням тиску матеріал ущільнюється, після чого рідка фракція починає відокремлюватися; швидкість процесу поступово зменшується.",
        "Рідина під час пресування рухається між частинками пористого шару по капілярах змінного перерізу. Для опису витрати рідини через капіляр використовують закон Пуазейля:",
        "де Δp - перепад тиску, Па; α - коефіцієнт форми перерізу капіляра; d<sub>k</sub> - діаметр капіляра, м; μ - динамічна в'язкість рідини, Па·с; l<sub>k</sub> - довжина капіляра, м.",
        "Компресійні характеристики описують здатність маси деформуватися під тиском:",
        "Пористість ε залежить від тиску p, тому за експериментальними даними будують компресійні криві:",
        "Кінетику нестаціонарного віджимання за сталого тиску приблизно описують рівнянням:",
        "Преси для віджимання бувають періодичної і безперервної дії; за способом створення тиску розрізняють гідравлічні, пневматичні та механічні преси. У вертикальному гідравлічному пресі матеріал завантажують у зеєрний циліндр, а рідка фракція проходить крізь зазори і стікає в піддон.",
        "Якщо втрат немає, повне зусилля пресування у робочому циліндрі дорівнює зусиллю в гідроциліндрі:",
        "Тиск, який потрібно створити в силовому циліндрі, визначають так:",
        "Шнекові преси поширені у біотехнологічній і харчовій промисловості для виділення олії, сусла, жиру, томатного соку та інших рідких фракцій. Ступінь стиснення для циліндричних шнеків визначають співвідношенням кроків:",
        "Тиск у робочому просторі шнека змінюється за експоненціальним законом:",
        "Продуктивність шнекового преса G, кг/с:",
        "Для робочої зони корпусу шнекового преса:",
        "Осьова швидкість переміщення матеріалу:",
        "### 18.2. Формування пластичних матеріалів",
        "Формування застосовують, щоб надати продукту певної форми без істотної зміни густини. Пластичні матеріали формують розкочуванням, округленням, витяжкою, штампуванням і екструзією крізь формувальні отвори. Реологічні властивості матеріалу визначають тривалість дії робочих органів і продуктивність машини.",
        "Екструдери формують пластичні матеріали продавлюванням крізь отвори матриці. У шнековому екструдері матеріал подають у бункер, шнек переміщує його у корпусі до камери перед матрицею, а створений тиск видавлює масу крізь отвори. Кут нахилу гвинтової поверхні пов'язаний із геометрією шнека:",
        "Для практичних розрахунків об'ємної продуктивності формувального устаткування використовують:",
        "### 18.3. Брикетування і гранулювання твердих матеріалів",
        "Брикетуванням називають ущільнення твердого тіла в замкнутому просторі з утворенням брикетів правильної форми. Ущільнення супроводжується подрібненням і відносним зміщенням частинок. Зменшення об'єму характеризують коефіцієнтом ущільнення:",
        "За відсутності втрат тиску на тертя для процесу ущільнення використовують залежність:",
        "За одностороннього пресування густина брикету найбільша біля пуансона, тому доцільним є двостороннє стискання. Міцність брикетів залежить від стану матеріалу, вологості, попередньої теплової обробки, тривалості процесу і витримування під тиском.",
        "Карусельний прес має горизонтальний диск із матрицями і пуансонами. За один оберт диск виконує послідовність операцій: заповнення матриці, формування, виштовхування брусків і очищення пуансона. Роботу пресування за один хід пуансона визначають так:",
        "Гранулюванням називають надання речовині форми дрібних гранул. У пресах із плоскою або циліндричною матрицею матеріал продавлюється крізь отвори, а на виході гранули зрізаються ножем. Процес часто супроводжують зволоженням і використанням зв'язувальних речовин для підвищення адгезії частинок.",
    ],
    "en": [
        "## Lecture Notes", "### Chapter 18. Pressing",
        "Pressing is the treatment of materials by pressure under external forces. The material is subjected to one-sided or volumetric compression in presses. Pressing is used for liquid expression from solids, forming plastic materials, compaction, briquetting, and granulation.",
        "### 18.1. Liquid expression from solid materials",
        "Expression, like filtration, separates liquid and solid phases. It is used when liquid must be removed more completely from a cake or when moisture is removed before drying. As pressure increases, the material is compacted and then liquid begins to separate; the rate gradually decreases.",
        "During pressing, liquid moves between particles of a porous layer through capillaries of variable section. The liquid flow through a capillary is described by Poiseuille's law:",
        "where Δp is pressure drop, Pa; α is the capillary cross-section shape factor; d<sub>k</sub> is capillary diameter, m; μ is dynamic viscosity, Pa·s; l<sub>k</sub> is capillary length, m.",
        "Compression characteristics describe the ability of the mass to deform under pressure:",
        "Porosity ε depends on pressure p; therefore compression curves are built from experimental data:",
        "The kinetics of unsteady expression at constant pressure are approximately described by:",
        "Presses for expression may be batch or continuous; by pressure generation they are hydraulic, pneumatic, or mechanical. In a vertical hydraulic press, material is loaded into a cage cylinder and the liquid fraction passes through gaps into a tray.",
        "If losses are neglected, the pressing force in the working cylinder equals the force in the hydraulic cylinder:",
        "The pressure required in the power cylinder is:",
        "Screw presses are common in biotechnological and food production for extracting oil, must, fat, tomato juice, and other liquid fractions. For cylindrical screws, the compression ratio is defined by pitch ratio:",
        "Pressure in the screw working space changes exponentially:",
        "The capacity G, kg/s, of a screw press is:",
        "For the cross-section of the screw-press working zone:",
        "The axial velocity of material motion is:",
        "### 18.2. Forming of plastic materials",
        "Forming gives a product a specified shape without significant change in density. Plastic materials are formed by rolling, rounding, drawing, stamping, and extrusion through forming openings. Rheological properties determine the contact time of working elements and machine productivity.",
        "Extruders form plastic materials by forcing them through die openings. In a screw extruder, material is fed to a hopper, transported by the screw through the barrel to the die chamber, and forced through die openings by pressure. The helix angle is related to screw geometry:",
        "For practical calculations of volumetric capacity of forming equipment, the following relation is used:",
        "### 18.3. Briquetting and granulation of solids",
        "Briquetting is compaction of a solid body in a closed space to form geometrically regular briquettes. Compaction is accompanied by size reduction and relative displacement of particles. Volume reduction is characterized by the compaction coefficient:",
        "When pressure losses due to friction are neglected, the compaction process is described by:",
        "With one-sided pressing, briquette density is greatest near the punch, so two-sided compression is advantageous. Briquette strength depends on material state, moisture, preliminary heat treatment, process duration, and holding under pressure.",
        "A rotary press has a horizontal disk with dies and punches. During one revolution, the disk performs filling, forming, ejection, and punch-cleaning operations. The pressing work for one punch stroke is:",
        "Granulation gives a substance the form of small granules. In presses with a flat or cylindrical die, material is forced through openings and granules are cut at the outlet by a knife. The process is often combined with moistening and binders to increase particle adhesion.",
    ],
    "de": [
        "## Vorlesungsskript", "### Kapitel 18. Pressen",
        "Pressen ist die Behandlung von Stoffen mit Druck unter Einwirkung aeusserer Kraefte. Der Stoff wird in Pressen einseitig oder raeumlich verdichtet. Pressen dient zum Auspressen von Fluessigkeit aus Feststoffen, zum Formen plastischer Stoffe, zum Verdichten, Brikettieren und Granulieren.",
        "### 18.1. Auspressen von Fluessigkeit aus festen Stoffen",
        "Das Auspressen trennt wie die Filtration fluessige und feste Phasen. Es wird eingesetzt, wenn Fluessigkeit aus einem Filterkuchen vollstaendiger entfernt oder Feuchte vor dem Trocknen mechanisch abgetrennt werden soll. Mit steigendem Druck verdichtet sich der Stoff, danach trennt sich die fluessige Phase ab; die Geschwindigkeit nimmt allmaehlich ab.",
        "Beim Pressen bewegt sich die Fluessigkeit zwischen den Partikeln einer poroesen Schicht durch Kapillaren veraenderlichen Querschnitts. Der Durchfluss durch eine Kapillare wird mit dem Poiseuille-Gesetz beschrieben:",
        "Dabei ist Δp der Druckabfall, Pa; α der Formfaktor des Kapillarquerschnitts; d<sub>k</sub> der Kapillardurchmesser, m; μ die dynamische Viskositaet, Pa·s; l<sub>k</sub> die Kapillarlaenge, m.",
        "Kompressionskennlinien beschreiben die Verformbarkeit der Masse unter Druck:",
        "Die Porositaet ε haengt vom Druck p ab; daher werden aus Versuchsdaten Kompressionskurven erstellt:",
        "Die Kinetik des instationaeren Auspressens bei konstantem Druck wird naeherungsweise beschrieben durch:",
        "Pressen zum Auspressen koennen periodisch oder kontinuierlich arbeiten; nach der Druckerzeugung unterscheidet man hydraulische, pneumatische und mechanische Pressen. In einer vertikalen hydraulischen Presse wird der Stoff in einen Seiherzylinder geladen, und die fluessige Fraktion tritt durch Spalte in eine Auffangwanne aus.",
        "Ohne Verluste ist die Presskraft im Arbeitszylinder gleich der Kraft im Hydraulikzylinder:",
        "Der notwendige Druck im Kraftzylinder ist:",
        "Schneckenpressen sind in bio- und lebensmitteltechnischen Produktionen verbreitet, etwa zur Gewinnung von Oel, Most, Fett, Tomatensaft und anderen fluessigen Fraktionen. Bei zylindrischen Schnecken wird der Kompressionsgrad durch das Verhaeltnis der Steigungen bestimmt:",
        "Der Druck im Arbeitsraum der Schnecke aendert sich exponentiell:",
        "Die Leistung G, kg/s, einer Schneckenpresse ist:",
        "Fuer den Querschnitt der Arbeitszone der Schneckenpresse gilt:",
        "Die axiale Stoffgeschwindigkeit ist:",
        "### 18.2. Formen plastischer Stoffe",
        "Das Formen verleiht einem Produkt eine bestimmte Gestalt ohne wesentliche Aenderung seiner Dichte. Plastische Stoffe werden durch Walzen, Runden, Ziehen, Stanzen und Extrusion durch Formoeffnungen geformt. Rheologische Eigenschaften bestimmen die Einwirkzeit der Arbeitsorgane und die Maschinenleistung.",
        "Extruder formen plastische Stoffe durch Durchdruecken durch Duesenoeffnungen. In einem Schneckenextruder gelangt der Stoff in den Trichter, wird von der Schnecke durch den Zylinder zur Kammer vor der Matrize transportiert und durch Druck durch die Oeffnungen gepresst. Der Steigungswinkel haengt mit der Schneckengeometrie zusammen:",
        "Fuer praktische Berechnungen der volumetrischen Leistung von Formanlagen wird verwendet:",
        "### 18.3. Brikettieren und Granulieren fester Stoffe",
        "Brikettieren ist das Verdichten eines festen Koerpers in geschlossenem Raum zur Bildung geometrisch regelmaessiger Briketts. Die Verdichtung geht mit Zerkleinerung und relativer Verschiebung der Partikel einher. Die Volumenabnahme wird durch den Verdichtungskoeffizienten beschrieben:",
        "Ohne Druckverluste durch Reibung wird der Verdichtungsprozess beschrieben durch:",
        "Bei einseitigem Pressen ist die Brikettdichte in der Naehe des Stempels am groessten, deshalb ist zweiseitiges Pressen zweckmaessig. Die Festigkeit haengt von Stoffzustand, Feuchte, Waermevorbehandlung, Prozessdauer und Halten unter Druck ab.",
        "Eine Rundlaeuferpresse besitzt eine horizontale Scheibe mit Matrizen und Stempeln. Waehrend einer Umdrehung laufen Fuellen, Formen, Ausstossen und Reinigen des Stempels ab. Die Pressarbeit fuer einen Stempelhub ist:",
        "Granulieren gibt einem Stoff die Form kleiner Granulate. In Pressen mit flacher oder zylindrischer Matrize wird der Stoff durch Oeffnungen gedrueckt, und die Granulate werden am Austritt mit einem Messer geschnitten. Der Prozess wird haeufig mit Befeuchtung und Bindemitteln zur Erhoehung der Partikeladhaesion kombiniert.",
    ],
    "ru": [
        "## Конспект лекции", "### Раздел 18. Прессование",
        "Прессованием называют обработку материалов давлением под действием внешних сил. Материал подвергается одностороннему или объемному сжатию в прессах. Прессование применяют для отжимания жидкости из твердых материалов, формования пластичных материалов, уплотнения, брикетирования и гранулирования.",
        "### 18.1. Отжимание жидкости из твердых материалов",
        "Отжимание, как и фильтрование, используют для разделения жидкой и твердой фаз. Его применяют, когда нужно полнее отделить жидкость от осадка или предварительно удалить влагу перед сушкой. С ростом давления материал уплотняется, затем начинает отделяться жидкая фракция; скорость процесса постепенно уменьшается.",
        "Жидкость при прессовании движется между частицами пористого слоя по капиллярам переменного сечения. Расход жидкости через капилляр описывают законом Пуазейля:",
        "где Δp - перепад давления, Па; α - коэффициент формы сечения капилляра; d<sub>k</sub> - диаметр капилляра, м; μ - динамическая вязкость жидкости, Па·с; l<sub>k</sub> - длина капилляра, м.",
        "Компрессионные характеристики описывают способность массы деформироваться под давлением:",
        "Пористость ε зависит от давления p, поэтому по экспериментальным данным строят компрессионные кривые:",
        "Кинетику нестационарного отжимания при постоянном давлении приближенно описывают уравнением:",
        "Прессы для отжимания бывают периодического и непрерывного действия; по способу создания давления различают гидравлические, пневматические и механические прессы. В вертикальном гидравлическом прессе материал загружают в зеерный цилиндр, а жидкая фракция проходит через зазоры и стекает в поддон.",
        "Если потерь нет, полное усилие прессования в рабочем цилиндре равно усилию в гидроцилиндре:",
        "Давление, которое нужно создать в силовом цилиндре, определяют так:",
        "Шнековые прессы распространены в биотехнологической и пищевой промышленности для выделения масла, сусла, жира, томатного сока и других жидких фракций. Для цилиндрических шнеков степень сжатия определяют отношением шагов:",
        "Давление в рабочем пространстве шнека изменяется по экспоненциальному закону:",
        "Производительность шнекового пресса G, кг/с:",
        "Для поперечного сечения рабочей зоны корпуса шнекового пресса:",
        "Осевая скорость перемещения материала:",
        "### 18.2. Формование пластичных материалов",
        "Формование применяют, чтобы придать продукту заданную форму без существенного изменения плотности. Пластичные материалы формуют раскатыванием, округлением, вытяжкой, штампованием и экструзией через формующие отверстия. Реологические свойства определяют длительность действия рабочих органов и производительность машины.",
        "Экструдеры формуют пластичные материалы продавливанием через отверстия матрицы. В шнековом экструдере материал подают в бункер, шнек перемещает его в корпусе к камере перед матрицей, а созданное давление выдавливает массу через отверстия. Угол наклона винтовой поверхности связан с геометрией шнека:",
        "Для практических расчетов объемной производительности формующего оборудования используют:",
        "### 18.3. Брикетирование и гранулирование твердых материалов",
        "Брикетированием называют уплотнение твердого тела в замкнутом пространстве с образованием брикетов правильной формы. Уплотнение сопровождается измельчением и относительным смещением частиц. Уменьшение объема характеризуют коэффициентом уплотнения:",
        "При отсутствии потерь давления на трение процесс уплотнения описывают зависимостью:",
        "При одностороннем прессовании плотность брикета наибольшая возле пуансона, поэтому целесообразно двустороннее сжатие. Прочность брикетов зависит от состояния материала, влажности, предварительной тепловой обработки, длительности процесса и выдержки под давлением.",
        "Карусельный пресс имеет горизонтальный диск с матрицами и пуансонами. За один оборот диск выполняет заполнение матрицы, формование, выталкивание брусков и очистку пуансона. Работу прессования за один ход пуансона определяют так:",
        "Гранулированием называют придание веществу формы мелких гранул. В прессах с плоской или цилиндрической матрицей материал продавливается через отверстия, а на выходе гранулы срезаются ножом. Процесс часто сопровождают увлажнением и использованием связующих веществ для повышения адгезии частиц.",
    ],
}

MARKERS = {
    "uk": ("## Матеріал підручника", "## Після опрацювання розділу студент має вміти"),
    "en": ("## Lecture Notes", "## After studying this chapter, students should be able to"),
    "de": ("## Vorlesungsskript", "## Nach dem Durcharbeiten dieses Kapitels sollen Studierende"),
    "ru": ("## Конспект лекции", "## После изучения раздела студент должен уметь"),
}


def build(locale):
    t = TEXT[locale]
    f = [fig(*x) for x in FIGS[locale]]
    return f"""{t[0]}

{t[1]}

{t[2]}

{t[3]}

{t[4]}

{t[5]}

{eq(FORMULAS['poiseuille'], '(18.1)')}

{t[6]}

{t[7]}

{eq(FORMULAS['compression'])}

{t[8]}

{eq(FORMULAS['porosity'])}

{t[9]}

{eq(FORMULAS['kinetics'], '(18.2)')}

{t[10]}

{f[0]}

{t[11]}

{eq(FORMULAS['hydraulic_force'], '(18.3)')}

{t[12]}

{eq(FORMULAS['hydraulic_pressure'], '(18.4)')}

{t[13]}

{f[1]}

{eq(FORMULAS['screw_compression'])}

{t[14]}

{eq(FORMULAS['screw_pressure'], '(18.5)')}

{t[15]}

{eq(FORMULAS['screw_capacity'], '(18.6)')}

{t[16]}

{eq(FORMULAS['section_area'])}

{t[17]}

{eq(FORMULAS['axial_speed'], '(18.7)')}

{t[18]}

{t[19]}

{f[2]}

{eq(FORMULAS['helix_angle'], '(18.8)')}

{t[20]}

{eq(FORMULAS['extrusion_capacity'], '(18.9)')}

{t[21]}

{t[22]}

{eq(FORMULAS['compaction'], '(18.10)')}

{t[23]}

{eq(FORMULAS['pressing_law'], '(18.11)')}

{t[24]}

{t[25]}

{f[3]}

{eq(FORMULAS['press_work'], '(18.12)')}

{t[26]}

{f[4]}
"""


def replace_between(text, start, end, replacement):
    i = text.index(start)
    j = text.index(end, i)
    return text[:i] + replacement.rstrip() + "\n\n" + text[j:]


def main():
    for locale, markers in MARKERS.items():
        path = COURSE / locale / SLUG
        text = path.read_text(encoding="utf-8")
        path.write_text(replace_between(text, markers[0], markers[1], build(locale)), encoding="utf-8", newline="\n")
        print(path)


if __name__ == "__main__":
    main()
