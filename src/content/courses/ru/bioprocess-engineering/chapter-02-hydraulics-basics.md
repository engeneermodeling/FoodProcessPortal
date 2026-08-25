---
title: "Раздел 2. Основы гидравлики"
course: "bioprocess-engineering"
course_title: "Инжиниринг биопроцессов: процессы и аппараты биотехнологических производств"
chapter: 2
description: "Гидростатика, гидродинамика, уравнение Бернулли, режимы движения жидкости, насосы и газодувные машины."
updated: "2026-08-23"
---

## Источник и границы раздела

Основа материала: учебник «Инжиниринг биопроцессов. Модуль 1. Процессы и аппараты биотехнологических производств» под редакцией В.Л. Завьялова, НУХТ, 2024.

Материал страницы сохранен по логике соответствующего раздела учебника; тестовые вопросы добавлены как учебный инструмент для проверки усвоения.

## Структура материала по учебнику

- 2.1. Гидростатика
- 2.2. Гидродинамика
- 2.3. Насосы и газодувные машины

## Конспект лекции

### 2.1. Гидростатика

Гидравлика рассматривает законы равновесия и движения жидкостей и газов. Для аппаратов биотехнологических производств эти законы нужны при расчете трубопроводов, резервуаров, ферментеров, теплообменников, насосов, компрессоров и систем подачи сред. Жидкость рассматривают как сплошную среду, а давление в любой точке передается во всех направлениях.

Для элементарного параллелепипеда жидкости условие равновесия по оси x:

<div class="equation-block">
  <span class="equation-main">dP<sub>1</sub> - dP<sub>2</sub> + dG<sub>x</sub> = 0</span>
  <span class="equation-number">(2.1)</span>
</div>

После выражения сил давления через площади граней:

<div class="equation-block">
  <span class="equation-main">p<sub>1</sub>dy dz - p<sub>2</sub>dy dz + ρ X dx dy dz = 0</span>
  <span class="equation-number">(2.2)</span>
</div>

В предельной форме получают дифференциальные уравнения равновесия Эйлера:

<div class="equation-block">
  <span class="equation-main">ρ X - ∂p/∂x = 0;<br />ρ Y - ∂p/∂y = 0;<br />ρ Z - ∂p/∂z = 0</span>
  <span class="equation-number">(2.3)</span>
</div>

![Рис. 2.1. К выводу дифференциальных уравнений равновесия Эйлера](/images/courses/bioprocess-engineering/chapter-02/fig-2-1.webp)

Полный дифференциал давления:

<div class="equation-block">
  <span class="equation-main">dp = ρ(Xdx + Ydy + Zdz)</span>
  <span class="equation-number">(2.4)</span>
</div>

Для поверхности одинакового давления p = const и dp = 0:

<div class="equation-block">
  <span class="equation-main">Xdx + Ydy + Zdz = 0</span>
  <span class="equation-number">(2.5)</span>
</div>

Если действует только сила тяжести, основное уравнение гидростатики имеет вид:

<div class="equation-block">
  <span class="equation-main">z + p/(ρ g) = const</span>
  <span class="equation-number">(2.6)</span>
</div>

Гидростатический напор:

<div class="equation-block">
  <span class="equation-main">H<sub>s</sub> = z + p/(ρ g)</span>
  <span class="equation-number">(2.7)</span>
</div>

Для двух точек одной покоящейся жидкости:

<div class="equation-block">
  <span class="equation-main">z<sub>1</sub> + p<sub>1</sub>/(ρ g) = z<sub>2</sub> + p<sub>2</sub>/(ρ g)</span>
  <span class="equation-number">(2.8)</span>
</div>

![Рис. 2.2. Основное уравнение гидростатики](/images/courses/bioprocess-engineering/chapter-02/fig-2-2.webp)

Отсюда следует закон Паскаля: внешнее давление, приложенное к жидкости, передается ею одинаково во всех направлениях. Абсолютное давление на глубине h:

<div class="equation-block">
  <span class="equation-main">p = p<sub>0</sub> + ρ g h</span>
  <span class="equation-number">(2.9)</span>
</div>

![Рис. 2.3. Схема к закону Паскаля](/images/courses/bioprocess-engineering/chapter-02/fig-2-3.webp)

Для измерения давления применяют жидкостные манометры, вакуумметры и пружинные манометры. В биотехнологическом оборудовании контроль давления особенно важен в стерилизаторах, ферментерах, фильтрах и линиях стерильного воздуха.

![Рис. 2.4. Жидкостный манометр](/images/courses/bioprocess-engineering/chapter-02/fig-2-4.webp)

### 2.2. Гидродинамика

Гидродинамика изучает движение жидкостей. Движение бывает установившимся, когда скорость и давление в фиксированной точке не меняются во времени, и неустановившимся, когда они зависят от времени. Расход Q связан со средней скоростью w и площадью сечения F соотношением Q = wF.

Уравнение неразрывности для несжимаемой жидкости:

<div class="equation-block">
  <span class="equation-main">Q = w<sub>1</sub>F<sub>1</sub> = w<sub>2</sub>F<sub>2</sub> = wF = const</span>
  <span class="equation-number">(2.10)</span>
</div>

Для сжимаемой среды сохраняется массовый расход:

<div class="equation-block">
  <span class="equation-main">M = ρ<sub>1</sub>w<sub>1</sub>F<sub>1</sub> = ρ<sub>2</sub>w<sub>2</sub>F<sub>2</sub> = const</span>
  <span class="equation-number">(2.11)</span>
</div>

Гидравлический радиус:

<div class="equation-block">
  <span class="equation-main">R = F/Π</span>
  <span class="equation-number">(2.12)</span>
</div>

Эквивалентный диаметр для каналов некруглого сечения:

<div class="equation-block">
  <span class="equation-main">d<sub>eq</sub> = 4R = 4F/Π</span>
  <span class="equation-number">(2.13)</span>
</div>

Уравнения Эйлера для идеальной жидкости, отнесенные к единице массы:

<div class="equation-block">
  <span class="equation-main">X - (1/ρ)∂p/∂x = 0;<br />Y - (1/ρ)∂p/∂y = 0;<br />Z - (1/ρ)∂p/∂z = 0</span>
  <span class="equation-number">(2.14)</span>
</div>

С учетом ускорения:

<div class="equation-block">
  <span class="equation-main">X - (1/ρ)∂p/∂x = dw<sub>x</sub>/d τ;<br />Y - (1/ρ)∂p/∂y = dw<sub>y</sub>/d τ;<br />Z - (1/ρ)∂p/∂z = dw<sub>z</sub>/d τ</span>
  <span class="equation-number">(2.15)</span>
</div>

Полное ускорение включает локальную и конвективную составляющие:

<div class="equation-block">
  <span class="equation-main">dw<sub>x</sub>/d τ = ∂w<sub>x</sub>/∂τ + w<sub>x</sub>∂w<sub>x</sub>/∂x + w<sub>y</sub>∂w<sub>x</sub>/∂y + w<sub>z</sub>∂w<sub>x</sub>/∂z;<br />dw<sub>y</sub>/d τ = ∂w<sub>y</sub>/∂τ + w<sub>x</sub>∂w<sub>y</sub>/∂x + w<sub>y</sub>∂w<sub>y</sub>/∂y + w<sub>z</sub>∂w<sub>y</sub>/∂z;<br />dw<sub>z</sub>/d τ = ∂w<sub>z</sub>/∂τ + w<sub>x</sub>∂w<sub>z</sub>/∂x + w<sub>y</sub>∂w<sub>z</sub>/∂y + w<sub>z</sub>∂w<sub>z</sub>/∂z</span>
  <span class="equation-number">(2.16)</span>
</div>

Уравнение Бернулли для элементарной струйки идеальной жидкости:

<div class="equation-block">
  <span class="equation-main">z<sub>1</sub> + p<sub>1</sub>/(ρ g) + w<sub>1</sub><sup>2</sup>/(2g) = z<sub>2</sub> + p<sub>2</sub>/(ρ g) + w<sub>2</sub><sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.17)</span>
</div>

Для реальной жидкости добавляют потери напора:

<div class="equation-block">
  <span class="equation-main">z<sub>1</sub> + p<sub>1</sub>/(ρ g) + w<sub>1</sub><sup>2</sup>/(2g) = z<sub>2</sub> + p<sub>2</sub>/(ρ g) + w<sub>2</sub><sup>2</sup>/(2g) + h<sub>loss</sub></span>
  <span class="equation-number">(2.18)</span>
</div>

![Рис. 2.5. К выводу уравнения Бернулли](/images/courses/bioprocess-engineering/chapter-02/fig-2-5.webp)

Скорость истечения через отверстие:

<div class="equation-block">
  <span class="equation-main">w = √(2gH)</span>
  <span class="equation-number">(2.19)</span>
</div>

Если учитывается разность давлений над свободными поверхностями:

<div class="equation-block">
  <span class="equation-main">w = √(2g(H + (p<sub>1</sub> - p<sub>2</sub>)/(ρ g)))</span>
  <span class="equation-number">(2.19a)</span>
</div>

Действительный расход через отверстие:

<div class="equation-block">
  <span class="equation-main">Q = F<sub>j</sub>w = ε φ F<sub>0</sub>√(2gH) = α F<sub>0</sub>√(2gH)</span>
  <span class="equation-number">(2.20)</span>
</div>

Режим движения определяют числом Рейнольдса Re = wd/ν. При малых Re течение ламинарное, при больших Re - турбулентное.

![Рис. 2.7. Схема установки Рейнольдса](/images/courses/bioprocess-engineering/chapter-02/fig-2-7.webp)

Для ламинарного течения в круглой трубе профиль скорости параболический:

<div class="equation-block">
  <span class="equation-main">w<sub>r</sub> = Δ p(R<sup>2</sup> - r<sup>2</sup>)/(4μ l)</span>
  <span class="equation-number">(2.21)</span>
</div>

Максимальная скорость на оси трубы:

<div class="equation-block">
  <span class="equation-main">w<sub>max</sub> = Δ p R<sup>2</sup>/(4μ l)</span>
  <span class="equation-number">(2.21a)</span>
</div>

Объемный расход по Пуазейлю:

<div class="equation-block">
  <span class="equation-main">Q = pi Δ p d<sup>4</sup>/(128μ l)</span>
  <span class="equation-number">(2.22)</span>
</div>

Средняя скорость:

<div class="equation-block">
  <span class="equation-main">w = Q/(pi R<sup>2</sup>) = Δ p R<sup>2</sup>/(8μ l) = Δ p d<sup>2</sup>/(32μ l)</span>
  <span class="equation-number">(2.23)</span>
</div>

![Рис. 2.8. К выводу формул Стокса и Пуазейля](/images/courses/bioprocess-engineering/chapter-02/fig-2-8.webp)

Полные потери напора:

<div class="equation-block">
  <span class="equation-main">h<sub>loss</sub> = h<sub>fr</sub> + h<sub>loc</sub></span>
  <span class="equation-number">(2.24)</span>
</div>

Потери на трение:

<div class="equation-block">
  <span class="equation-main">h<sub>fr</sub> = λ(l/d) w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.25)</span>
</div>

Потери давления:

<div class="equation-block">
  <span class="equation-main">Δ p<sub>fr</sub> = λ(l/d) ρ w<sup>2</sup>/2</span>
  <span class="equation-number">(2.25a)</span>
</div>

Формула Блазиуса:

<div class="equation-block">
  <span class="equation-main">λ = 0.3164 Re<sup>-0.25</sup></span>
  <span class="equation-number">(2.26)</span>
</div>

Для шероховатых труб:

<div class="equation-block">
  <span class="equation-main">λ = 0.11(Δ̄ + 68/Re)<sup>0.25</sup></span>
  <span class="equation-number">(2.27)</span>
</div>

В автомодельной области:

<div class="equation-block">
  <span class="equation-main">λ = 0.11 Δ̄<sup>0.25</sup></span>
  <span class="equation-number">(2.28)</span>
</div>

Местные сопротивления вызваны входами, выходами, коленами, вентилями, сужениями и расширениями:

<div class="equation-block">
  <span class="equation-main">h<sub>loc</sub> = ξ w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δ p<sub>loc</sub> = ξ ρ w<sup>2</sup>/2</span>
  <span class="equation-number">(2.29a)</span>
</div>

Для нескольких местных сопротивлений:

<div class="equation-block">
  <span class="equation-main">h<sub>loc</sub> = (Σξ) w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.30)</span>
</div>

Общие потери в трубопроводе:

<div class="equation-block">
  <span class="equation-main">h<sub>loss</sub> = (λ l/d + Σξ) w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δ p<sub>loss</sub> = (λ l/d + Σξ) ρ w<sup>2</sup>/2</span>
  <span class="equation-number">(2.31a)</span>
</div>

Через эквивалентную длину:

<div class="equation-block">
  <span class="equation-main">h<sub>loss</sub> = λ((l + l<sub>eq</sub>)/d) w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.32)</span>
</div>

### 2.3. Насосы и газодувные машины

Для перемещения жидкостей применяют насосы, а для газов - вентиляторы, газодувки и компрессоры. Основные параметры насоса: подача Q, напор H, мощность N, частота вращения, КПД и допустимая высота всасывания.

Полный КПД:

<div class="equation-block">
  <span class="equation-main">η = η<sub>vol</sub> η<sub>h</sub> η<sub>m</sub></span>
  <span class="equation-number">(2.33)</span>
</div>

Объемный КПД:

<div class="equation-block">
  <span class="equation-main">η<sub>vol</sub> = Q/(Q + q)</span>
  <span class="equation-number">(2.34)</span>
</div>

Гидравлический КПД:

<div class="equation-block">
  <span class="equation-main">η<sub>h</sub> = H/(H + h)</span>
  <span class="equation-number">(2.35)</span>
</div>

Мощность на валу насоса:

<div class="equation-block">
  <span class="equation-main">N = QH ρ g/(1000 η)</span>
  <span class="equation-number">(2.36)</span>
</div>

Для всасывающей линии:

<div class="equation-block">
  <span class="equation-main">(p<sub>atm</sub> - p<sub>s</sub>)/(ρ g) = z<sub>1</sub> + h<sub>1</sub> + w<sub>s</sub><sup>2</sup>/(2g) = p<sub>vac</sub>/(ρ g)</span>
  <span class="equation-number">(2.37)</span>
</div>

Для нагнетательной линии:

<div class="equation-block">
  <span class="equation-main">p<sub>d</sub>/(ρ g) = z<sub>2</sub> + h<sub>2</sub> + p<sub>2</sub>/(ρ g)</span>
  <span class="equation-number">(2.38)</span>
</div>

Требуемый напор насоса:

<div class="equation-block">
  <span class="equation-main">H<sub>req</sub> = z<sub>1</sub> + z<sub>2</sub> + (p<sub>2</sub> - p<sub>1</sub>)/(ρ g) + h<sub>1</sub> + h<sub>2</sub></span>
  <span class="equation-number">(2.39)</span>
</div>

Характеристика трубопровода показывает, как требуемый напор возрастает с увеличением расхода. Рабочая точка насосной установки определяется пересечением характеристики насоса и характеристики трубопровода.

## После изучения раздела студент должен уметь

- объяснять роль понятия «гидростатическое давление» в пределах раздела;
- связывать «уравнение Бернулли» с аппаратурным оформлением биотехнологического производства;
- различать основные параметры, влияющие на «число Рейнольдса»;
- обосновывать выбор или оценку процесса через «насос».

## Тест для самопроверки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="ru"
  data-course="bioprocess-engineering"
  data-chapter="chapter-02-hydraulics-basics"
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
  <input type="radio" name="course-test-2-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>уравнение Бернулли</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>число Рейнольдса</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>гидростатическое давление</span>
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
<legend>2. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>2.2. Гидродинамика</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>2.3. Насосы и газодувные машины</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>гидростатическое давление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>2.1. Гидростатика</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На какое понятие прежде всего опирается инженерный анализ этого раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>уравнение Бернулли</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>гидростатическое давление</span>
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
<legend>4. Что теснее всего связывает теорию процесса с аппаратурным оформлением?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>гидростатическое давление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>насос</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>уравнение Бернулли</span>
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
<legend>5. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>гидростатическое давление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>уравнение Бернулли</span>
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
<legend>6. С какой темы начинается раздел в структуре учебника?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>2.2. Гидродинамика</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>2.3. Насосы и газодувные машины</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>гидростатическое давление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>2.1. Гидростатика</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>2.2. Гидродинамика</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>2.1. Гидростатика</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>2.3. Насосы и газодувные машины</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гидростатическое давление</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Какая тема завершает структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>2.1. Гидростатика</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>2.3. Насосы и газодувные машины</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>2.2. Гидродинамика</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гидростатическое давление</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Какую пару понятий целесообразно сопоставлять при самопроверке?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>число Рейнольдса / насос</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>гидростатическое давление / число Рейнольдса</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>гидростатическое давление / уравнение Бернулли</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>уравнение Бернулли / насос</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Что лучше всего подходит для практического обоснования выбора процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>гидростатическое давление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>уравнение Бернулли</span>
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
<legend>11. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>уравнение Бернулли</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>гидростатическое давление</span>
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
<legend>12. Какой объект представлен в этом разделе как наглядный рисунок?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>гидростатическое давление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Элемент жидкости для вывода уравнений равновесия Эйлера</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>уравнение Бернулли</span>
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

## Дальнейшая проработка

На следующем проходе стоит сверить формулы и подписи рисунков с печатным макетом учебника, а также добавить расчетный пример для насосной установки.
