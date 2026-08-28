---
title: "Kapitel 5. Mischen"
course: "bioprocess-engineering"
course_title: "Bioverfahrenstechnik: Prozesse und Apparate biotechnologischer Produktionen"
chapter: 5
description: "Mischen in Fluessigkeiten, Energiebedarf, Wirksamkeit und Mischen von Schuettguetern und plastischen Stoffen."
updated: "2026-08-23"
---

## Kapitelüberblick

Dieses Kapitel stellt die zentralen Begriffe, Gleichungen und Apparatebeispiele zum Thema vor.

## Struktur des Kapitels

- 5.1. Allgemeines
- 5.2. Mischen in fluessigem Medium
- 5.3. Energiebedarf fuer mechanisches Mischen
- 5.4. Bewertung der Mischwirksamkeit
- 5.5. Mischen von Schuettguetern und plastischen Stoffen

## Vorlesungsskript

### 5.1. Allgemeines

Mischen dient zum Ausgleich von Konzentration, Temperatur und Stoffeigenschaften, zur Intensivierung von Waerme- und Stoffuebergang, zum Suspendieren von Feststoffen, Dispergieren von Gas oder Fluessigkeit und Beschleunigen biochemischer Reaktionen. In biotechnologischen Apparaten muss es schonend fuer Zellen, Enzyme und empfindliche Proteine sein.

Mechanisches Mischen erfolgt durch rotierende Ruehrer, pneumatisches Mischen durch Gasstrom und Zirkulationsmischen durch Pumpen- oder Strahlstroemung. Fuer Schuettgueter und plastische Stoffe nutzt man Blatt-, Schnecken-, Trommel- und kombinierte Mischer.

### 5.2. Mischen in fluessigem Medium

In fluessigen Medien wird das Mischen durch Ruehrertyp, Drehzahl, Apparateform, Stromstoerer, Viskositaet und Gasgehalt bestimmt. Stromstoerer brechen die Kreisstroemung und foerdern axiale sowie radiale Zirkulation.

![Abb. 5.2. Beispiel mechanischen Mischens](/images/courses/bioprocess-engineering/chapter-05/fig-5-2.webp)

![Abb. 5.3. Schemata von Stroemungsbildern in Apparaten mit Stromstoerern und Ruehrern](/images/courses/bioprocess-engineering/chapter-05/fig-5-3.webp)

### 5.3. Energiebedarf fuer mechanisches Mischen

Beim mechanischen Mischen wird die Fluessigkeit erzwungen bewegt. Zur Abschaetzung des Energiebedarfs verwendet man Kriteriengleichungen aehnlich der Hydrodynamik:

<div class="equation-block">
  <span class="equation-main">Eu = f(Re, Fr, Γ<sub>1</sub>, Γ<sub>2</sub>, ...)</span>
  <span class="equation-number">(5.1)</span>
</div>

Fuer Mischprozesse werden modifizierte Kriterien eingefuehrt; die charakteristische Geschwindigkeit ist proportional zur Umfangsgeschwindigkeit des Ruehrers:

<div class="equation-block">
  <span class="equation-main">Eu<sub>m</sub> = f(Re<sub>m</sub>, Fr<sub>m</sub>, Γ<sub>1</sub>, Γ<sub>2</sub>, ...)</span>
  <span class="equation-number">(5.2)</span>
</div>

In Potenzform:

<div class="equation-block">
  <span class="equation-main">Eu<sub>m</sub> = C′Re<sub>m</sub><sup>k′</sup>Fr<sub>m</sub><sup>m′</sup>Γ<sub>1</sub><sup>n′</sup>Γ<sub>2</sub><sup>p′</sup>...</span>
  <span class="equation-number">(5.3)</span>
</div>

Wenn der Einfluss der Schwerkraft vernachlaessigt werden kann, etwa bei Stromstoerern, vereinfacht sich die Gleichung:

<div class="equation-block">
  <span class="equation-main">Eu<sub>m</sub> = CRe<sub>m</sub><sup>k</sup>Γ<sub>1</sub><sup>n</sup>Γ<sub>2</sub><sup>p</sup></span>
  <span class="equation-number">(5.4)</span>
</div>

Experimentelle Kurven Eu<sub>m</sub> gegen Re<sub>m</sub> dienen zur Auswahl der Ruehrerleistung.

![Abb. 5.5. Eu<sub>m</sub> in Abhaengigkeit von Re<sub>m</sub> fuer verschiedene Ruehrertypen](/images/courses/bioprocess-engineering/chapter-05/fig-5-5.webp)

![Abb. 5.6. Ruehrertypen fuer experimentelle Leistungskurven](/images/courses/bioprocess-engineering/chapter-05/fig-5-6.webp)

Auf Basis der Dimensionsanalyse wird die mechanische Mischleistung als Funktion von Viskositaet μ, Dichte ρ, Drehzahl n und Ruehrerdurchmesser d geschrieben:

<div class="equation-block">
  <span class="equation-main">N = Cμ<sup>x</sup>ρ<sup>y</sup>n<sup>z</sup>d<sup>v</sup></span>
  <span class="equation-number">(5.5)</span>
</div>

Dimensionsgleichung:

<div class="equation-block">
  <span class="equation-main">kg · m<sup>2</sup> · s<sup>-3</sup> = kg<sup>x+y</sup> · s<sup>-x-z</sup> · m<sup>-x-3y+v</sup></span>
  <span class="equation-number">(5.6)</span>
</div>

Nach Umformung erhaelt man die Kriterienform:

<div class="equation-block">
  <span class="equation-main">N/(ρn<sup>3</sup>d<sup>5</sup>) = C(ρnd<sup>2</sup>/μ)<sup>-x</sup></span>
  <span class="equation-number">(5.7)</span>
</div>

Oder:

<div class="equation-block">
  <span class="equation-main">Eu<sub>m</sub> = CRe<sub>m</sub><sup>k</sup></span>
  <span class="equation-number">(5.8)</span>
</div>

Installierte Motorleistung mit Reserve- und Korrekturfaktoren:

<div class="equation-block">
  <span class="equation-main">N<sub>v</sub> = 1.3Nf<sub>h</sub>f<sub>r</sub>f<sub>c</sub>f<sub>g</sub>/η</span>
  <span class="equation-number">(5.9)</span>
</div>

Anfahrleistung fuer einen Blattruehrer:

<div class="equation-block">
  <span class="equation-main">N<sub>p</sub> ≈ 1.9ρhn<sup>3</sup>d<sup>4</sup></span>
  <span class="equation-number">(5.10)</span>
</div>

![Abb. 5.8. Schemata von Blattruehrern](/images/courses/bioprocess-engineering/chapter-05/fig-5-8.webp)

![Abb. 5.9. Blattruehrer mit Planetenantrieb](/images/courses/bioprocess-engineering/chapter-05/fig-5-9.webp)

![Abb. 5.10. Dreiblattpropeller eines Ruehrers](/images/courses/bioprocess-engineering/chapter-05/fig-5-10.webp)

![Abb. 5.11. Turbinenlaufrad mit Leiteinrichtung](/images/courses/bioprocess-engineering/chapter-05/fig-5-11.webp)

Beim pneumatischen Mischen wird die Leistung durch Gasvolumenstrom V, Druckhoehe Δp und Geblaesewirkungsgrad η bestimmt:

<div class="equation-block">
  <span class="equation-main">N = VΔp/η</span>
  <span class="equation-number">(5.11)</span>
</div>

Gasdruckhoehe unter Beruecksichtigung von Druck, Fluessigkeitssaeule und Rohrleitungsverlusten:

<div class="equation-block">
  <span class="equation-main">Δp = p<sub>0</sub> + ρ<sub>l</sub>gh + (ρ<sub>g</sub>w<sub>g</sub><sup>2</sup>/2)(λl/d + Σξ)</span>
  <span class="equation-number">(5.12)</span>
</div>

Fuer technische Berechnungen bei unbekannter Luftleitungslänge:

<div class="equation-block">
  <span class="equation-main">Δp = p<sub>0</sub> + 1.2ρ<sub>l</sub>gH</span>
  <span class="equation-number">(5.13)</span>
</div>

Luftverbrauch fuer das Mischen:

<div class="equation-block">
  <span class="equation-main">V = KFp/(9.81 · 10<sup>4</sup>)</span>
  <span class="equation-number">(5.14)</span>
</div>

![Abb. 5.14. Schemata eines Begasungsmischers und von Begasern](/images/courses/bioprocess-engineering/chapter-05/fig-5-14.webp)

![Abb. 5.15. Apparate fuer pneumatisches Mischen und Belueftung](/images/courses/bioprocess-engineering/chapter-05/fig-5-15.webp)

Zirkulations- und Strahlmischen nutzt die kinetische Energie eines Strahls aus einer Duese oder einer durch eine Pumpe zurueckgefuehrten Stroemung.

![Abb. 5.16. Schema der Fluessigkeitsbewegung aus einer eingetauchten Duese](/images/courses/bioprocess-engineering/chapter-05/fig-5-16.webp)

![Abb. 5.19. Schema des Zirkulationsmischens](/images/courses/bioprocess-engineering/chapter-05/fig-5-19.webp)

### 5.4. Bewertung der Mischwirksamkeit

Die Mischwirksamkeit bewertet man ueber die Zeit bis zur erforderlichen Homogenitaet und ueber Konzentrationsabweichungen eines Kontrollstoffs an verschiedenen Punkten. Kleinere Abweichungen vom Mittelwert bedeuten bessere Mischung. In Bioreaktoren beruecksichtigt man zusaetzlich Scherbeanspruchung, Sauerstoffverteilung, Schaumbildung und lokale Zonen mit Ueberhitzung oder Substratmangel.

### 5.5. Mischen von Schuettguetern und plastischen Stoffen

Schuettgueter und plastische Stoffe werden in Blatt-, Schnecken-, Trommel-, Band- und anderen Mischern verarbeitet. Wichtig sind Mischzeit, Gleichmaessigkeit, Zerkleinerung von Klumpen, Vermeidung von Segregation und mechanische Produktbelastung.

![Abb. 5.22. Mischvorrichtungen fuer Schuettgueter und plastische Massen](/images/courses/bioprocess-engineering/chapter-05/fig-5-22.webp)

## Nach dem Durcharbeiten dieses Kapitels sollen Studierende

- die Rolle von "Ruehrer" im Kapitel erklaeren;
- "Zirkulation" mit der apparativen Gestaltung biotechnologischer Produktion verbinden;
- wichtige Einflussgroessen fuer "Leistungszahl" unterscheiden;
- die Auswahl oder Bewertung des Prozesses ueber "Homogenitaet" begruenden.

## Selbsttest

<section
  class="course-self-test"
  data-course-self-test
  data-locale="de"
  data-course="bioprocess-engineering"
  data-chapter="chapter-05-mixing"
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
  <input type="radio" name="course-test-5-0" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Zirkulation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-0" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Ruehrer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-0" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Leistungszahl</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-0" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Homogenitaet</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>2. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-1" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>5.2. Mischen in fluessigem Medium</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-1" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>5.3. Energiebedarf fuer mechanisches Mischen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-1" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>5.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-1" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>5.4. Bewertung der Mischwirksamkeit</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>3. Auf welchen Begriff soll sich die ingenieurtechnische Analyse zuerst stuetzen?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-2" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Ruehrer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-2" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Leistungszahl</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-2" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Homogenitaet</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-2" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Zirkulation</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>4. Was verbindet Prozesstheorie am deutlichsten mit der Apparategestaltung?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-3" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Homogenitaet</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-3" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Ruehrer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-3" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Zirkulation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-3" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Leistungszahl</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>5. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-4" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Ruehrer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-4" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Leistungszahl</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-4" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Zirkulation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-4" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Homogenitaet</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>6. Mit welchem Thema beginnt das Kapitel in der Kapitelstruktur?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-5" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>5.2. Mischen in fluessigem Medium</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-5" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>5.3. Energiebedarf fuer mechanisches Mischen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-5" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>5.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-5" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>5.4. Bewertung der Mischwirksamkeit</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>7. Welcher Unterabschnitt gehoert direkt zur Kapitelstruktur dieses Kapitels?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-6" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>5.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-6" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>5.3. Energiebedarf fuer mechanisches Mischen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-6" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>5.4. Bewertung der Mischwirksamkeit</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-6" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>5.2. Mischen in fluessigem Medium</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>8. Welches Thema schliesst die Struktur des Kapitels ab?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-7" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>5.5. Mischen von Schuettguetern und plastischen Stoffen</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-7" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>5.1. Allgemeines</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-7" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>5.2. Mischen in fluessigem Medium</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-7" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>5.3. Energiebedarf fuer mechanisches Mischen</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>9. Welches Begriffspaar eignet sich fuer den Selbsttest?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-8" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Leistungszahl / Homogenitaet</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-8" value="1" data-correct="1" />
  <span class="course-test-letter">B</span>
  <span>Ruehrer / Zirkulation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-8" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Ruehrer / Leistungszahl</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-8" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Zirkulation / Homogenitaet</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>10. Was eignet sich am besten zur praktischen Begruendung der Prozessauswahl?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-9" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Ruehrer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-9" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Zirkulation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-9" value="2" data-correct="1" />
  <span class="course-test-letter">C</span>
  <span>Homogenitaet</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-9" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Leistungszahl</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>11. Welcher Parameter oder welches Phaenomen ist bei der Prozessanalyse zu kontrollieren?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-10" value="0" data-correct="0" />
  <span class="course-test-letter">A</span>
  <span>Ruehrer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-10" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Leistungszahl</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-10" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Homogenitaet</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-10" value="3" data-correct="1" />
  <span class="course-test-letter">D</span>
  <span>Zirkulation</span>
</label>
</div>
<p class="course-test-feedback" data-course-test-feedback></p>
</fieldset>

<fieldset class="course-test-item" data-course-test-item>
<legend>12. Welches Objekt wird in diesem Kapitel als Abbildung dargestellt?</legend>
<div class="course-test-options" data-course-test-options>
<label class="course-test-option">
  <input type="radio" name="course-test-5-11" value="0" data-correct="1" />
  <span class="course-test-letter">A</span>
  <span>Mechanisches Mischen mit rotierendem Arbeitsorgan</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-11" value="1" data-correct="0" />
  <span class="course-test-letter">B</span>
  <span>Ruehrer</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-11" value="2" data-correct="0" />
  <span class="course-test-letter">C</span>
  <span>Zirkulation</span>
</label>
<label class="course-test-option">
  <input type="radio" name="course-test-5-11" value="3" data-correct="0" />
  <span class="course-test-letter">D</span>
  <span>Leistungszahl</span>
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
<li>Frage 1: Richtige Antwort - B</li>
<li>Frage 2: Richtige Antwort - C</li>
<li>Frage 3: Richtige Antwort - D</li>
<li>Frage 4: Richtige Antwort - A</li>
<li>Frage 5: Richtige Antwort - B</li>
<li>Frage 6: Richtige Antwort - C</li>
<li>Frage 7: Richtige Antwort - D</li>
<li>Frage 8: Richtige Antwort - A</li>
<li>Frage 9: Richtige Antwort - B</li>
<li>Frage 10: Richtige Antwort - C</li>
<li>Frage 11: Richtige Antwort - D</li>
<li>Frage 12: Richtige Antwort - A</li>
</ol>
</details>
</section>
