---
title: "Betrieb, Wartung und Zuverlässigkeit von Lebensmittellinien"
topic: "process-design"
topic_title: "Auslegung und Scale-up"
lecture: 38
description: "Betrieb einer Lebensmittellinie nach der Inbetriebnahme: vorbeugende und zustandsorientierte Wartung, hygienische Rückführung, Kalibrierung, Ersatzteile, OEE, MTBF, MTTR und Fehleranalyse."
keywords: ["Wartung", "Zuverlässigkeit", "OEE", "MTBF", "MTTR", "CMMS", "Kalibrierung", "Lebensmittellinie"]
duration: "60 min"
difficulty: "mittel"
author: "FoodProcessPortal"
updated: "2026-08-18"
---

# Vorlesung 38. Betrieb, Wartung und Zuverlässigkeit von Lebensmittellinien

## Was Sie Lernen

Nach dieser Vorlesung können Sie erklären, warum Wartung ein Teil der Lebensmittelsicherheit ist, reaktive, geplante, vorbeugende und zustandsorientierte Wartung unterscheiden, einfache Kennzahlen wie OEE, MTBF und MTTR berechnen, kritische Anlagen für den Wartungsplan bestimmen und die hygienische Rückführung nach Reparaturen beschreiben.

---

## 1. Nach Der Inbetriebnahme Beginnt Der Echte Betrieb

Auch eine gut ausgelegte und abgenommene Linie verändert sich: Dichtungen verschleißen, Riemen dehnen sich, Wärmeübertragungsflächen verschmutzen, Sensoren driften, Spiel nimmt zu, Mikrorisse entstehen und das Produktverhalten ändert sich. Betrieb bedeutet daher aktive Kontrolle des Anlagenzustands.

In der Lebensmittelproduktion betrifft ein Ausfall nicht nur Stillstand. Er kann Kontamination, Allergenkreuzkontakt, Fremdkörper, unzureichende Pasteurisierung, schlechte Kühlung oder unvollständige Reinigung verursachen.

---

## 2. Wartungsstrategien

Reaktive Reparatur bedeutet, dass erst nach einem Ausfall repariert wird. Bei kritischen Aggregaten ist das meist teuer, weil der Ausfall im ungünstigen Moment kommt und Produktverluste verursacht.

Geplante Wartung erfolgt nach Kalender oder Betriebsstunden. Sie ist besser, berücksichtigt aber nicht immer den realen Zustand.

Vorbeugende Wartung konzentriert sich auf Ausfallursachen: Schmierung, Spannung, Reinigung, Nachziehen, Dichtungswechsel, Entleerung und Vibrationskontrolle.

Zustandsorientierte oder vorausschauende Wartung nutzt Daten: Vibration, Lagertemperatur, Motorstrom, Druck, Durchfluss, Ventiltrends und Änderungen der CIP-Zeit.

![Wartungsstrategie](/images/lectures/process-design/maintenance-strategy-pyramid.svg)

Nicht jedes Bauteil braucht Sensorik. Kritische Bauteile sollten aber vor dem Ausfall betreut werden.

---

## 3. Kritikalität Der Ausrüstung

Ein Wartungsplan beginnt mit der Einstufung der Anlagen. Für jedes Aggregat bewertet man Einfluss auf Produktsicherheit, Qualität, Produktionsverlust, Reparaturaufwand, Ersatzteilverfügbarkeit, Kontaminationsrisiko nach Eingriffen, Ausfallhistorie und Möglichkeiten der Früherkennung.

Eine Hilfspumpe kann oft bis zum nächsten Wartungsfenster warten. Ein Temperatursensor der Pasteurisierung, ein Umschaltventil für unsicheres Produkt oder eine Pumpendichtung nach der Wärmebehandlung benötigen strengere Kontrolle.

---

## 4. OEE: Wo Effizienz Verloren Geht

OEE bedeutet Gesamtanlageneffektivität. Vereinfacht gilt:

**OEE = Verfügbarkeit x Leistung x Qualität**

Verfügbarkeit sinkt durch Störungen, Warten auf Medien, lange Umrüstungen und verzögertes CIP. Leistung sinkt durch Betrieb unter Nennleistung, Kurzstopps, instabile Dosierung und Engpässe. Qualität sinkt durch Ausschuss, Rückläufer, instabile Füllmassen und Verluste beim Anfahren.

![OEE-Verluste einer Lebensmittellinie](/images/lectures/process-design/oee-loss-tree.svg)

Wichtig ist nicht nur der Prozentwert. Wichtig ist die Ursache der Verluste.

---

## 5. MTBF, MTTR Und Engpässe

MTBF ist die mittlere Zeit zwischen Ausfällen. Sie zeigt, wie oft ein Aggregat Probleme verursacht.

MTTR ist die mittlere Wiederherstellungszeit. Sie zeigt, wie schnell die Anlage wieder einsatzbereit ist.

Zwei Bauteile können gleich oft ausfallen, aber sehr unterschiedlich wirken. Wenn eines in 15 Minuten repariert ist und das andere sechs Stunden Stillstand plus neues CIP verursacht, sind die Prioritäten verschieden.

Bei Lebensmittellinien umfasst die Wiederherstellungszeit auch Produktsperrung, hygienische Reinigung nach Reparatur, erneutes CIP oder lokale Sanitation, Fremdkörperkontrolle, Kalibrierung oder Funktionstest und Freigabe durch Qualität.

---

## 6. Hygienische Rückführung Nach Reparaturen

Nach einem Eingriff ist eine Linie nicht automatisch produktionsbereit. Sie muss wieder in einen hygienisch sicheren Zustand gebracht werden.

![Wartungs- und Kalibrierkreis](/images/lectures/process-design/calibration-maintenance-loop.svg)

Typischer Ablauf:

- Wartungsauftrag erstellen
- Energiequellen trennen und sichern
- Reparatur mit Werkzeug- und Teilekontrolle durchführen
- Fett, Späne, Dichtungen und Verpackung entfernen
- korrekte Montage prüfen
- lokale Reinigung oder CIP durchführen
- Vorstartprüfung ausführen
- Arbeit dokumentieren und Linie freigeben

Kleine Teile sind besonders kritisch: Muttern, Scheiben, Dichtungsfragmente, Kunststoffstücke und Kabelisolierung können Fremdkörper werden.

---

## 7. Kalibrierung Und Sensorprüfung

Ein Sensor kann einen Wert anzeigen und trotzdem falsch sein. Kritische Messungen brauchen regelmäßige Prüfung.

In Lebensmittelprozessen werden oft Temperatur, Druck, Durchfluss, pH, Leitfähigkeit, Konzentration, Masse, Dosierung, Metalldetektor, Röntgenkontrolle und Füllstände überwacht.

Kalibrierung braucht Intervall, Methode, Referenz, Toleranz, Aufzeichnung und eine Maßnahme bei Abweichung. Wenn ein kritischer Sensor außerhalb der Toleranz liegt, muss bewertet werden, welches Produkt unter falscher Kontrolle hergestellt worden sein könnte.

---

## 8. Ersatzteile Und CMMS

Zuverlässigkeit hängt auch von Ersatzteilen ab. Für kritische Anlagen braucht man Mindestbestände an Dichtungen, Lagern, Riemen, Ventilmembranen, Sensoren, Antrieben, CIP-Düsen und Filterelementen.

Ein CMMS oder ein einfaches elektronisches Protokoll zeigt die Historie: was ausfiel, wer reparierte, welche Teile verbraucht wurden, wie lange der Stillstand dauerte und ob sich Ursachen wiederholen.

Jeder wiederholte Ausfall sollte nicht nur eine Reparatur, sondern auch die Frage auslösen: Warum wiederholt er sich?

---

## 9. Typische Fehler

- nur nach Ausfällen reparieren
- kritische und unkritische Anlagen gleich behandeln
- hygienische Rückführung nach Reparaturen vergessen
- Sensoren wechseln, ohne frühere Chargenaufzeichnungen zu prüfen
- Werkzeuge und Kleinteile nicht kontrollieren
- wiederholte Ausfälle nicht analysieren
- OEE ohne Verlustursachen berechnen
- Ersatzteile erst beschaffen, wenn sie fehlen
- Bediener nicht auf frühe Ausfallzeichen schulen

---

## 10. Aktueller Kontext

Nützliche Materialien:

- [FDA: CGMPs for Food and Dietary Supplements](https://www.fda.gov/food/guidance-regulation-food-and-dietary-supplements/current-good-manufacturing-practices-cgmps-food-and-dietary-supplements)
- [FDA: GMP 21st Century study - common food safety problems](https://www.fda.gov/food/current-good-manufacturing-practices-cgmps-food-and-dietary-supplements/good-manufacturing-practices-21st-century-food-processing-2004-study-section-4-common-food-safety)
- [21 CFR 117.35: Sanitary operations](https://www.law.cornell.edu/cfr/text/21/117.35)
- [EHEDG guideline catalogue](https://www.ehedg.org/guidelines-working-groups/guidelines/guidelines)
- [Reliability Centered Maintenance Practices in Food Industry](https://www.sciencedirect.com/science/article/pii/S1877050919312050)
- [Food Engineering: proactive maintenance and OEE](https://www.foodengineeringmag.com/articles/103427-how-to-improve-oee-with-proactive-maintenance)

---

## Kontrollfragen

1. Warum beeinflusst Wartung die Lebensmittelsicherheit?
2. Worin unterscheidet sich vorbeugende Wartung von reaktiver Reparatur?
3. Aus welchen drei Faktoren besteht OEE?
4. Warum umfasst MTTR bei Lebensmittellinien mehr als reine Reparaturzeit?
5. Was ist vor der Rückkehr einer reparierten Linie in die Produktion zu tun?
6. Was ist zu tun, wenn ein kritischer Sensor außerhalb der Toleranz liegt?
