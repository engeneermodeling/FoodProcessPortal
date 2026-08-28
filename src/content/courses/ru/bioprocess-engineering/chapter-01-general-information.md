---
title: "Раздел 1. Общие сведения"
course: "bioprocess-engineering"
course_title: "Инжиниринг биопроцессов: процессы и аппараты биотехнологических производств"
chapter: 1
description: "Основные законы технологических процессов, метод подобия и физические свойства веществ."
updated: "2026-08-23"
---

## Фокус раздела

В этом разделе последовательно рассмотрены основные понятия, уравнения и аппаратурные решения по теме.

## Структура материала раздела

- 1.1. Основные законы технологических процессов
- 1.2. Метод подобия и его роль в изучении процессов и аппаратов биотехнологических производств
- 1.3. Основные физические свойства веществ
- 1.4. Основные физико-технические свойства веществ

## Конспект лекции

Это вычитанная лекционная версия страниц 21-43 раздела. Текст, формулы, таблица и рисунки вынесены в отдельные редактируемые блоки, поэтому материал можно читать как лекцию и дальше переводить без сканов страниц.

### Часть 1. Общие процессы

### Раздел 1. Общие сведения

### 1.1. Основные законы технологических процессов

#### Законы сохранения массы и энергии

Технологические процессы биотехнологических производств подчиняются общим физическим и физико-химическим законам. Применение этих законов к конкретному процессу позволяет построить теорию процесса и методы расчета аппаратов для его проведения.

Наиболее общие законы природы можно сформулировать так: в природе и технике происходят только такие превращения, при которых общая масса и энергия системы остаются неизменными. В процессах и аппаратах эти законы выражаются материальными и тепловыми балансами.

![Схема материального баланса](/images/courses/bioprocess-engineering/chapter-01/fig-1-1.webp)
*Рис. 1.1. Схема материального баланса.*

Для произвольного аппарата схема материального баланса показана на рис. 1.1. Согласно закону сохранения массы материальный баланс можно записать так:

<div class="equation-block">
  <span class="equation-main">P<sub>A</sub> + P<sub>B</sub> + P<sub>C</sub> + P<sub>D</sub> = P<sub>E</sub> + P<sub>F</sub> + P<sub>G</sub></span>
  <span class="equation-number">(1.1)</span>
</div>

где A, B, C, D, E, F, G - компоненты, которые входят в аппарат и выходят из него; P<sub>i</sub> - условные массы этих веществ.

![Схема теплового баланса](/images/courses/bioprocess-engineering/chapter-01/fig-1-2.webp)
*Рис. 1.2. Схема теплового баланса.*

По аналогии для схемы теплового баланса (рис. 1.2) закон сохранения энергии можно выразить тепловым балансом потоков, входящих в аппарат и выходящих из него:

<div class="equation-block">
  <span class="equation-main">Q<sub>A</sub> + Q<sub>B</sub> + Q<sub>C</sub> + Q<sub>D</sub> + Q<sub>вн</sub> + Q<sub>з</sub> =<br />Q<sub>E</sub> + Q<sub>F</sub> + Q<sub>G</sub> + Q<sub>пот</sub> + …</span>
  <span class="equation-number">(1.2)</span>
</div>

где Q<sub>вн</sub> - тепло, выделяемое внутри аппарата при его работе; Q<sub>з</sub> - тепло, подведенное извне; Q<sub>пот</sub> - тепло, потерянное в окружающую среду.

Тепловой баланс можно представить в виде диаграммы Сенки (рис. 1.3). Тепло, которое приносит каждый компонент, изображают в выбранном масштабе. Сумма толщин входящих тепловых потоков равна сумме толщин выходящих тепловых потоков.

![Диаграмма Сенки](/images/courses/bioprocess-engineering/chapter-01/fig-1-3.webp)
*Рис. 1.3. Диаграмма Сенки.*

#### Законы переноса

Во многих технологических операциях главную роль играют процессы переноса. В гидродинамических процессах переносится движущаяся масса, в тепловых - тепловая энергия, в диффузионных - компонент, переходящий из одной фазы в другую.

Гидродинамические, тепловые и диффузионные процессы имеют кинетические уравнения сходной формы. Для теплопередачи:

<div class="equation-block">
  <span class="equation-main">dQ/dτ = K Δt = (1/R) Δt, kJ/(m²·s)</span>
  <span class="equation-number">(1.3)</span>
</div>

где Q - количество теплоты, переданное через 1 м² поверхности теплообмена; τ - время; K - коэффициент теплопередачи; Δt - движущая сила, то есть разность температур; R = 1/K - термическое сопротивление.

Для диффузионных массообменных процессов:

<div class="equation-block">
  <span class="equation-main">dM/dτ = K&#x27; ΔC = (1/R&#x27;) ΔC, kg/(m²·s)</span>
  <span class="equation-number">(1.4)</span>
</div>

где dM - количество перенесенного вещества; ΔC - разность концентраций; K' - коэффициент массоотдачи; R' = 1/K' - сопротивление массопереносу.

Для гидродинамических процессов, например фильтрования:

<div class="equation-block">
  <span class="equation-main">dW/dτ = (1/R<sub>h</sub>) Δp = C<sub>h</sub> Δp, m³/(m²·s)</span>
  <span class="equation-number">(1.5)</span>
</div>

где dW/dτ - количество фильтрата; R<sub>h</sub> - гидравлическое сопротивление фильтра и осадка; Δp - разность давлений; C<sub>h</sub> = 1/R<sub>h</sub> - проницаемость.

Сравнение этих трех кинетических уравнений показывает их полную аналогию, которую называют тройной аналогией. Общий вид кинетического уравнения переноса:

<div class="equation-block">
  <span class="equation-main">I = L x,</span>
</div>

где I - скорость процесса, L - проницаемость, x - движущая сила.

#### Законы равновесия

Совокупность взаимодействующих тел называют системой. Важно оценить, насколько система удалена от равновесия и как она изменяется под внешним воздействием. Равновесной считают систему, состояние которой не меняется во времени. С точки зрения переноса равновесие означает отсутствие переноса даже при отсутствии сопротивления разделяющих перегородок.

Направление изменений описывают правило фаз Гиббса и принцип Ле Шателье:

<div class="equation-block">
  <span class="equation-main">S = K − f + 2,</span>
  <span class="equation-number">(1.6)</span>
</div>

где S - число степеней свободы; K - число компонентов; f - число фаз.

Принцип Ле Шателье утверждает: если система выведена из равновесия внешним воздействием, изменения происходят в направлении, противоположном этому воздействию. Для инженерного анализа это помогает определить, какие параметры нужно изменить для получения нужного производственного эффекта.

#### Принцип оптимизации ведения процесса

Любой процесс обычно можно реализовать в нескольких аппаратурных вариантах. Выбор наиболее целесообразного варианта называют оптимизацией. Чаще всего критерием оптимизации считают минимальную стоимость продукта.

**Непрерывность процессов.** Биотехнологические процессы могут быть периодическими или непрерывными. Непрерывные процессы уменьшают затраты труда, экономят энергию и материалы, снижают габариты оборудования, упрощают автоматизацию, стабилизируют режим работы и повышают качество продукта.

**Противоточный обмен.** В обменных процессах взаимодействующие среды могут двигаться противотоком, прямотоком или перекрестно (рис. 1.4). Для непрерывного тепло- и массообмена противоточная схема часто является наиболее выгодной.

![Противоточное, прямоточное и перекрестное движение сред](/images/courses/bioprocess-engineering/chapter-01/fig-1-4.webp)
*Рис. 1.4. Противоточное (1), прямоточное (2) и перекрестное (3) движение сред.*

**Обновление поверхности контакта фаз.** Тепло- и массообмен интенсифицируются, когда контакт между средами становится теснее, а свежие элементы сред чаще встречаются между собой. Это происходит при турбулентном движении.

**Максимальное использование теплоты.** Многие пищевые и биотехнологические процессы требуют тепловой энергии. Тепловые отходы с более низким потенциалом следует по возможности использовать повторно. Пар удобен тем, что его теплосодержание при заданном давлении практически постоянно, поэтому теплоту можно последовательно использовать в ряде аппаратов.

**Закон масштабного перехода.** Размер аппарата влияет на процесс, который в нем происходит. Результаты, полученные в малых аппаратах, можно переносить на крупное оборудование только с учетом масштабных эффектов. Поэтому необходимы моделирование и теория подобия.

### 1.2. Метод подобия и его роль

Новые или усовершенствованные производственные процессы сначала изучают на лабораторных установках. Непосредственный переход к промышленному аппарату дорог и рискован. При переходе к производственному масштабу поведение процесса часто меняется, поэтому между лабораторными и промышленными испытаниями используют пилотные установки.

Теория подобия отвечает, какую форму и размеры должна иметь модель, чтобы ее результаты можно было перенести на промышленный аппарат. Она также указывает, какие величины измерять, как обрабатывать опытные данные и как строить модель, подобную оригиналу.

#### Первая теорема подобия

Первая теорема подобия утверждает, что подобные явления имеют численно равные критерии подобия. Для геометрического подобия:

<div class="equation-block">
  <span class="equation-main">L/l = α<sub>l</sub>.</span>
</div>

Для кинематического подобия:

<div class="equation-block">
  <span class="equation-main">T/t = α<sub>t</sub>.</span>
</div>

Для динамического подобия:

<div class="equation-block">
  <span class="equation-main">K/k = α<sub>k</sub>.</span>
</div>

Для динамически подобных систем соответствующие силы относятся как произведение квадратов соответствующих длин, квадратов соответствующих скоростей и первых степеней соответствующих плотностей:

<div class="equation-block">
  <span class="equation-main">K/k = (ρ<sub>обр</sub>/ρ<sub>мод</sub>) · (V²/v²) · (L²/l²)</span>
  <span class="equation-number">(1.7)</span>
</div>

Обобщенным критерием механического подобия является критерий Ньютона:

<div class="equation-block">
  <span class="equation-main">Ne = K / (ρ l² v²)</span>
  <span class="equation-number">(1.8)</span>
</div>

Для систем в гравитационном поле:

<div class="equation-block">
  <span class="equation-main">Ne′ = Lg/V² = lg/v²</span>
  <span class="equation-number">(1.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Fr = v² / (g l)</span>
  <span class="equation-number">(1.10)</span>
</div>

Для систем, в которых определяющими являются силы вязкого трения:

<div class="equation-block">
  <span class="equation-main">Ne″ = μ/(LρV)</span>
  <span class="equation-number">(1.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Re = l v / ν = ρ v l / μ</span>
  <span class="equation-number">(1.12)</span>
</div>

#### Основные критерии подобия

| Группа | Критерий | Выражение | Основные величины | Применение |
|---|---|---|---|---|
| Механическое подобие | Ньютона | `Ne = K/(ρl²v²)` | K - сила; ρ - плотность; l - длина; v - скорость | Общий критерий механического подобия |
| Механическое подобие | Фруда | `Fr = v²/(gl)` | g - ускорение свободного падения | Подобие в гравитационных полях |
| Механическое подобие | Эйлера | `Eu = Δp/(ρv²)` | Δp - перепад давления | Действие сил давления в потоках |
| Механическое подобие | Архимеда | `Ar = gl³(ρ₁-ρ₂)/(ν²ρ₂)` | ν - кинематическая вязкость; ρ₁, ρ₂ - плотности | Системы, определяемые вязкостью и подъемной силой |
| Механическое подобие | Рейнольдса | `Re = lv/ν = vρl/μ` | μ - динамическая вязкость | Системы, определяемые вязким трением |
| Тепловое подобие | Нуссельта | `Nu = αl/λ` | α - коэффициент теплоотдачи; λ - теплопроводность | Теплообмен между средой и стенкой |
| Тепловое подобие | Прандтля | `Pr = cμ/λ` | c - теплоемкость | Физические свойства теплоносителя |
| Тепловое подобие | Пекле | `Pe = vt/a` | a - температуропроводность | Соотношение конвективного переноса теплоты и теплопроводности |
| Тепловое подобие | Кутателадзе | `Ku = r/(cΔt)` | r - скрытая теплота | Теплообмен при фазовом переходе |
| Диффузионное подобие | Диффузионный Нуссельт | `Nu' = βl/D` | β - коэффициент массоотдачи; D - коэффициент диффузии | Массообмен |
| Диффузионное подобие | Диффузионный Прандтль | `Pr' = ν/D` | ν - кинематическая вязкость; D - коэффициент диффузии | Физические свойства среды |

*Таблица 1.1. Основные критерии подобия.*

#### Вторая и третья теоремы подобия

Вторая теорема утверждает, что любую зависимость между переменными, описывающими явление, можно представить как зависимость между критериями подобия:

<div class="equation-block">
  <span class="equation-main">i = n − k,</span>
  <span class="equation-number">(1.13)</span>
</div>

Для теплопередачи на поверхности тела, которое омывается потоком жидкости, коэффициент теплоотдачи α зависит от характерного размера l, скорости движения среды v, плотности ρ, кинематической вязкости ν, теплоемкости c и теплопроводности λ. Исходную зависимость можно записать в степенном виде:

<div class="equation-block">
  <span class="equation-main">α = C l<sup>β</sup> v<sup>γ</sup> ρ<sup>δ</sup> ν<sup>ε</sup> c<sup>η</sup> λ<sup>θ</sup></span>
  <span class="equation-number">(1.14)</span>
</div>

Такое предположение можно обосновать тем, что большинство технических закономерностей выражается степенными уравнениями. Далее выбирают первичные величины: единицы длины L, массы M, времени τ, температуры T и теплоты Дж. Размерности левой и правой частей уравнения (1.14) должны быть одинаковыми, поэтому записывают уравнение размерностей:

<div class="equation-block">
  <span class="equation-main">[Дж/(L<sup>2</sup>Tτ)] = C [L]<sup>β</sup> [L/τ]<sup>γ</sup> [M/L<sup>3</sup>]<sup>δ</sup> [L<sup>2</sup>/τ]<sup>ε</sup> [Дж/(L<sup>3</sup>T)]<sup>η</sup> [Дж/(LTτ)]<sup>θ</sup></span>
  <span class="equation-number">(1.15)</span>
</div>

Приравнивая показатели единиц измерения в левой и правой частях уравнения (1.15), получают систему уравнений. Поскольку δ = 0, плотность из исходной формулы выпадает, а два последних уравнения становятся тождественными. Для определения неизвестных остаются три уравнения:

<div class="equation-block">
  <span class="equation-main">η + θ = 1<br />γ + ε + θ = 1<br />β + γ + 2ε − 3δ − 3η − θ = −2</span>
</div>

Выразив β, γ и η через ε и θ, уравнение (1.14) получают в виде:

<div class="equation-block">
  <span class="equation-main">α = C l<sup>−ε−θ</sup> v<sup>1−ε−θ</sup> ν<sup>ε</sup> c<sup>1−θ</sup> λ<sup>θ</sup></span>
  <span class="equation-number">(1.16)</span>
</div>

Это уравнение можно представить так:

<div class="equation-block">
  <span class="equation-main">αl/λ = C (vl/ν)<sup>1−ε−θ</sup> (νc/λ)<sup>1−θ</sup></span>
  <span class="equation-number">(1.17)</span>
</div>

Поскольку αl/λ = Nu, vl/ν = Re, νc/λ = Pr, а 1 − ε − θ = m и 1 − θ = n, получают критериальное уравнение:

<div class="equation-block">
  <span class="equation-main">Nu = C Re<sup>m</sup> Pr<sup>n</sup></span>
  <span class="equation-number">(1.18)</span>
</div>

Третья теорема утверждает, что подобны те системы, условия однозначности которых подобны, а критерии, составленные из этих условий, численно равны. К условиям однозначности относятся геометрия, физические константы, начальное состояние и граничные условия.

Для модели трубопровода одним из требований подобия является:

<div class="equation-block">
  <span class="equation-main">Re<sub>model</sub> = Re<sub>full</sub>-scale.</span>
</div>

Данные о потерях давления после этого можно обрабатывать в виде:

<div class="equation-block">
  <span class="equation-main">Eu = f(Re).</span>
</div>

### 1.3. Основные физические свойства веществ

Во время технологической обработки физико-химические свойства материалов изменяются. Эти данные нужны для определения размеров, формы и конструкции аппаратов, расхода энергии и выбора конструкционных материалов.

Состав можно выражать массовыми, объемными и мольными долями:

<div class="equation-block">
  <span class="equation-main">x<sub>m</sub> = G<sub>i</sub>/G; x<sub>V</sub> = V<sub>i</sub>/V; x<sub>M</sub> = N<sub>i</sub>/N</span>
  <span class="equation-number">(1.19)</span>
</div>

Для компонента и для смеси:

<div class="equation-block">
  <span class="equation-main">G<sub>i</sub> = N<sub>i</sub> M<sub>i</sub></span>
  <span class="equation-number">(1.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G = N M</span>
  <span class="equation-number">(1.21)</span>
</div>

Связь между массовой и мольной долями:

<div class="equation-block">
  <span class="equation-main">G<sub>i</sub>/G = (N<sub>i</sub>/N)(M<sub>i</sub>/M)</span>
  <span class="equation-number">(1.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x<sub>mi</sub> = x<sub>Mi</sub> (M<sub>i</sub>/M)</span>
  <span class="equation-number">(1.23)</span>
</div>

Связь с объемной концентрацией:

<div class="equation-block">
  <span class="equation-main">G<sub>i</sub> = ρ<sub>i</sub> V<sub>i</sub></span>
  <span class="equation-number">(1.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G = ρ V</span>
  <span class="equation-number">(1.25)</span>
</div>

После деления уравнения (1.24) на уравнение (1.25) получают:

<div class="equation-block">
  <span class="equation-main">G<sub>i</sub>/G = (ρ<sub>i</sub>/ρ)(V<sub>i</sub>/V)</span>
  <span class="equation-number">(1.26)</span>
</div>

С учетом выражения (1.19):

<div class="equation-block">
  <span class="equation-main">x<sub>mi</sub> = x<sub>Vi</sub> (ρ<sub>i</sub>/ρ)</span>
  <span class="equation-number">(1.27)</span>
</div>

Общее соотношение пересчета:

<div class="equation-block">
  <span class="equation-main">x<sub>mi</sub> = x<sub>Mi</sub> (M<sub>i</sub>/M) = x<sub>Vi</sub> (ρ<sub>i</sub>/ρ)</span>
  <span class="equation-number">(1.28)</span>
</div>

Для бинарных смесей:

<div class="equation-block">
  <span class="equation-main">x<sub>m</sub> = 1 / [1 + (M<sub>a</sub>/M<sub>b</sub>)(1/x<sub>M</sub> − 1)],</span>
  <span class="equation-number">(1.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x<sub>m</sub> = 1 / [1 + (ρ<sub>b</sub>/ρ<sub>a</sub>)(1/x<sub>V</sub> − 1)],</span>
  <span class="equation-number">(1.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x<sub>V</sub> = 1 / [1 + (ρ<sub>a</sub>/ρ<sub>b</sub>)(1/x<sub>m</sub> − 1)]</span>
  <span class="equation-number">(1.31)</span>
</div>

### 1.4. Основные физико-технические свойства веществ

Плотность нужна в уравнениях массового расхода, материальных балансах и критериях Re, Eu, Ar:

<div class="equation-block">
  <span class="equation-main">ρ<sub>mix</sub> = 1 / [x<sub>m</sub>/ρ<sub>a</sub> + (1 − x<sub>m</sub>)/ρ<sub>b</sub>]</span>
  <span class="equation-number">(1.32)</span>
</div>

Для содержания влаги:

<div class="equation-block">
  <span class="equation-main">ρ<sub>mix</sub> = 100 / [(100 − ω)/ρ<sub>a</sub> + ω/ρ<sub>b</sub>]</span>
  <span class="equation-number">(1.33)</span>
</div>

Молекулярная масса бинарной смеси:

<div class="equation-block">
  <span class="equation-main">M = 1 / [x<sub>m</sub>/M<sub>a</sub> + (1 − x<sub>m</sub>)/M<sub>b</sub>]</span>
  <span class="equation-number">(1.34)</span>
</div>

Вязкость - это сопротивление жидкостей или газов взаимному перемещению их частиц:

<div class="equation-block">
  <span class="equation-main">T = μ S (dw/dl),</span>
  <span class="equation-number">(1.35)</span>
</div>

Кинематическая вязкость:

<div class="equation-block">
  <span class="equation-main">ν = μ/ρ</span>
  <span class="equation-number">(1.36)</span>
</div>

Для газовых смесей:

<div class="equation-block">
  <span class="equation-main">1/ν = x<sub>1</sub>/ν<sub>1</sub> + x<sub>2</sub>/ν<sub>2</sub> + x<sub>3</sub>/ν<sub>3</sub> + …</span>
  <span class="equation-number">(1.37)</span>
</div>

Для взаимно нерастворимых жидких смесей:

<div class="equation-block">
  <span class="equation-main">lg(μ<sub>mix</sub>) = x<sub>1</sub> lg(μ<sub>1</sub>) + x<sub>2</sub> lg(μ<sub>2</sub>) + …</span>
  <span class="equation-number">(1.38)</span>
</div>

Для разбавленных суспензий:

<div class="equation-block">
  <span class="equation-main">μ<sub>s</sub> = μ<sub>l</sub> (1 + 4.5 x<sub>V</sub>),</span>
  <span class="equation-number">(1.39)</span>
</div>

Теплопроводность λ характеризует способность вещества проводить тепло. Она зависит от состава, температуры, давления, плотности и влажности и входит в уравнения теплообмена, а также в критерии Nu и Pr.

Физико-химическая депрессия, или повышение температуры кипения раствора, означает превышение температуры кипения раствора над температурой насыщенного пара растворителя. При других давлениях ее оценивают по формуле:

<div class="equation-block">
  <span class="equation-main">Δ<sub>pc</sub> = Δ&#x27;_pc k</span>
  <span class="equation-number">(1.40)</span>
</div>

### Вопросы и задания для самопроверки раздела

1. Сформулируйте законы сохранения массы и энергии.
2. Объясните законы переноса.
3. Объясните законы равновесия.
4. В чем состоит смысл принципов оптимизации процессов?
5. Сформулируйте теоремы подобия и поясните их применение при масштабировании процессов.
6. Объясните математическое и физическое моделирование.
7. Какие основные физические свойства веществ используют в расчетах процессов и аппаратов?

## После изучения раздела студент должен уметь

- prepare material and heat balances for biotechnological equipment;
- explain the triple analogy of mass, heat and momentum transfer;
- использовать понятия равновесия, правило фаз Гиббса и принцип Ле Шателье для анализа направления процесса;
- explain continuity, countercurrent flow, renewal of contact surface and heat recovery as optimization principles;
- distinguish geometric, kinematic and dynamic similarity;
- use Re, Fr, Eu, Nu, Pr, Pe and other criteria for analysis and scale-up;
- convert mass, volume and mole fractions;
- use density, viscosity, heat capacity, thermal conductivity and boiling-point elevation in calculations.

## Тест для самопроверки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="ru"
  data-course="bioprocess-engineering"
  data-chapter="chapter-01-general-information"
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
  <input type="radio" name="course-test-1-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>энергетический баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-0" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>материальный баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>критерии подобия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>физические свойства</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Какой подраздел непосредственно входит в структуру раздела раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>1.2. Метод подобия и его роль в изучении процессов и аппаратов биотехнологических производств</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>1.3. Основные физические свойства веществ</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-1" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>1.1. Основные законы технологических процессов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>1.4. Основные физико-технические свойства веществ</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На какое понятие прежде всего опирается инженерный анализ этого раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>материальный баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>критерии подобия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>физические свойства</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-2" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>энергетический баланс</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Что теснее всего связывает теорию процесса с аппаратурным оформлением?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-3" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>физические свойства</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>материальный баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>энергетический баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>критерии подобия</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>материальный баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-4" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>критерии подобия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>энергетический баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>физические свойства</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. С какой темы начинается раздел в структуре раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>1.2. Метод подобия и его роль в изучении процессов и аппаратов биотехнологических производств</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>1.3. Основные физические свойства веществ</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-5" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>1.1. Основные законы технологических процессов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>1.4. Основные физико-технические свойства веществ</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Какой подраздел непосредственно входит в структуру раздела раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>1.1. Основные законы технологических процессов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>1.3. Основные физические свойства веществ</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>1.4. Основные физико-технические свойства веществ</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-6" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>1.2. Метод подобия и его роль в изучении процессов и аппаратов биотехнологических производств</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Какая тема завершает структуру раздела раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-7" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>1.4. Основные физико-технические свойства веществ</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>1.1. Основные законы технологических процессов</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>1.2. Метод подобия и его роль в изучении процессов и аппаратов биотехнологических производств</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>1.3. Основные физические свойства веществ</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Какую пару понятий целесообразно сопоставлять при самопроверке?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>критерии подобия / физические свойства</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-8" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>материальный баланс / энергетический баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>материальный баланс / критерии подобия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>энергетический баланс / физические свойства</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Что лучше всего подходит для практического обоснования выбора процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>материальный баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>энергетический баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-9" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>физические свойства</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>критерии подобия</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>материальный баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>критерии подобия</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>физические свойства</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-10" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>энергетический баланс</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Какой объект представлен в этом разделе как наглядный рисунок?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-11" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Схема материального баланса</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>материальный баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>энергетический баланс</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>критерии подобия</span>
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
<li>Вопрос 1: Правильный ответ - B</li>
<li>Вопрос 2: Правильный ответ - C</li>
<li>Вопрос 3: Правильный ответ - D</li>
<li>Вопрос 4: Правильный ответ - A</li>
<li>Вопрос 5: Правильный ответ - B</li>
<li>Вопрос 6: Правильный ответ - C</li>
<li>Вопрос 7: Правильный ответ - D</li>
<li>Вопрос 8: Правильный ответ - A</li>
<li>Вопрос 9: Правильный ответ - B</li>
<li>Вопрос 10: Правильный ответ - C</li>
<li>Вопрос 11: Правильный ответ - D</li>
<li>Вопрос 12: Правильный ответ - A</li>
</ol>
</details>
</section>
