from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE = ROOT / "src" / "content" / "courses"
SLUG = "bioprocess-engineering/chapter-13-sorption-processes.md"
IMG = "/images/courses/bioprocess-engineering/chapter-13"


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
    "x = pψ",
    "p = yP",
    "y = mx",
    "G(y<sub>p</sub> - y<sub>k</sub>) = L(x<sub>k</sub> - x<sub>p</sub>)",
    "L/G = (y<sub>p</sub> - y<sub>k</sub>)/(x<sub>k</sub> - x<sub>p</sub>) = q",
    "y = (L/G)x + (Gy<sub>p</sub> - Lx<sub>k</sub>)/G",
    "M = kFΔCτ",
    "K<sub>y</sub> = 1/(1/β<sub>g</sub> + m/β<sub>l</sub>)",
    "K<sub>x</sub> = 1/(1/(mβ<sub>g</sub>) + 1/β<sub>l</sub>)",
    "H = Gm/(kS)",
    "m = ∫ dy/(y - y*)",
    "x* = f(y)",
    "x* = Ky<sup>1/n</sup>",
    "(x* - x)/(x* - x<sub>0</sub>) = f(Bi, Fo, q)",
    "Nu′ = 46.25 · 10<sup>-6</sup>Re<sup>1.67</sup>",
    "τ = kH - τ<sub>0</sub>",
    "H = ∫ dy/[Sk(y - y*)] = hm",
    "m = Σm<sub>i</sub>",
    "m<sub>i</sub> = 2(y<sub>i</sub> - y<sub>i-1</sub>)/[(y<sub>i</sub> - y*<sub>i</sub>) + (y<sub>i-1</sub> - y*<sub>i-1</sub>)]",
]

FIG_FILES = [f"fig-13-{i}.webp" for i in range(1, 18)]

CAPTIONS = {
    "uk": ("Рис.", [
        "Крива абсорбційної рівноваги", "Схема протитечійного абсорбера",
        "Схема каскадних абсорберів", "Схема трубчастого абсорбера",
        "Схема насадкового абсорбера", "Типи насадок",
        "Схема поверхневого абсорбера", "Схема барботажного абсорбера",
        "Схема розпилювального абсорбера", "Схема механічного абсорбера",
        "Три зони процесу адсорбції в адсорбері безперервної дії",
        "Графік визначення кількості ступенів концентрації",
        "Схема адсорбера періодичної дії", "Кільцевий адсорбер",
        "Адсорбер безперервної дії з рухомим шаром",
        "Адсорбер періодичної дії з киплячим шаром",
        "Тарілчастий адсорбер безперервної дії з псевдозрідженим шаром"]),
    "en": ("Fig.", [
        "Absorption equilibrium curve", "Counter-current absorber scheme",
        "Cascade absorbers", "Tubular absorber", "Packed absorber",
        "Packing types", "Surface absorber", "Bubble-tray absorber",
        "Spray absorber", "Mechanical absorber",
        "Three adsorption zones in a continuous adsorber",
        "Graphical determination of concentration stages",
        "Batch adsorber", "Annular adsorber", "Moving-bed continuous adsorber",
        "Batch fluidized-bed adsorber", "Tray continuous adsorber with a fluidized bed"]),
    "de": ("Abb.", [
        "Absorptionsgleichgewichtskurve", "Gegenstromabsorber",
        "Kaskadenabsorber", "Rohrabsorber", "Packungsabsorber",
        "Packungsarten", "Oberflaechenabsorber", "Blasenbodenabsorber",
        "Spruehabsorber", "Mechanischer Absorber",
        "Drei Adsorptionszonen in einem kontinuierlichen Adsorber",
        "Grafische Bestimmung der Konzentrationsstufen",
        "Diskontinuierlicher Adsorber", "Ringadsorber", "Kontinuierlicher Wanderbettadsorber",
        "Diskontinuierlicher Wirbelschichtadsorber", "Bodenadsorber mit Wirbelschicht"]),
    "ru": ("Рис.", [
        "Кривая абсорбционного равновесия", "Схема противоточного абсорбера",
        "Схема каскадных абсорберов", "Схема трубчатого абсорбера",
        "Схема насадочного абсорбера", "Типы насадок",
        "Схема поверхностного абсорбера", "Схема барботажного абсорбера",
        "Схема распылительного абсорбера", "Схема механического абсорбера",
        "Три зоны процесса адсорбции в адсорбере непрерывного действия",
        "График определения числа ступеней концентрации",
        "Схема адсорбера периодического действия", "Кольцевой адсорбер",
        "Адсорбер непрерывного действия с движущимся слоем",
        "Адсорбер периодического действия с кипящим слоем",
        "Тарельчатый адсорбер непрерывного действия с псевдоожиженным слоем"]),
}

TEXT = {
    "uk": {
        "start": "## Матеріал підручника",
        "end": "## Після опрацювання розділу студент має вміти",
        "title": "## Матеріал підручника",
        "intro": "Сорбційні процеси охоплюють поглинання компонентів газів, парів або розчинів рідкими чи твердими поглиначами. У біотехнологічних виробництвах вони потрібні для газоочищення, насичення середовищ, вилучення цільових речовин і тонкого очищення продуктів.",
        "sections": [
            ("13.1. Абсорбція", "Абсорбція - поглинання компонента газової або парової суміші рідким абсорбентом. Рушійною силою є відхилення робочої концентрації від рівноважної. На швидкість процесу впливають тиск, температура, площа контакту фаз, інтенсивність перемішування і взаємна розчинність компонентів."),
            ("13.1.1. Конструкції абсорберів", "Абсорбери мають забезпечити розвинену поверхню контакту газу й рідини та потрібний час взаємодії. Використовують насадкові, поверхневі, барботажні, розпилювальні, трубчасті, каскадні та механічні апарати."),
            ("13.2. Адсорбція", "Адсорбція - вибіркове поглинання компонентів поверхнею твердого адсорбенту. Процес описують рівноважними ізотермами, кінетикою масоперенесення в зерні та шарі адсорбенту, а також часом захисної дії шару."),
            ("13.2.1. Конструкції адсорберів", "Адсорбери бувають періодичної та безперервної дії, з нерухомим, рухомим або псевдозрідженим шаром. Конструкцію вибирають за продуктивністю, регенерацією адсорбенту, гідравлічним опором і вимогами до очищення."),
        ],
    },
    "en": {
        "start": "## Lecture Notes",
        "end": "## After studying this chapter, students should be able to",
        "title": "## Lecture Notes",
        "intro": "Sorption processes remove components from gases, vapours or solutions using liquid or solid sorbents. In biotechnology they support gas cleaning, medium saturation, product recovery and fine purification.",
        "sections": [
            ("13.1. Absorption", "Absorption is the uptake of a gas or vapour component by a liquid absorbent. The driving force is the difference between operating and equilibrium concentrations. Rate depends on pressure, temperature, interfacial area and phase mixing."),
            ("13.1.1. Absorber Designs", "Absorbers must provide a developed gas-liquid contact surface and sufficient residence time. Packed, surface, bubble, spray, tubular, cascade and mechanical apparatuses are used."),
            ("13.2. Adsorption", "Adsorption is selective uptake of components by the surface of a solid adsorbent. It is described by equilibrium isotherms, mass-transfer kinetics in the particle and bed, and protective-bed action time."),
            ("13.2.1. Adsorber Designs", "Adsorbers may be batch or continuous, with fixed, moving or fluidized beds. Selection depends on productivity, adsorbent regeneration, pressure drop and purification requirements."),
        ],
    },
    "de": {
        "start": "## Vorlesungsskript",
        "end": "## Nach dem Durcharbeiten dieses Kapitels sollen Studierende",
        "title": "## Vorlesungsskript",
        "intro": "Sorption entfernt Komponenten aus Gasen, Daempfen oder Loesungen mit fluessigen oder festen Sorbentien. In biotechnologischen Prozessen dient sie der Gasreinigung, Medienbeladung, Stoffgewinnung und Feinreinigung.",
        "sections": [
            ("13.1. Absorption", "Absorption ist die Aufnahme eines Gas- oder Dampfbestandteils durch ein fluessiges Absorptionsmittel. Die Triebkraft ist die Differenz zwischen Arbeits- und Gleichgewichtskonzentration."),
            ("13.1.1. Absorberbauarten", "Absorber muessen eine grosse Kontaktflaeche und ausreichende Verweilzeit bereitstellen. Eingesetzt werden Packungs-, Oberflaechen-, Blasen-, Sprueh-, Rohr-, Kaskaden- und mechanische Apparate."),
            ("13.2. Adsorption", "Adsorption ist die selektive Aufnahme von Komponenten an der Oberflaeche eines festen Adsorbens. Sie wird durch Isothermen, Stofftransportkinetik und Schutzzeit des Bettes beschrieben."),
            ("13.2.1. Adsorberbauarten", "Adsorber arbeiten diskontinuierlich oder kontinuierlich, mit festem, bewegtem oder wirbelndem Bett. Die Auswahl haengt von Leistung, Regeneration, Druckverlust und Reinigungsziel ab."),
        ],
    },
    "ru": {
        "start": "## Конспект лекции",
        "end": "## После изучения раздела студент должен уметь",
        "title": "## Конспект лекции",
        "intro": "Сорбционные процессы охватывают поглощение компонентов газов, паров или растворов жидкими либо твердыми сорбентами. В биотехнологии они нужны для газоочистки, насыщения сред, извлечения целевых веществ и тонкой очистки продуктов.",
        "sections": [
            ("13.1. Абсорбция", "Абсорбция - поглощение компонента газовой или паровой смеси жидким абсорбентом. Движущая сила - отклонение рабочей концентрации от равновесной. Скорость зависит от давления, температуры, площади контакта фаз и перемешивания."),
            ("13.1.1. Конструкции абсорберов", "Абсорберы должны обеспечивать развитую поверхность контакта газа и жидкости и нужное время взаимодействия. Используют насадочные, поверхностные, барботажные, распылительные, трубчатые, каскадные и механические аппараты."),
            ("13.2. Адсорбция", "Адсорбция - выборочное поглощение компонентов поверхностью твердого адсорбента. Процесс описывают изотермами равновесия, кинетикой массопереноса и временем защитного действия слоя."),
            ("13.2.1. Конструкции адсорберов", "Адсорберы бывают периодического и непрерывного действия, с неподвижным, движущимся или псевдоожиженным слоем. Выбор зависит от производительности, регенерации, гидравлического сопротивления и требований к очистке."),
        ],
    },
}


def build(locale):
    data = TEXT[locale]
    lines = [data["title"], "", data["intro"]]
    formula_i = 0
    fig_i = 0
    formulas_per_section = [11, 0, 8, 0]
    figs_per_section = [2, 8, 2, 5]
    prefix, captions = CAPTIONS[locale]
    for section_i, (title, text) in enumerate(data["sections"]):
        lines += ["", f"### {title}", "", text]
        for _ in range(formulas_per_section[section_i]):
            lines += ["", eq(FORMULAS[formula_i], f"(13.{formula_i + 1})")]
            formula_i += 1
        for _ in range(figs_per_section[section_i]):
            caption = f"{prefix} 13.{fig_i + 1}. {captions[fig_i]}"
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
