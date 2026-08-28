---
title: "Розділ 15. Кристалізація"
course: "bioprocess-engineering"
course_title: "Інжиніринг біопроцесів: процеси та апарати біотехнологічних виробництв"
chapter: 15
description: "Фізичні основи, кінетика, зародкоутворення, ріст кристалів, апарати і принципи розрахунку кристалізаторів."
updated: "2026-08-23"
---

## Фокус розділу

У цьому розділі послідовно розглянуто ключові поняття, рівняння та апаратурні рішення за темою.

## Структура матеріалу розділу

- 15.1. Загальні відомості
- 15.2. Фізичні основи кристалізації із розчинів
- 15.3. Кінетика процесу кристалізації
- 15.4. Кристалоутворення
- 15.5. Ріст кристалів
- 15.10. Фактори впливу
- 15.11. Апарати для кристалізації
- 15.12. Основні принципи розрахунку

## Матеріал розділу

Кристалізація - масообмінний процес утворення твердої фази у вигляді кристалів із розчинів, розплавів, газів або пари. У харчових і біотехнологічних виробництвах вона використовується для одержання та очищення цукрози, глюкози, лактози, фруктози, лимонної кислоти, солей та інших кристалічних продуктів.

### 15.1. Загальні відомості

Кристал має упорядковану кристалічну гратку, а його форма визначається симетрією, поверхневою енергією граней і умовами росту. Промислова кристалізація найчастіше відбувається з пересичених розчинів. Її проводять охолодженням, випарюванням розчинника, виморожуванням, висолюванням, хімічною реакцією або поєднанням кількох факторів.

![Кристал цукрози](/images/courses/bioprocess-engineering/chapter-15/fig-15-1.webp)
*Рис. 15.1. Кристал цукрози*

### 15.2. Фізичні основи кристалізації із розчинів

Статика кристалізації задає рівновагу між кристалами та міжкристальним розчином, кінетика описує швидкість переходу речовини з рідкої фази у тверду, а динаміка показує зміну параметрів у часі. Рушійною силою є пересичення, тобто перевищення концентрації розчиненої речовини над її рівноважною розчинністю.

<div class="equation-block">
  <span class="equation-main">Π = c - c<sub>s</sub></span>
  <span class="equation-number">(15.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">α = c/c<sub>s</sub></span>
  <span class="equation-number">(15.2)</span>
</div>

![Графік розчинності двокомпонентної системи цукроза - вода](/images/courses/bioprocess-engineering/chapter-15/fig-15-2.webp)
*Рис. 15.2. Графік розчинності двокомпонентної системи цукроза - вода*

### 15.3. Кінетика процесу кристалізації

Кінетика складається з двох головних стадій: утворення центрів кристалізації та росту кристалів. На кривих кристалізації виділяють період створення пересичення, латентний період зародкоутворення і період росту. Підживлення системи свіжим розчином та випарювання розчинника можуть підтримувати потрібне пересичення.

<div class="equation-block">
  <span class="equation-main">τ<sub>l</sub> = τ<sub>2</sub> - τ<sub>1</sub></span>
  <span class="equation-number">(15.3)</span>
</div>

![Кінематичні криві кристалізації](/images/courses/bioprocess-engineering/chapter-15/fig-15-3.webp)
*Рис. 15.3. Кінематичні криві кристалізації*

### 15.4. Кристалоутворення

Центри кристалізації виникають унаслідок гомогенного або гетерогенного зародкоутворення. У реальних промислових розчинах, зокрема цукрових, механізм переважно гетерогенний: на процес впливають домішки, перемішування, в'язкість, ультразвук, електричні й магнітні поля, коливання температури та наявність внесених кристалів.

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

### 15.5. Ріст кристалів

Після утворення стійкого зародка кристал росте через дифузію речовини до поверхні, адсорбцію, поверхневу міграцію частинок і вбудовування їх у кристалічну гратку. Швидкість росту може визначатися дифузійною, дифузійно-кінетичною або кінетичною стадією; у масовій кристалізації важливими є полідисперсність, рекристалізація і гідродинаміка суспензії.

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

### 15.6-15.9. Вторинне зародкоутворення, рекристалізація і тепломасообмін

Вторинне зародкоутворення пов'язане з уже наявними кристалами, їх зіткненнями, стиранням і локальними змінами пересичення. Рекристалізація зменшує сумарну поверхневу енергію дисперсної системи: дрібні частинки розчиняються, а більші ростуть. У промислових кристалізаторах тепломасообмін, циркуляція, кипіння, випарювання води та конструкція апарата взаємно пов'язані.

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

### 15.10. Фактори впливу на хід процесу

На утворення зародків і ріст кристалів впливають пересичення, температура, чистота розчину, в'язкість, домішки, питома поверхнева енергія, перемішування, циркуляція і парова фаза під час кипіння. Для цукрових розчинів зниження чистоти збільшує латентний період, а підвищення температури та зменшення в'язкості прискорюють ріст.

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

### 15.11. Апарати для кристалізації

Кристалізатори працюють у періодичному або безперервному режимі. Їх класифікують за просторовим розміщенням, формою корпусу, кількістю секцій, циркуляцією суспензії та типом поверхні теплообміну. У цукровому виробництві використовують вакуум-апарати періодичної дії, безперервні вакуум-апарати, горизонтальні та вертикальні перемішувачі-кристалізатори.

![Вакуум-апарат типу А2-ПВР](/images/courses/bioprocess-engineering/chapter-15/fig-15-5.webp)
*Рис. 15.5. Вакуум-апарат типу А2-ПВР*

![Схема потоків безперервного уварювання та кристалізації цукрових утфелів](/images/courses/bioprocess-engineering/chapter-15/fig-15-6.webp)
*Рис. 15.6. Схема потоків безперервного уварювання та кристалізації цукрових утфелів*

![Вакуум-апарат безперервної дії системи КТІХП: а - структурна схема; б - конструкція](/images/courses/bioprocess-engineering/chapter-15/fig-15-7.webp)
*Рис. 15.7. Вакуум-апарат безперервної дії системи КТІХП: а - структурна схема; б - конструкція*

![Горизонтальний перемішувач-кристалізатор](/images/courses/bioprocess-engineering/chapter-15/fig-15-8.webp)
*Рис. 15.8. Горизонтальний перемішувач-кристалізатор*

![Вертикальний перемішувач-кристалізатор](/images/courses/bioprocess-engineering/chapter-15/fig-15-9.webp)
*Рис. 15.9. Вертикальний перемішувач-кристалізатор*

### 15.12. Основні принципи розрахунку

Розрахунок кристалізаторів виконують у послідовності: технологічний, теплотехнічний, гідродинамічний, конструктивний, механічний і техніко-економічний. Його основою є матеріальні та теплові баланси, масові графіки кристалізації, оцінка теплопередачі, циркуляції, часу перебування продукту й міцності елементів апарата.

<div class="equation-block">
  <span class="equation-main">ΣG = G<sub>1</sub> + G<sub>2</sub>; G<sub>1</sub> = G<sub>n.sr</sub> + W<sub>1</sub> = G<sub>n.cz</sub> + G<sub>n.nz</sub> + W<sub>1</sub>; G<sub>2</sub> = G<sub>p.sr</sub> + W<sub>p</sub></span>
  <span class="equation-number">(15.36)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ΔQ + i<sub>p</sub>ΔG<sub>p</sub> + r<sub>kr</sub>ΔG<sub>kr</sub> = i<sub>v</sub>ΔW<sub>v</sub> + Δ(i<sub>y</sub>G<sub>y</sub>) + Q<sub>loss</sub></span>
  <span class="equation-number">(15.37)</span>
</div>

![Схема статичного матеріального балансу багатоступеневої кристалізації](/images/courses/bioprocess-engineering/chapter-15/fig-15-10.webp)
*Рис. 15.10. Схема статичного матеріального балансу багатоступеневої кристалізації*

![Масовий графік варіння та кристалізації цукрових утфелів у вакуум-апараті та перемішувачі-кристалізаторі](/images/courses/bioprocess-engineering/chapter-15/fig-15-11.webp)
*Рис. 15.11. Масовий графік варіння та кристалізації цукрових утфелів у вакуум-апараті та перемішувачі-кристалізаторі*

## Після опрацювання розділу студент має вміти

- пояснювати роль поняття «пересичення» у межах розділу;
- пов'язувати «зародкоутворення» з апаратурним оформленням біотехнологічного виробництва;
- розрізняти основні параметри, що впливають на «ріст кристалів»;
- обґрунтовувати вибір або оцінку процесу через «кристалізатор».

## Тест для самоперевірки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="uk"
  data-course="bioprocess-engineering"
  data-chapter="chapter-15-crystallization"
  data-result-label="Результат"
  data-best-label="Найкращий результат"
  data-choose-label="Оберіть відповідь."
  data-correct-label="Правильно."
  data-incorrect-label="Потрібно повторити."
>
<form data-course-test-form>
<fieldset class="course-test-item" data-course-test-item>
<legend>1. Яке поняття найкраще характеризує зміст розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>зародкоутворення</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>ріст кристалів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>кристалізатор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-0" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>пересичення</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Який підрозділ безпосередньо входить до структури розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-1" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>15.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>15.2. Фізичні основи кристалізації із розчинів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>15.3. Кінетика процесу кристалізації</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>15.4. Кристалоутворення</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На яке поняття передусім спирається інженерний аналіз цього розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>пересичення</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-2" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>зародкоутворення</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>ріст кристалів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>кристалізатор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Що найтісніше пов'язує теорію процесу з апаратурним оформленням?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>пересичення</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>зародкоутворення</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-3" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>кристалізатор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>ріст кристалів</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>пересичення</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>зародкоутворення</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>кристалізатор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-4" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>ріст кристалів</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. З якої теми починається розділ за структурою розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-5" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>15.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>15.2. Фізичні основи кристалізації із розчинів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>15.3. Кінетика процесу кристалізації</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>15.4. Кристалоутворення</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Який підрозділ безпосередньо входить до структури розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>15.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-6" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>15.2. Фізичні основи кристалізації із розчинів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>15.3. Кінетика процесу кристалізації</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>15.4. Кристалоутворення</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Яка тема завершує структуру розділу розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>15.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>15.2. Фізичні основи кристалізації із розчинів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-7" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>15.12. Основні принципи розрахунку</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>15.3. Кінетика процесу кристалізації</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Яку пару понять доцільно зіставляти під час самоперевірки?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>ріст кристалів / кристалізатор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>пересичення / ріст кристалів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>зародкоутворення / кристалізатор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-8" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>пересичення / зародкоутворення</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Що найкраще підходить для практичного обґрунтування вибору процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-9" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>кристалізатор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>пересичення</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>зародкоутворення</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>ріст кристалів</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>пересичення</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-10" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>зародкоутворення</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>ріст кристалів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>кристалізатор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Який об'єкт подано як наочний рисунок у цьому розділі?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>пересичення</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>зародкоутворення</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-11" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Кристал цукрози</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>ріст кристалів</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>
<div class="course-test-actions">
  <button type="submit" class="course-test-primary">Перевірити</button>
  <button type="button" class="course-test-secondary" data-course-test-reset>Скинути</button>
</div>
</form>
<p class="course-test-status" aria-live="polite">
  <strong data-course-test-result>Результат: 0/12</strong>
  <span data-course-test-best>Найкращий результат: -</span>
</p>
<details class="course-test-answers">
<summary>Відповіді</summary>
<ol>
<li>Питання 1: Правильна відповідь - D</li>
<li>Питання 2: Правильна відповідь - A</li>
<li>Питання 3: Правильна відповідь - B</li>
<li>Питання 4: Правильна відповідь - C</li>
<li>Питання 5: Правильна відповідь - D</li>
<li>Питання 6: Правильна відповідь - A</li>
<li>Питання 7: Правильна відповідь - B</li>
<li>Питання 8: Правильна відповідь - C</li>
<li>Питання 9: Правильна відповідь - D</li>
<li>Питання 10: Правильна відповідь - A</li>
<li>Питання 11: Правильна відповідь - B</li>
<li>Питання 12: Правильна відповідь - C</li>
</ol>
</details>
</section>
