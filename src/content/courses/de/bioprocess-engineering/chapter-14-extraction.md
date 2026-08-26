---
title: "Kapitel 14. Extraktion"
course: "bioprocess-engineering"
course_title: "Bioverfahrenstechnik: Prozesse und Apparate biotechnologischer Produktionen"
chapter: 14
description: "Extraktion aus Feststoffen, Diffusionswiderstand, Prozessberechnung, Intensivierung und Extraktorbauarten."
updated: "2026-08-23"
---

## Quelle und Umfang

Materialgrundlage: das Lehrbuch "Bioverfahrenstechnik. Modul 1. Prozesse und Apparate biotechnologischer Produktionen", herausgegeben von V.L. Zavialov, NUFT, 2024.

Die Seite folgt der Logik des entsprechenden Lehrbuchkapitels; die Testfragen wurden als Lernwerkzeug zur Selbstkontrolle ergänzt.

## Struktur nach dem Lehrbuch

- 14.1. Allgemeines
- 14.2. Extraktion aus einem Feststoff
- 14.2.4. Berechnung des Extraktionsprozesses
- 14.2.5. Intensivierungsmethoden
- 14.2.7. Apparate fuer die Extraktion aus Feststoffen

## Vorlesungsskript

Extraktion ist ein Stoffuebertragungsprozess, bei dem eine oder mehrere Komponenten aus einem festen oder fluessigen Stoff durch ein Loesungsmittel entfernt werden, das die Zielsubstanz selektiv loest. In Bio- und Lebensmittelprozessen dient sie zur Gewinnung von Enzymen, Pflanzenextrakten, Aromastoffen, biologisch aktiven Stoffen und weiteren Zielkomponenten.

### 14.1. Allgemeines

Dem Extraktor werden Rohstoff und Extraktionsmittel zugefuehrt; abgefuehrt werden Extrakt und Rueckstand der festen Phase. Je nach Ausgangsphase unterscheidet man Feststoff-Fluessig- und Fluessig-Fluessig-Systeme. Dieser Abschnitt konzentriert sich auf die Feststoffextraktion, bei der Selektivitaet des Loesungsmittels, Hydromodul, Phasenfuehrung und Rohstoffvorbereitung entscheidend sind.

![Vorbehandlungsmethoden des Rohstoffs vor der Extraktion](/images/courses/bioprocess-engineering/chapter-14/fig-14-1.webp)
*Abb. 14.1. Vorbehandlungsmethoden des Rohstoffs vor der Extraktion*

![Klassifikation von Extraktionsmitteln](/images/courses/bioprocess-engineering/chapter-14/fig-14-2.webp)
*Abb. 14.2. Klassifikation von Extraktionsmitteln*

### 14.2.1. Diffusionswiderstand im Partikel

Die Extraktionsgeschwindigkeit ist proportional zur Triebkraft und umgekehrt proportional zum gesamten Stoffuebertragungswiderstand. Bei kapillar-poroesen Stoffen sind Zellwandaufschluss, Zerkleinerung, Erwaermung, Fermentation oder andere Vorbehandlungen wichtig. Danach bildet haeufig die molekulare Diffusion in den Poren den Hauptwiderstand.

![Schema der Stoffuebertragung der Zielkomponente](/images/courses/bioprocess-engineering/chapter-14/fig-14-3.webp)
*Abb. 14.3. Schema der Stoffuebertragung der Zielkomponente*

### 14.2.2. Physikalischer Sinn der Feststoff-Fluessig-Extraktion

Der Prozess umfasst das Eindringen des Loesungsmittels in die Poren, das Loesen der Zielkomponente, den inneren Transport zur Phasengrenze und die Stoffabgabe in das Extraktionsmittel. Ist die innere Diffusion langsamer, begrenzen Diffusionskoeffizient und Partikelgroesse den Prozess; ist die aeussere Stufe langsamer, bestimmen Stoffuebergangskoeffizient und Grenzschichtdicke.

<div class="equation-block">
  <span class="equation-main">q = L/G</span>
  <span class="equation-number">(14.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = -D<sub>in</sub>Fτ(C<sub>1</sub> - C′<sub>1</sub>)/R</span>
  <span class="equation-number">(14.2)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M/[Fτ(C<sub>1</sub> - C′<sub>1</sub>)] = D<sub>in</sub>/R</span>
  <span class="equation-number">(14.3)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M/[Fτ(C′<sub>1</sub> - C<sub>2</sub>)] = D<sub>out</sub>/δ = β</span>
  <span class="equation-number">(14.4)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = [R/D<sub>in</sub> + δ/D<sub>out</sub>]<sup>-1</sup>(C<sub>1</sub> - C<sub>2</sub>)Fτ</span>
  <span class="equation-number">(14.5)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = [R/D<sub>in</sub> + 1/β]<sup>-1</sup>(C<sub>1</sub> - C<sub>2</sub>)Fτ</span>
  <span class="equation-number">(14.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Bi<sub>D</sub> = βR/D<sub>in</sub></span>
  <span class="equation-number">(14.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">q = (C<sub>p</sub> - C<sub>k</sub>)/(C′<sub>k</sub> - C′<sub>p</sub>)</span>
  <span class="equation-number">(14.8)</span>
</div>

![Extraktionskurven fuer Gegenstrom- und Gleichstromprozesse](/images/courses/bioprocess-engineering/chapter-14/fig-14-4.webp)
*Abb. 14.4. Extraktionskurven fuer Gegenstrom- und Gleichstromprozesse*

### 14.2.3. Prozessmerkmale

Die wichtigsten Kontaktarten sind Gegenstrom, Gleichstrom und kombinierte Fuehrung. Gegenstrom ermoeglicht die vollstaendigste Rueckgewinnung, verlangt aber ein abgestimmtes Hydromodul. Mehr Extraktionsmittel erhoeht die Triebkraft, verduennt jedoch den Extrakt und erhoeht den Aufwand fuer die nachfolgende Konzentration.

<div class="equation-block">
  <span class="equation-main">q<sub>i</sub> = (C<sub>i-1</sub> - C<sub>i</sub>)/(C′<sub>i-1</sub> - C′<sub>i</sub>)</span>
  <span class="equation-number">(14.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">∂c/∂τ = D(∂<sup>2</sup>c/∂x<sup>2</sup> + ∂<sup>2</sup>c/∂y<sup>2</sup> + ∂<sup>2</sup>c/∂z<sup>2</sup>)</span>
  <span class="equation-number">(14.10)</span>
</div>

![Dreiecksdiagramm fuer ein Feststoff-Fluessig-System](/images/courses/bioprocess-engineering/chapter-14/fig-14-5.webp)
*Abb. 14.5. Dreiecksdiagramm fuer ein Feststoff-Fluessig-System*

### 14.2.4. Berechnung des Extraktionsprozesses

Die Berechnung umfasst die Kinetik des inneren und aeusseren Stofftransports, Leistung, Stoff- und Waermebilanz sowie die grafische Bestimmung theoretischer Stufen. Fuer ingenieurtechnische Abschaetzungen werden Biot-, Fourier-, Nusselt-, Prandtl- und Reynolds-Kriterien mit entsprechenden Korrelationen genutzt.

<div class="equation-block">
  <span class="equation-main">q = dG/(Fdτ) = -D dc/dn</span>
  <span class="equation-number">(14.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">D = kT/(6πμr)</span>
  <span class="equation-number">(14.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = -DFτ(C<sub>1</sub> - C′<sub>1</sub>)/R</span>
  <span class="equation-number">(14.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = βFτ(C′<sub>1</sub> - C<sub>2</sub>)</span>
  <span class="equation-number">(14.14)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = [R/D + 1/β]<sup>-1</sup>(C<sub>1</sub> - C<sub>2</sub>)Fτ</span>
  <span class="equation-number">(14.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Bi<sub>D</sub> = βR/D</span>
  <span class="equation-number">(14.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Fo<sub>D</sub> = Dτ/R<sup>2</sup></span>
  <span class="equation-number">(14.17)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 0.99Pr<sub>D</sub><sup>1/3</sup>Re<sup>1/3</sup></span>
  <span class="equation-number">(14.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 0.99Pr<sub>D</sub><sup>1/3</sup>Re<sup>1/3</sup>[1 + Re/16 + Re<sup>2</sup>ln(Re)/160]</span>
  <span class="equation-number">(14.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = Pr<sub>D</sub><sup>1/3</sup>(0.51Re<sup>0.5</sup> + 0.0224Re<sup>0.78</sup>)</span>
  <span class="equation-number">(14.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 0.0387(Pr<sub>D</sub>Gr)<sup>1/3</sup></span>
  <span class="equation-number">(14.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 0.38Pr<sub>D</sub><sup>0.4</sup>(Re<sup>0.2</sup> + 0.102Re<sup>0.8</sup>)</span>
  <span class="equation-number">(14.22)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Re = 2dw<sub>f</sub> / [3(1 - ε)ν]</span>
  <span class="equation-number">(14.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 0.8Pr<sub>D</sub><sup>1/3</sup>Re<sup>1/2</sup></span>
  <span class="equation-number">(14.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 4.33 · 10<sup>-3</sup>Re<sup>0.73</sup>Pr<sub>D</sub><sup>0.33</sup></span>
  <span class="equation-number">(14.25)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 3.8 · 10<sup>-4</sup>Re<sup>1.38</sup>Pr<sub>D</sub><sup>0.33</sup></span>
  <span class="equation-number">(14.26)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Nu<sub>D</sub> = 1.41 · 10<sup>-2</sup>RePr<sub>D</sub><sup>0.5</sup></span>
  <span class="equation-number">(14.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">∂c/∂τ = D(∂<sup>2</sup>c/∂x<sup>2</sup> + ∂<sup>2</sup>c/∂y<sup>2</sup> + ∂<sup>2</sup>c/∂z<sup>2</sup>) - (w<sub>x</sub>∂c/∂x + w<sub>y</sub>∂c/∂y + w<sub>z</sub>∂c/∂z)</span>
  <span class="equation-number">(14.28)</span>
</div>

### 14.2.4.1. Leistung und Stoffbilanz

Die Leistung eines Extraktors haengt mit Nutzvolumen, Feststoffbeladung, Prozessdauer und Zahl der Apparate in der Batterie zusammen. Stoffbilanzen beruecksichtigen Rohstoff- und Loesungsmittelstroeme, Konzentrationen der Zielkomponente in Feststoff und Fluessigkeit, Quellen des Rohstoffs und im Feststoff zurueckgehaltenes Loesungsmittel.

<div class="equation-block">
  <span class="equation-main">G = V<sub>k</sub>Bn/τ</span>
  <span class="equation-number">(14.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L = L<sub>1</sub> + L<sub>2</sub></span>
  <span class="equation-number">(14.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L<sub>2</sub>dy = Ldx</span>
  <span class="equation-number">(14.31)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L<sub>2</sub>(y<sub>p</sub> - y<sub>k</sub>) = L(x<sub>k</sub> - x<sub>p</sub>)</span>
  <span class="equation-number">(14.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L<sub>2</sub>(y<sub>p</sub> - y) = L(x<sub>k</sub> - x)</span>
  <span class="equation-number">(14.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>p</sub> + W<sub>p</sub> = W<sub>k</sub> + G<sub>k</sub></span>
  <span class="equation-number">(14.34)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>p</sub>x<sub>p</sub> + W<sub>p</sub>y<sub>p</sub> = W<sub>k</sub>y<sub>k</sub> + G<sub>k</sub>x<sub>k</sub></span>
  <span class="equation-number">(14.35)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>p</sub>C<sub>G,p</sub>t<sub>G,p</sub> + W<sub>p</sub>C<sub>W,p</sub>t<sub>W,p</sub> + Q<sub>add</sub> = G<sub>k</sub>C<sub>G,k</sub>t<sub>G,k</sub> + W<sub>k</sub>C<sub>W,k</sub>t<sub>W,k</sub> + Q<sub>loss</sub></span>
  <span class="equation-number">(14.36)</span>
</div>

### 14.2.4.2. Grafische Bestimmung der Stufen

Fuer Feststoff-Fluessig-Systeme werden Dreiecksdiagramme und Arbeitslinien verwendet. Die Hebelregel liefert Zusammensetzung und Menge der Mischungen; die Stufenkonstruktion zwischen Arbeits- und Gleichgewichtslinie ergibt die erforderliche Zahl theoretischer Stufen oder Apparate.

<div class="equation-block">
  <span class="equation-main">G<sub>M</sub> · MS = G<sub>N</sub> · SN</span>
  <span class="equation-number">(14.37)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>F</sub> + S<sub>0</sub> = G<sub>R</sub> + S<sub>E</sub></span>
  <span class="equation-number">(14.38)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>F</sub>x<sub>F</sub> + S<sub>0</sub>y<sub>0</sub> = G<sub>R</sub>x<sub>R</sub> + S<sub>E</sub>y<sub>E</sub></span>
  <span class="equation-number">(14.39)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>F</sub> - S<sub>E</sub> = G<sub>i</sub> - S<sub>i+1</sub></span>
  <span class="equation-number">(14.40)</span>
</div>

<div class="equation-block">
  <span class="equation-main">G<sub>F</sub>x<sub>F</sub> - S<sub>E</sub>y<sub>E</sub> = G<sub>i</sub>x<sub>i</sub> - S<sub>i+1</sub>y<sub>i+1</sub></span>
  <span class="equation-number">(14.41)</span>
</div>

<div class="equation-block">
  <span class="equation-main">P = G<sub>F</sub> - S<sub>E</sub> = G<sub>1</sub> - S<sub>2</sub> = G<sub>R</sub> - S<sub>0</sub></span>
  <span class="equation-number">(14.42)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Px<sub>P</sub> = G<sub>F</sub>x<sub>F</sub> - S<sub>E</sub>y<sub>E</sub> = G<sub>1</sub>x<sub>1</sub> - S<sub>2</sub>y<sub>2</sub> = ... = G<sub>R</sub>x<sub>R</sub> - S<sub>0</sub>y<sub>0</sub></span>
  <span class="equation-number">(14.43)</span>
</div>

![Bestimmung von Zusammensetzung und Menge gebildeter Mischungen](/images/courses/bioprocess-engineering/chapter-14/fig-14-6.webp)
*Abb. 14.6. Bestimmung von Zusammensetzung und Menge gebildeter Mischungen*

![Schema der n-stufigen Gegenstromextraktion](/images/courses/bioprocess-engineering/chapter-14/fig-14-7.webp)
*Abb. 14.7. Schema der n-stufigen Gegenstromextraktion*

![Grafische Berechnung der mehrstufigen Gegenstromextraktion aus Feststoffen](/images/courses/bioprocess-engineering/chapter-14/fig-14-8.webp)
*Abb. 14.8. Grafische Berechnung der mehrstufigen Gegenstromextraktion aus Feststoffen*

![Grafische Bestimmung der Konzentrationsstufen](/images/courses/bioprocess-engineering/chapter-14/fig-14-9.webp)
*Abb. 14.9. Grafische Bestimmung der Konzentrationsstufen*

### 14.2.5. Intensivierungsmethoden

Die Intensivierung soll Ausbeute erhoehen, Prozessdauer verkuerzen sowie Energiebedarf und Metallverbrauch der Apparate senken. Eingesetzt werden geeignete Phasenfuehrung, Zerkleinerung, Temperaturerhoehung, Vibration, Pulsation, Ultraschall, elektrische und elektromagnetische Felder sowie diskret-impulsfoermige Energiezufuhr.

![Klassifikation der Methoden zur Intensivierung des Extraktionsprozesses](/images/courses/bioprocess-engineering/chapter-14/fig-14-10.webp)
*Abb. 14.10. Klassifikation der Methoden zur Intensivierung des Extraktionsprozesses*

![Allgemeine Klassifikation von Apparaten fuer die Extraktion aus Feststoffen](/images/courses/bioprocess-engineering/chapter-14/fig-14-11.webp)
*Abb. 14.11. Allgemeine Klassifikation von Apparaten fuer die Extraktion aus Feststoffen*

![Klassifikation der Extraktionsapparate nach Betriebsweise](/images/courses/bioprocess-engineering/chapter-14/fig-14-12.webp)
*Abb. 14.12. Klassifikation der Extraktionsapparate nach Betriebsweise*

### 14.2.7. Apparate fuer die Extraktion aus Feststoffen

Extraktoren werden nach Betriebsweise, Phasenkontakt, Feststofftransport und Energieeintrag klassifiziert. Diskontinuierliche Apparate umfassen Mazerations-, Umlauf-, Ruehr-, kombinierte und Kavitationsausfuehrungen. Kontinuierliche Apparate koennen Saeulen-, Schnecken-, geneigte, rotierende oder vibrierende Extraktoren sein.

![Schemata diskontinuierlicher Extraktoren](/images/courses/bioprocess-engineering/chapter-14/fig-14-13.webp)
*Abb. 14.13. Schemata diskontinuierlicher Extraktoren*

![Extraktor mit aufsteigendem Extraktionsmittelstrom](/images/courses/bioprocess-engineering/chapter-14/fig-14-14.webp)
*Abb. 14.14. Extraktor mit aufsteigendem Extraktionsmittelstrom*

![Extraktor mit absteigendem Extraktionsmittelstrom](/images/courses/bioprocess-engineering/chapter-14/fig-14-15.webp)
*Abb. 14.15. Extraktor mit absteigendem Extraktionsmittelstrom*

![Kombinierter diskontinuierlicher Extraktor](/images/courses/bioprocess-engineering/chapter-14/fig-14-16.webp)
*Abb. 14.16. Kombinierter diskontinuierlicher Extraktor*

![Extraktor mit Kavitationseffekt](/images/courses/bioprocess-engineering/chapter-14/fig-14-17.webp)
*Abb. 14.17. Extraktor mit Kavitationseffekt*

![Vibroextraktor mit Siebbehaelter](/images/courses/bioprocess-engineering/chapter-14/fig-14-18.webp)
*Abb. 14.18. Vibroextraktor mit Siebbehaelter*

![Rotations-Diffusionsanlage](/images/courses/bioprocess-engineering/chapter-14/fig-14-19.webp)
*Abb. 14.19. Rotations-Diffusionsanlage*

![Schema eines horizontalen Schneckenextraktors](/images/courses/bioprocess-engineering/chapter-14/fig-14-20.webp)
*Abb. 14.20. Schema eines horizontalen Schneckenextraktors*

![Horizontaler Schneckenextraktor](/images/courses/bioprocess-engineering/chapter-14/fig-14-21.webp)
*Abb. 14.21. Horizontaler Schneckenextraktor*

![Feder-Schaufel-Horizontalextraktor](/images/courses/bioprocess-engineering/chapter-14/fig-14-22.webp)
*Abb. 14.22. Feder-Schaufel-Horizontalextraktor*

![Geneigter Extraktor](/images/courses/bioprocess-engineering/chapter-14/fig-14-23.webp)
*Abb. 14.23. Geneigter Extraktor*

![Doppelsaeulenextraktor ND-1000](/images/courses/bioprocess-engineering/chapter-14/fig-14-24.webp)
*Abb. 14.24. Doppelsaeulenextraktor ND-1000*

![Prinzipschema eines Vibroextraktors](/images/courses/bioprocess-engineering/chapter-14/fig-14-25.webp)
*Abb. 14.25. Prinzipschema eines Vibroextraktors*

![Vibrotransportboden](/images/courses/bioprocess-engineering/chapter-14/fig-14-26.webp)
*Abb. 14.26. Vibrotransportboden*

![Vibrationsextraktor](/images/courses/bioprocess-engineering/chapter-14/fig-14-27.webp)
*Abb. 14.27. Vibrationsextraktor*

## Nach dem Durcharbeiten dieses Kapitels sollen Studierende

- die Rolle von "Extraktionsmittel" im Kapitel erklaeren;
- "Feststoff-Fluessig-System" mit der apparativen Gestaltung biotechnologischer Produktion verbinden;
- wichtige Einflussgroessen fuer "Diffusionswiderstand" unterscheiden;
- die Auswahl oder Bewertung des Prozesses ueber "Extraktor" begruenden.

## Selbsttest

<section
  class="course-self-test"
  data-course-self-test
  data-locale="de"
  data-course="bioprocess-engineering"
  data-chapter="chapter-14-extraction"
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
  <input type="radio" name="course-test-14-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Feststoff-Fluessig-System</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Diffusionswiderstand</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-0" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Extraktionsmittel</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Extraktor</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Welcher Unterabschnitt gehoert direkt zur Lehrbuchstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>14.2. Extraktion aus einem Feststoff</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>14.2.4. Berechnung des Extraktionsprozesses</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>14.2.5. Intensivierungsmethoden</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-1" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>14.1. Allgemeines</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Auf welchen Begriff soll sich die ingenieurtechnische Analyse zuerst stuetzen?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-2" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Feststoff-Fluessig-System</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Extraktionsmittel</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Diffusionswiderstand</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Extraktor</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Was verbindet Prozesstheorie am deutlichsten mit der Apparategestaltung?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Extraktionsmittel</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-3" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Extraktor</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Feststoff-Fluessig-System</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Diffusionswiderstand</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Extraktionsmittel</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Feststoff-Fluessig-System</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-4" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Diffusionswiderstand</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Extraktor</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Mit welchem Thema beginnt das Kapitel in der Lehrbuchstruktur?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>14.2. Extraktion aus einem Feststoff</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>14.2.4. Berechnung des Extraktionsprozesses</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>14.2.5. Intensivierungsmethoden</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-5" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>14.1. Allgemeines</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Welcher Unterabschnitt gehoert direkt zur Lehrbuchstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-6" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>14.2. Extraktion aus einem Feststoff</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>14.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>14.2.4. Berechnung des Extraktionsprozesses</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>14.2.5. Intensivierungsmethoden</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Welches Thema schliesst die Struktur des Kapitels ab?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>14.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-7" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>14.2.7. Apparate fuer die Extraktion aus Feststoffen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>14.2. Extraktion aus einem Feststoff</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>14.2.4. Berechnung des Extraktionsprozesses</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Welches Begriffspaar eignet sich fuer den Selbsttest?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Diffusionswiderstand / Extraktor</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Extraktionsmittel / Diffusionswiderstand</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-8" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Extraktionsmittel / Feststoff-Fluessig-System</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Feststoff-Fluessig-System / Extraktor</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Was eignet sich am besten zur praktischen Begruendung der Prozessauswahl?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Extraktionsmittel</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Feststoff-Fluessig-System</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Diffusionswiderstand</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-9" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Extraktor</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-10" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Feststoff-Fluessig-System</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Extraktionsmittel</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Diffusionswiderstand</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Extraktor</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Welches Objekt wird in diesem Kapitel als Abbildung dargestellt?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-14-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Extraktionsmittel</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-11" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Vorbehandlungsmethoden des Rohstoffs vor der Extraktion</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Feststoff-Fluessig-System</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-14-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Diffusionswiderstand</span>
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
