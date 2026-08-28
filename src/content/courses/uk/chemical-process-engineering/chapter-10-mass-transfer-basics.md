---
title: "Розділ 10. Основи масопередачі"
course: "chemical-process-engineering"
course_title: "Процеси і апарати хімічних виробництв"
chapter: 10
description: "Молекулярна і конвективна дифузія, масопередача, теорії масопередачі, критерії подібності та термодифузія."
updated: "2026-08-23"
---

## Фокус розділу

У цьому розділі послідовно розглянуто ключові поняття, рівняння та апаратурні рішення за темою.

## Структура матеріалу розділу

- 10.1. Загальні відомості
- 10.2. Молекулярна дифузія
- 10.3. Конвективна дифузія
- 10.4. Масопередача
- 10.5. Подібність дифузійних процесів
- 10.6. Поняття про термодифузію

## Матеріал розділу

Матеріал відповідає логіці розділу 10 цього курсу: спочатку вводяться масообмінні процеси, далі розглядаються молекулярна і конвективна дифузія, масовіддача, масопередача, критерії подібності та термодифузія.

### 10.1. Загальні відомості

Масообмінними, або дифузійними, називають процеси перерозподілу маси між фазами та всередині фаз, зумовлені прагненням системи до фізико-хімічної рівноваги. Рушійною силою є різниця між фактичною концентрацією компонента в даній фазі та його рівноважною концентрацією.

До масообмінних процесів належать абсорбція, ректифікація, сушіння, адсорбція, десорбція, іонний обмін, екстрагування, кристалізація, розчинення та рідинна екстракція. У хімічних і харчових виробництвах вони потрібні для очищення, концентрування, виділення цільових компонентів і підготовки продуктів до зберігання.

Під час розрахунку аналізують три блоки: фазову рівновагу, робочі умови за матеріальними балансами і кінетику перенесення маси. Кінетика пов'язана з конструкцією апарата, бо саме гідродинамічний режим визначає реальну швидкість перенесення.

<div class="equation-block">
  <span class="equation-main">M = dm/dτ</span>
  <span class="equation-number">(10.1)</span>
</div>

Питомий потік маси відносять до поверхні масопередачі або до робочого об'єму апарата:

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

де C - концентрація цільового компонента, кг/м3; f = F/V - питома поверхня масопередачі. У реальному апараті M, q, qV, C і f є середніми величинами, бо дисипація енергії та активна поверхня розподілені нерівномірно.

### 10.2. Молекулярна дифузія

Молекулярна дифузія є перенесенням речовини внаслідок хаотичного теплового руху молекул у напрямку з меншою концентрацією. Навколо джерела речовини виникає поле концентрацій та ізоконцентраційні поверхні; найбільша зміна концентрації спостерігається за нормаллю до такої поверхні.

![До визначення градієнта концентрацій](/images/courses/chemical-process-engineering/chapter-10/fig-10-1.webp)
*Рис. 10.1. До визначення градієнта концентрацій*

Перший закон Фіка для усталеної молекулярної дифузії:

<div class="equation-block">
  <span class="equation-main">q = -D dC/dn</span>
  <span class="equation-number">(10.5)</span>
</div>

Коефіцієнт молекулярної дифузії D залежить від властивостей речовин, температури, тиску і концентрації. Для газів його часто оцінюють за молекулярно-кінетичними залежностями:

<div class="equation-block">
  <span class="equation-main">D = wl</span>
  <span class="equation-number">(10.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = [4.35 · 10<sup>-4</sup>T<sup>3/2</sup> / p(V<sub>A</sub><sup>1/3</sup> + V<sub>B</sub><sup>1/3</sup>)<sup>2</sup>] √(1/M<sub>A</sub> + 1/M<sub>B</sub>)</span>
  <span class="equation-number">(10.7)</span>
</div>

Для перерахунку табличних значень коефіцієнта дифузії на інші умови використовують температурно-тискові поправки:

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

### 10.3. Конвективна дифузія

У рухомому середовищі речовина переноситься не лише молекулами, а й разом із потоком. Конвективна дифузія поєднує молекулярний механізм із макроперенесенням середовищем.

<div class="equation-block">
  <span class="equation-main">q = Cw</span>
  <span class="equation-number">(10.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = q<sub>D</sub> + q<sub>c</sub></span>
  <span class="equation-number">(10.12)</span>
</div>

Сумарний процес часто описують через ефективний коефіцієнт дифузії:

<div class="equation-block">
  <span class="equation-main">q = -D<sub>cp</sub> dC/dn</span>
  <span class="equation-number">(10.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D<sub>t</sub> = w′l</span>
  <span class="equation-number">(10.14)</span>
</div>

### 10.4. Масопередача

Масовіддача описує перенесення компонента від ядра однієї фази до межі поділу фаз або від межі поділу в ядро іншої фази. Для тонкої примежової плівки потік визначають за законом Фіка:

<div class="equation-block">
  <span class="equation-main">q = -D dC/dn</span>
  <span class="equation-number">(10.15)</span>
</div>

У технічних розрахунках застосовують коефіцієнт масовіддачі β:

<div class="equation-block">
  <span class="equation-main">q = βΔC</span>
  <span class="equation-number">(10.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = β(C - C<sub>p</sub>)F</span>
  <span class="equation-number">(10.17)</span>
</div>

![Примежові плівки біля межі поділу фаз](/images/courses/chemical-process-engineering/chapter-10/fig-10-2.webp)
*Рис. 10.2. Схема примежових плівок біля межі поділу фаз*

<div class="equation-block">
  <span class="equation-main">β = D/δ</span>
  <span class="equation-number">(10.18)</span>
</div>

![Структура турбулентного потоку](/images/courses/chemical-process-engineering/chapter-10/fig-10-3.webp)
*Рис. 10.3. Структура турбулентного потоку: 1 - основний потік; 2 - примежовий підшар; 3 - в'язкий підшар; 4 - дифузійний підшар; 5 - тверда фаза*

Плівкова теорія спрощує реальну картину, але пояснює роль примежового шару. Теорія оновлення поверхні пов'язує масовіддачу з часом контакту елементів поверхні, а теорія проникнення враховує нестаціонарність перенесення.

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

Масопередача між двома фазами записується через загальний коефіцієнт K і загальну рушійну силу:

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

Для апаратних розрахунків потік інтегрують по поверхні або по об'єму контакту фаз:

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

### 10.5. Подібність дифузійних процесів

Подібність дифузійних процесів дає змогу переносити результати дослідів і моделей на промислові апарати. Основні критерії враховують масовіддачу, молекулярну дифузію, в'язкість і швидкість потоку.

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

Зв'язок Pe′ = RePr′ показує, що конвективне перенесення визначається одночасно гідродинамікою потоку та дифузійними властивостями системи.

### 10.6. Поняття про термодифузію

Термодифузія виникає тоді, коли на перенесення речовини, крім градієнта концентрації, впливають градієнти температури і тиску. У хімічних апаратах це важливо для зон нагрівання, охолодження, стерилізації та концентрування.

<div class="equation-block">
  <span class="equation-main">q = -D(∂C/∂n + K<sub>t</sub>/T · ∂T/∂n + K<sub>b</sub>/p · ∂p/∂n)</span>
  <span class="equation-number">(10.43)</span>
</div>

## Після опрацювання розділу студент має вміти

- пояснювати роль поняття «дифузія» у межах розділу;
- пов'язувати «масовіддача» з апаратурним оформленням хімічного виробництва;
- розрізняти основні параметри, що впливають на «масопередача»;
- обґрунтовувати вибір або оцінку процесу через «рушійна сила».

## Тест для самоперевірки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="uk"
  data-course="chemical-process-engineering"
  data-chapter="chapter-10-mass-transfer-basics"
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
  <input type="radio" name="course-test-10-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>масовіддача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>масопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>дифузія</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>рушійна сила</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Який підрозділ безпосередньо входить до структури розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>10.2. Молекулярна дифузія</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>10.3. Конвективна дифузія</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>10.4. Масопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>10.1. Загальні відомості</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На яке поняття передусім спирається інженерний аналіз цього розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>масовіддача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>дифузія</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>масопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>рушійна сила</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Що найтісніше пов'язує теорію процесу з апаратурним оформленням?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>дифузія</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>рушійна сила</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>масовіддача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>масопередача</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>дифузія</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>масовіддача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>масопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>рушійна сила</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. З якої теми починається розділ за структурою розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>10.2. Молекулярна дифузія</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>10.3. Конвективна дифузія</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>10.4. Масопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>10.1. Загальні відомості</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Який підрозділ безпосередньо входить до структури розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>10.2. Молекулярна дифузія</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>10.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>10.3. Конвективна дифузія</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>10.4. Масопередача</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Яка тема завершує структуру розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>10.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>10.6. Поняття про термодифузію</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>10.2. Молекулярна дифузія</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>10.3. Конвективна дифузія</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Яку пару понять доцільно зіставляти під час самоперевірки?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>масопередача / рушійна сила</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>дифузія / масопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>дифузія / масовіддача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>масовіддача / рушійна сила</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Що найкраще підходить для практичного обґрунтування вибору процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>дифузія</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>масовіддача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>масопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>рушійна сила</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>масовіддача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>дифузія</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>масопередача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>рушійна сила</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Який об'єкт подано як наочний рисунок у цьому розділі?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>дифузія</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Градієнт концентрації</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>масовіддача</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>масопередача</span>
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
<li>Питання 1: Правильна відповідь - C</li>
<li>Питання 2: Правильна відповідь - D</li>
<li>Питання 3: Правильна відповідь - A</li>
<li>Питання 4: Правильна відповідь - B</li>
<li>Питання 5: Правильна відповідь - C</li>
<li>Питання 6: Правильна відповідь - D</li>
<li>Питання 7: Правильна відповідь - A</li>
<li>Питання 8: Правильна відповідь - B</li>
<li>Питання 9: Правильна відповідь - C</li>
<li>Питання 10: Правильна відповідь - D</li>
<li>Питання 11: Правильна відповідь - A</li>
<li>Питання 12: Правильна відповідь - B</li>
</ol>
</details>
</section>

