---
title: "Fundamentals of Heat Transfer in Food Processing"
topic: "heat-exchange"
topic_title: "Heat Transfer Processes"
lecture: 11
description: "Heat balance, heat-transfer mechanisms, overall heat-transfer coefficient, logarithmic temperature difference and heat-exchanger selection for milk, juices, purees and sauces."
keywords: ["heat transfer", "heat balance", "overall heat-transfer coefficient", "temperature driving force", "plate heat exchanger", "food processing"]
duration: "60 min"
difficulty: "intermediate"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Lecture 11. Fundamentals of Heat Transfer in Food Processing

## Learning Outcomes

After this lecture you will be able to explain conduction, convection and radiation, build a heat balance, interpret the overall heat-transfer coefficient `K`, calculate the logarithmic mean temperature difference, and choose a heat exchanger for common food products.

---

## 1. Why Heat Transfer Matters

Heat transfer controls food safety, product quality and energy efficiency. Milk must be pasteurised without cooked flavour, juice must be heated while preserving aroma, jam must be cooked without burn-on, and beverages must be cooled reliably.

The engineering question is: **how do we transfer the required heat in the required time without damaging the product?**

---

## 2. Heat-Transfer Mechanisms

![Three heat-transfer mechanisms](/images/lectures/heat-exchange/heat-transfer-modes.svg)

| Mechanism | Where it appears | What matters |
|---|---|---|
| **Conduction** | wall, fouling layer, stagnant product layer | material, thickness, deposits |
| **Convection** | flowing milk, water, juice, air or steam | velocity, regime, viscosity |
| **Radiation** | ovens, dryers, hot surfaces | surface temperature and emissivity |

---

## 3. Heat Balance

For heating without phase change:

```text
Q = G · c · (t_out - t_in)
```

For steam heating, a first estimate is:

```text
Q = D · r
```

where `D` is steam flow rate and `r` is latent heat of condensation.

---

## 4. Main Heat-Transfer Equation

```text
Q = K · F · Δt_mean
```

Increasing heat duty requires a larger area, larger temperature driving force or higher `K`. In food processing, each option has limits: high temperature can damage product, area costs money, and higher velocity increases pressure drop and sometimes foaming.

---

## 5. What Is Inside `K`

```text
K = 1 / (1/α₁ + δ/λ + r_f + 1/α₂)
```

`K` decreases when product is viscous, the wall fouls, the wall is thick, or fluid velocity is too low. Fouling is central in milk, juices, purees and sauces, so hygienic design and CIP are part of the calculation.

---

## 6. Temperature Driving Force

![Temperature profiles for parallel and counter flow](/images/lectures/heat-exchange/flow-temperature-profiles.svg)

```text
Δt_mean = (Δt_large - Δt_small) / ln(Δt_large / Δt_small)
```

Counter-current flow is usually more efficient than parallel flow. Regeneration sections in pasteurisation systems use hot treated product to preheat cold incoming product.

Further reading: [Tetra Pak Dairy Processing Handbook: Heat exchangers](https://dairyprocessinghandbook.tetrapak.com/chapter/heat-exchangers).

---

## 7. Selecting a Food Heat Exchanger

![Food heat exchanger selection](/images/lectures/heat-exchange/food-heat-exchanger-selection.svg)

| Equipment | Suitable for | Examples |
|---|---|---|
| **Plate heat exchanger** | low-viscosity products without large particles | milk, low-viscosity cream, clear juices, beer |
| **Tubular heat exchanger** | products with particles or higher viscosity | purees, pulpy juices, sauces |
| **Scraped-surface exchanger** | viscous, sticky or burn-on-prone products | creams, jams, pastes, processed cheese |
| **Jacketed vessel** | batch heating, cooking, tempering | syrups, fillings, cooking kettles |

Industrial examples: [Alfa Laval heat transfer equipment](https://www.alfalaval.com/products/heat-transfer/) and [GEA heat exchangers](https://www.gea.com/en/products/heat-exchangers/).

---

## Example

Heat milk from `10 °C` to `72 °C`, with `G = 1.2 kg/s` and `c = 3900 J/(kg·K)`.

```text
Q = 1.2 · 3900 · (72 - 10) = 290 160 W ≈ 290 kW
```

Regeneration can greatly reduce external steam demand.

---

## Key Takeaways

- Heat transfer in food processing is always linked to product quality.
- The core equation is `Q = K · F · Δt_mean`.
- `K` includes film coefficients, wall resistance and fouling.
- Counter-current flow and heat regeneration save energy.
- Equipment choice depends on viscosity, particles, burn-on risk and hygiene.
