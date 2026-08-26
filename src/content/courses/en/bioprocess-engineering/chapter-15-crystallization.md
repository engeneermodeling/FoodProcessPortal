---
title: "Chapter 15. Crystallization"
course: "bioprocess-engineering"
course_title: "Bioprocess Engineering: Processes and Equipment of Biotechnological Production"
chapter: 15
description: "Physical basis, kinetics, nucleation, crystal growth, equipment and calculation principles for crystallizers."
updated: "2026-08-23"
---

## Source and Scope

Material basis: the textbook "Bioprocess Engineering. Module 1. Processes and Equipment of Biotechnological Production", edited by V.L. Zavialov, NUFT, 2024.

## Textbook-Based Structure

- 15.1. General information
- 15.2. Physical basis of crystallization from solutions
- 15.3. Crystallization kinetics
- 15.4. Crystal nucleation
- 15.5. Crystal growth
- 15.10. Influence factors
- 15.11. Crystallization equipment
- 15.12. Basic calculation principles

## Lecture Notes

Crystallization is a mass-transfer process in which a solid phase forms as crystals from solutions, melts, gases or vapours. In food and biotechnology it is used to obtain and purify sucrose, glucose, lactose, fructose, citric acid, salts and other crystalline products.

### 15.1. General Information

A crystal has an ordered lattice, and its shape is governed by symmetry, surface energy of faces and growth conditions. Industrial crystallization usually proceeds from supersaturated solutions. It can be performed by cooling, solvent evaporation, freezing-out, salting-out, chemical reaction or a combined action of several factors.

![Sucrose crystal](/images/courses/bioprocess-engineering/chapter-15/fig-15-1.webp)
*Fig. 15.1. Sucrose crystal*

### 15.2. Physical Basis of Crystallization from Solutions

Crystallization statics defines equilibrium between crystals and mother liquor; kinetics describes the transfer rate from liquid to solid phase; dynamics shows how parameters change with time. The driving force is supersaturation, the excess of solute concentration over equilibrium solubility.

<div class="equation-block">
  <span class="equation-main">Π = c - c<sub>s</sub></span>
  <span class="equation-number">(15.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">α = c/c<sub>s</sub></span>
  <span class="equation-number">(15.2)</span>
</div>

![Solubility graph for the binary sucrose-water system](/images/courses/bioprocess-engineering/chapter-15/fig-15-2.webp)
*Fig. 15.2. Solubility graph for the binary sucrose-water system*

### 15.3. Crystallization Kinetics

Kinetics consists of two main stages: formation of crystallization centres and crystal growth. Crystallization curves identify supersaturation build-up, the latent nucleation period and the growth period. Feeding fresh solution and evaporating solvent can maintain the required supersaturation.

<div class="equation-block">
  <span class="equation-main">τ<sub>l</sub> = τ<sub>2</sub> - τ<sub>1</sub></span>
  <span class="equation-number">(15.3)</span>
</div>

![Kinematic crystallization curves](/images/courses/bioprocess-engineering/chapter-15/fig-15-3.webp)
*Fig. 15.3. Kinematic crystallization curves*

### 15.4. Crystal Nucleation

Crystallization centres arise through homogeneous or heterogeneous nucleation. In real industrial solutions, especially sugar solutions, the mechanism is mostly heterogeneous: impurities, mixing, viscosity, ultrasound, electric and magnetic fields, temperature oscillations and seed crystals affect nucleation.

<div class="equation-block">
  <span class="equation-main">δF = -[(μ<sub>1</sub> - μ<sub>2</sub>)/V] + σS</span>
  <span class="equation-number">(15.4)</span>
</div>

<div class="equation-block">
  <span class="equation-main">δF = 4πr<sup>2</sup>σ - (4/3)πr<sup>3</sup>(μ<sub>1</sub> - μ<sub>2</sub>)/V</span>
  <span class="equation-number">(15.5)</span>
</div>

<div class="equation-block">
  <span class="equation-main">r<sub>k</sub> = 2σV/(μ<sub>1</sub> - μ<sub>2</sub>)</span>
  <span class="equation-number">(15.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ΔF<sub>max</sub> = (δF)<sub>max</sub> = σS<sub>k</sub>/3 = 16πσ<sup>3</sup>V<sup>2</sup>/[3(μ<sub>1</sub> - μ<sub>2</sub>)<sup>2</sup>]</span>
  <span class="equation-number">(15.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = K exp(-ΔF<sub>max</sub>/RT)</span>
  <span class="equation-number">(15.8)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = K exp{-16πσ<sup>3</sup>V<sup>2</sup>/[3RT(μ<sub>1</sub> - μ<sub>2</sub>)<sup>2</sup>]}</span>
  <span class="equation-number">(15.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">μ<sub>1</sub> = RT ln c + j</span>
  <span class="equation-number">(15.10)</span>
</div>

<div class="equation-block">
  <span class="equation-main">μ<sub>2</sub> = RT ln c<sub>s</sub> + j</span>
  <span class="equation-number">(15.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">μ<sub>1</sub> - μ<sub>2</sub> = RT ln(c/c<sub>s</sub>) = RT ln[(Δc + c<sub>s</sub>)/c<sub>s</sub>]</span>
  <span class="equation-number">(15.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = K exp{-16πσ<sup>3</sup>V<sup>2</sup>/[3R<sup>3</sup>T<sup>3</sup>ln<sup>2</sup>(c/c<sub>s</sub>)]}</span>
  <span class="equation-number">(15.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = K exp{-4εσ<sup>3</sup>V<sup>2</sup>/[R<sup>3</sup>T<sup>3</sup>ln<sup>2</sup>(c/c<sub>s</sub>)]}</span>
  <span class="equation-number">(15.14)</span>
</div>

### 15.5. Crystal Growth

After a stable nucleus forms, the crystal grows through diffusion to the surface, adsorption, surface migration and incorporation into the lattice. Growth rate may be controlled by diffusion, diffusion-kinetic or kinetic stages; in mass crystallization, polydispersity, recrystallization and suspension hydrodynamics are important.

<div class="equation-block">
  <span class="equation-main">dG/(Fdτ) = kΔc</span>
  <span class="equation-number">(15.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δc = Δc<sub>1</sub> + Δc<sub>2</sub></span>
  <span class="equation-number">(15.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M<sub>1</sub> = k<sub>1</sub>(c - c<sub>1</sub>) = k<sub>1</sub>Δc<sub>1</sub></span>
  <span class="equation-number">(15.17)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M<sub>2</sub> = k<sub>2</sub>Δc<sub>2</sub><sup>2</sup> = k<sub>2</sub>(c<sub>1</sub> - c<sub>s</sub>)<sup>2</sup></span>
  <span class="equation-number">(15.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = M<sub>1</sub> = M<sub>2</sub> = kΔc = k<sub>1</sub>Δc<sub>1</sub> = k<sub>2</sub>Δc<sub>2</sub><sup>2</sup></span>
  <span class="equation-number">(15.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = M<sub>1</sub> = D(c - c<sub>1</sub>)/δ</span>
  <span class="equation-number">(15.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = D(c - c<sub>1</sub>)/δ = k<sub>2</sub>(c<sub>1</sub> - c<sub>s</sub>)<sup>2</sup></span>
  <span class="equation-number">(15.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = [D/(2δ)](√(1 + 4k<sub>2</sub>δΔc/D) - 1)</span>
  <span class="equation-number">(15.22)</span>
</div>

### 15.6-15.9. Secondary Nucleation, Recrystallization and Heat-Mass Transfer

Secondary nucleation is related to existing crystals, collisions, abrasion and local supersaturation changes. Recrystallization reduces total surface free energy: small particles dissolve while larger crystals grow. In industrial crystallizers, heat and mass transfer, circulation, boiling, water evaporation and apparatus design are tightly coupled.

<div class="equation-block">
  <span class="equation-main">J<sub>1</sub> = L<sub>11</sub>X<sub>1</sub> + L<sub>12</sub>X<sub>2</sub>; J<sub>2</sub> = L<sub>21</sub>X<sub>1</sub> + L<sub>22</sub>X<sub>2</sub></span>
  <span class="equation-number">(15.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L<sub>12</sub> = L<sub>21</sub></span>
  <span class="equation-number">(15.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dW<sub>p</sub> = dW<sub>v</sub>; dM<sub>kr</sub> = dM<sub>p,cz</sub>; dM<sub>kr</sub> = (Cz<sub>p</sub>/W<sub>p</sub>)dW<sub>v</sub></span>
  <span class="equation-number">(15.25)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M<sub>kr</sub> = qFCz<sub>p</sub>/(arW<sub>p</sub>)</span>
  <span class="equation-number">(15.26)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dM<sub>kr</sub>/dτ = [Cz<sub>p</sub>/W<sub>p</sub>][FΔt k<sub>0</sub>/(ar)] exp(-τ/θ)</span>
  <span class="equation-number">(15.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">φ = ε<sub>r</sub>/ε<sub>t</sub> = [V<sub>r</sub>(s)/V<sub>t</sub>(s)]/[V<sub>r</sub>(y)/V<sub>t</sub>(y)]</span>
  <span class="equation-number">(15.28)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ε = m<sub>(s)i</sub>/m<sub>(y)i</sub></span>
  <span class="equation-number">(15.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Fo′ = f(Pr′, Ar, Π, Π<sub>ρ</sub>, Π<sub>V</sub>)</span>
  <span class="equation-number">(15.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Fo′ = Dτ/l<sup>2</sup>; Pr′ = ν/D; Ar = gl<sup>3</sup>Δρ/(ν<sup>2</sup>ρ); Π = c<sub>s</sub>/Δc; Π<sub>ρ</sub> = ΔG/(ρ<sub>kr</sub>l<sup>3</sup>); Π<sub>V</sub> = ρ<sub>p</sub>/ρ<sub>kr</sub></span>
  <span class="equation-number">(15.31)</span>
</div>

### 15.10. Influence Factors

Nucleation and growth depend on supersaturation, temperature, solution purity, viscosity, impurities, surface energy, mixing, circulation and vapour phase during boiling. For sugar solutions, lower purity increases the latent period, while higher temperature and lower viscosity accelerate growth.

<div class="equation-block">
  <span class="equation-main">τ<sub>l</sub> = A<sub>l</sub> exp(-B<sub>l</sub>P)</span>
  <span class="equation-number">(15.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = b(Π - 1)<sup>n</sup></span>
  <span class="equation-number">(15.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = d<sub>0</sub> exp[-E/(RT)]</span>
  <span class="equation-number">(15.34)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = lP<sup>m</sup></span>
  <span class="equation-number">(15.35)</span>
</div>

### 15.11. Crystallization Equipment

Crystallizers operate in batch or continuous mode. They are classified by spatial arrangement, shell shape, number of sections, suspension circulation and heat-transfer surface. Sugar production uses batch vacuum pans, continuous vacuum pans, and horizontal or vertical mixer-crystallizers.

![A2-PVR vacuum pan](/images/courses/bioprocess-engineering/chapter-15/fig-15-5.webp)
*Fig. 15.5. A2-PVR vacuum pan*

![Flow scheme for continuous boiling and crystallization of sugar massecuite](/images/courses/bioprocess-engineering/chapter-15/fig-15-6.webp)
*Fig. 15.6. Flow scheme for continuous boiling and crystallization of sugar massecuite*

![Continuous KTIHP vacuum pan: a - block scheme; b - design](/images/courses/bioprocess-engineering/chapter-15/fig-15-7.webp)
*Fig. 15.7. Continuous KTIHP vacuum pan: a - block scheme; b - design*

![Horizontal mixer-crystallizer](/images/courses/bioprocess-engineering/chapter-15/fig-15-8.webp)
*Fig. 15.8. Horizontal mixer-crystallizer*

![Vertical mixer-crystallizer](/images/courses/bioprocess-engineering/chapter-15/fig-15-9.webp)
*Fig. 15.9. Vertical mixer-crystallizer*

### 15.12. Basic Calculation Principles

Crystallizer calculation proceeds through process, thermal, hydrodynamic, structural, mechanical and techno-economic calculations. It is based on material and heat balances, crystallization mass graphs, heat-transfer estimates, circulation, residence time and strength of apparatus elements.

<div class="equation-block">
  <span class="equation-main">ΣG = G<sub>1</sub> + G<sub>2</sub>; G<sub>1</sub> = G<sub>n.sr</sub> + W<sub>1</sub> = G<sub>n.cz</sub> + G<sub>n.nz</sub> + W<sub>1</sub>; G<sub>2</sub> = G<sub>p.sr</sub> + W<sub>p</sub></span>
  <span class="equation-number">(15.36)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ΔQ + i<sub>p</sub>ΔG<sub>p</sub> + r<sub>kr</sub>ΔG<sub>kr</sub> = i<sub>v</sub>ΔW<sub>v</sub> + Δ(i<sub>y</sub>G<sub>y</sub>) + Q<sub>loss</sub></span>
  <span class="equation-number">(15.37)</span>
</div>

![Static material-balance scheme for multistage crystallization](/images/courses/bioprocess-engineering/chapter-15/fig-15-10.webp)
*Fig. 15.10. Static material-balance scheme for multistage crystallization*

![Mass graph of boiling and crystallization of sugar massecuite in a vacuum pan and mixer-crystallizer](/images/courses/bioprocess-engineering/chapter-15/fig-15-11.webp)
*Fig. 15.11. Mass graph of boiling and crystallization of sugar massecuite in a vacuum pan and mixer-crystallizer*

## After studying this chapter, students should be able to

- explain the role of "supersaturation" within the chapter;
- connect "nucleation" with equipment design in biotechnological production;
- distinguish the main parameters that affect "crystal growth";
- justify process selection or evaluation through "crystallizer".

## Self-Check Test

<section
  class="course-self-test"
  data-course-self-test
  data-locale="en"
  data-course="bioprocess-engineering"
  data-chapter="chapter-15-crystallization"
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
  <input type="radio" name="course-test-15-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>nucleation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>crystal growth</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>crystallizer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-0" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>supersaturation</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Which subsection directly belongs to the textbook structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-1" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>15.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>15.2. Physical basis of crystallization from solutions</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>15.3. Crystallization kinetics</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>15.4. Crystal nucleation</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Which concept should engineering analysis of this chapter rely on first?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>supersaturation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-2" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>nucleation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>crystal growth</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>crystallizer</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. What most closely connects process theory with equipment design?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>supersaturation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>nucleation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-3" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>crystallizer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>crystal growth</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>supersaturation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>nucleation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>crystallizer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-4" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>crystal growth</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Which topic opens the chapter in the textbook structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-5" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>15.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>15.2. Physical basis of crystallization from solutions</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>15.3. Crystallization kinetics</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>15.4. Crystal nucleation</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Which subsection directly belongs to the textbook structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>15.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-6" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>15.2. Physical basis of crystallization from solutions</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>15.3. Crystallization kinetics</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>15.4. Crystal nucleation</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Which topic closes the chapter in the textbook structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>15.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>15.2. Physical basis of crystallization from solutions</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-7" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>15.12. Basic calculation principles</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>15.3. Crystallization kinetics</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Which pair of concepts is useful to compare during self-check?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>crystal growth / crystallizer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>supersaturation / crystal growth</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>nucleation / crystallizer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-8" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>supersaturation / nucleation</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. What best supports practical justification of process selection?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-9" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>crystallizer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>supersaturation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>nucleation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>crystal growth</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>supersaturation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-10" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>nucleation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>crystal growth</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>crystallizer</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Which object is presented as a visual figure in this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>supersaturation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>nucleation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-11" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Sucrose crystal</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>crystal growth</span>
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
