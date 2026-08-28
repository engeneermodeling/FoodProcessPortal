---
title: "Kapitel 12. Destillation"
course: "chemical-process-engineering"
course_title: "Prozess- und Apparatechnik chemischer Produktionen"
chapter: 12
description: "Phasengleichgewicht, einfache Destillation, Rektifikation binaerer und mehrkomponentiger Gemische, extraktive und azeotrope Rektifikation."
updated: "2026-08-23"
---

## Kapitelüberblick

Dieses Kapitel stellt die zentralen Begriffe, Gleichungen und Apparatebeispiele zum Thema vor.

## Struktur des Kapitels

- 12.1. Phasengleichgewicht
- 12.2. Einfache Destillation
- 12.3. Rektifikation binaerer Gemische
- 12.4. Bauarten von Rektifikationsapparaten
- 12.5. Rektifikation mehrkomponentiger Gemische
- 12.6. Extraktive Rektifikation
- 12.7. Azeotrope Rektifikation

## Vorlesungsskript

Kapitel 12 ist als zusammenhaengende Vorlesung aufgebaut: Phasengleichgewicht, einfache Destillation, Rektifikation, Apparatewahl und spezielle Trennverfahren.

### 12.1. Phasengleichgewicht

Destillation trennt siedende Fluessigkeitsgemische wegen unterschiedlicher Fluechtigkeit. Die leichter fluechtige Komponente reichert sich in der Dampfphase an. Ideale Gemische folgen Raoult und Dalton, reale Systeme brauchen Gleichgewichtsdaten.

<div class="equation-block">
  <span class="equation-main">p<sub>A</sub> = P<sub>A</sub>x<sub>A</sub></span>
  <span class="equation-number">(12.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">p = p<sub>A</sub> + p<sub>B</sub></span>
  <span class="equation-number">(12.2)</span>
</div>

![Phasengleichgewichtskurven](/images/courses/chemical-process-engineering/chapter-12/fig-12-1.webp)
*Abb. 12.1. Phasengleichgewichtskurven*

### 12.2. Einfache Destillation

Einfache Destillation ist ein diskontinuierlicher Prozess aus teilweiser Verdampfung und Kondensation. Ruecklauf verbessert die Anreicherung des Dampfes.

<div class="equation-block">
  <span class="equation-main">Wx = (W - dW)(x - dx) + dWy</span>
  <span class="equation-number">(12.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dW/W = dx/(y - x)</span>
  <span class="equation-number">(12.4)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ln(W<sub>p</sub>/W<sub>k</sub>) = ∫<sub>xk</sub><sup>xp</sup> dx/(y - x)</span>
  <span class="equation-number">(12.5)</span>
</div>

<div class="equation-block">
  <span class="equation-main">p = p<sub>A</sub> + p<sub>B</sub></span>
  <span class="equation-number">(12.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>A</sub>/m<sub>B</sub> = p<sub>A</sub>M<sub>A</sub>/(p<sub>B</sub>M<sub>B</sub>)</span>
  <span class="equation-number">(12.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>v</sub> = m<sub>w</sub>p<sub>v</sub>M<sub>v</sub>/(p<sub>w</sub>M<sub>w</sub>)</span>
  <span class="equation-number">(12.8)</span>
</div>

![Einfache einstufige Destillation](/images/courses/chemical-process-engineering/chapter-12/fig-12-2.webp)
*Abb. 12.2. Einfache einstufige Destillation*

![Einfache Destillation mit Ruecklauf](/images/courses/chemical-process-engineering/chapter-12/fig-12-3.webp)
*Abb. 12.3. Einfache Destillation mit Ruecklauf*

### 12.3. Rektifikation binaerer Gemische

Rektifikation wiederholt den Kontakt von nicht im Gleichgewicht befindlichen Dampf- und Fluessigkeitsstroemen in einer Kolonne. Arbeitslinien, Ruecklaufverhaeltnis und theoretische Bodenzahl bestimmen die Trennung.

<div class="equation-block">
  <span class="equation-main">M = D + R</span>
  <span class="equation-number">(12.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Mx<sub>M</sub> = Dx<sub>D</sub> + Rx<sub>R</sub></span>
  <span class="equation-number">(12.10)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = M(x<sub>M</sub> - x<sub>R</sub>)/(x<sub>D</sub> - x<sub>R</sub>)</span>
  <span class="equation-number">(12.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">R = M(x<sub>D</sub> - x<sub>M</sub>)/(x<sub>D</sub> - x<sub>R</sub>)</span>
  <span class="equation-number">(12.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Gy = fx + Dx<sub>D</sub></span>
  <span class="equation-number">(12.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = (f/G)x + (D/G)x<sub>D</sub></span>
  <span class="equation-number">(12.14)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = [ν/(ν + 1)]x + x<sub>D</sub>/(ν + 1)</span>
  <span class="equation-number">(12.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Lx = Gy + Rx<sub>R</sub></span>
  <span class="equation-number">(12.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = (L/G)x - (R/G)x<sub>R</sub></span>
  <span class="equation-number">(12.17)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = [L/(L - R)]x - [R/(L - R)]x<sub>R</sub></span>
  <span class="equation-number">(12.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = (L/G)(x - x<sub>R</sub>)</span>
  <span class="equation-number">(12.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = f(x)</span>
  <span class="equation-number">(12.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = (ν/(ν + 1))x + x<sub>D</sub>/(ν + 1)</span>
  <span class="equation-number">(12.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x = [(ν + 1)y - x<sub>D</sub>]/ν</span>
  <span class="equation-number">(12.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = Ax + B</span>
  <span class="equation-number">(12.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">B<sub>max</sub> = x<sub>D</sub>/(ν<sub>min</sub> + 1)</span>
  <span class="equation-number">(12.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ν = x<sub>D</sub>/B - 1</span>
  <span class="equation-number">(12.25)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ν<sub>min</sub> = (x<sub>D</sub> - y<sub>M</sub>)/(y<sub>M</sub> - x<sub>M</sub>)</span>
  <span class="equation-number">(12.26)</span>
</div>

<div class="equation-block">
  <span class="equation-main">y = A<sub>1</sub>x - B<sub>1</sub></span>
  <span class="equation-number">(12.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D<sub>col</sub> = √(4V/(πw))</span>
  <span class="equation-number">(12.28)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Mi<sub>M</sub> + Pi<sub>P</sub> + fi<sub>f</sub> = Gi<sub>G</sub> + Ri<sub>R</sub> + Q</span>
  <span class="equation-number">(12.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">P = [M(i<sub>R</sub> - i<sub>M</sub>) + D(ν + 1)i<sub>G</sub> - D(νi<sub>f</sub> + i<sub>D</sub>) + Q]/(i<sub>P</sub> - i<sub>R</sub>)</span>
  <span class="equation-number">(12.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Mi<sub>M</sub> + Pi<sub>P</sub> + fi<sub>f</sub> = Gi<sub>G</sub> + Ri<sub>R</sub> + Pi<sub>P</sub> + Q</span>
  <span class="equation-number">(12.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">P = [M(i<sub>R</sub> - i<sub>M</sub>) + D(ν + 1)i<sub>G</sub> - D(νi<sub>f</sub> + i<sub>D</sub>) + Q<sub>loss</sub>]/(i<sub>P</sub> - i<sub>R</sub>)</span>
  <span class="equation-number">(12.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Mi<sub>M</sub> + Pi<sub>P</sub> = Di<sub>D</sub> + Ri<sub>R</sub> + Q</span>
  <span class="equation-number">(12.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">P = [M(i<sub>R</sub> - i<sub>M</sub>) + D(i<sub>D</sub> - i<sub>R</sub>) + Q<sub>loss</sub>]/(i<sub>P</sub> - i<sub>R</sub>)</span>
  <span class="equation-number">(12.34)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q<sub>def</sub> = G(i<sub>G</sub> - i<sub>D</sub>) = D(ν + 1)(i<sub>G</sub> - i<sub>D</sub>)</span>
  <span class="equation-number">(12.35)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q<sub>cond</sub> = (G - D)(i<sub>G</sub> - i<sub>D</sub>) = Dν(i<sub>G</sub> - i<sub>D</sub>)</span>
  <span class="equation-number">(12.36)</span>
</div>

![Diskontinuierliche Rektifikationsanlage](/images/courses/chemical-process-engineering/chapter-12/fig-12-4.webp)
*Abb. 12.4. Diskontinuierliche Rektifikationsanlage*

![Kontinuierliche Rektifikationsschemata](/images/courses/chemical-process-engineering/chapter-12/fig-12-5.webp)
*Abb. 12.5. Kontinuierliche Rektifikationsschemata*

![Stoffstroeme einer vollstaendigen Kolonne](/images/courses/chemical-process-engineering/chapter-12/fig-12-6.webp)
*Abb. 12.6. Stoffstroeme einer vollstaendigen Kolonne*

![Bestimmung der theoretischen Bodenzahl](/images/courses/chemical-process-engineering/chapter-12/fig-12-7.webp)
*Abb. 12.7. Bestimmung der theoretischen Bodenzahl*

![Einfluss des Ruecklaufverhaeltnisses](/images/courses/chemical-process-engineering/chapter-12/fig-12-8-9.webp)
*Abb. 12.8-9. Einfluss des Ruecklaufverhaeltnisses*

![Waermestroeme in Kolonnen](/images/courses/chemical-process-engineering/chapter-12/fig-12-10.webp)
*Abb. 12.10. Waermestroeme in Kolonnen*

### 12.4. Rektifikationsapparate

Kolonnen koennen als Boden-, Packungs- oder Filmkolonnen ausgefuehrt sein. Die Auswahl richtet sich nach Leistung, Druckverlust, Verschmutzungsneigung und Trennaufgabe.

![Bodenkonstruktionen](/images/courses/chemical-process-engineering/chapter-12/fig-12-11.webp)
*Abb. 12.11. Bodenkonstruktionen*

![Packungskolonne](/images/courses/chemical-process-engineering/chapter-12/fig-12-12.webp)
*Abb. 12.12. Packungskolonne*

![Filmkolonne](/images/courses/chemical-process-engineering/chapter-12/fig-12-13.webp)
*Abb. 12.13. Filmkolonne*

![Bodenwirkungsgrad in Abhaengigkeit von der Dampfgeschwindigkeit](/images/courses/chemical-process-engineering/chapter-12/fig-12-14.webp)
*Abb. 12.14. Bodenwirkungsgrad in Abhaengigkeit von der Dampfgeschwindigkeit*

### 12.5. Rektifikation von Mehrkomponentengemischen

Eine Kolonne liefert bei Mehrkomponentengemischen meist zwei Produkte oder Fraktionen. Vollstaendige Trennung erfordert ein Kolonnensystem.

![Trennschemata fuer Mehrkomponentengemische](/images/courses/chemical-process-engineering/chapter-12/fig-12-15.webp)
*Abb. 12.15. Trennschemata fuer Mehrkomponentengemische*

![Rektifikationsanlagen fuer Alkoholgemische](/images/courses/chemical-process-engineering/chapter-12/fig-12-16.webp)
*Abb. 12.16. Rektifikationsanlagen fuer Alkoholgemische*

### 12.6. Extraktive Rektifikation

Extraktive Rektifikation nutzt einen hochsiedenden Trennstoff, der die relative Fluechtigkeit aendert und nahe siedende oder azeotrope Gemische trennbar macht.

![Extraktive und Salzrektifikation](/images/courses/chemical-process-engineering/chapter-12/fig-12-17.webp)
*Abb. 12.17. Extraktive und Salzrektifikation*

### 12.7. Azeotrope Rektifikation

Bei azeotroper Rektifikation wird eine dritte Komponente eingesetzt, die ein neues Azeotrop bildet und nach Kondensation sowie Phasentrennung die Abtrennung erlaubt.

![Azeotrope Rektifikation](/images/courses/chemical-process-engineering/chapter-12/fig-12-18.webp)
*Abb. 12.18. Azeotrope Rektifikation*

## Nach dem Durcharbeiten dieses Kapitels sollen Studierende

- die Rolle von "Phasengleichgewicht" im Kapitel erklaeren;
- "Ruecklaufverhaeltnis" mit der apparativen Gestaltung chemischer Produktion verbinden;
- wichtige Einflussgroessen fuer "Boden" unterscheiden;
- die Auswahl oder Bewertung des Prozesses ueber "Rektifikationskolonne" begruenden.

## Selbsttest

<section
  class="course-self-test"
  data-course-self-test
  data-locale="de"
  data-course="chemical-process-engineering"
  data-chapter="chapter-12-distillation"
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
  <input type="radio" name="course-test-12-0" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Phasengleichgewicht</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Ruecklaufverhaeltnis</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Boden</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Rektifikationskolonne</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>12.2. Einfache Destillation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-1" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>12.1. Phasengleichgewicht</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>12.3. Rektifikation binaerer Gemische</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>12.4. Bauarten von Rektifikationsapparaten</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Auf welchen Begriff soll sich die ingenieurtechnische Analyse zuerst stuetzen?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Phasengleichgewicht</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Boden</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-2" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Ruecklaufverhaeltnis</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Rektifikationskolonne</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Was verbindet Prozesstheorie am deutlichsten mit der Apparategestaltung?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Phasengleichgewicht</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Ruecklaufverhaeltnis</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Boden</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-3" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Rektifikationskolonne</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-4" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Boden</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Phasengleichgewicht</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Ruecklaufverhaeltnis</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Rektifikationskolonne</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Mit welchem Thema beginnt das Kapitel in der Kapitelstruktur?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>12.2. Einfache Destillation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-5" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>12.1. Phasengleichgewicht</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>12.3. Rektifikation binaerer Gemische</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>12.4. Bauarten von Rektifikationsapparaten</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>12.1. Phasengleichgewicht</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>12.3. Rektifikation binaerer Gemische</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-6" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>12.2. Einfache Destillation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>12.4. Bauarten von Rektifikationsapparaten</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Welches Thema schliesst die Struktur des Kapitels ab?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>12.1. Phasengleichgewicht</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>12.2. Einfache Destillation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>12.3. Rektifikation binaerer Gemische</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-7" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>12.7. Azeotrope Rektifikation</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Welches Begriffspaar eignet sich fuer den Selbsttest?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-8" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Phasengleichgewicht / Ruecklaufverhaeltnis</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Boden / Rektifikationskolonne</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Phasengleichgewicht / Boden</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Ruecklaufverhaeltnis / Rektifikationskolonne</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Was eignet sich am besten zur praktischen Begruendung der Prozessauswahl?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Phasengleichgewicht</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-9" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Rektifikationskolonne</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Ruecklaufverhaeltnis</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Boden</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Phasengleichgewicht</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Boden</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-10" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Ruecklaufverhaeltnis</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Rektifikationskolonne</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Welches Objekt wird in diesem Kapitel als Abbildung dargestellt?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-12-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Phasengleichgewicht</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Ruecklaufverhaeltnis</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Boden</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-12-11" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Phasengleichgewichtskurven</span>
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

