---
title: "Розділ 1. Класифікація процесів і апаратів"
course: "chemical-process-engineering"
course_title: "Процеси і апарати хімічних виробництв"
chapter: 1
description: "Основні типи процесів хімічної технології, кінетичні закономірності та апаратурні приклади."
updated: "2026-08-27"
---

## Фокус розділу

У цьому розділі послідовно розглянуто ключові поняття, рівняння та апаратурні рішення за темою.

## Навіщо починати з класифікації

Курс "Процеси і апарати хімічних виробництв" об'єднує лекції, практичні заняття, лабораторні роботи і курсове проектування. Його завдання - дати студенту спільну інженерну мову для опису процесів, розрахунку рушійних сил, вибору апаратів і перевірки режимів роботи.

На базі цієї дисципліни сформувалися споріднені курси для харчових, фармацевтичних і біотехнологічних виробництв. Відмінність між ними не в базових законах перенесення, а в робочих середовищах, вимогах до матеріалів, санітарії, безпеки, точності контролю і типових апаратурних рішеннях.

## Основні типи процесів

У хімічній технології процеси зручно групувати за тим, яка фізична закономірність визначає їхню швидкість.

### Гідромеханічні процеси

Швидкість таких процесів визначається законами гідродинаміки. До них належать осадження зважених частинок, фільтрування рідин або газів, перемішування, псевдозрідження твердого зернистого матеріалу, рух рідин і газів у трубопроводах та апаратах.

### Теплові процеси

Їхня швидкість визначається законами теплопередачі. Типові приклади - нагрівання, охолодження, випарювання і конденсація. Для хімічного виробництва це не лише енергетичні операції, а й спосіб стабілізації режиму реактора, ректифікаційної колони або сушарки.

![Кожухотрубчастий теплообмінник як приклад теплового апарата](/images/courses/chemical-process-engineering/chapter-01/shell-tube-heat-exchanger.png)
*Рис. 1.1. Кожухотрубчастий теплообмінник як приклад апарата для теплового процесу.*

### Масообмінні процеси

Швидкість масообмінних процесів визначається законами масопередачі. До цієї групи належать абсорбція, адсорбція, екстракція, сушіння, ректифікація, розчинення і кристалізація. Для апаратів цієї групи особливо важливі поверхня контакту фаз, рівномірність розподілу потоків і час перебування.

![Контактний пристрій масообмінного апарата](/images/courses/chemical-process-engineering/chapter-01/mass-transfer-contact-device.png)
*Рис. 1.2. Приклад контактного пристрою масообмінного апарата.*

### Хімічні процеси

Хімічні процеси пов'язані з перетворенням речовин, а їхня швидкість визначається законами хімічної кінетики. У класичному курсі процесів і апаратів вони розглядаються через апаратурне забезпечення: реактори, теплообмінні поверхні, перемішування, барботаж, контроль температури, тиску і концентрацій.

### Механічні процеси

Механічні процеси охоплюють подрібнення твердих матеріалів, класифікацію, пресування, формування, дозування та транспортування сипких матеріалів. Їх розрахунок пов'язаний з енерговитратами, гранулометричним складом, міцністю частинок і режимами роботи машин.

## Кінетична закономірність

Кінетика більшості процесів у курсі підпорядковується спільному інженерному правилу: швидкість процесу прямо пропорційна рушійній силі і обернено пропорційна опору процесу. Величину, обернену опору, називають коефіцієнтом швидкості або коефіцієнтом перенесення.

Для гідромеханічних процесів:

<div class="equation-block">
  <span class="equation-main">dV / (F<sub>1</sub> dτ) = Δp / R<sub>1</sub> = K<sub>1</sub> Δp</span>
  <span class="equation-number">(1.1)</span>
</div>

де V - об'єм рідини; F<sub>1</sub> - площа перерізу апарата; R<sub>1</sub> - гідравлічний опір; Δp - перепад тиску, тобто рушійна сила; K<sub>1</sub> - коефіцієнт швидкості гідромеханічного процесу; τ - час.

Для теплових процесів:

<div class="equation-block">
  <span class="equation-main">dQ / (F<sub>2</sub> dτ) = Δt / R<sub>2</sub> = K<sub>2</sub> Δt</span>
  <span class="equation-number">(1.2)</span>
</div>

де Q - кількість теплоти; F<sub>2</sub> - площа поверхні теплообміну; Δt - різниця температур; R<sub>2</sub> - термічний опір; K<sub>2</sub> - коефіцієнт теплопередачі.

Для масообмінних процесів:

<div class="equation-block">
  <span class="equation-main">dM / (F<sub>3</sub> dτ) = ΔC / R<sub>3</sub> = K<sub>3</sub> ΔC</span>
  <span class="equation-number">(1.3)</span>
</div>

де M - кількість речовини, що переходить з однієї фази в іншу; F<sub>3</sub> - поверхня контакту фаз; ΔC - різниця концентрацій; R<sub>3</sub> - дифузійний опір; K<sub>3</sub> - коефіцієнт масопередачі.

## Як пов'язати процес і апарат

Один і той самий фізичний закон може реалізовуватися в різних апаратах. Тому інженерний аналіз починається не з назви машини, а з відповіді на чотири питання:

1. Що переноситься: маса, теплота, імпульс або хімічний компонент?
2. Яка рушійна сила процесу: перепад тиску, різниця температур, різниця концентрацій або хімічний потенціал?
3. Який опір обмежує швидкість процесу?
4. Яка апаратурна форма забезпечує потрібну поверхню, час перебування, безпеку і керованість?

![Трубний пучок теплообмінного апарата](/images/courses/chemical-process-engineering/chapter-01/tube-bundle-photo.png)
*Рис. 1.3. Трубний пучок теплообмінного апарата: приклад переходу від рівняння теплопередачі до конструкції.*

## Нормативна рамка без ГОСТів

Для нового курсу ГОСТ, ОСТ, РД і СНиП не використовуються як нормативна база. У матеріалах доцільно орієнтуватися на українські технічні регламенти та чинні міжнародні або європейські документи. Для апаратів під тиском базовими орієнтирами є:

- український технічний регламент обладнання, що працює під тиском;
- європейська Pressure Equipment Directive 2014/68/EU;
- стандарти EN 13445 для невогневих посудин під тиском;
- ASME Boiler and Pressure Vessel Code для міжнародної практики проектування;
- профільні ISO/EN/API документи для трубопроводів, арматури, насосів, теплообмінників і систем безпеки.

## Відео з віртуального розділу

Нижче залишено короткий англомовний відеофрагмент з віртуального розділу. Він потрібен не як заміна лекції, а як візуальний приклад роботи апаратів теплопередачі.

<video controls preload="metadata" style="width: 100%; max-width: 760px; border-radius: 8px; border: 1px solid var(--border-color); background: #000;">
  <source src="/videos/courses/chemical-process-engineering/chapter-01/plate-heat-exchanger.mp4" type="video/mp4" />
</video>

*Відео 1.1. Plate Heat Exchanger - приклад апаратурної реалізації теплового процесу.*

## Підсумок

Класифікація процесів потрібна не для запам'ятовування списку, а для вибору правильного розрахункового підходу. Якщо відомі рушійна сила, опір, коефіцієнт перенесення і апаратурна форма, студент може перейти від фізичного опису до інженерного розрахунку.

## Самоперевірка

<section class="course-self-test" data-course-self-test data-locale="uk" data-course="chemical-process-engineering" data-chapter="chapter-01-process-classification" data-pass="8">
<h2>Тест до розділу</h2>
<p>Питання перемішуються автоматично. Для зарахування потрібно набрати щонайменше 8 правильних відповідей з 10.</p>
<form data-course-test-form>
<fieldset class="course-test-item" data-course-test-item>
<legend>1. Що визначає швидкість гідромеханічних процесів?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option"><input type="radio" name="chem-1-0" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>закони гідродинаміки</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-0" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>лише хімічна рівновага</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-0" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>тільки гранулометричний склад</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-0" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>лише теплота пароутворення</span></label>
</div><p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>
<fieldset class="course-test-item" data-course-test-item>
<legend>2. Який процес належить до теплових?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option"><input type="radio" name="chem-1-1" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>фільтрування</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-1" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>конденсація</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-1" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>подрібнення</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-1" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>центрифугування</span></label>
</div><p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>
<fieldset class="course-test-item" data-course-test-item>
<legend>3. Що є типовою рушійною силою теплового процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option"><input type="radio" name="chem-1-2" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>різниця концентрацій</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-2" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>швидкість обертання вала</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-2" value="2" data-correct="1" /><span class="course-test-letter">C</span><span>різниця температур</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-2" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>вологість осаду</span></label>
</div><p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>
<fieldset class="course-test-item" data-course-test-item>
<legend>4. Для якого процесу характерна рушійна сила ΔC?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option"><input type="radio" name="chem-1-3" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>теплопередача</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-3" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>масопередача</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-3" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>гідростатика</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-3" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>міцність оболонки</span></label>
</div><p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>
<fieldset class="course-test-item" data-course-test-item>
<legend>5. Що означає опір процесу в кінетичному рівнянні?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option"><input type="radio" name="chem-1-4" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>назву апарата</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-4" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>масу фундаменту</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-4" value="2" data-correct="1" /><span class="course-test-letter">C</span><span>чинник, який обмежує швидкість перенесення</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-4" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>номер креслення</span></label>
</div><p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>
<fieldset class="course-test-item" data-course-test-item>
<legend>6. Який апарат на рис. 1.1 ілюструє тепловий процес?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option"><input type="radio" name="chem-1-5" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>кожухотрубчастий теплообмінник</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-5" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>дисковий фільтр</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-5" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>дробарка</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-5" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>гідроциклон</span></label>
</div><p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>
<fieldset class="course-test-item" data-course-test-item>
<legend>7. Чому ГОСТи не використовуються в цьому курсі як нормативна база?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option"><input type="radio" name="chem-1-6" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>бо вони не містять рисунків</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-6" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>бо нормативні посилання мають спиратися на українські або міжнародні джерела</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-6" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>бо вони стосуються лише біотехнології</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-6" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>бо всі стандарти не потрібні</span></label>
</div><p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>
<fieldset class="course-test-item" data-course-test-item>
<legend>8. Яке питання першим ставить інженер при виборі розрахункового підходу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option"><input type="radio" name="chem-1-7" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>що саме переноситься у процесі</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-7" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>який колір має апарат</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-7" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>яка назва виробника</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-7" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>скільки сторінок у паспорті</span></label>
</div><p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>
<fieldset class="course-test-item" data-course-test-item>
<legend>9. До якої групи належать подрібнення і класифікація?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option"><input type="radio" name="chem-1-8" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>масообмінні процеси</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-8" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>теплові процеси</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-8" value="2" data-correct="1" /><span class="course-test-letter">C</span><span>механічні процеси</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-8" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>процеси автоматизації</span></label>
</div><p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>
<fieldset class="course-test-item" data-course-test-item>
<legend>10. Що пов'язує рівняння процесу з конструкцією апарата?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option"><input type="radio" name="chem-1-9" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>лише назва дисципліни</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-9" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>потрібна поверхня, час перебування, безпека і керованість</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-9" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>порядок сторінок у конспекті</span></label>
<label class="course-test-option"><input type="radio" name="chem-1-9" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>тільки матеріал корпусу</span></label>
</div><p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>
<div class="course-test-actions"><button type="submit" class="course-test-primary">Перевірити</button><button type="button" class="course-test-secondary" data-course-test-reset>Скинути</button></div>
</form>
<p class="course-test-status" aria-live="polite"><strong data-course-test-result>Результат: 0/10</strong><span data-course-test-best>Найкращий результат: -</span></p>
<details class="course-test-answers"><summary>Відповіді</summary><ol><li>1: A</li><li>2: B</li><li>3: C</li><li>4: B</li><li>5: C</li><li>6: A</li><li>7: B</li><li>8: A</li><li>9: C</li><li>10: B</li></ol></details>
</section>
