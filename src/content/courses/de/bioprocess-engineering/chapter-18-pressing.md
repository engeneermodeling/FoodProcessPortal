---
title: "Kapitel 18. Pressen"
course: "bioprocess-engineering"
course_title: "Bioverfahrenstechnik: Prozesse und Apparate biotechnologischer Produktionen"
chapter: 18
description: "Abpressen von Fluessigkeit aus Feststoffen, Formen plastischer Stoffe, Brikettieren und Granulieren."
updated: "2026-08-23"
---

## Kapitelüberblick

Dieses Kapitel stellt die zentralen Begriffe, Gleichungen und Apparatebeispiele zum Thema vor.

## Struktur des Kapitels

- 18.1. Abpressen von Fluessigkeit aus Feststoffen
- 18.2. Formen plastischer Stoffe
- 18.3. Brikettieren und Granulieren fester Stoffe

## Vorlesungsskript

### Kapitel 18. Pressen

Pressen ist die Behandlung von Stoffen mit Druck unter Einwirkung aeusserer Kraefte. Der Stoff wird in Pressen einseitig oder raeumlich verdichtet. Pressen dient zum Auspressen von Fluessigkeit aus Feststoffen, zum Formen plastischer Stoffe, zum Verdichten, Brikettieren und Granulieren.

### 18.1. Auspressen von Fluessigkeit aus festen Stoffen

Das Auspressen trennt wie die Filtration fluessige und feste Phasen. Es wird eingesetzt, wenn Fluessigkeit aus einem Filterkuchen vollstaendiger entfernt oder Feuchte vor dem Trocknen mechanisch abgetrennt werden soll. Mit steigendem Druck verdichtet sich der Stoff, danach trennt sich die fluessige Phase ab; die Geschwindigkeit nimmt allmaehlich ab.

Beim Pressen bewegt sich die Fluessigkeit zwischen den Partikeln einer poroesen Schicht durch Kapillaren veraenderlichen Querschnitts. Der Durchfluss durch eine Kapillare wird mit dem Poiseuille-Gesetz beschrieben:

<div class="equation-block">
  <span class="equation-main">Q = Δp α d<sub>k</sub><sup>4</sup>/(32 μ l<sub>k</sub>)</span>
  <span class="equation-number">(18.1)</span>
</div>

Dabei ist Δp der Druckabfall, Pa; α der Formfaktor des Kapillarquerschnitts; d<sub>k</sub> der Kapillardurchmesser, m; μ die dynamische Viskositaet, Pa·s; l<sub>k</sub> die Kapillarlaenge, m.

Kompressionskennlinien beschreiben die Verformbarkeit der Masse unter Druck:

<div class="equation-block">
  <span class="equation-main">dp = a dε</span>
  <span class="equation-number"></span>
</div>

Die Porositaet ε haengt vom Druck p ab; daher werden aus Versuchsdaten Kompressionskurven erstellt:

<div class="equation-block">
  <span class="equation-main">ε = f(p)</span>
  <span class="equation-number"></span>
</div>

Die Kinetik des instationaeren Auspressens bei konstantem Druck wird naeherungsweise beschrieben durch:

<div class="equation-block">
  <span class="equation-main">(ε<sub>p</sub> - ε)/(ε<sub>p</sub> - ε<sub>k</sub>) = 1 - (8/π<sup>2</sup>) exp[-π<sup>2</sup>cτ/(4h<sup>2</sup>)]</span>
  <span class="equation-number">(18.2)</span>
</div>

Pressen zum Auspressen koennen periodisch oder kontinuierlich arbeiten; nach der Druckerzeugung unterscheidet man hydraulische, pneumatische und mechanische Pressen. In einer vertikalen hydraulischen Presse wird der Stoff in einen Seiherzylinder geladen, und die fluessige Fraktion tritt durch Spalte in eine Auffangwanne aus.

![Abb. 18.1. Schema einer hydraulischen Presse](/images/courses/bioprocess-engineering/chapter-18/fig-18-1.webp)
*Abb. 18.1. Schema einer hydraulischen Presse*

Ohne Verluste ist die Presskraft im Arbeitszylinder gleich der Kraft im Hydraulikzylinder:

<div class="equation-block">
  <span class="equation-main">F = p<sub>p</sub>πD<sub>p</sub><sup>2</sup>/4 = p<sub>c</sub>πD<sub>c</sub><sup>2</sup>/4</span>
  <span class="equation-number">(18.3)</span>
</div>

Der notwendige Druck im Kraftzylinder ist:

<div class="equation-block">
  <span class="equation-main">p<sub>c</sub> = p<sub>p</sub>(D<sub>p</sub>/D<sub>c</sub>)<sup>2</sup></span>
  <span class="equation-number">(18.4)</span>
</div>

Schneckenpressen sind in bio- und lebensmitteltechnischen Produktionen verbreitet, etwa zur Gewinnung von Oel, Most, Fett, Tomatensaft und anderen fluessigen Fraktionen. Bei zylindrischen Schnecken wird der Kompressionsgrad durch das Verhaeltnis der Steigungen bestimmt:

![Abb. 18.2. Schema einer Schneckenpresse](/images/courses/bioprocess-engineering/chapter-18/fig-18-2.webp)
*Abb. 18.2. Schema einer Schneckenpresse*

<div class="equation-block">
  <span class="equation-main">K = h<sub>1</sub>/h<sub>2</sub></span>
  <span class="equation-number"></span>
</div>

Der Druck im Arbeitsraum der Schnecke aendert sich exponentiell:

<div class="equation-block">
  <span class="equation-main">p<sub>k</sub> = p<sub>0</sub>e<sup>lβ</sup></span>
  <span class="equation-number">(18.5)</span>
</div>

Die Leistung G, kg/s, einer Schneckenpresse ist:

<div class="equation-block">
  <span class="equation-main">G = fw<sub>o</sub>ρφ</span>
  <span class="equation-number">(18.6)</span>
</div>

Fuer den Querschnitt der Arbeitszone der Schneckenpresse gilt:

<div class="equation-block">
  <span class="equation-main">f = π(D<sup>2</sup> - d<sup>2</sup>)/4</span>
  <span class="equation-number"></span>
</div>

Die axiale Stoffgeschwindigkeit ist:

<div class="equation-block">
  <span class="equation-main">w<sub>o</sub> = hn</span>
  <span class="equation-number">(18.7)</span>
</div>

### 18.2. Formen plastischer Stoffe

Das Formen verleiht einem Produkt eine bestimmte Gestalt ohne wesentliche Aenderung seiner Dichte. Plastische Stoffe werden durch Walzen, Runden, Ziehen, Stanzen und Extrusion durch Formoeffnungen geformt. Rheologische Eigenschaften bestimmen die Einwirkzeit der Arbeitsorgane und die Maschinenleistung.

![Abb. 18.3. Schema eines Einschneckenextruders](/images/courses/bioprocess-engineering/chapter-18/fig-18-3.webp)
*Abb. 18.3. Schema eines Einschneckenextruders*

<div class="equation-block">
  <span class="equation-main">tgφ = h/(πD)</span>
  <span class="equation-number">(18.8)</span>
</div>

Extruder formen plastische Stoffe durch Durchdruecken durch Duesenoeffnungen. In einem Schneckenextruder gelangt der Stoff in den Trichter, wird von der Schnecke durch den Zylinder zur Kammer vor der Matrize transportiert und durch Druck durch die Oeffnungen gepresst. Der Steigungswinkel haengt mit der Schneckengeometrie zusammen:

<div class="equation-block">
  <span class="equation-main">Q = Δpk/μ</span>
  <span class="equation-number">(18.9)</span>
</div>

Fuer praktische Berechnungen der volumetrischen Leistung von Formanlagen wird verwendet:

### 18.3. Brikettieren und Granulieren fester Stoffe

<div class="equation-block">
  <span class="equation-main">β = V/V<sub>c</sub></span>
  <span class="equation-number">(18.10)</span>
</div>

Brikettieren ist das Verdichten eines festen Koerpers in geschlossenem Raum zur Bildung geometrisch regelmaessiger Briketts. Die Verdichtung geht mit Zerkleinerung und relativer Verschiebung der Partikel einher. Die Volumenabnahme wird durch den Verdichtungskoeffizienten beschrieben:

<div class="equation-block">
  <span class="equation-main">ψ ln(p<sub>k</sub>/p<sub>p</sub>) = β<sub>p</sub> - β<sub>k</sub></span>
  <span class="equation-number">(18.11)</span>
</div>

Ohne Druckverluste durch Reibung wird der Verdichtungsprozess beschrieben durch:

Bei einseitigem Pressen ist die Brikettdichte in der Naehe des Stempels am groessten, deshalb ist zweiseitiges Pressen zweckmaessig. Die Festigkeit haengt von Stoffzustand, Feuchte, Waermevorbehandlung, Prozessdauer und Halten unter Druck ab.

![Abb. 18.4. Pressfolge in einer Rundlaeuferpresse](/images/courses/bioprocess-engineering/chapter-18/fig-18-4.webp)
*Abb. 18.4. Pressfolge in einer Rundlaeuferpresse*

<div class="equation-block">
  <span class="equation-main">A = ∫<sub>h<sub>k</sub></sub><sup>h<sub>p</sub></sup> Fp dh</span>
  <span class="equation-number">(18.12)</span>
</div>

Eine Rundlaeuferpresse besitzt eine horizontale Scheibe mit Matrizen und Stempeln. Waehrend einer Umdrehung laufen Fuellen, Formen, Ausstossen und Reinigen des Stempels ab. Die Pressarbeit fuer einen Stempelhub ist:

![Abb. 18.5. Schema der Granulierung trockener Ruebenpressschnitzel](/images/courses/bioprocess-engineering/chapter-18/fig-18-5.webp)
*Abb. 18.5. Schema der Granulierung trockener Ruebenpressschnitzel*

## Nach dem Durcharbeiten dieses Kapitels sollen Studierende

- die Rolle von "Druck" im Kapitel erklaeren;
- "Abpressen" mit der apparativen Gestaltung biotechnologischer Produktion verbinden;
- wichtige Einflussgroessen fuer "Formen" unterscheiden;
- die Auswahl oder Bewertung des Prozesses ueber "Granulieren" begruenden.

## Selbsttest

<section
  class="course-self-test"
  data-course-self-test
  data-locale="de"
  data-course="bioprocess-engineering"
  data-chapter="chapter-18-pressing"
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
  <input type="radio" name="course-test-18-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Abpressen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Formen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Granulieren</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>18.2. Formen plastischer Stoffe</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>18.3. Brikettieren und Granulieren fester Stoffe</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>18.1. Abpressen von Fluessigkeit aus Feststoffen</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Auf welchen Begriff soll sich die ingenieurtechnische Analyse zuerst stuetzen?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Abpressen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Formen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Granulieren</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Was verbindet Prozesstheorie am deutlichsten mit der Apparategestaltung?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Granulieren</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Abpressen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Formen</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Abpressen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Formen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Granulieren</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Mit welchem Thema beginnt das Kapitel in der Kapitelstruktur?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>18.2. Formen plastischer Stoffe</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>18.3. Brikettieren und Granulieren fester Stoffe</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>18.1. Abpressen von Fluessigkeit aus Feststoffen</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>18.2. Formen plastischer Stoffe</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>18.1. Abpressen von Fluessigkeit aus Feststoffen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>18.3. Brikettieren und Granulieren fester Stoffe</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Druck</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Welches Thema schliesst die Struktur des Kapitels ab?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>18.1. Abpressen von Fluessigkeit aus Feststoffen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>18.3. Brikettieren und Granulieren fester Stoffe</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>18.2. Formen plastischer Stoffe</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Druck</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Welches Begriffspaar eignet sich fuer den Selbsttest?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Formen / Granulieren</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Druck / Formen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Druck / Abpressen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Abpressen / Granulieren</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Was eignet sich am besten zur praktischen Begruendung der Prozessauswahl?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Abpressen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Formen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Granulieren</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Abpressen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Formen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Granulieren</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Welches Objekt wird in diesem Kapitel als Abbildung dargestellt?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-18-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Druck</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Schema einer hydraulischen Presse</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Abpressen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-18-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Formen</span>
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
