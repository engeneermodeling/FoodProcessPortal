---
title: "Раздел 18. Прессование"
course: "chemical-process-engineering"
course_title: "Процессы и аппараты химических производств"
chapter: 18
description: "Отжим жидкости из твердых материалов, формование пластичных материалов, брикетирование и гранулирование."
updated: "2026-08-23"
---

## Фокус раздела

В этом разделе последовательно рассмотрены основные понятия, уравнения и аппаратурные решения по теме.

## Структура материала раздела

- 18.1. Отжим жидкости из твердых материалов
- 18.2. Формование пластичных материалов
- 18.3. Брикетирование и гранулирование твердых материалов

## Конспект лекции

### Раздел 18. Прессование

Прессованием называют обработку материалов давлением под действием внешних сил. Материал подвергается одностороннему или объемному сжатию в прессах. Прессование применяют для отжимания жидкости из твердых материалов, формования пластичных материалов, уплотнения, брикетирования и гранулирования.

### 18.1. Отжимание жидкости из твердых материалов

Отжимание, как и фильтрование, используют для разделения жидкой и твердой фаз. Его применяют, когда нужно полнее отделить жидкость от осадка или предварительно удалить влагу перед сушкой. С ростом давления материал уплотняется, затем начинает отделяться жидкая фракция; скорость процесса постепенно уменьшается.

Жидкость при прессовании движется между частицами пористого слоя по капиллярам переменного сечения. Расход жидкости через капилляр описывают законом Пуазейля:

<div class="equation-block">
  <span class="equation-main">Q = Δp α d<sub>k</sub><sup>4</sup>/(32 μ l<sub>k</sub>)</span>
  <span class="equation-number">(18.1)</span>
</div>

где Δp - перепад давления, Па; α - коэффициент формы сечения капилляра; d<sub>k</sub> - диаметр капилляра, м; μ - динамическая вязкость жидкости, Па·с; l<sub>k</sub> - длина капилляра, м.

Компрессионные характеристики описывают способность массы деформироваться под давлением:

<div class="equation-block">
  <span class="equation-main">dp = a dε</span>
  <span class="equation-number"></span>
</div>

Пористость ε зависит от давления p, поэтому по экспериментальным данным строят компрессионные кривые:

<div class="equation-block">
  <span class="equation-main">ε = f(p)</span>
  <span class="equation-number"></span>
</div>

Кинетику нестационарного отжимания при постоянном давлении приближенно описывают уравнением:

<div class="equation-block">
  <span class="equation-main">(ε<sub>p</sub> - ε)/(ε<sub>p</sub> - ε<sub>k</sub>) = 1 - (8/π<sup>2</sup>) exp[-π<sup>2</sup>cτ/(4h<sup>2</sup>)]</span>
  <span class="equation-number">(18.2)</span>
</div>

Прессы для отжимания бывают периодического и непрерывного действия; по способу создания давления различают гидравлические, пневматические и механические прессы. В вертикальном гидравлическом прессе материал загружают в зеерный цилиндр, а жидкая фракция проходит через зазоры и стекает в поддон.

![Рис. 18.1. Схема гидравлического пресса](/images/courses/chemical-process-engineering/chapter-18/fig-18-1.webp)
*Рис. 18.1. Схема гидравлического пресса*

Если потерь нет, полное усилие прессования в рабочем цилиндре равно усилию в гидроцилиндре:

<div class="equation-block">
  <span class="equation-main">F = p<sub>p</sub>πD<sub>p</sub><sup>2</sup>/4 = p<sub>c</sub>πD<sub>c</sub><sup>2</sup>/4</span>
  <span class="equation-number">(18.3)</span>
</div>

Давление, которое нужно создать в силовом цилиндре, определяют так:

<div class="equation-block">
  <span class="equation-main">p<sub>c</sub> = p<sub>p</sub>(D<sub>p</sub>/D<sub>c</sub>)<sup>2</sup></span>
  <span class="equation-number">(18.4)</span>
</div>

Шнековые прессы распространены в химической и пищевой промышленности для выделения масла, сусла, жира, томатного сока и других жидких фракций. Для цилиндрических шнеков степень сжатия определяют отношением шагов:

![Рис. 18.2. Схема шнекового пресса](/images/courses/chemical-process-engineering/chapter-18/fig-18-2.webp)
*Рис. 18.2. Схема шнекового пресса*

<div class="equation-block">
  <span class="equation-main">K = h<sub>1</sub>/h<sub>2</sub></span>
  <span class="equation-number"></span>
</div>

Давление в рабочем пространстве шнека изменяется по экспоненциальному закону:

<div class="equation-block">
  <span class="equation-main">p<sub>k</sub> = p<sub>0</sub>e<sup>lβ</sup></span>
  <span class="equation-number">(18.5)</span>
</div>

Производительность шнекового пресса G, кг/с:

<div class="equation-block">
  <span class="equation-main">G = fw<sub>o</sub>ρφ</span>
  <span class="equation-number">(18.6)</span>
</div>

Для поперечного сечения рабочей зоны корпуса шнекового пресса:

<div class="equation-block">
  <span class="equation-main">f = π(D<sup>2</sup> - d<sup>2</sup>)/4</span>
  <span class="equation-number"></span>
</div>

Осевая скорость перемещения материала:

<div class="equation-block">
  <span class="equation-main">w<sub>o</sub> = hn</span>
  <span class="equation-number">(18.7)</span>
</div>

### 18.2. Формование пластичных материалов

Формование применяют, чтобы придать продукту заданную форму без существенного изменения плотности. Пластичные материалы формуют раскатыванием, округлением, вытяжкой, штампованием и экструзией через формующие отверстия. Реологические свойства определяют длительность действия рабочих органов и производительность машины.

![Рис. 18.3. Схема одношнекового экструдера](/images/courses/chemical-process-engineering/chapter-18/fig-18-3.webp)
*Рис. 18.3. Схема одношнекового экструдера*

<div class="equation-block">
  <span class="equation-main">tgφ = h/(πD)</span>
  <span class="equation-number">(18.8)</span>
</div>

Экструдеры формуют пластичные материалы продавливанием через отверстия матрицы. В шнековом экструдере материал подают в бункер, шнек перемещает его в корпусе к камере перед матрицей, а созданное давление выдавливает массу через отверстия. Угол наклона винтовой поверхности связан с геометрией шнека:

<div class="equation-block">
  <span class="equation-main">Q = Δpk/μ</span>
  <span class="equation-number">(18.9)</span>
</div>

Для практических расчетов объемной производительности формующего оборудования используют:

### 18.3. Брикетирование и гранулирование твердых материалов

<div class="equation-block">
  <span class="equation-main">β = V/V<sub>c</sub></span>
  <span class="equation-number">(18.10)</span>
</div>

Брикетированием называют уплотнение твердого тела в замкнутом пространстве с образованием брикетов правильной формы. Уплотнение сопровождается измельчением и относительным смещением частиц. Уменьшение объема характеризуют коэффициентом уплотнения:

<div class="equation-block">
  <span class="equation-main">ψ ln(p<sub>k</sub>/p<sub>p</sub>) = β<sub>p</sub> - β<sub>k</sub></span>
  <span class="equation-number">(18.11)</span>
</div>

При отсутствии потерь давления на трение процесс уплотнения описывают зависимостью:

При одностороннем прессовании плотность брикета наибольшая возле пуансона, поэтому целесообразно двустороннее сжатие. Прочность брикетов зависит от состояния материала, влажности, предварительной тепловой обработки, длительности процесса и выдержки под давлением.

![Рис. 18.4. Схема процесса прессования на карусельном прессе](/images/courses/chemical-process-engineering/chapter-18/fig-18-4.webp)
*Рис. 18.4. Схема процесса прессования на карусельном прессе*

<div class="equation-block">
  <span class="equation-main">A = ∫<sub>h<sub>k</sub></sub><sup>h<sub>p</sub></sup> Fp dh</span>
  <span class="equation-number">(18.12)</span>
</div>

Карусельный пресс имеет горизонтальный диск с матрицами и пуансонами. За один оборот диск выполняет заполнение матрицы, формование, выталкивание брусков и очистку пуансона. Работу прессования за один ход пуансона определяют так:

![Рис. 18.5. Схема гранулирования сухого жома](/images/courses/chemical-process-engineering/chapter-18/fig-18-5.webp)
*Рис. 18.5. Схема гранулирования сухого жома*

## После изучения раздела студент должен уметь

- объяснять роль понятия «давление» в пределах раздела;
- связывать «отжим» с аппаратурным оформлением химического производства;
- различать основные параметры, влияющие на «формование»;
- обосновывать выбор или оценку процесса через «гранулирование».

## Тест для самопроверки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="ru"
  data-course="chemical-process-engineering"
  data-chapter="chapter-18-pressing"
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
  <input type="radio" name="course-test-18-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>отжим</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>формование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>давление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гранулирование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Какой подраздел непосредственно входит в структуру раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>18.2. Формование пластичных материалов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>18.3. Брикетирование и гранулирование твердых материалов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>давление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>18.1. Отжим жидкости из твердых материалов</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На какое понятие прежде всего опирается инженерный анализ этого раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>отжим</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>давление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>формование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гранулирование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Что теснее всего связывает теорию процесса с аппаратурным оформлением?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>давление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>гранулирование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>отжим</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>формование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>давление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>отжим</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>формование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гранулирование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. С какой темы начинается раздел в структуре раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>18.2. Формование пластичных материалов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>18.3. Брикетирование и гранулирование твердых материалов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>давление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>18.1. Отжим жидкости из твердых материалов</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Какой подраздел непосредственно входит в структуру раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>18.2. Формование пластичных материалов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>18.1. Отжим жидкости из твердых материалов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>18.3. Брикетирование и гранулирование твердых материалов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>давление</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Какая тема завершает структуру раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>18.1. Отжим жидкости из твердых материалов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>18.3. Брикетирование и гранулирование твердых материалов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>18.2. Формование пластичных материалов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>давление</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Какую пару понятий целесообразно сопоставлять при самопроверке?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>формование / гранулирование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>давление / формование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>давление / отжим</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>отжим / гранулирование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Что лучше всего подходит для практического обоснования выбора процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>давление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>отжим</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>формование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>гранулирование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>отжим</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>давление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>формование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>гранулирование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Какой объект представлен в этом разделе как наглядный рисунок?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>давление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Схема гидравлического пресса</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>отжим</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>формование</span>
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

