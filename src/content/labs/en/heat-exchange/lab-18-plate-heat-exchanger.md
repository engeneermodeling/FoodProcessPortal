---
title: "STUDY OF A PLATE HEAT EXCHANGER'S OPERATION"
category: "heat-exchange"
category_title: "Heat Exchange Processes"
lab: 18
goal: "to become familiar with the design and operating principle of a plate heat exchanger; to determine the theoretical (for a clean heat-transfer surface) and experimental heat transfer coefficients; to determine the heat-transfer surface utilization coefficient; to determine the hydraulic resistance of the heat exchanger."
description: "Studying the design and operating principle of a plate heat exchanger, and calculating the heat balance."
author: "FoodProcessPortal"
updated: "2026-07-22"
---
# Laboratory Work №18. Study of a Plate Heat Exchanger's Operation

## Theoretical Background

The main calculation equations for thermal processes are the heat balance equation and the fundamental heat transfer equation.

If heat losses to the surrounding environment, which practically do not exceed 5%, are neglected, the heat balance equation takes the form

Q1 + Q2 = Q3 + Q4, 	(18.1)

where, for heat exchange without a change of aggregate state, Q1 is the heat flow entering with the hot heat carrier, W, Q1 = m1c1t1in; Q2 is the heat flow entering with the cold heat carrier, W, Q2 = m2c2t2in; Q3 is the heat flow carried away with the hot heat carrier, W, Q3 = m1c1t1out; Q4 is the heat flow carried away with the cold heat carrier, W, Q4 = m2c2t2out; m1, m2 are the mass flow rates of the hot and cold heat carriers, respectively, kg/s; c1, c2 are the specific heat capacities of the heat carriers, J/(kg·K); t1in, t2in, t1out, t2out are the temperatures of the heat carriers at the inlet and outlet of the heat exchanger, °C.

Using these notations and making some transformations, after substituting the expressions for Q1, Q2, Q3, Q4 into equation (18.1), we obtain the heat balance equation in the form:

Q = m1c1(t1in – t1out) = m2c2(t2out – t2in),	 (18.2)

where Q is the thermal load of the apparatus, W.

From equation (18.2) one can find either one of the heat carrier flow rate values m1 or m2, or their final temperatures t1out or t2out, provided the values of the remaining quantities during heat exchange are known. The relationship between the thermal load Q and the heat-transfer surface area F is described by the fundamental heat transfer equation, which for steady-state heat transfer processes takes the form

Q = kFΔtavg, 	(18.3)

where k is the heat transfer coefficient, W/(m²·K); Δtavg is the average temperature difference between the heat carriers, K.

The average temperature difference Δtavg, which is the driving force of the heat transfer process, can be calculated from the equation

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image1.png" alt="formula" /> (18.4)</div>

if the ratio Δtlarge/Δtsmall ≤ 2, or from the equation

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image2.png" alt="formula" /> (18.5)</div>

if the ratio Δtlarge/Δtsmall > 2, where Δtlarge and Δtsmall are, respectively, the larger and smaller temperature differences between the heat carriers at the ends of the heat exchanger, K.

The values of Δtlarge and Δtsmall are found from graphs (fig. 18.1). The nature of the change in heat carrier temperature along the heating surface depends on the scheme of their mutual flow. Heat carriers are used more rationally in the case of countercurrent flow. In this case, the average temperature driving force is greater than in the case of co-current flow. In addition, the final temperature of the cold heat carrier can be higher than the final temperature of the hot heat carrier.

The heat transfer coefficient k is the main quantity characterizing the intensity of a heat exchanger's operation. The practical value of the heat transfer coefficient, given known values of Q, F, and Δtavg, is determined from equation (18.3).

The calculated value of the heat transfer coefficient k for a flat wall, without accounting for the effect of fouling on it, is determined from the equation

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image3.png" alt="formula" /> (18.6)</div>

where α1 and α2 are the heat transfer coefficients for the hot and cold heat carriers, respectively, W/(m²·K); δwall is the wall thickness, m; λwall is the thermal conductivity coefficient of the wall material, W/(m·K). The coefficient k is always less than the smallest of the heat transfer coefficients.

<div class="lab-figure">
  <img src="/images/labs/heat-exchange/lab-18/image4.png" alt="Figure for laboratory work №18" loading="lazy" />
</div>

Fig. 18.1. Graphs of heat carrier temperature change along the heat-transfer surface for various ratios of their flow rates

Owing to the corrugated surface of the plates in the heat exchanger under study, which causes intensive turbulization of the fluid flow in the channels between the plates, the transition to turbulent flow already occurs at Re > 100. The heat transfer coefficients α1 and α2 for such plate heat exchangers are proposed to be determined from the equation

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image5.png" alt="formula" /> (18.7)</div>

where Nu is the Nusselt number, Nu = αde/λ; Re is the Reynolds number, Re = wdeρ/μ; Pr is the Prandtl number, Pr = cμ/λ; w is the velocity of the heat carrier in the channel, m/s; de is the equivalent diameter of the channel, m; λ is the thermal conductivity coefficient of the heat carrier, W/(m·K); μ is the dynamic viscosity coefficient of the heat carrier, Pa·s; ρ is the density of the heat carrier, kg/m³.

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image6.png" alt="formula" /> For the Nu, Re, and Pr numbers, the reference temperature is taken as the arithmetic mean temperature of the hot and cold heat carriers at the inlet tin and outlet tout of the heat exchanger:</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image7.png" alt="formula" /> (18.8)</div>

and for the number Prwall — the average wall temperature:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image8.png" alt="formula" /> (18.9)</div>

The velocity of the heat carriers in the channel is determined from the flow continuity equation

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image9.png" alt="formula" /> (18.10)</div>

where m is the heat carrier flow rate, kg/s; n is the number of channels in the package; f is the cross-sectional flow area in the channel, m², f = bh; b is the width of the flow part of the channel, m; h is the distance between plates in the channel, m.

The equivalent diameter of the flow is taken as the defining geometric dimension for calculating the numbers

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image10.png" alt="formula" /> (18.11)</div>

where Π is the wetted perimeter of the walls in the cross-section of the heat carrier flow in the channel, m.

The quantity that is the inverse of the heat transfer coefficient is called the thermal resistance to heat transfer and is determined by the formula

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image11.png" alt="formula" /> (18.12)</div>

From this equation it is evident that the thermal resistance to heat transfer equals the sum of the thermal resistances to heat transfer at the surfaces and of the wall. If there is fouling on the heat-transfer surface, then when determining the thermal resistance of the wall Rwall, the thermal resistance of the fouling must also be taken into account:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image12.png" alt="formula" /> (18.13)</div>

where δ1, δ2 are the thicknesses of the fouling layer on the hot and cold heat carrier sides, respectively, m; λ1, λ2 are the thermal conductivity coefficients of the fouling on the hot and cold heat carrier sides, respectively, W/(m·K).

Most often, the effect of fouling is accounted for using the heat-transfer surface utilization coefficient — the ratio of the experimental heat transfer coefficient kf (for a fouled heating surface) to the theoretical heat transfer coefficient (for a clean surface):

φ = kf/k.	(18.14)

The value of φ is determined experimentally and is taken as the average operational value for specific heat exchange process conditions.

The velocity of the heat carrier significantly affects the heat transfer coefficient. An increase in velocity intensifies flow turbulence and hinders the formation of scale and fouling, which generally contributes to an increase in the heat transfer coefficient of the heat exchanger. However, the choice of velocity during operation or design of heat exchangers is of great importance, since increasing it leads to an increase in the hydraulic resistance to the heat carrier's motion, and consequently to increased pump power. Therefore, the optimal velocity is chosen based on technical and economic considerations.

The hydraulic resistance of the heat exchanger Δp consists of friction resistance along the length of the channels Δpfr and local resistances Δploc:

Δp = Δpfr + Δploc.	(18.15)

In calculations of plate heat exchangers, both types of hydraulic resistance are accounted for by the generalized resistance coefficient per unit relative channel length ξ. For the type of plates under study

ξ = 11.2Re⁻⁰·²⁵.	(18.16)

The total hydraulic resistance of the heat exchanger, Pa,

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image13.png" alt="formula" /> (18.17)</div>

where Lred is the reduced length of the inter-plate channel, m; a is the number of packages.

The power, W, required to move the heat carrier at a volumetric flow rate V, m³/s, through the heat exchanger is calculated from the equation

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image14.png" alt="formula" /> (18.18)</div>

where η is the pump efficiency.

## Laboratory Setup

The plate heat exchanger (see fig. 18.2) for heating cold water with hot water consists of 32 stamped stainless steel plates (see fig. 18.3) (δwall = 0.001 m, λwall = 17.5 W/(m·K)). The heat-transfer surface area of one plate is F1 = 0.136 m², and of the entire heat exchanger F = 4.35 m².

The plates are mounted on horizontal rods 11, 17, the ends of which are fixed in a stationary plate 9. Using a movable pressure plate 13 and tie rods 14, the plates are tightly pressed against each other. The tightness of the assembled apparatus is ensured by rubber gaskets 1 (see fig. 18.3),

<div class="lab-figure">
  <img src="/images/labs/heat-exchange/lab-18/image15.png" alt="Figure for laboratory work №18" loading="lazy" />
</div>

Fig. 18.2. Diagram of the laboratory setup

glued along the periphery of the plates and around the corresponding openings for the passage of the heat carriers. After the plates are assembled and compressed in the apparatus, two systems of sealed rectangular-cross-section channels arise: one for cold water, the other for hot water. Plates 9 and 13 are also used to create the two extreme channels. The width of the flow part of the channel is b = 0.195 m, the distance between plates in the channel h = 0.004 m, and the reduced length of the inter-plate channel Lred = 0.7 m.

<div class="lab-figure">
  <img src="/images/labs/heat-exchange/lab-18/image16.png" alt="Figure for laboratory work №18" loading="lazy" />
</div>

The diagram of the heat carrier's motion in the channel formed between the plates is shown in fig. 18.3: the heat carrier enters the channel through opening 2 and exits the channel through opening 3. On plates 9 and 13 are located fittings for supplying the heat carriers to the heat exchanger and discharging them. Hot and cold water move through the heat exchanger in countercurrent flow. Fig. 18.4 shows the diagram of arranging the plates in the heat exchanger into packages, which can be represented by the formula

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image17.png" alt="formula" /> (18.19)</div>

where C is the number of plates in the heat exchanger.

The number of figures in the numerator and denominator indicates, respectively, the number of packages for hot and cold water. And each such figure corresponds to the number of channels in a package where the heat carrier moves in one direction. From formula (18.19) it follows that the heat exchanger consists of four packages of four channels each for both cold and hot water (a1 = a2 = 4; n1 = n2 = 4).

On the end plates of each package, unlike the plate shown in fig. 18.3, the corresponding corner openings are plugged, so that the heat carrier passes into the next package.

Cold water enters the heat exchanger from the water supply network through valve 20, which regulates its flow rate. The amount of cold water supplied for heating, V2, L/min, is determined by rotameter 19, and its initial and final temperatures — by thermometers 10 and 12, respectively, on the supply and discharge pipelines. The heated water leaves the heat exchanger into the drain.

<div class="lab-figure">
  <img src="/images/labs/heat-exchange/lab-18/image18.png" alt="Figure for laboratory work №18" loading="lazy" />
</div>

Fig. 18.4. Diagram of arranging plates in the heat exchanger into packages

Hot water is supplied to the heat exchanger by pump 22 from tank 1 or 6, each with a volume of 200 L, respectively through valves 24 and 25 on the suction pipeline and through valve 21 on the discharge pipeline. The amount of hot water V1, L/min, is measured by rotameter 18, and its temperature at the inlet and outlet — by thermometers 15 and 8, respectively. To prepare hot water, tanks 1 and 6 are equipped with electric heaters 23 and 26, respectively. The required temperature of the hot water supplied to the heat exchanger is maintained automatically. The experimental value of the hot water pressure drop Δpexp, Pa, at the inlet and outlet of the heat exchanger is measured by pressure gauges 16 and 7, respectively.

If hot water is prepared in tank 1, then after the heat exchanger it is discharged through valve 5 into tank 6, and if in tank 6 — into tank 1 through valve 3. Valves 2, 4 are used for the initial filling of tanks 1, 6 with water from the water supply network. The water level in the tanks is monitored using a sight glass, and its excess is discharged into the drain.

## Procedure

1. Familiarize yourself with the setup and receive the assignment from the instructor: heat carrier flow rates V1 and V2, L/min (within the range 8–13 L/min and ratios V1/V2 = 0.7…1.3).

2. Using calibration graphs, determine the divisions S1 and S2 on the rotameter bodies that correspond to the specified heat carrier flow rates.

3. Heat the water to an initial temperature t1in within the range 40–60°C in one of tanks 1 or 6, for which:

a) fill the tank with cold water, observing the water level in it through the sight glass;

b) set the required initial hot water temperature on the control panel and turn on the electric heater;

c) after reaching the specified temperature, open valves 24 or 25 and turn on pump 22.

4. Open valves 20 and 21 and set the required flow rates of cold and hot water according to divisions S1 and S2 on rotameters 19 and 18.

5. After the hot and cold water temperatures at the inlet and outlet of the heat exchanger have stabilized, record the readings of thermometers 8, 10, 12, and 15 and pressure gauges 7 and 16. Throughout this, it is necessary to constantly maintain the float levels in the rotameters using valves 20 and 21, keeping the specified heat carrier flow rates.

## Processing the Results

Experimental data: hot water — S1; V1, L/min; t1in, t1out, °C; cold water — S2; V2, L/min; t2in, t2out, °C.

We calculate the experimental heat transfer coefficient kf from equation (18.3), and the theoretical k (for a plate without fouling) from equation (18.6). The heat-transfer surface utilization coefficient is determined from equation (18.14).

First, we perform the following calculations. We determine the thermal load of the heat exchanger Q as the arithmetic mean between Q1 and Q2, using equation (18.2):

Q = 0.5(Q1 + Q2),

where Q1 = m1c1(t1in – t1out); Q2 = m2c2(t2out – t2in).

We determine the mass flow rates of the heat carriers m1 and m2, kg/s, based on V1 and V2, using the formula

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image19.png" alt="formula" /> (18.20)</div>

where ρ is the density of water at t1in, t2in, kg/m³.

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image20.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image21.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image22.png" alt="formula" /> Using the temperatures, we find ρ, c, μ, λ, and Pr for both heat carriers from the table of physical properties of water (appendix 3), and Prwall from the wall temperature.</div>

The heat carrier velocities w1 and w2 are determined from equation (18.10), and the equivalent diameter de from equation (18.11).

The total hydraulic resistance of the heat exchanger Δp is determined from equation (18.17) and compared with the experimental Δpexp.

The power N is calculated from equation (18.18).

The report should include:

a) a brief statement of the work's goal and the main theoretical principles;

b) a diagram of the setup;

c) experimental data;

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image23.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image24.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image25.png" alt="formula" /> d) calculations of m1, m2, Δtavg with the corresponding graph (see fig. 18.1), Q1, Q2, Q, kf, w1, w2, de, Re1, Re2, Nu1, Nu2, α1, α2, k, φ, ξ, Δp, and N;</div>

e) conclusion.

## Review Questions

1. What is the driving force of thermal processes?
2. How is the heat balance of a heat exchanger composed?
3. Under which scheme of mutual heat carrier flow (co-current or countercurrent) — and why — are they used most fully?
4. What is the physical meaning of the thermal conductivity, heat transfer, and heat transmission coefficients?
5. What factors affect the values of the heat transfer and heat transmission coefficients?
6. What is a channel and a package in a plate heat exchanger?
7. What hydraulic resistances does the heat carrier overcome while moving through a plate heat exchanger?
8. What are the advantages and disadvantages of plate heat exchangers compared to shell-and-tube ones, in terms of design and from the standpoint of hydrodynamics and heat transfer?
