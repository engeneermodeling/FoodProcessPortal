---
title: "Untersuchung der Funktionsweise eines Rohrbündelwärmetauschers"
category: "heat-exchange"
category_title: "Wärmeübertragungsprozesse"
lab: 19
goal: "sich mit dem Aufbau und dem Funktionsprinzip eines Rohrbündelwärmetauschers vertraut zu machen; die Unterschiede zwischen dem theoretischen und dem experimentellen Wärmedurchgangskoeffizienten zu bestimmen und zu erklären; den Nutzungskoeffizienten der Wärmeübertragungsfläche und den hydraulischen Widerstand des Wärmetauschers zu bestimmen."
description: "Untersuchung der Funktionsweise eines Rohrbündelwärmetauschers, Bestimmung der Wärmeübergangskoeffizienten."
author: "FoodProcessPortal"
updated: "2026-07-22"
---
# Laborarbeit №19. Untersuchung der Funktionsweise eines Rohrbündelwärmetauschers

## Theoretische Grundlagen

Die wichtigsten Berechnungsgleichungen für thermische Prozesse — (18.1)—(18.6), (18.12)—(18.14) — sind in Laborarbeit №18 für das System Flüssigkeit — Flüssigkeit angegeben. Die Wärmeübergangskoeffizienten α1 und α2 für den Zwischenrohr- bzw. Rohrraum dieser Wärmetauscherkonstruktion werden nach folgenden Gleichungen bestimmt:

Bei voll entwickelter turbulenter Strömung der Flüssigkeit in geraden Rohren und Kanälen
(Re > 10.000)

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image1.png" alt="Formel" /> (19.1)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image2.png" alt="Formel" /> Als bestimmende Größe in den Kennzahlen Re und Nu wird der Innendurchmesser des Rohres oder der äquivalente Durchmesser des Kanals genommen: (F ist die Querschnittsfläche der Strömung; Π der benetzte Umfang). Als Bezugstemperatur, bei der die physikalischen Eigenschaften des Wärmeträgers berechnet werden, dient seine mittlere Temperatur.</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image3.png" alt="Formel" /> Gleichung (19.1) wird empfohlen bei (wobei L die Länge des Rohres ist: d sein Innendurchmesser).</div>

Im Bereich 0,5 < Pr < 25 kann die einfachere Gleichung verwendet werden

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image4.png" alt="Formel" /> (19.2)</div>

Bei instabiler turbulenter Bewegung des Wärmeträgers (2300 < Re < 10.000) in geraden Rohren und Kanälen kann der Wärmeübergangskoeffizient näherungsweise nach der Formel bestimmt werden

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image5.png" alt="Formel" /> (19.3)</div>

In Formel (19.3) hängt der Wert von f(Re) von der Reynolds-Zahl ab:

| Re·10⁻³ | 2,1 | 2,2 | 2,3 | 2,4 | 2,5 | 3,0 | 4,0 | 5,0 | 6,0 | 8,0 | 10,0 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| f(Re) | 1,9 | 2,2 | 3,3 | 3,8 | 4,4 | 6,0 | 10,3 | 15,5 | 19,5 | 27,0 | 33,3 |

Bei laminarer Strömung der Flüssigkeit in geraden Rohren (Re < 2300)

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image6.png" alt="Formel" /> (19.4)</div>

4. Bei Bewegung der Flüssigkeit im Zwischenrohrraum eines Rohrbündelwärmetauschers

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image7.png" alt="Formel" /> (19.5)</div>

wobei de der äquivalente Durchmesser des Zwischenrohrraums ist;

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image8.png" alt="Formel" /></div>

D der Innendurchmesser des Wärmetauschermantels; da der Außendurchmesser der Rohre;

n die Anzahl der Rohre.

In den Gleichungen (19.1)—(19.5) bedeuten: Nu die Nusselt-Zahl, Nu = αd/λ; Re die Reynolds-Zahl, Re = wdρ/µ; Pr die Prandtl-Zahl, Pr = µc/λ; Gr die Grashof-Zahl, Gr = gd³ρ²βΔt/µ²; w die Strömungsgeschwindigkeit des Wärmeträgers, m/s; λ der Wärmeleitfähigkeitskoeffizient des Wärmeträgers, W/(m·K); µ der dynamische Viskositätskoeffizient des Wärmeträgers, Pa·s; ρ die Dichte des Wärmeträgers, kg/m³; β der Koeffizient der Volumenausdehnung des Wärmeträgers, K⁻¹; d die bestimmende geometrische Abmessung der Wärmeträgerströmung, m; Δt die Differenz zwischen der mittleren Temperatur des heißen Wärmeträgers und der Wandtemperatur für den Zwischenrohrraum bzw. die Differenz zwischen der Wandtemperatur und der mittleren Temperatur des kalten Wärmeträgers für den Rohrraum, K.

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image9.png" alt="Formel" /> Die Zahlenwerte der in den Gleichungen angegebenen physikalischen Größen werden aus den entsprechenden Tabellen anhand der arithmetischen Mitteltemperaturen des heißen und kalten Wärmeträgers bestimmt (am Eintritt te und Austritt ta aus dem Wärmetauscher — Formel (18.8)).</div>

Die Geschwindigkeit der Wärmeträgerbewegung im Wärmetauscher wird anhand der Kontinuitätsgleichung der Strömung bestimmt

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image10.png" alt="Formel" /> (19.6)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image11.png" alt="Formel" /> <img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image12.png" alt="Formel" /> wobei V der Volumendurchsatz des Wärmeträgers ist, m³/s; f die Strömungsquerschnittsfläche, m²: für den Rohrraum bzw. für den Zwischenrohrraum; Din der Innendurchmesser des Mantels, m; di und da jeweils der Innen- und Außendurchmesser der Rohre; n die Anzahl der Rohre, Stück.</div>

Druckverlust im Rohrraum des Wärmetauschers, Pa,

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image13.png" alt="Formel" /> (19.7)</div>

wobei λ der hydraulische Widerstandskoeffizient ist (Berechnung siehe Laborarbeit №4); l die Länge des Rohres, m; Z die Anzahl der Durchgänge; ζ der Koeffizient der örtlichen Widerstände.

Die Leistung, die zur Bewegung des Wärmeträgers bei einem Volumendurchsatz V durch den Rohrraum des Wärmetauschers erforderlich ist, W,

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image14.png" alt="Formel" /> , 	(19.8)</div>

wobei η der Wirkungsgrad der Pumpe ist.

## Beschreibung des Laboraufbaus

Der horizontale mehrgängige Rohrbündelwärmetauscher (siehe Abb. 19.1) besteht aus zylindrischem Gehäuse 1 mit einem Innendurchmesser von Din = 240 mm, in dem in Rohrböden 14 Rohre (n = 14) aus nichtrostendem Stahl mit einem Durchmesser von d = 33 × 1,5 mm und einer Länge von l = 800 mm angeordnet sind. Die Anzahl der Durchgänge beträgt z = 14 (ein Rohr je Durchgang). Kaltes Wasser aus dem Wasserversorgungsnetz gelangt über Ventil 8, das seinen Durchfluss regelt, in den Rohrraum des Wärmetauschers und wird über Ventil 10 in die Kanalisation abgeleitet.

<div class="lab-figure">
  <img src="/images/labs/heat-exchange/lab-19/image15.png" alt="Abbildung zur Laborarbeit №19" loading="lazy" />
</div>

Heißes Wasser wird dem Zwischenrohrraum des Wärmetauschers durch Kreiselpumpe 24 aus den Behältern 17 oder 22 jeweils über die Ventile 21 oder 23 zugeführt, wobei Ventil 25 den Durchfluss regelt. Zur Aufbereitung des heißen Wassers sind die Behälter 22 und 17 mit den Elektroheizern 13 und 20 ausgestattet. Die Menge des heißen Wassers V1, l/min, und des kalten Wassers V2, l/min, wird jeweils mit den Zählern 19 und 7 gemessen. Das verbrauchte heiße Wasser wird jeweils über die Ventile 16 und 12 in Behälter 17 oder 22 zurückgeführt oder über Ventil 11 in die Kanalisation abgeleitet.

Die Temperatur des kalten Wassers am Ein- und Austritt wird mit den Thermometern 6 bzw. 9 kontrolliert, die des heißen Wassers — mit den Thermometern 5 und 2.

Die anfängliche Befüllung dieser Behälter mit kaltem Wasser erfolgt jeweils über die Ventile 14 oder 15. Zur Entlüftung des Zwischenrohrraums bei dessen Befüllung mit heißem Wasser ist Ventil 3 installiert. Der experimentelle Wert des Druckverlusts im Rohrraum des Wärmetauschers Δpexp, Pa, am Ein- und Austritt des Wärmetauschers wird jeweils mit den Manometern 4 und 18 gemessen.

## Ablauf der Arbeit

Wir machen uns mit dem Aufbau vertraut und erhalten von der Lehrkraft die Aufgabe: Wärmeträgerdurchflüsse V1 und V2, l/min.

Wir erwärmen das Wasser auf eine Anfangstemperatur t1e im Bereich 40—60 °C in einem der Behälter (17 oder 22), wofür wir:

a) den Behälter mit kaltem Wasser füllen und dabei den Wasserstand durch das Standglas beobachten;

b) am Kontrollpult die erforderliche Anfangstemperatur des heißen Wassers einstellen und den Elektroheizer einschalten;

c) nach Erreichen der vorgegebenen Temperatur die Ventile 21 oder 23 öffnen und Kreiselpumpe 24 einschalten.

Wir öffnen die Ventile 8 und 25 und stellen anhand der Anzeigen der Zähler 7, 19 und einer Stoppuhr die vorgegebenen Durchflüsse von heißem V1 und kaltem V2 Wasser ein (im Bereich 5—20 l/min und bei einem Verhältnis V1/V2 = 0,7...1,4).

Nach Erreichen stabiler Temperaturen des heißen und kalten Wassers am Ein- und Austritt des Wärmetauschers notieren wir die Anzeigen der Thermometer 2, 5, 6, 9 und der Manometer 4, 18. Dabei ist es notwendig, während des gesamten Versuchs die Zähleranzeigen mit der Stoppuhr zu beobachten und mit den Ventilen 8 und 25 die vorgegebenen Wärmeträgerdurchflüsse aufrechtzuerhalten.

## Auswertung der Ergebnisse

Versuchsdaten: heißes Wasser — V1, l/min; t1e, t1a, °C; kaltes Wasser — V2, l/min; t2e, t2a, °C.

Die Auswertung der Ergebnisse erfolgt analog zu Laborarbeit №18.

Die Wärmeträgergeschwindigkeiten w1 und w2 bestimmen wir aus Gleichung (19.6). Den Druckverlust im Rohrraum des Wärmetauschers Δp bestimmen wir aus Gleichung (19.7) und vergleichen ihn mit dem experimentellen Δpexp = pe – pa, wobei pe, pa die Drücke sind, Pa, entsprechend den Anzeigen der Manometer 4 und 18. Die Summe der Koeffizienten der örtlichen Widerstände für den untersuchten Wärmetauscher beträgt Σζ = 63,5.

Die zur Bewegung des Wärmeträgers durch den Wärmetauscher erforderliche Leistung berechnen wir nach Gleichung (19.8).

Im Bericht sind anzugeben:

a) eine kurze Darstellung des Arbeitsziels und der wichtigsten theoretischen Grundlagen;

b) das Schema des Aufbaus;

c) die Versuchsdaten;

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image16.png" alt="Formel" /> <img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image17.png" alt="Formel" /> <img class="lab-formula-img" src="/images/labs/heat-exchange/lab-19/image18.png" alt="Formel" /> d) die Berechnungen von m1, m2, Δtm mit dem entsprechenden Diagramm (siehe Abb. 18.1), Q1, Q2, Q, kv, w1, w2, de, Re1, Re2, Nu1, Nu2, α1, α2, k, φ, ξ, Δp und N;</div>

e) die Schlussfolgerung.

## Kontrollfragen

1. Was ist die treibende Kraft thermischer Prozesse?
2. Wie wird die Wärmebilanz eines Wärmetauschers aufgestellt?
3. Welche physikalische Bedeutung haben die Koeffizienten der Wärmeleitfähigkeit, des Wärmeübergangs und des Wärmedurchgangs?
4. Von welchen Faktoren hängt der Wert des Wärmeübergangskoeffizienten ab?
5. Was ist ein Durchgang bei einem Rohrbündelwärmetauscher?
6. Welche örtlichen Widerstände überwindet der Wärmeträger bei der Bewegung im Rohrraum eines Rohrbündelwärmetauschers?
7. Welche Vor- und Nachteile haben Rohrbündelwärmetauscher gegenüber Plattenwärmetauschern konstruktiv sowie hinsichtlich Hydrodynamik und Wärmedurchgang?
