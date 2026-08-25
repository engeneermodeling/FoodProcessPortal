---
title: "EXPERIMENTELLE BESTIMMUNG DES REIBUNGSWIDERSTANDSKOEFFIZIENTEN UND DER ÄQUIVALENTEN RAUHIGKEIT"
category: "hydromechanical"
category_title: "Hydromechanische Prozesse"
lab: 4
goal: "die Reibungswiderstandskoeffizienten experimentell und rechnerisch zu bestimmen und miteinander zu vergleichen sowie die entsprechende äquivalente Rauhigkeit des Rohres zu bestimmen."
description: "Experimentelle Bestimmung des Reibungswiderstandskoeffizienten und der äquivalenten Rauhigkeit einer Rohrleitung."
author: "FoodProcessPortal"
updated: "2026-07-22"
---
# Laborarbeit №4. Experimentelle Bestimmung des Reibungswiderstandskoeffizienten und der äquivalenten Rauhigkeit

## Theoretische Grundlagen

Bei der Bewegung von Flüssigkeit durch eine Rohrleitung wird Energie zur Überwindung der inneren Reibungskräfte zwischen den Flüssigkeitsschichten und der äußeren Reibung zwischen der Flüssigkeit und den Rohrwänden aufgewendet. Diese Energie- (Höhen-) Verluste werden nach der Darcy-Weisbach-Formel berechnet

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image1.png" alt="Formel" /> (4.1)</div>

wobei λ der Reibungswiderstandskoeffizient ist; l die Rohrlänge; d der Rohrdurchmesser; w die mittlere Flüssigkeitsgeschwindigkeit.

Die Zuverlässigkeit der Berechnung dieser Höhenverluste hängt von der korrekten Bestimmung des Reibungswiderstandskoeffizienten λ ab. Er wird experimentell nach Formel (4.1) oder anhand empirischer Formeln bestimmt.

Im ersten Fall

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image2.png" alt="Formel" /> (4.2)</div>

Am Versuchsaufbau werden der Höhenverlust hl entlang der Länge und die mittlere Strömungsgeschwindigkeit der Flüssigkeit w bestimmt. Wie dies geschieht, wird im Weiteren beschrieben.

Im zweiten Fall ist die Bestimmung des Koeffizienten λ etwas schwieriger, da er eine komplexe Funktion ist und von den Eigenschaften der Flüssigkeit und den Rohrparametern abhängt:

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image3.png" alt="Formel" /> λ = f (Re, ε), 	(4.3)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image3.png" alt="Formel" /> wobei ε die relative Rauhigkeit des Rohres ist, das Verhältnis der absoluten Rauhigkeit zum Rohrdurchmesser, d. h. ε = Δ/d.</div>

Während für die laminare Strömung die Beziehung

λ = 64/Re	(4.4)

analytisch bewiesen und experimentell bestätigt und die einzige ihrer Art ist, können für die turbulente Strömung Berechnungsformeln nur durch Verallgemeinerung experimenteller Ergebnisse abgeleitet werden.

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-04/image4.png" alt="Abbildung zur Laborarbeit №4" loading="lazy" />
</div>

Die Struktur der turbulenten Strömung im lebendigen Querschnitt ist ungleichmäßig und hat das in Abb. 4.1 gezeigte Aussehen. Sie besteht aus dem Strömungskern 3, der viskosen Unterschicht 1 und der dazwischenliegenden Übergangsschicht 2.

Im Strömungskern hat der Geschwindigkeitsgradient aufgrund intensiver Durchmischung einen kleinen Wert, und die Flüssigkeit bewegt sich mit Geschwindigkeiten, die der mittleren Geschwindigkeit nahekommen.

In der viskosen Unterschicht sind die Geschwindigkeitsgradienten groß, das Geschwindigkeitsverteilungsgesetz ähnelt dem der laminaren Strömung.

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-04/image5.png" alt="Abbildung zur Laborarbeit №4" loading="lazy" />
</div>

Abb. 4.2. Schemata der hydraulischen Rauhigkeit von Rohren

In der Übergangsschicht gehen die viskosen Reibungskräfte abrupt in Trägheitskräfte über.

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image6.png" alt="Formel" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image7.png" alt="Formel" /> Stellen wir uns eine Rohrwand mit einer bestimmten absoluten Rauhigkeit Δ vor (Abb. 4.2). Die Wand steht in direktem Kontakt mit der viskosen Unterschicht der Dicke δ. Mit steigender Geschwindigkeit nimmt die Dicke der viskosen Unterschicht gemäß folgender Formel ab</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image8.png" alt="Formel" /> (4.5)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image6.png" alt="Formel" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image7.png" alt="Formel" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image9.png" alt="Formel" /> Bei kleinen Werten von Δ und relativ kleinen Re-Zahlen, wenn δ > Δ ist (Abb. 4.2, a), klingen die beim Umströmen der Rauhigkeitserhebungen Δ entstehenden Störungen schnell ab und beeinflussen den Reibungskoeffizienten λ praktisch nicht. Diese Zone der turbulenten Strömung wird als Zone der hydraulisch glatten Rohre bezeichnet, in der λ nur eine Funktion der Re-Zahl ist. Zur Bestimmung von λ in dieser Zone wird die Blasius-Formel verwendet (bei Re < 20/ε)</div>

λ = 0,3164/Re0,25.					(4.6)

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image6.png" alt="Formel" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image7.png" alt="Formel" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image10.png" alt="Formel" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image9.png" alt="Formel" /> Mit steigender Re-Zahl nimmt die Dicke der viskosen Unterschicht ab (Abb. 4.2, b), und ein Teil der Rauhigkeitserhebungen Δ gelangt in den Strömungskern (δ < Δ). In diesem Fall ist das Rohr in der Übergangs- (unterquadratischen) Widerstandszone rau, und λ = f (Re; ε). Zur Bestimmung von λ in dieser Widerstandszone wird die Altschul-Formel verwendet (bei 20/ε < Re < 500/ε)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image11.png" alt="Formel" /> (4.7)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image7.png" alt="Formel" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image12.png" alt="Formel" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image13.png" alt="Formel" /> <img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image9.png" alt="Formel" /> Bei großen Re-Zahlen, wenn die viskose Unterschicht δ im Vergleich zur absoluten Rauhigkeit vernachlässigt werden kann (δ << Δ) (Abb. 4.2, c), ist das Rohr rau, und der Widerstandskoeffizient λ hängt nur von der relativen Rauhigkeit ε ab. Die Widerstandszone ist quadratisch. In dieser Zone wird die Schifrinson-Formel angewendet (bei Re > 500/ε)</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image14.png" alt="Formel" /> (4.8)</div>

## Beschreibung des Laboraufbaus

Der Aufbau (Abb. 4.3) besteht aus einem großen Behälter 1 (Mariotte-Flasche), an den das Versuchsrohr 2 mit einer Länge von l = 4,25 m und einem Durchmesser von d = 0,0260 m angeschlossen ist. Am Anfang und Ende des Rohres (im Abstand l) sind die Piezometer 3 und 4 angeschlossen. Zur Messung des Flüssigkeitsdurchsatzes ist auf Waage 7 der Sammelbehälter 6 aufgestellt. Der Flüssigkeitsdurchsatz wird mit Ventil 5 geregelt.

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-04/image15.png" alt="Abbildung zur Laborarbeit №4" loading="lazy" />
</div>

Abb. 4.3. Schema des Laboraufbaus

## Ablauf der Arbeit

1. Nachdem die Mariotte-Flasche mit Wasser gefüllt ist, schließen wir Luftventil 9. Wir öffnen Ventil 5 und stellen eine beliebige Flüssigkeitsgeschwindigkeit im Rohr 2 ein. Dabei fließt die Flüssigkeit durch Ventil 8 in die Kanalisation ab.

2. Sobald die Mariotte-Flasche 1 zu arbeiten beginnt, schließen wir Ventil 8 und tarieren den Sammelbehälter 6 mit Wasser auf Waage 7. Danach schalten wir die Stoppuhr ein.

3. Alle 30 s, auf Signal, während Behälter 6 mit der vorgegebenen Wassermenge gefüllt wird, notieren wir die Anzeigen der Piezometer 3 und 4.

4. Wenn Behälter 6 mit der vorgegebenen Wassermenge gefüllt ist, stoppen wir die Stoppuhr, öffnen Ventil 9 und schließen Ventil 5. Wir messen die Wassertemperatur in Behälter 6.

5. Wir lassen das Wasser aus Behälter 6 ab, indem wir Ventil 8 öffnen.

6. Wir erhöhen den Wasserdurchsatz im Rohr 2 mit Ventil 5 und wiederholen den Versuch gemäß den Punkten 2–5.

## Auswertung der Ergebnisse

1.	Wir bestimmen den Wasserdurchsatz im Rohr 2, m³/s,

Q = V/τ,

wobei V das Wasservolumen ist, m³, V = m/ρ; τ die Versuchsdauer, s; m die in Behälter 6 gesammelte Wassermasse, kg; ρ die Dichte des Wassers, kg/m³, bei der gemessenen Temperatur.

2. Wir bestimmen die mittlere Geschwindigkeit der Wasserbewegung im Rohr, m/s;

w = Q/F,

wobei F die lebendige Querschnittsfläche der Strömung im Rohr ist (bzw. die Querschnittsfläche des Rohres).

3. Wir berechnen den Höhenverlust aus der Differenz der Mittelwerte der Anzeigen der Piezometer 1 und 2, m Wassersäule: hl = h1 – h2.

4. Wir berechnen den Reibungswiderstandskoeffizienten nach der Formel

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image16.png" alt="Formel" /></div>

5. Anhand der gemessenen Wassertemperatur (siehe Anhang 3) ermitteln wir den kinematischen Viskositätskoeffizienten des Wassers ν, m²/s, und berechnen die Re-Zahl

Re = w d/ν.

<div class="lab-figure">
  <img src="/images/labs/hydromechanical/lab-04/image17.png" alt="Abbildung zur Laborarbeit №4" loading="lazy" />
</div>

Abb. 4.4. Colebrook-Kurven

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image18.png" alt="Formel" /> 6. Anhand der Colebrook-Kurven (Abb. 4.4) finden wir für die bestimmten Werte von λ und Re die hydraulische Widerstandszone und die relative Rauhigkeit des Rohres ε.</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image19.png" alt="Formel" /> Wir bestimmen die äquivalente Rauhigkeit: Δä mm. Für diese Widerstandszone wählen wir die entsprechende empirische Formel und berechnen λb.</div>

<div class="lab-formula"><img class="lab-formula-img" src="/images/labs/hydromechanical/lab-04/image20.png" alt="Formel" /> In Abb. 4.4 ist bei Re = 2,5·10⁴ und λ = 0,033 die hydraulische Widerstandszone unterquadratisch (Übergangszone), die relative Rauhigkeit ε = 4·10⁻³. Zur Bestimmung von λb in dieser Zone kann die Altschul-Formel (4.8) verwendet werden. Zur Ordnung der Berechnungen füllen wir die Ergebnistabelle aus.</div>

| Versuch Nr. | Rohrdurchmesser d, m | Wasservolumen V, m³ | Versuchsdauer τ, s | Querschnittsfläche F, m² | Wasserdurchsatz Q, m³/s | Wassergeschwindigkeit w, m/s | Mittlere Piezometeranzeigen, m | Mittlere Piezometeranzeigen, m |
|---|---|---|---|---|---|---|---|---|
| Versuch Nr. | Rohrdurchmesser d, m | Wasservolumen V, m³ | Versuchsdauer τ, s | Querschnittsfläche F, m² | Wasserdurchsatz Q, m³/s | Wassergeschwindigkeit w, m/s | h3 | h4 |
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| 1 2 3 |   |   |   |   |   |   |   |   |

| Versuch Nr. | Höhenverlust hl, m | Reibungswiderstandskoeffizient λ | Wassertemperatur t, °C | Kinematischer Viskositätskoeffizient ν, m²/s | Re-Zahl | Äquivalente Rauhigkeit Δä | Reibungskoeffizient λb |
|---|---|---|---|---|---|---|---|
| 1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 |
| 1 2 3 |   |   |   |   |   |   |   |

## Kontrollfragen

1. Worin bestehen die Besonderheiten der turbulenten Flüssigkeitsbewegung in Rohren? Zeigen Sie die Strömungsstruktur im Querschnitt.
2. Was sind „hydraulisch glatte" und „raue" Rohre?
3. Welche hydraulischen Widerstandszonen gibt es? Zeigen Sie diese anhand der Nikuradse- und Colebrook-Kurven. Worin unterscheiden sie sich?
4. Kann ein und dasselbe Rohr hydraulisch glatt und rau zugleich sein?
5. Wie bestimmt man die Formel zur Berechnung von λb für die jeweilige Widerstandszone?
