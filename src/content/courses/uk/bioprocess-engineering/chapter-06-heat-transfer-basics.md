---
title: "Розділ 6. Основи теплопередачі"
course: "bioprocess-engineering"
course_title: "Інжиніринг біопроцесів: процеси та апарати біотехнологічних виробництв"
chapter: 6
description: "Критерії подібності теплових процесів, теплопровідність, конвективний і променистий теплообмін, теплопередача."
updated: "2026-08-23"
---

## Фокус розділу

У цьому розділі послідовно розглянуто ключові поняття, рівняння та апаратурні рішення за темою.

## Структура матеріалу розділу

- 6.1. Загальні відомості
- 6.2. Основні критерії подібності теплових процесів
- 6.3. Теплопровідність
- 6.4. Конвективний теплообмін
- 6.5. Тепловіддача за зміни агрегатного стану
- 6.6. Променистий теплообмін
- 6.7. Теплопередача

## Матеріал розділу

### 6.1. Загальні відомості

Теплопередачею називають процес перенесення теплоти від одного тіла до іншого, необхідною і достатньою умовою якого є різниця температур. Мірою теплообміну є кількість переданої теплоти; у системі СІ її вимірюють у джоулях. Речовини, що беруть участь у перенесенні теплоти, називають теплоносіями: гарячий теплоносій віддає теплоту, холодний - сприймає її.

У виробництві як гарячі теплоносії використовують водяну пару, гарячу воду, нагріте повітря, димові гази та мінеральні масла; як холодні - воду, повітря, розсоли, вуглекислоту, аміак і фреони. Теплота переноситься теплопровідністю, конвекцією і випромінюванням. Тепловіддача описує теплообмін між стінкою та середовищем, що її омиває, а теплопередача - обмін між двома середовищами через тверду перегородку.

### 6.2. Основні критерії подібності теплових процесів

**Таблиця 6.1. Критерії подібності теплових процесів**

| Критерій | Складові критерію | Фізичний зміст |
|---|---|---|
| Нуссельта | Nu = αl/λ | Інтенсивність переходу теплоти на межі потік - стінка. |
| Прандтля | Pr = ν/a = cμ/λ | Зв'язок температурного і швидкісного полів теплоносія. |
| Пекле | Pe = wl/a = RePr | Відношення конвективного і молекулярного перенесення теплоти. |
| Грасгофа | Gr = gl<sup>3</sup>βΔt/ν<sup>2</sup> | Вплив підіймальної сили під час вільної конвекції. |
| Кутателадзе | Ku | Теплообмін під час фазового переходу. |

### 6.3. Теплопровідність

Основне рівняння перенесення теплоти способом теплопровідності за законом Фур'є для одновимірного потоку:

<div class="equation-block">
  <span class="equation-main">dQ/dτ = -λF · dt/dx</span>
  <span class="equation-number">(6.1)</span>
</div>

Для однорідної плоскої стінки завтовшки δ зі сталим коефіцієнтом теплопровідності λ температури зовнішніх поверхонь дорівнюють t<sub>1</sub> і t<sub>2</sub>. Тоді питомий тепловий потік визначають так:

<div class="equation-block">
  <span class="equation-main">q = λ(t<sub>1</sub> - t<sub>2</sub>)/δ</span>
  <span class="equation-number">(6.2)</span>
</div>

![Рис. 6.1. Схема теплопровідності плоскої стінки](/images/courses/bioprocess-engineering/chapter-06/fig-6-1.webp)
*Рис. 6.1. Схема теплопровідності плоскої стінки*

Величину δ/λ називають тепловим, або термічним, опором стінки. Для багатошарової стінки повний опір дорівнює сумі опорів окремих шарів:

<div class="equation-block">
  <span class="equation-main">R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + ... + R<sub>n</sub></span>
  <span class="equation-number">(6.3)</span>
</div>

### 6.4. Конвективний теплообмін

У рідинах і газах теплота переноситься переважно конвекцією. Вільна конвекція виникає через різницю густин нагрітих і холодних частинок, а примусова - під дією насоса, вентилятора або іншої зовнішньої сили. За турбулентного руху теплообмін значно інтенсивніший, ніж за ламінарного.

Основним законом конвективного теплообміну є закон Ньютона:

<div class="equation-block">
  <span class="equation-main">Q = αF(t<sub>w</sub> - t)</span>
  <span class="equation-number">(6.4)</span>
</div>

Для розвиненого турбулентного руху в трубах і каналах при Re > 10000 застосовують критеріальне рівняння:

<div class="equation-block">
  <span class="equation-main">Nu = 0.021Re<sup>0.8</sup>Pr<sup>0.43</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.5)</span>
</div>

Для рідин з в'язкістю, що не перевищує приблизно подвоєну в'язкість води, користуються спрощеною залежністю:

<div class="equation-block">
  <span class="equation-main">Nu = 0.023Re<sup>0.8</sup>Pr<sup>0.4</sup></span>
  <span class="equation-number">(6.6)</span>
</div>

Для ламінарного руху при Re < 2300 рекомендують:

<div class="equation-block">
  <span class="equation-main">Nu = 0.15Re<sup>0.33</sup>Pr<sup>0.43</sup>Gr<sup>0.1</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.7)</span>
</div>

Для повітря наведені залежності спрощують:

<div class="equation-block">
  <span class="equation-main">Nu = 0.018Re<sup>0.8</sup></span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = 0.13Re<sup>0.33</sup>Gr<sup>0.1</sup></span>
  <span class="equation-number"></span>
</div>

У перехідному режимі 2300 < Re < 10000 тепловіддачу оцінюють наближено:

<div class="equation-block">
  <span class="equation-main">Nu = f(Re)Pr<sup>0.43</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.8)</span>
</div>

**Таблиця 6.2. Значення комплексу f(Re) за різних значень Re**

| Re · 10<sup>-3</sup> | 2.1 | 2.2 | 2.3 | 2.4 | 2.5 | 3 | 4 | 5 | 6 | 8 | 10 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| f(Re) | 1.9 | 2.2 | 3.3 | 3.8 | 4.4 | 6.0 | 10.3 | 15.5 | 19.5 | 27.0 | 33.3 |

За поперечного обтікання пучка труб при куті атаки φ = 90° для шахового і коридорного розміщення труб використовують:

<div class="equation-block">
  <span class="equation-main">Nu = 0.41Re<sup>0.6</sup>Pr<sup>0.33</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = 0.23Re<sup>0.65</sup>Pr<sup>0.33</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.10)</span>
</div>

Для вільної конвекції середній коефіцієнт тепловіддачі визначають через добуток GrPr:

<div class="equation-block">
  <span class="equation-main">Nu = C(GrPr)<sup>n</sup></span>
  <span class="equation-number">(6.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = 1.18(GrPr)<sup>0.125</sup></span>
  <span class="equation-number">(6.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = 0.54(GrPr)<sup>0.25</sup></span>
  <span class="equation-number">(6.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = 0.135(GrPr)<sup>0.33</sup></span>
  <span class="equation-number">(6.14)</span>
</div>

### 6.5. Тепловіддача за зміни агрегатного стану речовини

Під час конденсації пари основний термічний опір створює плівка конденсату на твердій поверхні. Для визначення коефіцієнта тепловіддачі використовують залежність Нуссельта:

<div class="equation-block">
  <span class="equation-main">Nu = C(Ga · Pr · K<sub>u</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.15)</span>
</div>

Під час кипіння рідини теплообмін складний, тому для вертикальних труб із природною циркуляцією застосовують наближене рівняння:

<div class="equation-block">
  <span class="equation-main">Nu = 54K<sup>0.6</sup>Pr<sup>-0.3</sup></span>
  <span class="equation-number">(6.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">α = Aq<sup>0.6</sup></span>
  <span class="equation-number">(6.17)</span>
</div>

### 6.6. Променистий теплообмін

Випромінювання властиве всім тілам: частина теплової енергії перетворюється на променисту, а після поглинання іншими тілами знову переходить у теплоту. Коефіцієнт тепловіддачі випромінюванням визначають так:

<div class="equation-block">
  <span class="equation-main">α<sub>rad</sub> = 5.7ε[(T<sub>1</sub>/100)<sup>4</sup> - (T<sub>2</sub>/100)<sup>4</sup>]/(T<sub>1</sub> - T<sub>2</sub>)</span>
  <span class="equation-number">(6.18)</span>
</div>

Для апаратів у закритих приміщеннях при температурі поверхні до 150 °C сумарний коефіцієнт тепловіддачі випромінюванням і конвекцією можна оцінити:

<div class="equation-block">
  <span class="equation-main">α = 9.76 + 0.07Δt</span>
  <span class="equation-number">(6.19)</span>
</div>

### 6.7. Теплопередача

Кількість теплоти, що передається від гарячого теплоносія до холодного через стінку, визначають загальним рівнянням теплопередачі:

<div class="equation-block">
  <span class="equation-main">Q = kFΔt<sub>m</sub></span>
  <span class="equation-number">(6.20)</span>
</div>

![Рис. 6.2. Схема теплопередачі через плоску стінку](/images/courses/bioprocess-engineering/chapter-06/fig-6-2.webp)
*Рис. 6.2. Схема теплопередачі через плоску стінку*

Для плоскої стінки завтовшки δ з коефіцієнтом теплопровідності λ за усталеного процесу записують три рівняння теплового потоку:

<div class="equation-block">
  <span class="equation-main">q = α<sub>1</sub>(t<sub>1</sub> - t<sub>w1</sub>)</span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">q = λ(t<sub>w1</sub> - t<sub>w2</sub>)/δ</span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">q = α<sub>2</sub>(t<sub>w2</sub> - t<sub>2</sub>)</span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">q = (t<sub>1</sub> - t<sub>2</sub>)/(1/α<sub>1</sub> + δ/λ + 1/α<sub>2</sub>) = k(t<sub>1</sub> - t<sub>2</sub>)</span>
  <span class="equation-number">(6.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">k = 1/(1/α<sub>1</sub> + δ/λ + 1/α<sub>2</sub>)</span>
  <span class="equation-number">(6.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">R = 1/k = 1/α<sub>1</sub> + δ/λ + 1/α<sub>2</sub></span>
  <span class="equation-number">(6.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">k = 1/(1/α<sub>1</sub> + Σ(δ<sub>i</sub>/λ<sub>i</sub>) + 1/α<sub>2</sub>)</span>
  <span class="equation-number">(6.24)</span>
</div>

## Після опрацювання розділу студент має вміти

- пояснювати роль поняття «теплопровідність» у межах розділу;
- пов'язувати «конвекція» з апаратурним оформленням біотехнологічного виробництва;
- розрізняти основні параметри, що впливають на «тепловіддача»;
- обґрунтовувати вибір або оцінку процесу через «теплопередача».

## Тест для самоперевірки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="uk"
  data-course="bioprocess-engineering"
  data-chapter="chapter-06-heat-transfer-basics"
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
  <input type="radio" name="course-test-6-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>конвекція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>тепловіддача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>теплопровідність</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>теплопередача</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Який підрозділ безпосередньо входить до структури розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>6.2. Основні критерії подібності теплових процесів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>6.3. Теплопровідність</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>6.4. Конвективний теплообмін</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>6.1. Загальні відомості</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На яке поняття передусім спирається інженерний аналіз цього розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>конвекція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>теплопровідність</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>тепловіддача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>теплопередача</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Що найтісніше пов'язує теорію процесу з апаратурним оформленням?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплопровідність</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>теплопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>конвекція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>тепловіддача</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплопровідність</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>конвекція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>тепловіддача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>теплопередача</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. З якої теми починається розділ за структурою розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>6.2. Основні критерії подібності теплових процесів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>6.3. Теплопровідність</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>6.4. Конвективний теплообмін</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>6.1. Загальні відомості</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Який підрозділ безпосередньо входить до структури розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>6.2. Основні критерії подібності теплових процесів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>6.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>6.3. Теплопровідність</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>6.4. Конвективний теплообмін</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Яка тема завершує структуру розділу розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>6.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>6.7. Теплопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>6.2. Основні критерії подібності теплових процесів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>6.3. Теплопровідність</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Яку пару понять доцільно зіставляти під час самоперевірки?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>тепловіддача / теплопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>теплопровідність / тепловіддача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>теплопровідність / конвекція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>конвекція / теплопередача</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Що найкраще підходить для практичного обґрунтування вибору процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплопровідність</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>конвекція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>тепловіддача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>теплопередача</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>конвекція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>теплопровідність</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>тепловіддача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>теплопередача</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Який об'єкт подано як наочний рисунок у цьому розділі?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплопровідність</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Теплопровідність плоскої стінки</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>конвекція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>тепловіддача</span>
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
