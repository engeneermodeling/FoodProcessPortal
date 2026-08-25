---
title: "Chapter 8. Evaporation"
course: "bioprocess-engineering"
course_title: "Bioprocess Engineering: Processes and Equipment of Biotechnological Production"
chapter: 8
description: "Single-effect and multiple-effect evaporators, heat pumps, equipment designs and calculation."
updated: "2026-08-23"
---

## Source and Scope

Material basis: the textbook "Bioprocess Engineering. Module 1. Processes and Equipment of Biotechnological Production", edited by V.L. Zavialov, NUFT, 2024.

The page follows the logic of the corresponding textbook chapter; the test items are added as a learning tool for checking comprehension.

## Textbook-Based Structure

- 8.1. General information
- 8.2. Evaporation in a single-effect batch unit
- 8.3. Multiple-effect evaporators
- 8.4. Evaporators with heat pumps
- 8.5. Evaporator designs
- 8.6. Calculation of a multiple-effect evaporator

## Lecture Notes

### 8.1. General Information

Evaporation is the concentration of solutions of nonvolatile substances by partial removal of a volatile solvent at the boiling temperature. Unlike surface evaporation, boiling evaporation occurs throughout the whole liquid volume.

Biotechnological, food and pharmaceutical production often concentrates aqueous solutions. Primary heating steam supplies heat, while secondary vapor should be reused whenever possible. Thermolabile products are evaporated under vacuum to reduce the boiling temperature.

### 8.2. Evaporation in a Single-Effect Batch Unit

In a single-effect unit, the initial solution enters the apparatus during a cycle, while concentrated solution, secondary vapor and heating-steam condensate leave it. The material balance is written for the total solution and for dry solids.

![Fig. 8.1. Evaporator scheme](/images/courses/bioprocess-engineering/chapter-08/fig-8-1.webp)
*Fig. 8.1. Evaporator scheme*

<div class="equation-block">
  <span class="equation-main">S<sub>in</sub> = S<sub>out</sub> + W</span>
  <span class="equation-number">(8.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">S<sub>in</sub>B<sub>in</sub> = S<sub>out</sub>B<sub>out</sub></span>
  <span class="equation-number">(8.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = [S<sub>out</sub>c<sub>out</sub>t<sub>out</sub> + Wi + Dθc<sub>c</sub> + Q<sub>loss</sub> - S<sub>in</sub>c<sub>in</sub>t<sub>in</sub>]/i″</span>
  <span class="equation-number">(8.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q = Wr</span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">D = [S<sub>in</sub>c(t<sub>boil</sub> - t<sub>in</sub>) + Wr - S<sub>out</sub>c<sub>out</sub>(t<sub>out</sub> - t<sub>boil</sub>) + Q<sub>loss</sub>]/(i″ - θc<sub>c</sub>)</span>
  <span class="equation-number">(8.4)</span>
</div>

Batch evaporation under vacuum lowers the product boiling temperature and increases the useful temperature difference between heating steam and boiling solution.

![Fig. 8.2. Single-effect evaporator unit](/images/courses/bioprocess-engineering/chapter-08/fig-8-2.webp)
*Fig. 8.2. Single-effect evaporator unit*

### 8.3. Multiple-Effect Evaporator Units

A multiple-effect evaporator uses secondary vapor from the previous effect as heating steam for the next one. The same heat is therefore used repeatedly, and primary steam consumption decreases.

![Fig. 8.3. Multiple-effect evaporator with condenser](/images/courses/bioprocess-engineering/chapter-08/fig-8-3.webp)
*Fig. 8.3. Multiple-effect evaporator with condenser*

<div class="equation-block">
  <span class="equation-main">θ ≈ T - 2...3</span>
  <span class="equation-number">(8.5)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = S<sub>in</sub>(1 - B<sub>in</sub>/B<sub>out</sub>)</span>
  <span class="equation-number">(8.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D ≈ W/n</span>
  <span class="equation-number">(8.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W<sub>n</sub> = α<sub>n</sub>D<sub>n-1</sub></span>
  <span class="equation-number">(8.8)</span>
</div>

The useful temperature difference in the effects is lower than the total difference because of temperature losses: physicochemical boiling-point elevation, hydrostatic depression and pressure losses in vapor lines.

<div class="equation-block">
  <span class="equation-main">Δt<sub>use,n</sub> = T<sub>n</sub> - t<sub>n</sub></span>
  <span class="equation-number">(8.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ΣΔt<sub>use</sub> = Δt<sub>1</sub> + Δt<sub>2</sub> + ... + Δt<sub>n</sub></span>
  <span class="equation-number">(8.10)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ΣΔt<sub>loss</sub> = ΣΔ′ + ΣΔ″ + ΣΔ‴</span>
  <span class="equation-number">(8.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δ″ = t<sub>boil</sub>(p + Δp) - t<sub>boil</sub>(p)</span>
  <span class="equation-number">(8.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">t<sub>n</sub> = T<sub>n</sub> + Δ′<sub>n</sub> + Δ″<sub>n</sub></span>
  <span class="equation-number">(8.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δt<sub>use</sub> = Δt<sub>total</sub> - ΣΔt<sub>loss</sub></span>
  <span class="equation-number">(8.14)</span>
</div>

<div class="equation-block">
  <span class="equation-main">F<sub>n</sub> = Q<sub>n</sub>/(k<sub>n</sub>Δt<sub>n</sub>)</span>
  <span class="equation-number">(8.15)</span>
</div>

### 8.4. Evaporator Units with Heat Pumps

Heat-pump evaporators improve energy efficiency. In the mechanical version, secondary vapor is compressed by a turbocompressor; in the injector version, a jet of live steam raises its parameters.

![Fig. 8.4. Single-effect evaporator with turbocompressor](/images/courses/bioprocess-engineering/chapter-08/fig-8-4.webp)
*Fig. 8.4. Single-effect evaporator with turbocompressor*

![Fig. 8.5. Evaporator with an injector heat pump](/images/courses/bioprocess-engineering/chapter-08/fig-8-5.webp)
*Fig. 8.5. Evaporator with an injector heat pump*

### 8.5. Evaporator Designs

Evaporators are classified by circulation mode, number of passes through the heating surface, surface position and heating-surface configuration. For heat-sensitive or viscous media, residence time, circulation intensity and cleanability are especially important.

![Fig. 8.6. Evaporator with a central circulation tube](/images/courses/bioprocess-engineering/chapter-08/fig-8-6.webp)
*Fig. 8.6. Evaporator with a central circulation tube*

![Fig. 8.7. Evaporator with external circulation tubes](/images/courses/bioprocess-engineering/chapter-08/fig-8-7.webp)
*Fig. 8.7. Evaporator with external circulation tubes*

![Fig. 8.8. Evaporator with an external heating surface](/images/courses/bioprocess-engineering/chapter-08/fig-8-8.webp)
*Fig. 8.8. Evaporator with an external heating surface*

![Fig. 8.9. Evaporator with single-pass liquid flow](/images/courses/bioprocess-engineering/chapter-08/fig-8-9.webp)
*Fig. 8.9. Evaporator with single-pass liquid flow*

![Fig. 8.10. Forced-circulation evaporator](/images/courses/bioprocess-engineering/chapter-08/fig-8-10.webp)
*Fig. 8.10. Forced-circulation evaporator*

![Fig. 8.11. Falling-film evaporator](/images/courses/bioprocess-engineering/chapter-08/fig-8-11.webp)
*Fig. 8.11. Falling-film evaporator*

![Fig. 8.12. Rotor film evaporator](/images/courses/bioprocess-engineering/chapter-08/fig-8-12.webp)
*Fig. 8.12. Rotor film evaporator*

### 8.6. Calculation of a Multiple-Effect Evaporator Unit

Calculation of a multiple-effect unit includes the amount of water evaporated in each effect, heat duties, overall heat-transfer coefficients and heating surface areas.

<div class="equation-block">
  <span class="equation-main">W = S(B<sub>out</sub> - B<sub>in</sub>)/B<sub>out</sub></span>
  <span class="equation-number">(8.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = nW<sub>last</sub> + E<sub>1</sub> + 2E<sub>2</sub> + ... + (n - 1)E<sub>n-1</sub></span>
  <span class="equation-number">(8.17)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W<sub>last</sub> = [W - E<sub>1</sub> - 2E<sub>2</sub> - ... - (n - 1)E<sub>n-1</sub>]/n</span>
  <span class="equation-number">(8.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W<sub>i</sub> = W<sub>last</sub> + E<sub>i</sub> + E<sub>i+1</sub> + ... + E<sub>n-1</sub></span>
  <span class="equation-number">(8.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">R<sub>1</sub> = 1/α<sub>cond</sub></span>
  <span class="equation-number">(8.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">α<sub>boil</sub> = A q<sup>m</sup></span>
  <span class="equation-number">(8.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">U = f(Δt)</span>
  <span class="equation-number">(8.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">t<sub>w</sub> = t<sub>steam</sub> - q/α<sub>cond</sub></span>
  <span class="equation-number">(8.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">t<sub>film</sub> = 0.5(t<sub>w</sub> + t<sub>boil</sub>)</span>
  <span class="equation-number">(8.24)</span>
</div>

## After studying this chapter, students should be able to

- explain the role of "secondary vapour" within the chapter;
- connect "effect" with equipment design in biotechnological production;
- distinguish the main parameters that affect "concentration";
- justify process selection or evaluation through "heat balance".

## Self-Check Test

<section
  class="course-self-test"
  data-course-self-test
  data-locale="en"
  data-course="bioprocess-engineering"
  data-chapter="chapter-08-evaporation"
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
  <input type="radio" name="course-test-8-0" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>secondary vapour</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>effect</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>concentration</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>heat balance</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Which subsection directly belongs to the textbook structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>8.2. Evaporation in a single-effect batch unit</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-1" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>8.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>8.3. Multiple-effect evaporators</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>8.4. Evaporators with heat pumps</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Which concept should engineering analysis of this chapter rely on first?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>secondary vapour</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>concentration</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-2" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>effect</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>heat balance</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. What most closely connects process theory with equipment design?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>secondary vapour</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>effect</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>concentration</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-3" value="3" data-correct="1" />
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
  <input type="radio" name="course-test-8-4" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>concentration</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>secondary vapour</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>effect</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-4" value="3" data-correct="0" />
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
  <input type="radio" name="course-test-8-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>8.2. Evaporation in a single-effect batch unit</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-5" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>8.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>8.3. Multiple-effect evaporators</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>8.4. Evaporators with heat pumps</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Which subsection directly belongs to the textbook structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>8.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>8.3. Multiple-effect evaporators</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-6" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>8.2. Evaporation in a single-effect batch unit</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>8.4. Evaporators with heat pumps</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Which topic closes the chapter in the textbook structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>8.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>8.2. Evaporation in a single-effect batch unit</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>8.3. Multiple-effect evaporators</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-7" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>8.6. Calculation of a multiple-effect evaporator</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Which pair of concepts is useful to compare during self-check?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-8" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>secondary vapour / effect</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>concentration / heat balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>secondary vapour / concentration</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>effect / heat balance</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. What best supports practical justification of process selection?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>secondary vapour</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-9" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>heat balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>effect</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>concentration</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>secondary vapour</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>concentration</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-10" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>effect</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>heat balance</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Which object is presented as a visual figure in this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>secondary vapour</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>effect</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>concentration</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-11" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Evaporator scheme</span>
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
<li>Question 1: Correct answer - A</li>
<li>Question 2: Correct answer - B</li>
<li>Question 3: Correct answer - C</li>
<li>Question 4: Correct answer - D</li>
<li>Question 5: Correct answer - A</li>
<li>Question 6: Correct answer - B</li>
<li>Question 7: Correct answer - C</li>
<li>Question 8: Correct answer - D</li>
<li>Question 9: Correct answer - A</li>
<li>Question 10: Correct answer - B</li>
<li>Question 11: Correct answer - C</li>
<li>Question 12: Correct answer - D</li>
</ol>
</details>
</section>

## Further Development

In the next pass, this chapter can be expanded with formulas, calculation examples, equipment figures and links to current biotechnological production cases.
