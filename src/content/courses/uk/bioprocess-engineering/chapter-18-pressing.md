---
title: "Розділ 18. Пресування"
course: "bioprocess-engineering"
course_title: "Інжиніринг біопроцесів: процеси та апарати біотехнологічних виробництв"
chapter: 18
description: "Віджимання рідини з твердих матеріалів, формування пластичних матеріалів, брикетування і гранулювання."
updated: "2026-08-23"
---

## Фокус розділу

У цьому розділі послідовно розглянуто ключові поняття, рівняння та апаратурні рішення за темою.

## Структура матеріалу розділу

- 18.1. Віджимання рідини з твердих матеріалів
- 18.2. Формування пластичних матеріалів
- 18.3. Брикетування і гранулювання твердих матеріалів

## Матеріал розділу

### Розділ 18. Пресування

Пресуванням називають процес оброблення матеріалів тиском під дією зовнішніх сил. Матеріал підлягає односторонньому або об'ємному стисненню у пресах. Пресування застосовують для віджимання рідини з твердих матеріалів, формування пластичних матеріалів, ущільнення, брикетування і гранулювання.

### 18.1. Віджимання рідини з твердих матеріалів

Віджимання, як і фільтрування, використовують для розділення рідкої і твердої фаз. Його застосовують, коли потрібно повніше відділити рідину від осаду або попередньо вилучити вологу перед сушінням. Зі збільшенням тиску матеріал ущільнюється, після чого рідка фракція починає відокремлюватися; швидкість процесу поступово зменшується.

Рідина під час пресування рухається між частинками пористого шару по капілярах змінного перерізу. Для опису витрати рідини через капіляр використовують закон Пуазейля:

<div class="equation-block">
  <span class="equation-main">Q = Δp α d<sub>k</sub><sup>4</sup>/(32 μ l<sub>k</sub>)</span>
  <span class="equation-number">(18.1)</span>
</div>

де Δp - перепад тиску, Па; α - коефіцієнт форми перерізу капіляра; d<sub>k</sub> - діаметр капіляра, м; μ - динамічна в'язкість рідини, Па·с; l<sub>k</sub> - довжина капіляра, м.

Компресійні характеристики описують здатність маси деформуватися під тиском:

<div class="equation-block">
  <span class="equation-main">dp = a dε</span>
  <span class="equation-number"></span>
</div>

Пористість ε залежить від тиску p, тому за експериментальними даними будують компресійні криві:

<div class="equation-block">
  <span class="equation-main">ε = f(p)</span>
  <span class="equation-number"></span>
</div>

Кінетику нестаціонарного віджимання за сталого тиску приблизно описують рівнянням:

<div class="equation-block">
  <span class="equation-main">(ε<sub>p</sub> - ε)/(ε<sub>p</sub> - ε<sub>k</sub>) = 1 - (8/π<sup>2</sup>) exp[-π<sup>2</sup>cτ/(4h<sup>2</sup>)]</span>
  <span class="equation-number">(18.2)</span>
</div>

Преси для віджимання бувають періодичної і безперервної дії; за способом створення тиску розрізняють гідравлічні, пневматичні та механічні преси. У вертикальному гідравлічному пресі матеріал завантажують у зеєрний циліндр, а рідка фракція проходить крізь зазори і стікає в піддон.

![Рис. 18.1. Схема гідравлічного преса](/images/courses/bioprocess-engineering/chapter-18/fig-18-1.webp)
*Рис. 18.1. Схема гідравлічного преса*

Якщо втрат немає, повне зусилля пресування у робочому циліндрі дорівнює зусиллю в гідроциліндрі:

<div class="equation-block">
  <span class="equation-main">F = p<sub>p</sub>πD<sub>p</sub><sup>2</sup>/4 = p<sub>c</sub>πD<sub>c</sub><sup>2</sup>/4</span>
  <span class="equation-number">(18.3)</span>
</div>

Тиск, який потрібно створити в силовому циліндрі, визначають так:

<div class="equation-block">
  <span class="equation-main">p<sub>c</sub> = p<sub>p</sub>(D<sub>p</sub>/D<sub>c</sub>)<sup>2</sup></span>
  <span class="equation-number">(18.4)</span>
</div>

Шнекові преси поширені у біотехнологічній і харчовій промисловості для виділення олії, сусла, жиру, томатного соку та інших рідких фракцій. Ступінь стиснення для циліндричних шнеків визначають співвідношенням кроків:

![Рис. 18.2. Схема шнекового преса](/images/courses/bioprocess-engineering/chapter-18/fig-18-2.webp)
*Рис. 18.2. Схема шнекового преса*

<div class="equation-block">
  <span class="equation-main">K = h<sub>1</sub>/h<sub>2</sub></span>
  <span class="equation-number"></span>
</div>

Тиск у робочому просторі шнека змінюється за експоненціальним законом:

<div class="equation-block">
  <span class="equation-main">p<sub>k</sub> = p<sub>0</sub>e<sup>lβ</sup></span>
  <span class="equation-number">(18.5)</span>
</div>

Продуктивність шнекового преса G, кг/с:

<div class="equation-block">
  <span class="equation-main">G = fw<sub>o</sub>ρφ</span>
  <span class="equation-number">(18.6)</span>
</div>

Для робочої зони корпусу шнекового преса:

<div class="equation-block">
  <span class="equation-main">f = π(D<sup>2</sup> - d<sup>2</sup>)/4</span>
  <span class="equation-number"></span>
</div>

Осьова швидкість переміщення матеріалу:

<div class="equation-block">
  <span class="equation-main">w<sub>o</sub> = hn</span>
  <span class="equation-number">(18.7)</span>
</div>

### 18.2. Формування пластичних матеріалів

Формування застосовують, щоб надати продукту певної форми без істотної зміни густини. Пластичні матеріали формують розкочуванням, округленням, витяжкою, штампуванням і екструзією крізь формувальні отвори. Реологічні властивості матеріалу визначають тривалість дії робочих органів і продуктивність машини.

![Рис. 18.3. Схема одношнекового екструдера](/images/courses/bioprocess-engineering/chapter-18/fig-18-3.webp)
*Рис. 18.3. Схема одношнекового екструдера*

<div class="equation-block">
  <span class="equation-main">tgφ = h/(πD)</span>
  <span class="equation-number">(18.8)</span>
</div>

Екструдери формують пластичні матеріали продавлюванням крізь отвори матриці. У шнековому екструдері матеріал подають у бункер, шнек переміщує його у корпусі до камери перед матрицею, а створений тиск видавлює масу крізь отвори. Кут нахилу гвинтової поверхні пов'язаний із геометрією шнека:

<div class="equation-block">
  <span class="equation-main">Q = Δpk/μ</span>
  <span class="equation-number">(18.9)</span>
</div>

Для практичних розрахунків об'ємної продуктивності формувального устаткування використовують:

### 18.3. Брикетування і гранулювання твердих матеріалів

<div class="equation-block">
  <span class="equation-main">β = V/V<sub>c</sub></span>
  <span class="equation-number">(18.10)</span>
</div>

Брикетуванням називають ущільнення твердого тіла в замкнутому просторі з утворенням брикетів правильної форми. Ущільнення супроводжується подрібненням і відносним зміщенням частинок. Зменшення об'єму характеризують коефіцієнтом ущільнення:

<div class="equation-block">
  <span class="equation-main">ψ ln(p<sub>k</sub>/p<sub>p</sub>) = β<sub>p</sub> - β<sub>k</sub></span>
  <span class="equation-number">(18.11)</span>
</div>

За відсутності втрат тиску на тертя для процесу ущільнення використовують залежність:

За одностороннього пресування густина брикету найбільша біля пуансона, тому доцільним є двостороннє стискання. Міцність брикетів залежить від стану матеріалу, вологості, попередньої теплової обробки, тривалості процесу і витримування під тиском.

![Рис. 18.4. Схема процесу пресування на карусельному пресі](/images/courses/bioprocess-engineering/chapter-18/fig-18-4.webp)
*Рис. 18.4. Схема процесу пресування на карусельному пресі*

<div class="equation-block">
  <span class="equation-main">A = ∫<sub>h<sub>k</sub></sub><sup>h<sub>p</sub></sup> Fp dh</span>
  <span class="equation-number">(18.12)</span>
</div>

Карусельний прес має горизонтальний диск із матрицями і пуансонами. За один оберт диск виконує послідовність операцій: заповнення матриці, формування, виштовхування брусків і очищення пуансона. Роботу пресування за один хід пуансона визначають так:

![Рис. 18.5. Схема гранулювання сухого жому](/images/courses/bioprocess-engineering/chapter-18/fig-18-5.webp)
*Рис. 18.5. Схема гранулювання сухого жому*

## Після опрацювання розділу студент має вміти

- пояснювати роль поняття «тиск» у межах розділу;
- пов'язувати «віджимання» з апаратурним оформленням біотехнологічного виробництва;
- розрізняти основні параметри, що впливають на «формування»;
- обґрунтовувати вибір або оцінку процесу через «гранулювання».

## Тест для самоперевірки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="uk"
  data-course="bioprocess-engineering"
  data-chapter="chapter-18-pressing"
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
  <input type="radio" name="course-test-18-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>віджимання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>формування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гранулювання</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Який підрозділ безпосередньо входить до структури розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>18.2. Формування пластичних матеріалів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>18.3. Брикетування і гранулювання твердих матеріалів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>18.1. Віджимання рідини з твердих матеріалів</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На яке поняття передусім спирається інженерний аналіз цього розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>віджимання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>формування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гранулювання</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Що найтісніше пов'язує теорію процесу з апаратурним оформленням?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>гранулювання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>віджимання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>формування</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>віджимання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>формування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гранулювання</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. З якої теми починається розділ за структурою розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>18.2. Формування пластичних матеріалів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>18.3. Брикетування і гранулювання твердих матеріалів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>18.1. Віджимання рідини з твердих матеріалів</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Який підрозділ безпосередньо входить до структури розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>18.2. Формування пластичних матеріалів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>18.1. Віджимання рідини з твердих матеріалів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>18.3. Брикетування і гранулювання твердих матеріалів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>тиск</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Яка тема завершує структуру розділу розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>18.1. Віджимання рідини з твердих матеріалів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>18.3. Брикетування і гранулювання твердих матеріалів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>18.2. Формування пластичних матеріалів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>тиск</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Яку пару понять доцільно зіставляти під час самоперевірки?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>формування / гранулювання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>тиск / формування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>тиск / віджимання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>віджимання / гранулювання</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Що найкраще підходить для практичного обґрунтування вибору процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>віджимання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>формування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>гранулювання</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>віджимання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>формування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гранулювання</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Який об'єкт подано як наочний рисунок у цьому розділі?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>тиск</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Схема гідравлічного преса</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>віджимання</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>формування</span>
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
