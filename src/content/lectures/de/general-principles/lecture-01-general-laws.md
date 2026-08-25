---
title: "Grundlagen der technologischen Prozesse der Lebensmittelproduktion"
topic: "general-principles"
topic_title: "Allgemeine Informationen"
lecture: 1
slug: "lecture-01-general-laws"
locale: "de"
description: "Gesetze der Massenerhaltung und Energieerhaltung, Transfersgesetze, Gleichgewichte und Optimierung — Fundament der Ingenieurlogik in der Lebensmittelindustrie."
keywords: ["Massenerhaltung", "Energieerhaltung", "Transfersgesetze", "Treiber der Prozesse", "Lebensmitteltechnologie"]
duration: "45 min"
difficulty: "grundlegend"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Vorlesung 1. Grundlagen der technologischen Prozesse der Lebensmittelproduktion

## Was Sie lernen werden

Nach dieser Vorlesung können Sie:

- die **Gesetze der Massenerhaltung und Energieerhaltung** erklären und als Massen- und Energiebilanz anwenden
- das Konzept der **Treiber der Prozesse** und des **Widerstands** verstehen — die Schlüsselkonzepte des gesamten Kurs
- die **drittelnde Theorie der Phasen** (Gibbs) und den **Prinzip der Le Chatelier** erklären
- die **4 Prinzipien der Prozessoptimierung** nennen

---

## 1. Warum braucht ein Ingenieur die physikalischen Gesetze?

Die Lebensmittelindustrie besteht aus unzähligen verschiedenen Produktionsanlagen: Zuckerfabriken, Milchwerke, Brauereien, Bäckereien, Saftpressen. Auf den ersten Blick scheinen sie wenig gemeinsam zu haben. Aber schauen Sie sich genauer an, was in jede Anlage eingeschickt wird:

In einer Molkerei wird Milch **erwärmt** (Pasteurisierung), **getrennt** (Zentrifugation), **eingedampft** (Konzentration) und **gekühlt** (Lagerung). In einer Brauerei wird Malz **geschrotet**, mit Wasser **vermischt**, die Würze **filtriert**, **erwärmt**, **vergoren** und erneut **filtriert**.

> **Kernidee:** In jedem Lebensmittelproduktionsprozess tritt nur eine **begrenzte Zahl typischer Vorgänge** auf: Erhitzen, Abkühlen, Filtrieren, Sedimentieren, Trocknen, Extrahieren. Die theoretischen Grundlagen dieser Vorgänge, ihre Berechnungsmethoden und die Gestaltungsprinzipien der Apparate sind das Thema unseres Kurses.

Diese Prozesse folgen allen **allgemeinen physikalischen und physikalisch-chemischen Gesetzen**. Wenn Sie diese Gesetze kennen, können Sie jedes Gerät berechnen — von einem kleinen Laborreaktor bis zu einer großen Verdampferanlage.

📺 **Video:** [Wie ein modernes Lebensmittelwerk aussieht](https://www.tetrapak.com/en-us/insights/handbooks) — Schauen Sie an, wie dieselben Prozesse (Wärme, Filtration, Vermischen) auf großer industrieller Plattform realisiert werden.

---

## 2. Gesetz der Massenerhaltung — Massenbilanz

![Massenbilanz einer Saftverdampfung](/images/lectures/general-principles/material-balance-evaporator.svg)

Die erste und wichtigste Regel: **Masse verschwindet nicht und taucht nicht aus dem Nichts auf.**

In jedem Gerät oder System von Geräten:

$$\sum m_{\text{Einzug}} = \sum m_{\text{Ausgang}}$$

Dieses Gleichung ist die **Massenbilanz**.

### Beispiel: Pasteurisierungsanlage

Stellen Sie sich eine Plattenpasteurisierungsanlage vor. Hinein werden:
- Frischmilch — **Strom** A (kg/h)
- Dampf zur Erwärmung — **Strom** B (kg/h)
- Kühlwasser — **Strom** C (kg/h)

Am Ausgang:
- Pasteurisierte Milch — **Strom** D
- Kondensat — **Strom** E
- Abgasiswasser — **Strom** F

Die Massenbilanz: **A + B + C = D + E + F**

### Beispiel: Verdampfungslinie für Saft

Bei der Herstellung von Orangenmark in einer Verdampfisanlage:

| Was kommt rein | Was kommt raus |
|---|---|
| Saft (10% Trockenstoffe) — 10 000 kg/h | Mark (65% Trockenstoffe) — ? kg/h |
| Dampf — Q kD/h | Wasser (verdampfter Dampf) — ? kg/h |

Die Massenbilanz nach Trockenstoffen: **10 000 × 0,10 = X × 0,65**

Also: **X = 1 538 kg/h**

Das Verdampfte Wasser: **10 000 − 1 538 = 8 462 kg/h**

> 💡 **Praktische Bedeutung:** Die Massenbilanz ist das **erste**, was ein Technologe vor der Berechnung jedes Geräts erstellt. Ohne sie ist eine Berechnung der Gerätgröße oder Rohstoffverbrauch unmöglich.

---

## 3. Gesetz der Energieerhaltung — Energiebilanz

![Sankey-Diagramm der Wärmbilanz eines Pasteurisators](/images/lectures/general-principles/sankey-heat-balance.svg)

Die zweite grundlegende Regel: **Energie verschwindet nicht und taucht nicht aus dem Nichts auf**, sie wandelt sich nur von einer Form in eine andere um.

Für Wärmeprozesse:

$$Q_{\text{Einzug}} + Q_{\textExtern}} = Q_{\text{Ausgang}} + Q_{\text{Verluste}}$$

### Sankey-Diagramm

Eine elegante Möglichkeit, die Wärmebilanz zu visualisieren — das **Sankey-Diagramm**. Die Breite jeder "Leiste" entspricht der Menge an Wärmeenergie. Sie sehen sofort, wo die Energie "entweicht".

📺 **Video:** [Was ist ein Sankey-Diagramm und wofür braucht man es](https://sankeymatic.com)

🔗 **Online-Tool:** [SankeyMATIC](https://sankeymatic.com) — Versuchen Sie es, ein Wärmediagramm ihres Geräts direkt im Browser zu zeichnen.

### Beispiel: Pasteurisierung von Milch

Um 1 000 kg/h Milch von 4°C auf 72°C zu erhitzen, benötigt:

$$Q = m \cdot c_p \cdot \Delta T = 1000 \cdot 3{,}93 \cdot (72 - 4) = 267{,}240 \text{ kDJ/h}$$

wobei $c_p = 3{,}93$ kDJ/(kg·K) die spezifische Wärmekapazität der Milch ist.

Aber die tatsächliche Dampfverbrauch ist **größer** — denn eine Teilmenge an Wärme geht durch die Wärmeübertragungsfläche in die Umgebung verlust (5–15% abhängig von der Isolierung).

---

## 4. Transfersgesetze — Fundament des gesamten Kurses

![Triebkraft und Widerstand in Transportprozessen](/images/lectures/general-principles/driving-force-resistance.svg)

Die wichtigste Zusammenfassung, die alle Prozesse in eine Klasse einordnet:

$$I = \frac{\Delta X}{R}$$

wobei:
- **I** — der Prozessgeschwindigkeit (Menge an dem, was pro Zeiteinheit übertragen wird)
- **ΔX** — die **Treiber des Prozesses** (Differenz der Potenziale)
- **R** — der **Prozesswiderstand**

Diese Formel ist für drei völlig unterschiedliche Prozesse identisch:

| Prozess | Treiber ΔX | Widerstand R | Was wird übertragen |
|---|---|---|---|
| **Wärmetransfer** | Temperaturdifferenz ΔT, °C | Wärmeübertragungswiderstand 1/K | Wärmeenergie Q |
| **Massentransfer** | Konzentrationsunterschied Δc, kg/m³ | Massentransportwiderstand 1/K' | Bestandteil der Mischung M |
| **Hydraulischer Transport** (Filtration) | Druckunterschied Δp, Pa | Hydraulischer Widerstand R_H | Flüssigkeitsstrom W |

> 🌟 **Dies ist die "dreifache Analogie"** — eine der schönsten Ideen der Verfahrenstechnik. Die Filtration von Saft, die Pasteurisierung von Milch und die Extraktion von Zucker folgen **mathematisch demselben Gleichungstyp**.

### Wie man irgendeinen Prozess beschleunigt?

Aus der Formel $I = \Delta X / R$ ist natürlich:

1. **Den Treiber erhöhen** — höhere Temperaturdifferenz, höhere Konzentration oder höheren Druck einsetzen
2. **Den Widerstand verringern** — die richtige Gerätebauform wählen, den Strom turbulent machen

### Praxisbeispiel

Bei der **Ultrafiltration von Molkenmilch** (Herstellung von Whey-Protein):
- Treiber: DruckΔp = 0,1–0,5 MPa
- Widerstand: Membran + Schleimsschicht
- Durchflussrate: 50–200 l/(m²·h)

Um die Produktivität zu erhöhen — entweder **den Druck erhöhen** (begrenzt durch die Membranmerkmale), **oder die Strömung über die Membrane turbulent machen** (Schleim reduzieren → Widerstand verringern).

📺 **Video:** [How does ultrafiltration work in dairy processing](https://dairyprocessinghandbook.tetrapak.com/chapter/membrane-technology)

---

## 5. Gleichgewichte

### Gibbs'sches Phasengesetz

$$S = K - f + 2$$

wobei:
- **S** — die Anzahl der **Freiheitsgrade** (Parameter, die unabhängig voneinander verändert werden können)
- **K** — die Anzahl der **Komponenten**
- **f** — die Anzahl der **Phasen**

**Beispiel: Kochen reiner Wasser**

K = 1 (Wasser), f = 2 (Flüssigkeit + Dampf): **S = 1 − 2 + 2 = 1**

Nur ein Parameter (entweder Temperatur oder Druck) bestimmt den Zustand der Ausgangssystem. Wenn wir den Druck fest auf 1 atm setzen → die Siedetemperatur ist exakt 100°C.

**Beispiel: Zuckerrörter**

K = 2 (Wasser + Zuckera), f = 2 (Flüssigkeit + Dampf): **S = 2 − 2 + 2 = 2**

Das System hat zwei Freiheitsgrade — die Siedetemperatur des Zuckerlöffels hängt ab von der Konzentration! Deshalb steigt die Siedetemperatur bei der Konzentration von Zuckersirup mit zunehmender Konzentration.

### Le Chateliersches Prinzip

> **Wenn ein System aus dem Gleichgewicht gebrochen wird — strebt es danach, das Gleichgewicht wiederherzustellen und dem Änderungszwang entgegenzuwirken.**

**Praktische Anwendung in der Lebensmittelindustrie:**

- Wenn wir den **Druck** über einem Sperrflächen-Dünnflüssigkeitssystem erhöhen — das Kochen stoppt (Flüssigkeit verdichtet sich), benötige Temperatur für das Kochen — höher → Fundament der **Vakuum-Verdampfungsanlagen** (Druck senken → Siedetemperatur senken → thermolabile Vitamine erhalten)
- Wenn wir die **Konzentration** des Zuckers im Löffel erhöhen — verschiebt sich das Gleichgewicht in Richtung Kristallisation → Prinzip der **Siede**

📺 **Video:** [Le Chatelier's principle explained simply](https://phet.colorado.edu/)

---

## 6. Prinzipien der Optimierung — die richtige Prozessführung

### 6.1 Kontinuierlichkeit der Prozesse

Lebensmittelproduktionen sind **periodisch** (Batch) und **kontinuierlich** (Continuous).

| | Batch-Prozesse | Kontinuierliche Prozesse |
|---|---|---|
| Beispiel | Kochen in einem Topf | Plattendampfanlage |
| Arbeitskosten | Höher | Niedriger |
| Produktqualität | Von Charg zu Charg variabel | Stabil |
| Automatisierung | Schwieriger | Einfacher |
| Skalierung | Klein und mittel | Groß |

**Trends:** Moderne Lebensmittelindustrie geht maximal auf kontinuierliche Prozesse über.

### 6.2 Gegenströmung

Bei Wärme- und Massentransfer ist die effizienteste Art der Strömung — die **Gegenströmung** (Counter-current):

```
Heiße Milch →  →  →  →  →  Pasteurisierte Milch
                [Wärmetauscher]
Kühle Wasser   ←  ←  ←  ←  Kühlwasser
```

Bei **Parallelströmung** (Gleichstrom) reduziert sich die Treiberkraft (Temperaturdifferenz) schnell. Bei Gegenströmung bleibt sie über die gesamte Länge des Geräts hoch — deshalb ist das Gerät kompakter und effizienter.

> 🔗 Genauer über Gegenströmung wird im Thema **Wärmetauscher** (Vorlesung 16) erläutert.

### 6.3 Aktualisierung der Phasengrenzfläche

Der Austausch (Wärme, Masse) ist intensiver, je öfter die Frischschicht an der Phasengrenzfläche aufkommt. Das passiert bei **turbulenter Strömung**.

**Praxis:** In Kondensationskammern für Alkohol-Destillationen-Dosen (Kessel, Riegel) erhöhen die Strömungsschleier die Oberfläche für Par und Flüssigkeit — und aktualisieren den Kontakt kontinuierlich.

### 6.4 Maximale Wärmerückgewinnung

![Wärmerückgewinnung im HTST-Pasteurisator](/images/lectures/general-principles/htst-regeneration.svg)

In der Lebensmittelindustrie ist die Wärmeleistung eine der größten Kostenposten. Das Optimierungsprinzip: **Wärme, die "ausgeht" von einem Gerät, wird für die Erwärmung eines anderen verwendet**.

**Beispiel: HTST-Pasteurisierung für Milch**

1. Kühle Frischmilch (4°C) wird mit heißer pasteurisierter Milch (72°C) im Regenerationsabschnitt vorgewärmt — **75–90% Wärmeeinsparung**
2. Die Restwärme wird im Heizabschnitt mit Dampf zugeführt
3. Pasteurisierte Milch wird im Regenerationsabschnitt wieder abgekühlt

🔗 **Praxisbeispiel:** [Tetra Pak Dairy Processing Handbook: heat exchangers](https://dairyprocessinghandbook.tetrapak.com/chapter/heat-exchangers)
🔗 **Artikel:** [Heat recovery in food processing — Food Engineering Magazine](https://www.foodengineeringmag.com)

---

## 7. Gesetz des Maßstabsprinzips

Die Ergebnisse, die auf **Laborausrüstung** erzielen wurden, können nicht automatisch auf den ** industriellen Maßstab** übertragen werden. Die Größe des Geräts beeinflusst entscheidend die Abläufe.

**Warum?** Bei Vergrößerung des Geräts:
- ändert sich das Verhältnis der Fläche zur Fläche zur Wandfläche zur Massevolumen
- ändern sich die Strömungsbedingungen
- ändern sich die Wärmeausbeute

**Lösung:** Die **Theorie der Ähnlichkeit**, die wir in **Vorlesung 2** genauer untersuchen.

> 💡 **Von der Praxis:** Viele Lebensmittel-Startups "brannten" auf diesem Punkt — das Produkt, das in einer kleinen Pfanne wunderbar ist, kam auf industriellem Reaktor anders als erwartet. Brauereien verbrachten Monate mit dem "Ausgleichen" des Geschmacks beim Aufstieg auf größere Maßstab.

---

## 8. Zusammenfassung

| Gesetz | Mathematische Formel | Anwendung |
|---|---|---|
| **Masseerhaltung** | $\sum m_{\text{Ein}} = \sum m_{\text{Aus}}$ | Massenbilanz jedes Geräts |
| **Energieerhaltung** | $\sum Q_{\text{Ein}} = \sum Q_{\text{Aus}} + Q_{\text{Verluste}}$ | Energiebilanz, Dampfverbrauch |
| **Transportion** | $I = \Delta X / R$ | Geschwindigkeit jeglicher Prozess |
| **Gibbs'ches Phasengesetz** | $S = K - f + 2$ | Bestimmung der Gleichgewichtsbedingungen |
| **Le Chateliersches Prinzip** | (qualitatives Gesetz) | Auswahl der Prozessbedingungen |

**4 Prinzipien der Optimierung:**
1. Kontinuierlichkeit der Prozesse
2. Gegenströmung der Ströme
3. Aktualisierung der Phasengrenzfläche
4. Maximale Wärmerückgewinnung

---

## Selbstkontrollfragen

1. Stellen Sie die Massenbilanz für einen Milchseparator auf, in dem Milch (1 000 kg/h, 3,8% Fett) in Sahne (35% Fett) und Magermilch (0,05% Fett) getrennt wird. Bestimmen Sie den Massenstrom von Sahne und Magermilch.

2. Warum verwendet eine Vakuumverdampfanlage Milch bei 55–60°C zum Kochen statt bei 100°C? Welche physikalisch-chemische Depression liegt vor, wenn der Endkonzentrationsgehalt 73% Trockenstoffe beträgt?

3. Warum wird bei der HTST-Pasteurisierung im Regenerationsabschnitt Gegenstrom statt Gleichstrom verwendet?

4. Eine Raffinationskolonne zur Herstellung von Lebensmittelalkohol: K = 2 (Wasser + Ethanol), f = 2 (Flüssigkeit + Dampf). Wie viele Freiheitsgrade hat sie? Was bedeutet das praktisch für den Prozess?

5. Nennen Sie einen Lebensmittelprozess, bei dem der Treiber die **Konzentration** und einen anderen, bei dem der Treiber die **Temperatur** ist.

---

## Nützliche Ressourcen

### Lehrbücher und Referenzwerke
- 🔗 [Perry's Chemical Engineers' Handbook (8th ed.)](https://www.accessengineeringlibrary.com/content/book/9780071422949) — klassisches Nachschlagewerk für chemische Ingenieure
- 🔗 [Geankoplis C.J. — Transport Processes](https://www.pearson.com) — detaillierte Behandlung aller Transfersgesetze

### Online-Simulatoren
- 🔗 [PhET Interactive Simulations (Wärmeübertragung)](https://phet.colorado.edu/en/simulations/energy-forms-and-changes) — interaktive Visualisierung der Wärmeleitung
- 🔗 [SankeyMATIC](https://sankeymatic.com) — Erstellung von Sankey-Diagrammen für Wärmebilanzen

### Videos
- 📺 [Lebensmittel-Technologie-Grundlagen — YouTube-Playlist](https://learncheme.com/)
- 📺 [Massen- und Energiebilanz — LearnChemE](https://www.youtube.com/c/LearnChemE) — kurze und verständliche Video-Vorlesungen der Universität Colorado

### Zeitschriften und Normen
- 🔗 [Journal of Food Engineering](https://www.sciencedirect.com/journal/journal-of-food-engineering) — führende wissenschaftliche Zeitschrift
- 🔗 [Food Engineering Magazine](https://www.foodengineeringmag.com) — praktische Artikel über die Produktion

---

## Nächste Vorlesung

**Vorlesung 2 → Methode der Ähnlichkeit und Kriterien der Ähnlichkeit**

Wir lernen, wie man mathematisch Laborergebnisse auf die Fabrik überträgt, was Reynolds-, Nusselt- und Prandtl-Zahlen sind und wofür sie Ingenieure nützlich machen.
