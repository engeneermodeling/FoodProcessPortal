from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE = ROOT / "src" / "content" / "courses"
SLUG = "bioprocess-engineering/chapter-08-evaporation.md"


def eq(expr: str, num: str = "") -> str:
    number = f"({num})" if num else ""
    return (
        '<div class="equation-block">\n'
        f'  <span class="equation-main">{expr}</span>\n'
        f'  <span class="equation-number">{number}</span>\n'
        '</div>'
    )


def fig(name: str, alt: str) -> str:
    return f"![{alt}](/images/courses/bioprocess-engineering/chapter-08/{name}.webp)"


E = {
    "8.1": eq("S<sub>in</sub> = S<sub>out</sub> + W", "8.1"),
    "8.2": eq("S<sub>in</sub>B<sub>in</sub> = S<sub>out</sub>B<sub>out</sub>", "8.2"),
    "8.3": eq("D = [S<sub>out</sub>c<sub>out</sub>t<sub>out</sub> + Wi + Dθc<sub>c</sub> + Q<sub>loss</sub> - S<sub>in</sub>c<sub>in</sub>t<sub>in</sub>]/i″", "8.3"),
    "heat": eq("Q = Wr"),
    "8.4": eq("D = [S<sub>in</sub>c(t<sub>boil</sub> - t<sub>in</sub>) + Wr - S<sub>out</sub>c<sub>out</sub>(t<sub>out</sub> - t<sub>boil</sub>) + Q<sub>loss</sub>]/(i″ - θc<sub>c</sub>)", "8.4"),
    "8.5": eq("θ ≈ T - 2...3", "8.5"),
    "8.6": eq("W = S<sub>in</sub>(1 - B<sub>in</sub>/B<sub>out</sub>)", "8.6"),
    "8.7": eq("D ≈ W/n", "8.7"),
    "8.8": eq("W<sub>n</sub> = α<sub>n</sub>D<sub>n-1</sub>", "8.8"),
    "8.9": eq("Δt<sub>use,n</sub> = T<sub>n</sub> - t<sub>n</sub>", "8.9"),
    "8.10": eq("ΣΔt<sub>use</sub> = Δt<sub>1</sub> + Δt<sub>2</sub> + ... + Δt<sub>n</sub>", "8.10"),
    "8.11": eq("ΣΔt<sub>loss</sub> = ΣΔ′ + ΣΔ″ + ΣΔ‴", "8.11"),
    "8.12": eq("Δ″ = t<sub>boil</sub>(p + Δp) - t<sub>boil</sub>(p)", "8.12"),
    "8.13": eq("t<sub>n</sub> = T<sub>n</sub> + Δ′<sub>n</sub> + Δ″<sub>n</sub>", "8.13"),
    "8.14": eq("Δt<sub>use</sub> = Δt<sub>total</sub> - ΣΔt<sub>loss</sub>", "8.14"),
    "8.15": eq("F<sub>n</sub> = Q<sub>n</sub>/(k<sub>n</sub>Δt<sub>n</sub>)", "8.15"),
    "8.16": eq("W = S(B<sub>out</sub> - B<sub>in</sub>)/B<sub>out</sub>", "8.16"),
    "8.17": eq("W = nW<sub>last</sub> + E<sub>1</sub> + 2E<sub>2</sub> + ... + (n - 1)E<sub>n-1</sub>", "8.17"),
    "8.18": eq("W<sub>last</sub> = [W - E<sub>1</sub> - 2E<sub>2</sub> - ... - (n - 1)E<sub>n-1</sub>]/n", "8.18"),
    "8.19": eq("W<sub>i</sub> = W<sub>last</sub> + E<sub>i</sub> + E<sub>i+1</sub> + ... + E<sub>n-1</sub>", "8.19"),
    "8.20": eq("R<sub>1</sub> = 1/α<sub>cond</sub>", "8.20"),
    "8.21": eq("α<sub>boil</sub> = A q<sup>m</sup>", "8.21"),
    "8.22": eq("U = f(Δt)", "8.22"),
    "8.23": eq("t<sub>w</sub> = t<sub>steam</sub> - q/α<sub>cond</sub>", "8.23"),
    "8.24": eq("t<sub>film</sub> = 0.5(t<sub>w</sub> + t<sub>boil</sub>)", "8.24"),
}


CAPTIONS = {
    "uk": [
        ("fig-8-1", "Рис. 8.1. Схема випарного апарата"),
        ("fig-8-2", "Рис. 8.2. Однокорпусна випарна установка"),
        ("fig-8-3", "Рис. 8.3. Схема багатокорпусної випарної установки з конденсатором"),
        ("fig-8-4", "Рис. 8.4. Однокорпусна випарна установка з турбокомпресором"),
        ("fig-8-5", "Рис. 8.5. Випарний апарат з інжекторним тепловим насосом"),
        ("fig-8-6", "Рис. 8.6. Випарний апарат з центральною циркуляційною трубою"),
        ("fig-8-7", "Рис. 8.7. Випарний апарат з винесеними циркуляційними трубами"),
        ("fig-8-8", "Рис. 8.8. Випарний апарат з винесеною поверхнею нагрівання"),
        ("fig-8-9", "Рис. 8.9. Випарний апарат з одноразовим проходженням рідини"),
        ("fig-8-10", "Рис. 8.10. Випарний апарат з примусовою циркуляцією"),
        ("fig-8-11", "Рис. 8.11. Випарний апарат зі спадною плівкою"),
        ("fig-8-12", "Рис. 8.12. Роторний плівковий випарний апарат"),
    ],
    "en": [
        ("fig-8-1", "Fig. 8.1. Evaporator scheme"),
        ("fig-8-2", "Fig. 8.2. Single-effect evaporator unit"),
        ("fig-8-3", "Fig. 8.3. Multiple-effect evaporator with condenser"),
        ("fig-8-4", "Fig. 8.4. Single-effect evaporator with turbocompressor"),
        ("fig-8-5", "Fig. 8.5. Evaporator with an injector heat pump"),
        ("fig-8-6", "Fig. 8.6. Evaporator with a central circulation tube"),
        ("fig-8-7", "Fig. 8.7. Evaporator with external circulation tubes"),
        ("fig-8-8", "Fig. 8.8. Evaporator with an external heating surface"),
        ("fig-8-9", "Fig. 8.9. Evaporator with single-pass liquid flow"),
        ("fig-8-10", "Fig. 8.10. Forced-circulation evaporator"),
        ("fig-8-11", "Fig. 8.11. Falling-film evaporator"),
        ("fig-8-12", "Fig. 8.12. Rotor film evaporator"),
    ],
    "de": [
        ("fig-8-1", "Abb. 8.1. Schema eines Verdampfers"),
        ("fig-8-2", "Abb. 8.2. Einkoerper-Verdampferanlage"),
        ("fig-8-3", "Abb. 8.3. Mehrkoerper-Verdampferanlage mit Kondensator"),
        ("fig-8-4", "Abb. 8.4. Einkoerper-Verdampferanlage mit Turbokompressor"),
        ("fig-8-5", "Abb. 8.5. Verdampfer mit Injektor-Waermepumpe"),
        ("fig-8-6", "Abb. 8.6. Verdampfer mit zentralem Umlaufrohr"),
        ("fig-8-7", "Abb. 8.7. Verdampfer mit externen Umlaufrohren"),
        ("fig-8-8", "Abb. 8.8. Verdampfer mit ausgelagerter Heizflaeche"),
        ("fig-8-9", "Abb. 8.9. Verdampfer mit einmaligem Fluessigkeitsdurchgang"),
        ("fig-8-10", "Abb. 8.10. Verdampfer mit Zwangsumlauf"),
        ("fig-8-11", "Abb. 8.11. Fallfilmverdampfer"),
        ("fig-8-12", "Abb. 8.12. Rotor-Filmverdampfer"),
    ],
    "ru": [
        ("fig-8-1", "Рис. 8.1. Схема выпарного аппарата"),
        ("fig-8-2", "Рис. 8.2. Однокорпусная выпарная установка"),
        ("fig-8-3", "Рис. 8.3. Многокорпусная выпарная установка с конденсатором"),
        ("fig-8-4", "Рис. 8.4. Однокорпусная выпарная установка с турбокомпрессором"),
        ("fig-8-5", "Рис. 8.5. Выпарной аппарат с инжекторным тепловым насосом"),
        ("fig-8-6", "Рис. 8.6. Выпарной аппарат с центральной циркуляционной трубой"),
        ("fig-8-7", "Рис. 8.7. Выпарной аппарат с вынесенными циркуляционными трубами"),
        ("fig-8-8", "Рис. 8.8. Выпарной аппарат с вынесенной поверхностью нагрева"),
        ("fig-8-9", "Рис. 8.9. Выпарной аппарат с однократным прохождением жидкости"),
        ("fig-8-10", "Рис. 8.10. Выпарной аппарат с принудительной циркуляцией"),
        ("fig-8-11", "Рис. 8.11. Выпарной аппарат со стекающей пленкой"),
        ("fig-8-12", "Рис. 8.12. Роторный пленочный выпарной аппарат"),
    ],
}


TEXT = {
    "uk": {
        "mat": "## Матеріал підручника",
        "h": ["Загальні відомості", "Випарювання в однокорпусній установці періодичної дії", "Багатокорпусні випарні установки", "Випарні установки з тепловими насосами", "Конструкції випарних апаратів", "Розрахунок багатокорпусної випарної установки"],
        "p1": "Випарюванням називають концентрування розчинів нелетких речовин частковим видаленням леткого розчинника за температури кипіння. На відміну від випаровування з поверхні, випарювання відбувається в усій масі киплячої рідини.",
        "p2": "У біотехнологічних, харчових і фармацевтичних виробництвах часто концентрують водні розчини. Первинною, або нагрівною, парою підводять теплоту, а вторинну пару доцільно використовувати повторно. Для термолабільних продуктів випарювання ведуть під розрідженням, щоб знизити температуру кипіння.",
        "single": "В однокорпусній установці за один цикл у апарат надходить початковий розчин, а виходять упарений розчин, вторинна пара і конденсат нагрівної пари. Матеріальний баланс записують для всього розчину і для сухих речовин.",
        "vac": "Періодичне випарювання під розрідженням знижує температуру кипіння продукту і збільшує корисну різницю температур між нагрівною парою та киплячим розчином.",
        "multi": "Багатокорпусна випарна установка використовує вторинну пару попереднього корпусу як нагрівну пару наступного. Завдяки цьому одна й та сама теплота використовується багаторазово, а витрата первинної пари зменшується.",
        "loss": "Корисна різниця температур у корпусах менша за загальну через температурні втрати: фізико-хімічну депресію, гідростатичну депресію і втрати тиску в паропроводах.",
        "pump": "Установки з тепловими насосами підвищують енергетичну ефективність. У механічному варіанті вторинну пару стискає турбокомпресор, а в інжекторному - її параметри підвищує струмінь гострої пари.",
        "design": "Випарні апарати класифікують за режимом циркуляції, кратністю проходження розчину, розташуванням і конфігурацією поверхні нагрівання. Для термочутливих або в'язких середовищ особливо важливі час перебування, інтенсивність циркуляції та можливість очищення поверхні.",
        "calc": "Розрахунок багатокорпусної установки включає визначення кількості випареної води в корпусах, теплового навантаження, коефіцієнтів теплопередачі та площі поверхні нагрівання кожного корпусу.",
    },
    "en": {
        "mat": "## Lecture Notes",
        "h": ["General Information", "Evaporation in a Single-Effect Batch Unit", "Multiple-Effect Evaporator Units", "Evaporator Units with Heat Pumps", "Evaporator Designs", "Calculation of a Multiple-Effect Evaporator Unit"],
        "p1": "Evaporation is the concentration of solutions of nonvolatile substances by partial removal of a volatile solvent at the boiling temperature. Unlike surface evaporation, boiling evaporation occurs throughout the whole liquid volume.",
        "p2": "Biotechnological, food and pharmaceutical production often concentrates aqueous solutions. Primary heating steam supplies heat, while secondary vapor should be reused whenever possible. Thermolabile products are evaporated under vacuum to reduce the boiling temperature.",
        "single": "In a single-effect unit, the initial solution enters the apparatus during a cycle, while concentrated solution, secondary vapor and heating-steam condensate leave it. The material balance is written for the total solution and for dry solids.",
        "vac": "Batch evaporation under vacuum lowers the product boiling temperature and increases the useful temperature difference between heating steam and boiling solution.",
        "multi": "A multiple-effect evaporator uses secondary vapor from the previous effect as heating steam for the next one. The same heat is therefore used repeatedly, and primary steam consumption decreases.",
        "loss": "The useful temperature difference in the effects is lower than the total difference because of temperature losses: physicochemical boiling-point elevation, hydrostatic depression and pressure losses in vapor lines.",
        "pump": "Heat-pump evaporators improve energy efficiency. In the mechanical version, secondary vapor is compressed by a turbocompressor; in the injector version, a jet of live steam raises its parameters.",
        "design": "Evaporators are classified by circulation mode, number of passes through the heating surface, surface position and heating-surface configuration. For heat-sensitive or viscous media, residence time, circulation intensity and cleanability are especially important.",
        "calc": "Calculation of a multiple-effect unit includes the amount of water evaporated in each effect, heat duties, overall heat-transfer coefficients and heating surface areas.",
    },
    "de": {
        "mat": "## Vorlesungsskript",
        "h": ["Allgemeines", "Verdampfen in einer diskontinuierlichen Einkoerperanlage", "Mehrkoerper-Verdampferanlagen", "Verdampferanlagen mit Waermepumpen", "Konstruktionen von Verdampfern", "Berechnung einer Mehrkoerper-Verdampferanlage"],
        "p1": "Verdampfen ist das Konzentrieren von Loesungen nichtfluechtiger Stoffe durch teilweises Entfernen eines fluechtigen Loesungsmittels bei Siedetemperatur. Anders als die Oberflaechenverdunstung findet das Sieden im ganzen Fluessigkeitsvolumen statt.",
        "p2": "In biotechnologischen, Lebensmittel- und pharmazeutischen Produktionen werden haeufig waessrige Loesungen konzentriert. Primaerer Heizdampf liefert Waerme; Sekundaerdampf sollte nach Moeglichkeit wiederverwendet werden. Thermolabile Produkte verdampft man im Vakuum, um die Siedetemperatur zu senken.",
        "single": "In einer Einkoerperanlage tritt die Ausgangsloesung in den Apparat ein; Konzentrat, Sekundaerdampf und Kondensat des Heizdampfs treten aus. Die Stoffbilanz wird fuer Gesamtloesung und Trockensubstanz geschrieben.",
        "vac": "Diskontinuierliches Verdampfen im Vakuum senkt die Siedetemperatur und erhoeht die nutzbare Temperaturdifferenz zwischen Heizdampf und siedender Loesung.",
        "multi": "Eine Mehrkoerperanlage nutzt Sekundaerdampf des vorherigen Koerpers als Heizdampf des naechsten. Dieselbe Waerme wird mehrfach verwendet, und der Primaerdampfverbrauch sinkt.",
        "loss": "Die nutzbare Temperaturdifferenz ist kleiner als die gesamte Differenz, weil Temperaturverluste auftreten: physikalisch-chemische Siedepunktserhoehung, hydrostatische Depression und Druckverluste in Dampfleitungen.",
        "pump": "Verdampfer mit Waermepumpen verbessern die Energieeffizienz. Mechanisch verdichtet ein Turbokompressor den Sekundaerdampf; beim Injektor hebt ein Frischdampfstrahl seine Parameter.",
        "design": "Verdampfer werden nach Umlaufart, Durchgangszahl, Lage und Konfiguration der Heizflaeche eingeteilt. Fuer waermeempfindliche oder viskose Medien sind Verweilzeit, Umlaufintensitaet und Reinigbarkeit besonders wichtig.",
        "calc": "Die Berechnung einer Mehrkoerperanlage umfasst verdampfte Wassermengen, Waermebelastungen, Waermeuebergangskoeffizienten und Heizflaechen jedes Koerpers.",
    },
    "ru": {
        "mat": "## Конспект лекции",
        "h": ["Общие сведения", "Выпаривание в однокорпусной установке периодического действия", "Многокорпусные выпарные установки", "Выпарные установки с тепловыми насосами", "Конструкции выпарных аппаратов", "Расчет многокорпусной выпарной установки"],
        "p1": "Выпариванием называют концентрирование растворов нелетучих веществ частичным удалением летучего растворителя при температуре кипения. В отличие от испарения с поверхности, выпаривание происходит во всей массе кипящей жидкости.",
        "p2": "В биотехнологических, пищевых и фармацевтических производствах часто концентрируют водные растворы. Первичный, или греющий, пар подводит теплоту, а вторичный пар целесообразно использовать повторно. Для термолабильных продуктов выпаривание ведут под разрежением, чтобы снизить температуру кипения.",
        "single": "В однокорпусной установке за цикл в аппарат поступает исходный раствор, а выходят упаренный раствор, вторичный пар и конденсат греющего пара. Материальный баланс записывают для всего раствора и для сухих веществ.",
        "vac": "Периодическое выпаривание под вакуумом снижает температуру кипения продукта и увеличивает полезную разность температур между греющим паром и кипящим раствором.",
        "multi": "Многокорпусная выпарная установка использует вторичный пар предыдущего корпуса как греющий пар следующего. Поэтому одна и та же теплота используется многократно, а расход первичного пара уменьшается.",
        "loss": "Полезная разность температур в корпусах меньше общей из-за температурных потерь: физико-химической депрессии, гидростатической депрессии и потерь давления в паропроводах.",
        "pump": "Установки с тепловыми насосами повышают энергетическую эффективность. В механическом варианте вторичный пар сжимает турбокомпрессор, а в инжекторном его параметры повышает струя острого пара.",
        "design": "Выпарные аппараты классифицируют по режиму циркуляции, кратности прохождения раствора, расположению и конфигурации поверхности нагрева. Для термочувствительных или вязких сред особенно важны время пребывания, интенсивность циркуляции и возможность очистки поверхности.",
        "calc": "Расчет многокорпусной установки включает количество выпаренной воды по корпусам, тепловую нагрузку, коэффициенты теплопередачи и площади поверхности нагрева каждого корпуса.",
    },
}


def figures(lang: str, names: list[str]) -> str:
    caps = dict(CAPTIONS[lang])
    return "\n\n".join(f"{fig(name, caps[name])}\n*{caps[name]}*" for name in names)


def material(lang: str) -> str:
    t = TEXT[lang]
    h = t["h"]
    return f"""{t["mat"]}

### 8.1. {h[0]}

{t["p1"]}

{t["p2"]}

### 8.2. {h[1]}

{t["single"]}

{figures(lang, ["fig-8-1"])}

{E["8.1"]}

{E["8.2"]}

{E["8.3"]}

{E["heat"]}

{E["8.4"]}

{t["vac"]}

{figures(lang, ["fig-8-2"])}

### 8.3. {h[2]}

{t["multi"]}

{figures(lang, ["fig-8-3"])}

{E["8.5"]}

{E["8.6"]}

{E["8.7"]}

{E["8.8"]}

{t["loss"]}

{E["8.9"]}

{E["8.10"]}

{E["8.11"]}

{E["8.12"]}

{E["8.13"]}

{E["8.14"]}

{E["8.15"]}

### 8.4. {h[3]}

{t["pump"]}

{figures(lang, ["fig-8-4", "fig-8-5"])}

### 8.5. {h[4]}

{t["design"]}

{figures(lang, ["fig-8-6", "fig-8-7", "fig-8-8", "fig-8-9", "fig-8-10", "fig-8-11", "fig-8-12"])}

### 8.6. {h[5]}

{t["calc"]}

{E["8.16"]}

{E["8.17"]}

{E["8.18"]}

{E["8.19"]}

{E["8.20"]}

{E["8.21"]}

{E["8.22"]}

{E["8.23"]}

{E["8.24"]}
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
