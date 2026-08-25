---
title: "EINFACHE DESTILLATION"
category: "mass-transfer"
category_title: "Stoffaustauschprozesse"
lab: 24
goal: "die Differentialgleichung der einfachen Destillation experimentell zu überprüfen."
description: "Experimentelle Überprüfung der Differentialgleichung der einfachen Destillation."
author: "FoodProcessPortal"
updated: "2026-07-22"
---
# Laborarbeit №24. Einfache Destillation

## Theoretische Grundlagen

Als einfache Destillation bezeichnet man die teilweise Trennung eines Flüssigkeitsgemisches durch einmaliges Verdampfen mit anschließender Kondensation des entstehenden Dampfes. Beim Sieden des Gemisches ist der Gehalt der leichter flüchtigen Komponente im Dampf — und somit auch im bei der Kondensation entstehenden Destillat — größer als in der Flüssigkeit. Dadurch nimmt der relative Gehalt der weniger flüchtigen Komponente im Sumpf allmählich zu.

Die Zusammensetzung der Flüssigkeit im Destillationsapparat nach dem Verdampfen eines Teils davon sowie die Zusammensetzung des entstehenden Destillats lassen sich aus der Stoffbilanz der einfachen Destillation bestimmen. Da sich der relative Gehalt der Gemischkomponenten im Destillationsapparat und im Destillat während der Destillation ständig ändert, wird die Stoffbilanz in differentieller Form für einen beliebig gewählten Zeitpunkt aufgestellt.

Wir wählen folgende Bezeichnungen: W — die Menge des Gemisches im Apparat zu einem beliebigen Zeitpunkt der Destillation, kg; X — die Zusammensetzung der Flüssigkeit im Destillationsapparat in Massenanteilen der leichtflüchtigen Komponente zu einem beliebigen Zeitpunkt; Y — die Zusammensetzung des Dampfes über der Flüssigkeit in Massenanteilen der leichtflüchtigen Komponente zu einem beliebigen Zeitpunkt.

Die Zusammensetzung des Dampfes über der Flüssigkeit lässt sich als Funktion der Flüssigkeitszusammensetzung darstellen, d. h. Y = f(X). Beim Verdampfen einer unendlich kleinen Gemischmenge dW mit der Zusammensetzung Y verringert sich die Flüssigkeitskonzentration um dX, und der Flüssigkeitsrest im Sumpf lässt sich als W – dW darstellen, wobei in diesem Rest die Menge der leichtflüchtigen Komponente (W – dW)(X – dX) beträgt. Die Zusammensetzung des Destillats wird mit Y bezeichnet, seine Menge mit dW.

Die Stoffbilanz für die leichtflüchtige Komponente lässt sich in diesem Fall wie folgt schreiben

WX = (W – dW)(X – dX) + dWY

oder 	WX = WX – dWX – WdX + dWdX + dWY.

Vernachlässigt man das Produkt dWdX als unendlich kleine Größe zweiter Ordnung und formt die letzte Gleichung um, erhält man

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image1.png" alt="Formel" /></div>

Verbleibt nach dem Abdestillieren einer bestimmten Flüssigkeitsmenge im Sumpf eine Menge W_e kg Gemisch mit der Zusammensetzung X_e, und betrug die Ausgangsmenge des Gemisches zu Beginn der Destillation W_a mit der Zusammensetzung X_a, so lässt sich die letzte Gleichung in den Grenzen von W_e und X_e bis W_a und X_a integrieren. Dann erhalten wir

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image2.png" alt="Formel" /> <img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image3.png" alt="Formel" /> oder  	(24.1)</div>

Da die Funktionsbeziehung Y = f(X) nur durch die Gleichgewichtskurve des gegebenen Gemisches gegeben ist, lässt sich Gleichung (24.1) grafisch sowie mithilfe eines Computers lösen. Betrachten wir zunächst die grafische Lösungsmethode für Gleichung (24.1).

Mithilfe der Gleichgewichtskurve erstellen wir ein Diagramm (Abb. 24.1). Auf der Abszissenachse tragen wir die Werte von X auf, auf der Ordinatenachse — die Werte von 1/(Y – X), wobei Y, entsprechend jedem Wert von X, aus der Gleichgewichtskurve für das gegebene Gemisch bestimmt wird. Die Fläche unter der Kurve, multipliziert mit dem Maßstab jeder Achse, innerhalb der Grenzen von X_e bis X_a, ist das Integral

<div class="lab-figure">
  <img src="/images/labs/mass-transfer/lab-24/image4.png" alt="Abbildung zur Laborarbeit №24" loading="lazy" />
</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image5.png" alt="Formel" /> (24.2)</div>

Kennt man den Wert des Integrals A und die Menge des Ausgangsgemisches W_a, lässt sich leicht die Menge des Sumpfrückstands W_e mit der Zusammensetzung X_e bestimmen. Die Menge des erhaltenen Destillats W_d = W_a – W_e mit der Zusammensetzung X_d lässt sich aus der Stoffbilanzgleichung für die leichtflüchtige Komponente bestimmen:

W_a X_a = W_d X_d + W_e X_e,

woraus

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image6.png" alt="Formel" /> (24.3)</div>

## Beschreibung des Laboraufbaus

Der Aufbau für die einfache Destillation (Abb. 24.2) besteht aus: Destillierblase 1 mit Elektroheizung 6, Kondensator 4, Auffangtrichter 5, Ablasshahn 7 und Standglas 10.

Zur Durchführung der Arbeit werden folgende Laborgefäße und -geräte bereitgestellt: zwei gläserne Alkoholometer mit Skalen von 0 bis 50 und von 50 bis 100 % (vol.), ein Alkoholthermometer, zwei Messzylinder mit 500 ml und zwei mit 1000 ml Fassungsvermögen, zwei Kolben mit 0,5 und 0,3 l Fassungsvermögen sowie Millimeterpapier.

<div class="lab-figure">
  <img src="/images/labs/mass-transfer/lab-24/image7.jpg" alt="Abbildung zur Laborarbeit №24" loading="lazy" />
</div>

## Ablauf der Arbeit

1. Wir füllen die leere Destillierblase mit einer Wasser-Alkohol-Mischung. Vor dem Einfüllen bestimmen wir das Volumen der Mischung und ihren Alkoholgehalt (in Volumenprozent). Die Alkoholometer-Anzeigen rechnen wir anhand von Tabellen zur Bestimmung des Ethanolgehalts in Wasser-Alkohol-Gemischen auf Anzeigen bei 20 °C um.

2. Wir schließen den Hahn des Auffangtrichters 5. Die Menge der Mischung sollte dabei 2,5–3,0 l bei einer Konzentration von 15–22 % (vol.) und 20 °C betragen.

3. Unter Vorgabe des Gehalts der leichtflüchtigen Komponente (Alkohol) im Sumpfrückstand (X_e = 3–5 % (vol.) bei 20 °C) berechnen wir den Destillationsprozess.

4. Nach der Berechnung schalten wir die Elektroheizung der Destillierblase ein und öffnen gleichzeitig das Kaltwasserventil zum Kondensator, wobei wir ab dem Zeitpunkt des ersten Kondensats mit der Regelung beginnen.

5. Nach Entnahme der berechneten Destillatmenge beenden wir den Prozess. Die Elektroheizung schalten wir einige Minuten vor Erreichen der erforderlichen Destillatmenge aus (die Destillation endet aufgrund der thermischen Trägheit der Heizung).

6. Wir entnehmen aus Hahn 7 eine bestimmte Menge Sumpfrückstand in einen Messzylinder.

7. Unter Berücksichtigung der Temperaturen von Destillat und Sumpfrückstand messen wir deren Konzentration in Massenprozent.

8. Wir vergleichen die berechneten Werte von X_d und X_e mit den experimentell ermittelten. Die Abweichung sollte 1–2 % nicht überschreiten.

## Auswertung der Ergebnisse

Es soll eine Wasser-Alkohol-Mischung durch einfache Destillation so getrennt werden, dass die Alkoholkonzentration im Sumpfrückstand bei 20 °C 5 % (Masse) beträgt.

1. Wir bestimmen die Menge und Zusammensetzung des Ausgangsgemisches. Wir füllen einen 500-ml-Zylinder mit der Mischung, messen dann mit einem Alkoholometer mit Skala von 0 bis 50 % (vol.) die Konzentration und mit einem Thermometer die Temperatur. Angenommen, die Alkoholometer-Anzeige beträgt 22 % (vol.) bei 17 °C. Diesen Anzeigen entspricht eine Konzentration von 23 % (vol.) bei 20 °C. Gemäß Anhang 1 entspricht einer Konzentration von 23 % (vol.) eine Konzentration von 18,71 % (Masse) und eine Dichte von 970,36 kg/m³.

Mit einem 1-l-Messzylinder messen wir das Volumen des Ausgangsgemisches. Angenommen, dieses Volumen beträgt 3000 ml (3 l).

Somit hat das Ausgangsgemisch: Volumen V_a = 3000 ml; Konzentration X_a = 0,1871 Massenanteil; Dichte ρ_a = 0,97036 g/ml; Masse W_a = ρ_a V_a = 2911 g; Alkoholmasse in der Lösung P_a = W_a X_a = 544 g.

Die erhaltenen Daten tragen wir in Tabelle 24.2, Spalte „Ausgangsgemisch", ein. Die Mischung wird in die Destillierblase gegossen.

2. Für die grafische Lösung des Integrals (Gleichung (24.1)) entnehmen wir Anhang 2 die erforderlichen Daten zur Flüssigkeits- und Dampfzusammensetzung im Bereich von X_e bis X_a und berechnen dann die Werte von 1/(Y – X). Die erhaltenen Daten tragen wir in Tabelle 24.1 ein.

Ein Beispiel für die grafische Lösung von Gleichung (24.1) ist in Tabelle 24.1 dargestellt.

Zum Ausfüllen der letzten beiden Spalten von Tabelle 24.1 wählen wir folgende Maßstäbe: für X — 1 mm entspricht 0,002 Einheiten von X, d. h. M_X = 0,002; für 1/(Y – X) — 1 mm entspricht 0,02 Einheiten von 1/(Y – X), d. h. M_1/(Y–X) = 0,02.

Die aus der zweiten und fünften Spalte entnommenen Werte teilen wir durch die entsprechenden Maßstäbe und erhalten die Daten der sechsten und siebten Spalte von Tabelle 24.1. Zum Beispiel für die erste Datenzeile von Tabelle 24.1:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image8.png" alt="Formel" /></div>

Für die grafische Lösung des Integrals zeichnen wir anhand der Daten aus der sechsten und siebten Spalte von Tabelle 24.1 auf Millimeterpapier im gewählten Maßstab den Graphen der Funktion:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image9.png" alt="Formel" /></div>

Die Fläche des Integrals Φ beträgt im gewählten Maßstab 8300 mm², bzw.

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image10.png" alt="Formel" /></div>

3. Wir bestimmen die Masse des Sumpfrückstands W_e nach der Destillation mithilfe von Gleichung (24.2):

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image11.png" alt="Formel" /></div>

4. Wir berechnen die Masse des Destillats:

W_d = W_a – W_e = 2911 – 2090 = 821 g.

5. Aus Gleichung (24.3) bestimmen wir die Destillatkonzentration:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image12.png" alt="Formel" /></div>

Tabelle 24.1

| Alkoholgehalt | Alkoholgehalt | Alkoholgehalt | Konzentrationsdifferenz | 1/(Y-X) | Im Maßstab, mm | Im Maßstab, mm |
|---|---|---|---|---|---|---|
| in Flüssigkeit | in Flüssigkeit | im Dampf | Konzentrationsdifferenz | 1/(Y-X) | Im Maßstab, mm | Im Maßstab, mm |
| % (Masse) | X, Anteil | Y, Anteil | Y-X | 1/(Y-X) | X | 1/(Y-X) |
| 5,0 6,0 7,0 8,0 9,0 10,0 11,0 12,0 13,0 14,0 15,0 16,0 17,0 18,0 18,71 | 0,050 0,060 0,070 0,080 0,090 0,100 0,110 0,120 0,130 0,140 0,150 0,160 0,170 0,180 0,187 | 0,370 0,411 0,446 0,476 0,500 0,522 0,541 0,558 0,574 0,588 0,600 0,611 0,622 0,632 0,640 | 0,320 0,351 0,376 0,394 0,410 0,422 0,431 0,438 0,444 0,448 0,450 0,451 0,452 0,452 0,453 | 3,13 2,85 2,67 2,54 2,44 2,36 2,32 2,28 2,26 2,24 2,22 2,21 2,20 2,20 2,20 | 25,0 30,0 35,0 40,0 45,0 50,0 55,0 60,0 65,0 70,0 75,0 80,0 85,0 90,0 93,5 | 156,5 142 133 127 122 118 116 114 113 112 111 110,5 110 110 110 |

6. Wir bestimmen die berechneten Daten für das Destillat:

a) gemäß Anhang 2 entspricht einer Konzentration von 54,02 % (Masse) bei 20 °C ρ_d = 0,9048 g/ml. Der Wert von ρ_d kann mit der Interpolationsformel bestimmt werden

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/mass-transfer/lab-24/image13.png" alt="Formel" /></div>

wobei X0 < X_d < X1;

b) Volumen V_d = W_d/ρ_d = 853/0,9048 = 943 ml;

c) Alkoholmenge im Destillat P_d = W_d · X_d = 853 · 0,5402 = 461 g.

Die Berechnungsergebnisse tragen wir in Tabelle 24.2, Spalte „Destillat — Berechnung", ein.

7. Analog ermitteln wir die Daten für den Sumpfrückstand:

a) bei einer Konzentration X_e = 5 % (Masse) und 20 °C ist ρ_e = 0,9893 g/ml;

b) berechnete Zusammensetzung X_e = 0,05 (Massenanteil);

c) Masse W_e = 2058 g;

d) Volumen V_e = W_e/ρ_e = 2058/0,9893 = 2080 ml;

e) Alkoholmenge im Sumpfrückstand P_e = W_e · X_e = 2058 · 0,05 = 103 g.

Die Berechnungsergebnisse tragen wir in Tabelle 24.2, Spalte „Sumpfrückstand — Berechnung", ein.

8. Nach Abschluss der Berechnungen destillieren wir ein Destillat mit dem Volumen V_d = 943 ml ab. Wir messen seine Temperatur und seinen Alkoholgehalt (% vol.). Aus Anhang 1 finden wir die Destillatdichte ρ_d und die Konzentration X_d (% Masse).

Wir berechnen die Destillatmasse W_d = V_d ρ_d und den Massenanteil an Alkohol darin P_d = W_d · X_d und tragen diese Daten in Tabelle 24.2 ein (Spalte „Destillat — Messung").

9. Analog führen wir die Berechnungen für den Sumpfrückstand durch. Wir messen seine Temperatur und volumetrische Alkoholkonzentration, rechnen diese Daten auf

20 °C um, bestimmen die Dichte des Rückstands und die Massenkonzentration des Alkohols. Danach berechnen wir die Masse des Sumpfrückstands und den Massenanteil an Alkohol darin. Wir tragen diese Daten in Tabelle 24.2 ein (Spalte „Sumpfrückstand — Messung").

Tabelle 24.2

| Parameter | Ausgangsgemisch | Ausgangsgemisch | Destillat | Sumpfrückstand | Sumpfrückstand | Sumpfrückstand |
|---|---|---|---|---|---|---|
| Parameter | Berechnung | Messung | Berechnung | Messung | Berechnung | Messung |
| Volumen V, ml Volumetrische Konzentration X, Anteil Gemischmasse W, g Dichte ρ, g/ml Alkoholmasse P, g | -   -  2911  -  544 | 3000   0,1871  -  0,9704  - | 943   0,5402  853  0,9048  461 |   | 2080   0,05  2058  0,9893  103 |   |

10. Übersteigen die Abweichungen zwischen berechneten und experimentellen Daten 5 %, sollte eine Analyse der möglichen Ursachen dieser Abweichungen erfolgen (Verdunstung, Mess- und Berechnungsfehler, Verschüttungen usw.).

## Kontrollfragen

1. Was bezeichnet man als einfache Destillation?
2. Was liegt der Theorie der einfachen Destillation zugrunde?
3. Wie erfolgt die Trennung eines komplexen Gemisches in seine Komponenten?
4. Welche Form hat die Differentialgleichung der einfachen Destillation?
5. Was drückt die Beziehung Y = f(X) aus, und welche Form hat sie?
6. Was ist Dephlegmation?
7. Stellen Sie die Stoffbilanzgleichung der einfachen Destillation auf.
8. Worauf beruht der Prozess der einfachen Destillation?
