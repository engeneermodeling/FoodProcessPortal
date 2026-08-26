---
title: "Раздел 7. Нагревание и охлаждение"
course: "bioprocess-engineering"
course_title: "Инжиниринг биопроцессов: процессы и аппараты биотехнологических производств"
chapter: 7
description: "Классификация, конструкции, тепловой, конструкционный и гидравлический расчет теплообменников."
updated: "2026-08-23"
---

## Источник и границы раздела

Основа материала: учебник «Инжиниринг биопроцессов. Модуль 1. Процессы и аппараты биотехнологических производств» под редакцией В.Л. Завьялова, НУХТ, 2024.

## Структура материала по учебнику

- 7.1. Общие сведения
- 7.2. Классификация теплообменников
- 7.3. Конструкции теплообменников
- 7.4. Тепловой расчет теплообменников
- 7.5. Конструкционный расчет теплообменников
- 7.6. Гидравлический расчет теплообменников
- 7.7. Оптимизация и интенсификация теплообмена
- 7.8. Проверочный расчет теплообменников

## Конспект лекции

### 7.1. Общие сведения

Нагревание и охлаждение жидкостей и газов относятся к наиболее распространенным процессам био-инжиниринга. Для каждого процесса выбирают технологически и экономически целесообразный способ, теплоноситель и конструкцию аппарата. Аппараты для этих операций называют теплообменниками.

### 7.2. Классификация теплообменников

По способу передачи теплоты теплообменники делят на поверхностные и смесительные. В поверхностных аппаратах теплоносители разделены стенкой или поочередно контактируют с одной поверхностью; в смесительных теплообмен происходит при непосредственном контакте сред. В промышленности чаще всего используют рекуперативные поверхностные теплообменники.

Основные требования: высокий коэффициент теплопередачи, малое гидравлическое сопротивление, герметичность, удобство очистки, ремонтопригодность и компенсация температурных удлинений.

### 7.3. Конструкции теплообменников

Кожухотрубные теплообменники позволяют создать в одном аппарате большую поверхность теплообмена. Скорость теплоносителей повышают многоходовым движением и сегментными перегородками. Трубы в трубных решетках часто размещают по правильным шестиугольникам.

![Рис. 7.1. Схема кожухотрубного одноходового теплообменника](/images/courses/bioprocess-engineering/chapter-07/fig-7-1.webp)
*Рис. 7.1. Схема кожухотрубного одноходового теплообменника*

![Рис. 7.2. Схема кожухотрубного многоходового теплообменника](/images/courses/bioprocess-engineering/chapter-07/fig-7-2.webp)
*Рис. 7.2. Схема кожухотрубного многоходового теплообменника*

![Рис. 7.3. Схемы размещения труб в трубных решетках](/images/courses/bioprocess-engineering/chapter-07/fig-7-3.webp)
*Рис. 7.3. Схемы размещения труб в трубных решетках*

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

Для малых расходов применяют теплообменники типа «труба в трубе». Погружные и оросительные змеевиковые аппараты просты, но имеют сравнительно низкую интенсивность теплообмена. Спиральные и пластинчатые теплообменники компактны; пластинчатые аппараты особенно распространены для стерилизации и охлаждения технологических жидкостей.

![Рис. 7.5. Схема теплообменника типа «труба в трубе»](/images/courses/bioprocess-engineering/chapter-07/fig-7-5.webp)
*Рис. 7.5. Схема теплообменника типа «труба в трубе»*

![Рис. 7.6. Схема погружного теплообменника](/images/courses/bioprocess-engineering/chapter-07/fig-7-6.webp)
*Рис. 7.6. Схема погружного теплообменника*

![Рис. 7.7. Схема оросительного змеевикового теплообменника](/images/courses/bioprocess-engineering/chapter-07/fig-7-7.webp)
*Рис. 7.7. Схема оросительного змеевикового теплообменника*

![Рис. 7.8. Схема спирального теплообменника](/images/courses/bioprocess-engineering/chapter-07/fig-7-8.webp)
*Рис. 7.8. Схема спирального теплообменника*

![Рис. 7.9. Схема движения сред в пластинчатом теплообменнике](/images/courses/bioprocess-engineering/chapter-07/fig-7-9.webp)
*Рис. 7.9. Схема движения сред в пластинчатом теплообменнике*

![Рис. 7.10. Поверхность из оребренных труб теплообменника](/images/courses/bioprocess-engineering/chapter-07/fig-7-10.webp)
*Рис. 7.10. Поверхность из оребренных труб теплообменника*

![Рис. 7.11. Схема оболочкового теплообменника](/images/courses/bioprocess-engineering/chapter-07/fig-7-11.webp)
*Рис. 7.11. Схема оболочкового теплообменника*

### 7.4. Тепловой расчет теплообменников

Проектный тепловой расчет сводится к определению требуемой площади поверхности теплообмена. Последовательно находят тепловую нагрузку, коэффициент теплопередачи и среднюю разность температур.

<div class="equation-block">
  <span class="equation-main">F = Q/(kΔt<sub>m</sub>)</span>
  <span class="equation-number">(7.5)</span>
</div>

Если потери теплоты в окружающую среду малы, тепловой баланс записывают между горячим и холодным теплоносителями. Для теплоносителей без изменения агрегатного состояния энтальпии заменяют произведением теплоемкости на температуру.

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

Коэффициент теплопередачи определяют через термические сопротивления стенки, загрязнений и теплоотдачи с обеих сторон. Для отдельных конструкций применяют специальные критериальные уравнения.

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

Среднюю разность температур определяют как среднелогарифмическую. Противоток использует теплоносители наиболее полно, поэтому аппарат получается компактнее, чем при прямотоке.

![Рис. 7.12. Графики изменения температур теплоносителей](/images/courses/bioprocess-engineering/chapter-07/fig-7-12.webp)
*Рис. 7.12. Графики изменения температур теплоносителей*

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

### 7.5. Конструкционный расчет теплообменников

После теплового расчета выполняют конструкционный: определяют проходные сечения, число труб, число ходов, длину труб или змеевика, высоту змеевика и диаметры патрубков.

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

### 7.6. Гидравлический расчет теплообменников

Гидравлический расчет нужен для определения потерь давления и мощности насосов или вентиляторов, перемещающих теплоносители через аппарат.

<div class="equation-block">
  <span class="equation-main">N = VΔp/η</span>
  <span class="equation-number">(7.37)</span>
</div>

### 7.7. Оптимизация и интенсификация теплообмена

Оптимизация теплообменника сводится к поиску минимума суммарных затрат на изготовление и эксплуатацию. Рост скорости повышает теплоотдачу, но одновременно увеличивает гидравлические потери.

<div class="equation-block">
  <span class="equation-main">S = K/P + E</span>
  <span class="equation-number">(7.38)</span>
</div>

<div class="equation-block">
  <span class="equation-main">K = C<sub>F</sub>F</span>
  <span class="equation-number">(7.39)</span>
</div>

### 7.8. Поверочный расчет теплообменников

Поверочный расчет выполняют для существующего аппарата. Сравнивают имеющуюся и требуемую разность температур: если запас достаточен, аппарат обеспечивает заданную тепловую нагрузку.

<div class="equation-block">
  <span class="equation-main">χ = Δt<sub>available</sub>/Δt<sub>required</sub></span>
  <span class="equation-number">(7.40)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δt<sub>required</sub> = Q/(kF)</span>
  <span class="equation-number"></span>
</div>

## После изучения раздела студент должен уметь

- объяснять роль понятия «теплообменник» в пределах раздела;
- связывать «поверхность теплообмена» с аппаратурным оформлением биотехнологического производства;
- различать основные параметры, влияющие на «гидравлическое сопротивление»;
- обосновывать выбор или оценку процесса через «интенсификация».

## Тест для самопроверки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="ru"
  data-course="bioprocess-engineering"
  data-chapter="chapter-07-heating-cooling"
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
  <input type="radio" name="course-test-7-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>поверхность теплообмена</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>гидравлическое сопротивление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>интенсификация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-0" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>теплообменник</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-1" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>7.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>7.2. Классификация теплообменников</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>7.3. Конструкции теплообменников</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>7.4. Тепловой расчет теплообменников</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На какое понятие прежде всего опирается инженерный анализ этого раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплообменник</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-2" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>поверхность теплообмена</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>гидравлическое сопротивление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>интенсификация</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Что теснее всего связывает теорию процесса с аппаратурным оформлением?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплообменник</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>поверхность теплообмена</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-3" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>интенсификация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гидравлическое сопротивление</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплообменник</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>поверхность теплообмена</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>интенсификация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-4" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>гидравлическое сопротивление</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. С какой темы начинается раздел в структуре учебника?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-5" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>7.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>7.2. Классификация теплообменников</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>7.3. Конструкции теплообменников</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>7.4. Тепловой расчет теплообменников</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>7.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-6" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>7.2. Классификация теплообменников</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>7.3. Конструкции теплообменников</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>7.4. Тепловой расчет теплообменников</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Какая тема завершает структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>7.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>7.2. Классификация теплообменников</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-7" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>7.8. Проверочный расчет теплообменников</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>7.3. Конструкции теплообменников</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Какую пару понятий целесообразно сопоставлять при самопроверке?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>гидравлическое сопротивление / интенсификация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>теплообменник / гидравлическое сопротивление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>поверхность теплообмена / интенсификация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-8" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>теплообменник / поверхность теплообмена</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Что лучше всего подходит для практического обоснования выбора процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-9" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>интенсификация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>теплообменник</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>поверхность теплообмена</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гидравлическое сопротивление</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплообменник</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-10" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>поверхность теплообмена</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>гидравлическое сопротивление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>интенсификация</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Какой объект представлен в этом разделе как наглядный рисунок?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>теплообменник</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>поверхность теплообмена</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-11" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Одноходовой кожухотрубный теплообменник</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гидравлическое сопротивление</span>
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
