---
title: "Physikalische Eigenschaften Lebensmittelsubstanzen"
topic: "general-principles"
topic_title: "Allgemeine Grundlagen"
lecture: 3
slug: "lecture-03-physical-properties"
locale: "de"
description: "Dichte, Viskosität, Wärmekapazität und Wärmeleitfähigkeit von Lebensmittelprodukten — Milch, Säften, Ölen, Zuckerlösungen, Fleisch. Berechnungsmethoden und Referenzdaten."
keywords: ["dichte lebensmittel", "viskosität milch", "wärmekapazität", "wärmeleitfähigkeit", " rheologie", "nicht-newtonsche flüssigkeiten"]
duration: "55 min"
difficulty: "grundlegend"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Vorlesung 3. Physikalische Eigenschaften Lebensmittelsubstanzen

## Was Sie lernen werden

Nach dieser Vorlesung können Sie:

- **Dichte, Viskosität, Wärmekapazität und Wärmeleitfähigkeit** für wichtige Lebensmittelprodukte finden und korrekt verwenden
- den Unterschied zwischen **Newtonschen und nicht-Newtonschen Flüssigkeiten** erklären und Lebensmittelbeispiele nennen
- physikalische Eigenschaften von **Mischungen und Lösungen** aus der Zusammensetzung berechnen
- das Konzept der **physikalisch-chemischen Siedepunktsunterdrückung** erklären und warum sie für die Berechnung von Verdampfern wichtig ist
- die erforderlichen Daten in **Handbüchern und Datenbanken** selbständig finden

---

## 1. Warum Brauchen Ingenieure Physikalische Eigenschaften?

Jede Ingenieurrechnung — Wärmetauschergröße, Pumpenleistung, Trocknungszeit — erfordert numerische Werte der Produkteigenschaften. Ohne sie ist die Berechnung unmöglich.

Vergleichen Sie drei Flüssigkeiten, die in der Lebensmittelindustrie vorkommen:

| Eigenschaft | Wasser (20°C) | Milch (20°C) | Sonnenblumenöl (20°C) |
|---|---|---|---|
| Dichte ρ, kg/m³ | 998 | 1030 | 920 |
| Viskosität μ, mPa·s | 1,0 | 2,1 | 50–80 |
| Wärmekapazität cp, kJ/(kg·K) | 4,18 | 3,93 | 1,97 |
| Wärmeleitfähigkeit λ, W/(m·K) | 0,60 | 0,55 | 0,17 |
| Prandtl-Zahl Pr | 7,0 | 12 | 600–900 |

Diese Unterschiede sind riesig. Ein Pumpe für Milch und eine Pumpe für Öl sind grundlegend andere Geräte. Der Wärmetauscher für die Pa·steurisierung und das Heizen von Öl haben andere Wandflächen und Bauweisen. Daher sind physikalische Eigenschaften die Grundlage jeder Berechnung.

> 💡 **Wichtig**: Physikalische Eigenschaften von Lebensmittelprodukten **hängen von Temperatur und Zusammensetzung ab**. Verwenden Sie niemals Werte bei Zimmertemperatur für Berechnungen bei 80°C — der Fehler kann 30–50% betragen.

![Karte physikalischer Lebensmitteleigenschaften in technischen Berechnungen](/images/lectures/general-principles/food-properties-map.svg)

---

## 2. Arten der Angabe der Mischungszusammensetzung

Bevor man über Eigenschaften spricht, muss man verstehen, wie man die Zusammensetzung einer Mischung angibt. In der Lebensmittelindustrie werden drei Wege verwendet.

### 2.1 Massenbruch

$$x_m = \frac{G_i}{G}$$

wobei $G_i$ die Masse der Komponente und $G$ die Masse der Mischung ist.

**Beispiel:** Karamell Sirup enthält 300 g Zucker und 700 g Wasser. Massenanteil Zucker: $x_m = 300/1000 = 0{,}30$ (oder 30%).

Der Massenbruch **hängt nicht von Temperatur und Druck ab** — das ist sein Vorteil.

### 2.2 Volumenbruch

$$x_V = \frac{V_i}{V}$$

Praktisch für Gasgemische (z.B. Luftzusammensetzung). Für Flüssigkeiten wird typischerweise der Massenbruch verwendet.

### 2.3 Molbruch

$$x_M = \frac{N_i}{N}$$

wobei $N_i$ die Anzahl der Mol der Komponente ist. Wird in thermodynamischen Berechnungen und Destillation verwendet.

### Umrechnung zwischen Brüchen

Mass → Mol (für zweikomponentiges System a+b):

$$x_{m,a} = \frac{x_{M,a} \cdot M_a}{x_{M,a} \cdot M_a + x_{M,b} \cdot M_b}$$

Mass → Volumen:

$$x_{V,a} = x_{m,a} \cdot \frac{\rho_{mischung}}{\rho_a}$$

---

## 3. Dichte

### 3.1 Physikalischer Sinn und Einheiten

Dichte ist die Masse einer Einheit Volumen:

$$\rho = \frac{m}{V}, \quad [\text{kg/m}^3]$$

Sie erscheint in der Massenbilanz-Gleichung, der Reynolds-Kriterium, Druckberechnungen und Pumpenleistungs-Berechnungen.

### 3.2 Referenzdaten — Wichtige Lebensmittelprodukte

| Produkt | t, °C | ρ, kg/m³ | Bemerkung |
|---|---|---|---|
| Wasser | 20 | 998 | Standard |
| Wasser | 80 | 972 | Nimmt ab |
| Vollmilch | 20 | 1027–1033 | Abhängig vom Fettgehalt |
| Fettfreie Milch | 20 | 1033–1038 | Höhere ρ — weniger Fett |
| Sahne 35% | 20 | 994–1003 | Annähernd an Wasser |
| Pa·steurisierte Milch | 72 | ~1010 | Bei Pa·steurisierungstemperatur |
| Zuckersirup 10% | 20 | 1040 | |
| Zuckersirup 50% | 20 | 1230 | |
| Zuckersirup 70% | 20 | 1347 | |
| Orangensaft | 20 | 1045–1065 | Abhängig vom Trocknestoffgehalt |
| Tomatenpasta 30% | 20 | 1100–1130 | |
| Sonnenblumenöl | 20 | 915–920 | |
| Sonnenblumenöl | 60 | 895 | |
| Olivenöl | 20 | 910–916 | |
| Rindfleisch | 5 | 1050–1080 | |
| Honig | 20 | 1380–1450 | |
| Bier | 20 | 1008–1020 | |
| Wein | 20 | 985–1000 | Abhängig vom Alkohol |
| Ethanol | 20 | 789 | |
| Laktat | 20 | 1209 | |

### 3.3 Temperatur-Effekt

Bei Flüssigkeiten und Lösungen **sinkt die Dichte** mit Temperaturerhöhung (Ausnahme: Wasser zwischen 0 und 4°C). Näherungsformel:

$$\rho_t = \rho_{20} \cdot [1 - \beta \cdot (t - 20)]$$

wobei $\beta$ der Volumenausdehnungskoeffizient ist ($\beta \approx (3{,}5-5) \cdot 10^{-4}$ K⁻¹ für wasserbasierte Lösungen).

### 3.4 Dichte von Mischungen

Für zweikomponentige Systeme (Komponenten a und b):

$$\rho_{mischung} = \frac{1}{\dfrac{x_{m,a}}{\rho_a} + \dfrac{x_{m,b}}{\rho_b}}$$

**Beispiel:** Ungesüßte Milch (3,5% Fett). Fett: $\rho_a = 925$ kg/m³, $x_{m,a} = 0{,}035$. Maßeportion: $\rho_b = 1036$ kg/m³, $x_{m,b} = 0{,}965$.

$$\rho_{milch} = \frac{1}{\frac{0{,}035}{925} + \frac{0{,}965}{1036}} \approx 1030 \text{ kg/m}^3$$

🔗 **Online-Rechner:** [Food Grade Density Calculator — % Zusammensetzung → ρ](https://www.engineeringtoolbox.com/density-solutions-d_1652.html)

---

## 4. Viskosität

### 4.1 Newtonsches Gesetz und Flüssigkeitstypen

Viskosität ist die Widerstandskraft einer Flüssigkeit gegen Scherung. Newtonsches Gesetz:

$$\tau = \mu \cdot \frac{dv}{dy}$$

wobei $\tau$ die Scherungsspannung in Pa ist, $\mu$ die dynamische Viskosität in Pa·s ist, $dv/dy$ der Geschwindigkeitsgradient (Scherungsrate) in s⁻¹ ist.

**Kinämische Viskosität:**

$$\nu = \frac{\mu}{\rho}, \quad [\text{m}^2/\text{s}]$$

### 4.2 Newtonsche und Nicht-Newtonsche Flüssigkeiten

Dies ist eine **entscheidende Unterscheidung** für die Lebensmittelindustrie!

**Newtonsche Flüssigkeiten** haben eine konstante Viskosität unabhängig von der Scherungsrate:

| Flüssigkeit | Beispiel |
|---|---|
| Wasser, Säfte, Milch, Bier, Wein | Einfache newtonsche Bahn |
| Pflanzenöle | Newtonsch, aber stark temperaturabhängig |
| Zucker, Salz-Lösungen | Newtonsch |

**Nicht-Newtonsche Flüssigkeiten** haben eine Viskosität, die von der Scherungsrate abhängt:

| Typ | Verhalten | Lebensmittel-Beispiele |
|---|---|---|
| **Scherung-verdünnend (pseudoplastisch)** | Viskosität **sinkt** mit Vermischung | Tomatensauce, Ketchup, Joghurt, Mayonnaise, Fruchtpüree |
| **Scherung-Verdickend (dilatant)** | Viskosität **steigt** mit Vermischung | Maisstärke-Suspensionen (dicker Gelee) |
| **Plastisch (Bingham)** | Minimale Spannung für Flussbeginn benötigt | Tomatenpaste, Schokolade, Butter |
| **Thixotrop** | Viskosität nimmt mit Zeit bei konstanter Scherung ab | Honig (bei Rühren), einige Joghurte |

> 🌟 **Praktische Bedeutung:** Ketchup ist scherungsverdünnend. Deshalb „ tropft“ er nicht vom Glas — benötigt Spannung, um den Fluss zu starten, dann sinkt die Viskosität abrupt. Dieses Phänomen ist **Thixotropie** + **Plastizität**.

![Fließkurven für verschiedene Arten von Lebensmittelflüssigkeiten](/images/lectures/general-principles/rheology-food-curves.svg)

🔗 **Mehr dazu:** [Dairy Processing Handbook: Rheology](https://dairyprocessinghandbook.tetrapak.com/chapter/rheology) — ein praxisnahes Kapitel zur Rheologie von Milchprodukten und halbflüssigen Lebensmitteln.

### 4.3 Referenzdaten — Lebensmittel-Viskositäten

| Produkt | t, °C | μ, mPa·s | Typ |
|---|---|---|---|
| Wasser | 20 | 1,002 | Newtonsch. |
| Wasser | 60 | 0,467 | Newtonsch. |
| Wasser | 80 | 0,355 | Newtonsch. |
| Vollmilch | 20 | 2,0–2,5 | Newtonsch. |
| Vollmilch | 60 | 0,9–1,1 | Newtonsch. |
| Sahne 35% | 20 | 10–15 | Newtonsch. |
| Sonnenblumenöl | 20 | 50–80 | Newtonsch. |
| Sonnenblumenöl | 60 | 15–25 | Newtonsch. |
| Olivenöl | 20 | 70–120 | Newtonsch. |
| Apfelsaft | 20 | 2,0–3,0 | Newtonsch. |
| Tomatensauce | 20 | 50–200 | Scherungs-verdünnend |
| Tomatenpaste 30% | 20 | 1 000–5 000 | Plastisch |
| Honig | 20 | 3 000–10 000 | Thixotrop |
| Honig | 40 | 200–800 | Thixotrop. |
| Schokolade | 40 | 5 000–20 000 | Plastisch |
| Mayonnaise | 20 | 5 000–100 000 | Scherungs-verdünnend |
| Brotteig | 25 | 10⁵–10⁶ | Scherungs-verdünnend |
| Glukosesirup 80% | 20 | ~100 000 | Newtonsch |

### 4.4 Temperatur-Effekt auf Viskosität

Bei Flüssigkeiten **verringert sich die Viskosität stark** bei Temperaturerhöhung. Näherungsformel:

$$\mu_t = \mu_{20} \cdot e^{-b(t-20)}$$

wobei $b$ eine empirische Konstante ist ($b \approx 0{,}028$ °C⁻¹ für Wasser).

**Praktische Bedeutung:** Beim Pumpen viskoser Lebensmittelprodukte (Honig, Molasse, Schokolade) **erhitzt man sie** — Viskosität sinkt um 5–20-mal, die Pumpe kann sie problemlos bewältigen.

> **Nicht verwechseln:** Für nicht-newtonsche Produkte wird in Berechnungen häufig nicht eine "Tabellenviskosität" verwendet, sondern die **effektive Viskosität** bei der Scherrate, die tatsächlich im Rohr, in der Pumpe, im Mischer oder im Wärmetauscher auftritt.

### 4.5 Viskosität von Mischungen

**Gasgemische** (Näherungsformel):

$$\frac{1}{\mu_{mischung}} = \frac{x_1}{\mu_1} + \frac{x_2}{\mu_2} + \ldots$$

**Suspension nicht-maßneutraler Flüssigkeiten:**

$$\lg \mu_{mischung} = x_1 \lg \mu_1 + x_2 \lg \mu_2$$

**Verdünnende Suspensionen** (Einstein-Formel):

$$\mu_{suspension} = \mu_{flüssigkeit} \cdot (1 + 4{,}5 \cdot x_V)$$

wobei $x_V$ das Volumenanteil der festen Phase ist. Gültig für $x_V < 0{,}05$.

**Beispiel:** Milch ist eine Suspension von Fetttröpfchen in Plasma. Bei Fettgehalt 3,5% (Volumenanteil Fett ~4%) liefert die Einstein-Formel:

$$\mu_{milch} = \mu_{plasma} \cdot (1 + 4{,}5 \cdot 0{,}04) = 1{,}9 \cdot 1{,}18 \approx 2{,}2 \text{ mPa·s}$$

Dies stimmt mit gemessenen Werten überein!

---

## 5. Wäremkapazität

### 5.1 Definition

Die spezifische Wärmekapazität $c_p$ ist die Menge an Wärme, die benötigt wird, um 1 kg der Substanz um 1 K bei konstantem Druck zu erhitzen:

$$Q = m \cdot c_p \cdot \Delta T$$

Einheiten: J/(kg·K) oder kJ/(kg·K).

Sie erscheint in der Reynolds-Kriterium, Energiebilanz-Gleichungen, Dampfverbrauchs-Berechnungen.

### 5.2 Referenzdaten

| Produkt | t, °C | cp, kJ/(kg·K) |
|---|---|---|
| Wasser | 20 | 4,18 |
| Wasser | 80 | 4,20 |
| Wasserdampf | 100 | 2,01 |
| Ungesüße Milch | 20 | 3,93 |
| Fettlose Milch | 20 | 3,97 |
| Sahne 35% | 20 | 3,60 |
| Butter | 20 | 2,05 |
| Apfelsaft | 20 | 3,85 |
| Zuckersirup 10% | 20 | 3,85 |
| Zuckersirup 50% | 20 | 3,14 |
| Zuckersirup 70% | 20 | 2,72 |
| Sonnenblumenöl | 20 | 1,97 |
| Olivenöl | 20 | 2,00 |
| Rindfleisch | 5 | 3,52 |
| Fisch | 5 | 3,60 |
| Hühnerei | 20 | 3,14 |
| Weizenmehl | 20 | 1,76 |
| Zucker (fest) | 20 | 1,25 |
| Salz (NaCl) | 20 | 0,88 |
| Eis | 0 | 2,09 |

> 💡 **Warum hat Wasser die höchste Wärmekapazität?** 4,18 kJ/(kg·K) ist ein Rekordwert für die meisten Substanzen. Daher ist Wasser der beste Kühl­mittel, und feuchte Lebensmittel erwärmen und kühlen sich langsam.

### 5.3 Berechnung der Wärmekapazität von Mischungen

Das Additiv-Prinzip funktioniert gut für die meisten Lebensmittel-Systeme:

$$c_{p,mischung} = \sum x_{m,i} \cdot c_{p,i}$$

**Beispiel:** Ungesüße Milch (87% Wasser, 3,5% Fett, 4,8% Laktose, 3,2% Protein, 0,7% Asche):

$$c_p = 0{,}87 \cdot 4{,}18 + 0{,}035 \cdot 2{,}05 + 0{,}048 \cdot 1{,}26 + 0{,}032 \cdot 2{,}00 + 0{,}007 \cdot 0{,}88$$

$$c_p \approx 3{,}64 + 0{,}072 + 0{,}060 + 0{,}064 + 0{,}006 \approx 3{,}84 \text{ kJ/(kg·K)}$$

Mit dem Tabellenwert 3,93 stimmt sich der Unterschied von etwa 2% gut für ingenieurtechnische Berechnungen ab.

### 5.4 Sibbison-Formel für Lebensmittel

Für Lebensmittel mit bekannter Wassermasse $w$:

$$c_p = 4{,}18 \cdot w + 1{,}25 \cdot (1 - w)$$

**Beispiel:** Apfel (Feuchtigkeit 85%):

$$c_p = 4{,}18 \cdot 0{,}85 + 1{,}25 \cdot 0{,}15 = 3{,}55 + 0{,}19 = 3{,}74 \text{ kJ/(kg·K)}$$

---

## 6. Wärmeleitfähigkeit

### 6.1 Fourier'sches Gesetz

Wärmeleitfähigkeit $\lambda$ charakterisiert die Fähigkeit eines Materials, Wärme zu leiten. Fourier'sches Gesetz:

$$q = -\lambda \cdot \frac{dT}{dx}$$

Einheiten: W/(m·K).

Sie erscheint in der Nusselt- und Prandtl-Kriterium, in Gleichungen für den Wärmeaustausch durch Gerätemauften.

### 6.2 Wertebereich

| Materialklasse | λ, W/(m·K) | Temperaturabhängigkeit |
|---|---|---|
| Flüssiggas (Hg, Na) | 10–80 | Zunimmt |
| Metall-Wände | 10–400 | Schwache Abhängigkeit |
| Wasser | 0,58–0,68 | Zunimmt |
| Wasserbasierte Lebensmittel | 0,40–0,65 | Nimmt ab |
| Pflanzenöle | 0,15–0,18 | Nimmt ab |
| Luft | 0,024–0,031 | Zunimmt |
| Wärmedämmung | 0,023–0,10 | Zunimmt |
| Lebensmittel (allgemein) | 0,10–0,60 | Abhängig von Zusammensetzung |

### 6.3 Referenzdaten — Lebensmittel

| Produkt | t, °C | λ, W/(m·K) |
|---|---|---|
| Wasser | 20 | 0,598 |
| Wasser | 80 | 0,670 |
| Vollmilch | 20 | 0,530–0,560 |
| Fettlose Milch | 20 | 0,560–0,580 |
| Sahne 35% | 20 | 0,380–0,420 |
| Butter | 20 | 0,170–0,200 |
| Apfelsaft | 20 | 0,550 |
| Zuckersirup 10% | 20 | 0,570 |
| Zuckersirup 50% | 20 | 0,450 |
| Sonnenblumenöl | 20 | 0,167 |
| Rind | 5 | 0,41–0,49 |
| Fisch | 5 | 0,44–0,50 |
| Kartoffel | 20 | 0,55 |
| Apfel | 20 | 0,42–0,58 |
| Weizenmehl | 20 | 0,18–0,22 |
| Brot | 25 | 0,15–0,20 |
| Eis | 0 | 2,22 |

> 💡 **Eis ist 4-mal thermisch leitfähiger als Wasser!** Das ist der Grund, warum gefrorene Produkte außen schneller erwärmen (wo Eis zu Wasser übergeht mit niedriger λ) und innen langsamer. Dies erschwert das Dünsten großer Fleischstücke.

### 6.4 Wärmeleitfähigkeit von Mischungen und Verteilungssystemen

Für zweiphasenige Systeme (Flüssigkeit + feste Partikel oder Flüssigkeit + Gas):

**Parallelschicht-Modell** (Obergrenze):

$$\lambda_{mischung} = x_V \cdot \lambda_1 + (1 - x_V) \cdot \lambda_2$$

**Reihenschicht-Modell** (Untergrenze):

$$\frac{1}{\lambda_{mischung}} = \frac{x_V}{\lambda_1} + \frac{1 - x_V}{\lambda_2}$$

Für Lebensmittel liegt der reale Wert dazwischen.

---

## 7. Physikalisch-chemische Siedepunktsunterdrückung

### 7.1 Das Phänomen

Wenn eine Substanz in Wasser gelöst wird (Zucker, Salz, Laktose), **brennt der Siedepunkt der Lösung höher** als das reine Wasser bei demselben Druck. Der Unterschied:

$$\Delta = T_{\text{boil,solution}} - T_{\text{boil,water}}$$

ist die **physikalisch-chemische Siedepunktsunterdrückung**.

### 7.2 Warum Wichtig für Lebensmittelindustrie

In der **Verdampfung** (Konzentrierung von Milch, Saft, Zuckersirup) **verringert sich die effektive Temperaturdifferenz** im Verdampfer durch den Siedepunktsunterdrückung:

$$\Delta t_{\text{eff}} = t_{\text{damp}} - t_{\text{boiling}} = t_{\text{damp}} - (t_{\text{boil,pure water}} + \Delta)$$

Das heißt: Je konzentrierter die Lösung, desto größer die Unterdrückung → geringere treibende Kraft → langsamere Verdampfung.

### 7.3 Referenzdaten

| Lösung | Konzentration, % | Δ bei 1 atm, °C |
|---|---|---|
| Zuckersirup (Sacccharose) | 10 | 0,15 |
| Zuckersirup | 30 | 0,51 |
| Zuckersirup | 50 | 1,04 |
| Zuckersirup | 70 | 2,60 |
| NaCl (Salz) | 10 | 0,87 |
| NaCl | 20 | 2,00 |
| Ungesüße Milch | — | 0,15–0,18 |
| Milchserum | — | 0,35–0,40 |
| Apfelsaft | 15°Brix | 0,20 |
| Orangenkonzentrat | 65°Brix | 1,2–1,5 |

> 💡 **In der Marmeladenherstellung:** Zucker erhöht den Siedepunkt. Bei Konzentration 60–70% Zucker kocht das Gemüse bei ~104–106°C statt 100°C. Deshalb bildet sich bei dieser Temperatur Pektin ein Gel — ohne Unterdrückung würde die Marmelade nicht fest werden!

### 7.4 Druck-Effekt

In Vakuum-Verdampfern ist der Druck unter atmosphärisch → Siedepunkt von Wasser ist niedriger. Aber die Unterdrückung ändert sich! Korrekturfaktor:

$$\Delta_p = \Delta_{\text{atm}} \cdot k$$

wobei $k$ ein Faktor ist, der vom Druck abhängt (aus Referenzbüchern). Bei Vakuum ist $k > 1$ — die Unterdrückung vergrößert sich.

---

## 8. Weitere Wichtige Eigenschaften

### 8.1 Verdampfungswärme

Bei der Flüssigkeit verdampft, absorbiert sie die **Verdampfungswärme** $r$:

| Substanz | Siedepunkt, °C | r, kJ/kg |
|---|---|---|
| Wasser | 100 (1 atm) | 2257 |
| Wasser | 60 (0,2 atm) | 2358 |
| Wasser | 120 (2 atm) | 2203 |
| Ethanol | 78 | 841 |

Die hohe Verdampfungswärme von Wasserdampf macht es zum besten Wärmeträger in der Lebensmittelindustrie.

### 8.2 Oberflächenspannung

Oberflächenspannung $\sigma$ ist wichtig für:
- **Schäume** (Bier, Milch, Eiscreme)
- **Verteilung von Fetttröpfchen** in der Homogenisierung
- **Sprühdrücke** (Trocknung)

| Flüssigkeit | t, °C | σ, mN/m |
|---|---|---|
| Wasser | 20 | 72,8 |
| Wasser | 60 | 66,2 |
| Milch | 20 | 42–52 |
| Sonnenblumenöl | 20 | 25–35 |
| Ethanol | 20 | 22,3 |

### 8.3 Thermische Diffusivität

$$a = \frac{\lambda}{\rho \cdot c_p}, \quad [\text{m}^2/\text{s}]$$

Charakterisiert die Geschwindigkeit der Temperaturverreichigung im Material. Bringt in der Péclet-Kriterium vor.

| Material | a, m²/s |
|---|---|
| Wasser (20°C) | 1,43·10⁻⁷ |
| Milch (20°C) | ~1,30·10⁻⁷ |
| Fleisch | ~1,0–1,4·10⁻⁷ |
| Öl | ~0,9·10⁻⁷ |

---

## 9. Wo Finden Sie Referenzdaten

### Online-Datenbanken

- 🔗 [NIST WebBook](https://webbook.nist.gov) — Eigenschaften von reinen Substanzen (Wasser, Alkohole, organische Verbindungen)
- 🔗 [Engineering ToolBox](https://www.engineeringtoolbox.com) — weite Palette an Lebensmittel- und Industriefluiden
- 🔗 [USDA FoodData Central](https://fdc.nal.usda.gov) — Zusammensetzung von Lebensmitteln (wichtig für Wärmekapazitäts-Berechnung)
- 🔗 [Food Process Engineering Database — eFood Lab](https://www.efoodlab.com) — thermophysical Eigenschaften von Lebensmittelprodukten

### Spezialisierte Handbücher

- 🔗 **Rao M.A. — Rheologie von Flüssigkeiten und halbfesten Lebensmitteln** — Lebensmittel-Rheologie
- 🔗 **Choi Y., Okos M.R.** — Gleichungen für die Berechnung thermischer Eigenschaften von Lebensmittelkomponenten
- 🔗 [Perry's Chemical Engineers' Handbook](https://www.mheducation.com) — Abschnitt über physikalische Eigenschaften

### Messmethoden

- Viskosität: **Rotations-Viskosität** (Brookfield), **schwingend**, **kapiellare** Methoden
- Wärmeleitfähigkeit: **Heißdraht-Methode**, **Platten-Viertel-Kalorimeter**
- Wärmekapazität: **Differential-Scans-Calorimetrie (DSC)**

🔗 **Praxisbeitrag:** [Tetra Pak: viscous products and heat transfer](https://www.tetrapak.com/en-us/insights/cases-articles/viscous-products-and-heat-transfer) — warum Viskositätsmessungen für Lebensmittel mit Temperatur, Scherrate und Wärmetauscherkonstruktion verknüpft werden müssen.

---

## Zusammenfassung

**Vier wichtige physikalische Eigenschaften:**

| Eigenschaft | Symbol | Einheiten | Wo Verwendet |
|---|---|---|---|
| **Dichte** | ρ | kg/m³ | Massenbilanz, Re, Hydrodynamik |
| **Viskosität** | μ, ν | Pa·s, m²/s | Re, Pumpen-Berechnungen, Fließregime |
| **Wärmekapazität** | cp | kJ/(kg·K) | Energiebilanz, Pr |
| **Wärmeleitfähigkeit** | λ | W/(m·K) | Nu, Pr, Wand-Wärmeaustausch |

**Zwei Arten von Flüssigkeiten:**
- **Newtonsche Flüssigkeiten:** Wasser, Milch, Säfte, Zuckerlösungen, Öle → konstante Viskosität
- **Nicht-Newtonsche Flüssigkeiten:** Tomatenpaste, Mayonnaise, Teig, Ketchup → Viskosität hängt von Scherung ab

**Physikalisch-chemische Siedepunktsunterdrückung:** Erhöht Siedepunkt der Lösungen gegenüber reinem Wasser → verringert effektive Temperaturdifferenz im Verdampfer.

---

## Selbstkontrollfragen

1. Zuckersirup enthält 40% Saccharose (ρ = 1590 kg/m³) und 60% Wasser (ρ = 998 kg/m³). Berechnen Sie die Dichte des Sirups.

2. Warum ist Honig bei 20°C so viskos, aber fließt es problemlos bei 40°C? Welcher rheologische Typ beschreibt Honig?

3. Milch wird von 4°C auf 72°C in einem Pa·steurisator erhitzt. Milch-Durchfluss 2000 kg/h, cp = 3,93 kJ/(kg·K). Wie viel Wärme (kW) wird benötigt?

4. Was ist die Prandtl-Zahl für Sonnenblumenöl bei 20°C, wenn cp = 1970 J/(kg·K), μ = 65 mPa·s, λ = 0,167 W/(m·K)? Vergleichen Sie mit Wasser (Pr = 7). Was bedeutet dies für Wärmetauscher-Berechnungen?

5. Warum verdampft Milch in einem Vakuum-Verdampfer bei 55–60°C statt bei 100°C? Was ist die physikalisch-chemische Unterdrückung, wenn die Endkonzentration 73% Trocknestoffe beträgt?

---

## Nächste Vorlesung

**Vorlesung 4 → Grundlagen der Hydrostatik**

Gesetze der Gleichgewichte von Flüssigkeiten, hydrostatischer Druck, Pa·scal'sches Gesetz — und wie dies in Messgeräten und Gerätestrukturen bei der Lebensmittelherstellung verwendet wird.
