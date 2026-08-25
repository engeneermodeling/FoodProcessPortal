---
title: "Chapter 11. Drying"
course: "bioprocess-engineering"
course_title: "Bioprocess Engineering: Processes and Equipment of Biotechnological Production"
chapter: 11
description: "Humid air, I-x diagram, drying statics and kinetics, dryer designs and intensification."
updated: "2026-08-23"
---

## Source and Scope

Material basis: the textbook "Bioprocess Engineering. Module 1. Processes and Equipment of Biotechnological Production", edited by V.L. Zavialov, NUFT, 2024.

The page follows the logic of the corresponding textbook chapter; the test items are added as a learning tool for checking comprehension.

## Textbook-Based Structure

- 11.1. General information
- 11.2. Physical properties of humid air
- 11.3. State diagram of humid air
- 11.4. Wet material as a drying object
- 11.5. Drying statics
- 11.6. Drying kinetics
- 11.7. Dryer designs

## Lecture Notes

The chapter is converted into a clean lecture structure with formulas, figures and captions from Chapter 11 of the textbook.

### 11.1. General Information

Drying is a combined heat- and mass-transfer process in which moisture evaporates from a material and is removed by the drying agent. In biotechnology and food production it stabilizes products, reduces mass and improves storage resistance.

### 11.2. Physical Properties of Humid Air

Humid air is treated as a mixture of dry air and water vapour. Calculations use partial pressures, relative humidity, humidity ratio, density, heat capacity, enthalpy, dew point and drying potential.

<div class="equation-block">
  <span class="equation-main">R = m<sub>a</sub>R<sub>a</sub> + m<sub>v</sub>R<sub>v</sub></span>
  <span class="equation-number">(11.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">p = p<sub>a</sub> + p<sub>v</sub></span>
  <span class="equation-number">(11.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">φ = ρ<sub>v</sub>/ρ<sub>s</sub></span>
  <span class="equation-number">(11.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ρ<sub>v</sub> = p<sub>v</sub>/(R<sub>v</sub>T); ρ<sub>s</sub> = p<sub>s</sub>/(R<sub>v</sub>T)</span>
  <span class="equation-number">(11.4)</span>
</div>

<div class="equation-block">
  <span class="equation-main">φ = p<sub>v</sub>/p<sub>s</sub></span>
  <span class="equation-number">(11.5)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x = ρ<sub>v</sub>/ρ<sub>a</sub></span>
  <span class="equation-number">(11.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x = 0.622 p<sub>v</sub>/p<sub>a</sub></span>
  <span class="equation-number">(11.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x = 0.622 φp<sub>s</sub>/(p - φp<sub>s</sub>)</span>
  <span class="equation-number">(11.8)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ρ = ρ<sub>a</sub>(1 + x)</span>
  <span class="equation-number">(11.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">c = c<sub>a</sub> + xc<sub>v</sub></span>
  <span class="equation-number">(11.10)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = c<sub>a</sub>t + xi</span>
  <span class="equation-number">(11.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = 1.004t + (1.842t + 2500)x</span>
  <span class="equation-number">(11.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">p<sub>v</sub> = xp/(0.622 + x)</span>
  <span class="equation-number">(11.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">E = t - t<sub>w</sub></span>
  <span class="equation-number">(11.14)</span>
</div>

### 11.3. State Diagram of Humid Air

The I-x diagram combines enthalpy, humidity ratio, temperature, relative humidity and vapour pressure, making it possible to plot heating, theoretical and real drying, intermediate heating and recirculation.

![I-x diagram of humid air](/images/courses/bioprocess-engineering/chapter-11/fig-11-1.webp)
*Fig. 11.1. I-x diagram of humid air*

![Air dryer scheme](/images/courses/bioprocess-engineering/chapter-11/fig-11-2.webp)
*Fig. 11.2. Air dryer scheme*

![Drying process in theoretical and real dryers](/images/courses/bioprocess-engineering/chapter-11/fig-11-3.webp)
*Fig. 11.3. Drying process in theoretical and real dryers*

![Dryer with intermediate air heating](/images/courses/bioprocess-engineering/chapter-11/fig-11-5.webp)
*Fig. 11.5. Dryer with intermediate air heating*

![Dryer with partial return of spent air](/images/courses/bioprocess-engineering/chapter-11/fig-11-7.webp)
*Fig. 11.7. Dryer with partial return of spent air*

![Drying process diagram with partial air recirculation](/images/courses/bioprocess-engineering/chapter-11/fig-11-8.webp)
*Fig. 11.8. Drying process diagram with partial air recirculation*

### 11.4. Wet Material as a Drying Object

Moisture content can be referred to total mass or to dry solids. Free, bound, equilibrium and critical moisture determine the drying path.

<div class="equation-block">
  <span class="equation-main">w = m<sub>w</sub> · 100/m</span>
  <span class="equation-number">(11.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">w<sub>c</sub> = m<sub>w</sub> · 100/m<sub>d</sub></span>
  <span class="equation-number">(11.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = W<sub>1</sub> - W<sub>2</sub></span>
  <span class="equation-number">(11.17)</span>
</div>

### 11.5. Drying Statics

Drying statics is based on material and heat balances. It gives air demand, removed moisture, heat demand and the process path on the I-x diagram.

<div class="equation-block">
  <span class="equation-main">m<sub>1</sub>(100 - w<sub>1</sub>) = m<sub>2</sub>(100 - w<sub>2</sub>)</span>
  <span class="equation-number">(11.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>1</sub> = m<sub>2</sub>(100 - w<sub>2</sub>)/(100 - w<sub>1</sub>)</span>
  <span class="equation-number">(11.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>2</sub> = m<sub>1</sub>(100 - w<sub>1</sub>)/(100 - w<sub>2</sub>)</span>
  <span class="equation-number">(11.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = m<sub>1</sub> - m<sub>2</sub></span>
  <span class="equation-number">(11.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = m<sub>1</sub>(w<sub>1</sub> - w<sub>2</sub>)/(100 - w<sub>2</sub>)</span>
  <span class="equation-number">(11.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = m<sub>2</sub>(w<sub>1</sub> - w<sub>2</sub>)/(100 - w<sub>1</sub>)</span>
  <span class="equation-number">(11.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L = W/(x<sub>2</sub> - x<sub>0</sub>)</span>
  <span class="equation-number">(11.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">l = L/W = 1/(x<sub>2</sub> - x<sub>0</sub>)</span>
  <span class="equation-number">(11.25)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q = L(I<sub>1</sub> - I<sub>0</sub>)</span>
  <span class="equation-number">(11.26)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = Q/W = l(I<sub>1</sub> - I<sub>0</sub>)</span>
  <span class="equation-number">(11.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δ = q<sub>d</sub> + q<sub>m</sub> - q<sub>loss</sub></span>
  <span class="equation-number">(11.28)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I<sub>2</sub> = I<sub>1</sub> + Δ/l</span>
  <span class="equation-number">(11.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">l = (I<sub>1</sub> - I<sub>0</sub>)/(I<sub>2</sub> - I<sub>0</sub>)</span>
  <span class="equation-number">(11.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I<sub>mix</sub> = (L<sub>0</sub>I<sub>0</sub> + L<sub>r</sub>I<sub>2</sub>)/(L<sub>0</sub> + L<sub>r</sub>)</span>
  <span class="equation-number">(11.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x<sub>mix</sub> = (L<sub>0</sub>x<sub>0</sub> + L<sub>r</sub>x<sub>2</sub>)/(L<sub>0</sub> + L<sub>r</sub>)</span>
  <span class="equation-number">(11.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">η = Q<sub>evap</sub>/Q<sub>total</sub></span>
  <span class="equation-number">(11.33)</span>
</div>

### 11.6. Drying Kinetics

Drying kinetics describes how material moisture changes with time. The constant-rate period is governed mainly by external transfer; the falling-rate period is governed by internal diffusion.

<div class="equation-block">
  <span class="equation-main">N = W/(Fτ)</span>
  <span class="equation-number">(11.34)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N = -(G<sub>d</sub>/F) dw<sub>c</sub>/dτ</span>
  <span class="equation-number">(11.35)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N = k<sub>y</sub>(y<sub>s</sub> - y)</span>
  <span class="equation-number">(11.36)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N = α(t - t<sub>s</sub>)/r</span>
  <span class="equation-number">(11.37)</span>
</div>

<div class="equation-block">
  <span class="equation-main">τ = (G<sub>d</sub>/F) ∫ dw<sub>c</sub>/N</span>
  <span class="equation-number">(11.38)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N = K(w<sub>c</sub> - w<sub>eq</sub>)</span>
  <span class="equation-number">(11.39)</span>
</div>

<div class="equation-block">
  <span class="equation-main">τ = (G<sub>d</sub>/(FK)) ln[(w<sub>c0</sub> - w<sub>eq</sub>)/(w<sub>c</sub> - w<sub>eq</sub>)]</span>
  <span class="equation-number">(11.40)</span>
</div>

<div class="equation-block">
  <span class="equation-main">u = W/(Vτ)</span>
  <span class="equation-number">(11.41)</span>
</div>

<div class="equation-block">
  <span class="equation-main">w<sub>avg</sub> = W/(ρ<sub>a</sub>F)</span>
  <span class="equation-number">(11.42)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dw<sub>c</sub>/dτ = -k(w<sub>c</sub> - w<sub>eq</sub>)</span>
  <span class="equation-number">(11.43)</span>
</div>

![Drying curve of a wet material](/images/courses/bioprocess-engineering/chapter-11/fig-11-9.webp)
*Fig. 11.9. Drying curve of a wet material*

![Drying-rate curves for different materials](/images/courses/bioprocess-engineering/chapter-11/fig-11-10.webp)
*Fig. 11.10. Drying-rate curves for different materials*

### 11.7. Dryer Designs

Dryer type is selected from material state, heat sensitivity, particle size, residence time and required product quality.

<div class="equation-block">
  <span class="equation-main">τ = (1/k) ln[(w<sub>c0</sub> - w<sub>eq</sub>)/(w<sub>c</sub> - w<sub>eq</sub>)]</span>
  <span class="equation-number">(11.44)</span>
</div>

![Chamber dryer scheme](/images/courses/bioprocess-engineering/chapter-11/fig-11-13.webp)
*Fig. 11.13. Chamber dryer scheme*

![Rotary drum dryer scheme](/images/courses/bioprocess-engineering/chapter-11/fig-11-14.webp)
*Fig. 11.14. Rotary drum dryer scheme*

![Types of flights in a rotary drum dryer](/images/courses/bioprocess-engineering/chapter-11/fig-11-15.webp)
*Fig. 11.15. Types of flights in a rotary drum dryer*

![Tunnel dryer scheme](/images/courses/bioprocess-engineering/chapter-11/fig-11-16.webp)
*Fig. 11.16. Tunnel dryer scheme*

![Belt dryer scheme](/images/courses/bioprocess-engineering/chapter-11/fig-11-17.webp)
*Fig. 11.17. Belt dryer scheme*

![Shaft dryer scheme](/images/courses/bioprocess-engineering/chapter-11/fig-11-18.webp)
*Fig. 11.18. Shaft dryer scheme*

![Spray dryer scheme](/images/courses/bioprocess-engineering/chapter-11/fig-11-19.webp)
*Fig. 11.19. Spray dryer scheme*

![Fluidized-bed dryer scheme](/images/courses/bioprocess-engineering/chapter-11/fig-11-20.webp)
*Fig. 11.20. Fluidized-bed dryer scheme*

![Spouted-bed dryer scheme](/images/courses/bioprocess-engineering/chapter-11/fig-11-21.webp)
*Fig. 11.21. Spouted-bed dryer scheme*

![Double-drum dryer scheme](/images/courses/bioprocess-engineering/chapter-11/fig-11-22.webp)
*Fig. 11.22. Double-drum dryer scheme*

![Freeze-dryer scheme](/images/courses/bioprocess-engineering/chapter-11/fig-11-23.webp)
*Fig. 11.23. Freeze-dryer scheme*

![Radiation dryer scheme](/images/courses/bioprocess-engineering/chapter-11/fig-11-24.webp)
*Fig. 11.24. Radiation dryer scheme*

![High-frequency dryer scheme](/images/courses/bioprocess-engineering/chapter-11/fig-11-25.webp)
*Fig. 11.25. High-frequency dryer scheme*

## After studying this chapter, students should be able to

- explain the role of "humid air" within the chapter;
- connect "material balance" with equipment design in biotechnological production;
- distinguish the main parameters that affect "heat balance";
- justify process selection or evaluation through "drying kinetics".

## Self-Check Test

<section
  class="course-self-test"
  data-course-self-test
  data-locale="en"
  data-course="bioprocess-engineering"
  data-chapter="chapter-11-drying"
  data-result-label="Result"
  data-best-label="Best score"
  data-choose-label="Choose an answer."
  data-correct-label="Correct."
  data-incorrect-label="Review needed."
>
<form data-course-test-form>
<fieldset class="course-test-item" data-course-test-item>
<legend>1. Which concept best characterizes the chapter content?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>material balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>heat balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>drying kinetics</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-0" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>humid air</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Which subsection directly belongs to the textbook structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-1" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>11.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>11.2. Physical properties of humid air</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>11.3. State diagram of humid air</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>11.4. Wet material as a drying object</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Which concept should engineering analysis of this chapter rely on first?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>humid air</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-2" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>material balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>heat balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>drying kinetics</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. What most closely connects process theory with equipment design?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>humid air</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>material balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-3" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>drying kinetics</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>heat balance</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>humid air</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>material balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>drying kinetics</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-4" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>heat balance</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Which topic opens the chapter in the textbook structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-5" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>11.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>11.2. Physical properties of humid air</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>11.3. State diagram of humid air</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>11.4. Wet material as a drying object</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Which subsection directly belongs to the textbook structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>11.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-6" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>11.2. Physical properties of humid air</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>11.3. State diagram of humid air</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>11.4. Wet material as a drying object</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Which topic closes the chapter in the textbook structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>11.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>11.2. Physical properties of humid air</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-7" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>11.7. Dryer designs</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>11.3. State diagram of humid air</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Which pair of concepts is useful to compare during self-check?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>heat balance / drying kinetics</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>humid air / heat balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>material balance / drying kinetics</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-8" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>humid air / material balance</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. What best supports practical justification of process selection?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-9" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>drying kinetics</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>humid air</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>material balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>heat balance</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>humid air</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-10" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>material balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>heat balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>drying kinetics</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Which object is presented as a visual figure in this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>humid air</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>material balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-11" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>I-x diagram of humid air</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>heat balance</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>
<div class="course-test-actions">
  <button type="submit" class="course-test-primary">Check</button>
  <button type="button" class="course-test-secondary" data-course-test-reset>Reset</button>
</div>
</form>
<p class="course-test-status" aria-live="polite">
  <strong data-course-test-result>Result: 0/12</strong>
  <span data-course-test-best>Best score: -</span>
</p>
<details class="course-test-answers">
<summary>Answers</summary>
<ol>
<li>Question 1: Correct answer - D</li>
<li>Question 2: Correct answer - A</li>
<li>Question 3: Correct answer - B</li>
<li>Question 4: Correct answer - C</li>
<li>Question 5: Correct answer - D</li>
<li>Question 6: Correct answer - A</li>
<li>Question 7: Correct answer - B</li>
<li>Question 8: Correct answer - C</li>
<li>Question 9: Correct answer - D</li>
<li>Question 10: Correct answer - A</li>
<li>Question 11: Correct answer - B</li>
<li>Question 12: Correct answer - C</li>
</ol>
</details>
</section>

## Further Development

In the next pass, this chapter can be expanded with formulas, calculation examples, equipment figures and links to current biotechnological production cases.
