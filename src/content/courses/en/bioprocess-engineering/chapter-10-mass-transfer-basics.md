---
title: "Chapter 10. Fundamentals of Mass Transfer"
course: "bioprocess-engineering"
course_title: "Bioprocess Engineering: Processes and Equipment of Biotechnological Production"
chapter: 10
description: "Molecular and convective diffusion, mass transfer, mass-transfer theories, similarity criteria and thermodiffusion."
updated: "2026-08-23"
---

## Source and Scope

Material basis: the textbook "Bioprocess Engineering. Module 1. Processes and Equipment of Biotechnological Production", edited by V.L. Zavialov, NUFT, 2024.

## Textbook-Based Structure

- 10.1. General information
- 10.2. Molecular diffusion
- 10.3. Convective diffusion
- 10.4. Mass transfer
- 10.5. Similarity of diffusion processes
- 10.6. Concept of thermodiffusion

## Lecture Notes

This lecture follows Chapter 10 of Zavialov's textbook: mass-transfer processes are introduced first, then molecular and convective diffusion, mass-transfer coefficients, overall mass transfer, similarity criteria and thermodiffusion.

### 10.1. General Information

Mass-transfer, or diffusion, processes redistribute mass between phases and within phases as the system tends toward physicochemical equilibrium. The driving force is the difference between the actual concentration of a component in a phase and its equilibrium concentration.

Absorption, rectification, drying, adsorption, desorption, ion exchange, extraction, crystallization, dissolution and liquid extraction are typical mass-transfer processes. In biotechnology and food production they are used to purify, concentrate, isolate target components and prepare products for storage.

Engineering analysis considers phase equilibrium, operating conditions from material balances, and transfer kinetics. Kinetics is tied to equipment design because the hydrodynamic regime controls the real transfer rate.

<div class="equation-block">
  <span class="equation-main">M = dm/dτ</span>
  <span class="equation-number">(10.1)</span>
</div>

The specific mass flux can be referred to the transfer surface or to the working volume:

<div class="equation-block">
  <span class="equation-main">q = M/F = dm/(F dτ)</span>
  <span class="equation-number">(10.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q<sub>V</sub> = M/V = dm/(V dτ)</span>
  <span class="equation-number">(10.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q<sub>V</sub> = dC/dτ = qf</span>
  <span class="equation-number">(10.4)</span>
</div>

where C is the concentration of the target component and f = F/V is the specific mass-transfer surface.

### 10.2. Molecular Diffusion

Molecular diffusion is the transfer of matter caused by random thermal motion of molecules toward lower concentration. Around a source of substance, a concentration field and isoconcentration surfaces are formed.

![Defining the concentration gradient](/images/courses/bioprocess-engineering/chapter-10/fig-10-1.webp)
*Fig. 10.1. Defining the concentration gradient*

Fick's first law for steady molecular diffusion is:

<div class="equation-block">
  <span class="equation-main">q = -D dC/dn</span>
  <span class="equation-number">(10.5)</span>
</div>

The molecular diffusion coefficient depends on substance properties, temperature, pressure and concentration. For gases it is often estimated from molecular-kinetic relations:

<div class="equation-block">
  <span class="equation-main">D = wl</span>
  <span class="equation-number">(10.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = [4.35 · 10<sup>-4</sup>T<sup>3/2</sup> / p(V<sub>A</sub><sup>1/3</sup> + V<sub>B</sub><sup>1/3</sup>)<sup>2</sup>] √(1/M<sub>A</sub> + 1/M<sub>B</sub>)</span>
  <span class="equation-number">(10.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = D<sub>0</sub>(p<sub>0</sub>/p)(T/T<sub>0</sub>)<sup>3/2</sup></span>
  <span class="equation-number">(10.8)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = D<sub>0</sub>(T/T<sub>0</sub>)</span>
  <span class="equation-number">(10.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = D<sub>0</sub>(T/T<sub>0</sub>)<sup>2</sup></span>
  <span class="equation-number">(10.10)</span>
</div>

### 10.3. Convective Diffusion

In a moving medium, a component is carried both by molecules and by the bulk flow. Convective diffusion combines molecular transfer with macroscopic transport by the medium.

<div class="equation-block">
  <span class="equation-main">q = Cw</span>
  <span class="equation-number">(10.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = q<sub>D</sub> + q<sub>c</sub></span>
  <span class="equation-number">(10.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = -D<sub>cp</sub> dC/dn</span>
  <span class="equation-number">(10.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D<sub>t</sub> = w′l</span>
  <span class="equation-number">(10.14)</span>
</div>

### 10.4. Mass Transfer

Mass transfer near an interface is commonly described through a boundary film and the mass-transfer coefficient β.

<div class="equation-block">
  <span class="equation-main">q = -D dC/dn</span>
  <span class="equation-number">(10.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = βΔC</span>
  <span class="equation-number">(10.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = β(C - C<sub>p</sub>)F</span>
  <span class="equation-number">(10.17)</span>
</div>

![Boundary films at the phase interface](/images/courses/bioprocess-engineering/chapter-10/fig-10-2.webp)
*Fig. 10.2. Boundary-film scheme at the phase interface*

<div class="equation-block">
  <span class="equation-main">β = D/δ</span>
  <span class="equation-number">(10.18)</span>
</div>

![Turbulent-flow structure](/images/courses/bioprocess-engineering/chapter-10/fig-10-3.webp)
*Fig. 10.3. Turbulent-flow structure: 1 - main flow; 2 - boundary sublayer; 3 - viscous sublayer; 4 - diffusion sublayer; 5 - solid phase*

Film theory, surface-renewal theory and penetration theory explain why turbulence, contact time and the condition of the interfacial layer determine the mass-transfer coefficient.

<div class="equation-block">
  <span class="equation-main">β = 2√(D/(πτ))</span>
  <span class="equation-number">(10.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">β = 2√(D<sub>e</sub>/(πτ))</span>
  <span class="equation-number">(10.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">β = √(DS)</span>
  <span class="equation-number">(10.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = KΔC</span>
  <span class="equation-number">(10.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = β<sub>g</sub>(C<sub>g</sub> - C<sub>p</sub>)</span>
  <span class="equation-number">(10.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = β<sub>l</sub>(C<sub>p</sub> - C<sub>l</sub>)</span>
  <span class="equation-number">(10.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = β<sub>l</sub>(C<sub>p</sub> - C*)/m</span>
  <span class="equation-number">(10.25)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = K<sub>g</sub>ΔC<sub>g</sub> = (C<sub>g</sub> - C*)/(1/β<sub>g</sub> + m/β<sub>l</sub>)</span>
  <span class="equation-number">(10.26)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = K<sub>l</sub>ΔC<sub>l</sub> = (C* - C<sub>l</sub>)/(1/β<sub>l</sub> + 1/(mβ<sub>g</sub>))</span>
  <span class="equation-number">(10.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = ∫ qF = ∫ KΔC F</span>
  <span class="equation-number">(10.28)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = ∫ q<sub>V</sub>V = ∫ K<sub>V</sub>ΔC V</span>
  <span class="equation-number">(10.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = (Kf)SHΔC</span>
  <span class="equation-number">(10.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ΔC<sub>m</sub> = (ΔC<sub>p</sub> - ΔC<sub>k</sub>)/ln(ΔC<sub>p</sub>/ΔC<sub>k</sub>)</span>
  <span class="equation-number">(10.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = G(C<sub>p</sub> - C<sub>k</sub>)</span>
  <span class="equation-number">(10.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">H = G(C<sub>p</sub> - C<sub>k</sub>)/(KfSΔC<sub>m</sub>) = hn</span>
  <span class="equation-number">(10.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">n = ∫ dC/(C - C*)</span>
  <span class="equation-number">(10.34)</span>
</div>

### 10.5. Similarity of Diffusion Processes

Similarity criteria make it possible to transfer experimental or model results to industrial apparatuses. The key criteria include mass transfer, molecular diffusion, viscosity and flow velocity.

<div class="equation-block">
  <span class="equation-main">Nu′ = βl/D</span>
  <span class="equation-number">(10.35)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Pr′ = ν/D</span>
  <span class="equation-number">(10.36)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu′ = ARe<sup>m</sup>Pr′<sup>n</sup></span>
  <span class="equation-number">(10.37)</span>
</div>

<div class="equation-block">
  <span class="equation-main">β = D<sub>d</sub>/δ<sub>d</sub></span>
  <span class="equation-number">(10.38)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Bi = βl/D<sub>d</sub></span>
  <span class="equation-number">(10.39)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Fo = Dτ/l<sup>2</sup></span>
  <span class="equation-number">(10.40)</span>
</div>

<div class="equation-block">
  <span class="equation-main">τ = l<sup>2</sup>/D<sub>d</sub></span>
  <span class="equation-number">(10.41)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Pe′ = wl/D</span>
  <span class="equation-number">(10.42)</span>
</div>

The relation Pe′ = RePr′ shows that convective transfer is governed by both flow hydrodynamics and diffusion properties.

### 10.6. Concept of Thermodiffusion

Thermodiffusion occurs when temperature and pressure gradients influence mass transfer along with the concentration gradient. This is important in heating, cooling, sterilization and concentration zones of biotechnological equipment.

<div class="equation-block">
  <span class="equation-main">q = -D(∂C/∂n + K<sub>t</sub>/T · ∂T/∂n + K<sub>b</sub>/p · ∂p/∂n)</span>
  <span class="equation-number">(10.43)</span>
</div>

## After studying this chapter, students should be able to

- explain the role of "diffusion" within the chapter;
- connect "mass transfer coefficient" with equipment design in biotechnological production;
- distinguish the main parameters that affect "mass transfer";
- justify process selection or evaluation through "driving force".

## Self-Check Test

<section
  class="course-self-test"
  data-course-self-test
  data-locale="en"
  data-course="bioprocess-engineering"
  data-chapter="chapter-10-mass-transfer-basics"
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
  <input type="radio" name="course-test-10-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>mass transfer coefficient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>mass transfer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>driving force</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Which subsection directly belongs to the textbook structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>10.2. Molecular diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>10.3. Convective diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>10.4. Mass transfer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>10.1. General information</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Which concept should engineering analysis of this chapter rely on first?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>mass transfer coefficient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>mass transfer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>driving force</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. What most closely connects process theory with equipment design?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>driving force</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>mass transfer coefficient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>mass transfer</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>mass transfer coefficient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>mass transfer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>driving force</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Which topic opens the chapter in the textbook structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>10.2. Molecular diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>10.3. Convective diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>10.4. Mass transfer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>10.1. General information</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Which subsection directly belongs to the textbook structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>10.2. Molecular diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>10.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>10.3. Convective diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>10.4. Mass transfer</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Which topic closes the chapter in the textbook structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>10.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>10.6. Concept of thermodiffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>10.2. Molecular diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>10.3. Convective diffusion</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Which pair of concepts is useful to compare during self-check?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>mass transfer / driving force</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>diffusion / mass transfer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>diffusion / mass transfer coefficient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>mass transfer coefficient / driving force</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. What best supports practical justification of process selection?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>mass transfer coefficient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>mass transfer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>driving force</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>mass transfer coefficient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>mass transfer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>driving force</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Which object is presented as a visual figure in this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Concentration gradient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>mass transfer coefficient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>mass transfer</span>
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
