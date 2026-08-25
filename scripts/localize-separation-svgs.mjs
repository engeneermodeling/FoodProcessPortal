import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const sourceDir = join(process.cwd(), "public", "images", "lectures", "separation");

const dictionaries = {
  en: {
    "Спіральний мембранний модуль": "Spiral-wound membrane module",
    "Схема спірально-рулонного модуля: подача рухається уздовж рулону, пермеат проходить крізь мембрани до центральної перфорованої трубки, ретентат виходить з торця.":
      "Spiral-wound module: feed moves along the roll, permeate passes through membranes to the central perforated tube, retentate exits at the end.",
    "Спірально-рулонний модуль: компактна велика площа мембрани":
      "Spiral-wound module: compact large membrane area",
    "подача": "feed",
    "ретентат": "retentate",
    "пермеат": "permeate",
    "Добрий варіант для RO/NF і чистих потоків: дуже компактний, але потребує якісного попереднього очищення,":
      "Good for RO/NF and clean streams: very compact, but needs high-quality pretreatment,",
    "бо великі частинки забивають тонкі канали між шарами мембран.":
      "because large particles block thin channels between membrane layers.",
    "Сили, що діють на частинку при відстоюванні": "Forces acting on a particle during settling",
    "Схема кулястої частинки у рідині: сила тяжіння вниз, сила Архімеда вгору, сила опору проти напрямку руху, швидкість осідання w нуль.":
      "A spherical particle in liquid: gravity downward, buoyancy upward, drag opposite motion, settling velocity w zero.",
    "Відстоювання: баланс сил на частинці": "Settling: force balance on a particle",
    "виштовхування": "buoyancy",
    "сила тяжіння": "gravity",
    "опір середовища": "medium resistance",
    "У сталому режимі прискорення зникає: різниця G - A урівноважується опором R.":
      "At steady state acceleration vanishes: the difference G - A is balanced by drag R.",
    "Частинка важча": "Particle is heavier",
    "за рідину:": "than liquid:",
    "осідає": "settles",
    "Жирова крапля": "Fat droplet",
    "у молоці:": "in milk:",
    "спливає": "floats up",
    "Спектр баромембранних процесів": "Spectrum of pressure-driven membrane processes",
    "Порівняння зворотного осмосу, нанофільтрації, ультрафільтрації, мікрофільтрації та звичайного фільтрування за розміром частинок і харчовими застосуваннями.":
      "Comparison of reverse osmosis, nanofiltration, ultrafiltration, microfiltration and conventional filtration by particle size and food applications.",
    "Баромембранні процеси: що проходить, а що затримується":
      "Pressure-driven membrane processes: what passes and what is retained",
    "Орієнтовний розмір частинок / пор, мкм": "Approximate particle / pore size, micrometers",
    "іони, солі, цукри": "ions, salts, sugars",
    "вода для виробництва, концентрування соків": "process water, juice concentration",
    "двовалентні іони, частина органіки": "divalent ions, part of organics",
    "демінералізація сироватки, пом'якшення води": "whey demineralization, water softening",
    "білки, полісахариди, ферменти": "proteins, polysaccharides, enzymes",
    "WPC/WPI, концентрування молока": "WPC/WPI, milk concentration",
    "бактерії, дріжджі, колоїди": "bacteria, yeast, colloids",
    "ESL-молоко, пиво, соки": "ESL milk, beer, juices",
    "фільтрування": "filtration",
    "видимі завислі частинки": "visible suspended particles",
    "тканина, сітка, кізельгур": "cloth, screen, kieselguhr",
    "Вибір методу розділення неоднорідної харчової системи":
      "Selecting a separation method for a heterogeneous food system",
    "Навчальна схема показує, як за розміром частинок, різницею густин, стисливістю осаду і термочутливістю продукту обирають відстоювання, фільтрування, центрифугування або мембранний процес.":
      "The learning diagram shows how particle size, density difference, cake compressibility and heat sensitivity guide selection of settling, filtration, centrifugation or membranes.",
    "Як обрати метод розділення для харчового продукту":
      "How to choose a separation method for a food product",
    "Є неоднорідна система": "There is a heterogeneous system",
    "сік, молоко, пиво, олія, сироп, пульпа": "juice, milk, beer, oil, syrup, pulp",
    "Частинки великі?": "Are particles large?",
    "d &gt; 50 мкм і Δρ помітна": "d &gt; 50 micrometers and Δρ is noticeable",
    "Відстоювання": "Settling",
    "олія/вода, вино,": "oil/water, wine,",
    "грубі суспензії": "coarse suspensions",
    "Треба повніше розділення?": "Need more complete separation?",
    "тонкі частинки, емульсії, висока продуктивність": "fine particles, emulsions, high capacity",
    "Центрифуга": "Centrifuge",
    "молоко, дріжджі,": "milk, yeast,",
    "соки, олії": "juices, oils",
    "Потрібна прозорість або концентрація?": "Need clarity or concentration?",
    "Фільтрування": "Filtration",
    "пиво, вино, соки,": "beer, wine, juices,",
    "сиропи, олія": "syrups, oil",
    "Мембрани": "Membranes",
    "UF/MF/RO для молока,": "UF/MF/RO for milk,",
    "сироватки, води, соків": "whey, water, juices",
    "Починаємо з простого методу, але перевіряємо якість продукту, втрати цінних компонентів і CIP-очищення.":
      "Start with the simple method, but check product quality, loss of valuable components and CIP cleaning.",
    "Осмос і зворотний осмос": "Osmosis and reverse osmosis",
    "Три стани системи: природний осмос, рівновага при осмотичному тиску і зворотний осмос, коли прикладений тиск перевищує осмотичний.":
      "Three system states: natural osmosis, equilibrium at osmotic pressure and reverse osmosis when applied pressure exceeds osmotic pressure.",
    "Осмос, рівновага і зворотний осмос": "Osmosis, equilibrium and reverse osmosis",
    "1. Осмос": "1. Osmosis",
    "вода": "water",
    "розчин": "solution",
    "розчинник переходить у концентрований розчин": "solvent moves into concentrated solution",
    "2. Рівновага": "2. Equilibrium",
    "осмос зупиняється при тиску π": "osmosis stops at pressure π",
    "3. Зворотний осмос": "3. Reverse osmosis",
    "тиск змушує воду перейти назад": "pressure forces water back",
    "Для RO рушійна сила приблизно дорівнює p - Δπ, тому зі зростанням концентрації потрібен більший тиск.":
      "For RO, driving force is approximately p - Δπ, so higher concentration requires higher pressure.",
    "Фільтрування з утворенням осаду": "Cake filtration",
    "Схема показує подавання суспензії під тиском, утворення шару осаду на фільтрувальній перегородці і вихід фільтрату.":
      "The diagram shows pressurized suspension feed, cake formation on the filter medium and filtrate outlet.",
    "Фільтрування з утворенням шару осаду": "Filtration with cake formation",
    "Суспензія": "Suspension",
    "p₁, тверда фаза + рідина": "p1, solids + liquid",
    "Фільтрат": "Filtrate",
    "p₂, прозора рідина": "p2, clear liquid",
    "осад": "cake",
    "S зростає з часом": "S grows with time",
    "перегородка": "medium",
    "опір R₀": "resistance R0",
    "Рушійна сила: Δp = p₁ - p₂": "Driving force: Δp = p1 - p2",
    "Dead-end і cross-flow фільтрування": "Dead-end and cross-flow filtration",
    "Порівняння тупикового фільтрування з накопиченням осаду і тангенціального фільтрування, де потік змиває концентраційний шар.":
      "Comparison of dead-end filtration with cake accumulation and tangential filtration where flow washes the concentration layer.",
    "Як cross-flow зменшує концентраційну поляризацію":
      "How cross-flow reduces concentration polarization",
    "Тупиковий режим": "Dead-end mode",
    "частинки накопичуються на мембрані, потік швидко падає":
      "particles accumulate on the membrane, flux falls quickly",
    "Тангенціальний режим": "Tangential mode",
    "рециркуляція змиває гель-шар і стабілізує потік":
      "recirculation washes the gel layer and stabilizes flux",
    "Принцип роботи тарілчастого молочного сепаратора":
      "Operating principle of a disc-stack milk separator",
    "Схема тарілчастого сепаратора: молоко входить по центру, вершки рухаються до осі, знежирене молоко відводиться назовні, тарілки скорочують шлях жирової краплі.":
      "Disc-stack separator: milk enters in the center, cream moves toward the axis, skim milk leaves outward, discs shorten the path of a fat droplet.",
    "Тарілчастий сепаратор: чому молоко розділяється за секунди":
      "Disc-stack separator: why milk separates in seconds",
    "вхід молока": "milk inlet",
    "вершки": "cream",
    "знежирене молоко": "skim milk",
    "Конічні тарілки створюють багато тонких каналів. Жировій краплі треба пройти не сантиметри,":
      "Conical discs create many thin channels. A fat droplet travels not centimeters,",
    "а частки міліметра до поверхні тарілки, тому ефективна площа розділення різко зростає.":
      "but fractions of a millimeter to the disc surface, so effective separation area rises sharply.",
    "Це та сама логіка, що у відстійнику, тільки замість g працює Fr · g.":
      "It is the same logic as in a settler, but Fr · g works instead of g.",
  },
  de: {
    "подача": "Zulauf",
    "ретентат": "Retentat",
    "пермеат": "Permeat",
    "Спіральний мембранний модуль": "Spiralwickel-Membranmodul",
    "Спірально-рулонний модуль: компактна велика площа мембрани":
      "Spiralwickelmodul: kompakte grosse Membranflaeche",
    "Схема спірально-рулонного модуля: подача рухається уздовж рулону, пермеат проходить крізь мембрани до центральної перфорованої трубки, ретентат виходить з торця.":
      "Schema eines Spiralwickelmoduls: Zulauf stroemt entlang der Wicklung, Permeat geht durch Membranen zum Zentralrohr, Retentat tritt am Ende aus.",
    "Добрий варіант для RO/NF і чистих потоків: дуже компактний, але потребує якісного попереднього очищення,":
      "Gut fuer RO/NF und saubere Stroeme: sehr kompakt, braucht aber gute Vorreinigung,",
    "бо великі частинки забивають тонкі канали між шарами мембран.":
      "weil grosse Partikel duenne Kanaele zwischen Membranschichten verstopfen.",
    "Сили, що діють на частинку при відстоюванні": "Kraefte auf ein Partikel beim Sedimentieren",
    "Схема кулястої частинки у рідині: сила тяжіння вниз, сила Архімеда вгору, сила опору проти напрямку руху, швидкість осідання w нуль.":
      "Kugelfoermiges Partikel in Fluessigkeit: Gewicht nach unten, Auftrieb nach oben, Widerstand gegen die Bewegung, Sinkgeschwindigkeit w null.",
    "Відстоювання: баланс сил на частинці": "Sedimentation: Kraeftebilanz am Partikel",
    "виштовхування": "Auftrieb",
    "сила тяжіння": "Gewichtskraft",
    "опір середовища": "Medienwiderstand",
    "У сталому режимі прискорення зникає: різниця G - A урівноважується опором R.":
      "Im stationaeren Zustand verschwindet die Beschleunigung: G - A wird durch R ausgeglichen.",
    "Частинка важча": "Partikel schwerer",
    "за рідину:": "als Fluessigkeit:",
    "осідає": "sinkt",
    "Жирова крапля": "Fetttropfen",
    "у молоці:": "in Milch:",
    "спливає": "steigt auf",
    "Спектр баромембранних процесів": "Spektrum druckgetriebener Membranprozesse",
    "Порівняння зворотного осмосу, нанофільтрації, ультрафільтрації, мікрофільтрації та звичайного фільтрування за розміром частинок і харчовими застосуваннями.":
      "Vergleich von Umkehrosmose, Nanofiltration, Ultrafiltration, Mikrofiltration und klassischer Filtration nach Partikelgroesse und Lebensmittelanwendung.",
    "Баромембранні процеси: що проходить, а що затримується":
      "Druckgetriebene Membranprozesse: was passiert und was zurueckbleibt",
    "Орієнтовний розмір частинок / пор, мкм": "Ungefaehre Partikel-/Porengroesse, Mikrometer",
    "іони, солі, цукри": "Ionen, Salze, Zucker",
    "вода для виробництва, концентрування соків": "Prozesswasser, Saftkonzentrierung",
    "двовалентні іони, частина органіки": "zweiwertige Ionen, Teil organischer Stoffe",
    "демінералізація сироватки, пом'якшення води": "Molke-Demineralisierung, Wasserenthaertung",
    "білки, полісахариди, ферменти": "Proteine, Polysaccharide, Enzyme",
    "WPC/WPI, концентрування молока": "WPC/WPI, Milchkonzentrierung",
    "бактерії, дріжджі, колоїди": "Bakterien, Hefen, Kolloide",
    "ESL-молоко, пиво, соки": "ESL-Milch, Bier, Saefte",
    "фільтрування": "Filtration",
    "видимі завислі частинки": "sichtbare Schwebstoffe",
    "тканина, сітка, кізельгур": "Tuch, Sieb, Kieselgur",
    "Вибір методу розділення неоднорідної харчової системи":
      "Auswahl eines Trennverfahrens fuer ein heterogenes Lebensmittelsystem",
    "Навчальна схема показує, як за розміром частинок, різницею густин, стисливістю осаду і термочутливістю продукту обирають відстоювання, фільтрування, центрифугування або мембранний процес.":
      "Das Lernschaubild zeigt, wie Partikelgroesse, Dichteunterschied, Kuchenkompressibilitaet und Waermeempfindlichkeit die Wahl von Sedimentation, Filtration, Zentrifugation oder Membranprozess bestimmen.",
    "Як обрати метод розділення для харчового продукту":
      "Wie man ein Trennverfahren fuer ein Lebensmittel waehlt",
    "Є неоднорідна система": "Heterogenes System vorhanden",
    "сік, молоко, пиво, олія, сироп, пульпа": "Saft, Milch, Bier, Oel, Sirup, Pulpe",
    "Частинки великі?": "Sind die Partikel gross?",
    "d &gt; 50 мкм і Δρ помітна": "d &gt; 50 Mikrometer und Δρ merklich",
    "Відстоювання": "Sedimentation",
    "олія/вода, вино,": "Oel/Wasser, Wein,",
    "грубі суспензії": "grobe Suspensionen",
    "Треба повніше розділення?": "Vollstaendigere Trennung noetig?",
    "тонкі частинки, емульсії, висока продуктивність": "feine Partikel, Emulsionen, hohe Leistung",
    "Центрифуга": "Zentrifuge",
    "молоко, дріжджі,": "Milch, Hefe,",
    "соки, олії": "Saefte, Oele",
    "Потрібна прозорість або концентрація?": "Klarheit oder Konzentration noetig?",
    "Фільтрування": "Filtration",
    "пиво, вино, соки,": "Bier, Wein, Saefte,",
    "сиропи, олія": "Sirupe, Oel",
    "Мембрани": "Membranen",
    "UF/MF/RO для молока,": "UF/MF/RO fuer Milch,",
    "сироватки, води, соків": "Molke, Wasser, Saefte",
    "Починаємо з простого методу, але перевіряємо якість продукту, втрати цінних компонентів і CIP-очищення.":
      "Man beginnt mit dem einfachen Verfahren, prueft aber Produktqualitaet, Verluste wertvoller Komponenten und CIP-Reinigung.",
    "Осмос і зворотний осмос": "Osmose und Umkehrosmose",
    "Три стани системи: природний осмос, рівновага при осмотичному тиску і зворотний осмос, коли прикладений тиск перевищує осмотичний.":
      "Drei Systemzustaende: natuerliche Osmose, Gleichgewicht beim osmotischen Druck und Umkehrosmose, wenn der angelegte Druck den osmotischen Druck uebersteigt.",
    "Осмос, рівновага і зворотний осмос": "Osmose, Gleichgewicht und Umkehrosmose",
    "1. Осмос": "1. Osmose",
    "вода": "Wasser",
    "розчин": "Loesung",
    "розчинник переходить у концентрований розчин": "Loesungsmittel wandert in konzentrierte Loesung",
    "2. Рівновага": "2. Gleichgewicht",
    "осмос зупиняється при тиску π": "Osmose stoppt beim Druck π",
    "3. Зворотний осмос": "3. Umkehrosmose",
    "тиск змушує воду перейти назад": "Druck zwingt Wasser zurueck",
    "Для RO рушійна сила приблизно дорівнює p - Δπ, тому зі зростанням концентрації потрібен більший тиск.":
      "Bei RO ist die Treibkraft etwa p - Δπ; mit steigender Konzentration braucht man hoeheren Druck.",
    "Фільтрування з утворенням осаду": "Kuchenfiltration",
    "Схема показує подавання суспензії під тиском, утворення шару осаду на фільтрувальній перегородці і вихід фільтрату.":
      "Das Schema zeigt die Druckaufgabe einer Suspension, die Bildung eines Kuchens am Filtermedium und den Austritt des Filtrats.",
    "Фільтрування з утворенням шару осаду": "Filtration mit Kuchenbildung",
    "Суспензія": "Suspension",
    "p₁, тверда фаза + рідина": "p1, Feststoff + Fluessigkeit",
    "Фільтрат": "Filtrat",
    "p₂, прозора рідина": "p2, klare Fluessigkeit",
    "осад": "Kuchen",
    "S зростає з часом": "S waechst mit der Zeit",
    "перегородка": "Filtermedium",
    "опір R₀": "Widerstand R0",
    "Рушійна сила: Δp = p₁ - p₂": "Treibkraft: Δp = p1 - p2",
    "Dead-end і cross-flow фільтрування": "Dead-end- und Cross-flow-Filtration",
    "Порівняння тупикового фільтрування з накопиченням осаду і тангенціального фільтрування, де потік змиває концентраційний шар.":
      "Vergleich von Dead-end-Filtration mit Kuchenaufbau und tangentialer Filtration, bei der die Stroemung die Konzentrationsschicht abspuelt.",
    "Як cross-flow зменшує концентраційну поляризацію":
      "Wie Cross-flow Konzentrationspolarisation verringert",
    "Тупиковий режим": "Dead-end-Modus",
    "частинки накопичуються на мембрані, потік швидко падає":
      "Partikel sammeln sich an der Membran, der Fluss faellt schnell",
    "Тангенціальний режим": "Tangentialer Modus",
    "рециркуляція змиває гель-шар і стабілізує потік":
      "Rezirkulation spuelt die Gelschicht ab und stabilisiert den Fluss",
    "Принцип роботи тарілчастого молочного сепаратора":
      "Funktionsprinzip eines Teller-Milchseparators",
    "Схема тарілчастого сепаратора: молоко входить по центру, вершки рухаються до осі, знежирене молоко відводиться назовні, тарілки скорочують шлях жирової краплі.":
      "Schema eines Tellerseparators: Milch tritt in der Mitte ein, Rahm wandert zur Achse, Magermilch wird nach aussen abgefuehrt, Teller verkuerzen den Weg eines Fetttropfens.",
    "Тарілчастий сепаратор: чому молоко розділяється за секунди":
      "Tellerseparator: warum Milch in Sekunden getrennt wird",
    "вхід молока": "Milcheintritt",
    "вершки": "Rahm",
    "знежирене молоко": "Magermilch",
    "Конічні тарілки створюють багато тонких каналів. Жировій краплі треба пройти не сантиметри,":
      "Konische Teller bilden viele duenne Kanaele. Ein Fetttropfen muss nicht Zentimeter zuruecklegen,",
    "а частки міліметра до поверхні тарілки, тому ефективна площа розділення різко зростає.":
      "sondern Bruchteile eines Millimeters bis zur Telleroberflaeche; dadurch steigt die wirksame Trennflaeche stark.",
    "Це та сама логіка, що у відстійнику, тільки замість g працює Fr · g.":
      "Das ist die gleiche Logik wie im Absetzbehaelter, nur arbeitet statt g hier Fr · g.",
  },
  ru: {
    "подача": "подача",
    "ретентат": "ретентат",
    "пермеат": "пермеат",
    "Спіральний мембранний модуль": "Спиральный мембранный модуль",
    "Схема спірально-рулонного модуля: подача рухається уздовж рулону, пермеат проходить крізь мембрани до центральної перфорованої трубки, ретентат виходить з торця.":
      "Схема спирально-рулонного модуля: подача движется вдоль рулона, пермеат проходит через мембраны к центральной перфорированной трубке, ретентат выходит с торца.",
    "Спірально-рулонний модуль: компактна велика площа мембрани":
      "Спирально-рулонный модуль: компактная большая площадь мембраны",
    "Добрий варіант для RO/NF і чистих потоків: дуже компактний, але потребує якісного попереднього очищення,":
      "Хороший вариант для RO/NF и чистых потоков: очень компактный, но требует качественной предварительной очистки,",
    "бо великі частинки забивають тонкі канали між шарами мембран.":
      "потому что крупные частицы забивают тонкие каналы между слоями мембран.",
    "Сили, що діють на частинку при відстоюванні": "Силы, действующие на частицу при отстаивании",
    "Схема кулястої частинки у рідині: сила тяжіння вниз, сила Архімеда вгору, сила опору проти напрямку руху, швидкість осідання w нуль.":
      "Схема шарообразной частицы в жидкости: сила тяжести вниз, сила Архимеда вверх, сила сопротивления против движения, скорость осаждения w ноль.",
    "Відстоювання: баланс сил на частинці": "Отстаивание: баланс сил на частице",
    "виштовхування": "выталкивание",
    "сила тяжіння": "сила тяжести",
    "опір середовища": "сопротивление среды",
    "У сталому режимі прискорення зникає: різниця G - A урівноважується опором R.":
      "В установившемся режиме ускорение исчезает: разность G - A уравновешивается сопротивлением R.",
    "Частинка важча": "Частица тяжелее",
    "за рідину:": "жидкости:",
    "осідає": "оседает",
    "Жирова крапля": "Жировая капля",
    "у молоці:": "в молоке:",
    "спливає": "всплывает",
    "Спектр баромембранних процесів": "Спектр баромембранных процессов",
    "Порівняння зворотного осмосу, нанофільтрації, ультрафільтрації, мікрофільтрації та звичайного фільтрування за розміром частинок і харчовими застосуваннями.":
      "Сравнение обратного осмоса, нанофильтрации, ультрафильтрации, микрофильтрации и обычного фильтрования по размеру частиц и пищевым применениям.",
    "Баромембранні процеси: що проходить, а що затримується":
      "Баромембранные процессы: что проходит, а что задерживается",
    "Орієнтовний розмір частинок / пор, мкм": "Ориентировочный размер частиц / пор, мкм",
    "іони, солі, цукри": "ионы, соли, сахара",
    "вода для виробництва, концентрування соків": "вода для производства, концентрирование соков",
    "двовалентні іони, частина органіки": "двухвалентные ионы, часть органики",
    "демінералізація сироватки, пом'якшення води": "деминерализация сыворотки, умягчение воды",
    "білки, полісахариди, ферменти": "белки, полисахариды, ферменты",
    "WPC/WPI, концентрування молока": "WPC/WPI, концентрирование молока",
    "бактерії, дріжджі, колоїди": "бактерии, дрожжи, коллоиды",
    "ESL-молоко, пиво, соки": "ESL-молоко, пиво, соки",
    "фільтрування": "фильтрование",
    "видимі завислі частинки": "видимые взвешенные частицы",
    "тканина, сітка, кізельгур": "ткань, сетка, кизельгур",
    "Вибір методу розділення неоднорідної харчової системи":
      "Выбор метода разделения неоднородной пищевой системы",
    "Навчальна схема показує, як за розміром частинок, різницею густин, стисливістю осаду і термочутливістю продукту обирають відстоювання, фільтрування, центрифугування або мембранний процес.":
      "Учебная схема показывает, как по размеру частиц, разности плотностей, сжимаемости осадка и термочувствительности продукта выбирают отстаивание, фильтрование, центрифугирование или мембранный процесс.",
    "Як обрати метод розділення для харчового продукту":
      "Как выбрать метод разделения для пищевого продукта",
    "Є неоднорідна система": "Есть неоднородная система",
    "сік, молоко, пиво, олія, сироп, пульпа": "сок, молоко, пиво, масло, сироп, пульпа",
    "Частинки великі?": "Частицы крупные?",
    "d &gt; 50 мкм і Δρ помітна": "d &gt; 50 мкм и Δρ заметна",
    "Відстоювання": "Отстаивание",
    "олія/вода, вино,": "масло/вода, вино,",
    "грубі суспензії": "грубые суспензии",
    "Треба повніше розділення?": "Нужно более полное разделение?",
    "тонкі частинки, емульсії, висока продуктивність": "тонкие частицы, эмульсии, высокая производительность",
    "Центрифуга": "Центрифуга",
    "молоко, дріжджі,": "молоко, дрожжи,",
    "соки, олії": "соки, масла",
    "Потрібна прозорість або концентрація?": "Нужна прозрачность или концентрация?",
    "Фільтрування": "Фильтрование",
    "пиво, вино, соки,": "пиво, вино, соки,",
    "сиропи, олія": "сиропы, масло",
    "Мембрани": "Мембраны",
    "UF/MF/RO для молока,": "UF/MF/RO для молока,",
    "сироватки, води, соків": "сыворотки, воды, соков",
    "Починаємо з простого методу, але перевіряємо якість продукту, втрати цінних компонентів і CIP-очищення.":
      "Начинаем с простого метода, но проверяем качество продукта, потери ценных компонентов и CIP-очистку.",
    "Осмос і зворотний осмос": "Осмос и обратный осмос",
    "Три стани системи: природний осмос, рівновага при осмотичному тиску і зворотний осмос, коли прикладений тиск перевищує осмотичний.":
      "Три состояния системы: естественный осмос, равновесие при осмотическом давлении и обратный осмос, когда приложенное давление превышает осмотическое.",
    "Осмос, рівновага і зворотний осмос": "Осмос, равновесие и обратный осмос",
    "1. Осмос": "1. Осмос",
    "вода": "вода",
    "розчин": "раствор",
    "розчинник переходить у концентрований розчин": "растворитель переходит в концентрированный раствор",
    "2. Рівновага": "2. Равновесие",
    "осмос зупиняється при тиску π": "осмос останавливается при давлении π",
    "3. Зворотний осмос": "3. Обратный осмос",
    "тиск змушує воду перейти назад": "давление заставляет воду перейти обратно",
    "Для RO рушійна сила приблизно дорівнює p - Δπ, тому зі зростанням концентрації потрібен більший тиск.":
      "Для RO движущая сила примерно равна p - Δπ, поэтому с ростом концентрации требуется большее давление.",
    "Фільтрування з утворенням осаду": "Фильтрование с образованием осадка",
    "Схема показує подавання суспензії під тиском, утворення шару осаду на фільтрувальній перегородці і вихід фільтрату.":
      "Схема показывает подачу суспензии под давлением, образование слоя осадка на фильтрующей перегородке и выход фильтрата.",
    "Фільтрування з утворенням шару осаду": "Фильтрование с образованием слоя осадка",
    "Суспензія": "Суспензия",
    "p₁, тверда фаза + рідина": "p1, твердая фаза + жидкость",
    "Фільтрат": "Фильтрат",
    "p₂, прозора рідина": "p2, прозрачная жидкость",
    "осад": "осадок",
    "S зростає з часом": "S растет со временем",
    "перегородка": "перегородка",
    "опір R₀": "сопротивление R0",
    "Рушійна сила: Δp = p₁ - p₂": "Движущая сила: Δp = p1 - p2",
    "Dead-end і cross-flow фільтрування": "Dead-end и cross-flow фильтрование",
    "Порівняння тупикового фільтрування з накопиченням осаду і тангенціального фільтрування, де потік змиває концентраційний шар.":
      "Сравнение тупикового фильтрования с накоплением осадка и тангенциального фильтрования, где поток смывает концентрационный слой.",
    "Як cross-flow зменшує концентраційну поляризацію":
      "Как cross-flow уменьшает концентрационную поляризацию",
    "Тупиковий режим": "Тупиковый режим",
    "частинки накопичуються на мембрані, потік швидко падає":
      "частицы накапливаются на мембране, поток быстро падает",
    "Тангенціальний режим": "Тангенциальный режим",
    "рециркуляція змиває гель-шар і стабілізує потік":
      "рециркуляция смывает гель-слой и стабилизирует поток",
    "Принцип роботи тарілчастого молочного сепаратора":
      "Принцип работы тарельчатого молочного сепаратора",
    "Схема тарілчастого сепаратора: молоко входить по центру, вершки рухаються до осі, знежирене молоко відводиться назовні, тарілки скорочують шлях жирової краплі.":
      "Схема тарельчатого сепаратора: молоко входит по центру, сливки движутся к оси, обезжиренное молоко отводится наружу, тарелки сокращают путь жировой капли.",
    "Тарілчастий сепаратор: чому молоко розділяється за секунди":
      "Тарельчатый сепаратор: почему молоко разделяется за секунды",
    "вхід молока": "вход молока",
    "вершки": "сливки",
    "знежирене молоко": "обезжиренное молоко",
    "Конічні тарілки створюють багато тонких каналів. Жировій краплі треба пройти не сантиметри,":
      "Конические тарелки создают много тонких каналов. Жировой капле нужно пройти не сантиметры,",
    "а частки міліметра до поверхні тарілки, тому ефективна площа розділення різко зростає.":
      "а доли миллиметра до поверхности тарелки, поэтому эффективная площадь разделения резко возрастает.",
    "Це та сама логіка, що у відстійнику, тільки замість g працює Fr · g.":
      "Это та же логика, что в отстойнике, только вместо g работает Fr · g.",
  },
};

const fileNames = [
  "cross-flow-polarization.svg",
  "disc-stack-separator.svg",
  "filter-cake.svg",
  "membrane-spectrum.svg",
  "osmosis-reverse-osmosis.svg",
  "separation-methods-map.svg",
  "settling-forces.svg",
  "spiral-wound-module.svg",
];

function replaceAllText(svg, replacements) {
  let localized = svg;
  for (const [source, target] of Object.entries(replacements).sort((a, b) => b[0].length - a[0].length)) {
    localized = localized.split(source).join(target);
  }
  return localized;
}

for (const [locale, dictionary] of Object.entries(dictionaries)) {
  for (const fileName of fileNames) {
    const sourcePath = join(sourceDir, fileName);
    const outputPath = join(process.cwd(), "public", "images", "lectures", locale, "separation", fileName);
    const source = await readFile(sourcePath, "utf8");
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, replaceAllText(source, dictionary), "utf8");
  }
}
