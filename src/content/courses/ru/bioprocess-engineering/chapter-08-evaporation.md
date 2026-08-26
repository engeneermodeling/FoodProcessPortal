---
title: "Раздел 8. Выпаривание"
course: "bioprocess-engineering"
course_title: "Инжиниринг биопроцессов: процессы и аппараты биотехнологических производств"
chapter: 8
description: "Однокорпусные и многокорпусные выпарные установки, тепловые насосы, конструкции аппаратов и расчет."
updated: "2026-08-23"
---

## Источник и границы раздела

Основа материала: учебник «Инжиниринг биопроцессов. Модуль 1. Процессы и аппараты биотехнологических производств» под редакцией В.Л. Завьялова, НУХТ, 2024.

## Структура материала по учебнику

- 8.1. Общие сведения
- 8.2. Выпаривание в однокорпусной установке периодического действия
- 8.3. Многокорпусные выпарные установки
- 8.4. Выпарные установки с тепловыми насосами
- 8.5. Конструкции выпарных аппаратов
- 8.6. Расчет многокорпусной выпарной установки

## Конспект лекции

### 8.1. Общие сведения

Выпариванием называют концентрирование растворов нелетучих веществ частичным удалением летучего растворителя при температуре кипения. В отличие от испарения с поверхности, выпаривание происходит во всей массе кипящей жидкости.

В биотехнологических, пищевых и фармацевтических производствах часто концентрируют водные растворы. Первичный, или греющий, пар подводит теплоту, а вторичный пар целесообразно использовать повторно. Для термолабильных продуктов выпаривание ведут под разрежением, чтобы снизить температуру кипения.

### 8.2. Выпаривание в однокорпусной установке периодического действия

В однокорпусной установке за цикл в аппарат поступает исходный раствор, а выходят упаренный раствор, вторичный пар и конденсат греющего пара. Материальный баланс записывают для всего раствора и для сухих веществ.

![Рис. 8.1. Схема выпарного аппарата](/images/courses/bioprocess-engineering/chapter-08/fig-8-1.webp)
*Рис. 8.1. Схема выпарного аппарата*

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

Периодическое выпаривание под вакуумом снижает температуру кипения продукта и увеличивает полезную разность температур между греющим паром и кипящим раствором.

![Рис. 8.2. Однокорпусная выпарная установка](/images/courses/bioprocess-engineering/chapter-08/fig-8-2.webp)
*Рис. 8.2. Однокорпусная выпарная установка*

### 8.3. Многокорпусные выпарные установки

Многокорпусная выпарная установка использует вторичный пар предыдущего корпуса как греющий пар следующего. Поэтому одна и та же теплота используется многократно, а расход первичного пара уменьшается.

![Рис. 8.3. Многокорпусная выпарная установка с конденсатором](/images/courses/bioprocess-engineering/chapter-08/fig-8-3.webp)
*Рис. 8.3. Многокорпусная выпарная установка с конденсатором*

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

Полезная разность температур в корпусах меньше общей из-за температурных потерь: физико-химической депрессии, гидростатической депрессии и потерь давления в паропроводах.

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

### 8.4. Выпарные установки с тепловыми насосами

Установки с тепловыми насосами повышают энергетическую эффективность. В механическом варианте вторичный пар сжимает турбокомпрессор, а в инжекторном его параметры повышает струя острого пара.

![Рис. 8.4. Однокорпусная выпарная установка с турбокомпрессором](/images/courses/bioprocess-engineering/chapter-08/fig-8-4.webp)
*Рис. 8.4. Однокорпусная выпарная установка с турбокомпрессором*

![Рис. 8.5. Выпарной аппарат с инжекторным тепловым насосом](/images/courses/bioprocess-engineering/chapter-08/fig-8-5.webp)
*Рис. 8.5. Выпарной аппарат с инжекторным тепловым насосом*

### 8.5. Конструкции выпарных аппаратов

Выпарные аппараты классифицируют по режиму циркуляции, кратности прохождения раствора, расположению и конфигурации поверхности нагрева. Для термочувствительных или вязких сред особенно важны время пребывания, интенсивность циркуляции и возможность очистки поверхности.

![Рис. 8.6. Выпарной аппарат с центральной циркуляционной трубой](/images/courses/bioprocess-engineering/chapter-08/fig-8-6.webp)
*Рис. 8.6. Выпарной аппарат с центральной циркуляционной трубой*

![Рис. 8.7. Выпарной аппарат с вынесенными циркуляционными трубами](/images/courses/bioprocess-engineering/chapter-08/fig-8-7.webp)
*Рис. 8.7. Выпарной аппарат с вынесенными циркуляционными трубами*

![Рис. 8.8. Выпарной аппарат с вынесенной поверхностью нагрева](/images/courses/bioprocess-engineering/chapter-08/fig-8-8.webp)
*Рис. 8.8. Выпарной аппарат с вынесенной поверхностью нагрева*

![Рис. 8.9. Выпарной аппарат с однократным прохождением жидкости](/images/courses/bioprocess-engineering/chapter-08/fig-8-9.webp)
*Рис. 8.9. Выпарной аппарат с однократным прохождением жидкости*

![Рис. 8.10. Выпарной аппарат с принудительной циркуляцией](/images/courses/bioprocess-engineering/chapter-08/fig-8-10.webp)
*Рис. 8.10. Выпарной аппарат с принудительной циркуляцией*

![Рис. 8.11. Выпарной аппарат со стекающей пленкой](/images/courses/bioprocess-engineering/chapter-08/fig-8-11.webp)
*Рис. 8.11. Выпарной аппарат со стекающей пленкой*

![Рис. 8.12. Роторный пленочный выпарной аппарат](/images/courses/bioprocess-engineering/chapter-08/fig-8-12.webp)
*Рис. 8.12. Роторный пленочный выпарной аппарат*

### 8.6. Расчет многокорпусной выпарной установки

Расчет многокорпусной установки включает количество выпаренной воды по корпусам, тепловую нагрузку, коэффициенты теплопередачи и площади поверхности нагрева каждого корпуса.

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

## После изучения раздела студент должен уметь

- объяснять роль понятия «вторичный пар» в пределах раздела;
- связывать «корпус» с аппаратурным оформлением биотехнологического производства;
- различать основные параметры, влияющие на «концентрирование»;
- обосновывать выбор или оценку процесса через «тепловой баланс».

## Тест для самопроверки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="ru"
  data-course="bioprocess-engineering"
  data-chapter="chapter-08-evaporation"
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
  <input type="radio" name="course-test-8-0" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>вторичный пар</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>корпус</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>концентрирование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>тепловой баланс</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>8.2. Выпаривание в однокорпусной установке периодического действия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-1" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>8.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>8.3. Многокорпусные выпарные установки</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>8.4. Выпарные установки с тепловыми насосами</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На какое понятие прежде всего опирается инженерный анализ этого раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>вторичный пар</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>концентрирование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-2" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>корпус</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>тепловой баланс</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Что теснее всего связывает теорию процесса с аппаратурным оформлением?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>вторичный пар</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>корпус</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>концентрирование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-3" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>тепловой баланс</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-4" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>концентрирование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>вторичный пар</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>корпус</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>тепловой баланс</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. С какой темы начинается раздел в структуре учебника?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>8.2. Выпаривание в однокорпусной установке периодического действия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-5" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>8.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>8.3. Многокорпусные выпарные установки</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>8.4. Выпарные установки с тепловыми насосами</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>8.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>8.3. Многокорпусные выпарные установки</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-6" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>8.2. Выпаривание в однокорпусной установке периодического действия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>8.4. Выпарные установки с тепловыми насосами</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Какая тема завершает структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>8.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>8.2. Выпаривание в однокорпусной установке периодического действия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>8.3. Многокорпусные выпарные установки</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-7" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>8.6. Расчет многокорпусной выпарной установки</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Какую пару понятий целесообразно сопоставлять при самопроверке?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-8" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>вторичный пар / корпус</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>концентрирование / тепловой баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>вторичный пар / концентрирование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>корпус / тепловой баланс</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Что лучше всего подходит для практического обоснования выбора процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>вторичный пар</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-9" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>тепловой баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>корпус</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>концентрирование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>вторичный пар</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>концентрирование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-10" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>корпус</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>тепловой баланс</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Какой объект представлен в этом разделе как наглядный рисунок?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>вторичный пар</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>корпус</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>концентрирование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-11" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Схема выпарного аппарата</span>
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
<li>Вопрос 1: Правильный ответ - A</li>
<li>Вопрос 2: Правильный ответ - B</li>
<li>Вопрос 3: Правильный ответ - C</li>
<li>Вопрос 4: Правильный ответ - D</li>
<li>Вопрос 5: Правильный ответ - A</li>
<li>Вопрос 6: Правильный ответ - B</li>
<li>Вопрос 7: Правильный ответ - C</li>
<li>Вопрос 8: Правильный ответ - D</li>
<li>Вопрос 9: Правильный ответ - A</li>
<li>Вопрос 10: Правильный ответ - B</li>
<li>Вопрос 11: Правильный ответ - C</li>
<li>Вопрос 12: Правильный ответ - D</li>
</ol>
</details>
</section>
