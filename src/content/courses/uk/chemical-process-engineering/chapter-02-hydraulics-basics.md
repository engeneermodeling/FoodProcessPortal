---
title: "Розділ 2. Основи гідравліки"
course: "chemical-process-engineering"
course_title: "Процеси і апарати хімічних виробництв"
chapter: 2
description: "Гідростатика, рух рідин, рівняння Бернуллі, втрати напору та насосні установки."
updated: "2026-08-27"
---

## Фокус розділу

Гідравлічні закономірності потрібні для розрахунку трубопроводів, резервуарів, реакторів, теплообмінників, насосів і систем подавання сировини та енергоносіїв.

## Структура розділу

- 2.1. Гідростатика і вимірювання тиску
- 2.2. Гідродинаміка та рівняння Бернуллі
- 2.3. Режими руху і гідравлічні опори
- 2.4. Насосні установки

## 2.1. Гідростатика

Гідростатика вивчає рівновагу рідин. У межах інженерного розрахунку рідину розглядають як суцільне середовище, а тиск у точці діє нормально до будь-якої площадки. Для елементарного об'єму умови рівноваги записують диференціальними рівняннями Ейлера:

<div class="equation-block">
  <span class="equation-main">ρX − ∂p/∂x = 0;&nbsp;&nbsp; ρY − ∂p/∂y = 0;&nbsp;&nbsp; ρZ − ∂p/∂z = 0</span>
  <span class="equation-number">(2.1)</span>
</div>

де $p$ — тиск, $ρ$ — густина, $X$, $Y$, $Z$ — проекції масової сили на координатні осі.

Якщо діє лише сила тяжіння, основне рівняння гідростатики має вигляд:

<div class="equation-block">
  <span class="equation-main">z + p/(ρg) = const</span>
  <span class="equation-number">(2.2)</span>
</div>

Для двох точок нерухомої рідини:

<div class="equation-block">
  <span class="equation-main">z<sub>1</sub> + p<sub>1</sub>/(ρg) = z<sub>2</sub> + p<sub>2</sub>/(ρg)</span>
  <span class="equation-number">(2.3)</span>
</div>

![Схема до виведення рівнянь рівноваги](/images/courses/chemical-process-engineering/chapter-02/fig-2-1.webp)
*Рис. 2.1. Елементарний об'єм рідини в полі сил.*

Закон Паскаля стверджує: зовнішній тиск, прикладений до рідини, передається однаково в усіх напрямках. Тиск на глибині $h$ під вільною поверхнею:

<div class="equation-block">
  <span class="equation-main">p = p<sub>0</sub> + ρgh</span>
  <span class="equation-number">(2.4)</span>
</div>

![Схема основного рівняння гідростатики](/images/courses/chemical-process-engineering/chapter-02/fig-2-2.webp)
*Рис. 2.2. Розподіл тиску в нерухомій рідині.*

Абсолютний тиск складається з атмосферного та надлишкового. Надлишковий тиск визначають манометром, а тиск нижче атмосферного — вакуумметром. У хімічних апаратах контроль тиску потрібен для безпечної роботи реакторів, колон, випарників і резервуарів.

![Ілюстрація закону Паскаля](/images/courses/chemical-process-engineering/chapter-02/fig-2-3.webp)
*Рис. 2.3. Передавання тиску в рідині.*

## 2.2. Гідродинаміка

Гідродинаміка вивчає рух рідин і газів. Для нестисливої рідини рівняння нерозривності потоку:

<div class="equation-block">
  <span class="equation-main">Q = w<sub>1</sub>F<sub>1</sub> = w<sub>2</sub>F<sub>2</sub> = const</span>
  <span class="equation-number">(2.5)</span>
</div>

Для стисливого середовища сталою є масова витрата:

<div class="equation-block">
  <span class="equation-main">ṁ = ρ<sub>1</sub>w<sub>1</sub>F<sub>1</sub> = ρ<sub>2</sub>w<sub>2</sub>F<sub>2</sub> = const</span>
  <span class="equation-number">(2.6)</span>
</div>

Тут $Q$ — об'ємна витрата, $ṁ$ — масова витрата, $w$ — середня швидкість, $F$ — площа перерізу.

Для ідеальної рідини рівняння Бернуллі на одиницю маси:

<div class="equation-block">
  <span class="equation-main">z<sub>1</sub> + p<sub>1</sub>/(ρg) + w<sub>1</sub><sup>2</sup>/(2g) = z<sub>2</sub> + p<sub>2</sub>/(ρg) + w<sub>2</sub><sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.7)</span>
</div>

Для реальної рідини враховують втрати напору $h_{вт}$:

<div class="equation-block">
  <span class="equation-main">z<sub>1</sub> + p<sub>1</sub>/(ρg) + w<sub>1</sub><sup>2</sup>/(2g) = z<sub>2</sub> + p<sub>2</sub>/(ρg) + w<sub>2</sub><sup>2</sup>/(2g) + h<sub>вт</sub></span>
  <span class="equation-number">(2.8)</span>
</div>

![Схема до рівняння Бернуллі](/images/courses/chemical-process-engineering/chapter-02/fig-2-5.webp)
*Рис. 2.4. Енергетичний баланс потоку між двома перерізами.*

Для витікання через отвір без урахування опорів:

<div class="equation-block">
  <span class="equation-main">w = √(2gH)</span>
  <span class="equation-number">(2.9)</span>
</div>

Дійсна витрата менша за теоретичну і визначається коефіцієнтом витрати $α$:

<div class="equation-block">
  <span class="equation-main">Q = αF<sub>0</sub>√(2gH)</span>
  <span class="equation-number">(2.10)</span>
</div>

## 2.3. Режими руху та опори

Режим течії визначають числом Рейнольдса:

<div class="equation-block">
  <span class="equation-main">Re = wd/ν = ρwd/μ</span>
  <span class="equation-number">(2.11)</span>
</div>

За малих $Re$ рух ламінарний, за великих — турбулентний. Для круглої труби гідравлічний радіус $R_h=F/Π$, а еквівалентний діаметр:

<div class="equation-block">
  <span class="equation-main">d<sub>екв</sub> = 4F/Π</span>
  <span class="equation-number">(2.12)</span>
</div>

![Схема установки для спостереження режимів руху](/images/courses/chemical-process-engineering/chapter-02/fig-2-7.webp)
*Рис. 2.5. Візуальне визначення ламінарного і турбулентного руху.*

Повні втрати напору складаються з втрат по довжині та місцевих втрат:

<div class="equation-block">
  <span class="equation-main">h<sub>вт</sub> = (λl/d + Σξ)w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.13)</span>
</div>

Для гладких труб у перехідній області часто використовують залежність Блазіуса $λ=0{,}3164Re^{-0{,}25}$. Місцеві опори створюють входи, виходи, коліна, арматура, раптові звуження та розширення.

![До залежностей ламінарного руху](/images/courses/chemical-process-engineering/chapter-02/fig-2-8.webp)
*Рис. 2.6. Розподіл швидкості та гідравлічний опір у трубі.*

## 2.4. Насосні установки

Насос переміщує рідину, створюючи потрібний напір. Робоча точка установки є перетином характеристики насоса і характеристики трубопроводу. Потужність на валу насоса:

<div class="equation-block">
  <span class="equation-main">N = ρgQH/η</span>
  <span class="equation-number">(2.14)</span>
</div>

Потрібний напір для переміщення рідини між двома апаратами:

<div class="equation-block">
  <span class="equation-main">H = (z<sub>2</sub> − z<sub>1</sub>) + (p<sub>2</sub> − p<sub>1</sub>)/(ρg) + h<sub>вт</sub></span>
  <span class="equation-number">(2.15)</span>
</div>

Під час вибору насоса перевіряють подачу, напір, ККД, допустиму висоту всмоктування, сумісність матеріалів із середовищем і можливість безпечної роботи за заданої температури та тиску.

## Підсумок

Гідравлічний розрахунок пов'язує властивості середовища, геометрію трубопроводу, швидкість потоку та енергетичні витрати. Рівняння нерозривності визначає зв'язок витрати зі швидкістю, рівняння Бернуллі — баланс напорів, а число Рейнольдса — режим руху.

## Тест для самоперевірки

<section class="course-self-test" data-course-self-test data-locale="uk" data-course="chemical-process-engineering" data-chapter="chapter-02-hydraulics-basics" data-pass="8">
<h2>Тест до розділу</h2>
<p>Питання перемішуються автоматично. Для зарахування потрібно набрати щонайменше 8 правильних відповідей з 10.</p>
<form data-course-test-form>
<fieldset class="course-test-item" data-course-test-item><legend>1. Що вивчає гідростатика?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem2-uk-1" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>рівновагу рідин</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-1" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>лише теплообмін</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-1" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>подрібнення</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-1" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>сушіння</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>2. Яке рівняння описує нерозривність потоку?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem2-uk-2" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>p = p<sub>0</sub> + ρgh</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-2" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>Q = wF = const</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-2" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>N = ρgQH/η</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-2" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>Re = wd/ν</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>3. Що показує число Рейнольдса?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem2-uk-3" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>режим руху потоку</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-3" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>теплоту реакції</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-3" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>масу апарата</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-3" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>склад сплаву</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>4. Що враховує рівняння Бернуллі для реальної рідини?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem2-uk-4" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>лише густину</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-4" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>втрати напору</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-4" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>тільки температуру</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-4" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>колір рідини</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>5. Яка величина є рушійною силою насоса?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem2-uk-5" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>лише температура</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-5" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>напір</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-5" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>в'язкість стінки</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-5" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>колір апарата</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>6. Від чого залежать втрати по довжині?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem2-uk-6" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>від довжини, діаметра, швидкості та коефіцієнта тертя</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-6" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>лише від кольору труби</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-6" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>лише від висоти апарата</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-6" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>лише від атмосферного тиску</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>7. Яке співвідношення правильне для потужності насоса?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem2-uk-7" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>N = η/(ρgQH)</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-7" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>N = ρgQH/η</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-7" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>N = Q/(ρgH)</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-7" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>N = ρ/(gQH)</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>8. Що створює місцевий гідравлічний опір?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem2-uk-8" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>однорідна пряма ділянка</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-8" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>коліно, арматура або звуження</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-8" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>густина рідини сама по собі</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-8" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>температура повітря в цеху</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>9. Що відбувається зі швидкістю вужчого перерізу труби?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem2-uk-9" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>вона зростає за сталої витрати</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-9" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>вона завжди падає до нуля</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-9" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>вона не пов'язана з площею</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-9" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>змінюється лише температура</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>10. Що потрібно перевірити під час вибору насоса?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem2-uk-10" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>тільки назву виробника</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-10" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>подачу, напір, ККД і сумісність матеріалів</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-10" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>лише колір корпусу</span></label><label class="course-test-option"><input type="radio" name="chem2-uk-10" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>тільки довжину кабелю</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
</form>
</section>
