---
title: "Chapter 3. Separation of Heterogeneous Systems"
course: "bioprocess-engineering"
course_title: "Bioprocess Engineering: Processes and Equipment of Biotechnological Production"
chapter: 3
description: "Classification of heterogeneous systems, settling, filtration and centrifugal separation methods."
updated: "2026-08-23"
---

## Source and Scope

Material basis: the textbook "Bioprocess Engineering. Module 1. Processes and Equipment of Biotechnological Production", edited by V.L. Zavialov, NUFT, 2024.

## Textbook-Based Structure

- 3.1. Classification and characteristics of heterogeneous systems
- 3.2. Methods for separating heterogeneous systems
- 3.3. Settling in a gravitational field
- 3.4. Filtration
- 3.5. Centrifugal methods for separating heterogeneous systems

## Lecture Notes

### 3.1. Classification and Characteristics of Heterogeneous Systems

Heterogeneous systems contain at least two phases: a dispersed phase and a continuous medium. In biotechnological production these include cell suspensions, culture broths with biomass, emulsions, foams, aerosols and dust-gas streams. Separation aims to obtain clarified liquid, concentrate, cake or purified gas of the required quality.

Suspension viscosity for engineering calculations is estimated by the empirical Bachynskyi formula:

<div class="equation-block">
  <span class="equation-main">μ = μ<sub>0</sub>(1 + 4.5φ)</span>
  <span class="equation-number">(3.1)</span>
</div>

### 3.2. Methods for Separating Heterogeneous Systems

The main methods are gravitational settling, filtration through a porous partition, centrifugation, cyclone separation, separator operation and combined schemes. Method selection depends on particle size, density difference, medium viscosity, solids concentration and sterility requirements.

### 3.3. Settling in a Gravitational Field

For large bodies in air-free space the falling velocity is:

<div class="equation-block">
  <span class="equation-main">w = gτ</span>
  <span class="equation-number">(3.2)</span>
</div>

For a particle in a viscous medium, after a short acceleration period the forces become balanced:

<div class="equation-block">
  <span class="equation-main">G - A = R</span>
  <span class="equation-number">(3.3)</span>
</div>

![Fig. 3.1. Forces acting on a particle during settling](/images/courses/bioprocess-engineering/chapter-03/fig-3-1.webp)

The difference between gravity and buoyancy for a spherical particle is:

<div class="equation-block">
  <span class="equation-main">G - A = V(ρ<sub>1</sub> - ρ<sub>2</sub>)g = (πd<sup>3</sup>/6)(ρ<sub>1</sub> - ρ<sub>2</sub>)g</span>
  <span class="equation-number">(3.4)</span>
</div>

Medium resistance force:

<div class="equation-block">
  <span class="equation-main">R = ξF w<sub>0</sub><sup>2</sup>ρ<sub>2</sub>/2 = ξπd<sup>2</sup>w<sub>0</sub><sup>2</sup>ρ<sub>2</sub>/8</span>
  <span class="equation-number">(3.5)</span>
</div>

The generalized free-settling velocity is:

<div class="equation-block">
  <span class="equation-main">w<sub>0</sub> = √(4gd(ρ<sub>1</sub> - ρ<sub>2</sub>)/(3ξρ<sub>2</sub>))</span>
  <span class="equation-number">(3.6)</span>
</div>

For settling in a gas medium, when gas density is neglected in the numerator:

<div class="equation-block">
  <span class="equation-main">w<sub>0</sub> = √(4gdρ<sub>1</sub>/(3ξρ<sub>2</sub>))</span>
  <span class="equation-number">(3.7)</span>
</div>

The drag coefficient depends on the flow regime. For the laminar region:

<div class="equation-block">
  <span class="equation-main">ξ = 24/Re</span>
  <span class="equation-number">(3.8)</span>
</div>

For the transition region:

<div class="equation-block">
  <span class="equation-main">ξ = 18.5/Re<sup>0.6</sup></span>
  <span class="equation-number">(3.9)</span>
</div>

Within the Stokes-law range:

<div class="equation-block">
  <span class="equation-main">w<sub>0</sub> = gd<sup>2</sup>(ρ<sub>1</sub> - ρ<sub>2</sub>)/(18μ)</span>
  <span class="equation-number">(3.10)</span>
</div>

Maximum particle diameter for which the laminar regime is still applicable:

<div class="equation-block">
  <span class="equation-main">d<sub>max</sub> = √(36μ<sup>2</sup>/(gρ<sub>2</sub>(ρ<sub>1</sub> - ρ<sub>2</sub>))) = 1.54√(μ<sup>2</sup>/(ρ<sub>2</sub>(ρ<sub>1</sub> - ρ<sub>2</sub>)))</span>
  <span class="equation-number">(3.11)</span>
</div>

The criterion method uses the relation between drag coefficient, Re and Ar:

<div class="equation-block">
  <span class="equation-main">ξRe<sup>2</sup> = (4/3) · gd<sup>3</sup>(ρ<sub>1</sub> - ρ<sub>2</sub>)/(ν<sup>2</sup>ρ<sub>2</sub>)</span>
  <span class="equation-number">(3.12)</span>
</div>

Archimedes criterion:

<div class="equation-block">
  <span class="equation-main">Ar = gd<sup>3</sup>(ρ<sub>1</sub> - ρ<sub>2</sub>)/(ν<sup>2</sup>ρ<sub>2</sub>)</span>
  <span class="equation-number">(3.13)</span>
</div>

Convenient form of the equation:

<div class="equation-block">
  <span class="equation-main">Ar = (3/4)ξRe<sup>2</sup></span>
  <span class="equation-number">(3.14)</span>
</div>

Critical values at regime boundaries:

<div class="equation-block">
  <span class="equation-main">Ar<sub>cr</sub> = 18 · 2 = 36</span>
  <span class="equation-number">(3.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Ar<sub>cr</sub> = (3 · 18.5/4) · 500<sup>1.4</sup> = 83500</span>
  <span class="equation-number">(3.16)</span>
</div>

To determine Re from Ar, use:

<div class="equation-block">
  <span class="equation-main">Re = Ar/18</span>
  <span class="equation-number">(3.17)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Re = 0.153Ar<sup>0.714</sup></span>
  <span class="equation-number">(3.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Re = 1.74√Ar</span>
  <span class="equation-number">(3.19)</span>
</div>

Particle-shape correction:

<div class="equation-block">
  <span class="equation-main">w<sub>p</sub> = w<sub>0</sub>φ</span>
  <span class="equation-number">(3.20)</span>
</div>

For a batch settling tank, capacity is determined by free-surface area and settling velocity:

<div class="equation-block">
  <span class="equation-main">V/τ = Fh/τ = Fw<sub>0</sub></span>
  <span class="equation-number">(3.22)</span>
</div>

![Fig. 3.2. Batch settling tank scheme](/images/courses/bioprocess-engineering/chapter-03/fig-3-2.webp)

### 3.4. Filtration

Filtration separates suspensions with a porous partition. The driving force is pressure difference, while resistance is created by the filter medium and the cake growing on its surface.

Filtration rate:

<div class="equation-block">
  <span class="equation-main">w = dV/(F dτ)</span>
  <span class="equation-number">(3.23)</span>
</div>

Flow rate through one capillary:

<div class="equation-block">
  <span class="equation-main">q = (πd<sup>2</sup>/4)(Δpd<sup>2</sup>/(32μl)) = αΔpd<sup>4</sup>/(32μl)</span>
  <span class="equation-number">(3.24)</span>
</div>

Capacity of an elementary capillary system:

<div class="equation-block">
  <span class="equation-main">dV = qdτFz = (αΔpd<sup>4</sup>/(32μl))dτFz</span>
  <span class="equation-number">(3.25)</span>
</div>

After introducing cake geometry characteristics:

<div class="equation-block">
  <span class="equation-main">w = dV/(F dτ) = Δp/(rS)</span>
  <span class="equation-number">(3.26)</span>
</div>

Specific cake resistance:

<div class="equation-block">
  <span class="equation-main">r = 32μβ/(αεδD<sup>2</sup>) = φμ/D<sup>2</sup></span>
  <span class="equation-number">(3.27)</span>
</div>

Structural resistance:

<div class="equation-block">
  <span class="equation-main">σ = r/μ</span>
  <span class="equation-number">(3.28)</span>
</div>

For an incompressible cake:

<div class="equation-block">
  <span class="equation-main">w = Δp/(σμS)</span>
  <span class="equation-number">(3.29)</span>
</div>

With filter-medium resistance included:

<div class="equation-block">
  <span class="equation-main">w = Δp/(σμS + R)</span>
  <span class="equation-number">(3.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">w = Δp/(μ(σS + R<sub>0</sub>))</span>
  <span class="equation-number">(3.31)</span>
</div>

For compressible cakes:

<div class="equation-block">
  <span class="equation-main">D = D<sub>0</sub>(1 - Δp/G)</span>
  <span class="equation-number">(3.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">S = S<sub>0</sub>/(1 - Δp/G)</span>
  <span class="equation-number">(3.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">w = Δp(1 - Δp/G)/(σS<sub>0</sub>μ + R(1 - Δp/G))</span>
  <span class="equation-number">(3.34)</span>
</div>

Relation between cake thickness and filtrate volume:

<div class="equation-block">
  <span class="equation-main">S = Vε<sub>0</sub>/F</span>
  <span class="equation-number">(3.35)</span>
</div>

Constant-pressure filtration:

<div class="equation-block">
  <span class="equation-main">dV = (Δp(1 - Δp/G)F<sup>2</sup>dτ)/(σμVε<sub>0</sub>)</span>
  <span class="equation-number">(3.36)</span>
</div>

<div class="equation-block">
  <span class="equation-main">VdV = (Δp(1 - Δp/G)F<sup>2</sup>dτ)/(σμε<sub>0</sub>)</span>
  <span class="equation-number">(3.36a)</span>
</div>

<div class="equation-block">
  <span class="equation-main">V = F√(2Δp(1 - Δp/G)τ/(σμε<sub>0</sub>))</span>
  <span class="equation-number">(3.37)</span>
</div>

Constant-rate filtration:

<div class="equation-block">
  <span class="equation-main">σ<sub>0</sub>μS<sub>0</sub> = (Δp - Δp<sup>2</sup>/G)/w</span>
  <span class="equation-number">(3.38)</span>
</div>

<div class="equation-block">
  <span class="equation-main">σ<sub>0</sub>μdS = (dΔp - 2Δp dΔp/G)/w</span>
  <span class="equation-number">(3.39)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dτ = (dΔp - 2Δp dΔp/G)/(w<sup>2</sup>σ<sub>0</sub>με<sub>0</sub>)</span>
  <span class="equation-number">(3.40)</span>
</div>

<div class="equation-block">
  <span class="equation-main">τ = ((Δp<sub>2</sub> - Δp<sub>1</sub>) - (Δp<sub>2</sub><sup>2</sup> - Δp<sub>1</sub><sup>2</sup>)/G)/(w<sup>2</sup>σ<sub>0</sub>με<sub>0</sub>)</span>
  <span class="equation-number">(3.41)</span>
</div>

<div class="equation-block">
  <span class="equation-main">w = √(((Δp<sub>2</sub> - Δp<sub>1</sub>) - (Δp<sub>2</sub><sup>2</sup> - Δp<sub>1</sub><sup>2</sup>)/G)/(σ<sub>0</sub>με<sub>0</sub>τ))</span>
  <span class="equation-number">(3.42)</span>
</div>

<div class="equation-block">
  <span class="equation-main">V = Fwτ</span>
  <span class="equation-number">(3.43)</span>
</div>

![Fig. 3.7. Filtration chamber scheme](/images/courses/bioprocess-engineering/chapter-03/fig-3-7.webp)

![Fig. 3.10. Plate-and-frame filter press](/images/courses/bioprocess-engineering/chapter-03/fig-3-10.webp)

![Fig. 3.13. Rotary drum vacuum filter scheme](/images/courses/bioprocess-engineering/chapter-03/fig-3-13.webp)

### 3.5. Centrifugal Separation Methods

Centrifugal methods are used when gravitational settling is too slow or compact high-capacity equipment is needed. In bioprocessing, centrifuges separate biomass, cell debris, crystals, protein precipitates and solid impurities.

Centrifugal force:

<div class="equation-block">
  <span class="equation-main">G<sub>c</sub> = ma = mω<sup>2</sup>r</span>
  <span class="equation-number">(3.44)</span>
</div>

Comparison with gravity:

<div class="equation-block">
  <span class="equation-main">G<sub>c</sub> = G<sub>g</sub>ω<sup>2</sup>r/g = G<sub>g</sub>Fr</span>
  <span class="equation-number">(3.45)</span>
</div>

Separation factor:

<div class="equation-block">
  <span class="equation-main">Fr = ω<sup>2</sup>r/g = 4π<sup>2</sup>n<sup>2</sup>r/g</span>
  <span class="equation-number">(3.46)</span>
</div>

In criterion calculations, the product Ar · Fr is used instead of Ar:

<div class="equation-block">
  <span class="equation-main">Ar · Fr = (3/4)ξRe<sup>2</sup></span>
  <span class="equation-number">(3.47)</span>
</div>

![Fig. 3.18. Cyclone scheme and flow motion inside it](/images/courses/bioprocess-engineering/chapter-03/fig-3-18.webp)

For centrifugal filtration, the elementary mass of an annular layer is:

<div class="equation-block">
  <span class="equation-main">dm = dVρ = 2πrdrHρ</span>
  <span class="equation-number">(3.48)</span>
</div>

Centrifugal force of the elementary layer:

<div class="equation-block">
  <span class="equation-main">dG<sub>c</sub> = ω<sup>2</sup>r dm = 2πHρω<sup>2</sup>r<sup>2</sup>dr</span>
  <span class="equation-number">(3.49)</span>
</div>

Elementary pressure:

<div class="equation-block">
  <span class="equation-main">dp = dG<sub>c</sub>/(2πrH) = ρω<sup>2</sup>rdr</span>
  <span class="equation-number">(3.50)</span>
</div>

Driving force of centrifugal filtration:

<div class="equation-block">
  <span class="equation-main">Δp = ρω<sup>2</sup>(R<sup>2</sup> - R<sub>0</sub><sup>2</sup>)/2</span>
  <span class="equation-number">(3.51)</span>
</div>

![Fig. 3.19. Centrifugal filtration](/images/courses/bioprocess-engineering/chapter-03/fig-3-19.webp)

Starting power of a centrifuge:

<div class="equation-block">
  <span class="equation-main">N = (N<sub>1</sub> + N<sub>2</sub> + N<sub>3</sub> + N<sub>4</sub>)/η</span>
  <span class="equation-number">(3.52)</span>
</div>

Individual power components:

<div class="equation-block">
  <span class="equation-main">N<sub>1</sub> = mw<sub>b</sub><sup>2</sup>/(2τ)</span>
  <span class="equation-number">(3.53)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N<sub>2</sub> = εmω<sup>2</sup>R<sup>2</sup>/(2τ)</span>
  <span class="equation-number">(3.54)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N<sub>3</sub> = fG<sub>b</sub>w<sub>v</sub></span>
  <span class="equation-number">(3.55)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N<sub>4</sub> = Cρ<sub>air</sub>HD<sup>4</sup>n<sup>3</sup></span>
  <span class="equation-number">(3.56)</span>
</div>

![Fig. 3.26. Chamber and disc separator schemes](/images/courses/bioprocess-engineering/chapter-03/fig-3-26.webp)

## After studying this chapter, students should be able to

- explain the role of "suspension" within the chapter;
- connect "settling" with equipment design in biotechnological production;
- distinguish the main parameters that affect "filtration";
- justify process selection or evaluation through "centrifuge".

## Self-Check Test

<section
  class="course-self-test"
  data-course-self-test
  data-locale="en"
  data-course="bioprocess-engineering"
  data-chapter="chapter-03-heterogeneous-systems-separation"
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
  <input type="radio" name="course-test-3-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>settling</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>filtration</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>centrifuge</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-0" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>suspension</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Which subsection directly belongs to the textbook structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-1" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>3.1. Classification and characteristics of heterogeneous systems</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>3.2. Methods for separating heterogeneous systems</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>3.3. Settling in a gravitational field</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>3.4. Filtration</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Which concept should engineering analysis of this chapter rely on first?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>suspension</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-2" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>settling</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>filtration</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>centrifuge</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. What most closely connects process theory with equipment design?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>suspension</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>settling</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-3" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>centrifuge</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>filtration</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>suspension</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>settling</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>centrifuge</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-4" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>filtration</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Which topic opens the chapter in the textbook structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-5" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>3.1. Classification and characteristics of heterogeneous systems</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>3.2. Methods for separating heterogeneous systems</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>3.3. Settling in a gravitational field</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>3.4. Filtration</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Which subsection directly belongs to the textbook structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>3.1. Classification and characteristics of heterogeneous systems</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-6" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>3.2. Methods for separating heterogeneous systems</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>3.3. Settling in a gravitational field</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>3.4. Filtration</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Which topic closes the chapter in the textbook structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>3.1. Classification and characteristics of heterogeneous systems</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>3.2. Methods for separating heterogeneous systems</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-7" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>3.5. Centrifugal methods for separating heterogeneous systems</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>3.3. Settling in a gravitational field</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Which pair of concepts is useful to compare during self-check?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>filtration / centrifuge</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>suspension / filtration</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>settling / centrifuge</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-8" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>suspension / settling</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. What best supports practical justification of process selection?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-9" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>centrifuge</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>suspension</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>settling</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>filtration</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>suspension</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-10" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>settling</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>filtration</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>centrifuge</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Which object is presented as a visual figure in this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>suspension</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>settling</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-11" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Forces acting on a particle during settling</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>filtration</span>
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
