---
title: "Раздел 4. Мембранные процессы разделения"
course: "bioprocess-engineering"
course_title: "Инжиниринг биопроцессов: процессы и аппараты биотехнологических производств"
chapter: 4
description: "Обратный осмос, нано-, ультра- и микрофильтрация, диафильтрация и мембранные аппараты."
updated: "2026-08-23"
---

## Источник и границы раздела

Основа материала: учебник «Инжиниринг биопроцессов. Модуль 1. Процессы и аппараты биотехнологических производств» под редакцией В.Л. Завьялова, НУХТ, 2024.

## Структура материала по учебнику

- 4.1. Общие положения
- 4.2. Теоретические основы баромембранных процессов
- 4.3. Диафильтрация
- 4.4. Мембранные аппараты

## Конспект лекции

### 4.1. Общие положения

Мембранные процессы разделения используют полупроницаемые перегородки, которые пропускают одни компоненты системы и задерживают другие. В биотехнологических производствах их применяют для концентрирования белков, ферментов, антибиотиков, вакцинных полупродуктов, культуральных жидкостей, очистки воды, обессоливания и стерильной фильтрации термолабильных растворов.

По характеру движущей силы мембранные процессы делят на баромембранные, концентрационно-мембранные, электромембранные и термомембранные. В этом разделе основное внимание уделено обратному осмосу, нанофильтрации, ультрафильтрации, микрофильтрации и диафильтрации.

### 4.2. Теоретические основы обратного осмоса, нано-, ультра- и микрофильтрации

Осмос возникает, когда раствор и растворитель разделены полупроницаемой мембраной. Растворитель самопроизвольно переходит в раствор, пока гидростатическое давление не уравновесит осмотическое. Если со стороны раствора приложить давление выше осмотического, перенос меняет направление; это обратный осмос.

![Рис. 4.1. Схемы осмотического и обратноосмотического процессов](/images/courses/bioprocess-engineering/chapter-04/fig-4-1.webp)

Для идеального случая движущая сила:

<div class="equation-block">
  <span class="equation-main">Δp = p - π</span>
</div>

Для реальной системы учитывают разность осмотических давлений по обе стороны мембраны:

<div class="equation-block">
  <span class="equation-main">Δp = p - (π<sub>1</sub> - π<sub>2</sub>) = p - Δπ</span>
</div>

Осмотическое давление разбавленных растворов описывают соотношением Вант-Гоффа:

<div class="equation-block">
  <span class="equation-main">π = icRT</span>
</div>

Удельная производительность мембраны, или поток пермеата:

<div class="equation-block">
  <span class="equation-main">G = V/(Fτ) = KΔp</span>
  <span class="equation-number">(4.1)</span>
</div>

Селективность мембраны показывает, насколько эффективно она задерживает растворенное вещество:

<div class="equation-block">
  <span class="equation-main">φ = ((C<sub>1</sub> - C<sub>2</sub>)/C<sub>1</sub>) · 100 = (1 - C<sub>2</sub>/C<sub>1</sub>) · 100</span>
  <span class="equation-number">(4.2)</span>
</div>

Обратный осмос применяют преимущественно для низкомолекулярных веществ и обессоливания. Нанофильтрация занимает промежуточное место между обратным осмосом и ультрафильтрацией. Ультрафильтрация задерживает макромолекулы и коллоиды, а микрофильтрация работает с более крупными частицами, клетками и микроорганизмами.

### 4.3. Диафильтрация

Диафильтрация сочетает мембранное разделение с добавлением растворителя. Она позволяет удалять низкомолекулярные примеси из раствора высокомолекулярного продукта без значительной потери самого продукта. В биотехнологии это полезно при промывке белковых концентратов, ферментных препаратов и культуральных жидкостей.

Коэффициент разбавления:

<div class="equation-block">
  <span class="equation-main">α = D/V</span>
  <span class="equation-number">(4.3)</span>
</div>

При α = 0 процесс соответствует концентрированию, а при α > 0 - собственно диафильтрации. Процесс может быть периодическим или непрерывным.

![Рис. 4.2. Принципиальные схемы диафильтрации](/images/courses/bioprocess-engineering/chapter-04/fig-4-2.webp)

### 4.4. Мембранные аппараты

Мембранные аппараты должны обеспечивать большую рабочую поверхность мембраны, равномерное распределение потока, возможность промывки, санитарной обработки и замены мембранных элементов. Для биотехнологических сред важны низкое пенообразование, контроль загрязнения мембраны, стерильность и минимальное механическое повреждение продукта.

Аппараты типа фильтр-пресса удобны для плоских мембран и лабораторно-пилотных установок.

![Рис. 4.3. Мембранный аппарат типа фильтр-пресс](/images/courses/bioprocess-engineering/chapter-04/fig-4-3.webp)

Трубчатые мембранные элементы устойчивы к загрязнению и подходят для вязких или загрязненных суспензий.

![Рис. 4.4. Схемы трубчатых мембранных элементов](/images/courses/bioprocess-engineering/chapter-04/fig-4-4.webp)

Модули с полыми волокнами имеют очень большую удельную поверхность, поэтому их применяют для тонкой очистки, стерильной фильтрации и работы с большими объемами жидкостей.

![Рис. 4.6. Модуль с мембранами в виде полых волокон](/images/courses/bioprocess-engineering/chapter-04/fig-4-6.webp)

Баромембранные аппараты могут работать периодически или непрерывно. В периодических схемах жидкость многократно циркулирует через мембранный модуль, пока не будет достигнута требуемая концентрация.

![Рис. 4.7. Баромембранный аппарат периодического действия](/images/courses/bioprocess-engineering/chapter-04/fig-4-7.webp)

В непрерывных схемах используют одну или несколько стадий с циркуляционными контурами, что позволяет поддерживать производительность и стабильное качество пермеата.

![Рис. 4.8. Баромембранные аппараты непрерывного действия с циркуляционными контурами](/images/courses/bioprocess-engineering/chapter-04/fig-4-8.webp)

## После изучения раздела студент должен уметь

- объяснять роль понятия «мембрана» в пределах раздела;
- связывать «обратный осмос» с аппаратурным оформлением биотехнологического производства;
- различать основные параметры, влияющие на «ультрафильтрация»;
- обосновывать выбор или оценку процесса через «диафильтрация».

## Тест для самопроверки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="ru"
  data-course="bioprocess-engineering"
  data-chapter="chapter-04-membrane-separation"
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
  <input type="radio" name="course-test-4-0" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>мембрана</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>обратный осмос</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>ультрафильтрация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>диафильтрация</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-4-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>4.2. Теоретические основы баромембранных процессов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-1" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>4.1. Общие положения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>4.3. Диафильтрация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>4.4. Мембранные аппараты</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На какое понятие прежде всего опирается инженерный анализ этого раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-4-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>мембрана</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>ультрафильтрация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-2" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>обратный осмос</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>диафильтрация</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Что теснее всего связывает теорию процесса с аппаратурным оформлением?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-4-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>мембрана</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>обратный осмос</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>ультрафильтрация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-3" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>диафильтрация</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-4-4" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>ультрафильтрация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>мембрана</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>обратный осмос</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>диафильтрация</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. С какой темы начинается раздел в структуре учебника?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-4-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>4.2. Теоретические основы баромембранных процессов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-5" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>4.1. Общие положения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>4.3. Диафильтрация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>4.4. Мембранные аппараты</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-4-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>4.1. Общие положения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>4.3. Диафильтрация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-6" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>4.2. Теоретические основы баромембранных процессов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>4.4. Мембранные аппараты</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Какая тема завершает структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-4-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>4.1. Общие положения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>4.2. Теоретические основы баромембранных процессов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>4.3. Диафильтрация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-7" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>4.4. Мембранные аппараты</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Какую пару понятий целесообразно сопоставлять при самопроверке?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-4-8" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>мембрана / обратный осмос</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>ультрафильтрация / диафильтрация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>мембрана / ультрафильтрация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>обратный осмос / диафильтрация</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Что лучше всего подходит для практического обоснования выбора процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-4-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>мембрана</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-9" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>диафильтрация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>обратный осмос</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>ультрафильтрация</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-4-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>мембрана</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>ультрафильтрация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-10" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>обратный осмос</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>диафильтрация</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Какой объект представлен в этом разделе как наглядный рисунок?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-4-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>мембрана</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>обратный осмос</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>ультрафильтрация</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-4-11" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Схемы осмотического и обратноосмотического процессов</span>
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
