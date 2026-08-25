from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE = ROOT / "src" / "content" / "courses"
SLUG = "bioprocess-engineering/chapter-11-drying.md"
IMG = "/images/courses/bioprocess-engineering/chapter-11"


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
    "R = m<sub>a</sub>R<sub>a</sub> + m<sub>v</sub>R<sub>v</sub>",
    "p = p<sub>a</sub> + p<sub>v</sub>",
    "φ = ρ<sub>v</sub>/ρ<sub>s</sub>",
    "ρ<sub>v</sub> = p<sub>v</sub>/(R<sub>v</sub>T); ρ<sub>s</sub> = p<sub>s</sub>/(R<sub>v</sub>T)",
    "φ = p<sub>v</sub>/p<sub>s</sub>",
    "x = ρ<sub>v</sub>/ρ<sub>a</sub>",
    "x = 0.622 p<sub>v</sub>/p<sub>a</sub>",
    "x = 0.622 φp<sub>s</sub>/(p - φp<sub>s</sub>)",
    "ρ = ρ<sub>a</sub>(1 + x)",
    "c = c<sub>a</sub> + xc<sub>v</sub>",
    "I = c<sub>a</sub>t + xi",
    "I = 1.004t + (1.842t + 2500)x",
    "p<sub>v</sub> = xp/(0.622 + x)",
    "E = t - t<sub>w</sub>",
    "w = m<sub>w</sub> · 100/m",
    "w<sub>c</sub> = m<sub>w</sub> · 100/m<sub>d</sub>",
    "W = W<sub>1</sub> - W<sub>2</sub>",
    "m<sub>1</sub>(100 - w<sub>1</sub>) = m<sub>2</sub>(100 - w<sub>2</sub>)",
    "m<sub>1</sub> = m<sub>2</sub>(100 - w<sub>2</sub>)/(100 - w<sub>1</sub>)",
    "m<sub>2</sub> = m<sub>1</sub>(100 - w<sub>1</sub>)/(100 - w<sub>2</sub>)",
    "W = m<sub>1</sub> - m<sub>2</sub>",
    "W = m<sub>1</sub>(w<sub>1</sub> - w<sub>2</sub>)/(100 - w<sub>2</sub>)",
    "W = m<sub>2</sub>(w<sub>1</sub> - w<sub>2</sub>)/(100 - w<sub>1</sub>)",
    "L = W/(x<sub>2</sub> - x<sub>0</sub>)",
    "l = L/W = 1/(x<sub>2</sub> - x<sub>0</sub>)",
    "Q = L(I<sub>1</sub> - I<sub>0</sub>)",
    "q = Q/W = l(I<sub>1</sub> - I<sub>0</sub>)",
    "Δ = q<sub>d</sub> + q<sub>m</sub> - q<sub>loss</sub>",
    "I<sub>2</sub> = I<sub>1</sub> + Δ/l",
    "l = (I<sub>1</sub> - I<sub>0</sub>)/(I<sub>2</sub> - I<sub>0</sub>)",
    "I<sub>mix</sub> = (L<sub>0</sub>I<sub>0</sub> + L<sub>r</sub>I<sub>2</sub>)/(L<sub>0</sub> + L<sub>r</sub>)",
    "x<sub>mix</sub> = (L<sub>0</sub>x<sub>0</sub> + L<sub>r</sub>x<sub>2</sub>)/(L<sub>0</sub> + L<sub>r</sub>)",
    "η = Q<sub>evap</sub>/Q<sub>total</sub>",
    "N = W/(Fτ)",
    "N = -(G<sub>d</sub>/F) dw<sub>c</sub>/dτ",
    "N = k<sub>y</sub>(y<sub>s</sub> - y)",
    "N = α(t - t<sub>s</sub>)/r",
    "τ = (G<sub>d</sub>/F) ∫ dw<sub>c</sub>/N",
    "N = K(w<sub>c</sub> - w<sub>eq</sub>)",
    "τ = (G<sub>d</sub>/(FK)) ln[(w<sub>c0</sub> - w<sub>eq</sub>)/(w<sub>c</sub> - w<sub>eq</sub>)]",
    "u = W/(Vτ)",
    "w<sub>avg</sub> = W/(ρ<sub>a</sub>F)",
    "dw<sub>c</sub>/dτ = -k(w<sub>c</sub> - w<sub>eq</sub>)",
    "τ = (1/k) ln[(w<sub>c0</sub> - w<sub>eq</sub>)/(w<sub>c</sub> - w<sub>eq</sub>)]",
]

FIGS = [
    ("fig-11-1.webp", "I-x diagram of humid air", "I-x diagram of humid air"),
    ("fig-11-2.webp", "Air dryer scheme", "Air dryer scheme"),
    ("fig-11-3.webp", "Drying process diagram", "Drying process in theoretical and real dryers"),
    ("fig-11-5.webp", "Dryer with intermediate air heating", "Dryer with intermediate air heating"),
    ("fig-11-7.webp", "Dryer with partial air recirculation", "Dryer with partial return of spent air"),
    ("fig-11-8.webp", "Recirculation drying diagram", "Drying process diagram with partial air recirculation"),
    ("fig-11-9.webp", "Drying curve", "Drying curve of a wet material"),
    ("fig-11-10.webp", "Drying-rate curves", "Drying-rate curves for different materials"),
    ("fig-11-13.webp", "Chamber dryer", "Chamber dryer scheme"),
    ("fig-11-14.webp", "Rotary drum dryer", "Rotary drum dryer scheme"),
    ("fig-11-15.webp", "Drum dryer internals", "Types of flights in a rotary drum dryer"),
    ("fig-11-16.webp", "Tunnel dryer", "Tunnel dryer scheme"),
    ("fig-11-17.webp", "Belt dryer", "Belt dryer scheme"),
    ("fig-11-18.webp", "Shaft dryer", "Shaft dryer scheme"),
    ("fig-11-19.webp", "Spray dryer", "Spray dryer scheme"),
    ("fig-11-20.webp", "Fluidized-bed dryer", "Fluidized-bed dryer scheme"),
    ("fig-11-21.webp", "Spouted-bed dryer", "Spouted-bed dryer scheme"),
    ("fig-11-22.webp", "Double-drum dryer", "Double-drum dryer scheme"),
    ("fig-11-23.webp", "Freeze dryer", "Freeze-dryer scheme"),
    ("fig-11-24.webp", "Radiation dryer", "Radiation dryer scheme"),
    ("fig-11-25.webp", "High-frequency dryer", "High-frequency dryer scheme"),
]


CAP_PREFIX = {
    "uk": ("Рис.", [
        "Діаграма I-x вологого повітря", "Схема повітряної сушарки",
        "Діаграма процесу сушіння в теоретичній і реальній сушарці",
        "Схема сушарки з проміжним підігріванням повітря",
        "Схема сушарки з частковим поверненням відпрацьованого повітря",
        "Діаграма процесу сушіння з частковою рециркуляцією повітря",
        "Крива сушіння вологого матеріалу", "Криві швидкості сушіння різних матеріалів",
        "Схема камерної сушарки", "Схема барабанної сушарки",
        "Типи насадок у барабанній сушарці", "Схема тунельної сушарки",
        "Схема стрічкової сушарки", "Схема шахтної сушарки",
        "Схема розпилювальної сушарки", "Схема сушарки з киплячим шаром",
        "Схема аерофонтанної сушарки", "Схема двовальцьової сушарки",
        "Схема сублімаційної сушарки", "Схема радіаційної сушарки",
        "Схема високочастотної сушарки"]),
    "en": ("Fig.", [c for _, _, c in FIGS]),
    "de": ("Abb.", [
        "I-x-Diagramm feuchter Luft", "Schema eines Lufttrockners",
        "Trocknungsprozess im theoretischen und realen Trockner",
        "Trockner mit Zwischenlufterwaermung", "Trockner mit teilweiser Rueckfuehrung der Abluft",
        "Trocknungsdiagramm mit teilweiser Luftrueckfuehrung", "Trocknungskurve eines feuchten Materials",
        "Trocknungsgeschwindigkeitskurven verschiedener Materialien", "Kammertrockner",
        "Trommeltrockner", "Einbauten in einer Trommeltrocknung", "Tunneltrockner",
        "Bandtrockner", "Schachttrockner", "Spruehtrockner", "Wirbelschichttrockner",
        "Fontaenentrockner", "Doppelwalzentrockner", "Gefriertrockner", "Strahlungstrockner",
        "Hochfrequenztrockner"]),
    "ru": ("Рис.", [
        "Диаграмма I-x влажного воздуха", "Схема воздушной сушилки",
        "Диаграмма процесса сушки в теоретической и реальной сушилке",
        "Схема сушилки с промежуточным подогревом воздуха",
        "Схема сушилки с частичным возвратом отработанного воздуха",
        "Диаграмма процесса сушки с частичной рециркуляцией воздуха",
        "Кривая сушки влажного материала", "Кривые скорости сушки разных материалов",
        "Схема камерной сушилки", "Схема барабанной сушилки",
        "Типы насадок в барабанной сушилке", "Схема туннельной сушилки",
        "Схема ленточной сушилки", "Схема шахтной сушилки",
        "Схема распылительной сушилки", "Схема сушилки с кипящим слоем",
        "Схема аэрофонтанной сушилки", "Схема двухвальцовой сушилки",
        "Схема сублимационной сушилки", "Схема радиационной сушилки",
        "Схема высокочастотной сушилки"]),
}


TEXT = {
    "uk": {
        "start": "## Матеріал підручника",
        "end": "## Після опрацювання розділу студент має вміти",
        "title": "## Матеріал підручника",
        "intro": "Матеріал зібрано у чисту лекційну структуру з формулами, рисунками та підписами з розділу 11 підручника.",
        "sections": [
            ("11.1. Загальні відомості", "Сушіння - суміщений тепловий і дифузійний процес видалення вологи з матеріалу внаслідок випаровування та перенесення пари сушильним агентом. У біотехнологічних і харчових виробництвах його застосовують для стабілізації продуктів, зменшення маси, підвищення стійкості під час зберігання та підготовки напівпродуктів."),
            ("11.2. Фізичні властивості вологого повітря", "Вологе повітря розглядають як суміш сухого повітря і водяної пари. Для розрахунків потрібні парціальні тиски, абсолютна і відносна вологість, вологовміст, густина, теплоємність, ентальпія, точка роси та потенціал сушіння."),
            ("11.3. Діаграма стану вологого повітря", "I-x діаграма поєднує ентальпію, вологовміст, температуру, відносну вологість і парціальний тиск пари. Вона дає змогу будувати нагрівання повітря, теоретичне та реальне сушіння, проміжне підігрівання і рециркуляцію."),
            ("11.4. Вологий матеріал як об'єкт сушіння", "Вологу в матеріалі задають за відношенням до загальної маси або до абсолютно сухої речовини. Для сушарки важливо розрізняти вільну, зв'язану, рівноважну та критичну вологу."),
            ("11.5. Статика сушіння", "Статика сушіння базується на матеріальному і тепловому балансах. Вона визначає витрату повітря, кількість видаленої вологи, потребу в теплоті та положення процесу на I-x діаграмі."),
            ("11.6. Кінетика сушіння", "Кінетика описує зміну вологості матеріалу з часом. У періоді сталої швидкості процес обмежується зовнішнім перенесенням вологи, а в періоді спадної швидкості - внутрішньою дифузією у матеріалі."),
            ("11.7. Конструкції сушарок", "Тип сушарки вибирають за агрегатним станом, термочутливістю, дисперсністю, допустимою тривалістю перебування і вимогами до якості продукту."),
        ],
    },
    "en": {
        "start": "## Lecture Notes",
        "end": "## After studying this chapter, students should be able to",
        "title": "## Lecture Notes",
        "intro": "The chapter is converted into a clean lecture structure with formulas, figures and captions from Chapter 11 of the textbook.",
        "sections": [
            ("11.1. General Information", "Drying is a combined heat- and mass-transfer process in which moisture evaporates from a material and is removed by the drying agent. In biotechnology and food production it stabilizes products, reduces mass and improves storage resistance."),
            ("11.2. Physical Properties of Humid Air", "Humid air is treated as a mixture of dry air and water vapour. Calculations use partial pressures, relative humidity, humidity ratio, density, heat capacity, enthalpy, dew point and drying potential."),
            ("11.3. State Diagram of Humid Air", "The I-x diagram combines enthalpy, humidity ratio, temperature, relative humidity and vapour pressure, making it possible to plot heating, theoretical and real drying, intermediate heating and recirculation."),
            ("11.4. Wet Material as a Drying Object", "Moisture content can be referred to total mass or to dry solids. Free, bound, equilibrium and critical moisture determine the drying path."),
            ("11.5. Drying Statics", "Drying statics is based on material and heat balances. It gives air demand, removed moisture, heat demand and the process path on the I-x diagram."),
            ("11.6. Drying Kinetics", "Drying kinetics describes how material moisture changes with time. The constant-rate period is governed mainly by external transfer; the falling-rate period is governed by internal diffusion."),
            ("11.7. Dryer Designs", "Dryer type is selected from material state, heat sensitivity, particle size, residence time and required product quality."),
        ],
    },
    "de": {
        "start": "## Vorlesungsskript",
        "end": "## Nach dem Durcharbeiten dieses Kapitels sollen Studierende",
        "title": "## Vorlesungsskript",
        "intro": "Das Kapitel ist als klares Vorlesungsmaterial mit Formeln, Abbildungen und Beschriftungen aus Kapitel 11 des Lehrbuchs aufgebaut.",
        "sections": [
            ("11.1. Allgemeines", "Trocknung ist ein gekoppelter Waerme- und Stoffuebergangsprozess: Feuchte verdampft aus dem Material und wird vom Trocknungsmittel abgefuehrt. In Bio- und Lebensmittelproduktionen stabilisiert sie Produkte und verbessert die Lagerfaehigkeit."),
            ("11.2. Physikalische Eigenschaften feuchter Luft", "Feuchte Luft wird als Mischung aus trockener Luft und Wasserdampf betrachtet. Fuer Berechnungen braucht man Partialdruecke, relative Feuchte, Feuchtegehalt, Dichte, Waermekapazitaet, Enthalpie, Taupunkt und Trocknungspotenzial."),
            ("11.3. Zustandsdiagramm feuchter Luft", "Das I-x-Diagramm verbindet Enthalpie, Feuchtegehalt, Temperatur, relative Feuchte und Dampfdruck und dient zur Darstellung von Erwaermung, theoretischer und realer Trocknung sowie Rueckfuehrung."),
            ("11.4. Feuchtes Material als Trocknungsobjekt", "Der Feuchtegehalt wird auf die Gesamtmasse oder auf die Trockensubstanz bezogen. Freie, gebundene, Gleichgewichts- und kritische Feuchte bestimmen den Verlauf."),
            ("11.5. Statik der Trocknung", "Die Statik der Trocknung beruht auf Stoff- und Waermebilanzen und bestimmt Luftbedarf, entfernte Feuchte, Waermebedarf und Prozesslinie."),
            ("11.6. Kinetik der Trocknung", "Die Kinetik beschreibt die Aenderung der Materialfeuchte mit der Zeit. Bei konstanter Geschwindigkeit dominiert aeusserer Uebergang, bei fallender Geschwindigkeit die innere Diffusion."),
            ("11.7. Trocknerbauarten", "Die Trocknerbauart richtet sich nach Aggregatzustand, Waermeempfindlichkeit, Korngroesse, Verweilzeit und geforderter Produktqualitaet."),
        ],
    },
    "ru": {
        "start": "## Конспект лекции",
        "end": "## После изучения раздела студент должен уметь",
        "title": "## Конспект лекции",
        "intro": "Материал собран в чистую лекционную структуру с формулами, рисунками и подписями из раздела 11 учебника.",
        "sections": [
            ("11.1. Общие сведения", "Сушка - совмещенный тепловой и диффузионный процесс удаления влаги из материала за счет испарения и отвода пара сушильным агентом. В биотехнологических и пищевых производствах она стабилизирует продукты, снижает массу и повышает стойкость при хранении."),
            ("11.2. Физические свойства влажного воздуха", "Влажный воздух рассматривают как смесь сухого воздуха и водяного пара. Для расчетов используют парциальные давления, относительную влажность, влагосодержание, плотность, теплоемкость, энтальпию, точку росы и потенциал сушки."),
            ("11.3. Диаграмма состояния влажного воздуха", "I-x диаграмма связывает энтальпию, влагосодержание, температуру, относительную влажность и давление пара, позволяя строить нагрев, теоретическую и реальную сушку, промежуточный подогрев и рециркуляцию."),
            ("11.4. Влажный материал как объект сушки", "Влажность материала задают по отношению к общей массе или к абсолютно сухому веществу. Свободная, связанная, равновесная и критическая влага определяют путь сушки."),
            ("11.5. Статика сушки", "Статика сушки основана на материальном и тепловом балансах. Она определяет расход воздуха, количество удаленной влаги, расход теплоты и линию процесса на I-x диаграмме."),
            ("11.6. Кинетика сушки", "Кинетика описывает изменение влажности материала во времени. В периоде постоянной скорости процесс ограничивается внешним переносом, а в периоде падающей скорости - внутренней диффузией."),
            ("11.7. Конструкции сушилок", "Тип сушилки выбирают по агрегатному состоянию, термочувствительности, дисперсности, времени пребывания и требованиям к качеству продукта."),
        ],
    },
}


def build(locale):
    data = TEXT[locale]
    lines = [data["title"], "", data["intro"]]
    formula_i = 0
    fig_i = 0
    section_formula_counts = [0, 14, 0, 3, 16, 10, 1]
    section_fig_counts = [0, 0, 6, 0, 0, 2, 13]
    nums = [1, 2, 3, 5, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    prefix, captions = CAP_PREFIX[locale]
    for idx, (title, text) in enumerate(data["sections"]):
        lines += ["", f"### {title}", "", text]
        for _ in range(section_formula_counts[idx]):
            lines += ["", eq(FORMULAS[formula_i], f"(11.{formula_i + 1})")]
            formula_i += 1
        for _ in range(section_fig_counts[idx]):
            file = FIGS[fig_i][0]
            cap = f"{prefix} 11.{nums[fig_i]}. {captions[fig_i]}"
            lines += ["", fig(file, captions[fig_i], cap)]
            fig_i += 1
    return "\n".join(lines)


def replace_between(text, start, end, replacement):
    start_i = text.index(start)
    end_i = text.index(end)
    return text[:start_i] + replacement.rstrip() + "\n\n" + text[end_i:]


for locale, data in TEXT.items():
    path = COURSE / locale / SLUG
    original = path.read_text(encoding="utf-8")
    path.write_text(replace_between(original, data["start"], data["end"], build(locale)), encoding="utf-8")
    print(f"updated {path}")
