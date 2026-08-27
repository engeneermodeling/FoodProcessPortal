---
title: "Kapitel 1. Klassifikation von Prozessen und Apparaten"
course: "chemical-process-engineering"
course_title: "Prozesse und Apparate der chemischen Produktion"
chapter: 1
description: "Hauptgruppen chemischer Prozesse, kinetische Beziehungen und Beispiele technischer Apparate."
updated: "2026-08-27"
---

## Quellen und Umfang

Diese Pilotvorlesung folgt der Struktur der Vorlesungsnotizen "Course of Lectures_1" zu Prozessen und Apparaten der chemischen Produktion. Apparatebeispiele und Medien stammen aus dem virtuellen Lehrbuch `MAHP_BOOK`. Sichtbare Kursmaterialien verwenden neutrale Abbildungen sowie ukrainische oder englische Medien; GOST, OST, RD und SNiP werden nicht als normative Grundlage verwendet.

## Warum die Klassifikation am Anfang steht

Der Kurs vermittelt eine gemeinsame ingenieurtechnische Sprache zur Beschreibung von Prozessen, zur Berechnung treibender Kraefte, zur Auswahl von Apparaten und zur Kontrolle von Betriebszustaenden. Verwandte Kurse fuer Lebensmittel-, Pharma- und Biotechnologieproduktion nutzen dieselben Transportgesetze, unterscheiden sich aber in Stoffeigenschaften, Sicherheit, Hygiene, Werkstoffen und typischen Apparateformen.

## Hauptgruppen der Prozesse

### Hydromechanische Prozesse

Ihre Geschwindigkeit wird durch die Hydrodynamik bestimmt. Dazu gehoeren Sedimentation, Filtration von Fluessigkeiten oder Gasen, Mischen, Fluidisierung koerniger Feststoffe sowie Stroemung in Rohrleitungen und Apparaten.

### Waermeprozesse

Ihre Geschwindigkeit wird durch Waermeuebertragung bestimmt. Typische Beispiele sind Erwaermen, Kuehlen, Eindampfen und Kondensation.

![Rohrbuendel-Waermeuebertrager als Beispiel eines Waermeapparates](/images/courses/chemical-process-engineering/chapter-01/shell-tube-heat-exchanger.png)
*Abb. 1.1. Rohrbuendel-Waermeuebertrager als Beispiel eines Apparates fuer Waermeprozesse.*

### Stoffuebertragungsprozesse

Ihre Geschwindigkeit wird durch Stoffuebertragung bestimmt. Dazu gehoeren Absorption, Adsorption, Extraktion, Trocknung, Destillation, Loesen und Kristallisation.

![Kontaktbauteil eines Stoffuebertragungsapparates](/images/courses/chemical-process-engineering/chapter-01/mass-transfer-contact-device.png)
*Abb. 1.2. Beispiel eines Kontaktbauteils fuer Stoffuebertragungsapparate.*

### Chemische und mechanische Prozesse

Chemische Prozesse sind mit der Umwandlung von Stoffen verbunden und werden durch chemische Kinetik bestimmt. Mechanische Prozesse umfassen Zerkleinerung, Klassierung, Pressen, Formen, Dosieren und Foerdern von Schuettguetern.

## Gemeinsame kinetische Form

Die Prozessgeschwindigkeit ist direkt proportional zur treibenden Kraft und umgekehrt proportional zum Prozesswiderstand. Der Kehrwert des Widerstands wird als Geschwindigkeits- oder Uebertragungskoeffizient betrachtet.

<div class="equation-block">
  <span class="equation-main">dV / (F<sub>1</sub> dτ) = Δp / R<sub>1</sub> = K<sub>1</sub> Δp</span>
  <span class="equation-number">(1.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dQ / (F<sub>2</sub> dτ) = Δt / R<sub>2</sub> = K<sub>2</sub> Δt</span>
  <span class="equation-number">(1.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dM / (F<sub>3</sub> dτ) = ΔC / R<sub>3</sub> = K<sub>3</sub> ΔC</span>
  <span class="equation-number">(1.3)</span>
</div>

Dabei sind Δp, Δt und ΔC die treibenden Kraefte hydromechanischer, thermischer und stoffuebertragender Prozesse; R ist der Widerstand; K ist der Uebertragungskoeffizient.

## Vom Prozess zum Apparat

Zuerst wird bestimmt, was uebertragen wird, welche treibende Kraft wirkt, welcher Widerstand die Geschwindigkeit begrenzt und welche Apparateform die erforderliche Flaeche, Verweilzeit, Sicherheit und Regelbarkeit bereitstellt.

![Rohrbuendel eines Waermeuebertragers](/images/courses/chemical-process-engineering/chapter-01/tube-bundle-photo.png)
*Abb. 1.3. Rohrbuendel eines Waermeuebertragers: Uebergang von der Waermeuebertragungsgleichung zur Konstruktion.*

## Normativer Rahmen ohne GOST

GOST, OST, RD und SNiP werden in diesem Kurs nicht als normative Grundlage verwendet. Bevorzugt werden ukrainische technische Vorschriften und aktuelle internationale oder europaeische Dokumente: ukrainische Vorschriften fuer Druckgeraete, Pressure Equipment Directive 2014/68/EU, EN 13445, ASME BPVC sowie relevante ISO/EN/API Dokumente.

## Video aus dem virtuellen Lehrbuch

<video controls preload="metadata" style="width: 100%; max-width: 760px; border-radius: 8px; border: 1px solid var(--border-color); background: #000;">
  <source src="/videos/courses/chemical-process-engineering/chapter-01/plate-heat-exchanger.mp4" type="video/mp4" />
</video>

*Video 1.1. Plate Heat Exchanger - Beispiel fuer die apparative Umsetzung eines Waermeprozesses.*

## Selbsttest

<section class="course-self-test" data-course-self-test data-locale="de" data-course="chemical-process-engineering" data-chapter="chapter-01-process-classification" data-pass="8">
<h2>Kapiteltest</h2>
<p>Die Fragen werden automatisch gemischt. Fuer den Abschluss sind mindestens 8 richtige Antworten von 10 erforderlich.</p>
<form data-course-test-form>
<fieldset class="course-test-item" data-course-test-item><legend>1. Was bestimmt die Geschwindigkeit hydromechanischer Prozesse?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-de-1-0" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>Hydrodynamik</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-0" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>nur chemisches Gleichgewicht</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-0" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>nur Partikelgroessenverteilung</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-0" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>nur Verdampfungswaerme</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>2. Welcher Prozess gehoert zu Waermeprozessen?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-de-1-1" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>Filtration</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-1" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>Kondensation</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-1" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>Zerkleinerung</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-1" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>Zentrifugation</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>3. Was ist die typische treibende Kraft der Waermeuebertragung?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-de-1-2" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>Konzentrationsdifferenz</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-2" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>Wellendrehzahl</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-2" value="2" data-correct="1" /><span class="course-test-letter">C</span><span>Temperaturdifferenz</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-2" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>Filterkuchenfeuchte</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>4. Fuer welchen Prozess ist ΔC eine treibende Kraft?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-de-1-3" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>Waermeuebertragung</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-3" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>Stoffuebertragung</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-3" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>Hydrostatik</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-3" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>Festigkeit der Schale</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>5. Warum wird GOST hier nicht als normative Grundlage genutzt?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-de-1-4" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>der Kurs soll ukrainische oder internationale Quellen verwenden</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-4" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>Normen sind unnoetig</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-4" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>sie betreffen nur Biotechnologie</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-4" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>sie enthalten keine Zeichnungen</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>6. Welcher Apparat ist in Abb. 1.1 dargestellt?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-de-1-5" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>Rohrbuendel-Waermeuebertrager</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-5" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>Scheibenfilter</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-5" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>Brecher</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-5" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>Hydrozyklon</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>7. Welche Gruppe umfasst Zerkleinerung?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-de-1-6" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>Stoffuebertragung</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-6" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>Waermeprozesse</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-6" value="2" data-correct="1" /><span class="course-test-letter">C</span><span>mechanische Prozesse</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-6" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>Automatisierungsprozesse</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>8. Was verbindet die Gleichung mit der Apparatekonstruktion?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-de-1-7" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>Flaeche, Verweilzeit, Sicherheit und Regelbarkeit</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-7" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>nur die Farbe des Apparates</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-7" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>die Seitenreihenfolge</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-7" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>nur der Herstellername</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>9. Welche Gruppe umfasst Absorption?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-de-1-8" value="0" data-correct="1" /><span class="course-test-letter">A</span><span>Stoffuebertragungsprozesse</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-8" value="1" data-correct="0" /><span class="course-test-letter">B</span><span>mechanische Prozesse</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-8" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>nur Waermeprozesse</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-8" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>Festigkeitsberechnung</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<fieldset class="course-test-item" data-course-test-item><legend>10. Was ist der Kehrwert des Prozesswiderstands?</legend><div class="course-test-options" data-course-test-options><label class="course-test-option"><input type="radio" name="chem-de-1-9" value="0" data-correct="0" /><span class="course-test-letter">A</span><span>Apparatemasse</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-9" value="1" data-correct="1" /><span class="course-test-letter">B</span><span>Geschwindigkeits- oder Uebertragungskoeffizient</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-9" value="2" data-correct="0" /><span class="course-test-letter">C</span><span>Zeichnungsnummer</span></label><label class="course-test-option"><input type="radio" name="chem-de-1-9" value="3" data-correct="0" /><span class="course-test-letter">D</span><span>Nennvolumen</span></label></div><p class="course-test-feedback" data-course-test-feedback></p></fieldset>
<div class="course-test-actions"><button type="submit" class="course-test-primary">Pruefen</button><button type="button" class="course-test-secondary" data-course-test-reset>Zuruecksetzen</button></div></form>
<p class="course-test-status" aria-live="polite"><strong data-course-test-result>Ergebnis: 0/10</strong><span data-course-test-best>Bestes Ergebnis: -</span></p>
<details class="course-test-answers"><summary>Antworten</summary><ol><li>1: A</li><li>2: B</li><li>3: C</li><li>4: B</li><li>5: A</li><li>6: A</li><li>7: C</li><li>8: A</li><li>9: A</li><li>10: B</li></ol></details>
</section>
