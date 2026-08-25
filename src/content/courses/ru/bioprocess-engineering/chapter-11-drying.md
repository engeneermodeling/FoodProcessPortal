---
title: "Раздел 11. Сушка"
course: "bioprocess-engineering"
course_title: "Инжиниринг биопроцессов: процессы и аппараты биотехнологических производств"
chapter: 11
description: "Влажный воздух, I-x диаграмма, статика и кинетика сушки, конструкции сушилок и интенсификация."
updated: "2026-08-23"
---

## Источник и границы раздела

Основа материала: учебник «Инжиниринг биопроцессов. Модуль 1. Процессы и аппараты биотехнологических производств» под редакцией В.Л. Завьялова, НУХТ, 2024.

Материал страницы сохранен по логике соответствующего раздела учебника; тестовые вопросы добавлены как учебный инструмент для проверки усвоения.

## Структура материала по учебнику

- 11.1. Общие сведения
- 11.2. Физические свойства влажного воздуха
- 11.3. Диаграмма состояния влажного воздуха
- 11.4. Влажный материал как объект сушки
- 11.5. Статика сушки
- 11.6. Кинетика сушки
- 11.7. Конструкции сушилок

## Конспект лекции

Материал собран в чистую лекционную структуру с формулами, рисунками и подписями из раздела 11 учебника.

### 11.1. Общие сведения

Сушка - совмещенный тепловой и диффузионный процесс удаления влаги из материала за счет испарения и отвода пара сушильным агентом. В биотехнологических и пищевых производствах она стабилизирует продукты, снижает массу и повышает стойкость при хранении.

### 11.2. Физические свойства влажного воздуха

Влажный воздух рассматривают как смесь сухого воздуха и водяного пара. Для расчетов используют парциальные давления, относительную влажность, влагосодержание, плотность, теплоемкость, энтальпию, точку росы и потенциал сушки.

<div class="equation-block">
  <span class="equation-main">R = m<sub>a</sub>R<sub>a</sub> + m<sub>v</sub>R<sub>v</sub></span>
  <span class="equation-number">(11.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">p = p<sub>a</sub> + p<sub>v</sub></span>
  <span class="equation-number">(11.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">φ = ρ<sub>v</sub>/ρ<sub>s</sub></span>
  <span class="equation-number">(11.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ρ<sub>v</sub> = p<sub>v</sub>/(R<sub>v</sub>T); ρ<sub>s</sub> = p<sub>s</sub>/(R<sub>v</sub>T)</span>
  <span class="equation-number">(11.4)</span>
</div>

<div class="equation-block">
  <span class="equation-main">φ = p<sub>v</sub>/p<sub>s</sub></span>
  <span class="equation-number">(11.5)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x = ρ<sub>v</sub>/ρ<sub>a</sub></span>
  <span class="equation-number">(11.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x = 0.622 p<sub>v</sub>/p<sub>a</sub></span>
  <span class="equation-number">(11.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x = 0.622 φp<sub>s</sub>/(p - φp<sub>s</sub>)</span>
  <span class="equation-number">(11.8)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ρ = ρ<sub>a</sub>(1 + x)</span>
  <span class="equation-number">(11.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">c = c<sub>a</sub> + xc<sub>v</sub></span>
  <span class="equation-number">(11.10)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = c<sub>a</sub>t + xi</span>
  <span class="equation-number">(11.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = 1.004t + (1.842t + 2500)x</span>
  <span class="equation-number">(11.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">p<sub>v</sub> = xp/(0.622 + x)</span>
  <span class="equation-number">(11.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">E = t - t<sub>w</sub></span>
  <span class="equation-number">(11.14)</span>
</div>

### 11.3. Диаграмма состояния влажного воздуха

I-x диаграмма связывает энтальпию, влагосодержание, температуру, относительную влажность и давление пара, позволяя строить нагрев, теоретическую и реальную сушку, промежуточный подогрев и рециркуляцию.

![Диаграмма I-x влажного воздуха](/images/courses/bioprocess-engineering/chapter-11/fig-11-1.webp)
*Рис. 11.1. Диаграмма I-x влажного воздуха*

![Схема воздушной сушилки](/images/courses/bioprocess-engineering/chapter-11/fig-11-2.webp)
*Рис. 11.2. Схема воздушной сушилки*

![Диаграмма процесса сушки в теоретической и реальной сушилке](/images/courses/bioprocess-engineering/chapter-11/fig-11-3.webp)
*Рис. 11.3. Диаграмма процесса сушки в теоретической и реальной сушилке*

![Схема сушилки с промежуточным подогревом воздуха](/images/courses/bioprocess-engineering/chapter-11/fig-11-5.webp)
*Рис. 11.5. Схема сушилки с промежуточным подогревом воздуха*

![Схема сушилки с частичным возвратом отработанного воздуха](/images/courses/bioprocess-engineering/chapter-11/fig-11-7.webp)
*Рис. 11.7. Схема сушилки с частичным возвратом отработанного воздуха*

![Диаграмма процесса сушки с частичной рециркуляцией воздуха](/images/courses/bioprocess-engineering/chapter-11/fig-11-8.webp)
*Рис. 11.8. Диаграмма процесса сушки с частичной рециркуляцией воздуха*

### 11.4. Влажный материал как объект сушки

Влажность материала задают по отношению к общей массе или к абсолютно сухому веществу. Свободная, связанная, равновесная и критическая влага определяют путь сушки.

<div class="equation-block">
  <span class="equation-main">w = m<sub>w</sub> · 100/m</span>
  <span class="equation-number">(11.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">w<sub>c</sub> = m<sub>w</sub> · 100/m<sub>d</sub></span>
  <span class="equation-number">(11.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = W<sub>1</sub> - W<sub>2</sub></span>
  <span class="equation-number">(11.17)</span>
</div>

### 11.5. Статика сушки

Статика сушки основана на материальном и тепловом балансах. Она определяет расход воздуха, количество удаленной влаги, расход теплоты и линию процесса на I-x диаграмме.

<div class="equation-block">
  <span class="equation-main">m<sub>1</sub>(100 - w<sub>1</sub>) = m<sub>2</sub>(100 - w<sub>2</sub>)</span>
  <span class="equation-number">(11.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>1</sub> = m<sub>2</sub>(100 - w<sub>2</sub>)/(100 - w<sub>1</sub>)</span>
  <span class="equation-number">(11.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>2</sub> = m<sub>1</sub>(100 - w<sub>1</sub>)/(100 - w<sub>2</sub>)</span>
  <span class="equation-number">(11.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = m<sub>1</sub> - m<sub>2</sub></span>
  <span class="equation-number">(11.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = m<sub>1</sub>(w<sub>1</sub> - w<sub>2</sub>)/(100 - w<sub>2</sub>)</span>
  <span class="equation-number">(11.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = m<sub>2</sub>(w<sub>1</sub> - w<sub>2</sub>)/(100 - w<sub>1</sub>)</span>
  <span class="equation-number">(11.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L = W/(x<sub>2</sub> - x<sub>0</sub>)</span>
  <span class="equation-number">(11.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">l = L/W = 1/(x<sub>2</sub> - x<sub>0</sub>)</span>
  <span class="equation-number">(11.25)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q = L(I<sub>1</sub> - I<sub>0</sub>)</span>
  <span class="equation-number">(11.26)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = Q/W = l(I<sub>1</sub> - I<sub>0</sub>)</span>
  <span class="equation-number">(11.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δ = q<sub>d</sub> + q<sub>m</sub> - q<sub>loss</sub></span>
  <span class="equation-number">(11.28)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I<sub>2</sub> = I<sub>1</sub> + Δ/l</span>
  <span class="equation-number">(11.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">l = (I<sub>1</sub> - I<sub>0</sub>)/(I<sub>2</sub> - I<sub>0</sub>)</span>
  <span class="equation-number">(11.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I<sub>mix</sub> = (L<sub>0</sub>I<sub>0</sub> + L<sub>r</sub>I<sub>2</sub>)/(L<sub>0</sub> + L<sub>r</sub>)</span>
  <span class="equation-number">(11.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x<sub>mix</sub> = (L<sub>0</sub>x<sub>0</sub> + L<sub>r</sub>x<sub>2</sub>)/(L<sub>0</sub> + L<sub>r</sub>)</span>
  <span class="equation-number">(11.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">η = Q<sub>evap</sub>/Q<sub>total</sub></span>
  <span class="equation-number">(11.33)</span>
</div>

### 11.6. Кинетика сушки

Кинетика описывает изменение влажности материала во времени. В периоде постоянной скорости процесс ограничивается внешним переносом, а в периоде падающей скорости - внутренней диффузией.

<div class="equation-block">
  <span class="equation-main">N = W/(Fτ)</span>
  <span class="equation-number">(11.34)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N = -(G<sub>d</sub>/F) dw<sub>c</sub>/dτ</span>
  <span class="equation-number">(11.35)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N = k<sub>y</sub>(y<sub>s</sub> - y)</span>
  <span class="equation-number">(11.36)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N = α(t - t<sub>s</sub>)/r</span>
  <span class="equation-number">(11.37)</span>
</div>

<div class="equation-block">
  <span class="equation-main">τ = (G<sub>d</sub>/F) ∫ dw<sub>c</sub>/N</span>
  <span class="equation-number">(11.38)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N = K(w<sub>c</sub> - w<sub>eq</sub>)</span>
  <span class="equation-number">(11.39)</span>
</div>

<div class="equation-block">
  <span class="equation-main">τ = (G<sub>d</sub>/(FK)) ln[(w<sub>c0</sub> - w<sub>eq</sub>)/(w<sub>c</sub> - w<sub>eq</sub>)]</span>
  <span class="equation-number">(11.40)</span>
</div>

<div class="equation-block">
  <span class="equation-main">u = W/(Vτ)</span>
  <span class="equation-number">(11.41)</span>
</div>

<div class="equation-block">
  <span class="equation-main">w<sub>avg</sub> = W/(ρ<sub>a</sub>F)</span>
  <span class="equation-number">(11.42)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dw<sub>c</sub>/dτ = -k(w<sub>c</sub> - w<sub>eq</sub>)</span>
  <span class="equation-number">(11.43)</span>
</div>

![Кривая сушки влажного материала](/images/courses/bioprocess-engineering/chapter-11/fig-11-9.webp)
*Рис. 11.9. Кривая сушки влажного материала*

![Кривые скорости сушки разных материалов](/images/courses/bioprocess-engineering/chapter-11/fig-11-10.webp)
*Рис. 11.10. Кривые скорости сушки разных материалов*

### 11.7. Конструкции сушилок

Тип сушилки выбирают по агрегатному состоянию, термочувствительности, дисперсности, времени пребывания и требованиям к качеству продукта.

<div class="equation-block">
  <span class="equation-main">τ = (1/k) ln[(w<sub>c0</sub> - w<sub>eq</sub>)/(w<sub>c</sub> - w<sub>eq</sub>)]</span>
  <span class="equation-number">(11.44)</span>
</div>

![Схема камерной сушилки](/images/courses/bioprocess-engineering/chapter-11/fig-11-13.webp)
*Рис. 11.13. Схема камерной сушилки*

![Схема барабанной сушилки](/images/courses/bioprocess-engineering/chapter-11/fig-11-14.webp)
*Рис. 11.14. Схема барабанной сушилки*

![Типы насадок в барабанной сушилке](/images/courses/bioprocess-engineering/chapter-11/fig-11-15.webp)
*Рис. 11.15. Типы насадок в барабанной сушилке*

![Схема туннельной сушилки](/images/courses/bioprocess-engineering/chapter-11/fig-11-16.webp)
*Рис. 11.16. Схема туннельной сушилки*

![Схема ленточной сушилки](/images/courses/bioprocess-engineering/chapter-11/fig-11-17.webp)
*Рис. 11.17. Схема ленточной сушилки*

![Схема шахтной сушилки](/images/courses/bioprocess-engineering/chapter-11/fig-11-18.webp)
*Рис. 11.18. Схема шахтной сушилки*

![Схема распылительной сушилки](/images/courses/bioprocess-engineering/chapter-11/fig-11-19.webp)
*Рис. 11.19. Схема распылительной сушилки*

![Схема сушилки с кипящим слоем](/images/courses/bioprocess-engineering/chapter-11/fig-11-20.webp)
*Рис. 11.20. Схема сушилки с кипящим слоем*

![Схема аэрофонтанной сушилки](/images/courses/bioprocess-engineering/chapter-11/fig-11-21.webp)
*Рис. 11.21. Схема аэрофонтанной сушилки*

![Схема двухвальцовой сушилки](/images/courses/bioprocess-engineering/chapter-11/fig-11-22.webp)
*Рис. 11.22. Схема двухвальцовой сушилки*

![Схема сублимационной сушилки](/images/courses/bioprocess-engineering/chapter-11/fig-11-23.webp)
*Рис. 11.23. Схема сублимационной сушилки*

![Схема радиационной сушилки](/images/courses/bioprocess-engineering/chapter-11/fig-11-24.webp)
*Рис. 11.24. Схема радиационной сушилки*

![Схема высокочастотной сушилки](/images/courses/bioprocess-engineering/chapter-11/fig-11-25.webp)
*Рис. 11.25. Схема высокочастотной сушилки*

## После изучения раздела студент должен уметь

- объяснять роль понятия «влажный воздух» в пределах раздела;
- связывать «материальный баланс» с аппаратурным оформлением биотехнологического производства;
- различать основные параметры, влияющие на «тепловой баланс»;
- обосновывать выбор или оценку процесса через «кинетика сушки».

## Тест для самопроверки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="ru"
  data-course="bioprocess-engineering"
  data-chapter="chapter-11-drying"
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
  <input type="radio" name="course-test-11-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>материальный баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>тепловой баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>кинетика сушки</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-0" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>влажный воздух</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-1" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>11.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>11.2. Физические свойства влажного воздуха</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>11.3. Диаграмма состояния влажного воздуха</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>11.4. Влажный материал как объект сушки</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На какое понятие прежде всего опирается инженерный анализ этого раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>влажный воздух</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-2" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>материальный баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>тепловой баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>кинетика сушки</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Что теснее всего связывает теорию процесса с аппаратурным оформлением?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>влажный воздух</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>материальный баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-3" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>кинетика сушки</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-3" value="3" data-correct="0" />
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
  <input type="radio" name="course-test-11-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>влажный воздух</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>материальный баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>кинетика сушки</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-4" value="3" data-correct="1" />
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
  <input type="radio" name="course-test-11-5" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>11.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>11.2. Физические свойства влажного воздуха</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>11.3. Диаграмма состояния влажного воздуха</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>11.4. Влажный материал как объект сушки</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>11.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-6" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>11.2. Физические свойства влажного воздуха</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>11.3. Диаграмма состояния влажного воздуха</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>11.4. Влажный материал как объект сушки</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Какая тема завершает структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>11.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>11.2. Физические свойства влажного воздуха</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-7" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>11.7. Конструкции сушилок</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>11.3. Диаграмма состояния влажного воздуха</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Какую пару понятий целесообразно сопоставлять при самопроверке?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>тепловой баланс / кинетика сушки</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>влажный воздух / тепловой баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>материальный баланс / кинетика сушки</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-8" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>влажный воздух / материальный баланс</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Что лучше всего подходит для практического обоснования выбора процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-9" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>кинетика сушки</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>влажный воздух</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>материальный баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>тепловой баланс</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>влажный воздух</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-10" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>материальный баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>тепловой баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>кинетика сушки</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Какой объект представлен в этом разделе как наглядный рисунок?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>влажный воздух</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>материальный баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-11" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>I-x диаграмма влажного воздуха</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>тепловой баланс</span>
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

## Дальнейшая проработка

На следующем проходе этот раздел можно детализировать формулами, примерами расчетов, рисунками аппаратов и ссылками на современные биотехнологические производства.
