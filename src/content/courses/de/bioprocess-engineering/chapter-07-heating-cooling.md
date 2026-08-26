---
title: "Kapitel 7. Erwaermen und Kuehlen"
course: "bioprocess-engineering"
course_title: "Bioverfahrenstechnik: Prozesse und Apparate biotechnologischer Produktionen"
chapter: 7
description: "Klassifikation, Bauarten sowie thermische, konstruktive und hydraulische Berechnung von Waermeuebertragern."
updated: "2026-08-23"
---

## Quelle und Umfang

Materialgrundlage: das Lehrbuch "Bioverfahrenstechnik. Modul 1. Prozesse und Apparate biotechnologischer Produktionen", herausgegeben von V.L. Zavialov, NUFT, 2024.

## Struktur nach dem Lehrbuch

- 7.1. Allgemeines
- 7.2. Klassifikation von Waermeuebertragern
- 7.3. Bauarten von Waermeuebertragern
- 7.4. Thermische Berechnung
- 7.5. Konstruktive Berechnung
- 7.6. Hydraulische Berechnung
- 7.7. Optimierung und Intensivierung
- 7.8. Nachrechnungen

## Vorlesungsskript

### 7.1. Allgemeines

Erwaermen und Kuehlen von Fluessigkeiten und Gasen gehoeren zu den haeufigsten Prozessen der Bioverfahrenstechnik. Fuer jeden Prozess waehlt man Verfahren, Waermetraeger und Apparatekonstruktion nach technologischen und wirtschaftlichen Kriterien. Diese Apparate heissen Waermeuebertrager.

### 7.2. Klassifikation von Waermeuebertragern

Nach der Art der Waermeuebertragung unterscheidet man Oberflaechen- und Mischwaermeuebertrager. Bei Oberflaechenapparaten sind die Medien durch eine Wand getrennt oder beruehren abwechselnd dieselbe Oberflaeche; bei Mischapparaten erfolgt der Austausch durch direkten Kontakt. In der Industrie ueberwiegen rekuperative Oberflaechenwaermeuebertrager.

Wichtig sind hoher Waermeuebergangskoeffizient, kleiner hydraulischer Widerstand, Dichtheit, gute Reinigbarkeit, Wartungsfreundlichkeit und Kompensation thermischer Laengenaenderungen.

### 7.3. Konstruktionen von Waermeuebertragern

Rohrbuendelwaermeuebertrager ermoeglichen grosse Waermeuebertragungsflaechen in einem Apparat. Die Geschwindigkeit wird durch Mehrwegfuehrung und Segmentleitbleche erhoeht. Rohre in Rohrplatten werden haeufig auf regelmaessigen Sechsecken angeordnet.

![Abb. 7.1. Einweg-Rohrbuendelwaermeuebertrager](/images/courses/bioprocess-engineering/chapter-07/fig-7-1.webp)
*Abb. 7.1. Einweg-Rohrbuendelwaermeuebertrager*

![Abb. 7.2. Mehrweg-Rohrbuendelwaermeuebertrager](/images/courses/bioprocess-engineering/chapter-07/fig-7-2.webp)
*Abb. 7.2. Mehrweg-Rohrbuendelwaermeuebertrager*

![Abb. 7.3. Rohranordnung in Rohrplatten](/images/courses/bioprocess-engineering/chapter-07/fig-7-3.webp)
*Abb. 7.3. Rohranordnung in Rohrplatten*

<div class="equation-block">
  <span class="equation-main">n = 3a(a - 1) + 1</span>
  <span class="equation-number">(7.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">b = 2a - 1</span>
  <span class="equation-number">(7.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">s = (1.3...1.5)d<sub>o</sub></span>
  <span class="equation-number">(7.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = s(b - 1) + 4d<sub>o</sub></span>
  <span class="equation-number">(7.4)</span>
</div>

Bei kleinen Volumenstroemen verwendet man Doppelrohrwaermeuebertrager. Tauch- und berieselte Schlangenrohrwaermeuebertrager sind einfach, aber weniger intensiv. Spiral- und Plattenwaermeuebertrager sind kompakt; Plattenapparate sind besonders fuer Sterilisation und Kuehlung von Prozessfluessigkeiten verbreitet.

![Abb. 7.5. Doppelrohr-Waermeuebertrager](/images/courses/bioprocess-engineering/chapter-07/fig-7-5.webp)
*Abb. 7.5. Doppelrohr-Waermeuebertrager*

![Abb. 7.6. Tauchwaermeuebertrager](/images/courses/bioprocess-engineering/chapter-07/fig-7-6.webp)
*Abb. 7.6. Tauchwaermeuebertrager*

![Abb. 7.7. Berieselter Schlangenrohr-Waermeuebertrager](/images/courses/bioprocess-engineering/chapter-07/fig-7-7.webp)
*Abb. 7.7. Berieselter Schlangenrohr-Waermeuebertrager*

![Abb. 7.8. Spiralwaermeuebertrager](/images/courses/bioprocess-engineering/chapter-07/fig-7-8.webp)
*Abb. 7.8. Spiralwaermeuebertrager*

![Abb. 7.9. Stroemungsschema in einem Plattenwaermeuebertrager](/images/courses/bioprocess-engineering/chapter-07/fig-7-9.webp)
*Abb. 7.9. Stroemungsschema in einem Plattenwaermeuebertrager*

![Abb. 7.10. Oberflaeche aus Rippenrohren](/images/courses/bioprocess-engineering/chapter-07/fig-7-10.webp)
*Abb. 7.10. Oberflaeche aus Rippenrohren*

![Abb. 7.11. Mantelwaermeuebertrager](/images/courses/bioprocess-engineering/chapter-07/fig-7-11.webp)
*Abb. 7.11. Mantelwaermeuebertrager*

### 7.4. Thermische Berechnung von Waermeuebertragern

Die thermische Auslegungsrechnung bestimmt die erforderliche Waermeuebertragungsflaeche. Dazu werden Waermeleistung, Waermeuebergangskoeffizient und mittlere Temperaturdifferenz nacheinander berechnet.

<div class="equation-block">
  <span class="equation-main">F = Q/(kΔt<sub>m</sub>)</span>
  <span class="equation-number">(7.5)</span>
</div>

Bei kleinen Waermeverlusten wird die Bilanz zwischen heissem und kaltem Waermetraeger geschrieben. Ohne Phasenwechsel ersetzt man Enthalpiedifferenzen durch Waermekapazitaet mal Temperaturaenderung.

<div class="equation-block">
  <span class="equation-main">Q = Q<sub>1</sub> = Q<sub>2</sub></span>
  <span class="equation-number">(7.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q = m<sub>1</sub>(i<sub>1,in</sub> - i<sub>1,out</sub>) = m<sub>2</sub>(i<sub>2,out</sub> - i<sub>2,in</sub>)</span>
  <span class="equation-number">(7.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q = m<sub>1</sub>c<sub>1</sub>(t<sub>1,in</sub> - t<sub>1,out</sub>)</span>
  <span class="equation-number">(7.8)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q = m<sub>2</sub>c<sub>2</sub>(t<sub>2,out</sub> - t<sub>2,in</sub>)</span>
  <span class="equation-number">(7.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>1</sub>c<sub>1</sub>(t<sub>1,in</sub> - t<sub>1,out</sub>) = m<sub>2</sub>c<sub>2</sub>(t<sub>2,out</sub> - t<sub>2,in</sub>)</span>
  <span class="equation-number">(7.10)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>2</sub> = m<sub>1</sub>c<sub>1</sub>(t<sub>1,in</sub> - t<sub>1,out</sub>)/(c<sub>2</sub>(t<sub>2,out</sub> - t<sub>2,in</sub>))</span>
  <span class="equation-number">(7.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>1</sub> = m<sub>2</sub>c<sub>2</sub>(t<sub>2,out</sub> - t<sub>2,in</sub>)/(c<sub>1</sub>(t<sub>1,in</sub> - t<sub>1,out</sub>))</span>
  <span class="equation-number">(7.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D<sub>s</sub> = Q/(i<sub>s</sub> - i<sub>c</sub>)</span>
  <span class="equation-number">(7.13)</span>
</div>

Der Waermeuebertragungskoeffizient ergibt sich aus den thermischen Widerstaenden von Wand, Verschmutzungen und Waermeuebergang auf beiden Seiten. Fuer bestimmte Bauarten nutzt man eigene Kriterialgleichungen.

<div class="equation-block">
  <span class="equation-main">Nu = 0.023Re<sup>0.8</sup>Pr<sup>0.4</sup></span>
  <span class="equation-number">(7.14)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = CRe<sup>0.6</sup>Pr<sup>0.33</sup></span>
  <span class="equation-number">(7.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu = CRe<sup>0.73</sup>Pr<sup>0.43</sup>(Pr/Pr<sub>w</sub>)<sup>0.25</sup></span>
  <span class="equation-number">(7.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">1/k = 1/α<sub>1</sub> + δ<sub>w</sub>/λ<sub>w</sub> + δ<sub>f1</sub>/λ<sub>f1</sub> + δ<sub>f2</sub>/λ<sub>f2</sub> + 1/α<sub>2</sub></span>
  <span class="equation-number">(7.17)</span>
</div>

<div class="equation-block">
  <span class="equation-main">k<sub>actual</sub> = φk<sub>calc</sub></span>
  <span class="equation-number">(7.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">t<sub>w1</sub> = t<sub>1</sub> - q/α<sub>1</sub></span>
  <span class="equation-number">(7.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">t<sub>w2</sub> = t<sub>2</sub> + q/α<sub>2</sub></span>
  <span class="equation-number">(7.20)</span>
</div>

Die mittlere Temperaturdifferenz wird als logarithmische mittlere Temperaturdifferenz bestimmt. Gegenstrom nutzt die Waermetraeger am vollstaendigsten und fuehrt zu kompakteren Apparaten.

![Abb. 7.12. Temperaturverlaeufe der Waermetraeger](/images/courses/bioprocess-engineering/chapter-07/fig-7-12.webp)
*Abb. 7.12. Temperaturverlaeufe der Waermetraeger*

<div class="equation-block">
  <span class="equation-main">Δt<sub>lm</sub> = (Δt<sub>max</sub> - Δt<sub>min</sub>)/ln(Δt<sub>max</sub>/Δt<sub>min</sub>)</span>
  <span class="equation-number">(7.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δt<sub>m</sub> = (Δt<sub>max</sub> + Δt<sub>min</sub>)/2</span>
  <span class="equation-number">(7.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">P = (t<sub>2,out</sub> - t<sub>2,in</sub>)/(t<sub>1,in</sub> - t<sub>2,in</sub>)</span>
  <span class="equation-number">(7.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">R = (t<sub>1,in</sub> - t<sub>1,out</sub>)/(t<sub>2,out</sub> - t<sub>2,in</sub>)</span>
  <span class="equation-number">(7.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δt<sub>m</sub> = εΔt<sub>lm,counter</sub></span>
  <span class="equation-number">(7.25)</span>
</div>

### 7.5. Konstruktive Berechnung von Waermeuebertragern

Nach der thermischen Berechnung folgen Durchflussquerschnitte, Rohrzahl, Zahl der Wege, Rohr- oder Schlangenlaenge, Schlangenhoehe und Stutzendurchmesser.

<div class="equation-block">
  <span class="equation-main">f<sub>1</sub> = m/(ρw)</span>
  <span class="equation-number">(7.26)</span>
</div>

<div class="equation-block">
  <span class="equation-main">n<sub>1</sub> = 4f<sub>1</sub>/(πd<sub>i</sub><sup>2</sup>)</span>
  <span class="equation-number">(7.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L = F/(πd<sub>p</sub>n)</span>
  <span class="equation-number">(7.28)</span>
</div>

<div class="equation-block">
  <span class="equation-main">z = L/l</span>
  <span class="equation-number">(7.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">n = zn<sub>1</sub></span>
  <span class="equation-number">(7.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">l<sub>turn</sub> = √((πD<sub>coil</sub>)<sup>2</sup> + h<sup>2</sup>)</span>
  <span class="equation-number">(7.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L = F/(πd<sub>p</sub>)</span>
  <span class="equation-number">(7.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">n = L/l<sub>turn</sub></span>
  <span class="equation-number">(7.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">H = nh</span>
  <span class="equation-number">(7.34)</span>
</div>

<div class="equation-block">
  <span class="equation-main">V = πd<sub>n</sub><sup>2</sup>w/4</span>
  <span class="equation-number">(7.35)</span>
</div>

<div class="equation-block">
  <span class="equation-main">d<sub>n</sub> = √(4V/(πw))</span>
  <span class="equation-number">(7.36)</span>
</div>

### 7.6. Hydraulische Berechnung von Waermeuebertragern

Die hydraulische Berechnung liefert Druckverluste und die Leistung von Pumpen oder Ventilatoren fuer den Transport der Waermetraeger.

<div class="equation-block">
  <span class="equation-main">N = VΔp/η</span>
  <span class="equation-number">(7.37)</span>
</div>

### 7.7. Optimierung und Intensivierung des Waermeaustauschs

Die Optimierung sucht minimale Gesamtaufwendungen fuer Herstellung und Betrieb. Hoehere Geschwindigkeit verbessert den Waermeuebergang, erhoeht aber die Druckverluste.

<div class="equation-block">
  <span class="equation-main">S = K/P + E</span>
  <span class="equation-number">(7.38)</span>
</div>

<div class="equation-block">
  <span class="equation-main">K = C<sub>F</sub>F</span>
  <span class="equation-number">(7.39)</span>
</div>

### 7.8. Nachrechnungsberechnung von Waermeuebertragern

Die Nachrechnung wird fuer einen vorhandenen Apparat durchgefuehrt. Man vergleicht verfuegbare und erforderliche Temperaturdifferenz; bei ausreichender Reserve wird die geforderte Waermeleistung erreicht.

<div class="equation-block">
  <span class="equation-main">χ = Δt<sub>available</sub>/Δt<sub>required</sub></span>
  <span class="equation-number">(7.40)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δt<sub>required</sub> = Q/(kF)</span>
  <span class="equation-number"></span>
</div>

## Nach dem Durcharbeiten dieses Kapitels sollen Studierende

- die Rolle von "Waermeuebertrager" im Kapitel erklaeren;
- "Waermeaustauschflaeche" mit der apparativen Gestaltung biotechnologischer Produktion verbinden;
- wichtige Einflussgroessen fuer "hydraulischer Widerstand" unterscheiden;
- die Auswahl oder Bewertung des Prozesses ueber "Intensivierung" begruenden.

## Selbsttest

<section
  class="course-self-test"
  data-course-self-test
  data-locale="de"
  data-course="bioprocess-engineering"
  data-chapter="chapter-07-heating-cooling"
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
  <input type="radio" name="course-test-7-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Waermeaustauschflaeche</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>hydraulischer Widerstand</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Intensivierung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-0" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Waermeuebertrager</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Welcher Unterabschnitt gehoert direkt zur Lehrbuchstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-1" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>7.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>7.2. Klassifikation von Waermeuebertragern</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>7.3. Bauarten von Waermeuebertragern</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>7.4. Thermische Berechnung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Auf welchen Begriff soll sich die ingenieurtechnische Analyse zuerst stuetzen?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Waermeuebertrager</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-2" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Waermeaustauschflaeche</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>hydraulischer Widerstand</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Intensivierung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Was verbindet Prozesstheorie am deutlichsten mit der Apparategestaltung?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Waermeuebertrager</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Waermeaustauschflaeche</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-3" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Intensivierung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>hydraulischer Widerstand</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Waermeuebertrager</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Waermeaustauschflaeche</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Intensivierung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-4" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>hydraulischer Widerstand</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Mit welchem Thema beginnt das Kapitel in der Lehrbuchstruktur?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-5" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>7.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>7.2. Klassifikation von Waermeuebertragern</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>7.3. Bauarten von Waermeuebertragern</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>7.4. Thermische Berechnung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Welcher Unterabschnitt gehoert direkt zur Lehrbuchstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>7.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-6" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>7.2. Klassifikation von Waermeuebertragern</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>7.3. Bauarten von Waermeuebertragern</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>7.4. Thermische Berechnung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Welches Thema schliesst die Struktur des Kapitels ab?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>7.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>7.2. Klassifikation von Waermeuebertragern</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-7" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>7.8. Nachrechnungen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>7.3. Bauarten von Waermeuebertragern</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Welches Begriffspaar eignet sich fuer den Selbsttest?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>hydraulischer Widerstand / Intensivierung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Waermeuebertrager / hydraulischer Widerstand</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Waermeaustauschflaeche / Intensivierung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-8" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Waermeuebertrager / Waermeaustauschflaeche</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Was eignet sich am besten zur praktischen Begruendung der Prozessauswahl?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-9" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Intensivierung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Waermeuebertrager</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Waermeaustauschflaeche</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>hydraulischer Widerstand</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Waermeuebertrager</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-10" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Waermeaustauschflaeche</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>hydraulischer Widerstand</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Intensivierung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Welches Objekt wird in diesem Kapitel als Abbildung dargestellt?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-7-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Waermeuebertrager</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Waermeaustauschflaeche</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-11" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Einweg-Rohrbuendelwaermeuebertrager</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-7-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>hydraulischer Widerstand</span>
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
