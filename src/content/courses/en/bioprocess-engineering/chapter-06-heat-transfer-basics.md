---
title: "Chapter 6. Fundamentals of Heat Transfer"
course: "bioprocess-engineering"
course_title: "Bioprocess Engineering: Processes and Equipment of Biotechnological Production"
chapter: 6
description: "Similarity criteria for thermal processes, conduction, convective and radiative heat exchange, heat transfer."
updated: "2026-08-23"
---

## Chapter Focus

This chapter presents the key concepts, equations, and equipment examples for the topic.

## course-Based Structure

- 6.1. General information
- 6.2. Main similarity criteria of thermal processes
- 6.3. Heat conduction
- 6.4. Convective heat exchange
- 6.5. Heat transfer during phase change
- 6.6. Radiative heat exchange
- 6.7. Overall heat transfer

## Lecture Notes

### 6.1. General Information

Heat transfer is the transfer of heat from one body to another; the necessary and sufficient condition is a temperature difference. The measure of heat exchange is the amount of heat transferred, expressed in joules in SI. Substances participating in heat transfer are heat carriers: the hot carrier releases heat, and the cold carrier receives it.

Industrial hot heat carriers include steam, hot water, heated air, flue gases and mineral oils; cold carriers include water, air, brines, carbon dioxide, ammonia and refrigerants. Heat is transferred by conduction, convection and radiation. Heat emission describes exchange between a wall and the medium flowing around it; overall heat transfer describes exchange between two media through a solid partition.

### 6.2. Main Similarity Criteria of Thermal Processes

**Table 6.1. Similarity criteria of thermal processes**

| Criterion | Components | Physical meaning |
|---|---|---|
| Nusselt | Nu = αl/λ | Intensity of heat transfer at the flow-wall boundary. |
| Prandtl | Pr = ν/a = cμ/λ | Relation between temperature and velocity fields of the heat carrier. |
| Peclet | Pe = wl/a = RePr | Ratio of convective to molecular heat transport. |
| Grashof | Gr = gl<sup>3</sup>βΔt/ν<sup>2</sup> | Effect of buoyancy in free convection. |
| Kutateladze | Ku | Heat exchange during phase change. |

### 6.3. Heat Conduction

The basic one-dimensional heat-conduction equation according to Fourier's law is:

<div class="equation-block">
  <span class="equation-main">dQ/dτ = -λF · dt/dx</span>
  <span class="equation-number">(6.1)</span>
</div>

For a homogeneous plane wall of thickness δ with constant thermal conductivity λ and surface temperatures t<sub>1</sub> and t<sub>2</sub>, the specific heat flux is:

<div class="equation-block">
  <span class="equation-main">q = λ(t<sub>1</sub> - t<sub>2</sub>)/δ</span>
  <span class="equation-number">(6.2)</span>
</div>

![Fig. 6.1. Heat conduction through a plane wall](/images/courses/bioprocess-engineering/chapter-06/fig-6-1.webp)
*Fig. 6.1. Heat conduction through a plane wall*

The value δ/λ is called the thermal resistance of the wall. For a multilayer wall the total resistance is the sum of the separate layer resistances:

<div class="equation-block">
  <span class="equation-main">R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + ... + R<sub>n</sub></span>
  <span class="equation-number">(6.3)</span>
</div>

### 6.4. Convective Heat Exchange

In liquids and gases, heat is transferred mainly by convection. Free convection is caused by density differences between heated and cold particles, while forced convection is produced by a pump, fan or another external force. Turbulent flow gives much more intensive heat exchange than laminar flow.

The basic law of convective heat exchange is Newton's law:

<div class="equation-block">
  <span class="equation-main">Q = αF(t<sub>w</sub> - t)</span>
  <span class="equation-number">(6.4)</span>
</div>

For developed turbulent flow in tubes and channels at Re > 10000, the criterion equation is:

<div class="equation-block">
  <span class="equation-main">Nu = 0.021Re<sup>0.8</sup>Pr<sup>0.43</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.5)</span>
</div>

For liquids whose viscosity is not more than about twice that of water, a simplified relation is used:

<div class="equation-block">
  <span class="equation-main">Nu = 0.023Re<sup>0.8</sup>Pr<sup>0.4</sup></span>
  <span class="equation-number">(6.6)</span>
</div>

For laminar flow at Re < 2300, the recommended equation is:

<div class="equation-block">
  <span class="equation-main">Nu = 0.15Re<sup>0.33</sup>Pr<sup>0.43</sup>Gr<sup>0.1</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.7)</span>
</div>

For air these relations are simplified:

<div class="equation-block">
  <span class="equation-main">Nu = 0.018Re<sup>0.8</sup></span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = 0.13Re<sup>0.33</sup>Gr<sup>0.1</sup></span>
  <span class="equation-number"></span>
</div>

In the transition region 2300 < Re < 10000, heat transfer is estimated approximately:

<div class="equation-block">
  <span class="equation-main">Nu = f(Re)Pr<sup>0.43</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.8)</span>
</div>

**Table 6.2. Values of the f(Re) complex for different Re values**

| Re · 10<sup>-3</sup> | 2.1 | 2.2 | 2.3 | 2.4 | 2.5 | 3 | 4 | 5 | 6 | 8 | 10 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| f(Re) | 1.9 | 2.2 | 3.3 | 3.8 | 4.4 | 6.0 | 10.3 | 15.5 | 19.5 | 27.0 | 33.3 |

For cross-flow over a tube bundle at an attack angle φ = 90°, staggered and in-line tube arrangements are calculated as:

<div class="equation-block">
  <span class="equation-main">Nu = 0.41Re<sup>0.6</sup>Pr<sup>0.33</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = 0.23Re<sup>0.65</sup>Pr<sup>0.33</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.10)</span>
</div>

For free convection, the average heat-transfer coefficient is determined through the product GrPr:

<div class="equation-block">
  <span class="equation-main">Nu = C(GrPr)<sup>n</sup></span>
  <span class="equation-number">(6.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = 1.18(GrPr)<sup>0.125</sup></span>
  <span class="equation-number">(6.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = 0.54(GrPr)<sup>0.25</sup></span>
  <span class="equation-number">(6.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = 0.135(GrPr)<sup>0.33</sup></span>
  <span class="equation-number">(6.14)</span>
</div>

### 6.5. Heat Transfer During Phase Change

During steam condensation, the main thermal resistance is the condensate film on the solid surface. The Nusselt relation is used to determine the heat-transfer coefficient:

<div class="equation-block">
  <span class="equation-main">Nu = C(Ga · Pr · K<sub>u</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.15)</span>
</div>

Boiling heat transfer is complex, so for vertical tubes with natural circulation an approximate equation is used:

<div class="equation-block">
  <span class="equation-main">Nu = 54K<sup>0.6</sup>Pr<sup>-0.3</sup></span>
  <span class="equation-number">(6.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">α = Aq<sup>0.6</sup></span>
  <span class="equation-number">(6.17)</span>
</div>

### 6.6. Radiative Heat Exchange

Radiation is characteristic of all bodies: part of thermal energy is converted to radiant energy and, after absorption by other bodies, becomes heat again. The radiative heat-transfer coefficient is:

<div class="equation-block">
  <span class="equation-main">α<sub>rad</sub> = 5.7ε[(T<sub>1</sub>/100)<sup>4</sup> - (T<sub>2</sub>/100)<sup>4</sup>]/(T<sub>1</sub> - T<sub>2</sub>)</span>
  <span class="equation-number">(6.18)</span>
</div>

For equipment in closed rooms with surface temperature up to 150 °C, the total heat-transfer coefficient by radiation and convection may be estimated as:

<div class="equation-block">
  <span class="equation-main">α = 9.76 + 0.07Δt</span>
  <span class="equation-number">(6.19)</span>
</div>

### 6.7. Overall Heat Transfer

The heat transferred from a hot carrier to a cold carrier through a wall is determined by the general heat-transfer equation:

<div class="equation-block">
  <span class="equation-main">Q = kFΔt<sub>m</sub></span>
  <span class="equation-number">(6.20)</span>
</div>

![Fig. 6.2. Overall heat transfer through a plane wall](/images/courses/bioprocess-engineering/chapter-06/fig-6-2.webp)
*Fig. 6.2. Overall heat transfer through a plane wall*

For a plane wall of thickness δ and thermal conductivity λ, the steady heat flux is described by three equations:

<div class="equation-block">
  <span class="equation-main">q = α<sub>1</sub>(t<sub>1</sub> - t<sub>w1</sub>)</span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">q = λ(t<sub>w1</sub> - t<sub>w2</sub>)/δ</span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">q = α<sub>2</sub>(t<sub>w2</sub> - t<sub>2</sub>)</span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">q = (t<sub>1</sub> - t<sub>2</sub>)/(1/α<sub>1</sub> + δ/λ + 1/α<sub>2</sub>) = k(t<sub>1</sub> - t<sub>2</sub>)</span>
  <span class="equation-number">(6.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">k = 1/(1/α<sub>1</sub> + δ/λ + 1/α<sub>2</sub>)</span>
  <span class="equation-number">(6.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">R = 1/k = 1/α<sub>1</sub> + δ/λ + 1/α<sub>2</sub></span>
  <span class="equation-number">(6.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">k = 1/(1/α<sub>1</sub> + Σ(δ<sub>i</sub>/λ<sub>i</sub>) + 1/α<sub>2</sub>)</span>
  <span class="equation-number">(6.24)</span>
</div>

## After studying this chapter, students should be able to

- explain the role of "thermal conductivity" within the chapter;
- connect "convection" with equipment design in biotechnological production;
- distinguish the main parameters that affect "heat transfer coefficient";
- justify process selection or evaluation through "overall heat transfer".

## Self-Check Test

<section
  class="course-self-test"
  data-course-self-test
  data-locale="en"
  data-course="bioprocess-engineering"
  data-chapter="chapter-06-heat-transfer-basics"
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
  <input type="radio" name="course-test-6-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>convection</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>heat transfer coefficient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>thermal conductivity</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>overall heat transfer</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Which subsection directly belongs to the course structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>6.2. Main similarity criteria of thermal processes</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>6.3. Heat conduction</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>6.4. Convective heat exchange</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>6.1. General information</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Which concept should engineering analysis of this chapter rely on first?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>convection</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>thermal conductivity</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>heat transfer coefficient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>overall heat transfer</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. What most closely connects process theory with equipment design?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>thermal conductivity</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>overall heat transfer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>convection</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>heat transfer coefficient</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>thermal conductivity</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>convection</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>heat transfer coefficient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>overall heat transfer</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Which topic opens the chapter in the chapter structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>6.2. Main similarity criteria of thermal processes</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>6.3. Heat conduction</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>6.4. Convective heat exchange</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>6.1. General information</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Which subsection directly belongs to the course structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>6.2. Main similarity criteria of thermal processes</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>6.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>6.3. Heat conduction</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>6.4. Convective heat exchange</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Which topic closes the chapter in the chapter structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>6.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>6.7. Overall heat transfer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>6.2. Main similarity criteria of thermal processes</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>6.3. Heat conduction</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Which pair of concepts is useful to compare during self-check?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>heat transfer coefficient / overall heat transfer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>thermal conductivity / heat transfer coefficient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>thermal conductivity / convection</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>convection / overall heat transfer</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. What best supports practical justification of process selection?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>thermal conductivity</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>convection</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>heat transfer coefficient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>overall heat transfer</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>convection</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>thermal conductivity</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>heat transfer coefficient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>overall heat transfer</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Which object is presented as a visual figure in this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>thermal conductivity</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Heat conduction through a plane wall</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>convection</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>heat transfer coefficient</span>
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
