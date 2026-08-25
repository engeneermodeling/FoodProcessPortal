---
title: "SIMPLE DISTILLATION"
category: "mass-transfer"
category_title: "Mass Transfer Processes"
lab: 24
goal: "to experimentally verify the differential equation of simple distillation."
description: "Experimental verification of the differential equation of simple distillation."
author: "FoodProcessPortal"
updated: "2026-07-22"
---
# Laboratory Work №24. Simple Distillation

## Theoretical Background

Simple distillation is the partial separation of a liquid mixture by single-stage vaporization followed by condensation of the vapor produced. During boiling of the mixture, the content of the more volatile component in the vapor — and hence in the distillate formed upon condensation of the vapor — is greater than in the liquid. Because of this, the relative content of the less volatile component in the still gradually increases.

The composition of the liquid in the distillation apparatus after evaporation of a portion of it, and the composition of the resulting distillate, can be determined from the material balance of simple distillation. Since the relative content of the mixture's components in the still and in the distillate changes continuously during distillation, the material balance is written in differential form for an arbitrarily chosen instant.

Let us introduce the following notation: W — the amount of mixture in the apparatus at any moment of distillation, kg; X — the composition of the liquid in the still, in mass fractions of the light (volatile) component, at any moment; Y — the composition of the vapor above the liquid, in mass fractions of the light component, at any moment.

The composition of the vapor above the liquid can be expressed as a function of the liquid composition, i.e., Y = f(X). During the evaporation of an infinitesimally small amount of mixture dW with composition Y, the liquid concentration decreases by dX, and the remaining liquid in the still can be expressed as W – dW, with the amount of light component in this residue being (W – dW)(X – dX). The distillate composition is denoted Y, and its amount dW.

The material balance for the light component in this case can be written as

WX = (W – dW)(X – dX) + dWY

or 	WX = WX – dWX – WdX + dWdX + dWY.

Neglecting the product dWdX as an infinitesimal quantity of second order, and transforming the last equation, we obtain

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image1.png" alt="formula" /></div>

If, as a result of distilling off a certain amount of liquid, W_f kg of mixture with composition X_f remains in the still, and at the start of distillation the initial amount of mixture was W_0 with composition X_0, then the last equation can be integrated within the limits from W_f and X_f to W_0 and X_0. Then we obtain

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image2.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image3.png" alt="formula" /> or  	(24.1)</div>

Since the functional relationship Y = f(X) is given only by the equilibrium curve of the given mixture, equation (24.1) can be solved graphically, as well as with the aid of a computer. First, let us consider the graphical method of solving equation (24.1).

Using the equilibrium curve, we construct a diagram (fig. 24.1). On the abscissa axis we plot the values of X, and on the ordinate axis — the values of 1/(Y – X), where Y, corresponding to each value of X, is determined from the equilibrium curve for the given mixture. The area under the curve, multiplied by the scale of each axis, within the limits from X_f to X_0, is the integral

<div class="lab-figure">
  <img src="/images/labs/mass-transfer/lab-24/image4.png" alt="Figure for laboratory work №24" loading="lazy" />
</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image5.png" alt="formula" /> (24.2)</div>

Knowing the value of the integral A and the amount of the initial mixture W_0, one can easily determine the amount of still residue W_f, whose composition is X_f. The amount of distillate obtained, W_d = W_0 – W_f, with composition X_d, can be determined from the material balance equation for the light component:

W_0 X_0 = W_d X_d + W_f X_f,

whence

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image6.png" alt="formula" /> (24.3)</div>

## Laboratory Setup

The setup for simple distillation (fig. 24.2) consists of: still 1 with electric heater 6, condenser 4, receiving funnel 5, drain valve 7, and sight glass 10.

To carry out the work, the following laboratory glassware and instruments are prepared: two glass alcoholometers with scales from 0 to 50 and from 50 to 100% (vol.), an alcohol thermometer, two 500 mL graduated cylinders and two 1000 mL graduated cylinders, two flasks with volumes of 0.5 and 0.3 L, and graph paper.

<div class="lab-figure">
  <img src="/images/labs/mass-transfer/lab-24/image7.jpg" alt="Figure for laboratory work №24" loading="lazy" />
</div>

## Procedure

1. Pour a water-alcohol mixture into the empty still. Before pouring, determine the volume of the mixture and the alcohol content in it (in volume percent). Reduce the alcoholometer readings to readings at a temperature of 20°C using tables for determining the ethyl alcohol content in water-alcohol mixtures.

2. Close the valve of receiving funnel 5. The amount of mixture should be 2.5–3.0 L with a concentration of 15–22% (vol.) at a temperature of 20°C.

3. Setting the content of the light component (alcohol) in the still residue (X_f = 3–5% (vol.) at a temperature of 20°C), calculate the distillation process.

4. After performing the calculation, turn on the still's electric heater and simultaneously open the cold water supply valve to the condenser, beginning to regulate it from the moment condensate appears.

5. After collecting the calculated amount of distillate, stop the process. Turn off the electric heater a few minutes before collecting the required amount of distillate (distillation will finish due to the thermal inertia of the heater).

6. Collect a certain amount of still residue from valve 7 into a graduated cylinder.

7. Taking into account the temperatures of the distillate and still residue, measure their concentration in mass percent.

8. Compare the calculated values of X_d and X_f with those obtained experimentally. The discrepancy should not exceed 1–2%.

## Processing the Results

It is required to separate a water-alcohol mixture by simple distillation so that the alcohol concentration in the still residue is 5% (mass) at a temperature of 20°C.

1. Determine the amount and composition of the initial mixture. Fill a 500 mL cylinder with the mixture, then measure the concentration with an alcoholometer with a scale from 0 to 50% (vol.), and the temperature with a thermometer. Suppose the alcoholometer reading is 22% (vol.) and the temperature is 17°C. These alcoholometer readings correspond to a concentration of 23% (vol.) at a temperature of 20°C. In appendix 1, a concentration of 23% (vol.) corresponds to a concentration of 18.71% (mass) and a density of 970.36 kg/m³.

Using a 1 L graduated cylinder, measure the volume of the initial mixture. Suppose this volume is 3000 mL (3 L).

Thus, the initial mixture has: volume V_0 = 3000 mL; concentration X_0 = 0.1871 mass fraction; density ρ_0 = 0.97036 g/mL; mass W_0 = ρ_0 V_0 = 2911 g; mass of alcohol in the solution P_0 = W_0 X_0 = 544 g.

The obtained data are entered into table 24.2 in the "Initial mixture" column. The mixture is poured into the still.

2. For the graphical solution of the integral (equation (24.1)), take from appendix 2 the necessary data on the liquid and vapor compositions within the range from X_f to X_0, and then calculate the values of 1/(Y – X). The obtained data are recorded in table 24.1.

An example of the graphical solution of equation (24.1) is given in table 24.1.

To fill in the last two columns of table 24.1, we choose the following scales: for X — 1 mm corresponds to 0.002 units of X, i.e., M_X = 0.002; for 1/(Y – X) — 1 mm corresponds to 0.02 units of 1/(Y – X), i.e., M_1/(Y–X) = 0.02.

The values taken from the second and fifth columns are divided by the corresponding scales, giving the data in the sixth and seventh columns of table 24.1. For example, for the first row of data in table 24.1:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image8.png" alt="formula" /></div>

For the graphical solution of the integral, using the data from the sixth and seventh columns of table 24.1, plot on graph paper, at the chosen scale, the graph of the function:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image9.png" alt="formula" /></div>

The area of the integral Φ at the chosen scale is 8300 mm², or

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image10.png" alt="formula" /></div>

3. Determine the mass of the still residue W_f after distillation, using equation (24.2):

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image11.png" alt="formula" /></div>

4. Calculate the mass of distillate:

W_d = W_0 – W_f = 2911 – 2090 = 821 g.

5. From equation (24.3) determine the distillate concentration:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image12.png" alt="formula" /></div>

Table 24.1

| Alcohol content | Alcohol content | Alcohol content | Concentration difference | 1/(Y-X) | At scale, mm | At scale, mm |
|---|---|---|---|---|---|---|
| in liquid | in liquid | in vapor | Concentration difference | 1/(Y-X) | At scale, mm | At scale, mm |
| % (mass) | X, fraction | Y, fraction | Y-X | 1/(Y-X) | X | 1/(Y-X) |
| 5.0 6.0 7.0 8.0 9.0 10.0 11.0 12.0 13.0 14.0 15.0 16.0 17.0 18.0 18.71 | 0.050 0.060 0.070 0.080 0.090 0.100 0.110 0.120 0.130 0.140 0.150 0.160 0.170 0.180 0.187 | 0.370 0.411 0.446 0.476 0.500 0.522 0.541 0.558 0.574 0.588 0.600 0.611 0.622 0.632 0.640 | 0.320 0.351 0.376 0.394 0.410 0.422 0.431 0.438 0.444 0.448 0.450 0.451 0.452 0.452 0.453 | 3.13 2.85 2.67 2.54 2.44 2.36 2.32 2.28 2.26 2.24 2.22 2.21 2.20 2.20 2.20 | 25.0 30.0 35.0 40.0 45.0 50.0 55.0 60.0 65.0 70.0 75.0 80.0 85.0 90.0 93.5 | 156.5 142 133 127 122 118 116 114 113 112 111 110.5 110 110 110 |

6. Determine the calculated data for the distillate:

a) from appendix 2, a concentration of 54.02% (mass) at a temperature of 20°C corresponds to ρ_d = 0.9048 g/mL. The value of ρ_d can be determined using the interpolation formula

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image13.png" alt="formula" /></div>

where X0 < X_d < X1;

b) volume V_d = W_d/ρ_d = 853/0.9048 = 943 mL;

c) amount of alcohol in the distillate P_d = W_d · X_d = 853 · 0.5402 = 461 g.

The calculation results are entered into table 24.2, in the "Distillate — calculation" column.

7. Similarly, we find the data for the still residue:

a) at a concentration X_f = 5% (mass) and a temperature of 20°C, ρ_f = 0.9893 g/mL;

b) calculated composition X_f = 0.05 (mass fraction);

c) mass W_f = 2058 g;

d) volume V_f = W_f/ρ_f = 2058/0.9893 = 2080 mL;

e) amount of alcohol in the still residue P_f = W_f · X_f = 2058 · 0.05 = 103 g.

The calculation results are entered into table 24.2, in the "Still residue — calculation" column.

8. After completing the calculations, distill off a distillate of volume V_d = 943 mL. Measure its temperature and alcohol content (% vol.). From appendix 1, find the distillate density ρ_d and concentration X_d (% mass).

Calculate the mass of distillate W_d = V_d ρ_d and the mass content of alcohol in it P_d = W_d · X_d, and enter this data into table 24.2 ("Distillate — measurement" column).

9. Similarly, carry out calculations for the still residue. Measure its temperature and volumetric alcohol concentration, reduce this data to a temperature of

20°C, determine the density of the residue and the mass concentration of alcohol. Then calculate the mass of the still residue and the mass content of alcohol in it. Enter this data into table 24.2 ("Still residue — measurement" column).

Table 24.2

| Parameter | Initial mixture | Initial mixture | Distillate | Still residue | Still residue | Still residue |
|---|---|---|---|---|---|---|
| Parameter | Calculation | Measurement | Calculation | Measurement | Calculation | Measurement |
| Volume V, mL Volumetric concentration X, fraction Mixture mass W, g Density ρ, g/mL Alcohol mass P, g | -   -  2911  -  544 | 3000   0.1871  -  0.9704  - | 943   0.5402  853  0.9048  461 |   | 2080   0.05  2058  0.9893  103 |   |

10. If discrepancies between the calculated and experimental data exceed 5%, an analysis of the possible causes of these discrepancies should be given (evaporation, measurement and calculation errors, spillage, etc.).

## Review Questions

1. What is called simple distillation?
2. What underlies the theory of simple distillation?
3. How does the separation of a complex mixture into components occur?
4. What is the form of the differential equation of simple distillation?
5. What does the relationship Y = f(X) express, and what form does it take?
6. What is dephlegmation?
7. Write the material balance equation for simple distillation.
8. What is the process of simple distillation based on?
