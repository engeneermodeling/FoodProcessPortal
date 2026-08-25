from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE = ROOT / "src" / "content" / "courses"
SLUG = "bioprocess-engineering/chapter-09-condensation.md"


def eq(expr: str, num: str = "") -> str:
    number = f"({num})" if num else ""
    return '<div class="equation-block">\n' f'  <span class="equation-main">{expr}</span>\n' f'  <span class="equation-number">{number}</span>\n' '</div>'


def fig(name: str, alt: str) -> str:
    return f"![{alt}](/images/courses/bioprocess-engineering/chapter-09/{name}.webp)"


E = {
    "9.1": eq("Wc<sub>w</sub>(t<sub>w,out</sub> - t<sub>w,in</sub>) = Q<sub>1</sub> + Q<sub>2</sub> + Q<sub>3</sub> = Q", "9.1"),
    "9.2": eq("Q<sub>1</sub> = Dc<sub>p</sub>(t<sub>p</sub> - t<sub>s</sub>)", "9.2"),
    "9.3": eq("Q<sub>2</sub> = Dr", "9.3"),
    "9.4": eq("Q<sub>3</sub> = Dc<sub>c</sub>(t<sub>s</sub> - t<sub>c</sub>)", "9.4"),
    "9.5": eq("Q<sub>3</sub> = Wc<sub>w</sub>(t<sub>w1</sub> - t<sub>w,in</sub>)", "9.5"),
    "9.6": eq("t<sub>w1</sub> = t<sub>w,in</sub> + Q<sub>3</sub>/(Wc<sub>w</sub>)", "9.6"),
    "9.7": eq("Q<sub>1</sub> = Wc<sub>w</sub>(t<sub>w,out</sub> - t<sub>w2</sub>)", "9.7"),
    "9.8": eq("t<sub>w2</sub> = t<sub>w,out</sub> - Q<sub>1</sub>/(Wc<sub>w</sub>)", "9.8"),
    "lmtd": eq("Δt<sub>m</sub> = (Δt<sub>max</sub> - Δt<sub>min</sub>)/ln(Δt<sub>max</sub>/Δt<sub>min</sub>)"),
    "area": eq("F<sub>1</sub> = Q<sub>1</sub>/(k<sub>1</sub>Δt′<sub>m</sub>); F<sub>2</sub> = Q<sub>2</sub>/(k<sub>2</sub>Δt″<sub>m</sub>); F<sub>3</sub> = Q<sub>3</sub>/(k<sub>3</sub>Δt‴<sub>m</sub>)"),
    "9.9": eq("Di″ + Wc<sub>w</sub>t<sub>w,in</sub> = (D + W)c<sub>w</sub>t<sub>w,out</sub>", "9.9"),
    "9.10": eq("W = D(i″ - c<sub>w</sub>t<sub>w,out</sub>)/(c<sub>w</sub>(t<sub>w,out</sub> - t<sub>w,in</sub>))", "9.10"),
    "9.11": eq("W/D = (i″ - c<sub>w</sub>t<sub>w,out</sub>)/(c<sub>w</sub>(t<sub>w,out</sub> - t<sub>w,in</sub>)) = m", "9.11"),
    "air": eq("m<sub>air</sub> = 0.001(0.025W + 10D)"),
    "9.12": eq("t<sub>air</sub> = t<sub>w,in</sub> + 0.1(t<sub>w,out</sub> - t<sub>w,in</sub>) + 4", "9.12"),
    "9.13": eq("p<sub>air</sub> = p<sub>total</sub> - p<sub>vapor</sub>", "9.13"),
    "9.14": eq("V<sub>air</sub> = 288m<sub>air</sub>(273 + t<sub>air</sub>)/p<sub>air</sub>", "9.14"),
    "9.15": eq("d<sub>steam</sub> = 1.13√(D/(ρw))", "9.15"),
    "9.16": eq("H = 10.33p<sub>vac</sub> + w<sup>2</sup>(1 + Σζ + λl/d)/(2g) + 0.5", "9.16"),
    "9.17": eq("d<sub>bar</sub> = 1.13√((D + W)/(ρw))", "9.17"),
}

CAPTIONS = {
    "uk": [("fig-9-1", "Рис. 9.1. Схематичне зображення процесу в конденсаторі"), ("fig-9-2", "Рис. 9.2. Схема мокрого конденсатора"), ("fig-9-3", "Рис. 9.3. Схема барометричного сухого конденсатора"), ("fig-9-4", "Рис. 9.4. Схема двоступінчастого барометричного конденсатора")],
    "en": [("fig-9-1", "Fig. 9.1. Process scheme in a condenser"), ("fig-9-2", "Fig. 9.2. Wet condenser scheme"), ("fig-9-3", "Fig. 9.3. Barometric dry condenser scheme"), ("fig-9-4", "Fig. 9.4. Two-stage barometric condenser scheme")],
    "de": [("fig-9-1", "Abb. 9.1. Prozessschema in einem Kondensator"), ("fig-9-2", "Abb. 9.2. Schema eines Nasskondensators"), ("fig-9-3", "Abb. 9.3. Schema eines barometrischen Trockenkondensators"), ("fig-9-4", "Abb. 9.4. Schema eines zweistufigen barometrischen Kondensators")],
    "ru": [("fig-9-1", "Рис. 9.1. Схематическое изображение процесса в конденсаторе"), ("fig-9-2", "Рис. 9.2. Схема мокрого конденсатора"), ("fig-9-3", "Рис. 9.3. Схема барометрического сухого конденсатора"), ("fig-9-4", "Рис. 9.4. Схема двухступенчатого барометрического конденсатора")],
}

TEXT = {
    "uk": ("## Матеріал підручника", ["Загальні відомості", "Поверхневі конденсатори", "Конденсатори змішування"], "Конденсацією називають перетворення пари на рідину. Процес супроводжується різким зменшенням об'єму, тому в замкнених системах його використовують для створення вакууму. Розрізняють плівкову і краплинну конденсацію; у практиці застосовують поверхневі конденсатори та конденсатори змішування.", "Поверхневі конденсатори потрібні тоді, коли конденсат слід отримати чистим. Якщо в апарат надходить перегріта пара, процес умовно поділяють на три зони: охолодження перегрітої пари, власне конденсацію і охолодження конденсату.", "У конденсаторах змішування пара конденсується на поверхні крапель, струмин або плівок охолодної води. Їх застосовують як допоміжні апарати для створення вакууму у випарних і фільтраційних установках."),
    "en": ("## Lecture Notes", ["General Information", "Surface Condensers", "Mixing Condensers"], "Condensation is the transformation of vapor into liquid. It is accompanied by a sharp decrease in volume, so it is used to create vacuum in closed systems. Film and dropwise condensation are distinguished; practical equipment includes surface condensers and mixing condensers.", "Surface condensers are used when clean condensate must be obtained. If superheated vapor enters the apparatus, the process is divided into three zones: cooling of superheated vapor, condensation and cooling of condensate.", "In mixing condensers, vapor condenses on droplets, jets or films of cooling water. They are used as auxiliary devices for producing vacuum in evaporation and filtration units."),
    "de": ("## Vorlesungsskript", ["Allgemeines", "Oberflaechenkondensatoren", "Mischkondensatoren"], "Kondensation ist die Umwandlung von Dampf in Fluessigkeit. Sie ist mit einer starken Volumenabnahme verbunden und wird deshalb zur Vakuumerzeugung genutzt. Man unterscheidet Film- und Tropfenkondensation; technisch verwendet man Oberflaechen- und Mischkondensatoren.", "Oberflaechenkondensatoren verwendet man, wenn reines Kondensat benoetigt wird. Bei ueberhitztem Dampf teilt man den Prozess in drei Zonen: Abkuehlung des Dampfes, Kondensation und Abkuehlung des Kondensats.", "In Mischkondensatoren kondensiert Dampf an Tropfen, Strahlen oder Filmen von Kuehlwasser. Sie dienen als Hilfsapparate zur Vakuumerzeugung in Verdampfungs- und Filtrationsanlagen."),
    "ru": ("## Конспект лекции", ["Общие сведения", "Поверхностные конденсаторы", "Конденсаторы смешивания"], "Конденсацией называют превращение пара в жидкость. Процесс сопровождается резким уменьшением объема, поэтому в замкнутых системах его используют для создания вакуума. Различают пленочную и капельную конденсацию; на практике применяют поверхностные конденсаторы и конденсаторы смешивания.", "Поверхностные конденсаторы нужны тогда, когда конденсат должен быть чистым. Если в аппарат поступает перегретый пар, процесс условно делят на три зоны: охлаждение перегретого пара, конденсацию и охлаждение конденсата.", "В конденсаторах смешивания пар конденсируется на поверхности капель, струй или пленок охлаждающей воды. Их применяют как вспомогательные аппараты для создания вакуума в выпарных и фильтрационных установках."),
}


def figures(lang, names):
    caps = dict(CAPTIONS[lang])
    return "\n\n".join(f"{fig(n, caps[n])}\n*{caps[n]}*" for n in names)


def material(lang):
    mat, h, p1, p2, p3 = TEXT[lang]
    return f"""{mat}

### 9.1. {h[0]}

{p1}

### 9.2. {h[1]}

{p2}

{figures(lang, ["fig-9-1"])}

{E["9.1"]}

{E["9.2"]}

{E["9.3"]}

{E["9.4"]}

{E["9.5"]}

{E["9.6"]}

{E["9.7"]}

{E["9.8"]}

{E["lmtd"]}

{E["area"]}

### 9.3. {h[2]}

{p3}

{figures(lang, ["fig-9-2", "fig-9-3", "fig-9-4"])}

{E["9.9"]}

{E["9.10"]}

{E["9.11"]}

{E["air"]}

{E["9.12"]}

{E["9.13"]}

{E["9.14"]}

{E["9.15"]}

{E["9.16"]}

{E["9.17"]}
"""


SPLITS = {"uk": ("## Матеріал підручника", "## Після опрацювання"), "en": ("## Lecture Notes", "## After studying"), "de": ("## Vorlesungsskript", "## Nach dem Durcharbeiten"), "ru": ("## Конспект лекции", "## После изучения")}

for lang, (start_marker, end_marker) in SPLITS.items():
    path = COURSE / lang / SLUG
    text = path.read_text(encoding="utf-8")
    start = text.index(start_marker)
    end = text.index(end_marker, start)
    path.write_text(text[:start] + material(lang).rstrip() + "\n\n" + text[end:], encoding="utf-8")
    print(f"updated {lang}")
