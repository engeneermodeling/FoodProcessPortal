---
title: "Розділ 8. Випарювання"
course: "bioprocess-engineering"
course_title: "Інжиніринг біопроцесів: процеси та апарати біотехнологічних виробництв"
chapter: 8
description: "Однокорпусні та багатокорпусні випарні установки, теплові насоси, конструкції апаратів і розрахунок."
updated: "2026-08-23"
---

## Джерело і межі розділу

Основа матеріалу: підручник «Інжиніринг біопроцесів. Модуль 1. Процеси та апарати біотехнологічних виробництв» за редакцією В.Л. Зав’ялова, НУХТ, 2024.

Матеріал сторінки збережено за логікою відповідного розділу підручника; формулювання тестів додано як навчальний інструмент для перевірки засвоєння.

## Структура матеріалу за підручником

- 8.1. Загальні відомості
- 8.2. Випарювання в однокорпусній установці періодичної дії
- 8.3. Багатокорпусні випарні установки
- 8.4. Випарні установки з тепловими насосами
- 8.5. Конструкції випарних апаратів
- 8.6. Розрахунок багатокорпусної випарної установки

## Матеріал підручника

### 8.1. Загальні відомості

Випарюванням називають концентрування розчинів нелетких речовин частковим видаленням леткого розчинника за температури кипіння. На відміну від випаровування з поверхні, випарювання відбувається в усій масі киплячої рідини.

У біотехнологічних, харчових і фармацевтичних виробництвах часто концентрують водні розчини. Первинною, або нагрівною, парою підводять теплоту, а вторинну пару доцільно використовувати повторно. Для термолабільних продуктів випарювання ведуть під розрідженням, щоб знизити температуру кипіння.

### 8.2. Випарювання в однокорпусній установці періодичної дії

В однокорпусній установці за один цикл у апарат надходить початковий розчин, а виходять упарений розчин, вторинна пара і конденсат нагрівної пари. Матеріальний баланс записують для всього розчину і для сухих речовин.

![Рис. 8.1. Схема випарного апарата](/images/courses/bioprocess-engineering/chapter-08/fig-8-1.webp)
*Рис. 8.1. Схема випарного апарата*

<div class="equation-block">
  <span class="equation-main">S<sub>in</sub> = S<sub>out</sub> + W</span>
  <span class="equation-number">(8.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">S<sub>in</sub>B<sub>in</sub> = S<sub>out</sub>B<sub>out</sub></span>
  <span class="equation-number">(8.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = [S<sub>out</sub>c<sub>out</sub>t<sub>out</sub> + Wi + Dθc<sub>c</sub> + Q<sub>loss</sub> - S<sub>in</sub>c<sub>in</sub>t<sub>in</sub>]/i″</span>
  <span class="equation-number">(8.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q = Wr</span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">D = [S<sub>in</sub>c(t<sub>boil</sub> - t<sub>in</sub>) + Wr - S<sub>out</sub>c<sub>out</sub>(t<sub>out</sub> - t<sub>boil</sub>) + Q<sub>loss</sub>]/(i″ - θc<sub>c</sub>)</span>
  <span class="equation-number">(8.4)</span>
</div>

Періодичне випарювання під розрідженням знижує температуру кипіння продукту і збільшує корисну різницю температур між нагрівною парою та киплячим розчином.

![Рис. 8.2. Однокорпусна випарна установка](/images/courses/bioprocess-engineering/chapter-08/fig-8-2.webp)
*Рис. 8.2. Однокорпусна випарна установка*

### 8.3. Багатокорпусні випарні установки

Багатокорпусна випарна установка використовує вторинну пару попереднього корпусу як нагрівну пару наступного. Завдяки цьому одна й та сама теплота використовується багаторазово, а витрата первинної пари зменшується.

![Рис. 8.3. Схема багатокорпусної випарної установки з конденсатором](/images/courses/bioprocess-engineering/chapter-08/fig-8-3.webp)
*Рис. 8.3. Схема багатокорпусної випарної установки з конденсатором*

<div class="equation-block">
  <span class="equation-main">θ ≈ T - 2...3</span>
  <span class="equation-number">(8.5)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = S<sub>in</sub>(1 - B<sub>in</sub>/B<sub>out</sub>)</span>
  <span class="equation-number">(8.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D ≈ W/n</span>
  <span class="equation-number">(8.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W<sub>n</sub> = α<sub>n</sub>D<sub>n-1</sub></span>
  <span class="equation-number">(8.8)</span>
</div>

Корисна різниця температур у корпусах менша за загальну через температурні втрати: фізико-хімічну депресію, гідростатичну депресію і втрати тиску в паропроводах.

<div class="equation-block">
  <span class="equation-main">Δt<sub>use,n</sub> = T<sub>n</sub> - t<sub>n</sub></span>
  <span class="equation-number">(8.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ΣΔt<sub>use</sub> = Δt<sub>1</sub> + Δt<sub>2</sub> + ... + Δt<sub>n</sub></span>
  <span class="equation-number">(8.10)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ΣΔt<sub>loss</sub> = ΣΔ′ + ΣΔ″ + ΣΔ‴</span>
  <span class="equation-number">(8.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δ″ = t<sub>boil</sub>(p + Δp) - t<sub>boil</sub>(p)</span>
  <span class="equation-number">(8.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">t<sub>n</sub> = T<sub>n</sub> + Δ′<sub>n</sub> + Δ″<sub>n</sub></span>
  <span class="equation-number">(8.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δt<sub>use</sub> = Δt<sub>total</sub> - ΣΔt<sub>loss</sub></span>
  <span class="equation-number">(8.14)</span>
</div>

<div class="equation-block">
  <span class="equation-main">F<sub>n</sub> = Q<sub>n</sub>/(k<sub>n</sub>Δt<sub>n</sub>)</span>
  <span class="equation-number">(8.15)</span>
</div>

### 8.4. Випарні установки з тепловими насосами

Установки з тепловими насосами підвищують енергетичну ефективність. У механічному варіанті вторинну пару стискає турбокомпресор, а в інжекторному - її параметри підвищує струмінь гострої пари.

![Рис. 8.4. Однокорпусна випарна установка з турбокомпресором](/images/courses/bioprocess-engineering/chapter-08/fig-8-4.webp)
*Рис. 8.4. Однокорпусна випарна установка з турбокомпресором*

![Рис. 8.5. Випарний апарат з інжекторним тепловим насосом](/images/courses/bioprocess-engineering/chapter-08/fig-8-5.webp)
*Рис. 8.5. Випарний апарат з інжекторним тепловим насосом*

### 8.5. Конструкції випарних апаратів

Випарні апарати класифікують за режимом циркуляції, кратністю проходження розчину, розташуванням і конфігурацією поверхні нагрівання. Для термочутливих або в'язких середовищ особливо важливі час перебування, інтенсивність циркуляції та можливість очищення поверхні.

![Рис. 8.6. Випарний апарат з центральною циркуляційною трубою](/images/courses/bioprocess-engineering/chapter-08/fig-8-6.webp)
*Рис. 8.6. Випарний апарат з центральною циркуляційною трубою*

![Рис. 8.7. Випарний апарат з винесеними циркуляційними трубами](/images/courses/bioprocess-engineering/chapter-08/fig-8-7.webp)
*Рис. 8.7. Випарний апарат з винесеними циркуляційними трубами*

![Рис. 8.8. Випарний апарат з винесеною поверхнею нагрівання](/images/courses/bioprocess-engineering/chapter-08/fig-8-8.webp)
*Рис. 8.8. Випарний апарат з винесеною поверхнею нагрівання*

![Рис. 8.9. Випарний апарат з одноразовим проходженням рідини](/images/courses/bioprocess-engineering/chapter-08/fig-8-9.webp)
*Рис. 8.9. Випарний апарат з одноразовим проходженням рідини*

![Рис. 8.10. Випарний апарат з примусовою циркуляцією](/images/courses/bioprocess-engineering/chapter-08/fig-8-10.webp)
*Рис. 8.10. Випарний апарат з примусовою циркуляцією*

![Рис. 8.11. Випарний апарат зі спадною плівкою](/images/courses/bioprocess-engineering/chapter-08/fig-8-11.webp)
*Рис. 8.11. Випарний апарат зі спадною плівкою*

![Рис. 8.12. Роторний плівковий випарний апарат](/images/courses/bioprocess-engineering/chapter-08/fig-8-12.webp)
*Рис. 8.12. Роторний плівковий випарний апарат*

### 8.6. Розрахунок багатокорпусної випарної установки

Розрахунок багатокорпусної установки включає визначення кількості випареної води в корпусах, теплового навантаження, коефіцієнтів теплопередачі та площі поверхні нагрівання кожного корпусу.

<div class="equation-block">
  <span class="equation-main">W = S(B<sub>out</sub> - B<sub>in</sub>)/B<sub>out</sub></span>
  <span class="equation-number">(8.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = nW<sub>last</sub> + E<sub>1</sub> + 2E<sub>2</sub> + ... + (n - 1)E<sub>n-1</sub></span>
  <span class="equation-number">(8.17)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W<sub>last</sub> = [W - E<sub>1</sub> - 2E<sub>2</sub> - ... - (n - 1)E<sub>n-1</sub>]/n</span>
  <span class="equation-number">(8.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W<sub>i</sub> = W<sub>last</sub> + E<sub>i</sub> + E<sub>i+1</sub> + ... + E<sub>n-1</sub></span>
  <span class="equation-number">(8.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">R<sub>1</sub> = 1/α<sub>cond</sub></span>
  <span class="equation-number">(8.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">α<sub>boil</sub> = A q<sup>m</sup></span>
  <span class="equation-number">(8.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">U = f(Δt)</span>
  <span class="equation-number">(8.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">t<sub>w</sub> = t<sub>steam</sub> - q/α<sub>cond</sub></span>
  <span class="equation-number">(8.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">t<sub>film</sub> = 0.5(t<sub>w</sub> + t<sub>boil</sub>)</span>
  <span class="equation-number">(8.24)</span>
</div>

## Після опрацювання розділу студент має вміти

- пояснювати роль поняття «вторинна пара» у межах розділу;
- пов'язувати «корпус» з апаратурним оформленням біотехнологічного виробництва;
- розрізняти основні параметри, що впливають на «концентрування»;
- обґрунтовувати вибір або оцінку процесу через «тепловий баланс».

## Тест для самоперевірки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="uk"
  data-course="bioprocess-engineering"
  data-chapter="chapter-08-evaporation"
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
  <input type="radio" name="course-test-8-0" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>вторинна пара</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>корпус</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>концентрування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>тепловий баланс</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Який підрозділ безпосередньо входить до структури розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>8.2. Випарювання в однокорпусній установці періодичної дії</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-1" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>8.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>8.3. Багатокорпусні випарні установки</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>8.4. Випарні установки з тепловими насосами</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На яке поняття передусім спирається інженерний аналіз цього розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>вторинна пара</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>концентрування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-2" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>корпус</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>тепловий баланс</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Що найтісніше пов'язує теорію процесу з апаратурним оформленням?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>вторинна пара</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>корпус</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>концентрування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-3" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>тепловий баланс</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-4" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>концентрування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>вторинна пара</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>корпус</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>тепловий баланс</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. З якої теми починається розділ за структурою підручника?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>8.2. Випарювання в однокорпусній установці періодичної дії</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-5" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>8.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>8.3. Багатокорпусні випарні установки</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>8.4. Випарні установки з тепловими насосами</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Який підрозділ безпосередньо входить до структури розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>8.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>8.3. Багатокорпусні випарні установки</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-6" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>8.2. Випарювання в однокорпусній установці періодичної дії</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>8.4. Випарні установки з тепловими насосами</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Яка тема завершує структуру розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>8.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>8.2. Випарювання в однокорпусній установці періодичної дії</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>8.3. Багатокорпусні випарні установки</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-7" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>8.6. Розрахунок багатокорпусної випарної установки</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Яку пару понять доцільно зіставляти під час самоперевірки?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-8" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>вторинна пара / корпус</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>концентрування / тепловий баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>вторинна пара / концентрування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>корпус / тепловий баланс</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Що найкраще підходить для практичного обґрунтування вибору процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>вторинна пара</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-9" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>тепловий баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>корпус</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>концентрування</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>вторинна пара</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>концентрування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-10" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>корпус</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>тепловий баланс</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Який об'єкт подано як наочний рисунок у цьому розділі?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>вторинна пара</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>корпус</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>концентрування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-11" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Схема випарного апарата</span>
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
<li>Питання 1: Правильна відповідь - A</li>
<li>Питання 2: Правильна відповідь - B</li>
<li>Питання 3: Правильна відповідь - C</li>
<li>Питання 4: Правильна відповідь - D</li>
<li>Питання 5: Правильна відповідь - A</li>
<li>Питання 6: Правильна відповідь - B</li>
<li>Питання 7: Правильна відповідь - C</li>
<li>Питання 8: Правильна відповідь - D</li>
<li>Питання 9: Правильна відповідь - A</li>
<li>Питання 10: Правильна відповідь - B</li>
<li>Питання 11: Правильна відповідь - C</li>
<li>Питання 12: Правильна відповідь - D</li>
</ol>
</details>
</section>

## Подальше опрацювання

На наступному проході цей розділ можна деталізувати формулами, прикладами розрахунку, рисунками апаратів і посиланнями на сучасні біотехнологічні виробництва.
