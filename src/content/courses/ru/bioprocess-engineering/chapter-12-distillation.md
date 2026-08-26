---
title: "Раздел 12. Перегонка"
course: "bioprocess-engineering"
course_title: "Инжиниринг биопроцессов: процессы и аппараты биотехнологических производств"
chapter: 12
description: "Фазовое равновесие, простая перегонка, ректификация бинарных и многокомпонентных смесей, экстрактивная и азеотропная ректификация."
updated: "2026-08-23"
---

## Источник и границы раздела

Основа материала: учебник «Инжиниринг биопроцессов. Модуль 1. Процессы и аппараты биотехнологических производств» под редакцией В.Л. Завьялова, НУХТ, 2024.

Материал страницы сохранен по логике соответствующего раздела учебника; тестовые вопросы добавлены как учебный инструмент для проверки усвоения.

## Структура материала по учебнику

- 12.1. Фазовое равновесие
- 12.2. Простая перегонка
- 12.3. Ректификация бинарных смесей
- 12.4. Конструкции ректификационных аппаратов
- 12.5. Ректификация многокомпонентных смесей
- 12.6. Экстрактивная ректификация
- 12.7. Азеотропная ректификация

## Конспект лекции

Раздел 12 подан как последовательная лекция: фазовое равновесие, простая перегонка, ректификация, аппаратурные решения и специальные способы разделения.

### 12.1. Фазовое равновесие

Перегонка разделяет кипящие жидкие смеси благодаря различной летучести компонентов. Легколетучий компонент обогащает паровую фазу. Для идеальных смесей применяют законы Рауля и Дальтона, для реальных - экспериментальные равновесные данные.

<div class="equation-block">
  <span class="equation-main">p<sub>A</sub> = P<sub>A</sub>x<sub>A</sub></span>
  <span class="equation-number">(12.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">p = p<sub>A</sub> + p<sub>B</sub></span>
  <span class="equation-number">(12.2)</span>
</div>

![Кривые фазового равновесия](/images/courses/bioprocess-engineering/chapter-12/fig-12-1.webp)
*Рис. 12.1. Кривые фазового равновесия*

### 12.2. Простая перегонка

Простая перегонка - периодический процесс частичного испарения смеси с последующей конденсацией пара. Она подходит для грубого разделения или систем с сильно различной летучестью. Дефлегмация улучшает обогащение пара.

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

![Однократная простая перегонка](/images/courses/bioprocess-engineering/chapter-12/fig-12-2.webp)
*Рис. 12.2. Однократная простая перегонка*

![Простая перегонка с дефлегмацией](/images/courses/bioprocess-engineering/chapter-12/fig-12-3.webp)
*Рис. 12.3. Простая перегонка с дефлегмацией*

### 12.3. Ректификация бинарных смесей

Ректификация многократно повторяет контакт неравновесных потоков пара и жидкости в колонне. Рабочие линии, флегмовое число и число теоретических тарелок определяют качество разделения и расход энергии.

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

![Ректификационная установка периодического действия](/images/courses/bioprocess-engineering/chapter-12/fig-12-4.webp)
*Рис. 12.4. Ректификационная установка периодического действия*

![Схемы ректификационных установок непрерывного действия](/images/courses/bioprocess-engineering/chapter-12/fig-12-5.webp)
*Рис. 12.5. Схемы ректификационных установок непрерывного действия*

![Материальные потоки полной ректификационной колонны](/images/courses/bioprocess-engineering/chapter-12/fig-12-6.webp)
*Рис. 12.6. Материальные потоки полной ректификационной колонны*

![Определение числа теоретических тарелок](/images/courses/bioprocess-engineering/chapter-12/fig-12-7.webp)
*Рис. 12.7. Определение числа теоретических тарелок*

![Влияние флегмового числа на число тарелок](/images/courses/bioprocess-engineering/chapter-12/fig-12-8-9.webp)
*Рис. 12.8-9. Влияние флегмового числа на число тарелок*

![Схемы тепловых потоков колонн](/images/courses/bioprocess-engineering/chapter-12/fig-12-10.webp)
*Рис. 12.10. Схемы тепловых потоков колонн*

### 12.4. Конструкции ректификационных аппаратов

Ректификационные колонны бывают тарельчатыми, насадочными и пленочными. Выбор зависит от производительности, гидравлического сопротивления, загрязнения среды и требуемого качества разделения.

![Конструкции тарелок](/images/courses/bioprocess-engineering/chapter-12/fig-12-11.webp)
*Рис. 12.11. Конструкции тарелок*

![Схема насадочной колонны](/images/courses/bioprocess-engineering/chapter-12/fig-12-12.webp)
*Рис. 12.12. Схема насадочной колонны*

![Схема пленочной колонны](/images/courses/bioprocess-engineering/chapter-12/fig-12-13.webp)
*Рис. 12.13. Схема пленочной колонны*

![Зависимость КПД тарелок от скорости пара](/images/courses/bioprocess-engineering/chapter-12/fig-12-14.webp)
*Рис. 12.14. Зависимость КПД тарелок от скорости пара*

### 12.5. Ректификация многокомпонентных смесей

Для многокомпонентных смесей одна колонна обычно дает два продукта или фракции. Полное разделение n компонентов требует системы колонн.

![Схемы разделения многокомпонентных смесей](/images/courses/bioprocess-engineering/chapter-12/fig-12-15.webp)
*Рис. 12.15. Схемы разделения многокомпонентных смесей*

![Установки для ректификации спиртовых смесей](/images/courses/bioprocess-engineering/chapter-12/fig-12-16.webp)
*Рис. 12.16. Установки для ректификации спиртовых смесей*

### 12.6. Экстрактивная ректификация

Экстрактивная ректификация использует высококипящий разделяющий агент, изменяющий относительную летучесть компонентов.

![Схемы экстрактивной и солевой ректификации](/images/courses/bioprocess-engineering/chapter-12/fig-12-17.webp)
*Рис. 12.17. Схемы экстрактивной и солевой ректификации*

### 12.7. Азеотропная ректификация

Азеотропная ректификация вводит третий компонент, образующий новый азеотроп и позволяющий вывести один из компонентов после конденсации и разделения фаз.

![Схема установки для азеотропной ректификации](/images/courses/bioprocess-engineering/chapter-12/fig-12-18.webp)
*Рис. 12.18. Схема установки для азеотропной ректификации*

## После изучения раздела студент должен уметь

- объяснять роль понятия «фазовое равновесие» в пределах раздела;
- связывать «флегмовое число» с аппаратурным оформлением биотехнологического производства;
- различать основные параметры, влияющие на «тарелка»;
- обосновывать выбор или оценку процесса через «ректификационная колонна».

## Тест для самопроверки

<section
  class="course-self-test"
  data-course-self-test
  data-locale="ru"
  data-course="bioprocess-engineering"
  data-chapter="chapter-12-distillation"
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
  <input type="radio" name="course-test-12-0" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>фазовое равновесие</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>флегмовое число</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>тарелка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>ректификационная колонна</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>12.2. Простая перегонка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-1" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>12.1. Фазовое равновесие</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>12.3. Ректификация бинарных смесей</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>12.4. Конструкции ректификационных аппаратов</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. На какое понятие прежде всего опирается инженерный анализ этого раздела?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>фазовое равновесие</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>тарелка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-2" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>флегмовое число</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>ректификационная колонна</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Что теснее всего связывает теорию процесса с аппаратурным оформлением?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>фазовое равновесие</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>флегмовое число</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>тарелка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-3" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>ректификационная колонна</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-4" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>тарелка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>фазовое равновесие</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>флегмовое число</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>ректификационная колонна</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. С какой темы начинается раздел в структуре учебника?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>12.2. Простая перегонка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-5" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>12.1. Фазовое равновесие</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>12.3. Ректификация бинарных смесей</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>12.4. Конструкции ректификационных аппаратов</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Какой подраздел непосредственно входит в структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>12.1. Фазовое равновесие</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>12.3. Ректификация бинарных смесей</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-6" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>12.2. Простая перегонка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>12.4. Конструкции ректификационных аппаратов</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Какая тема завершает структуру раздела по учебнику?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>12.1. Фазовое равновесие</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>12.2. Простая перегонка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>12.3. Ректификация бинарных смесей</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-7" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>12.7. Азеотропная ректификация</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Какую пару понятий целесообразно сопоставлять при самопроверке?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-8" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>фазовое равновесие / флегмовое число</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>тарелка / ректификационная колонна</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>фазовое равновесие / тарелка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>флегмовое число / ректификационная колонна</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Что лучше всего подходит для практического обоснования выбора процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>фазовое равновесие</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-9" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>ректификационная колонна</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>флегмовое число</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>тарелка</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Какой параметр или явление целесообразно контролировать при анализе процесса?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>фазовое равновесие</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>тарелка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-10" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>флегмовое число</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>ректификационная колонна</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Какой объект представлен в этом разделе как наглядный рисунок?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>фазовое равновесие</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>флегмовое число</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>тарелка</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-11" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Кривые фазового равновесия</span>
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
<li>Вопрос 1: Правильный ответ - A</li>
<li>Вопрос 2: Правильный ответ - B</li>
<li>Вопрос 3: Правильный ответ - C</li>
<li>Вопрос 4: Правильный ответ - D</li>
<li>Вопрос 5: Правильный ответ - A</li>
<li>Вопрос 6: Правильный ответ - B</li>
<li>Вопрос 7: Правильный ответ - C</li>
<li>Вопрос 8: Правильный ответ - D</li>
<li>Вопрос 9: Правильный ответ - A</li>
<li>Вопрос 10: Правильный ответ - B</li>
<li>Вопрос 11: Правильный ответ - C</li>
<li>Вопрос 12: Правильный ответ - D</li>
</ol>
</details>
</section>

## Дальнейшая проработка

На следующем проходе этот раздел можно детализировать формулами, примерами расчетов, рисунками аппаратов и ссылками на современные биотехнологические производства.
