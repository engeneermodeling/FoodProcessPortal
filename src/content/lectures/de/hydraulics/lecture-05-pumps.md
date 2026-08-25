---
title: "Pumpen und Gasstrahlmaschinen"
topic: "hydraulics"
topic_title: "Grundlagen der Hydraulik"
lecture: 5
slug: "lecture-05-pumps"
locale: "de"
description: "Zentrifuge Pumpen, Kolben- und Schneckenpumpen — Bauweise, Funktionsprinzip, Kennlinien, Pumpenauswahl für Lebensmittelunternehmen. Kavitation, Durchflussregelung, Pumpentausch."
keywords: ["zentrifugale Pumpe", "schneckenpumpen", "kolbenpumpen", "kavitation", "pumpkennlinen", "arbeitspunkt", "lebensmittelindustrie"]
duration: "60 min"
difficulty: "grundlegend"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Vorlesung 5. Pumpen und Gasstrahlmaschinen

## Was Sie lernen werden

Nach dieser Vorlesung können Sie:

- verschiedene Pumpen nach dem Funktionsprinzip klassifizieren und die drei häufigsten Typen in der Lebensmittelindustrie nennen
- das Funktionsprinzip einer **Zentrifugalpumpe** erklären und den erforderlichen Hubdruck und die Leistung berechnen
- die **Betriebspunkt** der Pumpe finden, indem man die Kennlinien der Pumpe und des Rohrleitungssystems schneidet
- das Phänomen der **Kavitation** erklären und drei Methoden zur Vermeidung nennen
- den geeigneten Pumpen Typ basierend auf dem Produkt und den technischen Bedingungen auswählen
- die **verbrauchte Leistung** berechnen und einen Elektromotor auswählen

---

## 1. Klassifizierung der Pumpen

![Pumpenauswahlkarte für Lebensmittelprodukte](/images/lectures/hydraulics/pump-selection-map.svg)

Eine Pumpe ist eine hydraulische Maschine, die die mechanische Energie des Antriebs in das Fluidaustausch-Energie umwandelt. Die Lebensmittelindustrie ist einer der größten Verbraucher von Pumpenausrüstung: In jedem Betrieb sind mehrere Dutzend bis hunderte Pumpen verschiedener Typen im Einsatz.

```
PUMPE
├── SCHEIBENLAGEN (Centrifugal)
│   ├── Zentrifugalpumpen ← Häufigste Art in der Lebensmittelindustrie
│   ├── Achspumpen
│   └── Wirbhängelpumpen
├── VOLUMETRISCHE (Druckschieber)
│   ├── Kolbenpumpen
│   └── Schneckenpumpen
│       ├── Zahnradpumpen ← Für Öle, Sirupe
│       ├── Schneckenpumpen ← Für viskose Produkte
│       ├── Peristaltikpumpen ← Für empfindliche Produkte (Joghurt, Fruchtmus)
│       └── Schaufelpumpen (Plattendrucke)
└── SPEZIALPUMPE
    ├── Strahlpumpen (Ablaufpumpen) ← Für Vakuumanlagen
    └── Elflo-pumpen ← Für Suspensionen
```

**Wichtigste Parameter jeder Pumpe:**

| Parameter | Symbol | Einheit | Bedeutung |
|---|---|---|---|
| Durchfluss (Nennvolumen) | $Q$ | m³/s, m³/h | Fluidvolumen pro Zeiteinheit |
| Hubdruck | $H$ | m | Höhe eines Wasserstempels mit der Energie der Pumpe |
| Wirkung auf der Pumpe | $N$ | kW | Verbrauchte Leistung |
| Wirkungsgrad | $\eta$ | Bruchteil der Eins | Verhältnis nützlicher zu verbrauchter Leistung |

**Der Gesamtwirkungsgrad einer Pumpe ist das Produkt von drei Teilwirkungsgraden:**

$$\eta = \eta_{\text{rot}} \cdot \eta_{\text{hyd}} \cdot \eta_{\text{mech}}$$

wobei:
- $\eta_{\text{rot}}$ — Volumenwirkungsgrad (Leckschäden): 0,85–0,98
- $\eta_{\text{hyd}}$ — Hydrodynamischer Wirkungsgrad (innere Reibung): 0,80–0,95
- $\eta_{\text{mech}}$ — Mechanischer Wirkungsgrad (Lagerreibung): 0,90–0,98

Typischer Gesamtwirkungsgrad zentrifuger Pumpen: **0,65–0,85**.

---

## 2. Zentrifugale Pumpen

### 2.1 Bauweise und Funktionsprinzip

![Funktionsprinzip einer Kreiselpumpe](/images/lectures/hydraulics/centrifugal-pump.svg)

Zentrifugale Pumpen sind der häufigste Pumpentyp in der Lebensmittelindustrie. Vorteile: Einfachheit, Zuverlässigkeit, kontinuierliche, gleichmäßige Durchflüsse, leichte Regelung.

**Wichtige Bauteile:**
- **Triebkranz** mit 6–8 Schaufeln, gelagert auf einer Welle
- **Spiralschale** (Ohl Haus) — wandelt kinetische Energie in potenzielle Energie um
- **Ansaugschlitz** — Einlass des Fluids
- **Druckseite** — Austritt des Fluids

**Funktionsprinzip:**

Vor dem Start ist der Korpus der Pumpe mit Fluid zu füllen (Selbstübertragung nicht möglich!). Bei der Drehung des Triebkrankzes werfen die Schaufeln das Fluid durch die Zentrifugalkraft nach außen. In der Spiralschale wird das Fluid zu einer höheren Energie umgewandelt. In der Mitte des Tripelkrankzes entsteht ein Unterdruck — das Fluid wird aus dem Anschlussgefäß aufgesaugen. Das Fluid an der Peripherie erreicht hohe Geschwindigkeiten, die in der Spiralschale in Druck umgewandelt werden.

📺 **Video:** [Zentrifugale Pumpe — Funktionsprinzip](https://youtu.be/3iZ99I2n7QQ)

### 2.2 Pumpenkennlinien

**DINischenkennlinien** — Beziehungen $H(Q)$, $N(Q)$, $\eta(Q)$ bei konstanter Drehzahl sind vom Hersteller durch Messungen bestimmt und im Datenblatt angegeben.

Typische Kurvenform:

```
H ↑          η ↑       N ↑
  │╲           │   ╭──╮    │        ╱
  │ ╲          │  ╱    ╲   │      ╱
  │  ╲         │ ╱      ╲  │    ╱
  │   ╲        │╱        ╲ │  ╱
──┼────╲──► Q ─┼──────────╲┼╱──► Q
         Q_max  0   Q_opt         Q
```

- **H(Q)** — Der Hubdruck sinkt mit steigendem Durchfluss (bei Q=0 ist der Maximalhub $H_0$)
- **η(Q)** — Erreicht sein Maximum bei der **optimalen Durchflusstemperatur** $Q_{\text{opt}}$
- **N(Q)** — Leistung steigt mit dem Durchfluss

> 💡 **Wichtige praktische Information:** Eine zentripumpe startet man mit **geschlossener Druckseiteöffnung** — in diesem Moment ist $Q = 0$, $H = H_0$ und die Leistung minimal. Dann öffnet man die Druckseite stetig. Dies schützt den Motor vor Überlastung beim Start.

### 2.3 Rohrkennlinie und Betriebspunkt

![Pumpenkennlinie, Anlagenkennlinie und Betriebspunkt](/images/lectures/hydraulics/pump-system-curve.svg)

**Hydrodynamische Rohrkennlinie** — Beziehung des erforderlichen Hubdrucks zum Durchfluss:

$$H_{\text{Rohr}} = H_{\text{stat}} + A \cdot Q^2$$

wobei:
- $H_{\text{stat}} = z_1 + z_2 + (p_2 - p_1)/(\rho g)$ — **statischer Hubdruck** (unabhängig von Q)
- $A \cdot Q^2$ — Dynamische Verluste (proportional zum Quadrat des Durchflusses)

**Betriebspunkt** — Der Schnittpunkt der Pumpkennlinie $H(Q)$ und der Rohrkennlinie $H_{\text{Rohr}}(Q)$. Genau in diesem Punkt arbeitet die Pumpe bei vollständig geöffneter Druckseite.

> 🌟 **Goldene Regel:** Man sollte eine Pumpe so wählen, dass die Betriebspunkt im **optimalen Wirkungsgradbereich** liegt (70–100% des maximalen Wirkungsgrades). Wenn eine Pumpe dauerhaft außerhalb dieses Bereichs arbeitet — sie verschleißt schnell und verschwendet elektrische Energie.

### 2.4 Berechnung der Leistung und Motorwahl

**Nützliche hindernische Leistung:**

$$N_{\text{hyd}} = \frac{Q \cdot H \cdot \rho \cdot g}{1000}, \quad \text{kW}$$

**Leistung auf der Pumpe:**

$$N_{\text{W}} = \frac{N_{\text{hyd}}}{\eta} = \frac{Q \cdot H \cdot \rho \cdot g}{1000 \cdot \eta}, \quad \text{kW}$$

**Installierte Motorleistung** (mit Sicherheitsfaktor $k = 1{,}1\ldots1{,}3$):

$$N_{\text{Motor}} = k \cdot N_{\text{W}}$$

### 2.5 Vollständiges Regelungsbeispiel

**Aufgabe:** Pumpe für Milch auf einer Milchanlage auswählen.

**Gegeben:**
- Milch: $\rho = 1030$ kg/m³
- Durchfluss: $Q = 5000$ kg/h = $5000/(1030 \cdot 3600) = 1{,}35 \cdot 10^{-3}$ m³/s
- Ansaughöhe $z_1 = 2$ m, Fortschlaghöhe $z_2 = 10$ m
- Druck im Druckanschlussbehälter $p_2 = p_{\text{atm}}$ (offenes Becken)
- Verluste im Anschlussrohr $h_1 = 0{,}5$ m
- Verluste im Druckanschlussrohr $h_2 = 2{,}0$ m

**Lösung:**

**Schritt 1.** Erforderlicher Hubdruck der Pumpe:
$$H = z_1 + z_2 + h_1 + h_2 = 2 + 10 + 0{,}5 + 2{,}0 = 14{,}5 \text{ m}$$

**Schritt 2.** Erforderlicher Durchfluss:
$$Q = 1{,}35 \cdot 10^{-3} \text{ m}^3/\text{s} = 4{,}86 \text{ m}^3/\text{h}$$

**Schritt 3.** Aus dem Katalog wählt man eine Zentrifugalpumpe mit $Q_{\text{Pumpe}} \geq 5$ m³/h, $H_{\text{Pumpe}} \geq 15$ m. Beispielsweise eine **industrielle Lebensmittelzentrifugalpumpe** vom Typ **OLC-5** oder importiert **Alfa Laval LKH**.

**Schritt 4.** Leistung (Wirkungsgrad $\eta = 0{,}70$):
$$N_{\text{W}} = \frac{1{,}35 \cdot 10^{-3} \cdot 14{,}5 \cdot 1030 \cdot 9{,}81}{1000 \cdot 0{,}70} = \frac{198}{700} = 0{,}28 \text{ kW}$$

**Schritt 5.** Motorleistung (Sicherheitsfaktor k = 1,2):
$$N_{\text{Motor}} = 1{,}2 \cdot 0{,}28 = 0{,}34 \text{ kW}$$

Man wählt den nächstgrößeren Standardmotor **0,37 kW**.

### 2.6 Durchflussregelung

**Methode 1 — Drosselung der Druckseite** (Ventil am Druckanschluss):
- Einfach und schnell
- Ineffizient — Teil der Leistung wird durch den Ventilwiderstand verschwendet
- Nur für kurzzeitige Regelung zulässig

**Methode 2 — Frequenzumrichter** (Variable Frequenzsteuerung):
- Moderne und effiziente Methode
- Gleichnisseiche Pumpen: $Q \sim n$, $H \sim n^2$, $N \sim n^3$
- Bei halbierung der Drehzahl — Leistung sinkt um **8-fach**!
- Standard für neue Lebensmittelanlagen

**Methode 3 — Verkleinerung der Tripelgröße:**
- Reduzierung des Schaufeldurchmessers → geringere $H$ und $Q$
- Dauerhafte Einstellung — keine Regelung, sondern Anpassung

> 💡 **Frequenzumrichter** auf Pumpen in der Lebensmittelindustrie sparen 30–50% Strom im Vergleich zur Drosselung. Typische Amortisationszeit 1–2 Jahre.

### 2.7 Serien- und Parallelschlüsse von Pumpen

**Serienschluss** (Druckseite des ersten an Anschluss des zweiten angeschlossen):
- Hubdruke **addiert sich**: $H_{\text{ges}} = H_1 + H_2$
- Durchfluss bleibt gleich: $Q_{\text{ges}} = Q$
- Anwendung: Wenn ein hoher Hubdruck benötigt wird (große Anlage, lange Leitungen)

**Parallelschluss** (Beide Pumpen von einer Quelle zu einem Druckanschlussrohr angeschlossen):
- Durchflüsse **addieren sich**: $Q_{\text{ges}} = Q_1 + Q_2$
- Hubdruck bleibt gleich: $H_{\text{ges}} = H$
- Anwendung: Wenn eine große Durchflussmenge benötigt wird (großes Werk, Notfall)

---

## 3. Kavitation

![Kavitation und NPSH-Reserve](/images/lectures/hydraulics/cavitation-npsh.svg)

### 3.1 Was ist Kavitation?

Wenn der Druck in irgend einem Bereich der Pumpe auf **Dampfdruck des Flüssigkeitsgemeinschafts** bei der gegebenen Temperatur reduziert — beginnt das Fluid zu kochen und entstehen Dampfbällchen. Wenn diese Dampfbällchen in einem Bereich höherer Druck treffen — platzet sie sofort. Dieser Vorgang nennt man **Kavitation**.

Bei der Kollision der Dampfbällchen entstehen lokale **hydraulische Stöße mit Drücken bis 1000 MPa** — sie beschädigen die Schaufel des Tripelkrankzes innerhalb weniger Monate.

**Anzeichen für Kavitation:**
- Typisches Geräusch — Knirschen, Quietschen, als würde die Pumpe Kohle verpumpen
- Vibration der Pumpe
- Plötzlicher Druckabfall und Durchflussminderung
- Erosion (Kavitationseinheiten) auf den Schaufel

📺 **Video:** [Kavitation in Pumpen](https://youtu.be/gUvT4E9d4jM)

### 3.2 Zulässige Soghöhe

Kavitation tritt am häufigsten im Anschlussrohr ein. Die zulässige Soghöhe beträgt:

$$z_{1,\text{max}} = \frac{p_{\text{atm}} - p_{\text{T}}}{{\rho g}} - \Delta h_{\text{vak}} - h_1$$

wobei $p_{\text{T}}$ der Dampfdruck bei der Flüssigkeitstemperatur ist, $\Delta h_{\text{vak}}$ die **Soghöhe nach Herstellerangaben** und $h_1$ die Verluste im Anschlussrohr.

**Dampfdruck für Milch und Wasser:**

| Temperatur | Dampfdruck, kPa |
|---|---|
| 20°C | 2,34 |
| 40°C | 7,38 |
| 60°C | 19,9 |
| 80°C | 47,4 |
| 100°C | 101,3 (atmosphärischer Druck!) |

> ⚠️ **Kritisch für Lebensmittelanlagen!** Nach der Pasteurisierung hat die Milch Temperatur 72–85°C. Bei dieser Temperatur ist der Dampfdruck der Milch deutlich — und Kavitation tritt leichter ein als bei Raumtemperatur. Pumpen für heiße Produkte müssen so niedrig wie möglich am Flüssigkeitsniveau platziert werden.

### 3.3 Vermeidung von Kavitation

1. **Soghöhe reduzieren** — Die Pumpe möglichst niedrig am Flüssigkeitsniveau positionieren oder sogar untertauchen
2. **Durchflossleiter vergrößern** — größerer Durchmesser der Verluste → geringerer Druckverlust → höherer Eintrittsdruck
3. **Innere Verteiler minimieren** am Anschluss — Glatte Leitungen, offene Druckseite, Filter mit großem Querschnitt
4. **Pumpen mit besseren Kavitationseigenschaften wählen** — größerer Kavitationspuffer NPSH
5. **Flüssigkeit vor der Pumpe kühlen** (wenn möglich)

---

## 4. Kolbenpumpen

### 4.1 Funktionsprinzip

Bei Kolbenpumpen bewegt sich der Kolben auf und ab im Zylinder durch eine Kurbeltrieb. Bei Bewegung des Kolbens nach unten schließt sich der Anschluss und das Fluid wird in den Druckanschluss gedrückt. Bei Bewegung nach oben — öffnet sich der Anschluss und das Fluid wird aufgesogen.

**Besondere Eigenschaft:** Unregelmäßiger Durchfluss (pulsierender Durchfluss). Zur Glättung werden **Luftkammern** an Anschluss- und Druckanschlussleitungen eingebaut.

### 4.2 Durchflussleistung der Schieberpumpe

**Einphasenpumpe** (Kolben drückt nur beim Vorlauf):

$$Q = \frac{F \cdot S \cdot n}{60} \cdot \eta_{\text{rot}}$$

wobei $F$ die Kolbenfläche (m²), $S$ der Kolbenhub (m) und $n$ die Drehzahl der Kurbelwelle (U/min) ist.

**Zweiphasenpumpe** (Druck bei beiden Kolbenbewegungen):

$$Q = \frac{(2F - F_{\text{Stoß}})} \cdot S \cdot n}{60} \cdot \eta_{\text{rot}}$$

### 4.3 Besonderheiten und Anwendung

**Vorteile:**
- Sehr **hoher Druck** möglich (bis 50–200 MPa)
- Durchfluss unabhängig vom Druckanschlussdruck
- Selbstübertragung möglich

**Nachteile:**
- Pulsierender Durchfluss
- Komplexere Bauweise (Klappen, Kurbeltrieb)
- Nicht geeignet für Suspensionen und viskose Produkte mit festen Einlagerungen

**Anwendung in der Lebensmittelindustrie:**
- **Homogenisatoren** Milch und Säfte (Druck 10–25 MPa)
- **Dosierungspumpen** — Präzises Dosieren von Aromen, Farbstoffen, Konservierungsmitteln
- **CIP-Anlagen** — Durchfluss von Reinigungslösungen bei hohem Druck

---

## 5. Schneckenpumpen

Schneckenpumpen gehören zu den wichtigsten Pumpenklassen in der Lebensmittelproduktion bei **viskosen und empfindlichen Produkten** ein.

### 5.1 Zahnradpumpen

**Bauweise:** Zwei Zahnräder im Gehäuse mit minimalen Lücken. Bei Drehung wird das Fluid zwischen den Zähnen übertragen von der Öffnung im Anschluss zur Druckanschluss.

**Volumenwirkungsgrad:** 0,70–0,90.

**Durchflussleistung:**
$$Q = \frac{V \cdot n}{60} \cdot \eta_{\text{rot}}$$

wobei $V$ — Volumen des Fluids pro Umdrehung ist.

**Anwendung:**
- Transport von Pflanzenölen, Fetten, Pflanzenmilch
- Druckanschluss von Sirup, Zuckerstücken
- Kreislaufsysteme zur Schmierung

**Nicht geeignet für:** Produkte mit festen Einlagerungen, Suspensionen, kristallisierende Produkte.

### 5.2 Schneckenpumpen

**Bauweise:** Eine oder mehrere Schnecken ( rotor ) drehen sich im Stator. Das Fluid wird entlang der Achse der Pumpe transportiert, ohne Pulsationen.

**Vorteile:**
- **Exakt glatter Durchfluss** (ohne Pulsationen)
- Sanfte Verarbeitung — beschädigt die Struktur des Produkts nicht
- Kann sehr viskose Produkte transportieren

**Anwendung:**
- Transport von Joghurt, Sahne, weichem Käse
- Tomatensauce, Fruchtmus mit Stücken
- Fleischfärme
- Viskose Dressings, Soßen

📺 **Video:** [Schneckenpumpe im Lebensmittelgeschäft](https://youtu.be/5v2X8L4qJqA)

### 5.3 Peristaltikpumpen

**Bauweise:** Eine Schlauchmaschine wird von Rollen oder einem Kolben komprimiert. Das Fluid wird im Schlauch transportiert, ohne mit beweglichen Teilen der Pumpe zu kontaktieren.

**Besondere Vorteile:**
- **Volle hygienische Reinheit** — das Fluid kontaktiert nur den Schlauch
- **Schonende Transport** — zerstört Zellen, Fasern, Stücke nicht — die saniteste Pumptyp
- **Einfache Schlauchersatz** (hygienisch sterilisierte Reserve in 5 Minuten)
- Selbstübertragung
- Transport von empfindlichen Produkten

**Anwendung:**
- Empfindliche Produkte: Fruchtjoghurt mit Beeren, Apfelstange, Fruchtmus
- Dosierung lebender Kulturen (Probiotika, Hefe)
- Ketchup, Senf, Senfsoße mit ganzimen Früchten
- Pharmazeutische Produkte

📺 **Video:** [Peristaltikpumpe im Lebensmittelgeschäft](https://youtu.be/JKf8Q7h2N9A)

---

## 6. Vergleichende Tabelle: Welchen Pumpentyp wählen?

| Produkt | Empfohlener Typ | Warum |
|---|---|---|
| Wasser, Milch, Säfte, Bier | Zentripgal | Hohe Durchflüsse, geringe Viskosität |
| Pflanzenöl, Sahne | Zahnradschraubendreh | Hohe Viskosität, gleichmäßiger Durchfluss |
| Joghurt, Sahne, weicher Käse | Schnecken- oder Peristaltikpumpe | Sanfte Konsistenz, beschädigt Struktur nicht |
| Frucht-Joghurt mit Beeren | Peristaltikpumpe | Beeren sollen nicht zerfallen |
| Schokoladentmasse | Zahnrad- oder Schneckenpumpe | Hohe Viskosität, Temperatur 40–50°C |
| Tomatensauce | Schneckenpumpe oder zentripgal mit großem Schaft | Hohe Viskosität, Suspension |
| Honig | Zahnrad (mit Erwärmung) | Sehr hohe Viskosität |
| Fleischfärme | Schneckenpumpe | Faserige Suspension |
| Milchent homogenisieren | Kolbenpumpe (Druckpumpe) | Druck 10–25 MPa |
| Aromadosierung | Kolbenpumpe Dosierung | Präzise kleine Volumen, hoher Druck |
| Reinigungslösungen CIP | Zentripgal | Hohe Durchflüsse, gleichmäßiger Strom |

---

## 7. Gasstrahlmaschinen

Zur Verdrängung von Gasen und Luft in Lebensmittelanlagen werden eingesetzt:

**Ventilatoren** ($\Delta p < 15$ kPa) — Lufttransport in Trocknungskammern, Lüftungssysteme, Luftstrahlsystem für Mehl und Zucker

**Druckluftquellen** (Kompressoren niedrigen Druckes, $15 < \Delta p < 300$ kPa) — Druckanschluss für Flotationanlagen, Austausch von Hefegährn

**Kompressoren** ($\Delta p > 300$ kPa) — Kompression von CO₂ bei Getränken, für Schutz atmosphäre, komprimierte Luft für pneumatische Werkzeuge

**Vakuumpumpen** — Entgasung in Vakuumverdampfungsanlagen, Vakuumverpackanlagen

---

## Zusammenfassung

**Drei wichtigste Pumpentypen für Lebensmittelanlagen:**

| Typ | Funktionsprinzip | Für was geeignet |
|---|---|---|
| **Zentripgal** | Zentrifugalkraft der Schaufel | Flüssigkeiten mit geringer Viskosität: Wasser, Milch, Säfte, Bier |
| **Schnecken** | Verdrängung durch Schnecken | Viskose und sanfte Produkte: Öl, Joghurt, Sauce |
| **Kolben** | Verdrängung durch Kolbenbewegung | Hoher Druck: Homogenisierung, Dosierung |

**Leistungsformel:**
$$N_{\text{W}} = \frac{Q \cdot H \cdot \rho \cdot g}{1000 \cdot \eta}, \quad \text{kW}$$

**Betriebspunkt** — Der Schnittpunkt der Pumpkennlinie $H(Q)$ und der Rohrkennlinie $H_{\text{Rohr}}(Q)$.

**Kavitation** — Verdampfung der Flüssigkeit bei niedrigem Druck am Einlass → Schädigung der Laufradschaufeln. Vermeidung: Saughöhe minimieren, Saugleitung vergrößern, Pumpen mit besseren Kavitationseigenschaften wählen.

**Regelung:** Frequenzumrichter — effizienteste Methode.

---

## Selbstkontrollfragen

1. Eine Pumpe transportiert Apfelsaft ($\rho = 1055$ kg/m³) mit einem Durchfluss $Q = 10$ m³/h und einem Hubdruck $H = 20$ m. Der Wirkungsgrad der Pumpe $\eta = 0{,}72$. Berechnen Sie die Leistung auf der Pumpe (kW) und wählen Sie einen Motor (Sicherheitsfaktor 1,25).

2. Warum startet man eine Zentrifugalpumpe mit geschlossener Druckseiteöffnung, aber eine Kolbenpumpe mit geöffneter? Was passiert, wenn man das umkehrt?

3. Milch nach Pasteurisierung hat die Temperatur 72°C. Der Dampfdruck bei dieser Temperatur $p_{\text{T}} = 33$ kPa. Atmosphärischer Druck 101 kPa, zulässige Soghöhe laut Datenblatt 4 m, Verluste im Anschlussrohr 0,5 m. Berechnen Sie die zulässige Soghöhe. Kann die Pumpe 2 m über dem Flüssigkeitsniveau platziert werden?

4. Auf einer Anlage sind zwei identische Zentrifugalpumpen installiert ($Q_{\text{Pumpe}} = 15$ m³/h, $H_{\text{Pumpe}} = 25$ m pro Stück). Wie ändern sich $Q$ und $H$ beim Parallel- und Serienschluss?

5. Für welches Produkt hätten Sie eine Peristaltikpumpe statt einer Zentrifugalpumpe gewählt? Nennen Sie 3 Produkte.

---

## Nützliche Ressourcen

### Pumpenkataloge für Lebensmittelanlagen
- 🔗 [Alfa Laval LKH pumps](https://www.alfalaval.com/products/fluid-handling/pumps) — Hygienische Zentrifugalpumpen
- 🔗 [Alfa Laval SRU Schneckenpumpen](https://www.alfalaval.com) — Schneckenpumpen für viskose Produkte
- 🔗 [Watson-Marlow Peristaltikpumpen](https://www.watson-marlow.com) — Peristaltikpumpen für Lebensmittelindustrie
- 🔗 [Grundfos food industry pumps](https://www.grundfos.com/industries/food-and-beverage) — Breites Sortiment

### Online-Berechnungen
- 🔗 [Pump power calculator](https://www.omnicalculator.com/physics/pump-power) — online Berechnung der Pumpenleistung
- 🔗 [NPSH calculator](https://www.engineeringtoolbox.com/npsh-net-positive-suction-head-d_634.html) — Berechnung des Kavitationspuffers

### Videos
- 📺 [How centrifugal pump works — Lesics](https://www.alfalaval.us/products/fluid-handling/pumps/centrifugal-pumps/lkh/)
- 📺 [Pump selection guide for food industry](https://www.gea.com/en/products/pumps-valves-flow-components/centrifugal-hygienic-pumps/?i=food)
- 📺 [Variable frequency drive on pumps — energy savings](https://www.engineeringtoolbox.com/pumps-power-d_505.html)

### Normen
- 🔗 [EHEDG guidelines for hygienic pump design](https://www.ehedg.org) — Europäische Standards für hygienische Pumpen
- 🔗 [3-A Sanitary Standards for pumps](https://www.3-a.org) — Amerikanische Standards für Lebensmittelpumpen

---

## Nächste Vorlesung

**Vorlesung 6 → Trennung nicht einheitlicher Systeme: Sedimentation und Filtration**

Suspensionen, Emulsionen und Schaum in der Lebensmittelindustrie. Berechnung von Absetzbecken, Stokes-Gesetz, Archimedes-Kriterium. Filtration unter Druck und Vakuum — Konstruktionen und Berechnungen.
