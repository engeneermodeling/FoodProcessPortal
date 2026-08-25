from __future__ import annotations

import re
from pathlib import Path


ROOT = Path("src/content/courses")


LOCALES = {
    "en": {
        "path": ROOT / "en/bioprocess-engineering/chapter-01-general-information.md",
        "body_start": "## Lecture Notes",
        "test": "## Self-Check Test",
        "next": "## Further Development",
        "body": r"""## Lecture Notes

This is a polished lecture version of textbook pages 21-43. The text, equations, table and figures are separated into editable blocks so the chapter can be read as a lecture and translated further without using page scans.

### Part 1. General Processes

### Chapter 1. General Information

### 1.1. Basic Laws of Technological Processes

#### Conservation of Mass and Energy

Technological processes in biotechnological production follow general physical and physicochemical laws. Applying these laws to a specific process makes it possible to build the process theory and the methods used to design equipment for carrying it out.

The most general laws of nature can be stated as follows: in nature and technology, only such transformations occur in which the total mass and energy of the system remain unchanged. In process engineering these laws are expressed as material and heat balances.

![Material balance scheme](/images/courses/bioprocess-engineering/chapter-01/fig-1-1.webp)
*Fig. 1.1. Material balance scheme.*

For an arbitrary apparatus, the material balance scheme is shown in Fig. 1.1. According to the law of conservation of mass, the material balance can be written as:

<pre class="formula-block"><code>P_A + P_B + P_C + P_D = P_E + P_F + P_G.        (1.1)</code></pre>

where A, B, C, D, E, F, G are the components entering and leaving the apparatus; P_i are their conventional masses.

![Heat balance scheme](/images/courses/bioprocess-engineering/chapter-01/fig-1-2.webp)
*Fig. 1.2. Heat balance scheme.*

By analogy, for the heat balance scheme (Fig. 1.2), the law of conservation of energy can be expressed by the heat balance of the enthalpy streams entering and leaving the apparatus:

<pre class="formula-block"><code>Q_A + Q_B + Q_C + Q_D + Q_int + Q_ext =
Q_E + Q_F + Q_G + Q_loss + ... .               (1.2)</code></pre>

where Q_int is heat released inside the apparatus during operation; Q_ext is heat supplied from outside; Q_loss is heat lost to the surroundings.

The heat balance can also be represented as a Sankey diagram (Fig. 1.3). The heat brought by each component is shown at a selected scale. The sum of the widths of all incoming heat-flow segments is equal to the sum of the widths of the outgoing heat-flow segments.

![Sankey diagram](/images/courses/bioprocess-engineering/chapter-01/fig-1-3.webp)
*Fig. 1.3. Sankey diagram.*

#### Transfer Laws

Many technological operations are governed by transfer processes. In hydrodynamic processes the transferred object is moving mass, in thermal processes it is thermal energy, and in diffusion processes it is a component transferred from one phase to another.

Hydrodynamic, thermal and diffusion processes have kinetic equations of a similar form. For heat transfer:

<pre class="formula-block"><code>dQ/dτ = K Δt = (1/R) Δt, kJ/(m²·s).             (1.3)</code></pre>

where Q is the heat transferred through 1 m² of heat-transfer surface; τ is time; K is the heat-transfer coefficient; Δt is the driving force, i.e. the temperature difference; R = 1/K is thermal resistance.

For diffusion mass-transfer processes:

<pre class="formula-block"><code>dM/dτ = K' ΔC = (1/R') ΔC, kg/(m²·s).           (1.4)</code></pre>

where dM is the amount of substance transferred; ΔC is the concentration difference; K' is the mass-transfer coefficient; R' = 1/K' is mass-transfer resistance.

For hydrodynamic processes, for example filtration:

<pre class="formula-block"><code>dW/dτ = (1/R_h) Δp = C_h Δp, m³/(m²·s).         (1.5)</code></pre>

where dW/dτ is the amount of filtrate; R_h is hydraulic resistance of the filter and cake; Δp is the pressure difference; C_h = 1/R_h is permeability.

Comparison of these three kinetic equations shows their complete analogy, often called the triple analogy. The general kinetic transfer equation is:

<pre class="formula-block"><code>I = L x,</code></pre>

where I is the process rate, L is permeability, and x is the driving force.

#### Equilibrium Laws

A set of interacting bodies is called a system. A key question is how far the system is from equilibrium and how it changes under external influence. A system is considered equilibrium when its state does not change with time. In terms of transfer processes, equilibrium is a state in which no transfer occurs even when partitions do not resist it.

The direction of change is described by the Gibbs phase rule and Le Chatelier's principle:

<pre class="formula-block"><code>S = K - f + 2,                                  (1.6)</code></pre>

where S is the number of degrees of freedom, K is the number of components, and f is the number of phases.

Le Chatelier's principle states that when a system is displaced from equilibrium, changes occur in directions opposite to the forces that caused the displacement. For process engineering this helps determine which parameters should be changed to obtain the required production effect.

#### Process Optimization

Any process can usually be implemented in several equipment variants. Selecting the most appropriate variant is optimization. The most common optimization criterion is the minimum cost of the product obtained in the process.

**Continuity of processes.** Biotechnological processes may be batch or continuous. Continuous processes reduce labor costs, save energy and materials, reduce equipment size, simplify automation, stabilize the operating regime and improve product quality.

**Countercurrent exchange.** In exchange processes, the interacting media can move countercurrently, cocurrently or crosswise (Fig. 1.4). For continuous heat and mass exchange, the countercurrent arrangement is often the most favorable.

![Countercurrent, cocurrent and cross-flow movement of media](/images/courses/bioprocess-engineering/chapter-01/fig-1-4.webp)
*Fig. 1.4. Countercurrent (1), cocurrent (2) and cross-flow (3) movement of media.*

**Renewal of the phase-contact surface.** Heat and mass exchange intensify when contact between media is closer and fresh elements of the media meet more often. This occurs during turbulent motion.

**Maximum heat recovery.** Many food and biotechnological processes require thermal energy. Heat wastes with lower potential should be reused whenever possible. Steam is convenient because its heat content is practically constant at a given pressure, which allows repeated use in a series of apparatuses.

**Scale-up law.** The size of an apparatus affects the process taking place inside it. Results obtained in small apparatuses can be transferred to large-scale equipment only with scale effects considered. This leads to the need for modeling and similarity theory.

### 1.2. Similarity Method and Its Role

New or improved production processes are first studied in laboratory units. Moving directly to full-scale equipment is expensive and risky. However, the transition from a laboratory unit to production scale often changes the process behavior because apparatus scale strongly affects the process. Therefore, pilot units are used between laboratory and production tests.

Similarity theory answers how a model should be shaped and sized so that its results can be applied to the full-scale apparatus. It also indicates which quantities should be measured, how experimental data should be processed, and how to construct a model similar to the original.

#### First Similarity Theorem

The first similarity theorem states that similar phenomena have numerically equal similarity criteria. For geometric similarity:

<pre class="formula-block"><code>L/l = α_l.</code></pre>

For kinematic similarity:

<pre class="formula-block"><code>T/t = α_t.</code></pre>

For dynamic similarity:

<pre class="formula-block"><code>K/k = α_k.</code></pre>

The generalized criterion of mechanical similarity is Newton's criterion:

<pre class="formula-block"><code>Ne = K / (ρ l² v²).                              (1.8)</code></pre>

For systems in a gravitational field:

<pre class="formula-block"><code>Fr = v² / (g l).                                 (1.10)</code></pre>

For systems governed by viscous-friction forces:

<pre class="formula-block"><code>Re = l v / ν = ρ v l / μ.                        (1.12)</code></pre>

#### Main Similarity Criteria

| Group | Criterion | Expression | Main quantities | Application |
|---|---|---|---|---|
| Mechanical similarity | Newton | `Ne = K/(ρl²v²)` | K - force; ρ - density; l - length; v - velocity | General criterion of mechanical similarity |
| Mechanical similarity | Froude | `Fr = v²/(gl)` | g - gravitational acceleration | Similarity in gravitational fields |
| Mechanical similarity | Euler | `Eu = Δp/(ρv²)` | Δp - pressure drop | Pressure-force action in flows |
| Mechanical similarity | Archimedes | `Ar = gl³(ρ₁-ρ₂)/(ν²ρ₂)` | ν - kinematic viscosity; ρ₁, ρ₂ - densities | Systems governed by viscosity and buoyancy |
| Mechanical similarity | Reynolds | `Re = lv/ν = vρl/μ` | μ - dynamic viscosity | Systems governed by viscous friction |
| Thermal similarity | Nusselt | `Nu = αl/λ` | α - heat-transfer coefficient; λ - thermal conductivity | Heat exchange between medium and wall |
| Thermal similarity | Prandtl | `Pr = cμ/λ` | c - heat capacity | Physical properties of the heat carrier |
| Thermal similarity | Peclet | `Pe = vt/a` | a - thermal diffusivity | Ratio of convective heat transfer to conduction |
| Thermal similarity | Kutateladze | `Ku = r/(cΔt)` | r - latent heat | Heat transfer with phase change |
| Diffusion similarity | Diffusion Nusselt | `Nu' = βl/D` | β - mass-transfer coefficient; D - diffusion coefficient | Mass transfer |
| Diffusion similarity | Diffusion Prandtl | `Pr' = ν/D` | ν - kinematic viscosity; D - diffusion coefficient | Physical properties of the medium |

*Table 1.1. Main similarity criteria.*

#### Second and Third Similarity Theorems

The second theorem states that any relationship between variables describing a phenomenon can be written as a relationship between similarity criteria:

<pre class="formula-block"><code>i = n - k,                                       (1.13)</code></pre>

For heat transfer, dimensional analysis can lead to:

<pre class="formula-block"><code>α = C l^β v^γ ρ^δ ν^ε c^η λ^θ.                  (1.14)</code></pre>

and then to the criterion equation:

<pre class="formula-block"><code>Nu = C Re^m Pr^n.                               (1.18)</code></pre>

The third theorem states that systems are similar if their uniqueness conditions are similar and the criteria composed from these conditions are numerically equal. Uniqueness conditions include geometry, physical constants, initial state and boundary conditions.

For a model pipeline, one of the similarity requirements is:

<pre class="formula-block"><code>Re_model = Re_full-scale.</code></pre>

Pressure-loss data can then be processed as:

<pre class="formula-block"><code>Eu = f(Re).</code></pre>

### 1.3. Basic Physical Properties of Substances

During technological processing, physicochemical properties of materials change. These data are needed to determine equipment dimensions, shape, construction, energy consumption and materials of construction.

Composition can be expressed by mass, volume and mole fractions:

<pre class="formula-block"><code>x_m = G_i/G;     x_V = V_i/V;     x_M = N_i/N.  (1.19)</code></pre>

For a component and for the mixture:

<pre class="formula-block"><code>G_i = N_i M_i;                                   (1.20)
G = N M.                                        (1.21)</code></pre>

The relationship between mass and mole fractions is:

<pre class="formula-block"><code>G_i/G = (N_i/N)(M_i/M),                          (1.22)
x_mi = x_Mi (M_i/M).                            (1.23)</code></pre>

The relationship with volume concentration is:

<pre class="formula-block"><code>G_i = ρ_i V_i;                                  (1.24)
G = ρ V;                                       (1.25)
x_mi = x_Vi (ρ_i/ρ).                           (1.27)</code></pre>

The general conversion is:

<pre class="formula-block"><code>x_mi = x_Mi (M_i/M) = x_Vi (ρ_i/ρ).             (1.28)</code></pre>

For binary mixtures:

<pre class="formula-block"><code>x_m = 1 / [1 + (M_a/M_b)(1/x_M - 1)],           (1.29)</code></pre>

<pre class="formula-block"><code>x_m = 1 / [1 + (ρ_b/ρ_a)(1/x_V - 1)],           (1.30)</code></pre>

<pre class="formula-block"><code>x_V = 1 / [1 + (ρ_a/ρ_b)(1/x_m - 1)].           (1.31)</code></pre>

### 1.4. Basic Physical and Technical Properties

Density is needed in mass-flow equations, material balances and criteria such as Re, Eu and Ar:

<pre class="formula-block"><code>ρ_mix = 1 / [x_m/ρ_a + (1 - x_m)/ρ_b].          (1.32)</code></pre>

For moisture content:

<pre class="formula-block"><code>ρ_mix = 100 / [(100 - ω)/ρ_a + ω/ρ_b].          (1.33)</code></pre>

Molecular mass of a binary mixture:

<pre class="formula-block"><code>M = 1 / [x_m/M_a + (1 - x_m)/M_b].              (1.34)</code></pre>

Viscosity is the resistance of liquids or gases to relative motion of their particles:

<pre class="formula-block"><code>T = μ S (dw/dl),                                 (1.35)</code></pre>

The kinematic viscosity is:

<pre class="formula-block"><code>ν = μ/ρ.                                        (1.36)</code></pre>

For gas mixtures:

<pre class="formula-block"><code>1/ν = x_1/ν_1 + x_2/ν_2 + x_3/ν_3 + ... .       (1.37)</code></pre>

For mutually insoluble liquid mixtures:

<pre class="formula-block"><code>lg(μ_mix) = x_1 lg(μ_1) + x_2 lg(μ_2) + ... .   (1.38)</code></pre>

For dilute suspensions:

<pre class="formula-block"><code>μ_s = μ_l (1 + 4.5 x_V),                        (1.39)</code></pre>

Thermal conductivity λ characterizes the ability of a substance to conduct heat. It depends on composition, temperature, pressure, density and moisture and appears in heat-transfer equations and the Nu and Pr criteria.

Physicochemical boiling-point elevation is the increase in boiling temperature of a solution compared with the saturated vapor temperature of the solvent. At other pressures it is estimated by:

<pre class="formula-block"><code>Δ_pc = Δ'_pc k.                                  (1.40)</code></pre>

### Textbook Self-Check Questions

1. State the laws of conservation of mass and energy.
2. Explain the transfer laws.
3. Explain the equilibrium laws.
4. What is the meaning of process optimization principles?
5. State the similarity theorems and their use in process scale-up.
6. Explain mathematical and physical modeling.
7. Which main physical properties of substances are used in process and equipment calculations?

## After studying this chapter, students should be able to

- prepare material and heat balances for biotechnological equipment;
- explain the triple analogy of mass, heat and momentum transfer;
- use equilibrium, the Gibbs phase rule and Le Chatelier's principle to analyze process direction;
- explain continuity, countercurrent flow, renewal of contact surface and heat recovery as optimization principles;
- distinguish geometric, kinematic and dynamic similarity;
- use Re, Fr, Eu, Nu, Pr, Pe and other criteria for analysis and scale-up;
- convert mass, volume and mole fractions;
- use density, viscosity, heat capacity, thermal conductivity and boiling-point elevation in calculations.
""",
        "next_text": "## Further Development\n\nThis chapter is now ready to serve as the translation template: text is separated from figures, equations are editable, and the similarity-criteria table is structured.\n",
    },
    "de": {
        "path": ROOT / "de/bioprocess-engineering/chapter-01-general-information.md",
        "body_start": "## Vorlesungsskript",
        "test": "## Selbsttest",
        "next": "## Weitere Ausarbeitung",
        "body": r"""## Vorlesungsskript

Dies ist eine redigierte Vorlesungsfassung der Lehrbuchseiten 21-43. Text, Gleichungen, Tabelle und Abbildungen sind als bearbeitbare Blöcke getrennt, damit das Kapitel nicht als Seitenscan, sondern als mehrsprachiges Lernmaterial funktioniert.

### Teil 1. Allgemeine Prozesse

### Kapitel 1. Allgemeine Angaben

### 1.1. Grundgesetze technologischer Prozesse

#### Erhaltung von Masse und Energie

Technologische Prozesse biotechnologischer Produktionen verlaufen nach allgemeinen physikalischen und physikalisch-chemischen Gesetzen. Ihre Anwendung auf einen konkreten Prozess ermöglicht die Theorie des Prozesses und die Auslegung der Apparate.

Die allgemeinsten Naturgesetze besagen, dass in Natur und Technik nur solche Umwandlungen stattfinden, bei denen Gesamtmasse und Gesamtenergie eines Systems unverändert bleiben. In der Verfahrenstechnik werden diese Gesetze als Stoff- und Wärmebilanzen formuliert.

![Schema der Stoffbilanz](/images/courses/bioprocess-engineering/chapter-01/fig-1-1.webp)
*Abb. 1.1. Schema der Stoffbilanz.*

Für einen beliebigen Apparat kann die Stoffbilanz geschrieben werden als:

<pre class="formula-block"><code>P_A + P_B + P_C + P_D = P_E + P_F + P_G.        (1.1)</code></pre>

Dabei sind A, B, C, D, E, F, G die in den Apparat eintretenden und austretenden Komponenten; P_i sind die entsprechenden Massen.

![Schema der Wärmebilanz](/images/courses/bioprocess-engineering/chapter-01/fig-1-2.webp)
*Abb. 1.2. Schema der Wärmebilanz.*

Analog kann die Wärmebilanz der eintretenden und austretenden Wärmeströme dargestellt werden:

<pre class="formula-block"><code>Q_A + Q_B + Q_C + Q_D + Q_int + Q_ext =
Q_E + Q_F + Q_G + Q_loss + ... .               (1.2)</code></pre>

Q_int ist die im Apparat frei werdende Wärme, Q_ext die von außen zugeführte Wärme und Q_loss der Wärmeverlust an die Umgebung.

![Sankey-Diagramm](/images/courses/bioprocess-engineering/chapter-01/fig-1-3.webp)
*Abb. 1.3. Sankey-Diagramm.*

#### Übertragungsgesetze

In vielen technologischen Operationen spielen Übertragungsvorgänge die Hauptrolle: Massenbewegung in hydrodynamischen Prozessen, Wärmeenergie in thermischen Prozessen und Stoffübergang zwischen Phasen in Diffusionsprozessen.

Für Wärmeübertragung:

<pre class="formula-block"><code>dQ/dτ = K Δt = (1/R) Δt, kJ/(m²·s).             (1.3)</code></pre>

Für Diffusions- und Stoffübertragungsprozesse:

<pre class="formula-block"><code>dM/dτ = K' ΔC = (1/R') ΔC, kg/(m²·s).           (1.4)</code></pre>

Für hydrodynamische Prozesse, z. B. Filtration:

<pre class="formula-block"><code>dW/dτ = (1/R_h) Δp = C_h Δp, m³/(m²·s).         (1.5)</code></pre>

Der Vergleich dieser Gleichungen zeigt die dreifache Analogie. Allgemein gilt:

<pre class="formula-block"><code>I = L x,</code></pre>

I ist die Prozessgeschwindigkeit, L die Durchlässigkeit und x die Triebkraft.

#### Gleichgewichtsgesetze und Optimierung

Ein System ist eine Gesamtheit wechselwirkender Körper. Für die technische Analyse ist wichtig, wie weit das System vom Gleichgewicht entfernt ist und wie es auf äußere Einwirkungen reagiert. Die Gibbs'sche Phasenregel lautet:

<pre class="formula-block"><code>S = K - f + 2,                                  (1.6)</code></pre>

S ist die Zahl der Freiheitsgrade, K die Zahl der Komponenten und f die Zahl der Phasen. Das Prinzip von Le Chatelier beschreibt die Richtung der Änderungen nach einer Störung des Gleichgewichts.

Optimierung bedeutet die Auswahl der zweckmäßigsten apparativen Ausführung. Wichtige allgemeine Lösungen sind kontinuierliche Prozessführung, Gegenstromführung, Erneuerung der Phasenkontaktfläche, Wärmerückgewinnung und die Beachtung des Maßstabsübergangs.

![Gegenstrom, Gleichstrom und Kreuzstrom der Medien](/images/courses/bioprocess-engineering/chapter-01/fig-1-4.webp)
*Abb. 1.4. Gegenstrom (1), Gleichstrom (2) und Kreuzstrom (3) der Medien.*

### 1.2. Ähnlichkeitsmethode und ihre Rolle

Neue Prozesse werden zuerst im Labor, danach in Pilotanlagen und schließlich im Produktionsmaßstab untersucht. Die Ähnlichkeitstheorie beantwortet, welche Größen gemessen werden müssen, wie Versuchsdaten auszuwerten sind und wie ein Modell aufgebaut wird, das dem Original ähnlich ist.

Für geometrische Ähnlichkeit gilt:

<pre class="formula-block"><code>L/l = α_l.</code></pre>

Für kinematische Ähnlichkeit:

<pre class="formula-block"><code>T/t = α_t.</code></pre>

Für dynamische Ähnlichkeit:

<pre class="formula-block"><code>K/k = α_k.</code></pre>

Das Newton-Kriterium ist:

<pre class="formula-block"><code>Ne = K / (ρ l² v²).                              (1.8)</code></pre>

Das Froude-Kriterium:

<pre class="formula-block"><code>Fr = v² / (g l).                                 (1.10)</code></pre>

Das Reynolds-Kriterium:

<pre class="formula-block"><code>Re = l v / ν = ρ v l / μ.                        (1.12)</code></pre>

#### Wichtige Ähnlichkeitskriterien

| Gruppe | Kriterium | Ausdruck | Hauptgrößen | Anwendung |
|---|---|---|---|---|
| Mechanisch | Newton | `Ne = K/(ρl²v²)` | K - Kraft; ρ - Dichte; l - Länge; v - Geschwindigkeit | Allgemeines Kriterium mechanischer Ähnlichkeit |
| Mechanisch | Froude | `Fr = v²/(gl)` | g - Erdbeschleunigung | Systeme im Schwerefeld |
| Mechanisch | Euler | `Eu = Δp/(ρv²)` | Δp - Druckabfall | Wirkung der Druckkraft in Strömungen |
| Mechanisch | Archimedes | `Ar = gl³(ρ₁-ρ₂)/(ν²ρ₂)` | ν - kinematische Viskosität; ρ₁, ρ₂ - Dichten | Viskosität und Auftrieb |
| Mechanisch | Reynolds | `Re = lv/ν = vρl/μ` | μ - dynamische Viskosität | Strömungen mit viskoser Reibung |
| Thermisch | Nusselt | `Nu = αl/λ` | α - Wärmeübergangskoeffizient; λ - Wärmeleitfähigkeit | Wärmeübergang zwischen Medium und Wand |
| Thermisch | Prandtl | `Pr = cμ/λ` | c - Wärmekapazität | Eigenschaften des Wärmeträgers |
| Thermisch | Peclet | `Pe = vt/a` | a - Temperaturleitfähigkeit | Konvektion im Verhältnis zur Wärmeleitung |
| Thermisch | Kutateladze | `Ku = r/(cΔt)` | r - Verdampfungs- oder Kondensationswärme | Wärmeübergang beim Phasenwechsel |
| Diffusiv | Nusselt | `Nu' = βl/D` | β - Stoffübergangskoeffizient; D - Diffusionskoeffizient | Stoffübergang |
| Diffusiv | Prandtl | `Pr' = ν/D` | ν - kinematische Viskosität; D - Diffusionskoeffizient | Eigenschaften des Mediums |

*Tabelle 1.1. Wichtige Ähnlichkeitskriterien.*

Die zweite Ähnlichkeitstheorie führt zu:

<pre class="formula-block"><code>i = n - k,                                       (1.13)</code></pre>

Für Wärmeübergang kann man schreiben:

<pre class="formula-block"><code>α = C l^β v^γ ρ^δ ν^ε c^η λ^θ.                  (1.14)</code></pre>

und erhält:

<pre class="formula-block"><code>Nu = C Re^m Pr^n.                               (1.18)</code></pre>

Die dritte Theorie verlangt ähnliche Eindeutigkeitsbedingungen und gleiche Kriterien. Für Rohrleitungsmodelle gilt beispielsweise:

<pre class="formula-block"><code>Re_Modell = Re_Original.</code></pre>

und die Druckverluste werden als:

<pre class="formula-block"><code>Eu = f(Re).</code></pre>

### 1.3. Grundlegende physikalische Stoffeigenschaften

Die Zusammensetzung einer Mischung kann durch Massen-, Volumen- und Molanteile angegeben werden:

<pre class="formula-block"><code>x_m = G_i/G;     x_V = V_i/V;     x_M = N_i/N.  (1.19)</code></pre>

<pre class="formula-block"><code>G_i = N_i M_i;                                   (1.20)
G = N M.                                        (1.21)</code></pre>

<pre class="formula-block"><code>G_i/G = (N_i/N)(M_i/M),                          (1.22)
x_mi = x_Mi (M_i/M).                            (1.23)</code></pre>

<pre class="formula-block"><code>G_i = ρ_i V_i;                                  (1.24)
G = ρ V;                                       (1.25)
x_mi = x_Vi (ρ_i/ρ).                           (1.27)</code></pre>

<pre class="formula-block"><code>x_mi = x_Mi (M_i/M) = x_Vi (ρ_i/ρ).             (1.28)</code></pre>

<pre class="formula-block"><code>x_m = 1 / [1 + (M_a/M_b)(1/x_M - 1)],           (1.29)</code></pre>

<pre class="formula-block"><code>x_m = 1 / [1 + (ρ_b/ρ_a)(1/x_V - 1)],           (1.30)</code></pre>

<pre class="formula-block"><code>x_V = 1 / [1 + (ρ_a/ρ_b)(1/x_m - 1)].           (1.31)</code></pre>

### 1.4. Physikalisch-technische Stoffeigenschaften

<pre class="formula-block"><code>ρ_mix = 1 / [x_m/ρ_a + (1 - x_m)/ρ_b].          (1.32)</code></pre>

<pre class="formula-block"><code>ρ_mix = 100 / [(100 - ω)/ρ_a + ω/ρ_b].          (1.33)</code></pre>

<pre class="formula-block"><code>M = 1 / [x_m/M_a + (1 - x_m)/M_b].              (1.34)</code></pre>

<pre class="formula-block"><code>T = μ S (dw/dl),                                 (1.35)</code></pre>

<pre class="formula-block"><code>ν = μ/ρ.                                        (1.36)</code></pre>

<pre class="formula-block"><code>1/ν = x_1/ν_1 + x_2/ν_2 + x_3/ν_3 + ... .       (1.37)</code></pre>

<pre class="formula-block"><code>lg(μ_mix) = x_1 lg(μ_1) + x_2 lg(μ_2) + ... .   (1.38)</code></pre>

<pre class="formula-block"><code>μ_s = μ_l (1 + 4.5 x_V),                        (1.39)</code></pre>

Die physikalisch-chemische Siedepunktserhöhung wird berechnet als:

<pre class="formula-block"><code>Δ_pc = Δ'_pc k.                                  (1.40)</code></pre>

## Nach dem Durcharbeiten dieses Kapitels sollen Studierende

- Stoff- und Wärmebilanzen für biotechnologische Apparate aufstellen;
- die dreifache Analogie der Übertragungsvorgänge erklären;
- Gleichgewicht, Gibbs'sche Phasenregel und Le Chatelier-Prinzip anwenden;
- geometrische, kinematische und dynamische Ähnlichkeit unterscheiden;
- Re, Fr, Eu, Nu, Pr, Pe und andere Kriterien für Analyse und Maßstabsübertragung nutzen;
- Massen-, Volumen- und Molanteile umrechnen;
- Dichte, Viskosität, Wärmekapazität, Wärmeleitfähigkeit und Siedepunktserhöhung in Berechnungen verwenden.
""",
        "next_text": "## Weitere Ausarbeitung\n\nDieses Kapitel ist nun als Übersetzungsvorlage nutzbar: Text, Abbildungen, Gleichungen und Tabelle sind getrennt und bearbeitbar.\n",
    },
}


LOCALES["ru"] = {
    "path": ROOT / "ru/bioprocess-engineering/chapter-01-general-information.md",
    "body_start": "## Конспект лекции",
    "test": "## Тест для самопроверки",
    "next": "## Дальнейшая проработка",
    "body": LOCALES["en"]["body"]
        .replace("## Lecture Notes", "## Конспект лекции")
        .replace("This is a polished lecture version of textbook pages 21-43. The text, equations, table and figures are separated into editable blocks so the chapter can be read as a lecture and translated further without using page scans.", "Это вычитанная лекционная версия страниц 21-43 учебника. Текст, формулы, таблица и рисунки вынесены в отдельные редактируемые блоки, поэтому материал можно читать как лекцию и дальше переводить без сканов страниц.")
        .replace("### Part 1. General Processes", "### Часть 1. Общие процессы")
        .replace("### Chapter 1. General Information", "### Раздел 1. Общие сведения")
        .replace("### 1.1. Basic Laws of Technological Processes", "### 1.1. Основные законы технологических процессов")
        .replace("#### Conservation of Mass and Energy", "#### Законы сохранения массы и энергии")
        .replace("![Material balance scheme]", "![Схема материального баланса]")
        .replace("*Fig. 1.1. Material balance scheme.*", "*Рис. 1.1. Схема материального баланса.*")
        .replace("![Heat balance scheme]", "![Схема теплового баланса]")
        .replace("*Fig. 1.2. Heat balance scheme.*", "*Рис. 1.2. Схема теплового баланса.*")
        .replace("![Sankey diagram]", "![Диаграмма Сенки]")
        .replace("*Fig. 1.3. Sankey diagram.*", "*Рис. 1.3. Диаграмма Сенки.*")
        .replace("#### Transfer Laws", "#### Законы переноса")
        .replace("#### Equilibrium Laws", "#### Законы равновесия")
        .replace("#### Process Optimization", "#### Принцип оптимизации ведения процесса")
        .replace("### 1.2. Similarity Method and Its Role", "### 1.2. Метод подобия и его роль")
        .replace("#### First Similarity Theorem", "#### Первая теорема подобия")
        .replace("#### Main Similarity Criteria", "#### Основные критерии подобия")
        .replace("*Table 1.1. Main similarity criteria.*", "*Таблица 1.1. Основные критерии подобия.*")
        .replace("### 1.3. Basic Physical Properties of Substances", "### 1.3. Основные физические свойства веществ")
        .replace("### 1.4. Basic Physical and Technical Properties", "### 1.4. Основные физико-технические свойства веществ")
        .replace("### Textbook Self-Check Questions", "### Вопросы и задания для самопроверки по учебнику")
        .replace("## After studying this chapter, students should be able to", "## После изучения раздела студент должен уметь"),
    "next_text": "## Дальнейшая проработка\n\nЭтот раздел теперь можно использовать как шаблон перевода: текст отделен от рисунков, формулы редактируемые, таблица критериев подобия структурирована.\n",
}


def replace_between(content: str, start: str, end: str, replacement: str) -> str:
    pattern = re.compile(rf"{re.escape(start)}\n\n.*?(?={re.escape(end)})", re.S)
    if not pattern.search(content):
        raise RuntimeError(f"Could not find {start!r}")
    return pattern.sub(replacement.rstrip() + "\n\n", content, count=1)


def main() -> None:
    for locale, data in LOCALES.items():
        path = data["path"]
        content = path.read_text(encoding="utf-8")
        content = replace_between(content, data["body_start"], data["test"], data["body"])
        content = re.sub(rf"{re.escape(data['next'])}\n\n.*?\Z", data["next_text"], content, flags=re.S)
        path.write_text(content, encoding="utf-8", newline="\n")
        print(f"Updated {locale}: {path}")


if __name__ == "__main__":
    main()
