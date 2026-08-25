---
title: "Chapter 2. Fundamentals of Hydraulics"
course: "bioprocess-engineering"
course_title: "Bioprocess Engineering: Processes and Equipment of Biotechnological Production"
chapter: 2
description: "Hydrostatics, hydrodynamics, Bernoulli equation, flow regimes, pumps and gas blowers."
updated: "2026-08-23"
---

## Source and Scope

Material basis: the textbook "Bioprocess Engineering. Module 1. Processes and Equipment of Biotechnological Production", edited by V.L. Zavialov, NUFT, 2024.

The page follows the logic of the corresponding textbook chapter; the test items are added as a learning tool for checking comprehension.

## Textbook-Based Structure

- 2.1. Hydrostatics
- 2.2. Hydrodynamics
- 2.3. Pumps and gas blowers

## Lecture Notes

### 2.1. Hydrostatics

Hydraulics describes equilibrium and motion of liquids and gases. In bioprocess equipment it is used for calculating pipelines, tanks, fermenters, heat exchangers, pumps, compressors and medium-feeding systems. A liquid is treated as a continuous medium, and pressure at a point is transmitted in all directions.

For an elementary liquid parallelepiped, the equilibrium condition along the x-axis is:

<div class="equation-block">
  <span class="equation-main">dP<sub>1</sub> - dP<sub>2</sub> + dG<sub>x</sub> = 0</span>
  <span class="equation-number">(2.1)</span>
</div>

After expressing pressure forces through face areas:

<div class="equation-block">
  <span class="equation-main">p<sub>1</sub>dy dz - p<sub>2</sub>dy dz + ρ X dx dy dz = 0</span>
  <span class="equation-number">(2.2)</span>
</div>

The limiting form gives Euler's differential equilibrium equations:

<div class="equation-block">
  <span class="equation-main">ρ X - ∂p/∂x = 0;<br />ρ Y - ∂p/∂y = 0;<br />ρ Z - ∂p/∂z = 0</span>
  <span class="equation-number">(2.3)</span>
</div>

![Fig. 2.1. Derivation of Euler differential equilibrium equations](/images/courses/bioprocess-engineering/chapter-02/fig-2-1.webp)

The total pressure differential in a liquid at rest is:

<div class="equation-block">
  <span class="equation-main">dp = ρ(Xdx + Ydy + Zdz)</span>
  <span class="equation-number">(2.4)</span>
</div>

For an isobaric surface, p = const and dp = 0:

<div class="equation-block">
  <span class="equation-main">Xdx + Ydy + Zdz = 0</span>
  <span class="equation-number">(2.5)</span>
</div>

If gravity is the only body force, integration gives the basic hydrostatic equation:

<div class="equation-block">
  <span class="equation-main">z + p/(ρ g) = const</span>
  <span class="equation-number">(2.6)</span>
</div>

Hydrostatic head:

<div class="equation-block">
  <span class="equation-main">H<sub>s</sub> = z + p/(ρ g)</span>
  <span class="equation-number">(2.7)</span>
</div>

For two points in the same liquid at rest:

<div class="equation-block">
  <span class="equation-main">z<sub>1</sub> + p<sub>1</sub>/(ρ g) = z<sub>2</sub> + p<sub>2</sub>/(ρ g)</span>
  <span class="equation-number">(2.8)</span>
</div>

![Fig. 2.2. Basic hydrostatic equation](/images/courses/bioprocess-engineering/chapter-02/fig-2-2.webp)

Pascal's law follows from this relation: external pressure applied to a liquid is transmitted equally in all directions. Absolute pressure at depth h:

<div class="equation-block">
  <span class="equation-main">p = p<sub>0</sub> + ρ g h</span>
  <span class="equation-number">(2.9)</span>
</div>

![Fig. 2.3. Scheme for Pascal's law](/images/courses/bioprocess-engineering/chapter-02/fig-2-3.webp)

Liquid manometers, vacuum gauges and elastic manometers are used for pressure measurement. In bioprocess equipment pressure control is essential in sterilizers, fermenters, filters and sterile-air lines.

![Fig. 2.4. Liquid manometer](/images/courses/bioprocess-engineering/chapter-02/fig-2-4.webp)

### 2.2. Hydrodynamics

Hydrodynamics studies liquid motion. Flow is steady when velocity and pressure at a fixed point do not change with time, and unsteady when they depend on time. Volumetric flow rate Q is related to mean velocity w and cross-sectional area F by Q = wF.

Continuity equation for an incompressible liquid:

<div class="equation-block">
  <span class="equation-main">Q = w<sub>1</sub>F<sub>1</sub> = w<sub>2</sub>F<sub>2</sub> = wF = const</span>
  <span class="equation-number">(2.10)</span>
</div>

For a compressible medium, mass flow rate is conserved:

<div class="equation-block">
  <span class="equation-main">M = ρ<sub>1</sub>w<sub>1</sub>F<sub>1</sub> = ρ<sub>2</sub>w<sub>2</sub>F<sub>2</sub> = const</span>
  <span class="equation-number">(2.11)</span>
</div>

Hydraulic radius:

<div class="equation-block">
  <span class="equation-main">R = F/Π</span>
  <span class="equation-number">(2.12)</span>
</div>

Equivalent diameter for non-circular channels:

<div class="equation-block">
  <span class="equation-main">d<sub>eq</sub> = 4R = 4F/Π</span>
  <span class="equation-number">(2.13)</span>
</div>

Euler equations for an ideal liquid per unit mass:

<div class="equation-block">
  <span class="equation-main">X - (1/ρ)∂p/∂x = 0;<br />Y - (1/ρ)∂p/∂y = 0;<br />Z - (1/ρ)∂p/∂z = 0</span>
  <span class="equation-number">(2.14)</span>
</div>

With acceleration included:

<div class="equation-block">
  <span class="equation-main">X - (1/ρ)∂p/∂x = dw<sub>x</sub>/d τ;<br />Y - (1/ρ)∂p/∂y = dw<sub>y</sub>/d τ;<br />Z - (1/ρ)∂p/∂z = dw<sub>z</sub>/d τ</span>
  <span class="equation-number">(2.15)</span>
</div>

The total acceleration contains local and convective components:

<div class="equation-block">
  <span class="equation-main">dw<sub>x</sub>/d τ = ∂w<sub>x</sub>/∂τ + w<sub>x</sub>∂w<sub>x</sub>/∂x + w<sub>y</sub>∂w<sub>x</sub>/∂y + w<sub>z</sub>∂w<sub>x</sub>/∂z;<br />dw<sub>y</sub>/d τ = ∂w<sub>y</sub>/∂τ + w<sub>x</sub>∂w<sub>y</sub>/∂x + w<sub>y</sub>∂w<sub>y</sub>/∂y + w<sub>z</sub>∂w<sub>y</sub>/∂z;<br />dw<sub>z</sub>/d τ = ∂w<sub>z</sub>/∂τ + w<sub>x</sub>∂w<sub>z</sub>/∂x + w<sub>y</sub>∂w<sub>z</sub>/∂y + w<sub>z</sub>∂w<sub>z</sub>/∂z</span>
  <span class="equation-number">(2.16)</span>
</div>

Bernoulli equation for an elementary stream of ideal liquid:

<div class="equation-block">
  <span class="equation-main">z<sub>1</sub> + p<sub>1</sub>/(ρ g) + w<sub>1</sub><sup>2</sup>/(2g) = z<sub>2</sub> + p<sub>2</sub>/(ρ g) + w<sub>2</sub><sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.17)</span>
</div>

For a real liquid, head losses are added:

<div class="equation-block">
  <span class="equation-main">z<sub>1</sub> + p<sub>1</sub>/(ρ g) + w<sub>1</sub><sup>2</sup>/(2g) = z<sub>2</sub> + p<sub>2</sub>/(ρ g) + w<sub>2</sub><sup>2</sup>/(2g) + h<sub>loss</sub></span>
  <span class="equation-number">(2.18)</span>
</div>

![Fig. 2.5. Derivation of Bernoulli equation](/images/courses/bioprocess-engineering/chapter-02/fig-2-5.webp)

The approximate velocity of liquid outflow through an orifice:

<div class="equation-block">
  <span class="equation-main">w = √(2gH)</span>
  <span class="equation-number">(2.19)</span>
</div>

With pressure difference above free surfaces:

<div class="equation-block">
  <span class="equation-main">w = √(2g(H + (p<sub>1</sub> - p<sub>2</sub>)/(ρ g)))</span>
  <span class="equation-number">(2.19a)</span>
</div>

Actual flow rate through an orifice includes velocity, contraction and discharge coefficients:

<div class="equation-block">
  <span class="equation-main">Q = F<sub>j</sub>w = ε φ F<sub>0</sub>√(2gH) = α F<sub>0</sub>√(2gH)</span>
  <span class="equation-number">(2.20)</span>
</div>

Flow regime is determined by the Reynolds number Re = wd/ν. At low Re the flow is laminar; at high Re it becomes turbulent with intense velocity pulsations.

![Fig. 2.7. Reynolds experiment setup](/images/courses/bioprocess-engineering/chapter-02/fig-2-7.webp)

For laminar flow in a circular pipe, the velocity profile is parabolic:

<div class="equation-block">
  <span class="equation-main">w<sub>r</sub> = Δ p(R<sup>2</sup> - r<sup>2</sup>)/(4μ l)</span>
  <span class="equation-number">(2.21)</span>
</div>

Maximum velocity on the pipe axis:

<div class="equation-block">
  <span class="equation-main">w<sub>max</sub> = Δ p R<sup>2</sup>/(4μ l)</span>
  <span class="equation-number">(2.21a)</span>
</div>

Poiseuille volumetric flow rate:

<div class="equation-block">
  <span class="equation-main">Q = pi Δ p d<sup>4</sup>/(128μ l)</span>
  <span class="equation-number">(2.22)</span>
</div>

Mean velocity:

<div class="equation-block">
  <span class="equation-main">w = Q/(pi R<sup>2</sup>) = Δ p R<sup>2</sup>/(8μ l) = Δ p d<sup>2</sup>/(32μ l)</span>
  <span class="equation-number">(2.23)</span>
</div>

![Fig. 2.8. Stokes and Poiseuille formulas](/images/courses/bioprocess-engineering/chapter-02/fig-2-8.webp)

Total head loss consists of friction loss and local loss:

<div class="equation-block">
  <span class="equation-main">h<sub>loss</sub> = h<sub>fr</sub> + h<sub>loc</sub></span>
  <span class="equation-number">(2.24)</span>
</div>

Friction head loss:

<div class="equation-block">
  <span class="equation-main">h<sub>fr</sub> = λ(l/d) w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.25)</span>
</div>

Corresponding pressure loss:

<div class="equation-block">
  <span class="equation-main">Δ p<sub>fr</sub> = λ(l/d) ρ w<sup>2</sup>/2</span>
  <span class="equation-number">(2.25a)</span>
</div>

For smooth pipes in a turbulent-flow range, the Blasius formula is used:

<div class="equation-block">
  <span class="equation-main">λ = 0.3164 Re<sup>-0.25</sup></span>
  <span class="equation-number">(2.26)</span>
</div>

For rough pipes:

<div class="equation-block">
  <span class="equation-main">λ = 0.11(Δ̄ + 68/Re)<sup>0.25</sup></span>
  <span class="equation-number">(2.27)</span>
</div>

In the fully rough self-similar region:

<div class="equation-block">
  <span class="equation-main">λ = 0.11 Δ̄<sup>0.25</sup></span>
  <span class="equation-number">(2.28)</span>
</div>

Local resistances are caused by inlets, outlets, bends, valves, contractions and expansions:

<div class="equation-block">
  <span class="equation-main">h<sub>loc</sub> = ξ w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δ p<sub>loc</sub> = ξ ρ w<sup>2</sup>/2</span>
  <span class="equation-number">(2.29a)</span>
</div>

For several local resistances:

<div class="equation-block">
  <span class="equation-main">h<sub>loc</sub> = (Σξ) w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.30)</span>
</div>

Total pipeline loss:

<div class="equation-block">
  <span class="equation-main">h<sub>loss</sub> = (λ l/d + Σξ) w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δ p<sub>loss</sub> = (λ l/d + Σξ) ρ w<sup>2</sup>/2</span>
  <span class="equation-number">(2.31a)</span>
</div>

Using equivalent length:

<div class="equation-block">
  <span class="equation-main">h<sub>loss</sub> = λ((l + l<sub>eq</sub>)/d) w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.32)</span>
</div>

### 2.3. Pumps and Gas Blowers

Liquids are transported by pumps, while gases are transported by fans, blowers and compressors. The main pump parameters are flow rate Q, head H, power N, rotational speed, efficiency and allowable suction height.

Overall pump efficiency:

<div class="equation-block">
  <span class="equation-main">η = η<sub>vol</sub> η<sub>h</sub> η<sub>m</sub></span>
  <span class="equation-number">(2.33)</span>
</div>

Volumetric efficiency:

<div class="equation-block">
  <span class="equation-main">η<sub>vol</sub> = Q/(Q + q)</span>
  <span class="equation-number">(2.34)</span>
</div>

Hydraulic efficiency:

<div class="equation-block">
  <span class="equation-main">η<sub>h</sub> = H/(H + h)</span>
  <span class="equation-number">(2.35)</span>
</div>

Pump shaft power:

<div class="equation-block">
  <span class="equation-main">N = QH ρ g/(1000 η)</span>
  <span class="equation-number">(2.36)</span>
</div>

For the suction line:

<div class="equation-block">
  <span class="equation-main">(p<sub>atm</sub> - p<sub>s</sub>)/(ρ g) = z<sub>1</sub> + h<sub>1</sub> + w<sub>s</sub><sup>2</sup>/(2g) = p<sub>vac</sub>/(ρ g)</span>
  <span class="equation-number">(2.37)</span>
</div>

For the discharge line:

<div class="equation-block">
  <span class="equation-main">p<sub>d</sub>/(ρ g) = z<sub>2</sub> + h<sub>2</sub> + p<sub>2</sub>/(ρ g)</span>
  <span class="equation-number">(2.38)</span>
</div>

Required pump head:

<div class="equation-block">
  <span class="equation-main">H<sub>req</sub> = z<sub>1</sub> + z<sub>2</sub> + (p<sub>2</sub> - p<sub>1</sub>)/(ρ g) + h<sub>1</sub> + h<sub>2</sub></span>
  <span class="equation-number">(2.39)</span>
</div>

The pipeline characteristic shows how required head increases with flow rate. The operating point is the intersection of the pump characteristic and the pipeline characteristic. In bioprocessing this is important because excessive head can damage cells or flocs, while insufficient head disrupts stable feeding of equipment.

## After studying this chapter, students should be able to

- explain the role of "hydrostatic pressure" within the chapter;
- connect "Bernoulli equation" with equipment design in biotechnological production;
- distinguish the main parameters that affect "Reynolds number";
- justify process selection or evaluation through "pump".

## Self-Check Test

<section
  class="course-self-test"
  data-course-self-test
  data-locale="en"
  data-course="bioprocess-engineering"
  data-chapter="chapter-02-hydraulics-basics"
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
  <input type="radio" name="course-test-2-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Bernoulli equation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Reynolds number</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>hydrostatic pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>pump</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Which subsection directly belongs to the textbook structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>2.2. Hydrodynamics</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>2.3. Pumps and gas blowers</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>hydrostatic pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>2.1. Hydrostatics</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Which concept should engineering analysis of this chapter rely on first?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Bernoulli equation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>hydrostatic pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Reynolds number</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>pump</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. What most closely connects process theory with equipment design?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>hydrostatic pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>pump</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Bernoulli equation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Reynolds number</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>hydrostatic pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Bernoulli equation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Reynolds number</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>pump</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Which topic opens the chapter in the textbook structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>2.2. Hydrodynamics</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>2.3. Pumps and gas blowers</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>hydrostatic pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>2.1. Hydrostatics</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Which subsection directly belongs to the textbook structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>2.2. Hydrodynamics</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>2.1. Hydrostatics</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>2.3. Pumps and gas blowers</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>hydrostatic pressure</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Which topic closes the chapter in the textbook structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>2.1. Hydrostatics</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>2.3. Pumps and gas blowers</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>2.2. Hydrodynamics</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>hydrostatic pressure</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Which pair of concepts is useful to compare during self-check?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Reynolds number / pump</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>hydrostatic pressure / Reynolds number</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>hydrostatic pressure / Bernoulli equation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Bernoulli equation / pump</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. What best supports practical justification of process selection?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>hydrostatic pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Bernoulli equation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Reynolds number</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>pump</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Bernoulli equation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>hydrostatic pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Reynolds number</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>pump</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Which object is presented as a visual figure in this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>hydrostatic pressure</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Fluid element for deriving Euler equilibrium equations</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Bernoulli equation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Reynolds number</span>
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

## Further Development

In the next pass, the formulas and figure captions should be checked against the printed textbook layout, and a worked pump-installation example can be added.
