---
title: "Розділ 14. Екстрагування"
course: "bioprocess-engineering"
course_title: "Інжиніринг біопроцесів: процеси та апарати біотехнологічних виробництв"
chapter: 14
description: "Екстрагування з твердих тіл, дифузійний опір, розрахунок процесу, інтенсифікація і конструкції екстракторів."
updated: "2026-08-23"
---

## Фокус розділу

У цьому розділі послідовно розглянуто ключові поняття, рівняння та апаратурні рішення за темою.

## Структура матеріалу розділу

- 14.1. Загальні відомості
- 14.2. Екстрагування із твердого тіла
- 14.2.4. Розрахунок екстракційного процесу
- 14.2.5. Методи інтенсифікації
- 14.2.7. Апарати для екстрагування з твердих тіл

## Матеріал розділу

Екстрагування - масообмінний процес вилучення одного або кількох компонентів із твердої чи рідкої складної речовини розчинником, який вибірково розчиняє цільову речовину. У біотехнологічних і харчових виробництвах цей процес використовують для одержання ферментів, екстрактів рослинної сировини, ароматичних, біологічно активних та інших цільових компонентів.

### 14.1. Загальні відомості

В екстрактор подають сировину й екстрагент, а відводять екстракт і залишок твердої фази. За агрегатним станом вихідної фази розрізняють системи тверде тіло - рідина та рідина - рідина. У цьому розділі головний акцент зроблено на твердофазовому екстрагуванні, де результат визначається вибірковістю розчинника, гідромодулем, способом руху фаз і підготовкою сировини.

![Способи оброблення сировини перед екстрагуванням](/images/courses/bioprocess-engineering/chapter-14/fig-14-1.webp)
*Рис. 14.1. Способи оброблення сировини перед екстрагуванням*

![Класифікація екстрагентів](/images/courses/bioprocess-engineering/chapter-14/fig-14-2.webp)
*Рис. 14.2. Класифікація екстрагентів*

### 14.2.1. Дифузійний опір усередині частинки

Швидкість екстрагування прямо пропорційна рушійній силі та обернено пропорційна сумарному опору масоперенесенню. Для капілярно-пористої сировини важливими є руйнування клітинних оболонок, подрібнення, нагрівання, ферментація або інша попередня обробка. Після підготовки основний опір часто створює молекулярна дифузія всередині пор частинки.

![Схема перенесення маси цільового компонента](/images/courses/bioprocess-engineering/chapter-14/fig-14-3.webp)
*Рис. 14.3. Схема перенесення маси цільового компонента*

### 14.2.2. Фізична суть процесу тверде тіло - рідина

Процес складається з проникнення розчинника в пори, розчинення цільового компонента, перенесення речовини всередині частинки до поверхні та масовіддачі в об'єм екстрагента. Якщо внутрішня дифузія повільніша за зовнішню, процес лімітує коефіцієнт внутрішньої дифузії та розмір частинки; якщо повільніша зовнішня стадія, визначальними стають коефіцієнт масовіддачі й товщина приграничного шару.

<div class="equation-block">
  <span class="equation-main">q = L/G</span>
  <span class="equation-number">(14.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = -D<sub>in</sub>Fτ(C<sub>1</sub> - C′<sub>1</sub>)/R</span>
  <span class="equation-number">(14.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M/[Fτ(C<sub>1</sub> - C′<sub>1</sub>)] = D<sub>in</sub>/R</span>
  <span class="equation-number">(14.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M/[Fτ(C′<sub>1</sub> - C<sub>2</sub>)] = D<sub>out</sub>/δ = β</span>
  <span class="equation-number">(14.4)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = [R/D<sub>in</sub> + δ/D<sub>out</sub>]<sup>-1</sup>(C<sub>1</sub> - C<sub>2</sub>)Fτ</span>
  <span class="equation-number">(14.5)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = [R/D<sub>in</sub> + 1/β]<sup>-1</sup>(C<sub>1</sub> - C<sub>2</sub>)Fτ</span>
  <span class="equation-number">(14.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Bi<sub>D</sub> = βR/D<sub>in</sub></span>
  <span class="equation-number">(14.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = (C<sub>p</sub> - C<sub>k</sub>)/(C′<sub>k</sub> - C′<sub>p</sub>)</span>
  <span class="equation-number">(14.8)</span>
</div>

![Екстракційні криві протитечійного і прямотечійного процесів](/images/courses/bioprocess-engineering/chapter-14/fig-14-4.webp)
*Рис. 14.4. Екстракційні криві протитечійного і прямотечійного процесів*

### 14.2.3. Особливості перебігу процесу

Найважливішими схемами взаємодії фаз є протитечія, прямотечія та комбінований рух. Протитечія забезпечує найповніше вилучення цільового компонента, але потребує узгодженого підбору гідромодуля. Надмірна кількість екстрагента збільшує рушійну силу, проте зменшує концентрацію екстракту й підвищує витрати на подальше концентрування.

<div class="equation-block">
  <span class="equation-main">q<sub>i</sub> = (C<sub>i-1</sub> - C<sub>i</sub>)/(C′<sub>i-1</sub> - C′<sub>i</sub>)</span>
  <span class="equation-number">(14.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">∂c/∂τ = D(∂<sup>2</sup>c/∂x<sup>2</sup> + ∂<sup>2</sup>c/∂y<sup>2</sup> + ∂<sup>2</sup>c/∂z<sup>2</sup>)</span>
  <span class="equation-number">(14.10)</span>
</div>

![Трикутна діаграма для системи тверде тіло - рідина](/images/courses/bioprocess-engineering/chapter-14/fig-14-5.webp)
*Рис. 14.5. Трикутна діаграма для системи тверде тіло - рідина*

### 14.2.4. Розрахунок екстракційного процесу

Розрахунок охоплює кінетику внутрішнього й зовнішнього масоперенесення, продуктивність, матеріальний та тепловий баланси, а також графічне визначення кількості теоретичних ступенів. Для інженерних оцінок застосовують критерії Біо, Фур'є, Нуссельта, Прандтля, Рейнольдса і відповідні критеріальні рівняння.

<div class="equation-block">
  <span class="equation-main">q = dG/(Fdτ) = -D dc/dn</span>
  <span class="equation-number">(14.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = kT/(6πμr)</span>
  <span class="equation-number">(14.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = -DFτ(C<sub>1</sub> - C′<sub>1</sub>)/R</span>
  <span class="equation-number">(14.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = βFτ(C′<sub>1</sub> - C<sub>2</sub>)</span>
  <span class="equation-number">(14.14)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = [R/D + 1/β]<sup>-1</sup>(C<sub>1</sub> - C<sub>2</sub>)Fτ</span>
  <span class="equation-number">(14.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Bi<sub>D</sub> = βR/D</span>
  <span class="equation-number">(14.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Fo<sub>D</sub> = Dτ/R<sup>2</sup></span>
  <span class="equation-number">(14.17)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 0.99Pr<sub>D</sub><sup>1/3</sup>Re<sup>1/3</sup></span>
  <span class="equation-number">(14.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 0.99Pr<sub>D</sub><sup>1/3</sup>Re<sup>1/3</sup>[1 + Re/16 + Re<sup>2</sup>ln(Re)/160]</span>
  <span class="equation-number">(14.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = Pr<sub>D</sub><sup>1/3</sup>(0.51Re<sup>0.5</sup> + 0.0224Re<sup>0.78</sup>)</span>
  <span class="equation-number">(14.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 0.0387(Pr<sub>D</sub>Gr)<sup>1/3</sup></span>
  <span class="equation-number">(14.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 0.38Pr<sub>D</sub><sup>0.4</sup>(Re<sup>0.2</sup> + 0.102Re<sup>0.8</sup>)</span>
  <span class="equation-number">(14.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Re = 2dw<sub>f</sub> / [3(1 - ε)ν]</span>
  <span class="equation-number">(14.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 0.8Pr<sub>D</sub><sup>1/3</sup>Re<sup>1/2</sup></span>
  <span class="equation-number">(14.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 4.33 · 10<sup>-3</sup>Re<sup>0.73</sup>Pr<sub>D</sub><sup>0.33</sup></span>
  <span class="equation-number">(14.25)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 3.8 · 10<sup>-4</sup>Re<sup>1.38</sup>Pr<sub>D</sub><sup>0.33</sup></span>
  <span class="equation-number">(14.26)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 1.41 · 10<sup>-2</sup>RePr<sub>D</sub><sup>0.5</sup></span>
  <span class="equation-number">(14.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">∂c/∂τ = D(∂<sup>2</sup>c/∂x<sup>2</sup> + ∂<sup>2</sup>c/∂y<sup>2</sup> + ∂<sup>2</sup>c/∂z<sup>2</sup>) - (w<sub>x</sub>∂c/∂x + w<sub>y</sub>∂c/∂y + w<sub>z</sub>∂c/∂z)</span>
  <span class="equation-number">(14.28)</span>
</div>

### 14.2.4.1. Продуктивність і матеріальний баланс

Продуктивність екстрактора пов'язують із корисним об'ємом, завантаженням твердої фази, тривалістю процесу та кількістю апаратів у батареї. Матеріальні баланси враховують витрати сировини й екстрагента, концентрації цільового компонента у твердій і рідкій фазах, а також набухання сировини та утримання частини розчинника у твердому тілі.

<div class="equation-block">
  <span class="equation-main">G = V<sub>k</sub>Bn/τ</span>
  <span class="equation-number">(14.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L = L<sub>1</sub> + L<sub>2</sub></span>
  <span class="equation-number">(14.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L<sub>2</sub>dy = Ldx</span>
  <span class="equation-number">(14.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L<sub>2</sub>(y<sub>p</sub> - y<sub>k</sub>) = L(x<sub>k</sub> - x<sub>p</sub>)</span>
  <span class="equation-number">(14.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L<sub>2</sub>(y<sub>p</sub> - y) = L(x<sub>k</sub> - x)</span>
  <span class="equation-number">(14.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>p</sub> + W<sub>p</sub> = W<sub>k</sub> + G<sub>k</sub></span>
  <span class="equation-number">(14.34)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>p</sub>x<sub>p</sub> + W<sub>p</sub>y<sub>p</sub> = W<sub>k</sub>y<sub>k</sub> + G<sub>k</sub>x<sub>k</sub></span>
  <span class="equation-number">(14.35)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>p</sub>C<sub>G,p</sub>t<sub>G,p</sub> + W<sub>p</sub>C<sub>W,p</sub>t<sub>W,p</sub> + Q<sub>add</sub> = G<sub>k</sub>C<sub>G,k</sub>t<sub>G,k</sub> + W<sub>k</sub>C<sub>W,k</sub>t<sub>W,k</sub> + Q<sub>loss</sub></span>
  <span class="equation-number">(14.36)</span>
</div>

### 14.2.4.2. Графічне визначення ступенів

Для систем тверде тіло - рідина використовують трикутні діаграми та робочі лінії процесу. Правило важеля дає змогу знайти склад і кількість сумішей, а побудова ступенів між робочою лінією та лінією рівноваги показує потрібну кількість теоретичних ступенів або апаратів у батареї.

<div class="equation-block">
  <span class="equation-main">G<sub>M</sub> · MS = G<sub>N</sub> · SN</span>
  <span class="equation-number">(14.37)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>F</sub> + S<sub>0</sub> = G<sub>R</sub> + S<sub>E</sub></span>
  <span class="equation-number">(14.38)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>F</sub>x<sub>F</sub> + S<sub>0</sub>y<sub>0</sub> = G<sub>R</sub>x<sub>R</sub> + S<sub>E</sub>y<sub>E</sub></span>
  <span class="equation-number">(14.39)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>F</sub> - S<sub>E</sub> = G<sub>i</sub> - S<sub>i+1</sub></span>
  <span class="equation-number">(14.40)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>F</sub>x<sub>F</sub> - S<sub>E</sub>y<sub>E</sub> = G<sub>i</sub>x<sub>i</sub> - S<sub>i+1</sub>y<sub>i+1</sub></span>
  <span class="equation-number">(14.41)</span>
</div>

<div class="equation-block">
  <span class="equation-main">P = G<sub>F</sub> - S<sub>E</sub> = G<sub>1</sub> - S<sub>2</sub> = G<sub>R</sub> - S<sub>0</sub></span>
  <span class="equation-number">(14.42)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Px<sub>P</sub> = G<sub>F</sub>x<sub>F</sub> - S<sub>E</sub>y<sub>E</sub> = G<sub>1</sub>x<sub>1</sub> - S<sub>2</sub>y<sub>2</sub> = ... = G<sub>R</sub>x<sub>R</sub> - S<sub>0</sub>y<sub>0</sub></span>
  <span class="equation-number">(14.43)</span>
</div>

![Визначення складу та кількості утворених сумішей](/images/courses/bioprocess-engineering/chapter-14/fig-14-6.webp)
*Рис. 14.6. Визначення складу та кількості утворених сумішей*

![Схема n-секційного протитечійного екстрагування](/images/courses/bioprocess-engineering/chapter-14/fig-14-7.webp)
*Рис. 14.7. Схема n-секційного протитечійного екстрагування*

![Графічний розрахунок багатоступінчастого протитечійного екстрагування з твердих тіл](/images/courses/bioprocess-engineering/chapter-14/fig-14-8.webp)
*Рис. 14.8. Графічний розрахунок багатоступінчастого протитечійного екстрагування з твердих тіл*

![Графічне визначення кількості ступенів концентрації](/images/courses/bioprocess-engineering/chapter-14/fig-14-9.webp)
*Рис. 14.9. Графічне визначення кількості ступенів концентрації*

### 14.2.5. Методи інтенсифікації

Інтенсифікація спрямована на збільшення виходу цільового компонента, скорочення тривалості, зниження енерговитрат і металомісткості обладнання. Використовують раціональну організацію руху фаз, подрібнення, підвищення температури, вібрації, пульсації, ультразвук, електричні та електромагнітні поля, а також способи дискретно-імпульсного введення енергії.

![Класифікація методів інтенсифікації процесу екстрагування](/images/courses/bioprocess-engineering/chapter-14/fig-14-10.webp)
*Рис. 14.10. Класифікація методів інтенсифікації процесу екстрагування*

![Загальна класифікація апаратів для екстрагування з твердих тіл](/images/courses/bioprocess-engineering/chapter-14/fig-14-11.webp)
*Рис. 14.11. Загальна класифікація апаратів для екстрагування з твердих тіл*

![Класифікація екстракційної апаратури за режимом роботи](/images/courses/bioprocess-engineering/chapter-14/fig-14-12.webp)
*Рис. 14.12. Класифікація екстракційної апаратури за режимом роботи*

### 14.2.7. Апарати для екстрагування з твердих тіл

Екстрактори класифікують за режимом роботи, способом контакту фаз, транспортуванням твердої фази та методом підведення енергії. До апаратів періодичної дії належать настійні, циркуляційні, апарати з мішалками, комбіновані й кавітаційні конструкції. Безперервні апарати можуть бути колонними, шнековими, нахиленими, ротаційними або вібраційними.

![Схеми екстракторів періодичної дії](/images/courses/bioprocess-engineering/chapter-14/fig-14-13.webp)
*Рис. 14.13. Схеми екстракторів періодичної дії*

![Екстрактор з висхідним потоком екстрагента](/images/courses/bioprocess-engineering/chapter-14/fig-14-14.webp)
*Рис. 14.14. Екстрактор з висхідним потоком екстрагента*

![Екстрактор зі спадним потоком екстрагента](/images/courses/bioprocess-engineering/chapter-14/fig-14-15.webp)
*Рис. 14.15. Екстрактор зі спадним потоком екстрагента*

![Комбінований екстрактор періодичної дії](/images/courses/bioprocess-engineering/chapter-14/fig-14-16.webp)
*Рис. 14.16. Комбінований екстрактор періодичної дії*

![Екстрактор з кавітаційним ефектом](/images/courses/bioprocess-engineering/chapter-14/fig-14-17.webp)
*Рис. 14.17. Екстрактор з кавітаційним ефектом*

![Віброекстрактор із сітчастим контейнером](/images/courses/bioprocess-engineering/chapter-14/fig-14-18.webp)
*Рис. 14.18. Віброекстрактор із сітчастим контейнером*

![Ротаційна дифузійна установка](/images/courses/bioprocess-engineering/chapter-14/fig-14-19.webp)
*Рис. 14.19. Ротаційна дифузійна установка*

![Схема шнекового горизонтального екстрактора](/images/courses/bioprocess-engineering/chapter-14/fig-14-20.webp)
*Рис. 14.20. Схема шнекового горизонтального екстрактора*

![Шнековий горизонтальний екстрактор](/images/courses/bioprocess-engineering/chapter-14/fig-14-21.webp)
*Рис. 14.21. Шнековий горизонтальний екстрактор*

![Пружинно-лопатевий горизонтальний екстрактор](/images/courses/bioprocess-engineering/chapter-14/fig-14-22.webp)
*Рис. 14.22. Пружинно-лопатевий горизонтальний екстрактор*

![Екстрактор нахиленого типу](/images/courses/bioprocess-engineering/chapter-14/fig-14-23.webp)
*Рис. 14.23. Екстрактор нахиленого типу*

![Двоколонний екстрактор типу НД-1000](/images/courses/bioprocess-engineering/chapter-14/fig-14-24.webp)
*Рис. 14.24. Двоколонний екстрактор типу НД-1000*

![Принципова схема віброекстрактора](/images/courses/bioprocess-engineering/chapter-14/fig-14-25.webp)
*Рис. 14.25. Принципова схема віброекстрактора*

![Вібротранспортувальна тарілка](/images/courses/bioprocess-engineering/chapter-14/fig-14-26.webp)
*Рис. 14.26. Вібротранспортувальна тарілка*

![Вібраційний екстрактор](/images/courses/bioprocess-engineering/chapter-14/fig-14-27.webp)
*Рис. 14.27. Вібраційний екстрактор*

## Після опрацювання розділу студент має вміти

- пояснювати роль поняття «екстрагент» у межах розділу;
- пов'язувати «тверде тіло - рідина» з апаратурним оформленням біотехнологічного виробництва;
- розрізняти основні параметри, що впливають на «дифузійний опір»;
- обґрунтовувати вибір або оцінку процесу через «екстрактор».

## Тест для самоперевірки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="uk"
  data-course="bioprocess-engineering"
  data-chapter="chapter-14-extraction"
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
  <input type="radio" name="course-test-14-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>тверде тіло - рідина</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>дифузійний опір</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>екстрагент</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>екстрактор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Який підрозділ безпосередньо входить до структури розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>14.2. Екстрагування із твердого тіла</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>14.2.4. Розрахунок екстракційного процесу</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>14.2.5. Методи інтенсифікації</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>14.1. Загальні відомості</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На яке поняття передусім спирається інженерний аналіз цього розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>тверде тіло - рідина</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>екстрагент</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>дифузійний опір</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>екстрактор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Що найтісніше пов'язує теорію процесу з апаратурним оформленням?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>екстрагент</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>екстрактор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>тверде тіло - рідина</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>дифузійний опір</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>екстрагент</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>тверде тіло - рідина</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>дифузійний опір</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>екстрактор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. З якої теми починається розділ за структурою розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>14.2. Екстрагування із твердого тіла</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>14.2.4. Розрахунок екстракційного процесу</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>14.2.5. Методи інтенсифікації</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>14.1. Загальні відомості</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Який підрозділ безпосередньо входить до структури розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>14.2. Екстрагування із твердого тіла</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>14.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>14.2.4. Розрахунок екстракційного процесу</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>14.2.5. Методи інтенсифікації</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Яка тема завершує структуру розділу розділу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>14.1. Загальні відомості</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>14.2.7. Апарати для екстрагування з твердих тіл</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>14.2. Екстрагування із твердого тіла</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>14.2.4. Розрахунок екстракційного процесу</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Яку пару понять доцільно зіставляти під час самоперевірки?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>дифузійний опір / екстрактор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>екстрагент / дифузійний опір</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>екстрагент / тверде тіло - рідина</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>тверде тіло - рідина / екстрактор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Що найкраще підходить для практичного обґрунтування вибору процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>екстрагент</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>тверде тіло - рідина</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>дифузійний опір</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>екстрактор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Який параметр або явище доцільно контролювати під час аналізу процесу?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>тверде тіло - рідина</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>екстрагент</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>дифузійний опір</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>екстрактор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Який об'єкт подано як наочний рисунок у цьому розділі?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>екстрагент</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Способи оброблення сировини перед екстрагуванням</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>тверде тіло - рідина</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>дифузійний опір</span>
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
