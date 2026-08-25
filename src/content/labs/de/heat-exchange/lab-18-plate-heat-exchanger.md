---
title: "UNTERSUCHUNG DER FUNKTIONSWEISE EINES PLATTENWÄRMETAUSCHERS"
category: "heat-exchange"
category_title: "Wärmeübertragungsprozesse"
lab: 18
goal: "sich mit dem Aufbau und dem Funktionsprinzip eines Plattenwärmetauschers vertraut zu machen; den theoretischen (bei sauberer Wärmeübertragungsfläche) und den experimentellen Wärmedurchgangskoeffizienten zu bestimmen; den Nutzungskoeffizienten der Wärmeübertragungsfläche zu bestimmen; den hydraulischen Widerstand des Wärmetauschers zu bestimmen."
description: "Untersuchung des Aufbaus und des Funktionsprinzips eines Plattenwärmetauschers, Berechnung der Wärmebilanz."
author: "FoodProcessPortal"
updated: "2026-07-22"
---
# Laborarbeit №18. Untersuchung der Funktionsweise eines Plattenwärmetauschers

## Theoretische Grundlagen

Die wichtigsten Berechnungsgleichungen für thermische Prozesse sind die Wärmebilanzgleichung und die grundlegende Wärmedurchgangsgleichung.

Vernachlässigt man die Wärmeverluste an die Umgebung, die praktisch 5 % nicht überschreiten, so hat die Wärmebilanzgleichung die Form

Q1 + Q2 = Q3 + Q4, 	(18.1)

wobei beim Wärmeaustausch ohne Änderung des Aggregatzustands Q1 der mit dem heißen Wärmeträger eintretende Wärmestrom ist, W, Q1 = m1c1t1e; Q2 der mit dem kalten Wärmeträger eintretende Wärmestrom, W, Q2 = m2c2t2e; Q3 der mit dem heißen Wärmeträger austretende Wärmestrom, W, Q3 = m1c1t1a; Q4 der mit dem kalten Wärmeträger austretende Wärmestrom, W, Q4 = m2c2t2a; m1, m2 die Massenströme des heißen bzw. kalten Wärmeträgers, kg/s; c1, c2 die spezifischen Wärmekapazitäten der Wärmeträger, J/(kg·K); t1e, t2e, t1a, t2a die Temperaturen der Wärmeträger am Eintritt in den Wärmetauscher und am Austritt aus ihm, °C.

Unter Verwendung dieser Bezeichnungen und nach einigen Umformungen erhalten wir nach Einsetzen der Ausdrücke für Q1, Q2, Q3, Q4 in Gleichung (18.1) die Wärmebilanzgleichung in folgender Form:

Q = m1c1(t1e – t1a) = m2c2(t2a – t2e),	 (18.2)

wobei Q die Wärmebelastung des Apparats ist, W.

Aus Gleichung (18.2) lässt sich einer der Werte der Wärmeträgerströme m1 oder m2 oder ihre Endtemperaturen t1a oder t2a bestimmen, sofern die Werte der übrigen Größen beim Wärmeaustausch bekannt sind. Der Zusammenhang zwischen der Wärmebelastung Q und der Wärmeübertragungsfläche F wird durch die grundlegende Wärmedurchgangsgleichung beschrieben, die für stationäre Wärmeübertragungsprozesse die Form annimmt

Q = kFΔtm, 	(18.3)

wobei k der Wärmedurchgangskoeffizient ist, W/(m²·K); Δtm die mittlere Temperaturdifferenz zwischen den Wärmeträgern, K.

Die mittlere Temperaturdifferenz Δtm, die die treibende Kraft des Wärmedurchgangsprozesses darstellt, kann nach folgender Gleichung berechnet werden

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image1.png" alt="Formel" /> (18.4)</div>

wenn das Verhältnis Δtgroß/Δtklein ≤ 2 ist, oder nach der Gleichung

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image2.png" alt="Formel" /> (18.5)</div>

wenn das Verhältnis Δtgroß/Δtklein > 2 ist, wobei Δtgroß und Δtklein die größere bzw. kleinere Temperaturdifferenz zwischen den Wärmeträgern an den Enden des Wärmetauschers sind, K.

Die Werte von Δtgroß und Δtklein werden aus Diagrammen (Abb. 18.1) ermittelt. Der Charakter der Temperaturänderung der Wärmeträger entlang der Heizfläche hängt vom Schema ihrer gegenseitigen Strömung ab. Wärmeträger werden im Gegenstrom rationeller genutzt. Dabei ist der mittlere Temperaturunterschied größer als im Gleichstrom. Außerdem kann die Endtemperatur des kalten Wärmeträgers höher sein als die Endtemperatur des heißen Wärmeträgers.

Der Wärmedurchgangskoeffizient k ist die Hauptgröße, die die Intensität der Arbeit von Wärmetauschern charakterisiert. Der praktische Wert des Wärmedurchgangskoeffizienten wird bei bekannten Werten von Q, F und Δtm aus Gleichung (18.3) bestimmt.

Der berechnete Wert des Wärmedurchgangskoeffizienten k für eine ebene Wand ohne Berücksichtigung des Einflusses von Verschmutzungen wird aus der Gleichung bestimmt

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image3.png" alt="Formel" /> (18.6)</div>

wobei α1 und α2 die Wärmeübergangskoeffizienten für den heißen bzw. kalten Wärmeträger sind, W/(m²·K); δWand die Wanddicke, m; λWand der Wärmeleitfähigkeitskoeffizient des Wandmaterials, W/(m·K). Der Koeffizient k ist stets kleiner als der kleinste der Wärmeübergangskoeffizienten.

<div class="lab-figure">
  <img src="/images/labs/heat-exchange/lab-18/image4.png" alt="Abbildung zur Laborarbeit №18" loading="lazy" />
</div>

Abb. 18.1. Diagramme der Temperaturänderung der Wärmeträger entlang der Wärmeübertragungsfläche bei verschiedenen Verhältnissen ihrer Durchflussmengen

Dank der gewellten Oberfläche der Platten des untersuchten Wärmetauschers, die eine intensive Turbulenzbildung der Flüssigkeitsströmung in den Kanälen zwischen den Platten bewirkt, erfolgt der Übergang zur turbulenten Strömung bereits bei Re > 100. Die Wärmeübergangskoeffizienten α1 und α2 für solche Plattenwärmetauscher werden nach folgender Gleichung bestimmt

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image5.png" alt="Formel" /> (18.7)</div>

wobei Nu die Nusselt-Zahl ist, Nu = αde/λ; Re die Reynolds-Zahl, Re = wdeρ/μ; Pr die Prandtl-Zahl, Pr = cμ/λ; w die Strömungsgeschwindigkeit des Wärmeträgers im Kanal, m/s; de der äquivalente Durchmesser des Kanals, m; λ der Wärmeleitfähigkeitskoeffizient des Wärmeträgers, W/(m·K); μ der dynamische Viskositätskoeffizient des Wärmeträgers, Pa·s; ρ die Dichte des Wärmeträgers, kg/m³.

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image6.png" alt="Formel" /> Für die Kennzahlen Nu, Re und Pr wird als Bezugstemperatur das arithmetische Mittel der Temperaturen des heißen und kalten Wärmeträgers am Eintritt te und Austritt ta des Wärmetauschers genommen:</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image7.png" alt="Formel" /> (18.8)</div>

und für die Kennzahl Prwand — die mittlere Wandtemperatur:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image8.png" alt="Formel" /> (18.9)</div>

Die Strömungsgeschwindigkeit der Wärmeträger im Kanal wird anhand der Kontinuitätsgleichung der Strömung bestimmt

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image9.png" alt="Formel" /> (18.10)</div>

wobei m der Wärmeträgerdurchsatz ist, kg/s; n die Anzahl der Kanäle im Paket; f die Strömungsquerschnittsfläche im Kanal, m², f = bh; b die Breite des durchströmten Kanalteils, m; h der Abstand zwischen den Platten im Kanal, m.

Als bestimmende geometrische Größe für die Berechnung der Kennzahlen wird der äquivalente Durchmesser der Strömung genommen

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image10.png" alt="Formel" /> (18.11)</div>

wobei Π der benetzte Umfang der Wände im Querschnitt der Wärmeträgerströmung im Kanal ist, m.

Der Kehrwert des Wärmedurchgangskoeffizienten wird als thermischer Wärmedurchgangswiderstand bezeichnet und nach folgender Formel bestimmt

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image11.png" alt="Formel" /> (18.12)</div>

Aus dieser Gleichung ist ersichtlich, dass der thermische Wärmedurchgangswiderstand gleich der Summe der thermischen Widerstände des Wärmeübergangs und der Wand ist. Befinden sich auf der Wärmeübertragungsfläche Verschmutzungen, so muss bei der Bestimmung des thermischen Widerstands der Wand Rwand auch der thermische Widerstand der Verschmutzungen berücksichtigt werden:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image12.png" alt="Formel" /> (18.13)</div>

wobei δ1, δ2 die Dicke der Verschmutzungsschicht auf der heißen bzw. kalten Wärmeträgerseite sind, m; λ1, λ2 die Wärmeleitfähigkeitskoeffizienten der Verschmutzungen auf der heißen bzw. kalten Wärmeträgerseite, W/(m·K).

Am häufigsten wird der Einfluss von Verschmutzungen mithilfe des Nutzungskoeffizienten der Wärmeübertragungsfläche berücksichtigt — dem Verhältnis des experimentellen Wärmedurchgangskoeffizienten kv (bei verschmutzter Heizfläche) zum theoretischen Wärmedurchgangskoeffizienten (bei sauberer Fläche):

φ = kv/k.	(18.14)

Der Wert φ wird experimentell bestimmt und als durchschnittlicher Betriebswert für konkrete Bedingungen des Wärmeaustauschprozesses angenommen.

Die Strömungsgeschwindigkeit des Wärmeträgers beeinflusst den Wärmeübergangskoeffizienten wesentlich. Eine Erhöhung der Geschwindigkeit verstärkt die Turbulenz der Strömung und verhindert die Bildung von Kesselstein und Verschmutzungen, was insgesamt zu einer Erhöhung des Wärmedurchgangskoeffizienten im Wärmetauscher beiträgt. Die Wahl der Geschwindigkeit beim Betrieb oder der Auslegung von Wärmetauschern ist jedoch von großer Bedeutung, da ihre Erhöhung zu einer Zunahme des hydraulischen Widerstands der Wärmeträgerströmung und somit zu einer erhöhten Pumpenleistung führt. Daher wird die optimale Geschwindigkeit aufgrund technisch-wirtschaftlicher Überlegungen gewählt.

Der hydraulische Widerstand des Wärmetauschers Δp setzt sich aus dem Reibungswiderstand entlang der Kanallänge Δpr und den örtlichen Widerständen Δpö zusammen:

Δp = Δpr + Δpö.	(18.15)

Bei der Berechnung von Plattenwärmetauschern werden beide Arten des hydraulischen Widerstands durch den verallgemeinerten Widerstandskoeffizienten je Einheit relativer Kanallänge ξ berücksichtigt. Für den untersuchten Plattentyp gilt

ξ = 11,2Re⁻⁰,²⁵.	(18.16)

Der Gesamtwiderstand des Wärmetauschers, Pa,

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image13.png" alt="Formel" /> (18.17)</div>

wobei Lred die reduzierte Länge des Zwischenplattenkanals ist, m; a die Anzahl der Pakete.

Die Leistung, W, die erforderlich ist, um den Wärmeträger mit einem Volumenstrom V, m³/s, durch den Wärmetauscher zu bewegen, wird nach folgender Gleichung berechnet

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image14.png" alt="Formel" /> (18.18)</div>

wobei η der Wirkungsgrad der Pumpe ist.

## Beschreibung des Laboraufbaus

Der Plattenwärmetauscher (siehe Abb. 18.2) zur Erwärmung von kaltem Wasser mit heißem Wasser besteht aus 32 gestanzten Platten (siehe Abb. 18.3) aus nichtrostendem Stahl (δWand = 0,001 m, λWand = 17,5 W/(m·K)). Die Wärmeübertragungsfläche einer Platte beträgt F1 = 0,136 m², die des gesamten Wärmetauschers F = 4,35 m².

Die Platten sind auf horizontalen Stangen 11, 17 montiert, deren Enden in einer feststehenden Platte 9 befestigt sind. Mithilfe einer beweglichen Andruckplatte 13 und Spannschrauben 14 werden die Platten fest aneinandergepresst. Die Dichtheit des zusammengebauten Apparats wird durch Gummidichtungen 1 (siehe Abb. 18.3) gewährleistet,

<div class="lab-figure">
  <img src="/images/labs/heat-exchange/lab-18/image15.png" alt="Abbildung zur Laborarbeit №18" loading="lazy" />
</div>

Abb. 18.2. Schema des Laboraufbaus

die entlang des Randes der Platten und um die entsprechenden Öffnungen für den Durchgang der Wärmeträger geklebt sind. Nach dem Zusammenbau und Zusammenpressen der Platten im Apparat entstehen zwei Systeme dichter Kanäle mit rechteckigem Querschnitt: eines für kaltes Wasser, das andere für heißes Wasser. Die Platten 9 und 13 dienen auch zur Bildung der beiden äußersten Kanäle. Die Breite des durchströmten Kanalteils beträgt b = 0,195 m, der Abstand zwischen den Platten im Kanal h = 0,004 m, die reduzierte Länge des Zwischenplattenkanals Lred = 0,7 m.

<div class="lab-figure">
  <img src="/images/labs/heat-exchange/lab-18/image16.png" alt="Abbildung zur Laborarbeit №18" loading="lazy" />
</div>

Das Schema der Wärmeträgerbewegung im zwischen den Platten gebildeten Kanal ist in Abb. 18.3 dargestellt: Der Wärmeträger tritt durch Öffnung 2 in den Kanal ein und verlässt den Kanal durch Öffnung 3. Auf den Platten 9 und 13 befinden sich Stutzen zur Zu- und Ableitung der Wärmeträger im Wärmetauscher. Heißes und kaltes Wasser bewegen sich im Wärmetauscher im Gegenstrom. Abb. 18.4 zeigt das Schema der Anordnung der Platten im Wärmetauscher zu Paketen, das durch folgende Formel dargestellt werden kann

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image17.png" alt="Formel" /> (18.19)</div>

wobei C die Anzahl der Platten im Wärmetauscher ist.

Die Anzahl der Zahlen im Zähler und Nenner gibt jeweils die Anzahl der Pakete für heißes bzw. kaltes Wasser an. Und jede solche Zahl entspricht der Anzahl der Kanäle in einem Paket, in dem sich der Wärmeträger in eine Richtung bewegt. Aus Formel (18.19) folgt, dass der Wärmetauscher aus vier Paketen zu je vier Kanälen sowohl für kaltes als auch für heißes Wasser besteht (a1 = a2 = 4; n1 = n2 = 4).

An den Endplatten jedes Pakets sind, im Unterschied zu der in Abb. 18.3 dargestellten Platte, die entsprechenden Ecköffnungen verschlossen, wodurch der Wärmeträger in das nächste Paket gelangt.

Kaltes Wasser gelangt über Ventil 20, das seinen Durchfluss regelt, aus dem Wasserversorgungsnetz in den Wärmetauscher. Die Menge des zur Erwärmung zugeführten kalten Wassers V2, L/min, wird mit Rotameter 19 bestimmt, seine Anfangs- und Endtemperatur mit den Thermometern 10 und 12 an der Zu- bzw. Ableitung. Das erwärmte Wasser verlässt den Wärmetauscher in die Kanalisation.

<div class="lab-figure">
  <img src="/images/labs/heat-exchange/lab-18/image18.png" alt="Abbildung zur Laborarbeit №18" loading="lazy" />
</div>

Abb. 18.4. Schema der Anordnung der Platten im Wärmetauscher zu Paketen

Heißes Wasser wird dem Wärmetauscher durch Pumpe 22 aus Behälter 1 oder 6 mit je 200 L Volumen zugeführt, jeweils über die Ventile 24 und 25 an der Saugleitung und über Ventil 21 an der Druckleitung. Die Menge des heißen Wassers V1, L/min, wird mit Rotameter 18 gemessen, seine Ein- und Austrittstemperatur mit den Thermometern 15 bzw. 8. Zur Aufbereitung des heißen Wassers sind die Behälter 1, 6 mit den Elektroheizern 23 bzw. 26 ausgestattet. Die erforderliche Temperatur des dem Wärmetauscher zugeführten heißen Wassers wird automatisch gehalten. Der experimentelle Wert des Druckabfalls des heißen Wassers Δpexp, Pa, am Ein- und Austritt des Wärmetauschers wird mit den Manometern 16 bzw. 7 gemessen.

Wird heißes Wasser in Behälter 1 aufbereitet, so wird es nach dem Wärmetauscher über Ventil 5 in Behälter 6 abgeleitet, und wenn in Behälter 6 — über Ventil 3 in Behälter 1. Zur anfänglichen Befüllung der Behälter 1, 6 mit Wasser aus dem Versorgungsnetz werden die Ventile 2, 4 verwendet. Der Wasserstand in den Behältern wird mittels Standglas kontrolliert, sein Überschuss wird in die Kanalisation abgeleitet.

## Ablauf der Arbeit

1. Wir machen uns mit dem Aufbau vertraut und erhalten von der Lehrkraft die Aufgabe: Wärmeträgerdurchflüsse V1 und V2, L/min (im Bereich 8–13 L/min und Verhältnissen V1/V2 = 0,7…1,3).

2. Anhand von Kalibrierdiagrammen bestimmen wir die Skalenwerte S1 und S2 an den Rotameter-Gehäusen, die den vorgegebenen Wärmeträgerdurchflüssen entsprechen.

3. Wir erwärmen das Wasser auf eine Anfangstemperatur t1e im Bereich 40–60 °C in einem der Behälter 1 oder 6, wofür wir:

a) den Behälter mit kaltem Wasser füllen und dabei den Wasserstand durch das Standglas beobachten;

b) am Kontrollpult die erforderliche Anfangstemperatur des heißen Wassers einstellen und den Elektroheizer einschalten;

c) nach Erreichen der vorgegebenen Temperatur die Ventile 24 oder 25 öffnen und Pumpe 22 einschalten.

4. Wir öffnen die Ventile 20 und 21 und stellen anhand der Skalenwerte S1 und S2 der Rotameter 19 und 18 die erforderlichen Durchflüsse von kaltem und heißem Wasser ein.

5. Nach Erreichen stabiler Temperaturen des heißen und kalten Wassers am Ein- und Austritt des Wärmetauschers notieren wir die Anzeigen der Thermometer 8, 10, 12 und 15 sowie der Manometer 7 und 16. Dabei ist es notwendig, ständig den Schwimmerstand in den Rotametern mithilfe der Ventile 20 und 21 zu halten und dabei die vorgegebenen Wärmeträgerdurchflüsse beizubehalten.

## Auswertung der Ergebnisse

Versuchsdaten: heißes Wasser — S1; V1, L/min; t1e, t1a, °C; kaltes Wasser — S2; V2, L/min; t2e, t2a, °C.

Den experimentellen Wärmedurchgangskoeffizienten kv berechnen wir nach Gleichung (18.3), den theoretischen k (für eine Platte ohne Verschmutzung) nach Gleichung (18.6). Der Nutzungskoeffizient der Wärmeübertragungsfläche wird aus Gleichung (18.14) bestimmt.

Zunächst führen wir folgende Berechnungen durch. Die Wärmebelastung des Wärmetauschers Q bestimmen wir als arithmetisches Mittel zwischen Q1 und Q2 mithilfe von Gleichung (18.2):

Q = 0,5(Q1 + Q2),

wobei Q1 = m1c1(t1e – t1a); Q2 = m2c2(t2a – t2e).

Die Massenströme der Wärmeträger m1 und m2, kg/s, bestimmen wir auf Basis von V1 und V2 nach der Formel

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image19.png" alt="Formel" /> (18.20)</div>

wobei ρ die Dichte des Wassers bei t1e, t2e ist, kg/m³.

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image20.png" alt="Formel" /> <img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image21.png" alt="Formel" /> <img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image22.png" alt="Formel" /> Anhand der Temperaturen finden wir ρ, c, μ, λ und Pr für beide Wärmeträger aus der Tabelle der physikalischen Eigenschaften von Wasser (Anhang 3), und aus der Wandtemperatur Prwand.</div>

Die Wärmeträgergeschwindigkeiten w1 und w2 werden aus Gleichung (18.10) bestimmt, der äquivalente Durchmesser de aus Gleichung (18.11).

Der Gesamtwiderstand des Wärmetauschers Δp wird aus Gleichung (18.17) bestimmt und mit dem experimentellen Δpexp verglichen.

Die Leistung N wird nach Gleichung (18.18) berechnet.

Im Bericht sind anzugeben:

a) eine kurze Darstellung des Arbeitsziels und der wichtigsten theoretischen Grundlagen;

b) das Schema des Aufbaus;

c) die Versuchsdaten;

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image23.png" alt="Formel" /> <img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image24.png" alt="Formel" /> <img class="lab-formula-img" src="/images/labs/heat-exchange/lab-18/image25.png" alt="Formel" /> d) die Berechnungen von m1, m2, Δtm mit dem entsprechenden Diagramm (siehe Abb. 18.1), Q1, Q2, Q, kv, w1, w2, de, Re1, Re2, Nu1, Nu2, α1, α2, k, φ, ξ, Δp und N;</div>

e) die Schlussfolgerung.

## Kontrollfragen

1. Was ist die treibende Kraft thermischer Prozesse?
2. Wie wird die Wärmebilanz eines Wärmetauschers aufgestellt?
3. Bei welchem Schema der gegenseitigen Wärmeträgerströmung (Gleichstrom oder Gegenstrom) und warum werden sie am vollständigsten genutzt?
4. Welche physikalische Bedeutung haben die Koeffizienten der Wärmeleitfähigkeit, des Wärmeübergangs und des Wärmedurchgangs?
5. Welche Faktoren beeinflussen die Werte der Wärmeübergangs- und Wärmedurchgangskoeffizienten?
6. Was sind ein Kanal und ein Paket in einem Plattenwärmetauscher?
7. Welche hydraulischen Widerstände überwindet der Wärmeträger bei der Bewegung im Plattenwärmetauscher?
8. Welche Vor- und Nachteile haben Plattenwärmetauscher gegenüber Rohrbündelwärmetauschern konstruktiv sowie hinsichtlich Hydrodynamik und Wärmedurchgang?
