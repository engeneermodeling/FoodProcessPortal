---
title: "Раздел 10. Основы массопередачи"
course: "bioprocess-engineering"
course_title: "Инжиниринг биопроцессов: процессы и аппараты биотехнологических производств"
chapter: 10
description: "Молекулярная и конвективная диффузия, массопередача, теории массопередачи, критерии подобия и термодиффузия."
updated: "2026-08-23"
---

## Фокус раздела

В этом разделе последовательно рассмотрены основные понятия, уравнения и аппаратурные решения по теме.

## Структура материала раздела

- 10.1. Общие сведения
- 10.2. Молекулярная диффузия
- 10.3. Конвективная диффузия
- 10.4. Массопередача
- 10.5. Подобие диффузионных процессов
- 10.6. Понятие о термодиффузии

## Конспект лекции

Материал следует логике раздела 10 этого курса: сначала вводятся массообменные процессы, затем рассматриваются молекулярная и конвективная диффузия, массоотдача, массопередача, критерии подобия и термодиффузия.

### 10.1. Общие сведения

Массообменными, или диффузионными, называют процессы перераспределения массы между фазами и внутри фаз, обусловленные стремлением системы к физико-химическому равновесию. Движущая сила - разность между фактической концентрацией компонента и его равновесной концентрацией.

К массообменным процессам относят абсорбцию, ректификацию, сушку, адсорбцию, десорбцию, ионный обмен, экстрагирование, кристаллизацию, растворение и жидкостную экстракцию. В биотехнологических и пищевых производствах они нужны для очистки, концентрирования и выделения целевых компонентов.

При расчете анализируют фазовое равновесие, рабочие условия по материальным балансам и кинетику переноса массы.

<div class="equation-block">
  <span class="equation-main">M = dm/dτ</span>
  <span class="equation-number">(10.1)</span>
</div>

Удельный поток массы относят к поверхности массопередачи или к рабочему объему аппарата:

<div class="equation-block">
  <span class="equation-main">q = M/F = dm/(F dτ)</span>
  <span class="equation-number">(10.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q<sub>V</sub> = M/V = dm/(V dτ)</span>
  <span class="equation-number">(10.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q<sub>V</sub> = dC/dτ = qf</span>
  <span class="equation-number">(10.4)</span>
</div>

где C - концентрация целевого компонента; f = F/V - удельная поверхность массопередачи.

### 10.2. Молекулярная диффузия

Молекулярная диффузия - перенос вещества вследствие хаотического теплового движения молекул в направлении меньшей концентрации.

![К определению градиента концентраций](/images/courses/bioprocess-engineering/chapter-10/fig-10-1.webp)
*Рис. 10.1. К определению градиента концентраций*

Первый закон Фика для установившейся молекулярной диффузии:

<div class="equation-block">
  <span class="equation-main">q = -D dC/dn</span>
  <span class="equation-number">(10.5)</span>
</div>

Коэффициент молекулярной диффузии зависит от свойств веществ, температуры, давления и концентрации.

<div class="equation-block">
  <span class="equation-main">D = wl</span>
  <span class="equation-number">(10.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = [4.35 · 10<sup>-4</sup>T<sup>3/2</sup> / p(V<sub>A</sub><sup>1/3</sup> + V<sub>B</sub><sup>1/3</sup>)<sup>2</sup>] √(1/M<sub>A</sub> + 1/M<sub>B</sub>)</span>
  <span class="equation-number">(10.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = D<sub>0</sub>(p<sub>0</sub>/p)(T/T<sub>0</sub>)<sup>3/2</sup></span>
  <span class="equation-number">(10.8)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = D<sub>0</sub>(T/T<sub>0</sub>)</span>
  <span class="equation-number">(10.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = D<sub>0</sub>(T/T<sub>0</sub>)<sup>2</sup></span>
  <span class="equation-number">(10.10)</span>
</div>

### 10.3. Конвективная диффузия

В движущейся среде вещество переносится не только молекулами, но и вместе с потоком.

<div class="equation-block">
  <span class="equation-main">q = Cw</span>
  <span class="equation-number">(10.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = q<sub>D</sub> + q<sub>c</sub></span>
  <span class="equation-number">(10.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = -D<sub>cp</sub> dC/dn</span>
  <span class="equation-number">(10.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D<sub>t</sub> = w′l</span>
  <span class="equation-number">(10.14)</span>
</div>

### 10.4. Массопередача

Массоотдачу около границы фаз часто описывают через пограничную пленку и коэффициент массоотдачи β.

<div class="equation-block">
  <span class="equation-main">q = -D dC/dn</span>
  <span class="equation-number">(10.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = βΔC</span>
  <span class="equation-number">(10.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = β(C - C<sub>p</sub>)F</span>
  <span class="equation-number">(10.17)</span>
</div>

![Пограничные пленки у границы раздела фаз](/images/courses/bioprocess-engineering/chapter-10/fig-10-2.webp)
*Рис. 10.2. Схема пограничных пленок у границы раздела фаз*

<div class="equation-block">
  <span class="equation-main">β = D/δ</span>
  <span class="equation-number">(10.18)</span>
</div>

![Структура турбулентного потока](/images/courses/bioprocess-engineering/chapter-10/fig-10-3.webp)
*Рис. 10.3. Структура турбулентного потока: 1 - основной поток; 2 - пограничный подслой; 3 - вязкий подслой; 4 - диффузионный подслой; 5 - твердая фаза*

Пленочная теория, теория обновления поверхности и теория проникновения объясняют, почему турбулентность, время контакта и состояние межфазного слоя определяют коэффициент массоотдачи.

<div class="equation-block">
  <span class="equation-main">β = 2√(D/(πτ))</span>
  <span class="equation-number">(10.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">β = 2√(D<sub>e</sub>/(πτ))</span>
  <span class="equation-number">(10.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">β = √(DS)</span>
  <span class="equation-number">(10.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = KΔC</span>
  <span class="equation-number">(10.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = β<sub>g</sub>(C<sub>g</sub> - C<sub>p</sub>)</span>
  <span class="equation-number">(10.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = β<sub>l</sub>(C<sub>p</sub> - C<sub>l</sub>)</span>
  <span class="equation-number">(10.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = β<sub>l</sub>(C<sub>p</sub> - C*)/m</span>
  <span class="equation-number">(10.25)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = K<sub>g</sub>ΔC<sub>g</sub> = (C<sub>g</sub> - C*)/(1/β<sub>g</sub> + m/β<sub>l</sub>)</span>
  <span class="equation-number">(10.26)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = K<sub>l</sub>ΔC<sub>l</sub> = (C* - C<sub>l</sub>)/(1/β<sub>l</sub> + 1/(mβ<sub>g</sub>))</span>
  <span class="equation-number">(10.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = ∫ qF = ∫ KΔC F</span>
  <span class="equation-number">(10.28)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = ∫ q<sub>V</sub>V = ∫ K<sub>V</sub>ΔC V</span>
  <span class="equation-number">(10.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = (Kf)SHΔC</span>
  <span class="equation-number">(10.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ΔC<sub>m</sub> = (ΔC<sub>p</sub> - ΔC<sub>k</sub>)/ln(ΔC<sub>p</sub>/ΔC<sub>k</sub>)</span>
  <span class="equation-number">(10.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = G(C<sub>p</sub> - C<sub>k</sub>)</span>
  <span class="equation-number">(10.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">H = G(C<sub>p</sub> - C<sub>k</sub>)/(KfSΔC<sub>m</sub>) = hn</span>
  <span class="equation-number">(10.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">n = ∫ dC/(C - C*)</span>
  <span class="equation-number">(10.34)</span>
</div>

### 10.5. Подобие диффузионных процессов

Критерии подобия позволяют переносить данные опытов и моделей на промышленные аппараты.

<div class="equation-block">
  <span class="equation-main">Nu′ = βl/D</span>
  <span class="equation-number">(10.35)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Pr′ = ν/D</span>
  <span class="equation-number">(10.36)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu′ = ARe<sup>m</sup>Pr′<sup>n</sup></span>
  <span class="equation-number">(10.37)</span>
</div>

<div class="equation-block">
  <span class="equation-main">β = D<sub>d</sub>/δ<sub>d</sub></span>
  <span class="equation-number">(10.38)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Bi = βl/D<sub>d</sub></span>
  <span class="equation-number">(10.39)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Fo = Dτ/l<sup>2</sup></span>
  <span class="equation-number">(10.40)</span>
</div>

<div class="equation-block">
  <span class="equation-main">τ = l<sup>2</sup>/D<sub>d</sub></span>
  <span class="equation-number">(10.41)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Pe′ = wl/D</span>
  <span class="equation-number">(10.42)</span>
</div>

Связь Pe′ = RePr′ показывает, что конвективный перенос определяется гидродинамикой потока и диффузионными свойствами системы.

### 10.6. Понятие о термодиффузии

Термодиффузия возникает, когда на перенос вещества, кроме градиента концентрации, влияют градиенты температуры и давления.

<div class="equation-block">
  <span class="equation-main">q = -D(∂C/∂n + K<sub>t</sub>/T · ∂T/∂n + K<sub>b</sub>/p · ∂p/∂n)</span>
  <span class="equation-number">(10.43)</span>
</div>

## После изучения раздела студент должен уметь

- объяснять роль понятия «диффузия» в пределах раздела;
- связывать «массоотдача» с аппаратурным оформлением биотехнологического производства;
- различать основные параметры, влияющие на «массопередача»;
- обосновывать выбор или оценку процесса через «движущая сила».

## Тест для самопроверки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="ru"
  data-course="bioprocess-engineering"
  data-chapter="chapter-10-mass-transfer-basics"
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
  <input type="radio" name="course-test-10-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>массоотдача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>массопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>диффузия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>движущая сила</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Какой подраздел непосредственно входит в структуру раздела раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>10.2. Молекулярная диффузия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>10.3. Конвективная диффузия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>10.4. Массопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>10.1. Общие сведения</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На какое понятие прежде всего опирается инженерный анализ этого раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>массоотдача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>диффузия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>массопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>движущая сила</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Что теснее всего связывает теорию процесса с аппаратурным оформлением?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>диффузия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>движущая сила</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>массоотдача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>массопередача</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>диффузия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>массоотдача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>массопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>движущая сила</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. С какой темы начинается раздел в структуре раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>10.2. Молекулярная диффузия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>10.3. Конвективная диффузия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>10.4. Массопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>10.1. Общие сведения</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Какой подраздел непосредственно входит в структуру раздела раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>10.2. Молекулярная диффузия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>10.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>10.3. Конвективная диффузия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>10.4. Массопередача</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Какая тема завершает структуру раздела раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>10.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>10.6. Понятие о термодиффузии</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>10.2. Молекулярная диффузия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>10.3. Конвективная диффузия</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Какую пару понятий целесообразно сопоставлять при самопроверке?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>массопередача / движущая сила</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>диффузия / массопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>диффузия / массоотдача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>массоотдача / движущая сила</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Что лучше всего подходит для практического обоснования выбора процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>диффузия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>массоотдача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>массопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>движущая сила</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>массоотдача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>диффузия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>массопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>движущая сила</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Какой объект представлен в этом разделе как наглядный рисунок?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>диффузия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Градиент концентрации</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>массоотдача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>массопередача</span>
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
