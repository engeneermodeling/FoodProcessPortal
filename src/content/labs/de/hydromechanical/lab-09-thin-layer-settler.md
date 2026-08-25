---
title: "BERECHNUNG EINES DÜNNSCHICHTABSCHEIDERS"
category: "hydromechanical"
category_title: "Hydromechanische Prozesse"
lab: 9
goal: "die Leistung des Abscheiders zu bestimmen, die Gesamtabsetzfläche zu berechnen."
description: "Berechnung der Leistung und der Absetzfläche eines Dünnschichtabscheiders."
author: "FoodProcessPortal"
updated: "2026-07-22"
---
# Laborarbeit №9. Berechnung eines Dünnschichtabscheiders

## Theoretische Grundlagen

Es wurde festgestellt [1], dass beim Absetzen in einer dünnen, bewegten Suspensionsschicht folgende Bedingungen einzuhalten sind:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-09/image1.png" alt="Formel" /></div>

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-09/image2.png" alt="Abbildung zur Laborarbeit №9" loading="lazy" />
</div>

wobei Re und Fr die Reynolds- und Froude-Zahl sind; wl die Geschwindigkeit der Suspensionsbewegung entlang des Kanals, m/s (Abb. 9.1); R der hydraulische Radius des Kanals, m (in diesem Fall R = H/2, wobei H der kürzeste Abstand zwischen den den Kanal bildenden Oberflächen ist); ρ, µ jeweils die Dichte, kg/m³, und der dynamische Viskositätskoeffizient der Suspension, Pa·s; g die Erdbeschleunigung, m/s².

Die erste Bedingung gewährleistet eine ruhige Bewegung der Suspension ohne turbulente Strömungen, die das Absetzen behindern. Eine zu langsame Bewegung der Suspension kann eine Ungleichmäßigkeit ihrer Bewegung über den Kanalquerschnitt verursachen. Die zweite Bedingung schließt diese Möglichkeit aus.

Ausgehend von diesen beiden Bedingungen lassen sich die maximale wl max und die minimale wl min Geschwindigkeit der Suspensionsbewegung berechnen:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-09/image3.png" alt="Formel" /> (9.1)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-09/image4.png" alt="Formel" /> (9.2)</div>

Der Wert wl wird zwischen den Werten wl max und wl min gewählt.

Es ist bekannt, dass zwischen der Absetzdauer τabs der dispersen Phase und der Verweilzeit der Suspension in der Absetzzone τv folgender Zusammenhang besteht

τabs ≤ τv. 	(9.3)

Gleichzeitig gilt

τv = L/wl, 	(9.4)

wobei L die Länge der Absetzzone ist, m.

Aus den Gleichungen (9.3) und (9.4) erhalten wir

L ≥ τabs wl. 	(9.5)

Die Gesamtlänge des Kanals (siehe Abb. 9.1)

LΣ = L + ΔL, 	(9.6)

wobei ΔL = 0,2–0,5 m.

Die Leistung eines Abscheiders mit n Kanälen der Breite b, m³/s,

V = wl Hbn. 	(9.7)

Die Gesamtabsetzfläche, m²,

F = nbLΣcosα.

## Ablauf der Arbeit

Der Absetzprozess im Dünnschichtabscheider wird durch das Absetzen in einem „vertikalen Ausschnitt" des Kanals modelliert, z. B. in einem Zylinder (Abb. 9.2), dessen Höhe nicht kleiner als h sein darf (h = H/cosα) und dessen Durchmesser möglichst groß gewählt werden sollte (nicht kleiner als 50 mm), um den Einfluss der Wände auf den Absetzprozess zu vermeiden.

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-09/image5.png" alt="Abbildung zur Laborarbeit №9" loading="lazy" />
</div>

Wir gießen Suspension in den Zylinder und beginnen im selben Moment, die zeitliche Änderung der Lage habs der Grenzfläche zwischen geklärter Flüssigkeit und Sediment zu erfassen. Den Absetzprozess stellen wir grafisch dar (siehe Abb. 9.2).

1. Wir wählen die Kanalhöhe H und den Neigungswinkel α zur Horizontalen.

2. Wir ermitteln experimentell die Abhängigkeit der gewünschten Aufteilung der Suspension in geklärte Flüssigkeit und Sediment von der Prozessdauer (siehe Abb. 9.2).

3. Wir berechnen wl max und wl min und wählen wl.

4. Den mithilfe von Abb. 9.2 gewählten Wert τabs verwenden wir zur Berechnung von L und LΣ (Gleichungen (9.5) und (9.6)).

5. Wir wählen die Kanalbreite b.

6. Mithilfe von Gleichung (9.7) bestimmen wir n, wenn V vorgegeben ist, oder V, wenn n vorgegeben ist.

Falls sich das Verhältnis zwischen L, b und n als unpraktisch erweist, ändern wir wl oder b und wiederholen die Berechnung.
