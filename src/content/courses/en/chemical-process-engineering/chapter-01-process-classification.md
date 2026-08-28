---
title: "Chapter 1. Classification of Processes and Equipment"
course: "chemical-process-engineering"
course_title: "Processes and Equipment of Chemical Production"
chapter: 1
description: "Main types of chemical engineering processes, kinetic relations, and equipment examples."
updated: "2026-08-27"
---

## Chapter Focus

This chapter presents the key concepts, equations, and equipment examples for the topic.

## Why Classification Comes First

The course gives students a common engineering language for describing processes, calculating driving forces, selecting equipment, and checking operating modes. Related courses for food, pharmaceutical, and biotechnology production use the same transfer laws, but differ in media properties, safety, hygiene, materials, and typical equipment choices.

## Main Process Groups

### Hydromechanical Processes

Their rate is governed by hydrodynamics. Examples include settling, filtration of liquids or gases, mixing, fluidization of granular solids, and flow in pipelines and apparatuses.

### Heat Processes

Their rate is governed by heat transfer. Typical examples are heating, cooling, evaporation, and condensation. In chemical production, heat exchange is also a way to stabilize reactors, columns, and dryers.

![Shell-and-tube heat exchanger as an example of heat-transfer equipment](/images/courses/chemical-process-engineering/chapter-01/shell-tube-heat-exchanger.png)
*Fig. 1.1. Shell-and-tube heat exchanger as an example of heat-transfer equipment.*

### Mass-Transfer Processes

Their rate is governed by mass transfer. This group includes absorption, adsorption, extraction, drying, distillation, dissolution, and crystallization. Contact surface, phase distribution, and residence time are especially important.

![Contact device of a mass-transfer apparatus](/images/courses/chemical-process-engineering/chapter-01/mass-transfer-contact-device.png)
*Fig. 1.2. Contact device of a mass-transfer apparatus.*

### Chemical Processes

Chemical processes involve transformation of substances, and their rate is governed by chemical kinetics. In this course they are considered through equipment: reactors, heat-transfer surfaces, mixing, sparging, and control of temperature, pressure, and concentration.

### Mechanical Processes

Mechanical processes include size reduction, classification, pressing, forming, dosing, and handling of bulk solids. Their calculation is linked to energy demand, particle-size distribution, strength of particles, and machine operating modes.

## Common Kinetic Form

Most processes can be expressed through one engineering rule: process rate is directly proportional to the driving force and inversely proportional to process resistance.

<div class="equation-block">
  <span class="equation-main">dV / (F<sub>1</sub> dτ) = Δp / R<sub>1</sub> = K<sub>1</sub> Δp</span>
  <span class="equation-number">(1.1)</span>
</div>

For hydromechanical processes, Δp is the pressure difference and R<sub>1</sub> is hydraulic resistance.

<div class="equation-block">
  <span class="equation-main">dQ / (F<sub>2</sub> dτ) = Δt / R<sub>2</sub> = K<sub>2</sub> Δt</span>
  <span class="equation-number">(1.2)</span>
</div>

For heat processes, Δt is the temperature difference and R<sub>2</sub> is thermal resistance.

<div class="equation-block">
  <span class="equation-main">dM / (F<sub>3</sub> dτ) = ΔC / R<sub>3</sub> = K<sub>3</sub> ΔC</span>
  <span class="equation-number">(1.3)</span>
</div>

For mass-transfer processes, ΔC is the concentration difference and R<sub>3</sub> is diffusion resistance.

## From Process to Equipment

The engineer first asks what is being transferred, what driving force acts, what resistance limits the rate, and what equipment form provides the required area, residence time, safety, and controllability.

![Tube bundle of heat-transfer equipment](/images/courses/chemical-process-engineering/chapter-01/tube-bundle-photo.png)
*Fig. 1.3. Tube bundle: moving from a heat-transfer equation to actual equipment design.*

## Standards Framework Without GOST

The course does not use GOST, OST, RD, or SNiP as normative references. The preferred framework is Ukrainian technical regulation and current international or European sources: Ukrainian pressure-equipment regulation, Pressure Equipment Directive 2014/68/EU, EN 13445, ASME BPVC, and relevant ISO/EN/API documents.

## Video from the Virtual course

<video controls preload="metadata" style="width: 100%; max-width: 760px; border-radius: 8px; border: 1px solid var(--border-color); background: #000;">
  <source src="/videos/courses/chemical-process-engineering/chapter-01/plate-heat-exchanger.mp4" type="video/mp4" />
</video>

*Video 1.1. Plate Heat Exchanger - an equipment example for heat-transfer processes.*

## Self-Test

<section class="course-self-test" data-course-self-test data-locale="en" data-course="chemical-process-engineering" data-chapter="chapter-01-process-classification" data-pass="8">
<h2>Chapter Test</h2>
<p>Questions are shuffled automatically. At least 8 correct answers out of 10 are required.</p>
<form data-course-test-form>
<fieldset class="course-test-item" data-course-test-item><legend>1. What governs the rate of hydromechanical processes?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-en-1-0" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>hydrodynamics</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-0" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>chemical equilibrium only</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-0" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>particle-size distribution only</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-0" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>latent heat only</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>2. Which process belongs to heat processes?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-en-1-1" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>filtration</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-1" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>condensation</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-1" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>size reduction</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-1" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>centrifugation</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>3. What is the typical driving force of heat transfer?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-en-1-2" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>concentration difference</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-2" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>shaft speed</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-2" value="2" data-correct="1" /><span class="course-test-letter">C</span><span>temperature difference</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-2" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>cake moisture</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>4. For which process is ΔC a driving force?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-en-1-3" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>heat transfer</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-3" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>mass transfer</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-3" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>hydrostatics</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-3" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>shell strength</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>5. Why are GOST documents not used as normative references here?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-en-1-4" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>because standards are unnecessary</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-4" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>because the course should rely on Ukrainian or international sources</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-4" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>because they are only about biotechnology</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-4" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>because they contain no drawings</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>6. What equipment is shown in Fig. 1.1?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-en-1-5" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>shell-and-tube heat exchanger</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-5" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>disk filter</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-5" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>crusher</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-5" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>hydrocyclone</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>7. Which group includes size reduction?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-en-1-6" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>mass transfer</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-6" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>heat processes</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-6" value="2" data-correct="1" /><span class="course-test-letter">C</span><span>mechanical processes</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-6" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>automation processes</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>8. What connects an equation with equipment design?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-en-1-7" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>area, residence time, safety, and controllability</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-7" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>the color of the apparatus</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-7" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>the page order in notes</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-7" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>only the manufacturer name</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>9. Which group includes absorption?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-en-1-8" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>mass-transfer processes</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-8" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>mechanical processes</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-8" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>heat processes only</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-8" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>strength calculations</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>10. What is the inverse of process resistance commonly treated as?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-en-1-9" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>equipment mass</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-9" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>rate or transfer coefficient</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-9" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>drawing number</span></label><label class="course-test-option"><input type="radio" name="chem-en-1-9" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>nominal volume only</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<div class="course-test-actions"><button type="submit" class="course-test-primary">Check</button><button type="button" class="course-test-secondary" data-course-test-reset>Reset</button></div></form>
<p class="course-test-status" aria-live="polite"><strong data-course-test-result>Result: 0/10</strong><span data-course-test-best>Best result: -</span></p>
<details class="course-test-answers"><summary>Answers</summary><ol><li>1: A</li><li>2: B</li><li>3: C</li><li>4: B</li><li>5: B</li><li>6: A</li><li>7: C</li><li>8: A</li><li>9: A</li><li>10: B</li></ol></details>
</section>
