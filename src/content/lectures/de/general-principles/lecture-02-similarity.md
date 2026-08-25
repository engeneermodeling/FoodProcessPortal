---
title: "Methoden der Ähnlichkeit und Ähnlichkeitskriterien"
topic: "general-principles"
topic_title: "Allgemeine Grundlagen"
lecture: 2
slug: "lecture-02-similarity"
locale: "de"
description: "Drei Theoreme der Ähnlichkeit, Reynolds-, Nusselt- und Prandtl-Zahlen sowie weitere Kriterien. Übertragung von Laborergebnissen auf industrielle Anlagen."
keywords: ["Ähnlichkeitskriterien", "Reynolds-Zahl", "Nusselt-Zahl", "Skalierung", "Modellierung", "Lebensmittelverarbeitung"]
duration: "50 min"
difficulty: "grundlegend"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Vorlesung 2. Methoden der Ähnlichkeit und Ähnlichkeitskriterien

## Was Sie lernen werden

Nach dieser Vorlesung können Sie:

- die **drei Theoreme der Ähnlichkeit** und ihre praktische Bedeutung erklären
- die **Reynolds-Zahl** für Milch, Saft oder andere Lebensmittel-Flüssigkeitsströme berechnen
- **dimensionslose Kriteriengleichungen** der Form $Nu = C \cdot Re^m \cdot Pr^n$ lesen und erstellen
- erklären, warum das Kochen in einem kleinen Topf und in einer großen Kessel andere Ergebnisse liefert
- die drei Stufen der Skalierung: Labor → Pilot → Produktion beschreiben

---

## 1. Das Skalierungsproblem

Stellen Sie sich vor: Sie haben einen hervorragenden Cremesauce im Labor entwickelt. Geschmack, Konsistenz, Farbe — perfekt. Jetzt müssen Sie ihn auf Produktionsgröße (2000-Liter-Kessel statt 2-Liter-Laborschale) bringen. Skalierung — 1000-mal größer.

Das Ergebnis? Die Sauce fällt anders aus. Sie brennt an. Oder dickt nicht ein. Oder trennt sich.

**Warum passiert das?**

Bei Vergrößerung der Anlage:
- das Verhältnis der **Oberfläche zum Volumen** **sinkt** (weniger Wärme durch Wände pro Volumeneinheit)
- **hydrodynamische Bedingungen** **ändern sich** (Fließverhalten in einem großen Kessel ist anders)
- die **Mischzeit** **vergrößert sich** (Konzentrationsgradienten wachsen)

> **Kernidee:** Man kann keine Anlage einfach um 1000-mal "hochskalieren" — man muss wissen, welche Parameter unverändert bleiben müssen. Die Antwort liefert die **Theorie der Ähnlichkeit**.

Deshalb erfolgt die Produktion in **drei Stufen**:

```
Labor (1–5 L) → Pilotanlage (50–500 L) → Produktion (1000–50000 L)
      ↓                          ↓                                 ↓
  Forschung                 Skalierungsverifizierung         Produktionsimplementierung
  Kriterien                 Parameterauswahl                  Optimierung
```

![Scale-up-Schema: Labor, Pilotanlage, industrielle Produktion](/images/lectures/general-principles/scale-up-similarity.svg)

🔗 **Fallbeispiel:** [GEA Application and Technology Center](https://www.gea.com/en/products/bioreactor-fermentation-systems/new-food-application-technology-center-excellence/) — ein Beispiel für Pilot-Infrastruktur, in der Lebensmittel- und Biotechnologieprozesse vor dem industriellen Scale-up geprüft werden.

---

## 2. Das Konzept der Ähnlichkeit

### Geometrische Ähnlichkeit

Zwei Anlagen sind **geometrisch ähnlich**, wenn alle ihre linearen Abmessungen in einem konstanten Verhältnis stehen:

$$\frac{L}{l} = \alpha_l = \text{konst}$$

wobei $L$ die Größe der industriellen Anlage, $l$ die Größe des Modells (Labor Einheit) ist.

**Beispiel:** Ein zylindrischer Reaktor zur Fermentation. Wenn die industrielle Anlage Durchmesser $D = 2{,}0$ m hat und das Labor $d = 0{,}2$ m — Skalierungsfaktor $\alpha_l = 10$. Geometrische Ähnlichkeit erfordert, dass Höhe, Mischerposition, Rohrdurchmesser ebenfalls um 10-mal größer sind.

### Kinematische Ähnlichkeit

Systeme sind **kinematisch ähnlich**, wenn die Geschwindigkeiten an entsprechenden Punkten in einem konstanten Verhältnis stehen:

$$\frac{V}{v} = \alpha_V = \text{konst}$$

### Dynamische Ähnlichkeit

Systeme sind **dynamisch ähnlich**, wenn die Kräfte an entsprechenden Punkten in einem konstanten Verhältnis stehen:

$$\frac{K}{k} = \alpha_K = \text{konst}$$

Die **dynamische Ähnlichkeit ist die wichtigste** für technische Berechnungen. Sie wird durch **Ähnlichkeitskriterien** beschrieben.

> **Ingenieurhinweis:** geometrische Ähnlichkeit lässt sich leicht zeichnen, aber in der Lebensmittelverarbeitung ist meist die dynamische Ähnlichkeit kritisch. Die Viskosität von Sauce, Püree oder Schokoladenmasse kann $Re$ so stark verändern, dass sich die große Anlage nicht wie ein vergrößertes Laborgefäß verhält, sondern wie ein anderes System.

---

## 3. Drei Theoreme der Ähnlichkeit

### Erstes Theorem (Newton)

> **Ähnliche Phänomene haben numerisch gleiche Ähnlichkeitskriterien.**

**Praktische Bedeutung:** Wenn man ein Kriterium im Labor misst — diese gleichen Werte der Kriterien beschreiben die industrielle Anlage, vorausgesetzt, sie sind ähnlich.

**Folgerung:** Bei einem Experiment genau jene Mengen messen, die in die Ähnlichkeitskriterien eingehen.

---

### Zweites Theorem (Buckingham Π-Theorem)

> **Jede Beziehung zwischen physikalischen Größen kann in Form einer Beziehung zwischen dimensionslosen Ähnlichkeitskriterien dargestellt werden.**

Formal: Wenn ein Phänomen durch $n$ physikalische Größen und $k$ Grundgrößen (Länge, Masse, Zeit, Temperatur...) beschrieben wird, dann:

$$i = n - k$$

wobei $i$ die Anzahl unabhängiger Ähnlichkeitskriterien ist.

**Beispiel — Wärmeaustausch durch Zwangsströmung:**

Prozess hängt ab von: $\alpha$ (Wärmeübertragungskoeffizient), $l$ (Größe), $v$ (Geschwindigkeit), $\rho$ (Dichte), $\mu$ (Viskosität), $c_p$ (spezifische Wärmekapazität), $\lambda$ (Wärmeleitfähigkeit) → $n = 7$ Größen, $k = 4$ Grundgrößen.

Anzahl der Kriterien: $i = 7 - 4 = 3$

Diese drei Kriterien sind **Nu, Re, Pr** — sie entsprechen der Kriteriengleichung $Nu = C \cdot Re^m \cdot Pr^n$.

**Folgerung:** Das zweite Theorem sagt, **wie man Daten verarbeitet** — nicht als Diagramm $\alpha$ vs $v$, sondern als $Nu$ vs $Re$.

---

### Drittes Theorem (Kirchhoff-Guha)

> **Ähnliche Systeme mit eindeutig bestimmten Bedingungen, deren Kriterien aus Bedingungen der Eindeutigkeit zusammengesetzt sind, sind numerisch gleich und damit ähnlich.**

**Bedingungen der Eindeutigkeit** sind alles, was ein spezifisches Phänomen von anderen Phänomenen desselben Typs unterscheidet:
- **geometrische Abmessungen** der Anlage
- **physikalische Konstanten** der Fluide (Viskosität, Wärmeleitfähigkeit...)
- **anfängliche Bedingungen** (Temperatur, Geschwindigkeit auf dem Eintritt)
- **Grenzbedingungen** (Oberflächentemperatur, Druck)

**Folgerung:** Das dritte Theorem beantwortet **wie man ein Modell baut** — es liefert die Bedingungen, unter denen Modell und industrielle Anlage ähnlich sind.

---

## 4. Wichtigste Ähnlichkeitskriterien

![Karte dimensionsloser Ähnlichkeitskriterien nach physikalischer Bedeutung](/images/lectures/general-principles/dimensionless-groups-map.svg)

### 4.1 Reynolds-Kriterium — Fließregime der Flüssigkeit

$$Re = \frac{l \cdot v \cdot \rho}{\mu} = \frac{l \cdot v}{\nu}$$

wobei:
- $l$ — charakteristische lineare Abmessung (Rohrdurchmesser, Schaufeldurchmesser), m
- $v$ — Flüssigkeitsgeschwindigkeit, m/s
- $\rho$ — Dichte, kg/m³
- $\mu$ — dynamische Viskosität, Pa·s
- $\nu = \mu/\rho$ — kinematische Viskosität, m²/s

**Physikalische Bedeutung:** $Re$ ist das Verhältnis der Trägheitskräfte zu den viskosen Kräften.

| $Re$ | Fließregime | Fließcharakteristik |
|---|---|---|
| $Re < 2100$ | **Laminar** | Flüssigkeitsschichten rutschen parallel, geringe Vermischung |
| $2100 < Re < 10000$ | **Übergang** | Instabil, unregelmäßiges Regime |
| $Re > 10000$ | **Turbulent** | Chaotische Vermischung, intensive Wärme- und Massentransport |

### Reynolds-Zahl Beispiele in der Lebensmittelindustrie

**Milch in Pa·steurisator-Röhren:**

Gegeben: Rohrdurchmesser $d = 0{,}05$ m, Milchgeschwindigkeit $v = 0{,}4$ m/s, Milchviskosität bei 20°C $\mu = 2{,}1 \cdot 10^{-3}$ Pa·s, $\rho = 1030$ kg/m³.

$$Re = \frac{0{,}05 \cdot 0{,}4 \cdot 1030}{2{,}1 \cdot 10^{-3}} = \frac{25{,}75}{0{,}0021} \approx 12250$$

**Folgerung:** Turbulentes Regime → effiziente Pa·steurisierung, guter Wärmeübertrag.

**Tomatensauce in Röhre:**

Tomatensauce ist eine nicht-newtonsche Flüssigkeit mit effektiver Viskosität $\mu_{eff} = 0{,}5$ Pa·s, $\rho = 1080$ kg/m³, $d = 0{,}08$ m, $v = 0{,}3$ m/s.

$$Re = \frac{0{,}08 \cdot 0{,}3 \cdot 1080}{0{,}5} \approx 52$$

**Folgerung:** Tiefes laminäres Regime → schlechte Vermischung, mögliche Verbrennungen in Stillstandszone!

> 💡 **Praktische Folgerung:** Viskose Lebensmittelprodukte (Soßen, Pürees, Schokolade) erschweren es, turbulentes Regime zu erreichen. Daher verwendet man Schabewärmetauscher, bei denen Schaber mechanisch die Randschicht entfernen — der Ersatz für turbulentes Vermischen.

🔗 **Praxisbeitrag:** [Tetra Pak: viscous products and heat transfer](https://www.tetrapak.com/en-us/insights/cases-articles/viscous-products-and-heat-transfer) — warum Ketchup, Joghurt, Babynahrung oder Hummus nicht mit nur "einem" Viskositätswert ausgelegt werden sollten.

---

### 4.2 Nusselt-Kriterium — Intensität des Wärmeaustauschs

$$Nu = \frac{\alpha \cdot l}{\lambda}$$

wobei:
- $\alpha$ — Wärmeübertragungskoeffizient, W/(m²·K)
- $l$ — charakteristische Größe, m
- $\lambda$ — Wärmeleitfähigkeit der Flüssigkeit, W/(m·K)

**Physikalische Bedeutung:** $Nu$ ist das Verhältnis des konvektiven Wärmeaustauschs zum leitiven Wärmeaustausch. Höherer $Nu$ → effizienterer Wärmeaustausch.

Aus der Kriteriengleichung kann man den **Wärmeübertragungskoeffizienten** $\alpha$ bestimmen:

$$\alpha = \frac{Nu \cdot \lambda}{l}$$

---

### 4.3 Prandtl-Kriterium — Wärmeträger-Eigenschaften

$$Pr = \frac{c_p \cdot \mu}{\lambda}$$

wobei $c_p$ die spezifische Wärmekapazität ist, J/(kg·K).

**Physikalische Bedeutung:** $Pr$ ist das Verhältnis der Impulsübertragung zu der Wärmeausbildung. Es hängt nur von den **Flüssigkeitseigenschaften** ab, nicht von den Strömungsbedingungen.

| Substanz | $Pr$ bei 20°C |
|---|---|
| Luft | 0,71 |
| Wasser | 7,0 |
| Milch | ~10–12 |
| Sonnenblumenöl | ~400–900 |
| Honig | ~10 000–100 000 |
| Flüssige Metalle | 0,001–0,03 |

> 💡 **Warum erhitzen Öle schlecht?** Die Prandtl-Zahl von Öl ist 50–100-mal höher als Wasser. Das bedeutet, die Wärmeleitfähigkeit des Öls ist im Verhältnis zu seiner Wärmekapazität viel niedriger — Wärme "driftet" schlethind in das Schuttvolumen. Deshalb erfordern Fritteurtöpfe starke Heizungen und ständiges Rühren.

---

### 4.4 Péclet-Kriterium

$$Pe = Re \cdot Pr = \frac{l \cdot v}{a}$$

wobei $a = \lambda / (\rho \cdot c_p)$ die thermische Diffusibilität in m²/s ist.

**Physikalische Bedeutung:** Verhältnis der Wärmeübertragung durch Konvektion zu der Wärmeübertragung durch Wärmeleitung.

---

### 4.5 Nusselt-Kriterium für Massentransfer

$$Nu_{\text{mass}} = \frac{\beta \cdot l}{D}$$

wobei $\beta$ der Massentransferkoeffizient in m/s ist und $D$ die diffusiven Konstante in m²/s ist.

Dies ist eine **vollständige Analogie** zum thermischen $Nu$ — statt des Wärmeübertragungskoeffizienten haben wir den Massentransferkoeffizienten, statt der Wärmeleitfähigkeit — die Diffusion. Dies ist das "dreiteilige Analogie" aus Vorlesung 1 erwähnt.

---

### Zusammenfassung der Kriterien

| Kriterium | Formel | Physikalische Bedeutung | Anwendung |
|---|---|---|---|
| **Newton** $Ne$ | $K / (\rho l^2 v^2)$ | Allgemeine mechanische Ähnlichkeit | Alle mechanischen Systeme |
| **Reynolds** $Re$ | $l v \rho / \mu$ | Fließregime der Flüssigkeit | Hydrauliks, Pumpen, Rohre |
| **Froude** $Fr$ | $v^2 / (gl)$ | Schwerkraftkräfte | Offene Kanäle, Mischer |
| **Euler** $Eu$ | $\Delta p / (\rho v^2)$ | Druckkräfte | Hydraulische Widerstände |
| **Archimedes** $Ar$ | $g l^3 \rho \Delta\rho / \mu^2$ | Viskositätskräfte + Auftrieb | Teilchenveredelung, Schöpfung |
| **Nusselt** $Nu$ | $\alpha l / \lambda$ | Wärmeaustausch-Intensität | Wärmeaustausch |
| **Prandtl** $Pr$ | $c_p \mu / \lambda$ | Wärmeträger-Eigenschaften | Wärmeaustausch |
| **Péclet** $Pe$ | $l v / a$ | Konvektion vs. Leitung | Wärmeaustausch |

---

## 5. Kriteriengleichung und die Methode der Dimensionsanalyse

Die wichtigste praktische Form der Ähnlichkeitstheorie ist die **Kriteriengleichung**:

$$Nu = C \cdot Re^m \cdot Pr^n$$

Die Konstanten $C$, $m$, $n$ werden **experimentell** an Labor- oder Pilotanlagen bestimmt. Dann wird diese Gleichung für die Berechnung industrieller Anlagen verwendet.

### So erhält man eine Kriteriengleichung: Die Methode der Dimensionsanalyse

**Schritt 1.** Identifizieren Sie, welche physikalischen Größen den Prozess beeinflussen.

Bei konvektivem Wärmeaustausch: $\alpha$, $l$, $v$, $\rho$, $\mu$, $c_p$, $\lambda$.

**Schritt 2.** Dimensionen durch Grundgrößen (Länge L, Masse M, Zeit T, Temperatur θ) darstellen.

**Schritt 3.** Potenzen auf beiden Seiten der dimensionslosen Gleichung gleichsetzen.

**Schritt 4.** Einen Satz von Unbekannten durch einen anderen ausdrücken — Ähnlichkeitskriterien erhalten.

Das Ergebnis ist stets in der Form:
$$Nu = C \cdot Re^m \cdot Pr^n \cdot Gr^p \cdot \ldots$$

wobei $Gr$ das Grashof-Kriterium (für natürliche Konvektion) ist.

---

## 6. Praktisches Beispiel: Pa·steurisator-Berechnung

### Problem

Berechnen Sie den Wärmeübertragungskoeffizienten zwischen heißem Wasser und Milch in einem Plattenpasteurisator.

**Gegeben:**
- Milch: Temperatur 20→72°C, Geschwindigkeit $v = 0{,}4$ m/s, charakteristische Kanalbreite $l = 0{,}004$ m
- Milcheigenschaften bei mittlerer Temperatur 46°C: $\rho = 1025$ kg/m³, $\mu = 1{,}4 \cdot 10^{-3}$ Pa·s, $\lambda = 0{,}55$ W/(m·K), $c_p = 3950$ J/(kg·K)

### Lösung:

**Schritt 1.** Berechnen Sie $Re$:
$$Re = \frac{l \cdot v \cdot \rho}{\mu} = \frac{0{,}004 \cdot 0{,}4 \cdot 1030}{1{,}4 \cdot 10^{-3}} \approx 1171$$

Laminiere Regime ($Re < 2100$) — aber in Plattenpasteurisatoren sind die Kanäle profiliert, was auch bei $Re > 200$ die Strömung künstlich turbulentisiert.

**Schritt 2.** Berechnen Sie $Pr$:
$$Pr = \frac{c_p \cdot \mu}{\lambda} = \frac{3950 \cdot 1{,}4 \cdot 10^{-3}}{0{,}55} \approx 10{,}05$$

**Schritt 3.** Kriteriengleichung für Plattenwärmetauscher:
$$Nu = 0{,}4 \cdot Re^{0{,}6} \cdot Pr^{0{,}36}$$

$$Nu = 0{,}4 \cdot 1171^{0{,}6} \cdot 10{,}05^{0{,}36}$$

$$Nu = 0{,}4 \cdot 67{,}2 \cdot 2{,}18 \approx 58{,}6$$

**Schritt 4.** Finden Sie den Wärmeübertragungskoeffizienten:
$$\alpha = \frac{Nu \cdot \lambda}{l} = \frac{58{,}6 \cdot 0{,}55}{0{,}004} \approx 8060 \text{ W/(m²·K)}$$

> **Folgerung:** $\alpha \approx 8060$ W/(m²·K) — sehr hoher Wärmeübertragungskoeffizient, typisch für Plattenpasteurisatoren. Deshalb sind sie kompakt — deutlich geringere Oberfläche benötigt als bei Schalenwärmetauschern.

---

## 7. Modellierung: Physische und Mathematische

### Physische Modellierung

Bauen Sie ein reduziertes Modell (Kopie) der industriellen Anlage und führen Sie Tests daran durch. übertragen Sie die Ergebnisse auf die industrielle Anlage unter der Bedingung gleicher Ähnlichkeitskriterien.

**Ähnlichkeitsbedingung:** $Re_{\text{Modell}} = Re_{\text{Probe}}$

Wenn das Modell um einen Faktor 10 kleiner ist ($l_{\text{Modell}} = 0{,}1 \cdot l_{\text{Anlage}}$), dann muss die Geschwindigkeit um 10-mal erhöht oder die Flüssigkeit durch eine andere ersetzt werden, um Re zu erhalten.

**Beispiel:** Bei der Entwicklung eines großen Trenners für Milch (D = 0,8 m) wird ein Modell (D = 0,2 m) gebaut und getestet. Statt Milch wird jedoch Wasser mit dem entsprechenden Re verwendet.

### Mathematische Modellierung

Setzen Sie ein System von Gleichungen (Differentialgleichungen für Transport) auf, das den Prozess beschreibt. Lösen Sie sie numerisch auf einem Computer — ohne physische Erstellung der Anlage.

Moderne Methode — **CFD (Computational Fluid Dynamics)** — Computermodellierung der Hydrodynamik und Wärme-/Massentransport.

🔗 **Werkzeug:** [OpenFOAM](https://www.openfoam.com) — kostenlose CFD-Software zur Strömungsmodellierung. Wird für Lebensmittelanlagenver messung verwendet.

🔗 **CFD-Beispiel:** [Tetra Pak: optimize mixing process and food quality using CFD](https://www.tetrapak.com/en-in/insights/cases-articles/optimize-mixing-process-food-quality-cfd) — wie Simulation bei der Auswahl von Mischern für viskose Produkte wie Tomatenpaste, Frischkäse oder Hummus hilft.

---

## 8. Skalierung in der Lebensmittelindustrie

### Warum Reichen Ähnlichkeitskriterien Manchmal Nicht Aus?

Selbst wenn $Re_{\text{Modell}} = Re_{\text{Probe}}$ erfüllt ist, können Probleme auftreten aufgrund:

- **Verweilzeit**: In großen Anlagen ist die Mischzeit länger → mögliche thermische Zerstörung von Vitaminen, Enzyme
- **Schwerkraft**: Gasbläschen und Partikel setzen sich unterschiedlich in großen vs. kleinen Anlagen ab
- **Thermische Effekte**: Oberfläche-zu-Volumen-Verhältnis sinkt → schlechtere Kühlung in großen Fermentern

### Praktische Skalierungsregeln

| Prozess | Was bleibt konstant |
|---|---|
| Flüssigmischen | $Re_{\text{Mischer}}$ oder spezifische Leistung W/m³ |
| Wärmepasteurisation | $Nu$ und $Re$ in Kanälen |
| Sprühtrocknung | Tropfengröße und $Re_{\text{Luft}}$ |
| Filtration | Druckunterschied $\Delta p$ und Schlammdicke |
| Destillation | Anzahl der theoretischen Stufen, $Re$ in Kolonne |

🔗 **Beispiel moderner Infrastruktur:** [Alfa Laval Food Innovation Center](https://www.alfalaval.us/media/news/2026/a-groundbreaking-facility/) — ein Zentrum, in dem Hersteller, Start-ups und Universitäten Lebensmittelprozesse vor dem Großmaßstab testen können.

---

## Zusammenfassung

**Drei Theoreme der Ähnlichkeit:**

| Theorem | Autor | Inhalt | Beantwortet |
|---|---|---|---|
| **Erstes** | Newton | Ähnliche Phänomene haben gleiche Kriterien | Was zu messen ist? |
| **Zweites** | Buckingham | Beziehungen → Kriteriengleichungen | Wie Daten verarbeiten? |
| **Drittes** | Kirchhoff-Guha | Bedingungen für Modellbau | Wie Modell bauen? |

**Wichtigste Kriterien für Lebensmittelindustrie:**

$$Re = \frac{lv\rho}{\mu} \quad Nu = \frac{\alpha l}{\lambda} \quad Pr = \frac{c_p \mu}{\lambda}$$

**Kriteriengleichung für Wärmeaustausch:**

$$Nu = C \cdot Re^m \cdot Pr^n$$

wobei $C$, $m$, $n$ **experimentell** für jeden **Anlagentyp** bestimmt werden müssen.

---

## Selbstkontrollfragen

1. Milch ($\rho = 1030$ kg/m³, $\mu = 2{,}0 \cdot 10^{-3}$ Pa·s) fließt durch eine Rohr mit Durchmesser 40 mm mit Geschwindigkeit 0,8 m/s. Bestimmen Sie das Fließregime.

2. Was ist die Prandtl-Zahl für Pflanzenöl ($c_p = 1970$ J/(kg·K), $\mu = 0{,}05$ Pa·s, $\lambda = 0{,}17$ W/(m·K))? Vergleichen Sie mit Wasser ($Pr = 7$). Was bedeutet das für die Wärmeaustauschintensität?

3. Erklären Sie, warum bei Tomatensauce ($Re \approx 50$) in einem Schalenwärmetauscher besser ein Aufstrichwärmetauscher verwendet wird, nicht ein Plattenwärmetauscher.

4. Es gibt einen Labor-Mischer (Durchmesser $d = 0{,}05$ m, $n = 300$ U/min, Flüssigkeit — Wasser). Wie muss die Drehzahl bei Vergrößerung um Faktor 5 (D = 0,25 m) gewählt werden, um Re zu erhalten?

5. Gegeben: Kriteriengleichung für Schalenpasteurisator: $Nu = 0{,}023 \cdot Re^{0{,}8} \cdot Pr^{0{,}4}$. $Re = 15 000$, $Pr = 10$, $l = 0{,}025$ m, $\lambda = 0{,}55$ W/(m·K). Bestimmen Sie den Wärmeübertragungskoeffizienten $\alpha$.

---

## Nützliche Ressourcen

### Online-Rechner
- 🔗 [Reynolds Number Calculator](https://www.engineeringtoolbox.com/reynolds-number-d_237.html) — Erklärung der Strömungsregime und Online-Berechnung von Re
- 🔗 [Heat Transfer Correlations](https://www.thermexcel.com/english/tables/vap_eau.htm) — Kriteriengleichungstabellen

### Lehrbücher
- 🔗 [McCabe, Smith, Harriott — Unit Operations of Chemical Engineering](https://www.mheducation.com) — Klassisches Lehrbuch zu Ähnlichkeitkriterien
- 🔗 [Geankoplis — Transport Processes](https://www.pearson.com) — Detaillierte Behandlung aller Kriterien

### Praxismaterialien
- 🔗 [Tetra Pak: CFD for food mixing](https://www.tetrapak.com/en-in/insights/cases-articles/optimize-mixing-process-food-quality-cfd) — ein Beispiel für CFD-Einsatz bei Lebensmittelmischern
- 🔗 [GEA New Food Application & Technology Center](https://www.gea.com/en/unitedstates/protein-food-beverage-pilot-testing-development-wi/) — ein Beispiel für ein Pilotzentrum zum Scale-up von Lebensmittelprozessen

### Wissenschaftliche Artikel
- 🔗 [Journal of Food Engineering](https://www.sciencedirect.com/journal/journal-of-food-engineering)
- 🔗 [Food and Bioproducts Processing](https://www.sciencedirect.com/journal/food-and-bioproducts-processing)

---

## Nächste Vorlesung

**Vorlesung 3 → Grundlegende physikalische Eigenschaften Lebensmittelsubstanzen**

Dichte, Viskosität, Wärmekapazität und Wärmeleitfähigkeit von Milch, Säften, Zuckerlösungen, Ölen — und wie man sie für Berechnungen findet und verwendet.
