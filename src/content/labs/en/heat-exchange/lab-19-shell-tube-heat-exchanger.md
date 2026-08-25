---
title: "Studying the Operation of a Shell-and-Tube Heat Exchanger"
category: "heat-exchange"
category_title: "Heat Exchange Processes"
lab: 19
goal: "to become familiar with the design and operating principle of a shell-and-tube heat exchanger; to determine and explain the differences between the theoretical and experimental heat transfer coefficients; to determine the heat-transfer surface utilization coefficient and the hydraulic resistance of the heat exchanger."
description: "Studying the operation of a shell-and-tube heat exchanger, determining the heat transfer coefficients."
author: "FoodProcessPortal"
updated: "2026-07-22"
---
# Laboratory Work №19. Studying the Operation of a Shell-and-Tube Heat Exchanger

## Theoretical Background

The main calculation equations for thermal processes — (18.1)–(18.6), (18.12)–(18.14) — are given in Laboratory Work №18 for the liquid–liquid system. The heat transfer coefficients α1 and α2, for the inter-tube and tube spaces of this heat exchanger design, respectively, are proposed to be determined using the equations:

For fully developed turbulent liquid flow in straight tubes and channels
(Re > 10,000)

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image1.png" alt="formula" /> (19.1)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image2.png" alt="formula" /> The defining dimension in the Re and Nu criteria is taken as the internal diameter of the tube or the equivalent diameter of the channel: (F is the cross-sectional area of the flow; Π is the wetted perimeter). The reference temperature at which the physical properties of the heat carrier are calculated is its average temperature.</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image3.png" alt="formula" /> Equation (19.1) is recommended for use at (where L is the length of the tube: d is its internal diameter).</div>

In the range 0.5 < Pr < 25, one can use the simpler equation

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image4.png" alt="formula" /> (19.2)</div>

For unstable turbulent motion of the heat carrier (2300 < Re < 10,000) in straight tubes and channels, the heat transfer coefficient can be approximately determined using the formula

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image5.png" alt="formula" /> (19.3)</div>

In formula (19.3), the value of f(Re) depends on the Reynolds criterion:

| Re·10⁻³ | 2.1 | 2.2 | 2.3 | 2.4 | 2.5 | 3.0 | 4.0 | 5.0 | 6.0 | 8.0 | 10.0 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| f(Re) | 1.9 | 2.2 | 3.3 | 3.8 | 4.4 | 6.0 | 10.3 | 15.5 | 19.5 | 27.0 | 33.3 |

For laminar flow of liquid in straight tubes (Re < 2300)

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image6.png" alt="formula" /> (19.4)</div>

4. For the motion of liquid in the inter-tube space of a shell-and-tube heat exchanger

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image7.png" alt="formula" /> (19.5)</div>

where de is the equivalent diameter of the inter-tube space;

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image8.png" alt="formula" /></div>

D is the internal diameter of the heat exchanger's shell; dext is the external diameter of the tubes;

n is the number of tubes.

In equations (19.1)–(19.5), the following notation is used: Nu is the Nusselt number, Nu = αd/λ; Re is the Reynolds number, Re = wdρ/µ; Pr is the Prandtl number, Pr = µc/λ; Gr is the Grashof number, Gr = gd³ρ²βΔt/µ²; w is the velocity of the heat carrier's motion, m/s; λ is the thermal conductivity coefficient of the heat carrier, W/(m·K); µ is the dynamic viscosity coefficient of the heat carrier, Pa·s; ρ is the density of the heat carrier, kg/m³; β is the coefficient of volumetric expansion of the heat carrier, K⁻¹; d is the defining geometric dimension of the heat carrier's flow, m; Δt is the difference between the average temperature of the hot heat carrier and the wall temperature for the inter-tube space, or the difference between the wall temperature and the average temperature of the cold heat carrier for the tube space, K.

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image9.png" alt="formula" /> The numerical values of the physical quantities given in the equations are determined from the corresponding tables based on the arithmetic mean temperatures of the hot and cold heat carriers (at the inlet tin and outlet tout of the heat exchanger — formula (18.8)).</div>

The velocity of the heat carriers' motion in the heat exchanger is determined from the flow continuity equation

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image10.png" alt="formula" /> (19.6)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image11.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image12.png" alt="formula" /> where V is the volumetric flow rate of the heat carrier, m³/s; f is the cross-sectional flow area, m²: for the tube space and for the inter-tube space; Din is the internal diameter of the shell, m; din and dext are, respectively, the internal and external diameter of the tubes; n is the number of tubes, pcs.</div>

Pressure loss in the tube space of the heat exchanger, Pa,

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image13.png" alt="formula" /> (19.7)</div>

where λ is the hydraulic resistance coefficient (see Laboratory Work №4 for calculation); l is the length of the tube, m; Z is the number of passes; ζ is the local resistance coefficient.

The power required for moving the heat carrier at a volumetric flow rate V through the tube space of the heat exchanger, W,

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image14.png" alt="formula" /> , 	(19.8)</div>

where η is the pump efficiency.

## Laboratory Setup

The horizontal multi-pass shell-and-tube heat exchanger (see fig. 19.1) consists of cylindrical housing 1 with an internal diameter of Din = 240 mm, in which 14 tubes (n = 14) of stainless steel, with a diameter of d = 33 × 1.5 mm and a length of l = 800 mm, are arranged in tube sheets. The number of passes is z = 14 (one tube per pass). Cold water from the water supply network is fed into the tube space of the heat exchanger through valve 8, which regulates its flow rate, and is discharged through valve 10 into the sewer.

<div class="lab-figure">
  <img src="/images/labs/heat-exchange/lab-19/image15.png" alt="Figure for laboratory work №19" loading="lazy" />
</div>

Hot water is supplied to the inter-tube space of the heat exchanger by centrifugal pump 24 from tanks 17 or 22, respectively through valves 21 or 23, with valve 25 regulating its flow rate. To prepare the hot water, tanks 22 and 17 are equipped with electric heaters 13 and 20. The amount of hot water V1, L/min, and cold water V2, L/min, is measured, respectively, by meters 19 and 7. The spent hot water is returned to tank 17 or 22, respectively through valves 16 and 12, or is discharged through valve 11 into the sewer.

The temperature of the cold water at the inlet and outlet is monitored, respectively, by thermometers 6 and 9, and of the hot water — by thermometers 5 and 2.

Preliminary filling of these tanks with cold water occurs, respectively, through valves 14 or 15. To remove air from the inter-tube space when it is filled with hot water, valve 3 is installed. The experimental value of the pressure loss in the tube space of the heat exchanger Δpexp, Pa, at the inlet to and outlet from the heat exchanger, is measured, respectively, by pressure gauges 4 and 18.

## Procedure

We familiarize ourselves with the setup and receive the assignment from the instructor: heat carrier flow rates V1 and V2, L/min.

We heat the water to an initial temperature t1in within the range 40–60°C in one of the tanks (17 or 22), for which:

a) we fill the tank with cold water, observing the water level in it through the sight glass;

b) we set on the control panel the required initial temperature of the hot water and turn on the electric heater;

c) after reaching the specified temperature, we open valves 21 or 23 and turn on centrifugal pump 24.

We open valves 8 and 25 and set, according to the readings of meters 7, 19, and a stopwatch, the specified flow rates of hot V1 and cold V2 water (within the range 5–20 L/min and a ratio of V1/V2 = 0.7...1.4).

After the temperatures of the hot and cold water at the inlet to and outlet from the heat exchanger have stabilized, we record the readings of thermometers 2, 5, 6, 9 and pressure gauges 4, 18. During this, one must, throughout the experiment, monitor the meter readings with a stopwatch and use valves 8 and 25 to maintain the specified heat carrier flow rates.

## Processing the Results

Experimental data: hot water — V1, L/min; t1in, t1out, °C; cold water — V2, L/min; t2in, t2out, °C.

The processing of the results is carried out analogously to Laboratory Work №18.

We determine the heat carrier velocities w1 and w2 from equation (19.6). We determine the pressure loss in the tube space of the heat exchanger Δp — from equation (19.7), and compare it with the experimental Δpexp = pin – pout, where pin, pout are the pressures, Pa, corresponding to the readings of pressure gauges 4 and 18. The sum of the local resistance coefficients for the heat exchanger under study is Σζ = 63.5.

We calculate the power required for moving the heat carrier through the heat exchanger using equation (19.8).

The report should include:

a) a brief statement of the work's goal and the main theoretical principles;

b) a diagram of the setup;

c) experimental data;

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image16.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image17.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image18.png" alt="formula" /> d) calculations of m1, m2, Δtavg with the corresponding graph (see fig. 18.1), Q1, Q2, Q, kf, w1, w2, de, Re1, Re2, Nu1, Nu2, α1, α2, k, φ, ξ, Δp, and N;</div>

e) conclusion.

## Review Questions

1. What is the driving force of thermal processes?
2. How is the heat balance of a heat exchanger composed?
3. What is the physical meaning of the thermal conductivity, heat transfer, and heat transmission coefficients?
4. On which factors does the value of the heat transfer coefficient depend?
5. What is a pass in a shell-and-tube heat exchanger?
6. What local resistances does the heat carrier overcome while moving in the tube space of a shell-and-tube heat exchanger?
7. What are the advantages and disadvantages of shell-and-tube heat exchangers compared to plate ones, in terms of design and from the standpoint of hydrodynamics and heat transfer?
