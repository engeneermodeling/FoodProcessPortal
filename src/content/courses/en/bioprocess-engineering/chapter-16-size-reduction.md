---
title: "Chapter 16. Size Reduction"
course: "bioprocess-engineering"
course_title: "Bioprocess Engineering: Processes and Equipment of Biotechnological Production"
chapter: 16
description: "Size-reduction methods, energy consumption, classification and design of grinding machines."
updated: "2026-08-23"
---

## Source and Scope

Material basis: the textbook "Bioprocess Engineering. Module 1. Processes and Equipment of Biotechnological Production", edited by V.L. Zavialov, NUFT, 2024.

The page follows the logic of the corresponding textbook chapter; the test items are added as a learning tool for checking comprehension.

## Textbook-Based Structure

- 16.1. General information
- 16.2. Size-reduction methods
- 16.3. Energy consumption for size reduction
- 16.4. Classification of grinders
- 16.5. Design and operation of grinding machines

## Lecture Notes

### 16.1. General information

Size reduction is the division of a solid body into particles by external forces. In biotechnological, pharmaceutical, and food-processing production it accelerates heat-transfer, diffusion, and chemical operations involving a solid phase.

The process is characterized by the reduction ratio, that is, the ratio of the average particle size before reduction D to the average size after reduction d:

<div class="equation-block">
  <span class="equation-main">i = D/d</span>
  <span class="equation-number">(16.1)</span>
</div>

**Table 16.1. Size-reduction classes**

| Size-reduction class | Particle size before reduction D, mm | Particle size after reduction d, mm |
|---|---:|---:|
| Coarse crushing | 1000 | 250 |
| Medium crushing | 250 | 20 |
| Fine crushing | 20 | 1...5 |
| Coarse grinding | 1...5 | 0.1...0.04 |
| Medium grinding | 0.1...0.04 | 0.005...0.015 |
| Fine grinding | 0.1...0.04 | 0.001...0.005 |
| Colloidal grinding | <= 0.1 | <= 0.001 |

### 16.2. Size-reduction methods

Solids may be broken by compression, splitting, bending fracture, cutting, sawing, abrasion, impact, and tearing. In practice these methods are often combined: abrasion is accompanied by compression or impact, while bending fracture is accompanied by splitting or compression.

![Fig. 16.1. Methods of size reduction](/images/courses/bioprocess-engineering/chapter-16/fig-16-1.webp)
*Fig. 16.1. Methods of size reduction*

### 16.3. Energy consumption for size reduction

Energy consumption in size reduction is a difficult problem because the work depends on material properties, the fracture mechanism, and machine operating conditions. For a cubic body with edge D reduced to cubes with edge d, the following relationships are used:

<div class="equation-block">
  <span class="equation-main">z = D<sup>3</sup>/d<sup>3</sup> = i<sup>3</sup></span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">F<sub>p</sub> = 6D<sup>2</sup></span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">F<sub>k</sub> = 6d<sup>2</sup>i<sup>3</sup> = 6(D/i)<sup>2</sup>i<sup>3</sup> = 6D<sup>2</sup>i</span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">ΔF = F<sub>k</sub> - F<sub>p</sub> = 6D<sup>2</sup>(i - 1)</span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">A = A<sub>p</sub>ΔF = 6A<sub>p</sub>D<sup>2</sup>(i - 1)</span>
  <span class="equation-number">(16.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">A = σ<sub>p</sub><sup>2</sup>ΔV/(2E)</span>
  <span class="equation-number">(16.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">A<sub>1</sub>/A<sub>2</sub> = V<sub>1</sub>/V<sub>2</sub></span>
  <span class="equation-number">(16.4)</span>
</div>

<div class="equation-block">
  <span class="equation-main">A = kV + A<sub>p</sub>ΔF</span>
  <span class="equation-number">(16.5)</span>
</div>

According to Rittinger, the work is proportional to the newly formed surface. According to Kirpichev-Kick, it is related to the deformation of volume before fracture. Rebinder proposed treating the total work as the sum of deformation work and surface-formation work.

### 16.4. Classification of size-reduction machines

Comminution machines are classified by the dominant fracture mechanism: splitting and bending-fracture machines, compression machines, abrasion-compression machines, impact machines, cutting machines, and colloid mills.

### 16.5. Design and operation of size-reduction machines

Jaw crushers are effective for coarse and medium crushing. Material enters from above between a fixed and a moving jaw; when the jaws approach each other the pieces are fractured, and when they separate the product leaves through the lower gap. Cone crushers operate continuously: material is compressed between a fixed outer cone and a moving inner cone.

![Fig. 16.2. Jaw crusher diagram](/images/courses/bioprocess-engineering/chapter-16/fig-16-2.webp)
*Fig. 16.2. Jaw crusher diagram*

![Fig. 16.3. Cone crusher diagram](/images/courses/bioprocess-engineering/chapter-16/fig-16-3.webp)
*Fig. 16.3. Cone crusher diagram*

In roll crushers, material is compressed between rolls. Product size is governed by the roll gap; corrugated rolls additionally split the material. The capacity G, kg/h, of a roll crusher is estimated as:

![Fig. 16.4. Roll crusher diagram](/images/courses/bioprocess-engineering/chapter-16/fig-16-4.webp)
*Fig. 16.4. Roll crusher diagram*

<div class="equation-block">
  <span class="equation-main">G = 60blπDnρφ</span>
  <span class="equation-number">(16.6)</span>
</div>

where b is the roll gap width, m; l is the roll length, m; D is roll diameter, m; n is rotational speed, rpm; ρ is material density, kg/m3; φ accounts for nonuniform feeding.

![Fig. 16.5. Edge runner mill diagram](/images/courses/bioprocess-engineering/chapter-16/fig-16-5.webp)
*Fig. 16.5. Edge runner mill diagram*

Abrasion-compression machines include millstones, edge runner mills, and disk mills. Impact size reduction is implemented in hammer crushers, single-drum crushers, and disintegrators. For a hammer crusher, the approximate shaft power N, kW, is estimated empirically:

![Fig. 16.6. Hammer crusher diagram](/images/courses/bioprocess-engineering/chapter-16/fig-16-6.webp)
*Fig. 16.6. Hammer crusher diagram*

<div class="equation-block">
  <span class="equation-main">N = (0.1...0.15)iG</span>
  <span class="equation-number">(16.7)</span>
</div>

![Fig. 16.7. Single-drum crusher diagram](/images/courses/bioprocess-engineering/chapter-16/fig-16-7.webp)
*Fig. 16.7. Single-drum crusher diagram*

![Fig. 16.8. Disintegrator diagram](/images/courses/bioprocess-engineering/chapter-16/fig-16-8.webp)
*Fig. 16.8. Disintegrator diagram*

Drum mills are used for fine grinding: grinding media fall or roll inside the drum and break material by impact, compression, and abrasion. Cutting machines are used mainly for plant raw materials; their working element is a knife.

![Fig. 16.9. Drum mill diagram](/images/courses/bioprocess-engineering/chapter-16/fig-16-9.webp)
*Fig. 16.9. Drum mill diagram*

## After studying this chapter, students should be able to

- explain the role of "size reduction" within the chapter;
- connect "reduction ratio" with equipment design in biotechnological production;
- distinguish the main parameters that affect "mill";
- justify process selection or evaluation through "energy consumption".

## Self-Check Test

<section
  class="course-self-test"
  data-course-self-test
  data-locale="en"
  data-course="bioprocess-engineering"
  data-chapter="chapter-16-size-reduction"
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
  <input type="radio" name="course-test-16-0" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>size reduction</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>reduction ratio</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>mill</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>energy consumption</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Which subsection directly belongs to the textbook structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>16.2. Size-reduction methods</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-1" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>16.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>16.3. Energy consumption for size reduction</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>16.4. Classification of grinders</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Which concept should engineering analysis of this chapter rely on first?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>size reduction</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>mill</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-2" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>reduction ratio</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>energy consumption</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. What most closely connects process theory with equipment design?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>size reduction</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>reduction ratio</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>mill</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-3" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>energy consumption</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-4" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>mill</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>size reduction</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>reduction ratio</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>energy consumption</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Which topic opens the chapter in the textbook structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>16.2. Size-reduction methods</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-5" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>16.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>16.3. Energy consumption for size reduction</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>16.4. Classification of grinders</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Which subsection directly belongs to the textbook structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>16.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>16.3. Energy consumption for size reduction</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-6" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>16.2. Size-reduction methods</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>16.4. Classification of grinders</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Which topic closes the chapter in the textbook structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>16.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>16.2. Size-reduction methods</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>16.3. Energy consumption for size reduction</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-7" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>16.5. Design and operation of grinding machines</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Which pair of concepts is useful to compare during self-check?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-8" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>size reduction / reduction ratio</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>mill / energy consumption</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>size reduction / mill</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>reduction ratio / energy consumption</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. What best supports practical justification of process selection?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>size reduction</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-9" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>energy consumption</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>reduction ratio</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>mill</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>size reduction</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>mill</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-10" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>reduction ratio</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>energy consumption</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Which object is presented as a visual figure in this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>size reduction</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>reduction ratio</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>mill</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-11" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Jaw crusher scheme</span>
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
