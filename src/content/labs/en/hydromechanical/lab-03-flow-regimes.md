---
title: "Determining the Flow Regimes of a Fluid in a Stream"
category: "hydromechanical"
category_title: "Hydromechanical Processes"
lab: 3
goal: "to visually observe laminar and turbulent flow regimes and experimentally determine the Reynolds number for them."
description: "Visual observation of laminar and turbulent fluid flow regimes, determination of the critical Reynolds number."
author: "FoodProcessPortal"
updated: "2026-07-22"
---
# Laboratory Work №3. Determining the Flow Regimes of a Fluid in a Stream

## Theoretical Background

G. Hagen first noted in 1869 that fluids can move in different ways. Further research into fluid flow regimes was carried out by the English physicist O. Reynolds, who published his findings in 1883.

Two flow regimes have been established: laminar (from the Latin lamina — layer), in which layered fluid motion is observed and its particles do not mix with one another; and turbulent (from the Latin turbulentus — disordered), in which disordered fluid motion is observed and its particles mix with one another. The transition from laminar to turbulent flow occurs when a certain critical velocity wcr is exceeded.

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-03/image1.png" alt="Figure for laboratory work №3" loading="lazy" />
</div>

Fig. 3.1. Diagrams of fluid flow regimes

At velocities lower than critical, i.e., at w < wcr, fluid particles move along parallel trajectories and a laminar flow regime occurs (fig. 3.1). In this case, the maximum flow velocity is established at the pipe axis. The velocity profile has the shape of a parabola, and the average velocity w = 0.5Umax. The average velocity in this flow cross-section is a fictitious velocity, the same at all points of the cross-section, at which the same amount of fluid passes through this live cross-section as with the actual velocity distribution.

At w > wcr, wave-like motion of individual fluid particles occurs (see fig. 3.1).

A further increase in flow velocity (w >> wcr) produces completely chaotic motion of fluid particles, i.e., fully developed turbulent motion (see fig. 3.1). The profile of averaged velocities is characterized by the following patterns:

velocities at the pipe surface are zero due to adhesion (the sticking property) of fluid particles to the wall;

at a small distance from the wall (in the near-wall layer), velocities increase rapidly and, at the boundary with the core of the turbulent flow, differ little from the velocity values within it;

in the core of the turbulent flow, farther from the wall surface, velocities change insignificantly, which is explained by the turbulent transfer of fluid particles.

The average velocity of turbulent flow

w = (0.75…0.9) Umax.

Each flow regime is characterized by the Reynolds number

Re = wl/ν = wlρ/µ,	(3.1)

where l is the characteristic linear dimension, m; ρ is the fluid density, kg/m³; µ is the dynamic viscosity coefficient, Pa·s; ν is the kinematic viscosity coefficient, m²/s. For pipes of circular cross-section, the pipe diameter d, m, is used instead of the linear dimension l.

Reynolds's experiments established that at Re ≤ 2320 in a smooth circular pipe, stable laminar flow occurs; at Re > 13,800 — stable turbulent flow; at 2320 ≤ Re < 13,800 — unstable turbulent flow. Under ideal laboratory conditions, laminar flow can be observed at Re ≈ 20,000, but in this case the regime is unstable. Quite insignificant disturbances in the system are enough for the regime to transition to turbulent.

It is considered that in industrial pipelines, laminar flow exists at Re ≤ 2300, and clearly pronounced turbulent flow at Re > 10,000. Since in the transitional zone the laminar flow regime is unstable and easily transitions to turbulent, the critical value of the number is taken as Recr = 2300.

For specific fluid flow conditions, one can always calculate the actual value of the Re number using relationship (3.1) and, comparing it with the critical value, determine the flow regime: at Re ≤ Recr — laminar; at Re > Recr — turbulent.

For open channels, flumes, riverbeds, and pipes of non-circular or circular cross-section under free-surface flow, the hydraulic radius R can serve as the characteristic linear dimension.

The hydraulic radius is defined as the ratio of the live cross-sectional area of flow F to the wetted perimeter χ: R = F/χ. For pipes of circular cross-section

F = πd²/4   and   χ = πd,

then

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-03/image2.png" alt="formula" /></div>

whence d = 4R.

For fluid motion in pipes of non-circular cross-section, the equivalent diameter is used as the characteristic linear dimension in relationship (3.1)

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-03/image3.png" alt="formula" /></div>

## Laboratory Setup

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-03/image4.png" alt="Figure for laboratory work №3" loading="lazy" />
</div>

Fig. 3.2. Diagram of the setup for determining fluid flow regimes

The design of the experimental setup is shown in fig. 3.2. For visual observation of the fluid flow regime, the setup is equipped with a large open vessel 12, a glass tube of constant diameter 8 with valve 9 for regulating the amount of fluid entering the tube from the vessel through a smoothly formed funnel-shaped inlet 7. Above vessel 12 is mounted tank 3 with tube 5, whose narrowed end enters the funnel along the axis of tube 8. Colored liquid is poured into tank 3, which enters tube 8 through tube 5. The flow rate of the colored liquid is regulated by valve 4. The fluid passing from vessel 12 through tube 8 enters calibrated vessel 10, mounted on scale 11. The temperature, on which the fluid viscosity depends, is measured with thermometer 6. The water supply to vessel 12 is regulated by valve 2, mounted on the supply pipe. A constant water level in vessel 12, needed to create steady motion in tube 8, is maintained by means of overflow device 1.

First, valve 9 is opened slightly, and fluid begins to flow from vessel 12 through tube 8; an average velocity corresponding to a certain flow rate is established in it. Then valve 4 is opened slightly so that colored liquid flows out from upper tank 3. Under these conditions, a thin, straight, colored streamline begins to move in tube 8, which does not mix with the main mass of fluid, i.e., a laminar flow regime occurs. If valve 9 is opened further, the average flow velocity increases, causing the streamline to become wavy and break up into separate sections. At these flow rates, the presence of an unstable fluid flow is clearly confirmed. With a further opening of valve 9, the colored streamline is completely destroyed, and the entire mass of fluid in glass tube 8 becomes colored, i.e., a turbulent regime is observed.

## Procedure

1. Open valve 9 slightly, creating a small water flow rate through tube 8. Direct the water to the drain.

2. Open valve 4 on tube 5 enough to obtain a thin stream of colored liquid from tank 3, confirming the presence of streamline, i.e., laminar, flow.

3. Direct the water from tube 8 into calibrated vessel 10 and immediately start the stopwatch. After collecting the amount of water specified by the instructor, stop the stopwatch.

4. Measure the water temperature in vessel 12 with thermometer 6.

5. Drain the water from the calibrated vessel.

6. Repeat the experiment at a higher water velocity corresponding to turbulent flow.

## Processing the Results

To calculate the Reynolds number, it is necessary to determine all the quantities included in it: w, d, ν.

1. Calculate the fluid flow rate in each experiment, m³/s,

Q = V/τ,

where V = m/ρ is the volume of water entering calibrated vessel 10 during the experiment, m³; m is the mass of fluid in vessel 10, kg; ρ is the fluid density, kg/m³; τ is the duration of the experiment, s.

2. Calculate the live cross-sectional area of glass tube 8 for the known diameter d: F = πd²/4.

3. Determine the average water velocity, m/s, for each set flow rate, w = Q/F, where Q is the volumetric water flow rate for each experiment, m³/s; F is the live cross-sectional area of tube 8, m².

4. Depending on the temperature, determine the kinematic viscosity coefficient of water from appendix 3.

5. Calculate the Reynolds numbers for the studied flow regimes and compare them with the critical values Re = 2300 and Re = 10,000:

Re = wd/ν.

6. Enter the measurement and calculation results into the table.

| Experiment № | Water volume V, m³ | Experiment duration τ, s | Flow rate Q, m³/s | Pipe diameter d, m | Cross-section area F, m² | Flow velocity w, m/s | Temperature t, °C | Kinematic viscosity coefficient ν, m²/s | Re | Flow regime |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 2 |   |   |   |   |   |   |   |   |   |   |

## Review Questions

1. On which physical quantities characterizing the flow does the fluid flow regime depend?
2. What is the difference between laminar and turbulent flow regimes?
3. Characterize the velocity profiles of laminar and turbulent flows.
4. What Reynolds number values characterize laminar and turbulent flows?
5. The critical Reynolds number — its physical meaning.
6. The hydraulic radius — its definition.
7. The equivalent diameter — its definition.
8. The procedure for conducting experiments on the setup.
9. The procedure for processing experimental data, determining flow rate by the weighing method, and the average fluid flow velocity.
