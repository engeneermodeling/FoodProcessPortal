---
title: "Kapitel 11. Trocknung"
course: "bioprocess-engineering"
course_title: "Bioverfahrenstechnik: Prozesse und Apparate biotechnologischer Produktionen"
chapter: 11
description: "Feuchte Luft, I-x-Diagramm, Statik und Kinetik der Trocknung, Trocknerbauarten und Intensivierung."
updated: "2026-08-23"
---

## Quelle und Umfang

Materialgrundlage: das Lehrbuch "Bioverfahrenstechnik. Modul 1. Prozesse und Apparate biotechnologischer Produktionen", herausgegeben von V.L. Zavialov, NUFT, 2024.

## Struktur nach dem Lehrbuch

- 11.1. Allgemeines
- 11.2. Physikalische Eigenschaften feuchter Luft
- 11.3. Zustandsdiagramm feuchter Luft
- 11.4. Feuchtes Gut als Trocknungsobjekt
- 11.5. Statik der Trocknung
- 11.6. Kinetik der Trocknung
- 11.7. Trocknerbauarten

## Vorlesungsskript

Das Kapitel ist als klares Vorlesungsmaterial mit Formeln, Abbildungen und Beschriftungen aus Kapitel 11 des Lehrbuchs aufgebaut.

### 11.1. Allgemeines

Trocknung ist ein gekoppelter Waerme- und Stoffuebergangsprozess: Feuchte verdampft aus dem Material und wird vom Trocknungsmittel abgefuehrt. In Bio- und Lebensmittelproduktionen stabilisiert sie Produkte und verbessert die Lagerfaehigkeit.

### 11.2. Physikalische Eigenschaften feuchter Luft

Feuchte Luft wird als Mischung aus trockener Luft und Wasserdampf betrachtet. Fuer Berechnungen braucht man Partialdruecke, relative Feuchte, Feuchtegehalt, Dichte, Waermekapazitaet, Enthalpie, Taupunkt und Trocknungspotenzial.

<div class="equation-block">
  <span class="equation-main">R = m<sub>a</sub>R<sub>a</sub> + m<sub>v</sub>R<sub>v</sub></span>
  <span class="equation-number">(11.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">p = p<sub>a</sub> + p<sub>v</sub></span>
  <span class="equation-number">(11.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">φ = ρ<sub>v</sub>/ρ<sub>s</sub></span>
  <span class="equation-number">(11.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ρ<sub>v</sub> = p<sub>v</sub>/(R<sub>v</sub>T); ρ<sub>s</sub> = p<sub>s</sub>/(R<sub>v</sub>T)</span>
  <span class="equation-number">(11.4)</span>
</div>

<div class="equation-block">
  <span class="equation-main">φ = p<sub>v</sub>/p<sub>s</sub></span>
  <span class="equation-number">(11.5)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x = ρ<sub>v</sub>/ρ<sub>a</sub></span>
  <span class="equation-number">(11.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x = 0.622 p<sub>v</sub>/p<sub>a</sub></span>
  <span class="equation-number">(11.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x = 0.622 φp<sub>s</sub>/(p - φp<sub>s</sub>)</span>
  <span class="equation-number">(11.8)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ρ = ρ<sub>a</sub>(1 + x)</span>
  <span class="equation-number">(11.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">c = c<sub>a</sub> + xc<sub>v</sub></span>
  <span class="equation-number">(11.10)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = c<sub>a</sub>t + xi</span>
  <span class="equation-number">(11.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = 1.004t + (1.842t + 2500)x</span>
  <span class="equation-number">(11.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">p<sub>v</sub> = xp/(0.622 + x)</span>
  <span class="equation-number">(11.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">E = t - t<sub>w</sub></span>
  <span class="equation-number">(11.14)</span>
</div>

### 11.3. Zustandsdiagramm feuchter Luft

Das I-x-Diagramm verbindet Enthalpie, Feuchtegehalt, Temperatur, relative Feuchte und Dampfdruck und dient zur Darstellung von Erwaermung, theoretischer und realer Trocknung sowie Rueckfuehrung.

![I-x-Diagramm feuchter Luft](/images/courses/bioprocess-engineering/chapter-11/fig-11-1.webp)
*Abb. 11.1. I-x-Diagramm feuchter Luft*

![Schema eines Lufttrockners](/images/courses/bioprocess-engineering/chapter-11/fig-11-2.webp)
*Abb. 11.2. Schema eines Lufttrockners*

![Trocknungsprozess im theoretischen und realen Trockner](/images/courses/bioprocess-engineering/chapter-11/fig-11-3.webp)
*Abb. 11.3. Trocknungsprozess im theoretischen und realen Trockner*

![Trockner mit Zwischenlufterwaermung](/images/courses/bioprocess-engineering/chapter-11/fig-11-5.webp)
*Abb. 11.5. Trockner mit Zwischenlufterwaermung*

![Trockner mit teilweiser Rueckfuehrung der Abluft](/images/courses/bioprocess-engineering/chapter-11/fig-11-7.webp)
*Abb. 11.7. Trockner mit teilweiser Rueckfuehrung der Abluft*

![Trocknungsdiagramm mit teilweiser Luftrueckfuehrung](/images/courses/bioprocess-engineering/chapter-11/fig-11-8.webp)
*Abb. 11.8. Trocknungsdiagramm mit teilweiser Luftrueckfuehrung*

### 11.4. Feuchtes Material als Trocknungsobjekt

Der Feuchtegehalt wird auf die Gesamtmasse oder auf die Trockensubstanz bezogen. Freie, gebundene, Gleichgewichts- und kritische Feuchte bestimmen den Verlauf.

<div class="equation-block">
  <span class="equation-main">w = m<sub>w</sub> · 100/m</span>
  <span class="equation-number">(11.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">w<sub>c</sub> = m<sub>w</sub> · 100/m<sub>d</sub></span>
  <span class="equation-number">(11.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = W<sub>1</sub> - W<sub>2</sub></span>
  <span class="equation-number">(11.17)</span>
</div>

### 11.5. Statik der Trocknung

Die Statik der Trocknung beruht auf Stoff- und Waermebilanzen und bestimmt Luftbedarf, entfernte Feuchte, Waermebedarf und Prozesslinie.

<div class="equation-block">
  <span class="equation-main">m<sub>1</sub>(100 - w<sub>1</sub>) = m<sub>2</sub>(100 - w<sub>2</sub>)</span>
  <span class="equation-number">(11.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>1</sub> = m<sub>2</sub>(100 - w<sub>2</sub>)/(100 - w<sub>1</sub>)</span>
  <span class="equation-number">(11.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">m<sub>2</sub> = m<sub>1</sub>(100 - w<sub>1</sub>)/(100 - w<sub>2</sub>)</span>
  <span class="equation-number">(11.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = m<sub>1</sub> - m<sub>2</sub></span>
  <span class="equation-number">(11.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = m<sub>1</sub>(w<sub>1</sub> - w<sub>2</sub>)/(100 - w<sub>2</sub>)</span>
  <span class="equation-number">(11.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">W = m<sub>2</sub>(w<sub>1</sub> - w<sub>2</sub>)/(100 - w<sub>1</sub>)</span>
  <span class="equation-number">(11.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L = W/(x<sub>2</sub> - x<sub>0</sub>)</span>
  <span class="equation-number">(11.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">l = L/W = 1/(x<sub>2</sub> - x<sub>0</sub>)</span>
  <span class="equation-number">(11.25)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Q = L(I<sub>1</sub> - I<sub>0</sub>)</span>
  <span class="equation-number">(11.26)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = Q/W = l(I<sub>1</sub> - I<sub>0</sub>)</span>
  <span class="equation-number">(11.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δ = q<sub>d</sub> + q<sub>m</sub> - q<sub>loss</sub></span>
  <span class="equation-number">(11.28)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I<sub>2</sub> = I<sub>1</sub> + Δ/l</span>
  <span class="equation-number">(11.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">l = (I<sub>1</sub> - I<sub>0</sub>)/(I<sub>2</sub> - I<sub>0</sub>)</span>
  <span class="equation-number">(11.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I<sub>mix</sub> = (L<sub>0</sub>I<sub>0</sub> + L<sub>r</sub>I<sub>2</sub>)/(L<sub>0</sub> + L<sub>r</sub>)</span>
  <span class="equation-number">(11.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">x<sub>mix</sub> = (L<sub>0</sub>x<sub>0</sub> + L<sub>r</sub>x<sub>2</sub>)/(L<sub>0</sub> + L<sub>r</sub>)</span>
  <span class="equation-number">(11.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">η = Q<sub>evap</sub>/Q<sub>total</sub></span>
  <span class="equation-number">(11.33)</span>
</div>

### 11.6. Kinetik der Trocknung

Die Kinetik beschreibt die Aenderung der Materialfeuchte mit der Zeit. Bei konstanter Geschwindigkeit dominiert aeusserer Uebergang, bei fallender Geschwindigkeit die innere Diffusion.

<div class="equation-block">
  <span class="equation-main">N = W/(Fτ)</span>
  <span class="equation-number">(11.34)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N = -(G<sub>d</sub>/F) dw<sub>c</sub>/dτ</span>
  <span class="equation-number">(11.35)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N = k<sub>y</sub>(y<sub>s</sub> - y)</span>
  <span class="equation-number">(11.36)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N = α(t - t<sub>s</sub>)/r</span>
  <span class="equation-number">(11.37)</span>
</div>

<div class="equation-block">
  <span class="equation-main">τ = (G<sub>d</sub>/F) ∫ dw<sub>c</sub>/N</span>
  <span class="equation-number">(11.38)</span>
</div>

<div class="equation-block">
  <span class="equation-main">N = K(w<sub>c</sub> - w<sub>eq</sub>)</span>
  <span class="equation-number">(11.39)</span>
</div>

<div class="equation-block">
  <span class="equation-main">τ = (G<sub>d</sub>/(FK)) ln[(w<sub>c0</sub> - w<sub>eq</sub>)/(w<sub>c</sub> - w<sub>eq</sub>)]</span>
  <span class="equation-number">(11.40)</span>
</div>

<div class="equation-block">
  <span class="equation-main">u = W/(Vτ)</span>
  <span class="equation-number">(11.41)</span>
</div>

<div class="equation-block">
  <span class="equation-main">w<sub>avg</sub> = W/(ρ<sub>a</sub>F)</span>
  <span class="equation-number">(11.42)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dw<sub>c</sub>/dτ = -k(w<sub>c</sub> - w<sub>eq</sub>)</span>
  <span class="equation-number">(11.43)</span>
</div>

![Trocknungskurve eines feuchten Materials](/images/courses/bioprocess-engineering/chapter-11/fig-11-9.webp)
*Abb. 11.9. Trocknungskurve eines feuchten Materials*

![Trocknungsgeschwindigkeitskurven verschiedener Materialien](/images/courses/bioprocess-engineering/chapter-11/fig-11-10.webp)
*Abb. 11.10. Trocknungsgeschwindigkeitskurven verschiedener Materialien*

### 11.7. Trocknerbauarten

Die Trocknerbauart richtet sich nach Aggregatzustand, Waermeempfindlichkeit, Korngroesse, Verweilzeit und geforderter Produktqualitaet.

<div class="equation-block">
  <span class="equation-main">τ = (1/k) ln[(w<sub>c0</sub> - w<sub>eq</sub>)/(w<sub>c</sub> - w<sub>eq</sub>)]</span>
  <span class="equation-number">(11.44)</span>
</div>

![Kammertrockner](/images/courses/bioprocess-engineering/chapter-11/fig-11-13.webp)
*Abb. 11.13. Kammertrockner*

![Trommeltrockner](/images/courses/bioprocess-engineering/chapter-11/fig-11-14.webp)
*Abb. 11.14. Trommeltrockner*

![Einbauten in einer Trommeltrocknung](/images/courses/bioprocess-engineering/chapter-11/fig-11-15.webp)
*Abb. 11.15. Einbauten in einer Trommeltrocknung*

![Tunneltrockner](/images/courses/bioprocess-engineering/chapter-11/fig-11-16.webp)
*Abb. 11.16. Tunneltrockner*

![Bandtrockner](/images/courses/bioprocess-engineering/chapter-11/fig-11-17.webp)
*Abb. 11.17. Bandtrockner*

![Schachttrockner](/images/courses/bioprocess-engineering/chapter-11/fig-11-18.webp)
*Abb. 11.18. Schachttrockner*

![Spruehtrockner](/images/courses/bioprocess-engineering/chapter-11/fig-11-19.webp)
*Abb. 11.19. Spruehtrockner*

![Wirbelschichttrockner](/images/courses/bioprocess-engineering/chapter-11/fig-11-20.webp)
*Abb. 11.20. Wirbelschichttrockner*

![Fontaenentrockner](/images/courses/bioprocess-engineering/chapter-11/fig-11-21.webp)
*Abb. 11.21. Fontaenentrockner*

![Doppelwalzentrockner](/images/courses/bioprocess-engineering/chapter-11/fig-11-22.webp)
*Abb. 11.22. Doppelwalzentrockner*

![Gefriertrockner](/images/courses/bioprocess-engineering/chapter-11/fig-11-23.webp)
*Abb. 11.23. Gefriertrockner*

![Strahlungstrockner](/images/courses/bioprocess-engineering/chapter-11/fig-11-24.webp)
*Abb. 11.24. Strahlungstrockner*

![Hochfrequenztrockner](/images/courses/bioprocess-engineering/chapter-11/fig-11-25.webp)
*Abb. 11.25. Hochfrequenztrockner*

## Nach dem Durcharbeiten dieses Kapitels sollen Studierende

- die Rolle von "feuchte Luft" im Kapitel erklaeren;
- "Stoffbilanz" mit der apparativen Gestaltung biotechnologischer Produktion verbinden;
- wichtige Einflussgroessen fuer "Waermebilanz" unterscheiden;
- die Auswahl oder Bewertung des Prozesses ueber "Trocknungskinetik" begruenden.

## Selbsttest

<section
  class="course-self-test"
  data-course-self-test
  data-locale="de"
  data-course="bioprocess-engineering"
  data-chapter="chapter-11-drying"
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
  <input type="radio" name="course-test-11-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Stoffbilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Waermebilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Trocknungskinetik</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-0" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>feuchte Luft</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Welcher Unterabschnitt gehoert direkt zur Lehrbuchstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-1" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>11.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>11.2. Physikalische Eigenschaften feuchter Luft</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>11.3. Zustandsdiagramm feuchter Luft</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>11.4. Feuchtes Gut als Trocknungsobjekt</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Auf welchen Begriff soll sich die ingenieurtechnische Analyse zuerst stuetzen?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>feuchte Luft</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-2" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Stoffbilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Waermebilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Trocknungskinetik</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Was verbindet Prozesstheorie am deutlichsten mit der Apparategestaltung?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>feuchte Luft</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Stoffbilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-3" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Trocknungskinetik</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-3" value="3" data-correct="0" />
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
  <input type="radio" name="course-test-11-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>feuchte Luft</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Stoffbilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Trocknungskinetik</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-4" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Waermebilanz</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Mit welchem Thema beginnt das Kapitel in der Lehrbuchstruktur?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-5" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>11.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>11.2. Physikalische Eigenschaften feuchter Luft</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>11.3. Zustandsdiagramm feuchter Luft</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>11.4. Feuchtes Gut als Trocknungsobjekt</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Welcher Unterabschnitt gehoert direkt zur Lehrbuchstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>11.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-6" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>11.2. Physikalische Eigenschaften feuchter Luft</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>11.3. Zustandsdiagramm feuchter Luft</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>11.4. Feuchtes Gut als Trocknungsobjekt</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Welches Thema schliesst die Struktur des Kapitels ab?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>11.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>11.2. Physikalische Eigenschaften feuchter Luft</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-7" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>11.7. Trocknerbauarten</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>11.3. Zustandsdiagramm feuchter Luft</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Welches Begriffspaar eignet sich fuer den Selbsttest?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Waermebilanz / Trocknungskinetik</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>feuchte Luft / Waermebilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Stoffbilanz / Trocknungskinetik</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-8" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>feuchte Luft / Stoffbilanz</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Was eignet sich am besten zur praktischen Begruendung der Prozessauswahl?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-9" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Trocknungskinetik</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>feuchte Luft</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Stoffbilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Waermebilanz</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>feuchte Luft</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-10" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Stoffbilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Waermebilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Trocknungskinetik</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Welches Objekt wird in diesem Kapitel als Abbildung dargestellt?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-11-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>feuchte Luft</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Stoffbilanz</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-11" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>I-x-Diagramm feuchter Luft</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-11-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Waermebilanz</span>
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
