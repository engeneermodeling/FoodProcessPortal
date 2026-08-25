---
title: "Messtechnik und Automatisierung von Lebensmittelprozessen"
topic: "automation-control"
topic_title: "Automatisierung und Kontrolle"
lecture: 31
description: "Grundlagen der Automatisierung von Lebensmittellinien: Sensoren für Temperatur, Druck, Füllstand, Durchfluss, pH und Leitfähigkeit, Stellglieder, PID-Regelkreise, PLC, HMI, Alarme, Daten und Rückverfolgbarkeit."
keywords: ["Automatisierung", "Sensoren", "PLC", "HMI", "PID", "Lebensmittelprozesse", "Regelung", "Rückverfolgbarkeit"]
duration: "60 Min."
difficulty: "mittel"
author: "FoodProcessPortal"
updated: "2026-08-18"
---

# Vorlesung 31. Messtechnik und Automatisierung von Lebensmittelprozessen

## Was Sie Lernen Werden

Nach dieser Vorlesung können Sie:

- die wichtigsten Prozessgrößen in Lebensmittelanlagen nennen
- Messung, Steuerung, Regelung und Verriegelung unterscheiden
- den Aufbau eines geschlossenen Regelkreises beschreiben
- die Rolle von PLC, HMI, Sensoren und Stellgliedern verstehen
- erklären, warum Automatisierung für Qualität, Sicherheit und Rückverfolgbarkeit wichtig ist
- typische Fehler bei Sensorauswahl und Reglereinstellung erkennen

---

## 1. Warum Lebensmittelanlagen Automatisierung Brauchen

Eine Lebensmittellinie muss stabil laufen: ein Pasteur muss Temperatur halten, ein Dosierer Masse, eine Pumpe Durchfluss, ein Tank Füllstand, eine CIP-Station Reinigungsmittelkonzentration und eine Verpackungsmaschine Takt und Ausschleusung. Ein Mensch kann den Prozess überwachen, aber nicht dauerhaft auf viele Parameter gleichzeitig präzise reagieren.

Automatisierung ersetzt den Technologen nicht. Sie macht den Prozess wiederholbar, messbar und steuerbar. Der Technologe definiert Qualitätsgrenzen, der Ingenieur baut das Leitsystem, und der Bediener sieht den Anlagenzustand und reagiert auf Abweichungen.

![Messkarte des Lebensmittelprozesses](/images/lectures/automation-control/instrumentation-map.svg)

---

## 2. Was Gemessen Wird

In Lebensmittelprozessen werden häufig Temperatur, Druck, Füllstand, Durchfluss, Masse, pH-Wert, Leitfähigkeit, Feuchte, Trübung, Drehzahl, Ventilstellung und Sicherheitszustände wie Türen, Deckel oder Not-Aus gemessen.

Jede Messung sollte eine Entscheidung unterstützen. Ein Sensor nur “zur Sicherheit” erhöht Kosten und kann falsches Vertrauen erzeugen. Ein nicht gemessener kritischer Parameter bedeutet dagegen, dass der Prozess teilweise blind gefahren wird.

---

## 3. Sensoren und Hygienische Anforderungen

Ein Sensor in einer Lebensmittellinie muss genau sein, aber Genauigkeit allein reicht nicht. Er muss Reinigung, Temperatur, Druck, Reinigungsmittel, Vibration und Produktkontakt aushalten. Werkstoffe, Dichtungen, hygienische Anschlüsse, Entleerbarkeit, Vermeidung von Toträumen und Kalibrierbarkeit sind wichtig.

Leitfähigkeitssensoren können CIP-Stufen überwachen, Durchflussmesser Wasser oder Produkt summieren, Füllstandssensoren Pumpen vor Trockenlauf schützen, Temperatursensoren die Pasteurisationssicherheit prüfen und Wägezellen die Dosiergenauigkeit verbessern.

---

## 4. Geschlossener Regelkreis

Regelung beginnt, wenn das System nicht nur misst, sondern automatisch auf den Prozess einwirkt.

![Geschlossener Regelkreis](/images/lectures/automation-control/control-loop.svg)

Ein Regelkreis enthält Sollwert, gemessenen Istwert, Regler, Stellglied, Prozess und Rückführung.

Beispiel: Ein Pasteur hat einen Sollwert von 72 °C. Der Temperatursensor misst die tatsächliche Temperatur, der Regler vergleicht sie mit dem Sollwert und verändert die Dampf- oder Heißwasserzufuhr. Sinkt die Temperatur, wird mehr geheizt. Liegt sie darüber, wird die Heizleistung reduziert.

---

## 5. PLC, HMI und Stellglieder

Die PLC führt die Steuerlogik aus: Sie liest Sensoren, öffnet Ventile, startet Pumpen, prüft Sicherheitsbedingungen, fährt Sequenzen und verhindert gefährliche Zustände. Das HMI zeigt dem Bediener Prozessbilder, Trends, Rezepte, Alarme und aktuelle Werte.

Stellglieder können Regelventile, Frequenzumrichter für Pumpen, Heizungen, Klappenantriebe, Pneumatikzylinder, Dosierer, Füller und Ausschleuser sein.

Gute Automatisierung versteckt den Prozess nicht vor dem Bediener. Sie macht ihn verständlicher.

---

## 6. Alarme, Verriegelungen und Sicherheit

Nicht jede Abweichung ist gleich kritisch. Ein Alarm informiert den Bediener über eine Grenzwertverletzung. Eine Verriegelung verhindert eine gefährliche Aktion. Not-Aus schützt Menschen oder Anlagen.

Beispiele:

- eine Pumpe startet nicht ohne Mindestfüllstand im Tank
- Produkt läuft nicht weiter, wenn die Pasteurisationstemperatur unter dem kritischen Grenzwert liegt
- Reinigungslösung wird nicht freigegeben, wenn ein Ventil falsch steht
- eine Verpackungsmaschine stoppt bei geöffneter Schutzhaube

Es darf nicht zu viele Alarme geben. Wenn das System ständig Kleinigkeiten meldet, verliert der Bediener Vertrauen.

---

## 7. Daten und Rückverfolgbarkeit

Moderne Automatisierung liefert nicht nur Steuerung, sondern auch Daten. Sie dienen der Qualitätsanalyse, Untersuchung von Abweichungen, Optimierung von Energie, Wasser, CIP, Produktivität und dem Nachweis von Produktionsbedingungen.

![Daten und Rückverfolgbarkeit](/images/lectures/automation-control/data-traceability.svg)

Ein Lebensmittelbetrieb muss wissen, welche Rohstoffcharge verwendet wurde, welche Prozessparameter vorlagen, wann gereinigt wurde, welche Alarme auftraten, wer den Start freigegeben hat, welche Einheiten ausgeschleust wurden und wie sich Wasser-, Dampf- und Stromverbrauch verändert haben.

---

## 8. Typische Fehler

- Sensoren an Stellen einbauen, die den realen Prozess nicht repräsentieren
- Verzögerungen zwischen Stellgröße und Wirkung ignorieren
- PID-Regler ohne Verständnis der Prozess-Trägheit einstellen
- nicht hygienische Anschlüsse in Produktkontaktbereichen einsetzen
- Sensoren nicht kalibrieren
- Alarme mit kritischen Verriegelungen verwechseln
- Chargendaten nicht speichern
- ein HMI schön, aber unpraktisch für Bediener gestalten

---

## 9. Aktueller Kontext

Nützliche Materialien:

- [Endress+Hauser: process instrumentation](https://www.endress.com/en/field-instruments-overview)
- [ifm: food and beverage automation](https://www.ifm.com/us/en/us/industries/food-and-beverage/food-and-beverage-automation)
- [ifm: IO-Link for process industries](https://www.ifm.com/ca/en/shared/technologies/io-link/system-overview/process-industry)

---

## Kontrollfragen

1. Warum unterstützt Automatisierung den Technologen, statt ihn zu ersetzen?
2. Worin unterscheidet sich Messung von Regelung?
3. Welche Elemente hat ein geschlossener Regelkreis?
4. Warum müssen Sensoren in Lebensmittelprozessen hygienische Anforderungen erfüllen?
5. Worin unterscheidet sich ein Alarm von einer Verriegelung?
6. Warum sollte ein Lebensmittelbetrieb Chargendaten archivieren?
