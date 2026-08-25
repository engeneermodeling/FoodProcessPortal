from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE = ROOT / "src" / "content" / "courses"
SLUG = "bioprocess-engineering/chapter-04-membrane-separation.md"


def eq(expr: str, num: str | None = None) -> str:
    number = f'\n  <span class="equation-number">({num})</span>' if num else ""
    return (
        '<div class="equation-block">\n'
        f'  <span class="equation-main">{expr}</span>'
        f'{number}\n'
        '</div>'
    )


def fig(name: str, alt: str) -> str:
    return f"![{alt}](/images/courses/bioprocess-engineering/chapter-04/{name}.webp)"


common_equations = {
    "driving_clean": eq("Δp = p - π"),
    "driving_real": eq("Δp = p - (π<sub>1</sub> - π<sub>2</sub>) = p - Δπ"),
    "osmotic": eq("π = icRT"),
    "flux": eq("G = V/(Fτ) = KΔp", "4.1"),
    "selectivity": eq("φ = ((C<sub>1</sub> - C<sub>2</sub>)/C<sub>1</sub>) · 100 = (1 - C<sub>2</sub>/C<sub>1</sub>) · 100", "4.2"),
    "dilution": eq("α = D/V", "4.3"),
}


materials = {
    "uk": f"""## Матеріал підручника

### 4.1. Загальні положення

Мембранні процеси розділення використовують напівпроникні перегородки, які пропускають одні компоненти системи й затримують інші. У біотехнологічних виробництвах такі процеси застосовують для концентрування білків, ферментів, антибіотиків, вакцинних напівпродуктів, культуральних рідин, очищення води, знесолювання та стерильної фільтрації термолабільних розчинів.

За характером рушійної сили мембранні процеси поділяють на баромембранні, концентраційно-мембранні, електромембранні та термомембранні. У цьому розділі основну увагу приділено зворотному осмосу, нанофільтрації, ультрафільтрації, мікрофільтрації та діафільтрації.

### 4.2. Теоретичні основи процесів зворотного осмосу, нано-, ультра- і мікрофільтрації

Осмос виникає, коли розчин і розчинник розділені напівпроникною мембраною. Розчинник самочинно переходить у розчин, доки гідростатичний тиск не врівноважить осмотичний. Якщо з боку розчину прикласти тиск, більший за осмотичний, напрям перенесення змінюється — це зворотний осмос.

{fig("fig-4-1", "Рис. 4.1. Схеми осмотичного і зворотноосмотичного процесів")}

Для ідеального випадку рушійна сила баромембранного процесу:

{common_equations["driving_clean"]}

Для реальної системи враховують різницю осмотичних тисків по обидва боки мембрани:

{common_equations["driving_real"]}

Осмотичний тиск розбавлених розчинів описують співвідношенням Вант-Гоффа:

{common_equations["osmotic"]}

Питома продуктивність мембрани, або потік пермеату:

{common_equations["flux"]}

Селективність мембрани характеризує, наскільки ефективно вона затримує розчинену речовину:

{common_equations["selectivity"]}

Зворотний осмос переважно застосовують для розчинів низькомолекулярних речовин і знесолювання. Нанофільтрація займає проміжне місце між зворотним осмосом та ультрафільтрацією. Ультрафільтрація затримує макромолекули та колоїдні частинки, а мікрофільтрація працює з більшими частинками, клітинами й мікроорганізмами.

### 4.3. Діафільтрація

Діафільтрація поєднує мембранне розділення з додаванням розчинника. Вона дає змогу видаляти низькомолекулярні домішки з розчину високомолекулярного продукту без значної втрати самого продукту. У біотехнології це особливо корисно під час промивання білкових концентратів, ферментних препаратів і культуральних рідин.

Коефіцієнт розбавлення:

{common_equations["dilution"]}

За α = 0 процес відповідає концентруванню, а за α > 0 — власне діафільтрації. Процес може бути періодичним або безперервним.

{fig("fig-4-2", "Рис. 4.2. Принципові схеми діафільтрації")}

### 4.4. Мембранні апарати

Мембранні апарати мають забезпечувати велику робочу поверхню мембрани, рівномірний розподіл потоку, можливість промивання, санітарної обробки та заміни мембранних елементів. Для біотехнологічних середовищ важливі низьке піноутворення, контроль забруднення мембрани, стерильність і мінімальне механічне пошкодження продукту.

Апарати типу фільтр-преса зручні для плоских мембран і лабораторно-пілотних установок.

{fig("fig-4-3", "Рис. 4.3. Мембранний апарат типу фільтр-прес")}

Трубчасті мембранні елементи стійкі до забруднення і придатні для в'язких або забруднених суспензій.

{fig("fig-4-4", "Рис. 4.4. Схеми трубчастих мембранних елементів")}

Модулі з порожнистими волокнами мають дуже велику питому поверхню, тому їх застосовують для тонкого очищення, стерильної фільтрації й роботи з великими об'ємами рідин.

{fig("fig-4-6", "Рис. 4.6. Модуль з мембранами у вигляді порожнистих волокон")}

Баромембранні апарати можуть працювати періодично або безперервно. У періодичних схемах рідину багаторазово циркулюють через мембранний модуль, доки не досягнуть потрібної концентрації.

{fig("fig-4-7", "Рис. 4.7. Баромембранний апарат періодичної дії")}

У безперервних схемах використовують одну або кілька стадій з циркуляційними контурами, що дозволяє підтримувати продуктивність і стабільну якість пермеату.

{fig("fig-4-8", "Рис. 4.8. Баромембранні апарати безперервної дії з циркуляційними контурами")}
""",
    "en": f"""## Lecture Notes

### 4.1. General Provisions

Membrane separation processes use semipermeable barriers that allow some components to pass while retaining others. In biotechnology they are used to concentrate proteins, enzymes, antibiotics, vaccine intermediates and culture broths, as well as for water purification, desalination and sterile filtration of heat-sensitive solutions.

By driving force, membrane processes are pressure-driven, concentration-driven, electro-membrane or thermo-membrane. This chapter focuses on reverse osmosis, nanofiltration, ultrafiltration, microfiltration and diafiltration.

### 4.2. Theoretical Basis of Reverse Osmosis, Nano-, Ultra- and Microfiltration

Osmosis occurs when a solution and solvent are separated by a semipermeable membrane. The solvent passes into the solution until hydrostatic pressure balances osmotic pressure. If pressure greater than the osmotic pressure is applied on the solution side, transport reverses; this is reverse osmosis.

{fig("fig-4-1", "Fig. 4.1. Osmosis and reverse-osmosis process schemes")}

Driving force for the ideal case:

{common_equations["driving_clean"]}

For a real system, the osmotic pressure difference on both sides of the membrane is considered:

{common_equations["driving_real"]}

Osmotic pressure of dilute solutions is described by the Van't Hoff relation:

{common_equations["osmotic"]}

Specific membrane productivity, or permeate flux:

{common_equations["flux"]}

Membrane selectivity shows how effectively the solute is retained:

{common_equations["selectivity"]}

Reverse osmosis is mainly used for low-molecular solutes and desalination. Nanofiltration is intermediate between reverse osmosis and ultrafiltration. Ultrafiltration retains macromolecules and colloids, while microfiltration works with larger particles, cells and microorganisms.

### 4.3. Diafiltration

Diafiltration combines membrane separation with solvent addition. It removes low-molecular impurities from a high-molecular product solution without major product loss. In biotechnology it is useful for washing protein concentrates, enzyme preparations and culture broths.

Dilution coefficient:

{common_equations["dilution"]}

At α = 0 the process is concentration; at α > 0 it is diafiltration. The operation may be batch or continuous.

{fig("fig-4-2", "Fig. 4.2. Principle schemes of diafiltration")}

### 4.4. Membrane Equipment

Membrane equipment must provide large membrane area, uniform flow distribution, cleaning capability, sanitation and replacement of membrane elements. For biotechnological media, low foaming, fouling control, sterility and gentle product handling are especially important.

Filter-press type devices are convenient for flat membranes and laboratory or pilot installations.

{fig("fig-4-3", "Fig. 4.3. Filter-press type membrane apparatus")}

Tubular membrane elements resist fouling and are suitable for viscous or contaminated suspensions.

{fig("fig-4-4", "Fig. 4.4. Tubular membrane element schemes")}

Hollow-fibre modules have very high specific surface area and are used for fine purification, sterile filtration and processing large liquid volumes.

{fig("fig-4-6", "Fig. 4.6. Module with hollow-fibre membranes")}

Pressure-driven membrane apparatuses may operate batchwise or continuously. In batch schemes the liquid circulates repeatedly through the membrane module until the desired concentration is reached.

{fig("fig-4-7", "Fig. 4.7. Batch pressure-driven membrane apparatus")}

Continuous schemes use one or several stages with circulation loops to maintain productivity and stable permeate quality.

{fig("fig-4-8", "Fig. 4.8. Continuous pressure-driven membrane apparatuses with circulation loops")}
""",
    "de": f"""## Vorlesungsskript

### 4.1. Allgemeine Grundlagen

Membrantrennprozesse verwenden semipermeable Trennschichten, die bestimmte Komponenten passieren lassen und andere zurueckhalten. In biotechnologischen Produktionen dienen sie zur Konzentrierung von Proteinen, Enzymen, Antibiotika, Impfstoff-Zwischenprodukten und Kulturbruehen sowie zur Wasseraufbereitung, Entsalzung und sterilen Filtration thermolabiler Loesungen.

Nach der treibenden Kraft unterscheidet man druckgetriebene, konzentrationsgetriebene, elektro- und thermomembrane Prozesse. Dieses Kapitel behandelt vor allem Umkehrosmose, Nanofiltration, Ultrafiltration, Mikrofiltration und Diafiltration.

### 4.2. Theoretische Grundlagen der Umkehrosmose, Nano-, Ultra- und Mikrofiltration

Osmose entsteht, wenn Loesung und Loesungsmittel durch eine semipermeable Membran getrennt sind. Das Loesungsmittel wandert in die Loesung, bis der hydrostatische Druck den osmotischen Druck ausgleicht. Wird auf der Loesungsseite ein groesserer Druck angelegt, kehrt sich die Transportrichtung um; das ist Umkehrosmose.

{fig("fig-4-1", "Abb. 4.1. Schemata von Osmose und Umkehrosmose")}

Treibende Kraft im idealen Fall:

{common_equations["driving_clean"]}

Fuer reale Systeme wird die Differenz der osmotischen Druecke beruecksichtigt:

{common_equations["driving_real"]}

Der osmotische Druck verduennter Loesungen wird durch die Van't-Hoff-Beziehung beschrieben:

{common_equations["osmotic"]}

Spezifische Membranleistung beziehungsweise Permeatfluss:

{common_equations["flux"]}

Die Selektivitaet der Membran beschreibt die Rueckhaltung des geloesten Stoffes:

{common_equations["selectivity"]}

Umkehrosmose wird vor allem fuer niedermolekulare Stoffe und Entsalzung eingesetzt. Nanofiltration liegt zwischen Umkehrosmose und Ultrafiltration. Ultrafiltration haelt Makromolekuele und Kolloide zurueck, Mikrofiltration groessere Partikel, Zellen und Mikroorganismen.

### 4.3. Diafiltration

Diafiltration kombiniert Membrantrennung mit Zugabe von Loesungsmittel. Sie entfernt niedermolekulare Verunreinigungen aus Loesungen hochmolekularer Produkte bei geringen Produktverlusten. In der Biotechnologie ist sie fuer Protein- und Enzymkonzentrate sowie Kulturbruehen nuetzlich.

Verduennungskoeffizient:

{common_equations["dilution"]}

Bei α = 0 liegt Konzentrierung vor, bei α > 0 Diafiltration. Der Prozess kann periodisch oder kontinuierlich sein.

{fig("fig-4-2", "Abb. 4.2. Prinzipschemata der Diafiltration")}

### 4.4. Membranapparate

Membranapparate muessen grosse Membranflaeche, gleichmaessige Stroemungsverteilung, Reinigbarkeit, Sanitation und Austausch der Membranelemente ermoeglichen. Fuer biotechnologische Medien sind geringe Schaumbildung, Foulingkontrolle, Sterilitaet und schonende Produktbehandlung wichtig.

Apparate vom Typ Filterpresse eignen sich fuer Flachmembranen sowie Labor- und Pilotanlagen.

{fig("fig-4-3", "Abb. 4.3. Membranapparat vom Typ Filterpresse")}

Rohrfoermige Membranelemente sind foulingrobust und fuer viskose oder verschmutzte Suspensionen geeignet.

{fig("fig-4-4", "Abb. 4.4. Schemata rohrfoermiger Membranelemente")}

Hohlfasermodule besitzen eine sehr hohe spezifische Oberflaeche und werden fuer Feinreinigung, sterile Filtration und grosse Fluessigkeitsvolumina eingesetzt.

{fig("fig-4-6", "Abb. 4.6. Modul mit Hohlfasermembranen")}

Druckgetriebene Membranapparate koennen periodisch oder kontinuierlich arbeiten. In periodischen Schemata zirkuliert die Fluessigkeit wiederholt durch das Membranmodul, bis die Zielkonzentration erreicht ist.

{fig("fig-4-7", "Abb. 4.7. Periodisch arbeitender baromembraner Apparat")}

Kontinuierliche Schemata nutzen eine oder mehrere Stufen mit Zirkulationskreisen, um Produktivitaet und stabile Permeatqualitaet zu sichern.

{fig("fig-4-8", "Abb. 4.8. Kontinuierliche baromembrane Apparate mit Zirkulationskreisen")}
""",
    "ru": f"""## Конспект лекции

### 4.1. Общие положения

Мембранные процессы разделения используют полупроницаемые перегородки, которые пропускают одни компоненты системы и задерживают другие. В биотехнологических производствах их применяют для концентрирования белков, ферментов, антибиотиков, вакцинных полупродуктов, культуральных жидкостей, очистки воды, обессоливания и стерильной фильтрации термолабильных растворов.

По характеру движущей силы мембранные процессы делят на баромембранные, концентрационно-мембранные, электромембранные и термомембранные. В этом разделе основное внимание уделено обратному осмосу, нанофильтрации, ультрафильтрации, микрофильтрации и диафильтрации.

### 4.2. Теоретические основы обратного осмоса, нано-, ультра- и микрофильтрации

Осмос возникает, когда раствор и растворитель разделены полупроницаемой мембраной. Растворитель самопроизвольно переходит в раствор, пока гидростатическое давление не уравновесит осмотическое. Если со стороны раствора приложить давление выше осмотического, перенос меняет направление; это обратный осмос.

{fig("fig-4-1", "Рис. 4.1. Схемы осмотического и обратноосмотического процессов")}

Для идеального случая движущая сила:

{common_equations["driving_clean"]}

Для реальной системы учитывают разность осмотических давлений по обе стороны мембраны:

{common_equations["driving_real"]}

Осмотическое давление разбавленных растворов описывают соотношением Вант-Гоффа:

{common_equations["osmotic"]}

Удельная производительность мембраны, или поток пермеата:

{common_equations["flux"]}

Селективность мембраны показывает, насколько эффективно она задерживает растворенное вещество:

{common_equations["selectivity"]}

Обратный осмос применяют преимущественно для низкомолекулярных веществ и обессоливания. Нанофильтрация занимает промежуточное место между обратным осмосом и ультрафильтрацией. Ультрафильтрация задерживает макромолекулы и коллоиды, а микрофильтрация работает с более крупными частицами, клетками и микроорганизмами.

### 4.3. Диафильтрация

Диафильтрация сочетает мембранное разделение с добавлением растворителя. Она позволяет удалять низкомолекулярные примеси из раствора высокомолекулярного продукта без значительной потери самого продукта. В биотехнологии это полезно при промывке белковых концентратов, ферментных препаратов и культуральных жидкостей.

Коэффициент разбавления:

{common_equations["dilution"]}

При α = 0 процесс соответствует концентрированию, а при α > 0 - собственно диафильтрации. Процесс может быть периодическим или непрерывным.

{fig("fig-4-2", "Рис. 4.2. Принципиальные схемы диафильтрации")}

### 4.4. Мембранные аппараты

Мембранные аппараты должны обеспечивать большую рабочую поверхность мембраны, равномерное распределение потока, возможность промывки, санитарной обработки и замены мембранных элементов. Для биотехнологических сред важны низкое пенообразование, контроль загрязнения мембраны, стерильность и минимальное механическое повреждение продукта.

Аппараты типа фильтр-пресса удобны для плоских мембран и лабораторно-пилотных установок.

{fig("fig-4-3", "Рис. 4.3. Мембранный аппарат типа фильтр-пресс")}

Трубчатые мембранные элементы устойчивы к загрязнению и подходят для вязких или загрязненных суспензий.

{fig("fig-4-4", "Рис. 4.4. Схемы трубчатых мембранных элементов")}

Модули с полыми волокнами имеют очень большую удельную поверхность, поэтому их применяют для тонкой очистки, стерильной фильтрации и работы с большими объемами жидкостей.

{fig("fig-4-6", "Рис. 4.6. Модуль с мембранами в виде полых волокон")}

Баромембранные аппараты могут работать периодически или непрерывно. В периодических схемах жидкость многократно циркулирует через мембранный модуль, пока не будет достигнута требуемая концентрация.

{fig("fig-4-7", "Рис. 4.7. Баромембранный аппарат периодического действия")}

В непрерывных схемах используют одну или несколько стадий с циркуляционными контурами, что позволяет поддерживать производительность и стабильное качество пермеата.

{fig("fig-4-8", "Рис. 4.8. Баромембранные аппараты непрерывного действия с циркуляционными контурами")}
""",
}

markers = {
    "uk": ("## Матеріал підручника", "## Після опрацювання розділу студент має вміти"),
    "en": ("## Lecture Notes", "## After studying this chapter, students should be able to"),
    "de": ("## Vorlesungsskript", "## Nach dem Durcharbeiten dieses Kapitels sollen Studierende"),
    "ru": ("## Конспект лекции", "## После изучения раздела студент должен уметь"),
}

notes = {
    "uk": "Під час наступного проходу варто додати короткий розрахунковий приклад продуктивності мембрани та порівняльну таблицю RO/NF/UF/MF для біотехнологічних задач.",
    "en": "In the next pass, a short membrane-flux calculation example and a RO/NF/UF/MF comparison table for biotechnology tasks can be added.",
    "de": "Im nächsten Durchgang koennen ein kurzes Rechenbeispiel zum Membranfluss und eine Vergleichstabelle RO/NF/UF/MF fuer biotechnologische Aufgaben ergaenzt werden.",
    "ru": "На следующем проходе стоит добавить короткий расчетный пример производительности мембраны и сравнительную таблицу RO/NF/UF/MF для биотехнологических задач.",
}

further_markers = {
    "uk": "## Подальше опрацювання",
    "en": "## Further Development",
    "de": "## Weitere Ausarbeitung",
    "ru": "## Дальнейшая проработка",
}

for locale, material in materials.items():
    path = COURSE / locale / SLUG
    text = path.read_text(encoding="utf-8")
    start_marker, end_marker = markers[locale]
    start = text.index(start_marker)
    end = text.index(end_marker)
    text = text[:start] + material.rstrip() + "\n\n" + text[end:]
    further = further_markers[locale]
    if further in text:
        head, tail = text.split(further, 1)
        lines = tail.splitlines()
        tail = "\n" + notes[locale] + "\n" + "\n".join(lines[2:]) + ("\n" if text.endswith("\n") else "")
        text = head + further + tail
    path.write_text(text, encoding="utf-8")
    print(f"updated {path.relative_to(ROOT)}")
