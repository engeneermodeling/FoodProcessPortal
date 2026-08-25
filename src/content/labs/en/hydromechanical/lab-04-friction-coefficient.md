---
title: "EXPERIMENTAL DETERMINATION OF THE FRICTION RESISTANCE COEFFICIENT AND EQUIVALENT ROUGHNESS"
category: "hydromechanical"
category_title: "Hydromechanical Processes"
lab: 4
goal: "to determine the friction resistance coefficients by experimental and calculation methods, followed by their comparison, as well as the corresponding equivalent roughness of the pipe."
description: "Experimental determination of the friction resistance coefficient and the equivalent roughness of a pipeline."
author: "FoodProcessPortal"
updated: "2026-07-22"
---
# Laboratory Work №4. Experimental Determination of the Friction Resistance Coefficient and Equivalent Roughness

## Theoretical Background

During the motion of fluid through a pipeline, energy is expended to overcome internal friction forces between layers of fluid and external friction between the fluid and the pipe walls. These energy (head) losses are calculated using the Darcy–Weisbach formula

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image1.png" alt="formula" /> (4.1)</div>

where λ is the friction resistance coefficient; l is the pipe length; d is the pipe diameter; w is the average fluid velocity.

The reliability of calculating these head losses depends on the correct determination of the friction resistance coefficient λ. It is determined experimentally using formula (4.1), or from empirical formulas.

In the first case

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image2.png" alt="formula" /> (4.2)</div>

On the experimental setup, the head loss hl along the length and the average fluid velocity w are determined. How this is done will be described further below.

In the second case, determining the coefficient λ is somewhat more difficult, because it is a complex function and depends on the properties of the fluid and the pipe parameters:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image3.png" alt="formula" /> λ = f (Re, ε), 	(4.3)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image3.png" alt="formula" /> where ε is the relative roughness of the pipe, which is the ratio of the absolute roughness to the pipe diameter, i.e., ε = Δ/d.</div>

While for laminar motion the relationship

λ = 64/Re	(4.4)

has been proven analytically and confirmed experimentally, and is the only one of its kind, for turbulent motion the calculation formulas can only be derived by generalizing experimental results.

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-04/image4.png" alt="Figure for laboratory work №4" loading="lazy" />
</div>

The structure of the turbulent flow in the live cross-section is non-uniform and has the appearance shown in fig. 4.1. It consists of the flow core 3, the viscous sublayer 1, and the transitional layer 2, located between them.

In the flow core, due to intensive mixing, the velocity gradient has a small value and the fluid moves at velocities close to the average.

In the viscous sublayer, the velocity gradients are large, and the law of velocity distribution is similar to the law of velocity distribution in laminar motion.

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-04/image5.png" alt="Figure for laboratory work №4" loading="lazy" />
</div>

Fig. 4.2. Diagrams of the hydraulic roughness of pipes

In the transitional layer, the viscous friction forces sharply transition into inertial forces.

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image6.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image7.png" alt="formula" /> Let us imagine a pipe wall having some absolute roughness Δ (fig. 4.2). The wall is in direct contact with the viscous sublayer of thickness δ. As the velocity increases, the thickness of the viscous sublayer decreases according to the formula</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image8.png" alt="formula" /> (4.5)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image6.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image7.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image9.png" alt="formula" /> At small values of Δ and relatively small Re numbers, when δ > Δ (fig. 4.2, a), the disturbances arising as the fluid flows around the roughness projections Δ quickly decay and practically do not affect the friction coefficient λ. This zone of turbulent flow is called the zone of hydraulically smooth pipes, in which λ is a function of only the Re number. To determine λ in this zone, the Blasius formula is used (for Re < 20/ε)</div>

λ = 0.3164/Re0.25.					(4.6)

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image6.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image7.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image10.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image9.png" alt="formula" /> As the Re number increases, the thickness of the viscous sublayer decreases (fig. 4.2, b) and part of the roughness projections Δ enters the flow core (δ < Δ). In this case, the pipe will be rough in the transitional (pre-quadratic) resistance zone, and λ = f (Re; ε). To determine λ in this resistance zone, the Altshul formula is used (for 20/ε < Re < 500/ε)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image11.png" alt="formula" /> (4.7)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image7.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image12.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image13.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image9.png" alt="formula" /> At large Re numbers, when the viscous sublayer δ can be neglected compared to the absolute roughness (δ << Δ) (fig. 4.2, c), the pipe will be rough, and the resistance coefficient λ will depend only on the relative roughness ε. The resistance zone will be quadratic. In this zone, the Shifrinson formula is applied (for Re > 500/ε)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image14.png" alt="formula" /> (4.8)</div>

## Laboratory Setup

The setup (fig. 4.3) consists of a large vessel 1 (Mariotte's bottle), to which experimental pipe 2 of length l = 4.25 m and diameter d = 0.0260 m is connected. Piezometers 3 and 4 are connected at the beginning and end of the pipe (at distance l). To measure the fluid flow rate, collecting vessel 6 is mounted on scale 7. The fluid flow rate is regulated by valve 5.

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-04/image15.png" alt="Figure for laboratory work №4" loading="lazy" />
</div>

Fig. 4.3. Diagram of the laboratory setup

## Procedure

1. After Mariotte's bottle is filled with water, close air valve 9. Open valve 5 and set an arbitrary fluid velocity in pipe 2. In this case, the fluid drains into the sewer through valve 8.

2. When Mariotte's bottle 1 begins to operate, close valve 8 and tare collecting vessel 6 with water on scale 7. After this, start the stopwatch.

3. Every 30 s, on signal, while vessel 6 is being filled with the specified amount of water, record the readings of piezometers 3 and 4.

4. When vessel 6 is filled with the specified amount of water, stop the stopwatch, open valve 9, and close valve 5. Measure the water temperature in vessel 6.

5. Drain the water from vessel 6 by opening valve 8.

6. Increase the water flow rate in pipe 2 using valve 5, and repeat the experiment according to steps 2–5.

## Processing the Results

1.	Determine the water flow rate in pipe 2, m³/s,

Q = V/τ,

where V is the volume of water, m³, V = m/ρ; τ is the duration of the experiment, s; m is the mass of water collected in vessel 6, kg; ρ is the density of water, kg/m³, at the measured temperature.

2. Determine the average velocity of water motion in the pipe, m/s;

w = Q/F,

where F is the live cross-sectional area of flow in the pipe (or the cross-sectional area of the pipe).

3. Calculate the head loss from the difference of the average values of the readings of piezometers 1 and 2, m water column: hl = h1 – h2.

4. Calculate the friction resistance coefficient using the formula

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image16.png" alt="formula" /></div>

5. Using the measured water temperature (see appendix 3), find the kinematic viscosity coefficient of water ν, m²/s, and calculate the Re number

Re = w d/ν.

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-04/image17.png" alt="Figure for laboratory work №4" loading="lazy" />
</div>

Fig. 4.4. Colebrook curves

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image18.png" alt="formula" /> 6. Using the Colebrook curves (fig. 4.4), for the determined λ and Re, find the hydraulic resistance zone and the relative roughness of the pipe ε.</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image19.png" alt="formula" /> We determine the equivalent roughness: Δe mm. For this resistance zone, we select the corresponding empirical formula and calculate λc.</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image20.png" alt="formula" /> In fig. 4.4, at Re = 2.5·10⁴ and λ = 0.033, the hydraulic resistance zone is transitional (pre-quadratic), the relative roughness ε = 4·10⁻³. To determine λc in this zone, the Altshul formula (4.8) can be used. To organize the calculations, we fill in the results table.</div>

| Experiment № | Pipe diameter d, m | Water volume V, m³ | Experiment duration τ, s | Cross-section area F, m² | Water flow rate Q, m³/s | Water velocity w, m/s | Average piezometer readings, m | Average piezometer readings, m |
|---|---|---|---|---|---|---|---|---|
| Experiment № | Pipe diameter d, m | Water volume V, m³ | Experiment duration τ, s | Cross-section area F, m² | Water flow rate Q, m³/s | Water velocity w, m/s | h3 | h4 |
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| 1 2 3 |   |   |   |   |   |   |   |   |

| Experiment № | Head loss hl, m | Friction resistance coefficient λ | Water temperature t, °C | Kinematic viscosity coefficient ν, m²/s | Re number | Equivalent roughness Δe | Friction coefficient λc |
|---|---|---|---|---|---|---|---|
| 1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 |
| 1 2 3 |   |   |   |   |   |   |   |

## Review Questions

1. What are the features of turbulent fluid motion in pipes? Show the flow structure in the cross-section.
2. What are "hydraulically smooth" and "rough" pipes?
3. What hydraulic resistance zones exist? Show them on the Nikuradse and Colebrook curves. How do they differ?
4. Can the same pipe be hydraulically smooth and rough?
5. How is the formula for calculating λc for the corresponding resistance zone determined?
