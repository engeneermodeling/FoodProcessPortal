---
title: "Digitale Daten und Rückverfolgbarkeit von Lebensmittellinien"
topic: "process-design"
topic_title: "Auslegung und Scale-up"
lecture: 39
description: "Digitale Aufzeichnungen in Lebensmittelprozessen: Chargen, CTE/KDE, SCADA, MES, ERP, elektronische Protokolle, Datenintegrität und Rückverfolgbarkeit von Rohstoffen und Fertigprodukten."
keywords: ["Rückverfolgbarkeit", "Digitalisierung", "SCADA", "MES", "ERP", "Charge", "CTE", "KDE", "Lebensmittellinie"]
duration: "60 min"
difficulty: "mittel"
author: "FoodProcessPortal"
updated: "2026-08-18"
---

# Vorlesung 39. Digitale Daten und Rückverfolgbarkeit von Lebensmittellinien

## Was Sie Lernen

Nach dieser Vorlesung können Sie erklären, warum eine Lebensmittellinie digitale Prozessaufzeichnungen braucht, Materialfluss und Informationsfluss unterscheiden, Rückverfolgbarkeit einen Schritt zurück und einen Schritt vorwärts beschreiben, kritische Rückverfolgungsereignisse und wichtige Datenelemente nennen sowie die Rollen von PLC, SCADA, MES und ERP erklären.

---

## 1. Daten Sind Teil Des Prozesses

Eine moderne Lebensmittellinie erzeugt nicht nur Produkt. Sie erzeugt auch Daten: Temperatur, Zeit, Druck, Durchfluss, Masse, pH, Leitfähigkeit, Alarme, Rezeptänderungen, CIP-Ergebnisse, Chargenbewegungen, Abweichungen und Entscheidungen des Personals.

Sind Daten unvollständig oder unzuverlässig, kann der Betrieb einfache Fragen nicht schnell beantworten: welche Rohstoffe verwendet wurden, welche Prozessbedingungen die Charge hatte, wo die Charge ist, wen man bei einem Rückruf informieren muss und ob der Prozess unter Kontrolle war.

---

## 2. Materialfluss Und Informationsfluss

Der Materialfluss zeigt, wohin Rohstoffe, Zwischenprodukt, Fertigprodukt, Abfälle und Verpackung gehen. Der Informationsfluss zeigt, welche Daten diese Bewegung begleiten.

![Rückverfolgbarkeitskette](/images/lectures/process-design/traceability-data-chain.svg)

Bei einer Saucenlinie sollte der Betrieb die Lose von Tomatenmark, Öl, Gewürzen und Verpackung, Mischzeit, Pasteurisierungstemperatur, Tanknummer, Qualitätsergebnisse, Abfüllcharge, Paletten und Empfänger kennen.

---

## 3. Charge, CTE Und KDE

Eine Charge ist eine Produktmenge, die mit definierten Herstellbedingungen und Aufzeichnungen verbunden ist. Ihre Grenze muss klar sein: Rezept, Schicht, Tank, Rohstofflos, Abfüllzeit oder eine Kombination davon.

In Rückverfolgbarkeitsstandards werden oft zwei Begriffe genutzt:

- CTE - critical tracking event, ein Ereignis, das für die Rückverfolgbarkeit aufgezeichnet werden muss
- KDE - key data element, die Daten, die dieses Ereignis beschreiben

Ereignisse sind Wareneingang, Transformation, Verpackung, Lagerung, Versand, Rückgabe und Entsorgung. Daten sind wer, was, wo, wann, warum, welche Charge, welche Menge und welcher Status.

---

## 4. PLC, SCADA, MES Und ERP

Digitale Systeme arbeiten auf verschiedenen Ebenen.

![Datenfluss PLC SCADA MES ERP](/images/lectures/process-design/scada-mes-data-flow.svg)

PLC steuert die Anlage in Echtzeit: Ventile, Pumpen, Verriegelungen und Regelkreise. SCADA/HMI zeigt Linienzustand, Trends, Alarme und Prozessprotokolle. MES verbindet Produktionsauftrag und reale Charge: Rezept, Arbeitsfolge, Ausbeute, Abweichungen, Stillstand und OEE. ERP oder Lagerverwaltung führt Aufträge, Materialien, Bestände, Versand und Finanzen.

Für ein Studienprojekt muss nicht die ganze IT-Architektur modelliert werden. Es reicht zu zeigen, welche Parameter aufgezeichnet werden und wofür sie genutzt werden.

---

## 5. Integrität Digitaler Aufzeichnungen

Ein elektronischer Datensatz muss ein Nachweis sein, nicht nur ein schönes Diagramm.

![Integrität digitaler Aufzeichnungen](/images/lectures/process-design/digital-record-integrity.svg)

Wichtig sind rollenbasierter Zugriff, Schutz vor unbefugten Änderungen, Audit Trail mit Benutzer, Zeit und Grund, synchronisierte Zeit, Backup, langfristige Lesbarkeit, Erfassung von Alarmen und manuellen Eingriffen sowie Prüfung kritischer Sensoren.

Wenn ein Bediener die historische Pasteurisierungstemperatur ohne Spur ändern kann, ist die Aufzeichnung nicht vertrauenswürdig.

---

## 6. Rückverfolgbarkeit Beim Rückruf

Ein gutes System grenzt ein Problem schnell ein. Wenn ein Gewürzlos kontaminiert ist, muss der Betrieb alle Produkte finden, in denen es verwendet wurde, und alle Sendungen dieser Produkte.

Ein schlechtes System erzwingt einen viel größeren Rückruf, weil nicht bewiesen werden kann, dass andere Chargen nicht betroffen sind.

Praktische Regel: Jede Fertigproduktcharge muss rückwärts mit Rohstoffen und vorwärts mit Lager- oder Kundenbewegungen verbunden sein.

---

## 7. Daten Für Das Studienprojekt

Im Studienprojekt genügt ein kleiner Block “Prozessaufzeichnungen”. Für eine Linie kann man Chargennummer, Rezept und Rohstofflose, Start- und Endzeiten, kritische Temperaturen, Druck, Durchfluss, pH oder Feuchte, Anlagen- oder Tanknummer, Qualitätsergebnisse, CIP-Status, Alarme und Abweichungen, Bediener und Verpackungs- oder Versandcharge angeben.

Das macht den Entwurf näher an der realen Produktion.

---

## 8. Typische Fehler

- Rückverfolgbarkeit nur als Etikett auf dem Karton verstehen
- Rohstofflose nicht mit Fertigprodukt verknüpfen
- manuelle Eingriffe nicht aufzeichnen
- SCADA-Trends haben, aber kritische Daten nicht speichern
- Rezepte ohne Version und Freigabe ändern
- Backup und Wiederherstellung nicht testen
- unklare Chargengrenzen verwenden
- viele Daten sammeln, aber nicht für Entscheidungen nutzen

---

## 9. Aktueller Kontext

Nützliche Materialien:

- [FDA: Food Traceability Rule](https://www.fda.gov/food/food-safety-modernization-act-fsma/fsma-final-rule-requirements-additional-traceability-records-certain-foods)
- [FDA: Risk-Ranking Model for Food Tracing](https://hfpappexternal.fda.gov/scripts/FDARiskRankingModelforFoodTracingfinalrule/)
- [FDA: Computerized Systems in Food Processing Industry](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/computerized-systems-food-processing-industry)
- [GS1: Traceability standards](https://www.gs1.org/standards/traceability)
- [GS1 Global Traceability Standard](https://www.gs1.org/standards/gs1-global-traceability-standard/current-standard)

---

## Kontrollfragen

1. Warum sind Prozessdaten Teil der Lebensmittelsicherheit?
2. Was bedeutet Rückverfolgbarkeit einen Schritt zurück und einen Schritt vorwärts?
3. Worin unterscheidet sich CTE von KDE?
4. Welche Rolle hat SCADA, welche Rolle hat MES?
5. Warum ist ein Audit Trail für elektronische Aufzeichnungen wichtig?
6. Welche Aufzeichnungen sollte ein Studienprojekt für eine Lebensmittellinie enthalten?
