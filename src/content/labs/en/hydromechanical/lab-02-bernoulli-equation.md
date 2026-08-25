---
title: "EXPERIMENTAL ILLUSTRATION OF THE BERNOULLI EQUATION"
category: "hydromechanical"
category_title: "Hydromechanical Processes"
lab: 2
goal: "to experimentally confirm the theoretical principles on a laboratory setup and to plot the distribution of the terms of the Bernoulli equation along the cross-sections at a given velocity."
description: "Experimental verification of the Bernoulli equation on a laboratory setup."
author: "FoodProcessPortal"
updated: "2026-07-22"
---
# Laboratory Work №2. Experimental Illustration of the Bernoulli Equation

## Theoretical Background

The Bernoulli equation is the fundamental equation of fluid motion. It consists of three terms whose sum is the same value for different cross-sections of an ideal fluid flow relative to a reference plane.

For an elementary streamline of an ideal fluid, this equation has the form

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-02/image1.png" alt="formula" /> (2.1)</div>

where z is the geometric head, or specific potential energy of position of the center of gravity of the live cross-section relative to the reference plane; p/(ρg) is the piezometric head, or specific potential pressure energy; U²/(2g) is the velocity head, or specific kinetic energy. The sum of these three terms of the equation is a constant value and is called the hydrodynamic head (Hd).

If a real fluid is in motion, the hydrodynamic head does not remain constant at different cross-sections due to the loss of part of the energy in overcoming various hydraulic resistances. These are head losses along the length from one cross-section to another, due to overcoming internal friction between fluid particles and external friction between the fluid and the pipe walls — hf, local losses — hloc, total losses hloss = hf + hloc.

Thus, the Bernoulli equation for two cross-sections of an elementary streamline of a real fluid takes the form

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-02/image2.png" alt="formula" /> (2.2)</div>

where

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-02/image3.png" alt="formula" /></div>

λ is the friction resistance coefficient along the length; l is the distance between cross-sections; d is the pipe diameter; ζ is the local resistance coefficient.

The local velocities U1 and U2 for the elementary streamline at the corresponding cross-sections are constant values.

If we consider a fluid flow, the velocities at the cross-sections do not remain constant. Therefore, the Bernoulli equation for two cross-sections of a real fluid flow takes the form

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-02/image4.png" alt="formula" /></div>

where w1, w2 are the average velocities at the corresponding cross-sections; α1 and α2 are the coefficients of non-uniformity of velocity distribution at the cross-sections. These coefficients are the ratio of the actual kinetic energy to the kinetic energy determined from the average velocity:

α = E/Eavg.

For laminar fluid motion in round pipes, the coefficient α = 2; for turbulent motion, α = 1.03...1.1. In practice, for turbulent motion, α = 1 is taken.

Consider a round pipe of variable cross-section (fig. 2.1). Cross-sections I, II, and III have diameters d1, d2, d3. Let us examine in this figure the change of the terms of the Bernoulli equation from the first cross-section to the following ones. We write the equation for the three pipe cross-sections

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-02/image5.png" alt="formula" /></div>

Let us draw a reference plane (always a horizontal plane). The distance from the centers of gravity of the cross-sections to the reference plane are the geometric heads z1 > z2 > z3. If the pipe were horizontal, then z1 = z2 = z3. In that case, it would be advisable to draw the reference plane along the pipe axis.

To explain the distribution of the piezometric p/(ρg) and hydrodynamic heads Hd, let us connect piezometers to each cross-section — left tubes — and hydrodynamic tubes — right tubes. We connect the piezometers so that their ends are located on the inner surface of the pipe. The hydrodynamic tubes enter inside the pipe perpendicular to the axis, turned to face the flow at an angle of 90°, and are connected at the center of gravity of the cross-sections. Together these tubes constitute a Pitot tube.

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-02/image6.png" alt="Figure for laboratory work №2" loading="lazy" />
</div>

Let us apply the laws of conservation of energy and continuity of flow.

Suppose that at velocity w1 in cross-section I, the heads z1, p1/(ρg), and w1²/(2g) are distributed as shown in fig. 2.1. In this cross-section, the head loss hloss = 0 (the starting point of reference).

In cross-section II, the pipe has the smallest diameter (d2 < d1). According to the stated laws, the velocity w2 will increase, and the pressure will decrease. Therefore, z2 < z1 (the pipe has a slope), p2/(ρg) < p1/(ρg), w2²/(2g) > w1²/(2g) (corresponding to segments k2b and bb).

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-02/image7.png" alt="formula" /> At the distance between cross-sections I and II, head losses appear, which are denoted in the figure by segment bb.</div>

In cross-section III, diameter d3 is larger than diameter d2, but smaller than d1. Therefore,

z3 < z2,  p3/(ρg) > p2/(ρg)  and  p3/(ρg) < p1/(ρg),

w3²/(2g) < w2²/(2g)  and  w3²/(2g) > w1²/(2g).

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-02/image8.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-02/image9.png" alt="formula" /> The head loss from cross-section II to III is denoted in the figure by segment cc, and from I to III — by segment cc().</div>

The broken line abc is the line of change of the piezometric head and is called the piezometric line; the line abc represents the change of hydrodynamic head and is called the hydraulic line, or the head loss line. The horizontal line abc is the total head line.

## Laboratory Setup

From the large vessel 1 (fig. 2.2), water under head h enters horizontal pipeline 2, which consists of several straight sections, has a widened section 3 with local resistances, and valve 5 (also a local resistance). At the beginning and end of each straight section of pipe, as well as before and after the local resistance, piezometers (left tube) and hydrodynamic tubes (right tube) are connected. The piezometer shows the hydrostatic head Hs, and the hydrodynamic tube shows the hydrodynamic head Hd. The exception is Venturi flow meter 4, where three piezometers are installed.

Water from the pipe enters measuring vessel 7, and from there — to the drain. The velocity (or fluid flow rate) is regulated by valve 6.

## Procedure

1. Open valve 6 and set an arbitrary water velocity in the pipe. For the water motion to be steady, valve 6 must be opened so that the water level in vessel 1 remains constant at all times (h = const). This level should be observed using level gauge a.

2. Close valve 9. When the water level in vessel 7 rises and becomes visible on level gauge 8, start the stopwatch and give the signal for the start of the experiment.

3. Every 30 s from the start of the experiment, give a signal at which readings are taken from all groups of tubes. Signals are given until the planned volume of liquid has accumulated in vessel 7. At this moment, stop the stopwatch.

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-02/image10.png" alt="Figure for laboratory work №2" loading="lazy" />
</div>

## Processing the Results

1. Determine the fluid flow rate, m³/s,

Q = V/τ, 	(2.4)

where V is the volume of liquid in vessel 7, determined from the difference in level gauge 8 readings and the cross-sectional area of the vessel: V = (h1 – h2)F, h1 — initial, h2 — final water levels, m;

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-02/image11.png" alt="formula" /> Fv = 0.785 = 0.785·0.7² = 0.385 m²;</div>

where τ is the duration of the experiment.

2. Determine the fluid velocity, m/s,

w = Q/F, 	(2.5)

where F is the live cross-sectional area of flow in the pipe, d = 0.026 m.

3. Calculate the average readings of each tube separately, and enter them into the table.

| Head | Average tube readings by group | Average tube readings by group | Average tube readings by group | Average tube readings by group | Average tube readings by group | Average tube readings by group | Average tube readings by group | Average tube readings by group | Level, m | Level, m | Water volume V, m³ | Experiment duration τ, s | Water flow rate Q, m³/s | Pipe cross-section area F, m² | Water velocity w, m/s |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Head | I | II | III | IV | V | VI | VII | VIII | h1 | h2 | Water volume V, m³ | Experiment duration τ, s | Water flow rate Q, m³/s | Pipe cross-section area F, m² | Water velocity w, m/s |
| HS  Hd |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |

4. On fig. 2.2, drawn on A4 graph paper, plot the piezometric and hydraulic lines from the readings of the piezometric and hydrodynamic tubes.

## Review Questions

1. What is steady and unsteady motion?
2. Can the Bernoulli equation be applied to unsteady motion?
3. What are the conditions for applying the Bernoulli equation?
4. What form would the Bernoulli equation take if the water in the pipe were not moving?
5. Why is one end of a piezometer installed on the inner surface of the pipe?
6. What would a hydrodynamic tube show if its end were installed facing away from the fluid flow?
7. What is a Pitot tube? How is it used to determine velocity?
