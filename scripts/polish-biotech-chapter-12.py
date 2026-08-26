from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE = ROOT / "src" / "content" / "courses"
SLUG = "bioprocess-engineering/chapter-12-distillation.md"
IMG = "/images/courses/bioprocess-engineering/chapter-12"


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
    "p<sub>A</sub> = P<sub>A</sub>x<sub>A</sub>",
    "p = p<sub>A</sub> + p<sub>B</sub>",
    "Wx = (W - dW)(x - dx) + dWy",
    "dW/W = dx/(y - x)",
    "ln(W<sub>p</sub>/W<sub>k</sub>) = ∫<sub>xk</sub><sup>xp</sup> dx/(y - x)",
    "p = p<sub>A</sub> + p<sub>B</sub>",
    "m<sub>A</sub>/m<sub>B</sub> = p<sub>A</sub>M<sub>A</sub>/(p<sub>B</sub>M<sub>B</sub>)",
    "m<sub>v</sub> = m<sub>w</sub>p<sub>v</sub>M<sub>v</sub>/(p<sub>w</sub>M<sub>w</sub>)",
    "M = D + R",
    "Mx<sub>M</sub> = Dx<sub>D</sub> + Rx<sub>R</sub>",
    "D = M(x<sub>M</sub> - x<sub>R</sub>)/(x<sub>D</sub> - x<sub>R</sub>)",
    "R = M(x<sub>D</sub> - x<sub>M</sub>)/(x<sub>D</sub> - x<sub>R</sub>)",
    "Gy = fx + Dx<sub>D</sub>",
    "y = (f/G)x + (D/G)x<sub>D</sub>",
    "y = [ν/(ν + 1)]x + x<sub>D</sub>/(ν + 1)",
    "Lx = Gy + Rx<sub>R</sub>",
    "y = (L/G)x - (R/G)x<sub>R</sub>",
    "y = [L/(L - R)]x - [R/(L - R)]x<sub>R</sub>",
    "y = (L/G)(x - x<sub>R</sub>)",
    "y = f(x)",
    "y = (ν/(ν + 1))x + x<sub>D</sub>/(ν + 1)",
    "x = [(ν + 1)y - x<sub>D</sub>]/ν",
    "y = Ax + B",
    "B<sub>max</sub> = x<sub>D</sub>/(ν<sub>min</sub> + 1)",
    "ν = x<sub>D</sub>/B - 1",
    "ν<sub>min</sub> = (x<sub>D</sub> - y<sub>M</sub>)/(y<sub>M</sub> - x<sub>M</sub>)",
    "y = A<sub>1</sub>x - B<sub>1</sub>",
    "D<sub>col</sub> = √(4V/(πw))",
    "Mi<sub>M</sub> + Pi<sub>P</sub> + fi<sub>f</sub> = Gi<sub>G</sub> + Ri<sub>R</sub> + Q",
    "P = [M(i<sub>R</sub> - i<sub>M</sub>) + D(ν + 1)i<sub>G</sub> - D(νi<sub>f</sub> + i<sub>D</sub>) + Q]/(i<sub>P</sub> - i<sub>R</sub>)",
    "Mi<sub>M</sub> + Pi<sub>P</sub> + fi<sub>f</sub> = Gi<sub>G</sub> + Ri<sub>R</sub> + Pi<sub>P</sub> + Q",
    "P = [M(i<sub>R</sub> - i<sub>M</sub>) + D(ν + 1)i<sub>G</sub> - D(νi<sub>f</sub> + i<sub>D</sub>) + Q<sub>loss</sub>]/(i<sub>P</sub> - i<sub>R</sub>)",
    "Mi<sub>M</sub> + Pi<sub>P</sub> = Di<sub>D</sub> + Ri<sub>R</sub> + Q",
    "P = [M(i<sub>R</sub> - i<sub>M</sub>) + D(i<sub>D</sub> - i<sub>R</sub>) + Q<sub>loss</sub>]/(i<sub>P</sub> - i<sub>R</sub>)",
    "Q<sub>def</sub> = G(i<sub>G</sub> - i<sub>D</sub>) = D(ν + 1)(i<sub>G</sub> - i<sub>D</sub>)",
    "Q<sub>cond</sub> = (G - D)(i<sub>G</sub> - i<sub>D</sub>) = Dν(i<sub>G</sub> - i<sub>D</sub>)",
]

FIG_FILES = [
    "fig-12-1.webp", "fig-12-2.webp", "fig-12-3.webp", "fig-12-4.webp",
    "fig-12-5.webp", "fig-12-6.webp", "fig-12-7.webp", "fig-12-8-9.webp",
    "fig-12-10.webp", "fig-12-11.webp", "fig-12-12.webp", "fig-12-13.webp",
    "fig-12-14.webp", "fig-12-15.webp", "fig-12-16.webp", "fig-12-17.webp",
    "fig-12-18.webp",
]

CAPTIONS = {
    "uk": ("Рис.", [
        "Криві фазової рівноваги", "Одноразова проста перегонка",
        "Проста перегонка з дефлегмацією", "Ректифікаційна установка періодичної дії",
        "Схеми ректифікаційних установок безперервної дії",
        "Матеріальні потоки повної ректифікаційної колони",
        "Визначення кількості теоретичних тарілок",
        "Вплив флегмового числа на кількість тарілок", "Схеми теплових потоків колон",
        "Конструкції тарілок", "Схема насадкової колони", "Схема плівкової колони",
        "Залежність ККД тарілок від швидкості пари",
        "Схеми розділення багатокомпонентних сумішей",
        "Установки для ректифікації спиртових сумішей",
        "Схеми екстрактивної та сольової ректифікації",
        "Схема установки для азеотропної ректифікації"]),
    "en": ("Fig.", [
        "Phase-equilibrium curves", "Single-stage simple distillation",
        "Simple distillation with reflux", "Batch rectification unit",
        "Continuous rectification arrangements", "Material flows in a complete rectification column",
        "Determining the number of theoretical plates", "Effect of reflux ratio on plate number",
        "Heat-flow schemes of columns", "Tray designs", "Packed column scheme",
        "Film column scheme", "Tray efficiency versus vapour velocity",
        "Separation schemes for multicomponent mixtures",
        "Rectification units for alcohol mixtures", "Extractive and salt rectification schemes",
        "Azeotropic rectification unit"]),
    "de": ("Abb.", [
        "Phasengleichgewichtskurven", "Einfache einstufige Destillation",
        "Einfache Destillation mit Ruecklauf", "Diskontinuierliche Rektifikationsanlage",
        "Kontinuierliche Rektifikationsschemata", "Stoffstroeme einer vollstaendigen Kolonne",
        "Bestimmung der theoretischen Bodenzahl", "Einfluss des Ruecklaufverhaeltnisses",
        "Waermestroeme in Kolonnen", "Bodenkonstruktionen", "Packungskolonne",
        "Filmkolonne", "Bodenwirkungsgrad in Abhaengigkeit von der Dampfgeschwindigkeit",
        "Trennschemata fuer Mehrkomponentengemische",
        "Rektifikationsanlagen fuer Alkoholgemische", "Extraktive und Salzrektifikation",
        "Azeotrope Rektifikation"]),
    "ru": ("Рис.", [
        "Кривые фазового равновесия", "Однократная простая перегонка",
        "Простая перегонка с дефлегмацией", "Ректификационная установка периодического действия",
        "Схемы ректификационных установок непрерывного действия",
        "Материальные потоки полной ректификационной колонны",
        "Определение числа теоретических тарелок", "Влияние флегмового числа на число тарелок",
        "Схемы тепловых потоков колонн", "Конструкции тарелок", "Схема насадочной колонны",
        "Схема пленочной колонны", "Зависимость КПД тарелок от скорости пара",
        "Схемы разделения многокомпонентных смесей",
        "Установки для ректификации спиртовых смесей",
        "Схемы экстрактивной и солевой ректификации",
        "Схема установки для азеотропной ректификации"]),
}

TEXT = {
    "uk": {
        "start": "## Матеріал підручника",
        "end": "## Після опрацювання розділу студент має вміти",
        "title": "## Матеріал підручника",
        "intro": "Матеріал розділу 12 подано як послідовну лекцію: фазова рівновага, проста перегонка, ректифікація, апаратурні рішення та спеціальні варіанти розділення.",
        "sections": [
            ("12.1. Фазова рівновага", "Перегонка розділяє киплячі рідкі суміші завдяки різній леткості компонентів. Легколеткий компонент переходить у пару інтенсивніше, тому рівноважна парова фаза збагачується ним порівняно з рідиною. Для ідеальних сумішей використовують закони Рауля і Дальтона, а для реальних систем - експериментальні криві рівноваги."),
            ("12.2. Проста перегонка", "Проста перегонка є періодичним процесом часткового випаровування суміші з конденсацією пари. Вона придатна для грубого розділення або для систем з істотно різною леткістю компонентів. Дефлегмація повертає частину конденсату і покращує збагачення пари легколетким компонентом."),
            ("12.3. Ректифікація бінарних сумішей", "Ректифікація багаторазово повторює контакт нерівноважних потоків пари і рідини в колоні. Робочі лінії концентраційної та виснажної частин, флегмове число і кількість теоретичних тарілок визначають ступінь розділення та витрати енергії."),
            ("12.4. Конструкції ректифікаційних апаратів", "Ректифікаційні колони бувають тарілчастими, насадковими і плівковими. Вибір залежить від продуктивності, допустимого гідравлічного опору, схильності середовища до забруднення, діапазону навантажень і вимог до якості розділення."),
            ("12.5. Ректифікація багатокомпонентних сумішей", "Для багатокомпонентних сумішей одну колону зазвичай використовують для поділу на два продукти або фракції. Повне розділення n компонентів потребує системи колон, а в спиртових виробництвах часто відбирають головну, сивушну фракції, ректифікований спирт і кубовий залишок."),
            ("12.6. Екстрактивна ректифікація", "Екстрактивна ректифікація застосовує додатковий висококиплячий розділювальний агент, який змінює відносну леткість компонентів і дає змогу розділяти близькокиплячі або азеотропні суміші."),
            ("12.7. Азеотропна ректифікація", "Азеотропна ректифікація використовує третій компонент, що утворює новий азеотроп і виводить один із компонентів із системи. Після конденсації та розшарування фази повертають або відбирають згідно з технологічною схемою."),
        ],
    },
    "en": {
        "start": "## Lecture Notes",
        "end": "## After studying this chapter, students should be able to",
        "title": "## Lecture Notes",
        "intro": "Chapter 12 is presented as a continuous lecture: phase equilibrium, simple distillation, rectification, equipment choices and special separation methods.",
        "sections": [
            ("12.1. Phase Equilibrium", "Distillation separates boiling liquid mixtures because components have different volatility. The more volatile component is enriched in the vapour phase. Ideal mixtures are described with Raoult's and Dalton's laws; real systems require equilibrium data."),
            ("12.2. Simple Distillation", "Simple distillation is a batch process of partial evaporation followed by condensation. It is suitable for rough separation or mixtures with strongly different volatility. Reflux improves vapour enrichment."),
            ("12.3. Rectification of Binary Mixtures", "Rectification repeatedly contacts non-equilibrium vapour and liquid streams inside a column. Operating lines, reflux ratio and theoretical plate count define separation quality and energy demand."),
            ("12.4. Rectification Equipment", "Rectification columns may be tray, packed or film columns. Selection depends on capacity, pressure drop, fouling tendency, operating range and required separation quality."),
            ("12.5. Rectification of Multicomponent Mixtures", "For multicomponent mixtures, one column usually produces two products or fractions. Complete separation of n components requires a column system."),
            ("12.6. Extractive Rectification", "Extractive rectification uses a high-boiling separating agent to change relative volatility and separate close-boiling or azeotropic mixtures."),
            ("12.7. Azeotropic Rectification", "Azeotropic rectification introduces a third component that forms a new azeotrope and enables component withdrawal after condensation and phase separation."),
        ],
    },
    "de": {
        "start": "## Vorlesungsskript",
        "end": "## Nach dem Durcharbeiten dieses Kapitels sollen Studierende",
        "title": "## Vorlesungsskript",
        "intro": "Kapitel 12 ist als zusammenhaengende Vorlesung aufgebaut: Phasengleichgewicht, einfache Destillation, Rektifikation, Apparatewahl und spezielle Trennverfahren.",
        "sections": [
            ("12.1. Phasengleichgewicht", "Destillation trennt siedende Fluessigkeitsgemische wegen unterschiedlicher Fluechtigkeit. Die leichter fluechtige Komponente reichert sich in der Dampfphase an. Ideale Gemische folgen Raoult und Dalton, reale Systeme brauchen Gleichgewichtsdaten."),
            ("12.2. Einfache Destillation", "Einfache Destillation ist ein diskontinuierlicher Prozess aus teilweiser Verdampfung und Kondensation. Ruecklauf verbessert die Anreicherung des Dampfes."),
            ("12.3. Rektifikation binaerer Gemische", "Rektifikation wiederholt den Kontakt von nicht im Gleichgewicht befindlichen Dampf- und Fluessigkeitsstroemen in einer Kolonne. Arbeitslinien, Ruecklaufverhaeltnis und theoretische Bodenzahl bestimmen die Trennung."),
            ("12.4. Rektifikationsapparate", "Kolonnen koennen als Boden-, Packungs- oder Filmkolonnen ausgefuehrt sein. Die Auswahl richtet sich nach Leistung, Druckverlust, Verschmutzungsneigung und Trennaufgabe."),
            ("12.5. Rektifikation von Mehrkomponentengemischen", "Eine Kolonne liefert bei Mehrkomponentengemischen meist zwei Produkte oder Fraktionen. Vollstaendige Trennung erfordert ein Kolonnensystem."),
            ("12.6. Extraktive Rektifikation", "Extraktive Rektifikation nutzt einen hochsiedenden Trennstoff, der die relative Fluechtigkeit aendert und nahe siedende oder azeotrope Gemische trennbar macht."),
            ("12.7. Azeotrope Rektifikation", "Bei azeotroper Rektifikation wird eine dritte Komponente eingesetzt, die ein neues Azeotrop bildet und nach Kondensation sowie Phasentrennung die Abtrennung erlaubt."),
        ],
    },
    "ru": {
        "start": "## Конспект лекции",
        "end": "## После изучения раздела студент должен уметь",
        "title": "## Конспект лекции",
        "intro": "Раздел 12 подан как последовательная лекция: фазовое равновесие, простая перегонка, ректификация, аппаратурные решения и специальные способы разделения.",
        "sections": [
            ("12.1. Фазовое равновесие", "Перегонка разделяет кипящие жидкие смеси благодаря различной летучести компонентов. Легколетучий компонент обогащает паровую фазу. Для идеальных смесей применяют законы Рауля и Дальтона, для реальных - экспериментальные равновесные данные."),
            ("12.2. Простая перегонка", "Простая перегонка - периодический процесс частичного испарения смеси с последующей конденсацией пара. Она подходит для грубого разделения или систем с сильно различной летучестью. Дефлегмация улучшает обогащение пара."),
            ("12.3. Ректификация бинарных смесей", "Ректификация многократно повторяет контакт неравновесных потоков пара и жидкости в колонне. Рабочие линии, флегмовое число и число теоретических тарелок определяют качество разделения и расход энергии."),
            ("12.4. Конструкции ректификационных аппаратов", "Ректификационные колонны бывают тарельчатыми, насадочными и пленочными. Выбор зависит от производительности, гидравлического сопротивления, загрязнения среды и требуемого качества разделения."),
            ("12.5. Ректификация многокомпонентных смесей", "Для многокомпонентных смесей одна колонна обычно дает два продукта или фракции. Полное разделение n компонентов требует системы колонн."),
            ("12.6. Экстрактивная ректификация", "Экстрактивная ректификация использует высококипящий разделяющий агент, изменяющий относительную летучесть компонентов."),
            ("12.7. Азеотропная ректификация", "Азеотропная ректификация вводит третий компонент, образующий новый азеотроп и позволяющий вывести один из компонентов после конденсации и разделения фаз."),
        ],
    },
}


def build(locale):
    data = TEXT[locale]
    lines = [data["title"], "", data["intro"]]
    formula_i = 0
    fig_i = 0
    formulas_per_section = [2, 6, 28, 0, 0, 0, 0]
    figs_per_section = [1, 2, 6, 4, 2, 1, 1]
    prefix, captions = CAPTIONS[locale]
    fig_nums = ["1", "2", "3", "4", "5", "6", "7", "8-9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]

    for section_i, (title, text) in enumerate(data["sections"]):
        lines += ["", f"### {title}", "", text]
        for _ in range(formulas_per_section[section_i]):
            lines += ["", eq(FORMULAS[formula_i], f"(12.{formula_i + 1})")]
            formula_i += 1
        for _ in range(figs_per_section[section_i]):
            caption = f"{prefix} 12.{fig_nums[fig_i]}. {captions[fig_i]}"
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
    path.write_text(replace_between(original, data["start"], data["end"], build(locale)), encoding="utf-8")
    print(f"updated {path}")
