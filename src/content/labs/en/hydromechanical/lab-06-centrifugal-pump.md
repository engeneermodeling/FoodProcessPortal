---
title: "TESTING OF A CENTRIFUGAL PUMP AND CONSTRUCTION OF ITS CHARACTERISTICS"
category: "hydromechanical"
category_title: "Hydromechanical Processes"
lab: 6
goal: "to obtain the pump's characteristics experimentally and to determine the optimal conditions of its operation."
description: "Testing a centrifugal pump and constructing its operating characteristics."
author: "FoodProcessPortal"
updated: "2026-07-22"
---
# Laboratory Work №6. Testing of a Centrifugal Pump and Construction of Its Characteristics

## Theoretical Background

A centrifugal pump operates in normal mode, i.e., at a given flow rate Q, head H, and rotational speed n, when the external head it overcomes equals the specified one. When the pump's operating mode changes (for example, a change in flow rate Q), all its parameters change: head H, power N, and efficiency η. It is theoretically impossible to determine the relationship between these parameters with accuracy sufficient for practice, so the pump is tested on a special stand at constant rotational speed, from a fully closed to a fully open gate valve on the discharge branch. In this case, the flow rate should be changed at least 21 times.

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-06/image1.png" alt="Figure for laboratory work №6" loading="lazy" />
</div>

The graphical relationships of head H, power N, and efficiency η versus flow rate Q are called the pump's characteristics (fig. 6.1).

The most economical operating mode of the pump occurs at maximum efficiency and the corresponding head Hopt and flow rate Qopt. Such a mode is called optimal.

Therefore, in order to practically assess the quality of a pump installation and the use of the pump under particular operating conditions, one must have data from its testing (i.e., its characteristics). During testing, at several positions of the gate valve, it is necessary to record: flow rate Q, head H, shaft power N, rotational speed n, and to calculate efficiency η. Testing is usually carried out on water at normal temperature.

Let us consider the pump's parameters.

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image3.png" alt="formula" /> Pump flow rate Q is the volumetric amount of liquid delivered by the pump per unit of time into the discharge pipeline. It is measured with orifice plate 8 (fig. 6.3) from the pressure difference before and after it. This difference is measured with differential manometer 9. Knowing the difference h, Q is determined from the graph Q = f(h) (fig. 6.2).</div>

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-06/image2.png" alt="Figure for laboratory work №6" loading="lazy" />
</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image5.png" alt="formula" /> Head H is the specific energy expended by the pump to overcome: the geometric suction z1 and discharge z2 heights, the pressure difference at the end of the discharge pipe and the beginning of the suction pipe (referring to the pressures in reservoirs 1 and 11), and the hydraulic resistances in the suction h1 and discharge h2 pipelines:</div>

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-06/image4.png" alt="Figure for laboratory work №6" loading="lazy" />
</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image6.png" alt="formula" /> (6.1)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image7.png" alt="formula" /> Since the pressure in reservoirs 1 and 11 (fig. 6.3) is the same and equal to atmospheric, the term of equation (6.1) is —, and the pump head is</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image8.png" alt="formula" /> (6.2)</div>

In the laboratory setup, the energy the pump expends during suction is shown by vacuum gauge 4 — this will be the sum of the suction height z1 and the head losses during suction h1. The energy the pump expends during discharge is shown by pressure gauge 7 — this will accordingly be the sum of the discharge height z2 and the head losses h2.

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image9.png" alt="formula" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image10.png" alt="formula" /> Let us denote — and —. Then equation (6.2) takes the form</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image11.png" alt="formula" /> (6.3)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image12.png" alt="formula" /> Equation (6.3) holds true when the vacuum gauge and pressure gauge are connected directly to the suction and discharge branches of the pump. In the laboratory setup, pressure gauge 7 is located Z = 1 m above the point of its connection, so</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image13.png" alt="formula" /> (6.4)</div>

In the general case, head H is the difference of specific energies at the end of the pump's discharge branch and the beginning of the suction branch, i.e.,

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image14.png" alt="formula" /></div>

Since the pump is installed above the water level in reservoir 1, the vacuum gauge will show a rarefaction, on the creation of which energy is expended. Therefore, in equation (6.4), pv/(ρg) will have a positive value, hence,

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image15.png" alt="formula" /></div>

Power N is the energy the pump expends per unit of time on raising and transporting the liquid:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image16.png" alt="formula" /> (6.5)</div>

where ρ is the density of the liquid, kg/m³; Q is the flow rate (discharge) of the liquid, m³/s; H is the head, m; η is the overall efficiency of the pump.

In this laboratory work, power is determined by the electrical method.

Since the pump operates on the same shaft as the electric motor, the power on the electric motor shaft will be the power on the pump shaft. It is necessary to determine the power the electric motor draws from the electrical mains, and its efficiency. This power is measured with a wattmeter connected to one of the phases of the mains (the electrical load is considered symmetrical). Since the mains is three-phase, the wattmeter reading is tripled. Then

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image17.png" alt="formula" /> (6.6)</div>

where w is the wattmeter reading, divisions; a is the wattmeter constant: a = 100 W; ηel is the efficiency of the electric motor.

With some error, at the initial test points we take ηel = 0.87. Then

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image18.png" alt="formula" /> (6.7)</div>

Note. The efficiency of the electric motor is a variable quantity that depends on its loading.

The overall efficiency of the pump η is determined by the ratio of the useful power (power of the liquid flow) to the power consumed (on the pump shaft), which will be obtained from the experiment:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image19.png" alt="formula" /> (6.8)</div>

Testing is carried out at a constant rotational speed of the pump shaft. To verify this, the rotational speed should be measured with a tachometer 2–3 times during the test.

## Laboratory Setup

The setup (see fig. 6.3) consists of pump 3 (KM45/55), suction 2 and discharge 6 pipelines, reservoir 1, from which the pump draws water, and reservoir 11, to which it delivers it. Water overflows from reservoir 11 into reservoir 1 through pipe 12.

The setup has all the necessary control and measuring devices. To measure flow rate Q, orifice plate 8 with differential manometer 9 connected to it is installed on pipe 6. The flow rate is changed by gate valve 5. The pressure at the discharge branch is measured with pressure gauge 7, and the rarefaction in the suction branch — with vacuum gauge 4. To measure the power supplied to the electric motor, wattmeter 10 is installed.

## Procedure

1. Start pump 3 with gate valve 5 fully closed (see fig. 6.2) and all control and measuring instruments switched off.

2. Turn on the control and measuring instruments and record the readings of vacuum gauge 4, pressure gauge 7, wattmeter 12, and differential manometer 9.

3. Open gate valve 5 slightly and record the readings of the same instruments. According to the testing rules, at least 21 flow rate values, regulated by gate valve 5, must be obtained. The last point corresponds to a fully open gate valve.

## Processing the Results

1. From the graph (see fig. 6.2), determine the pump's flow rate depending on the pressure difference at orifice plate 8, m³/s:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image20.png" alt="formula" /> Q = f(h).</div>

2. Calculate the suction head from the readings of vacuum gauge 4, m:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image21.png" alt="formula" /> (6.9)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image22.png" alt="formula" /> where — is the vacuum gauge reading, kgf/cm² (at).</div>

3. Determine the discharge head from the readings of pressure gauge 7, m:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image23.png" alt="formula" /></div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image24.png" alt="formula" /> where — is the pressure gauge reading, kgf/cm² (at).</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-06/image25.png" alt="formula" /> 4. Calculate the pump head H at Z = 1 m using formula (6.4).</div>

5. Having the readings of wattmeter 10, determine the pump power N using formula (6.7).

6. Determine the pump efficiency using formula (6.8).

7. Enter all calculation results into the test protocol (see table 6.1).

Using the protocol data, plot the pump's characteristics H = f1(Q), N = f2(Q), η = f3(Q) on graph paper (see fig. 6.1) and determine the optimal conditions for its operation.

Table 6.1

| Measured and calculated quantity | Notation | Unit | Reading № | Reading № | Reading № | Reading № | Reading № | Reading № | Reading № | Reading № | Reading № | Reading № |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Measured and calculated quantity | Notation | Unit | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| Pressure gauge reading |   | kgf/cm² |   |   |   |   |   |   |   |   |   |   |
| Discharge head |   | m water column |   |   |   |   |   |   |   |   |   |   |
| Vacuum gauge reading |   | kgf/cm² |   |   |   |   |   |   |   |   |   |   |
| Suction head |   | m water column |   |   |   |   |   |   |   |   |   |   |
| Pressure gauge elevation height |   | m water column |   |   |   |   |   |   |   |   |   |   |
| Pump head | H | m water column |   |   |   |   |   |   |   |   |   |   |
| Pressure difference at orifice plate | Δh | mm Hg |   |   |   |   |   |   |   |   |   |   |
| Pump flow rate | Q · 10³ | m³/s |   |   |   |   |   |   |   |   |   |   |
| Wattmeter reading | w | divisions |   |   |   |   |   |   |   |   |   |   |
| Power at pump shaft | N | kW |   |   |   |   |   |   |   |   |   |   |
| Pump efficiency | η |   |   |   |   |   |   |   |   |   |   |   |
| Shaft rotational speed | n | min⁻¹ |   |   |   |   |   |   |   |   |   |   |
| Maximum efficiency | ηmax |   |   |   |   |   |   |   |   |   |   |   |
| Optimal flow rate | Qopt | m³/s |   |   |   |   |   |   |   |   |   |   |
| Optimal head | Hopt | m |   |   |   |   |   |   |   |   |   |   |

## Review Questions

1. What are the main components of a pump?
2. What is the operating principle of a centrifugal pump?
3. What are the pump's characteristics?
4. What is the optimal operating mode?
5. What is the energy expended by the pump on during suction, and during discharge?
6. What does the overall efficiency account for, and what does it consist of?
7. How is the pump's power determined when its parameters are known?
