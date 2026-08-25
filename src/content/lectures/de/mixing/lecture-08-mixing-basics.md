---
title: "Grundlagen des Mischens in Apparaten der Lebensmitteltechnik"
topic: "mixing"
topic_title: "Mischen in Apparaten der Lebensmitteltechnik"
lecture: 8
description: "Technologische Ziele des Mischens, Ruehrertypen, Ruehr-Reynolds-Zahl, Leistungszahl und ein praktisches Leistungsbeispiel fuer Lebensmittelprozesse."
keywords: ["Mischen", "Ruehrer", "Ruehrorgan", "Reynolds-Zahl", "Leistungszahl", "Lebensmitteltechnik", "Suspensionen", "Emulsionen"]
duration: "60 Min."
difficulty: "mittel"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Vorlesung 8. Grundlagen des Mischens in Apparaten der Lebensmitteltechnik

## Lernziele

Nach dieser Vorlesung koennen Sie:

- erklaeren, warum derselbe Ruehrer fuer Sirup geeignet, fuer Tomatenpueree aber ungeeignet sein kann
- Loesen, Suspendieren, Emulgieren, Homogenisieren, Waermeuebergang und Gas-Fluessig-Dispergieren unterscheiden
- die Ruehr-Reynolds-Zahl `Re_m` berechnen
- die Antriebsleistung mit der Leistungszahl `N_p` abschaetzen
- einen Ruehrertyp aus Viskositaet und Prozessziel ableiten
- praktische Risiken erkennen: Schaumbildung, Anbrennen, Totzonen und Texturschaedigung

---

## 1. Das Prozessziel steht am Anfang

Mischen bedeutet in der Lebensmitteltechnik nicht einfach, dass sich der Behaelterinhalt dreht. Entscheidend ist ein homogenes, stabiles Produkt ohne Klumpen, Sediment, Ueberhitzung oder unerwuenschte Texturaenderung.

![Aufgaben des Mischens in der Lebensmittelherstellung](/images/lectures/mixing/mixing-tasks-map.svg)

| Aufgabe | Beispiele | Was wird kontrolliert |
|---|---|---|
| **Loesen** | Zuckersirup, Salzlake, Trockenmischungen | Zeit, Temperatur, keine Kristalle |
| **Suspendieren** | Kakao, Tomatenmark, Gewuerze in Marinade | Partikel setzen sich nicht ab |
| **Emulgieren** | Mayonnaise, Saucen, Milch-Fett-Mischungen | Tropfengroesse und Stabilitaet |
| **Homogenisieren** | Saftmischungen, Milchgetraenke, Sirupe | gleiche Konzentration im Volumen |
| **Waermeuebergang** | Marmelade, Cremes, eingedickte Produkte | weniger Anbrennen, gleichmaessige Temperatur |
| **Gas-Fluessig-Dispersion** | belueftete Desserts, kohlensaeurehaltige Getraenke | Blasengroesse und Schaum |

Weiterlesen: [Tetra Pak Dairy Processing Handbook: Mixers](https://dairyprocessinghandbook.tetrapak.com/chapter/mixers) beschreibt industrielle Mischaufgaben, Batch- und Inline-Loesungen sowie die Rolle von Turbulenz, Temperatur und Zeit.

---

## 2. Produkteigenschaften bestimmen den Ruehrer

Wichtig sind Dichte `rho`, dynamische Viskositaet `mu`, Feststoffanteil, Fett, Luft, Kristalle oder Fasern sowie die Empfindlichkeit gegen Scherung. Joghurt, Cremedesserts und Fruchtzubereitungen koennen durch zu starke Scherung geschaedigt werden.

Mit steigender Viskositaet wechselt man meist von schnelllaufenden Propeller- oder Turbinenruehrern zu langsam laufenden Anker-, Rahmen-, Schnecken- oder Bandruehrern. Sehr viskose Produkte benoetigen haeufig Wandabstreifer, damit sich an der beheizten Wand kein ueberhitzter Film bildet.

---

## 3. Stroemungsbilder

![Typische Stroemungsbilder in einem Ruehrbehaelter](/images/lectures/mixing/impeller-flow-patterns.svg)

| Stroemung | Wirkung | Typische Ruehrer | Lebensmittelbeispiele |
|---|---|---|---|
| **Axial** | bewegt Produkt nach oben oder unten | Propeller, Schraegblatt | Salzlake, Sirup, duennfluessige Suspensionen |
| **Radial** | wirft Strom zur Wand, hohe Scherung | Turbine | Emulsionen, Pulverdispergierung, Saucen |
| **Tangential** | dreht die Produktmasse | Anker, Rahmen | Marmelade, Creme, Schokolade, Karamell |

Ohne Strombrecher kann in duennfluessigen Medien ein Wirbel entstehen. Dann wird Energie fuer Rotation statt fuer wirksames Mischen verbraucht. Strombrecher reduzieren den Wirbel, koennen bei viskosen Produkten aber Reinigung und Totzonen verschlechtern.

---

## 4. Ruehr-Reynolds-Zahl

Fuer den Ruehrbehaelter wird das Regime aus Drehzahl und Ruehrerdurchmesser bestimmt:

```text
Re_m = rho · n · d_m² / mu
```

| Regime | Bereich `Re_m` | Bedeutung |
|---|---:|---|
| **Laminar** | `< 10` | Viskositaet dominiert, langsames Mischen |
| **Uebergang** | `10 ... 10 000` | stark von Geometrie abhaengig |
| **Turbulent** | `> 10 000` | schnelle Konzentrationsangleichung |

![Ruehrregime und Leistungszahl](/images/lectures/mixing/mixing-power-regimes.svg)

---

## 5. Leistungsabschaetzung

Im turbulenten Bereich wird die Leistung oft ueber die Leistungszahl abgeschaetzt:

```text
N_p = N / (rho · n³ · d_m⁵)
N = N_p · rho · n³ · d_m⁵
```

Die Leistung reagiert stark auf Drehzahl und Durchmesser. Eine Verdopplung von `n` erhoeht den Leistungsbedarf etwa um den Faktor 8; eine Verdopplung von `d_m` etwa um den Faktor 32.

---

## 6. Beispiel

Ein Behaelter bereitet Zuckersirup vor:

- `rho = 1150 kg/m³`
- `mu = 0,015 Pa·s`
- `d_m = 0,40 m`
- `n = 3 s⁻¹`
- `N_p = 5` fuer einen Turbinenruehrer

```text
Re_m = 1150 · 3 · 0,40² / 0,015 = 36 800
N = 5 · 1150 · 3³ · 0,40⁵ = 1590 W ≈ 1,6 kW
```

Mit 20...30% Reserve ist ein Motor von etwa **2,2 kW** plausibel. Bei einem Pueree mit `mu = 2 Pa·s` ergibt sich nur `Re_m = 276`; dann ist ein Anker-, Rahmen- oder Abstreiferruehrer oft geeigneter.

---

## Auswahlhinweise

| Ruehrer | Geeignet fuer | Staerke | Grenze |
|---|---|---|---|
| **Propeller** | Wasser, Milch, Salzlake, duennfluessige Sirupe | schnelle axiale Zirkulation | schwach bei sehr viskosen Produkten |
| **Turbine** | Emulsionen, Suspensionen, Pulver | starke Scherung | kann empfindliche Textur schaedigen |
| **Paddel** | einfache fluessige Mischungen | einfache Bauform | geringe Intensitaet |
| **Anker / Rahmen** | Marmelade, Creme, Schokolade, Karamell | gute Wandbewegung | langsam, hohes Drehmoment |
| **Schnecke / Band** | sehr viskose Pasten und Fuellungen | Zirkulation im viskosen Volumen | aufwendigere Reinigung |

Beispiele: [Alfa Laval Rotary Jet Mixer](https://www.alfalaval.us/products/fluid-handling/mixing-equipment/tank-mixers/rotary-jet-mixer/) und [GEA mixing and blending equipment](https://www.gea.com/en/products/mixers-blenders/).

---

## Kernaussagen

- Mischen wird vom technologischen Zweck aus ausgelegt.
- `Re_m = rho · n · d_m² / mu` beschreibt das Ruehrregime.
- Im turbulenten Bereich gilt naeherungsweise `N = N_p · rho · n³ · d_m⁵`.
- Viskositaet kann die Apparatewahl komplett veraendern.
- Hygienische Konstruktion, CIP, Schaum, Anbrennen und Textur gehoeren zur technischen Entscheidung.
