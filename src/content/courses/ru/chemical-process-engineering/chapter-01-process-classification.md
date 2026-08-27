---
title: "Раздел 1. Классификация процессов и аппаратов"
course: "chemical-process-engineering"
course_title: "Процессы и аппараты химических производств"
chapter: 1
description: "Основные типы процессов химической технологии, кинетические закономерности и примеры аппаратов."
updated: "2026-08-27"
---

## Источники и границы раздела

Основой лекции является конспект "Курс лекций_1" по дисциплине "Процессы и аппараты химических производств". Аппаратурные примеры и медиа выбраны из виртуального учебника `MAHP_BOOK`. В видимом материале курса используются нейтральные рисунки и украинские или англоязычные медиа; ГОСТ, ОСТ, РД и СНиП не используются как нормативная база.

## Зачем начинать с классификации

Курс формирует общий инженерный язык для описания процессов, расчета движущих сил, выбора аппаратов и проверки рабочих режимов. Родственные курсы для пищевых, фармацевтических и биотехнологических производств используют те же законы переноса, но отличаются свойствами сред, требованиями безопасности, материалами и типовыми аппаратурными решениями.

## Основные типы процессов

### Гидромеханические процессы

Скорость этих процессов определяется законами гидродинамики. К ним относятся осаждение, фильтрование жидкостей или газов, перемешивание, псевдоожижение зернистого материала, движение жидкостей и газов в трубопроводах и аппаратах.

### Тепловые процессы

Их скорость определяется законами теплопередачи. Типичные примеры - нагревание, охлаждение, выпаривание и конденсация.

![Кожухотрубчатый теплообменник как пример теплового аппарата](/images/courses/chemical-process-engineering/chapter-01/shell-tube-heat-exchanger.png)
*Рис. 1.1. Кожухотрубчатый теплообменник как пример аппарата для теплового процесса.*

### Массообменные процессы

Скорость массообменных процессов определяется законами массопередачи. К этой группе относятся абсорбция, адсорбция, экстракция, сушка, ректификация, растворение и кристаллизация.

![Контактное устройство массообменного аппарата](/images/courses/chemical-process-engineering/chapter-01/mass-transfer-contact-device.png)
*Рис. 1.2. Пример контактного устройства массообменного аппарата.*

### Химические и механические процессы

Химические процессы связаны с превращением веществ и определяются законами химической кинетики. Механические процессы охватывают измельчение, классификацию, прессование, формование, дозирование и транспортирование сыпучих материалов.

## Общая кинетическая закономерность

Скорость процесса прямо пропорциональна движущей силе и обратно пропорциональна сопротивлению процесса. Величину, обратную сопротивлению, рассматривают как коэффициент скорости или коэффициент переноса.

<div class="equation-block">
  <span class="equation-main">dV / (F<sub>1</sub> dτ) = Δp / R<sub>1</sub> = K<sub>1</sub> Δp</span>
  <span class="equation-number">(1.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dQ / (F<sub>2</sub> dτ) = Δt / R<sub>2</sub> = K<sub>2</sub> Δt</span>
  <span class="equation-number">(1.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dM / (F<sub>3</sub> dτ) = ΔC / R<sub>3</sub> = K<sub>3</sub> ΔC</span>
  <span class="equation-number">(1.3)</span>
</div>

где Δp, Δt и ΔC - движущие силы гидромеханического, теплового и массообменного процессов соответственно; R - сопротивление; K - коэффициент переноса.

## От процесса к аппарату

Инженер сначала определяет, что переносится, какая движущая сила действует, какое сопротивление ограничивает скорость и какая аппаратурная форма обеспечивает площадь контакта, время пребывания, безопасность и управляемость.

![Трубный пучок теплообменного аппарата](/images/courses/chemical-process-engineering/chapter-01/tube-bundle-photo.png)
*Рис. 1.3. Трубный пучок теплообменного аппарата: переход от уравнения теплопередачи к конструкции.*

## Нормативная рамка без ГОСТов

В этом курсе ГОСТ, ОСТ, РД и СНиП не используются как нормативная база. Предпочтение отдается украинским техническим регламентам и современным международным или европейским документам: украинскому регламенту для оборудования под давлением, Pressure Equipment Directive 2014/68/EU, EN 13445, ASME BPVC и профильным ISO/EN/API документам.

## Видео из виртуального учебника

<video controls preload="metadata" style="width: 100%; max-width: 760px; border-radius: 8px; border: 1px solid var(--border-color); background: #000;">
  <source src="/videos/courses/chemical-process-engineering/chapter-01/plate-heat-exchanger.mp4" type="video/mp4" />
</video>

*Видео 1.1. Plate Heat Exchanger - пример аппаратурной реализации теплового процесса.*

## Самопроверка

<section class="course-self-test" data-course-self-test data-locale="ru" data-course="chemical-process-engineering" data-chapter="chapter-01-process-classification" data-pass="8">
<h2>Тест к разделу</h2>
<p>Вопросы перемешиваются автоматически. Для зачета нужно не менее 8 правильных ответов из 10.</p>
<form data-course-test-form>
<fieldset class="course-test-item" data-course-test-item><legend>1. Что определяет скорость гидромеханических процессов?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-ru-1-0" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>законы гидродинамики</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-0" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>только химическое равновесие</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-0" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>только гранулометрический состав</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-0" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>только теплота парообразования</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>2. Какой процесс относится к тепловым?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-ru-1-1" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>фильтрование</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-1" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>конденсация</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-1" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>измельчение</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-1" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>центрифугирование</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>3. Что является движущей силой теплового процесса?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-ru-1-2" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>разность концентраций</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-2" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>частота вращения вала</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-2" value="2" data-correct="1" /><span class="course-test-letter">C</span><span>разность температур</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-2" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>влажность осадка</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>4. Для какого процесса характерна движущая сила ΔC?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-ru-1-3" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>теплопередача</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-3" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>массопередача</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-3" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>гидростатика</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-3" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>прочность корпуса</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>5. Что считается величиной, обратной сопротивлению процесса?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-ru-1-4" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>масса аппарата</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-4" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>коэффициент скорости или переноса</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-4" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>номер чертежа</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-4" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>объем фундамента</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>6. Что показано на рис. 1.1?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-ru-1-5" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>кожухотрубчатый теплообменник</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-5" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>дисковый фильтр</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-5" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>дробилка</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-5" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>гидроциклон</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>7. Почему ГОСТы не используются как нормативная база?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-ru-1-6" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>курс должен опираться на украинские или международные источники</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-6" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>стандарты вообще не нужны</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-6" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>они относятся только к биотехнологии</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-6" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>они не содержат рисунков</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>8. К какой группе относятся измельчение и классификация?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-ru-1-7" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>массообменные процессы</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-7" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>тепловые процессы</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-7" value="2" data-correct="1" /><span class="course-test-letter">C</span><span>механические процессы</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-7" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>процессы автоматизации</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>9. Что связывает уравнение процесса с конструкцией аппарата?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-ru-1-8" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>площадь, время пребывания, безопасность и управляемость</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-8" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>только цвет аппарата</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-8" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>порядок страниц</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-8" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>только название изготовителя</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>10. К какой группе относится абсорбция?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-ru-1-9" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>массообменные процессы</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-9" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>механические процессы</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-9" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>только тепловые процессы</span></label><label class="course-test-option"><input type="radio" name="chem-ru-1-9" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>расчеты прочности</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<div class="course-test-actions"><button type="submit" class="course-test-primary">Проверить</button><button type="button" class="course-test-secondary" data-course-test-reset>Сбросить</button></div></form>
<p class="course-test-status" aria-live="polite"><strong data-course-test-result>Результат: 0/10</strong><span data-course-test-best>Лучший результат: -</span></p>
<details class="course-test-answers"><summary>Ответы</summary><ol><li>1: A</li><li>2: B</li><li>3: C</li><li>4: B</li><li>5: B</li><li>6: A</li><li>7: A</li><li>8: C</li><li>9: A</li><li>10: A</li></ol></details>
</section>
