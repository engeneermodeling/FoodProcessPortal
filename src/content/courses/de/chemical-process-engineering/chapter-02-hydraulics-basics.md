---
title: "Kapitel 2. Grundlagen der Hydraulik"
course: "chemical-process-engineering"
course_title: "Prozesse und Apparate der chemischen Produktion"
chapter: 2
description: "Hydrostatik, Hydrodynamik, Bernoulli-Gleichung, Stroemungsregime, Pumpen und Gasfoerdermaschinen."
updated: "2026-08-27"
---

## Kapitelüberblick

Dieses Kapitel stellt die zentralen Begriffe, Gleichungen und Apparatebeispiele zum Thema vor.

## Struktur des Kapitels

- 2.1. Hydrostatik
- 2.2. Hydrodynamik
- 2.3. Pumpen und Gasfoerdermaschinen

## Vorlesungsskript

### 2.1. Hydrostatik

Die Hydraulik beschreibt Gleichgewicht und Bewegung von Fluessigkeiten und Gasen. In Apparaten der chemischen Produktion wird sie fuer Rohrleitungen, Behaelter, Reaktoren, Waermeuebertrager, Pumpen, Verdichter und Zufuehrsysteme benoetigt. Die Fluessigkeit wird als kontinuierliches Medium betrachtet; der Druck in einem Punkt wird in alle Richtungen uebertragen.

Fuer ein elementares Fluessigkeitselement gilt entlang der x-Achse:

<div class="equation-block">
  <span class="equation-main">dP<sub>1</sub> - dP<sub>2</sub> + dG<sub>x</sub> = 0</span>
  <span class="equation-number">(2.1)</span>
</div>

Nach Darstellung der Druckkraefte ueber die Flaechen:

<div class="equation-block">
  <span class="equation-main">p<sub>1</sub>dy dz - p<sub>2</sub>dy dz + ρ X dx dy dz = 0</span>
  <span class="equation-number">(2.2)</span>
</div>

Im Grenzuebergang erhaelt man die Euler-Gleichgewichtsbedingungen:

<div class="equation-block">
  <span class="equation-main">ρ X - ∂p/∂x = 0;<br />ρ Y - ∂p/∂y = 0;<br />ρ Z - ∂p/∂z = 0</span>
  <span class="equation-number">(2.3)</span>
</div>

![Abb. 2.1. Herleitung der Euler-Gleichgewichtsbedingungen](/images/courses/chemical-process-engineering/chapter-02/fig-2-1.webp)

Das totale Druckdifferential lautet:

<div class="equation-block">
  <span class="equation-main">dp = ρ(Xdx + Ydy + Zdz)</span>
  <span class="equation-number">(2.4)</span>
</div>

Fuer eine Flaeche gleichen Drucks ist p = const und dp = 0:

<div class="equation-block">
  <span class="equation-main">Xdx + Ydy + Zdz = 0</span>
  <span class="equation-number">(2.5)</span>
</div>

Wirkt nur die Schwerkraft, folgt die Grundgleichung der Hydrostatik:

<div class="equation-block">
  <span class="equation-main">z + p/(ρ g) = const</span>
  <span class="equation-number">(2.6)</span>
</div>

Hydrostatische Hoehe:

<div class="equation-block">
  <span class="equation-main">H<sub>s</sub> = z + p/(ρ g)</span>
  <span class="equation-number">(2.7)</span>
</div>

Fuer zwei Punkte derselben ruhenden Fluessigkeit:

<div class="equation-block">
  <span class="equation-main">z<sub>1</sub> + p<sub>1</sub>/(ρ g) = z<sub>2</sub> + p<sub>2</sub>/(ρ g)</span>
  <span class="equation-number">(2.8)</span>
</div>

![Abb. 2.2. Grundgleichung der Hydrostatik](/images/courses/chemical-process-engineering/chapter-02/fig-2-2.webp)

Daraus folgt das Pascal-Gesetz: ein aeusserer Druck wird in einer Fluessigkeit gleichmaessig in alle Richtungen uebertragen. Absoluter Druck in der Tiefe h:

<div class="equation-block">
  <span class="equation-main">p = p<sub>0</sub> + ρ g h</span>
  <span class="equation-number">(2.9)</span>
</div>

![Abb. 2.3. Schema zum Pascal-Gesetz](/images/courses/chemical-process-engineering/chapter-02/fig-2-3.webp)

Zur Druckmessung verwendet man Fluessigkeitsmanometer, Vakuummeter und Federdruckmesser. In chemischen Anlagen ist die Druckkontrolle besonders wichtig in Sterilisatoren, Fermentern, Filtern und Sterilluftleitungen.

![Abb. 2.4. Fluessigkeitsmanometer](/images/courses/chemical-process-engineering/chapter-02/fig-2-4.webp)

### 2.2. Hydrodynamik

Die Hydrodynamik untersucht die Bewegung von Fluessigkeiten. Eine Stroemung ist stationaer, wenn Geschwindigkeit und Druck in einem festen Punkt zeitlich unveraendert bleiben; sie ist instationaer, wenn sie von der Zeit abhaengen. Der Volumenstrom Q ist mit mittlerer Geschwindigkeit w und Querschnitt F durch Q = wF verbunden.

Kontinuitaetsgleichung fuer inkompressible Fluessigkeit:

<div class="equation-block">
  <span class="equation-main">Q = w<sub>1</sub>F<sub>1</sub> = w<sub>2</sub>F<sub>2</sub> = wF = const</span>
  <span class="equation-number">(2.10)</span>
</div>

Fuer kompressible Medien bleibt der Massenstrom konstant:

<div class="equation-block">
  <span class="equation-main">M = ρ<sub>1</sub>w<sub>1</sub>F<sub>1</sub> = ρ<sub>2</sub>w<sub>2</sub>F<sub>2</sub> = const</span>
  <span class="equation-number">(2.11)</span>
</div>

Hydraulischer Radius:

<div class="equation-block">
  <span class="equation-main">R = F/Π</span>
  <span class="equation-number">(2.12)</span>
</div>

Aequivalenter Durchmesser fuer nichtkreisfoermige Kanaele:

<div class="equation-block">
  <span class="equation-main">d<sub>eq</sub> = 4R = 4F/Π</span>
  <span class="equation-number">(2.13)</span>
</div>

Euler-Gleichungen fuer ideale Fluessigkeit bezogen auf die Masseneinheit:

<div class="equation-block">
  <span class="equation-main">X - (1/ρ)∂p/∂x = 0;<br />Y - (1/ρ)∂p/∂y = 0;<br />Z - (1/ρ)∂p/∂z = 0</span>
  <span class="equation-number">(2.14)</span>
</div>

Mit Beschleunigung:

<div class="equation-block">
  <span class="equation-main">X - (1/ρ)∂p/∂x = dw<sub>x</sub>/d τ;<br />Y - (1/ρ)∂p/∂y = dw<sub>y</sub>/d τ;<br />Z - (1/ρ)∂p/∂z = dw<sub>z</sub>/d τ</span>
  <span class="equation-number">(2.15)</span>
</div>

Die Gesamtbeschleunigung besteht aus lokaler und konvektiver Komponente:

<div class="equation-block">
  <span class="equation-main">dw<sub>x</sub>/d τ = ∂w<sub>x</sub>/∂τ + w<sub>x</sub>∂w<sub>x</sub>/∂x + w<sub>y</sub>∂w<sub>x</sub>/∂y + w<sub>z</sub>∂w<sub>x</sub>/∂z;<br />dw<sub>y</sub>/d τ = ∂w<sub>y</sub>/∂τ + w<sub>x</sub>∂w<sub>y</sub>/∂x + w<sub>y</sub>∂w<sub>y</sub>/∂y + w<sub>z</sub>∂w<sub>y</sub>/∂z;<br />dw<sub>z</sub>/d τ = ∂w<sub>z</sub>/∂τ + w<sub>x</sub>∂w<sub>z</sub>/∂x + w<sub>y</sub>∂w<sub>z</sub>/∂y + w<sub>z</sub>∂w<sub>z</sub>/∂z</span>
  <span class="equation-number">(2.16)</span>
</div>

Bernoulli-Gleichung fuer einen Elementarstrom idealer Fluessigkeit:

<div class="equation-block">
  <span class="equation-main">z<sub>1</sub> + p<sub>1</sub>/(ρ g) + w<sub>1</sub><sup>2</sup>/(2g) = z<sub>2</sub> + p<sub>2</sub>/(ρ g) + w<sub>2</sub><sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.17)</span>
</div>

Fuer reale Fluessigkeiten kommen Verluste hinzu:

<div class="equation-block">
  <span class="equation-main">z<sub>1</sub> + p<sub>1</sub>/(ρ g) + w<sub>1</sub><sup>2</sup>/(2g) = z<sub>2</sub> + p<sub>2</sub>/(ρ g) + w<sub>2</sub><sup>2</sup>/(2g) + h<sub>loss</sub></span>
  <span class="equation-number">(2.18)</span>
</div>

![Abb. 2.5. Herleitung der Bernoulli-Gleichung](/images/courses/chemical-process-engineering/chapter-02/fig-2-5.webp)

Ausstroemgeschwindigkeit aus einer Oeffnung:

<div class="equation-block">
  <span class="equation-main">w = √(2gH)</span>
  <span class="equation-number">(2.19)</span>
</div>

Bei Druckunterschied ueber den freien Oberflaechen:

<div class="equation-block">
  <span class="equation-main">w = √(2g(H + (p<sub>1</sub> - p<sub>2</sub>)/(ρ g)))</span>
  <span class="equation-number">(2.19a)</span>
</div>

Tatsaechlicher Volumenstrom durch eine Oeffnung:

<div class="equation-block">
  <span class="equation-main">Q = F<sub>j</sub>w = ε φ F<sub>0</sub>√(2gH) = α F<sub>0</sub>√(2gH)</span>
  <span class="equation-number">(2.20)</span>
</div>

Das Stroemungsregime wird durch die Reynolds-Zahl Re = wd/ν bestimmt. Bei kleinen Werten ist die Stroemung laminar, bei grossen turbulent.

![Abb. 2.7. Reynolds-Versuchsaufbau](/images/courses/chemical-process-engineering/chapter-02/fig-2-7.webp)

Bei laminarer Rohrstroemung ist das Geschwindigkeitsprofil parabolisch:

<div class="equation-block">
  <span class="equation-main">w<sub>r</sub> = Δ p(R<sup>2</sup> - r<sup>2</sup>)/(4μ l)</span>
  <span class="equation-number">(2.21)</span>
</div>

Maximale Geschwindigkeit auf der Rohrachse:

<div class="equation-block">
  <span class="equation-main">w<sub>max</sub> = Δ p R<sup>2</sup>/(4μ l)</span>
  <span class="equation-number">(2.21a)</span>
</div>

Poiseuille-Gesetz fuer den Volumenstrom:

<div class="equation-block">
  <span class="equation-main">Q = pi Δ p d<sup>4</sup>/(128μ l)</span>
  <span class="equation-number">(2.22)</span>
</div>

Mittlere Geschwindigkeit:

<div class="equation-block">
  <span class="equation-main">w = Q/(pi R<sup>2</sup>) = Δ p R<sup>2</sup>/(8μ l) = Δ p d<sup>2</sup>/(32μ l)</span>
  <span class="equation-number">(2.23)</span>
</div>

![Abb. 2.8. Formeln von Stokes und Poiseuille](/images/courses/chemical-process-engineering/chapter-02/fig-2-8.webp)

Gesamtverlusthoehe:

<div class="equation-block">
  <span class="equation-main">h<sub>loss</sub> = h<sub>fr</sub> + h<sub>loc</sub></span>
  <span class="equation-number">(2.24)</span>
</div>

Reibungsverlust:

<div class="equation-block">
  <span class="equation-main">h<sub>fr</sub> = λ(l/d) w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.25)</span>
</div>

Druckverlust:

<div class="equation-block">
  <span class="equation-main">Δ p<sub>fr</sub> = λ(l/d) ρ w<sup>2</sup>/2</span>
  <span class="equation-number">(2.25a)</span>
</div>

Blasius-Formel:

<div class="equation-block">
  <span class="equation-main">λ = 0.3164 Re<sup>-0.25</sup></span>
  <span class="equation-number">(2.26)</span>
</div>

Fuer raue Rohre:

<div class="equation-block">
  <span class="equation-main">λ = 0.11(Δ̄ + 68/Re)<sup>0.25</sup></span>
  <span class="equation-number">(2.27)</span>
</div>

Im voll rauen Bereich:

<div class="equation-block">
  <span class="equation-main">λ = 0.11 Δ̄<sup>0.25</sup></span>
  <span class="equation-number">(2.28)</span>
</div>

Oertliche Widerstaende entstehen an Einlaeufen, Auslaeufen, Boegen, Ventilen, Verengungen und Erweiterungen:

<div class="equation-block">
  <span class="equation-main">h<sub>loc</sub> = ξ w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δ p<sub>loc</sub> = ξ ρ w<sup>2</sup>/2</span>
  <span class="equation-number">(2.29a)</span>
</div>

Mehrere oertliche Widerstaende:

<div class="equation-block">
  <span class="equation-main">h<sub>loc</sub> = (Σξ) w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.30)</span>
</div>

Gesamtverlust in der Rohrleitung:

<div class="equation-block">
  <span class="equation-main">h<sub>loss</sub> = (λ l/d + Σξ) w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δ p<sub>loss</sub> = (λ l/d + Σξ) ρ w<sup>2</sup>/2</span>
  <span class="equation-number">(2.31a)</span>
</div>

Darstellung ueber aequivalente Laenge:

<div class="equation-block">
  <span class="equation-main">h<sub>loss</sub> = λ((l + l<sub>eq</sub>)/d) w<sup>2</sup>/(2g)</span>
  <span class="equation-number">(2.32)</span>
</div>

### 2.3. Pumpen und Gasfoerdermaschinen

Fluessigkeiten werden mit Pumpen gefoerdert, Gase mit Ventilatoren, Geblaesen und Verdichtern. Wichtige Pumpengroessen sind Foerderstrom Q, Foerderhoehe H, Leistung N, Drehzahl, Wirkungsgrad und zulaessige Saughoehe.

Gesamtwirkungsgrad:

<div class="equation-block">
  <span class="equation-main">η = η<sub>vol</sub> η<sub>h</sub> η<sub>m</sub></span>
  <span class="equation-number">(2.33)</span>
</div>

Volumetrischer Wirkungsgrad:

<div class="equation-block">
  <span class="equation-main">η<sub>vol</sub> = Q/(Q + q)</span>
  <span class="equation-number">(2.34)</span>
</div>

Hydraulischer Wirkungsgrad:

<div class="equation-block">
  <span class="equation-main">η<sub>h</sub> = H/(H + h)</span>
  <span class="equation-number">(2.35)</span>
</div>

Wellenleistung:

<div class="equation-block">
  <span class="equation-main">N = QH ρ g/(1000 η)</span>
  <span class="equation-number">(2.36)</span>
</div>

Saugleitung:

<div class="equation-block">
  <span class="equation-main">(p<sub>atm</sub> - p<sub>s</sub>)/(ρ g) = z<sub>1</sub> + h<sub>1</sub> + w<sub>s</sub><sup>2</sup>/(2g) = p<sub>vac</sub>/(ρ g)</span>
  <span class="equation-number">(2.37)</span>
</div>

Druckleitung:

<div class="equation-block">
  <span class="equation-main">p<sub>d</sub>/(ρ g) = z<sub>2</sub> + h<sub>2</sub> + p<sub>2</sub>/(ρ g)</span>
  <span class="equation-number">(2.38)</span>
</div>

Erforderliche Foerderhoehe:

<div class="equation-block">
  <span class="equation-main">H<sub>req</sub> = z<sub>1</sub> + z<sub>2</sub> + (p<sub>2</sub> - p<sub>1</sub>)/(ρ g) + h<sub>1</sub> + h<sub>2</sub></span>
  <span class="equation-number">(2.39)</span>
</div>

Die Rohrleitungskennlinie zeigt, wie die erforderliche Foerderhoehe mit dem Volumenstrom steigt. Der Betriebspunkt ergibt sich aus dem Schnittpunkt von Pumpen- und Rohrleitungskennlinie.

## Nach dem Durcharbeiten dieses Kapitels sollen Studierende

- die Rolle von "hydrostatischer Druck" im Kapitel erklaeren;
- "Bernoulli-Gleichung" mit der apparativen Gestaltung der chemischen Produktion verbinden;
- wichtige Einflussgroessen fuer "Reynolds-Zahl" unterscheiden;
- die Auswahl oder Bewertung des Prozesses ueber "Pumpe" begruenden.

## Selbsttest

<section
  class="course-self-test"
  data-course-self-test
  data-locale="de"
  data-course="chemical-process-engineering"
  data-chapter="chapter-02-hydraulics-basics"
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
  <input type="radio" name="course-test-2-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Bernoulli-Gleichung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Reynolds-Zahl</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>hydrostatischer Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Pumpe</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>2.2. Hydrodynamik</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>2.3. Pumpen und Gasfoerdermaschinen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>hydrostatischer Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>2.1. Hydrostatik</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Auf welchen Begriff soll sich die ingenieurtechnische Analyse zuerst stuetzen?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Bernoulli-Gleichung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>hydrostatischer Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Reynolds-Zahl</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Pumpe</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Was verbindet Prozesstheorie am deutlichsten mit der Apparategestaltung?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>hydrostatischer Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Pumpe</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Bernoulli-Gleichung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Reynolds-Zahl</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>hydrostatischer Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Bernoulli-Gleichung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Reynolds-Zahl</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Pumpe</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Mit welchem Thema beginnt das Kapitel in der Kapitelstruktur?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>2.2. Hydrodynamik</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>2.3. Pumpen und Gasfoerdermaschinen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>hydrostatischer Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>2.1. Hydrostatik</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>2.2. Hydrodynamik</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>2.1. Hydrostatik</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>2.3. Pumpen und Gasfoerdermaschinen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>hydrostatischer Druck</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Welches Thema schliesst die Struktur des Kapitels ab?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>2.1. Hydrostatik</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>2.3. Pumpen und Gasfoerdermaschinen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>2.2. Hydrodynamik</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>hydrostatischer Druck</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Welches Begriffspaar eignet sich fuer den Selbsttest?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Reynolds-Zahl / Pumpe</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>hydrostatischer Druck / Reynolds-Zahl</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>hydrostatischer Druck / Bernoulli-Gleichung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Bernoulli-Gleichung / Pumpe</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Was eignet sich am besten zur praktischen Begruendung der Prozessauswahl?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>hydrostatischer Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Bernoulli-Gleichung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Reynolds-Zahl</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Pumpe</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Bernoulli-Gleichung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>hydrostatischer Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Reynolds-Zahl</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Pumpe</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Welches Objekt wird in diesem Kapitel als Abbildung dargestellt?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-2-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>hydrostatischer Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Fluessigkeitselement zur Herleitung der Euler-Gleichgewichte</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Bernoulli-Gleichung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-2-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Reynolds-Zahl</span>
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
