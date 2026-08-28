---
title: "Chapter 18. Pressing"
course: "bioprocess-engineering"
course_title: "Bioprocess Engineering: Processes and Equipment of Biotechnological Production"
chapter: 18
description: "Liquid expression from solids, forming of plastic materials, briquetting and granulation."
updated: "2026-08-23"
---

## Chapter Focus

This chapter presents the key concepts, equations, and equipment examples for the topic.

## course-Based Structure

- 18.1. Liquid expression from solid materials
- 18.2. Forming of plastic materials
- 18.3. Briquetting and granulation of solid materials

## Lecture Notes

### Chapter 18. Pressing

Pressing is the treatment of materials by pressure under external forces. The material is subjected to one-sided or volumetric compression in presses. Pressing is used for liquid expression from solids, forming plastic materials, compaction, briquetting, and granulation.

### 18.1. Liquid expression from solid materials

Expression, like filtration, separates liquid and solid phases. It is used when liquid must be removed more completely from a cake or when moisture is removed before drying. As pressure increases, the material is compacted and then liquid begins to separate; the rate gradually decreases.

During pressing, liquid moves between particles of a porous layer through capillaries of variable section. The liquid flow through a capillary is described by Poiseuille's law:

<div class="equation-block">
  <span class="equation-main">Q = Δp α d<sub>k</sub><sup>4</sup>/(32 μ l<sub>k</sub>)</span>
  <span class="equation-number">(18.1)</span>
</div>

where Δp is pressure drop, Pa; α is the capillary cross-section shape factor; d<sub>k</sub> is capillary diameter, m; μ is dynamic viscosity, Pa·s; l<sub>k</sub> is capillary length, m.

Compression characteristics describe the ability of the mass to deform under pressure:

<div class="equation-block">
  <span class="equation-main">dp = a dε</span>
  <span class="equation-number"></span>
</div>

Porosity ε depends on pressure p; therefore compression curves are built from experimental data:

<div class="equation-block">
  <span class="equation-main">ε = f(p)</span>
  <span class="equation-number"></span>
</div>

The kinetics of unsteady expression at constant pressure are approximately described by:

<div class="equation-block">
  <span class="equation-main">(ε<sub>p</sub> - ε)/(ε<sub>p</sub> - ε<sub>k</sub>) = 1 - (8/π<sup>2</sup>) exp[-π<sup>2</sup>cτ/(4h<sup>2</sup>)]</span>
  <span class="equation-number">(18.2)</span>
</div>

Presses for expression may be batch or continuous; by pressure generation they are hydraulic, pneumatic, or mechanical. In a vertical hydraulic press, material is loaded into a cage cylinder and the liquid fraction passes through gaps into a tray.

![Fig. 18.1. Hydraulic press diagram](/images/courses/bioprocess-engineering/chapter-18/fig-18-1.webp)
*Fig. 18.1. Hydraulic press diagram*

If losses are neglected, the pressing force in the working cylinder equals the force in the hydraulic cylinder:

<div class="equation-block">
  <span class="equation-main">F = p<sub>p</sub>πD<sub>p</sub><sup>2</sup>/4 = p<sub>c</sub>πD<sub>c</sub><sup>2</sup>/4</span>
  <span class="equation-number">(18.3)</span>
</div>

The pressure required in the power cylinder is:

<div class="equation-block">
  <span class="equation-main">p<sub>c</sub> = p<sub>p</sub>(D<sub>p</sub>/D<sub>c</sub>)<sup>2</sup></span>
  <span class="equation-number">(18.4)</span>
</div>

Screw presses are common in biotechnological and food production for extracting oil, must, fat, tomato juice, and other liquid fractions. For cylindrical screws, the compression ratio is defined by pitch ratio:

![Fig. 18.2. Screw press diagram](/images/courses/bioprocess-engineering/chapter-18/fig-18-2.webp)
*Fig. 18.2. Screw press diagram*

<div class="equation-block">
  <span class="equation-main">K = h<sub>1</sub>/h<sub>2</sub></span>
  <span class="equation-number"></span>
</div>

Pressure in the screw working space changes exponentially:

<div class="equation-block">
  <span class="equation-main">p<sub>k</sub> = p<sub>0</sub>e<sup>lβ</sup></span>
  <span class="equation-number">(18.5)</span>
</div>

The capacity G, kg/s, of a screw press is:

<div class="equation-block">
  <span class="equation-main">G = fw<sub>o</sub>ρφ</span>
  <span class="equation-number">(18.6)</span>
</div>

For the cross-section of the screw-press working zone:

<div class="equation-block">
  <span class="equation-main">f = π(D<sup>2</sup> - d<sup>2</sup>)/4</span>
  <span class="equation-number"></span>
</div>

The axial velocity of material motion is:

<div class="equation-block">
  <span class="equation-main">w<sub>o</sub> = hn</span>
  <span class="equation-number">(18.7)</span>
</div>

### 18.2. Forming of plastic materials

Forming gives a product a specified shape without significant change in density. Plastic materials are formed by rolling, rounding, drawing, stamping, and extrusion through forming openings. Rheological properties determine the contact time of working elements and machine productivity.

![Fig. 18.3. Single-screw extruder diagram](/images/courses/bioprocess-engineering/chapter-18/fig-18-3.webp)
*Fig. 18.3. Single-screw extruder diagram*

<div class="equation-block">
  <span class="equation-main">tgφ = h/(πD)</span>
  <span class="equation-number">(18.8)</span>
</div>

Extruders form plastic materials by forcing them through die openings. In a screw extruder, material is fed to a hopper, transported by the screw through the barrel to the die chamber, and forced through die openings by pressure. The helix angle is related to screw geometry:

<div class="equation-block">
  <span class="equation-main">Q = Δpk/μ</span>
  <span class="equation-number">(18.9)</span>
</div>

For practical calculations of volumetric capacity of forming equipment, the following relation is used:

### 18.3. Briquetting and granulation of solids

<div class="equation-block">
  <span class="equation-main">β = V/V<sub>c</sub></span>
  <span class="equation-number">(18.10)</span>
</div>

Briquetting is compaction of a solid body in a closed space to form geometrically regular briquettes. Compaction is accompanied by size reduction and relative displacement of particles. Volume reduction is characterized by the compaction coefficient:

<div class="equation-block">
  <span class="equation-main">ψ ln(p<sub>k</sub>/p<sub>p</sub>) = β<sub>p</sub> - β<sub>k</sub></span>
  <span class="equation-number">(18.11)</span>
</div>

When pressure losses due to friction are neglected, the compaction process is described by:

With one-sided pressing, briquette density is greatest near the punch, so two-sided compression is advantageous. Briquette strength depends on material state, moisture, preliminary heat treatment, process duration, and holding under pressure.

![Fig. 18.4. Pressing sequence in a rotary press](/images/courses/bioprocess-engineering/chapter-18/fig-18-4.webp)
*Fig. 18.4. Pressing sequence in a rotary press*

<div class="equation-block">
  <span class="equation-main">A = ∫<sub>h<sub>k</sub></sub><sup>h<sub>p</sub></sup> Fp dh</span>
  <span class="equation-number">(18.12)</span>
</div>

A rotary press has a horizontal disk with dies and punches. During one revolution, the disk performs filling, forming, ejection, and punch-cleaning operations. The pressing work for one punch stroke is:

![Fig. 18.5. Dry pulp granulation diagram](/images/courses/bioprocess-engineering/chapter-18/fig-18-5.webp)
*Fig. 18.5. Dry pulp granulation diagram*

## After studying this chapter, students should be able to

- explain the role of "pressure" within the chapter;
- connect "expression" with equipment design in biotechnological production;
- distinguish the main parameters that affect "forming";
- justify process selection or evaluation through "granulation".

## Self-Check Test

<section
  class="course-self-test"
  data-course-self-test
  data-locale="en"
  data-course="bioprocess-engineering"
  data-chapter="chapter-18-pressing"
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
  <input type="radio" name="course-test-18-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>expression</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>forming</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>granulation</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Which subsection directly belongs to the course structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>18.2. Forming of plastic materials</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>18.3. Briquetting and granulation of solid materials</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>18.1. Liquid expression from solid materials</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Which concept should engineering analysis of this chapter rely on first?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>expression</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>forming</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>granulation</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. What most closely connects process theory with equipment design?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>granulation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>expression</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>forming</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>expression</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>forming</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>granulation</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Which topic opens the chapter in the chapter structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>18.2. Forming of plastic materials</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>18.3. Briquetting and granulation of solid materials</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>18.1. Liquid expression from solid materials</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Which subsection directly belongs to the course structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>18.2. Forming of plastic materials</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>18.1. Liquid expression from solid materials</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>18.3. Briquetting and granulation of solid materials</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>pressure</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Which topic closes the chapter in the chapter structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>18.1. Liquid expression from solid materials</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>18.3. Briquetting and granulation of solid materials</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>18.2. Forming of plastic materials</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>pressure</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Which pair of concepts is useful to compare during self-check?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>forming / granulation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>pressure / forming</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>pressure / expression</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>expression / granulation</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. What best supports practical justification of process selection?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>expression</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>forming</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>granulation</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>expression</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>forming</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>granulation</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Which object is presented as a visual figure in this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Hydraulic press scheme</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>expression</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>forming</span>
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
<li>Question 1: Correct answer - C</li>
<li>Question 2: Correct answer - D</li>
<li>Question 3: Correct answer - A</li>
<li>Question 4: Correct answer - B</li>
<li>Question 5: Correct answer - C</li>
<li>Question 6: Correct answer - D</li>
<li>Question 7: Correct answer - A</li>
<li>Question 8: Correct answer - B</li>
<li>Question 9: Correct answer - C</li>
<li>Question 10: Correct answer - D</li>
<li>Question 11: Correct answer - A</li>
<li>Question 12: Correct answer - B</li>
</ol>
</details>
</section>
