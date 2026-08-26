---
title: "Раздел 6. Основы теплопередачи"
course: "bioprocess-engineering"
course_title: "Инжиниринг биопроцессов: процессы и аппараты биотехнологических производств"
chapter: 6
description: "Критерии подобия тепловых процессов, теплопроводность, конвективный и лучистый теплообмен, теплопередача."
updated: "2026-08-23"
---

## Источник и границы раздела

Основа материала: учебник «Инжиниринг биопроцессов. Модуль 1. Процессы и аппараты биотехнологических производств» под редакцией В.Л. Завьялова, НУХТ, 2024.

## Структура материала по учебнику

- 6.1. Общие сведения
- 6.2. Основные критерии подобия тепловых процессов
- 6.3. Теплопроводность
- 6.4. Конвективный теплообмен
- 6.5. Теплоотдача при изменении агрегатного состояния
- 6.6. Лучистый теплообмен
- 6.7. Теплопередача

## Конспект лекции

### 6.1. Общие сведения

Теплопередачей называют перенос теплоты от одного тела к другому; необходимым и достаточным условием является разность температур. Мерой теплообмена является количество переданной теплоты, в системе СИ его измеряют в джоулях. Вещества, участвующие в переносе теплоты, называют теплоносителями: горячий теплоноситель отдает теплоту, холодный воспринимает ее.

В промышленности как горячие теплоносители используют водяной пар, горячую воду, нагретый воздух, дымовые газы и минеральные масла; как холодные - воду, воздух, рассолы, углекислоту, аммиак и фреоны. Теплота переносится теплопроводностью, конвекцией и излучением. Теплоотдача описывает теплообмен между стенкой и омывающей средой, а теплопередача - обмен между двумя средами через твердую перегородку.

### 6.2. Основные критерии подобия тепловых процессов

**Таблица 6.1. Критерии подобия тепловых процессов**

| Критерий | Состав критерия | Физический смысл |
|---|---|---|
| Нуссельта | Nu = αl/λ | Интенсивность перехода теплоты на границе поток - стенка. |
| Прандтля | Pr = ν/a = cμ/λ | Связь температурного и скоростного полей теплоносителя. |
| Пекле | Pe = wl/a = RePr | Отношение конвективного и молекулярного переноса теплоты. |
| Грасгофа | Gr = gl<sup>3</sup>βΔt/ν<sup>2</sup> | Влияние подъемной силы при свободной конвекции. |
| Кутателадзе | Ku | Теплообмен при фазовом переходе. |

### 6.3. Теплопроводность

Основное уравнение переноса теплоты теплопроводностью по закону Фурье для одномерного потока:

<div class="equation-block">
  <span class="equation-main">dQ/dτ = -λF · dt/dx</span>
  <span class="equation-number">(6.1)</span>
</div>

Для однородной плоской стенки толщиной δ с постоянным коэффициентом теплопроводности λ и температурами поверхностей t<sub>1</sub> и t<sub>2</sub> удельный тепловой поток равен:

<div class="equation-block">
  <span class="equation-main">q = λ(t<sub>1</sub> - t<sub>2</sub>)/δ</span>
  <span class="equation-number">(6.2)</span>
</div>

![Рис. 6.1. Схема теплопроводности плоской стенки](/images/courses/bioprocess-engineering/chapter-06/fig-6-1.webp)
*Рис. 6.1. Схема теплопроводности плоской стенки*

Величину δ/λ называют тепловым, или термическим, сопротивлением стенки. Для многослойной стенки полное сопротивление равно сумме сопротивлений отдельных слоев:

<div class="equation-block">
  <span class="equation-main">R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + ... + R<sub>n</sub></span>
  <span class="equation-number">(6.3)</span>
</div>

### 6.4. Конвективный теплообмен

В жидкостях и газах теплота переносится преимущественно конвекцией. Свободная конвекция возникает из-за разности плотностей нагретых и холодных частиц, а вынужденная - под действием насоса, вентилятора или другой внешней силы. При турбулентном движении теплообмен значительно интенсивнее, чем при ламинарном.

Основным законом конвективного теплообмена является закон Ньютона:

<div class="equation-block">
  <span class="equation-main">Q = αF(t<sub>w</sub> - t)</span>
  <span class="equation-number">(6.4)</span>
</div>

Для развитого турбулентного движения в трубах и каналах при Re > 10000 применяют критериальное уравнение:

<div class="equation-block">
  <span class="equation-main">Nu = 0.021Re<sup>0.8</sup>Pr<sup>0.43</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.5)</span>
</div>

Для жидкостей с вязкостью не более примерно двойной вязкости воды используют упрощенную зависимость:

<div class="equation-block">
  <span class="equation-main">Nu = 0.023Re<sup>0.8</sup>Pr<sup>0.4</sup></span>
  <span class="equation-number">(6.6)</span>
</div>

Для ламинарного движения при Re < 2300 рекомендуется:

<div class="equation-block">
  <span class="equation-main">Nu = 0.15Re<sup>0.33</sup>Pr<sup>0.43</sup>Gr<sup>0.1</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.7)</span>
</div>

Для воздуха эти зависимости упрощаются:

<div class="equation-block">
  <span class="equation-main">Nu = 0.018Re<sup>0.8</sup></span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = 0.13Re<sup>0.33</sup>Gr<sup>0.1</sup></span>
  <span class="equation-number"></span>
</div>

В переходной области 2300 < Re < 10000 теплоотдачу оценивают приближенно:

<div class="equation-block">
  <span class="equation-main">Nu = f(Re)Pr<sup>0.43</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.8)</span>
</div>

**Таблица 6.2. Значения комплекса f(Re) при разных значениях Re**

| Re · 10<sup>-3</sup> | 2.1 | 2.2 | 2.3 | 2.4 | 2.5 | 3 | 4 | 5 | 6 | 8 | 10 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| f(Re) | 1.9 | 2.2 | 3.3 | 3.8 | 4.4 | 6.0 | 10.3 | 15.5 | 19.5 | 27.0 | 33.3 |

При поперечном обтекании пучка труб с углом атаки φ = 90° для шахматного и коридорного размещения труб используют:

<div class="equation-block">
  <span class="equation-main">Nu = 0.41Re<sup>0.6</sup>Pr<sup>0.33</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = 0.23Re<sup>0.65</sup>Pr<sup>0.33</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.10)</span>
</div>

Для свободной конвекции средний коэффициент теплоотдачи определяют через произведение GrPr:

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

### 6.5. Теплоотдача при изменении агрегатного состояния вещества

При конденсации пара основное термическое сопротивление создает пленка конденсата на твердой поверхности. Для определения коэффициента теплоотдачи используют зависимость Нуссельта:

<div class="equation-block">
  <span class="equation-main">Nu = C(Ga · Pr · K<sub>u</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.15)</span>
</div>

Теплообмен при кипении жидкости сложен, поэтому для вертикальных труб с естественной циркуляцией применяют приближенное уравнение:

<div class="equation-block">
  <span class="equation-main">Nu = 54K<sup>0.6</sup>Pr<sup>-0.3</sup></span>
  <span class="equation-number">(6.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">α = Aq<sup>0.6</sup></span>
  <span class="equation-number">(6.17)</span>
</div>

### 6.6. Лучистый теплообмен

Излучение свойственно всем телам: часть тепловой энергии превращается в лучистую, а после поглощения другими телами снова переходит в теплоту. Коэффициент теплоотдачи излучением определяют так:

<div class="equation-block">
  <span class="equation-main">α<sub>rad</sub> = 5.7ε[(T<sub>1</sub>/100)<sup>4</sup> - (T<sub>2</sub>/100)<sup>4</sup>]/(T<sub>1</sub> - T<sub>2</sub>)</span>
  <span class="equation-number">(6.18)</span>
</div>

Для аппаратов в закрытых помещениях при температуре поверхности до 150 °C суммарный коэффициент теплоотдачи излучением и конвекцией можно оценить:

<div class="equation-block">
  <span class="equation-main">α = 9.76 + 0.07Δt</span>
  <span class="equation-number">(6.19)</span>
</div>

### 6.7. Теплопередача

Количество теплоты, передаваемой от горячего теплоносителя к холодному через стенку, определяют общим уравнением теплопередачи:

<div class="equation-block">
  <span class="equation-main">Q = kFΔt<sub>m</sub></span>
  <span class="equation-number">(6.20)</span>
</div>

![Рис. 6.2. Схема теплопередачи через плоскую стенку](/images/courses/bioprocess-engineering/chapter-06/fig-6-2.webp)
*Рис. 6.2. Схема теплопередачи через плоскую стенку*

Для плоской стенки толщиной δ с коэффициентом теплопроводности λ при установившемся процессе записывают три уравнения теплового потока:

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

## После изучения раздела студент должен уметь

- объяснять роль понятия «теплопроводность» в пределах раздела;
- связывать «конвекция» с аппаратурным оформлением биотехнологического производства;
- различать основные параметры, влияющие на «теплоотдача»;
- обосновывать выбор или оценку процесса через «теплопередача».

## Тест для самопроверки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="ru"
  data-course="bioprocess-engineering"
  data-chapter="chapter-06-heat-transfer-basics"
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
  <input type="radio" name="course-test-6-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>конвекция</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>теплоотдача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>теплопроводность</span>
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
<legend>2. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>6.2. Основные критерии подобия тепловых процессов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>6.3. Теплопроводность</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>6.4. Конвективный теплообмен</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>6.1. Общие сведения</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На какое понятие прежде всего опирается инженерный анализ этого раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>конвекция</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>теплопроводность</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>теплоотдача</span>
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
<legend>4. Что теснее всего связывает теорию процесса с аппаратурным оформлением?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплопроводность</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>теплопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>конвекция</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>теплоотдача</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплопроводность</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>конвекция</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>теплоотдача</span>
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
<legend>6. С какой темы начинается раздел в структуре учебника?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>6.2. Основные критерии подобия тепловых процессов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>6.3. Теплопроводность</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>6.4. Конвективный теплообмен</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>6.1. Общие сведения</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>6.2. Основные критерии подобия тепловых процессов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>6.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>6.3. Теплопроводность</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>6.4. Конвективный теплообмен</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Какая тема завершает структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>6.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>6.7. Теплопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>6.2. Основные критерии подобия тепловых процессов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>6.3. Теплопроводность</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Какую пару понятий целесообразно сопоставлять при самопроверке?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплоотдача / теплопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>теплопроводность / теплоотдача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>теплопроводность / конвекция</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>конвекция / теплопередача</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Что лучше всего подходит для практического обоснования выбора процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплопроводность</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>конвекция</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>теплоотдача</span>
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
<legend>11. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>конвекция</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>теплопроводность</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>теплоотдача</span>
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
<legend>12. Какой объект представлен в этом разделе как наглядный рисунок?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплопроводность</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Теплопроводность плоской стенки</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>конвекция</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>теплоотдача</span>
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
<li>Вопрос 1: Правильный ответ - C</li>
<li>Вопрос 2: Правильный ответ - D</li>
<li>Вопрос 3: Правильный ответ - A</li>
<li>Вопрос 4: Правильный ответ - B</li>
<li>Вопрос 5: Правильный ответ - C</li>
<li>Вопрос 6: Правильный ответ - D</li>
<li>Вопрос 7: Правильный ответ - A</li>
<li>Вопрос 8: Правильный ответ - B</li>
<li>Вопрос 9: Правильный ответ - C</li>
<li>Вопрос 10: Правильный ответ - D</li>
<li>Вопрос 11: Правильный ответ - A</li>
<li>Вопрос 12: Правильный ответ - B</li>
</ol>
</details>
</section>
