---
title: "Pumps and Gas-Handling Machines"
topic: "hydraulics"
topic_title: "Fundamentals of Hydraulics"
lecture: 5
slug: "lecture-05-pumps"
locale: "en"
description: "Centrifugal, positive displacement and rotary pumps — construction, principle of operation, characteristics, pump selection for food enterprises. Cavitation, flow regulation, series and parallel pump connections."
keywords: ["centrifugal pump", "rotary pump", "piston pump", "cavitation", "pump characteristic", "operating point", "food industry"]
duration: "60 min"
difficulty: "basic"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Lecture 5. Pumps and Gas-Handling Machines

## What You Will Learn

After this lecture you will be able to:

- classify pumps by principle of operation and name 3 types most commonly used in food production
- explain the principle of operation of a **centrifugal pump** and calculate required head and power
- find the **operating point of a pump** as the intersection of pump and pipeline characteristics
- explain the phenomenon of **cavitation** and name 3 ways to prevent it
- select the correct pump type depending on the product and process conditions
- calculate **consumed power** and choose the electric motor

---

## 1. Pump Classification

![Pump selection map for food products](/images/lectures/hydraulics/pump-selection-map.svg)

A pump is a hydraulic machine that converts the mechanical energy of the driver into the energy of a fluid flow. The food industry is one of the largest consumers of pumping equipment: every production facility requires tens to hundreds of pumps of different types.

```
PUMPS
├── IMPPELLER (Centrifugal)
│   ├── Centrifugal ← most common in food industry
│   ├── Axial
│   └── Mixed flow
├── VOLUMETRIC (Displacement)
│   ├── Piston (piston pumps)
│   └── Rotary
│       ├── Gear (lobe) ← for oils, syrups
│       ├── Screw ← for viscous products
│       ├── Peristaltic ← for gentle products (yogurt, puree)
│       └── Vane (paddle)
└── SPECIAL
    ├── Jet pumps (ejectors) ← for vacuum systems
    └── Ertlers ← for suspensions
```

**Main parameters of any pump:**

| Parameter | Designation | Units | Meaning |
|---|---|---|---|
| Flow rate (delivery) | $Q$ | m³/s, m³/h | Volume of fluid per unit time |
| Head | $H$ | m | Height of fluid column corresponding to pump energy |
| Shaft power | $N$ | kW | Consumed power |
| Efficiency | $\eta$ | unit fraction | Ratio of useful power to consumed |

**Pump efficiency** is the product of three factors:

$$\eta = \eta_{vol} \cdot \eta_{hyd} \cdot \eta_{mech}$$

where:
- $\eta_{vol}$ — volumetric efficiency (leakage through seals): 0,85–0,98
- $\eta_{hyd}$ — hydraulic efficiency (internal hydraulic losses): 0,80–0,95
- $\eta_{mech}$ — mechanical efficiency (bearing friction): 0,90–0,98

Typical overall efficiency of food centrifugal pumps: **0,65–0,85**.

---

## 2. Centrifugal Pumps

### 2.1 Construction and Principle of Operation

![Centrifugal pump operating principle](/images/lectures/hydraulics/centrifugal-pump.svg)

The centrifugal pump is the most common type in the food industry. Advantages: simplicity, reliability, continuous uniform delivery, easy regulation.

**Main elements:**
- **Impeller** with 6–8 blades, fixed to the shaft
- **Spiral casing** (volute) — converts kinetic energy into potential
- **Suction pipe** — fluid inlet
- **Discharge pipe** — fluid outlet

**Principle of operation:**

Before starting, the pump casing must be **filled with fluid** (self-priming is absent!). When the impeller rotates, the blades throw fluid outward by centrifugal force. In the center of the impeller a vacuum is created — fluid is sucked from the suction pipe. On the periphery, fluid gains significant velocity, which in the spiral casing is converted into pressure.

📺 **Video:** [Centrifugal pump working principle — 3D animation](https://www.alfalaval.us/products/fluid-handling/pumps/centrifugal-pumps/lkh/)

### 2.2 Pump Characteristics

**Working characteristics** — dependencies $H(Q)$, $N(Q)$, $\eta(Q)$ at constant rotational speed — are determined by the manufacturer through testing and are specified in the pump passport.

Typical shape of curves:

```
H ↑          η ↑         N ↑
  │╲           │   ╭──╮    │        ╱
  │ ╲          │  ╱    ╲   │      ╱
  │  ╲         │ ╱      ╲  │    ╱
  │   ╲        │╱        ╲ │  ╱
──┼────╲──► Q ─┼──────────╲┼╱──► Q
         Qmax  0   Qopt         Q
```

- **H(Q)** — head decreases with increasing flow rate (at Q=0, maximum head $H_0$)
- **η(Q)** — has a maximum at the **optimal flow rate** $Q_{opt}$
- **N(Q)** — power increases with flow rate

> 💡 **Important practical detail:** A centrifugal pump is started with **closed discharge valve** — at this moment $Q = 0$, $H = H_0$, and power consumption is minimal. Then the discharge valve is gradually opened. This protects the electric motor from overload at startup.

### 2.3 Pipeline Characteristics and Operating Point

![Pump curve, system curve, and operating point](/images/lectures/hydraulics/pump-system-curve.svg)

**Pipeline hydraulic characteristic** — dependency of required head on flow rate:

$$H_{pipeline} = H_{static} + A \cdot Q^2$$

where:
- $H_{static} = z_1 + z_2 + (p_2 - p_1)/(\rho g)$ — **static head** (does not depend on Q)
- $A \cdot Q^2$ — dynamic losses (proportional to square of flow rate)

**Operating point** — intersection of pump characteristic $H(Q)$ and pipeline characteristic $H_{pipeline}(Q)$. This is the point where the pump will operate with fully open discharge valve.

> 🌟 **Golden rule:** The pump should be selected so that the operating point falls in the **optimal efficiency zone** (70–100% of $\eta_{max}$). If the pump operates outside this zone continuously — it wears out quickly and wastes electrical energy.

### 2.4 Power Calculation and Motor Selection

**Useful hydraulic power:**

$$N_{hyd} = \frac{Q \cdot H \cdot \rho \cdot g}{1000}, \quad \text{kW}$$

**Shaft power of pump:**

$$N_{shaft} = \frac{N_{hyd}}{\eta} = \frac{Q \cdot H \cdot \rho \cdot g}{1000 \cdot \eta}, \quad \text{kW}$$

**Motor installed power** (with safety factor $k = 1{,}1\ldots1{,}3$):

$$N_{motor} = k \cdot N_{shaft}$$

### 2.5 Complete Calculation Example

**Problem:** Select a pump for pumping milk at a dairy plant.

**Given:**
- Milk: $\rho = 1030$ kg/m³
- Flow rate: $Q = 5000$ kg/h = $5000/(1030 \cdot 3600) = 1{,}35 \cdot 10^{-3}$ m³/s
- Suction lift height $z_1 = 2$ m, discharge head height $z_2 = 10$ m
- Pressure in discharge tank $p_2 = p_{atm}$ (open tank)
- Pipeline losses in suction $h_1 = 0{,}5$ m
- Pipeline losses in discharge $h_2 = 2{,}0$ m

**Solution:**

**Step 1.** Required pump head:
$$H = z_1 + z_2 + h_1 + h_2 = 2 + 10 + 0{,}5 + 2{,}0 = 14{,}5 \text{ m}$$

**Step 2.** Required flow rate:
$$Q = 1{,}35 \cdot 10^{-3} \text{ m}^3/\text{s} = 4{,}86 \text{ m}^3/\text{h}$$

**Step 3.** By catalog selection, choose a pump with $Q_{pump} \geq 5$ m³/h, $H_{pump} \geq 15$ m. For example, centrifugal food pump type **OCN-5** or imported **Alfa Laval LKH**.

**Step 4.** Power (efficiency = 0,70):
$$N_{shaft} = \frac{1{,}35 \cdot 10^{-3} \cdot 14{,}5 \cdot 1030 \cdot 9{,}81}{1000 \cdot 0{,}70} = \frac{198}{700} = 0{,}28 \text{ kW}$$

**Step 5.** Motor power (k = 1,2):
$$N_{motor} = 1{,}2 \cdot 0{,}28 = 0{,}34 \text{ kW}$$

We select the standard motor **0,37 kW** (nearest larger standard).

### 2.6 Flow Rate Regulation

**Method 1 — throttling with discharge valve** (at discharge):
- Simple and quick
- Inefficient — part of power is wasted overcoming valve resistance
- Acceptable only for short-term regulation

**Method 2 — changing rotational speed** (variable frequency drive):
- Modern and economical method
- Pump affinity laws apply: $Q \sim n$, $H \sim n^2$, $N \sim n^3$
- Reducing speed by half → power consumption decreases by **8 times**!
- Standard for new food plants

**Method 3 — trimming impeller diameter**:
- Reducing impeller diameter → reduced $H$ and $Q$
- Permanent change — not regulation, but reconfiguration

> 💡 **Variable frequency drives** on food plant pumps save 30–50% electricity compared to throttling. Typical payback period — 1–2 years.

### 2.7 Series and Parallel Pump Connections

**Series connection** (discharge of first → suction of second):
- Heads **add up**: $H_{total} = H_1 + H_2$
- Flow rate unchanged: $Q_{total} = Q$
- Application: when high head is needed (tall building, distant delivery)

**Parallel connection** (both pumps from one source to one discharge line):
- Flow rates **add up**: $Q_{total} = Q_1 + Q_2$
- Head unchanged: $H_{total} = H$
- Application: when high flow rate is needed (large plant, buffer tank)

---

## 3. Cavitation

![Cavitation and NPSH margin](/images/lectures/hydraulics/cavitation-npsh.svg)

### 3.1 What is Cavitation?

If pressure at any point in the pump decreases to the **vapor pressure of the fluid** at the given temperature — the fluid begins to boil and vapor bubbles form. When these bubbles reach a region of higher pressure — they collapse abruptly. This process is called **cavitation**.

When bubbles collapse, local hydraulic shock pressures up to **1000 MPa** occur — they damage the impeller metal for only a few months.

**Signs of cavitation:**
- Characteristic noise — rattling, gurgling, as if gravel is being pumped
- Pump vibration
- Sharp drop in head and flow rate
- Erosion (pitting) on impeller blades

📺 **Video:** [Cavitation in pumps — what it looks like and how to prevent it](https://www.engineeringtoolbox.com/npsh-net-positive-suction-head-d_634.html)

### 3.2 Allowable Suction Lift Height

Cavitation most often occurs in the suction pipe. Maximum allowable suction lift:

$$z_{suction,max} = \frac{p_{atm} - p_v}{\rho g} - \Delta h_{vacuum} - h_1$$

where $p_v$ is vapor pressure at fluid temperature, $\Delta h_{vacuum}$ is vacuum head from pump data, $h_1$ are losses in suction pipe.

**Vapor pressure for milk and water:**

| Temperature | Vapor pressure, kPa |
|---|---|
| 20°C | 2,34 |
| 40°C | 7,38 |
| 60°C | 19,9 |
| 80°C | 47,4 |
| 100°C | 101,3 (atmospheric!) |

> ⚠️ **Critical for food production!** After pasteurization milk has temperature 72–85°C. At these temperatures vapor pressure of milk is significant — cavitation occurs much more easily than at room temperature. Pumps for hot products must be positioned as low as possible relative to fluid level.

### 3.3 How to Prevent Cavitation

1. **Reduce suction lift height** — place pump below fluid level or immerse it
2. **Increase suction pipe diameter** — lower velocity → lower losses → higher inlet pressure
3. **Minimize local losses** at suction — smooth bends, fully open discharge valve, filter with large perforation
4. **Use pumps with better cavitation characteristics** — larger NPSH margin
5. **Cool fluid before pumping** (if possible)

---

## 4. Piston Pumps

### 4.1 Principle of Operation

The piston moves back and forth in a cylinder by a crankle-lever mechanism. During retraction motion the suction valve opens and fluid fills the cylinder. During forward motion the suction valve closes, the discharge valve opens and fluid is pushed into the pipeline.

**Feature:** Uneven flow (pulsing flow rate). To smooth out, **air vessels** are installed on suction and discharge lines.

### 4.2 Piston Pump Productivity

**Single-acting pump** (piston delivers only on forward stroke):

$$Q = \frac{F \cdot S \cdot n}{60} \cdot \eta_{vol}$$

where $F$ is piston area (m²), $S$ is piston stroke (m), $n$ is crankle speed (rev/min).

**Double-acting pump** (delivery on both piston strokes):

$$Q = \frac{(2F - F_{rod}) \cdot S \cdot n}{60} \cdot \eta_{vol}$$

### 4.3 Features and Applications

**Advantages:**
- Can generate very **high pressure** (50–200 MPa)
- Delivery does not depend on pressure in discharge line
- Can self-prime

**Disadvantages:**
- Pulsating delivery
- Complex construction (valves, crankle mechanism)
- Not suitable for suspensions and viscous products with solid inclusions

**Applications in food industry:**
- **Milk homogenizers** (pressure 10–25 MPa)
- **Dosing pumps** — precise dosing of flavors, colors, preservatives
- **CIP systems** — pumping cleaning solutions at high pressure

---

## 5. Rotary Pumps

Rotary pumps are the most important class for food industry when working with **viscous and gentle products**.

### 5.1 Gear (Lobe) Pumps

**Construction:** two gear teeth in a housing with minimal clearances. When rotating, fluid is transported between teeth voids from suction to discharge.

**Volumetric efficiency:** 0,70–0,90.

**Productivity:**
$$Q = \frac{V \cdot n}{60} \cdot \eta_{vol}$$

where $V$ is fluid volume per revolution.

**Applications:**
- Pumping plant oils, fats, syrups
- Delivery of yogurt, soft cheese, puree
- Pumping honey, glycerin
- Circulation systems for lubrication

**Not suitable for:** products with solid inclusions, suspensions, products that crystallize.

### 5.2 Screw Pumps

**Construction:** one or more screws (rotors) rotate in a stator. Fluid is transported along the shaft axis without pulsation.

**Advantages:**
- Completely **uniform delivery** (no pulsation)
- **Gentle handling** — does not damage product structure
- Can pump very viscous products

**Applications:**
- Pumping yogurt, sour cream, soft cheese
- Tomato puree with fruit pieces
- Meat puree
- Viscous marinades, sauces

📺 **Video:** [Screw pump working principle for food industry](https://www.alfalaval.us/sru/)

### 5.3 Peristaltic (Hose) Pumps

**Construction:** flexible hose is compressed by rollers or shoes of a rotor. Fluid is transported in the hose, not contacting moving parts of the pump.

**Unique advantages:**
- Complete **hygienic cleanliness** — fluid contacts only the hose
- **Does not damage** cells, fibers, pieces — the gentlest type of pump
- Easy hose replacement (sterile spare in 5 minutes)
- Self-priming
- Pumping products with solid inclusions

**Applications:**
- Gentle products: berry yogurt with yogurt, soup with noodles, fruit puree pieces
- Dosing of live cultures (probiotics, starters)
- Ketchup, mustard, jelly with whole berries
- Pharmaceutical products

📺 **Video:** [Peristaltic pump in food processing](https://www.wmfts.com/en-us/food-and-beverage/watson-marlow-pumps/)

---

## 6. Comparative Table: Which Pump to Choose?

| Product | Recommended Type | Why |
|---|---|---|
| Water, milk, juices, beer | Centrifugal | High flow rates, low viscosity |
| Plant oil, fat, syrup | Gear rotary | Viscous, uniform delivery |
| Yogurt, sour cream, soft cheese | Screw or peristaltic | Gentle consistency, does not damage structure |
| Berry yogurt with fruit | Peristaltic | Fruit pieces should not dissolve |
| Chocolate | Gear or screw | High viscosity, temperature 40–50°C |
| Tomato puree | Screw or centrifugal with large impeller | High viscosity, suspension |
| Honey | Gear (heated) | Very high viscosity |
| Meat puree | Screw | Fiber suspension |
| Milk homogenization | Piston (plunger) | Pressure 10–25 MPa |
| Dosing of flavors | Piston dosing | Precise small volumes, high pressure |
| CIP solutions | Centrifugal | High flow rate, uniform flow |

---

## 7. Gas-Handling Machines

For moving gases and air in food production facilities, the following are used:

**Fans** ($\Delta p < 15$ kPa) — air movement in dryers, ventilation systems, pneumatic transport of flour and powder.

**Gas ejectors** (low-pressure compressors, $15 < \Delta p < 300$ kPa) — air supply to flotation equipment, aeration of fermentation tanks.

**Compressors** ($\Delta p > 300$ kPa) — compression of CO₂ for carbonation of beverages, nitrogen for protective atmosphere, compressed air for pneumatic tools.

**Vacuum pumps** — degassing in vacuum evaporators, vacuum packaging lines.

---

## Summary

**Three main types of pumps for food production:**

| Type | Principle | For what |
|---|---|---|
| **Centrifugal** | Centrifugal force of impeller | Low-viscosity liquids: water, milk, juices, beer |
| **Rotary** | Displacement by rotor | Viscous and gentle products: oil, yogurt, puree |
| **Piston** | Displacement by piston | High pressure: homogenization, dosing |

**Power formula:**
$$N_{shaft} = \frac{Q \cdot H \cdot \rho \cdot g}{1000 \cdot \eta}, \quad \text{kW}$$

**Operating point** — intersection of pump $H(Q)$ and pipeline $H_{pipeline}(Q)$ characteristics.

**Cavitation** — boiling of fluid at low pressure at pump inlet → impeller damage. Prevention: minimal suction lift, large diameter suction pipe.

**Regulation:** variable frequency drive — the most economical way.

---

## Self-Assessment Questions

1. A pump is pumping apple juice ($\rho = 1055$ kg/m³) with flow rate $Q = 10$ m³/h and head $H = 20$ m. Pump efficiency $\eta = 0{,}72$. Find the shaft power of the pump (kW) and select a motor (safety factor 1,25).

2. Why is a centrifugal pump started with a closed discharge valve, and a piston pump — with an open one? What happens if you do it the other way?

3. Milk after pasteurization has temperature 72°C. Vapor pressure at this temperature $p_v = 33$ kPa. Atmospheric pressure 101 kPa, allowable vacuum head of the pump 4 m, losses in suction pipe 0,5 m. Find the allowable suction lift height. Can the pump be placed 2 m above the milk level?

4. Two identical centrifugal pumps are installed on site ($Q_{pump} = 15$ m³/h, $H_{pump} = 25$ m each). How will $Q$ and $H$ change in parallel connection? In series?

5. Which product would you choose a peristaltic pump instead of a centrifugal pump? Why? Name 3 products.

---

## Useful Resources

### Pump Catalogs for Food Industry
- 🔗 [Alfa Laval LKH pumps](https://www.alfalaval.com/products/fluid-handling/pumps) — hygienic centrifugal pumps
- 🔗 [Alfa Laval SRU screw pumps](https://www.alfalaval.com) — screw pumps for viscous products
- 🔗 [Watson-Marlow peristaltic pumps](https://www.watson-marlow.com) — peristaltic pumps for food industry
- 🔗 [Grundfos food industry pumps](https://www.grundfos.com/industries/food-and-beverage) — wide assortment

### Online Calculations
- 🔗 [Pump power calculator](https://www.omnicalculator.com/physics/pump-power) — online pump power calculation
- 🔗 [NPSH calculator](https://www.engineeringtoolbox.com/npsh-net-positive-suction-head-d_634.html) — cavitation margin calculation

### Videos
- 📺 [How centrifugal pump works — Lesics](https://www.alfalaval.us/products/fluid-handling/pumps/centrifugal-pumps/lkh/)
- 📺 [Pump selection guide for food industry](https://www.gea.com/en/products/pumps-valves-flow-components/centrifugal-hygienic-pumps/?i=food)
- 📺 [Variable frequency drive on pumps — energy savings](https://www.engineeringtoolbox.com/pumps-power-d_505.html)

### Standards
- 🔗 [EHEDG guidelines for hygienic pump design](https://www.ehedg.org) — European standards for hygienic pump design
- 🔗 [3-A Sanitary Standards for pumps](https://www.3-a.org) — American standards for food pumps

---

## Next Lecture

**Lecture 6 → Separation of Heterogeneous Systems: Settling and Filtration**

Suspensions, emulsions and foams in food industry. Settling tank calculations, Stokes' law, Archimedes criterion. Filtration under pressure and vacuum — designs and calculations.