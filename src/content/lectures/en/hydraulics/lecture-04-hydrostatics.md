---
title: "Fundamentals of Hydraulics: Hydrostatics and Hydrodynamics"
topic: "hydraulics"
topic_title: "Fundamentals of Hydraulics"
lecture: 4
slug: "lecture-04-hydrostatics"
locale: "en"
description: "Hydrostatic pressure, Pascal's law, Bernoulli's equation, flow regimes of fluids. Pipe calculations for food industry."
keywords: ["hydrostatics", "hydrodynamics", "Bernoulli's equation", "flow regimes", "Reynolds number", "pipeline", "food industry"]
duration: "55 min"
difficulty: "basic"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Lecture 4. Fundamentals of Hydraulics: Hydrostatics and Hydrodynamics

## What You Will Learn

After this lecture you will be able to:

- write and apply the **basic law of hydrostatics** for pressure calculation in any fluid point
- explain **Pascal's law** and name three examples of its application in food equipment
- write **Bernoulli's equation** and use it to calculate fluid velocity and flow rate
- determine the **flow regime** of milk, juice or other fluid in a pipeline using the Reynolds number
- calculate **pressure losses** in a food industry pipeline

---

## 1. Why Does Food Technology Need Hydraulics?

Look at any food production facility — dairy plant, brewery, juice factory. Fluids are transported through pipelines everywhere. Milk goes to the pasteurizer, juice is pumped to the filling line, beer flows from the fermenter to the filter.

At every point, the same questions arise:
- What pump should I choose to deliver 5000 kg/h of milk to a height of 10 m?
- What pipe diameter will ensure the required flow rate without excessive pressure losses?
- Will the flow regime be laminar or turbulent — and how will this affect pasteurization?

The answers are given by **hydraulics** — the science of fluid motion and the forces arising during it.

📺 **Video:** [Fluid mechanics in food processing](https://ocw.mit.edu/courses/2-06-fluid-dynamics-spring-2013/)

---

## 2. Hydrostatics

![Hydrostatic pressure in a tank](/images/lectures/hydraulics/hydrostatic-pressure.svg)

### 2.1 Basic Law of Hydrostatics

Pressure at any point at depth $h$ in a stationary fluid:

$$p = p_0 + \rho g h$$

where:
- $p_0$ — pressure at the fluid surface, Pa
- $\rho$ — fluid density, kg/m³
- $g$ — gravitational acceleration, 9,81 m/s²
- $h$ — depth of the point from the fluid surface, m

**Physical meaning:** pressure in fluid increases with depth proportional to the weight of the fluid column above the point.

### 2.2 Absolute, Gauge, and Vacuum Pressure

In practice, three forms of pressure recording are used:

| Form | Designation | Definition |
|---|---|---|
| **Absolute** | $p_{abs}$ | Full pressure, measured from zero (absolute vacuum) |
| **Gauge** (manometric) | $p_{gauge}$ | $p_{abs} - p_{atm}$, shown by a pressure gauge |
| **Vacuum** | $p_{vac}$ | $p_{atm} - p_{abs}$, shown by a vacuum gauge (when $p_{abs} < p_{atm}$) |

> 💡 **In production:** gauges on pipelines show **gauge pressure**. If the gauge shows 0,3 MPa — absolute pressure = 0,1 + 0,3 = 0,4 MPa. Vacuum gauges on evaporators show **vacuum** — how much pressure is below atmospheric.

### 2.3 Pascal's Law

> **Pressure applied to a closed stationary fluid is transmitted equally in all directions without change.**

$$p = \frac{F}{A} = \text{constant throughout the volume}$$

**Examples of application in food equipment:**

**Hydraulic press** for juice, oil, wine extraction:
A small force $F_1$ on a small piston $A_1$ creates pressure $p = F_1/A_1$. This pressure acts on a large piston $A_2$, where a large force $F_2 = p \cdot A_2$ arises.

$$\frac{F_2}{F_1} = \frac{A_2}{A_1}$$

If $A_2/A_1 = 50$ — the force increases 50 times. This is the principle of operation of **hydraulic press for winemaking**.

**Sterilizer (autoclave)** for canned food: gauge pressure is equal in all points — contents are sterilized uniformly regardless of their position.

**Milk homogenizer:** milk is pressed through a narrow gap under pressure 10–25 MPa. Fat droplets are broken → milk becomes uniform, fat doesn't cream.

📺 **Video:** [How does a homogenizer work](https://dairyprocessinghandbook.tetrapak.com/chapter/homogenizers)

### 2.4 Pressure Measurement Instruments

| Instrument | Principle of Action | Application |
|---|---|---|
| **Manometer** (spring) | Bulb deformation | Pressure in pipelines, autoclaves |
| **Vacuum gauge** | Same, but for negative gauge pressure | Vacuum evaporators |
| **Manovacuum gauge** | Shows both pressure and vacuum | Universal |
| **Liquid manometer** (U-shaped) | $p = \rho g h$ | Accurate laboratory measurements |
| **Level gauge** (hydrostatic) | $\rho g h$ | Level control of milk, juice in tanks |

**Hydrostatic level gauge** — an important detail. Sensor at the bottom of a tank measures pressure $p = \rho g h$. Knowing product density $\rho$, the controller calculates $h$ — liquid level. No need to climb into the tank!

---

## 3. Hydrodynamics: Fluid Motion

### 3.1 Continuity Equation (Conservation of Flow)

For an incompressible fluid (liquids, unlike gases, practically incompressible), flow rate does not change along a pipeline:

$$Q = w_1 A_1 = w_2 A_2 = \text{constant}$$

where $Q$ is volumetric flow rate (m³/s), $w$ is velocity (m/s), $A$ is cross-sectional area (m²).

**Consequence:** where the pipe narrows — fluid flows faster.

$$\frac{w_2}{w_1} = \frac{A_1}{A_2} = \frac{d_1^2}{d_2^2}$$

**Example:** Milk flows at speed 0,5 m/s in a pipe with diameter 50 mm. What is the speed in the narrowed section with diameter 25 mm?

$$w_2 = w_1 \cdot \frac{d_1^2}{d_2^2} = 0{,}5 \cdot \frac{50^2}{25^2} = 0{,}5 \cdot 4 = 2{,}0 \text{ m/s}$$

Narrowing by 2 times → speed increases **4 times**!

### 3.2 Bernoulli's Equation

![Bernoulli equation as head balance](/images/lectures/hydraulics/bernoulli-energy.svg)

Bernoulli's equation is the energy conservation law for fluid flow:

$$z_1 + \frac{p_1}{\rho g} + \frac{w_1^2}{2g} = z_2 + \frac{p_2}{\rho g} + \frac{w_2^2}{2g} + h_{loss}$$

where each term is an **energy grade line** (height of fluid column corresponding to this energy type):

| Term | Name | Physical Meaning |
|---|---|---|
| $z$ | Geometric grade | Potential energy of position |
| $p/(\rho g)$ | Piezometric grade | Potential energy of pressure |
| $w^2/(2g)$ | Kinetic grade | Kinetic energy |
| $h_{loss}$ | Losses | Irreversible losses due to friction and local obstacles |

> 🌟 **Sum of first three terms = total grade line.** If there were no losses ($h_{loss} = 0$), the total grade line would remain constant along the flow. In reality, it decreases due to friction.

### 3.3 Practical Application of Bernoulli's Equation

**Example 1: Velocity of milk flowing out of a tank**

Tank with apple juice ($\rho = 1055$ kg/m³), juice level is $H = 2{,}5$ m above the outlet hole. Pressure above juice and at outlet is atmospheric. What is the velocity?

Section 1 — juice surface ($z_1 = H$, $w_1 \approx 0$, $p_1 = p_{atm}$)
Section 2 — outlet ($z_2 = 0$, $p_2 = p_{atm}$)

Substituting into Bernoulli's equation (without losses for ideal fluid):

$$H + \frac{p_{atm}}{\rho g} + 0 = 0 + \frac{p_{atm}}{\rho g} + \frac{w_2^2}{2g}$$

$$w_2 = \sqrt{2gH} = \sqrt{2 \cdot 9{,}81 \cdot 2{,}5} = 7{,}0 \text{ m/s}$$

For real fluids velocity is lower due to losses: $w_2 = \varphi\sqrt{2gH}$, where $\varphi = 0{,}96\ldots0{,}99$ — velocity coefficient.

Flow rate through a circular hole of diameter $d$:

$$Q = \alpha \cdot \frac{\pi d^2}{4} \cdot \sqrt{2gH}$$

where $\alpha \approx 0{,}62$ — discharge coefficient (accounts for jet contraction and friction).

**Example 2: Pipeline pressure drop calculation**

Required to pump milk ($\rho = 1030$ kg/m³) from a tank ($z_1 = 0$, $p_1 = p_{atm}$) to a pasteurizer at height $z_2 = 8$ m with gauge pressure $p_{gauge} = 0{,}2$ MPa. Flow rate $Q = 5000$ kg/h, pipe diameter $d = 0{,}05$ m. Find required pump head.

**Step 1.** Mass flow → volumetric:
$$Q_V = \frac{5000}{1030 \cdot 3600} = 1{,}35 \cdot 10^{-3} \text{ m}^3/\text{s}$$

**Step 2.** Fluid velocity in pipeline:
$$w = \frac{Q_V}{A} = \frac{1{,}35 \cdot 10^{-3}}{\pi \cdot 0{,}05^2/4} = \frac{1{,}35 \cdot 10^{-3}}{1{,}96 \cdot 10^{-3}} = 0{,}69 \text{ m/s}$$

**Step 3.** Bernoulli's equation with pump:

$$H_{pump} = z_2 - z_1 + \frac{p_2 - p_1}{\rho g} + \frac{w_2^2 - w_1^2}{2g} + h_{loss}$$

$$H_{pump} = 8 + \frac{200\,000}{1030 \cdot 9{,}81} + \frac{0{,}69^2}{2 \cdot 9{,}81} + h_{loss}$$

$$H_{pump} = 8 + 19{,}8 + 0{,}024 + h_{loss} \approx 27{,}8 + h_{loss}$$

We calculate friction losses $h_{loss}$ in Section 5.

---

## 4. Fluid Flow Regimes

![Flow regimes by Reynolds number](/images/lectures/hydraulics/reynolds-flow-regimes.svg)

### 4.1 Reynolds' Experiment

In 1883, British physicist **Osborne Reynolds** performed a classic experiment: he introduced a thin dye thread into water flow in a glass tube and observed what happened to the stream at increased velocity.

- At **low velocity** — dye thread is pulled as a continuous line, not mixing with water → **laminar regime**
- At **high velocity** — dye diffuses and mixes with water → **turbulent regime**

📺 **Video:** [Reynolds experiment — laminar vs turbulent flow visualization](https://learncheme.com/)

### 4.2 Reynolds Criterion and Regime Boundaries

$$Re = \frac{w \cdot d \cdot \rho}{\mu} = \frac{w \cdot d}{\nu}$$

| Regime | Condition | Flow Character |
|---|---|---|
| **Laminar** | $Re < 2300$ | Fluid layers move parallel, no mixing |
| **Transitional** | $2300 < Re < 10\,000$ | Unstable — can be laminar or turbulent |
| **Turbulent** | $Re > 10\,000$ | Chaotic particle motion, intense mixing |

### 4.3 Velocity Profiles

At **laminar regime** velocity distribution is parabolic:

$$w(r) = \frac{\Delta p}{4\mu l}(R^2 - r^2)$$

- Maximum velocity on axis: $w_{max}$
- Average velocity: $\bar{w} = 0{,}5 \cdot w_{max}$

At **turbulent regime** profile is more uniform:
- $\bar{w} \approx 0{,}8 \cdot w_{max}$ at $Re = 10^4$
- $\bar{w} \approx 0{,}9 \cdot w_{max}$ at $Re = 10^8$

> 💡 **Important for pasteurization!** At laminar regime milk in pipe flows 2 times faster on the axis than the average flow rate — it spends twice as little time in the heating zone. Portions of milk may **not be pasteurized**! That's why standards require turbulent flow for pasteurization ($Re > 10\,000$).

### 4.4 Pressure Loss at Laminar Regime — Poiseuille's Formula

$$Q = \frac{\pi \Delta p \cdot d^4}{128 \mu l}$$

where $\Delta p$ is pressure drop, Pa; $d$ is pipe diameter, m; $\mu$ is viscosity, Pa·s; $l$ is length, m.

**Key conclusion:** flow rate is proportional to $d^4$. Doubling pipe diameter → flow rate increases **16 times**! That's why choosing the correct pipe diameter is critically important.

---

## 5. Minor Losses and Pressure Drops

![Head losses in a food pipeline](/images/lectures/hydraulics/head-loss-pipeline.svg)

### 5.1 General Formula

Total pressure loss consists of two parts:

$$h_{loss} = h_{major} + h_{minor}$$

where $h_{major}$ is friction losses along length, $h_{minor}$ is local losses.

### 5.2 Friction Losses — Darcy-Weisbach Formula

$$h_{major} = \lambda \cdot \frac{l}{d} \cdot \frac{w^2}{2g}$$

or for pressure loss:

$$\Delta p_{major} = \lambda \cdot \frac{l}{d} \cdot \frac{\rho w^2}{2}$$

where $\lambda$ is **hydraulic friction factor** (dimensionless).

### 5.3 Hydraulic Friction Factor λ

**At laminar regime** ($Re < 2300$):

$$\lambda = \frac{64}{Re}$$

**At turbulent regime** for smooth pipes ($4 \cdot 10^3 < Re < 10^5$) — Blasius formula:

$$\lambda = \frac{0{,}3164}{Re^{0{,}25}}$$

**At turbulent regime** for rough pipes — Colebrook formula:

$$\lambda = 0{,}11 \left(\frac{\varepsilon}{d} + \frac{68}{Re}\right)^{0{,}25}$$

where $\varepsilon$ is absolute roughness of pipe wall.

**Roughness of different pipes in food industry:**

| Pipe material | $\varepsilon$, mm |
|---|---|
| New stainless steel | 0,10 |
| Food-grade stainless (AISI 304, 316L) | 0,002–0,010 |
| Glass and plastic | 0,001–0,002 |
| Cast iron | 0,25 |
| Old contaminated | up to 2,0 |

> 💡 **Food industry uses stainless steel pipes** — low roughness, easy to clean, non-corrosive. Standard is AISI 316L for dairy production.

### 5.4 Minor Local Losses

Minor losses occur where velocity or direction changes:

$$h_{minor} = \xi \cdot \frac{w^2}{2g}$$

where $\xi$ is local loss coefficient.

| Pipeline element | $\xi$ |
|---|---|
| Pipe entry from tank (sharp edge) | 0,5 |
| Pipe exit to tank | 1,0 |
| 90° bend without rounding | 1,2 |
| 90° bend with smooth rounding | 0,3–0,5 |
| Tee | 1,0–1,5 |
| Valve fully open (d = 50 mm) | 6,0 |
| Gate valve fully open | 0,1–0,2 |
| Check valve | 2,0–5,0 |
| Sudden contraction | 0,4–0,5 |
| Sudden expansion | $(1 - A_1/A_2)^2$ |

**General formula with all losses:**

$$h_{loss} = \left(\lambda \cdot \frac{l}{d} + \sum \xi\right) \cdot \frac{w^2}{2g}$$

### 5.5 Complete Calculation Example

**Problem:** Calculate pressure losses when pumping milk through a dairy plant pipeline.

**Given:**
- Milk at 20°C: $\rho = 1030$ kg/m³, $\mu = 2{,}1 \cdot 10^{-3}$ Pa·s
- Stainless steel pipe, $d = 0{,}05$ m, $l = 30$ m, $\varepsilon = 0{,}005$ mm
- Milk velocity $w = 1{,}5$ m/s
- Minor losses: 2 × 90° bends ($\xi = 0{,}4$ each), 1 valve ($\xi = 6{,}0$), entry ($\xi = 0{,}5$), exit ($\xi = 1{,}0$)

**Solution:**

**Step 1.** Reynolds number:
$$Re = \frac{1{,}5 \cdot 0{,}05 \cdot 1030}{2{,}1 \cdot 10^{-3}} = \frac{77{,}25}{0{,}0021} = 36\,786$$

Regime — **turbulent** ($Re > 10\,000$).

**Step 2.** Friction factor λ (Colebrook formula, $\varepsilon/d = 0{,}005/50 = 0{,}0001$):
$$\lambda = 0{,}11\left(0{,}0001 + \frac{68}{36786}\right)^{0{,}25} = 0{,}11 \cdot (0{,}0001 + 0{,}00185)^{0{,}25}$$
$$\lambda = 0{,}11 \cdot (0{,}00195)^{0{,}25} = 0{,}11 \cdot 0{,}210 = 0{,}0231$$

**Step 3.** Kinetic grade:
$$\frac{w^2}{2g} = \frac{1{,}5^2}{2 \cdot 9{,}81} = \frac{2{,}25}{19{,}62} = 0{,}115 \text{ m}$$

**Step 4.** Friction losses:
$$h_{major} = \lambda \cdot \frac{l}{d} \cdot \frac{w^2}{2g} = 0{,}0231 \cdot \frac{30}{0{,}05} \cdot 0{,}115 = 0{,}0231 \cdot 600 \cdot 0{,}115 = 1{,}59 \text{ m}$$

**Step 5.** Minor losses:
$$\sum \xi = 2 \cdot 0{,}4 + 6{,}0 + 0{,}5 + 1{,}0 = 8{,}3$$
$$h_{minor} = 8{,}3 \cdot 0{,}115 = 0{,}955 \text{ m}$$

**Step 6.** Total losses:
$$h_{loss} = 1{,}59 + 0{,}955 = \boxed{2{,}55 \text{ m}}$$

Returning to Bernoulli's Example 2: $H_{pump} = 27{,}8 + 2{,}55 \approx 30{,}4$ m — this is the required pump head.

---

## 6. Optimal Velocities in Pipelines

In practice, fluid velocity in pipelines is chosen considering two opposing factors:
- **Higher velocity** → smaller pipe diameter → cheaper pipeline, but higher pressure losses and pump power
- **Lower velocity** → larger pipe diameter → more expensive pipeline, but lower operating costs

**Recommended velocities for food industry:**

| Fluid and conditions | Velocity, m/s |
|---|---|
| Milk, juices (self-priming pipelines) | 0,1–0,5 |
| Milk, juices (pumped by pressure) | 0,5–2,5 |
| Viscous fluids (syrup, sauce) | 0,1–0,5 |
| Gases and vapors | 10–30 |
| Technical water | 1,0–2,5 |
| Cleaning (CIP) solutions | 1,5–3,0 |

> 💡 **CIP (Clean-in-Place)** — cleaning systems without disassembly in food industry. Cleaning solution is pumped through pipelines and equipment without dismantling them. For effective cleaning, **turbulent flow** is required ($Re > 10\,000$) — that's why CIP velocity is higher than when pumping product.

---

## Summary

**Hydrostatics:**
$$p = p_0 + \rho g h \qquad \text{(basic law)}$$

**Pascal's Law:** pressure is transmitted equally in all directions → principle of hydraulic press, milk homogenizer, autoclave.

**Bernoulli's Equation:**
$$z_1 + \frac{p_1}{\rho g} + \frac{w_1^2}{2g} = z_2 + \frac{p_2}{\rho g} + \frac{w_2^2}{2g} + h_{loss}$$

**Flow regimes:**

| $Re$ | Regime | Important for |
|---|---|---|
| $< 2300$ | Laminar | Viscous products, sauces, pastes |
| $> 10\,000$ | Turbulent | Pasteurization, CIP cleaning |

**Pressure drops:**
$$h_{loss} = \left(\lambda \cdot \frac{l}{d} + \sum \xi\right) \cdot \frac{w^2}{2g}$$

where $\lambda = 64/Re$ (laminar) or $\lambda = 0{,}3164/Re^{0{,}25}$ (turbulent).

---

## Self-Assessment Questions

1. A tank with apple juice ($\rho = 1055$ kg/m³) has liquid level 2,5 m. What gauge pressure at the bottom of the tank (kPa)?

2. Milk flows in a pipe $d_1 = 40$ mm at speed 0,8 m/s. The pipe narrows to $d_2 = 20$ mm. What is the speed in the narrow section?

3. Determine the flow regime of tomato sauce ($\rho = 1065$ kg/m³, $\mu = 5 \cdot 10^{-3}$ Pa·s) in a pipe $d = 0{,}06$ m at speed $w = 0{,}4$ m/s. Will pasteurization be effective?

4. Calculate the friction factor λ for turbulent flow of milk at $Re = 25\,000$ in a smooth pipe (Blasius formula).

5. Pipeline length 20 m, $d = 0{,}04$ m, stainless steel ($\varepsilon = 0{,}005$ mm). Milk ($\rho = 1030$ kg/m³, $\nu = 2 \cdot 10^{-6}$ m²/s) flows at speed 1,2 m/s. Local losses: bend ($\xi = 0{,}4$), valve ($\xi = 6{,}0$). Find total pressure losses and pressure drop (Pa).

---

## Useful Resources

### Online Calculators
- 🔗 [Pipe Flow Calculator](https://www.pipeflowcalculations.com) — Re, λ, pressure loss calculations online
- 🔗 [Engineering ToolBox — Hydraulic calculations](https://www.engineeringtoolbox.com/hydraulics-t_18.html) — references and formulas

### Textbooks
- 🔗 [Streeter & Wylie — Fluid Mechanics](https://www.mheducation.com) — classic textbook
- 🔗 [Munson, Young, Okiishi — Fundamentals of Fluid Mechanics](https://www.wiley.com) — modern standard textbook

### Videos
- 📺 [MIT OCW — Fluid Mechanics lectures](https://ocw.mit.edu/courses/2-06-fluid-dynamics-spring-2013/)
- 📺 [Bernoulli equation examples — Khan Academy](https://www.khanacademy.org/science/in-in-class11th-physics/in-in-class11th-physics-fluids/in-in-fluid-dynamics/e/understanding-bernoulli-s-equation)
- 📺 [Pipe flow friction losses explained](https://www.engineeringtoolbox.com/amp/darcy-weisbach-equation-d_646.html)

---

## Next Lecture

**Lecture 5 → Pumps and Gas-Handling Machines**

Centrifugal, positive displacement and rotary pumps — construction, principle of operation, characteristics, pump selection for food enterprises. Common problems: cavitation, water hammer, flow regulation.
