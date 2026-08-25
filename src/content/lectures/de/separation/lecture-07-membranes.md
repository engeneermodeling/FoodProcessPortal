---
title: "Membranprozesse der Trennung"
topic: "separation"
topic_title: "Trennung nicht eindeutiger Systeme"
lecture: 7
slug: "lecture-07-membranes"
locale: "de"
description: "Umkehrosmose, Nano-, Ultra- und Mikrofiltration — Theorie, Berechnung, Geräte. Konzentration von Säften ohne Erhitzen, Ultrafiltration von Milchserum, Wasserreinigung für Lebensmittelproduktion."
keywords: ["Membranverfahren", "Umkehrosmose", "Ultrafiltration", "Mikrofiltration", "Nanofiltration", "Konzentrationspolarisation", "Permeat", "Retentat", "Lebensmittelproduktion"]
duration: "60 min"
difficulty: "mittel"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Vorlesung 7. Membranprozesse der Trennung

## Was Sie lernen werden

Nach dieser Vorlesung können Sie:

- den Unterschied zwischen **Umkehrosmose, Nano-, Ultra- und Mikrofiltration** anhand der Porengröße und Arbeitsdrucke erklären
- das **Osmotische Druck** einer Lösung nach der van't Hoff-Gleichung berechnen
- das Phänomen der **Konzentrationspolarisation** erklären und drei Methoden zur Vermeidung nennen
- die **spezifische Durchflussrate** und **Selectivität** einer Membran berechnen
- die Bauweise und Vorteile der vier Arten von Membrankonstruktionen beschreiben
- 5 praktische Anwendungen von Membranprozessen in der Lebensmittelindustrie nennen

---

## 1. Warum sind Membranprozesse die Zukunft der Lebensmittelindustrie?

Traditionelle Methoden zur Konzentration von Lebensmittelflüssigkeiten — **Verdampfung** — haben einen grundlegenden Nachteil: Erhitzen zerstört thermolabile Komponenten. Vitamine, Aromastoffe, Antioxidantien, Proteine — alles davon zerfällt bei Temperaturen.

Membranverfahren ermöglichen:
- Konzentration von Orangensaft von 12% auf 65% Trocknstoffe **ohne Erhitzen** — Aroma und Vitamine bleiben vollständig erhalten
- Gewinnung von **Whey Protein 90%** aus Molke für Sporternährung
- Herstellung von **mikrofiltriertem Bier** ohne Pasteurisierung — "lebendiges" Bier mit Haltbarkeit von 30+ Tagen
- **Entsalzung** von Meerwasser für Produktionszwecke auf Inseln und in Regionen mit Wasserknappheit

> 🌟 **Membrantechnologien sind das "kalte Konzentrieren".** Die Trennung erfolgt bei Raumtemperatur oder leicht erhöhter Temperatur, ohne Phasenübergang und ohne chemische Reagenzien. Deshalb werden sie seit den 1970er Jahren intensiv weiterentwickelt.

📺 **Video:** [How membrane filtration works in food processing](https://dairyprocessinghandbook.tetrapak.com/chapter/membrane-technology)

---

## 2. Klassifikation der Membranverfahren

![Spektrum der Membranprozesse nach Partikelgröße und Anwendung](/images/lectures/separation/membrane-spectrum.svg)

### 2.1 Nach treibender Kraft

| Triebkraft | Verfahren |
|---|---|
| **Druckdifferenz** (Barriermembranen) | Umkehrosmose, Nano-, Ultra-, Mikrofiltration |
| **Konzentrationsunterschied** | Dialyse, Pervaporation, Gastrennung |
| **elektrische Potentialdifferenz** | Elektrodialyse, Elektroosmose |
| **Temperaturdifferenz** | Membrandestillation |

In der Lebensmittelindustrie sind die **Barriermembranverfahren** am verbreitetsten — wir betrachten sie genauer.

### 2.2 Barriermembranverfahren — Vergleich

```
Porengröße der Membran, µm:
0,0001   0,001    0,01      0,1      1,0       10
  │        │        │        │        │        │
  │←──────→│        │        │        │        │   Umkehrosmose
           │←───V──→│        │        │        │   Nanofiltration
                    │←──V───→│        │        │   Ultrafiltration
                             │←───V──→│        │   Mikrofiltration
                                      │←───V──→│   Konventionelle Filtration
```

| Verfahren | Porengröße, µm | Arbeitsdruck, MPa | Was wird zurückgehalten |
|---|---|---|---|
| **Umkehrosmose (RO)** | < 0,001 | 0,7–6,0 | Ionen, kleine Moleküle (NaCl, Zucker) |
| **Nanofiltration (NF)** | 0,001–0,01 | 0,4–3,0 | Zweiwertige Ionen, Saccharose |
| **Ultrafiltration (UF)** | 0,01–0,1 | 0,2–0,8 | Proteine, Polysaccharide, Mikroorganismen |
| **Mikrofiltration (MF)** | 0,1–10 | 0,1–0,2 | Bakterien, Hefen, Kolloide |

---

## 3. Theoretische Grundlagen der Barriermembranverfahren

### 3.1 Das Phänomen der Osmose

![Osmose, Gleichgewicht und Umkehrosmose](/images/lectures/separation/osmosis-reverse-osmosis.svg)

Bei der Osmose dringt das Lösungsmittel symmetrisch durch ein halbtransparentes Medium von der gespaltenen Lösung in die konzentriertere Lösung ein, bis das Gleichgewicht erreicht ist.

**Drei Zustände des Systems:**

```
a) Osmose               b) Gleichgewicht            c) Umkehrosmose
┌─────┬──────┐         ┌─────┬──────┐            ┌─────┬──────┐
│Wasser│Lösung│         │Wasser│Lösung│ ← Druck π   │Wasser│Lösung│ ← Druck p > π
│     │  ↑   │         │     │  =   │            │     │      │
│→→→→→│      │         │     │      │            │     │←←←←←←│
│     │      │         │     │      │            │     │      │
└─────┴──────┘         └─────┴──────┘            └─────┴──────┘
[Membran]               [Membran]               [Membran]
Wasser dringt ein       Gleichgewicht bei       Bei Druckanwendung > π:
in Lösung                  Druck π               Wasser fließt RÜCKS
```

**Osmotischer Druck** $\pi$ — der Druck, bei dem die Osmose aufhört und Gleichgewicht eingetreten ist.

### 3.2 van't Hoff-Gleichung für den osmotischen Druck

$$\pi = i \cdot C \cdot R \cdot T = i \cdot c \cdot R \cdot T$$

wo:
- $i$ — van't Hoff-Koeffizient (für NaCl, KCl: $i = 2$; für Na₂SO₄: $i = 3$; für Saccharose: $i = 1$)
- $C$ — Massenkonzentration, kg/m³
- $M$ — Molare Masse, kg/mol
- $c = C/M$ — molare Konzentration, mol/m³
- $R = 8{,}314$ J/(mol·K) — Gaskonstante
- $T$ — absolute Temperatur, K

**Beispiel 1 — Meerwasser:**

Salzgehalt 3,5% → $C = 35$ kg/m³, $M = 0{,}0585$ kg/mol, $i = 2$, $T = 298$ K:

$$\pi = 2 \cdot \frac{35}{0{,}0585} \cdot 8{,}314 \cdot 298 = 2 \cdot 598 \cdot 2477 \approx 2{,}96 \text{ MPa} \approx 30 \text{ atm}$$

Daher für Wasserbehandlung ein Druck **über 30 atm** erforderlich — eine Ingenieurherausforderung!

**Beispiel 2 — 12°Brix Orangensaft:**

Gehalt an Zucker (hauptsächlich Frucht- und Glukose): $C \approx 120$ kg/m³, $M \approx 0{,}18$ kg/mol, $i = 1$, $T = 298$ K:

$$\pi = 1 \cdot \frac{120}{0{,}18} \cdot 8{,}314 \cdot 298 \approx 1{,}65 \text{ MPa} \approx 16 \text{ atm}$$

Für die Konzentration eines Säftes mittels Umkehrosmose ist ein Druck **20–40 atm** erforderlich.

### 3.3 Triebkraft der Barriermembranverfahren

**Umkehrosmose** (signifikanter osmotischer Druck):

$$\Delta p_{\text{treibend}} = p_{\text{arbeitsfähig}} - (\pi_1 - \pi_2)$$

wo $\pi_1, \pi_2$ — osmotische Drücke von Konzentrat und Permeat sind.

**Ultrafiltration und Mikrofiltration** (osmotischer Druck von Proteinen und Bakterien gering):

$$\Delta p_{\text{treibend}} \approx p_{\text{arbeitsfähig}}$$

### 3.4 Spezifische Durchflussrate der Membran

$$G = \frac{V}{F \cdot \tau} = K \cdot \Delta p$$

wo:
- $G$ — spezifische Durchflussrate, m³/(m²·s)
- $V$ — Permeat-Volumen, m³
- $F$ — Membranfläche, m²
- $\tau$ — Zeit, s
- $K$ — Durchlässigkeitsbeiwert der Membran, m³/(m²·s·Pa)
- $\Delta p$ — Triebkraft, Pa

Typische Werte $G$ für Lebensmittelanwendungen:

| Verfahren | $G$, l/(m²·h) | Druck, bar |
|---|---|---|
| Umkehrosmose (Saft) | 10–30 | 30–60 |
| Nanofiltration | 20–60 | 10–30 |
| Ultrafiltration (Milch) | 50–200 | 2–8 |
| Mikrofilteration (Bier) | 200–800 | 1–2 |

### 3.5 Selektivität (Trennfähigkeit) der Membran

$$\varphi = \left(1 - \frac{C_2}{C_1}\right) \cdot 100\%$$

wo $C_1$ — Konzentration der Substanz in der Eingangslösung, $C_2$ — im Permeat.

Eine ideale Membran: $\varphi = 100\%$ (nichts passiert die Membran). Reale Werte:

| Membran | Substanz | Selektivität |
|---|---|---|
| RO | NaCl | 95–99% |
| NF | Zweiwertige Ionen Ca²⁺ | 90–98% |
| NF | Einwertige Ionen Na⁺ | 20–70% |
| UF | Protein (>10 000 Da) | 95–99% |
| MF | Bakterien | >99,99% (log 4 Reduktion) |

---

## 4. Konzentrationspolarisation — das wichtigste Problem

![Vergleich von Dead-End- und Cross-Flow-Filtration](/images/lectures/separation/cross-flow-polarization.svg)

### 4.1 Das Phänomen

Bei der Filtration diffundiert das Lösungsmittel durch die Membran → große Moleküle und Partikel bleiben zurück → die Konzentration an der Membranoberfläche **erhöht sich**. Es entsteht eine **Konzentrationsschicht** (Gelschicht).

Folgen:
- Erhöhung des osmotischen Drucks an der Membranoberfläche → Verminderung der Triebkraft
- Erhöhter hydraulischer Widerstand der Membran
- Verminderung der Durchflussrate um 2–10-fach im Vergleich zu einer "reinen" Membran
- Verminderung der Selektivität

> 💡 **Analogie:** Die Konzentrationspolarisation ist wie ein Kaffefilter, der allmählich mit Kaffeeschicht verstopft. Anders als bei einem Kaffefilter — "hält" diese "Masse" nicht als festes Material, sondern bleibt flüssig und erfordert kontinuierliches "Waschen".

### 4.2 Methoden zur Vermeidung der Konzentrationspolarisation

**1. Strömungsoverflächenturbulenz:** Hohe Strömungsgeschwindigkeit entlang der Membranoberfläche (Tangentialfilterung, Cross-Flow) — die effektivste Methode.

```
Tangential (Cross-Flow):
  Zufuhr → ══════════════════╗
            ──────────────────╢ ← Membran
            ══════════════════╣ ← Permeat
                 ↓↓↓↓↓↓↓↓↓↓↓↓
               [Lose Permeatschlüsse]

  Endgütiges Filter:          Tangential:
    Zufuhr → ┌────────┐        Zufuhr → ═══════════════════ → Retentat
              │Membran │                      ───────────────
              └────────┘                      ↓↓↓↓↓↓↓↓↓↓↓↓↓
                ↓↓↓↓↓↓                          Permeat
              Permeat
  Ablagerung bildet sich.    Oberfläche wird kontinuierlich aktualisiert.
```

**2. Druck- und Durchflusspulsationen:** zyklisches Erhöhen/Vermindern des Drucks oder Rückfluss des Permeats ("Backflushing").

**3. Mechanische Reinigung der Oberfläche:** drehende Membran, Bürsten (für spezielle Konstruktionen).

**4. Vorbehandlung:** Mikrofiltration oder Ultrafiltration vor der Umkehrosmose — Entfernung grober Partikel, die schnell die Membran verstopfen.

📺 **Video:** [How to prevent membrane fouling in food processing](https://dairyprocessinghandbook.tetrapak.com/chapter/membrane-technology)

---

## 5. Membranmaterialien

### 5.1 Polymeren Membran (am häufigsten)

| Material | Abkürzung | Anwendung | Temperatur |
|---|---|---|---|
| Zelluloseacetat | CA | RO, UF | bis 45°C |
| Polyamide | PA | RO, NF | bis 45°C |
|Polysulfon | PS | UF, MF | bis 75°C |
|Polysulfonäthyl| PES | UF, MF | bis 75°C |
|Polyvinylidenfluorid | PVDF | MF, UF | bis 120°C |
|Polypropylen | PP | MF | bis 130°C |

> 💡 **PVDF und PP** — eine ausgezeichnete Wahl für die Lebensmittelindustrie: verträgt Dampfsterilisation (CIP und SIP), widerstandsfähig gegen Säuren und Basen Reinigungslösungen.

### 5.2 Keramische Membran

- Materialien: Al₂O₃, TiO₂, ZrO₂ auf porösem Träger
- Vorteile: thermische Beständigkeit (bis 500°C), chemische Beständigkeit, mechanische Festigkeit, lange Lebensdauer (10–15 Jahre)
- Nachteile: teurer als Polymermembranen um 5–10-fach
- Anwendung: Mikrofiltration zur kalten Stabilisierung, Klärung von Fruchtsäften, Brauerei

---

## 6. Membrankonstruktionen

### 6.1 Flachmembran-Anlagen (Filterpress-ähnlich)

Konstruktion ähnelt einem Rollenfilterpress: Platten mit Schrauben, zwischen denen Membranen mit Entwässerungsschicht liegen. Kanäle zwischen den Membranen (0,5–5 mm) für den Flüssigkeitsstrom.

- Spezifische Fläche: 60–300 m²/m³
- Vorteile: einfache Ersatzung der Membran, leichte Reinigung
- Nachteile: niedrige spezifische Fläche, manuelle Zusammenstellung
- Anwendung: Konzentration feuchter Produkte mit kleinen Volumen

📺 **Video:** [Flat sheet membrane modules for food processing](https://www.gea.com/en/products/membrane-filtration/?i=Dairy)

### 6.2 Röhrenmembrananlagen

Ähnlich wie ein Schrankwärmetauscher: Rohre (Membranen) im Gehäuse. Das Fluid fließt durch die Rohre mit hoher Geschwindigkeit → minimale Konzentrationspolarisation.

- Spezifische Fläche: 60–200 m²/m³
- Vorteile: exzellente Hydrodynamik, gleichmäßiger Durchfluss, keine Stillstandszone, leichte Reinigung (Durch die Kugel)
- Nachteile: niedrige spezifische Fläche, hoher Materialverbrauch
- Anwendung: Produkte mit Partikeln (Säfte mit Fruchtfleisch, Suspensionen)

### 6.3 Rollenmembranmodule (Spiralmodule)

![Spiralwickel-Membranmodul](/images/lectures/separation/spiral-wound-module.svg)

**Die häufigste Konstruktion in der Industrie.** Zwei Membranen + Entwässerungslied + Netschützter Trenner → zu einem Rollen auf einem perforierten Schlauch für den Permeatfluss gewickelt.

```
Zufuhr der Lösung →
  ══════════════════╗
  ──────────────────╢ ← Membran
  ══════════════════╢ ← Entwässerung (Permeat fließt zum Schlauch)
  ──────────────────╢ ← Membran
  ══════════════════╣ → Retentat
         ↓
     [Permeatschlauch]
```

- Spezifische Fläche: **300–800 m²/m³** — die höchste unter allen Typen!
- Vorteile: Kompaktheit, geringer Materialverbrauch, niedrige Kosten
- Nachteile: komplexe Ersatzung (ganzer Rollen wird ausgetauscht), nicht für Schaummengen mit Partikeln > 0,1 mm geeignet
- Anwendung: Umkehrosmose (Entsalzung, Säftekonzentration), Nanofiltration

### 6.4 Hohlfasermembranen

Tausende der dünnsten Schlauchen (50–1000 µm) in einem Gehäuse. Die Lösung fließt durch die Fasern, der Permeat tritt durch die Schlauchwände nach außen.

- Spezifische Fläche: **bis zu 2000 m²/m³** — Rekord!
- Vorteile: kompakteste Konstruktion, riesige Fläche
- Nachteile: keine mechanische Reinigung möglich, anfällig für Verschmutzung (erfordert Vorbehandlung)
- Anwendung: Ultrafiltration und Mikrofiltration klarer Lösungen, Trinkwasseraufbereitung, Milchproteinherstellung

📺 **Video:** [Hollow fiber membrane modules for food and beverage](https://www.gea.com/en/products/membrane-filtration/?i=Dairy)

---

## 7. Praktische Anwendungen in der Lebensmittelindustrie

### 7.1 Konzentration von Orangensaft (RO + NF)

Traditionelle Methode: **Verdampfung** bei 45–50°C im Vakuum. Aroma teilweise erhalten, aber Wärmestress vorhanden.

Membranmethode: **Umkehrosmose** bei Zimmertemperatur.
- Konzentration von 12°Brix auf 40–45°Brix bei einem Durchgang
- Danach NF oder Wiederholung RO auf 65°Brix
- Aroma und Vitamin C bleiben 95–98% erhalten vs. 70–80% bei Verdampfung
- Energieeinsparung: 5–8-mal weniger als Verdampfung

**Beschränkungen:** Druck begrenzt durch die mechanische Festigkeit der Membran und das Modul (~70 bar) → maximale Konzentration ca. 45–50°Brix pro Durchgang.

### 7.2 Ultrafiltration von Milchserum — WPC und WPI

Milchserum ist ein Nebenprodukt der Käseproduktion. Es enthält 0,6–0,8% Eiweiß (β-Laktoglobulin, α-Laktalbumin), 4,5% Zucker, Mineralien.

**UF-Schema:**
```
Serum (0,7% Eiweiß) → UF-Anlage → Permeat (Zucker, Mineralien, Wasser)
                                       ↓
                              Retentat (4–6% Eiweiß) — WPC 35
                                       ↓ (Dialyse)
                              WPC 80 (80% Eiweiß im Trockenanteil)
                                       ↓ (weitere UF)
                              WPI 90+ (Isolat, > 90% Eiweiß)
```

So wird ein Nebenprodukt der Produktion zu einem wertvollen Proteinprodukt für Lebensmittel und Sporternährung.

### 7.3 Mikrofiltration von Milch (MF) — Kaltsterilisation

MF-Membranen (1,4 µm) halten **99,9%** der Bakterien und alle somatischen Zellen zurück. Das Milch wird mikrobiologisch sicher **ohne Erhitzen**.

- Haltbarkeit: 15–25 Tage (vs. 7 Tage bei pasteurisiertem)
- Geschmack: "frische" Milch ohne typischen Pasteurisierungsgeschmack
- Technologiename: **ESL Milch (Extended Shelf Life milk)**
- Märkte: Frankreich, Belgien, Teile der EU-Märkte

🔗 **Artikel:** [Cold microfiltration of milk for ESL production](https://www.dairyfoods.com/products/processing/article/21284416/cold-mf-milk-esl-production)

### 7.4 Ultrafiltration von Milchserum zur Weinbergstabilisierung

Ultrafiltration kann auch zur Stabilisierung von Wein eingesetzt werden.

### 7.5 Umkehrosmose für die Wasserreinigung

Lebensmittelproduktion verbraucht riesige Mengen an Wasser. RO-Reinigung:
- Entfernt Chlor, Schwermetalle, Nitrate, Pestizide
- Senkt die Härte (verhindert Ablagerungen in Wärmetauschern)
- Standard für Bierbrauerei — Trinkwasser für Bier muss unabhängig vom Wasserquelle denselben chemischen Standard haben
- 🔗 **Studie:** [Water treatment by reverse osmosis in food industry](https://www.sciencedirect.com/science/article/pii/S0921509315003488)

---

## 8. Diafiltration

Diafiltration ist eine Membranfilterung mit gleichzeitiger Wasserzufuhr zur "Reinigung" des Retentats vor kleinen Molekülen.

**Anwendung:** bei der WPC/WPI-Produktion die Entfernung von Zucker und Mineralien aus dem Konzentraten des Milcheiweißes.

**Durchfluss-Verhältnis:**
$$\alpha = \frac{Q_D}{Q_n}$$

wo $Q_n$ — Durchfluss des Permeats, $Q_D$ — Durchfluss der zugeführten Wasser.

Bei $\alpha = 0$ — reine Konzentration. Bei $\alpha > 0$ — gleichzeitige Konzentrierung + Reinigung.

**Optimale Strategie:** erst Konzentration (bis ca. 4% Eiweiß), dann Dialyse (Entfernung von Zucker < 1%), dann erneute Konzentration (bis 8–10% Eiweiß) → Sprühtrocknung → WPC 80.

---

## 9. Bauformen von Membrananlagen

### 9.1 Tangential- (Cross-Flow-) Membrananlage kontinuierlicher Betrieb

```
                    ┌──────────────────┐
  Zufuhr ──────────→│ Membranmodul     │──────────→ Retentat
                    └──────────────────┘
                            ↓↓↓
                          Permeat
                            ↑
  Pumpe ← ← ← ← ← ← ← ← ←┘
  (Wiederkreislauf bei 5–10-facher Überzufuhr zur Aufrechterhaltung der Geschwindigkeit)
```

Die meisten industriellen Anlagen haben 2–3kreise für schrittweise Konzentration — dies reduziert die Gesamtfläche der Membran um 40–60% im Vergleich zu einem Einzcirkulationssystem.

🔗 **Technische Daten:** [Alfa Laval spiral wound modules](https://www.alfalaval.com/products/separation/membrane-filtration/spiral-wound/)

### 9.2 Membranregeneration (CIP für Membrananlagen)

Nachfolgendes Regeneration der Membranen nach:
- Jedes Arbeitsschicht (8–12 Stunden Arbeit)
- Leistungsreduktion um 20–30% vom Anfangswert

Typische Reinigungssequenz CIP:
1. **Wassereinspülung** (20°C, 15 min) — Entfernung von Rückständen
2. **Wachseinspülung** (Natriumhydroxid 0,5–1%, 45–55°C, 30 min) — Entfernung von Eiweiß, Fett
3. **Wasseraufspülung** (15 min)
4. **Säureeinspülung** (Wasserstoffperoxid oder Zitronensäure 0,5–1%, 40°C, 20 min) — Entfernung von Mineralablagerungen
5. **Endgültige Aufspülung** (20 min)

Temperatur- und pH-Begrenzungen hängen vom Membranmaterial ab!

---

## Zusammenfassung

**Vier Barriermembranverfahren:**

| Verfahren | Druck, MPa | Was wird zurückgehalten | Lebensmittelanwendung |
|---|---|---|---|
| **RO** | 0,7–6,0 | Ionen, kleine Moleküle | Saftekonzentration, Wasseraufbereitung |
| **NF** | 0,4–3,0 | Zweiwertige Ionen, Saccharose | Milcheiweiß-Demineralisierung |
| **UF** | 0,2–0,8 | Eiweiße, Polysaccharide | WPC/WPI aus Serum, Milchkonzentration |
| **MF** | 0,1–0,2 | Bakterien, Hefen | ESL-Milch, Bierklärung |

**van't Hoff-Gleichung:**
$$\pi = i \cdot c \cdot R \cdot T$$

**Spezifische Durchflussrate:**
$$G = K \cdot \Delta p$$

**Selektivität:**
$$\varphi = \left(1 - \frac{C_2}{C_1}\right) \cdot 100\%$$

**Konzentrationspolarisation** — Anhäufung zurückgehaltener Stoffe an der Membranoberfläche → Druckminderung. Lösung: **Tangentialfilterung** mit Wiederkreislauf.

---

## Selbstkontrollfragen

1. Eine NaCl-Lösung mit Konzentration 10 g/l ($M = 0{,}0585$ kg/mol, $i = 2$) bei 25°C. Berechnen Sie den osmotischen Druck (MPa). Welcher minimale Arbeitsdruck ist für die Umkehrosmose erforderlich?

2. Eine Ultrafiltrationsmembran ($K = 2 \cdot 10^{-11}$ m³/(m²·s·Pa)) bei einem Druck von 4 bar (400 000 Pa). Berechnen Sie die spezifische Durchflussrate (l/(m²·h)).

3. Der Gehalt an β-Laktoglobulin im Serum $C_1 = 7$ g/l, im Permeat $C_2 = 0{,}07$ g/l. Wie hoch ist die Selektivität der UF-Membran?

4. Warum hat ein durch Umkehrosmose konzentrierter Orangensaft bessere Geschmacks- und Aromaeigenschaften als einer durch Verdampfung?

5. Milchserum durchläuft die Ultrafiltration in Tangentialbetrieb mit einem Durchfluss von 5 m/s. Wie ändert sich die Membranproduktivität, wenn die Geschwindigkeit auf 1 m/s reduziert wird? Erklären Sie dies anhand der Konzentrationspolarisation.

---

## Nützliche Ressourcen

### Pumpen- und Membranhersteller
- 🔗 [Alfa Laval membrane filtration](https://www.alfalaval.com/products/separation/membrane-filtration) — UF/MF für die Milchindustrie
- 🔗 [Koch Separation Solutions](https://www.kochseparation.com) — breite Palette für Lebensmittelanwendungen
- 🔗 [DowDuPont FILMTEC RO membranes](https://www.dupont.com/water/reverse-osmosis.html) — Standard für RO-Membranen
- 🔗 [Suez Water Technologies](https://www.suezwatertechnologies.com) — Membransysteme für Lebensmittel

### Wissenschaftliche Ressourcen
- 🔗 [Journal of Membrane Science](https://www.sciencedirect.com/journal/journal-of-membrane-science) — Führende wissenschaftliche Zeitschrift
- 🔗 [Membrane Filtration in Food Processing](https://www.mdpi.com) — Buch und Artikel
- 🔗 [Comprehensive Membrane Science and Engineering](https://www.elsevier.com) — Fachinformation

### Fachartikel
- 🔗 [Dairy Foods — membrane technology articles](https://www.dairyfoods.com/topics/technology/separation-filtration)
- 🔗 [Food Processing — membrane filtration](https://www.foodprocessing.com/technology)

📺 **Videos:**
- 📺 [How ultrafiltration works in dairy](https://www.alfalaval.us/products/separation/membranes/spiral-membranes/uf-spiral/)
- 📺 [Reverse osmosis explained simply](https://learncheme.com/quiz-yourself/interactive-self-study-modules/osmosis-and-reverse-osmosis/osmosis-and-reverse-osmosis-introduction/)
- 📺 [Membrane fouling prevention in food processing](https://dairyprocessinghandbook.tetrapak.com/chapter/membrane-technology)

---

## Nächste Vorlesung

**Vorlesung 8 → Vermischung in Lebensmittelanlagen**

Mechanische Mischer (Laufblätter, Schraubermischer, Schumpumpen), pneumatische Vermischung mit Barboten, Ultraschall- und statische Vermischung. Berechnung der Mischpower. Skalierung von Labor zu Produktion.
