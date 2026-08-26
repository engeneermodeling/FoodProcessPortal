---
title: "Раздел 5. Перемешивание"
course: "bioprocess-engineering"
course_title: "Инжиниринг биопроцессов: процессы и аппараты биотехнологических производств"
chapter: 5
description: "Перемешивание в жидкой среде, расход энергии, эффективность и перемешивание сыпучих и пластичных материалов."
updated: "2026-08-23"
---

## Источник и границы раздела

Основа материала: учебник «Инжиниринг биопроцессов. Модуль 1. Процессы и аппараты биотехнологических производств» под редакцией В.Л. Завьялова, НУХТ, 2024.

## Структура материала по учебнику

- 5.1. Общие сведения
- 5.2. Перемешивание в жидкой среде
- 5.3. Расход энергии на механическое перемешивание
- 5.4. Оценка эффективности перемешивания
- 5.5. Перемешивание сыпучих и пластичных материалов

## Конспект лекции

### 5.1. Общие сведения

Перемешивание применяют для выравнивания концентрации, температуры и физических свойств среды, интенсификации тепло- и массообмена, поддержания твердых частиц во взвешенном состоянии, диспергирования газа или жидкости и ускорения биохимических реакций. В биотехнологических аппаратах оно должно обеспечивать обмен, но не повреждать клетки, ферменты и чувствительные белковые продукты.

Механическое перемешивание создается вращающимися мешалками, пневматическое - потоком газа, циркуляционное - насосным или струйным движением жидкости. Для сыпучих и пластичных материалов применяют лопастные, шнековые, барабанные и комбинированные смесители.

### 5.2. Перемешивание в жидкой среде

В жидких средах перемешивание определяется типом мешалки, частотой вращения, формой аппарата, наличием отражательных перегородок, вязкостью среды и газонасыщением. Отражательные перегородки разрушают круговое движение жидкости и помогают сформировать осевую и радиальную циркуляцию.

![Рис. 5.2. Пример механического перемешивания](/images/courses/bioprocess-engineering/chapter-05/fig-5-2.webp)

![Рис. 5.3. Схемы потоков в аппаратах с отражательными перегородками и мешалками](/images/courses/bioprocess-engineering/chapter-05/fig-5-3.webp)

### 5.3. Расход энергии на механическое перемешивание

При механическом перемешивании жидкость движется принудительно. Для оценки расхода энергии используют критериальные зависимости, подобные уравнениям гидродинамики:

<div class="equation-block">
  <span class="equation-main">Eu = f(Re, Fr, Γ<sub>1</sub>, Γ<sub>2</sub>, ...)</span>
  <span class="equation-number">(5.1)</span>
</div>

Для процессов перемешивания вводят модифицированные критерии, где характерная скорость пропорциональна окружной скорости мешалки:

<div class="equation-block">
  <span class="equation-main">Eu<sub>m</sub> = f(Re<sub>m</sub>, Fr<sub>m</sub>, Γ<sub>1</sub>, Γ<sub>2</sub>, ...)</span>
  <span class="equation-number">(5.2)</span>
</div>

В степенной форме:

<div class="equation-block">
  <span class="equation-main">Eu<sub>m</sub> = C′Re<sub>m</sub><sup>k′</sup>Fr<sub>m</sub><sup>m′</sup>Γ<sub>1</sub><sup>n′</sup>Γ<sub>2</sub><sup>p′</sup>...</span>
  <span class="equation-number">(5.3)</span>
</div>

Если влиянием силы тяжести можно пренебречь, например при наличии отражательных перегородок, уравнение упрощают:

<div class="equation-block">
  <span class="equation-main">Eu<sub>m</sub> = CRe<sub>m</sub><sup>k</sup>Γ<sub>1</sub><sup>n</sup>Γ<sub>2</sub><sup>p</sup></span>
  <span class="equation-number">(5.4)</span>
</div>

Экспериментальные кривые зависимости Eu<sub>m</sub> от Re<sub>m</sub> используют для выбора мощности мешалки.

![Рис. 5.5. Зависимость Eu<sub>m</sub> от Re<sub>m</sub> для разных типов мешалок](/images/courses/bioprocess-engineering/chapter-05/fig-5-5.webp)

![Рис. 5.6. Типы мешалок для экспериментальных кривых мощности](/images/courses/bioprocess-engineering/chapter-05/fig-5-6.webp)

На основе анализа размерностей мощность механического перемешивания записывают как функцию вязкости μ, плотности ρ, частоты вращения n и диаметра мешалки d:

<div class="equation-block">
  <span class="equation-main">N = Cμ<sup>x</sup>ρ<sup>y</sup>n<sup>z</sup>d<sup>v</sup></span>
  <span class="equation-number">(5.5)</span>
</div>

Уравнение размерностей:

<div class="equation-block">
  <span class="equation-main">kg · m<sup>2</sup> · s<sup>-3</sup> = kg<sup>x+y</sup> · s<sup>-x-z</sup> · m<sup>-x-3y+v</sup></span>
  <span class="equation-number">(5.6)</span>
</div>

После преобразований получают критериальную форму:

<div class="equation-block">
  <span class="equation-main">N/(ρn<sup>3</sup>d<sup>5</sup>) = C(ρnd<sup>2</sup>/μ)<sup>-x</sup></span>
  <span class="equation-number">(5.7)</span>
</div>

Или:

<div class="equation-block">
  <span class="equation-main">Eu<sub>m</sub> = CRe<sub>m</sub><sup>k</sup></span>
  <span class="equation-number">(5.8)</span>
</div>

Установленная мощность электродвигателя с учетом запаса и поправочных коэффициентов:

<div class="equation-block">
  <span class="equation-main">N<sub>v</sub> = 1.3Nf<sub>h</sub>f<sub>r</sub>f<sub>c</sub>f<sub>g</sub>/η</span>
  <span class="equation-number">(5.9)</span>
</div>

Пусковая мощность для лопастной мешалки:

<div class="equation-block">
  <span class="equation-main">N<sub>p</sub> ≈ 1.9ρhn<sup>3</sup>d<sup>4</sup></span>
  <span class="equation-number">(5.10)</span>
</div>

![Рис. 5.8. Схемы лопастных мешалок](/images/courses/bioprocess-engineering/chapter-05/fig-5-8.webp)

![Рис. 5.9. Лопастная мешалка с планетарным приводом](/images/courses/bioprocess-engineering/chapter-05/fig-5-9.webp)

![Рис. 5.10. Трехлопастной винт пропеллерной мешалки](/images/courses/bioprocess-engineering/chapter-05/fig-5-10.webp)

![Рис. 5.11. Турбинное колесо с направляющим устройством](/images/courses/bioprocess-engineering/chapter-05/fig-5-11.webp)

Для пневматического перемешивания мощность определяют расходом газа V, напором Δp и КПД воздуходувки η:

<div class="equation-block">
  <span class="equation-main">N = VΔp/η</span>
  <span class="equation-number">(5.11)</span>
</div>

Напор газа с учетом давления, столба жидкости и потерь в трубопроводе:

<div class="equation-block">
  <span class="equation-main">Δp = p<sub>0</sub> + ρ<sub>l</sub>gh + (ρ<sub>g</sub>w<sub>g</sub><sup>2</sup>/2)(λl/d + Σξ)</span>
  <span class="equation-number">(5.12)</span>
</div>

Для инженерного расчета, когда длина воздухопроводов неизвестна:

<div class="equation-block">
  <span class="equation-main">Δp = p<sub>0</sub> + 1.2ρ<sub>l</sub>gH</span>
  <span class="equation-number">(5.13)</span>
</div>

Расход воздуха на перемешивание:

<div class="equation-block">
  <span class="equation-main">V = KFp/(9.81 · 10<sup>4</sup>)</span>
  <span class="equation-number">(5.14)</span>
</div>

![Рис. 5.14. Схемы барботажного смесителя и барботеров](/images/courses/bioprocess-engineering/chapter-05/fig-5-14.webp)

![Рис. 5.15. Аппараты для пневматического перемешивания и аэрации](/images/courses/bioprocess-engineering/chapter-05/fig-5-15.webp)

Циркуляционное и струйное перемешивание использует кинетическую энергию потока, выходящего из сопла или возвращаемого насосом в аппарат.

![Рис. 5.16. Схема движения жидкости, выходящей из погруженного сопла](/images/courses/bioprocess-engineering/chapter-05/fig-5-16.webp)

![Рис. 5.19. Схема циркуляционного перемешивания](/images/courses/bioprocess-engineering/chapter-05/fig-5-19.webp)

### 5.4. Оценка эффективности перемешивания

Эффективность перемешивания оценивают по времени достижения нужной однородности и по неравномерности концентрации контрольного компонента в разных точках аппарата. Чем меньше отклонение от среднего значения, тем качественнее перемешивание. Для биореакторов дополнительно учитывают уровень сдвиговых напряжений, распределение растворенного кислорода, пенообразование и локальные зоны перегрева или дефицита субстрата.

### 5.5. Перемешивание сыпучих и пластичных материалов

Сыпучие и пластичные материалы перемешивают в лопастных, шнековых, барабанных, ленточных и других смесителях. В таких аппаратах важны время смешивания, равномерность распределения компонентов, разрушение комков, предотвращение сегрегации и механическая нагрузка на продукт.

![Рис. 5.22. Перемешивающие устройства для сыпучих и пластичных масс](/images/courses/bioprocess-engineering/chapter-05/fig-5-22.webp)

## После изучения раздела студент должен уметь

- объяснять роль понятия «мешалка» в пределах раздела;
- связывать «циркуляция» с аппаратурным оформлением биотехнологического производства;
- различать основные параметры, влияющие на «критерий мощности»;
- обосновывать выбор или оценку процесса через «однородность».

## Тест для самопроверки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="ru"
  data-course="bioprocess-engineering"
  data-chapter="chapter-05-mixing"
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
  <input type="radio" name="course-test-5-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>циркуляция</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-0" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>мешалка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>критерий мощности</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>однородность</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>5.2. Перемешивание в жидкой среде</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>5.3. Расход энергии на механическое перемешивание</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-1" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>5.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>5.4. Оценка эффективности перемешивания</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На какое понятие прежде всего опирается инженерный анализ этого раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>мешалка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>критерий мощности</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>однородность</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-2" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>циркуляция</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Что теснее всего связывает теорию процесса с аппаратурным оформлением?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-3" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>однородность</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>мешалка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>циркуляция</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>критерий мощности</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>мешалка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-4" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>критерий мощности</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>циркуляция</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>однородность</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. С какой темы начинается раздел в структуре учебника?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>5.2. Перемешивание в жидкой среде</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>5.3. Расход энергии на механическое перемешивание</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-5" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>5.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>5.4. Оценка эффективности перемешивания</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>5.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>5.3. Расход энергии на механическое перемешивание</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>5.4. Оценка эффективности перемешивания</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-6" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>5.2. Перемешивание в жидкой среде</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Какая тема завершает структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-7" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>5.5. Перемешивание сыпучих и пластичных материалов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>5.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>5.2. Перемешивание в жидкой среде</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>5.3. Расход энергии на механическое перемешивание</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Какую пару понятий целесообразно сопоставлять при самопроверке?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>критерий мощности / однородность</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-8" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>мешалка / циркуляция</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>мешалка / критерий мощности</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>циркуляция / однородность</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Что лучше всего подходит для практического обоснования выбора процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>мешалка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>циркуляция</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-9" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>однородность</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>критерий мощности</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>мешалка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>критерий мощности</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>однородность</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-10" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>циркуляция</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Какой объект представлен в этом разделе как наглядный рисунок?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-11" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Механическое перемешивание с вращающимся рабочим органом</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>мешалка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>циркуляция</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>критерий мощности</span>
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
<li>Вопрос 1: Правильный ответ - B</li>
<li>Вопрос 2: Правильный ответ - C</li>
<li>Вопрос 3: Правильный ответ - D</li>
<li>Вопрос 4: Правильный ответ - A</li>
<li>Вопрос 5: Правильный ответ - B</li>
<li>Вопрос 6: Правильный ответ - C</li>
<li>Вопрос 7: Правильный ответ - D</li>
<li>Вопрос 8: Правильный ответ - A</li>
<li>Вопрос 9: Правильный ответ - B</li>
<li>Вопрос 10: Правильный ответ - C</li>
<li>Вопрос 11: Правильный ответ - D</li>
<li>Вопрос 12: Правильный ответ - A</li>
</ol>
</details>
</section>
