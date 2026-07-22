---
title: "Methods of Similarity and Similarity Criteria"
topic: "general-principles"
topic_title: "General Principles"
lecture: 2
slug: "lecture-02-similarity"
locale: "en"
description: "Three theorems of similarity, Reynolds, Nusselt, Prandtl and other criteria. How to transfer results from laboratory to industrial scale."
keywords: ["similarity criteria", "Reynolds number", "Nusselt number", "scale transition", "modeling", "food processing"]
duration: "50 min"
difficulty: "basic"
author: "FoodProcessPortal"
updated: "2026-07-07"
---

# Lecture 2. Methods of Similarity and Similarity Criteria

## What You Will Learn

After this lecture you will be able to:

- explain the **three theorems of similarity** and their practical meaning
- calculate the **Reynolds number** for milk, juice, or other food fluid flow
- read and construct **dimensionless criteria equations** of type $Nu = C \cdot Re^m \cdot Pr^n$
- explain why cooking in a small pot and in a large boiler gives different results
- describe the three stages of scale-up: laboratory → pilot → production

---

## 1. The Scale-up Problem

Imagine: you've developed an excellent cream sauce in the laboratory. Taste, texture, color — perfect. Now you need to launch it in production — a 2000-liter boiler instead of laboratory cookware of 2 liters. Scale — 1000 times larger.

The result? The sauce comes out differently. It burns. Or doesn't thicken. Or separates.

**Why does this happen?**

When equipment size increases:
- the ratio of surface area to volume **decreases** (less heat through walls per unit volume)
- hydrodynamic conditions **change** (fluid flow in a large boiler is different)
- mixing time **increases** (concentration gradients grow)

> **Key Idea:** You cannot simply "scale up" an equipment by 1000 times — you need to know which parameters to keep unchanged. The answer is given by **similarity theory**.

This is why production is studied in **three stages**:

```
Laboratory (1–5 L) → Pilot Plant (50–500 L) → Production (1000–50000 L)
      ↓                          ↓                                 ↓
  Research                 Scale verification             Production implementation
  criteria                 parameter selection              optimization
```

📺 **Video:** [Scale-up in food processing — from laboratory to factory](https://www.youtube.com/results?search_query=food+processing+scale+up+pilot+plant)

---

## 2. The Concept of Similarity

### Geometric Similarity

Two equipment are **geometrically similar** if all their linear dimensions are in a constant ratio:

$$\frac{L}{l} = \alpha_l = \text{const}$$

where $L$ is the size of the industrial equipment, $l$ is the size of the model (laboratory unit).

**Example:** A cylindrical reactor for fermentation. If the industrial equipment diameter $D = 2{,}0$ m, and laboratory $d = 0{,}2$ m — scale $\alpha_l = 10$. Geometric similarity requires that height, mixer placement, pipe diameters also increase by 10 times.

### Kinematic Similarity

Systems are **kinematically similar** if velocities at corresponding points are in a constant ratio:

$$\frac{V}{v} = \alpha_V = \text{const}$$

### Dynamic Similarity

Systems are **dynamically similar** if forces at corresponding points are in a constant ratio:

$$\frac{K}{k} = \alpha_K = \text{const}$$

Dynamic similarity is **the most important** for engineering calculations. It is described by **similarity criteria**.

---

## 3. Three Theorems of Similarity

### First Theorem (Newton)

> **Similar phenomena have numerically equal similarity criteria.**

**Practical meaning:** if you measure similarity criteria in a laboratory unit — these same values of criteria describe the industrial equipment, provided they are similar.

**Conclusion:** during an experiment, measure exactly those quantities that enter the similarity criteria.

---

### Second Theorem (Buckingham π-Theorem)

> **Any relationship between physical quantities can be presented in the form of a relationship between dimensionless similarity criteria.**

Formally: if a phenomenon is described by $n$ physical quantities and $k$ primary units (length, mass, time, temperature...), then:

$$i = n - k$$

where $i$ is the number of independent similarity criteria.

**Example — heat transfer by forced convection:**

Process depends on: $\alpha$ (heat transfer coefficient), $l$ (size), $v$ (velocity), $\rho$ (density), $\mu$ (viscosity), $c_p$ (specific heat), $\lambda$ (thermal conductivity) → $n = 7$ quantities, $k = 4$ primary units.

Number of criteria: $i = 7 - 4 = 3$

These three criteria are **Nu, Re, Pr** — they are the same as in the criteria equation $Nu = C \cdot Re^m \cdot Pr^n$.

**Conclusion:** the second theorem tells you **how to process data** — not as a graph $\alpha$ vs $v$, but as $Nu$ vs $Re$.

---

### Third Theorem (Kirchhoff-Guha)

> **Similar systems with uniquely determined conditions, whose criteria composed of conditions uniqueness criteria are numerically equal, are similar.**

**Conditions of uniqueness** are everything that distinguishes a specific phenomenon from other phenomena of the same class:
- geometric dimensions of equipment
- physical constants of fluids (viscosity, thermal conductivity...)
- initial conditions (temperature, velocity at inlet)
- boundary conditions (wall temperature, pressure)

**Conclusion:** the third theorem answers **how to build a model** — it provides conditions under which model and industrial equipment will be similar.

---

## 4. Main Similarity Criteria

### 4.1 Reynolds Criterion — Flow Regime of Fluid

$$Re = \frac{l \cdot v \cdot \rho}{\mu} = \frac{l \cdot v}{\nu}$$

where:
- $l$ — characteristic linear dimension (pipe diameter, impeller size), m
- $v$ — fluid velocity, m/s
- $\rho$ — fluid density, kg/m³
- $\mu$ — dynamic viscosity, Pa·s
- $\nu = \mu/\rho$ — kinematic viscosity, m²/s

**Physical meaning:** $Re$ is the ratio of inertia forces to viscous friction forces.

| $Re$ | Flow Regime | Flow Character |
|---|---|---|
| $Re < 2100$ | **Laminar** | Fluid layers slide parallel, minimal mixing |
| $2100 < Re < 10000$ | **Transitional** | Unstable, unsteady regime |
| $Re > 10000$ | **Turbulent** | Chaotic mixing, intense heat and mass transfer |

### Reynolds Number Examples in Food Industry

**Milk in pasteurizer pipe:**

Given: pipe diameter $d = 0{,}05$ m, milk velocity $v = 0{,}5$ m/s, milk viscosity at 20°C $\mu = 2{,}1 \cdot 10^{-3}$ Pa·s, $\rho = 1030$ kg/m³.

$$Re = \frac{0{,}05 \cdot 0{,}5 \cdot 1030}{2{,}1 \cdot 10^{-3}} = \frac{25{,}75}{0{,}0021} \approx 12250$$

**Conclusion:** turbulent regime → efficient pasteurization, good heat transfer.

**Tomato sauce in pipe:**

Tomato sauce is a non-Newtonian fluid with effective viscosity $\mu_{eff} = 0{,}5$ Pa·s, $\rho = 1080$ kg/m³, $d = 0{,}08$ m, $v = 0{,}3$ m/s.

$$Re = \frac{0{,}08 \cdot 0{,}3 \cdot 1080}{0{,}5} \approx 52$$

**Conclusion:** deep laminar regime → poor mixing, possible burning in zones of stagnation!

> 💡 **Practical consequence:** Viscous food products (sauces, purees, chocolate) are difficult to achieve turbulent regime. Therefore, they use special scraped-surface heat exchangers, where blades mechanically remove the boundary layer — replacing turbulent mixing.

📺 **Video:** [Scraped surface heat exchanger for viscous products](https://www.youtube.com/results?search_query=scraped+surface+heat+exchanger+food+processing)

---

### 4.2 Nusselt Criterion — Heat Transfer Intensity

$$Nu = \frac{\alpha \cdot l}{\lambda}$$

where:
- $\alpha$ — heat transfer coefficient, W/(m²·K)
- $l$ — characteristic size, m
- $\lambda$ — thermal conductivity of fluid, W/(m·K)

**Physical meaning:** $Nu$ is the ratio of convective heat transfer intensity to conductive heat transfer. Higher $Nu$ → more efficient heat transfer.

From the criteria equation, we can **find the heat transfer coefficient** $\alpha$:

$$\alpha = \frac{Nu \cdot \lambda}{l}$$

---

### 4.3 Prandtl Criterion — Properties of Heat Carrier

$$Pr = \frac{c_p \cdot \mu}{\lambda}$$

where $c_p$ is specific heat capacity, J/(kg·K).

**Physical meaning:** $Pr$ is the ratio of momentum transfer to heat transfer. It depends only on **fluid properties**, not on flow conditions.

| Substance | $Pr$ at 20°C |
|---|---|
| Air | 0,71 |
| Water | 7,0 |
| Milk | ~10–12 |
| Sunflower oil | ~400–900 |
| Honey | ~10 000–100 000 |
| Liquid metals | 0,001–0,03 |

> 💡 **Why oil heats poorly?** Prandtl number of oil is 50–100 times higher than water. This means thermal conductivity of oil is much lower relative to its heat capacity — heat "poorly" transfers into the bulk of the fluid. That's why fryers require powerful heaters and constant stirring.

---

### 4.4 Péclet Criterion

$$Pe = Re \cdot Pr = \frac{l \cdot v}{a}$$

where $a = \lambda / (\rho \cdot c_p)$ is thermal diffusivity, m²/s.

**Physical meaning:** ratio of heat transferred by convection to heat transferred by thermal conduction.

---

### 4.5 Mass Transfer Nusselt Criterion

$$Nu_{mass} = \frac{\beta \cdot l}{D}$$

where $\beta$ is mass transfer coefficient, m/s; $D$ is diffusion coefficient, m²/s.

This is a **complete analogy** with thermal $Nu$ — instead of heat transfer coefficient we have mass transfer coefficient, instead of thermal conductivity — diffusion. This is the "triple analogy" mentioned in Lecture 1.

---

### Summary Table of Criteria

| Criterion | Formula | Physical Meaning | Where Applied |
|---|---|---|---|
| **Newton** $Ne$ | $K / (\rho l^2 v^2)$ | General mechanical similarity | Any mechanical systems |
| **Reynolds** $Re$ | $l v \rho / \mu$ | Flow regime of fluid | Hydraulics, pumps, pipes |
| **Froude** $Fr$ | $v^2 / (gl)$ | Gravity forces | Open channels, mixers |
| **Euler** $Eu$ | $\Delta p / (\rho v^2)$ | Pressure forces | Hydraulic resistances |
| **Archimedes** $Ar$ | $g l^3 \rho \Delta\rho / \mu^2$ | Viscous forces + buoyancy | Particle settling, flocculation |
| **Nusselt** $Nu$ | $\alpha l / \lambda$ | Heat transfer intensity | Heat exchange |
| **Prandtl** $Pr$ | $c_p \mu / \lambda$ | Heat carrier properties | Heat exchange |
| **Péclet** $Pe$ | $l v / a$ | Convection vs conduction | Heat exchange |

---

## 5. Criteria Equation and Dimensional Analysis Method

The main practical form of similarity theory is the **criteria equation**:

$$Nu = C \cdot Re^m \cdot Pr^n$$

Constants $C$, $m$, $n$ are determined **experimentally** on laboratory or pilot units. Then this equation is used for industrial equipment calculations.

### How to Obtain a Criteria Equation: Dimensional Analysis Method

**Step 1.** Identify which physical quantities affect the process.

For convective heat transfer: $\alpha$, $l$, $v$, $\rho$, $\mu$, $c_p$, $\lambda$.

**Step 2.** Express dimensions through primary units (length L, mass M, time T, temperature θ).

**Step 3.** Equate exponents of powers on left and right sides of dimensional equation.

**Step 4.** Express one set of unknowns through another — obtain similarity criteria.

The result always comes in the form:
$$Nu = C \cdot Re^m \cdot Pr^n \cdot Gr^p \cdot \ldots$$

where $Gr$ is Grashof criterion (for natural convection).

---

## 6. Practical Example: Pasteurizer Calculation

### Problem

Calculate the heat transfer coefficient between hot water and milk in a plate pasteurizer.

**Given:**
- Milk: temperature 20→72°C, velocity $v = 0{,}4$ m/s, characteristic channel size $l = 0{,}004$ m
- Milk properties at average temperature 46°C: $\rho = 1025$ kg/m³, $\mu = 1{,}4 \cdot 10^{-3}$ Pa·s, $\lambda = 0{,}55$ W/(m·K), $c_p = 3950$ J/(kg·K)

**Solution:**

**Step 1.** Calculate $Re$:
$$Re = \frac{l \cdot v \cdot \rho}{\mu} = \frac{0{,}004 \cdot 0{,}4 \cdot 1025}{1{,}4 \cdot 10^{-3}} \approx 1171$$

Laminar regime (Re < 2100) — but in plate pasteurizers channels are profiled, which artificially turbulent the flow even at $Re > 200$.

**Step 2.** Calculate $Pr$:
$$Pr = \frac{c_p \cdot \mu}{\lambda} = \frac{3950 \cdot 1{,}4 \cdot 10^{-3}}{0{,}55} \approx 10{,}05$$

**Step 3.** Criteria equation for plate heat exchangers:
$$Nu = 0{,}4 \cdot Re^{0{,}6} \cdot Pr^{0{,}36}$$

$$Nu = 0{,}4 \cdot 1171^{0{,}6} \cdot 10{,}05^{0{,}36}$$

$$Nu = 0{,}4 \cdot 67{,}2 \cdot 2{,}18 \approx 58{,}6$$

**Step 4.** Find heat transfer coefficient:
$$\alpha = \frac{Nu \cdot \lambda}{l} = \frac{58{,}6 \cdot 0{,}55}{0{,}004} \approx 8060 \text{ W/(m²·K)}$$

> **Conclusion:** $\alpha \approx 8060$ W/(m²·K) — very high heat transfer coefficient, characteristic of plate pasteurizers. That's why they are compact — much smaller surface area is needed compared to shell-and-tube heat exchangers.

---

## 7. Modeling: Physical and Mathematical

### Physical Modeling

Build a model (reduced copy) of the industrial equipment and conduct tests on it. Transfer results to the industrial unit under the condition of equal similarity criteria.

**Similarity condition:** $Re_{model} = Re_{sample}$

If the model is smaller by a factor of 10 ($l_{м} = 0{,}1 \cdot l_{з}$), then to achieve equality of Re either increase velocity by 10 times, or reduce fluid viscosity by 10 times (use a different fluid).

**Example:** when designing a large separator for milk (D = 0,8 m), a model (D = 0,2 m) is built and tested. But instead of milk, they use water with appropriate Re.

### Mathematical Modeling

Compose a system of equations (differential transport equations) that describes the process. Solve numerically on a computer — without physical building of the equipment.

Modern approach — **CFD (Computational Fluid Dynamics)** — computer modeling of hydrodynamics and heat/mass transfer.

🔗 **Tool:** [OpenFOAM](https://www.openfoam.com) — free CFD package for flow modeling. Used for food equipment design.

📺 **Video:** [CFD simulation of food mixing process](https://www.youtube.com/results?search_query=CFD+simulation+food+mixing+tank)

---

## 8. Scale-up in Food Industry

### Why Are Similarity Criteria Sometimes Not Enough?

Even when $Re_{model} = Re_{sample}$ is satisfied, problems may arise due to:

- **Residence time**: in large equipment mixing time is longer → possible thermal degradation of vitamins, enzymes
- **Gravitational effects**: gas bubbles and particles settle differently in large vs small equipment
- **Thermal effects**: surface-to-volume ratio decreases → worse cooling in large fermenters

### Practical Scale-up Rules

| Process | What is kept constant |
|---|---|
| Liquid mixing | $Re_{impeller}$ or specific power W/m³ |
| Heat pasteurizer | $Nu$ and $Re$ in channels |
| Spray drying | Droplet size and $Re_{air}$ |
| Filtration | Pressure difference $\Delta p$ and filter cake thickness |
| Rectification | Number of theoretical trays, $Re$ in column |

🔗 **Article:** [Scale-up of food processes — Journal of Food Engineering](https://www.sciencedirect.com/journal/journal-of-food-engineering)

---

## Summary

**Three theorems of similarity:**

| Theorem | Author | Content | Answers |
|---|---|---|---|
| First | Newton | Similar phenomena have equal criteria | What to measure? |
| Second | Buckingham | Dependencies → criteria equations | How to process data? |
| Third | Kirchhoff-Guha | Conditions for model building | How to build model? |

**Most Important Criteria for Food Industry:**

$$Re = \frac{lv\rho}{\mu} \quad Nu = \frac{\alpha l}{\lambda} \quad Pr = \frac{c_p \mu}{\lambda}$$

**Criteria equation for heat transfer:**

$$Nu = C \cdot Re^m \cdot Pr^n$$

where $C$, $m$, $n$ are found experimentally for each equipment type.

---

## Self-Assessment Questions

1. Milk (ρ = 1030 kg/m³, μ = 2,0·10⁻³ Pa·s) flows through a pipe with diameter 40 mm at speed 0,8 m/s. Determine the flow regime.

2. What is the Prandtl number for plant oil (cp = 1970 J/(kg·K), μ = 0,05 Pa·s, λ = 0,17 W/(m·K))? Compare with water (Pr = 7). What does this mean for heat transfer intensity?

3. Explain why for tomato sauce (Re ≈ 50) in a shell-and-tube heat exchanger it's better to use a scraped-surface unit, not a plate heat exchanger.

4. There is a laboratory mixer (diameter d = 0,05 m, n = 300 rpm, fluid — water). Need to increase equipment by 5 times (D = 0,25 m), keeping Re of mixer constant. What rotational speed (rpm) should be set?

5. Given criteria equation for shell-and-tube pasteurizer: Nu = 0,023·Re⁰·⁸·Pr⁰·⁴. Re = 15 000, Pr = 10, l = 0,025 m, λ = 0,55 W/(m·K). Find the heat transfer coefficient α.

---

## Useful Resources

### Online Calculators
- 🔗 [Reynolds Number Calculator](https://www.engineeringtoolbox.com/reynolds-number-d_237.html) — calculate Re online
- 🔗 [Heat Transfer Correlations](https://www.thermexcel.com/english/tables/vap_eau.htm) — criteria equation tables

### Textbooks
- 🔗 [McCabe, Smith, Harriott — Unit Operations of Chemical Engineering](https://www.mheducation.com) — classic textbook on similarity criteria
- 🔗 [Geankoplis — Transport Processes](https://www.pearson.com) — detailed coverage of all criteria

### Videos
- 📺 [Dimensionless Numbers in Fluid Mechanics — MIT OpenCourseWare](https://www.youtube.com/results?search_query=dimensionless+numbers+fluid+mechanics+MIT)
- 📺 [Buckingham Pi Theorem explained](https://www.youtube.com/results?search_query=buckingham+pi+theorem+explained+simply)
- 📺 [Reynolds number visualization — laminar vs turbulent](https://www.youtube.com/results?search_query=reynolds+number+laminar+turbulent+visualization)

### Scientific Articles
- 🔗 [Journal of Food Engineering](https://www.sciencedirect.com/journal/journal-of-food-engineering)
- 🔗 [Food and Bioproducts Processing](https://www.sciencedirect.com/journal/food-and-bioproducts-processing)

---

## Next Lecture

**Lecture 3 → Basic Physical Properties of Food Substances**

Density, viscosity, heat capacity and thermal conductivity of milk, juices, sugar solutions, oils — and how to find and use them in calculations.