---
title: "Раздел 14. Экстрагирование"
course: "chemical-process-engineering"
course_title: "Процессы и аппараты химических производств"
chapter: 14
description: "Экстрагирование из твердых тел, диффузионное сопротивление, расчет процесса, интенсификация и конструкции экстракторов."
updated: "2026-08-23"
---

## Фокус раздела

В этом разделе последовательно рассмотрены основные понятия, уравнения и аппаратурные решения по теме.

## Структура материала раздела

- 14.1. Общие сведения
- 14.2. Экстрагирование из твердого тела
- 14.2.4. Расчет экстракционного процесса
- 14.2.5. Методы интенсификации
- 14.2.7. Аппараты для экстрагирования из твердых тел

## Конспект лекции

Экстрагирование - массообменный процесс извлечения одного или нескольких компонентов из твердого либо жидкого сложного вещества растворителем, который избирательно растворяет целевое вещество. В химических и пищевых производствах его используют для получения ферментов, растительных экстрактов, ароматических, биологически активных и других целевых компонентов.

### 14.1. Общие сведения

В экстрактор подают сырье и экстрагент, а отводят экстракт и остаток твердой фазы. По агрегатному состоянию исходной фазы различают системы твердое тело - жидкость и жидкость - жидкость. В этом разделе основной акцент сделан на твердофазном экстрагировании, где результат определяют избирательность растворителя, гидромодуль, движение фаз и подготовка сырья.

![Способы обработки сырья перед экстрагированием](/images/courses/chemical-process-engineering/chapter-14/fig-14-1.webp)
*Рис. 14.1. Способы обработки сырья перед экстрагированием*

![Классификация экстрагентов](/images/courses/chemical-process-engineering/chapter-14/fig-14-2.webp)
*Рис. 14.2. Классификация экстрагентов*

### 14.2.1. Диффузионное сопротивление внутри частицы

Скорость экстрагирования прямо пропорциональна движущей силе и обратно пропорциональна суммарному сопротивлению массопереносу. Для капиллярно-пористого сырья важны разрушение клеточных оболочек, измельчение, нагревание, ферментация или другая предварительная обработка. После подготовки основной сопротивление часто создает молекулярная диффузия в порах частицы.

![Схема переноса массы целевого компонента](/images/courses/chemical-process-engineering/chapter-14/fig-14-3.webp)
*Рис. 14.3. Схема переноса массы целевого компонента*

### 14.2.2. Физическая сущность процесса твердое тело - жидкость

Процесс включает проникновение растворителя в поры, растворение целевого компонента, перенос вещества внутри частицы к поверхности и массоотдачу в объем экстрагента. Если внутренняя диффузия медленнее внешней, процесс лимитируют коэффициент внутренней диффузии и размер частицы; если медленнее внешняя стадия, определяющими становятся коэффициент массоотдачи и толщина пограничного слоя.

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

![Экстракционные кривые противоточного и прямоточного процессов](/images/courses/chemical-process-engineering/chapter-14/fig-14-4.webp)
*Рис. 14.4. Экстракционные кривые противоточного и прямоточного процессов*

### 14.2.3. Особенности протекания процесса

Основные схемы взаимодействия фаз - противоток, прямоток и комбинированное движение. Противоток обеспечивает наиболее полное извлечение целевого компонента, но требует согласованного выбора гидромодуля. Избыток экстрагента увеличивает движущую силу, однако разбавляет экстракт и повышает затраты на последующее концентрирование.

<div class="equation-block">
  <span class="equation-main">q<sub>i</sub> = (C<sub>i-1</sub> - C<sub>i</sub>)/(C′<sub>i-1</sub> - C′<sub>i</sub>)</span>
  <span class="equation-number">(14.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">∂c/∂τ = D(∂<sup>2</sup>c/∂x<sup>2</sup> + ∂<sup>2</sup>c/∂y<sup>2</sup> + ∂<sup>2</sup>c/∂z<sup>2</sup>)</span>
  <span class="equation-number">(14.10)</span>
</div>

![Треугольная диаграмма для системы твердое тело - жидкость](/images/courses/chemical-process-engineering/chapter-14/fig-14-5.webp)
*Рис. 14.5. Треугольная диаграмма для системы твердое тело - жидкость*

### 14.2.4. Расчет экстракционного процесса

Расчет охватывает кинетику внутреннего и внешнего массопереноса, производительность, материальный и тепловой балансы, а также графическое определение числа теоретических ступеней. Для инженерных оценок применяют критерии Био, Фурье, Нуссельта, Прандтля, Рейнольдса и соответствующие критериальные уравнения.

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

### 14.2.4.1. Производительность и материальный баланс

Производительность экстрактора связывают с полезным объемом, загрузкой твердой фазы, длительностью процесса и числом аппаратов в батарее. Материальные балансы учитывают расходы сырья и экстрагента, концентрации целевого компонента в твердой и жидкой фазах, набухание сырья и удержание части растворителя в твердом теле.

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

### 14.2.4.2. Графическое определение ступеней

Для систем твердое тело - жидкость используют треугольные диаграммы и рабочие линии процесса. Правило рычага позволяет найти состав и количество смесей, а построение ступеней между рабочей линией и линией равновесия показывает необходимое число теоретических ступеней или аппаратов в батарее.

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

![Определение состава и количества образованных смесей](/images/courses/chemical-process-engineering/chapter-14/fig-14-6.webp)
*Рис. 14.6. Определение состава и количества образованных смесей*

![Схема n-секционного противоточного экстрагирования](/images/courses/chemical-process-engineering/chapter-14/fig-14-7.webp)
*Рис. 14.7. Схема n-секционного противоточного экстрагирования*

![Графический расчет многоступенчатого противоточного экстрагирования из твердых тел](/images/courses/chemical-process-engineering/chapter-14/fig-14-8.webp)
*Рис. 14.8. Графический расчет многоступенчатого противоточного экстрагирования из твердых тел*

![Графическое определение числа ступеней концентрации](/images/courses/chemical-process-engineering/chapter-14/fig-14-9.webp)
*Рис. 14.9. Графическое определение числа ступеней концентрации*

### 14.2.5. Методы интенсификации

Интенсификация направлена на увеличение выхода целевого компонента, сокращение длительности, снижение энергозатрат и металлоемкости оборудования. Используют рациональную организацию движения фаз, измельчение, повышение температуры, вибрации, пульсации, ультразвук, электрические и электромагнитные поля, а также дискретно-импульсный ввод энергии.

![Классификация методов интенсификации процесса экстрагирования](/images/courses/chemical-process-engineering/chapter-14/fig-14-10.webp)
*Рис. 14.10. Классификация методов интенсификации процесса экстрагирования*

![Общая классификация аппаратов для экстрагирования из твердых тел](/images/courses/chemical-process-engineering/chapter-14/fig-14-11.webp)
*Рис. 14.11. Общая классификация аппаратов для экстрагирования из твердых тел*

![Классификация экстракционной аппаратуры по режиму работы](/images/courses/chemical-process-engineering/chapter-14/fig-14-12.webp)
*Рис. 14.12. Классификация экстракционной аппаратуры по режиму работы*

### 14.2.7. Аппараты для экстрагирования из твердых тел

Экстракторы классифицируют по режиму работы, способу контакта фаз, транспортированию твердой фазы и методу подвода энергии. К аппаратам периодического действия относятся настаивающие, циркуляционные, аппараты с мешалками, комбинированные и кавитационные конструкции. Непрерывные аппараты могут быть колонными, шнековыми, наклонными, ротационными или вибрационными.

![Схемы экстракторов периодического действия](/images/courses/chemical-process-engineering/chapter-14/fig-14-13.webp)
*Рис. 14.13. Схемы экстракторов периодического действия*

![Экстрактор с восходящим потоком экстрагента](/images/courses/chemical-process-engineering/chapter-14/fig-14-14.webp)
*Рис. 14.14. Экстрактор с восходящим потоком экстрагента*

![Экстрактор с нисходящим потоком экстрагента](/images/courses/chemical-process-engineering/chapter-14/fig-14-15.webp)
*Рис. 14.15. Экстрактор с нисходящим потоком экстрагента*

![Комбинированный экстрактор периодического действия](/images/courses/chemical-process-engineering/chapter-14/fig-14-16.webp)
*Рис. 14.16. Комбинированный экстрактор периодического действия*

![Экстрактор с кавитационным эффектом](/images/courses/chemical-process-engineering/chapter-14/fig-14-17.webp)
*Рис. 14.17. Экстрактор с кавитационным эффектом*

![Виброэкстрактор с сетчатым контейнером](/images/courses/chemical-process-engineering/chapter-14/fig-14-18.webp)
*Рис. 14.18. Виброэкстрактор с сетчатым контейнером*

![Ротационная диффузионная установка](/images/courses/chemical-process-engineering/chapter-14/fig-14-19.webp)
*Рис. 14.19. Ротационная диффузионная установка*

![Схема шнекового горизонтального экстрактора](/images/courses/chemical-process-engineering/chapter-14/fig-14-20.webp)
*Рис. 14.20. Схема шнекового горизонтального экстрактора*

![Шнековый горизонтальный экстрактор](/images/courses/chemical-process-engineering/chapter-14/fig-14-21.webp)
*Рис. 14.21. Шнековый горизонтальный экстрактор*

![Пружинно-лопастной горизонтальный экстрактор](/images/courses/chemical-process-engineering/chapter-14/fig-14-22.webp)
*Рис. 14.22. Пружинно-лопастной горизонтальный экстрактор*

![Экстрактор наклонного типа](/images/courses/chemical-process-engineering/chapter-14/fig-14-23.webp)
*Рис. 14.23. Экстрактор наклонного типа*

![Двухколонный экстрактор типа НД-1000](/images/courses/chemical-process-engineering/chapter-14/fig-14-24.webp)
*Рис. 14.24. Двухколонный экстрактор типа НД-1000*

![Принципиальная схема виброэкстрактора](/images/courses/chemical-process-engineering/chapter-14/fig-14-25.webp)
*Рис. 14.25. Принципиальная схема виброэкстрактора*

![Вибротранспортирующая тарелка](/images/courses/chemical-process-engineering/chapter-14/fig-14-26.webp)
*Рис. 14.26. Вибротранспортирующая тарелка*

![Вибрационный экстрактор](/images/courses/chemical-process-engineering/chapter-14/fig-14-27.webp)
*Рис. 14.27. Вибрационный экстрактор*

## После изучения раздела студент должен уметь

- объяснять роль понятия «экстрагент» в пределах раздела;
- связывать «система твердое тело - жидкость» с аппаратурным оформлением химического производства;
- различать основные параметры, влияющие на «диффузионное сопротивление»;
- обосновывать выбор или оценку процесса через «экстрактор».

## Тест для самопроверки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="ru"
  data-course="chemical-process-engineering"
  data-chapter="chapter-14-extraction"
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
  <input type="radio" name="course-test-14-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>система твердое тело - жидкость</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>диффузионное сопротивление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>экстрагент</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>экстрактор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Какой подраздел непосредственно входит в структуру раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>14.2. Экстрагирование из твердого тела</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>14.2.4. Расчет экстракционного процесса</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>14.2.5. Методы интенсификации</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>14.1. Общие сведения</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На какое понятие прежде всего опирается инженерный анализ этого раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>система твердое тело - жидкость</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>экстрагент</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>диффузионное сопротивление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>экстрактор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Что теснее всего связывает теорию процесса с аппаратурным оформлением?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>экстрагент</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>экстрактор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>система твердое тело - жидкость</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>диффузионное сопротивление</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>экстрагент</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>система твердое тело - жидкость</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>диффузионное сопротивление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>экстрактор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. С какой темы начинается раздел в структуре раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>14.2. Экстрагирование из твердого тела</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>14.2.4. Расчет экстракционного процесса</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>14.2.5. Методы интенсификации</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>14.1. Общие сведения</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Какой подраздел непосредственно входит в структуру раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>14.2. Экстрагирование из твердого тела</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>14.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>14.2.4. Расчет экстракционного процесса</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>14.2.5. Методы интенсификации</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Какая тема завершает структуру раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>14.1. Общие сведения</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>14.2.7. Аппараты для экстрагирования из твердых тел</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>14.2. Экстрагирование из твердого тела</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>14.2.4. Расчет экстракционного процесса</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Какую пару понятий целесообразно сопоставлять при самопроверке?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>диффузионное сопротивление / экстрактор</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>экстрагент / диффузионное сопротивление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>экстрагент / система твердое тело - жидкость</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>система твердое тело - жидкость / экстрактор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Что лучше всего подходит для практического обоснования выбора процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>экстрагент</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>система твердое тело - жидкость</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>диффузионное сопротивление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>экстрактор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>система твердое тело - жидкость</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>экстрагент</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>диффузионное сопротивление</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>экстрактор</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Какой объект представлен в этом разделе как наглядный рисунок?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>экстрагент</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Способы обработки сырья перед экстрагированием</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>система твердое тело - жидкость</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>диффузионное сопротивление</span>
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

