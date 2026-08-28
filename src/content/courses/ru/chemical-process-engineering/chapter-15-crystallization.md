---
title: "Раздел 15. Кристаллизация"
course: "chemical-process-engineering"
course_title: "Процессы и аппараты химических производств"
chapter: 15
description: "Физические основы, кинетика, зародышеобразование, рост кристаллов, аппараты и принципы расчета кристаллизаторов."
updated: "2026-08-23"
---

## Фокус раздела

В этом разделе последовательно рассмотрены основные понятия, уравнения и аппаратурные решения по теме.

## Структура материала раздела

- 15.1. Общие сведения
- 15.2. Физические основы кристаллизации из растворов
- 15.3. Кинетика процесса кристаллизации
- 15.4. Кристаллообразование
- 15.5. Рост кристаллов
- 15.10. Факторы влияния
- 15.11. Аппараты для кристаллизации
- 15.12. Основные принципы расчета

## Конспект лекции

Кристаллизация - массообменный процесс образования твердой фазы в виде кристаллов из растворов, расплавов, газов или пара. В пищевых и химических производствах ее используют для получения и очистки сахарозы, глюкозы, лактозы, фруктозы, лимонной кислоты, солей и других кристаллических продуктов.

### 15.1. Общие сведения

Кристалл имеет упорядоченную кристаллическую решетку, а его форма определяется симметрией, поверхностной энергией граней и условиями роста. Промышленная кристаллизация чаще всего происходит из пересыщенных растворов. Ее проводят охлаждением, выпариванием растворителя, вымораживанием, высаливанием, химической реакцией или сочетанием нескольких факторов.

![Кристалл сахарозы](/images/courses/chemical-process-engineering/chapter-15/fig-15-1.webp)
*Рис. 15.1. Кристалл сахарозы*

### 15.2. Физические основы кристаллизации из растворов

Статика кристаллизации задает равновесие между кристаллами и межкристальным раствором, кинетика описывает скорость перехода вещества из жидкой фазы в твердую, а динамика показывает изменение параметров во времени. Движущая сила - пересыщение, то есть превышение концентрации над равновесной растворимостью.

<div class="equation-block">
  <span class="equation-main">Π = c - c<sub>s</sub></span>
  <span class="equation-number">(15.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">α = c/c<sub>s</sub></span>
  <span class="equation-number">(15.2)</span>
</div>

![График растворимости двухкомпонентной системы сахароза - вода](/images/courses/chemical-process-engineering/chapter-15/fig-15-2.webp)
*Рис. 15.2. График растворимости двухкомпонентной системы сахароза - вода*

### 15.3. Кинетика процесса кристаллизации

Кинетика состоит из двух главных стадий: образования центров кристаллизации и роста кристаллов. На кривых кристаллизации выделяют период создания пересыщения, латентный период зародышеобразования и период роста. Подпитка свежим раствором и выпаривание растворителя могут поддерживать нужное пересыщение.

<div class="equation-block">
  <span class="equation-main">τ<sub>l</sub> = τ<sub>2</sub> - τ<sub>1</sub></span>
  <span class="equation-number">(15.3)</span>
</div>

![Кинематические кривые кристаллизации](/images/courses/chemical-process-engineering/chapter-15/fig-15-3.webp)
*Рис. 15.3. Кинематические кривые кристаллизации*

### 15.4. Кристаллообразование

Центры кристаллизации возникают вследствие гомогенного или гетерогенного зародышеобразования. В реальных промышленных растворах, в частности сахарных, механизм преимущественно гетерогенный: на процесс влияют примеси, перемешивание, вязкость, ультразвук, электрические и магнитные поля, колебания температуры и внесенные кристаллы.

<div class="equation-block">
  <span class="equation-main">δF = -[(μ<sub>1</sub> - μ<sub>2</sub>)/V] + σS</span>
  <span class="equation-number">(15.4)</span>
</div>

<div class="equation-block">
  <span class="equation-main">δF = 4πr<sup>2</sup>σ - (4/3)πr<sup>3</sup>(μ<sub>1</sub> - μ<sub>2</sub>)/V</span>
  <span class="equation-number">(15.5)</span>
</div>

<div class="equation-block">
  <span class="equation-main">r<sub>k</sub> = 2σV/(μ<sub>1</sub> - μ<sub>2</sub>)</span>
  <span class="equation-number">(15.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ΔF<sub>max</sub> = (δF)<sub>max</sub> = σS<sub>k</sub>/3 = 16πσ<sup>3</sup>V<sup>2</sup>/[3(μ<sub>1</sub> - μ<sub>2</sub>)<sup>2</sup>]</span>
  <span class="equation-number">(15.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = K exp(-ΔF<sub>max</sub>/RT)</span>
  <span class="equation-number">(15.8)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = K exp{-16πσ<sup>3</sup>V<sup>2</sup>/[3RT(μ<sub>1</sub> - μ<sub>2</sub>)<sup>2</sup>]}</span>
  <span class="equation-number">(15.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">μ<sub>1</sub> = RT ln c + j</span>
  <span class="equation-number">(15.10)</span>
</div>

<div class="equation-block">
  <span class="equation-main">μ<sub>2</sub> = RT ln c<sub>s</sub> + j</span>
  <span class="equation-number">(15.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">μ<sub>1</sub> - μ<sub>2</sub> = RT ln(c/c<sub>s</sub>) = RT ln[(Δc + c<sub>s</sub>)/c<sub>s</sub>]</span>
  <span class="equation-number">(15.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = K exp{-16πσ<sup>3</sup>V<sup>2</sup>/[3R<sup>3</sup>T<sup>3</sup>ln<sup>2</sup>(c/c<sub>s</sub>)]}</span>
  <span class="equation-number">(15.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = K exp{-4εσ<sup>3</sup>V<sup>2</sup>/[R<sup>3</sup>T<sup>3</sup>ln<sup>2</sup>(c/c<sub>s</sub>)]}</span>
  <span class="equation-number">(15.14)</span>
</div>

### 15.5. Рост кристаллов

После образования устойчивого зародыша кристалл растет через диффузию вещества к поверхности, адсорбцию, поверхностную миграцию частиц и встраивание их в кристаллическую решетку. Скорость роста может определяться диффузионной, диффузионно-кинетической или кинетической стадией; при массовой кристаллизации важны полидисперсность, рекристаллизация и гидродинамика суспензии.

<div class="equation-block">
  <span class="equation-main">dG/(Fdτ) = kΔc</span>
  <span class="equation-number">(15.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δc = Δc<sub>1</sub> + Δc<sub>2</sub></span>
  <span class="equation-number">(15.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M<sub>1</sub> = k<sub>1</sub>(c - c<sub>1</sub>) = k<sub>1</sub>Δc<sub>1</sub></span>
  <span class="equation-number">(15.17)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M<sub>2</sub> = k<sub>2</sub>Δc<sub>2</sub><sup>2</sup> = k<sub>2</sub>(c<sub>1</sub> - c<sub>s</sub>)<sup>2</sup></span>
  <span class="equation-number">(15.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = M<sub>1</sub> = M<sub>2</sub> = kΔc = k<sub>1</sub>Δc<sub>1</sub> = k<sub>2</sub>Δc<sub>2</sub><sup>2</sup></span>
  <span class="equation-number">(15.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = M<sub>1</sub> = D(c - c<sub>1</sub>)/δ</span>
  <span class="equation-number">(15.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = D(c - c<sub>1</sub>)/δ = k<sub>2</sub>(c<sub>1</sub> - c<sub>s</sub>)<sup>2</sup></span>
  <span class="equation-number">(15.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = [D/(2δ)](√(1 + 4k<sub>2</sub>δΔc/D) - 1)</span>
  <span class="equation-number">(15.22)</span>
</div>

### 15.6-15.9. Вторичное зародышеобразование, рекристаллизация и тепломассообмен

Вторичное зародышеобразование связано с уже имеющимися кристаллами, их столкновениями, истиранием и локальными изменениями пересыщения. Рекристаллизация уменьшает суммарную свободную поверхностную энергию дисперсной системы: мелкие частицы растворяются, а крупные растут. В промышленных кристаллизаторах тепломассообмен, циркуляция, кипение, выпаривание воды и конструкция аппарата взаимосвязаны.

<div class="equation-block">
  <span class="equation-main">J<sub>1</sub> = L<sub>11</sub>X<sub>1</sub> + L<sub>12</sub>X<sub>2</sub>; J<sub>2</sub> = L<sub>21</sub>X<sub>1</sub> + L<sub>22</sub>X<sub>2</sub></span>
  <span class="equation-number">(15.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L<sub>12</sub> = L<sub>21</sub></span>
  <span class="equation-number">(15.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dW<sub>p</sub> = dW<sub>v</sub>; dM<sub>kr</sub> = dM<sub>p,cz</sub>; dM<sub>kr</sub> = (Cz<sub>p</sub>/W<sub>p</sub>)dW<sub>v</sub></span>
  <span class="equation-number">(15.25)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M<sub>kr</sub> = qFCz<sub>p</sub>/(arW<sub>p</sub>)</span>
  <span class="equation-number">(15.26)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dM<sub>kr</sub>/dτ = [Cz<sub>p</sub>/W<sub>p</sub>][FΔt k<sub>0</sub>/(ar)] exp(-τ/θ)</span>
  <span class="equation-number">(15.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">φ = ε<sub>r</sub>/ε<sub>t</sub> = [V<sub>r</sub>(s)/V<sub>t</sub>(s)]/[V<sub>r</sub>(y)/V<sub>t</sub>(y)]</span>
  <span class="equation-number">(15.28)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ε = m<sub>(s)i</sub>/m<sub>(y)i</sub></span>
  <span class="equation-number">(15.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Fo′ = f(Pr′, Ar, Π, Π<sub>ρ</sub>, Π<sub>V</sub>)</span>
  <span class="equation-number">(15.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Fo′ = Dτ/l<sup>2</sup>; Pr′ = ν/D; Ar = gl<sup>3</sup>Δρ/(ν<sup>2</sup>ρ); Π = c<sub>s</sub>/Δc; Π<sub>ρ</sub> = ΔG/(ρ<sub>kr</sub>l<sup>3</sup>); Π<sub>V</sub> = ρ<sub>p</sub>/ρ<sub>kr</sub></span>
  <span class="equation-number">(15.31)</span>
</div>

### 15.10. Факторы влияния на ход процесса

На образование зародышей и рост кристаллов влияют пересыщение, температура, чистота раствора, вязкость, примеси, удельная поверхностная энергия, перемешивание, циркуляция и паровая фаза при кипении. Для сахарных растворов снижение чистоты увеличивает латентный период, а повышение температуры и уменьшение вязкости ускоряют рост.

<div class="equation-block">
  <span class="equation-main">τ<sub>l</sub> = A<sub>l</sub> exp(-B<sub>l</sub>P)</span>
  <span class="equation-number">(15.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = b(Π - 1)<sup>n</sup></span>
  <span class="equation-number">(15.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = d<sub>0</sub> exp[-E/(RT)]</span>
  <span class="equation-number">(15.34)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = lP<sup>m</sup></span>
  <span class="equation-number">(15.35)</span>
</div>

### 15.11. Аппараты для кристаллизации

Кристаллизаторы работают в периодическом или непрерывном режиме. Их классифицируют по пространственному размещению, форме корпуса, числу секций, циркуляции суспензии и типу поверхности теплообмена. В сахарном производстве используют вакуум-аппараты периодического действия, непрерывные вакуум-аппараты, горизонтальные и вертикальные перемешиватели-кристаллизаторы.

![Вакуум-аппарат типа А2-ПВР](/images/courses/chemical-process-engineering/chapter-15/fig-15-5.webp)
*Рис. 15.5. Вакуум-аппарат типа А2-ПВР*

![Схема потоков непрерывного уваривания и кристаллизации сахарных утфелей](/images/courses/chemical-process-engineering/chapter-15/fig-15-6.webp)
*Рис. 15.6. Схема потоков непрерывного уваривания и кристаллизации сахарных утфелей*

![Вакуум-аппарат непрерывного действия системы КТИПП: а - структурная схема; б - конструкция](/images/courses/chemical-process-engineering/chapter-15/fig-15-7.webp)
*Рис. 15.7. Вакуум-аппарат непрерывного действия системы КТИПП: а - структурная схема; б - конструкция*

![Горизонтальный перемешиватель-кристаллизатор](/images/courses/chemical-process-engineering/chapter-15/fig-15-8.webp)
*Рис. 15.8. Горизонтальный перемешиватель-кристаллизатор*

![Вертикальный перемешиватель-кристаллизатор](/images/courses/chemical-process-engineering/chapter-15/fig-15-9.webp)
*Рис. 15.9. Вертикальный перемешиватель-кристаллизатор*

### 15.12. Основные принципы расчета

Расчет кристаллизаторов выполняют в последовательности: технологический, теплотехнический, гидродинамический, конструктивный, механический и технико-экономический. Его основа - материальные и тепловые балансы, массовые графики кристаллизации, оценка теплопередачи, циркуляции, времени пребывания продукта и прочности элементов аппарата.

<div class="equation-block">
  <span class="equation-main">ΣG = G<sub>1</sub> + G<sub>2</sub>; G<sub>1</sub> = G<sub>n.sr</sub> + W<sub>1</sub> = G<sub>n.cz</sub> + G<sub>n.nz</sub> + W<sub>1</sub>; G<sub>2</sub> = G<sub>p.sr</sub> + W<sub>p</sub></span>
  <span class="equation-number">(15.36)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ΔQ + i<sub>p</sub>ΔG<sub>p</sub> + r<sub>kr</sub>ΔG<sub>kr</sub> = i<sub>v</sub>ΔW<sub>v</sub> + Δ(i<sub>y</sub>G<sub>y</sub>) + Q<sub>loss</sub></span>
  <span class="equation-number">(15.37)</span>
</div>

![Схема статического материального баланса многоступенчатой кристаллизации](/images/courses/chemical-process-engineering/chapter-15/fig-15-10.webp)
*Рис. 15.10. Схема статического материального баланса многоступенчатой кристаллизации*

![Массовый график варки и кристаллизации сахарных утфелей в вакуум-аппарате и перемешивателе-кристаллизаторе](/images/courses/chemical-process-engineering/chapter-15/fig-15-11.webp)
*Рис. 15.11. Массовый график варки и кристаллизации сахарных утфелей в вакуум-аппарате и перемешивателе-кристаллизаторе*

## После изучения раздела студент должен уметь

- объяснять роль понятия «пересыщение» в пределах раздела;
- связывать «зародышеобразование» с аппаратурным оформлением химического производства;
- различать основные параметры, влияющие на «рост кристаллов»;
- обосновывать выбор или оценку процесса через «кристаллизатор».

## Тест для самопроверки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="ru"
  data-course="chemical-process-engineering"
  data-chapter="chapter-15-crystallization"
  data-result-label="Результат"
  data-best-label="Лучший результат"
  data-choose-label="Выберите ответ."
  data-correct-label="Правильно."
  data-incorrect-label="Нужно повторить."
>
<form data-course-test-form>
<fieldset class="course-test-item" data-course-test-item>
<legend>1. Какое понятие лучше всего характеризует содержание раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>зародышеобразование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>рост кристаллов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>кристаллизатор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-0" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>пересыщение</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Какой подраздел непосредственно входит в структуру раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-1" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>15.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>15.2. Физические основы кристаллизации из растворов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>15.3. Кинетика процесса кристаллизации</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>15.4. Кристаллообразование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На какое понятие прежде всего опирается инженерный анализ этого раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>пересыщение</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-2" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>зародышеобразование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>рост кристаллов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>кристаллизатор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Что теснее всего связывает теорию процесса с аппаратурным оформлением?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>пересыщение</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>зародышеобразование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-3" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>кристаллизатор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>рост кристаллов</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>пересыщение</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>зародышеобразование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>кристаллизатор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-4" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>рост кристаллов</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. С какой темы начинается раздел в структуре раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-5" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>15.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>15.2. Физические основы кристаллизации из растворов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>15.3. Кинетика процесса кристаллизации</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>15.4. Кристаллообразование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Какой подраздел непосредственно входит в структуру раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>15.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-6" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>15.2. Физические основы кристаллизации из растворов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>15.3. Кинетика процесса кристаллизации</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>15.4. Кристаллообразование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Какая тема завершает структуру раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>15.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>15.2. Физические основы кристаллизации из растворов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-7" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>15.12. Основные принципы расчета</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>15.3. Кинетика процесса кристаллизации</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Какую пару понятий целесообразно сопоставлять при самопроверке?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>рост кристаллов / кристаллизатор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>пересыщение / рост кристаллов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>зародышеобразование / кристаллизатор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-8" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>пересыщение / зародышеобразование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Что лучше всего подходит для практического обоснования выбора процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-9" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>кристаллизатор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>пересыщение</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>зародышеобразование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>рост кристаллов</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>пересыщение</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-10" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>зародышеобразование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>рост кристаллов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>кристаллизатор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Какой объект представлен в этом разделе как наглядный рисунок?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>пересыщение</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>зародышеобразование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-11" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Кристалл сахарозы</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>рост кристаллов</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>
<div class="course-test-actions">
  <button type="submit" class="course-test-primary">Проверить</button>
  <button type="button" class="course-test-secondary" data-course-test-reset>Сбросить</button>
</div>
</form>
<p class="course-test-status" aria-live="polite">
  <strong data-course-test-result>Результат: 0/12</strong>
  <span data-course-test-best>Лучший результат: -</span>
</p>
<details class="course-test-answers">
<summary>Ответы</summary>
<ol>
<li>Вопрос 1: Правильный ответ - D</li>
<li>Вопрос 2: Правильный ответ - A</li>
<li>Вопрос 3: Правильный ответ - B</li>
<li>Вопрос 4: Правильный ответ - C</li>
<li>Вопрос 5: Правильный ответ - D</li>
<li>Вопрос 6: Правильный ответ - A</li>
<li>Вопрос 7: Правильный ответ - B</li>
<li>Вопрос 8: Правильный ответ - C</li>
<li>Вопрос 9: Правильный ответ - D</li>
<li>Вопрос 10: Правильный ответ - A</li>
<li>Вопрос 11: Правильный ответ - B</li>
<li>Вопрос 12: Правильный ответ - C</li>
</ol>
</details>
</section>

