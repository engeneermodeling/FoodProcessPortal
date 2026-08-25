from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE = ROOT / "src" / "content" / "courses"
SLUG = "bioprocess-engineering/chapter-07-heating-cooling.md"


def eq(expr: str, num: str) -> str:
    return (
        '<div class="equation-block">\n'
        f'  <span class="equation-main">{expr}</span>\n'
        f'  <span class="equation-number">({num})</span>\n'
        '</div>'
    )


def fig(name: str, alt: str) -> str:
    return f"![{alt}](/images/courses/bioprocess-engineering/chapter-07/{name}.webp)"


E = {
    "7.1": eq("n = 3a(a - 1) + 1", "7.1"),
    "7.2": eq("b = 2a - 1", "7.2"),
    "7.3": eq("s = (1.3...1.5)d<sub>o</sub>", "7.3"),
    "7.4": eq("D = s(b - 1) + 4d<sub>o</sub>", "7.4"),
    "7.5": eq("F = Q/(kΔt<sub>m</sub>)", "7.5"),
    "7.6": eq("Q = Q<sub>1</sub> = Q<sub>2</sub>", "7.6"),
    "7.7": eq("Q = m<sub>1</sub>(i<sub>1,in</sub> - i<sub>1,out</sub>) = m<sub>2</sub>(i<sub>2,out</sub> - i<sub>2,in</sub>)", "7.7"),
    "7.8": eq("Q = m<sub>1</sub>c<sub>1</sub>(t<sub>1,in</sub> - t<sub>1,out</sub>)", "7.8"),
    "7.9": eq("Q = m<sub>2</sub>c<sub>2</sub>(t<sub>2,out</sub> - t<sub>2,in</sub>)", "7.9"),
    "7.10": eq("m<sub>1</sub>c<sub>1</sub>(t<sub>1,in</sub> - t<sub>1,out</sub>) = m<sub>2</sub>c<sub>2</sub>(t<sub>2,out</sub> - t<sub>2,in</sub>)", "7.10"),
    "7.11": eq("m<sub>2</sub> = m<sub>1</sub>c<sub>1</sub>(t<sub>1,in</sub> - t<sub>1,out</sub>)/(c<sub>2</sub>(t<sub>2,out</sub> - t<sub>2,in</sub>))", "7.11"),
    "7.12": eq("m<sub>1</sub> = m<sub>2</sub>c<sub>2</sub>(t<sub>2,out</sub> - t<sub>2,in</sub>)/(c<sub>1</sub>(t<sub>1,in</sub> - t<sub>1,out</sub>))", "7.12"),
    "7.13": eq("D<sub>s</sub> = Q/(i<sub>s</sub> - i<sub>c</sub>)", "7.13"),
    "7.14": eq("Nu = 0.023Re<sup>0.8</sup>Pr<sup>0.4</sup>", "7.14"),
    "7.15": eq("Nu = CRe<sup>0.6</sup>Pr<sup>0.33</sup>", "7.15"),
    "7.16": eq("Nu = CRe<sup>0.73</sup>Pr<sup>0.43</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup>", "7.16"),
    "7.17": eq("1/k = 1/α<sub>1</sub> + δ<sub>w</sub>/λ<sub>w</sub> + δ<sub>f1</sub>/λ<sub>f1</sub> + δ<sub>f2</sub>/λ<sub>f2</sub> + 1/α<sub>2</sub>", "7.17"),
    "7.18": eq("k<sub>actual</sub> = φk<sub>calc</sub>", "7.18"),
    "7.19": eq("t<sub>w1</sub> = t<sub>1</sub> - q/α<sub>1</sub>", "7.19"),
    "7.20": eq("t<sub>w2</sub> = t<sub>2</sub> + q/α<sub>2</sub>", "7.20"),
    "7.21": eq("Δt<sub>lm</sub> = (Δt<sub>max</sub> - Δt<sub>min</sub>)/ln(Δt<sub>max</sub>/Δt<sub>min</sub>)", "7.21"),
    "7.22": eq("Δt<sub>m</sub> = (Δt<sub>max</sub> + Δt<sub>min</sub>)/2", "7.22"),
    "7.23": eq("P = (t<sub>2,out</sub> - t<sub>2,in</sub>)/(t<sub>1,in</sub> - t<sub>2,in</sub>)", "7.23"),
    "7.24": eq("R = (t<sub>1,in</sub> - t<sub>1,out</sub>)/(t<sub>2,out</sub> - t<sub>2,in</sub>)", "7.24"),
    "7.25": eq("Δt<sub>m</sub> = εΔt<sub>lm,counter</sub>", "7.25"),
    "7.26": eq("f<sub>1</sub> = m/(ρw)", "7.26"),
    "7.27": eq("n<sub>1</sub> = 4f<sub>1</sub>/(πd<sub>i</sub><sup>2</sup>)", "7.27"),
    "7.28": eq("L = F/(πd<sub>p</sub>n)", "7.28"),
    "7.29": eq("z = L/l", "7.29"),
    "7.30": eq("n = zn<sub>1</sub>", "7.30"),
    "7.31": eq("l<sub>turn</sub> = √((πD<sub>coil</sub>)<sup>2</sup> + h<sup>2</sup>)", "7.31"),
    "7.32": eq("L = F/(πd<sub>p</sub>)", "7.32"),
    "7.33": eq("n = L/l<sub>turn</sub>", "7.33"),
    "7.34": eq("H = nh", "7.34"),
    "7.35": eq("V = πd<sub>n</sub><sup>2</sup>w/4", "7.35"),
    "7.36": eq("d<sub>n</sub> = √(4V/(πw))", "7.36"),
    "7.37": eq("N = VΔp/η", "7.37"),
    "7.38": eq("S = K/P + E", "7.38"),
    "7.39": eq("K = C<sub>F</sub>F", "7.39"),
    "7.40": eq("χ = Δt<sub>available</sub>/Δt<sub>required</sub>", "7.40"),
}

CAPTIONS = {
    "uk": [
        ("fig-7-1", "Рис. 7.1. Схема кожухотрубного одноходового теплообмінника"),
        ("fig-7-2", "Рис. 7.2. Схема кожухотрубного багатоходового теплообмінника"),
        ("fig-7-3", "Рис. 7.3. Схеми розміщення труб у трубних решітках"),
        ("fig-7-5", "Рис. 7.5. Схема теплообмінника типу «труба в трубі»"),
        ("fig-7-6", "Рис. 7.6. Схема заглибного теплообмінника"),
        ("fig-7-7", "Рис. 7.7. Схема зрошувального змійовикового теплообмінника"),
        ("fig-7-8", "Рис. 7.8. Схема спірального теплообмінника"),
        ("fig-7-9", "Рис. 7.9. Просторова схема руху середовищ у пластинчастому теплообміннику"),
        ("fig-7-10", "Рис. 7.10. Поверхня з оребрених труб теплообмінника"),
        ("fig-7-11", "Рис. 7.11. Схема оболонкового теплообмінника"),
        ("fig-7-12", "Рис. 7.12. Графіки зміни температур теплоносіїв"),
    ],
    "en": [
        ("fig-7-1", "Fig. 7.1. Single-pass shell-and-tube heat exchanger"),
        ("fig-7-2", "Fig. 7.2. Multi-pass shell-and-tube heat exchanger"),
        ("fig-7-3", "Fig. 7.3. Tube layout in tube sheets"),
        ("fig-7-5", "Fig. 7.5. Tube-in-tube heat exchanger"),
        ("fig-7-6", "Fig. 7.6. Immersion heat exchanger"),
        ("fig-7-7", "Fig. 7.7. Spray coil heat exchanger"),
        ("fig-7-8", "Fig. 7.8. Spiral heat exchanger"),
        ("fig-7-9", "Fig. 7.9. Flow pattern in a plate heat exchanger"),
        ("fig-7-10", "Fig. 7.10. Finned tube heat-transfer surface"),
        ("fig-7-11", "Fig. 7.11. Jacketed heat exchanger"),
        ("fig-7-12", "Fig. 7.12. Temperature profiles of heat carriers"),
    ],
    "de": [
        ("fig-7-1", "Abb. 7.1. Einweg-Rohrbuendelwaermeuebertrager"),
        ("fig-7-2", "Abb. 7.2. Mehrweg-Rohrbuendelwaermeuebertrager"),
        ("fig-7-3", "Abb. 7.3. Rohranordnung in Rohrplatten"),
        ("fig-7-5", "Abb. 7.5. Doppelrohr-Waermeuebertrager"),
        ("fig-7-6", "Abb. 7.6. Tauchwaermeuebertrager"),
        ("fig-7-7", "Abb. 7.7. Berieselter Schlangenrohr-Waermeuebertrager"),
        ("fig-7-8", "Abb. 7.8. Spiralwaermeuebertrager"),
        ("fig-7-9", "Abb. 7.9. Stroemungsschema in einem Plattenwaermeuebertrager"),
        ("fig-7-10", "Abb. 7.10. Oberflaeche aus Rippenrohren"),
        ("fig-7-11", "Abb. 7.11. Mantelwaermeuebertrager"),
        ("fig-7-12", "Abb. 7.12. Temperaturverlaeufe der Waermetraeger"),
    ],
    "ru": [
        ("fig-7-1", "Рис. 7.1. Схема кожухотрубного одноходового теплообменника"),
        ("fig-7-2", "Рис. 7.2. Схема кожухотрубного многоходового теплообменника"),
        ("fig-7-3", "Рис. 7.3. Схемы размещения труб в трубных решетках"),
        ("fig-7-5", "Рис. 7.5. Схема теплообменника типа «труба в трубе»"),
        ("fig-7-6", "Рис. 7.6. Схема погружного теплообменника"),
        ("fig-7-7", "Рис. 7.7. Схема оросительного змеевикового теплообменника"),
        ("fig-7-8", "Рис. 7.8. Схема спирального теплообменника"),
        ("fig-7-9", "Рис. 7.9. Схема движения сред в пластинчатом теплообменнике"),
        ("fig-7-10", "Рис. 7.10. Поверхность из оребренных труб теплообменника"),
        ("fig-7-11", "Рис. 7.11. Схема оболочкового теплообменника"),
        ("fig-7-12", "Рис. 7.12. Графики изменения температур теплоносителей"),
    ],
}

TEXT = {
    "uk": {
        "mat": "## Матеріал підручника",
        "h": ["Загальні відомості", "Класифікація теплообмінників", "Конструкції теплообмінників", "Тепловий розрахунок теплообмінників", "Конструкційний розрахунок теплообмінників", "Гідравлічний розрахунок теплообмінників", "Оптимізація та інтенсифікація теплообміну", "Перевірний розрахунок теплообмінників"],
        "intro": "Нагрівання й охолодження рідин та газів належать до найпоширеніших процесів біоінженерії. Для кожного процесу вибирають технологічно й економічно доцільний спосіб нагрівання або охолодження, теплоносій і конструкцію апарата. Апарати для цих процесів називають теплообмінниками.",
        "class": "За способом передавання теплоти теплообмінники поділяють на поверхневі та змішувальні. У поверхневих апаратах теплоносії розділені стінкою або почергово контактують з однією поверхнею; у змішувальних теплообмін відбувається за безпосереднього контакту середовищ. У промисловості найчастіше застосовують рекуперативні поверхневі теплообмінники.",
        "req": "Основні вимоги до теплообмінника: високий коефіцієнт теплопередачі, малий гідравлічний опір, герметичність, зручність очищення, ремонтопридатність і компенсація температурних подовжень.",
        "design": "Кожухотрубні теплообмінники дають змогу створити в одному апараті велику поверхню теплообміну. Швидкість теплоносіїв підвищують багатоходовим рухом і сегментними перегородками. Труби в трубних решітках зазвичай розміщують по правильних шестикутниках.",
        "other": "Для невеликих витрат застосовують теплообмінники типу «труба в трубі». Заглибні та зрошувальні змійовикові апарати прості, але мають порівняно низьку інтенсивність теплообміну. Спіральні й пластинчасті теплообмінники компактні; пластинчасті апарати особливо поширені для стерилізації та охолодження технологічних рідин.",
        "thermal": "Проектний тепловий розрахунок зводиться до визначення потрібної площі поверхні теплообміну. Для цього послідовно знаходять теплове навантаження, коефіцієнт теплопередачі та середню різницю температур.",
        "balance": "Якщо втрати теплоти в навколишнє середовище малі, тепловий баланс записують між гарячим і холодним теплоносіями. Для теплоносіїв без зміни агрегатного стану ентальпії замінюють добутком теплоємності на температуру.",
        "coeff": "Коефіцієнт теплопередачі визначають через термічні опори стінки, забруднень і тепловіддачі з обох боків. Для окремих конструкцій застосовують спеціальні критеріальні рівняння.",
        "dt": "Середню різницю температур визначають як середньологарифмічну. Протитечія використовує теплоносії найповніше, тому за однакових умов теплообмінник виходить компактнішим, ніж за прямотечії.",
        "construct": "Після теплового розрахунку виконують конструкційний: визначають прохідні перерізи, кількість труб, кількість ходів, довжину труб або змійовика, висоту змійовика і діаметри патрубків.",
        "hyd": "Гідравлічний розрахунок потрібний для визначення втрат тиску та потужності насосів або вентиляторів, що переміщують теплоносії через апарат.",
        "opt": "Оптимізація теплообмінника зводиться до пошуку мінімуму сумарних витрат на виготовлення й експлуатацію. Зростання швидкості підвищує тепловіддачу, але водночас збільшує гідравлічні втрати.",
        "check": "Перевірний розрахунок виконують для наявного апарата. Порівнюють наявну і потрібну різницю температур: якщо запас достатній, апарат забезпечує задане теплове навантаження.",
    },
    "en": {
        "mat": "## Lecture Notes",
        "h": ["General Information", "Classification of Heat Exchangers", "Heat Exchanger Designs", "Thermal Calculation of Heat Exchangers", "Design Calculation of Heat Exchangers", "Hydraulic Calculation of Heat Exchangers", "Optimization and Intensification of Heat Exchange", "Check Calculation of Heat Exchangers"],
        "intro": "Heating and cooling of liquids and gases are among the most common processes in bioengineering. For each process, the heating or cooling method, heat carrier and apparatus design must be selected from technological and economic considerations. The apparatuses used for these operations are heat exchangers.",
        "class": "By heat-transfer mode, heat exchangers are divided into surface and mixing types. In surface equipment the heat carriers are separated by a wall or alternately contact the same surface; in mixing equipment heat exchange occurs through direct contact. Industrial practice mainly uses recuperative surface heat exchangers.",
        "req": "The main requirements are a high overall heat-transfer coefficient, low hydraulic resistance, tightness, convenient cleaning, maintainability and compensation of thermal expansion.",
        "design": "Shell-and-tube heat exchangers can provide a large heat-transfer area in one unit. Carrier velocity is increased by multi-pass flow and segmental baffles. Tubes in tube sheets are often arranged on regular hexagons.",
        "other": "For small flow rates, tube-in-tube heat exchangers are used. Immersion and spray coil exchangers are simple but have relatively low heat-transfer intensity. Spiral and plate exchangers are compact; plate exchangers are especially common for sterilizing and cooling process liquids.",
        "thermal": "The design thermal calculation determines the required heat-transfer surface area. The heat duty, overall heat-transfer coefficient and mean temperature difference are found in sequence.",
        "balance": "If heat losses to the surroundings are small, the heat balance is written between hot and cold carriers. For carriers without phase change, enthalpy differences are replaced by heat capacity multiplied by temperature change.",
        "coeff": "The overall heat-transfer coefficient is determined through thermal resistances of the wall, deposits and heat emission on both sides. Specific criterion equations are used for individual apparatus designs.",
        "dt": "The mean temperature difference is evaluated as the logarithmic mean temperature difference. Counterflow uses heat carriers most fully, so the exchanger is more compact than in parallel flow under the same conditions.",
        "construct": "After the thermal calculation, the design calculation determines flow sections, tube number, pass number, tube or coil length, coil height and nozzle diameters.",
        "hyd": "The hydraulic calculation determines pressure losses and the power of pumps or fans moving the heat carriers through the apparatus.",
        "opt": "Optimization searches for the minimum total manufacturing and operating cost. Higher velocity improves heat emission but increases hydraulic losses.",
        "check": "The check calculation is performed for an existing apparatus. The available and required temperature differences are compared; if the margin is sufficient, the apparatus provides the specified heat duty.",
    },
    "de": {
        "mat": "## Vorlesungsskript",
        "h": ["Allgemeines", "Klassifikation von Waermeuebertragern", "Konstruktionen von Waermeuebertragern", "Thermische Berechnung von Waermeuebertragern", "Konstruktive Berechnung von Waermeuebertragern", "Hydraulische Berechnung von Waermeuebertragern", "Optimierung und Intensivierung des Waermeaustauschs", "Nachrechnungsberechnung von Waermeuebertragern"],
        "intro": "Erwaermen und Kuehlen von Fluessigkeiten und Gasen gehoeren zu den haeufigsten Prozessen der Bioverfahrenstechnik. Fuer jeden Prozess waehlt man Verfahren, Waermetraeger und Apparatekonstruktion nach technologischen und wirtschaftlichen Kriterien. Diese Apparate heissen Waermeuebertrager.",
        "class": "Nach der Art der Waermeuebertragung unterscheidet man Oberflaechen- und Mischwaermeuebertrager. Bei Oberflaechenapparaten sind die Medien durch eine Wand getrennt oder beruehren abwechselnd dieselbe Oberflaeche; bei Mischapparaten erfolgt der Austausch durch direkten Kontakt. In der Industrie ueberwiegen rekuperative Oberflaechenwaermeuebertrager.",
        "req": "Wichtig sind hoher Waermeuebergangskoeffizient, kleiner hydraulischer Widerstand, Dichtheit, gute Reinigbarkeit, Wartungsfreundlichkeit und Kompensation thermischer Laengenaenderungen.",
        "design": "Rohrbuendelwaermeuebertrager ermoeglichen grosse Waermeuebertragungsflaechen in einem Apparat. Die Geschwindigkeit wird durch Mehrwegfuehrung und Segmentleitbleche erhoeht. Rohre in Rohrplatten werden haeufig auf regelmaessigen Sechsecken angeordnet.",
        "other": "Bei kleinen Volumenstroemen verwendet man Doppelrohrwaermeuebertrager. Tauch- und berieselte Schlangenrohrwaermeuebertrager sind einfach, aber weniger intensiv. Spiral- und Plattenwaermeuebertrager sind kompakt; Plattenapparate sind besonders fuer Sterilisation und Kuehlung von Prozessfluessigkeiten verbreitet.",
        "thermal": "Die thermische Auslegungsrechnung bestimmt die erforderliche Waermeuebertragungsflaeche. Dazu werden Waermeleistung, Waermeuebergangskoeffizient und mittlere Temperaturdifferenz nacheinander berechnet.",
        "balance": "Bei kleinen Waermeverlusten wird die Bilanz zwischen heissem und kaltem Waermetraeger geschrieben. Ohne Phasenwechsel ersetzt man Enthalpiedifferenzen durch Waermekapazitaet mal Temperaturaenderung.",
        "coeff": "Der Waermeuebertragungskoeffizient ergibt sich aus den thermischen Widerstaenden von Wand, Verschmutzungen und Waermeuebergang auf beiden Seiten. Fuer bestimmte Bauarten nutzt man eigene Kriterialgleichungen.",
        "dt": "Die mittlere Temperaturdifferenz wird als logarithmische mittlere Temperaturdifferenz bestimmt. Gegenstrom nutzt die Waermetraeger am vollstaendigsten und fuehrt zu kompakteren Apparaten.",
        "construct": "Nach der thermischen Berechnung folgen Durchflussquerschnitte, Rohrzahl, Zahl der Wege, Rohr- oder Schlangenlaenge, Schlangenhoehe und Stutzendurchmesser.",
        "hyd": "Die hydraulische Berechnung liefert Druckverluste und die Leistung von Pumpen oder Ventilatoren fuer den Transport der Waermetraeger.",
        "opt": "Die Optimierung sucht minimale Gesamtaufwendungen fuer Herstellung und Betrieb. Hoehere Geschwindigkeit verbessert den Waermeuebergang, erhoeht aber die Druckverluste.",
        "check": "Die Nachrechnung wird fuer einen vorhandenen Apparat durchgefuehrt. Man vergleicht verfuegbare und erforderliche Temperaturdifferenz; bei ausreichender Reserve wird die geforderte Waermeleistung erreicht.",
    },
    "ru": {
        "mat": "## Конспект лекции",
        "h": ["Общие сведения", "Классификация теплообменников", "Конструкции теплообменников", "Тепловой расчет теплообменников", "Конструкционный расчет теплообменников", "Гидравлический расчет теплообменников", "Оптимизация и интенсификация теплообмена", "Поверочный расчет теплообменников"],
        "intro": "Нагревание и охлаждение жидкостей и газов относятся к наиболее распространенным процессам био-инжиниринга. Для каждого процесса выбирают технологически и экономически целесообразный способ, теплоноситель и конструкцию аппарата. Аппараты для этих операций называют теплообменниками.",
        "class": "По способу передачи теплоты теплообменники делят на поверхностные и смесительные. В поверхностных аппаратах теплоносители разделены стенкой или поочередно контактируют с одной поверхностью; в смесительных теплообмен происходит при непосредственном контакте сред. В промышленности чаще всего используют рекуперативные поверхностные теплообменники.",
        "req": "Основные требования: высокий коэффициент теплопередачи, малое гидравлическое сопротивление, герметичность, удобство очистки, ремонтопригодность и компенсация температурных удлинений.",
        "design": "Кожухотрубные теплообменники позволяют создать в одном аппарате большую поверхность теплообмена. Скорость теплоносителей повышают многоходовым движением и сегментными перегородками. Трубы в трубных решетках часто размещают по правильным шестиугольникам.",
        "other": "Для малых расходов применяют теплообменники типа «труба в трубе». Погружные и оросительные змеевиковые аппараты просты, но имеют сравнительно низкую интенсивность теплообмена. Спиральные и пластинчатые теплообменники компактны; пластинчатые аппараты особенно распространены для стерилизации и охлаждения технологических жидкостей.",
        "thermal": "Проектный тепловой расчет сводится к определению требуемой площади поверхности теплообмена. Последовательно находят тепловую нагрузку, коэффициент теплопередачи и среднюю разность температур.",
        "balance": "Если потери теплоты в окружающую среду малы, тепловой баланс записывают между горячим и холодным теплоносителями. Для теплоносителей без изменения агрегатного состояния энтальпии заменяют произведением теплоемкости на температуру.",
        "coeff": "Коэффициент теплопередачи определяют через термические сопротивления стенки, загрязнений и теплоотдачи с обеих сторон. Для отдельных конструкций применяют специальные критериальные уравнения.",
        "dt": "Среднюю разность температур определяют как среднелогарифмическую. Противоток использует теплоносители наиболее полно, поэтому аппарат получается компактнее, чем при прямотоке.",
        "construct": "После теплового расчета выполняют конструкционный: определяют проходные сечения, число труб, число ходов, длину труб или змеевика, высоту змеевика и диаметры патрубков.",
        "hyd": "Гидравлический расчет нужен для определения потерь давления и мощности насосов или вентиляторов, перемещающих теплоносители через аппарат.",
        "opt": "Оптимизация теплообменника сводится к поиску минимума суммарных затрат на изготовление и эксплуатацию. Рост скорости повышает теплоотдачу, но одновременно увеличивает гидравлические потери.",
        "check": "Поверочный расчет выполняют для существующего аппарата. Сравнивают имеющуюся и требуемую разность температур: если запас достаточен, аппарат обеспечивает заданную тепловую нагрузку.",
    },
}


def figures(lang: str, names: list[str]) -> str:
    items = dict(CAPTIONS[lang])
    out = []
    for name in names:
        cap = items[name]
        out.append(f"{fig(name, cap)}\n*{cap}*")
    return "\n\n".join(out)


def material(lang: str) -> str:
    t = TEXT[lang]
    h = t["h"]
    return f"""{t["mat"]}

### 7.1. {h[0]}

{t["intro"]}

### 7.2. {h[1]}

{t["class"]}

{t["req"]}

### 7.3. {h[2]}

{t["design"]}

{figures(lang, ["fig-7-1", "fig-7-2", "fig-7-3"])}

{E["7.1"]}

{E["7.2"]}

{E["7.3"]}

{E["7.4"]}

{t["other"]}

{figures(lang, ["fig-7-5", "fig-7-6", "fig-7-7", "fig-7-8", "fig-7-9", "fig-7-10", "fig-7-11"])}

### 7.4. {h[3]}

{t["thermal"]}

{E["7.5"]}

{t["balance"]}

{E["7.6"]}

{E["7.7"]}

{E["7.8"]}

{E["7.9"]}

{E["7.10"]}

{E["7.11"]}

{E["7.12"]}

{E["7.13"]}

{t["coeff"]}

{E["7.14"]}

{E["7.15"]}

{E["7.16"]}

{E["7.17"]}

{E["7.18"]}

{E["7.19"]}

{E["7.20"]}

{t["dt"]}

{figures(lang, ["fig-7-12"])}

{E["7.21"]}

{E["7.22"]}

{E["7.23"]}

{E["7.24"]}

{E["7.25"]}

### 7.5. {h[4]}

{t["construct"]}

{E["7.26"]}

{E["7.27"]}

{E["7.28"]}

{E["7.29"]}

{E["7.30"]}

{E["7.31"]}

{E["7.32"]}

{E["7.33"]}

{E["7.34"]}

{E["7.35"]}

{E["7.36"]}

### 7.6. {h[5]}

{t["hyd"]}

{E["7.37"]}

### 7.7. {h[6]}

{t["opt"]}

{E["7.38"]}

{E["7.39"]}

### 7.8. {h[7]}

{t["check"]}

{E["7.40"]}

{eq("Δt<sub>required</sub> = Q/(kF)", "") .replace("<span class=\"equation-number\">()</span>", "<span class=\"equation-number\"></span>")}
"""


SPLITS = {
    "uk": ("## Матеріал підручника", "## Після опрацювання"),
    "en": ("## Lecture Notes", "## After studying"),
    "de": ("## Vorlesungsskript", "## Nach dem Durcharbeiten"),
    "ru": ("## Конспект лекции", "## После изучения"),
}


for lang, (start_marker, end_marker) in SPLITS.items():
    path = COURSE / lang / SLUG
    text = path.read_text(encoding="utf-8")
    start = text.index(start_marker)
    end = text.index(end_marker, start)
    path.write_text(text[:start] + material(lang).rstrip() + "\n\n" + text[end:], encoding="utf-8")
    print(f"updated {lang}")
