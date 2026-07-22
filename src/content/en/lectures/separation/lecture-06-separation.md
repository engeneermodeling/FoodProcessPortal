---
title: "Separation of Heterogeneous Systems"
topic: "separation"
topic_title: "Separation of Heterogeneous Systems"
lecture: 6
slug: "lecture-06-separation"
locale: "en"
description: "Suspensions, emulsions and foams in food industry. Sedimentation, Stokes' and Archimedes' laws. Filtration under pressure and vacuum. Centrifugation and separation — milk, juice, oil, beer."
keywords: ["suspension separation", "sedimentation", "filtration", "centrifugation", "Stokes' law", "separator", "milk separator", "filter press", "food industry"]
duration: "65 min"
difficulty: "intermediate"
author: "FoodProcessPortal"
updated: "2026-07-09"
---

# Lecture 6. Separation of Heterogeneous Systems

## What You Will Learn

After this lecture you will be able to:

- classify **heterogeneous systems** and give food examples for each type
- calculate the **sedimentation velocity** of particles using Stokes' law and Archimedes' criterion
- determine the **productivity of a sedimentation tank** based on surface area of sedimentation
- explain the driving force of **filtration** and calculate filter flux
- select the correct filter type for a specific food product
- explain the principle of operation of a **milk separator** and calculate the separation factor

---

## 1. Heterogeneous Systems in Food Industry

Food production constantly deals with heterogeneous systems — mixtures of two or more phases. They need to be separated, or conversely, combined (but we'll cover that later).

### 1.1 Classification of Heterogeneous Systems

```
HETEROGENEOUS SYSTEMS
├── GASEOUS (gas + solid or liquid particles)
│   ├── Dust — dry milk, flour, powder in air
│   ├── Mist — droplets of moisture in dryers
│   └── Smoke — flue gases from boilers
└── LIQUID
    ├── Suspensions — liquid + solid particles
    │   ├── Coarse (> 100 μm) — coarse meal, grain grindings
    │   ├── Fine (0.5–100 μm) — tomato juice, fruit puree
    │   └── Colloidal (< 0.5 μm) — wine, beer after fermentation
    ├── Emulsions — liquid + liquid (milk: fat in plasma)
    └── Foams — liquid + gas (beer foam, milk foam)
```

**Key characteristic of suspensions** — viscosity described by **Boussinesq's formula**:

$$\mu_{susp} = \mu_0 \cdot (1 + 4{,}5 \cdot x_V)$$

where $\mu_0$ is the viscosity of the continuous phase, $x_V$ is the volume fraction of solid phase.

> 💡 For $x_V > 0{,}5$ (very dense suspensions) this formula no longer applies — rheological models (Bingham or Herschel-Bulkley) are needed.

### 1.2 Separation Methods — Overview

| Method | Driving Force | For what |
|---|---|---|
| **Sedimentation** | Gravity | Coarse suspensions (large Δρ, d > 50 μm) |
| **Filtration** | Pressure difference | Any suspensions, solid particles > 0.1 μm |
| **Centrifugation** | Centrifugal force | Fine suspensions and emulsions (milk, juice) |
| **Membrane separation** | Pressure difference | Ultra- and micro-filtration |
| **Flotation** | Surface tension | Hard-to-settle particles |

---

## 2. Sedimentation (Settling under Gravity)

### 2.1 Forces Acting on a Particle

On a spherical particle in a fluid, three forces act:

$$G - A = R$$

where:
- $G = \frac{\pi d^3}{6} \rho_1 g$ — gravitational force
- $A = \frac{\pi d^3}{6} \rho_2 g$ — Archimedes' force (buoyancy)
- $R = \xi \cdot \frac{\pi d^2}{4} \cdot \frac{\rho_2 w_0^2}{2}$ — drag force from the medium

By equating $(G - A)$ to $R$, we obtain the **general settling velocity equation**:

$$w_0 = \sqrt{\frac{4 g d (\rho_1 - \rho_2)}{3 \xi \rho_2}}$$

where $\xi$ is the drag coefficient, which depends on flow regime (Reynolds number).

### 2.2 Three Settling Regimes and Drag Coefficient

| Regime | Condition | $\xi$ |
|---|---|---|
| Laminar (Stokes) | $Re < 2$ | $24/Re$ |
| Transitional (Allen) | $2 < Re < 500$ | $18{,}5/Re^{0{,}6}$ |
| Turbulent (Newton) | $500 < Re < 150\,000$ | $0{,}44$ = constant |

### 2.3 Stokes' Method (Laminar Settling)

Substituting $\xi = 24/Re$ into the general equation:

$$\boxed{w_0 = \frac{g d^2 (\rho_1 - \rho_2)}{18 \mu}}$$

**Stokes' formula** — most important for food production where particles are small.

**Conclusions from Stokes' formula:**
- $w_0 \sim d^2$ — doubling particle size → **velocity increases 4 times**
- $w_0 \sim (\rho_1 - \rho_2)$ — larger density difference → faster settling
- $w_0 \sim 1/\mu$ — higher viscosity → slower settling
- Heating reduces viscosity → settling accelerates

**Maximum particle size for Stokes' law applicability** — when $Re = 2$:

$$d_{max} = 1{,}54 \cdot \sqrt[3]{\frac{\mu^2}{\rho_2 (\rho_1 - \rho_2) g}}$$

### 2.4 Archimedes' Criterion Method (Universal Method)

When it's unknown whether Stokes' or another regime applies, we use Archimedes' criterion:

$$Ar = \frac{g d^3 \rho_2 (\rho_1 - \rho_2)}{\mu^2}$$

Depending on $Ar$, we find $Re$:

| Condition | Formula for $Re$ |
|---|---|
| $Ar \leq 36$ (Stokes regime) | $Re = Ar/18$ |
| $36 < Ar < 83500$ (transitional) | $Re = 0{,}153 \cdot Ar^{0{,}714}$ |
| $Ar > 83500$ (turbulent) | $Re = 1{,}74\sqrt{Ar}$ |

Knowing $Re$, we find velocity:

$$w_0 = \frac{Re \cdot \mu}{\rho_2 \cdot d}$$

### 2.5 Practical Example — Fat Droplet Settling in Milk

Unskimmed milk has been standing still. Fat droplets ($\rho_1 = 910$ kg/m³) float up in milk plasma ($\rho_2 = 1035$ kg/m³, $\mu = 2{,}0\cdot10^{-3}$ Pa·s).

Average fat droplet diameter $d = 4$ μm $= 4 \cdot 10^{-6}$ m.

**Step 1.** Archimedes' criterion:
$$Ar = \frac{9{,}81 \cdot (4 \cdot 10^{-6})^3 \cdot 1035 \cdot (1035 - 910)}{(2{,}0 \cdot 10^{-3})^2}$$
$$Ar = \frac{9{,}81 \cdot 64 \cdot 10^{-18} \cdot 1035 \cdot 125}{4 \cdot 10^{-6}} = 2{,}05 \cdot 10^{-8}$$

Since $Ar \ll 36$ — Stokes regime.

**Step 2.** Settling velocity (Stokes formula, $\rho_1 < \rho_2$ → droplet floats):
$$w_0 = \frac{9{,}81 \cdot (4 \cdot 10^{-6})^2 \cdot |1035 - 910|}{18 \cdot 2{,}0 \cdot 10^{-3}} = \frac{9{,}81 \cdot 16 \cdot 10^{-12} \cdot 125}{0{,}036}$$
$$w_0 = \frac{1{,}962 \cdot 10^{-8}}{0{,}036} \approx 5{,}5 \cdot 10^{-7} \text{ m/s} \approx 0{,}05 \text{ mm/h}$$

**Conclusion:** Fat droplet floats at only 0,05 mm/h — settling of milk takes **several hours**. That's why natural (unhomogenized) milk separates when standing.

> 💡 **Industrial homogenization** crushes fat droplets from 4 μm to 0,1–0,5 μm. Settling velocity decreases proportionally to $d^2$ — by **64–1600 times**. Milk becomes stable.

📺 **Video:** [Why does milk separate — and what is homogenization?](https://www.youtube.com/results?search_query=milk+fat+separation+homogenization+explained)

### 2.6 Sedimentation Tank Productivity

Productivity (volume of clarified liquid per unit time) depends only on **surface area of sedimentation** $F$ and **settling velocity** $w_0$:

$$V = F \cdot w_0$$

**Key conclusion:** to increase sedimentation tank productivity — increase surface area, not height. That's why sedimentation tanks are made **wide and low**, or **multi-stage**.

**Example** — a multi-stage sedimentation tank at a sugar plant. Instead of one large low reservoir — 5 stages with height. Total surface area for sedimentation × 5, footprint minimal.

### 2.7 Sedimentation Tank Constructions

**Periodic-action sedimentation tank** — cylindrical tank with conical bottom. Feeding, settling, decanting of supernatant, removal of sediment. Application: small productions, winemaking.

**Semi-continuous sedimentation tank** — continuous feed, continuous supernatant removal, periodic sediment removal. Condition for complete settling: $\tau_{settling} \leq \tau_{residence} = l/w_l$.

**Continuous-action sedimentation tank** — everything continuous. Typical: low cylinder with conical bottom and scraping auger for moving sediment to center. Application: sugar factories.

---

## 3. Filtration

### 3.1 Filtration Principle and Driving Force

Filtration is the passage of liquid through a porous barrier that retains solid particles. The driving force is the **pressure difference** $\Delta p = p_1 - p_2$ across the barrier.

**Two types of filtration:**
- **With cake formation** — particles accumulate as a layer on filter surface. For suspensions with high solid content (> 1%).
- **Straining (inclusion)** — particles block pores of filter medium from inside. For dilute suspensions (< 0,1% solid).

**Ways to create driving force:**

| Method | $\Delta p$ | Examples |
|---|---|---|
| Hydrostatic pressure | 0,01–0,1 atm | Sand filter, self-priming filtration |
| Excess pressure (pump) | 1–10 atm | Filter presses, pressure filters |
| Vacuum | up to 0,9 atm | Drum vacuum filters |
| Centrifugal force | equiv. 1–100 atm | Filter centrifuges |

### 3.2 Filtration Rate

Filtration rate (volume of filtrate through unit area per unit time):

$$w = \frac{dV}{F \cdot d\tau} = \frac{\Delta p}{\mu (r \cdot S + R_0)}$$

where:
- $\Delta p$ — pressure difference, Pa
- $\mu$ — filtrate viscosity, Pa·s
- $r$ — specific resistance of sediment, m/kg
- $S$ — sediment layer thickness, m
- $R_0$ — filter medium resistance, m⁻¹

**Key conclusions:**
- Rate decreases over time (sediment builds up → $S$ increases)
- Lower viscosity → faster filtration (why syrups and oils are heated)
- Higher $\Delta p$ → faster (but for soft sediments — compaction!)

### 3.3 Non-compacting and Compacting Sediments

**Non-compacting sediments** (crystalline particles) — particle size doesn't change with pressure increase. Increasing pressure always increases rate.
Example: sugar crystals, salt, crystalline additives.

**Compacting sediments** (amorphous, gelatinous) — particles deform under pressure, pores shrink. Excessive pressure can completely block filtration.
Example: yeast sediment, pectin sediment of fruit juices, protein sediment of milk serum.

> ⚠️ **Practical rule:** when filtering soft sediment (beer sediment, fruit juices) do not immediately set maximum pressure; gradually increase it. Sudden high pressure — filter clogging in minutes.

### 3.4 Auxiliary Materials — Kieselgur and Perlite

For filtering soft, colloidal sediments (beer, wine, fruit juices) use **pre-coat filter media with kieselgur or perlite**. These materials:
- form a non-compacting skeleton that supports sediment structure
- have enormous surface area and branched porous structure
- provide crystal-clear filtrate

Kieselgur — diatomaceous earth. Pore size: 0,1–10 μm.

📺 **Video:** [Beer filtration with kieselguhr — how breweries filter beer](https://www.youtube.com/results?search_query=beer+filtration+kieselguhr+diatomaceous+earth+brewery)

### 3.5 Filter Media

| Material | Pore Size | Applications |
|---|---|---|
| Metal mesh | 0,05–5 mm | Pre-filtration of juices, purees |
| Cotton fabric | 10–100 μm | Filter presses for juices, syrups |
| Synthetic fabric | 5–50 μm | Chemically aggressive environments |
| Porous ceramic | 0,1–10 μm | Fine filtration of beer, wine |
| Kieselgur (pre-coat) | 0,1–5 μm | Beer, wine, juices — final filtration |
| Membrane (PE, PA) | 0,001–1 μm | Microfiltration, ultrafiltration |

### 3.6 Filter Constructions

**Sand filter** — layer of quartz sand. Application: filtration of boiler water and water. Simple, but low productivity (0,0001 m³/m²·s). Cleaning — reverse washing.

**Pressure filter (filter press)** — cylinder with filter chambers and filter cloths. Liquid fed, filter cloths squeeze chambers. High surface area. Application: juices, wines, oils, starch. Productivity: 0,16–1,7 m³/m²·s.

**Automated chamber filter press (FPAKM)** — horizontal plates with infinite filter cloth. Pressure up to 6 bar. Full automation — washing, drying, sediment removal. Productivity 6–20 times higher than plate filters.

**Drum vacuum filter** — continuous action. Drum immersed 35–40% in sediment suspension. On rotation sequentially: filtration → washing → drying → sediment removal by knife. Application: sugar industry (filtering sugar crystals from syrup), starch, yeast.

📺 **Video:** [Rotary drum vacuum filter working principle](https://www.youtube.com/results?search_query=rotary+drum+vacuum+filter+working+principle+animation)

---

## 4. Centrifugation

### 4.1 Separation Factor — Main Parameter of Centrifuge

Centrifugal force exceeds gravitational force by factor $Fr$:

$$Fr = \frac{\omega^2 r}{g} = \frac{(2\pi n)^2 r}{g}$$

where $\omega$ is angular velocity (rad/s), $n$ is rotational frequency (rev/s), $r$ is drum radius (m).

**Key practical formula** (using $n$ in rev/min and $r$ in mm):

$$Fr = \frac{n^2 \cdot r}{900}$$

| Centrifuge Type | $Fr$ | Applications |
|---|---|---|
| Standard | 300–3500 | Sugar crystals, starch, yeast |
| Super centrifuge | 3500–50000 | Milk separator, clarifier |
| Ultracentrifuge | > 100000 | Scientific research |

> 🌟 **Milk separator** operates at $Fr \approx 5000–9000$. A 4 μm fat droplet separates in **seconds** — what took hours under gravity!

### 4.2 Centrifugal Settling Velocity

Same principle as gravitational settling — but replace $g$ with centrifugal acceleration $\omega^2 r$:

**Stokes' formula for centrifugal settling:**

$$w_{centrifugal} = \frac{d^2 (\rho_1 - \rho_2) \omega^2 r}{18 \mu}$$

This is $Fr$ times greater than gravitational settling velocity:

$$w_{centrifugal} = w_0 \cdot Fr$$

That is, a centrifuge with $Fr = 6000$ separates the system **6000 times faster** than a sedimentation tank!

### 4.3 Milk Separator

The most important centrifuge in food industry — **disc-stack separator** for milk.

**Construction:**
- Drum with conical discs (30–150 pieces) with small gap (0,3–1,5 mm)
- Milk fed through central tube
- Between discs, distance minimized → fat droplets need only a tiny distance to "stick" to disc
- Fat collects in central (upper) part of drum → cream
- Skimmed milk → outer part of drum

**Why discs?** Instead of one large space — hundreds of narrow channels between discs. Total effective sedimentation surface area increases by **50–150 times**!

**Applications of separators in food industry:**

| Product | What separates | $Fr$ |
|---|---|---|
| Milk | Fat (cream) and skimmed milk | 5000–9000 |
| Beer | Yeast and clarified beer | 4000–8000 |
| Fruit juice | Pulp and clear juice | 3000–6000 |
| Oil | Oil and water (after pressing) | 3000–7000 |
| Egg white | Contaminants and clear egg white | 5000–10000 |

📺 **Video:** [How milk separator works — 3D animation](https://www.youtube.com/results?search_query=milk+cream+separator+how+it+works+animation+3D)

### 4.4 Centrifuge Constructions

**Vacuum filtration centrifuge** (perforated drum, filter) — vacuum filtration. Drum rotates, liquid passes through perforation, sediment remains on walls. Sediment removal — manual or by knife. Application: sugar beet pulp, grain products.

**Centrifuge with pulsating discharge** — continuous operation. Sediment is pushed by piston without stopping rotation. Application: sugar factories.

**Conical decanter centrifuge with screw discharge** — horizontal conical drum with screw. Screw rotates slightly slower than drum → sediment moves along axis and is discharged. Liquid decants through opposite end. Application: fish meal, starch, fruit extraction, dairy products.

**Cyclone** — stationary apparatus for gas suspensions. Feed introduced tangentially → rotational motion → centrifugal sedimentation. Application: capturing flour dust, dry milk, powder in dryers.

📺 **Video:** [Decanter centrifuge — how it works](https://www.youtube.com/results?search_query=decanter+centrifuge+how+it+works+food+industry)

---

## 5. Comparative Table of Separation Methods

| Parameter | Sedimentation | Filtration | Centrifugation |
|---|---|---|---|
| Driving Force | $g \cdot \Delta\rho$ | $\Delta p$ | $Fr \cdot g \cdot \Delta\rho$ |
| Particle Size | > 50 μm | > 0,1 μm | > 0,5 μm |
| Productivity | Low | Medium | High |
| Degree of Separation | Partial | Complete | Nearly complete |
| Equipment Cost | Low | Medium | High |
| Energy Consumption | Minimal | Medium | High |
| Best Food Examples | Wine settling, oil | Beer, juice, oil | Milk, beer, juice |

---

## Summary

**Stokes' formula** (laminar settling, $Re < 2$):
$$w_0 = \frac{g d^2 (\rho_1 - \rho_2)}{18 \mu}$$

**Archimedes' criterion** (to determine regime):
$$Ar = \frac{g d^3 \rho_2 (\rho_1 - \rho_2)}{\mu^2}$$

**Sedimentation tank productivity:**
$$V = F \cdot w_0 \quad \text{(depends on area, not height!)}$$

**Filtration rate:**
$$w = \frac{\Delta p}{\mu (r S + R_0)}$$

**Centrifuge separation factor:**
$$Fr = \frac{\omega^2 r}{g} = \frac{n^2 r}{900} \quad \text{(n in rev/min, r in mm)}$$

---

## Self-Assessment Questions

1. Fat droplets in milk ($\rho_1 = 910$ kg/m³, $d = 2$ μm) settle in plasma ($\rho_2 = 1035$ kg/m³, $\mu = 2{,}0 \cdot 10^{-3}$ Pa·s). Calculate settling velocity using Stokes' formula. Compare with the result for $d = 4$ μm from the lecture — by what factor do the velocities differ?

2. A sedimentation tank with area $F = 20$ m² clarifies apple juice from pectin particles ($d = 80$ μm, $\rho_1 = 1100$ kg/m³) in liquid ($\rho_2 = 1050$ kg/m³, $\mu = 3 \cdot 10^{-3}$ Pa·s). Calculate sedimentation tank productivity (m³/h). First verify Archimedes' criterion!

3. Milk separator: $n = 6000$ rpm, $r = 0{,}15$ m. Calculate separation factor $Fr$. By what factor does centrifugal settling velocity exceed gravitational settling velocity?

4. Why when filtering beer sediment (yeast, amorphous type) can't you immediately set maximum pressure?

5. Compare: for separating milk (fat/plasma) which is more efficient — sedimentation tank or separator? Give quantitative justification via comparison of $w_0$ and $w_{centrifugal}$ at $Fr = 6000$.

---

## Useful Resources

### Technical Resources
- 🔗 [Alfa Laval separators for dairy](https://www.alfalaval.com/products/separation/centrifugal-separators) — milk and food separators
- 🔗 [Andritz separation for food](https://www.andritz.com/separation) — centrifuges and filter presses for food industry
- 🔗 [Pall filtration for beverage](https://www.pall.com/en/food-and-beverage.html) — filtration solutions for beer, wine, juices

### Educational Resources
- 🔗 [McCabe, Smith — Unit Operations](https://www.mheducation.com) — classic chapter on filtration and centrifugation
- 📺 [Sedimentation and settling — LearnChemE](https://www.youtube.com/results?search_query=sedimentation+settling+velocity+LearnChemE)
- 📺 [Filtration theory explained](https://www.youtube.com/results?search_query=filtration+theory+cake+filtration+explained)

### Interesting
- 🔗 [How beer is filtered at a large brewery](https://www.youtube.com/results?search_query=how+beer+is+filtered+at+large+brewery+kieselguhr)
- 🔗 [Inside a milk processing plant — separation and homogenization](https://www.youtube.com/results?search_query=milk+processing+plant+inside+separation+homogenization)

---

## Next Lecture

**Lecture 7 → Membrane Separation Processes**

Reverse osmosis, nano-, ultra- and micro-filtration — the newest class of separation technologies. Concentration of juices without heating, production of protein concentrates, water purification for food production.