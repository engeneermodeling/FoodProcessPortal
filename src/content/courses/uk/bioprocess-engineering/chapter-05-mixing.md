---
title: "Розділ 5. Перемішування"
course: "bioprocess-engineering"
course_title: "Інжиніринг біопроцесів: процеси та апарати біотехнологічних виробництв"
chapter: 5
description: "Перемішування у рідкому середовищі, витрати енергії, ефективність та перемішування сипких і пластичних матеріалів."
updated: "2026-08-23"
---

## Джерело і межі розділу

Основа матеріалу: підручник «Інжиніринг біопроцесів. Модуль 1. Процеси та апарати біотехнологічних виробництв» за редакцією В.Л. Зав’ялова, НУХТ, 2024.

Матеріал сторінки збережено за логікою відповідного розділу підручника; формулювання тестів додано як навчальний інструмент для перевірки засвоєння.

## Структура матеріалу за підручником

- 5.1. Загальні відомості
- 5.2. Перемішування у рідкому середовищі
- 5.3. Витрати енергії на механічне перемішування
- 5.4. Оцінювання ефективності перемішування
- 5.5. Перемішування сипких і пластичних матеріалів

## Матеріал підручника

### 5.1. Загальні відомості

Перемішування застосовують для вирівнювання концентрації, температури й фізичних властивостей середовища, інтенсифікації тепло- і масообміну, підтримання твердих частинок у завислому стані, диспергування газу або рідини та прискорення біохімічних реакцій. У біотехнологічних апаратах воно має ще одну важливу вимогу: забезпечити потрібний обмін, але не пошкодити клітини, ферменти або чутливі білкові продукти.

Механічне перемішування створюється обертовими мішалками, пневматичне - потоком газу, циркуляційне - насосним або струминним рухом рідини. Для сипких і пластичних матеріалів застосовують лопатеві, шнекові, барабанні та комбіновані змішувачі.

### 5.2. Перемішування у рідкому середовищі

У рідких середовищах перемішування визначається типом мішалки, частотою обертання, формою апарата, наявністю відбивних перегородок, в'язкістю середовища і газонасиченням. Відбивні перегородки руйнують круговий рух рідини й допомагають сформувати осьову та радіальну циркуляцію.

![Рис. 5.2. Приклад механічного перемішування](/images/courses/bioprocess-engineering/chapter-05/fig-5-2.webp)

![Рис. 5.3. Схеми потоків у апаратах з відбивними перегородками і мішалками](/images/courses/bioprocess-engineering/chapter-05/fig-5-3.webp)

### 5.3. Витрати енергії на механічне перемішування

Під час механічного перемішування рідина рухається вимушено. Для оцінювання витрат енергії використовують критеріальні залежності, подібні до рівнянь гідродинаміки:

<div class="equation-block">
  <span class="equation-main">Eu = f(Re, Fr, Γ<sub>1</sub>, Γ<sub>2</sub>, ...)</span>
  <span class="equation-number">(5.1)</span>
</div>

Для процесів перемішування вводять модифіковані критерії, де характерною швидкістю є величина, пропорційна коловій швидкості мішалки:

<div class="equation-block">
  <span class="equation-main">Eu<sub>m</sub> = f(Re<sub>m</sub>, Fr<sub>m</sub>, Γ<sub>1</sub>, Γ<sub>2</sub>, ...)</span>
  <span class="equation-number">(5.2)</span>
</div>

У степеневій формі:

<div class="equation-block">
  <span class="equation-main">Eu<sub>m</sub> = C′Re<sub>m</sub><sup>k′</sup>Fr<sub>m</sub><sup>m′</sup>Γ<sub>1</sub><sup>n′</sup>Γ<sub>2</sub><sup>p′</sup>...</span>
  <span class="equation-number">(5.3)</span>
</div>

Якщо впливом сили тяжіння можна знехтувати, наприклад за наявності відбивних перегородок, рівняння спрощують:

<div class="equation-block">
  <span class="equation-main">Eu<sub>m</sub> = CRe<sub>m</sub><sup>k</sup>Γ<sub>1</sub><sup>n</sup>Γ<sub>2</sub><sup>p</sup></span>
  <span class="equation-number">(5.4)</span>
</div>

Експериментальні криві залежності Eu<sub>m</sub> від Re<sub>m</sub> використовують для вибору потужності мішалки.

![Рис. 5.5. Залежність Eu<sub>m</sub> від Re<sub>m</sub> для різних типів мішалок](/images/courses/bioprocess-engineering/chapter-05/fig-5-5.webp)

![Рис. 5.6. Типи мішалок для експериментальних кривих потужності](/images/courses/bioprocess-engineering/chapter-05/fig-5-6.webp)

На основі аналізу розмірностей потужність механічного перемішування записують як функцію в'язкості μ, густини ρ, частоти обертання n і діаметра мішалки d:

<div class="equation-block">
  <span class="equation-main">N = Cμ<sup>x</sup>ρ<sup>y</sup>n<sup>z</sup>d<sup>v</sup></span>
  <span class="equation-number">(5.5)</span>
</div>

Рівняння розмірностей:

<div class="equation-block">
  <span class="equation-main">kg · m<sup>2</sup> · s<sup>-3</sup> = kg<sup>x+y</sup> · s<sup>-x-z</sup> · m<sup>-x-3y+v</sup></span>
  <span class="equation-number">(5.6)</span>
</div>

Після перетворень отримують критеріальну форму:

<div class="equation-block">
  <span class="equation-main">N/(ρn<sup>3</sup>d<sup>5</sup>) = C(ρnd<sup>2</sup>/μ)<sup>-x</sup></span>
  <span class="equation-number">(5.7)</span>
</div>

Або:

<div class="equation-block">
  <span class="equation-main">Eu<sub>m</sub> = CRe<sub>m</sub><sup>k</sup></span>
  <span class="equation-number">(5.8)</span>
</div>

Установлена потужність електродвигуна з урахуванням запасу й поправкових коефіцієнтів:

<div class="equation-block">
  <span class="equation-main">N<sub>v</sub> = 1.3Nf<sub>h</sub>f<sub>r</sub>f<sub>c</sub>f<sub>g</sub>/η</span>
  <span class="equation-number">(5.9)</span>
</div>

Пускова потужність для лопатевої мішалки:

<div class="equation-block">
  <span class="equation-main">N<sub>p</sub> ≈ 1.9ρhn<sup>3</sup>d<sup>4</sup></span>
  <span class="equation-number">(5.10)</span>
</div>

![Рис. 5.8. Схеми лопатевих мішалок](/images/courses/bioprocess-engineering/chapter-05/fig-5-8.webp)

![Рис. 5.9. Лопатева мішалка з планетарним приводом](/images/courses/bioprocess-engineering/chapter-05/fig-5-9.webp)

![Рис. 5.10. Трилопатевий гвинт пропелерної мішалки](/images/courses/bioprocess-engineering/chapter-05/fig-5-10.webp)

![Рис. 5.11. Турбінне колесо з напрямним пристроєм](/images/courses/bioprocess-engineering/chapter-05/fig-5-11.webp)

Для пневматичного перемішування потужність визначають витратою газу V, напором Δp і ККД повітродувки η:

<div class="equation-block">
  <span class="equation-main">N = VΔp/η</span>
  <span class="equation-number">(5.11)</span>
</div>

Напір газу з урахуванням тиску, стовпа рідини та втрат у трубопроводі:

<div class="equation-block">
  <span class="equation-main">Δp = p<sub>0</sub> + ρ<sub>l</sub>gh + (ρ<sub>g</sub>w<sub>g</sub><sup>2</sup>/2)(λl/d + Σξ)</span>
  <span class="equation-number">(5.12)</span>
</div>

Для інженерного розрахунку, коли довжина повітропроводів невідома:

<div class="equation-block">
  <span class="equation-main">Δp = p<sub>0</sub> + 1.2ρ<sub>l</sub>gH</span>
  <span class="equation-number">(5.13)</span>
</div>

Витрата повітря на перемішування:

<div class="equation-block">
  <span class="equation-main">V = KFp/(9.81 · 10<sup>4</sup>)</span>
  <span class="equation-number">(5.14)</span>
</div>

![Рис. 5.14. Схеми барботажного змішувача та барботерів](/images/courses/bioprocess-engineering/chapter-05/fig-5-14.webp)

![Рис. 5.15. Апарати для пневматичного перемішування та аерації](/images/courses/bioprocess-engineering/chapter-05/fig-5-15.webp)

Циркуляційне та струминне перемішування використовує кінетичну енергію потоку, що виходить із сопла або повертається насосом у апарат.

![Рис. 5.16. Схема руху рідини, що виходить із зануреного сопла](/images/courses/bioprocess-engineering/chapter-05/fig-5-16.webp)

![Рис. 5.19. Схема циркуляційного перемішування](/images/courses/bioprocess-engineering/chapter-05/fig-5-19.webp)

### 5.4. Оцінювання ефективності перемішування

Ефективність перемішування оцінюють за часом досягнення потрібної однорідності та за нерівномірністю концентрації контрольного компонента в різних точках апарата. Чим менше відхилення концентрацій від середнього значення, тим якісніше перемішування. Для біореакторів разом з однорідністю враховують рівень зсувних напружень, розподіл розчиненого кисню, піноутворення і локальні зони перегріву або дефіциту субстрату.

### 5.5. Перемішування сипких і пластичних матеріалів

Сипкі та пластичні матеріали перемішують у лопатевих, шнекових, барабанних, стрічкових та інших змішувачах. У таких апаратах важливими є час змішування, рівномірність розподілу компонентів, руйнування грудок, запобігання сегрегації та механічне навантаження на продукт.

![Рис. 5.22. Перемішувальні пристрої для сипких і пластичних мас](/images/courses/bioprocess-engineering/chapter-05/fig-5-22.webp)

## Після опрацювання розділу студент має вміти

- пояснювати роль поняття «мішалка» у межах розділу;
- пов'язувати «циркуляція» з апаратурним оформленням біотехнологічного виробництва;
- розрізняти основні параметри, що впливають на «критерій потужності»;
- обґрунтовувати вибір або оцінку процесу через «однорідність».

## Тест для самоперевірки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="uk"
  data-course="bioprocess-engineering"
  data-chapter="chapter-05-mixing"
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
  <input type="radio" name="course-test-5-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>циркуляція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-0" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>мішалка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>критерій потужності</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>однорідність</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Який підрозділ безпосередньо входить до структури розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>5.2. Перемішування у рідкому середовищі</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>5.3. Витрати енергії на механічне перемішування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-1" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>5.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>5.4. Оцінювання ефективності перемішування</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На яке поняття передусім спирається інженерний аналіз цього розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>мішалка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>критерій потужності</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>однорідність</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-2" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>циркуляція</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Що найтісніше пов'язує теорію процесу з апаратурним оформленням?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-3" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>однорідність</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>мішалка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>циркуляція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>критерій потужності</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>мішалка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-4" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>критерій потужності</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>циркуляція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>однорідність</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. З якої теми починається розділ за структурою підручника?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>5.2. Перемішування у рідкому середовищі</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>5.3. Витрати енергії на механічне перемішування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-5" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>5.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>5.4. Оцінювання ефективності перемішування</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Який підрозділ безпосередньо входить до структури розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>5.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>5.3. Витрати енергії на механічне перемішування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>5.4. Оцінювання ефективності перемішування</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-6" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>5.2. Перемішування у рідкому середовищі</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Яка тема завершує структуру розділу за підручником?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-7" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>5.5. Перемішування сипких і пластичних матеріалів</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>5.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>5.2. Перемішування у рідкому середовищі</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>5.3. Витрати енергії на механічне перемішування</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Яку пару понять доцільно зіставляти під час самоперевірки?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>критерій потужності / однорідність</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-8" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>мішалка / циркуляція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>мішалка / критерій потужності</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>циркуляція / однорідність</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Що найкраще підходить для практичного обґрунтування вибору процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>мішалка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>циркуляція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-9" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>однорідність</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>критерій потужності</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>мішалка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>критерій потужності</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>однорідність</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-10" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>циркуляція</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Який об'єкт подано як наочний рисунок у цьому розділі?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-11" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Механічне перемішування з обертовим робочим органом</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>мішалка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>циркуляція</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>критерій потужності</span>
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
<li>Питання 1: Правильна відповідь - B</li>
<li>Питання 2: Правильна відповідь - C</li>
<li>Питання 3: Правильна відповідь - D</li>
<li>Питання 4: Правильна відповідь - A</li>
<li>Питання 5: Правильна відповідь - B</li>
<li>Питання 6: Правильна відповідь - C</li>
<li>Питання 7: Правильна відповідь - D</li>
<li>Питання 8: Правильна відповідь - A</li>
<li>Питання 9: Правильна відповідь - B</li>
<li>Питання 10: Правильна відповідь - C</li>
<li>Питання 11: Правильна відповідь - D</li>
<li>Питання 12: Правильна відповідь - A</li>
</ol>
</details>
</section>

## Подальше опрацювання

На наступному проході цей розділ можна деталізувати формулами, прикладами розрахунку, рисунками апаратів і посиланнями на сучасні біотехнологічні виробництва.
