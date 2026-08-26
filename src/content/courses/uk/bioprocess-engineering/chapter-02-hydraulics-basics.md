---
title: "Розділ 2. Основи гідравліки"
course: "bioprocess-engineering"
course_title: "Інжиніринг біопроцесів: процеси та апарати біотехнологічних виробництв"
chapter: 2
description: "Гідростатика, гідродинаміка, рівняння Бернуллі, режими руху рідини, насоси і газодувні машини."
updated: "2026-08-23"
---

## Джерело і межі розділу

Основа матеріалу: підручник «Інжиніринг біопроцесів. Модуль 1. Процеси та апарати біотехнологічних виробництв» за редакцією В.Л. Зав’ялова, НУХТ, 2024.

## Структура матеріалу за підручником

- 2.1. Гідростатика
- 2.2. Гідродинаміка
- 2.3. Насоси і газодувні машини

## Матеріал підручника

### 2.1. Гідростатика

Гідравліка розглядає закони рівноваги та руху рідин і газів. Для апаратів біотехнологічних виробництв ці закони потрібні під час розрахунку трубопроводів, резервуарів, ферментерів, теплообмінників, насосів, компресорів і систем подавання середовищ. Рідину в розділі розглядають як суцільне середовище, а тиск у будь-якій точці передається в усіх напрямках.

Для елементарного паралелепіпеда рідини, на який діють сили тиску та масові сили, умова рівноваги за віссю x записується так:

<div class="equation-block">
  <span class="equation-main">dP<sub>1</sub> - dP<sub>2</sub> + dG<sub>x</sub> = 0</span>
  <span class="equation-number">(2.1)</span>
</div>

Якщо виразити сили тиску через площі граней, отримують:

<div class="equation-block">
  <span class="equation-main">p<sub>1</sub>dy dz - p<sub>2</sub>dy dz + ρ X dx dy dz = 0</span>
  <span class="equation-number">(2.2)</span>
</div>

Після переходу до границі одержують диференціальні рівняння рівноваги Ейлера:

<div class="equation-block">
  <span class="equation-main">ρ X - ∂p/∂x = 0;<br />ρ Y - ∂p/∂y = 0;<br />ρ Z - ∂p/∂z = 0</span>
  <span class="equation-number">(2.3)</span>
</div>

![Рис. 2.1. До виведення диференціальних рівнянь рівноваги Ейлера](/images/courses/bioprocess-engineering/chapter-02/fig-2-1.webp)

Загальний диференціал тиску для нерухомої рідини:

<div class="equation-block">
  <span class="equation-main">dp = ρ(Xdx + Ydy + Zdz)</span>
  <span class="equation-number">(2.4)</span>
</div>

Поверхнею однакового тиску називають поверхню, у всіх точках якої p = const, тобто dp = 0. Тоді рівняння поверхні однакового тиску має вигляд:

<div class="equation-block">
  <span class="equation-main">Xdx + Ydy + Zdz = 0</span>
  <span class="equation-number">(2.5)</span>
</div>

Якщо на рідину діє тільки сила тяжіння, основне рівняння гідростатики після інтегрування набуває форми:

<div class="equation-block">
  <span class="equation-main">z + p/(ρ g) = const</span>
  <span class="equation-number">(2.6)</span>
</div>

Величина гідростатичного напору:

<div class="equation-block">
  <span class="equation-main">H<sub>s</sub> = z + p/(ρ g)</span>
  <span class="equation-number">(2.7)</span>
</div>

Для двох точок однієї нерухомої рідини:

<div class="equation-block">
  <span class="equation-main">z<sub>1</sub> + p<sub>1</sub>/(ρ g) = z<sub>2</sub> + p<sub>2</sub>/(ρ g)</span>
  <span class="equation-number">(2.8)</span>
</div>

![Рис. 2.2. До вивчення основного рівняння гідростатики](/images/courses/bioprocess-engineering/chapter-02/fig-2-2.webp)

Звідси випливає закон Паскаля: зовнішній тиск, прикладений до рідини, передається нею однаково в усіх напрямках. Абсолютний тиск на глибині h:

<div class="equation-block">
  <span class="equation-main">p = p<sub>0</sub> + ρ g h</span>
  <span class="equation-number">(2.9)</span>
</div>

![Рис. 2.3. До виведення закону Паскаля](/images/courses/bioprocess-engineering/chapter-02/fig-2-3.webp)

Для вимірювання тиску застосовують рідинні манометри, вакуумметри та пружинні манометри. У біотехнологічному обладнанні контроль тиску особливо важливий у стерилізаторах, ферментерах, фільтрах і магістралях подавання стерильного повітря.

![Рис. 2.4. Рідинний манометр](/images/courses/bioprocess-engineering/chapter-02/fig-2-4.webp)

### 2.2. Гідродинаміка

Гідродинаміка вивчає рух рідин. Рух буває сталим, коли швидкість і тиск у фіксованій точці не змінюються з часом, і несталим, коли вони залежать від часу. Витрата рідини Q пов'язана із середньою швидкістю w і площею перерізу F співвідношенням Q = wF.

Для нестисливої рідини рівняння нерозривності потоку:

<div class="equation-block">
  <span class="equation-main">Q = w<sub>1</sub>F<sub>1</sub> = w<sub>2</sub>F<sub>2</sub> = wF = const</span>
  <span class="equation-number">(2.10)</span>
</div>

Для стисливого середовища сталість має масова витрата:

<div class="equation-block">
  <span class="equation-main">M = ρ<sub>1</sub>w<sub>1</sub>F<sub>1</sub> = ρ<sub>2</sub>w<sub>2</sub>F<sub>2</sub> = const</span>
  <span class="equation-number">(2.11)</span>
</div>

Гідравлічний радіус потоку:

<div class="equation-block">
  <span class="equation-main">R = F/Π</span>
  <span class="equation-number">(2.12)</span>
</div>

Для каналів некруглого перерізу користуються еквівалентним діаметром:

<div class="equation-block">
  <span class="equation-main">d<sub>eq</sub> = 4R = 4F/Π</span>
  <span class="equation-number">(2.13)</span>
</div>

Рівняння рівноваги ідеальної рідини, записані для одиниці маси:

<div class="equation-block">
  <span class="equation-main">X - (1/ρ)∂p/∂x = 0;<br />Y - (1/ρ)∂p/∂y = 0;<br />Z - (1/ρ)∂p/∂z = 0</span>
  <span class="equation-number">(2.14)</span>
</div>

З урахуванням прискорення частинки рідини отримують диференціальні рівняння руху Ейлера:

<div class="equation-block">
  <span class="equation-main">X - (1/ρ)∂p/∂x = dw<sub>x</sub>/d τ;<br />Y - (1/ρ)∂p/∂y = dw<sub>y</sub>/d τ;<br />Z - (1/ρ)∂p/∂z = dw<sub>z</sub>/d τ</span>
  <span class="equation-number">(2.15)</span>
</div>

Повне прискорення включає локальну й конвективну складові:

<div class="equation-block">
  <span class="equation-main">dw<sub>x</sub>/d τ = ∂w<sub>x</sub>/∂τ + w<sub>x</sub>∂w<sub>x</sub>/∂x + w<sub>y</sub>∂w<sub>x</sub>/∂y + w<sub>z</sub>∂w<sub>x</sub>/∂z;<br />dw<sub>y</sub>/d τ = ∂w<sub>y</sub>/∂τ + w<sub>x</sub>∂w<sub>y</sub>/∂x + w<sub>y</sub>∂w<sub>y</sub>/∂y + w<sub>z</sub>∂w<sub>y</sub>/∂z;<br />dw<sub>z</sub>/d τ = ∂w<sub>z</sub>/∂τ + w<sub>x</sub>∂w<sub>z</sub>/∂x + w<sub>y</sub>∂w<sub>z</sub>/∂y + w<sub>z</sub>∂w<sub>z</sub>/∂z</span>
  <span class="equation-number">(2.16)</span>
</div>

Для елементарного струменя ідеальної рідини рівняння Бернуллі:

<div class="equation-block">
  <span class="equation-main">z<sub>1</sub> + p<sub>1</sub>/(ρ g) + w<sub>1</sub><sup>2</sup>/(2g) = z<sub>2</sub> + p<sub>2</sub>/(ρ g) + w<sub>2</sub><sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.17)</span>
</div>

Для реальної рідини до рівняння вводять втрати напору:

<div class="equation-block">
  <span class="equation-main">z<sub>1</sub> + p<sub>1</sub>/(ρ g) + w<sub>1</sub><sup>2</sup>/(2g) = z<sub>2</sub> + p<sub>2</sub>/(ρ g) + w<sub>2</sub><sup>2</sup>/(2g) + h<sub>loss</sub></span>
  <span class="equation-number">(2.18)</span>
</div>

![Рис. 2.5. До виведення рівняння Бернуллі](/images/courses/bioprocess-engineering/chapter-02/fig-2-5.webp)

Під час витікання рідини з отвору швидкість у першому наближенні:

<div class="equation-block">
  <span class="equation-main">w = √(2gH)</span>
  <span class="equation-number">(2.19)</span>
</div>

Якщо враховано різницю тисків над вільними поверхнями:

<div class="equation-block">
  <span class="equation-main">w = √(2g(H + (p<sub>1</sub> - p<sub>2</sub>)/(ρ g)))</span>
  <span class="equation-number">(2.19a)</span>
</div>

Дійсна витрата через отвір враховує коефіцієнти швидкості, стиснення струменя та витрати:

<div class="equation-block">
  <span class="equation-main">Q = F<sub>j</sub>w = ε φ F<sub>0</sub>√(2gH) = α F<sub>0</sub>√(2gH)</span>
  <span class="equation-number">(2.20)</span>
</div>

Характер руху рідини визначають числом Рейнольдса Re = wd/ν. За малих Re рух ламінарний, струмені рідини не перемішуються поперек потоку. За великих Re рух турбулентний, з інтенсивними пульсаціями швидкості.

![Рис. 2.7. Схема установки Рейнольдса](/images/courses/bioprocess-engineering/chapter-02/fig-2-7.webp)

Для ламінарної течії у круглій трубі розподіл швидкості має параболічний характер:

<div class="equation-block">
  <span class="equation-main">w<sub>r</sub> = Δ p(R<sup>2</sup> - r<sup>2</sup>)/(4μ l)</span>
  <span class="equation-number">(2.21)</span>
</div>

Найбільша швидкість у центрі труби:

<div class="equation-block">
  <span class="equation-main">w<sub>max</sub> = Δ p R<sup>2</sup>/(4μ l)</span>
  <span class="equation-number">(2.21a)</span>
</div>

Об'ємна витрата за законом Пуазейля:

<div class="equation-block">
  <span class="equation-main">Q = pi Δ p d<sup>4</sup>/(128μ l)</span>
  <span class="equation-number">(2.22)</span>
</div>

Середня швидкість:

<div class="equation-block">
  <span class="equation-main">w = Q/(pi R<sup>2</sup>) = Δ p R<sup>2</sup>/(8μ l) = Δ p d<sup>2</sup>/(32μ l)</span>
  <span class="equation-number">(2.23)</span>
</div>

![Рис. 2.8. До виведення формул Стокса і Пуазейля](/images/courses/bioprocess-engineering/chapter-02/fig-2-8.webp)

Повні втрати напору складаються з втрат на тертя по довжині та місцевих втрат:

<div class="equation-block">
  <span class="equation-main">h<sub>loss</sub> = h<sub>fr</sub> + h<sub>loc</sub></span>
  <span class="equation-number">(2.24)</span>
</div>

Втрати напору на тертя:

<div class="equation-block">
  <span class="equation-main">h<sub>fr</sub> = λ(l/d) w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.25)</span>
</div>

Відповідні втрати тиску:

<div class="equation-block">
  <span class="equation-main">Δ p<sub>fr</sub> = λ(l/d) ρ w<sup>2</sup>/2</span>
  <span class="equation-number">(2.25a)</span>
</div>

Для гладких труб у певній області турбулентного руху застосовують формулу Блазіуса:

<div class="equation-block">
  <span class="equation-main">λ = 0.3164 Re<sup>-0.25</sup></span>
  <span class="equation-number">(2.26)</span>
</div>

Для шорстких труб використовують узагальнені залежності, зокрема:

<div class="equation-block">
  <span class="equation-main">λ = 0.11(Δ̄ + 68/Re)<sup>0.25</sup></span>
  <span class="equation-number">(2.27)</span>
</div>

У зоні автомодельного руху:

<div class="equation-block">
  <span class="equation-main">λ = 0.11 Δ̄<sup>0.25</sup></span>
  <span class="equation-number">(2.28)</span>
</div>

Місцеві опори спричинені входами, виходами, колінами, вентилями, звуженнями та розширеннями:

<div class="equation-block">
  <span class="equation-main">h<sub>loc</sub> = ξ w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δ p<sub>loc</sub> = ξ ρ w<sup>2</sup>/2</span>
  <span class="equation-number">(2.29a)</span>
</div>

Якщо місцевих опорів декілька:

<div class="equation-block">
  <span class="equation-main">h<sub>loc</sub> = (Σξ) w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.30)</span>
</div>

Загальні втрати у трубопроводі:

<div class="equation-block">
  <span class="equation-main">h<sub>loss</sub> = (λ l/d + Σξ) w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δ p<sub>loss</sub> = (λ l/d + Σξ) ρ w<sup>2</sup>/2</span>
  <span class="equation-number">(2.31a)</span>
</div>

Через еквівалентну довжину місцевих опорів:

<div class="equation-block">
  <span class="equation-main">h<sub>loss</sub> = λ((l + l<sub>eq</sub>)/d) w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.32)</span>
</div>

### 2.3. Насоси та газодувні машини

Для переміщення рідин застосовують насоси, а для газів — вентилятори, газодувки та компресори. Основними параметрами насоса є подача Q, напір H, потужність N, частота обертання, коефіцієнт корисної дії та допустима висота всмоктування.

Повний ККД насоса дорівнює добутку об'ємного, гідравлічного та механічного ККД:

<div class="equation-block">
  <span class="equation-main">η = η<sub>vol</sub> η<sub>h</sub> η<sub>m</sub></span>
  <span class="equation-number">(2.33)</span>
</div>

Об'ємний ККД:

<div class="equation-block">
  <span class="equation-main">η<sub>vol</sub> = Q/(Q + q)</span>
  <span class="equation-number">(2.34)</span>
</div>

Гідравлічний ККД:

<div class="equation-block">
  <span class="equation-main">η<sub>h</sub> = H/(H + h)</span>
  <span class="equation-number">(2.35)</span>
</div>

Потужність на валу насоса:

<div class="equation-block">
  <span class="equation-main">N = QH ρ g/(1000 η)</span>
  <span class="equation-number">(2.36)</span>
</div>

Для всмоктувальної лінії:

<div class="equation-block">
  <span class="equation-main">(p<sub>atm</sub> - p<sub>s</sub>)/(ρ g) = z<sub>1</sub> + h<sub>1</sub> + w<sub>s</sub><sup>2</sup>/(2g) = p<sub>vac</sub>/(ρ g)</span>
  <span class="equation-number">(2.37)</span>
</div>

Для нагнітальної лінії:

<div class="equation-block">
  <span class="equation-main">p<sub>d</sub>/(ρ g) = z<sub>2</sub> + h<sub>2</sub> + p<sub>2</sub>/(ρ g)</span>
  <span class="equation-number">(2.38)</span>
</div>

Потрібний напір насоса для подавання рідини між апаратами:

<div class="equation-block">
  <span class="equation-main">H<sub>req</sub> = z<sub>1</sub> + z<sub>2</sub> + (p<sub>2</sub> - p<sub>1</sub>)/(ρ g) + h<sub>1</sub> + h<sub>2</sub></span>
  <span class="equation-number">(2.39)</span>
</div>

Характеристика трубопроводу показує, як потрібний напір зростає зі збільшенням витрати. Робоча точка насосної установки визначається перетином характеристики насоса з характеристикою трубопроводу. Для біотехнологічних процесів це важливо, бо надмірний напір може пошкоджувати клітини, руйнувати флокули або погіршувати піногасіння, а недостатній напір порушує режим живлення апаратів.

## Після опрацювання розділу студент має вміти

- пояснювати роль поняття «гідростатичний тиск» у межах розділу;
- пов'язувати «рівняння Бернуллі» з апаратурним оформленням біотехнологічного виробництва;
- розрізняти основні параметри, що впливають на «число Рейнольдса»;
- обґрунтовувати вибір або оцінку процесу через «насос».

## Тест для самоперевірки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="uk"
  data-course="bioprocess-engineering"
  data-chapter="chapter-02-hydraulics-basics"
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
  <input type="radio" name="course-test-2-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>рівняння Бернуллі</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>число Рейнольдса</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>гідростатичний тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>насос</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Який підрозділ безпосередньо входить до структури розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>2.2. Гідродинаміка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>2.3. Насоси і газодувні машини</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>гідростатичний тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>2.1. Гідростатика</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На яке поняття передусім спирається інженерний аналіз цього розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>рівняння Бернуллі</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>гідростатичний тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>число Рейнольдса</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>насос</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Що найтісніше пов'язує теорію процесу з апаратурним оформленням?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>гідростатичний тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>насос</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>рівняння Бернуллі</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>число Рейнольдса</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>гідростатичний тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>рівняння Бернуллі</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>число Рейнольдса</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>насос</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. З якої теми починається розділ за структурою підручника?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>2.2. Гідродинаміка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>2.3. Насоси і газодувні машини</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>гідростатичний тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>2.1. Гідростатика</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Який підрозділ безпосередньо входить до структури розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>2.2. Гідродинаміка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>2.1. Гідростатика</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>2.3. Насоси і газодувні машини</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гідростатичний тиск</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Яка тема завершує структуру розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>2.1. Гідростатика</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>2.3. Насоси і газодувні машини</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>2.2. Гідродинаміка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гідростатичний тиск</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Яку пару понять доцільно зіставляти під час самоперевірки?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>число Рейнольдса / насос</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>гідростатичний тиск / число Рейнольдса</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>гідростатичний тиск / рівняння Бернуллі</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>рівняння Бернуллі / насос</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Що найкраще підходить для практичного обґрунтування вибору процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>гідростатичний тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>рівняння Бернуллі</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>число Рейнольдса</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>насос</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>рівняння Бернуллі</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>гідростатичний тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>число Рейнольдса</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>насос</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Який об'єкт подано як наочний рисунок у цьому розділі?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>гідростатичний тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Елемент рідини для виведення рівнянь рівноваги Ейлера</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>рівняння Бернуллі</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>число Рейнольдса</span>
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
<li>Питання 1: Правильна відповідь - C</li>
<li>Питання 2: Правильна відповідь - D</li>
<li>Питання 3: Правильна відповідь - A</li>
<li>Питання 4: Правильна відповідь - B</li>
<li>Питання 5: Правильна відповідь - C</li>
<li>Питання 6: Правильна відповідь - D</li>
<li>Питання 7: Правильна відповідь - A</li>
<li>Питання 8: Правильна відповідь - B</li>
<li>Питання 9: Правильна відповідь - C</li>
<li>Питання 10: Правильна відповідь - D</li>
<li>Питання 11: Правильна відповідь - A</li>
<li>Питання 12: Правильна відповідь - B</li>
</ol>
</details>
</section>
