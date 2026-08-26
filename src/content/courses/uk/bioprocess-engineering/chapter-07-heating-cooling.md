---
title: "Розділ 7. Нагрівання і охолодження"
course: "bioprocess-engineering"
course_title: "Інжиніринг біопроцесів: процеси та апарати біотехнологічних виробництв"
chapter: 7
description: "Класифікація, конструкції, тепловий, конструкційний і гідравлічний розрахунок теплообмінників."
updated: "2026-08-23"
---

## Джерело і межі розділу

Основа матеріалу: підручник «Інжиніринг біопроцесів. Модуль 1. Процеси та апарати біотехнологічних виробництв» за редакцією В.Л. Зав’ялова, НУХТ, 2024.

## Структура матеріалу за підручником

- 7.1. Загальні відомості
- 7.2. Класифікація теплообмінників
- 7.3. Конструкції теплообмінників
- 7.4. Тепловий розрахунок теплообмінників
- 7.5. Конструкційний розрахунок теплообмінників
- 7.6. Гідравлічний розрахунок теплообмінників
- 7.7. Оптимізація та інтенсифікація теплообміну
- 7.8. Перевірний розрахунок теплообмінників

## Матеріал підручника

### 7.1. Загальні відомості

Нагрівання й охолодження рідин та газів належать до найпоширеніших процесів біоінженерії. Для кожного процесу вибирають технологічно й економічно доцільний спосіб нагрівання або охолодження, теплоносій і конструкцію апарата. Апарати для цих процесів називають теплообмінниками.

### 7.2. Класифікація теплообмінників

За способом передавання теплоти теплообмінники поділяють на поверхневі та змішувальні. У поверхневих апаратах теплоносії розділені стінкою або почергово контактують з однією поверхнею; у змішувальних теплообмін відбувається за безпосереднього контакту середовищ. У промисловості найчастіше застосовують рекуперативні поверхневі теплообмінники.

Основні вимоги до теплообмінника: високий коефіцієнт теплопередачі, малий гідравлічний опір, герметичність, зручність очищення, ремонтопридатність і компенсація температурних подовжень.

### 7.3. Конструкції теплообмінників

Кожухотрубні теплообмінники дають змогу створити в одному апараті велику поверхню теплообміну. Швидкість теплоносіїв підвищують багатоходовим рухом і сегментними перегородками. Труби в трубних решітках зазвичай розміщують по правильних шестикутниках.

![Рис. 7.1. Схема кожухотрубного одноходового теплообмінника](/images/courses/bioprocess-engineering/chapter-07/fig-7-1.webp)
*Рис. 7.1. Схема кожухотрубного одноходового теплообмінника*

![Рис. 7.2. Схема кожухотрубного багатоходового теплообмінника](/images/courses/bioprocess-engineering/chapter-07/fig-7-2.webp)
*Рис. 7.2. Схема кожухотрубного багатоходового теплообмінника*

![Рис. 7.3. Схеми розміщення труб у трубних решітках](/images/courses/bioprocess-engineering/chapter-07/fig-7-3.webp)
*Рис. 7.3. Схеми розміщення труб у трубних решітках*

<div class="equation-block">
  <span class="equation-main">n = 3a(a - 1) + 1</span>
  <span class="equation-number">(7.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">b = 2a - 1</span>
  <span class="equation-number">(7.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">s = (1.3...1.5)d<sub>o</sub></span>
  <span class="equation-number">(7.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = s(b - 1) + 4d<sub>o</sub></span>
  <span class="equation-number">(7.4)</span>
</div>

Для невеликих витрат застосовують теплообмінники типу «труба в трубі». Заглибні та зрошувальні змійовикові апарати прості, але мають порівняно низьку інтенсивність теплообміну. Спіральні й пластинчасті теплообмінники компактні; пластинчасті апарати особливо поширені для стерилізації та охолодження технологічних рідин.

![Рис. 7.5. Схема теплообмінника типу «труба в трубі»](/images/courses/bioprocess-engineering/chapter-07/fig-7-5.webp)
*Рис. 7.5. Схема теплообмінника типу «труба в трубі»*

![Рис. 7.6. Схема заглибного теплообмінника](/images/courses/bioprocess-engineering/chapter-07/fig-7-6.webp)
*Рис. 7.6. Схема заглибного теплообмінника*

![Рис. 7.7. Схема зрошувального змійовикового теплообмінника](/images/courses/bioprocess-engineering/chapter-07/fig-7-7.webp)
*Рис. 7.7. Схема зрошувального змійовикового теплообмінника*

![Рис. 7.8. Схема спірального теплообмінника](/images/courses/bioprocess-engineering/chapter-07/fig-7-8.webp)
*Рис. 7.8. Схема спірального теплообмінника*

![Рис. 7.9. Просторова схема руху середовищ у пластинчастому теплообміннику](/images/courses/bioprocess-engineering/chapter-07/fig-7-9.webp)
*Рис. 7.9. Просторова схема руху середовищ у пластинчастому теплообміннику*

![Рис. 7.10. Поверхня з оребрених труб теплообмінника](/images/courses/bioprocess-engineering/chapter-07/fig-7-10.webp)
*Рис. 7.10. Поверхня з оребрених труб теплообмінника*

![Рис. 7.11. Схема оболонкового теплообмінника](/images/courses/bioprocess-engineering/chapter-07/fig-7-11.webp)
*Рис. 7.11. Схема оболонкового теплообмінника*

### 7.4. Тепловий розрахунок теплообмінників

Проектний тепловий розрахунок зводиться до визначення потрібної площі поверхні теплообміну. Для цього послідовно знаходять теплове навантаження, коефіцієнт теплопередачі та середню різницю температур.

<div class="equation-block">
  <span class="equation-main">F = Q/(kΔt<sub>m</sub>)</span>
  <span class="equation-number">(7.5)</span>
</div>

Якщо втрати теплоти в навколишнє середовище малі, тепловий баланс записують між гарячим і холодним теплоносіями. Для теплоносіїв без зміни агрегатного стану ентальпії замінюють добутком теплоємності на температуру.

<div class="equation-block">
  <span class="equation-main">Q = Q<sub>1</sub> = Q<sub>2</sub></span>
  <span class="equation-number">(7.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q = m<sub>1</sub>(i<sub>1,in</sub> - i<sub>1,out</sub>) = m<sub>2</sub>(i<sub>2,out</sub> - i<sub>2,in</sub>)</span>
  <span class="equation-number">(7.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q = m<sub>1</sub>c<sub>1</sub>(t<sub>1,in</sub> - t<sub>1,out</sub>)</span>
  <span class="equation-number">(7.8)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q = m<sub>2</sub>c<sub>2</sub>(t<sub>2,out</sub> - t<sub>2,in</sub>)</span>
  <span class="equation-number">(7.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>1</sub>c<sub>1</sub>(t<sub>1,in</sub> - t<sub>1,out</sub>) = m<sub>2</sub>c<sub>2</sub>(t<sub>2,out</sub> - t<sub>2,in</sub>)</span>
  <span class="equation-number">(7.10)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>2</sub> = m<sub>1</sub>c<sub>1</sub>(t<sub>1,in</sub> - t<sub>1,out</sub>)/(c<sub>2</sub>(t<sub>2,out</sub> - t<sub>2,in</sub>))</span>
  <span class="equation-number">(7.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>1</sub> = m<sub>2</sub>c<sub>2</sub>(t<sub>2,out</sub> - t<sub>2,in</sub>)/(c<sub>1</sub>(t<sub>1,in</sub> - t<sub>1,out</sub>))</span>
  <span class="equation-number">(7.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D<sub>s</sub> = Q/(i<sub>s</sub> - i<sub>c</sub>)</span>
  <span class="equation-number">(7.13)</span>
</div>

Коефіцієнт теплопередачі визначають через термічні опори стінки, забруднень і тепловіддачі з обох боків. Для окремих конструкцій застосовують спеціальні критеріальні рівняння.

<div class="equation-block">
  <span class="equation-main">Nu = 0.023Re<sup>0.8</sup>Pr<sup>0.4</sup></span>
  <span class="equation-number">(7.14)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = CRe<sup>0.6</sup>Pr<sup>0.33</sup></span>
  <span class="equation-number">(7.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = CRe<sup>0.73</sup>Pr<sup>0.43</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(7.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">1/k = 1/α<sub>1</sub> + δ<sub>w</sub>/λ<sub>w</sub> + δ<sub>f1</sub>/λ<sub>f1</sub> + δ<sub>f2</sub>/λ<sub>f2</sub> + 1/α<sub>2</sub></span>
  <span class="equation-number">(7.17)</span>
</div>

<div class="equation-block">
  <span class="equation-main">k<sub>actual</sub> = φk<sub>calc</sub></span>
  <span class="equation-number">(7.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">t<sub>w1</sub> = t<sub>1</sub> - q/α<sub>1</sub></span>
  <span class="equation-number">(7.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">t<sub>w2</sub> = t<sub>2</sub> + q/α<sub>2</sub></span>
  <span class="equation-number">(7.20)</span>
</div>

Середню різницю температур визначають як середньологарифмічну. Протитечія використовує теплоносії найповніше, тому за однакових умов теплообмінник виходить компактнішим, ніж за прямотечії.

![Рис. 7.12. Графіки зміни температур теплоносіїв](/images/courses/bioprocess-engineering/chapter-07/fig-7-12.webp)
*Рис. 7.12. Графіки зміни температур теплоносіїв*

<div class="equation-block">
  <span class="equation-main">Δt<sub>lm</sub> = (Δt<sub>max</sub> - Δt<sub>min</sub>)/ln(Δt<sub>max</sub>/Δt<sub>min</sub>)</span>
  <span class="equation-number">(7.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δt<sub>m</sub> = (Δt<sub>max</sub> + Δt<sub>min</sub>)/2</span>
  <span class="equation-number">(7.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">P = (t<sub>2,out</sub> - t<sub>2,in</sub>)/(t<sub>1,in</sub> - t<sub>2,in</sub>)</span>
  <span class="equation-number">(7.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">R = (t<sub>1,in</sub> - t<sub>1,out</sub>)/(t<sub>2,out</sub> - t<sub>2,in</sub>)</span>
  <span class="equation-number">(7.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δt<sub>m</sub> = εΔt<sub>lm,counter</sub></span>
  <span class="equation-number">(7.25)</span>
</div>

### 7.5. Конструкційний розрахунок теплообмінників

Після теплового розрахунку виконують конструкційний: визначають прохідні перерізи, кількість труб, кількість ходів, довжину труб або змійовика, висоту змійовика і діаметри патрубків.

<div class="equation-block">
  <span class="equation-main">f<sub>1</sub> = m/(ρw)</span>
  <span class="equation-number">(7.26)</span>
</div>

<div class="equation-block">
  <span class="equation-main">n<sub>1</sub> = 4f<sub>1</sub>/(πd<sub>i</sub><sup>2</sup>)</span>
  <span class="equation-number">(7.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L = F/(πd<sub>p</sub>n)</span>
  <span class="equation-number">(7.28)</span>
</div>

<div class="equation-block">
  <span class="equation-main">z = L/l</span>
  <span class="equation-number">(7.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">n = zn<sub>1</sub></span>
  <span class="equation-number">(7.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">l<sub>turn</sub> = √((πD<sub>coil</sub>)<sup>2</sup> + h<sup>2</sup>)</span>
  <span class="equation-number">(7.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L = F/(πd<sub>p</sub>)</span>
  <span class="equation-number">(7.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">n = L/l<sub>turn</sub></span>
  <span class="equation-number">(7.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">H = nh</span>
  <span class="equation-number">(7.34)</span>
</div>

<div class="equation-block">
  <span class="equation-main">V = πd<sub>n</sub><sup>2</sup>w/4</span>
  <span class="equation-number">(7.35)</span>
</div>

<div class="equation-block">
  <span class="equation-main">d<sub>n</sub> = √(4V/(πw))</span>
  <span class="equation-number">(7.36)</span>
</div>

### 7.6. Гідравлічний розрахунок теплообмінників

Гідравлічний розрахунок потрібний для визначення втрат тиску та потужності насосів або вентиляторів, що переміщують теплоносії через апарат.

<div class="equation-block">
  <span class="equation-main">N = VΔp/η</span>
  <span class="equation-number">(7.37)</span>
</div>

### 7.7. Оптимізація та інтенсифікація теплообміну

Оптимізація теплообмінника зводиться до пошуку мінімуму сумарних витрат на виготовлення й експлуатацію. Зростання швидкості підвищує тепловіддачу, але водночас збільшує гідравлічні втрати.

<div class="equation-block">
  <span class="equation-main">S = K/P + E</span>
  <span class="equation-number">(7.38)</span>
</div>

<div class="equation-block">
  <span class="equation-main">K = C<sub>F</sub>F</span>
  <span class="equation-number">(7.39)</span>
</div>

### 7.8. Перевірний розрахунок теплообмінників

Перевірний розрахунок виконують для наявного апарата. Порівнюють наявну і потрібну різницю температур: якщо запас достатній, апарат забезпечує задане теплове навантаження.

<div class="equation-block">
  <span class="equation-main">χ = Δt<sub>available</sub>/Δt<sub>required</sub></span>
  <span class="equation-number">(7.40)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δt<sub>required</sub> = Q/(kF)</span>
  <span class="equation-number"></span>
</div>

## Після опрацювання розділу студент має вміти

- пояснювати роль поняття «теплообмінник» у межах розділу;
- пов'язувати «поверхня теплообміну» з апаратурним оформленням біотехнологічного виробництва;
- розрізняти основні параметри, що впливають на «гідравлічний опір»;
- обґрунтовувати вибір або оцінку процесу через «інтенсифікація».

## Тест для самоперевірки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="uk"
  data-course="bioprocess-engineering"
  data-chapter="chapter-07-heating-cooling"
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
  <input type="radio" name="course-test-7-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>поверхня теплообміну</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>гідравлічний опір</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>інтенсифікація</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-0" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>теплообмінник</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Який підрозділ безпосередньо входить до структури розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-1" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>7.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>7.2. Класифікація теплообмінників</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>7.3. Конструкції теплообмінників</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>7.4. Тепловий розрахунок теплообмінників</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На яке поняття передусім спирається інженерний аналіз цього розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплообмінник</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-2" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>поверхня теплообміну</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>гідравлічний опір</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>інтенсифікація</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Що найтісніше пов'язує теорію процесу з апаратурним оформленням?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплообмінник</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>поверхня теплообміну</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-3" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>інтенсифікація</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гідравлічний опір</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплообмінник</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>поверхня теплообміну</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>інтенсифікація</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-4" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>гідравлічний опір</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. З якої теми починається розділ за структурою підручника?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-5" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>7.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>7.2. Класифікація теплообмінників</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>7.3. Конструкції теплообмінників</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>7.4. Тепловий розрахунок теплообмінників</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Який підрозділ безпосередньо входить до структури розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>7.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-6" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>7.2. Класифікація теплообмінників</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>7.3. Конструкції теплообмінників</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>7.4. Тепловий розрахунок теплообмінників</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Яка тема завершує структуру розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>7.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>7.2. Класифікація теплообмінників</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-7" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>7.8. Перевірний розрахунок теплообмінників</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>7.3. Конструкції теплообмінників</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Яку пару понять доцільно зіставляти під час самоперевірки?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>гідравлічний опір / інтенсифікація</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>теплообмінник / гідравлічний опір</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>поверхня теплообміну / інтенсифікація</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-8" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>теплообмінник / поверхня теплообміну</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Що найкраще підходить для практичного обґрунтування вибору процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-9" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>інтенсифікація</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>теплообмінник</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>поверхня теплообміну</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гідравлічний опір</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплообмінник</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-10" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>поверхня теплообміну</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>гідравлічний опір</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>інтенсифікація</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Який об'єкт подано як наочний рисунок у цьому розділі?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплообмінник</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>поверхня теплообміну</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-11" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Одноходовий кожухотрубний теплообмінник</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гідравлічний опір</span>
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
