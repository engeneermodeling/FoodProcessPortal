import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const sourceDir = join(process.cwd(), "public", "images", "lectures", "mechanical");

const dictionaries = {
  en: {
    "Механізми агломерації порошків": "Powder agglomeration mechanisms",
    "Частинки порошку об'єднуються у більші агломерати через рідкі містки, липкі поверхні, стискання або кристалізацію розчинених речовин.":
      "Powder particles combine into larger agglomerates through liquid bridges, sticky surfaces, compression or crystallization of dissolved solids.",
    "Агломерація: дрібні частинки стають більшими": "Agglomeration: fine particles become larger",
    "Мета - поліпшити сипкість, змочуваність, розчинення, дозування або транспортування порошку":
      "Goal - improve flowability, wetting, dissolution, dosing or powder transport",
    "Рідкі містки": "Liquid bridges",
    "вода, пара, розчин зв'язувача": "water, steam, binder solution",
    "Стискання": "Compression",
    "валки, матриця, прес": "rolls, die, press",
    "Кристалізація": "Crystallization",
    "сушіння, цукри, солі, лактоза": "drying, sugars, salts, lactose",
    "Надмірна агломерація переходить у злежування, грудкування або втрату сипкості.":
      "Excessive agglomeration turns into caking, lumping or loss of flowability.",
    "Типи витікання сипких матеріалів з бункера": "Flow patterns of bulk solids from a hopper",
    "Порівняння масового витікання, канального витікання, зависання склепінням і утворення воронки.":
      "Comparison of mass flow, funnel flow, arching and rathole formation.",
    "Бункер має давати кероване витікання": "The hopper must provide controlled discharge",
    "масове витікання": "mass flow",
    "канальне витікання": "funnel flow",
    "зависання": "arching",
    "Причини: вологість, дрібна фракція, жир, електростатика, форма бункера, шорсткість стінок, час зберігання.":
      "Causes: moisture, fines, fat, electrostatics, hopper shape, wall roughness, storage time.",
    "Типовий цикл CIP-миття": "Typical CIP cleaning cycle",
    "Схема послідовності очищення обладнання без розбирання: видалення залишків, ополіскування, луг, вода, кислота, вода, дезінфекція і контроль.":
      "Sequence for cleaning equipment without disassembly: residue removal, rinse, caustic, water, acid, water, disinfection and control.",
    "CIP: повторюване миття без розбирання обладнання": "CIP: repeatable cleaning without equipment disassembly",
    "залишки": "residues",
    "дренаж": "drain",
    "вода": "water",
    "передзмив": "pre-rinse",
    "луг": "caustic",
    "жири білки": "fats proteins",
    "змив лугу": "caustic rinse",
    "кислота": "acid",
    "мінерали": "minerals",
    "фінальний змив": "final rinse",
    "дезінфекція": "disinfection",
    "гаряча вода / засіб": "hot water / agent",
    "контроль": "control",
    "провідність, pH": "conductivity, pH",
    "старт": "start",
    "виробництва": "production",
    "Параметри ефективного миття": "Parameters of effective cleaning",
    "Схема чотирьох взаємопов'язаних факторів очищення: хімія, температура, час і механічна дія.":
      "Four linked cleaning factors: chemistry, temperature, time and mechanical action.",
    "Ефективність миття тримається на балансі параметрів": "Cleaning efficiency depends on a balance of parameters",
    "чистота": "cleanliness",
    "поверхні після CIP": "surface after CIP",
    "хімія": "chemistry",
    "луг, кислота, засіб": "caustic, acid, agent",
    "температура": "temperature",
    "розчинення і реакції": "dissolution and reactions",
    "час": "time",
    "контакт із поверхнею": "contact with surface",
    "механіка": "mechanics",
    "швидкість, струмінь": "velocity, jet",
    "Варіанти транспортування сипких харчових матеріалів": "Transport options for bulk food materials",
    "Карта механічного і пневматичного транспорту: стрічка, шнек, ковшовий елеватор, розріджена і щільна фаза.":
      "Map of mechanical and pneumatic conveying: belt, screw, bucket elevator, dilute and dense phase.",
    "Транспортер вибирають за матеріалом, не за звичкою": "Choose the conveyor by material, not by habit",
    "Стрічковий": "Belt",
    "м'який, відкритий або закритий": "gentle, open or closed",
    "зерно, овочі, паковані продукти": "grain, vegetables, packaged products",
    "Шнековий": "Screw",
    "компактний, дозувальний": "compact, dosing",
    "борошно, крупи, вологі маси": "flour, groats, wet masses",
    "Ковшовий елеватор": "Bucket elevator",
    "вертикальне піднімання": "vertical lifting",
    "зерно, насіння, гранули": "grain, seeds, pellets",
    "Пневмо: розріджена фаза": "Pneumatic: dilute phase",
    "частинки летять у потоці": "particles fly in the flow",
    "просто, але більше зношування": "simple, but more wear",
    "Пневмо: щільна фаза": "Pneumatic: dense phase",
    "повільніше і м'якше": "slower and gentler",
    "крихкі гранули, агломерати": "fragile pellets, agglomerates",
    "Вібраційний": "Vibratory",
    "мала відстань, дозування": "short distance, dosing",
    "тендітні або липкі фракції": "fragile or sticky fractions",
    "Типи нарізання харчових продуктів": "Types of cutting food products",
    "Схема порівнює скибки, кубики, соломку, шинкування, подрібнення і пюрування.":
      "The scheme compares slices, cubes, sticks, shredding, mincing and pureeing.",
    "Різання задає форму, розмір і поверхню продукту": "Cutting sets product shape, size and surface",
    "Скибки": "Slices",
    "товщина, рівність, край": "thickness, uniformity, edge",
    "Кубики": "Cubes",
    "3D-різання, розподіл розмірів": "3D cutting, size distribution",
    "Соломка": "Sticks",
    "довжина, переріз, ламкість": "length, cross-section, breakage",
    "Шинкування": "Shredding",
    "капуста, сир, овочі": "cabbage, cheese, vegetables",
    "Подрібнення": "Mincing",
    "фарш, начинка, крихта": "mince, filling, crumbs",
    "Пюре / емульсія": "Puree / emulsion",
    "структура, повітря, температура": "structure, air, temperature",
    "Чинники якості різання": "Cutting quality factors",
    "Карта факторів: гострота ножа, температура продукту, подача, волокнистість, швидкість, санітарний дизайн.":
      "Factor map: knife sharpness, product temperature, feed, fibrousness, speed, hygienic design.",
    "Якість різання залежить не лише від ножа": "Cutting quality depends on more than the knife",
    "чистий": "clean",
    "стабільний зріз": "stable cut",
    "гострота і геометрія ножа": "knife sharpness and geometry",
    "температура продукту": "product temperature",
    "рівномірна подача": "uniform feed",
    "волокна, жир, волога": "fibres, fat, moisture",
    "санітарність і очищення": "hygiene and cleaning",
    "Принцип тривимірного нарізання кубиками": "Principle of three-dimensional dicing",
    "Продукт спочатку нарізають на скибку, потім на смуги, потім поперечним ножем на кубики.":
      "The product is first sliced, then cut into strips, then cross-cut into cubes.",
    "Кубик отримують послідовним різанням у трьох напрямах": "A cube is obtained by sequential cutting in three directions",
    "цілий продукт": "whole product",
    "скибки / смуги": "slices / strips",
    "кубики": "cubes",
    "Розмір задають товщина скибки, відстань між круглими ножами і крок поперечного різання.":
      "Size is set by slice thickness, spacing between circular knives and cross-cut pitch.",
    "Приклади екструдованих харчових продуктів": "Examples of extruded food products",
    "Карта продуктів: макарони, снеки, пластівці, сухі сніданки, панірувальні сухарі, текстуровані рослинні продукти.":
      "Product map: pasta, snacks, flakes, breakfast cereals, breadcrumbs, textured plant products.",
    "Екструзія задає форму, пористість і текстуру": "Extrusion sets shape, porosity and texture",
    "Макарони": "Pasta",
    "форма через матрицю": "shape through die",
    "сушіння визначає міцність": "drying determines strength",
    "Снеки": "Snacks",
    "розширення після матриці": "expansion after die",
    "хрумкість, пористість": "crispness, porosity",
    "Сухі сніданки": "Breakfast cereals",
    "пластівці, кульки, подушки": "flakes, balls, pillows",
    "текстура після сушіння": "texture after drying",
    "Панірування": "Breading",
    "структура крихти": "crumb structure",
    "розмір, колір, поглинання олії": "size, colour, oil absorption",
    "Рослинні білки": "Plant proteins",
    "волокниста структура": "fibrous structure",
    "текстура і вологість": "texture and moisture",
    "Напівфабрикати": "Semi-finished products",
    "пелети, заготовки": "pellets, blanks",
    "потім сушіння або обсмаження": "then drying or frying",
    "Зони харчового екструдера": "Food extruder zones",
    "Схема екструдера: подача, змішування, стискання, термомеханічна обробка, матриця і різання продукту.":
      "Extruder scheme: feeding, mixing, compression, thermomechanical treatment, die and product cutting.",
    "Екструдер поєднує транспортування, змішування і формування": "The extruder combines conveying, mixing and forming",
    "виріб": "product",
    "сировина + вода": "raw material + water",
    "подача": "feed",
    "змішування": "mixing",
    "стискання": "compression",
    "нагрів і зсув": "heating and shear",
    "матриця": "die",
    "Керують: вологістю, температурою зон, швидкістю шнека, тиском, геометрією матриці і різанням.":
      "Controlled by moisture, zone temperature, screw speed, pressure, die geometry and cutting.",
    "Вікно параметрів екструзії": "Extrusion process window",
    "Діаграма показує, як вологість і механічна енергія впливають на текстуру: сухий порошок, погане формування, стабільний продукт, перегрів і липкість.":
      "The diagram shows how moisture and mechanical energy affect texture: dry powder, poor forming, stable product, overheating and stickiness.",
    "Якість екструзії живе у технологічному вікні": "Extrusion quality lives in the process window",
    "вологість маси": "mass moisture",
    "механічна енергія / температура": "mechanical energy / temperature",
    "стабільне формування": "stable forming",
    "форма + текстура": "shape + texture",
    "сухо, пилить": "dry, dusty",
    "липкість": "stickiness",
    "перегрів, потемніння": "overheating, darkening",
    "недостатнє структурування": "insufficient structuring",
    "Об'ємне і вагове дозування сипких матеріалів": "Volumetric and gravimetric dosing of bulk solids",
    "Порівняння об'ємного дозатора і loss-in-weight дозатора, який контролює зміну маси бункера у часі.":
      "Comparison of a volumetric feeder and a loss-in-weight feeder that controls hopper mass change over time.",
    "Дозування: об'єм не завжди дорівнює масі": "Dosing: volume is not always mass",
    "Об'ємний дозатор": "Volumetric feeder",
    "точність залежить від насипної густини": "accuracy depends on bulk density",
    "Loss-in-weight": "Loss-in-weight",
    "тензодатчики": "load cells",
    "контроль за реальною зміною маси": "control by actual mass change",
    "Методи дозування та наповнення": "Dosing and filling methods",
    "Порівняння об'ємного, вагового, шнекового, поршневого, насосного і мультиголовочного дозування для різних харчових продуктів.":
      "Comparison of volumetric, gravimetric, screw, piston, pump and multihead dosing for different food products.",
    "Метод наповнення залежить від реології продукту": "The filling method depends on product rheology",
    "Об'ємне": "Volumetric",
    "стала камера або стакан": "fixed chamber or cup",
    "крупи, гранули, стабільна густина": "groats, granules, stable density",
    "Вагове": "Gravimetric",
    "контроль маси дози": "dose mass control",
    "снеки, печиво, заморожені овочі": "snacks, biscuits, frozen vegetables",
    "Шнекове": "Screw",
    "порошки і дрібні сипкі": "powders and fine bulk solids",
    "борошно, спеції, сухі суміші": "flour, spices, dry mixes",
    "Поршневе": "Piston",
    "в'язкі пасти і соуси": "viscous pastes and sauces",
    "джеми, креми, кетчуп": "jams, creams, ketchup",
    "Насосне": "Pump",
    "рідини, напої, молоко": "liquids, beverages, milk",
    "витрата, рівень, маса": "flow rate, level, mass",
    "Мультиголовочне": "Multihead",
    "комбінація малих порцій": "combination of small portions",
    "чипси, цукерки, заморожені продукти": "chips, sweets, frozen products",
    "Лінія очищення і сортування харчової сировини": "Food raw material cleaning and sorting line",
    "Послідовність операцій: попереднє очищення, аспірація, просіювання, магнітний сепаратор, оптичне сортування і контроль якості.":
      "Operation sequence: pre-cleaning, aspiration, screening, magnetic separator, optical sorting and quality control.",
    "Сортування як частина безпечної лінії": "Sorting as part of a safe line",
    "сировина": "raw material",
    "зерно, горіхи": "grain, nuts",
    "аспірація": "aspiration",
    "пил, легкі домішки": "dust, light impurities",
    "сита": "sieves",
    "розмір фракцій": "fraction size",
    "магніт": "magnet",
    "металодомішки": "metal impurities",
    "оптика": "optics",
    "колір": "colour",
    "Окремі апарати не замінюють контроль якості: проби, лабораторія, металодетектор, простежуваність партії.":
      "Individual machines do not replace quality control: sampling, laboratory, metal detector, batch traceability.",
    "Гігієнічний дизайн обладнання": "Hygienic equipment design",
    "Порівняння конструкції з застійними зонами і конструкції, що дренується та доступна для очищення.":
      "Comparison of a design with dead zones and a drainable, cleanable design.",
    "Гігієнічний дизайн: поверхня має очищатися і дренуватися": "Hygienic design: the surface must be cleanable and drainable",
    "Проблемна конструкція": "Problem design",
    "мертва зона": "dead zone",
    "залишки продукту стоять у кишенях, швах і тупиках": "product residues remain in pockets, seams and dead ends",
    "Гігієнічна конструкція": "Hygienic design",
    "плавні переходи, нахил, доступ CIP і відсутність застою": "smooth transitions, slope, CIP access and no stagnation",
    "Змочування інстантного порошку": "Wetting of instant powder",
    "Порівняння дрібного пилового порошку, який утворює грудки, і пористого агломерованого порошку, який швидше змочується та тоне.":
      "Comparison of fine dusty powder that forms lumps and porous agglomerated powder that wets faster and sinks.",
    "Інстантизація змінює поведінку порошку у воді": "Instantizing changes powder behaviour in water",
    "Дрібний порошок": "Fine powder",
    "плаває, грудкується, погано змочується": "floats, lumps, wets poorly",
    "Агломерований порошок": "Agglomerated powder",
    "швидше змочується, тоне і диспергується": "wets faster, sinks and disperses",
    "Вибір млина для харчової сировини": "Mill selection for food raw materials",
    "Таблична карта вибору подрібнювача залежно від матеріалу: зерно, спеції, м'ясо, шоколадна маса, горіхи.":
      "Tabular map for selecting a grinder by material: grain, spices, meat, chocolate mass, nuts.",
    "Вибір апарата починається з матеріалу": "Equipment selection starts with the material",
    "Матеріал": "Material",
    "Проблема": "Problem",
    "Типовий апарат": "Typical machine",
    "Контроль": "Control",
    "зерно": "grain",
    "оболонки, клейковина, вологість": "hulls, gluten, moisture",
    "вальцьовий млин": "roller mill",
    "зольність, d50": "ash content, d50",
    "спеції": "spices",
    "аромат, нагрів, пил": "aroma, heating, dust",
    "молотковий / штифтовий": "hammer / pin",
    "м'ясо, сир": "meat, cheese",
    "волокна, жир, температура": "fibres, fat, temperature",
    "ножовий подрібнювач": "knife cutter",
    "текстура": "texture",
    "шоколад, пасти": "chocolate, pastes",
    "в'язкість, жир, гладкість": "viscosity, fat, smoothness",
    "кульовий / валковий": "ball / roller",
    "мікрони": "microns",
    "Контроль якості пакованого продукту": "Quality control of packaged product",
    "Схема контролю: контрольна вага, герметичність, металодетектор або рентген, код партії і відбраковка.":
      "Control scheme: check weight, seal integrity, metal detector or X-ray, batch code and reject.",
    "Після запаювання продукт ще не готовий до відвантаження": "After sealing, the product is not yet ready for shipment",
    "пакет": "pack",
    "вага": "weight",
    "checkweigher": "checkweigher",
    "інспекція": "inspection",
    "метал / X-ray": "metal / X-ray",
    "відбраковка": "reject",
    "повітряний штовхач": "air pusher",
    "Паковану одиницю перевіряють на масу, герметичність, сторонні предмети, код партії, дату і цілісність шва.":
      "A packed unit is checked for mass, seal integrity, foreign objects, batch code, date and seam integrity.",
    "Структура лінії фасування та пакування": "Structure of a filling and packaging line",
    "Потік продукту: подача, дозування, наповнення, запаювання, контроль ваги, інспекція і відбраковка.":
      "Product flow: feeding, dosing, filling, sealing, weight control, inspection and reject.",
    "Пакувальна лінія - це процесний ланцюг контролю": "A packaging line is a process control chain",
    "бункер, насос": "hopper, pump",
    "доза": "dose",
    "маса/об'єм": "mass/volume",
    "наповн.": "filling",
    "тара, пакет": "container, pack",
    "закриття": "closing",
    "шов, кришка": "seam, lid",
    "вага, метал": "weight, metal",
    "випуск": "release",
    "партія": "batch",
    "Критичні точки: точність дози, герметичність, маркування, сторонні предмети, відбраковка і простежуваність.":
      "Critical points: dose accuracy, seal integrity, labelling, foreign objects, reject and traceability.",
    "Розподіл частинок після подрібнення": "Particle size distribution after grinding",
    "Графік показує, що після подрібнення отримують не один розмір, а розподіл частинок з дрібною і крупною фракцією.":
      "The chart shows that grinding produces not one size, but a particle distribution with fine and coarse fractions.",
    "Після млина є не “розмір”, а розподіл": "After a mill there is not a 'size', but a distribution",
    "розмір частинки": "particle size",
    "частка фракції": "fraction share",
    "дрібна фракція": "fine fraction",
    "крупна фракція": "coarse fraction",
    "Для якості важливі d10, d50, d90, пилова фракція, крупні залишки і стабільність розподілу в часі.":
      "Quality depends on d10, d50, d90, dust fraction, coarse residues and distribution stability over time.",
    "Схема гранулювання та пелетування": "Granulation and pelletizing line",
    "Сухі компоненти дозують, змішують, кондиціонують парою або рідиною, пресують через матрицю, охолоджують, просіюють і пакують.":
      "Dry components are dosed, mixed, conditioned with steam or liquid, pressed through a die, cooled, screened and packed.",
    "Лінія гранулювання: від порошку до стабільної гранули": "Granulation line: from powder to stable pellet",
    "дозування": "dosing",
    "компоненти": "components",
    "однорідність": "uniformity",
    "зволоження": "moistening",
    "пара, вода": "steam, water",
    "ущільнення": "compaction",
    "охолодження": "cooling",
    "просіювання, пакування": "screening, packaging",
    "Критичні змінні: вологість, температура кондиціонування, зв'язувач, тиск, отвір матриці, охолодження.":
      "Critical variables: moisture, conditioning temperature, binder, pressure, die opening, cooling.",
    "Приклади пресування у харчових виробництвах": "Examples of pressing in food production",
    "Карта прикладів: олійне насіння, яблучний сік, сирна маса, жом, оливкова паста, вологі порошки.":
      "Example map: oilseeds, apple juice, curd mass, pulp, olive paste, wet powders.",
    "Де використовується механічне віджимання": "Where mechanical pressing is used",
    "Олійне насіння": "Oilseeds",
    "соняшник, ріпак, соя": "sunflower, rapeseed, soy",
    "плющення, кондиціювання, прес": "flaking, conditioning, press",
    "Соки і пюре": "Juices and purees",
    "яблука, ягоди, овочі": "apples, berries, vegetables",
    "подрібнення, прес, фільтрація": "grinding, press, filtration",
    "Сирна маса": "Curd mass",
    "видалення сироватки": "whey removal",
    "м'який тиск і час": "gentle pressure and time",
    "Жом і вичавки": "Pulp and pomace",
    "цукровий буряк, фрукти": "sugar beet, fruits",
    "зменшення вологи перед сушінням": "moisture reduction before drying",
    "Оливкова паста": "Olive paste",
    "олія, вода, тверда фаза": "oil, water, solid phase",
    "декантер після підготовки пасти": "decanter after paste preparation",
    "Вологі порошки": "Wet powders",
    "осади, концентрати": "sediments, concentrates",
    "перед сушінням або утилізацією": "before drying or disposal",
    "Принцип механічного пресування": "Principle of mechanical pressing",
    "Матеріал стискають між плитами або в камері, рідина виходить через дренаж, тверда фаза ущільнюється у макуху або осад.":
      "Material is compressed between plates or in a chamber, liquid leaves through drainage, the solid phase compacts into cake or sediment.",
    "Пресування: тиск витісняє рідку фазу": "Pressing: pressure displaces the liquid phase",
    "Мета - отримати сік, олію або зневоднену тверду фазу без надмірного руйнування продукту":
      "Goal - obtain juice, oil or a dewatered solid phase without excessive product damage",
    "тиск": "pressure",
    "сік / олія / сироватка": "juice / oil / whey",
    "ущільнена маса": "compacted mass",
    "Ключові змінні: тиск, час, температура, проникність шару, попереднє подрібнення і дренаж.":
      "Key variables: pressure, time, temperature, cake permeability, pre-grinding and drainage.",
    "Лінія миття та інспекції харчової сировини": "Food raw material washing and inspection line",
    "Послідовність операцій: приймання, сухе очищення, миття, ополіскування, видалення води, інспекція і калібрування.":
      "Operation sequence: receiving, dry cleaning, washing, rinsing, water removal, inspection and grading.",
    "Очищення сировини - це ланцюг бар'єрів": "Raw material cleaning is a chain of barriers",
    "приймання": "receiving",
    "проби, партія": "samples, batch",
    "сухе": "dry",
    "земля, листя": "soil, leaves",
    "миття": "washing",
    "вода, щітки": "water, brushes",
    "ополіск.": "rinse",
    "чиста вода": "clean water",
    "осушення": "dewatering",
    "повітря, сито": "air, sieve",
    "інсп.": "inspection",
    "якість": "quality",
    "Кожна стадія зменшує певний ризик, але жодна сама по собі не гарантує безпечний продукт.":
      "Each stage reduces a certain risk, but none alone guarantees a safe product.",
    "Схема шнекового преса": "Screw press scheme",
    "Шнек переміщує матеріал у звуженій камері, тиск зростає, рідина проходить крізь перфоровану оболонку, макуха виходить через регульований зазор.":
      "The screw moves material through a narrowing chamber, pressure rises, liquid passes through the perforated shell and cake exits through an adjustable gap.",
    "Шнековий прес: безперервне стискання": "Screw press: continuous compression",
    "підготовлена маса": "prepared mass",
    "макуха": "cake",
    "відтиснена рідина": "pressed liquid",
    "тиск зростає у напрямку виходу": "pressure increases toward the outlet",
    "Ефективність просіювання": "Sieving efficiency",
    "Схема показує чинники, які впливають на ефективність просіювання сипких харчових матеріалів.":
      "The scheme shows factors affecting the sieving efficiency of bulk food materials.",
    "Чому сито “не просто отвір”": "Why a sieve is not 'just a hole'",
    "Однакове сито дає різний результат для сухого борошна, вологої крупки, спецій або жирного порошку":
      "The same sieve gives different results for dry flour, moist grits, spices or fatty powder",
    "ефективність": "efficiency",
    "просіювання": "sieving",
    "товщина шару": "bed thickness",
    "вологість і злипання": "moisture and sticking",
    "форма частинок": "particle shape",
    "амплітуда і частота": "amplitude and frequency",
    "засмічення отворів": "blinding of openings",
    "Потік матеріалу через сито": "Material flow through a sieve",
    "Суміш частинок надходить на сито, дрібна фракція проходить крізь отвори, крупна сходить з поверхні.":
      "A particle mixture enters the sieve; fine fraction passes through openings and coarse fraction leaves the surface.",
    "Просіювання розділяє потік на фракції": "Sieving splits the stream into fractions",
    "Результат залежить не лише від отвору сита, а й від шару, вологості, форми частинок і часу контакту":
      "The result depends not only on sieve opening, but also on bed depth, moisture, particle shape and contact time",
    "суміш після млина": "mixture after mill",
    "сито": "sieve",
    "схід": "oversize",
    "прохід": "undersize",
    "Мета: потрібна чистота фракції, мінімум втрат придатного продукту і стабільна продуктивність.":
      "Goal: required fraction purity, minimal loss of usable product and stable capacity.",
    "Карта способів подрібнення харчових матеріалів": "Map of size-reduction methods for food materials",
    "Порівняння стискання, удару, стирання і різання для різних харчових матеріалів.":
      "Comparison of compression, impact, attrition and cutting for different food materials.",
    "Як руйнується харчовий матеріал": "How food material breaks down",
    "Механізм подрібнення вибирають за крихкістю, вологою, жирністю, волокнистістю і потрібною текстурою":
      "The size-reduction mechanism is chosen by brittleness, moisture, fat content, fibrousness and desired texture",
    "вальцьові млини": "roller mills",
    "Удар": "Impact",
    "молоткові дробарки": "hammer mills",
    "Стирання": "Attrition",
    "дискові, кульові млини": "disc, ball mills",
    "Різання": "Cutting",
    "ножові машини, вовчки": "knife cutters, grinders",
    "Контроль води під час миття сировини": "Water control during raw material washing",
    "Схема показує баланс: подача чистої води, забруднення від сировини, фільтрація, знезараження, скид або рециркуляція.":
      "The scheme shows the balance: clean water supply, contamination from raw material, filtration, disinfection, discharge or recirculation.",
    "Вода може очищати або переносити забруднення": "Water can clean or carry contamination",
    "мийна ванна": "washing tank",
    "сировина + вода + домішки": "raw material + water + impurities",
    "забруднена вода": "contaminated water",
    "фільтрація + контроль дезінфектанту": "filtration + disinfectant control",
    "ґрунт, органіка, мікрофлора": "soil, organics, microflora",
    "Контролюють: мутність, органічне навантаження, температуру, pH, залишок дезінфектанту, час контакту.":
      "Controlled: turbidity, organic load, temperature, pH, disinfectant residual, contact time.",
    "Методи миття харчової сировини": "Food raw material washing methods",
    "Порівняння барабанного, флотаційного, щіткового та душового миття для різної сировини.":
      "Comparison of drum, flotation, brush and shower washing for different raw materials.",
    "Метод миття залежить від форми і міцності сировини": "Washing method depends on raw material shape and strength",
    "Барабанне миття": "Drum washing",
    "тертя + обертання": "friction + rotation",
    "картопля, коренеплоди": "potatoes, root crops",
    "Флотаційне": "Flotation",
    "вода + різниця густини": "water + density difference",
    "листя, камінці, легкі домішки": "leaves, stones, light impurities",
    "Щіткове": "Brush",
    "механічне зняття ґрунту": "mechanical soil removal",
    "овочі, тверді плоди": "vegetables, firm fruits",
    "Душове": "Shower",
    "струмені води": "water jets",
    "делікатна сировина": "delicate raw material",
    "Повітряне очищення": "Air cleaning",
    "аспірація, пил, лушпиння": "aspiration, dust, husk",
    "зерно, насіння, спеції": "grain, seeds, spices",
    "Комбіноване": "Combined",
    "сухе + мокре + інспекція": "dry + wet + inspection",
    "післязбиральні лінії": "postharvest lines",
  },
};

const ruOverrides = {
  "і": "и",
  "І": "И",
  "ї": "и",
  "Ї": "И",
  "є": "е",
  "Є": "Е",
  "ґ": "г",
  "Ґ": "Г",
};

const translitMap = {
  а: "a",
  б: "b",
  в: "v",
  г: "h",
  ґ: "g",
  д: "d",
  е: "e",
  є: "ie",
  ж: "zh",
  з: "z",
  и: "y",
  і: "i",
  ї: "i",
  й: "i",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ь: "",
  ю: "iu",
  я: "ia",
};

function toDeFallback(text) {
  return toLatinFallback(text);
}

function toLatinFallback(text) {
  return [...text]
    .map((char) => {
      const lower = char.toLowerCase();
      const mapped = translitMap[lower];
      if (!mapped) return char;
      return char === lower ? mapped : mapped.toUpperCase();
    })
    .join("");
}

function toRuFallback(text) {
  return [...text].map((char) => ruOverrides[char] ?? char).join("");
}

function buildDictionary(locale) {
  if (locale === "en") return dictionaries.en;
  if (locale === "de") {
    return Object.fromEntries(Object.entries(dictionaries.en).map(([source, target]) => [source, toDeFallback(target)]));
  }
  return Object.fromEntries(Object.entries(dictionaries.en).map(([source, target]) => [source, toRuFallback(source)]));
}

function replaceAllText(svg, replacements, fallback) {
  let localized = svg;
  const entries = Object.entries(replacements).sort((a, b) => b[0].length - a[0].length);
  for (const [source, target] of entries) {
    localized = localized.split(source).join(target);
  }

  return localized.replace(/>([^<>]*[А-Яа-яІіЇїЄєҐґ][^<>]*)</g, (_, text) => `>${fallback(text)}<`);
}

const files = (await readdir(sourceDir)).filter((fileName) => fileName.endsWith(".svg")).sort();

for (const locale of ["en", "de", "ru"]) {
  const outputDir = join(process.cwd(), "public", "images", "lectures", locale, "mechanical");
  const dictionary = buildDictionary(locale);
  const fallback = locale === "ru" ? toRuFallback : toLatinFallback;

  for (const fileName of files) {
    const sourcePath = join(sourceDir, fileName);
    const outputPath = join(outputDir, fileName);
    const source = await readFile(sourcePath, "utf8");
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, replaceAllText(source, dictionary, fallback), "utf8");
  }
}
