from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE = ROOT / "src" / "content" / "courses"
SLUG = "bioprocess-engineering/chapter-17-bulk-material-sorting.md"
IMG = "/images/courses/bioprocess-engineering/chapter-17"


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
    "φ = (F<sub>o</sub>/F)·100",
    "n = 30√[1/(r tgα)]",
    "n<sub>min</sub> = 30√[tg(φ - α)/r]",
]

FIGS = {
    "uk": [
        ("fig-17-1.webp", "Рис. 17.1. Форми отворів сит", "Рис. 17.1. Форми отворів сит: а - круглі; б - довгасті; в - круглі лійкоподібні; г - круглі з відігнутою кромкою; д, е - плетені металеві сітки"),
        ("fig-17-2.webp", "Рис. 17.2. Схема плоского хитного грохота", "Рис. 17.2. Схема плоского хитного грохота: А - прохід; Б - схід"),
        ("fig-17-3.webp", "Рис. 17.3. Схеми хитних грохотів", "Рис. 17.3. Схеми хитних грохотів"),
        ("fig-17-4.webp", "Рис. 17.4. Схема барабанного грохота", "Рис. 17.4. Схема барабанного грохота: А - прохід; Б - схід"),
        ("fig-17-5.webp", "Рис. 17.5. Схема вібраційного грохота", "Рис. 17.5. Схема вібраційного грохота: А - прохід; Б - схід"),
        ("fig-17-6.webp", "Рис. 17.6. Схема циліндричного трієра", "Рис. 17.6. Схема циліндричного трієра"),
        ("fig-17-7.webp", "Рис. 17.7. Схема повітряно-ситового сепаратора", "Рис. 17.7. Схема повітряно-ситового сепаратора"),
        ("fig-17-8.webp", "Рис. 17.8. Схема електромагнітного сепаратора", "Рис. 17.8. Схема електромагнітного сепаратора"),
    ],
    "en": [
        ("fig-17-1.webp", "Fig. 17.1. Sieve opening shapes", "Fig. 17.1. Sieve opening shapes: a - round; b - elongated; c - round funnel-shaped; d - round with a bent edge; e, f - woven metal screens"),
        ("fig-17-2.webp", "Fig. 17.2. Flat reciprocating screen diagram", "Fig. 17.2. Flat reciprocating screen diagram: A - undersize; B - oversize"),
        ("fig-17-3.webp", "Fig. 17.3. Reciprocating screen arrangements", "Fig. 17.3. Reciprocating screen arrangements"),
        ("fig-17-4.webp", "Fig. 17.4. Drum screen diagram", "Fig. 17.4. Drum screen diagram: A - undersize; B - oversize"),
        ("fig-17-5.webp", "Fig. 17.5. Vibrating screen diagram", "Fig. 17.5. Vibrating screen diagram: A - undersize; B - oversize"),
        ("fig-17-6.webp", "Fig. 17.6. Cylindrical indented separator diagram", "Fig. 17.6. Cylindrical indented separator diagram"),
        ("fig-17-7.webp", "Fig. 17.7. Air-and-screen separator diagram", "Fig. 17.7. Air-and-screen separator diagram"),
        ("fig-17-8.webp", "Fig. 17.8. Electromagnetic separator diagram", "Fig. 17.8. Electromagnetic separator diagram"),
    ],
    "de": [
        ("fig-17-1.webp", "Abb. 17.1. Formen von Sieboeffnungen", "Abb. 17.1. Formen von Sieboeffnungen: a - rund; b - laenglich; c - rund trichterfoermig; d - rund mit gebogener Kante; e, f - gewebte Metallsiebe"),
        ("fig-17-2.webp", "Abb. 17.2. Schema eines Flachsieb-Schwingsiebs", "Abb. 17.2. Schema eines Flachsieb-Schwingsiebs: A - Durchgang; B - Rueckstand"),
        ("fig-17-3.webp", "Abb. 17.3. Anordnungen von Schwingsieben", "Abb. 17.3. Anordnungen von Schwingsieben"),
        ("fig-17-4.webp", "Abb. 17.4. Schema eines Trommelsiebs", "Abb. 17.4. Schema eines Trommelsiebs: A - Durchgang; B - Rueckstand"),
        ("fig-17-5.webp", "Abb. 17.5. Schema eines Vibrationssiebs", "Abb. 17.5. Schema eines Vibrationssiebs: A - Durchgang; B - Rueckstand"),
        ("fig-17-6.webp", "Abb. 17.6. Schema eines zylindrischen Trieurs", "Abb. 17.6. Schema eines zylindrischen Trieurs"),
        ("fig-17-7.webp", "Abb. 17.7. Schema eines Luft-Sieb-Separators", "Abb. 17.7. Schema eines Luft-Sieb-Separators"),
        ("fig-17-8.webp", "Abb. 17.8. Schema eines elektromagnetischen Separators", "Abb. 17.8. Schema eines elektromagnetischen Separators"),
    ],
    "ru": [
        ("fig-17-1.webp", "Рис. 17.1. Формы отверстий сит", "Рис. 17.1. Формы отверстий сит: а - круглые; б - продолговатые; в - круглые воронкообразные; г - круглые с отогнутой кромкой; д, е - плетеные металлические сетки"),
        ("fig-17-2.webp", "Рис. 17.2. Схема плоского качающегося грохота", "Рис. 17.2. Схема плоского качающегося грохота: А - проход; Б - сход"),
        ("fig-17-3.webp", "Рис. 17.3. Схемы качающихся грохотов", "Рис. 17.3. Схемы качающихся грохотов"),
        ("fig-17-4.webp", "Рис. 17.4. Схема барабанного грохота", "Рис. 17.4. Схема барабанного грохота: А - проход; Б - сход"),
        ("fig-17-5.webp", "Рис. 17.5. Схема вибрационного грохота", "Рис. 17.5. Схема вибрационного грохота: А - проход; Б - сход"),
        ("fig-17-6.webp", "Рис. 17.6. Схема цилиндрического триера", "Рис. 17.6. Схема цилиндрического триера"),
        ("fig-17-7.webp", "Рис. 17.7. Схема воздушно-ситового сепаратора", "Рис. 17.7. Схема воздушно-ситового сепаратора"),
        ("fig-17-8.webp", "Рис. 17.8. Схема электромагнитного сепаратора", "Рис. 17.8. Схема электромагнитного сепаратора"),
    ],
}


TEXT = {
    "uk": [
        "## Матеріал підручника",
        "### Розділ 17. Сортування сипких матеріалів",
        "У процесі перероблення сипких матеріалів продукт часто потрібно розподілити на однорідні фракції або очистити від домішок. Розподіл твердих матеріалів за розміром частинок називають класифікацією, розподіл за властивостями і сортами - сортуванням, а розподіл поштучної продукції за розміром - калібруванням.",
        "### 17.1. Просіювання",
        "Просіюванням називають розподіл сипкого матеріалу пропусканням крізь одне або кілька сит. Дрібні частинки, що проходять крізь отвори, утворюють прохід, а більші частинки, які затримуються на ситі, утворюють схід. Основним робочим органом є сито.",
        "Ефективність просіювання пов'язують із живим перерізом сита φ - відношенням площі отворів F<sub>o</sub> до площі всього сита F, вираженим у відсотках:",
        "Під час ситового аналізу матеріал послідовно просіюють крізь набір сит із поступовим зменшенням розміру отворів. За масою отриманих фракцій визначають гранулометричний склад і будують криві розподілу частинок за розмірами.",
        "Для рухомих сит важливо підібрати частоту коливань. Граничну частоту обертання кривошипа, за якої частинка ще не відривається від сита, визначають так:",
        "Мінімальна частота, за якої частинка рухається відносно сита вниз:",
        "де r - радіус кривошипа, м; α - кут нахилу сита; φ - кут тертя частинок.",
        "Плоскі хитні грохоти продуктивні й зручні в обслуговуванні, але створюють значні динамічні навантаження. Барабанні грохоти дають змогу послідовно виділяти фракції через отвори, що збільшуються вздовж руху матеріалу. Вібраційні грохоти мають високу ефективність і краще працюють із вологими матеріалами.",
        "### 17.2. Розподіл за формою частинок",
        "Домішки, що відрізняються від зерна довжиною, не завжди можна відокремити на ситах. Для цього застосовують трієри - машини з барабаном або диском, що має комірки. Коротші частинки утримуються в комірках довше і відводяться окремо.",
        "### 17.3. Розподіл за густиною і швидкістю осідання частинок",
        "Розподіл за швидкістю осідання в рідині або газі підлягає законам осідання твердих тіл. У повітряному потоці на частинку діють сила тяжіння G і сила опору P. Якщо G > P, частинка опускається; якщо G < P, вона підіймається; якщо G = P, частинка перебуває у завислому стані.",
        "Швидкість потоку, за якої частинка утримується в завислому стані, називають швидкістю витання. Цей принцип використовують у повітряно-ситових сепараторах для очищення зерна від легких домішок. Гідравлічну класифікацію застосовують для відокремлення каменів, піску та інших домішок у потоках рідини, а також для сортування зеленого горошку і кукурудзяних зерен.",
        "### 17.4. Магнітне сепарування",
        "Металеві домішки у сипких матеріалах небезпечні для обладнання і можуть спричинити іскроутворення. Домішки з феромагнітними властивостями вилучають магнітними сепараторами з постійними магнітами або електромагнітами. Електромагнітні сепаратори створюють сильніше поле і підвищують ефективність відокремлення.",
    ],
    "en": [
        "## Lecture Notes", "### Chapter 17. Sorting of bulk materials",
        "During processing, bulk materials often have to be divided into uniform fractions or cleaned of impurities. Separation by particle size is called classification, separation by properties and grade is sorting, and separation of individual items by size is calibration.",
        "### 17.1. Screening", "Screening separates bulk material by passing it through one or more sieves. Fine particles passing through the openings form the undersize fraction; larger particles retained on the sieve form the oversize fraction. The sieve is the main working element.",
        "Screening performance is related to the open area φ, the ratio of opening area F<sub>o</sub> to total sieve area F expressed as a percentage:",
        "In sieve analysis, material is passed through a set of sieves with progressively smaller openings. The masses of the resulting fractions give the particle-size distribution and allow distribution curves to be plotted.",
        "For moving sieves, the oscillation frequency must be selected correctly. The limiting crank speed at which a particle does not leave the sieve is:",
        "The minimum speed at which a particle moves downward relative to the sieve is:",
        "where r is crank radius, m; α is sieve inclination angle; φ is particle friction angle.",
        "Flat reciprocating screens are productive and convenient but produce high dynamic loads. Drum screens separate fractions through openings that increase along the material path. Vibrating screens are efficient and better suited to moist materials.",
        "### 17.2. Separation by particle shape", "Impurities that differ from grain in length cannot always be separated on sieves. Indented separators are used for this purpose; their drum or disk contains cells. Shorter particles stay in the cells longer and are discharged separately.",
        "### 17.3. Separation by density and settling velocity", "Separation by settling velocity in a liquid or gas follows the general laws of particle settling. In an air stream, gravity G and drag P act on a particle. If G > P, the particle moves downward; if G < P, it rises; if G = P, it remains suspended.",
        "The air velocity at which a particle remains suspended is called the terminal or suspension velocity. This principle is used in air-and-screen separators for removing light impurities from grain. Hydraulic classification is used to remove stones, sand, and other impurities in liquid streams and to sort peas and corn kernels.",
        "### 17.4. Magnetic separation", "Metal impurities in bulk materials are dangerous for equipment and may cause sparking. Ferromagnetic impurities are removed by magnetic separators with permanent magnets or electromagnets. Electromagnetic separators generate a stronger field and improve separation efficiency.",
    ],
    "de": [
        "## Vorlesungsskript", "### Kapitel 17. Sortieren von Schuettguetern",
        "Bei der Verarbeitung muessen Schuettgueter haeufig in gleichartige Fraktionen getrennt oder von Verunreinigungen gereinigt werden. Die Trennung nach Partikelgroesse heisst Klassierung, die Trennung nach Eigenschaften und Sorten Sortierung, und die Groessentrennung einzelner Stuecke Kalibrierung.",
        "### 17.1. Sieben", "Beim Sieben wird Schuettgut durch ein oder mehrere Siebe getrennt. Feine Partikel, die durch die Oeffnungen gehen, bilden den Durchgang; groessere auf dem Sieb verbleibende Partikel bilden den Rueckstand. Das Sieb ist das wichtigste Arbeitsorgan.",
        "Die Wirksamkeit des Siebens haengt mit der freien Siebflaeche φ zusammen, also mit dem Verhaeltnis der Oeffnungsflaeche F<sub>o</sub> zur gesamten Siebflaeche F in Prozent:",
        "Bei der Siebanalyse wird das Material nacheinander durch Siebe mit abnehmender Oeffnungsweite geleitet. Aus den Massen der Fraktionen wird die Korngroessenverteilung bestimmt.",
        "Bei bewegten Sieben ist die Schwingungsfrequenz richtig zu waehlen. Die Grenzdrehzahl der Kurbel, bei der ein Partikel das Sieb nicht verlaesst, lautet:",
        "Die Mindestdrehzahl, bei der sich ein Partikel relativ zum Sieb nach unten bewegt, lautet:",
        "Dabei ist r der Kurbelradius, m; α der Neigungswinkel des Siebs; φ der Reibungswinkel der Partikel.",
        "Flache Schwingsiebe sind leistungsfaehig und gut zu bedienen, erzeugen aber hohe dynamische Belastungen. Trommelsiebe trennen Fraktionen durch Oeffnungen, die entlang der Stoffbewegung groesser werden. Vibrationssiebe sind wirksam und eignen sich besser fuer feuchte Stoffe.",
        "### 17.2. Trennung nach Partikelform", "Verunreinigungen, die sich von Getreide in der Laenge unterscheiden, lassen sich nicht immer mit Sieben entfernen. Dafuer werden Trieurmaschinen mit Trommel oder Scheibe und Zellen eingesetzt. Kuerzere Partikel bleiben laenger in den Zellen und werden getrennt ausgetragen.",
        "### 17.3. Trennung nach Dichte und Sinkgeschwindigkeit", "Die Trennung nach Sinkgeschwindigkeit in Fluessigkeit oder Gas folgt den allgemeinen Gesetzen des Absetzens fester Koerper. Im Luftstrom wirken Gewichtskraft G und Widerstandskraft P auf ein Partikel. Bei G > P sinkt es, bei G < P steigt es, bei G = P schwebt es.",
        "Die Stroemungsgeschwindigkeit, bei der ein Partikel schwebt, wird Schwebegeschwindigkeit genannt. Dieses Prinzip wird in Luft-Sieb-Separatoren zur Entfernung leichter Verunreinigungen aus Getreide verwendet. Hydraulische Klassierung dient zur Entfernung von Steinen, Sand und anderen Beimengungen in Fluessigkeitsstroemen sowie zum Sortieren von Erbsen und Maiskoernern.",
        "### 17.4. Magnetische Separation", "Metallische Verunreinigungen in Schuettguetern gefaehrden Anlagen und koennen Funken verursachen. Ferromagnetische Beimengungen werden mit Magnetseparatoren mit Dauermagneten oder Elektromagneten entfernt. Elektromagnetische Separatoren erzeugen ein staerkeres Feld und erhoehen die Abscheidewirkung.",
    ],
    "ru": [
        "## Конспект лекции", "### Раздел 17. Сортирование сыпучих материалов",
        "При переработке сыпучие материалы часто необходимо разделить на однородные фракции или очистить от примесей. Разделение по размеру частиц называют классификацией, разделение по свойствам и сортам - сортированием, а разделение штучной продукции по размеру - калиброванием.",
        "### 17.1. Просеивание", "Просеивание разделяет сыпучий материал при пропускании через одно или несколько сит. Мелкие частицы, проходящие через отверстия, образуют проход, а более крупные частицы, задержанные на сите, образуют сход. Основной рабочий орган - сито.",
        "Эффективность просеивания связана с живым сечением сита φ, то есть отношением площади отверстий F<sub>o</sub> к площади всего сита F, выраженным в процентах:",
        "При ситовом анализе материал последовательно просеивают через набор сит с уменьшающимися отверстиями. По массам полученных фракций определяют гранулометрический состав.",
        "Для движущихся сит важно правильно выбрать частоту колебаний. Предельная частота вращения кривошипа, при которой частица не отрывается от сита:",
        "Минимальная частота, при которой частица движется относительно сита вниз:",
        "где r - радиус кривошипа, м; α - угол наклона сита; φ - угол трения частиц.",
        "Плоские качающиеся грохоты производительны и удобны в обслуживании, но создают значительные динамические нагрузки. Барабанные грохоты выделяют фракции через отверстия, увеличивающиеся по ходу материала. Вибрационные грохоты эффективны и лучше работают с влажными материалами.",
        "### 17.2. Разделение по форме частиц", "Примеси, отличающиеся от зерна длиной, не всегда можно отделить на ситах. Для этого используют триеры - машины с барабаном или диском с ячейками. Более короткие частицы удерживаются в ячейках дольше и выводятся отдельно.",
        "### 17.3. Разделение по плотности и скорости осаждения", "Разделение по скорости осаждения в жидкости или газе подчиняется общим законам осаждения твердых тел. В воздушном потоке на частицу действуют сила тяжести G и сила сопротивления P. Если G > P, частица опускается; если G < P, поднимается; если G = P, находится во взвешенном состоянии.",
        "Скорость потока, при которой частица удерживается во взвешенном состоянии, называют скоростью витания. Этот принцип используют в воздушно-ситовых сепараторах для очистки зерна от легких примесей. Гидравлическую классификацию применяют для отделения камней, песка и других примесей в потоках жидкости, а также для сортирования зеленого горошка и зерен кукурузы.",
        "### 17.4. Магнитное сепарирование", "Металлические примеси в сыпучих материалах опасны для оборудования и могут вызывать искрообразование. Ферромагнитные примеси удаляют магнитными сепараторами с постоянными магнитами или электромагнитами. Электромагнитные сепараторы создают более сильное поле и повышают эффективность отделения.",
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

{f[0]}

{t[5]}

{eq(FORMULAS[0])}

{t[6]}

{f[1]}

{t[7]}

{eq(FORMULAS[1], '(17.1)')}

{t[8]}

{eq(FORMULAS[2], '(17.2)')}

{t[9]}

{f[2]}

{f[3]}

{f[4]}

{t[10]}

{t[11]}

{t[12]}

{f[5]}

{t[13]}

{t[14]}

{f[6]}

{t[15]}

{t[16]}

{f[7]}
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
