---
title: "rotation of a vessel with liquid around a vertical axis"
category: "hydromechanical"
category_title: "Hydromechanical Processes"
lab: 1
goal: "to experimentally determine the depth of the vortex funnel and the rotational speed of the vessel, and to analytically determine the shape of the surface of this funnel."
description: "Investigating the shape of a liquid surface in a vessel rotating around a vertical axis."
author: "FoodProcessPortal"
updated: "2026-07-22"
---
# Laboratory Work №1. Rotation of a Vessel with Liquid Around a Vertical Axis

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-01/image1.png" alt="Figure for laboratory work №1" loading="lazy" />
</div>

## Theoretical Background

Consider a cylindrical vessel filled with liquid (fig. 1.1) rotating around a vertical axis with a constant angular velocity ω. In this case, in addition to gravity, centrifugal forces also act on the liquid. After some time, due to viscous friction forces between the liquid and the vessel walls, the liquid begins to rotate with the same angular velocity ω, i.e., it comes to rest relative to the vessel walls. A funnel forms in the liquid, on the surface of which the pressure is the same at all points. To determine the shape of the surface of this funnel, we write the equation of a surface of equal pressure

Xdx + Ydy + Zdz = 0, 	(1.1)

where X, Y, Z are the projections of the acceleration of body forces onto the x, y, z axes.

At an arbitrary particle a on the surface of the funnel with coordinates x, y, z (see fig. 1.1), the acceleration of the centrifugal force ω²r and the acceleration of gravity g will act.

The projections of the acceleration of the centrifugal force onto the x and y axes are

X = ω²x   and  Y = ω²y,

and the projection of the acceleration of gravity onto the z axis is

Z = – g.

Substituting these expressions into equation (1.1), we obtain

ω²xdx + ω²ydy – gdz = 0.

Dividing all terms of this equation by g and integrating:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-01/image2.png" alt="formula" /> (1.2)</div>

Factoring out ω²/(2g) and keeping in mind that x² + y² = r² (see fig. 1.1), we obtain

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-01/image3.png" alt="Figure for laboratory work №1" loading="lazy" />
</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-01/image4.png" alt="formula" /> (1.3)</div>

At r = R the coordinate z equals the level of the liquid z, and equation (1.3) takes the form

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-01/image5.png" alt="formula" /> (1.4)</div>

Equation (1.4) describes the shape of the surface of a paraboloid of revolution.

To calculate the depth of the funnel of this paraboloid, we determine the integration constant C. We write equation (1.2) for point b (see fig. 1.1) with coordinates x = 0, y = 0, and z = z₀, and obtain C = –z₀. Substituting this expression into equation (1.4), we get:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-01/image6.png" alt="formula" /></div>

or

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-01/image7.png" alt="formula" /></div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-01/image8.png" alt="formula" /> hence 					(1.5)</div>

The maximum funnel depth occurs when its apex touches the bottom of the vessel. This happens at a certain maximum rotational speed. Therefore,

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-01/image9.png" alt="formula" /></div>

hence

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-01/image10.png" alt="formula" /></div>

The distribution of hydrostatic pressure in the liquid obeys L. Euler's equation

dp = ρ(Xdx + Ydy + Zdz). 	(1.6)

After solving this equation and determining the integration constant, we have

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-01/image11.png" alt="formula" /> (1.7)</div>

To plot the shape of the funnel surface, one must calculate the coordinate z (fig. 1.2) while varying the radius r from 0 to R. From equation (1.3)

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-01/image12.png" alt="formula" /></div>

Since the constant C = –z₀, this equation takes the form

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-01/image13.png" alt="formula" /> (1.8)</div>

## Laboratory Setup

The laboratory setup (fig. 1.3) consists of housing 1, inside which an electric motor 2 is mounted on a base frame. A cylindrical glass vessel 3 filled with water is mounted on the upper platform of the motor.

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-01/image14.png" alt="Figure for laboratory work №1" loading="lazy" />
</div>

While the vessel rotates, the depth of the resulting funnel is measured by two sliders 5 on scale 4. The motor is connected into the circuit through laboratory autotransformer 6, which allows the rotational speed to be regulated. The voltage is monitored with voltmeter 7.

## Procedure

1. Measure the diameter of the vessel D.

2. Use the autotransformer to adjust the voltage to the motor so that it operates at U ≈ 40 V. Wait for a stable rotational speed to establish.

3. Using the sliders, measure the heights of the lower z₀ and upper z edges of the funnel.

4. Reduce the voltage to zero with the autotransformer and disconnect the setup from the electrical mains.

## Processing the Results

1. Calculate the depth of the funnel, m,

h = z – z₀.

2. Determine the angular velocity of the vessel's rotation, s⁻¹,

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-01/image15.png" alt="formula" /></div>

3. Calculate the rotational speed of the vessel

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-01/image16.png" alt="formula" /></div>

4. Using equation (1.8), calculate the height z, varying the radius of the paraboloid several times from r = 0 to r = R.

5. Record the calculation results in a table.

| Vessel diameter D, m | Funnel edge | Funnel edge | Funnel depth h, m | Angular velocity ω, s⁻¹ | Rotational speed n, min⁻¹ | Funnel radius R, m | Level height z′, m, at radius r |
|---|---|---|---|---|---|---|---|
| Vessel diameter D, m | lower z₀ | upper z | Funnel depth h, m | Angular velocity ω, s⁻¹ | Rotational speed n, min⁻¹ | Funnel radius R, m | Level height z′, m, at radius r |
|   |   |   |   |   |   |   |   |

6. Based on the calculations from step 4, plot the shape of the funnel surface on graph paper.

## Review Questions

1. What is the shape of the liquid surface in a vessel rotating around a vertical axis?
2. How is the paraboloid funnel depth determined from the rotational speed n?
3. How is hydrostatic pressure distributed in the liquid during rotation of the vessel?
4. What is the pressure at the bottom of the vessel at its center during rotation?
5. What is the pressure at the bottom of the vessel near its walls during rotation?
6. How are the initial water level and the funnel depth related to each other?
