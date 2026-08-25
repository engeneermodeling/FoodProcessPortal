---
title: "Drying Air and Dryer Calculation"
topic: "mass-transfer"
topic_title: "Mass Transfer Processes"
lecture: 16
description: "Humid air, humidity ratio, relative humidity, enthalpy, I-d chart, drying-air flow rate, material and heat balance of a dryer."
keywords: ["drying air", "humid air", "I-d chart", "air enthalpy", "humidity ratio", "dryer calculation", "drying balance"]
duration: "60 min"
difficulty: "intermediate"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Lecture 16. Drying Air and Dryer Calculation

## Learning Outcomes

After this lecture you will be able to explain humid-air parameters, read the typical air path in a dryer, calculate dry-air flow from evaporated water and build a simplified dryer heat balance.

---

## 1. Why Drying Air Matters

Air supplies heat, accepts water vapour, removes vapour from the drying zone and affects product temperature, aroma loss and oxidation.

![Humid-air parameters for drying](/images/lectures/mass-transfer/humid-air-parameters.svg)

| Parameter | Symbol | Meaning |
|---|---|---|
| **Temperature** | `t` | thermal state |
| **Relative humidity** | `φ` | closeness to saturation |
| **Humidity ratio** | `d` | kg vapour per kg dry air |
| **Enthalpy** | `I` | heat content per kg dry air |
| **Dew point** | `t_dp` | condensation risk temperature |

---

## 2. Air Moisture Balance

If air enters with `d₁` and leaves with `d₂`, each kg of dry air carries:

```text
d₂ - d₁
```

kg of water vapour. For evaporated water `W`:

```text
L = W / (d₂ - d₁)
```

where `L` is dry-air flow rate.

---

## 3. Air Path

![Air path in a dryer on an I-d chart](/images/lectures/mass-transfer/drying-air-path.svg)

Heating in a coil increases temperature and enthalpy while `d` is almost constant. During drying, air gains vapour and moves toward higher `d`.

---

## 4. Dryer Balance

![Material and heat balance of a dryer](/images/lectures/mass-transfer/dryer-balance.svg)

```text
G₁ · (1 - w₁) = G₂ · (1 - w₂)
W = G₁ - G₂
W = L · (d₂ - d₁)
Q = L · (I₂ - I₁)
```

Real dryers also include heat losses, heating of the material and equipment, recirculation and exhaust-air treatment.

---

## Example

Remove `W = 120 kg/h` of water. Air enters with `d₁ = 0.010` and leaves with `d₂ = 0.035 kg/kg dry air`.

```text
L = 120 / (0.035 - 0.010) = 4800 kg dry air/h
```

---

## Recirculation

Recirculation saves heat and stabilises operation, but increases humidity and can accumulate aroma compounds, dust and volatile substances. In food drying, sanitation, filtration, dust control and fire safety matter as much as energy saving.

---

## Key Takeaways

- Drying air carries both heat and water vapour.
- The core air balance is `W = L · (d₂ - d₁)`.
- Heating increases enthalpy and lowers relative humidity.
- Recirculation saves heat but needs sanitation and dust control.
- Dryer calculations must always be checked against product quality.
