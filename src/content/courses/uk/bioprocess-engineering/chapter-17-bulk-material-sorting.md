---
title: "Розділ 17. Сортування сипких матеріалів"
course: "bioprocess-engineering"
course_title: "Інжиніринг біопроцесів: процеси та апарати біотехнологічних виробництв"
chapter: 17
description: "Просіювання, розподіл за густиною і швидкістю осідання, магнітне сепарування."
updated: "2026-08-23"
---

## Джерело і межі розділу

Основа матеріалу: підручник «Інжиніринг біопроцесів. Модуль 1. Процеси та апарати біотехнологічних виробництв» за редакцією В.Л. Зав’ялова, НУХТ, 2024.

Матеріал сторінки збережено за логікою відповідного розділу підручника; формулювання тестів додано як навчальний інструмент для перевірки засвоєння.

## Структура матеріалу за підручником

- 17.1. Просіювання
- 17.3. Розподіл за густиною і швидкістю осідання частинок
- 17.4. Магнітне сепарування

## Матеріал підручника

### Розділ 17. Сортування сипких матеріалів

У процесі перероблення сипких матеріалів продукт часто потрібно розподілити на однорідні фракції або очистити від домішок. Розподіл твердих матеріалів за розміром частинок називають класифікацією, розподіл за властивостями і сортами - сортуванням, а розподіл поштучної продукції за розміром - калібруванням.

### 17.1. Просіювання

Просіюванням називають розподіл сипкого матеріалу пропусканням крізь одне або кілька сит. Дрібні частинки, що проходять крізь отвори, утворюють прохід, а більші частинки, які затримуються на ситі, утворюють схід. Основним робочим органом є сито.

![Рис. 17.1. Форми отворів сит](/images/courses/bioprocess-engineering/chapter-17/fig-17-1.webp)
*Рис. 17.1. Форми отворів сит: а - круглі; б - довгасті; в - круглі лійкоподібні; г - круглі з відігнутою кромкою; д, е - плетені металеві сітки*

Ефективність просіювання пов'язують із живим перерізом сита φ - відношенням площі отворів F<sub>o</sub> до площі всього сита F, вираженим у відсотках:

<div class="equation-block">
  <span class="equation-main">φ = (F<sub>o</sub>/F)·100</span>
  <span class="equation-number"></span>
</div>

Під час ситового аналізу матеріал послідовно просіюють крізь набір сит із поступовим зменшенням розміру отворів. За масою отриманих фракцій визначають гранулометричний склад і будують криві розподілу частинок за розмірами.

![Рис. 17.2. Схема плоского хитного грохота](/images/courses/bioprocess-engineering/chapter-17/fig-17-2.webp)
*Рис. 17.2. Схема плоского хитного грохота: А - прохід; Б - схід*

Для рухомих сит важливо підібрати частоту коливань. Граничну частоту обертання кривошипа, за якої частинка ще не відривається від сита, визначають так:

<div class="equation-block">
  <span class="equation-main">n = 30√[1/(r tgα)]</span>
  <span class="equation-number">(17.1)</span>
</div>

Мінімальна частота, за якої частинка рухається відносно сита вниз:

<div class="equation-block">
  <span class="equation-main">n<sub>min</sub> = 30√[tg(φ - α)/r]</span>
  <span class="equation-number">(17.2)</span>
</div>

де r - радіус кривошипа, м; α - кут нахилу сита; φ - кут тертя частинок.

![Рис. 17.3. Схеми хитних грохотів](/images/courses/bioprocess-engineering/chapter-17/fig-17-3.webp)
*Рис. 17.3. Схеми хитних грохотів*

![Рис. 17.4. Схема барабанного грохота](/images/courses/bioprocess-engineering/chapter-17/fig-17-4.webp)
*Рис. 17.4. Схема барабанного грохота: А - прохід; Б - схід*

![Рис. 17.5. Схема вібраційного грохота](/images/courses/bioprocess-engineering/chapter-17/fig-17-5.webp)
*Рис. 17.5. Схема вібраційного грохота: А - прохід; Б - схід*

Плоскі хитні грохоти продуктивні й зручні в обслуговуванні, але створюють значні динамічні навантаження. Барабанні грохоти дають змогу послідовно виділяти фракції через отвори, що збільшуються вздовж руху матеріалу. Вібраційні грохоти мають високу ефективність і краще працюють із вологими матеріалами.

### 17.2. Розподіл за формою частинок

Домішки, що відрізняються від зерна довжиною, не завжди можна відокремити на ситах. Для цього застосовують трієри - машини з барабаном або диском, що має комірки. Коротші частинки утримуються в комірках довше і відводяться окремо.

![Рис. 17.6. Схема циліндричного трієра](/images/courses/bioprocess-engineering/chapter-17/fig-17-6.webp)
*Рис. 17.6. Схема циліндричного трієра*

### 17.3. Розподіл за густиною і швидкістю осідання частинок

Розподіл за швидкістю осідання в рідині або газі підлягає законам осідання твердих тіл. У повітряному потоці на частинку діють сила тяжіння G і сила опору P. Якщо G > P, частинка опускається; якщо G < P, вона підіймається; якщо G = P, частинка перебуває у завислому стані.

![Рис. 17.7. Схема повітряно-ситового сепаратора](/images/courses/bioprocess-engineering/chapter-17/fig-17-7.webp)
*Рис. 17.7. Схема повітряно-ситового сепаратора*

Швидкість потоку, за якої частинка утримується в завислому стані, називають швидкістю витання. Цей принцип використовують у повітряно-ситових сепараторах для очищення зерна від легких домішок. Гідравлічну класифікацію застосовують для відокремлення каменів, піску та інших домішок у потоках рідини, а також для сортування зеленого горошку і кукурудзяних зерен.

### 17.4. Магнітне сепарування

![Рис. 17.8. Схема електромагнітного сепаратора](/images/courses/bioprocess-engineering/chapter-17/fig-17-8.webp)
*Рис. 17.8. Схема електромагнітного сепаратора*

## Після опрацювання розділу студент має вміти

- пояснювати роль поняття «сито» у межах розділу;
- пов'язувати «фракція» з апаратурним оформленням біотехнологічного виробництва;
- розрізняти основні параметри, що впливають на «швидкість осідання»;
- обґрунтовувати вибір або оцінку процесу через «магнітний сепаратор».

## Тест для самоперевірки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="uk"
  data-course="bioprocess-engineering"
  data-chapter="chapter-17-bulk-material-sorting"
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
  <input type="radio" name="course-test-17-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>фракція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-0" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>сито</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>швидкість осідання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>магнітний сепаратор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Який підрозділ безпосередньо входить до структури розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-17-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>17.3. Розподіл за густиною і швидкістю осідання частинок</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>17.4. Магнітне сепарування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-1" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>17.1. Просіювання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>сито</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На яке поняття передусім спирається інженерний аналіз цього розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-17-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>сито</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>швидкість осідання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>магнітний сепаратор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-2" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>фракція</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Що найтісніше пов'язує теорію процесу з апаратурним оформленням?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-17-3" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>магнітний сепаратор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>сито</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>фракція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>швидкість осідання</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-17-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>сито</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-4" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>швидкість осідання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>фракція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>магнітний сепаратор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. З якої теми починається розділ за структурою підручника?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-17-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>17.3. Розподіл за густиною і швидкістю осідання частинок</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>17.4. Магнітне сепарування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-5" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>17.1. Просіювання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>сито</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Який підрозділ безпосередньо входить до структури розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-17-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>17.1. Просіювання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>17.4. Магнітне сепарування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>сито</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-6" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>17.3. Розподіл за густиною і швидкістю осідання частинок</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Яка тема завершує структуру розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-17-7" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>17.4. Магнітне сепарування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>17.1. Просіювання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>17.3. Розподіл за густиною і швидкістю осідання частинок</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>сито</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Яку пару понять доцільно зіставляти під час самоперевірки?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-17-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>швидкість осідання / магнітний сепаратор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-8" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>сито / фракція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>сито / швидкість осідання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>фракція / магнітний сепаратор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Що найкраще підходить для практичного обґрунтування вибору процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-17-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>сито</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>фракція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-9" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>магнітний сепаратор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>швидкість осідання</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-17-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>сито</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>швидкість осідання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>магнітний сепаратор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-10" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>фракція</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Який об'єкт подано як наочний рисунок у цьому розділі?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-17-11" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Форми отворів сит</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>сито</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>фракція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-17-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>швидкість осідання</span>
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
<li>Питання 1: Правильна відповідь - B</li>
<li>Питання 2: Правильна відповідь - C</li>
<li>Питання 3: Правильна відповідь - D</li>
<li>Питання 4: Правильна відповідь - A</li>
<li>Питання 5: Правильна відповідь - B</li>
<li>Питання 6: Правильна відповідь - C</li>
<li>Питання 7: Правильна відповідь - D</li>
<li>Питання 8: Правильна відповідь - A</li>
<li>Питання 9: Правильна відповідь - B</li>
<li>Питання 10: Правильна відповідь - C</li>
<li>Питання 11: Правильна відповідь - D</li>
<li>Питання 12: Правильна відповідь - A</li>
</ol>
</details>
</section>

## Подальше опрацювання

На наступному проході цей розділ можна деталізувати формулами, прикладами розрахунку, рисунками апаратів і посиланнями на сучасні біотехнологічні виробництва.
