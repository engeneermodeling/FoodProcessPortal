---
title: "Kapitel 15. Kristallisation"
course: "bioprocess-engineering"
course_title: "Bioverfahrenstechnik: Prozesse und Apparate biotechnologischer Produktionen"
chapter: 15
description: "Physikalische Grundlagen, Kinetik, Keimbildung, Kristallwachstum, Apparate und Berechnungsprinzipien fuer Kristallisatoren."
updated: "2026-08-23"
---

## Quelle und Umfang

Materialgrundlage: das Lehrbuch "Bioverfahrenstechnik. Modul 1. Prozesse und Apparate biotechnologischer Produktionen", herausgegeben von V.L. Zavialov, NUFT, 2024.

## Struktur nach dem Lehrbuch

- 15.1. Allgemeines
- 15.2. Physikalische Grundlagen der Kristallisation aus Loesungen
- 15.3. Kinetik des Kristallisationsprozesses
- 15.4. Kristallbildung
- 15.5. Kristallwachstum
- 15.10. Einflussfaktoren
- 15.11. Kristallisationsapparate
- 15.12. Grundprinzipien der Berechnung

## Vorlesungsskript

Kristallisation ist ein Stoffuebertragungsprozess, bei dem sich aus Loesungen, Schmelzen, Gasen oder Daempfen eine feste Phase in Form von Kristallen bildet. In Lebensmittel- und Bioprozessen dient sie zur Gewinnung und Reinigung von Saccharose, Glucose, Lactose, Fructose, Zitronensaeure, Salzen und anderen kristallinen Produkten.

### 15.1. Allgemeines

Ein Kristall besitzt ein geordnetes Gitter; seine Form wird durch Symmetrie, Oberflaechenenergie der Flaechen und Wachstumsbedingungen bestimmt. Industrielle Kristallisation erfolgt meist aus uebersaettigten Loesungen. Sie kann durch Kuehlung, Loesungsmittelverdampfung, Ausfrieren, Aussalzen, chemische Reaktion oder kombinierte Einwirkungen ablaufen.

![Saccharosekristall](/images/courses/bioprocess-engineering/chapter-15/fig-15-1.webp)
*Abb. 15.1. Saccharosekristall*

### 15.2. Physikalische Grundlagen der Kristallisation aus Loesungen

Die Statik beschreibt das Gleichgewicht zwischen Kristallen und Mutterloesung; die Kinetik die Geschwindigkeit des Uebergangs von der fluessigen in die feste Phase; die Dynamik die zeitliche Aenderung der Parameter. Triebkraft ist die Uebersaettigung, also der Konzentrationsueberschuss gegenueber der Gleichgewichtsloeslichkeit.

<div class="equation-block">
  <span class="equation-main">Π = c - c<sub>s</sub></span>
  <span class="equation-number">(15.1)</span>
</div>

<div class="equation-block">
  <span class="equation-main">α = c/c<sub>s</sub></span>
  <span class="equation-number">(15.2)</span>
</div>

![Loeslichkeitsdiagramm des binaeren Systems Saccharose-Wasser](/images/courses/bioprocess-engineering/chapter-15/fig-15-2.webp)
*Abb. 15.2. Loeslichkeitsdiagramm des binaeren Systems Saccharose-Wasser*

### 15.3. Kinetik des Kristallisationsprozesses

Die Kinetik umfasst zwei Hauptstufen: Bildung von Kristallisationszentren und Kristallwachstum. Kristallisationskurven zeigen Aufbau der Uebersaettigung, latente Keimbildungszeit und Wachstumsperiode. Frischloesung und Verdampfung koennen die erforderliche Uebersaettigung aufrechterhalten.

<div class="equation-block">
  <span class="equation-main">τ<sub>l</sub> = τ<sub>2</sub> - τ<sub>1</sub></span>
  <span class="equation-number">(15.3)</span>
</div>

![Kinematische Kristallisationskurven](/images/courses/bioprocess-engineering/chapter-15/fig-15-3.webp)
*Abb. 15.3. Kinematische Kristallisationskurven*

### 15.4. Kristallbildung

Kristallisationszentren entstehen durch homogene oder heterogene Keimbildung. In realen industriellen Loesungen, besonders Zuckerloesungen, ueberwiegt der heterogene Mechanismus: Verunreinigungen, Ruehren, Viskositaet, Ultraschall, elektrische und magnetische Felder, Temperaturschwankungen und Impfkristalle beeinflussen den Prozess.

<div class="equation-block">
  <span class="equation-main">δF = -[(μ<sub>1</sub> - μ<sub>2</sub>)/V] + σS</span>
  <span class="equation-number">(15.4)</span>
</div>

<div class="equation-block">
  <span class="equation-main">δF = 4πr<sup>2</sup>σ - (4/3)πr<sup>3</sup>(μ<sub>1</sub> - μ<sub>2</sub>)/V</span>
  <span class="equation-number">(15.5)</span>
</div>

<div class="equation-block">
  <span class="equation-main">r<sub>k</sub> = 2σV/(μ<sub>1</sub> - μ<sub>2</sub>)</span>
  <span class="equation-number">(15.6)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ΔF<sub>max</sub> = (δF)<sub>max</sub> = σS<sub>k</sub>/3 = 16πσ<sup>3</sup>V<sup>2</sup>/[3(μ<sub>1</sub> - μ<sub>2</sub>)<sup>2</sup>]</span>
  <span class="equation-number">(15.7)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = K exp(-ΔF<sub>max</sub>/RT)</span>
  <span class="equation-number">(15.8)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = K exp{-16πσ<sup>3</sup>V<sup>2</sup>/[3RT(μ<sub>1</sub> - μ<sub>2</sub>)<sup>2</sup>]}</span>
  <span class="equation-number">(15.9)</span>
</div>

<div class="equation-block">
  <span class="equation-main">μ<sub>1</sub> = RT ln c + j</span>
  <span class="equation-number">(15.10)</span>
</div>

<div class="equation-block">
  <span class="equation-main">μ<sub>2</sub> = RT ln c<sub>s</sub> + j</span>
  <span class="equation-number">(15.11)</span>
</div>

<div class="equation-block">
  <span class="equation-main">μ<sub>1</sub> - μ<sub>2</sub> = RT ln(c/c<sub>s</sub>) = RT ln[(Δc + c<sub>s</sub>)/c<sub>s</sub>]</span>
  <span class="equation-number">(15.12)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = K exp{-16πσ<sup>3</sup>V<sup>2</sup>/[3R<sup>3</sup>T<sup>3</sup>ln<sup>2</sup>(c/c<sub>s</sub>)]}</span>
  <span class="equation-number">(15.13)</span>
</div>

<div class="equation-block">
  <span class="equation-main">I = K exp{-4εσ<sup>3</sup>V<sup>2</sup>/[R<sup>3</sup>T<sup>3</sup>ln<sup>2</sup>(c/c<sub>s</sub>)]}</span>
  <span class="equation-number">(15.14)</span>
</div>

### 15.5. Kristallwachstum

Nach Bildung eines stabilen Keims waechst der Kristall durch Diffusion zur Oberflaeche, Adsorption, Oberflaechenmigration und Einbau in das Gitter. Die Wachstumsrate kann durch Diffusion, diffusionskinetische oder kinetische Stufen bestimmt werden; bei Massenkristallisation sind Polydispersitaet, Rekristallisation und Hydrodynamik wichtig.

<div class="equation-block">
  <span class="equation-main">dG/(Fdτ) = kΔc</span>
  <span class="equation-number">(15.15)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Δc = Δc<sub>1</sub> + Δc<sub>2</sub></span>
  <span class="equation-number">(15.16)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M<sub>1</sub> = k<sub>1</sub>(c - c<sub>1</sub>) = k<sub>1</sub>Δc<sub>1</sub></span>
  <span class="equation-number">(15.17)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M<sub>2</sub> = k<sub>2</sub>Δc<sub>2</sub><sup>2</sup> = k<sub>2</sub>(c<sub>1</sub> - c<sub>s</sub>)<sup>2</sup></span>
  <span class="equation-number">(15.18)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = M<sub>1</sub> = M<sub>2</sub> = kΔc = k<sub>1</sub>Δc<sub>1</sub> = k<sub>2</sub>Δc<sub>2</sub><sup>2</sup></span>
  <span class="equation-number">(15.19)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = M<sub>1</sub> = D(c - c<sub>1</sub>)/δ</span>
  <span class="equation-number">(15.20)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = D(c - c<sub>1</sub>)/δ = k<sub>2</sub>(c<sub>1</sub> - c<sub>s</sub>)<sup>2</sup></span>
  <span class="equation-number">(15.21)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = [D/(2δ)](√(1 + 4k<sub>2</sub>δΔc/D) - 1)</span>
  <span class="equation-number">(15.22)</span>
</div>

### 15.6-15.9. Sekundaere Keimbildung, Rekristallisation und Waerme-Stoff-Uebertragung

Sekundaere Keimbildung haengt mit vorhandenen Kristallen, Stoessen, Abrieb und lokalen Uebersaettigungsaenderungen zusammen. Rekristallisation vermindert die freie Oberflaechenenergie: kleine Teilchen loesen sich, groessere wachsen. In industriellen Kristallisatoren sind Waerme- und Stoffuebergang, Zirkulation, Sieden, Wasserverdampfung und Apparatekonstruktion eng verknuepft.

<div class="equation-block">
  <span class="equation-main">J<sub>1</sub> = L<sub>11</sub>X<sub>1</sub> + L<sub>12</sub>X<sub>2</sub>; J<sub>2</sub> = L<sub>21</sub>X<sub>1</sub> + L<sub>22</sub>X<sub>2</sub></span>
  <span class="equation-number">(15.23)</span>
</div>

<div class="equation-block">
  <span class="equation-main">L<sub>12</sub> = L<sub>21</sub></span>
  <span class="equation-number">(15.24)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dW<sub>p</sub> = dW<sub>v</sub>; dM<sub>kr</sub> = dM<sub>p,cz</sub>; dM<sub>kr</sub> = (Cz<sub>p</sub>/W<sub>p</sub>)dW<sub>v</sub></span>
  <span class="equation-number">(15.25)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M<sub>kr</sub> = qFCz<sub>p</sub>/(arW<sub>p</sub>)</span>
  <span class="equation-number">(15.26)</span>
</div>

<div class="equation-block">
  <span class="equation-main">dM<sub>kr</sub>/dτ = [Cz<sub>p</sub>/W<sub>p</sub>][FΔt k<sub>0</sub>/(ar)] exp(-τ/θ)</span>
  <span class="equation-number">(15.27)</span>
</div>

<div class="equation-block">
  <span class="equation-main">φ = ε<sub>r</sub>/ε<sub>t</sub> = [V<sub>r</sub>(s)/V<sub>t</sub>(s)]/[V<sub>r</sub>(y)/V<sub>t</sub>(y)]</span>
  <span class="equation-number">(15.28)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ε = m<sub>(s)i</sub>/m<sub>(y)i</sub></span>
  <span class="equation-number">(15.29)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Fo′ = f(Pr′, Ar, Π, Π<sub>ρ</sub>, Π<sub>V</sub>)</span>
  <span class="equation-number">(15.30)</span>
</div>

<div class="equation-block">
  <span class="equation-main">Fo′ = Dτ/l<sup>2</sup>; Pr′ = ν/D; Ar = gl<sup>3</sup>Δρ/(ν<sup>2</sup>ρ); Π = c<sub>s</sub>/Δc; Π<sub>ρ</sub> = ΔG/(ρ<sub>kr</sub>l<sup>3</sup>); Π<sub>V</sub> = ρ<sub>p</sub>/ρ<sub>kr</sub></span>
  <span class="equation-number">(15.31)</span>
</div>

### 15.10. Einflussfaktoren

Keimbildung und Wachstum haengen von Uebersaettigung, Temperatur, Reinheit, Viskositaet, Verunreinigungen, Oberflaechenenergie, Ruehren, Zirkulation und Dampfphase beim Sieden ab. Bei Zuckerloesungen verlaengert geringere Reinheit die latente Zeit; hoehere Temperatur und geringere Viskositaet beschleunigen das Wachstum.

<div class="equation-block">
  <span class="equation-main">τ<sub>l</sub> = A<sub>l</sub> exp(-B<sub>l</sub>P)</span>
  <span class="equation-number">(15.32)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = b(Π - 1)<sup>n</sup></span>
  <span class="equation-number">(15.33)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = d<sub>0</sub> exp[-E/(RT)]</span>
  <span class="equation-number">(15.34)</span>
</div>

<div class="equation-block">
  <span class="equation-main">M = lP<sup>m</sup></span>
  <span class="equation-number">(15.35)</span>
</div>

### 15.11. Kristallisationsapparate

Kristallisatoren arbeiten diskontinuierlich oder kontinuierlich. Sie werden nach Anordnung, Gehaeuseform, Sektionszahl, Suspensionszirkulation und Waermeuebertragungsflaeche klassifiziert. In der Zuckerproduktion nutzt man diskontinuierliche und kontinuierliche Vakuumapparate sowie horizontale und vertikale Ruehrkristallisatoren.

![Vakuumapparat Typ A2-PVR](/images/courses/bioprocess-engineering/chapter-15/fig-15-5.webp)
*Abb. 15.5. Vakuumapparat Typ A2-PVR*

![Flussschema des kontinuierlichen Einkochens und Kristallisierens von Zuckermassecuite](/images/courses/bioprocess-engineering/chapter-15/fig-15-6.webp)
*Abb. 15.6. Flussschema des kontinuierlichen Einkochens und Kristallisierens von Zuckermassecuite*

![Kontinuierlicher Vakuumapparat des KTIHP-Systems: a - Strukturschema; b - Konstruktion](/images/courses/bioprocess-engineering/chapter-15/fig-15-7.webp)
*Abb. 15.7. Kontinuierlicher Vakuumapparat des KTIHP-Systems: a - Strukturschema; b - Konstruktion*

![Horizontaler Ruehrkristallisator](/images/courses/bioprocess-engineering/chapter-15/fig-15-8.webp)
*Abb. 15.8. Horizontaler Ruehrkristallisator*

![Vertikaler Ruehrkristallisator](/images/courses/bioprocess-engineering/chapter-15/fig-15-9.webp)
*Abb. 15.9. Vertikaler Ruehrkristallisator*

### 15.12. Grundprinzipien der Berechnung

Die Berechnung erfolgt als verfahrenstechnische, waermetechnische, hydrodynamische, konstruktive, mechanische und wirtschaftliche Berechnung. Grundlage sind Stoff- und Waermebilanzen, Massendiagramme der Kristallisation, Waermeuebergang, Zirkulation, Verweilzeit und Festigkeit der Apparateelemente.

<div class="equation-block">
  <span class="equation-main">ΣG = G<sub>1</sub> + G<sub>2</sub>; G<sub>1</sub> = G<sub>n.sr</sub> + W<sub>1</sub> = G<sub>n.cz</sub> + G<sub>n.nz</sub> + W<sub>1</sub>; G<sub>2</sub> = G<sub>p.sr</sub> + W<sub>p</sub></span>
  <span class="equation-number">(15.36)</span>
</div>

<div class="equation-block">
  <span class="equation-main">ΔQ + i<sub>p</sub>ΔG<sub>p</sub> + r<sub>kr</sub>ΔG<sub>kr</sub> = i<sub>v</sub>ΔW<sub>v</sub> + Δ(i<sub>y</sub>G<sub>y</sub>) + Q<sub>loss</sub></span>
  <span class="equation-number">(15.37)</span>
</div>

![Schema der statischen Stoffbilanz der mehrstufigen Kristallisation](/images/courses/bioprocess-engineering/chapter-15/fig-15-10.webp)
*Abb. 15.10. Schema der statischen Stoffbilanz der mehrstufigen Kristallisation*

![Massendiagramm des Kochens und Kristallisierens von Zuckermassecuite im Vakuumapparat und Ruehrkristallisator](/images/courses/bioprocess-engineering/chapter-15/fig-15-11.webp)
*Abb. 15.11. Massendiagramm des Kochens und Kristallisierens von Zuckermassecuite im Vakuumapparat und Ruehrkristallisator*

## Nach dem Durcharbeiten dieses Kapitels sollen Studierende

- die Rolle von "Uebersaettigung" im Kapitel erklaeren;
- "Keimbildung" mit der apparativen Gestaltung biotechnologischer Produktion verbinden;
- wichtige Einflussgroessen fuer "Kristallwachstum" unterscheiden;
- die Auswahl oder Bewertung des Prozesses ueber "Kristallisator" begruenden.

## Selbsttest

<section
  class="course-self-test"
  data-course-self-test
  data-locale="de"
  data-course="bioprocess-engineering"
  data-chapter="chapter-15-crystallization"
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
  <input type="radio" name="course-test-15-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Keimbildung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-0" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Kristallwachstum</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Kristallisator</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-0" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Uebersaettigung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Welcher Unterabschnitt gehoert direkt zur Lehrbuchstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-1" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>15.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>15.2. Physikalische Grundlagen der Kristallisation aus Loesungen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-1" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>15.3. Kinetik des Kristallisationsprozesses</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>15.4. Kristallbildung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Auf welchen Begriff soll sich die ingenieurtechnische Analyse zuerst stuetzen?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Uebersaettigung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-2" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Keimbildung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Kristallwachstum</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-2" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Kristallisator</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Was verbindet Prozesstheorie am deutlichsten mit der Apparategestaltung?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-3" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Uebersaettigung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Keimbildung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-3" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Kristallisator</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Kristallwachstum</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Uebersaettigung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-4" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Keimbildung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Kristallisator</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-4" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Kristallwachstum</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Mit welchem Thema beginnt das Kapitel in der Lehrbuchstruktur?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-5" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>15.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>15.2. Physikalische Grundlagen der Kristallisation aus Loesungen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-5" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>15.3. Kinetik des Kristallisationsprozesses</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>15.4. Kristallbildung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Welcher Unterabschnitt gehoert direkt zur Lehrbuchstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>15.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-6" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>15.2. Physikalische Grundlagen der Kristallisation aus Loesungen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>15.3. Kinetik des Kristallisationsprozesses</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-6" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>15.4. Kristallbildung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Welches Thema schliesst die Struktur des Kapitels ab?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-7" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>15.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>15.2. Physikalische Grundlagen der Kristallisation aus Loesungen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-7" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>15.12. Grundprinzipien der Berechnung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>15.3. Kinetik des Kristallisationsprozesses</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Welches Begriffspaar eignet sich fuer den Selbsttest?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Kristallwachstum / Kristallisator</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-8" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Uebersaettigung / Kristallwachstum</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Keimbildung / Kristallisator</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-8" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Uebersaettigung / Keimbildung</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Was eignet sich am besten zur praktischen Begruendung der Prozessauswahl?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-9" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Kristallisator</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Uebersaettigung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-9" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Keimbildung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Kristallwachstum</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Uebersaettigung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-10" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Keimbildung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Kristallwachstum</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-10" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Kristallisator</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Welches Objekt wird in diesem Kapitel als Abbildung dargestellt?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-15-11" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Uebersaettigung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Keimbildung</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-11" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Saccharosekristall</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-15-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Kristallwachstum</span>
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
