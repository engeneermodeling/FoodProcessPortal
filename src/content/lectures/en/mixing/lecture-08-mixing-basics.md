---
title: "Fundamentals of Mixing in Food Processing Equipment"
topic: "mixing"
topic_title: "Mixing in Food Processing Equipment"
lecture: 8
description: "Technological goals of mixing, impeller types, mixing Reynolds number, power number and a practical power estimate for food processing."
keywords: ["mixing", "agitator", "impeller", "mixing Reynolds number", "power number", "food processing equipment", "suspensions", "emulsions"]
duration: "60 min"
difficulty: "intermediate"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Lecture 8. Fundamentals of Mixing in Food Processing Equipment

## Learning Outcomes

After this lecture you will be able to:

- explain why the same agitator can work well for syrup and poorly for tomato puree
- distinguish dissolving, suspension, emulsification, homogenisation, heat-transfer and gas-liquid mixing duties
- calculate the mixing Reynolds number `Re_m`
- estimate drive power using the power number `N_p`
- select an impeller type from product viscosity and process purpose
- recognise practical risks: foaming, burn-on, dead zones and texture damage

---

## 1. Mixing Starts With a Process Goal

In food engineering, mixing is not "making the tank rotate". The goal is a uniform, stable product without lumps, sediment, overheating or unwanted texture changes.

![Mixing tasks in food manufacturing](/images/lectures/mixing/mixing-tasks-map.svg)

| Duty | Food examples | Main control point |
|---|---|---|
| **Dissolving** | sugar syrup, brine, dry blends | time, temperature, no crystals |
| **Suspension** | cocoa drinks, tomato pulp, spices in marinade | particles remain off the bottom |
| **Emulsification** | mayonnaise, sauces, dairy-fat mixtures | droplet size and stability |
| **Composition homogenisation** | juice blends, dairy drinks, syrups | same concentration everywhere |
| **Heat-transfer enhancement** | jam boiling, creams, condensed products | less burn-on, uniform temperature |
| **Gas-liquid dispersion** | aerated desserts, carbonated drinks | bubble size and foaming |

Further reading: [Tetra Pak Dairy Processing Handbook: Mixers](https://dairyprocessinghandbook.tetrapak.com/chapter/mixers) gives an industrial overview of mixing duties, batch and in-line equipment, and the role of turbulence, temperature and time.

---

## 2. Product Properties Drive Impeller Choice

The key properties are density `rho`, dynamic viscosity `mu`, the presence of solids, fat, air, crystals or fibres, and sensitivity to shear. Yoghurt, cream desserts and fruit preparations can be damaged by excessive shear. Temperature also matters because the viscosity of jam, syrup, chocolate or caramel changes strongly with heating.

As viscosity increases, engineers usually move from high-speed propeller or turbine impellers to low-speed anchor, frame, screw or ribbon agitators. Very viscous products often need wall scrapers to prevent overheating near the jacket.

---

## 3. Flow Patterns

![Typical flow patterns in a stirred vessel](/images/lectures/mixing/impeller-flow-patterns.svg)

| Flow pattern | Main effect | Typical impellers | Food examples |
|---|---|---|---|
| **Axial** | moves liquid up or down | propeller, pitched blade | brines, syrups, low-viscosity suspensions |
| **Radial** | throws flow toward the wall, high shear | turbine | emulsions, powder dispersion, sauces |
| **Tangential** | rotates the bulk product | anchor, frame | jams, creams, chocolate and caramel masses |

Without baffles, a low-viscosity liquid may form a vortex. Energy is then spent rotating the whole liquid instead of producing useful mixing. Baffles reduce vortexing, but in viscous products they can create cleaning and dead-zone problems.

---

## 4. Mixing Reynolds Number

For a stirred tank, the flow regime is estimated from impeller speed and diameter:

```text
Re_m = rho · n · d_m² / mu
```

| Regime | Range of `Re_m` | Meaning |
|---|---:|---|
| **Laminar** | `< 10` | viscosity dominates, slow mixing |
| **Transitional** | `10 ... 10 000` | strongly depends on geometry |
| **Turbulent** | `> 10 000` | fast composition equalisation |

![Mixing regimes and power number](/images/lectures/mixing/mixing-power-regimes.svg)

---

## 5. Power Estimate

For turbulent mixing, drive power is often estimated through the power number:

```text
N_p = N / (rho · n³ · d_m⁵)
N = N_p · rho · n³ · d_m⁵
```

Power is very sensitive to both speed and diameter. Doubling `n` increases turbulent power demand about eight times; doubling `d_m` increases it about thirty-two times.

---

## 6. Worked Example

A tank is used to prepare sugar syrup:

- `rho = 1150 kg/m³`
- `mu = 0.015 Pa·s`
- `d_m = 0.40 m`
- `n = 3 s⁻¹`
- assume `N_p = 5` for a turbine impeller

```text
Re_m = 1150 · 3 · 0.40² / 0.015 = 36 800
```

The regime is turbulent. The shaft power is:

```text
N = 5 · 1150 · 3³ · 0.40⁵ = 1590 W ≈ 1.6 kW
```

With a 20...30% margin, a motor around **2.2 kW** is reasonable.

If the product were a puree with `mu = 2 Pa·s`, then `Re_m = 276`, which is transitional. A turbine may mix only locally; an anchor, frame or scraped-surface agitator is often more suitable.

---

## 7. Food-Oriented Selection Guide

| Impeller | Suitable for | Strength | Limitation |
|---|---|---|---|
| **Propeller** | water, milk, brines, low-viscosity syrups | fast axial circulation | weak in very viscous products |
| **Turbine** | emulsions, suspensions, powder dispersion | strong shear | can damage delicate texture |
| **Paddle** | simple liquid mixtures, soup bases | simple construction | limited intensity |
| **Anchor / frame** | jam, cream, chocolate, caramel | good wall-region movement | slower, high torque |
| **Screw / ribbon** | very viscous pastes and fillings | circulation in viscous bulk | harder cleaning, higher cost |

Equipment examples: [Alfa Laval Rotary Jet Mixer](https://www.alfalaval.us/products/fluid-handling/mixing-equipment/tank-mixers/rotary-jet-mixer/) and [GEA mixing and blending equipment](https://www.gea.com/en/products/mixers-blenders/).

---

## Key Takeaways

- Mixing is designed from the technological purpose, not from motor size alone.
- `Re_m = rho · n · d_m² / mu` identifies the mixing regime.
- In turbulent flow, `N = N_p · rho · n³ · d_m⁵`.
- Viscosity can completely change equipment choice.
- Hygienic design, CIP, foaming, burn-on and product texture are part of the engineering decision.

Next: lecture 9 will cover agitator design, mixing time and heat transfer in stirred vessels.
