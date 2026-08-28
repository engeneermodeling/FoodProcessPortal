---
title: "Kapitel 10. Grundlagen der Stoffuebertragung"
course: "chemical-process-engineering"
course_title: "Prozess- und Apparatechnik chemischer Produktionen"
chapter: 10
description: "Molekulare und konvektive Diffusion, Stoffuebertragung, Theorien der Stoffuebertragung, Aehnlichkeitskriterien und Thermodiffusion."
updated: "2026-08-23"
---

## Kapitelüberblick

Dieses Kapitel stellt die zentralen Begriffe, Gleichungen und Apparatebeispiele zum Thema vor.

## Struktur des Kapitels

- 10.1. Allgemeines
- 10.2. Molekulare Diffusion
- 10.3. Konvektive Diffusion
- 10.4. Stoffuebertragung
- 10.5. Aehnlichkeit von Diffusionsprozessen
- 10.6. Begriff der Thermodiffusion

## Vorlesungsskript

Dieses Kapitel ist als zusammenhängende Vorlesung mit Formeln, Abbildungen und Beispielen aufgebaut.

### 10.1. Allgemeines

Stoffuebergangs- oder Diffusionsprozesse verteilen Masse zwischen Phasen und innerhalb von Phasen um, wenn ein System zum physikalisch-chemischen Gleichgewicht strebt. Die Triebkraft ist die Differenz zwischen tatsaechlicher und Gleichgewichtskonzentration.

Zu diesen Prozessen gehoeren Absorption, Rektifikation, Trocknung, Adsorption, Desorption, Ionenaustausch, Extraktion, Kristallisation, Loesen und Fluessigextraktion. In chemischen und lebensmitteltechnologischen Produktionen dienen sie der Reinigung, Konzentrierung und Abtrennung von Zielkomponenten.

Die technische Analyse betrachtet Phasengleichgewicht, Betriebsbedingungen aus Stoffbilanzen und die Kinetik der Uebertragung.

<div class="equation-block">
  <span class="equation-main">M = dm/dτ</span>
  <span class="equation-number">(10.1)</span>
</div>

Der spezifische Stoffstrom wird auf die Uebertragungsflaeche oder auf das Arbeitsvolumen bezogen:

<div class="equation-block">
  <span class="equation-main">q = M/F = dm/(F dτ)</span>
  <span class="equation-number">(10.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q<sub>V</sub> = M/V = dm/(V dτ)</span>
  <span class="equation-number">(10.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q<sub>V</sub> = dC/dτ = qf</span>
  <span class="equation-number">(10.4)</span>
</div>

Dabei ist C die Konzentration der Zielkomponente und f = F/V die spezifische Stoffuebertragungsflaeche.

### 10.2. Molekulare Diffusion

Molekulare Diffusion ist der Stofftransport infolge der zufaelligen Waermebewegung der Molekuele in Richtung geringerer Konzentration.

![Bestimmung des Konzentrationsgradienten](/images/courses/chemical-process-engineering/chapter-10/fig-10-1.webp)
*Abb. 10.1. Zur Bestimmung des Konzentrationsgradienten*

Das erste Fick'sche Gesetz fuer stationaere molekulare Diffusion lautet:

<div class="equation-block">
  <span class="equation-main">q = -D dC/dn</span>
  <span class="equation-number">(10.5)</span>
</div>

Der Diffusionskoeffizient haengt von Stoffeigenschaften, Temperatur, Druck und Konzentration ab.

<div class="equation-block">
  <span class="equation-main">D = wl</span>
  <span class="equation-number">(10.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = [4.35 · 10<sup>-4</sup>T<sup>3/2</sup> / p(V<sub>A</sub><sup>1/3</sup> + V<sub>B</sub><sup>1/3</sup>)<sup>2</sup>] √(1/M<sub>A</sub> + 1/M<sub>B</sub>)</span>
  <span class="equation-number">(10.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = D<sub>0</sub>(p<sub>0</sub>/p)(T/T<sub>0</sub>)<sup>3/2</sup></span>
  <span class="equation-number">(10.8)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = D<sub>0</sub>(T/T<sub>0</sub>)</span>
  <span class="equation-number">(10.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = D<sub>0</sub>(T/T<sub>0</sub>)<sup>2</sup></span>
  <span class="equation-number">(10.10)</span>
</div>

### 10.3. Konvektive Diffusion

In einem bewegten Medium wird ein Stoff sowohl durch Molekuele als auch mit der Hauptstroemung transportiert.

<div class="equation-block">
  <span class="equation-main">q = Cw</span>
  <span class="equation-number">(10.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = q<sub>D</sub> + q<sub>c</sub></span>
  <span class="equation-number">(10.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = -D<sub>cp</sub> dC/dn</span>
  <span class="equation-number">(10.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D<sub>t</sub> = w′l</span>
  <span class="equation-number">(10.14)</span>
</div>

### 10.4. Stoffuebertragung

Der Stoffuebergang an der Phasengrenze wird haeufig durch einen Grenzfilm und den Stoffuebergangskoeffizienten β beschrieben.

<div class="equation-block">
  <span class="equation-main">q = -D dC/dn</span>
  <span class="equation-number">(10.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = βΔC</span>
  <span class="equation-number">(10.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = β(C - C<sub>p</sub>)F</span>
  <span class="equation-number">(10.17)</span>
</div>

![Grenzfilme an der Phasengrenze](/images/courses/chemical-process-engineering/chapter-10/fig-10-2.webp)
*Abb. 10.2. Schema der Grenzfilme an der Phasengrenze*

<div class="equation-block">
  <span class="equation-main">β = D/δ</span>
  <span class="equation-number">(10.18)</span>
</div>

![Struktur einer turbulenten Stroemung](/images/courses/chemical-process-engineering/chapter-10/fig-10-3.webp)
*Abb. 10.3. Struktur einer turbulenten Stroemung: 1 - Hauptstroemung; 2 - Grenzunterschicht; 3 - viskose Unterschicht; 4 - Diffusionsunterschicht; 5 - feste Phase*

Filmtheorie, Oberflaechenerneuerung und Eindringtheorie zeigen, warum Turbulenz, Kontaktzeit und Zustand der Grenzschicht den Stoffuebergangskoeffizienten bestimmen.

<div class="equation-block">
  <span class="equation-main">β = 2√(D/(πτ))</span>
  <span class="equation-number">(10.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">β = 2√(D<sub>e</sub>/(πτ))</span>
  <span class="equation-number">(10.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">β = √(DS)</span>
  <span class="equation-number">(10.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = KΔC</span>
  <span class="equation-number">(10.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = β<sub>g</sub>(C<sub>g</sub> - C<sub>p</sub>)</span>
  <span class="equation-number">(10.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = β<sub>l</sub>(C<sub>p</sub> - C<sub>l</sub>)</span>
  <span class="equation-number">(10.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = β<sub>l</sub>(C<sub>p</sub> - C*)/m</span>
  <span class="equation-number">(10.25)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = K<sub>g</sub>ΔC<sub>g</sub> = (C<sub>g</sub> - C*)/(1/β<sub>g</sub> + m/β<sub>l</sub>)</span>
  <span class="equation-number">(10.26)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = K<sub>l</sub>ΔC<sub>l</sub> = (C* - C<sub>l</sub>)/(1/β<sub>l</sub> + 1/(mβ<sub>g</sub>))</span>
  <span class="equation-number">(10.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = ∫ qF = ∫ KΔC F</span>
  <span class="equation-number">(10.28)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = ∫ q<sub>V</sub>V = ∫ K<sub>V</sub>ΔC V</span>
  <span class="equation-number">(10.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = (Kf)SHΔC</span>
  <span class="equation-number">(10.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ΔC<sub>m</sub> = (ΔC<sub>p</sub> - ΔC<sub>k</sub>)/ln(ΔC<sub>p</sub>/ΔC<sub>k</sub>)</span>
  <span class="equation-number">(10.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = G(C<sub>p</sub> - C<sub>k</sub>)</span>
  <span class="equation-number">(10.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">H = G(C<sub>p</sub> - C<sub>k</sub>)/(KfSΔC<sub>m</sub>) = hn</span>
  <span class="equation-number">(10.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">n = ∫ dC/(C - C*)</span>
  <span class="equation-number">(10.34)</span>
</div>

### 10.5. Aehnlichkeit von Diffusionsprozessen

Aehnlichkeitskriterien erlauben die Uebertragung von Modell- und Versuchsdaten auf Industrieapparate.

<div class="equation-block">
  <span class="equation-main">Nu′ = βl/D</span>
  <span class="equation-number">(10.35)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Pr′ = ν/D</span>
  <span class="equation-number">(10.36)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu′ = ARe<sup>m</sup>Pr′<sup>n</sup></span>
  <span class="equation-number">(10.37)</span>
</div>

<div class="equation-block">
  <span class="equation-main">β = D<sub>d</sub>/δ<sub>d</sub></span>
  <span class="equation-number">(10.38)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Bi = βl/D<sub>d</sub></span>
  <span class="equation-number">(10.39)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Fo = Dτ/l<sup>2</sup></span>
  <span class="equation-number">(10.40)</span>
</div>

<div class="equation-block">
  <span class="equation-main">τ = l<sup>2</sup>/D<sub>d</sub></span>
  <span class="equation-number">(10.41)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Pe′ = wl/D</span>
  <span class="equation-number">(10.42)</span>
</div>

Pe′ = RePr′ verbindet konvektiven Stofftransport mit Hydrodynamik und Diffusionseigenschaften.

### 10.6. Begriff der Thermodiffusion

Thermodiffusion entsteht, wenn neben dem Konzentrationsgradienten auch Temperatur- und Druckgradienten den Stofftransport beeinflussen.

<div class="equation-block">
  <span class="equation-main">q = -D(∂C/∂n + K<sub>t</sub>/T · ∂T/∂n + K<sub>b</sub>/p · ∂p/∂n)</span>
  <span class="equation-number">(10.43)</span>
</div>

## Nach dem Durcharbeiten dieses Kapitels sollen Studierende

- die Rolle von "Diffusion" im Kapitel erklaeren;
- "Stoffuebergangskoeffizient" mit der apparativen Gestaltung chemischer Produktion verbinden;
- wichtige Einflussgroessen fuer "Stoffuebertragung" unterscheiden;
- die Auswahl oder Bewertung des Prozesses ueber "Triebkraft" begruenden.

## Selbsttest

<section
  class="course-self-test"
  data-course-self-test
  data-locale="de"
  data-course="chemical-process-engineering"
  data-chapter="chapter-10-mass-transfer-basics"
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
  <input type="radio" name="course-test-10-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Stoffuebergangskoeffizient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Stoffuebertragung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Triebkraft</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>10.2. Molekulare Diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>10.3. Konvektive Diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>10.4. Stoffuebertragung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>10.1. Allgemeines</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Auf welchen Begriff soll sich die ingenieurtechnische Analyse zuerst stuetzen?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Stoffuebergangskoeffizient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Stoffuebertragung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Triebkraft</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Was verbindet Prozesstheorie am deutlichsten mit der Apparategestaltung?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Triebkraft</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Stoffuebergangskoeffizient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Stoffuebertragung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Stoffuebergangskoeffizient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Stoffuebertragung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Triebkraft</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Mit welchem Thema beginnt das Kapitel in der Kapitelstruktur?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>10.2. Molekulare Diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>10.3. Konvektive Diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>10.4. Stoffuebertragung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>10.1. Allgemeines</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>10.2. Molekulare Diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>10.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>10.3. Konvektive Diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>10.4. Stoffuebertragung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Welches Thema schliesst die Struktur des Kapitels ab?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>10.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>10.6. Begriff der Thermodiffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>10.2. Molekulare Diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>10.3. Konvektive Diffusion</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Welches Begriffspaar eignet sich fuer den Selbsttest?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Stoffuebertragung / Triebkraft</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Diffusion / Stoffuebertragung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Diffusion / Stoffuebergangskoeffizient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Stoffuebergangskoeffizient / Triebkraft</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Was eignet sich am besten zur praktischen Begruendung der Prozessauswahl?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Stoffuebergangskoeffizient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Stoffuebertragung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Triebkraft</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Stoffuebergangskoeffizient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Stoffuebertragung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Triebkraft</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Welches Objekt wird in diesem Kapitel als Abbildung dargestellt?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-10-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Diffusion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Konzentrationsgradient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Stoffuebergangskoeffizient</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-10-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Stoffuebertragung</span>
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

