---
title: "Inbetriebnahme, Abnahme und Validierung einer Lebensmittellinie"
topic: "process-design"
topic_title: "Auslegung und Scale-up"
lecture: 37
description: "Praktischer Ablauf der Inbetriebnahme einer Lebensmittellinie: URS, FAT, SAT, Montageprüfung, Funktionstests, Produktversuch, CIP, Kalibrierung, Aufzeichnungen, Abweichungen und Abnahmekriterien."
keywords: ["Inbetriebnahme", "FAT", "SAT", "Validierung", "Abnahme", "CIP", "Lebensmittellinie", "Kalibrierung"]
duration: "60 min"
difficulty: "mittel"
author: "FoodProcessPortal"
updated: "2026-08-18"
---

# Vorlesung 37. Inbetriebnahme, Abnahme und Validierung einer Lebensmittellinie

## Was Sie Lernen

Nach dieser Vorlesung können Sie:

- Inbetriebnahme, Abnahme, Verifizierung und Validierung unterscheiden
- einen einfachen Plan für FAT, SAT und Probebetrieb vorbereiten
- Abnahmekriterien für eine Lebensmittellinie formulieren
- Anlagen, Automatisierung, CIP, Sensoren und Personalbereitschaft prüfen
- den Umgang mit Abweichungen während der Inbetriebnahme beschreiben
- die notwendigen Unterlagen nach der Übergabe der Linie benennen

---

## 1. Inbetriebnahme Ist Mehr Als “Start” Drücken

Die Inbetriebnahme einer Lebensmittellinie ist der kontrollierte Übergang vom Projekt zum stabilen Betrieb. Dabei wird geprüft, ob die Ausrüstung richtig installiert ist, ob die Automatisierung auf Abweichungen reagiert, ob CIP die vorgesehenen Kreisläufe wirklich reinigt und ob die Sollleistung ohne Verlust von Qualität und Produktsicherheit erreicht wird.

Eine überhastete Inbetriebnahme hinterlässt verdeckte Probleme: instabile Temperaturen, schlecht entleerte Rohrleitungen, ungeprüfte Verriegelungen, ungenaue Sensoren, unnötige Produktverluste, schwierige Reinigung und Streit darüber, was mit dem Lieferanten vereinbart war.

![Phasen der Inbetriebnahme und Abnahme](/images/lectures/process-design/commissioning-stages.svg)

---

## 2. Von Anforderungen Zur Abnahme

Eine gute Inbetriebnahme beginnt vor dem Kauf der Anlage. In den Nutzeranforderungen oder in der technischen Spezifikation sollten beschrieben werden:

- Produkt und Rezepturbereich
- Leistung und Betriebsweise
- kritische Prozessparameter
- hygienisches Design und CIP-Anforderungen
- zulässige Produktverluste
- Automatisierung, Aufzeichnungen und Verriegelungen
- Werkstoffe, Dichtungen, Entleerung und Wartungszugang
- Abnahmekriterien

Unklare Anforderungen machen die Abnahme subjektiv. “Die Linie muss gut zu reinigen sein” ist zu schwach. Besser ist: Nach CIP kehrt die Leitfähigkeit der Endspülung auf einen festgelegten Grenzwert zurück, Kontrollstellen zeigen keine Produktreste, und ATP- oder mikrobiologische Prüfungen erfüllen das Programm des Betriebs.

---

## 3. FAT Und SAT

FAT ist die Werksabnahme beim Lieferanten. Vor der Lieferung werden Vollständigkeit, grundlegende Mechanik, Schaltschrank, Sensorik, PLC/HMI-Funktionen, Dokumentation und Wartungszugang geprüft.

SAT ist die Abnahme am Aufstellort. Hier wird die installierte Linie im realen Werk geprüft: Montage, Medienversorgung, Druckluft, Dampf, Wasser, Kälte, Strom, Entwässerung, Sicherheit, Einbindung in benachbarte Anlagen und tatsächlicher Betrieb.

![Ablauf der Abnahmeprüfungen](/images/lectures/process-design/acceptance-test-loop.svg)

FAT ersetzt SAT nicht, weil die Werkstatt des Lieferanten nicht die realen Rohrleitungen, Medien, Bediener, Produkte und Produktionspläne des Betriebs abbildet.

---

## 4. Montage- Und Funktionsprüfung

Die Montageprüfung beantwortet die Frage: “Ist alles wie gefordert installiert?” Geprüft werden Kennzeichnung, Werkstoffe, Rohrgefälle, Entleerung, Dichtungen, Ventile, Fließrichtungen, Zugänglichkeit, Schutzvorrichtungen, Erdung und Übereinstimmung mit dem P&ID.

Die Funktionsprüfung beantwortet: “Arbeitet das System wie vorgesehen?” Dazu gehören:

- Start und Stopp von Aggregaten
- Not-Halt
- Verriegelungen bei zu niedriger Temperatur, fehlendem Druck, offenem Deckel oder Überfüllung
- korrekte Sensorsignale
- Funktion von Ventilblöcken
- CIP-Logik
- Übergänge zwischen Betriebsarten
- Aufzeichnung kritischer Parameter

Bei automatisierten Systemen reicht ein korrekt aussehender HMI-Bildschirm nicht aus. Die reale Reaktion der Anlage muss geprüft werden.

---

## 5. Kalte, Warme Und Produktversuche

Die Inbetriebnahme erfolgt meist schrittweise.

Kalte Versuche laufen ohne Produkt: Wasser, Luft, Rotation, Förderer, Ventile, Pumpen, Füllstandssensoren, Dichtheit und Entleerung.

Warme Versuche ergänzen Temperatur, Dampf, Heißwasser, Kühlung, thermische Ausdehnung, Regelstabilität und Sicherheit heißer Oberflächen.

Produktversuche zeigen das reale Verhalten der Linie: Viskosität, Schaumbildung, Anhaften, Verluste beim Start und Stopp, Qualitätsstabilität, Zeit bis zum stationären Zustand und tatsächliche Leistung.

Man sollte nicht mit teurem Produkt beginnen, solange Wasser noch Leckagen oder falsche Ventillogik zeigt.

---

## 6. CIP, Kalibrierung Und Kritische Parameter

CIP muss separat geprüft werden, denn eine Linie kann Produkt herstellen und trotzdem schlecht zu reinigen sein. Geprüft werden Kreisläufe, Zeit, Temperatur, Konzentration, Volumenstrom, Turbulenz, Rücklauf, Leitfähigkeit, vollständige Entleerung, Toträume und die Möglichkeit der Dokumentation.

Sensoren, die Qualität oder Sicherheit beeinflussen, müssen vor der Abnahme kalibriert sein. Dazu gehören Temperatur, Druck, Füllstand, Durchfluss, Masse, pH, Leitfähigkeit, Metalldetektoren, Wägesysteme und Datenlogger.

Wenn Pasteurisierung ein kritischer Kontrollpunkt ist, genügt es nicht, “die Temperatur zu sehen”. Man muss zeigen, dass der Sensor genau ist, die Aufzeichnung erhalten bleibt, Abweichungen erfasst werden und Produkt bei unsicheren Bedingungen nicht ohne Entscheidung weiterläuft.

---

## 7. Bereitschaft Für Die Erste Charge

Vor der ersten industriellen Charge ist eine kurze Bereitschaftsprüfung sinnvoll.

![Checkliste für die Startbereitschaft](/images/lectures/process-design/startup-readiness-checklist.svg)

Geprüft werden:

- freigegebene Rezepturen und Betriebsarten
- Sauberkeit der Linie nach CIP
- Kalibrierung kritischer Sensoren
- Verfügbarkeit von Rohstoffen, Verpackung und Hilfsstoffen
- Bereitschaft von Bedienern und Schichtpersonal
- Anweisungen für Start, Stopp, Störungen und Reinigung
- Qualitätskriterien für die erste Charge
- Verfahren zur Sperrung von Produkt bei Abweichungen
- Verantwortliche aus Technologie, Qualität, Instandhaltung, Automatisierung und Lieferant

Die erste Charge sollte als kontrollierte Lerncharge geführt werden: mehr Beobachtungen, mehr Aufzeichnungen und schnelle Entscheidungen bei Abweichungen.

---

## 8. Abweichungen Und Korrekturmaßnahmen

Abweichungen während der Inbetriebnahme sind normal, wenn sie gelenkt werden. Für jede Abweichung werden Ereignis, Zeit, Bedingungen, Einfluss auf das Produkt, vorläufige Entscheidung, Korrekturmaßnahme und Nachprüfung dokumentiert.

Beispiele:

- eine Pumpe erreicht den Sollvolumenstrom nicht - Drehrichtung, NPSH, Rohrleitungswiderstand und Frequenzumrichter prüfen
- CIP erreicht die Solltemperatur nicht - Dampf, Wärmetauscher, Sensor, Durchfluss und Wärmeverluste prüfen
- Produkt bleibt nach dem Stopp in der Rohrleitung - Gefälle, Entleerung, Ausblasen oder Pigging prüfen
- HMI zeigt “normal”, aber ein Ventil schaltet nicht real - Rückmeldung, Pneumatik und Alarmlogik prüfen

Abnahme bedeutet nicht, dass keine Probleme auftraten. Sie bedeutet, dass kritische Probleme geschlossen sind und verbleibende Punkte eine verantwortliche Person, Frist und Risikobewertung haben.

---

## 9. Dokumente Nach Der Inbetriebnahme

Nach Übergabe der Linie sollten vorhanden sein:

- aktuelles P&ID und Linienschema
- FAT/SAT-Protokolle
- Protokolle der Montage- und Funktionsprüfung
- Werkstoff- und Komponentenbescheinigungen
- Kalibrierprotokolle
- CIP-Programme und CIP-Aufzeichnungen
- Bedienungsanweisungen
- Wartungsanweisungen
- Ersatzteilliste
- Abweichungs- und Korrekturmaßnahmenprotokoll
- Abnahmekriterien der ersten Charge
- Liste offener Punkte nach der Inbetriebnahme

Diese Dokumente sind keine bloße Formalität. Sie unterstützen stabile Produktion, Schulung neuer Bediener, Abweichungsuntersuchungen und spätere Modernisierungen.

---

## 10. Aktueller Kontext

Nützliche Materialien:

- [FDA: Computerized Systems in Food Processing Industry](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/computerized-systems-food-processing-industry)
- [FDA: Process Validation - General Principles and Practices](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/process-validation-general-principles-and-practices)
- [FDA: Q7A GMP Guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/q7a-good-manufacturing-practice-guidance-active-pharmaceutical-ingredients)
- [ISPE: Commissioning and Qualification](https://ispe.org/topics/commissioning-qualification)

Begriffe wie DQ/IQ/OQ/PQ stammen stärker aus dem pharmazeutischen Umfeld. In der Lebensmittelproduktion sollte man sie vorsichtig nutzen: Die Logik des Nachweises ist hilfreich, aber unnötige Bürokratie sollte nicht übernommen werden.

---

## Kontrollfragen

1. Worin unterscheidet sich FAT von SAT?
2. Warum sollten Abnahmeanforderungen vor dem Kauf der Anlage festgelegt werden?
3. Welche Prüfungen gehören zur kalten Inbetriebnahme?
4. Warum muss CIP getrennt vom Produktionsbetrieb geprüft werden?
5. Welche Sensoren müssen vor der Abnahme kalibriert werden?
6. Was ist bei einer Abweichung während der Inbetriebnahme zu dokumentieren?
