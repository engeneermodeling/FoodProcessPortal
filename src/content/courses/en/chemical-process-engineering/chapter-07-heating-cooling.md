---
title: "Chapter 7. Heating and Cooling"
course: "chemical-process-engineering"
course_title: "Chemical Process Engineering: Processes and Equipment of Chemical Production"
chapter: 7
description: "Classification, designs, thermal, structural and hydraulic calculation of heat exchangers."
updated: "2026-08-23"
---

## Chapter Focus

This chapter presents the key concepts, equations, and equipment examples for the topic.

## Chapter Structure

- 7.1. General information
- 7.2. Classification of heat exchangers
- 7.3. Heat exchanger designs
- 7.4. Thermal calculation of heat exchangers
- 7.5. Structural calculation of heat exchangers
- 7.6. Hydraulic calculation of heat exchangers
- 7.7. Optimization and intensification of heat exchange
- 7.8. Check calculation of heat exchangers

## Lecture Notes

### 7.1. General Information

Heating and cooling of liquids and gases are among the most common processes in bioengineering. For each process, the heating or cooling method, heat carrier and apparatus design must be selected from technological and economic considerations. The apparatuses used for these operations are heat exchangers.

### 7.2. Classification of Heat Exchangers

By heat-transfer mode, heat exchangers are divided into surface and mixing types. In surface equipment the heat carriers are separated by a wall or alternately contact the same surface; in mixing equipment heat exchange occurs through direct contact. Industrial practice mainly uses recuperative surface heat exchangers.

The main requirements are a high overall heat-transfer coefficient, low hydraulic resistance, tightness, convenient cleaning, maintainability and compensation of thermal expansion.

### 7.3. Heat Exchanger Designs

Shell-and-tube heat exchangers can provide a large heat-transfer area in one unit. Carrier velocity is increased by multi-pass flow and segmental baffles. Tubes in tube sheets are often arranged on regular hexagons.

![Fig. 7.1. Single-pass shell-and-tube heat exchanger](/images/courses/chemical-process-engineering/chapter-07/fig-7-1.webp)
*Fig. 7.1. Single-pass shell-and-tube heat exchanger*

![Fig. 7.2. Multi-pass shell-and-tube heat exchanger](/images/courses/chemical-process-engineering/chapter-07/fig-7-2.webp)
*Fig. 7.2. Multi-pass shell-and-tube heat exchanger*

![Fig. 7.3. Tube layout in tube sheets](/images/courses/chemical-process-engineering/chapter-07/fig-7-3.webp)
*Fig. 7.3. Tube layout in tube sheets*

<div class="equation-block">
  <span class="equation-main">n = 3a(a - 1) + 1</span>
  <span class="equation-number">(7.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">b = 2a - 1</span>
  <span class="equation-number">(7.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">s = (1.3...1.5)d<sub>o</sub></span>
  <span class="equation-number">(7.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = s(b - 1) + 4d<sub>o</sub></span>
  <span class="equation-number">(7.4)</span>
</div>

For small flow rates, tube-in-tube heat exchangers are used. Immersion and spray coil exchangers are simple but have relatively low heat-transfer intensity. Spiral and plate exchangers are compact; plate exchangers are especially common for sterilizing and cooling process liquids.

![Fig. 7.5. Tube-in-tube heat exchanger](/images/courses/chemical-process-engineering/chapter-07/fig-7-5.webp)
*Fig. 7.5. Tube-in-tube heat exchanger*

![Fig. 7.6. Immersion heat exchanger](/images/courses/chemical-process-engineering/chapter-07/fig-7-6.webp)
*Fig. 7.6. Immersion heat exchanger*

![Fig. 7.7. Spray coil heat exchanger](/images/courses/chemical-process-engineering/chapter-07/fig-7-7.webp)
*Fig. 7.7. Spray coil heat exchanger*

![Fig. 7.8. Spiral heat exchanger](/images/courses/chemical-process-engineering/chapter-07/fig-7-8.webp)
*Fig. 7.8. Spiral heat exchanger*

![Fig. 7.9. Flow pattern in a plate heat exchanger](/images/courses/chemical-process-engineering/chapter-07/fig-7-9.webp)
*Fig. 7.9. Flow pattern in a plate heat exchanger*

![Fig. 7.10. Finned tube heat-transfer surface](/images/courses/chemical-process-engineering/chapter-07/fig-7-10.webp)
*Fig. 7.10. Finned tube heat-transfer surface*

![Fig. 7.11. Jacketed heat exchanger](/images/courses/chemical-process-engineering/chapter-07/fig-7-11.webp)
*Fig. 7.11. Jacketed heat exchanger*

### 7.4. Thermal Calculation of Heat Exchangers

The design thermal calculation determines the required heat-transfer surface area. The heat duty, overall heat-transfer coefficient and mean temperature difference are found in sequence.

<div class="equation-block">
  <span class="equation-main">F = Q/(kΔt<sub>m</sub>)</span>
  <span class="equation-number">(7.5)</span>
</div>

If heat losses to the surroundings are small, the heat balance is written between hot and cold carriers. For carriers without phase change, enthalpy differences are replaced by heat capacity multiplied by temperature change.

<div class="equation-block">
  <span class="equation-main">Q = Q<sub>1</sub> = Q<sub>2</sub></span>
  <span class="equation-number">(7.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q = m<sub>1</sub>(i<sub>1,in</sub> - i<sub>1,out</sub>) = m<sub>2</sub>(i<sub>2,out</sub> - i<sub>2,in</sub>)</span>
  <span class="equation-number">(7.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q = m<sub>1</sub>c<sub>1</sub>(t<sub>1,in</sub> - t<sub>1,out</sub>)</span>
  <span class="equation-number">(7.8)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q = m<sub>2</sub>c<sub>2</sub>(t<sub>2,out</sub> - t<sub>2,in</sub>)</span>
  <span class="equation-number">(7.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>1</sub>c<sub>1</sub>(t<sub>1,in</sub> - t<sub>1,out</sub>) = m<sub>2</sub>c<sub>2</sub>(t<sub>2,out</sub> - t<sub>2,in</sub>)</span>
  <span class="equation-number">(7.10)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>2</sub> = m<sub>1</sub>c<sub>1</sub>(t<sub>1,in</sub> - t<sub>1,out</sub>)/(c<sub>2</sub>(t<sub>2,out</sub> - t<sub>2,in</sub>))</span>
  <span class="equation-number">(7.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>1</sub> = m<sub>2</sub>c<sub>2</sub>(t<sub>2,out</sub> - t<sub>2,in</sub>)/(c<sub>1</sub>(t<sub>1,in</sub> - t<sub>1,out</sub>))</span>
  <span class="equation-number">(7.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D<sub>s</sub> = Q/(i<sub>s</sub> - i<sub>c</sub>)</span>
  <span class="equation-number">(7.13)</span>
</div>

The overall heat-transfer coefficient is determined through thermal resistances of the wall, deposits and heat emission on both sides. Specific criterion equations are used for individual apparatus designs.

<div class="equation-block">
  <span class="equation-main">Nu = 0.023Re<sup>0.8</sup>Pr<sup>0.4</sup></span>
  <span class="equation-number">(7.14)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = CRe<sup>0.6</sup>Pr<sup>0.33</sup></span>
  <span class="equation-number">(7.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = CRe<sup>0.73</sup>Pr<sup>0.43</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(7.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">1/k = 1/α<sub>1</sub> + δ<sub>w</sub>/λ<sub>w</sub> + δ<sub>f1</sub>/λ<sub>f1</sub> + δ<sub>f2</sub>/λ<sub>f2</sub> + 1/α<sub>2</sub></span>
  <span class="equation-number">(7.17)</span>
</div>

<div class="equation-block">
  <span class="equation-main">k<sub>actual</sub> = φk<sub>calc</sub></span>
  <span class="equation-number">(7.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">t<sub>w1</sub> = t<sub>1</sub> - q/α<sub>1</sub></span>
  <span class="equation-number">(7.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">t<sub>w2</sub> = t<sub>2</sub> + q/α<sub>2</sub></span>
  <span class="equation-number">(7.20)</span>
</div>

The mean temperature difference is evaluated as the logarithmic mean temperature difference. Counterflow uses heat carriers most fully, so the exchanger is more compact than in parallel flow under the same conditions.

![Fig. 7.12. Temperature profiles of heat carriers](/images/courses/chemical-process-engineering/chapter-07/fig-7-12.webp)
*Fig. 7.12. Temperature profiles of heat carriers*

<div class="equation-block">
  <span class="equation-main">Δt<sub>lm</sub> = (Δt<sub>max</sub> - Δt<sub>min</sub>)/ln(Δt<sub>max</sub>/Δt<sub>min</sub>)</span>
  <span class="equation-number">(7.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δt<sub>m</sub> = (Δt<sub>max</sub> + Δt<sub>min</sub>)/2</span>
  <span class="equation-number">(7.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">P = (t<sub>2,out</sub> - t<sub>2,in</sub>)/(t<sub>1,in</sub> - t<sub>2,in</sub>)</span>
  <span class="equation-number">(7.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">R = (t<sub>1,in</sub> - t<sub>1,out</sub>)/(t<sub>2,out</sub> - t<sub>2,in</sub>)</span>
  <span class="equation-number">(7.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δt<sub>m</sub> = εΔt<sub>lm,counter</sub></span>
  <span class="equation-number">(7.25)</span>
</div>

### 7.5. Design Calculation of Heat Exchangers

After the thermal calculation, the design calculation determines flow sections, tube number, pass number, tube or coil length, coil height and nozzle diameters.

<div class="equation-block">
  <span class="equation-main">f<sub>1</sub> = m/(ρw)</span>
  <span class="equation-number">(7.26)</span>
</div>

<div class="equation-block">
  <span class="equation-main">n<sub>1</sub> = 4f<sub>1</sub>/(πd<sub>i</sub><sup>2</sup>)</span>
  <span class="equation-number">(7.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L = F/(πd<sub>p</sub>n)</span>
  <span class="equation-number">(7.28)</span>
</div>

<div class="equation-block">
  <span class="equation-main">z = L/l</span>
  <span class="equation-number">(7.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">n = zn<sub>1</sub></span>
  <span class="equation-number">(7.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">l<sub>turn</sub> = √((πD<sub>coil</sub>)<sup>2</sup> + h<sup>2</sup>)</span>
  <span class="equation-number">(7.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L = F/(πd<sub>p</sub>)</span>
  <span class="equation-number">(7.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">n = L/l<sub>turn</sub></span>
  <span class="equation-number">(7.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">H = nh</span>
  <span class="equation-number">(7.34)</span>
</div>

<div class="equation-block">
  <span class="equation-main">V = πd<sub>n</sub><sup>2</sup>w/4</span>
  <span class="equation-number">(7.35)</span>
</div>

<div class="equation-block">
  <span class="equation-main">d<sub>n</sub> = √(4V/(πw))</span>
  <span class="equation-number">(7.36)</span>
</div>

### 7.6. Hydraulic Calculation of Heat Exchangers

The hydraulic calculation determines pressure losses and the power of pumps or fans moving the heat carriers through the apparatus.

<div class="equation-block">
  <span class="equation-main">N = VΔp/η</span>
  <span class="equation-number">(7.37)</span>
</div>

### 7.7. Optimization and Intensification of Heat Exchange

Optimization searches for the minimum total manufacturing and operating cost. Higher velocity improves heat emission but increases hydraulic losses.

<div class="equation-block">
  <span class="equation-main">S = K/P + E</span>
  <span class="equation-number">(7.38)</span>
</div>

<div class="equation-block">
  <span class="equation-main">K = C<sub>F</sub>F</span>
  <span class="equation-number">(7.39)</span>
</div>

### 7.8. Check Calculation of Heat Exchangers

The check calculation is performed for an existing apparatus. The available and required temperature differences are compared; if the margin is sufficient, the apparatus provides the specified heat duty.

<div class="equation-block">
  <span class="equation-main">χ = Δt<sub>available</sub>/Δt<sub>required</sub></span>
  <span class="equation-number">(7.40)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δt<sub>required</sub> = Q/(kF)</span>
  <span class="equation-number"></span>
</div>

## After studying this chapter, students should be able to

- explain the role of "heat exchanger" within the chapter;
- connect "heat-transfer area" with equipment design in chemical production;
- distinguish the main parameters that affect "hydraulic resistance";
- justify process selection or evaluation through "intensification".

## Self-Check Test

<section
  class="course-self-test"
  data-course-self-test
  data-locale="en"
  data-course="chemical-process-engineering"
  data-chapter="chapter-07-heating-cooling"
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
  <input type="radio" name="course-test-7-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>heat-transfer area</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>hydraulic resistance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>intensification</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-0" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>heat exchanger</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Which subsection directly belongs to the course structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-1" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>7.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>7.2. Classification of heat exchangers</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>7.3. Heat exchanger designs</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>7.4. Thermal calculation of heat exchangers</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Which concept should engineering analysis of this chapter rely on first?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>heat exchanger</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-2" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>heat-transfer area</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>hydraulic resistance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>intensification</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. What most closely connects process theory with equipment design?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>heat exchanger</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>heat-transfer area</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-3" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>intensification</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>hydraulic resistance</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>heat exchanger</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>heat-transfer area</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>intensification</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-4" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>hydraulic resistance</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Which topic opens the chapter in the chapter structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-5" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>7.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>7.2. Classification of heat exchangers</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>7.3. Heat exchanger designs</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>7.4. Thermal calculation of heat exchangers</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Which subsection directly belongs to the course structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>7.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-6" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>7.2. Classification of heat exchangers</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>7.3. Heat exchanger designs</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>7.4. Thermal calculation of heat exchangers</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Which topic closes the chapter in the chapter structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>7.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>7.2. Classification of heat exchangers</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-7" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>7.8. Check calculation of heat exchangers</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>7.3. Heat exchanger designs</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Which pair of concepts is useful to compare during self-check?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>hydraulic resistance / intensification</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>heat exchanger / hydraulic resistance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>heat-transfer area / intensification</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-8" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>heat exchanger / heat-transfer area</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. What best supports practical justification of process selection?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-9" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>intensification</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>heat exchanger</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>heat-transfer area</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>hydraulic resistance</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>heat exchanger</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-10" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>heat-transfer area</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>hydraulic resistance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>intensification</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Which object is presented as a visual figure in this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>heat exchanger</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>heat-transfer area</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-11" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Single-pass shell-and-tube heat exchanger</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>hydraulic resistance</span>
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

