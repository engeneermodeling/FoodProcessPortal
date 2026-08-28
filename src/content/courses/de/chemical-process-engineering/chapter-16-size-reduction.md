---
title: "Kapitel 16. Zerkleinerung"
course: "chemical-process-engineering"
course_title: "Prozess- und Apparatechnik chemischer Produktionen"
chapter: 16
description: "Zerkleinerungsverfahren, Energieaufwand, Klassifikation und Aufbau von Zerkleinerungsmaschinen."
updated: "2026-08-23"
---

## Kapitelüberblick

Dieses Kapitel stellt die zentralen Begriffe, Gleichungen und Apparatebeispiele zum Thema vor.

## Struktur des Kapitels

- 16.1. Allgemeines
- 16.2. Zerkleinerungsverfahren
- 16.3. Energiebedarf der Zerkleinerung
- 16.4. Klassifikation von Zerkleinerern
- 16.5. Aufbau und Wirkprinzip von Zerkleinerungsmaschinen

## Vorlesungsskript

### 16.1. Allgemeine Angaben

Zerkleinerung ist die Teilung eines festen Koerpers in Partikel durch aeussere Kraefte. In chemischen, pharmazeutischen und lebensmitteltechnischen Produktionen beschleunigt sie Waerme-, Diffusions- und chemische Prozesse mit Beteiligung einer festen Phase.

Der Prozess wird durch den Zerkleinerungsgrad beschrieben, also durch das Verhaeltnis der mittleren Stueckgroesse vor der Zerkleinerung D zur mittleren Groesse nach der Zerkleinerung d:

<div class="equation-block">
  <span class="equation-main">i = D/d</span>
  <span class="equation-number">(16.1)</span>
</div>

**Tabelle 16.1. Klassen der Zerkleinerung**

| Zerkleinerungsklasse | Stueckgroesse vor der Zerkleinerung D, mm | Stueckgroesse nach der Zerkleinerung d, mm |
|---|---:|---:|
| Grobzerkleinerung | 1000 | 250 |
| Mittelzerkleinerung | 250 | 20 |
| Feinzerkleinerung | 20 | 1...5 |
| Grobmahlung | 1...5 | 0.1...0.04 |
| Mittelmahlung | 0.1...0.04 | 0.005...0.015 |
| Feinmahlung | 0.1...0.04 | 0.001...0.005 |
| Kolloidmahlung | <= 0.1 | <= 0.001 |

### 16.2. Zerkleinerungsverfahren

Feste Stoffe koennen durch Druck, Spalten, Brechen durch Biegung, Schneiden, Saegen, Reiben, Schlag und Zerreissen zerkleinert werden. In der Praxis werden diese Verfahren oft kombiniert: Reiben geht mit Druck oder Schlag einher, Biegebruch mit Spalten oder Druck.

![Abb. 16.1. Zerkleinerungsverfahren](/images/courses/chemical-process-engineering/chapter-16/fig-16-1.webp)
*Abb. 16.1. Zerkleinerungsverfahren*

### 16.3. Energiebedarf der Zerkleinerung

Der Energiebedarf der Zerkleinerung ist schwierig zu berechnen, weil die Arbeit von Stoffeigenschaften, Bruchmechanismus und Betriebsbedingungen der Maschine abhaengt. Fuer einen Wuerfel mit Kantenlaenge D, der in Wuerfel mit Kantenlaenge d zerkleinert wird, gelten folgende Beziehungen:

<div class="equation-block">
  <span class="equation-main">z = D<sup>3</sup>/d<sup>3</sup> = i<sup>3</sup></span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">F<sub>p</sub> = 6D<sup>2</sup></span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">F<sub>k</sub> = 6d<sup>2</sup>i<sup>3</sup> = 6(D/i)<sup>2</sup>i<sup>3</sup> = 6D<sup>2</sup>i</span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">ΔF = F<sub>k</sub> - F<sub>p</sub> = 6D<sup>2</sup>(i - 1)</span>
  <span class="equation-number"></span>
</div>

<div class="equation-block">
  <span class="equation-main">A = A<sub>p</sub>ΔF = 6A<sub>p</sub>D<sup>2</sup>(i - 1)</span>
  <span class="equation-number">(16.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">A = σ<sub>p</sub><sup>2</sup>ΔV/(2E)</span>
  <span class="equation-number">(16.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">A<sub>1</sub>/A<sub>2</sub> = V<sub>1</sub>/V<sub>2</sub></span>
  <span class="equation-number">(16.4)</span>
</div>

<div class="equation-block">
  <span class="equation-main">A = kV + A<sub>p</sub>ΔF</span>
  <span class="equation-number">(16.5)</span>
</div>

Nach Rittinger ist die Arbeit proportional zur neu gebildeten Oberflaeche. Nach Kirpichev-Kick ist sie mit der Volumendeformation vor dem Bruch verbunden. Rebinder betrachtete die Gesamtarbeit als Summe aus Deformationsarbeit und Arbeit zur Bildung neuer Oberflaechen.

### 16.4. Klassifikation der Zerkleinerungsmaschinen

Zerkleinerungsmaschinen werden nach dem dominierenden Bruchmechanismus eingeteilt: Spalt- und Biegebruchmaschinen, Druckmaschinen, Reib-Druck-Maschinen, Schlagmaschinen, Schneidmaschinen und Kolloidmuehlen.

### 16.5. Aufbau und Wirkungsweise von Zerkleinerungsmaschinen

Backenbrecher sind fuer grobe und mittlere Zerkleinerung wirksam. Das Material gelangt von oben zwischen eine feste und eine bewegliche Backe; beim Annaehern wird es gebrochen, beim Auseinandergehen verlaesst das Produkt den unteren Spalt. Kegelbrecher arbeiten kontinuierlich: das Material wird zwischen festem Aussenkegel und beweglichem Innenkegel gedrueckt.

![Abb. 16.2. Schema eines Backenbrechers](/images/courses/chemical-process-engineering/chapter-16/fig-16-2.webp)
*Abb. 16.2. Schema eines Backenbrechers*

![Abb. 16.3. Schema eines Kegelbrechers](/images/courses/chemical-process-engineering/chapter-16/fig-16-3.webp)
*Abb. 16.3. Schema eines Kegelbrechers*

In Walzenbrechern wird das Material zwischen Walzen zusammengedrueckt. Die Produktgroesse wird durch den Walzenspalt bestimmt; geriffelte Walzen spalten den Stoff zusaetzlich. Die Leistung G, kg/h, eines Walzenbrechers wird abgeschaetzt mit:

![Abb. 16.4. Schema eines Walzenbrechers](/images/courses/chemical-process-engineering/chapter-16/fig-16-4.webp)
*Abb. 16.4. Schema eines Walzenbrechers*

<div class="equation-block">
  <span class="equation-main">G = 60blπDnρφ</span>
  <span class="equation-number">(16.6)</span>
</div>

Dabei ist b die Spaltbreite, m; l die Walzenlaenge, m; D der Walzendurchmesser, m; n die Drehzahl, min-1; ρ die Stoffdichte, kg/m3; φ der Faktor fuer ungleichmaessige Beschickung.

![Abb. 16.5. Schema eines Kollergangs](/images/courses/chemical-process-engineering/chapter-16/fig-16-5.webp)
*Abb. 16.5. Schema eines Kollergangs*

Zu Reib-Druck-Maschinen gehoeren Mahlsteine, Kollergang und Scheibenmuehlen. Schlagzerkleinerung erfolgt in Hammerbrechern, Ein-Trommel-Brechern und Desintegratoren. Fuer einen Hammerbrecher wird die angenaeherte Wellenleistung N, kW, empirisch bestimmt:

![Abb. 16.6. Schema eines Hammerbrechers](/images/courses/chemical-process-engineering/chapter-16/fig-16-6.webp)
*Abb. 16.6. Schema eines Hammerbrechers*

<div class="equation-block">
  <span class="equation-main">N = (0.1...0.15)iG</span>
  <span class="equation-number">(16.7)</span>
</div>

![Abb. 16.7. Schema eines Ein-Trommel-Brechers](/images/courses/chemical-process-engineering/chapter-16/fig-16-7.webp)
*Abb. 16.7. Schema eines Ein-Trommel-Brechers*

![Abb. 16.8. Schema eines Desintegrators](/images/courses/chemical-process-engineering/chapter-16/fig-16-8.webp)
*Abb. 16.8. Schema eines Desintegrators*

Trommelmuehlen werden zur Feinmahlung eingesetzt: Mahlkoerper fallen oder rollen im Inneren der Trommel und zerkleinern das Material durch Schlag, Druck und Reibung. Schneidmaschinen werden vor allem fuer pflanzliche Rohstoffe verwendet; ihr Arbeitsorgan ist ein Messer.

![Abb. 16.9. Schema einer Trommelmuehle](/images/courses/chemical-process-engineering/chapter-16/fig-16-9.webp)
*Abb. 16.9. Schema einer Trommelmuehle*

## Nach dem Durcharbeiten dieses Kapitels sollen Studierende

- die Rolle von "Zerkleinerung" im Kapitel erklaeren;
- "Zerkleinerungsgrad" mit der apparativen Gestaltung chemischer Produktion verbinden;
- wichtige Einflussgroessen fuer "Muehle" unterscheiden;
- die Auswahl oder Bewertung des Prozesses ueber "Energiebedarf" begruenden.

## Selbsttest

<section
  class="course-self-test"
  data-course-self-test
  data-locale="de"
  data-course="chemical-process-engineering"
  data-chapter="chapter-16-size-reduction"
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
  <input type="radio" name="course-test-16-0" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Zerkleinerung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Zerkleinerungsgrad</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Muehle</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Energiebedarf</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>16.2. Zerkleinerungsverfahren</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-1" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>16.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>16.3. Energiebedarf der Zerkleinerung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>16.4. Klassifikation von Zerkleinerern</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Auf welchen Begriff soll sich die ingenieurtechnische Analyse zuerst stuetzen?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Zerkleinerung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Muehle</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-2" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Zerkleinerungsgrad</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Energiebedarf</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Was verbindet Prozesstheorie am deutlichsten mit der Apparategestaltung?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Zerkleinerung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Zerkleinerungsgrad</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Muehle</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-3" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Energiebedarf</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-4" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Muehle</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Zerkleinerung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Zerkleinerungsgrad</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Energiebedarf</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Mit welchem Thema beginnt das Kapitel in der Kapitelstruktur?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>16.2. Zerkleinerungsverfahren</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-5" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>16.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>16.3. Energiebedarf der Zerkleinerung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>16.4. Klassifikation von Zerkleinerern</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>16.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>16.3. Energiebedarf der Zerkleinerung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-6" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>16.2. Zerkleinerungsverfahren</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>16.4. Klassifikation von Zerkleinerern</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Welches Thema schliesst die Struktur des Kapitels ab?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>16.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>16.2. Zerkleinerungsverfahren</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>16.3. Energiebedarf der Zerkleinerung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-7" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>16.5. Aufbau und Wirkprinzip von Zerkleinerungsmaschinen</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Welches Begriffspaar eignet sich fuer den Selbsttest?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-8" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Zerkleinerung / Zerkleinerungsgrad</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Muehle / Energiebedarf</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Zerkleinerung / Muehle</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Zerkleinerungsgrad / Energiebedarf</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Was eignet sich am besten zur praktischen Begruendung der Prozessauswahl?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Zerkleinerung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-9" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Energiebedarf</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Zerkleinerungsgrad</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Muehle</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Zerkleinerung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Muehle</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-10" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Zerkleinerungsgrad</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Energiebedarf</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Welches Objekt wird in diesem Kapitel als Abbildung dargestellt?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-16-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Zerkleinerung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Zerkleinerungsgrad</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Muehle</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-16-11" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Schema eines Backenbrechers</span>
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

