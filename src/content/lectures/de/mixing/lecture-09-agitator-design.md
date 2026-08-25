---
title: "Ruehrerauslegung: Geometrie, Leistung und Mischzeit"
topic: "mixing"
topic_title: "Mischen in Apparaten der Lebensmitteltechnik"
lecture: 9
description: "Praktischer Ablauf fuer Ruehrbehaelter: Geometrieverhaeltnisse, Aehnlichkeitskriterien, Leistung, spezifischer Leistungseintrag, Mischzeit, Scale-up und Waermeuebergang."
keywords: ["Ruehrerauslegung", "Ruehrbehaelter", "Mischzeit", "Scale-up", "Ruehrerleistung", "Waermeuebergang"]
duration: "60 Min."
difficulty: "mittel"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Vorlesung 9. Ruehrerauslegung: Geometrie, Leistung und Mischzeit

## Lernziele

Nach dieser Vorlesung koennen Sie:

- einen einfachen Auslegungsablauf fuer einen Ruehrbehaelter aufstellen
- Startwerte fuer `d_m/D`, `H/D`, `h/d_m` und `b/D` waehlen
- Leistung und spezifischen Leistungseintrag `N/V` abschaetzen
- erklaeren, warum Labor-Drehzahlen nicht direkt auf Produktionsbehaelter uebertragen werden
- die Mischzeit aus einer Tracerkurve bestimmen
- Waermeuebergang ueber Mantel oder Schlange beruecksichtigen

---

## 1. Eingabedaten

Der Ausgangspunkt ist die technologische Aufgabe.

| Daten | Beispiel |
|---|---|
| **Prozessziel** | Zucker loesen, Partikel suspendieren, Fett emulgieren, Anbrennen vermeiden |
| **Chargenvolumen** | 0,5 m³, 2 m³, 10 m³ |
| **Produkteigenschaften** | `rho`, `mu`, Partikel, Fett, Arbeitstemperatur |
| **Qualitaetsgrenzen** | kein Schaum, keine Fruchtstueck-Schaedigung, keine Protein-Ueberhitzung |
| **Hygiene** | CIP, keine Totzonen, hygienische Wellendichtung |

Die Viskositaet muss bei der Arbeitstemperatur betrachtet werden.

---

## 2. Behaeltergeometrie

![Geometrische Hauptparameter eines Ruehrbehaelters](/images/lectures/mixing/agitator-geometry.svg)

| Parameter | Startbereich | Kommentar |
|---|---:|---|
| `H/D` | `0,8 ... 1,5` | Fuellhoehe zu Behaelterdurchmesser |
| `d_m/D` | `0,25 ... 0,5` | kleiner fuer schnelle Ruehrer, groesser fuer viskose Produkte |
| `h/d_m` | `0,5 ... 1,0` | Bodenabstand |
| `b/D` | `0,08 ... 0,12` | Strombrecherbreite bei duennfluessigen Medien |

Bei viskosen Produkten werden Ruehrerdurchmesser oft groesser, Drehzahlen kleiner und Wandabstreifer wichtiger.

---

## 3. Rechenablauf

1. Prozessziel und Qualitaetsgrenzen festlegen.
2. Produkteigenschaften bei Arbeitstemperatur bestimmen.
3. Ruehrertyp nach Viskositaet und Phasenbestand waehlen.
4. Anfangsgeometrie festlegen.
5. `Re_m = rho · n · d_m² / mu` berechnen.
6. `N_p` aus Regime und Ruehrertyp waehlen.
7. `N = N_p · rho · n³ · d_m⁵` berechnen.
8. `N/V`, Mischzeit, Waermeuebergang und Hygiene pruefen.

---

## 4. Spezifischer Leistungseintrag

```text
P_v = N / V
```

| `N/V` | Intensitaet | Beispiel |
|---:|---|---|
| `50 ... 200 W/m³` | sanft | Milchlagerung, leichtes Mischen |
| `200 ... 800 W/m³` | mittel | Sirupe, Suspensionen, Loesen |
| `800 ... 3000 W/m³` | intensiv | Emulsionen, schwierige Pulver |

Zu hohe Intensitaet kann Joghurt, Cremedesserts oder Fruchtzubereitungen schaedigen.

---

## 5. Mischzeit

Die Mischzeit `t_m` ist erreicht, wenn die Konzentration in Kontrollpunkten innerhalb eines vorgegebenen Bandes liegt, haeufig `±5%`.

![Mischzeitbestimmung mit Tracer](/images/lectures/mixing/mixing-time-scale.svg)

In der Produktion wird dies ueber Trockenmasse, Temperatur, Fettgehalt, Farbe oder Viskositaet kontrolliert.

---

## 6. Scale-up

Beim Uebergang vom Labor zum Produktionsbehaelter darf die Drehzahl nicht einfach gleich bleiben. Im turbulenten Bereich skaliert die Leistung mit `d_m⁵`.

| Konstantes Kriterium | Sinnvoll fuer | Risiko |
|---|---|---|
| **gleiches `Re_m`** | Stroemungsregime | gleiche Mischzeit nicht garantiert |
| **gleiches `N/V`** | aehnliche Volumenintensitaet | lokale Geschwindigkeiten anders |
| **gleiche Umfangsgeschwindigkeit** `u = pi d_m n` | Scherbegrenzung | eventuell zu schwach fuer Suspension |
| **gleiche Mischzeit** | Produktziel | benoetigt Versuchsdaten |

---

## 7. Waermeuebergang

In Kochkesseln und Mantelbehaeltern ist der Ruehrer auch ein Werkzeug fuer den Waermeuebergang.

![Waermeuebergang im Ruehrbehaelter](/images/lectures/mixing/stirred-heat-transfer.svg)

```text
Q = K · F · ΔT_m
```

Ruehren verringert den thermischen Widerstand an der Wand. Bei Marmeladen, Cremes, Saucen und Karamellmassen sind Wandabstreifer oft entscheidend.

---

## Kernaussagen

- Ruehrerauslegung beginnt mit Produkt und Prozessziel.
- Geometrieverhaeltnisse sind Startwerte.
- `N/V` hilft beim Vergleich unterschiedlicher Apparategroessen.
- Mischzeit muss an messbare Homogenitaet gekoppelt werden.
- Waermeuebergang, Hygiene und Textur sind genauso wichtig wie Leistungsformeln.
