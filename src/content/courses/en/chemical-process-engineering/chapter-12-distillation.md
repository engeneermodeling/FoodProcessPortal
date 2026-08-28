---
title: "Chapter 12. Distillation"
course: "chemical-process-engineering"
course_title: "Chemical Process Engineering: Processes and Equipment of Chemical Production"
chapter: 12
description: "Phase equilibrium, simple distillation, rectification of binary and multicomponent mixtures, extractive and azeotropic rectification."
updated: "2026-08-23"
---

## Chapter Focus

This chapter presents the key concepts, equations, and equipment examples for the topic.

## Chapter Structure

- 12.1. Phase equilibrium
- 12.2. Simple distillation
- 12.3. Rectification of binary mixtures
- 12.4. Designs of rectification equipment
- 12.5. Rectification of multicomponent mixtures
- 12.6. Extractive rectification
- 12.7. Azeotropic rectification

## Lecture Notes

Chapter 12 is presented as a continuous lecture: phase equilibrium, simple distillation, rectification, equipment choices and special separation methods.

### 12.1. Phase Equilibrium

Distillation separates boiling liquid mixtures because components have different volatility. The more volatile component is enriched in the vapour phase. Ideal mixtures are described with Raoult's and Dalton's laws; real systems require equilibrium data.

<div class="equation-block">
  <span class="equation-main">p<sub>A</sub> = P<sub>A</sub>x<sub>A</sub></span>
  <span class="equation-number">(12.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">p = p<sub>A</sub> + p<sub>B</sub></span>
  <span class="equation-number">(12.2)</span>
</div>

![Phase-equilibrium curves](/images/courses/chemical-process-engineering/chapter-12/fig-12-1.webp)
*Fig. 12.1. Phase-equilibrium curves*

### 12.2. Simple Distillation

Simple distillation is a batch process of partial evaporation followed by condensation. It is suitable for rough separation or mixtures with strongly different volatility. Reflux improves vapour enrichment.

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

![Single-stage simple distillation](/images/courses/chemical-process-engineering/chapter-12/fig-12-2.webp)
*Fig. 12.2. Single-stage simple distillation*

![Simple distillation with reflux](/images/courses/chemical-process-engineering/chapter-12/fig-12-3.webp)
*Fig. 12.3. Simple distillation with reflux*

### 12.3. Rectification of Binary Mixtures

Rectification repeatedly contacts non-equilibrium vapour and liquid streams inside a column. Operating lines, reflux ratio and theoretical plate count define separation quality and energy demand.

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

![Batch rectification unit](/images/courses/chemical-process-engineering/chapter-12/fig-12-4.webp)
*Fig. 12.4. Batch rectification unit*

![Continuous rectification arrangements](/images/courses/chemical-process-engineering/chapter-12/fig-12-5.webp)
*Fig. 12.5. Continuous rectification arrangements*

![Material flows in a complete rectification column](/images/courses/chemical-process-engineering/chapter-12/fig-12-6.webp)
*Fig. 12.6. Material flows in a complete rectification column*

![Determining the number of theoretical plates](/images/courses/chemical-process-engineering/chapter-12/fig-12-7.webp)
*Fig. 12.7. Determining the number of theoretical plates*

![Effect of reflux ratio on plate number](/images/courses/chemical-process-engineering/chapter-12/fig-12-8-9.webp)
*Fig. 12.8-9. Effect of reflux ratio on plate number*

![Heat-flow schemes of columns](/images/courses/chemical-process-engineering/chapter-12/fig-12-10.webp)
*Fig. 12.10. Heat-flow schemes of columns*

### 12.4. Rectification Equipment

Rectification columns may be tray, packed or film columns. Selection depends on capacity, pressure drop, fouling tendency, operating range and required separation quality.

![Tray designs](/images/courses/chemical-process-engineering/chapter-12/fig-12-11.webp)
*Fig. 12.11. Tray designs*

![Packed column scheme](/images/courses/chemical-process-engineering/chapter-12/fig-12-12.webp)
*Fig. 12.12. Packed column scheme*

![Film column scheme](/images/courses/chemical-process-engineering/chapter-12/fig-12-13.webp)
*Fig. 12.13. Film column scheme*

![Tray efficiency versus vapour velocity](/images/courses/chemical-process-engineering/chapter-12/fig-12-14.webp)
*Fig. 12.14. Tray efficiency versus vapour velocity*

### 12.5. Rectification of Multicomponent Mixtures

For multicomponent mixtures, one column usually produces two products or fractions. Complete separation of n components requires a column system.

![Separation schemes for multicomponent mixtures](/images/courses/chemical-process-engineering/chapter-12/fig-12-15.webp)
*Fig. 12.15. Separation schemes for multicomponent mixtures*

![Rectification units for alcohol mixtures](/images/courses/chemical-process-engineering/chapter-12/fig-12-16.webp)
*Fig. 12.16. Rectification units for alcohol mixtures*

### 12.6. Extractive Rectification

Extractive rectification uses a high-boiling separating agent to change relative volatility and separate close-boiling or azeotropic mixtures.

![Extractive and salt rectification schemes](/images/courses/chemical-process-engineering/chapter-12/fig-12-17.webp)
*Fig. 12.17. Extractive and salt rectification schemes*

### 12.7. Azeotropic Rectification

Azeotropic rectification introduces a third component that forms a new azeotrope and enables component withdrawal after condensation and phase separation.

![Azeotropic rectification unit](/images/courses/chemical-process-engineering/chapter-12/fig-12-18.webp)
*Fig. 12.18. Azeotropic rectification unit*

## After studying this chapter, students should be able to

- explain the role of "phase equilibrium" within the chapter;
- connect "reflux ratio" with equipment design in chemical production;
- distinguish the main parameters that affect "tray";
- justify process selection or evaluation through "rectification column".

## Self-Check Test

<section
  class="course-self-test"
  data-course-self-test
  data-locale="en"
  data-course="chemical-process-engineering"
  data-chapter="chapter-12-distillation"
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
  <input type="radio" name="course-test-12-0" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>phase equilibrium</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>reflux ratio</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>tray</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>rectification column</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Which subsection directly belongs to the course structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>12.2. Simple distillation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-1" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>12.1. Phase equilibrium</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>12.3. Rectification of binary mixtures</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>12.4. Designs of rectification equipment</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Which concept should engineering analysis of this chapter rely on first?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>phase equilibrium</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>tray</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-2" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>reflux ratio</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>rectification column</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. What most closely connects process theory with equipment design?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>phase equilibrium</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>reflux ratio</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>tray</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-3" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>rectification column</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-4" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>tray</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>phase equilibrium</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>reflux ratio</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>rectification column</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Which topic opens the chapter in the chapter structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>12.2. Simple distillation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-5" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>12.1. Phase equilibrium</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>12.3. Rectification of binary mixtures</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>12.4. Designs of rectification equipment</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Which subsection directly belongs to the course structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>12.1. Phase equilibrium</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>12.3. Rectification of binary mixtures</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-6" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>12.2. Simple distillation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>12.4. Designs of rectification equipment</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Which topic closes the chapter in the chapter structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>12.1. Phase equilibrium</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>12.2. Simple distillation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>12.3. Rectification of binary mixtures</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-7" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>12.7. Azeotropic rectification</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Which pair of concepts is useful to compare during self-check?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-8" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>phase equilibrium / reflux ratio</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>tray / rectification column</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>phase equilibrium / tray</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>reflux ratio / rectification column</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. What best supports practical justification of process selection?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>phase equilibrium</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-9" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>rectification column</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>reflux ratio</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>tray</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>phase equilibrium</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>tray</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-10" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>reflux ratio</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>rectification column</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Which object is presented as a visual figure in this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>phase equilibrium</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>reflux ratio</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>tray</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-11" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Phase-equilibrium curves</span>
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

