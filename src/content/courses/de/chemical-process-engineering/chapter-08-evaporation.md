---
title: "Kapitel 8. Eindampfen"
course: "chemical-process-engineering"
course_title: "Prozess- und Apparatechnik chemischer Produktionen"
chapter: 8
description: "Ein- und Mehrkoerperverdampfer, Waermepumpen, Apparatebauarten und Berechnung."
updated: "2026-08-23"
---

## Kapitelüberblick

Dieses Kapitel stellt die zentralen Begriffe, Gleichungen und Apparatebeispiele zum Thema vor.

## Struktur des Kapitels

- 8.1. Allgemeines
- 8.2. Eindampfen in einer einteiligen periodischen Anlage
- 8.3. Mehrkoerperverdampfer
- 8.4. Verdampferanlagen mit Waermepumpen
- 8.5. Bauarten von Verdampfern
- 8.6. Berechnung eines Mehrkoerperverdampfers

## Vorlesungsskript

### 8.1. Allgemeines

Verdampfen ist das Konzentrieren von Loesungen nichtfluechtiger Stoffe durch teilweises Entfernen eines fluechtigen Loesungsmittels bei Siedetemperatur. Anders als die Oberflaechenverdunstung findet das Sieden im ganzen Fluessigkeitsvolumen statt.

In chemischen, Lebensmittel- und pharmazeutischen Produktionen werden haeufig waessrige Loesungen konzentriert. Primaerer Heizdampf liefert Waerme; Sekundaerdampf sollte nach Moeglichkeit wiederverwendet werden. Thermolabile Produkte verdampft man im Vakuum, um die Siedetemperatur zu senken.

### 8.2. Verdampfen in einer diskontinuierlichen Einkoerperanlage

In einer Einkoerperanlage tritt die Ausgangsloesung in den Apparat ein; Konzentrat, Sekundaerdampf und Kondensat des Heizdampfs treten aus. Die Stoffbilanz wird fuer Gesamtloesung und Trockensubstanz geschrieben.

![Abb. 8.1. Schema eines Verdampfers](/images/courses/chemical-process-engineering/chapter-08/fig-8-1.webp)
*Abb. 8.1. Schema eines Verdampfers*

<div class="equation-block">
  <span class="equation-main">S<sub>in</sub> = S<sub>out</sub> + W</span>
  <span class="equation-number">(8.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">S<sub>in</sub>B<sub>in</sub> = S<sub>out</sub>B<sub>out</sub></span>
  <span class="equation-number">(8.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = [S<sub>out</sub>c<sub>out</sub>t<sub>out</sub> + Wi + Dθc<sub>c</sub> + Q<sub>loss</sub> - S<sub>in</sub>c<sub>in</sub>t<sub>in</sub>]/i″</span>
  <span class="equation-number">(8.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q = Wr</span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">D = [S<sub>in</sub>c(t<sub>boil</sub> - t<sub>in</sub>) + Wr - S<sub>out</sub>c<sub>out</sub>(t<sub>out</sub> - t<sub>boil</sub>) + Q<sub>loss</sub>]/(i″ - θc<sub>c</sub>)</span>
  <span class="equation-number">(8.4)</span>
</div>

Diskontinuierliches Verdampfen im Vakuum senkt die Siedetemperatur und erhoeht die nutzbare Temperaturdifferenz zwischen Heizdampf und siedender Loesung.

![Abb. 8.2. Einkoerper-Verdampferanlage](/images/courses/chemical-process-engineering/chapter-08/fig-8-2.webp)
*Abb. 8.2. Einkoerper-Verdampferanlage*

### 8.3. Mehrkoerper-Verdampferanlagen

Eine Mehrkoerperanlage nutzt Sekundaerdampf des vorherigen Koerpers als Heizdampf des naechsten. Dieselbe Waerme wird mehrfach verwendet, und der Primaerdampfverbrauch sinkt.

![Abb. 8.3. Mehrkoerper-Verdampferanlage mit Kondensator](/images/courses/chemical-process-engineering/chapter-08/fig-8-3.webp)
*Abb. 8.3. Mehrkoerper-Verdampferanlage mit Kondensator*

<div class="equation-block">
  <span class="equation-main">θ ≈ T - 2...3</span>
  <span class="equation-number">(8.5)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = S<sub>in</sub>(1 - B<sub>in</sub>/B<sub>out</sub>)</span>
  <span class="equation-number">(8.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D ≈ W/n</span>
  <span class="equation-number">(8.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W<sub>n</sub> = α<sub>n</sub>D<sub>n-1</sub></span>
  <span class="equation-number">(8.8)</span>
</div>

Die nutzbare Temperaturdifferenz ist kleiner als die gesamte Differenz, weil Temperaturverluste auftreten: physikalisch-chemische Siedepunktserhoehung, hydrostatische Depression und Druckverluste in Dampfleitungen.

<div class="equation-block">
  <span class="equation-main">Δt<sub>use,n</sub> = T<sub>n</sub> - t<sub>n</sub></span>
  <span class="equation-number">(8.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ΣΔt<sub>use</sub> = Δt<sub>1</sub> + Δt<sub>2</sub> + ... + Δt<sub>n</sub></span>
  <span class="equation-number">(8.10)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ΣΔt<sub>loss</sub> = ΣΔ′ + ΣΔ″ + ΣΔ‴</span>
  <span class="equation-number">(8.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δ″ = t<sub>boil</sub>(p + Δp) - t<sub>boil</sub>(p)</span>
  <span class="equation-number">(8.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">t<sub>n</sub> = T<sub>n</sub> + Δ′<sub>n</sub> + Δ″<sub>n</sub></span>
  <span class="equation-number">(8.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δt<sub>use</sub> = Δt<sub>total</sub> - ΣΔt<sub>loss</sub></span>
  <span class="equation-number">(8.14)</span>
</div>

<div class="equation-block">
  <span class="equation-main">F<sub>n</sub> = Q<sub>n</sub>/(k<sub>n</sub>Δt<sub>n</sub>)</span>
  <span class="equation-number">(8.15)</span>
</div>

### 8.4. Verdampferanlagen mit Waermepumpen

Verdampfer mit Waermepumpen verbessern die Energieeffizienz. Mechanisch verdichtet ein Turbokompressor den Sekundaerdampf; beim Injektor hebt ein Frischdampfstrahl seine Parameter.

![Abb. 8.4. Einkoerper-Verdampferanlage mit Turbokompressor](/images/courses/chemical-process-engineering/chapter-08/fig-8-4.webp)
*Abb. 8.4. Einkoerper-Verdampferanlage mit Turbokompressor*

![Abb. 8.5. Verdampfer mit Injektor-Waermepumpe](/images/courses/chemical-process-engineering/chapter-08/fig-8-5.webp)
*Abb. 8.5. Verdampfer mit Injektor-Waermepumpe*

### 8.5. Konstruktionen von Verdampfern

Verdampfer werden nach Umlaufart, Durchgangszahl, Lage und Konfiguration der Heizflaeche eingeteilt. Fuer waermeempfindliche oder viskose Medien sind Verweilzeit, Umlaufintensitaet und Reinigbarkeit besonders wichtig.

![Abb. 8.6. Verdampfer mit zentralem Umlaufrohr](/images/courses/chemical-process-engineering/chapter-08/fig-8-6.webp)
*Abb. 8.6. Verdampfer mit zentralem Umlaufrohr*

![Abb. 8.7. Verdampfer mit externen Umlaufrohren](/images/courses/chemical-process-engineering/chapter-08/fig-8-7.webp)
*Abb. 8.7. Verdampfer mit externen Umlaufrohren*

![Abb. 8.8. Verdampfer mit ausgelagerter Heizflaeche](/images/courses/chemical-process-engineering/chapter-08/fig-8-8.webp)
*Abb. 8.8. Verdampfer mit ausgelagerter Heizflaeche*

![Abb. 8.9. Verdampfer mit einmaligem Fluessigkeitsdurchgang](/images/courses/chemical-process-engineering/chapter-08/fig-8-9.webp)
*Abb. 8.9. Verdampfer mit einmaligem Fluessigkeitsdurchgang*

![Abb. 8.10. Verdampfer mit Zwangsumlauf](/images/courses/chemical-process-engineering/chapter-08/fig-8-10.webp)
*Abb. 8.10. Verdampfer mit Zwangsumlauf*

![Abb. 8.11. Fallfilmverdampfer](/images/courses/chemical-process-engineering/chapter-08/fig-8-11.webp)
*Abb. 8.11. Fallfilmverdampfer*

![Abb. 8.12. Rotor-Filmverdampfer](/images/courses/chemical-process-engineering/chapter-08/fig-8-12.webp)
*Abb. 8.12. Rotor-Filmverdampfer*

### 8.6. Berechnung einer Mehrkoerper-Verdampferanlage

Die Berechnung einer Mehrkoerperanlage umfasst verdampfte Wassermengen, Waermebelastungen, Waermeuebergangskoeffizienten und Heizflaechen jedes Koerpers.

<div class="equation-block">
  <span class="equation-main">W = S(B<sub>out</sub> - B<sub>in</sub>)/B<sub>out</sub></span>
  <span class="equation-number">(8.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = nW<sub>last</sub> + E<sub>1</sub> + 2E<sub>2</sub> + ... + (n - 1)E<sub>n-1</sub></span>
  <span class="equation-number">(8.17)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W<sub>last</sub> = [W - E<sub>1</sub> - 2E<sub>2</sub> - ... - (n - 1)E<sub>n-1</sub>]/n</span>
  <span class="equation-number">(8.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W<sub>i</sub> = W<sub>last</sub> + E<sub>i</sub> + E<sub>i+1</sub> + ... + E<sub>n-1</sub></span>
  <span class="equation-number">(8.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">R<sub>1</sub> = 1/α<sub>cond</sub></span>
  <span class="equation-number">(8.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">α<sub>boil</sub> = A q<sup>m</sup></span>
  <span class="equation-number">(8.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">U = f(Δt)</span>
  <span class="equation-number">(8.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">t<sub>w</sub> = t<sub>steam</sub> - q/α<sub>cond</sub></span>
  <span class="equation-number">(8.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">t<sub>film</sub> = 0.5(t<sub>w</sub> + t<sub>boil</sub>)</span>
  <span class="equation-number">(8.24)</span>
</div>

## Nach dem Durcharbeiten dieses Kapitels sollen Studierende

- die Rolle von "Brudendampf" im Kapitel erklaeren;
- "Koerper" mit der apparativen Gestaltung chemischer Produktion verbinden;
- wichtige Einflussgroessen fuer "Konzentrieren" unterscheiden;
- die Auswahl oder Bewertung des Prozesses ueber "Waermebilanz" begruenden.

## Selbsttest

<section
  class="course-self-test"
  data-course-self-test
  data-locale="de"
  data-course="chemical-process-engineering"
  data-chapter="chapter-08-evaporation"
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
  <input type="radio" name="course-test-8-0" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Brudendampf</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Koerper</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Konzentrieren</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Waermebilanz</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>8.2. Eindampfen in einer einteiligen periodischen Anlage</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-1" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>8.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>8.3. Mehrkoerperverdampfer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>8.4. Verdampferanlagen mit Waermepumpen</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Auf welchen Begriff soll sich die ingenieurtechnische Analyse zuerst stuetzen?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Brudendampf</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Konzentrieren</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-2" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Koerper</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Waermebilanz</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Was verbindet Prozesstheorie am deutlichsten mit der Apparategestaltung?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Brudendampf</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Koerper</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Konzentrieren</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-3" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Waermebilanz</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-4" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Konzentrieren</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Brudendampf</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Koerper</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Waermebilanz</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Mit welchem Thema beginnt das Kapitel in der Kapitelstruktur?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>8.2. Eindampfen in einer einteiligen periodischen Anlage</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-5" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>8.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>8.3. Mehrkoerperverdampfer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>8.4. Verdampferanlagen mit Waermepumpen</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>8.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>8.3. Mehrkoerperverdampfer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-6" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>8.2. Eindampfen in einer einteiligen periodischen Anlage</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>8.4. Verdampferanlagen mit Waermepumpen</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Welches Thema schliesst die Struktur des Kapitels ab?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>8.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>8.2. Eindampfen in einer einteiligen periodischen Anlage</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>8.3. Mehrkoerperverdampfer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-7" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>8.6. Berechnung eines Mehrkoerperverdampfers</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Welches Begriffspaar eignet sich fuer den Selbsttest?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-8" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Brudendampf / Koerper</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Konzentrieren / Waermebilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Brudendampf / Konzentrieren</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Koerper / Waermebilanz</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Was eignet sich am besten zur praktischen Begruendung der Prozessauswahl?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Brudendampf</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-9" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Waermebilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Koerper</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Konzentrieren</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Brudendampf</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Konzentrieren</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-10" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Koerper</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Waermebilanz</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Welches Objekt wird in diesem Kapitel als Abbildung dargestellt?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-8-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Brudendampf</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Koerper</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Konzentrieren</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-8-11" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Schema eines Verdampfers</span>
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
<li>Frage 1: Richtige Antwort - A</li>
<li>Frage 2: Richtige Antwort - B</li>
<li>Frage 3: Richtige Antwort - C</li>
<li>Frage 4: Richtige Antwort - D</li>
<li>Frage 5: Richtige Antwort - A</li>
<li>Frage 6: Richtige Antwort - B</li>
<li>Frage 7: Richtige Antwort - C</li>
<li>Frage 8: Richtige Antwort - D</li>
<li>Frage 9: Richtige Antwort - A</li>
<li>Frage 10: Richtige Antwort - B</li>
<li>Frage 11: Richtige Antwort - C</li>
<li>Frage 12: Richtige Antwort - D</li>
</ol>
</details>
</section>

