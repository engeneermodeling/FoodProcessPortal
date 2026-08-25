---
title: "Раздел 3. Разделение неоднородных систем"
course: "bioprocess-engineering"
course_title: "Инжиниринг биопроцессов: процессы и аппараты биотехнологических производств"
chapter: 3
description: "Классификация неоднородных систем, осаждение, фильтрование и центробежные методы разделения."
updated: "2026-08-23"
---

## Источник и границы раздела

Основа материала: учебник «Инжиниринг биопроцессов. Модуль 1. Процессы и аппараты биотехнологических производств» под редакцией В.Л. Завьялова, НУХТ, 2024.

Материал страницы сохранен по логике соответствующего раздела учебника; тестовые вопросы добавлены как учебный инструмент для проверки усвоения.

## Структура материала по учебнику

- 3.1. Классификация и характеристика неоднородных систем
- 3.2. Методы разделения неоднородных систем
- 3.3. Осаждение в гравитационном поле
- 3.4. Фильтрование
- 3.5. Центробежные методы разделения неоднородных систем

## Конспект лекции

### 3.1. Классификация и характеристика неоднородных систем

Неоднородные системы состоят как минимум из двух фаз: дисперсной фазы и дисперсионной среды. В биотехнологических производствах это суспензии клеток, культуральные жидкости с биомассой, эмульсии, пены, аэрозоли и пылегазовые потоки. Цель разделения - получить осветленную жидкость, концентрат, осад или очищенный газ заданного качества.

Вязкость суспензии с достаточной для инженерных расчетов точностью определяют по эмпирической формуле А. И. Бачинского:

<div class="equation-block">
  <span class="equation-main">μ = μ<sub>0</sub>(1 + 4.5φ)</span>
  <span class="equation-number">(3.1)</span>
</div>

### 3.2. Методы разделения неоднородных систем

Основные методы - осаждение под действием силы тяжести, фильтрование через пористую перегородку, центрифугирование, циклонное разделение, сепарирование и комбинированные схемы. Выбор зависит от размера частиц, разности плотностей фаз, вязкости среды, концентрации твердой фазы и требований к стерильности.

### 3.3. Осаждение в гравитационном поле

Для крупных тел в безвоздушном пространстве скорость падения:

<div class="equation-block">
  <span class="equation-main">w = gτ</span>
  <span class="equation-number">(3.2)</span>
</div>

Для частинки у в'язкому середовищі після короткого періоду розгону встановлюється рівновага сил:

<div class="equation-block">
  <span class="equation-main">G - A = R</span>
  <span class="equation-number">(3.3)</span>
</div>

![Рис. 3.1. Сили, що діють на частинку під час осідання](/images/courses/bioprocess-engineering/chapter-03/fig-3-1.webp)

Різниця сили тяжіння та архімедової сили для кулькоподібної частинки:

<div class="equation-block">
  <span class="equation-main">G - A = V(ρ<sub>1</sub> - ρ<sub>2</sub>)g = (πd<sup>3</sup>/6)(ρ<sub>1</sub> - ρ<sub>2</sub>)g</span>
  <span class="equation-number">(3.4)</span>
</div>

Сила опору середовища:

<div class="equation-block">
  <span class="equation-main">R = ξF w<sub>0</sub><sup>2</sup>ρ<sub>2</sub>/2 = ξπd<sup>2</sup>w<sub>0</sub><sup>2</sup>ρ<sub>2</sub>/8</span>
  <span class="equation-number">(3.5)</span>
</div>

Звідси узагальнена швидкість вільного осідання:

<div class="equation-block">
  <span class="equation-main">w<sub>0</sub> = √(4gd(ρ<sub>1</sub> - ρ<sub>2</sub>)/(3ξρ<sub>2</sub>))</span>
  <span class="equation-number">(3.6)</span>
</div>

Для осідання у газовому середовищі, коли густиною газу в чисельнику нехтують:

<div class="equation-block">
  <span class="equation-main">w<sub>0</sub> = √(4gdρ<sub>1</sub>/(3ξρ<sub>2</sub>))</span>
  <span class="equation-number">(3.7)</span>
</div>

Коефіцієнт опору залежить від режиму руху. Для ламінарної області:

<div class="equation-block">
  <span class="equation-main">ξ = 24/Re</span>
  <span class="equation-number">(3.8)</span>
</div>

Для перехідної області:

<div class="equation-block">
  <span class="equation-main">ξ = 18.5/Re<sup>0.6</sup></span>
  <span class="equation-number">(3.9)</span>
</div>

У межах закону Стокса:

<div class="equation-block">
  <span class="equation-main">w<sub>0</sub> = gd<sup>2</sup>(ρ<sub>1</sub> - ρ<sub>2</sub>)/(18μ)</span>
  <span class="equation-number">(3.10)</span>
</div>

Максимальний діаметр частинки, для якого ще застосовний ламінарний режим:

<div class="equation-block">
  <span class="equation-main">d<sub>max</sub> = √(36μ<sup>2</sup>/(gρ<sub>2</sub>(ρ<sub>1</sub> - ρ<sub>2</sub>))) = 1.54√(μ<sup>2</sup>/(ρ<sub>2</sub>(ρ<sub>1</sub> - ρ<sub>2</sub>)))</span>
  <span class="equation-number">(3.11)</span>
</div>

Критеріальний метод використовує зв'язок між коефіцієнтом опору, Re та Ar:

<div class="equation-block">
  <span class="equation-main">ξRe<sup>2</sup> = (4/3) · gd<sup>3</sup>(ρ<sub>1</sub> - ρ<sub>2</sub>)/(ν<sup>2</sup>ρ<sub>2</sub>)</span>
  <span class="equation-number">(3.12)</span>
</div>

Критерій Архімеда:

<div class="equation-block">
  <span class="equation-main">Ar = gd<sup>3</sup>(ρ<sub>1</sub> - ρ<sub>2</sub>)/(ν<sup>2</sup>ρ<sub>2</sub>)</span>
  <span class="equation-number">(3.13)</span>
</div>

Зручна форма рівняння:

<div class="equation-block">
  <span class="equation-main">Ar = (3/4)ξRe<sup>2</sup></span>
  <span class="equation-number">(3.14)</span>
</div>

Критичні значення для меж режимів:

<div class="equation-block">
  <span class="equation-main">Ar<sub>cr</sub> = 18 · 2 = 36</span>
  <span class="equation-number">(3.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Ar<sub>cr</sub> = (3 · 18.5/4) · 500<sup>1.4</sup> = 83500</span>
  <span class="equation-number">(3.16)</span>
</div>

Для визначення Re за Ar використовують:

<div class="equation-block">
  <span class="equation-main">Re = Ar/18</span>
  <span class="equation-number">(3.17)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Re = 0.153Ar<sup>0.714</sup></span>
  <span class="equation-number">(3.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Re = 1.74√Ar</span>
  <span class="equation-number">(3.19)</span>
</div>

Поправка на форму частинок:

<div class="equation-block">
  <span class="equation-main">w<sub>p</sub> = w<sub>0</sub>φ</span>
  <span class="equation-number">(3.20)</span>
</div>

Для відстійника періодичної дії продуктивність визначається площею вільної поверхні та швидкістю осідання:

<div class="equation-block">
  <span class="equation-main">V/τ = Fh/τ = Fw<sub>0</sub></span>
  <span class="equation-number">(3.22)</span>
</div>

![Рис. 3.2. Схема відстійника періодичної дії](/images/courses/bioprocess-engineering/chapter-03/fig-3-2.webp)

### 3.4. Фильтрование

Фильтрование применяют для разделения суспензий с помощью пористой перегородки. Движущей силой является разность давлений, а сопротивление создают фильтровальная перегородка и слой осадка.

Швидкість фільтрування:

<div class="equation-block">
  <span class="equation-main">w = dV/(F dτ)</span>
  <span class="equation-number">(3.23)</span>
</div>

Для одного капіляра витрата:

<div class="equation-block">
  <span class="equation-main">q = (πd<sup>2</sup>/4)(Δpd<sup>2</sup>/(32μl)) = αΔpd<sup>4</sup>/(32μl)</span>
  <span class="equation-number">(3.24)</span>
</div>

Продуктивність елементарної системи капілярів:

<div class="equation-block">
  <span class="equation-main">dV = qdτFz = (αΔpd<sup>4</sup>/(32μl))dτFz</span>
  <span class="equation-number">(3.25)</span>
</div>

Після введення геометричних характеристик осаду:

<div class="equation-block">
  <span class="equation-main">w = dV/(F dτ) = Δp/(rS)</span>
  <span class="equation-number">(3.26)</span>
</div>

Питомий опір осаду:

<div class="equation-block">
  <span class="equation-main">r = 32μβ/(αεδD<sup>2</sup>) = φμ/D<sup>2</sup></span>
  <span class="equation-number">(3.27)</span>
</div>

Структурний опір:

<div class="equation-block">
  <span class="equation-main">σ = r/μ</span>
  <span class="equation-number">(3.28)</span>
</div>

Для нестисливого осаду:

<div class="equation-block">
  <span class="equation-main">w = Δp/(σμS)</span>
  <span class="equation-number">(3.29)</span>
</div>

З урахуванням опору перегородки:

<div class="equation-block">
  <span class="equation-main">w = Δp/(σμS + R)</span>
  <span class="equation-number">(3.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">w = Δp/(μ(σS + R<sub>0</sub>))</span>
  <span class="equation-number">(3.31)</span>
</div>

Для стисливих осадів:

<div class="equation-block">
  <span class="equation-main">D = D<sub>0</sub>(1 - Δp/G)</span>
  <span class="equation-number">(3.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">S = S<sub>0</sub>/(1 - Δp/G)</span>
  <span class="equation-number">(3.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">w = Δp(1 - Δp/G)/(σS<sub>0</sub>μ + R(1 - Δp/G))</span>
  <span class="equation-number">(3.34)</span>
</div>

Зв'язок товщини осаду з об'ємом фільтрату:

<div class="equation-block">
  <span class="equation-main">S = Vε<sub>0</sub>/F</span>
  <span class="equation-number">(3.35)</span>
</div>

Фільтрування за сталого тиску:

<div class="equation-block">
  <span class="equation-main">dV = (Δp(1 - Δp/G)F<sup>2</sup>dτ)/(σμVε<sub>0</sub>)</span>
  <span class="equation-number">(3.36)</span>
</div>

<div class="equation-block">
  <span class="equation-main">VdV = (Δp(1 - Δp/G)F<sup>2</sup>dτ)/(σμε<sub>0</sub>)</span>
  <span class="equation-number">(3.36a)</span>
</div>

<div class="equation-block">
  <span class="equation-main">V = F√(2Δp(1 - Δp/G)τ/(σμε<sub>0</sub>))</span>
  <span class="equation-number">(3.37)</span>
</div>

Фільтрування за сталої швидкості:

<div class="equation-block">
  <span class="equation-main">σ<sub>0</sub>μS<sub>0</sub> = (Δp - Δp<sup>2</sup>/G)/w</span>
  <span class="equation-number">(3.38)</span>
</div>

<div class="equation-block">
  <span class="equation-main">σ<sub>0</sub>μdS = (dΔp - 2Δp dΔp/G)/w</span>
  <span class="equation-number">(3.39)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dτ = (dΔp - 2Δp dΔp/G)/(w<sup>2</sup>σ<sub>0</sub>με<sub>0</sub>)</span>
  <span class="equation-number">(3.40)</span>
</div>

<div class="equation-block">
  <span class="equation-main">τ = ((Δp<sub>2</sub> - Δp<sub>1</sub>) - (Δp<sub>2</sub><sup>2</sup> - Δp<sub>1</sub><sup>2</sup>)/G)/(w<sup>2</sup>σ<sub>0</sub>με<sub>0</sub>)</span>
  <span class="equation-number">(3.41)</span>
</div>

<div class="equation-block">
  <span class="equation-main">w = √(((Δp<sub>2</sub> - Δp<sub>1</sub>) - (Δp<sub>2</sub><sup>2</sup> - Δp<sub>1</sub><sup>2</sup>)/G)/(σ<sub>0</sub>με<sub>0</sub>τ))</span>
  <span class="equation-number">(3.42)</span>
</div>

<div class="equation-block">
  <span class="equation-main">V = Fwτ</span>
  <span class="equation-number">(3.43)</span>
</div>

![Рис. 3.7. Схема фільтрувальної камери](/images/courses/bioprocess-engineering/chapter-03/fig-3-7.webp)

![Рис. 3.10. Рамний фільтр-прес](/images/courses/bioprocess-engineering/chapter-03/fig-3-10.webp)

![Рис. 3.13. Схема барабанного вакуум-фільтра](/images/courses/bioprocess-engineering/chapter-03/fig-3-13.webp)

### 3.5. Центробежные методы разделения неоднородных систем

Центробежные методы применяют, когда гравитационное осаждение слишком медленное или требуется компактное оборудование высокой производительности. В биотехнологических процессах центрифуги используют для отделения биомассы, клеточных обломков, кристаллов, белковых преципитатов и твердых примесей.

Відцентрова сила:

<div class="equation-block">
  <span class="equation-main">G<sub>c</sub> = ma = mω<sup>2</sup>r</span>
  <span class="equation-number">(3.44)</span>
</div>

Порівняння її з силою тяжіння:

<div class="equation-block">
  <span class="equation-main">G<sub>c</sub> = G<sub>g</sub>ω<sup>2</sup>r/g = G<sub>g</sub>Fr</span>
  <span class="equation-number">(3.45)</span>
</div>

Фактор розділення:

<div class="equation-block">
  <span class="equation-main">Fr = ω<sup>2</sup>r/g = 4π<sup>2</sup>n<sup>2</sup>r/g</span>
  <span class="equation-number">(3.46)</span>
</div>

У критеріальному розрахунку замість Ar використовують добуток Ar · Fr:

<div class="equation-block">
  <span class="equation-main">Ar · Fr = (3/4)ξRe<sup>2</sup></span>
  <span class="equation-number">(3.47)</span>
</div>

![Рис. 3.18. Схема циклона і руху потоку в ньому](/images/courses/bioprocess-engineering/chapter-03/fig-3-18.webp)

Для відцентрового фільтрування елементарна маса кільцевого шару:

<div class="equation-block">
  <span class="equation-main">dm = dVρ = 2πrdrHρ</span>
  <span class="equation-number">(3.48)</span>
</div>

Відцентрова сила елементарного шару:

<div class="equation-block">
  <span class="equation-main">dG<sub>c</sub> = ω<sup>2</sup>r dm = 2πHρω<sup>2</sup>r<sup>2</sup>dr</span>
  <span class="equation-number">(3.49)</span>
</div>

Елементарний тиск:

<div class="equation-block">
  <span class="equation-main">dp = dG<sub>c</sub>/(2πrH) = ρω<sup>2</sup>rdr</span>
  <span class="equation-number">(3.50)</span>
</div>

Рушійна сила відцентрового фільтрування:

<div class="equation-block">
  <span class="equation-main">Δp = ρω<sup>2</sup>(R<sup>2</sup> - R<sub>0</sub><sup>2</sup>)/2</span>
  <span class="equation-number">(3.51)</span>
</div>

![Рис. 3.19. Відцентрове фільтрування](/images/courses/bioprocess-engineering/chapter-03/fig-3-19.webp)

Пускова потужність центрифуги:

<div class="equation-block">
  <span class="equation-main">N = (N<sub>1</sub> + N<sub>2</sub> + N<sub>3</sub> + N<sub>4</sub>)/η</span>
  <span class="equation-number">(3.52)</span>
</div>

Окремі складові потужності:

<div class="equation-block">
  <span class="equation-main">N<sub>1</sub> = mw<sub>b</sub><sup>2</sup>/(2τ)</span>
  <span class="equation-number">(3.53)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N<sub>2</sub> = εmω<sup>2</sup>R<sup>2</sup>/(2τ)</span>
  <span class="equation-number">(3.54)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N<sub>3</sub> = fG<sub>b</sub>w<sub>v</sub></span>
  <span class="equation-number">(3.55)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N<sub>4</sub> = Cρ<sub>air</sub>HD<sup>4</sup>n<sup>3</sup></span>
  <span class="equation-number">(3.56)</span>
</div>

![Рис. 3.26. Схеми камерного і тарілчастого сепараторів](/images/courses/bioprocess-engineering/chapter-03/fig-3-26.webp)

## После изучения раздела студент должен уметь

- объяснять роль понятия «суспензия» в пределах раздела;
- связывать «осаждение» с аппаратурным оформлением биотехнологического производства;
- различать основные параметры, влияющие на «фильтрование»;
- обосновывать выбор или оценку процесса через «центрифуга».

## Тест для самопроверки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="ru"
  data-course="bioprocess-engineering"
  data-chapter="chapter-03-heterogeneous-systems-separation"
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
  <input type="radio" name="course-test-3-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>осаждение</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>фильтрование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>центрифуга</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-0" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>суспензия</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-1" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>3.1. Классификация и характеристика неоднородных систем</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>3.2. Методы разделения неоднородных систем</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>3.3. Осаждение в гравитационном поле</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>3.4. Фильтрование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На какое понятие прежде всего опирается инженерный анализ этого раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>суспензия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-2" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>осаждение</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>фильтрование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>центрифуга</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Что теснее всего связывает теорию процесса с аппаратурным оформлением?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>суспензия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>осаждение</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-3" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>центрифуга</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>фильтрование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>суспензия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>осаждение</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>центрифуга</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-4" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>фильтрование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. С какой темы начинается раздел в структуре учебника?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-5" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>3.1. Классификация и характеристика неоднородных систем</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>3.2. Методы разделения неоднородных систем</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>3.3. Осаждение в гравитационном поле</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>3.4. Фильтрование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>3.1. Классификация и характеристика неоднородных систем</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-6" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>3.2. Методы разделения неоднородных систем</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>3.3. Осаждение в гравитационном поле</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>3.4. Фильтрование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Какая тема завершает структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>3.1. Классификация и характеристика неоднородных систем</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>3.2. Методы разделения неоднородных систем</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-7" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>3.5. Центробежные методы разделения неоднородных систем</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>3.3. Осаждение в гравитационном поле</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Какую пару понятий целесообразно сопоставлять при самопроверке?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>фильтрование / центрифуга</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>суспензия / фильтрование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>осаждение / центрифуга</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-8" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>суспензия / осаждение</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Что лучше всего подходит для практического обоснования выбора процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-9" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>центрифуга</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>суспензия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>осаждение</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>фильтрование</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>суспензия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-10" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>осаждение</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>фильтрование</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>центрифуга</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Какой объект представлен в этом разделе как наглядный рисунок?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>суспензия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>осаждение</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-11" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Силы, действующие на частицу при осаждении</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>фильтрование</span>
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
<li>Вопрос 1: Правильный ответ - D</li>
<li>Вопрос 2: Правильный ответ - A</li>
<li>Вопрос 3: Правильный ответ - B</li>
<li>Вопрос 4: Правильный ответ - C</li>
<li>Вопрос 5: Правильный ответ - D</li>
<li>Вопрос 6: Правильный ответ - A</li>
<li>Вопрос 7: Правильный ответ - B</li>
<li>Вопрос 8: Правильный ответ - C</li>
<li>Вопрос 9: Правильный ответ - D</li>
<li>Вопрос 10: Правильный ответ - A</li>
<li>Вопрос 11: Правильный ответ - B</li>
<li>Вопрос 12: Правильный ответ - C</li>
</ol>
</details>
</section>

## Дальнейшая проработка
На следующем проходе стоит сверить формулы фильтрования и мощности центрифуг с печатным макетом учебника, а также добавить расчетный пример отстойника или фильтр-пресса.
На следующем проходе этот раздел можно детализировать формулами, примерами расчетов, рисунками аппаратов и ссылками на современные биотехнологические производства.
