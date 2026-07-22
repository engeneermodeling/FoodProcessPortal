---
title: "Fundamental Laws of Food Technology Processes"
topic: "general-principles"
topic_title: "General Principles"
lecture: 1
slug: "lecture-01-general-laws"
locale: "en"
description: "Laws of conservation of mass and energy, transfer laws, equilibria and optimization — the foundation of engineering thinking in food industry."
keywords: ["material balance", "energy balance", "transfer laws", "process driving force", "food technology"]
duration: "45 min"
difficulty: "basic"
author: "FoodProcessPortal"
updated: "2026-07-06"
---

# Lecture 1. Fundamental Laws of Food Technology Processes

## What You Will Learn

After this lecture you will be able to:

- explain the laws of conservation of mass and energy and apply them in balances
- understand the concept of **process driving force** and **resistance** — key concepts for the entire course
- explain why an engineer needs to know Gibbs phase rule and Le Chatelier principle
- name 4 optimization principles for running technology processes

---

## 1. Why Does an Engineer Need Physics Laws?

Food industry is hundreds of different productions: sugar plant, dairy plant, brewery, bakery, juice factory. It seems there is little in common between them. But take a closer look at what happens inside each of them.

At a dairy plant milk is **heated** (pasteurization), **separated** (separation), **evaporated** (concentration) and **cooled** (storage). At a brewery barley is **ground**, **mixed** with water, **filtered**, **heated**, **fermented** and **filtered** again.

> **Key Idea:** In every food production there is a limited number of **typical processes** — heating, cooling, filtering, sedimentation, drying, distillation, adsorption. The theoretical foundations of these processes, calculation methods and equipment design principles — these are the subject of our course.

These processes follow general physical and physical-chemical laws. Knowing them, you will be able to calculate any equipment — from a small laboratory reactor to an industrial evaporator.

📺 **Inspiration Video:** [How does a modern food plant look like from the inside](https://www.youtube.com/results?search_query=modern+food+processing+plant+inside) — watch how the same processes (heat, filtration, mixing) are implemented at industrial scale.

---

## 2. Law of Conservation of Mass — Material Balance

The first and most important law: **mass does not disappear and does not appear from nothing**.

In any equipment or system of equipment:

$$\sum m_{\text{input}} = \sum m_{\text{output}}$$

This equation is called **material balance equation**.

### Example: Pasteurization Plant

Imagine a plate pasteurizer. Inside it receives:
- raw milk — stream **A** (kg/h)
- steam for heating — stream **B** (kg/h)
- cooling water — stream **C** (kg/h)

On the output:
- pasteurized milk — stream **D**
- condensate — stream **E**
- discharged water — stream **F**

Material balance: **A + B + C = D + E + F**

### Example: Evaporator for Juice

When producing orange juice concentrate in an evaporator:

| What comes in | What comes out |
|---|---|
| Juice (10% dry matter) — 10,000 kg/h | Concentrate (65% dry matter) — ? kg/h |
| Steam — Q kJ/h | Water (evaporated steam) — ? kg/h |

Balance for dry matter: **10,000 × 0,10 = X × 0,65**

Concentrate mass: **X = 1,538 kg/h**

Evaporated water: **10,000 − 1,538 = 8,462 kg/h**

> 💡 **Practical Value:** Material balance is the first thing a technologist calculates before designing any equipment. Without it you cannot determine equipment size or raw material costs.

---

## 3. Law of Conservation of Energy — Heat Balance

The second fundamental law: **energy does not disappear and does not appear from nothing**, it just changes from one form to another.

For heat processes:

$$Q_{\text{input}} + Q_{\text{external}} = Q_{\text{output}} + Q_{\text{losses}}$$

### Sankey Diagram

A very convenient way to show heat balance is **Sankey diagram**. The width of each "strip" on it is proportional to the amount of heat. You immediately see where energy "leaks" out.

📺 **Video:** [What is a Sankey diagram and why do you need it](https://www.youtube.com/results?search_query=sankey+diagram+energy+balance+explained)

🔗 **Online Tool:** [SankeyMATIC](https://sankeymatic.com) — try drawing heat balance of your equipment right in the browser.

### Example: Milk Pasteurization

To heat 1,000 kg/h milk from 4°C to 72°C you need:

$$Q = m \cdot c_p \cdot \Delta T = 1000 \cdot 3{,}93 \cdot (72 - 4) = 267\,240 \text{ kJ/h}$$

where $c_p = 3{,}93$ kJ/(kg·K) — milk specific heat capacity.

But actual steam consumption will be **higher** — because some heat is lost through equipment walls to the environment (5–15% depending on insulation).

---

## 4. Laws of Transfer — Foundation of the Entire Course

The most important generalization that combines all processes into one class:

$$I = \frac{\Delta X}{R}$$

where:
- **I** — process rate (how much is transferred per unit time)
- **ΔX** — **driving force** of the process (difference of potentials)
- **R** — **resistance** of the process

This formula is the same for three completely different processes:

| Process | Driving Force ΔX | Resistance R | What is Transferred |
|---|---|---|---|
| **Heat** | Temperature difference Δt, °C | Thermal resistance 1/K | Heat energy Q |
| **Mass** | Concentration difference Δc, kg/m³ | Mass transfer resistance 1/K' | Component M of mixture |
| **Hydrodynamic** (filtration) | Pressure difference Δp, Pa | Hydraulic resistance R_g | Liquid W |

> 🌟 **This is the "triple analogy"** — one of the most beautiful ideas of chemical engineering. Filter cake, milk pasteurization and sugar extraction are mathematically the same type of equation!

### How to Speed Up Any Process?

From $I = \Delta X / R$ it's obvious:

1. **Increase driving force** — increase temperature, concentration or pressure differences
2. **Decrease resistance** — choose proper equipment design, turbulence the flow

### Example in Production

At **ultrafiltration of milk serum** (whey protein production):
- Driving force: pressure Δp = 0,1–0,5 MPa
- Resistance: membrane + cake layer
- Permeatate flow rate: 50–200 l/(m²·h)

To increase productivity — either increase pressure (limited by membrane characteristics), or turbulence the flow over the membrane (reduces cake → reduces resistance).

📺 **Video:** [How does ultrafiltration work at a dairy plant](https://www.youtube.com/results?search_query=ultrafiltration+dairy+plant+membrane)

---

## 5. Laws of Equilibrium

### Gibbs Phase Rule

$$S = K - f + 2$$

where:
- **S** — number of **degrees of freedom** (parameters that can be independently changed)
- **K** — number of **components**
- **f** — number of **phases**

**Example: boiling pure water**

K = 1 (water), f = 2 (liquid + vapor): **S = 1 − 2 + 2 = 1**

Only one parameter (or temperature, or pressure) determines the system state. If we fix pressure at 1 atm → boiling temperature is strictly 100°C.

**Example: sugar solution**

K = 2 (water + sucrose), f = 2 (liquid + vapor): **S = 2 − 2 + 2 = 2**

The system has two degrees of freedom — and boiling temperature depends on concentration! That's why when evaporating sugar syrup, boiling temperature increases as concentration increases.

### Le Chatelier Principle

> **If a system is taken out of equilibrium — it tends to return to equilibrium, opposing the change.**

**Practical application in food industry:**

- If **increase pressure** on boiling liquid — boiling stops (liquid is compressed), for boiling higher temperature is needed → basis of **vacuum evaporators** (reduce pressure → reduce boiling temperature → preserve heat-sensitive vitamins)
- If **increase concentration** of sugar in solution → equilibrium shifts toward crystallization → principle of **candy making**

📺 **Video:** [Le Chatelier principle explained simply](https://www.youtube.com/results?search_query=le+chatelier+principle+explained+simple)

---

## 6. Optimization Principles — How to Run a Process Correctly

### 6.1 Continuity of Processes

Food productions are **periodic** (batch) and **continuous**.

| | Periodic | Continuous |
|---|---|---|
| Example | Boiling candy in cauldron | Plate pasteurizer |
| Labor costs | Higher | Lower |
| Product quality | Varies batch to batch | Stable |
| Automation | More complex | Simple |
| Scale | Small and medium | Large |

**Trend:** modern food industry is maximally transitioning to continuous processes.

### 6.2 Counter-current Flow

At heat or mass transfer the most efficient is **counter-current** flow of media (counter-current).

```
Hot milk →  → → → → → →  Pasteurized milk
                [Heat Exchanger]
Cold water   ←  ← ← ← ← ←  Warm water
```

At parallel flow (counter-current) the driving force (temperature difference) quickly decreases. At counter-current it remains high along the entire length of the equipment — therefore the equipment is more compact and efficient.

> 🔗 More about counter-current we will cover in the topic **Heat Exchangers** (Lecture 16).

### 6.3 Updating Contact Surface Between Phases

Exchange (heat, mass) is faster the more often fresh, not yet saturated layers of media approach the contact surface. This happens with **turbulent** flow.

**Practice:** in distillation trays for alcohol spirit, Raschig rings, Berl plates are specially designed to increase contact surface between vapor and liquid — and constantly renew this contact.

### 6.4 Maximum Heat Recovery

In food industry heat energy is one of the largest cost items. Recovery principle: **heat that "exits" from one equipment is used for heating in another**.

**Example: HTST pasteurizer setup**

1. Cold raw milk (4°C) is heated by hot pasteurized milk (72°C) in regeneration section — **75–90% heat savings**
2. Remaining heat is added by steam in heating section
3. Pasteurized milk is cooled again in regeneration section

📺 **Video:** [How does an HTST pasteurizer work](https://www.youtube.com/results?search_query=HTST+pasteurizer+how+it+works)
🔗 **Article:** [Heat recovery in food processing — Food Engineering Magazine](https://www.foodengineeringmag.com)

---

## 7. Law of Scale Transition

Results obtained on a **laboratory unit** cannot be automatically transferred to **industrial scale**. Equipment scale significantly affects process dynamics.

**Why?** When increasing equipment size:
- surface-to-volume ratio changes
- hydrodynamic conditions change
- heat flows change

**Solution is similarity theory**, which we will cover in **Lecture 2**.

> 💡 **From practice:** many food startups "burned out" — product that was excellent in a small pot turned out completely different in an industrial reactor. Microbreweries spend months on "tuning" flavor when moving to larger scale.

---

## Summary

| Law | Mathematical Expression | Application |
|---|---|---|
| Conservation of Mass | $\sum m_{\text{input}} = \sum m_{\text{output}}$ | Material balance of any equipment |
| Conservation of Energy | $\sum Q_{\text{input}} = \sum Q_{\text{output}} + Q_{\text{losses}}$ | Heat balance, steam consumption calculation |
| Transfer | $I = \Delta X / R$ | Rate of any process |
| Gibbs Rule | $S = K - f + 2$ | Equilibrium condition determination |
| Le Chatelier | (qualitative law) | Process condition selection |

**4 optimization principles:**
1. Continuity of processes
2. Counter-current flow
3. Updating contact surface of phases
4. Maximum heat recovery

---

## Self-Assessment Questions

1. Write the material balance equation for a milk separator where milk (1,000 kg/h, 3.8% fat) is separated into cream (35% fat) and skim milk (0.05% fat). Find the mass flows of cream and skim milk.

2. Explain why in a vacuum evaporator milk boils at 50–60°C instead of 100°C. What law (principle) is this?

3. Why at HTST milk pasteurization is counter-current heat exchange used in regeneration section, not parallel flow?

4. Sugar distillation column for alcohol production: K = 2 (water + ethanol), f = 2 (liquid + vapor). How many degrees of freedom? What does this mean in practice?

5. Name one food process where driving force is **concentration difference**, and one where driving force is **temperature difference**.

---

## Useful Resources

### Textbooks and References
- 🔗 [Perry's Chemical Engineers' Handbook (8th ed.)](https://www.accessengineeringlibrary.com/content/book/9780071422949) — classic chemical engineer handbook
- 🔗 [Geankoplis C.J. — Transport Processes and Separation Process Principles](https://www.pearson.com) — fundamental textbook on transfer processes

### Online Simulators
- 🔗 [PhET Interactive Simulations (heat transfer)](https://phet.colorado.edu/en/simulations/energy-forms-and-changes) — interactive visualization of heat transfer
- 🔗 [SankeyMATIC](https://sankeymatic.com) — Sankey diagram building for heat balances

### Videos
- 📺 [Food Engineering basics — YouTube playlist](https://www.youtube.com/results?search_query=food+engineering+unit+operations+basics)
- 📺 [Mass and Energy Balance — LearnChemE](https://www.youtube.com/c/LearnChemE) — short and clear video lectures from University of Colorado

### Journals and Standards
- 🔗 [Journal of Food Engineering](https://www.sciencedirect.com/journal/journal-of-food-engineering) — leading scientific journal
- 🔗 [Food Engineering Magazine](https://www.foodengineeringmag.com) — practical articles from production

---

## Next Lecture

**Lecture 2 → Similarity and Similarity Criteria**

We will learn how to mathematically "transfer" results from laboratory to plant, what are Reynolds, Nusselt, Prandtl numbers — and why an engineer needs them.