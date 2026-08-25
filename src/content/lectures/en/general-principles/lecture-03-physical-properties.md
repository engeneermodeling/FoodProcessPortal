---
title: "Physical Properties of Food Substances"
topic: "general-principles"
topic_title: "General Principles"
lecture: 3
slug: "lecture-03-physical-properties"
locale: "en"
description: "Density, viscosity, heat capacity, thermal conductivity and other properties of food products — milk, juices, oils, sugar solutions, meat. Methods of calculation and reference data."
keywords: ["density of food products", "milk viscosity", "heat capacity", "thermal conductivity", "rheology", "non-Newtonian fluids"]
duration: "55 min"
difficulty: "basic"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Lecture 3. Physical Properties of Food Substances

## What You Will Learn

After this lecture you will be able to:

- find and correctly use **density, viscosity, heat capacity and thermal conductivity** for major food products
- explain the difference between **Newtonian and non-Newtonian fluids** and give food examples for each type
- calculate physical properties of **mixtures and solutions** from composition
- explain the concept of **physical-chemical boiling point depression** and why it is needed for evaporator calculations
- independently find required data in **handbooks and databases**

---

## 1. Why Do Engineers Need Physical Properties?

Any engineering calculation — heat exchanger size, pump power, drying time — requires numerical values of product properties. Without them, the calculation is impossible.

Compare three fluids found in food production:

| Property | Water (20°C) | Milk (20°C) | Sunflower Oil (20°C) |
|---|---|---|---|
| Density ρ, kg/m³ | 998 | 1030 | 920 |
| Viscosity μ, mPa·s | 1,0 | 2,1 | 50–80 |
| Heat capacity cp, kJ/(kg·K) | 4,18 | 3,93 | 1,97 |
| Thermal conductivity λ, W/(m·K) | 0,60 | 0,55 | 0,17 |
| Prandtl Number Pr | 7,0 | 12 | 600–900 |

These differences are enormous. A pump for milk and a pump for oil are fundamentally different equipment. The heat exchanger for milk pasteurization and for heating oil have different surface area and design. That's why physical properties are the foundation of any calculation.

> 💡 **Important:** Physical properties of food products **depend on temperature and composition**. Never use values at room temperature for calculations at 80°C — the error can be 30–50%.

![Map of food physical properties used in engineering calculations](/images/lectures/general-principles/food-properties-map.svg)

---

## 2. Ways of Expressing Mixture Composition

Before talking about properties, you need to understand how to specify the composition of a mixture. In the food industry, three ways are used.

### 2.1 Mass Fraction

$$x_m = \frac{G_i}{G}$$

where $G_i$ is the mass of component, $G$ is the mass of mixture.

**Example:** Corn syrup contains 300 g of sucrose and 700 g of water. Mass fraction of sucrose: $x_m = 300/1000 = 0{,}30$ (or 30%).

Mass fraction **does not depend on temperature and pressure** — this is its advantage.

### 2.2 Volume Fraction

$$x_V = \frac{V_i}{V}$$

Convenient for gas mixtures (e.g., air composition). For liquids, mass fraction is typically used.

### 2.3 Mole Fraction

$$x_M = \frac{N_i}{N}$$

where $N_i$ is the number of moles of component. Used in thermodynamic calculations and distillation.

### Conversion Between Fractions

Mass → mole (for two-component system a+b):

$$x_{m,a} = \frac{x_{M,a} \cdot M_a}{x_{M,a} \cdot M_a + x_{M,b} \cdot M_b}$$

Mass → volume:

$$x_{V,a} = x_{m,a} \cdot \frac{\rho_{mixture}}{\rho_a}$$

---

## 3. Density

### 3.1 Physical Meaning and Units

Density is the mass of unit volume:

$$\rho = \frac{m}{V}, \quad [\text{kg/m}^3]$$

It appears in material balance equations, Reynolds criterion, pressure calculations, and pump power calculations.

### 3.2 Reference Data — Major Food Products

| Product | t, °C | ρ, kg/m³ | Note |
|---|---|---|---|
| Water | 20 | 998 | Standard |
| Water | 80 | 972 | Decreases with heating |
| Unskimmed milk | 20 | 1027–1033 | Depends on fat content |
| Skim milk | 20 | 1033–1038 | Higher ρ — less fat |
| Cream 35% | 20 | 994–1003 | Close to water |
| Pasteurized milk | 72 | ~1010 | At pasteurization temperature |
| Sugar syrup 10% | 20 | 1040 | |
| Sugar syrup 50% | 20 | 1230 | |
| Sugar syrup 70% | 20 | 1347 | |
| Orange juice | 20 | 1045–1065 | Depends on solids content |
| Tomato paste 30% | 20 | 1100–1130 | |
| Sunflower oil | 20 | 915–920 | |
| Sunflower oil | 60 | 895 | |
| Olive oil | 20 | 910–916 | |
| Beef meat | 5 | 1050–1080 | |
| Honey | 20 | 1380–1450 | |
| Beer | 20 | 1008–1020 | |
| Wine | 20 | 985–1000 | Depends on alcohol |
| Ethanol | 20 | 789 | |
| Lactic acid | 20 | 1209 | |

### 3.3 Temperature Effect

For liquids and solutions, density **decreases** with temperature increase (exception — water between 0 and 4°C). Approximate formula:

$$\rho_t = \rho_{20} \cdot [1 - \beta \cdot (t - 20)]$$

where $\beta$ is the volumetric expansion coefficient ($\beta \approx (3{,}5-5) \cdot 10^{-4}$ K⁻¹ for water-based solutions).

### 3.4 Density of Mixtures

For two-component system (components a and b):

$$\rho_{mixture} = \frac{1}{\dfrac{x_{m,a}}{\rho_a} + \dfrac{x_{m,b}}{\rho_b}}$$

**Example:** Unskimmed milk (3.5% fat). Fat: $\rho_a = 925$ kg/m³, $x_{m,a} = 0{,}035$. Skim portion: $\rho_b = 1036$ kg/m³, $x_{m,b} = 0{,}965$.

$$\rho_{milk} = \frac{1}{\frac{0{,}035}{925} + \frac{0{,}965}{1036}} \approx 1030 \text{ kg/m}^3$$

🔗 **Online calculator:** [Food Grade Density Calculator — % composition → ρ](https://www.engineeringtoolbox.com/density-solutions-d_1652.html)

---

## 4. Viscosity

### 4.1 Newton's Law and Fluid Types

Viscosity is the resistance of a fluid to shear deformation. Newton's law:

$$\tau = \mu \cdot \frac{dv}{dy}$$

where $\tau$ is shear stress, Pa; $\mu$ is dynamic viscosity, Pa·s; $dv/dy$ is velocity gradient (shear rate), s⁻¹.

**Kinematic viscosity:**

$$\nu = \frac{\mu}{\rho}, \quad [\text{m}^2/\text{s}]$$

### 4.2 Newtonian and Non-Newtonian Fluids

This is a **crucial distinction** for the food industry!

**Newtonian fluids** have constant viscosity independent of shear rate:

| Fluid | Example |
|---|---|
| Water, juices, milk, beer, wine | Simple Newtonian behavior |
| Plant oils | Newtonian, but viscosity strongly depends on t |
| Sugar, salt solutions | Newtonian |

**Non-Newtonian fluids** have viscosity depending on shear rate:

| Type | Behavior | Food Examples |
|---|---|---|
| **Shear-thinning (pseudoplastic)** | Viscosity **decreases** with mixing | Tomato sauce, ketchup, yogurt, mayonnaise, fruit puree |
| **Shear-thickening (dilatant)** | Viscosity **increases** with mixing | Cornstarch suspensions (thick jelly) |
| **Plastic (Bingham)** | Minimum stress needed to start flow | Tomato paste, chocolate, butter |
| **Thixotropic** | Viscosity decreases with time at constant shear | Honey (when stirring), some yogurts |

> 🌟 **Practical significance:** Ketchup is shear-thinning. That's why it doesn't "drip" from the bottle until you hit it — requires stress to initiate flow, then viscosity drops sharply. This phenomenon is **thixotropy** plus **plasticity**.

![Flow curves for different types of food fluids](/images/lectures/general-principles/rheology-food-curves.svg)

🔗 **Read more:** [Dairy Processing Handbook: Rheology](https://dairyprocessinghandbook.tetrapak.com/chapter/rheology) — a practical chapter on rheology of dairy and semi-fluid food products.

### 4.3 Reference Data — Food Product Viscosities

| Product | t, °C | μ, mPa·s | Type |
|---|---|---|---|
| Water | 20 | 1,002 | Newtonian. |
| Water | 60 | 0,467 | Newtonian. |
| Water | 80 | 0,355 | Newtonian. |
| Unskimmed milk | 20 | 2,0–2,5 | Newtonian. |
| Unskimmed milk | 60 | 0,9–1,1 | Newtonian. |
| Cream 35% | 20 | 10–15 | Newtonian. |
| Sunflower oil | 20 | 50–80 | Newtonian. |
| Sunflower oil | 60 | 15–25 | Newtonian. |
| Olive oil | 20 | 70–120 | Newtonian. |
| Apple juice | 20 | 2,0–3,0 | Newtonian. |
| Tomato sauce | 20 | 50–200 | Shear-thinning |
| Tomato paste 30% | 20 | 1 000–5 000 | Plastic |
| Honey | 20 | 3 000–10 000 | Thixotropic |
| Honey | 40 | 200–800 | Thixotropic. |
| Chocolate | 40 | 5 000–20 000 | Plastic |
| Mayonnaise | 20 | 5 000–100 000 | Shear-thinning |
| Bread dough | 25 | 10⁵–10⁶ | Shear-thinning |
| Glucose syrup 80% | 20 | ~100 000 | Newtonian |

### 4.4 Temperature Effect on Viscosity

For liquids, viscosity **drops sharply** with temperature increase. Approximate formula:

$$\mu_t = \mu_{20} \cdot e^{-b(t-20)}$$

where $b$ is an empirical constant ($b \approx 0{,}028$ °C⁻¹ for water).

**Practical significance:** Before pumping viscous food products (honey, molasses, chocolate), they are **heated** — viscosity drops by 5–20 times, the pump handles it easily.

> **Do not confuse:** for non-Newtonian products, calculations often use not a "table" viscosity, but an **effective viscosity** at the shear rate that actually occurs in the pipe, pump, mixer, or heat exchanger.

### 4.5 Viscosity of Mixtures

**Gas mixtures** (approximate formula):

$$\frac{1}{\mu_{mixture}} = \frac{x_1}{\mu_1} + \frac{x_2}{\mu_2} + \ldots$$

**Suspension of immiscible liquids:**

$$\lg \mu_{mixture} = x_1 \lg \mu_1 + x_2 \lg \mu_2$$

**Dilute suspensions** (Einstein formula):

$$\mu_{suspension} = \mu_{liq} \cdot (1 + 4{,}5 \cdot x_V)$$

where $x_V$ is volume fraction of solid phase. Valid for $x_V < 0{,}05$.

**Example:** Milk is a suspension of fat droplets in plasma. With fat content 3.5% (volume fraction of fat ~4%) the Einstein formula gives:

$$\mu_{milk} = \mu_{plasma} \cdot (1 + 4{,}5 \cdot 0{,}04) = 1{,}9 \cdot 1{,}18 \approx 2{,}2 \text{ mPa·s}$$

This matches measured values!

---

## 5. Specific Heat Capacity

### 5.1 Definition

Specific heat capacity $c_p$ is the amount of heat required to heat 1 kg of substance by 1 K at constant pressure:

$$Q = m \cdot c_p \cdot \Delta T$$

Units: J/(kg·K) or kJ/(kg·K).

It appears in Reynolds criterion, energy balance equations, steam consumption calculations.

### 5.2 Reference Data

| Product | t, °C | cp, kJ/(kg·K) |
|---|---|---|
| Water | 20 | 4,18 |
| Water | 80 | 4,20 |
| Water vapor | 100 | 2,01 |
| Unskimmed milk | 20 | 3,93 |
| Skim milk | 20 | 3,97 |
| Cream 35% | 20 | 3,60 |
| Butter | 20 | 2,05 |
| Apple juice | 20 | 3,85 |
| Sugar syrup 10% | 20 | 3,85 |
| Sugar syrup 50% | 20 | 3,14 |
| Sugar syrup 70% | 20 | 2,72 |
| Sunflower oil | 20 | 1,97 |
| Olive oil | 20 | 2,00 |
| Beef meat | 5 | 3,52 |
| Fish | 5 | 3,60 |
| Chicken egg | 20 | 3,14 |
| Wheat flour | 20 | 1,76 |
| Sugar (solid) | 20 | 1,25 |
| Salt (NaCl) | 20 | 0,88 |
| Ice | 0 | 2,09 |

> 💡 **Why is water's heat capacity the highest?** 4,18 kJ/(kg·K) is a record value for most substances. That's why water is the best coolant, and moisture-rich food products heat and cool slowly.

### 5.3 Calculating Heat Capacity of Mixtures

Additivity rule works well for most food systems:

$$c_{p,mixture} = \sum x_{m,i} \cdot c_{p,i}$$

**Example:** Unskimmed milk (87% water, 3.5% fat, 4.8% lactose, 3.2% protein, 0.7% ash):

$$c_p = 0{,}87 \cdot 4{,}18 + 0{,}035 \cdot 2{,}05 + 0{,}048 \cdot 1{,}26 + 0{,}032 \cdot 2{,}00 + 0{,}007 \cdot 0{,}88$$

$$c_p \approx 3{,}64 + 0{,}072 + 0{,}060 + 0{,}064 + 0{,}006 \approx 3{,}84 \text{ kJ/(kg·K)}$$

Compare with table value 3,93 — difference is about 2%, which is quite acceptable for engineering calculations.

### 5.4 Sibbison Formula for Food Products

For food products with known mass fraction of moisture $w$:

$$c_p = 4{,}18 \cdot w + 1{,}25 \cdot (1 - w)$$

**Example:** Apple (moisture 85%):

$$c_p = 4{,}18 \cdot 0{,}85 + 1{,}25 \cdot 0{,}15 = 3{,}55 + 0{,}19 = 3{,}74 \text{ kJ/(kg·K)}$$

---

## 6. Thermal Conductivity

### 6.1 Fourier's Law

Thermal conductivity $\lambda$ characterizes the ability of a material to conduct heat. Fourier's law:

$$q = -\lambda \cdot \frac{dT}{dx}$$

Units: W/(m·K).

It appears in Nusselt and Prandtl criteria, in equations for heat transfer through equipment walls.

### 6.2 Range of Values

| Material class | λ, W/(m·K) | Temperature dependence |
|---|---|---|
| Liquid metals (Hg, Na) | 10–80 | Increases |
| Metal equipment walls | 10–400 | Weak dependence |
| Water | 0,58–0,68 | Increases |
| Water-based food solutions | 0,40–0,65 | Decreases |
| Plant oils | 0,15–0,18 | Decreases |
| Air | 0,024–0,031 | Increases |
| Thermal insulation | 0,023–0,10 | Increases |
| Food products (overall) | 0,10–0,60 | Depends on composition |

### 6.3 Reference Data — Food Products

| Product | t, °C | λ, W/(m·K) |
|---|---|---|
| Water | 20 | 0,598 |
| Water | 80 | 0,670 |
| Unskimmed milk | 20 | 0,530–0,560 |
| Skim milk | 20 | 0,560–0,580 |
| Cream 35% | 20 | 0,380–0,420 |
| Butter | 20 | 0,170–0,200 |
| Apple juice | 20 | 0,550 |
| Sugar syrup 10% | 20 | 0,570 |
| Sugar syrup 50% | 20 | 0,450 |
| Sunflower oil | 20 | 0,167 |
| Beef | 5 | 0,41–0,49 |
| Fish | 5 | 0,44–0,50 |
| Potato | 20 | 0,55 |
| Apple | 20 | 0,42–0,58 |
| Wheat flour | 20 | 0,18–0,22 |
| Bread | 25 | 0,15–0,20 |
| Ice | 0 | 2,22 |

> 💡 **Ice is 4 times more thermally conductive than water!** That's why frozen products heat faster on the outside (where ice transitions to water with low λ) and slower inside. This complicates thawing of large meat pieces.

### 6.4 Thermal Conductivity of Mixtures and Disperse Systems

For two-phase systems (liquid + solid particles or liquid + gas):

**Parallel layers model** (upper bound):

$$\lambda_{mixture} = x_V \cdot \lambda_1 + (1 - x_V) \cdot \lambda_2$$

**Series layers model** (lower bound):

$$\frac{1}{\lambda_{mixture}} = \frac{x_V}{\lambda_1} + \frac{1 - x_V}{\lambda_2}$$

For food products, the real value lies between these bounds.

---

## 7. Physical-Chemical Boiling Point Depression

### 7.1 The Phenomenon

When a substance is dissolved in water (sugar, salt, lactose), **boiling point of the solution is higher** than pure water at the same pressure. The difference:

$$\Delta = T_{boil,solution} - T_{boil,water}$$

is called **physical-chemical depression**.

### 7.2 Why It Is Important for Food Industry

In **evaporation** (concentrating milk, juice, sugar syrup), the effective temperature difference in the evaporator **decreases** by the depression value:

$$\Delta t_{eff} = t_{steam} - t_{boiling} = t_{steam} - (t_{boil,pure water} + \Delta)$$

That is, the higher the solution concentration, the greater the depression → lower process driving force → slower evaporation.

### 7.3 Reference Data

| Solution | Concentration, % | Δ at 1 atm, °C |
|---|---|---|
| Sugar solution (sucrose) | 10 | 0,15 |
| Sugar solution | 30 | 0,51 |
| Sugar solution | 50 | 1,04 |
| Sugar solution | 70 | 2,60 |
| NaCl (salt) | 10 | 0,87 |
| NaCl | 20 | 2,00 |
| Unskimmed milk | — | 0,15–0,18 |
| Milk serum | — | 0,35–0,40 |
| Apple juice | 15°Brix | 0,20 |
| Orange concentrate | 65°Brix | 1,2–1,5 |

> 💡 **In jam production:** sugar raises boiling point. At concentration 60–70% sugar, jam boils at ~104–106°C instead of 100°C. That's why at this temperature pectin forms a gel — without depression, jam wouldn't gel!

### 7.4 Pressure Effect

In vacuum evaporators, pressure is below atmospheric → boiling point of water is lower. But depression changes! Correction factor:

$$\Delta_p = \Delta_{atm} \cdot k$$

where $k$ is a factor depending on pressure (taken from reference books). At vacuum, $k > 1$ — depression increases.

---

## 8. Other Important Properties

### 8.1 Latent Heat of Vaporization

When liquid boils, it absorbs **latent heat of vaporization** $r$:

| Substance | Boiling point, °C | r, kJ/kg |
|---|---|---|
| Water | 100 (1 atm) | 2257 |
| Water | 60 (0,2 atm) | 2358 |
| Water | 120 (2 atm) | 2203 |
| Ethanol | 78 | 841 |

The high latent heat of water vapor is why water vapor is the best heat carrier in food industry.

### 8.2 Surface Tension

Surface tension $\sigma$ is important for:
- foaming (beer, milk, ice cream)
- dispersion of fat droplets in homogenization
- spray dryer operation (droplet size)

| Fluid | t, °C | σ, mN/m |
|---|---|---|
| Water | 20 | 72,8 |
| Water | 60 | 66,2 |
| Milk | 20 | 42–52 |
| Sunflower oil | 20 | 25–35 |
| Ethanol | 20 | 22,3 |

### 8.3 Thermal Diffusivity

$$a = \frac{\lambda}{\rho \cdot c_p}, \quad [\text{m}^2/\text{s}]$$

Characterizes the speed of temperature equalization in the material. It appears in the Péclet criterion.

| Material | a, m²/s |
|---|---|
| Water (20°C) | 1,43·10⁻⁷ |
| Milk (20°C) | ~1,30·10⁻⁷ |
| Meat | ~1,0–1,4·10⁻⁷ |
| Oil | ~0,9·10⁻⁷ |

---

## 9. Where to Find Reference Data

### Online Databases

- 🔗 [NIST WebBook](https://webbook.nist.gov) — properties of pure substances (water, alcohols, organic compounds)
- 🔗 [Engineering ToolBox](https://www.engineeringtoolbox.com) — wide range of food and industrial fluids
- 🔗 [USDA FoodData Central](https://fdc.nal.usda.gov) — composition of food products (important for heat capacity calculation)
- 🔗 [Food Process Engineering Database — eFood Lab](https://www.efoodlab.com) — thermo-physical properties of food products

### Specialized Handbooks

- 🔗 **Rao M.A. — Rheology of Fluid and Semisolid Foods** — food rheology
- 🔗 **Choi Y., Okos M.R.** — equations for calculating thermal properties of food components
- 🔗 **Perry's Chemical Engineers' Handbook** — section on physical properties

### Measurement Methods

- Viscosity: **rotational viscometer** (Brookfield), **vibrating**, **capillary**
- Thermal conductivity: **hot wire method**, **plate calorimeter**
- Heat capacity: **differential scanning calorimetry (DSC)**

🔗 **Practical reading:** [Tetra Pak: viscous products and heat transfer](https://www.tetrapak.com/en-us/insights/cases-articles/viscous-products-and-heat-transfer) — why viscosity measurement for food products must be connected to temperature, shear rate, and heat-exchanger design.

---

## Summary

**Four key physical properties:**

| Property | Symbol | Units | Where Used |
|---|---|---|---|
| Density | ρ | kg/m³ | Material balance, Re, hydrodynamics |
| Viscosity | μ, ν | Pa·s, m²/s | Re, pump calculations, flow regime |
| Heat capacity | cp | kJ/(kg·K) | Energy balance, Pr |
| Thermal conductivity | λ | W/(m·K) | Nu, Pr, wall thermal conductivity |

**Two types of fluids:**
- **Newtonian:** water, milk, juices, sugar solutions, oils → constant viscosity
- **Non-Newtonian:** tomato paste, mayonnaise, dough, ketchup → viscosity depends on shear

**Physical-chemical boiling point depression:** increases boiling temperature of solutions compared to pure water → reduces effective temperature gradient in evaporators.

---

## Self-Assessment Questions

1. Sugar syrup contains 40% sucrose (ρ = 1590 kg/m³) and 60% water (ρ = 998 kg/m³). Calculate the density of the syrup.

2. Why is honey so viscous at 20°C but easily flows at 40°C? What type of rheological behavior is characteristic for honey?

3. Milk is heated from 4°C to 72°C in a pasteurizer. Milk flow is 2000 kg/h, cp = 3,93 kJ/(kg·K). How much heat (kW) is required?

4. What is the Prandtl number for sunflower oil at 20°C, if cp = 1970 J/(kg·K), μ = 65 mPa·s, λ = 0,167 W/(m·K)? Compare with water (Pr = 7). What does this mean for heat exchanger calculations?

5. Why in production of concentrated milk in a vacuum evaporator does milk boil at 55–60°C instead of 100°C? What is the physical-chemical depression if the final dry matter concentration is 73%?

---

## Next Lecture

**Lecture 4 → Fundamentals of Hydrostatics**

Laws of equilibrium of liquids, hydrostatic pressure, Pascal's law — and how this is used in measuring instruments and equipment design calculations in food production.
