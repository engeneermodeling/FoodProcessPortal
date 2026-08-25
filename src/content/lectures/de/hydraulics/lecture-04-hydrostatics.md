---
title: "Grundlagen der Hydraulik: Hydrostatik und Hydrodynamik"
topic: "hydraulics"
topic_title: "Grundlagen der Hydraulik"
lecture: 4
slug: "lecture-04-hydrostatics"
locale: "de"
description: "Hydrostatischer Druck, Pa·scal'sches Gesetz, Bernoulli-Gleichung, Fließregime von Flüssigkeiten. Rohrberechnungen für Lebensmittelindustrie."
keywords: ["hydrostatik", "hydrodynamik", "Bernoulli-Gleichung", "fließregime", "Reynolds-Zahl", "rohre", "lebensmittelindustrie"]
duration: "55 min"
difficulty: "grundlegend"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Vorlesung 4. Grundlagen der Hydraulik: Hydrostatik und Hydrodynamik

## Was Sie lernen werden

Nach dieser Vorlesung können Sie:

- die **grundgesetz der Hydrostatik** für die Druckberechnung in belleg Fluidstellen anwenden
- **Pa·scal'sches Gesetz** erklären und drei Beispiele für seine Anwendung in Lebensmittelgeräten nennen
- die **Bernoulli-Gleichung** ableiten und benutzen, um **Flüssigkeitsgeschwindigkeit** und **Durchflussrate** zu berechnen
- das **Fließregime** von Milch, Saft oder anderen Flüssigkeiten in einem Rohr mittels Reynolds-Zahl bestimmen
- **Druckverluste** in einer Lebensmittelindustrie-Rohrleitung berechnen

---

## 1. Warum braucht die Lebensmittelindustrie Hydraulik?

Betrachten Sie jedes Lebensmittelproduktionsbetrieb — Milchfabrik, Brauerei, Saftfabrik. Flüssigkeiten werden überall durch Rohrleitungen transportiert. Milch fließt zum Pa·steurisator, Saft wird zur Füllanlage gepumpt, Bier strömt vom Braugerät zum Filter.

In allen Punkten stehen dieselben Fragen:
- Welche Pumpe soll ich wählen, um 5000 kg/h Milch mit einem Hebel von 10 m anzupumpen?
- Welcher Rohrdurchmesser sorgt für die erforderliche Durchflussmenge ohne übermäßige Druckverluste?
- Wird das Fließregime laminar oder turbulenter — und wie beeinflusst dies die Pa·steurisierung?

Die Antworten liefert die **Hydrotehnik** — die Wissenschaft von Flüssigkeitsbewegung und den daraus entstehenden Kräften.

📺 **Video:** [Fluid mechanics in food processing](https://ocw.mit.edu/courses/2-06-fluid-dynamics-spring-2013/)

---

## 2. Hydrostatik

![Hydrostatischer Druck in einem Behälter](/images/lectures/hydraulics/hydrostatic-pressure.svg)

### 2.1 Grundgesetz der Hydrostatik

Der Druck in bellegem ruhender Flüssigkeitspunkt:

$$p = p_0 + \rho g h$$

wobei:
- $p_0$ — Druck an der Flüssigkeitsfläche, Pa·s
- $\rho$ — Dichte, kg/m³
- $g$ — Erdbeschleunigung, 9,81 m/s²
- $h$ — Tiefe des Punktes unter der Flüssigkeitsfläche, m

**Physikalische Bedeutung:** Der Druck in der Flüssigkeit nimmt mit der Tiefe proportional zum Gewicht der über dem Punkt liegenden Flüssigkeitsschicht zu.

### 2.2 Absolute, Mess- und Unterdruck

In der Praxis werden drei Druckformen verwendet:

| Form | Bezeichnung | Definition |
|---|---|---|
| **Absolutdruck** | $p_{abs}$ | Vollständiger Druck, gemessen von Null (absolutes Vakuum) |
| **Messdruck** (manometrisch) | $p_{gauge}$ | $p_{abs} - p_{atm}$, anzeigend durch einen Druckmesser |
| **Unterdruck** | $p_{vac}$ | $p_{atm} - p_{abs}$, anzeigend durch einen Unterdruckmesser (wenn $p_{abs} < p_{atm}$) |

> 💡 **In der Produktion:** Messdruckmesser zeigen **Messdruck**. Wenn der Messdruck 0,3 MPa anzeigt — absoluter Druck = 0,1 + 0,3 = 0,4 MPa. Unterdruckmesser auf Verdampfern zeigen **Unterdruck** — wie viel Druck unter atmosphärisch ist.

### 2.3 Pa·scal'sches Gesetz

> **Ein auf eine geschlossene stationäre Flüssigkeit ausgeübvener Druck wird gleich in alle Richtungen übertragen, ohne Veränderung.**

$$p = \frac{F}{A} = \text{konstant im gesamten Volumen}$$

**Beispiele für seine Anwendung in Lebensmittelgeräten:**

**Hydraulischer Press** zur Saft- und Ölextraktion:
Eine kleine Kraft $F_1$ auf einer kleinen Kolonne $A_1$ erzeugt Druck $p = F_1/A_1$. Dieser Druck wirkt auf eine große Kolonne $A_2$, wo eine große Kraft $F_2 = p \cdot A_2$ entsteht.

$$\frac{F_2}{F_1} = \frac{A_2}{A_1}$$

Wenn $A_2/A_1 = 50$ — die Kraft vergrößert sich um 50-mal. Das ist das Funktionsprinzip des **HydraulizPresses zur Weinfachtechnologie**.

**Sterilisator (Autoklav)** zur Konservierung: Messdruck ist gleich in alle Punkten — die Inhaltemischung wird unabhängig von der Position gleichmäßig sterblich gemacht.

**Milch-Homogenisator:** Milch wird unter Druck 10–25 MPa durch eine enge Spalte gezwungen. Fetttröpfchen werden zerbrechen → Milch wird gleichmäßig, Fett cremt nicht.

📺 **Video:** [How does a homogenizer work](https://dairyprocessinghandbook.tetrapak.com/chapter/homogenizers)

### 2.4 Druckmessinstrumente

| Instrument | Prinzip der Funktion | Anwendung |
|---|---|---|
| **Manometer** (Federdrückmessgerät) | Gläschenverformung | Druck in Rohren, Autoklav |
| **Unterdruckmesser** | Gleiches Prinzip, aber für negativen Messdruck | Unterdruckverdampfer |
| **Manovakuum-Messer** | Zeigt sowohl Druck als auch Unterdruck an | Universal |
| **Flüssigmansometer** (U-förmig) | $p = \rho g h$ | Genaue Labormessungen |
| **Schichtanzeige** (hydrostatisch) | $\rho g h$ | Schichtkontrolle von Milch, Saft in Containern |

**Hydrostatisches Schichtanzeigest system** — ein wichtiges Detail. Ein Sensor am Boden eines Tanks misst Druck $p = \rho g h$. Bei bekannter Produktdichte $\rho$ berechnet der Controller $h$ — die Flüssigkeitsschicht. Kein Aufstieg in den Tank nötig!

---

## 3. Hydrodynamik: Flüssigkeitsbewegung

### 3.1 Kontinuitätsgleichung (Erhaltung des Durchflusses)

Bei einer nicht-kompressiblen Flüssigkeit (Flüssigkeiten, im Gegensatz zu Gasen praktisch nicht kompressibel) ändert sich der Durchfluss entlang der Rohroleitung nicht:

$$Q = w_1 A_1 = w_2 A_2 = \text{konstant}$$

wo $Q$ das Volumen-Durchfluss ist (m³/s), $w$ die Geschwindigkeit (m/s), $A$ die Querschnittsfläche (m²).

**Folgerung:** Wo der Rohr verengt ist — fließt die Flüssigkeit schneller.

$$\frac{w_2}{w_1} = \frac{A_1}{A_2} = \frac{d_1^2}{d_2^2}$$

**Beispiel:** Milch fließt mit Geschwindigkeit 0,5 m/s durch einen Rohr mit Durchmesser 50 mm. Wie hoch ist die Geschwindigkeit im verengten Abschnitt mit Durchmesser 25 mm?

$$w_2 = w_1 \cdot \frac{d_1^2}{d_2^2} = 0{,}5 \cdot \frac{50^2}{25^2} = 0{,}5 \cdot 4 = 2{,}0 \text{ m/s}$$

Verengung um 2-mal — Geschwindigkeit steigt **um 4-mal**!

### 3.2 Bernoulli-Gleichung

![Bernoulli-Gleichung als Förderhöhenbilanz](/images/lectures/hydraulics/bernoulli-energy.svg)

Bernoulli-Gleichung ist die Energie-Erhaltungsgesetz für Flüssigkeitsbewegung:

$$z_1 + \frac{p_1}{\rho g} + \frac{w_1^2}{2g} = z_2 + \frac{p_2}{\rho g} + \frac{w_2^2}{2g} + h_{loss}$$

wo jeder Term eine **Energie-Gradlinie** (Höhe des Flüssigkeitscolums, die dieser Energie entspricht) ist:

| Term | Name | Physikalische Bedeutung |
|---|---|---|
| $z$ | Geometrische Grade | Potenzielle Energie der Position |
| $p/(\rho g)$ | Piezometrische Grade | Potenzielle Energie des Drucks |
| $w^2/(2g)$ | Kinetische Grade | Kinetische Energie |
| $h_{loss}$ | Verluste | Irreversible Verluste durch Reibung und lokale Hindernisse |

> 🌟 **Summe der ersten drei Terme = Gesamtgrade-Linie.** Ohne Verluste ($h_{loss} = 0$) würde die Gesamtgrade-Linie entlang des Flusses konstant bleiben. In der Realität nimmt sie aufgrund der Reibung ab.

### 3.3 Praktische Anwendung der Bernoulli-Gleichung

**Beispiel 1: Geschwindigkeit von Milch, die aus einem Tank tropft**

Tank mit Apfelsaft ($\rho = 1055$ kg/m³), Flüssigkeitsstand ist $H = 2{,}5$ m über dem Austrittloch. Druck über dem Saft und am Austritt ist atmosphärisch. Wie hoch ist die Geschwindigkeit?

Section 1 — Saftoberfläche ($z_1 = H$, $w_1 \approx 0$, $p_1 = p_{atm}$)
Section 2 — Austritt ($z_2 = 0$, $p_2 = p_{atm}$)

Einsetzen in Bernoulli-Gleichung (ohne Verluste für ideales Fluid):

$$H + \frac{p_{atm}}{\rho g} + 0 = 0 + \frac{p_{atm}}{\rho g} + \frac{w_2^2}{2g}$$

$$w_2 = \sqrt{2gH} = \sqrt{2 \cdot 9{,}81 \cdot 2{,}5} = 7{,}0 \text{ m/s}$$

Bei realen Flüssigkeiten ist die Geschwindigkeit niedriger aufgrund von Verlusten: $w_2 = \varphi\sqrt{2gH}$, wobei $\varphi = 0{,}96\ldots0{,}99$ — Geschwindigkeitsbeiwert ist.

**Durchfluss durch eine Kreislochöffnung mit Durchmesser $d$:**

$$Q = \alpha \cdot \frac{\pi d^2}{4} \cdot \sqrt{2gH}$$

wo $\alpha \approx 0{,}62$ — Austrittsbeiwert (berücksichtigt Schwallzusammenziehung und Reibung).

**Beispiel 2: Rohrleitungs-Druckverlust-Berechnung**

Erforderlich, Milch ($\rho = 1030$ kg/m³) von einem Tank ($z_1 = 0$, $p_1 = p_{atm}$) zu einem Pa·steurisator auf Höhe $z_2 = 8$ m mit Messdruck $p_{gauge} = 0{,}2$ MPa zu pumpen. Durchfluss $Q = 5000$ kg/h, Rohrdurchmesser $d = 0{,}05$ m. Bestimmen Sie erforderliche Pumpenhöhe.

**Schritt 1.** Massendurchfluss → Volumendurchfluss:
$$Q_V = \frac{5000}{1030 \cdot 3600} = 1{,}35 \cdot 10^{-3} \text{ m}^3/\text{s}$$

**Schritt 2.** Flüssigkeitsgeschwindigkeit in Rohr:
$$w = \frac{Q_V}{A} = \frac{1{,}35 \cdot 10^{-3}}{\pi \cdot 0{,}05^2/4} = \frac{1{,}35 \cdot 10^{-3}}{1{,}96 \cdot 10^{-3}} = 0{,}69 \text{ m/s}$$

**Schritt 3.** Bernoulli-Gleichung mit Pumpe:

$$H_{pump} = z_2 - z_1 + \frac{p_2 - p_1}{\rho g} + \frac{w_2^2 - w_1^2}{2g} + h_{loss}$$

$$H_{pump} = 8 + \frac{200\,000}{1030 \cdot 9{,}81} + \frac{0{,}69^2}{2 \cdot 9{,}81} + h_{loss}$$

$$H_{pump} = 8 + 19{,}8 + 0{,}024 + h_{loss} \approx 27{,}8 + h_{loss}$$

Wir berechnen die Reibungsverluste $h_{loss}$ in Abschnitt 5.

---

## 4. Flüssigkeits-Fließregime

![Strömungsregime nach Reynolds-Zahl](/images/lectures/hydraulics/reynolds-flow-regimes.svg)

### 4.1 Reynolds-Experiment

Bei 1883 führte der britische Physiker **Osborne Reynolds** ein klassisches Experiment durch: Er ließ einen dünnen Farbstrang in Wasserströmung in einem Glasrohr zu und beobachtete, was beim erhöhten Geschwindigkeitsstrom passiert.

- Bei **niedriger Geschwindigkeit** — Farbstrang wird als kontinuierliche Linie gezogen, mischt sich nicht mit Wasser → **laminares Regime**
- Bei **hoher Geschwindigkeit** — Farbstrang verdichtet sich und mischt sich mit Wasser → **turbulentes Regime**

📺 **Video:** [Reynolds experiment — laminar vs turbulent flow visualization](https://learncheme.com/)

### 4.2 Reynolds-Kriterium und Regime-Grenzen

$$Re = \frac{w \cdot d \cdot \rho}{\mu} = \frac{w \cdot d}{\nu}$$

| Regime | Bedingung | Fließcharakteristik |
|---|---|---|
| **Laminar** | $Re < 2300$ | Flüssigkeitsschichten bewegen sich parallel, keine Vermischung |
| **Übergang** | $2300 < Re < 10\,000$ | Instabil — kann laminär oder turbulent sein |
| **Turbulent** | $Re > 10\,000$ | Chaotische Teilchenbewegung, intensive Vermischung |

### 4.3 Geschwindigkeitsprofile

Bei **laminarem Regime** ist die Geschwindigkeitsverteilung parabelförmig:

$$w(r) = \frac{\Delta p}{4\mu l}(R^2 - r^2)$$

- Maximalgeschwindigkeit auf der Achse: $w_{max}$
- Durchschnittsgeschwindigkeit: $\bar{w} = 0{,}5 \cdot w_{max}$

Bei **turbulenter Regime** ist das Profil eher gleichmäßig:
- $\bar{w} \approx 0{,}8 \cdot w_{max}$ bei $Re = 10^4$
- $\bar{w} \approx 0{,}9 \cdot w_{max}$ bei $Re = 10^8$

> 💡 **Wichtig für die Pa·steurisierung!** Bei lentigem Regime fließt Milch in einem Rohr 2-mal schneller auf der Achse als die Durchschnittsgeschwindigkeit — sie verbringt doppelt so wenig Zeit im Erwärmungsbereich. Teile der Milch könnten **nicht pasteurisiert** sein! Deshalb erfordern Normen für die Pa·steurisierung turbulente Strömung ($Re > 10\,000$).

### 4.4 Druckverlust im laminären Regime — Poiseuille-Formel

$$Q = \frac{\pi \Delta p \cdot d^4}{128 \mu l}$$

wo $\Delta p$ Druckabfall in Pa ist, $d$ Rohrdurchmesser in m, $\mu$ Viskosität in Pa·s, $l$ Länge in m.

**Wichtige Schlussfolgerung:** Der Durchfluss ist proportional zu $d^4$. Verdopplung des Rohrdurchmessers → Durchfluss steigt **um 16-mal**! Deshalb ist die Wahl des richtigen Rohrdurchmessers entscheidend wichtig.

---

## 5. Lokale Verluste und Druckverluste

![Druckhöhenverluste in einer Lebensmittelrohrleitung](/images/lectures/hydraulics/head-loss-pipeline.svg)

### 5.1 Allgemeine Formel

Gesamte Druckverluste bestehen aus zwei Teilen:

$$h_{loss} = h_{major} + h_{minor}$$

wo $h_{major}$ Reibungsverluste entlang der Länge sind, $h_{minor}$ lokale Verluste.

### 5.2 Reibungsverluste — Darcy-Weisbach-Formel

$$h_{major} = \lambda \cdot \frac{l}{d} \cdot \frac{w^2}{2g}$$

oder für Druckverlust:

$$\Delta p_{major} = \lambda \cdot \frac{l}{d} \cdot \frac{\rho w^2}{2}$$

wo $\lambda$ der **hydraulische Reibungsbeiwert** (dimensionslos) ist.

### 5.3 Hydraulischer Reibungsbeiwert λ

**Bei laminärem Regime** ($Re < 2300$):

$$\lambda = \frac{64}{Re}$$

**Bei turbulenter Regime** für glatte Rohre ($4 \cdot 10^3 < Re < 10^5$) — Blasius-Formel:

$$\lambda = \frac{0{,}3164}{Re^{0{,}25}}$$

**Bei turbulenter Regime** für rauche Rohre — Colebrook-Formel:

$$\lambda = 0{,}11 \left(\frac{\varepsilon}{d} + \frac{68}{Re}\right)^{0{,}25}$$

wo $\varepsilon$ absolute Rauhgraue des Rohrwandes ist.

**Rauhgraue verschiedener Rohrleitungen in der Lebensmittelindustrie:**

| Rohrmaterial | $\varepsilon$, mm |
|---|---|
| Neues rostfreies Stahl | 0,10 |
| Lebensmittelecht rostfreier Stahl (AISI 304, 316L) | 0,002–0,010 |
| Glas und Kunststoff | 0,001–0,002 |
| Gusseiserne | 0,25 |
| Altes kontaminiertes | bis 2,0 |

> 💡 **Die Lebensmittelindustrie verwendet rostfreie Stahlrohre** — niedrige Rauhgraue, leicht zu reinigen, korrosionsbeständig. Standard ist AISI 316L für Milchproduktion.

### 5.4 Lokale Verluste

Lokale Verluste treten auf, wo sich Geschwindigkeit oder Richtung ändert:

$$h_{minor} = \xi \cdot \frac{w^2}{2g}$$

wo $\xi$ lokaler Verlustbeiwert ist.

| Rohrleitungselement | $\xi$ |
|---|---|
| Rohreintritt aus Tank (scharfe Kante) | 0,5 |
| Rohraustritt zu Tank | 1,0 |
| 90°-Kurve ohne Rundung | 1,2 |
| 90°-Kurve mit glatter Rundung | 0,3–0,5 |
| Schlauchabschluss | 1,0–1,5 |
| Ventil vollständig geöffnet (d = 50 mm) | 6,0 |
| Sichtschraube vollständig geöffnet | 0,1–0,2 |
| Kolbenventil | 2,0–5,0 |
| Plötzliche Verengung | 0,4–0,5 |
| Plötzliche Weitergewinnung | $(1 - A_1/A_2)^2$ |

**Allgemeine Formel mit allen Verlusten:**

$$h_{loss} = \left(\lambda \cdot \frac{l}{d} + \sum \xi\right) \cdot \frac{w^2}{2g}$$

### 5.5 Vollständiges Berechnungsbeispiel

**Problem:** Berechnen Sie Druckverluste beim Pumpen von Milch durch eine Milchfabrik-Rohrleitung.

**Gegeben:**
- Milch bei 20°C: $\rho = 1030$ kg/m³, $\mu = 2{,}1 \cdot 10^{-3}$ Pa·s
- Rostfreier Stahlrohr, $d = 0{,}05$ m, $l = 30$ m, $\varepsilon = 0{,}005$ mm
- Milchgeschwindigkeit $w = 1{,}5$ m/s
- Lokale Verluste: 2 × 90°-Kurven ($\xi = 0{,}4$ jeweils), 1 Ventil ($\xi = 6{,}0$), Eintritt ($\xi = 0{,}5$), Austritt ($\xi = 1{,}0$)

**Lösung:**

**Schritt 1.** Reynolds-Zahl:
$$Re = \frac{1{,}5 \cdot 0{,}05 \cdot 1030}{2{,}1 \cdot 10^{-3}} = \frac{77{,}25}{0{,}0021} = 36\,786$$

Regime — **turbulent** ($Re > 10\,000$).

**Schritt 2.** Reibungsbeiwert λ (Colebrook-Formel, $\varepsilon/d = 0{,}005/50 = 0{,}0001$):
$$\lambda = 0{,}11\left(0{,}0001 + \frac{68}{36786}\right)^{0{,}25} = 0{,}11 \cdot (0{,}0001 + 0{,}00185)^{0{,}25}$$
$$\lambda = 0{,}11 \cdot (0{,}00195)^{0{,}25} = 0{,}11 \cdot 0{,}210 = 0{,}0231$$

**Schritt 3.**kinetischer Abschnitt:
$$\frac{w^2}{2g} = \frac{1{,}5^2}{2 \cdot 9{,}81} = \frac{2{,}25}{19{,}62} = 0{,}115 \text{ m}$$

**Schritt 4.** Reibungsverluste:
$$h_{major} = \lambda \cdot \frac{l}{d} \cdot \frac{w^2}{2g} = 0{,}0231 \cdot \frac{30}{0{,}05} \cdot 0{,}115 = 0{,}0231 \cdot 600 \cdot 0{,}115 = 1{,}59 \text{ m}$$

**Schritt 5.** Lokale Verluste:
$$\sum \xi = 2 \cdot 0{,}4 + 6{,}0 + 0{,}5 + 1{,}0 = 8{,}3$$
$$h_{minor} = 8{,}3 \cdot 0{,}115 = 0{,}955 \text{ m}$$

**Schritt 6.** Gesamtverluste:
$$h_{loss} = 1{,}59 + 0{,}955 = \boxed{2{,}55 \text{ m}}$$

Zurück zu Bernoulli-Beispiel 2: $H_{pump} = 27{,}8 + 2{,}55 \approx 30{,}4$ m — erforderliche Pumpenhöhe.

---

## 7. Optimale Geschwindigkeiten in Rohrleitungen

In der Praxis wählt man die Flüssigkeitsgeschwindigkeit in Rohrleitungen unter Berücksichtigung zwei entgegengesetzter Faktoren:
- **Höhere Geschwindigkeit** → kleinere Rohrgröße → günstigere Rohrleitung, aber höhere Druckverluste und Pumpenergie
- **Niedrigere Geschwindigkeit** → größere Rohrgröße → teurere Rohrleitung, aber niedrigere Betriebskosten

**Empfohlene Geschwindigkeiten für Lebensmittelindustrie:**

| Flüssigkeit und Bedingungen | Geschwindigkeit, m/s |
|---|---|
| Milch, Säfte (selbstpumpende Rohrleitungen) | 0,1–0,5 |
| Milch, Säfte (durch Druck gepumpt) | 0,5–2,5 |
| Viskose Flüssigkeiten (Sirup, Sauce) | 0,1–0,5 |
| Gase und Dämpfe | 10–30 |
| Technisches Wasser | 1,0–2,5 |
| Reinigung (CIP) | 1,5–3,0 |

> 💡 **CIP (Clean-in-Place)** — Reinigungssysteme ohre Entfernung in der Lebensmittelindustrie. Reinigungslösung wird durch Rohrleitungen und Geräte gepumpt, ohne sie zu demontieren. Für eine effektive Reinigung wird **turbulente Strömung** benötigt ($Re > 10\,000$) — das ist der Grund, warum CIP-Geschwindigkeit höher ist als bei Produktpumpen.

---

## Zusammenfassung

**Hydrostatik:**
$$p = p_0 + \rho g h \quad \text{(Grundgesetz)}$$

**Pa·scal-Gesetz:** Druck wird gleich in alle Richtungen übertragen → Prinzip der Hydraulikpresse, Milch-Homogenisator, Autoklav.

**Bernoulli-Gleichung:**
$$z_1 + \frac{p_1}{\rho g} + \frac{w_1^2}{2g} = z_2 + \frac{p_2}{\rho g} + \frac{w_2^2}{2g} + h_{loss}$$

**Fließregime:**

| $Re$ | Regime | Wichtig für |
|---|---|---|
| $< 2300$ | Laminar | Viskose Produkte, Soßen, Pa·sten |
| $> 10\,000$ | Turbulent | Pa·steurisierung, CIP-Reinigung |

**Druckverluste:**
$$h_{loss} = \left(\lambda \cdot \frac{l}{d} + \sum \xi\right) \cdot \frac{w^2}{2g}$$

wobei $\lambda = 64/Re$ (laminar) oder $\lambda = 0{,}3164/Re^{0{,}25}$ (turbulent) ist.

---

## Selbstkontrollfragen

1. Ein Tank mit Apfelsaft ($\rho = 1055$ kg/m³) hat ein Flüssigkeitsniveau 2,5 m. Wie hoch ist der **Messdruck** an der Rohrleitungstiefe (kPa)?

2. Milch fließt in einem Rohr $d_1 = 40$ mm mit Geschwindigkeit 0,8 m/s. Die Rohrleitung verengt sich zu $d_2 = 20$ mm. Wie hoch ist die Geschwindigkeit im engen Abschnitt?

3. Bestimmen Sie das Fließregime von Tomatensauce ($\rho = 1065$ kg/m³, $\mu = 5 \cdot 10^{-3}$ Pa·s) in einem Rohr $d = 0{,}06$ m bei Geschwindigkeit $w = 0{,}4$ m/s. Wird die Pa·steurisierung effektiv?

4. Berechnen Sie den Reibungsbeiwert λ für turbulente Strömung von Milch bei $Re = 25\,000$ in einem glatten Rohr (Blasius-Formel).

5. Rohrleitungslänge 20 m, $d = 0{,}04$ m, rostfreier Stahl ($\varepsilon = 0{,}005$ mm). Milch ($\rho = 1030$ kg/m³, $\nu = 2 \cdot 10^{-6}$ m²/s) fließt mit Geschwindigkeit 1,2 m/s. Lokale Verluste: Kurve ($\xi = 0{,}4$), Ventil ($\xi = 6{,}0$). Bestimmen Sie Gesamte Druckverluste und Druckabfall (Pa).

---

## Nützliche Ressourcen

### Online-Rechner
- 🔗 [Pipe Flow Calculator](https://www.pipeflowcalculations.com) — Re, λ, Druckverlust-Berechnungen online
- 🔗 [Engineering ToolBox — Hydraulik-Berechnungen](https://www.engineeringtoolbox.com/hydraulics-t_18.html) — Referenzen und Formeln

### Lehrbücher
- 🔗 [Streeter & Wylie — Fluid Mechanics](https://www.mheducation.com) — Klassisches Lehrbuch
- 🔗 [Munson, Young, Okiishi — Fundamentals of Fluid Mechanics](https://www.wiley.com) — Modernes Standard-Lehrbuch

### Videos
- 📺 [MIT OCW — Fluidmechanik-Vorlesungen](https://ocw.mit.edu/courses/2-06-fluid-dynamics-spring-2013/)
- 📺 [Bernoulli-Gleichung-Beispiele — Khan Academy](https://www.khanacademy.org/science/in-in-class11th-physics/in-in-class11th-physics-fluids/in-in-fluid-dynamics/e/understanding-bernoulli-s-equation)
- 📺 [Rohrfluss-Reibungsverluste — erklärt](https://www.engineeringtoolbox.com/amp/darcy-weisbach-equation-d_646.html)

---

## Nächste Vorlesung

**Vorlesung 5 → Pumpen und Gaskraftmaschinen**

Zentrifugale, Volumen- und Rotationspumpen — Bauweise, Funktionsprinzip, Kennlinien, Pumpenauswahl für Lebensmittelunternehmen. Gängige Probleme: Kavitation, Unterdruck, Durchflussregelung.