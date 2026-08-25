---
title: "Kapitel 6. Grundlagen der Waermeuebertragung"
course: "bioprocess-engineering"
course_title: "Bioverfahrenstechnik: Prozesse und Apparate biotechnologischer Produktionen"
chapter: 6
description: "Aehnlichkeitskriterien thermischer Prozesse, Waermeleitung, konvektiver und strahlender Waermeaustausch, Waermeuebertragung."
updated: "2026-08-23"
---

## Quelle und Umfang

Materialgrundlage: das Lehrbuch "Bioverfahrenstechnik. Modul 1. Prozesse und Apparate biotechnologischer Produktionen", herausgegeben von V.L. Zavialov, NUFT, 2024.

Die Seite folgt der Logik des entsprechenden Lehrbuchkapitels; die Testfragen wurden als Lernwerkzeug zur Selbstkontrolle ergänzt.

## Struktur nach dem Lehrbuch

- 6.1. Allgemeines
- 6.2. Wichtige Aehnlichkeitskriterien thermischer Prozesse
- 6.3. Waermeleitung
- 6.4. Konvektiver Waermeaustausch
- 6.5. Waermeuebergang bei Phasenwechsel
- 6.6. Strahlungswaermeaustausch
- 6.7. Waermeuebertragung

## Vorlesungsskript

### 6.1. Allgemeines

Waermeuebertragung ist die Uebertragung von Waerme von einem Koerper auf einen anderen; notwendige Bedingung ist ein Temperaturunterschied. Das Mass des Waermeaustauschs ist die uebertragene Waermemenge, im SI-System in Joule. Stoffe, die am Waermetransport teilnehmen, heissen Waermetraeger: der heisse Waermetraeger gibt Waerme ab, der kalte nimmt sie auf.

Als heisse Waermetraeger verwendet man Dampf, heisses Wasser, erwaermte Luft, Rauchgase und Mineraloele; als kalte Waermetraeger Wasser, Luft, Sole, Kohlendioxid, Ammoniak und Kaeltemittel. Waerme wird durch Leitung, Konvektion und Strahlung uebertragen. Waermeuebergang beschreibt den Austausch zwischen Wand und umstroemendem Medium, Waermeuebertragung den Austausch zwischen zwei Medien durch eine feste Trennwand.

### 6.2. Wichtigste Aehnlichkeitskriterien thermischer Prozesse

**Tabelle 6.1. Aehnlichkeitskriterien thermischer Prozesse**

| Kriterium | Bestandteile | Physikalische Bedeutung |
|---|---|---|
| Nusselt | Nu = αl/λ | Intensitaet des Waermeuebergangs an der Grenze Strom - Wand. |
| Prandtl | Pr = ν/a = cμ/λ | Zusammenhang zwischen Temperatur- und Geschwindigkeitsfeld. |
| Peclet | Pe = wl/a = RePr | Verhaeltnis von konvektivem zu molekularem Waermetransport. |
| Grashof | Gr = gl<sup>3</sup>βΔt/ν<sup>2</sup> | Einfluss des Auftriebs bei freier Konvektion. |
| Kutateladze | Ku | Waermeaustausch beim Phasenuebergang. |

### 6.3. Waermeleitung

Die Grundgleichung der eindimensionalen Waermeleitung nach Fourier lautet:

<div class="equation-block">
  <span class="equation-main">dQ/dτ = -λF · dt/dx</span>
  <span class="equation-number">(6.1)</span>
</div>

Fuer eine homogene ebene Wand der Dicke δ mit konstanter Waermeleitfaehigkeit λ und Oberflaechentemperaturen t<sub>1</sub> und t<sub>2</sub> gilt fuer den spezifischen Waermestrom:

<div class="equation-block">
  <span class="equation-main">q = λ(t<sub>1</sub> - t<sub>2</sub>)/δ</span>
  <span class="equation-number">(6.2)</span>
</div>

![Abb. 6.1. Waermeleitung durch eine ebene Wand](/images/courses/bioprocess-engineering/chapter-06/fig-6-1.webp)
*Abb. 6.1. Waermeleitung durch eine ebene Wand*

Der Ausdruck δ/λ ist der thermische Widerstand der Wand. Bei einer mehrschichtigen Wand ist der Gesamtwiderstand die Summe der Einzelwiderstaende:

<div class="equation-block">
  <span class="equation-main">R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + ... + R<sub>n</sub></span>
  <span class="equation-number">(6.3)</span>
</div>

### 6.4. Konvektiver Waermeaustausch

In Fluessigkeiten und Gasen wird Waerme hauptsaechlich durch Konvektion uebertragen. Freie Konvektion entsteht durch Dichteunterschiede, erzwungene Konvektion durch Pumpe, Ventilator oder eine andere aeussere Kraft. Bei turbulenter Stroemung ist der Waermeaustausch deutlich intensiver als bei laminarer Stroemung.

Das Grundgesetz des konvektiven Waermeaustauschs ist das Newtonsche Gesetz:

<div class="equation-block">
  <span class="equation-main">Q = αF(t<sub>w</sub> - t)</span>
  <span class="equation-number">(6.4)</span>
</div>

Fuer ausgebildete turbulente Stroemung in Rohren und Kanaelen bei Re > 10000 gilt:

<div class="equation-block">
  <span class="equation-main">Nu = 0.021Re<sup>0.8</sup>Pr<sup>0.43</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.5)</span>
</div>

Fuer Fluessigkeiten mit einer Viskositaet bis etwa zum Doppelten der Wasserviskositaet wird eine vereinfachte Beziehung benutzt:

<div class="equation-block">
  <span class="equation-main">Nu = 0.023Re<sup>0.8</sup>Pr<sup>0.4</sup></span>
  <span class="equation-number">(6.6)</span>
</div>

Fuer laminare Stroemung bei Re < 2300 wird empfohlen:

<div class="equation-block">
  <span class="equation-main">Nu = 0.15Re<sup>0.33</sup>Pr<sup>0.43</sup>Gr<sup>0.1</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.7)</span>
</div>

Fuer Luft vereinfachen sich diese Beziehungen:

<div class="equation-block">
  <span class="equation-main">Nu = 0.018Re<sup>0.8</sup></span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = 0.13Re<sup>0.33</sup>Gr<sup>0.1</sup></span>
  <span class="equation-number"></span>
</div>

Im Uebergangsbereich 2300 < Re < 10000 wird der Waermeuebergang angenaehert berechnet:

<div class="equation-block">
  <span class="equation-main">Nu = f(Re)Pr<sup>0.43</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.8)</span>
</div>

**Tabelle 6.2. Werte des Komplexes f(Re) fuer verschiedene Re-Werte**

| Re · 10<sup>-3</sup> | 2.1 | 2.2 | 2.3 | 2.4 | 2.5 | 3 | 4 | 5 | 6 | 8 | 10 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| f(Re) | 1.9 | 2.2 | 3.3 | 3.8 | 4.4 | 6.0 | 10.3 | 15.5 | 19.5 | 27.0 | 33.3 |

Bei Queranstroemung eines Rohrbuendels mit Angriffswinkel φ = 90° gelten fuer versetzte und fluchtende Rohrordnung:

<div class="equation-block">
  <span class="equation-main">Nu = 0.41Re<sup>0.6</sup>Pr<sup>0.33</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = 0.23Re<sup>0.65</sup>Pr<sup>0.33</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.10)</span>
</div>

Bei freier Konvektion wird der mittlere Waermeuebergangskoeffizient ueber das Produkt GrPr bestimmt:

<div class="equation-block">
  <span class="equation-main">Nu = C(GrPr)<sup>n</sup></span>
  <span class="equation-number">(6.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = 1.18(GrPr)<sup>0.125</sup></span>
  <span class="equation-number">(6.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = 0.54(GrPr)<sup>0.25</sup></span>
  <span class="equation-number">(6.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = 0.135(GrPr)<sup>0.33</sup></span>
  <span class="equation-number">(6.14)</span>
</div>

### 6.5. Waermeuebergang beim Phasenwechsel

Bei der Dampfkondensation bildet der Kondensatfilm auf der festen Oberflaeche den wichtigsten thermischen Widerstand. Zur Bestimmung des Waermeuebergangskoeffizienten nutzt man die Nusselt-Beziehung:

<div class="equation-block">
  <span class="equation-main">Nu = C(Ga · Pr · K<sub>u</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(6.15)</span>
</div>

Der Waermeaustausch beim Sieden ist komplex; fuer vertikale Rohre mit Naturumlauf verwendet man daher eine Naeherung:

<div class="equation-block">
  <span class="equation-main">Nu = 54K<sup>0.6</sup>Pr<sup>-0.3</sup></span>
  <span class="equation-number">(6.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">α = Aq<sup>0.6</sup></span>
  <span class="equation-number">(6.17)</span>
</div>

### 6.6. Strahlungswaermeaustausch

Strahlung ist allen Koerpern eigen: Ein Teil der Waermeenergie wird in Strahlungsenergie umgewandelt und nach Absorption wieder zu Waerme. Der Strahlungs-Waermeuebergangskoeffizient ist:

<div class="equation-block">
  <span class="equation-main">α<sub>rad</sub> = 5.7ε[(T<sub>1</sub>/100)<sup>4</sup> - (T<sub>2</sub>/100)<sup>4</sup>]/(T<sub>1</sub> - T<sub>2</sub>)</span>
  <span class="equation-number">(6.18)</span>
</div>

Fuer Apparate in geschlossenen Raeumen bei Oberflaechentemperaturen bis 150 °C kann der gesamte Waermeuebergangskoeffizient durch Strahlung und Konvektion abgeschaetzt werden:

<div class="equation-block">
  <span class="equation-main">α = 9.76 + 0.07Δt</span>
  <span class="equation-number">(6.19)</span>
</div>

### 6.7. Waermeuebertragung

Die von einem heissen an einen kalten Waermetraeger durch eine Wand uebertragene Waermemenge wird bestimmt durch:

<div class="equation-block">
  <span class="equation-main">Q = kFΔt<sub>m</sub></span>
  <span class="equation-number">(6.20)</span>
</div>

![Abb. 6.2. Waermeuebertragung durch eine ebene Wand](/images/courses/bioprocess-engineering/chapter-06/fig-6-2.webp)
*Abb. 6.2. Waermeuebertragung durch eine ebene Wand*

Fuer eine ebene Wand der Dicke δ und Waermeleitfaehigkeit λ beschreibt man den stationaeren Waermestrom mit drei Gleichungen:

<div class="equation-block">
  <span class="equation-main">q = α<sub>1</sub>(t<sub>1</sub> - t<sub>w1</sub>)</span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">q = λ(t<sub>w1</sub> - t<sub>w2</sub>)/δ</span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">q = α<sub>2</sub>(t<sub>w2</sub> - t<sub>2</sub>)</span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">q = (t<sub>1</sub> - t<sub>2</sub>)/(1/α<sub>1</sub> + δ/λ + 1/α<sub>2</sub>) = k(t<sub>1</sub> - t<sub>2</sub>)</span>
  <span class="equation-number">(6.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">k = 1/(1/α<sub>1</sub> + δ/λ + 1/α<sub>2</sub>)</span>
  <span class="equation-number">(6.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">R = 1/k = 1/α<sub>1</sub> + δ/λ + 1/α<sub>2</sub></span>
  <span class="equation-number">(6.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">k = 1/(1/α<sub>1</sub> + Σ(δ<sub>i</sub>/λ<sub>i</sub>) + 1/α<sub>2</sub>)</span>
  <span class="equation-number">(6.24)</span>
</div>

## Nach dem Durcharbeiten dieses Kapitels sollen Studierende

- die Rolle von "Waermeleitfaehigkeit" im Kapitel erklaeren;
- "Konvektion" mit der apparativen Gestaltung biotechnologischer Produktion verbinden;
- wichtige Einflussgroessen fuer "Waermeuebergang" unterscheiden;
- die Auswahl oder Bewertung des Prozesses ueber "Waermeuebertragung" begruenden.

## Selbsttest

<section
  class="course-self-test"
  data-course-self-test
  data-locale="de"
  data-course="bioprocess-engineering"
  data-chapter="chapter-06-heat-transfer-basics"
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
  <input type="radio" name="course-test-6-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Konvektion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Waermeuebergang</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Waermeleitfaehigkeit</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Waermeuebertragung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Welcher Unterabschnitt gehoert direkt zur Lehrbuchstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>6.2. Wichtige Aehnlichkeitskriterien thermischer Prozesse</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>6.3. Waermeleitung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>6.4. Konvektiver Waermeaustausch</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>6.1. Allgemeines</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Auf welchen Begriff soll sich die ingenieurtechnische Analyse zuerst stuetzen?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Konvektion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Waermeleitfaehigkeit</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Waermeuebergang</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Waermeuebertragung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Was verbindet Prozesstheorie am deutlichsten mit der Apparategestaltung?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Waermeleitfaehigkeit</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Waermeuebertragung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Konvektion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Waermeuebergang</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Waermeleitfaehigkeit</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Konvektion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Waermeuebergang</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Waermeuebertragung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Mit welchem Thema beginnt das Kapitel in der Lehrbuchstruktur?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>6.2. Wichtige Aehnlichkeitskriterien thermischer Prozesse</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>6.3. Waermeleitung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>6.4. Konvektiver Waermeaustausch</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>6.1. Allgemeines</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Welcher Unterabschnitt gehoert direkt zur Lehrbuchstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>6.2. Wichtige Aehnlichkeitskriterien thermischer Prozesse</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>6.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>6.3. Waermeleitung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>6.4. Konvektiver Waermeaustausch</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Welches Thema schliesst die Struktur des Kapitels ab?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>6.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>6.7. Waermeuebertragung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>6.2. Wichtige Aehnlichkeitskriterien thermischer Prozesse</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>6.3. Waermeleitung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Welches Begriffspaar eignet sich fuer den Selbsttest?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Waermeuebergang / Waermeuebertragung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Waermeleitfaehigkeit / Waermeuebergang</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Waermeleitfaehigkeit / Konvektion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Konvektion / Waermeuebertragung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Was eignet sich am besten zur praktischen Begruendung der Prozessauswahl?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Waermeleitfaehigkeit</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Konvektion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Waermeuebergang</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Waermeuebertragung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Konvektion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Waermeleitfaehigkeit</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Waermeuebergang</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Waermeuebertragung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Welches Objekt wird in diesem Kapitel als Abbildung dargestellt?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-6-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Waermeleitfaehigkeit</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Waermeleitung durch eine ebene Wand</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Konvektion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-6-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Waermeuebergang</span>
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
<li>Frage 1: Richtige Antwort - C</li>
<li>Frage 2: Richtige Antwort - D</li>
<li>Frage 3: Richtige Antwort - A</li>
<li>Frage 4: Richtige Antwort - B</li>
<li>Frage 5: Richtige Antwort - C</li>
<li>Frage 6: Richtige Antwort - D</li>
<li>Frage 7: Richtige Antwort - A</li>
<li>Frage 8: Richtige Antwort - B</li>
<li>Frage 9: Richtige Antwort - C</li>
<li>Frage 10: Richtige Antwort - D</li>
<li>Frage 11: Richtige Antwort - A</li>
<li>Frage 12: Richtige Antwort - B</li>
</ol>
</details>
</section>

## Weitere Ausarbeitung

Im nächsten Durchgang kann dieses Kapitel mit Formeln, Rechenbeispielen, Apparatebildern und Links zu aktuellen biotechnologischen Produktionen ergänzt werden.
