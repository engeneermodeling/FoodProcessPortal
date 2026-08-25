---
title: "Agitator Design: Geometry, Power and Mixing Time"
topic: "mixing"
topic_title: "Mixing in Food Processing Equipment"
lecture: 9
description: "A practical design workflow for stirred vessels: geometry ratios, similarity criteria, power, specific power input, mixing time, scale-up and heat transfer."
keywords: ["agitator design", "stirred vessel geometry", "mixing time", "scale-up", "agitator power", "heat transfer in stirred vessels"]
duration: "60 min"
difficulty: "intermediate"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Lecture 9. Agitator Design: Geometry, Power and Mixing Time

## Learning Outcomes

After this lecture you will be able to:

- build a basic design workflow for a stirred vessel
- choose starting ratios `d_m/D`, `H/D`, `h/d_m` and `b/D`
- estimate power and specific power input `N/V`
- explain why laboratory speed cannot be copied directly to a production tank
- estimate mixing time from a tracer response
- include heat transfer through a jacket or coil in the decision

---

## 1. Required Input Data

Start from the process task, not from the impeller diameter.

| Required data | Example |
|---|---|
| **Process goal** | dissolve sugar, keep particles suspended, emulsify fat, prevent burn-on |
| **Batch volume** | 0.5 m³, 2 m³, 10 m³ |
| **Product properties** | `rho`, `mu`, particles, fat, working temperature |
| **Quality limits** | no foam, no fruit-piece damage, no protein overheating |
| **Hygiene requirements** | CIP, no dead zones, hygienic shaft seal |

Always use viscosity at the operating temperature. Cold syrup, warm syrup and concentrated syrup may be three different mixing problems.

---

## 2. Vessel Geometry

![Main geometric parameters of a stirred vessel](/images/lectures/mixing/agitator-geometry.svg)

| Parameter | Starting range | Comment |
|---|---:|---|
| `H/D` | `0.8 ... 1.5` | product height to tank diameter |
| `d_m/D` | `0.25 ... 0.5` | smaller for high-speed, larger for viscous products |
| `h/d_m` | `0.5 ... 1.0` | clearance from bottom |
| `b/D` | `0.08 ... 0.12` | baffle width for low-viscosity liquids |

For viscous products, the impeller diameter is often increased, rotation speed reduced and wall scrapers added.

---

## 3. Calculation Workflow

1. Define the process goal and quality limits.
2. Determine product properties at operating temperature.
3. Select an impeller type from viscosity and phase composition.
4. Set initial vessel geometry.
5. Calculate `Re_m = rho · n · d_m² / mu`.
6. Choose or refine `N_p` from regime and impeller type.
7. Calculate `N = N_p · rho · n³ · d_m⁵`.
8. Check `N/V`, mixing time, heat transfer and hygienic design.

---

## 4. Specific Power Input

```text
P_v = N / V
```

| `N/V` | Mixing intensity | Example |
|---:|---|---|
| `50 ... 200 W/m³` | gentle | milk storage, light blending |
| `200 ... 800 W/m³` | medium | syrups, suspensions, dissolving |
| `800 ... 3000 W/m³` | intensive | emulsions, difficult powders |

Excessive power can damage yoghurt, cream desserts or fruit preparations.

---

## 5. Mixing Time

Mixing time `t_m` is the time after which local concentration stays within a specified band, often `±5%`, around the final average.

![Tracer-based mixing time estimate](/images/lectures/mixing/mixing-time-scale.svg)

In production, the same idea is monitored through soluble solids, temperature, fat content, colour or viscosity.

---

## 6. Scale-Up

You cannot simply keep the same rotational speed when moving from a lab beaker to a production tank. Because turbulent power scales with `d_m⁵`, direct speed copying quickly produces unrealistic motors.

| Criterion kept constant | Useful when | Risk |
|---|---|---|
| **same `Re_m`** | studying flow regime | does not guarantee same mixing time |
| **same `N/V`** | similar bulk intensity | local velocities may differ |
| **same tip speed** `u = pi d_m n` | limiting shear for delicate products | may be too weak for suspension |
| **same mixing time** | product result matters most | needs experimental data |

---

## 7. Heat Transfer

In jacketed vessels and cooking kettles, mixing is also a heat-transfer tool.

![Heat transfer in a stirred vessel](/images/lectures/mixing/stirred-heat-transfer.svg)

```text
Q = K · F · ΔT_mean
```

Agitation reduces the thermal resistance near the wall and increases the product-side heat-transfer coefficient. For jams, creams, sauces and caramel masses, wall scrapers are often essential.

---

## Quick Check

For `V = 1.5 m³` and `N = 1.8 kW`:

```text
N/V = 1800 / 1.5 = 1200 W/m³
```

This is intensive mixing. It may be suitable for an emulsion or difficult powder dissolution, but risky for delicate yoghurt or fruit pieces.

---

## Key Takeaways

- Agitator design starts with product and process purpose.
- Geometry ratios are starting points, not final proof.
- `N/V` helps compare vessels of different scale.
- Mixing time should be linked to measurable uniformity.
- Heat transfer, hygiene and texture matter as much as power equations.
