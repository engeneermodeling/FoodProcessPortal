---
title: "Trennung nicht einheitlicher Systeme"
topic: "separation"
topic_title: "Trennung nicht einheitlicher Systeme"
lecture: 6
slug: "lecture-06-separation"
locale: "de"
description: "Suspensionen, Emulsionen und Schäume in der Lebensmittelindustrie. Sedimentation, Stokeschen Gesetz und Archimedes-Kriterium. Filtration unter Druck und Vakuum. Zentrifugation und Trennung — Milch, Saft, Fett, Bier."
keywords: ["trennung von suspensionen", "sedimentation", "filterung", "zentrifugation", "stokes-gesetz", "trennsepator", "milchseparator", "filterpressen", "lebensmittelproduktion"]
duration: "65 min"
difficulty: "mittel"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Vorlesung 6. Trennung nicht einheitlicher Systeme

## Was Sie lernen werden

Nach dieser Vorlesung können Sie:

- **Nicht-einheitliche Systeme** klassifizieren und Lebensmittelbeispiele für jeden Typ nennen
- Die **Sedimentationsgeschwindigkeit** von Partikeln nach Stok'schem Gesetz und dem Archimedes-Kriterium berechnen
- Die **Produktivität eines Absetzbeckens** anhand der Sedimentationsfläche bestimmen
- Die **treibende Kraft der Filtration** erklären und die Filtergeschwindigkeit berechnen
- Den richtigen **Filtertyp** für ein konkretes Lebensmittelprodukt auswählen
- Das **Funktionsprinzip eines Milchseparators** erklären und den **Trennfaktor** bestimmen

---

## 1. Nicht-einheitliche Systeme in der Lebensmittelindustrie

![Auswahlkarte für Trennverfahren in heterogenen Lebensmittelsystemen](/images/lectures/separation/separation-methods-map.svg)

Die Lebensmittelproduktion hat ständig **nicht einheitliche Systeme** zu tun — Mischungen zweier oder mehrerer Phasen. Sie müssen sie **trennen** oder umgekehrt **verbinden** (darüber sprechen wir später).

### 1.1 Klassifikation nicht-einheitlicher Systeme

```
NICHT-EINHEITLICHE SYSTEME
├── **GASGESETZE** (Gas + feste oder flüssige Teilchen)
│   ├── **Staub** — Trockenmilch, Mehl, Zuckerpuder in der Luft
│   ├── **Nebel** — Tropfen Feuchtigkeit in Trocknungskammern
│   └── **Rauch** — Abgase der Kochkessel
└── **FLÜSSIGKEITEN**
    ├── **SUSPENSIONEN** — Flüssigkeit + feste Teilchen
    │   ├── **Grobes Material** (> 100 µm) — Brühe, Getreide
    │   ├── **Fein** (0,5–100 µm) — Tomatensaft, Fruchtpüree
    │   └── **Mikro** (< 0,5 µm) — Wein, Bier nach der Gärung
    ├── **EMULSIONEN** — Flüssigkeit + Flüssigkeit (Milch: Fett in der Plasma)
    └── **SCHAUM** — Flüssigkeit + Gas (Bierschaum, Milchschaum)
```

**Wesentliche Eigenschaft einer Suspension** — die **Viskosität**, die nach der **Bingham-Gleichung** (oder **Herschel-Bulkley**) bestimmt wird:

$$\mu_{\text{Sus}} = \mu_0 \cdot (1 + 4{,}5 \cdot x_V)$$

wobei $\mu_0$ die Viskosität der **kontinuierlichen Phase** und $x_V$ das **Volumenanteil der festen Phase** ist.

> 💡 Bei $x_V > 0{,}5$ (sehr dickflüssige Suspensionen) ist die Formel nicht mehr anwendbar — man verwendet **rheologische Modelle** (Bingham oder **Herschel-Bulkley**).

### 1.2 Methoden der Trennung — Überblick

| **Methode** | **Triebkraft** | **Dafür geeignet** |
|---|---|---|
| **Sedimentation** | **Gravitation** | Grobe Suspensionen ($\Delta\rho$ groß, $d > 50$ µm) |
| **Filtration** | **Druckdifferenz** | Alle Suspensionen, feste Phase > 0,1 µm |
| **Zentrifugation** | **Zentrifugalkraft** | Feinere Suspensionen und Emulsionen (Milch, Saft) |
| **Membranentfernung** | **Druckdifferenz** | Extrem fein — Mikrofiltration, Ultrafiltration |
| **Schwebung** | **Oberflächenspannung** | Teilchen, die schwer zu trennen sind |

---

## 2. Sedimentation (Absetzen unter **Schwerkraft**)

### 2.1 Kräfte auf ein **Partikel**

![Kräfte auf ein Teilchen bei der Sedimentation](/images/lectures/separation/settling-forces.svg)

Auf ein Partikel in einer Flüssigkeit wirken drei Kräfte:

$$G - A = R$$

wobei:
- $G = \frac{\pi d^3}{6} \rho_1 g$ — **Gewichtskraft**
- $A = \frac{\pi d^3}{6} \rho_2 g$ — **Auftriebskraft** (nach Archimedes)
- $R = \xi \cdot \frac{\pi d^2}{4} \cdot \frac{\rho_2 w_0^2}{2}$ — **Widerstand der Umgebung**

### 2.2 Universelles Bewegungsgesetz der **Sedimentationsgeschwindigkeit**

Indem wir $(G - A)$ mit $R$ vergleichen:

$$\boxed{w_0 = \sqrt{\frac{4 g d (\rho_1 - \rho_2)}{3 \xi \rho_2}}}$$

wobei $\xi$ der **Widerstandsbeiwert** ist — abhängig vom **Strömungsmodus** (Rezahlen).

### 2.3 Stokes-Gesetz (laminare Sedimentation)

Für **kleine Partikel** im **laminen Regime** ($Re < 2$) gilt:

$$\boxed{w_0 = \frac{g d^2 (\rho_1 - \rho_2)}{18 \mu}}$$

**Wichtige Schlussfolgerungen:**
- $w_0 \propto d^2$ — **Verdoppelung** der Teilchengröße → **4-fache** Geschwindigkeitssteigerung
- $w_0 \propto (\rho_1 - \rho_2)$ — Größerer Dichteunterschied → **schnelleres** Sedimentieren
- $w_0 \propto 1/\mu$ — **Dichtere** Flüssigkeit → **langsameres** Sedimentieren
- Bei **Erwärmung** sinkt die Viskosität → Sedimentation beschleunigt sich

### 2.4 Archimedes-Kriterium (für die Bestimmung des Geschwindigkeitsmodus)

$$Ar = \frac{g d^3 \rho_2 (\rho_1 - \rho_2)}{\mu^2}$$

**Anwendung:**

| **Bedingung** | **Geschwindigkeitsmodus** |
|---|---|
| $Ar \leq 36$ | **Laminar** (Stokes-Gesetz gilt) |
| $36 < Ar < 83500$ | **Übergangsmode** |
| $Ar > 83500$ | **Turbulent** |

### 2.5 Praktisches Beispiel — **Fettkügelchen in Milch**

Unbehandelte Milch wird stehen gelassen. **Fettkügelchen** ($\rho_1 = 910$ kg/m³) steigen im **Milchplasma** ($\rho_2 = 1035$ kg/m³, $\mu = 2{,}0 \cdot 10^{-3}$ Pa·s) auf; ihr Durchmesser beträgt $d = 4$ µm.

**Schritt 1. Archimedes-Kriterium:**
$$Ar = \frac{9{,}81 \cdot (4 \cdot 10^{-6})^3 \cdot 1035 \cdot 125}{4 \cdot 10^{-6}} = 2{,}05 \cdot 10^{-8}$$

**Schritt 2. Sedimentationsgeschwindigkeit (Stokes-Gesetz):**
$$w_0 = \frac{9{,}81 \cdot (4 \cdot 10^{-6})^2 \cdot 125}{18 \cdot 2{,}0 \cdot 10^{-3}} = 5{,}4 \cdot 10^{-7} \text{ m/s} \approx 0{,}02 \text{ mm/h}$$

> 💡 **Industrielle Homogenisierung** zerkleinert die **Fettkügelchen** von 4 µm auf **0,1–0,5 µm**. Die Aufstiegsgeschwindigkeit sinkt um **10–160-mal**!

---

## 3. Produktivität des Absetzbeckens

**Produktivität** (das entfernte Volumen pro Einheit der Zeit):

$$V = F \cdot w_0$$

**Wichtigste Erkenntnis:** Um die Produktivität zu erhöhen, muss man die **Fläche** erhöhen, nicht die Höhe. Deshalb sind Absetzbecken **breit und flach** gebaut oder mit **Lamellen** ausgestattet.

---

## 4. Filtration

![Kuchenfiltration mit Filterkuchenbildung](/images/lectures/separation/filter-cake.svg)

### 4.1 Grundlagen der Filtration

Filtration ist der **Durchgang von Flüssigkeit** durch ein **poröses Medium**, das **feste Teilchen** zurückhält.

**Durchflussgeschwindigkeit:**

$$w = \frac{dV}{F \cdot d\tau} = \frac{\Delta p}{\mu (r \cdot S + R_0)}$$

wobei:
- $\Delta p$ — **Druckdifferenz**, Pa·s
- $\mu$ — **Viskosität** der Flüssigkeit, Pa·s
- $r$ — **spezifischer Widerstand** des Schaums, m/kg
- $S$ — **Schichtdicke** des Schaums, m
- $R_0$ — **Widerstand des Filtermediums**, m⁻¹

### 4.2 Filtertypen für Lebensmittel

| **Produkt** | **Empfohlener Filtertyp** |
|---|---|
| Wasser, Milch, Säfte | **Zentrifugalfilter**, Mikrofilter |
| Pflanzenöl, Sahne | **Mikrofilter**, Ultraschallfilter |
| Joghurt, Sahne | **Ultrafilter**, Membranfilter |
| Tomatensauce | **Nanofilter**, Rutheniumfilter |
| Bier, Wein | **Karbonfilter**, **Steriltätungsfilter** |
| Milchent | **Ultrafilter** (10 kDa - 500 kDa) |

---

## 5. Zentrifugation

![Prinzip eines Teller-Milchseparators](/images/lectures/separation/disc-stack-separator.svg)

### 5.1 Zentrifugation vs. Sedimentation

Die **Zentrifugalkraft** ersetzt die **Schwerkraft** und verstärkt die Trennung um den Faktor $Fr$:

$$Fr = \frac{\omega^2 r}{g} = \frac{n^2 r}{900} \cdot 10^4$$

(wobei $n$ im **Umdrehungsbereich** (rpm), $r$ in **Millimetern** angegeben ist)

**Trenngeschwindigkeit vergrößert sich um Faktor $Fr$!**

> 🌟 **Milchseparator** arbeitet bei $Fr = 5\,000–10\,000$. **Fettkügelchen** trennen sich in **Sekunden** — statt **Stunden**!

### 5.2 Arten der Zentrifugen

| **Typ** | **Drehzahl** | **Anwendung** |
|---|---|---|
| **Drehzental** | 1000–3000 rpm | Kleinere Anlagen, Testanlagen |
| **Schleifdrehzental** | 3000–15000 rpm | Milch, Bier, Lebensmittel |
| **Hochgeschwindigkeitszentrifuge** | 15000–60000 rpm | Labor, Produktentwicklung |
| **Kolonnenzentrifuge** | Nicht drehend | Getränke, Säfte |

---

## 6. Zusammenfassung

### **Wichtige Formeln**

| **Gesetz** | **Formel** | **Anwendung** |
|---|---|---|
| **Stokes-Gesetz** | $w_0 = \frac{g d^2 (\rho_1 - \rho_2)}{18 \mu}$ | Kleine Partikel im laminären Regime |
| **Archimedes-Kriterium** | $Ar = \frac{g d^3 \rho_2 (\rho_1 - \rho_2)}{\mu^2}$ | Bestimme den Geschwindigkeitsmodus |
| **Zentrifugationsfaktor** | $Fr = \frac{n^2 r}{900}$ | Vergleiche mit Schwerkraft-Geschwindigkeit |
| **Filtergeschwindigkeit** | $w = \frac{\Delta p}{\mu (r S + R_0)}$ | Bestimme Filterproduktivität |

### **Schlüsselargumente für die Trennmethoden**

1. **Sedimentation**: Einfach, günstig, aber **langsam** — nur für **grobe Suspensionen**
2. **Filtration**: **präzise**, **flexibel**, aber **Filterverschmutzung** möglich
3. **Zentrifugation**: **Sehr schnell**, **keine Filterverschmutzung**, aber **hoher Energieverbrauch**

---

## Selbstkontrollfragen

1. **Fettkügelchen** in Milch: $d = 4$ µm, $\rho_1 = 910$ kg/m³, $\rho_2 = 1035$ kg/m³, $\mu = 2 \cdot 10^{-3}$ Pa·s. Bestimmen Sie die **Sedimentationsgeschwindigkeit** nach Stokes-Gesetz. Vergleichen Sie mit der **Zentrifugationsgeschwindigkeit** bei $Fr = 5000$!

2. Eine **Filterpresse** filtert **Tomatensauce** mit $\Delta p = 300$ kPa, $\mu = 5 \cdot 10^{-3}$ Pa·s, $r = 10^8$ m/kg, $S = 0{,}02$ m, $R_0 = 10^6$ m⁻¹. Bestimmen Sie die **Filtergeschwindigkeit** in L/(m²·h).

3. **Milchseparator**: $n = 12000$ rpm, $r = 100$ mm. Berechnen Sie $Fr$. Wie oft schneller ist die Trennung gegenüber der Schwerkraft?

4. Warum wird **Filtration** bei **Bier** verwendet, um Trübung zu beseitigen, aber **Zentrifugation** für **Milch** zur Fettunterscheidung?

---

## Nützliche Ressourcen

### **Online-Rechner**
- 🔗 [Centrifuge power calculator](https://www.omnicalculator.com/physics/centrifuge-power) — Berechnung der **Zentrifugationsleistung**
- 🔗 [Filter sizing calculator](https://www.handsfield.com/filter-calculator) — Filterauswahl Online

### **Datenbanken**
- 🔗 [USDA FoodData Central](https://fdc.nal.usda.gov) — Lebensmittel-Eigenschaften
- 🔗 [Engineering Toolbox — Separation](https://www.engineeringtoolbox.com/separator-d_1785.html) — Technische Daten

### **Videos**
- 📺 [Centrifugal separator — how it works](https://www.alfalaval.us/products/separation/centrifugal-separators/separators/dairy/dairy-separation-solutions/)
- 📺 [How milk separator works](https://www.alfalaval.us/products/separation/centrifugal-separators/separators/dairy/dairy-separation-solutions/)

---

## Nächste Vorlesung

**Vorlesung 7 → Membranprozesse der Trennung**

Umkehrosmose, Nano-, Ultrafiltration — modernste Trenntechnologien für Lebensmittel. Konzentration von Säften, Herstellung von Milchproteinen, Wasseraufbereitung.
