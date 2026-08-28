---
title: "Chapter 5. Mixing"
course: "chemical-process-engineering"
course_title: "Processes and Equipment of Chemical Production"
chapter: 5
description: "Mixing in liquids, power consumption, efficiency and mixing of bulk and plastic materials."
updated: "2026-08-27"
---

## Chapter Focus

This chapter presents the key concepts, equations, and equipment examples for the topic.

## Chapter Structure

- 5.1. General information
- 5.2. Mixing in a liquid medium
- 5.3. Energy consumption for mechanical mixing
- 5.4. Evaluation of mixing efficiency
- 5.5. Mixing of bulk and plastic materials

## Lecture Notes

### 5.1. General Information

Mixing is used to equalize concentration, temperature and physical properties, intensify heat and mass transfer, keep solids suspended, disperse gas or liquid and accelerate biochemical reactions. In chemical equipment it must provide transfer without damaging components or heat-sensitive products.

Mechanical mixing is produced by rotating agitators, pneumatic mixing by gas flow, and circulation mixing by pumped or jet motion of liquid. Blade, screw, drum and combined mixers are used for bulk and plastic materials.

### 5.2. Mixing in a Liquid Medium

In liquid media, mixing depends on agitator type, rotational speed, vessel geometry, baffles, viscosity and gas holdup. Baffles break the circular motion of liquid and help form axial and radial circulation.

![Fig. 5.2. Example of mechanical mixing](/images/courses/chemical-process-engineering/chapter-05/fig-5-2.webp)

![Fig. 5.3. Schemes of flow patterns in vessels with baffles and agitators](/images/courses/chemical-process-engineering/chapter-05/fig-5-3.webp)

### 5.3. Power Consumption for Mechanical Mixing

During mechanical mixing the liquid is forced to move. Power consumption is estimated with criterion relations similar to hydrodynamic equations:

<div class="equation-block">
  <span class="equation-main">Eu = f(Re, Fr, Γ<sub>1</sub>, Γ<sub>2</sub>, ...)</span>
  <span class="equation-number">(5.1)</span>
</div>

For mixing processes, modified criteria are introduced; the characteristic velocity is proportional to the agitator tip speed:

<div class="equation-block">
  <span class="equation-main">Eu<sub>m</sub> = f(Re<sub>m</sub>, Fr<sub>m</sub>, Γ<sub>1</sub>, Γ<sub>2</sub>, ...)</span>
  <span class="equation-number">(5.2)</span>
</div>

In power-law form:

<div class="equation-block">
  <span class="equation-main">Eu<sub>m</sub> = C′Re<sub>m</sub><sup>k′</sup>Fr<sub>m</sub><sup>m′</sup>Γ<sub>1</sub><sup>n′</sup>Γ<sub>2</sub><sup>p′</sup>...</span>
  <span class="equation-number">(5.3)</span>
</div>

If gravity can be neglected, for example when baffles are installed, the equation is simplified:

<div class="equation-block">
  <span class="equation-main">Eu<sub>m</sub> = CRe<sub>m</sub><sup>k</sup>Γ<sub>1</sub><sup>n</sup>Γ<sub>2</sub><sup>p</sup></span>
  <span class="equation-number">(5.4)</span>
</div>

Experimental curves of Eu<sub>m</sub> versus Re<sub>m</sub> are used to select agitator power.

![Fig. 5.5. Eu<sub>m</sub> versus Re<sub>m</sub> for different agitator types](/images/courses/chemical-process-engineering/chapter-05/fig-5-5.webp)

![Fig. 5.6. Agitator types for experimental power curves](/images/courses/chemical-process-engineering/chapter-05/fig-5-6.webp)

From dimensional analysis, mechanical mixing power is written as a function of viscosity μ, density ρ, rotational speed n and agitator diameter d:

<div class="equation-block">
  <span class="equation-main">N = Cμ<sup>x</sup>ρ<sup>y</sup>n<sup>z</sup>d<sup>v</sup></span>
  <span class="equation-number">(5.5)</span>
</div>

Dimensional equation:

<div class="equation-block">
  <span class="equation-main">kg · m<sup>2</sup> · s<sup>-3</sup> = kg<sup>x+y</sup> · s<sup>-x-z</sup> · m<sup>-x-3y+v</sup></span>
  <span class="equation-number">(5.6)</span>
</div>

After rearrangement, the criterion form is:

<div class="equation-block">
  <span class="equation-main">N/(ρn<sup>3</sup>d<sup>5</sup>) = C(ρnd<sup>2</sup>/μ)<sup>-x</sup></span>
  <span class="equation-number">(5.7)</span>
</div>

Or:

<div class="equation-block">
  <span class="equation-main">Eu<sub>m</sub> = CRe<sub>m</sub><sup>k</sup></span>
  <span class="equation-number">(5.8)</span>
</div>

Installed motor power including reserve and correction factors:

<div class="equation-block">
  <span class="equation-main">N<sub>v</sub> = 1.3Nf<sub>h</sub>f<sub>r</sub>f<sub>c</sub>f<sub>g</sub>/η</span>
  <span class="equation-number">(5.9)</span>
</div>

Starting power for a blade agitator:

<div class="equation-block">
  <span class="equation-main">N<sub>p</sub> ≈ 1.9ρhn<sup>3</sup>d<sup>4</sup></span>
  <span class="equation-number">(5.10)</span>
</div>

![Fig. 5.8. Schemes of blade agitators](/images/courses/chemical-process-engineering/chapter-05/fig-5-8.webp)

![Fig. 5.9. Blade agitator with planetary drive](/images/courses/chemical-process-engineering/chapter-05/fig-5-9.webp)

![Fig. 5.10. Three-blade propeller agitator screw](/images/courses/chemical-process-engineering/chapter-05/fig-5-10.webp)

![Fig. 5.11. Turbine impeller with a guide device](/images/courses/chemical-process-engineering/chapter-05/fig-5-11.webp)

For pneumatic mixing, power is determined by gas flow rate V, pressure head Δp and blower efficiency η:

<div class="equation-block">
  <span class="equation-main">N = VΔp/η</span>
  <span class="equation-number">(5.11)</span>
</div>

Gas pressure head considering pressure, liquid column and pipeline losses:

<div class="equation-block">
  <span class="equation-main">Δp = p<sub>0</sub> + ρ<sub>l</sub>gh + (ρ<sub>g</sub>w<sub>g</sub><sup>2</sup>/2)(λl/d + Σξ)</span>
  <span class="equation-number">(5.12)</span>
</div>

For engineering calculations when air-line length is unknown:

<div class="equation-block">
  <span class="equation-main">Δp = p<sub>0</sub> + 1.2ρ<sub>l</sub>gH</span>
  <span class="equation-number">(5.13)</span>
</div>

Air flow rate for mixing:

<div class="equation-block">
  <span class="equation-main">V = KFp/(9.81 · 10<sup>4</sup>)</span>
  <span class="equation-number">(5.14)</span>
</div>

![Fig. 5.14. Schemes of a sparged mixer and spargers](/images/courses/chemical-process-engineering/chapter-05/fig-5-14.webp)

![Fig. 5.15. Equipment for pneumatic mixing and aeration](/images/courses/chemical-process-engineering/chapter-05/fig-5-15.webp)

Circulation and jet mixing use the kinetic energy of a stream leaving a nozzle or being returned to the vessel by a pump.

![Fig. 5.16. Scheme of liquid motion from a submerged nozzle](/images/courses/chemical-process-engineering/chapter-05/fig-5-16.webp)

![Fig. 5.19. Scheme of circulation mixing](/images/courses/chemical-process-engineering/chapter-05/fig-5-19.webp)

### 5.4. Evaluation of Mixing Efficiency

Mixing efficiency is evaluated by the time needed to reach the required uniformity and by concentration nonuniformity of a tracer component at different points in the vessel. Lower deviations from the mean indicate better mixing. For bioreactors, shear stress, dissolved oxygen distribution, foaming and local overheating or substrate-deficient zones are also considered.

### 5.5. Mixing of Bulk and Plastic Materials

Bulk and plastic materials are mixed in blade, screw, drum, ribbon and other mixers. Important factors are mixing time, component distribution uniformity, lump breakage, prevention of segregation and mechanical load on the product.

![Fig. 5.22. Mixing devices for bulk and plastic masses](/images/courses/chemical-process-engineering/chapter-05/fig-5-22.webp)

## After studying this chapter, students should be able to

- explain the role of "agitator" within the chapter;
- connect "circulation" with equipment design in chemical production;
- distinguish the main parameters that affect "power number";
- justify process selection or evaluation through "uniformity".

## Self-Check Test

<section
  class="course-self-test"
  data-course-self-test
  data-locale="en"
  data-course="chemical-process-engineering"
  data-chapter="chapter-05-mixing"
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
  <input type="radio" name="course-test-5-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>circulation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-0" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>agitator</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>power number</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>uniformity</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Which subsection directly belongs to the course structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>5.2. Mixing in a liquid medium</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>5.3. Energy consumption for mechanical mixing</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-1" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>5.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>5.4. Evaluation of mixing efficiency</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Which concept should engineering analysis of this chapter rely on first?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>agitator</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>power number</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>uniformity</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-2" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>circulation</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. What most closely connects process theory with equipment design?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-3" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>uniformity</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>agitator</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>circulation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>power number</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>agitator</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-4" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>power number</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>circulation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>uniformity</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Which topic opens the chapter in the chapter structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>5.2. Mixing in a liquid medium</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>5.3. Energy consumption for mechanical mixing</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-5" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>5.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>5.4. Evaluation of mixing efficiency</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Which subsection directly belongs to the course structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>5.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>5.3. Energy consumption for mechanical mixing</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>5.4. Evaluation of mixing efficiency</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-6" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>5.2. Mixing in a liquid medium</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Which topic closes the chapter in the chapter structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-7" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>5.5. Mixing of bulk and plastic materials</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>5.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>5.2. Mixing in a liquid medium</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>5.3. Energy consumption for mechanical mixing</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Which pair of concepts is useful to compare during self-check?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>power number / uniformity</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-8" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>agitator / circulation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>agitator / power number</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>circulation / uniformity</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. What best supports practical justification of process selection?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>agitator</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>circulation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-9" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>uniformity</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>power number</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>agitator</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>power number</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>uniformity</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-10" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>circulation</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Which object is presented as a visual figure in this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-11" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Mechanical mixing with a rotating working element</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>agitator</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>circulation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>power number</span>
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
<li>Question 1: Correct answer - B</li>
<li>Question 2: Correct answer - C</li>
<li>Question 3: Correct answer - D</li>
<li>Question 4: Correct answer - A</li>
<li>Question 5: Correct answer - B</li>
<li>Question 6: Correct answer - C</li>
<li>Question 7: Correct answer - D</li>
<li>Question 8: Correct answer - A</li>
<li>Question 9: Correct answer - B</li>
<li>Question 10: Correct answer - C</li>
<li>Question 11: Correct answer - D</li>
<li>Question 12: Correct answer - A</li>
</ol>
</details>
</section>
