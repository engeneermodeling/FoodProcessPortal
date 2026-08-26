---
title: "Розділ 12. Перегонка"
course: "bioprocess-engineering"
course_title: "Інжиніринг біопроцесів: процеси та апарати біотехнологічних виробництв"
chapter: 12
description: "Фазова рівновага, проста перегонка, ректифікація бінарних і багатокомпонентних сумішей, екстрактивна та азеотропна ректифікація."
updated: "2026-08-23"
---

## Джерело і межі розділу

Основа матеріалу: підручник «Інжиніринг біопроцесів. Модуль 1. Процеси та апарати біотехнологічних виробництв» за редакцією В.Л. Зав’ялова, НУХТ, 2024.

Матеріал сторінки збережено за логікою відповідного розділу підручника; формулювання тестів додано як навчальний інструмент для перевірки засвоєння.

## Структура матеріалу за підручником

- 12.1. Фазова рівновага
- 12.2. Проста перегонка
- 12.3. Ректифікація бінарних сумішей
- 12.4. Конструкції ректифікаційних апаратів
- 12.5. Ректифікація багатокомпонентних сумішей
- 12.6. Екстрактивна ректифікація
- 12.7. Азеотропна ректифікація

## Матеріал підручника

Матеріал розділу 12 подано як послідовну лекцію: фазова рівновага, проста перегонка, ректифікація, апаратурні рішення та спеціальні варіанти розділення.

### 12.1. Фазова рівновага

Перегонка розділяє киплячі рідкі суміші завдяки різній леткості компонентів. Легколеткий компонент переходить у пару інтенсивніше, тому рівноважна парова фаза збагачується ним порівняно з рідиною. Для ідеальних сумішей використовують закони Рауля і Дальтона, а для реальних систем - експериментальні криві рівноваги.

<div class="equation-block">
  <span class="equation-main">p<sub>A</sub> = P<sub>A</sub>x<sub>A</sub></span>
  <span class="equation-number">(12.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">p = p<sub>A</sub> + p<sub>B</sub></span>
  <span class="equation-number">(12.2)</span>
</div>

![Криві фазової рівноваги](/images/courses/bioprocess-engineering/chapter-12/fig-12-1.webp)
*Рис. 12.1. Криві фазової рівноваги*

### 12.2. Проста перегонка

Проста перегонка є періодичним процесом часткового випаровування суміші з конденсацією пари. Вона придатна для грубого розділення або для систем з істотно різною леткістю компонентів. Дефлегмація повертає частину конденсату і покращує збагачення пари легколетким компонентом.

<div class="equation-block">
  <span class="equation-main">Wx = (W - dW)(x - dx) + dWy</span>
  <span class="equation-number">(12.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dW/W = dx/(y - x)</span>
  <span class="equation-number">(12.4)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ln(W<sub>p</sub>/W<sub>k</sub>) = ∫<sub>xk</sub><sup>xp</sup> dx/(y - x)</span>
  <span class="equation-number">(12.5)</span>
</div>

<div class="equation-block">
  <span class="equation-main">p = p<sub>A</sub> + p<sub>B</sub></span>
  <span class="equation-number">(12.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>A</sub>/m<sub>B</sub> = p<sub>A</sub>M<sub>A</sub>/(p<sub>B</sub>M<sub>B</sub>)</span>
  <span class="equation-number">(12.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>v</sub> = m<sub>w</sub>p<sub>v</sub>M<sub>v</sub>/(p<sub>w</sub>M<sub>w</sub>)</span>
  <span class="equation-number">(12.8)</span>
</div>

![Одноразова проста перегонка](/images/courses/bioprocess-engineering/chapter-12/fig-12-2.webp)
*Рис. 12.2. Одноразова проста перегонка*

![Проста перегонка з дефлегмацією](/images/courses/bioprocess-engineering/chapter-12/fig-12-3.webp)
*Рис. 12.3. Проста перегонка з дефлегмацією*

### 12.3. Ректифікація бінарних сумішей

Ректифікація багаторазово повторює контакт нерівноважних потоків пари і рідини в колоні. Робочі лінії концентраційної та виснажної частин, флегмове число і кількість теоретичних тарілок визначають ступінь розділення та витрати енергії.

<div class="equation-block">
  <span class="equation-main">M = D + R</span>
  <span class="equation-number">(12.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Mx<sub>M</sub> = Dx<sub>D</sub> + Rx<sub>R</sub></span>
  <span class="equation-number">(12.10)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = M(x<sub>M</sub> - x<sub>R</sub>)/(x<sub>D</sub> - x<sub>R</sub>)</span>
  <span class="equation-number">(12.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">R = M(x<sub>D</sub> - x<sub>M</sub>)/(x<sub>D</sub> - x<sub>R</sub>)</span>
  <span class="equation-number">(12.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Gy = fx + Dx<sub>D</sub></span>
  <span class="equation-number">(12.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = (f/G)x + (D/G)x<sub>D</sub></span>
  <span class="equation-number">(12.14)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = [ν/(ν + 1)]x + x<sub>D</sub>/(ν + 1)</span>
  <span class="equation-number">(12.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Lx = Gy + Rx<sub>R</sub></span>
  <span class="equation-number">(12.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = (L/G)x - (R/G)x<sub>R</sub></span>
  <span class="equation-number">(12.17)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = [L/(L - R)]x - [R/(L - R)]x<sub>R</sub></span>
  <span class="equation-number">(12.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = (L/G)(x - x<sub>R</sub>)</span>
  <span class="equation-number">(12.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = f(x)</span>
  <span class="equation-number">(12.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = (ν/(ν + 1))x + x<sub>D</sub>/(ν + 1)</span>
  <span class="equation-number">(12.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x = [(ν + 1)y - x<sub>D</sub>]/ν</span>
  <span class="equation-number">(12.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = Ax + B</span>
  <span class="equation-number">(12.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">B<sub>max</sub> = x<sub>D</sub>/(ν<sub>min</sub> + 1)</span>
  <span class="equation-number">(12.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ν = x<sub>D</sub>/B - 1</span>
  <span class="equation-number">(12.25)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ν<sub>min</sub> = (x<sub>D</sub> - y<sub>M</sub>)/(y<sub>M</sub> - x<sub>M</sub>)</span>
  <span class="equation-number">(12.26)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = A<sub>1</sub>x - B<sub>1</sub></span>
  <span class="equation-number">(12.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D<sub>col</sub> = √(4V/(πw))</span>
  <span class="equation-number">(12.28)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Mi<sub>M</sub> + Pi<sub>P</sub> + fi<sub>f</sub> = Gi<sub>G</sub> + Ri<sub>R</sub> + Q</span>
  <span class="equation-number">(12.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">P = [M(i<sub>R</sub> - i<sub>M</sub>) + D(ν + 1)i<sub>G</sub> - D(νi<sub>f</sub> + i<sub>D</sub>) + Q]/(i<sub>P</sub> - i<sub>R</sub>)</span>
  <span class="equation-number">(12.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Mi<sub>M</sub> + Pi<sub>P</sub> + fi<sub>f</sub> = Gi<sub>G</sub> + Ri<sub>R</sub> + Pi<sub>P</sub> + Q</span>
  <span class="equation-number">(12.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">P = [M(i<sub>R</sub> - i<sub>M</sub>) + D(ν + 1)i<sub>G</sub> - D(νi<sub>f</sub> + i<sub>D</sub>) + Q<sub>loss</sub>]/(i<sub>P</sub> - i<sub>R</sub>)</span>
  <span class="equation-number">(12.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Mi<sub>M</sub> + Pi<sub>P</sub> = Di<sub>D</sub> + Ri<sub>R</sub> + Q</span>
  <span class="equation-number">(12.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">P = [M(i<sub>R</sub> - i<sub>M</sub>) + D(i<sub>D</sub> - i<sub>R</sub>) + Q<sub>loss</sub>]/(i<sub>P</sub> - i<sub>R</sub>)</span>
  <span class="equation-number">(12.34)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q<sub>def</sub> = G(i<sub>G</sub> - i<sub>D</sub>) = D(ν + 1)(i<sub>G</sub> - i<sub>D</sub>)</span>
  <span class="equation-number">(12.35)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q<sub>cond</sub> = (G - D)(i<sub>G</sub> - i<sub>D</sub>) = Dν(i<sub>G</sub> - i<sub>D</sub>)</span>
  <span class="equation-number">(12.36)</span>
</div>

![Ректифікаційна установка періодичної дії](/images/courses/bioprocess-engineering/chapter-12/fig-12-4.webp)
*Рис. 12.4. Ректифікаційна установка періодичної дії*

![Схеми ректифікаційних установок безперервної дії](/images/courses/bioprocess-engineering/chapter-12/fig-12-5.webp)
*Рис. 12.5. Схеми ректифікаційних установок безперервної дії*

![Матеріальні потоки повної ректифікаційної колони](/images/courses/bioprocess-engineering/chapter-12/fig-12-6.webp)
*Рис. 12.6. Матеріальні потоки повної ректифікаційної колони*

![Визначення кількості теоретичних тарілок](/images/courses/bioprocess-engineering/chapter-12/fig-12-7.webp)
*Рис. 12.7. Визначення кількості теоретичних тарілок*

![Вплив флегмового числа на кількість тарілок](/images/courses/bioprocess-engineering/chapter-12/fig-12-8-9.webp)
*Рис. 12.8-9. Вплив флегмового числа на кількість тарілок*

![Схеми теплових потоків колон](/images/courses/bioprocess-engineering/chapter-12/fig-12-10.webp)
*Рис. 12.10. Схеми теплових потоків колон*

### 12.4. Конструкції ректифікаційних апаратів

Ректифікаційні колони бувають тарілчастими, насадковими і плівковими. Вибір залежить від продуктивності, допустимого гідравлічного опору, схильності середовища до забруднення, діапазону навантажень і вимог до якості розділення.

![Конструкції тарілок](/images/courses/bioprocess-engineering/chapter-12/fig-12-11.webp)
*Рис. 12.11. Конструкції тарілок*

![Схема насадкової колони](/images/courses/bioprocess-engineering/chapter-12/fig-12-12.webp)
*Рис. 12.12. Схема насадкової колони*

![Схема плівкової колони](/images/courses/bioprocess-engineering/chapter-12/fig-12-13.webp)
*Рис. 12.13. Схема плівкової колони*

![Залежність ККД тарілок від швидкості пари](/images/courses/bioprocess-engineering/chapter-12/fig-12-14.webp)
*Рис. 12.14. Залежність ККД тарілок від швидкості пари*

### 12.5. Ректифікація багатокомпонентних сумішей

Для багатокомпонентних сумішей одну колону зазвичай використовують для поділу на два продукти або фракції. Повне розділення n компонентів потребує системи колон, а в спиртових виробництвах часто відбирають головну, сивушну фракції, ректифікований спирт і кубовий залишок.

![Схеми розділення багатокомпонентних сумішей](/images/courses/bioprocess-engineering/chapter-12/fig-12-15.webp)
*Рис. 12.15. Схеми розділення багатокомпонентних сумішей*

![Установки для ректифікації спиртових сумішей](/images/courses/bioprocess-engineering/chapter-12/fig-12-16.webp)
*Рис. 12.16. Установки для ректифікації спиртових сумішей*

### 12.6. Екстрактивна ректифікація

Екстрактивна ректифікація застосовує додатковий висококиплячий розділювальний агент, який змінює відносну леткість компонентів і дає змогу розділяти близькокиплячі або азеотропні суміші.

![Схеми екстрактивної та сольової ректифікації](/images/courses/bioprocess-engineering/chapter-12/fig-12-17.webp)
*Рис. 12.17. Схеми екстрактивної та сольової ректифікації*

### 12.7. Азеотропна ректифікація

Азеотропна ректифікація використовує третій компонент, що утворює новий азеотроп і виводить один із компонентів із системи. Після конденсації та розшарування фази повертають або відбирають згідно з технологічною схемою.

![Схема установки для азеотропної ректифікації](/images/courses/bioprocess-engineering/chapter-12/fig-12-18.webp)
*Рис. 12.18. Схема установки для азеотропної ректифікації*

## Після опрацювання розділу студент має вміти

- пояснювати роль поняття «фазова рівновага» у межах розділу;
- пов'язувати «флегмове число» з апаратурним оформленням біотехнологічного виробництва;
- розрізняти основні параметри, що впливають на «тарілка»;
- обґрунтовувати вибір або оцінку процесу через «ректифікаційна колона».

## Тест для самоперевірки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="uk"
  data-course="bioprocess-engineering"
  data-chapter="chapter-12-distillation"
  data-result-label="Результат"
  data-best-label="Найкращий результат"
  data-choose-label="Оберіть відповідь."
  data-correct-label="Правильно."
  data-incorrect-label="Потрібно повторити."
>
<form data-course-test-form>
<fieldset class="course-test-item" data-course-test-item>
<legend>1. Яке поняття найкраще характеризує зміст розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-0" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>фазова рівновага</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>флегмове число</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>тарілка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>ректифікаційна колона</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Який підрозділ безпосередньо входить до структури розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>12.2. Проста перегонка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-1" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>12.1. Фазова рівновага</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>12.3. Ректифікація бінарних сумішей</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>12.4. Конструкції ректифікаційних апаратів</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На яке поняття передусім спирається інженерний аналіз цього розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>фазова рівновага</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>тарілка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-2" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>флегмове число</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>ректифікаційна колона</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Що найтісніше пов'язує теорію процесу з апаратурним оформленням?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>фазова рівновага</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>флегмове число</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>тарілка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-3" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>ректифікаційна колона</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-4" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>тарілка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>фазова рівновага</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>флегмове число</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>ректифікаційна колона</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. З якої теми починається розділ за структурою підручника?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>12.2. Проста перегонка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-5" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>12.1. Фазова рівновага</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>12.3. Ректифікація бінарних сумішей</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>12.4. Конструкції ректифікаційних апаратів</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Який підрозділ безпосередньо входить до структури розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>12.1. Фазова рівновага</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>12.3. Ректифікація бінарних сумішей</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-6" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>12.2. Проста перегонка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>12.4. Конструкції ректифікаційних апаратів</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Яка тема завершує структуру розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>12.1. Фазова рівновага</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>12.2. Проста перегонка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>12.3. Ректифікація бінарних сумішей</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-7" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>12.7. Азеотропна ректифікація</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Яку пару понять доцільно зіставляти під час самоперевірки?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-8" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>фазова рівновага / флегмове число</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>тарілка / ректифікаційна колона</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>фазова рівновага / тарілка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>флегмове число / ректифікаційна колона</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Що найкраще підходить для практичного обґрунтування вибору процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>фазова рівновага</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-9" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>ректифікаційна колона</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>флегмове число</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>тарілка</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>фазова рівновага</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>тарілка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-10" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>флегмове число</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>ректифікаційна колона</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Який об'єкт подано як наочний рисунок у цьому розділі?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>фазова рівновага</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>флегмове число</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>тарілка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-11" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Криві фазової рівноваги</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>
<div class="course-test-actions">
  <button type="submit" class="course-test-primary">Перевірити</button>
  <button type="button" class="course-test-secondary" data-course-test-reset>Скинути</button>
</div>
</form>
<p class="course-test-status" aria-live="polite">
  <strong data-course-test-result>Результат: 0/12</strong>
  <span data-course-test-best>Найкращий результат: -</span>
</p>
<details class="course-test-answers">
<summary>Відповіді</summary>
<ol>
<li>Питання 1: Правильна відповідь - A</li>
<li>Питання 2: Правильна відповідь - B</li>
<li>Питання 3: Правильна відповідь - C</li>
<li>Питання 4: Правильна відповідь - D</li>
<li>Питання 5: Правильна відповідь - A</li>
<li>Питання 6: Правильна відповідь - B</li>
<li>Питання 7: Правильна відповідь - C</li>
<li>Питання 8: Правильна відповідь - D</li>
<li>Питання 9: Правильна відповідь - A</li>
<li>Питання 10: Правильна відповідь - B</li>
<li>Питання 11: Правильна відповідь - C</li>
<li>Питання 12: Правильна відповідь - D</li>
</ol>
</details>
</section>

## Подальше опрацювання

На наступному проході цей розділ можна деталізувати формулами, прикладами розрахунку, рисунками апаратів і посиланнями на сучасні біотехнологічні виробництва.
