---
title: "Chapter 1. General Information"
course: "bioprocess-engineering"
course_title: "Bioprocess Engineering: Processes and Equipment of Biotechnological Production"
chapter: 1
description: "Basic laws of technological processes, similarity method and physical properties of substances."
updated: "2026-08-23"
---

## Chapter Focus

This chapter presents the key concepts, equations, and equipment examples for the topic.

## course-Based Structure

- 1.1. Basic laws of technological processes
- 1.2. Similarity method and its role in studying processes and equipment of biotechnological production
- 1.3. Basic physical properties of substances
- 1.4. Basic physical and technical properties of substances

## Lecture Notes

This is a polished lecture version of course pages 21-43. The text, equations, table and figures are separated into editable blocks so the chapter can be read as a lecture and translated further without using page scans.

### Part 1. General Processes

### Chapter 1. General Information

### 1.1. Basic Laws of Technological Processes

#### Conservation of Mass and Energy

Technological processes in biotechnological production follow general physical and physicochemical laws. Applying these laws to a specific process makes it possible to build the process theory and the methods used to design equipment for carrying it out.

The most general laws of nature can be stated as follows: in nature and technology, only such transformations occur in which the total mass and energy of the system remain unchanged. In process engineering these laws are expressed as material and heat balances.

![Material balance scheme](/images/courses/bioprocess-engineering/chapter-01/fig-1-1.webp)
*Fig. 1.1. Material balance scheme.*

For an arbitrary apparatus, the material balance scheme is shown in Fig. 1.1. According to the law of conservation of mass, the material balance can be written as:

<div class="equation-block">
  <span class="equation-main">P<sub>A</sub> + P<sub>B</sub> + P<sub>C</sub> + P<sub>D</sub> = P<sub>E</sub> + P<sub>F</sub> + P<sub>G</sub></span>
  <span class="equation-number">(1.1)</span>
</div>

where A, B, C, D, E, F, G are the components entering and leaving the apparatus; P<sub>i</sub> are their conventional masses.

![Heat balance scheme](/images/courses/bioprocess-engineering/chapter-01/fig-1-2.webp)
*Fig. 1.2. Heat balance scheme.*

By analogy, for the heat balance scheme (Fig. 1.2), the law of conservation of energy can be expressed by the heat balance of the enthalpy streams entering and leaving the apparatus:

<div class="equation-block">
  <span class="equation-main">Q<sub>A</sub> + Q<sub>B</sub> + Q<sub>C</sub> + Q<sub>D</sub> + Q<sub>int</sub> + Q<sub>ext</sub> =<br />Q<sub>E</sub> + Q<sub>F</sub> + Q<sub>G</sub> + Q<sub>loss</sub> + …</span>
  <span class="equation-number">(1.2)</span>
</div>

where Q<sub>int</sub> is heat released inside the apparatus during operation; Q<sub>ext</sub> is heat supplied from outside; Q<sub>loss</sub> is heat lost to the surroundings.

The heat balance can also be represented as a Sankey diagram (Fig. 1.3). The heat brought by each component is shown at a selected scale. The sum of the widths of all incoming heat-flow segments is equal to the sum of the widths of the outgoing heat-flow segments.

![Sankey diagram](/images/courses/bioprocess-engineering/chapter-01/fig-1-3.webp)
*Fig. 1.3. Sankey diagram.*

#### Transfer Laws

Many technological operations are governed by transfer processes. In hydrodynamic processes the transferred object is moving mass, in thermal processes it is thermal energy, and in diffusion processes it is a component transferred from one phase to another.

Hydrodynamic, thermal and diffusion processes have kinetic equations of a similar form. For heat transfer:

<div class="equation-block">
  <span class="equation-main">dQ/dτ = K Δt = (1/R) Δt, kJ/(m²·s)</span>
  <span class="equation-number">(1.3)</span>
</div>

where Q is the heat transferred through 1 m² of heat-transfer surface; τ is time; K is the heat-transfer coefficient; Δt is the driving force, i.e. the temperature difference; R = 1/K is thermal resistance.

For diffusion mass-transfer processes:

<div class="equation-block">
  <span class="equation-main">dM/dτ = K&#x27; ΔC = (1/R&#x27;) ΔC, kg/(m²·s)</span>
  <span class="equation-number">(1.4)</span>
</div>

where dM is the amount of substance transferred; ΔC is the concentration difference; K' is the mass-transfer coefficient; R' = 1/K' is mass-transfer resistance.

For hydrodynamic processes, for example filtration:

<div class="equation-block">
  <span class="equation-main">dW/dτ = (1/R<sub>h</sub>) Δp = C<sub>h</sub> Δp, m³/(m²·s)</span>
  <span class="equation-number">(1.5)</span>
</div>

where dW/dτ is the amount of filtrate; R<sub>h</sub> is hydraulic resistance of the filter and cake; Δp is the pressure difference; C<sub>h</sub> = 1/R<sub>h</sub> is permeability.

Comparison of these three kinetic equations shows their complete analogy, often called the triple analogy. The general kinetic transfer equation is:

<div class="equation-block">
  <span class="equation-main">I = L x,</span>
</div>

where I is the process rate, L is permeability, and x is the driving force.

#### Equilibrium Laws

A set of interacting bodies is called a system. A key question is how far the system is from equilibrium and how it changes under external influence. A system is considered equilibrium when its state does not change with time. In terms of transfer processes, equilibrium is a state in which no transfer occurs even when partitions do not resist it.

The direction of change is described by the Gibbs phase rule and Le Chatelier's principle:

<div class="equation-block">
  <span class="equation-main">S = K − f + 2,</span>
  <span class="equation-number">(1.6)</span>
</div>

where S is the number of degrees of freedom, K is the number of components, and f is the number of phases.

Le Chatelier's principle states that when a system is displaced from equilibrium, changes occur in directions opposite to the forces that caused the displacement. For process engineering this helps determine which parameters should be changed to obtain the required production effect.

#### Process Optimization

Any process can usually be implemented in several equipment variants. Selecting the most appropriate variant is optimization. The most common optimization criterion is the minimum cost of the product obtained in the process.

**Continuity of processes.** Biotechnological processes may be batch or continuous. Continuous processes reduce labor costs, save energy and materials, reduce equipment size, simplify automation, stabilize the operating regime and improve product quality.

**Countercurrent exchange.** In exchange processes, the interacting media can move countercurrently, cocurrently or crosswise (Fig. 1.4). For continuous heat and mass exchange, the countercurrent arrangement is often the most favorable.

![Countercurrent, cocurrent and cross-flow movement of media](/images/courses/bioprocess-engineering/chapter-01/fig-1-4.webp)
*Fig. 1.4. Countercurrent (1), cocurrent (2) and cross-flow (3) movement of media.*

**Renewal of the phase-contact surface.** Heat and mass exchange intensify when contact between media is closer and fresh elements of the media meet more often. This occurs during turbulent motion.

**Maximum heat recovery.** Many food and biotechnological processes require thermal energy. Heat wastes with lower potential should be reused whenever possible. Steam is convenient because its heat content is practically constant at a given pressure, which allows repeated use in a series of apparatuses.

**Scale-up law.** The size of an apparatus affects the process taking place inside it. Results obtained in small apparatuses can be transferred to large-scale equipment only with scale effects considered. This leads to the need for modeling and similarity theory.

### 1.2. Similarity Method and Its Role

New or improved production processes are first studied in laboratory units. Moving directly to full-scale equipment is expensive and risky. However, the transition from a laboratory unit to production scale often changes the process behavior because apparatus scale strongly affects the process. Therefore, pilot units are used between laboratory and production tests.

Similarity theory answers how a model should be shaped and sized so that its results can be applied to the full-scale apparatus. It also indicates which quantities should be measured, how experimental data should be processed, and how to construct a model similar to the original.

#### First Similarity Theorem

The first similarity theorem states that similar phenomena have numerically equal similarity criteria. For geometric similarity:

<div class="equation-block">
  <span class="equation-main">L/l = α<sub>l</sub>.</span>
</div>

For kinematic similarity:

<div class="equation-block">
  <span class="equation-main">T/t = α<sub>t</sub>.</span>
</div>

For dynamic similarity:

<div class="equation-block">
  <span class="equation-main">K/k = α<sub>k</sub>.</span>
</div>

For dynamically similar systems, corresponding forces are related as the product of the squares of corresponding lengths, the squares of corresponding velocities and the first powers of the corresponding densities:

<div class="equation-block">
  <span class="equation-main">K/k = (ρ<sub>full</sub>/ρ<sub>model</sub>) · (V²/v²) · (L²/l²)</span>
  <span class="equation-number">(1.7)</span>
</div>

The generalized criterion of mechanical similarity is Newton's criterion:

<div class="equation-block">
  <span class="equation-main">Ne = K / (ρ l² v²)</span>
  <span class="equation-number">(1.8)</span>
</div>

For systems in a gravitational field:

<div class="equation-block">
  <span class="equation-main">Ne′ = Lg/V² = lg/v²</span>
  <span class="equation-number">(1.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Fr = v² / (g l)</span>
  <span class="equation-number">(1.10)</span>
</div>

For systems governed by viscous-friction forces:

<div class="equation-block">
  <span class="equation-main">Ne″ = μ/(LρV)</span>
  <span class="equation-number">(1.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Re = l v / ν = ρ v l / μ</span>
  <span class="equation-number">(1.12)</span>
</div>

#### Main Similarity Criteria

| Group | Criterion | Expression | Main quantities | Application |
|---|---|---|---|---|
| Mechanical similarity | Newton | `Ne = K/(ρl²v²)` | K - force; ρ - density; l - length; v - velocity | General criterion of mechanical similarity |
| Mechanical similarity | Froude | `Fr = v²/(gl)` | g - gravitational acceleration | Similarity in gravitational fields |
| Mechanical similarity | Euler | `Eu = Δp/(ρv²)` | Δp - pressure drop | Pressure-force action in flows |
| Mechanical similarity | Archimedes | `Ar = gl³(ρ₁-ρ₂)/(ν²ρ₂)` | ν - kinematic viscosity; ρ₁, ρ₂ - densities | Systems governed by viscosity and buoyancy |
| Mechanical similarity | Reynolds | `Re = lv/ν = vρl/μ` | μ - dynamic viscosity | Systems governed by viscous friction |
| Thermal similarity | Nusselt | `Nu = αl/λ` | α - heat-transfer coefficient; λ - thermal conductivity | Heat exchange between medium and wall |
| Thermal similarity | Prandtl | `Pr = cμ/λ` | c - heat capacity | Physical properties of the heat carrier |
| Thermal similarity | Peclet | `Pe = vt/a` | a - thermal diffusivity | Ratio of convective heat transfer to conduction |
| Thermal similarity | Kutateladze | `Ku = r/(cΔt)` | r - latent heat | Heat transfer with phase change |
| Diffusion similarity | Diffusion Nusselt | `Nu' = βl/D` | β - mass-transfer coefficient; D - diffusion coefficient | Mass transfer |
| Diffusion similarity | Diffusion Prandtl | `Pr' = ν/D` | ν - kinematic viscosity; D - diffusion coefficient | Physical properties of the medium |

*Table 1.1. Main similarity criteria.*

#### Second and Third Similarity Theorems

The second theorem states that any relationship between variables describing a phenomenon can be written as a relationship between similarity criteria:

<div class="equation-block">
  <span class="equation-main">i = n − k,</span>
  <span class="equation-number">(1.13)</span>
</div>

For heat transfer at the surface of a body washed by a fluid stream, the heat-transfer coefficient α depends on the characteristic size l, velocity v, density ρ, kinematic viscosity ν, heat capacity c and thermal conductivity λ. The initial dependence may be written in power form:

<div class="equation-block">
  <span class="equation-main">α = C l<sup>β</sup> v<sup>γ</sup> ρ<sup>δ</sup> ν<sup>ε</sup> c<sup>η</sup> λ<sup>θ</sup></span>
  <span class="equation-number">(1.14)</span>
</div>

This assumption is justified by the fact that many technical laws are expressed by power equations. Choosing length L, mass M, time τ, temperature T and heat J as primary quantities, the dimensions of the left and right sides of equation (1.14) must be identical:

<div class="equation-block">
  <span class="equation-main">[J/(L<sup>2</sup>Tτ)] = C [L]<sup>β</sup> [L/τ]<sup>γ</sup> [M/L<sup>3</sup>]<sup>δ</sup> [L<sup>2</sup>/τ]<sup>ε</sup> [J/(L<sup>3</sup>T)]<sup>η</sup> [J/(LTτ)]<sup>θ</sup></span>
  <span class="equation-number">(1.15)</span>
</div>

Equating the exponents of the units in the left and right sides of equation (1.15) gives a system of equations. Since δ = 0, density drops out of the initial formula, and the two final equations become identical. Three equations remain:

<div class="equation-block">
  <span class="equation-main">η + θ = 1<br />γ + ε + θ = 1<br />β + γ + 2ε − 3δ − 3η − θ = −2</span>
</div>

Expressing β, γ and η through ε and θ gives:

<div class="equation-block">
  <span class="equation-main">α = C l<sup>−ε−θ</sup> v<sup>1−ε−θ</sup> ν<sup>ε</sup> c<sup>1−θ</sup> λ<sup>θ</sup></span>
  <span class="equation-number">(1.16)</span>
</div>

This equation can be rearranged as:

<div class="equation-block">
  <span class="equation-main">αl/λ = C (vl/ν)<sup>1−ε−θ</sup> (νc/λ)<sup>1−θ</sup></span>
  <span class="equation-number">(1.17)</span>
</div>

Because αl/λ = Nu, vl/ν = Re, νc/λ = Pr, 1 − ε − θ = m and 1 − θ = n, the criterion equation is:

<div class="equation-block">
  <span class="equation-main">Nu = C Re<sup>m</sup> Pr<sup>n</sup></span>
  <span class="equation-number">(1.18)</span>
</div>

The third theorem states that systems are similar if their uniqueness conditions are similar and the criteria composed from these conditions are numerically equal. Uniqueness conditions include geometry, physical constants, initial state and boundary conditions.

For a model pipeline, one of the similarity requirements is:

<div class="equation-block">
  <span class="equation-main">Re<sub>model</sub> = Re<sub>full</sub>-scale.</span>
</div>

Pressure-loss data can then be processed as:

<div class="equation-block">
  <span class="equation-main">Eu = f(Re).</span>
</div>

### 1.3. Basic Physical Properties of Substances

During technological processing, physicochemical properties of materials change. These data are needed to determine equipment dimensions, shape, construction, energy consumption and materials of construction.

Composition can be expressed by mass, volume and mole fractions:

<div class="equation-block">
  <span class="equation-main">x<sub>m</sub> = G<sub>i</sub>/G; x<sub>V</sub> = V<sub>i</sub>/V; x<sub>M</sub> = N<sub>i</sub>/N</span>
  <span class="equation-number">(1.19)</span>
</div>

For a component and for the mixture:

<div class="equation-block">
  <span class="equation-main">G<sub>i</sub> = N<sub>i</sub> M<sub>i</sub></span>
  <span class="equation-number">(1.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G = N M</span>
  <span class="equation-number">(1.21)</span>
</div>

The relationship between mass and mole fractions is:

<div class="equation-block">
  <span class="equation-main">G<sub>i</sub>/G = (N<sub>i</sub>/N)(M<sub>i</sub>/M)</span>
  <span class="equation-number">(1.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x<sub>mi</sub> = x<sub>Mi</sub> (M<sub>i</sub>/M)</span>
  <span class="equation-number">(1.23)</span>
</div>

The relationship with volume concentration is:

<div class="equation-block">
  <span class="equation-main">G<sub>i</sub> = ρ<sub>i</sub> V<sub>i</sub></span>
  <span class="equation-number">(1.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G = ρ V</span>
  <span class="equation-number">(1.25)</span>
</div>

Dividing equation (1.24) by equation (1.25) gives:

<div class="equation-block">
  <span class="equation-main">G<sub>i</sub>/G = (ρ<sub>i</sub>/ρ)(V<sub>i</sub>/V)</span>
  <span class="equation-number">(1.26)</span>
</div>

Taking expression (1.19) into account:

<div class="equation-block">
  <span class="equation-main">x<sub>mi</sub> = x<sub>Vi</sub> (ρ<sub>i</sub>/ρ)</span>
  <span class="equation-number">(1.27)</span>
</div>

The general conversion is:

<div class="equation-block">
  <span class="equation-main">x<sub>mi</sub> = x<sub>Mi</sub> (M<sub>i</sub>/M) = x<sub>Vi</sub> (ρ<sub>i</sub>/ρ)</span>
  <span class="equation-number">(1.28)</span>
</div>

For binary mixtures:

<div class="equation-block">
  <span class="equation-main">x<sub>m</sub> = 1 / [1 + (M<sub>a</sub>/M<sub>b</sub>)(1/x<sub>M</sub> − 1)],</span>
  <span class="equation-number">(1.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x<sub>m</sub> = 1 / [1 + (ρ<sub>b</sub>/ρ<sub>a</sub>)(1/x<sub>V</sub> − 1)],</span>
  <span class="equation-number">(1.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x<sub>V</sub> = 1 / [1 + (ρ<sub>a</sub>/ρ<sub>b</sub>)(1/x<sub>m</sub> − 1)]</span>
  <span class="equation-number">(1.31)</span>
</div>

### 1.4. Basic Physical and Technical Properties

Density is needed in mass-flow equations, material balances and criteria such as Re, Eu and Ar:

<div class="equation-block">
  <span class="equation-main">ρ<sub>mix</sub> = 1 / [x<sub>m</sub>/ρ<sub>a</sub> + (1 − x<sub>m</sub>)/ρ<sub>b</sub>]</span>
  <span class="equation-number">(1.32)</span>
</div>

For moisture content:

<div class="equation-block">
  <span class="equation-main">ρ<sub>mix</sub> = 100 / [(100 − ω)/ρ<sub>a</sub> + ω/ρ<sub>b</sub>]</span>
  <span class="equation-number">(1.33)</span>
</div>

Molecular mass of a binary mixture:

<div class="equation-block">
  <span class="equation-main">M = 1 / [x<sub>m</sub>/M<sub>a</sub> + (1 − x<sub>m</sub>)/M<sub>b</sub>]</span>
  <span class="equation-number">(1.34)</span>
</div>

Viscosity is the resistance of liquids or gases to relative motion of their particles:

<div class="equation-block">
  <span class="equation-main">T = μ S (dw/dl),</span>
  <span class="equation-number">(1.35)</span>
</div>

The kinematic viscosity is:

<div class="equation-block">
  <span class="equation-main">ν = μ/ρ</span>
  <span class="equation-number">(1.36)</span>
</div>

For gas mixtures:

<div class="equation-block">
  <span class="equation-main">1/ν = x<sub>1</sub>/ν<sub>1</sub> + x<sub>2</sub>/ν<sub>2</sub> + x<sub>3</sub>/ν<sub>3</sub> + …</span>
  <span class="equation-number">(1.37)</span>
</div>

For mutually insoluble liquid mixtures:

<div class="equation-block">
  <span class="equation-main">lg(μ<sub>mix</sub>) = x<sub>1</sub> lg(μ<sub>1</sub>) + x<sub>2</sub> lg(μ<sub>2</sub>) + …</span>
  <span class="equation-number">(1.38)</span>
</div>

For dilute suspensions:

<div class="equation-block">
  <span class="equation-main">μ<sub>s</sub> = μ<sub>l</sub> (1 + 4.5 x<sub>V</sub>),</span>
  <span class="equation-number">(1.39)</span>
</div>

Thermal conductivity λ characterizes the ability of a substance to conduct heat. It depends on composition, temperature, pressure, density and moisture and appears in heat-transfer equations and the Nu and Pr criteria.

Physicochemical boiling-point elevation is the increase in boiling temperature of a solution compared with the saturated vapor temperature of the solvent. At other pressures it is estimated by:

<div class="equation-block">
  <span class="equation-main">Δ<sub>pc</sub> = Δ&#x27;_pc k</span>
  <span class="equation-number">(1.40)</span>
</div>

### course Self-Check Questions

1. State the laws of conservation of mass and energy.
2. Explain the transfer laws.
3. Explain the equilibrium laws.
4. What is the meaning of process optimization principles?
5. State the similarity theorems and their use in process scale-up.
6. Explain mathematical and physical modeling.
7. Which main physical properties of substances are used in process and equipment calculations?

## After studying this chapter, students should be able to

- prepare material and heat balances for biotechnological equipment;
- explain the triple analogy of mass, heat and momentum transfer;
- use equilibrium, the Gibbs phase rule and Le Chatelier's principle to analyze process direction;
- explain continuity, countercurrent flow, renewal of contact surface and heat recovery as optimization principles;
- distinguish geometric, kinematic and dynamic similarity;
- use Re, Fr, Eu, Nu, Pr, Pe and other criteria for analysis and scale-up;
- convert mass, volume and mole fractions;
- use density, viscosity, heat capacity, thermal conductivity and boiling-point elevation in calculations.

## Self-Check Test

<section
  class="course-self-test"
  data-course-self-test
  data-locale="en"
  data-course="bioprocess-engineering"
  data-chapter="chapter-01-general-information"
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
  <input type="radio" name="course-test-1-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>energy balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-0" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>material balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>similarity criteria</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>physical properties</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Which subsection directly belongs to the course structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>1.2. Similarity method and its role in studying processes and equipment of biotechnological production</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>1.3. Basic physical properties of substances</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-1" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>1.1. Basic laws of technological processes</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>1.4. Basic physical and technical properties of substances</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Which concept should engineering analysis of this chapter rely on first?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>material balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>similarity criteria</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>physical properties</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-2" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>energy balance</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. What most closely connects process theory with equipment design?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-3" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>physical properties</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>material balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>energy balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>similarity criteria</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>material balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-4" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>similarity criteria</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>energy balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>physical properties</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Which topic opens the chapter in the chapter structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>1.2. Similarity method and its role in studying processes and equipment of biotechnological production</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>1.3. Basic physical properties of substances</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-5" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>1.1. Basic laws of technological processes</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>1.4. Basic physical and technical properties of substances</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Which subsection directly belongs to the course structure of this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>1.1. Basic laws of technological processes</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>1.3. Basic physical properties of substances</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>1.4. Basic physical and technical properties of substances</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-6" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>1.2. Similarity method and its role in studying processes and equipment of biotechnological production</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Which topic closes the chapter in the chapter structure?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-7" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>1.4. Basic physical and technical properties of substances</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>1.1. Basic laws of technological processes</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>1.2. Similarity method and its role in studying processes and equipment of biotechnological production</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>1.3. Basic physical properties of substances</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Which pair of concepts is useful to compare during self-check?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>similarity criteria / physical properties</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-8" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>material balance / energy balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>material balance / similarity criteria</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>energy balance / physical properties</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. What best supports practical justification of process selection?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>material balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>energy balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-9" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>physical properties</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>similarity criteria</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Which parameter or phenomenon should be controlled during process analysis?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>material balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>similarity criteria</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>physical properties</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-10" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>energy balance</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Which object is presented as a visual figure in this chapter?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-11" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Material balance scheme</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>material balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>energy balance</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>similarity criteria</span>
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
<li>Question 1: Correct answer - B</li>
<li>Question 2: Correct answer - C</li>
<li>Question 3: Correct answer - D</li>
<li>Question 4: Correct answer - A</li>
<li>Question 5: Correct answer - B</li>
<li>Question 6: Correct answer - C</li>
<li>Question 7: Correct answer - D</li>
<li>Question 8: Correct answer - A</li>
<li>Question 9: Correct answer - B</li>
<li>Question 10: Correct answer - C</li>
<li>Question 11: Correct answer - D</li>
<li>Question 12: Correct answer - A</li>
</ol>
</details>
</section>
