---
title: "Kapitel 3. Trennung heterogener Systeme"
course: "chemical-process-engineering"
course_title: "Prozesse und Apparate der chemischen Produktion"
chapter: 3
description: "Klassifikation heterogener Systeme, Sedimentation, Filtration und zentrifugale Trennmethoden."
updated: "2026-08-27"
---

## Kapitelüberblick

Dieses Kapitel stellt die zentralen Begriffe, Gleichungen und Apparatebeispiele zum Thema vor.

## Struktur des Kapitels

- 3.1. Klassifikation und Charakteristik heterogener Systeme
- 3.2. Methoden zur Trennung heterogener Systeme
- 3.3. Sedimentation im Schwerefeld
- 3.4. Filtration
- 3.5. Zentrifugale Methoden zur Trennung heterogener Systeme

## Vorlesungsskript

### 3.1. Klassifikation und Charakteristik heterogener Systeme

Heterogene Systeme bestehen mindestens aus dispergierter Phase und Dispersionsmedium. In chemischen Produktionen sind dies Zellsuspensionen, Kulturbruehen mit Biomasse, Emulsionen, Schaeume, Aerosole und Staub-Gas-Stroeme. Ziel der Trennung ist geklaerte Fluessigkeit, Konzentrat, Filterkuchen oder gereinigtes Gas.

Die Viskositaet einer Suspension wird fuer technische Berechnungen mit der empirischen Formel von Bachynskyi abgeschaetzt:

<div class="equation-block">
  <span class="equation-main">μ = μ<sub>0</sub>(1 + 4.5φ)</span>
  <span class="equation-number">(3.1)</span>
</div>

### 3.2. Methoden zur Trennung heterogener Systeme

Wichtige Methoden sind Sedimentation, Filtration durch poroese Medien, Zentrifugation, Zyklontrennung, Separation und kombinierte Schemata. Die Wahl haengt von Partikelgroesse, Dichtedifferenz, Viskositaet, Feststoffgehalt und Sterilitaetsanforderungen ab.

### 3.3. Sedimentation im Schwerefeld

Fuer grosse Koerper im luftleeren Raum gilt:

<div class="equation-block">
  <span class="equation-main">w = gτ</span>
  <span class="equation-number">(3.2)</span>
</div>

Fuer ein Partikel in einem viskosen Medium stellt sich nach kurzer Beschleunigung ein Kraeftegleichgewicht ein:

<div class="equation-block">
  <span class="equation-main">G - A = R</span>
  <span class="equation-number">(3.3)</span>
</div>

![Abb. 3.1. Kraefte auf ein Partikel waehrend der Sedimentation](/images/courses/chemical-process-engineering/chapter-03/fig-3-1.webp)

Differenz aus Gewichtskraft und Auftrieb fuer ein kugelfoermiges Partikel:

<div class="equation-block">
  <span class="equation-main">G - A = V(ρ<sub>1</sub> - ρ<sub>2</sub>)g = (πd<sup>3</sup>/6)(ρ<sub>1</sub> - ρ<sub>2</sub>)g</span>
  <span class="equation-number">(3.4)</span>
</div>

Widerstandskraft des Mediums:

<div class="equation-block">
  <span class="equation-main">R = ξF w<sub>0</sub><sup>2</sup>ρ<sub>2</sub>/2 = ξπd<sup>2</sup>w<sub>0</sub><sup>2</sup>ρ<sub>2</sub>/8</span>
  <span class="equation-number">(3.5)</span>
</div>

Daraus folgt die allgemeine Geschwindigkeit der freien Sedimentation:

<div class="equation-block">
  <span class="equation-main">w<sub>0</sub> = √(4gd(ρ<sub>1</sub> - ρ<sub>2</sub>)/(3ξρ<sub>2</sub>))</span>
  <span class="equation-number">(3.6)</span>
</div>

Fuer Sedimentation in Gasen, wenn die Gasdichte im Zaehler vernachlaessigt wird:

<div class="equation-block">
  <span class="equation-main">w<sub>0</sub> = √(4gdρ<sub>1</sub>/(3ξρ<sub>2</sub>))</span>
  <span class="equation-number">(3.7)</span>
</div>

Der Widerstandskoeffizient haengt vom Bewegungsregime ab. Fuer den laminaren Bereich:

<div class="equation-block">
  <span class="equation-main">ξ = 24/Re</span>
  <span class="equation-number">(3.8)</span>
</div>

Fuer den Uebergangsbereich:

<div class="equation-block">
  <span class="equation-main">ξ = 18.5/Re<sup>0.6</sup></span>
  <span class="equation-number">(3.9)</span>
</div>

Im Bereich des Stokes-Gesetzes:

<div class="equation-block">
  <span class="equation-main">w<sub>0</sub> = gd<sup>2</sup>(ρ<sub>1</sub> - ρ<sub>2</sub>)/(18μ)</span>
  <span class="equation-number">(3.10)</span>
</div>

Maximaler Partikeldurchmesser, fuer den das laminare Regime noch gilt:

<div class="equation-block">
  <span class="equation-main">d<sub>max</sub> = √(36μ<sup>2</sup>/(gρ<sub>2</sub>(ρ<sub>1</sub> - ρ<sub>2</sub>))) = 1.54√(μ<sup>2</sup>/(ρ<sub>2</sub>(ρ<sub>1</sub> - ρ<sub>2</sub>)))</span>
  <span class="equation-number">(3.11)</span>
</div>

Die Kriterienmethode nutzt den Zusammenhang zwischen Widerstandskoeffizient, Re und Ar:

<div class="equation-block">
  <span class="equation-main">ξRe<sup>2</sup> = (4/3) · gd<sup>3</sup>(ρ<sub>1</sub> - ρ<sub>2</sub>)/(ν<sup>2</sup>ρ<sub>2</sub>)</span>
  <span class="equation-number">(3.12)</span>
</div>

Archimedes-Kriterium:

<div class="equation-block">
  <span class="equation-main">Ar = gd<sup>3</sup>(ρ<sub>1</sub> - ρ<sub>2</sub>)/(ν<sup>2</sup>ρ<sub>2</sub>)</span>
  <span class="equation-number">(3.13)</span>
</div>

Praktische Form der Gleichung:

<div class="equation-block">
  <span class="equation-main">Ar = (3/4)ξRe<sup>2</sup></span>
  <span class="equation-number">(3.14)</span>
</div>

Kritische Werte an den Regimegrenzen:

<div class="equation-block">
  <span class="equation-main">Ar<sub>cr</sub> = 18 · 2 = 36</span>
  <span class="equation-number">(3.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Ar<sub>cr</sub> = (3 · 18.5/4) · 500<sup>1.4</sup> = 83500</span>
  <span class="equation-number">(3.16)</span>
</div>

Zur Bestimmung von Re aus Ar verwendet man:

<div class="equation-block">
  <span class="equation-main">Re = Ar/18</span>
  <span class="equation-number">(3.17)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Re = 0.153Ar<sup>0.714</sup></span>
  <span class="equation-number">(3.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Re = 1.74√Ar</span>
  <span class="equation-number">(3.19)</span>
</div>

Korrektur fuer die Partikelform:

<div class="equation-block">
  <span class="equation-main">w<sub>p</sub> = w<sub>0</sub>φ</span>
  <span class="equation-number">(3.20)</span>
</div>

Beim periodischen Absetzbehaelter wird die Leistung durch freie Oberflaeche und Sedimentationsgeschwindigkeit bestimmt:

<div class="equation-block">
  <span class="equation-main">V/τ = Fh/τ = Fw<sub>0</sub></span>
  <span class="equation-number">(3.22)</span>
</div>

![Abb. 3.2. Schema eines periodischen Absetzbehaelters](/images/courses/chemical-process-engineering/chapter-03/fig-3-2.webp)

### 3.4. Filtration

Filtration trennt Suspensionen mit einer poroesen Trennwand. Die treibende Kraft ist die Druckdifferenz; Widerstand entsteht in Filtermedium und Filterkuchen.

Filtrationsgeschwindigkeit:

<div class="equation-block">
  <span class="equation-main">w = dV/(F dτ)</span>
  <span class="equation-number">(3.23)</span>
</div>

Volumenstrom durch eine Kapillare:

<div class="equation-block">
  <span class="equation-main">q = (πd<sup>2</sup>/4)(Δpd<sup>2</sup>/(32μl)) = αΔpd<sup>4</sup>/(32μl)</span>
  <span class="equation-number">(3.24)</span>
</div>

Leistung eines elementaren Kapillarsystems:

<div class="equation-block">
  <span class="equation-main">dV = qdτFz = (αΔpd<sup>4</sup>/(32μl))dτFz</span>
  <span class="equation-number">(3.25)</span>
</div>

Nach Einfuehrung geometrischer Kuchenkennwerte:

<div class="equation-block">
  <span class="equation-main">w = dV/(F dτ) = Δp/(rS)</span>
  <span class="equation-number">(3.26)</span>
</div>

Spezifischer Kuchenwiderstand:

<div class="equation-block">
  <span class="equation-main">r = 32μβ/(αεδD<sup>2</sup>) = φμ/D<sup>2</sup></span>
  <span class="equation-number">(3.27)</span>
</div>

Strukturwiderstand:

<div class="equation-block">
  <span class="equation-main">σ = r/μ</span>
  <span class="equation-number">(3.28)</span>
</div>

Fuer inkompressiblen Kuchen:

<div class="equation-block">
  <span class="equation-main">w = Δp/(σμS)</span>
  <span class="equation-number">(3.29)</span>
</div>

Mit Widerstand des Filtermediums:

<div class="equation-block">
  <span class="equation-main">w = Δp/(σμS + R)</span>
  <span class="equation-number">(3.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">w = Δp/(μ(σS + R<sub>0</sub>))</span>
  <span class="equation-number">(3.31)</span>
</div>

Fuer kompressible Kuchen:

<div class="equation-block">
  <span class="equation-main">D = D<sub>0</sub>(1 - Δp/G)</span>
  <span class="equation-number">(3.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">S = S<sub>0</sub>/(1 - Δp/G)</span>
  <span class="equation-number">(3.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">w = Δp(1 - Δp/G)/(σS<sub>0</sub>μ + R(1 - Δp/G))</span>
  <span class="equation-number">(3.34)</span>
</div>

Zusammenhang zwischen Kuchendicke und Filtratvolumen:

<div class="equation-block">
  <span class="equation-main">S = Vε<sub>0</sub>/F</span>
  <span class="equation-number">(3.35)</span>
</div>

Filtration bei konstantem Druck:

<div class="equation-block">
  <span class="equation-main">dV = (Δp(1 - Δp/G)F<sup>2</sup>dτ)/(σμVε<sub>0</sub>)</span>
  <span class="equation-number">(3.36)</span>
</div>

<div class="equation-block">
  <span class="equation-main">VdV = (Δp(1 - Δp/G)F<sup>2</sup>dτ)/(σμε<sub>0</sub>)</span>
  <span class="equation-number">(3.36a)</span>
</div>

<div class="equation-block">
  <span class="equation-main">V = F√(2Δp(1 - Δp/G)τ/(σμε<sub>0</sub>))</span>
  <span class="equation-number">(3.37)</span>
</div>

Filtration bei konstanter Geschwindigkeit:

<div class="equation-block">
  <span class="equation-main">σ<sub>0</sub>μS<sub>0</sub> = (Δp - Δp<sup>2</sup>/G)/w</span>
  <span class="equation-number">(3.38)</span>
</div>

<div class="equation-block">
  <span class="equation-main">σ<sub>0</sub>μdS = (dΔp - 2Δp dΔp/G)/w</span>
  <span class="equation-number">(3.39)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dτ = (dΔp - 2Δp dΔp/G)/(w<sup>2</sup>σ<sub>0</sub>με<sub>0</sub>)</span>
  <span class="equation-number">(3.40)</span>
</div>

<div class="equation-block">
  <span class="equation-main">τ = ((Δp<sub>2</sub> - Δp<sub>1</sub>) - (Δp<sub>2</sub><sup>2</sup> - Δp<sub>1</sub><sup>2</sup>)/G)/(w<sup>2</sup>σ<sub>0</sub>με<sub>0</sub>)</span>
  <span class="equation-number">(3.41)</span>
</div>

<div class="equation-block">
  <span class="equation-main">w = √(((Δp<sub>2</sub> - Δp<sub>1</sub>) - (Δp<sub>2</sub><sup>2</sup> - Δp<sub>1</sub><sup>2</sup>)/G)/(σ<sub>0</sub>με<sub>0</sub>τ))</span>
  <span class="equation-number">(3.42)</span>
</div>

<div class="equation-block">
  <span class="equation-main">V = Fwτ</span>
  <span class="equation-number">(3.43)</span>
</div>

![Abb. 3.7. Schema einer Filtrationskammer](/images/courses/chemical-process-engineering/chapter-03/fig-3-7.webp)

![Abb. 3.10. Rahmenfilterpresse](/images/courses/chemical-process-engineering/chapter-03/fig-3-10.webp)

![Abb. 3.13. Schema eines Trommelvakuumfilters](/images/courses/chemical-process-engineering/chapter-03/fig-3-13.webp)

### 3.5. Zentrifugale Trennmethoden

Zentrifugale Methoden werden eingesetzt, wenn Schwerkraftsedimentation zu langsam ist oder kompakte Hochleistungsapparate erforderlich sind. In Bioprozessen dienen Zentrifugen zur Abtrennung von Biomasse, Zelltruemmern, Kristallen, Proteinpraezipitaten und Feststoffverunreinigungen.

Zentrifugalkraft:

<div class="equation-block">
  <span class="equation-main">G<sub>c</sub> = ma = mω<sup>2</sup>r</span>
  <span class="equation-number">(3.44)</span>
</div>

Vergleich mit der Gewichtskraft:

<div class="equation-block">
  <span class="equation-main">G<sub>c</sub> = G<sub>g</sub>ω<sup>2</sup>r/g = G<sub>g</sub>Fr</span>
  <span class="equation-number">(3.45)</span>
</div>

Trennfaktor:

<div class="equation-block">
  <span class="equation-main">Fr = ω<sup>2</sup>r/g = 4π<sup>2</sup>n<sup>2</sup>r/g</span>
  <span class="equation-number">(3.46)</span>
</div>

In Kriterienrechnungen verwendet man statt Ar das Produkt Ar · Fr:

<div class="equation-block">
  <span class="equation-main">Ar · Fr = (3/4)ξRe<sup>2</sup></span>
  <span class="equation-number">(3.47)</span>
</div>

![Abb. 3.18. Schema eines Zyklons und der Stroemung darin](/images/courses/chemical-process-engineering/chapter-03/fig-3-18.webp)

Bei der Zentrifugalfiltration ist die Elementarmasse einer Ringschicht:

<div class="equation-block">
  <span class="equation-main">dm = dVρ = 2πrdrHρ</span>
  <span class="equation-number">(3.48)</span>
</div>

Zentrifugalkraft der Elementarschicht:

<div class="equation-block">
  <span class="equation-main">dG<sub>c</sub> = ω<sup>2</sup>r dm = 2πHρω<sup>2</sup>r<sup>2</sup>dr</span>
  <span class="equation-number">(3.49)</span>
</div>

Elementardruck:

<div class="equation-block">
  <span class="equation-main">dp = dG<sub>c</sub>/(2πrH) = ρω<sup>2</sup>rdr</span>
  <span class="equation-number">(3.50)</span>
</div>

Treibende Kraft der Zentrifugalfiltration:

<div class="equation-block">
  <span class="equation-main">Δp = ρω<sup>2</sup>(R<sup>2</sup> - R<sub>0</sub><sup>2</sup>)/2</span>
  <span class="equation-number">(3.51)</span>
</div>

![Abb. 3.19. Zentrifugalfiltration](/images/courses/chemical-process-engineering/chapter-03/fig-3-19.webp)

Anfahrleistung der Zentrifuge:

<div class="equation-block">
  <span class="equation-main">N = (N<sub>1</sub> + N<sub>2</sub> + N<sub>3</sub> + N<sub>4</sub>)/η</span>
  <span class="equation-number">(3.52)</span>
</div>

Einzelne Leistungsanteile:

<div class="equation-block">
  <span class="equation-main">N<sub>1</sub> = mw<sub>b</sub><sup>2</sup>/(2τ)</span>
  <span class="equation-number">(3.53)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N<sub>2</sub> = εmω<sup>2</sup>R<sup>2</sup>/(2τ)</span>
  <span class="equation-number">(3.54)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N<sub>3</sub> = fG<sub>b</sub>w<sub>v</sub></span>
  <span class="equation-number">(3.55)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N<sub>4</sub> = Cρ<sub>air</sub>HD<sup>4</sup>n<sup>3</sup></span>
  <span class="equation-number">(3.56)</span>
</div>

![Abb. 3.26. Schemata eines Kammer- und Tellerseparators](/images/courses/chemical-process-engineering/chapter-03/fig-3-26.webp)

## Nach dem Durcharbeiten dieses Kapitels sollen Studierende

- die Rolle von "Suspension" im Kapitel erklaeren;
- "Sedimentation" mit der apparativen Gestaltung der chemischen Produktion verbinden;
- wichtige Einflussgroessen fuer "Filtration" unterscheiden;
- die Auswahl oder Bewertung des Prozesses ueber "Zentrifuge" begruenden.

## Selbsttest

<section
  class="course-self-test"
  data-course-self-test
  data-locale="de"
  data-course="chemical-process-engineering"
  data-chapter="chapter-03-heterogeneous-systems-separation"
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
  <input type="radio" name="course-test-3-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Sedimentation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Filtration</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Zentrifuge</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-0" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Suspension</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-1" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>3.1. Klassifikation und Charakteristik heterogener Systeme</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>3.2. Methoden zur Trennung heterogener Systeme</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>3.3. Sedimentation im Schwerefeld</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>3.4. Filtration</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Auf welchen Begriff soll sich die ingenieurtechnische Analyse zuerst stuetzen?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Suspension</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-2" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Sedimentation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Filtration</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Zentrifuge</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Was verbindet Prozesstheorie am deutlichsten mit der Apparategestaltung?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Suspension</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Sedimentation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-3" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Zentrifuge</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Filtration</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Suspension</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Sedimentation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Zentrifuge</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-4" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Filtration</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Mit welchem Thema beginnt das Kapitel in der Kapitelstruktur?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-5" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>3.1. Klassifikation und Charakteristik heterogener Systeme</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>3.2. Methoden zur Trennung heterogener Systeme</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>3.3. Sedimentation im Schwerefeld</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>3.4. Filtration</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>3.1. Klassifikation und Charakteristik heterogener Systeme</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-6" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>3.2. Methoden zur Trennung heterogener Systeme</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>3.3. Sedimentation im Schwerefeld</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>3.4. Filtration</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Welches Thema schliesst die Struktur des Kapitels ab?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>3.1. Klassifikation und Charakteristik heterogener Systeme</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>3.2. Methoden zur Trennung heterogener Systeme</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-7" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>3.5. Zentrifugale Methoden zur Trennung heterogener Systeme</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>3.3. Sedimentation im Schwerefeld</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Welches Begriffspaar eignet sich fuer den Selbsttest?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Filtration / Zentrifuge</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Suspension / Filtration</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Sedimentation / Zentrifuge</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-8" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Suspension / Sedimentation</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Was eignet sich am besten zur praktischen Begruendung der Prozessauswahl?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-9" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Zentrifuge</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Suspension</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Sedimentation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Filtration</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Suspension</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-10" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Sedimentation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Filtration</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Zentrifuge</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Welches Objekt wird in diesem Kapitel als Abbildung dargestellt?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-3-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Suspension</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Sedimentation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-11" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Kraefte auf ein Partikel waehrend der Sedimentation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-3-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Filtration</span>
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
<li>Frage 1: Richtige Antwort - D</li>
<li>Frage 2: Richtige Antwort - A</li>
<li>Frage 3: Richtige Antwort - B</li>
<li>Frage 4: Richtige Antwort - C</li>
<li>Frage 5: Richtige Antwort - D</li>
<li>Frage 6: Richtige Antwort - A</li>
<li>Frage 7: Richtige Antwort - B</li>
<li>Frage 8: Richtige Antwort - C</li>
<li>Frage 9: Richtige Antwort - D</li>
<li>Frage 10: Richtige Antwort - A</li>
<li>Frage 11: Richtige Antwort - B</li>
<li>Frage 12: Richtige Antwort - C</li>
</ol>
</details>
</section>
