---
title: "Kapitel 1. Allgemeine Angaben"
course: "bioprocess-engineering"
course_title: "Bioverfahrenstechnik: Prozesse und Apparate biotechnologischer Produktionen"
chapter: 1
description: "Grundgesetze technologischer Prozesse, Aehnlichkeitsmethode und physikalische Stoffeigenschaften."
updated: "2026-08-23"
---

## Kapitelüberblick

Dieses Kapitel stellt die zentralen Begriffe, Gleichungen und Apparatebeispiele zum Thema vor.

## Struktur des Kapitels

- 1.1. Grundgesetze technologischer Prozesse
- 1.2. Aehnlichkeitsmethode und ihre Rolle beim Studium von Prozessen und Apparaten biotechnologischer Produktionen
- 1.3. Grundlegende physikalische Stoffeigenschaften
- 1.4. Grundlegende physikalisch-technische Stoffeigenschaften

## Vorlesungsskript

Dies ist eine redigierte Vorlesungsfassung der Kursseiten 21-43. Text, Gleichungen, Tabelle und Abbildungen sind als bearbeitbare Blöcke getrennt, damit das Kapitel nicht als Seitenscan, sondern als mehrsprachiges Lernmaterial funktioniert.

### Teil 1. Allgemeine Prozesse

### Kapitel 1. Allgemeine Angaben

### 1.1. Grundgesetze technologischer Prozesse

#### Erhaltung von Masse und Energie

Technologische Prozesse biotechnologischer Produktionen verlaufen nach allgemeinen physikalischen und physikalisch-chemischen Gesetzen. Ihre Anwendung auf einen konkreten Prozess ermöglicht die Theorie des Prozesses und die Auslegung der Apparate.

Die allgemeinsten Naturgesetze besagen, dass in Natur und Technik nur solche Umwandlungen stattfinden, bei denen Gesamtmasse und Gesamtenergie eines Systems unverändert bleiben. In der Verfahrenstechnik werden diese Gesetze als Stoff- und Wärmebilanzen formuliert.

![Schema der Stoffbilanz](/images/courses/bioprocess-engineering/chapter-01/fig-1-1.webp)
*Abb. 1.1. Schema der Stoffbilanz.*

Für einen beliebigen Apparat kann die Stoffbilanz geschrieben werden als:

<div class="equation-block">
  <span class="equation-main">P<sub>A</sub> + P<sub>B</sub> + P<sub>C</sub> + P<sub>D</sub> = P<sub>E</sub> + P<sub>F</sub> + P<sub>G</sub></span>
  <span class="equation-number">(1.1)</span>
</div>

Dabei sind A, B, C, D, E, F, G die in den Apparat eintretenden und austretenden Komponenten; P<sub>i</sub> sind die entsprechenden Massen.

![Schema der Wärmebilanz](/images/courses/bioprocess-engineering/chapter-01/fig-1-2.webp)
*Abb. 1.2. Schema der Wärmebilanz.*

Analog kann die Wärmebilanz der eintretenden und austretenden Wärmeströme dargestellt werden:

<div class="equation-block">
  <span class="equation-main">Q<sub>A</sub> + Q<sub>B</sub> + Q<sub>C</sub> + Q<sub>D</sub> + Q<sub>int</sub> + Q<sub>ext</sub> =<br />Q<sub>E</sub> + Q<sub>F</sub> + Q<sub>G</sub> + Q<sub>loss</sub> + …</span>
  <span class="equation-number">(1.2)</span>
</div>

Q<sub>int</sub> ist die im Apparat frei werdende Wärme, Q<sub>ext</sub> die von außen zugeführte Wärme und Q<sub>loss</sub> der Wärmeverlust an die Umgebung.

![Sankey-Diagramm](/images/courses/bioprocess-engineering/chapter-01/fig-1-3.webp)
*Abb. 1.3. Sankey-Diagramm.*

#### Übertragungsgesetze

In vielen technologischen Operationen spielen Übertragungsvorgänge die Hauptrolle: Massenbewegung in hydrodynamischen Prozessen, Wärmeenergie in thermischen Prozessen und Stoffübergang zwischen Phasen in Diffusionsprozessen.

Für Wärmeübertragung:

<div class="equation-block">
  <span class="equation-main">dQ/dτ = K Δt = (1/R) Δt, kJ/(m²·s)</span>
  <span class="equation-number">(1.3)</span>
</div>

Für Diffusions- und Stoffübertragungsprozesse:

<div class="equation-block">
  <span class="equation-main">dM/dτ = K&#x27; ΔC = (1/R&#x27;) ΔC, kg/(m²·s)</span>
  <span class="equation-number">(1.4)</span>
</div>

Für hydrodynamische Prozesse, z. B. Filtration:

<div class="equation-block">
  <span class="equation-main">dW/dτ = (1/R<sub>h</sub>) Δp = C<sub>h</sub> Δp, m³/(m²·s)</span>
  <span class="equation-number">(1.5)</span>
</div>

Der Vergleich dieser Gleichungen zeigt die dreifache Analogie. Allgemein gilt:

<div class="equation-block">
  <span class="equation-main">I = L x,</span>
</div>

I ist die Prozessgeschwindigkeit, L die Durchlässigkeit und x die Triebkraft.

#### Gleichgewichtsgesetze und Optimierung

Ein System ist eine Gesamtheit wechselwirkender Körper. Für die technische Analyse ist wichtig, wie weit das System vom Gleichgewicht entfernt ist und wie es auf äußere Einwirkungen reagiert. Die Gibbs'sche Phasenregel lautet:

<div class="equation-block">
  <span class="equation-main">S = K − f + 2,</span>
  <span class="equation-number">(1.6)</span>
</div>

S ist die Zahl der Freiheitsgrade, K die Zahl der Komponenten und f die Zahl der Phasen. Das Prinzip von Le Chatelier beschreibt die Richtung der Änderungen nach einer Störung des Gleichgewichts.

Optimierung bedeutet die Auswahl der zweckmäßigsten apparativen Ausführung. Wichtige allgemeine Lösungen sind kontinuierliche Prozessführung, Gegenstromführung, Erneuerung der Phasenkontaktfläche, Wärmerückgewinnung und die Beachtung des Maßstabsübergangs.

![Gegenstrom, Gleichstrom und Kreuzstrom der Medien](/images/courses/bioprocess-engineering/chapter-01/fig-1-4.webp)
*Abb. 1.4. Gegenstrom (1), Gleichstrom (2) und Kreuzstrom (3) der Medien.*

### 1.2. Ähnlichkeitsmethode und ihre Rolle

Neue Prozesse werden zuerst im Labor, danach in Pilotanlagen und schließlich im Produktionsmaßstab untersucht. Die Ähnlichkeitstheorie beantwortet, welche Größen gemessen werden müssen, wie Versuchsdaten auszuwerten sind und wie ein Modell aufgebaut wird, das dem Original ähnlich ist.

Für geometrische Ähnlichkeit gilt:

<div class="equation-block">
  <span class="equation-main">L/l = α<sub>l</sub>.</span>
</div>

Für kinematische Ähnlichkeit:

<div class="equation-block">
  <span class="equation-main">T/t = α<sub>t</sub>.</span>
</div>

Für dynamische Ähnlichkeit:

<div class="equation-block">
  <span class="equation-main">K/k = α<sub>k</sub>.</span>
</div>

Für dynamisch ähnliche Systeme verhalten sich die entsprechenden Kräfte wie das Produkt der Quadrate der entsprechenden Längen, der Quadrate der entsprechenden Geschwindigkeiten und der ersten Potenzen der entsprechenden Dichten:

<div class="equation-block">
  <span class="equation-main">K/k = (ρ<sub>Original</sub>/ρ<sub>Modell</sub>) · (V²/v²) · (L²/l²)</span>
  <span class="equation-number">(1.7)</span>
</div>

Das Newton-Kriterium ist:

<div class="equation-block">
  <span class="equation-main">Ne = K / (ρ l² v²)</span>
  <span class="equation-number">(1.8)</span>
</div>

Das Froude-Kriterium:

<div class="equation-block">
  <span class="equation-main">Ne′ = Lg/V² = lg/v²</span>
  <span class="equation-number">(1.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Fr = v² / (g l)</span>
  <span class="equation-number">(1.10)</span>
</div>

Das Reynolds-Kriterium:

<div class="equation-block">
  <span class="equation-main">Ne″ = μ/(LρV)</span>
  <span class="equation-number">(1.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Re = l v / ν = ρ v l / μ</span>
  <span class="equation-number">(1.12)</span>
</div>

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

<div class="equation-block">
  <span class="equation-main">i = n − k,</span>
  <span class="equation-number">(1.13)</span>
</div>

Für den Wärmeübergang an der Oberfläche eines Körpers, der von einer Flüssigkeitsströmung umspült wird, hängt der Wärmeübergangskoeffizient α von der charakteristischen Länge l, der Geschwindigkeit v, der Dichte ρ, der kinematischen Viskosität ν, der Wärmekapazität c und der Wärmeleitfähigkeit λ ab. Die Ausgangsabhängigkeit kann in Potenzform geschrieben werden:

<div class="equation-block">
  <span class="equation-main">α = C l<sup>β</sup> v<sup>γ</sup> ρ<sup>δ</sup> ν<sup>ε</sup> c<sup>η</sup> λ<sup>θ</sup></span>
  <span class="equation-number">(1.14)</span>
</div>

Diese Annahme ist dadurch begründet, dass viele technische Gesetzmäßigkeiten durch Potenzgleichungen beschrieben werden. Als Grundgrößen werden Länge L, Masse M, Zeit τ, Temperatur T und Wärme J gewählt. Die Dimensionen der linken und rechten Seite von Gleichung (1.14) müssen übereinstimmen:

<div class="equation-block">
  <span class="equation-main">[J/(L<sup>2</sup>Tτ)] = C [L]<sup>β</sup> [L/τ]<sup>γ</sup> [M/L<sup>3</sup>]<sup>δ</sup> [L<sup>2</sup>/τ]<sup>ε</sup> [J/(L<sup>3</sup>T)]<sup>η</sup> [J/(LTτ)]<sup>θ</sup></span>
  <span class="equation-number">(1.15)</span>
</div>

Durch Gleichsetzen der Exponenten der Einheiten auf beiden Seiten von Gleichung (1.15) erhält man ein Gleichungssystem. Da δ = 0 ist, fällt die Dichte aus der Ausgangsformel heraus, und die beiden letzten Gleichungen werden identisch. Es bleiben drei Gleichungen:

<div class="equation-block">
  <span class="equation-main">η + θ = 1<br />γ + ε + θ = 1<br />β + γ + 2ε − 3δ − 3η − θ = −2</span>
</div>

Drückt man β, γ und η durch ε und θ aus, erhält man:

<div class="equation-block">
  <span class="equation-main">α = C l<sup>−ε−θ</sup> v<sup>1−ε−θ</sup> ν<sup>ε</sup> c<sup>1−θ</sup> λ<sup>θ</sup></span>
  <span class="equation-number">(1.16)</span>
</div>

Diese Gleichung kann umgeformt werden zu:

<div class="equation-block">
  <span class="equation-main">αl/λ = C (vl/ν)<sup>1−ε−θ</sup> (νc/λ)<sup>1−θ</sup></span>
  <span class="equation-number">(1.17)</span>
</div>

Da αl/λ = Nu, vl/ν = Re, νc/λ = Pr, 1 − ε − θ = m und 1 − θ = n gilt, erhält man die Kriterialgleichung:

<div class="equation-block">
  <span class="equation-main">Nu = C Re<sup>m</sup> Pr<sup>n</sup></span>
  <span class="equation-number">(1.18)</span>
</div>

Die dritte Theorie verlangt ähnliche Eindeutigkeitsbedingungen und gleiche Kriterien. Für Rohrleitungsmodelle gilt beispielsweise:

<div class="equation-block">
  <span class="equation-main">Re<sub>Modell</sub> = Re<sub>Original</sub>.</span>
</div>

und die Druckverluste werden als:

<div class="equation-block">
  <span class="equation-main">Eu = f(Re).</span>
</div>

### 1.3. Grundlegende physikalische Stoffeigenschaften

Die Zusammensetzung einer Mischung kann durch Massen-, Volumen- und Molanteile angegeben werden:

<div class="equation-block">
  <span class="equation-main">x<sub>m</sub> = G<sub>i</sub>/G; x<sub>V</sub> = V<sub>i</sub>/V; x<sub>M</sub> = N<sub>i</sub>/N</span>
  <span class="equation-number">(1.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>i</sub> = N<sub>i</sub> M<sub>i</sub></span>
  <span class="equation-number">(1.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G = N M</span>
  <span class="equation-number">(1.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>i</sub>/G = (N<sub>i</sub>/N)(M<sub>i</sub>/M)</span>
  <span class="equation-number">(1.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x<sub>mi</sub> = x<sub>Mi</sub> (M<sub>i</sub>/M)</span>
  <span class="equation-number">(1.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>i</sub> = ρ<sub>i</sub> V<sub>i</sub></span>
  <span class="equation-number">(1.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G = ρ V</span>
  <span class="equation-number">(1.25)</span>
</div>

Durch Division von Gleichung (1.24) durch Gleichung (1.25) erhält man:

<div class="equation-block">
  <span class="equation-main">G<sub>i</sub>/G = (ρ<sub>i</sub>/ρ)(V<sub>i</sub>/V)</span>
  <span class="equation-number">(1.26)</span>
</div>

Unter Berücksichtigung von Ausdruck (1.19):

<div class="equation-block">
  <span class="equation-main">x<sub>mi</sub> = x<sub>Vi</sub> (ρ<sub>i</sub>/ρ)</span>
  <span class="equation-number">(1.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x<sub>mi</sub> = x<sub>Mi</sub> (M<sub>i</sub>/M) = x<sub>Vi</sub> (ρ<sub>i</sub>/ρ)</span>
  <span class="equation-number">(1.28)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x<sub>m</sub> = 1 / [1 + (M<sub>a</sub>/M<sub>b</sub>)(1/x<sub>M</sub> − 1)],</span>
  <span class="equation-number">(1.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x<sub>m</sub> = 1 / [1 + (ρ<sub>b</sub>/ρ<sub>a</sub>)(1/x<sub>V</sub> − 1)],</span>
  <span class="equation-number">(1.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x<sub>V</sub> = 1 / [1 + (ρ<sub>a</sub>/ρ<sub>b</sub>)(1/x<sub>m</sub> − 1)]</span>
  <span class="equation-number">(1.31)</span>
</div>

### 1.4. Physikalisch-technische Stoffeigenschaften

<div class="equation-block">
  <span class="equation-main">ρ<sub>mix</sub> = 1 / [x<sub>m</sub>/ρ<sub>a</sub> + (1 − x<sub>m</sub>)/ρ<sub>b</sub>]</span>
  <span class="equation-number">(1.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ρ<sub>mix</sub> = 100 / [(100 − ω)/ρ<sub>a</sub> + ω/ρ<sub>b</sub>]</span>
  <span class="equation-number">(1.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = 1 / [x<sub>m</sub>/M<sub>a</sub> + (1 − x<sub>m</sub>)/M<sub>b</sub>]</span>
  <span class="equation-number">(1.34)</span>
</div>

<div class="equation-block">
  <span class="equation-main">T = μ S (dw/dl),</span>
  <span class="equation-number">(1.35)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ν = μ/ρ</span>
  <span class="equation-number">(1.36)</span>
</div>

<div class="equation-block">
  <span class="equation-main">1/ν = x<sub>1</sub>/ν<sub>1</sub> + x<sub>2</sub>/ν<sub>2</sub> + x<sub>3</sub>/ν<sub>3</sub> + …</span>
  <span class="equation-number">(1.37)</span>
</div>

<div class="equation-block">
  <span class="equation-main">lg(μ<sub>mix</sub>) = x<sub>1</sub> lg(μ<sub>1</sub>) + x<sub>2</sub> lg(μ<sub>2</sub>) + …</span>
  <span class="equation-number">(1.38)</span>
</div>

<div class="equation-block">
  <span class="equation-main">μ<sub>s</sub> = μ<sub>l</sub> (1 + 4.5 x<sub>V</sub>),</span>
  <span class="equation-number">(1.39)</span>
</div>

Die physikalisch-chemische Siedepunktserhöhung wird berechnet als:

<div class="equation-block">
  <span class="equation-main">Δ<sub>pc</sub> = Δ&#x27;_pc k</span>
  <span class="equation-number">(1.40)</span>
</div>

## Nach dem Durcharbeiten dieses Kapitels sollen Studierende

- Stoff- und Wärmebilanzen für biotechnologische Apparate aufstellen;
- die dreifache Analogie der Übertragungsvorgänge erklären;
- Gleichgewicht, Gibbs'sche Phasenregel und Le Chatelier-Prinzip anwenden;
- geometrische, kinematische und dynamische Ähnlichkeit unterscheiden;
- Re, Fr, Eu, Nu, Pr, Pe und andere Kriterien für Analyse und Maßstabsübertragung nutzen;
- Massen-, Volumen- und Molanteile umrechnen;
- Dichte, Viskosität, Wärmekapazität, Wärmeleitfähigkeit und Siedepunktserhöhung in Berechnungen verwenden.

## Selbsttest

<section
  class="course-self-test"
  data-course-self-test
  data-locale="de"
  data-course="bioprocess-engineering"
  data-chapter="chapter-01-general-information"
  data-result-label="Ergebnis"
  data-best-label="Bestes Ergebnis"
  data-choose-label="Antwort auswaehlen."
  data-correct-label="Richtig."
  data-incorrect-label="Wiederholen."
>
<form data-course-test-form>
<fieldset class="course-test-item" data-course-test-item>
<legend>1. Welcher Begriff charakterisiert den Inhalt dieses Kapitels am besten?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Energiebilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-0" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Stoffbilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Aehnlichkeitskriterien</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>physikalische Eigenschaften</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>1.2. Aehnlichkeitsmethode und ihre Rolle beim Studium von Prozessen und Apparaten biotechnologischer Produktionen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>1.3. Grundlegende physikalische Stoffeigenschaften</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-1" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>1.1. Grundgesetze technologischer Prozesse</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>1.4. Grundlegende physikalisch-technische Stoffeigenschaften</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Auf welchen Begriff soll sich die ingenieurtechnische Analyse zuerst stuetzen?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Stoffbilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Aehnlichkeitskriterien</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>physikalische Eigenschaften</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-2" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Energiebilanz</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Was verbindet Prozesstheorie am deutlichsten mit der Apparategestaltung?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-3" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>physikalische Eigenschaften</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Stoffbilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Energiebilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Aehnlichkeitskriterien</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Stoffbilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-4" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Aehnlichkeitskriterien</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Energiebilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>physikalische Eigenschaften</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Mit welchem Thema beginnt das Kapitel in der Kapitelstruktur?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>1.2. Aehnlichkeitsmethode und ihre Rolle beim Studium von Prozessen und Apparaten biotechnologischer Produktionen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>1.3. Grundlegende physikalische Stoffeigenschaften</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-5" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>1.1. Grundgesetze technologischer Prozesse</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>1.4. Grundlegende physikalisch-technische Stoffeigenschaften</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>1.1. Grundgesetze technologischer Prozesse</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>1.3. Grundlegende physikalische Stoffeigenschaften</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>1.4. Grundlegende physikalisch-technische Stoffeigenschaften</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-6" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>1.2. Aehnlichkeitsmethode und ihre Rolle beim Studium von Prozessen und Apparaten biotechnologischer Produktionen</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Welches Thema schliesst die Struktur des Kapitels ab?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-7" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>1.4. Grundlegende physikalisch-technische Stoffeigenschaften</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>1.1. Grundgesetze technologischer Prozesse</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>1.2. Aehnlichkeitsmethode und ihre Rolle beim Studium von Prozessen und Apparaten biotechnologischer Produktionen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>1.3. Grundlegende physikalische Stoffeigenschaften</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Welches Begriffspaar eignet sich fuer den Selbsttest?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Aehnlichkeitskriterien / physikalische Eigenschaften</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-8" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Stoffbilanz / Energiebilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Stoffbilanz / Aehnlichkeitskriterien</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Energiebilanz / physikalische Eigenschaften</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Was eignet sich am besten zur praktischen Begruendung der Prozessauswahl?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Stoffbilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Energiebilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-9" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>physikalische Eigenschaften</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Aehnlichkeitskriterien</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Stoffbilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Aehnlichkeitskriterien</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>physikalische Eigenschaften</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-10" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Energiebilanz</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Welches Objekt wird in diesem Kapitel als Abbildung dargestellt?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-1-11" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Schema der Stoffbilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Stoffbilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Energiebilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-1-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Aehnlichkeitskriterien</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>
<div class="course-test-actions">
  <button type="submit" class="course-test-primary">Pruefen</button>
  <button type="button" class="course-test-secondary" data-course-test-reset>Zuruecksetzen</button>
</div>
</form>
<p class="course-test-status" aria-live="polite">
  <strong data-course-test-result>Ergebnis: 0/12</strong>
  <span data-course-test-best>Bestes Ergebnis: -</span>
</p>
<details class="course-test-answers">
<summary>Antworten</summary>
<ol>
<li>Frage 1: Richtige Antwort - B</li>
<li>Frage 2: Richtige Antwort - C</li>
<li>Frage 3: Richtige Antwort - D</li>
<li>Frage 4: Richtige Antwort - A</li>
<li>Frage 5: Richtige Antwort - B</li>
<li>Frage 6: Richtige Antwort - C</li>
<li>Frage 7: Richtige Antwort - D</li>
<li>Frage 8: Richtige Antwort - A</li>
<li>Frage 9: Richtige Antwort - B</li>
<li>Frage 10: Richtige Antwort - C</li>
<li>Frage 11: Richtige Antwort - D</li>
<li>Frage 12: Richtige Antwort - A</li>
</ol>
</details>
</section>
