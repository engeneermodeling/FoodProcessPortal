---
title: "Membrane Separation Processes"
topic: "separation"
topic_title: "Separation of Heterogeneous Systems"
lecture: 7
slug: "lecture-07-membranes"
locale: "en"
description: "Reverse osmosis, nano-, ultra- and micro-filtration — theory, calculation, equipment. Concentration of juices without heating, ultrafiltration of milk serum, water purification for food production."
keywords: ["membrane processes", "reverse osmosis", "ultrafiltration", "microfiltration", "nanofiltration", "concentration polarization", "permeate", "retentate", "food industry"]
duration: "60 min"
difficulty: "intermediate"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Lecture 7. Membrane Separation Processes

## What You Will Learn

After this lecture you will be able to:

- explain the difference between **reverse osmosis, nano-, ultra- and micro-filtration** by pore size and operating pressure
- calculate **osmotic pressure** of a solution using the van't Hoff formula
- explain the phenomenon of **concentration polarization** and three ways to mitigate it
- calculate **permeate flux** and **selectivity** of a membrane
- describe the construction and advantages of four types of membrane equipment
- name 5 practical applications of membrane processes in food industry

---

## 1. Why Membrane Processes — The Future of Food Industry?

Traditional concentration methods for food liquids — **evaporation** — have one fundamental drawback: heating destroys thermolabile components. Vitamins, aromas, antioxidants, proteins — all degrade under heat.

Membrane processes allow you to:
- concentrate orange juice from 12% to 65% solids **without heating** — aroma and vitamins are fully preserved
- obtain **90% protein** from milk serum (whey by-product) for sports nutrition
- produce **microfiltered beer** without pasteurization — "live" beer with shelf life of 30+ days
- purify seawater for production needs on islands and regions with freshwater deficits

> 🌟 **Membrane technologies are "cold boiling."** Separation occurs at room temperature or slightly elevated temperatures, without phase transitions, without chemical reagents. This is why they have experienced explosive growth since the 1970s to the present day.

📺 **Video:** [How membrane filtration works in food processing](https://dairyprocessinghandbook.tetrapak.com/chapter/membrane-technology)

---

## 2. Classification of Membrane Processes

![Membrane process spectrum by particle size and application](/images/lectures/separation/membrane-spectrum.svg)

### 2.1 By Driving Force

| Driving Force | Processes |
|---|---|
| **Pressure difference** (barmembrane) | Reverse osmosis, nano-, ultra-, micro-filtration |
| **Concentration difference** | Dialysis, pervaporation, membrane gas separation |
| **Electrical potential difference** | Electrodialysis, electroosmosis |
| **Temperature difference** | Membrane distillation |

In food industry, the most common are **barmembrane processes** — we'll cover them in detail.

### 2.2 Barmembrane Processes — Comparison

```
Membrane pore size, μm:
0.0001   0.001    0.01      0.1      1.0       10
  │        │        │        │        │        │
  │←──────→│        │        │        │        │   Reverse Osmosis
           │←───V──→│        │        │        │   Nanofiltration
                    │←──V───→│        │        │   Ultrafiltration
                             │←───V──→│        │   Microfiltration
                                      │←───V──→│   Conventional filtration
```

| Process | Pore Size, μm | Operating Pressure, MPa | What is Retained |
|---|---|---|---|
| **Reverse Osmosis (RO)** | < 0.001 | 0.7–6.0 | Ions, molecules (NaCl, sugar) |
| **Nanofiltration (NF)** | 0.001–0.01 | 0.4–3.0 | Divalent ions, sucrose |
| **Ultrafiltration (UF)** | 0.01–0.1 | 0.2–0.8 | Proteins, polysaccharides, microbes |
| **Microfiltration (MF)** | 0.1–10 | 0.1–0.2 | Bacteria, yeast, colloids |

---

## 3. Theoretical Foundations of Barmembrane Processes

### 3.1 The Phenomenon of Osmosis

![Osmosis, equilibrium, and reverse osmosis](/images/lectures/separation/osmosis-reverse-osmosis.svg)

Osmosis is the spontaneous passage of solvent through a semipermeable membrane from a less concentrated solution to a more concentrated one until equilibrium is reached.

**Three states of the system:**

```
a) Osmosis               b) Equilibrium            c) Reverse Osmosis
┌─────┬──────┐         ┌─────┬──────┐            ┌─────┬──────┐
│water│solution│         │water │solution│ ← pressure π   │water │solution│ ← pressure p > π
│     │  ↑   │         │     │  =   │            │     │      │
│→→→→→│      │         │     │      │            │     │←←←←←←│
│     │      │         │     │      │            │     │      │
└─────┴──────┘         └─────┴──────┘            └─────┴──────┘
[membrane]               [membrane]               [membrane]
Water transfers          Equilibrium at         Applied pressure > π:
into solution          pressure π               water transfers BACK
```

**Osmotic pressure** $\pi$ — the pressure at which osmosis stops and equilibrium is reached.

### 3.2 van't Hoff Formula for Osmotic Pressure

$$\pi = i \cdot C \cdot R \cdot T = i \cdot c \cdot R \cdot T$$

where:
- $i$ — van't Hoff coefficient (for NaCl, KCl: $i = 2$; for Na₂SO₄: $i = 3$; for sucrose: $i = 1$)
- $C$ — mass concentration, kg/m³
- $M$ — molar mass, kg/mol
- $c = C/M$ — molar concentration, mol/m³
- $R = 8,314$ J/(mol·K) — gas constant
- $T$ — absolute temperature, K

**Example 1 — Sea Water:**

NaCl content 3.5% → $C = 35$ kg/m³, $M = 0,0585$ kg/mol, $i = 2$, $T = 298$ K:

$$\pi = 2 \cdot \frac{35}{0,0585} \cdot 8,314 \cdot 298 = 2 \cdot 598 \cdot 2477 \approx 2,96 \text{ MPa} \approx 30 \text{ atm}$$

Therefore, to purify seawater, you need pressure **greater than 30 atm** — this is an engineering challenge!

**Example 2 — Orange Juice 12°Brix:**

Sucrose content (mainly fructose + glucose): $C \approx 120$ kg/m³, $M \approx 0,18$ kg/mol, $i = 1$, $T = 298$ K:

$$\pi = 1 \cdot \frac{120}{0,18} \cdot 8,314 \cdot 298 \approx 1,65 \text{ MPa} \approx 16 \text{ atm}$$

For concentrating juice by reverse osmosis, pressure of **20–40 atm** is required.

### 3.3 Driving Force of Barmembrane Processes

**Reverse Osmosis** (osmotic pressure is significant):

$$\Delta p_{driving} = p_{working} - (\pi_1 - \pi_2)$$

where $\pi_1, \pi_2$ are osmotic pressures of concentrate and permeate.

**Ultrafiltration and Microfiltration** (osmotic pressure of proteins and bacteria is negligible):

$$\Delta p_{driving} \approx p_{working}$$

### 3.4 Permeate Flux

$$G = \frac{V}{F \cdot \tau} = K \cdot \Delta p$$

where:
- $G$ — permeate flux, m³/(m²·s)
- $V$ — permeate volume, m³
- $F$ — membrane area, m²
- $\tau$ — time, s
- $K$ — membrane permeability coefficient, m³/(m²·s·Pa)
- $\Delta p$ — driving force, Pa

Typical $G$ values for food applications:

| Process | $G$, L/(m²·h) | Pressure, bar |
|---|---|---|
| Reverse Osmosis (juice) | 10–30 | 30–60 |
| Nanofiltration | 20–60 | 10–30 |
| Ultrafiltration (milk) | 50–200 | 2–8 |
| Microfiltration (beer) | 200–800 | 1–2 |

### 3.5 Selectivity (Separation Factor) of Membrane

$$\varphi = \left(1 - \frac{C_2}{C_1}\right) \cdot 100\%$$

where $C_1$ is concentration of substance in feed, $C_2$ in permeate.

An ideal membrane: $\varphi = 100\%$ (passes nothing). Real values:

| Membrane | Substance | Selectivity |
|---|---|---|
| RO | NaCl | 95–99% |
| NF | Divalent ions Ca²⁺ | 90–98% |
| NF | Monovalent ions Na⁺ | 20–70% |
| UF | Protein (>10 kDa) | 95–99% |
| MF | Bacteria | >99.99% (log 4 reduction) |

---

## 4. Concentration Polarization — The Main Problem

![Dead-end and cross-flow filtration comparison](/images/lectures/separation/cross-flow-polarization.svg)

### 4.1 The Phenomenon

When filtering, solvent and small molecules pass through the membrane → large molecules and particles are retained → their concentration **increases** near the membrane surface. A **concentration boundary layer** (gel layer) forms.

Consequences:
- Osmotic pressure near the membrane increases → driving force decreases
- Hydraulic resistance of the membrane increases
- Flux drops 2–10 times compared to a "clean" membrane
- Selectivity decreases

> 💡 **Analogy:** concentration polarization is like a coffee filter that gradually gets clogged with coffee grounds. But unlike a paper filter where the "grounds" accumulate as solid, here the concentrated layer stays liquid and requires constant "flushing".

### 4.2 Ways to Combat Concentration Polarization

**1. Turbulent flow over the membrane surface:**
High flow velocity along the membrane (tangential filtering, cross-flow) — the most effective method.

```
Dead-end (dead-end):          Tangential (cross-flow):
  Feed → ┌────────┐          Feed → ═══════════════ → Concentrate
            │Membrane│                    ───────────────
            └────────┘                    ↓↓↓↓↓↓↓↓↓↓↓↓↓
              ↓↓↓↓↓↓                      Permeate
            Permeate
Accumulation.                 Surface constantly refreshed.
```

**2. Pressure and flow pulsations:** cyclic increase/decrease of pressure or backflushing with permeate.

**3. Mechanical cleaning of the surface:** rotating membranes, scrapers (for special constructions).

**4. Pre-filtration:** microfiltration or ultrafiltration before reverse osmosis — removes large particles that quickly clog the membrane.

---

## 5. Membrane Materials

### 5.1 Polymer Membranes (most common)

| Material | Abbreviation | Applications | Temperature |
|---|---|---|---|
| Cellulose acetate | CA | RO, UF | up to 45°C |
| Polyamides | PA | RO, NF | up to 45°C |
| Polysulfone | PS | UF, MF | up to 75°C |
| Polyether sulfone | PES | UF, MF | up to 75°C |
| Polyvinylidene fluoride | PVDF | MF, UF | up to 120°C |
| Polypropylene | PP | MF | up to 130°C |

> 💡 **PVDF and PP** are excellent choices for food industry: withstand steam sterilization (CIP and SIP), resistant to acids and caustic cleaning solutions.

### 5.2 Ceramic Membranes

- Materials: Al₂O₃, TiO₂, ZrO₂ on porous substrate
- Advantages: thermal resistance (up to 500°C), chemical resistance, mechanical strength, long service life (10–15 years)
- Disadvantages: 5–10 times more expensive than polymeric
- Applications: milk microfiltration at 50°C (instead of thermal), fruit juice purification, brewing

📺 **Video:** [Ceramic membrane filtration in dairy processing](https://www.gea.com/en/products/membrane-filtration/?i=Dairy)

---

## 6. Construction of Membrane Equipment

### 6.1 Flat Sheet Membrane Units (like filter press)

Construction resembles a plate filter press: plates compressed with bolts, membranes between them with drainage layer between them. Channels between membranes (0.5–5 mm) for solution flow.

- Specific area: 60–300 m²/m³
- Advantages: simple membrane replacement, easy cleaning
- Disadvantages: low specific area, manual assembly
- Applications: concentration of dilute food products of small volumes

### 6.2 Tubular Membrane Units

Resembles a shell-and-tube heat exchanger: tubes (membranes) in a shell. Solution flows inside tubes at high speed → minimal concentration polarization.

- Specific area: 60–200 m²/m³
- Advantages: excellent hydrodynamics, uniform flow, no dead zones, easy cleaning (can pass a ball)
- Disadvantages: low specific area, high material consumption
- Applications: products with particles (fruit juices, suspensions)

📺 **Video:** [Tubular membrane module — food industry application](https://www.gea.com/en/products/membrane-filtration/?i=Dairy)

### 6.3 Spiral Wound Membrane Modules

![Spiral-wound membrane module](/images/lectures/separation/spiral-wound-module.svg)

**Most common construction in industry.** Two membranes + drainage sheet + spacer screen rolled around a perforated tube for permeate drainage.

```
Feed flow →
  ══════════════════╗
  ──────────────────╢ ← membrane
  ══════════════════╢ ← drain (permeate flows toward tube)
  ──────────────────╢ ← membrane
  ══════════════════╣ → Concentrate
         ↓
     [permeate tube]
```

- Specific area: **300–800 m²/m³** — highest among all types!
- Advantages: compact, low material consumption, low cost
- Disadvantages: complex replacement (whole roll replaced), not suitable for suspensions with particles > 0.1 mm
- Applications: reverse osmosis (purification, juice concentration), nanofiltration

### 6.4 Hollow Fiber Membranes

Thousands of the thinnest tubes (50–1000 μm) in a housing. Solution flows inside fibers, permeate exits through walls.

- Specific area: **up to 2000 m²/m³** — record!
- Advantages: most compact type, very high surface area
- Disadvantages: cannot clean mechanically, sensitive to fouling (requires pre-filtration)
- Applications: ultrafiltration and microfiltration of pure solutions, water purification, whey protein production

---

## 7. Practical Applications in Food Industry

### 7.1 Orange Juice Concentration (RO + NF)

Traditional method: **evaporation** at 45–50°C under vacuum. Aroma partially preserved, but thermal stress remains.

Membrane method: **reverse osmosis** at room temperature.
- Concentration from 12°Brix to 40–45°Brix in one pass
- Then NF or second RO to 65°Brix
- Aroma and vitamin C preserved at 95–98% vs 70–80% with evaporation
- Energy savings: 5–8 times less than evaporation

**Limitation:** pressure limited by membrane and module mechanical strength (~70 bar) → maximum single-pass concentration ~45–50°Brix.

### 7.2 Ultrafiltration of Milk Serum — WPC and WPI

Milk serum is a by-product of cheese production. Contains 0.6–0.8% protein (β-lactoglobulin, α-lactalbumin), 4.5% lactose, minerals.

**UF scheme:**
```
Serum (0.7% protein) → UF unit → Permeate (lactose, minerals, water)
                                   ↓
                      Retentate (4–6% protein) — WPC 35
                                   ↓ (diafiltration)
                      WPC 80 (80% protein by dry matter)
                                   ↓ (additional UF)
                      WPI 90+ (isolate, > 90% protein)
```

This transforms a production by-product ($5/ton) into a valuable sports nutrition product ($3000–8000/ton WPI).

🔗 **Article:** [Whey protein concentration by ultrafiltration — Dairy Foods](https://www.dairyfoods.com)

### 7.3 Microfiltration of Milk (MF) — Cold Pasteurization

MF membranes (1.4 μm) retain **99.9%+** bacteria and all somatic cells. Milk becomes microbiologically safe **without heating**.

- Shelf life: 15–25 days (vs 7 days for pasteurized)
- Taste: "fresh" milk without characteristic pasteurization taste
- Technology name: **ESL (Extended Shelf Life) milk**
- Markets: France, Belgium, parts of EU market

📺 **Video:** [Microfiltration of milk — cold pasteurization technology](https://dairyprocessinghandbook.tetrapak.com/chapter/membrane-technology)

### 7.4 Nanofiltration for Demineralization of Milk Serum

Nanofiltration membranes pass monovalent ions (Na⁺, K⁺, Cl⁻) and retain divalent (Ca²⁺, Mg²⁺, SO₄²⁻) and organic molecules.

**Applications:** demineralization of serum for infant formula production — need to reduce mineral content, bringing it closer to breast milk composition.

NF demineralization: 25–30% reduction of initial mineral content.

### 7.5 Reverse Osmosis for Technical Water Purification

Food enterprises consume large amounts of water. RO purification:
- Removes chlorine, heavy metals, nitrates, pesticides
- Reduces hardness (prevents scale in heat exchangers)
- Standard for breweries — water for beer must have standard chemical composition regardless of source

---

## 8. Dialysis

Dialysis is a membrane filtration with simultaneous addition of water for "flushing" the retentate.

**Applications:** in whey protein WPC/WPI production, removal of lactose and mineral salts from whey protein concentrate.

**Dilution factor:**
$$\alpha = \frac{Q_D}{Q_n}$$

where $Q_n$ is permeate flow, $Q_D$ is added water flow.

At $\alpha = 0$ — pure concentration. At $\alpha > 0$ — simultaneous concentration + cleaning.

**Optimal strategy:** first concentration (to ~4% protein), then dialysis (remove lactose to <1%), then concentration again (to 8–10% protein) → spray drying → WPC 80.

---

## 9. Equipment Design for Membrane Systems

### 9.1 Tangential (Cross-Flow) Continuous Operation System

```
                    ┌──────────────────┐
  Feed →──────────→│ Membrane Module │──────────→ Concentrate (retentate)
                    └──────────────────┘
                            ↓↓↓
                          Permeate
                            ↑
  Pump ← ← ← ← ← ← ← ← ←┘
  (recirculation at 5–10x excess for maintaining speed)
```

Most industrial systems have 2–3 loops for gradual concentration — this reduces total membrane area by 40–60% compared to a single-loop system.

### 9.2 Membrane Regeneration (CIP for Membrane Systems)

Membranes are regenerated after:
- Each production shift (8–12 hours of operation)
- Flux drops 20–30% from initial

Typical CIP sequence:
1. **Water rinse** (20°C, 15 min) — removal of product residues
2. **Alkaline rinse** (NaOH 0.5–1%, 45–55°C, 30 min) — protein, fat removal
3. **Water rinse** (15 min)
4. **Acid rinse** (HNO₃ or citric acid 0.5–1%, 40°C, 20 min) — mineral deposit removal
5. **Final rinse** (20 min)

Temperature and pH limits depend on membrane material!

---

## Summary

**Four barmembrane processes:**

| Process | Pressure, MPa | What is Retained | Food Application |
|---|---|---|---|
| **RO** | 0.7–6.0 | Ions, small molecules | Juice concentration, water purification |
| **NF** | 0.4–3.0 | Divalent ions, sucrose | Serum demineralization |
| **UF** | 0.2–0.8 | Proteins, polysaccharides | WPC/WPI from serum, milk concentration |
| **MF** | 0.1–0.2 | Bacteria, yeast | ESL milk, beer clarification |

**van't Hoff Formula:**
$$\pi = i \cdot c \cdot R \cdot T$$

**Permeate Flux:**
$$G = K \cdot \Delta p$$

**Selectivity:**
$$\varphi = \left(1 - \frac{C_2}{C_1}\right) \cdot 100\%$$

**Concentration polarization** — accumulation of retained substances near the membrane → flux decrease. Solution: **tangential filtering** with recirculation.

---

## Self-Assessment Questions

1. A NaCl solution with concentration 10 g/L ($M = 0,0585$ kg/mol, $i = 2$) at 25°C. Calculate osmotic pressure (MPa). What minimum operating pressure is needed for reverse osmosis?

2. An ultrafiltration membrane ($K = 2 \cdot 10^{-11}$ m³/(m²·s·Pa)) at pressure 4 bar (400,000 Pa). Calculate permeate flux (L/(m²·h)).

3. β-lactoglobulin content in serum $C_1 = 7$ g/L, in permeate $C_2 = 0,07$ g/L. What is the membrane selectivity?

4. Explain why orange juice concentrate produced by reverse osmosis has better taste and aroma compared to evaporation-produced concentrate.

5. Milk serum undergoes ultrafiltration in tangential mode. Flow velocity is 5 m/s. How will membrane flux change if velocity is reduced to 1 m/s? Explain through concentration polarization.

---

## Useful Resources

### Membrane Equipment Manufacturers
- 🔗 [Alfa Laval membrane filtration](https://www.alfalaval.com/products/separation/membrane-filtration) — UF/MF for dairy industry
- 🔗 [Koch Separation Solutions](https://www.kochseparation.com) — wide range for food applications
- 🔗 [DowDuPont FILMTEC RO membranes](https://www.dupont.com/water/reverse-osmosis.html) — standard for RO membranes

### Scientific Resources
- 🔗 [Journal of Membrane Science](https://www.sciencedirect.com/journal/journal-of-membrane-science) — leading scientific journal
- 🔗 [Comprehensive Membrane Science and Engineering](https://www.elsevier.com) — fundamental textbook

### Industry Materials
- 🔗 [Dairy Foods — membrane technology articles](https://www.dairyfoods.com/topics/technology/separation-filtration)
- 🔗 [International Dairy Federation — IDF membrane resources](https://fil-idf.org)
- 📺 [How whey protein concentrate is made — UF technology](https://www.alfalaval.us/products/separation/membranes/membrane-filtration-systems/al-mem/)
- 📺 [Reverse osmosis explained simply](https://learncheme.com/quiz-yourself/interactive-self-study-modules/osmosis-and-reverse-osmosis/osmosis-and-reverse-osmosis-introduction/)

---

## Next Lecture

**Lecture 8 → Mixing in Food Production Facilities**

Mechanical mixers (blade, propeller, turbine), pneumatic mixing by air injection, ultrasonic and static mixing. Mixer power calculation. Scaling from laboratory to production.
