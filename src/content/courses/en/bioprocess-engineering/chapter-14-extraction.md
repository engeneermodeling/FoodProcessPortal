---
title: "Chapter 14. Extraction"
course: "bioprocess-engineering"
course_title: "Bioprocess Engineering: Processes and Equipment of Biotechnological Production"
chapter: 14
description: "Extraction from solids, diffusion resistance, process calculation, intensification and extractor designs."
updated: "2026-08-23"
---

## Chapter Focus

This chapter presents the key concepts, equations, and equipment examples for the topic.

## course-Based Structure

- 14.1. General information
- 14.2. Extraction from a solid body
- 14.2.4. Calculation of the extraction process
- 14.2.5. Intensification methods
- 14.2.7. Equipment for extraction from solids

## Lecture Notes

Extraction is a mass-transfer process in which one or more components are removed from a solid or liquid material by a solvent that selectively dissolves the target substance. In biotechnology and food production it is used to obtain enzymes, plant extracts, aromatic compounds, biologically active substances and other target components.

### 14.1. General Information

An extractor receives the raw material and the extractant, and discharges the extract and the remaining solid phase. Depending on the initial phase, extraction is considered as a solid-liquid or liquid-liquid system. This chapter focuses mainly on solid-phase extraction, where solvent selectivity, hydromodule, phase-flow arrangement and raw-material preparation determine the result.

![Raw-material pretreatment methods before extraction](/images/courses/bioprocess-engineering/chapter-14/fig-14-1.webp)
*Fig. 14.1. Raw-material pretreatment methods before extraction*

![Classification of extractants](/images/courses/bioprocess-engineering/chapter-14/fig-14-2.webp)
*Fig. 14.2. Classification of extractants*

### 14.2.1. Diffusion Resistance Inside a Particle

The extraction rate is proportional to the driving force and inversely proportional to the total mass-transfer resistance. For capillary-porous materials, cell-wall disruption, comminution, heating, fermentation or other pretreatment is essential. After pretreatment, molecular diffusion through particle pores often forms the main resistance.

![Mass-transfer scheme for the target component](/images/courses/bioprocess-engineering/chapter-14/fig-14-3.webp)
*Fig. 14.3. Mass-transfer scheme for the target component*

### 14.2.2. Physical Meaning of Solid-Liquid Extraction

The process includes solvent penetration into pores, dissolution of the target component, internal transport to the phase boundary and mass transfer into the extractant volume. If internal diffusion is slower than external transfer, the internal diffusion coefficient and particle size limit the process; if the external stage is slower, the mass-transfer coefficient and boundary-layer thickness dominate.

<div class="equation-block">
  <span class="equation-main">q = L/G</span>
  <span class="equation-number">(14.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = -D<sub>in</sub>Fτ(C<sub>1</sub> - C′<sub>1</sub>)/R</span>
  <span class="equation-number">(14.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M/[Fτ(C<sub>1</sub> - C′<sub>1</sub>)] = D<sub>in</sub>/R</span>
  <span class="equation-number">(14.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M/[Fτ(C′<sub>1</sub> - C<sub>2</sub>)] = D<sub>out</sub>/δ = β</span>
  <span class="equation-number">(14.4)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = [R/D<sub>in</sub> + δ/D<sub>out</sub>]<sup>-1</sup>(C<sub>1</sub> - C<sub>2</sub>)Fτ</span>
  <span class="equation-number">(14.5)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = [R/D<sub>in</sub> + 1/β]<sup>-1</sup>(C<sub>1</sub> - C<sub>2</sub>)Fτ</span>
  <span class="equation-number">(14.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Bi<sub>D</sub> = βR/D<sub>in</sub></span>
  <span class="equation-number">(14.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = (C<sub>p</sub> - C<sub>k</sub>)/(C′<sub>k</sub> - C′<sub>p</sub>)</span>
  <span class="equation-number">(14.8)</span>
</div>

![Extraction curves for counter-current and cocurrent processes](/images/courses/bioprocess-engineering/chapter-14/fig-14-4.webp)
*Fig. 14.4. Extraction curves for counter-current and cocurrent processes*

### 14.2.3. Process Features

The main phase-contact schemes are counter-current, cocurrent and combined flow. Counter-current extraction provides the most complete recovery of the target component, but requires a coordinated hydromodule. More extractant increases the driving force, yet dilutes the extract and raises the cost of later concentration.

<div class="equation-block">
  <span class="equation-main">q<sub>i</sub> = (C<sub>i-1</sub> - C<sub>i</sub>)/(C′<sub>i-1</sub> - C′<sub>i</sub>)</span>
  <span class="equation-number">(14.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">∂c/∂τ = D(∂<sup>2</sup>c/∂x<sup>2</sup> + ∂<sup>2</sup>c/∂y<sup>2</sup> + ∂<sup>2</sup>c/∂z<sup>2</sup>)</span>
  <span class="equation-number">(14.10)</span>
</div>

![Triangular diagram for a solid-liquid system](/images/courses/bioprocess-engineering/chapter-14/fig-14-5.webp)
*Fig. 14.5. Triangular diagram for a solid-liquid system*

### 14.2.4. Calculation of the Extraction Process

Calculation covers internal and external mass-transfer kinetics, productivity, material and heat balances, and graphical determination of theoretical stages. Engineering estimates use the Biot, Fourier, Nusselt, Prandtl and Reynolds criteria together with corresponding correlations.

<div class="equation-block">
  <span class="equation-main">q = dG/(Fdτ) = -D dc/dn</span>
  <span class="equation-number">(14.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = kT/(6πμr)</span>
  <span class="equation-number">(14.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = -DFτ(C<sub>1</sub> - C′<sub>1</sub>)/R</span>
  <span class="equation-number">(14.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = βFτ(C′<sub>1</sub> - C<sub>2</sub>)</span>
  <span class="equation-number">(14.14)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = [R/D + 1/β]<sup>-1</sup>(C<sub>1</sub> - C<sub>2</sub>)Fτ</span>
  <span class="equation-number">(14.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Bi<sub>D</sub> = βR/D</span>
  <span class="equation-number">(14.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Fo<sub>D</sub> = Dτ/R<sup>2</sup></span>
  <span class="equation-number">(14.17)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 0.99Pr<sub>D</sub><sup>1/3</sup>Re<sup>1/3</sup></span>
  <span class="equation-number">(14.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 0.99Pr<sub>D</sub><sup>1/3</sup>Re<sup>1/3</sup>[1 + Re/16 + Re<sup>2</sup>ln(Re)/160]</span>
  <span class="equation-number">(14.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = Pr<sub>D</sub><sup>1/3</sup>(0.51Re<sup>0.5</sup> + 0.0224Re<sup>0.78</sup>)</span>
  <span class="equation-number">(14.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 0.0387(Pr<sub>D</sub>Gr)<sup>1/3</sup></span>
  <span class="equation-number">(14.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 0.38Pr<sub>D</sub><sup>0.4</sup>(Re<sup>0.2</sup> + 0.102Re<sup>0.8</sup>)</span>
  <span class="equation-number">(14.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Re = 2dw<sub>f</sub> / [3(1 - ε)ν]</span>
  <span class="equation-number">(14.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 0.8Pr<sub>D</sub><sup>1/3</sup>Re<sup>1/2</sup></span>
  <span class="equation-number">(14.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 4.33 · 10<sup>-3</sup>Re<sup>0.73</sup>Pr<sub>D</sub><sup>0.33</sup></span>
  <span class="equation-number">(14.25)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 3.8 · 10<sup>-4</sup>Re<sup>1.38</sup>Pr<sub>D</sub><sup>0.33</sup></span>
  <span class="equation-number">(14.26)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 1.41 · 10<sup>-2</sup>RePr<sub>D</sub><sup>0.5</sup></span>
  <span class="equation-number">(14.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">∂c/∂τ = D(∂<sup>2</sup>c/∂x<sup>2</sup> + ∂<sup>2</sup>c/∂y<sup>2</sup> + ∂<sup>2</sup>c/∂z<sup>2</sup>) - (w<sub>x</sub>∂c/∂x + w<sub>y</sub>∂c/∂y + w<sub>z</sub>∂c/∂z)</span>
  <span class="equation-number">(14.28)</span>
</div>

### 14.2.4.1. Productivity and Material Balance

Extractor productivity is related to useful volume, solid-phase loading, process time and the number of apparatuses in a battery. Material balances account for raw-material and extractant flows, target-component concentrations in the solid and liquid phases, swelling of the raw material and solvent retained in the solid.

<div class="equation-block">
  <span class="equation-main">G = V<sub>k</sub>Bn/τ</span>
  <span class="equation-number">(14.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L = L<sub>1</sub> + L<sub>2</sub></span>
  <span class="equation-number">(14.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L<sub>2</sub>dy = Ldx</span>
  <span class="equation-number">(14.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L<sub>2</sub>(y<sub>p</sub> - y<sub>k</sub>) = L(x<sub>k</sub> - x<sub>p</sub>)</span>
  <span class="equation-number">(14.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L<sub>2</sub>(y<sub>p</sub> - y) = L(x<sub>k</sub> - x)</span>
  <span class="equation-number">(14.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>p</sub> + W<sub>p</sub> = W<sub>k</sub> + G<sub>k</sub></span>
  <span class="equation-number">(14.34)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>p</sub>x<sub>p</sub> + W<sub>p</sub>y<sub>p</sub> = W<sub>k</sub>y<sub>k</sub> + G<sub>k</sub>x<sub>k</sub></span>
  <span class="equation-number">(14.35)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>p</sub>C<sub>G,p</sub>t<sub>G,p</sub> + W<sub>p</sub>C<sub>W,p</sub>t<sub>W,p</sub> + Q<sub>add</sub> = G<sub>k</sub>C<sub>G,k</sub>t<sub>G,k</sub> + W<sub>k</sub>C<sub>W,k</sub>t<sub>W,k</sub> + Q<sub>loss</sub></span>
  <span class="equation-number">(14.36)</span>
</div>

### 14.2.4.2. Graphical Determination of Stages

For solid-liquid systems, triangular diagrams and operating lines are used. The lever rule determines mixture compositions and amounts, while stepping between the operating and equilibrium lines gives the required number of theoretical stages or apparatuses in a battery.

<div class="equation-block">
  <span class="equation-main">G<sub>M</sub> · MS = G<sub>N</sub> · SN</span>
  <span class="equation-number">(14.37)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>F</sub> + S<sub>0</sub> = G<sub>R</sub> + S<sub>E</sub></span>
  <span class="equation-number">(14.38)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>F</sub>x<sub>F</sub> + S<sub>0</sub>y<sub>0</sub> = G<sub>R</sub>x<sub>R</sub> + S<sub>E</sub>y<sub>E</sub></span>
  <span class="equation-number">(14.39)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>F</sub> - S<sub>E</sub> = G<sub>i</sub> - S<sub>i+1</sub></span>
  <span class="equation-number">(14.40)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>F</sub>x<sub>F</sub> - S<sub>E</sub>y<sub>E</sub> = G<sub>i</sub>x<sub>i</sub> - S<sub>i+1</sub>y<sub>i+1</sub></span>
  <span class="equation-number">(14.41)</span>
</div>

<div class="equation-block">
  <span class="equation-main">P = G<sub>F</sub> - S<sub>E</sub> = G<sub>1</sub> - S<sub>2</sub> = G<sub>R</sub> - S<sub>0</sub></span>
  <span class="equation-number">(14.42)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Px<sub>P</sub> = G<sub>F</sub>x<sub>F</sub> - S<sub>E</sub>y<sub>E</sub> = G<sub>1</sub>x<sub>1</sub> - S<sub>2</sub>y<sub>2</sub> = ... = G<sub>R</sub>x<sub>R</sub> - S<sub>0</sub>y<sub>0</sub></span>
  <span class="equation-number">(14.43)</span>
</div>

![Determining the composition and amount of formed mixtures](/images/courses/bioprocess-engineering/chapter-14/fig-14-6.webp)
*Fig. 14.6. Determining the composition and amount of formed mixtures*

![Scheme of n-section counter-current extraction](/images/courses/bioprocess-engineering/chapter-14/fig-14-7.webp)
*Fig. 14.7. Scheme of n-section counter-current extraction*

![Graphical calculation of multistage counter-current extraction from solids](/images/courses/bioprocess-engineering/chapter-14/fig-14-8.webp)
*Fig. 14.8. Graphical calculation of multistage counter-current extraction from solids*

![Graphical determination of concentration stages](/images/courses/bioprocess-engineering/chapter-14/fig-14-9.webp)
*Fig. 14.9. Graphical determination of concentration stages*

### 14.2.5. Intensification Methods

Intensification aims to increase target-component yield, shorten process duration, and reduce energy demand and equipment metal consumption. It uses rational phase-flow organization, comminution, temperature increase, vibration, pulsation, ultrasound, electric and electromagnetic fields, and discrete-pulse energy input.

![Classification of extraction-process intensification methods](/images/courses/bioprocess-engineering/chapter-14/fig-14-10.webp)
*Fig. 14.10. Classification of extraction-process intensification methods*

![General classification of equipment for extraction from solids](/images/courses/bioprocess-engineering/chapter-14/fig-14-11.webp)
*Fig. 14.11. General classification of equipment for extraction from solids*

![Classification of extraction equipment by operating mode](/images/courses/bioprocess-engineering/chapter-14/fig-14-12.webp)
*Fig. 14.12. Classification of extraction equipment by operating mode*

### 14.2.7. Equipment for Extraction from Solids

Extractors are classified by operating mode, phase-contact method, solid-phase transport and energy input. Batch equipment includes steeping, circulation, stirred, combined and cavitation designs. Continuous units may be column, screw, inclined, rotary or vibration extractors.

![Batch extractor schemes](/images/courses/bioprocess-engineering/chapter-14/fig-14-13.webp)
*Fig. 14.13. Batch extractor schemes*

![Extractor with upward extractant flow](/images/courses/bioprocess-engineering/chapter-14/fig-14-14.webp)
*Fig. 14.14. Extractor with upward extractant flow*

![Extractor with downward extractant flow](/images/courses/bioprocess-engineering/chapter-14/fig-14-15.webp)
*Fig. 14.15. Extractor with downward extractant flow*

![Combined batch extractor](/images/courses/bioprocess-engineering/chapter-14/fig-14-16.webp)
*Fig. 14.16. Combined batch extractor*

![Extractor with a cavitation effect](/images/courses/bioprocess-engineering/chapter-14/fig-14-17.webp)
*Fig. 14.17. Extractor with a cavitation effect*

![Vibroextractor with a mesh container](/images/courses/bioprocess-engineering/chapter-14/fig-14-18.webp)
*Fig. 14.18. Vibroextractor with a mesh container*

![Rotary diffusion unit](/images/courses/bioprocess-engineering/chapter-14/fig-14-19.webp)
*Fig. 14.19. Rotary diffusion unit*

![Horizontal screw extractor scheme](/images/courses/bioprocess-engineering/chapter-14/fig-14-20.webp)
*Fig. 14.20. Horizontal screw extractor scheme*

![Horizontal screw extractor](/images/courses/bioprocess-engineering/chapter-14/fig-14-21.webp)
*Fig. 14.21. Horizontal screw extractor*

![Spring-blade horizontal extractor](/images/courses/bioprocess-engineering/chapter-14/fig-14-22.webp)
*Fig. 14.22. Spring-blade horizontal extractor*

![Inclined extractor](/images/courses/bioprocess-engineering/chapter-14/fig-14-23.webp)
*Fig. 14.23. Inclined extractor*

![ND-1000 double-column extractor](/images/courses/bioprocess-engineering/chapter-14/fig-14-24.webp)
*Fig. 14.24. ND-1000 double-column extractor*

![Vibroextractor principle scheme](/images/courses/bioprocess-engineering/chapter-14/fig-14-25.webp)
*Fig. 14.25. Vibroextractor principle scheme*

![Vibrotransport tray](/images/courses/bioprocess-engineering/chapter-14/fig-14-26.webp)
*Fig. 14.26. Vibrotransport tray*

![Vibration extractor](/images/courses/bioprocess-engineering/chapter-14/fig-14-27.webp)
*Fig. 14.27. Vibration extractor*

## After studying this chapter, students should be able to

- explain the role of "extractant" within the chapter;
- connect "solid-liquid system" with equipment design in biotechnological production;
- distinguish the main parameters that affect "diffusion resistance";
- justify process selection or evaluation through "extractor".

## Self-Check Test

<section
  class="course-self-test"
  data-course-self-test
  data-locale="en"
  data-course="bioprocess-engineering"
  data-chapter="chapter-14-extraction"
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
  <input type="radio" name="course-test-14-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>solid-liquid system</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>diffusion resistance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>extractant</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>extractor</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Which subsection directly belongs to the course structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>14.2. Extraction from a solid body</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>14.2.4. Calculation of the extraction process</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>14.2.5. Intensification methods</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>14.1. General information</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Which concept should engineering analysis of this chapter rely on first?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>solid-liquid system</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>extractant</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>diffusion resistance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>extractor</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. What most closely connects process theory with equipment design?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>extractant</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>extractor</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>solid-liquid system</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>diffusion resistance</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>extractant</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>solid-liquid system</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>diffusion resistance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>extractor</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Which topic opens the chapter in the chapter structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>14.2. Extraction from a solid body</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>14.2.4. Calculation of the extraction process</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>14.2.5. Intensification methods</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>14.1. General information</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Which subsection directly belongs to the course structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>14.2. Extraction from a solid body</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>14.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>14.2.4. Calculation of the extraction process</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>14.2.5. Intensification methods</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Which topic closes the chapter in the chapter structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>14.1. General information</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>14.2.7. Equipment for extraction from solids</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>14.2. Extraction from a solid body</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>14.2.4. Calculation of the extraction process</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Which pair of concepts is useful to compare during self-check?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>diffusion resistance / extractor</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>extractant / diffusion resistance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>extractant / solid-liquid system</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>solid-liquid system / extractor</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. What best supports practical justification of process selection?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>extractant</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>solid-liquid system</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>diffusion resistance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>extractor</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>solid-liquid system</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>extractant</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>diffusion resistance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>extractor</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Which object is presented as a visual figure in this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>extractant</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Raw-material pretreatment methods before extraction</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>solid-liquid system</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>diffusion resistance</span>
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
