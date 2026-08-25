---
title: "Grundlagen der Waermeuebertragung in der Lebensmitteltechnik"
topic: "heat-exchange"
topic_title: "Waermeuebertragungsprozesse"
lecture: 11
description: "Waermebilanz, Mechanismen der Waermeuebertragung, Waermedurchgangskoeffizient, logarithmische Temperaturdifferenz und Auswahl von Waermeuebertragern."
keywords: ["Waermeuebertragung", "Waermebilanz", "Waermedurchgangskoeffizient", "Temperaturtriebkraft", "Plattenwaermeuebertrager", "Lebensmitteltechnik"]
duration: "60 Min."
difficulty: "mittel"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Vorlesung 11. Grundlagen der Waermeuebertragung in der Lebensmitteltechnik

## Lernziele

Nach dieser Vorlesung koennen Sie Waermeleitung, Konvektion und Strahlung unterscheiden, eine Waermebilanz aufstellen, den Waermedurchgangskoeffizienten `K` interpretieren, die logarithmische mittlere Temperaturdifferenz berechnen und einen Waermeuebertrager fuer typische Lebensmittel auswaehlen.

---

## 1. Warum Waermeuebertragung wichtig ist

Waermeuebertragung beeinflusst Lebensmittelsicherheit, Produktqualitaet und Energieeffizienz. Milch muss pasteurisiert werden, ohne Kochgeschmack zu erzeugen. Saft soll erwaermt werden, ohne Aroma zu verlieren. Marmelade muss gekocht werden, ohne anzubrennen.

Die technische Frage lautet: **Wie uebertragen wir die erforderliche Waerme in der erforderlichen Zeit, ohne das Produkt zu schaedigen?**

---

## 2. Mechanismen

![Drei Mechanismen der Waermeuebertragung](/images/lectures/heat-exchange/heat-transfer-modes.svg)

| Mechanismus | Beispiel | Wichtig |
|---|---|---|
| **Waermeleitung** | Wand, Belag, ruhende Produktschicht | Material, Dicke, Verschmutzung |
| **Konvektion** | Stroemung von Milch, Wasser, Saft, Luft oder Dampf | Geschwindigkeit, Regime, Viskositaet |
| **Strahlung** | Oefen, Trockner, heisse Oberflaechen | Oberflaechentemperatur |

---

## 3. Waermebilanz

```text
Q = G · c · (t_aus - t_ein)
```

Bei Dampfheizung als erste Naeherung:

```text
Q = D · r
```

---

## 4. Grundgleichung

```text
Q = K · F · Δt_m
```

Mehr Waermeuebertragung erfordert groessere Flaeche, groessere Temperaturtriebkraft oder hoeheres `K`. In Lebensmittelprozessen sind alle drei Wege begrenzt: hohe Temperatur schaedigt Produkte, Flaeche kostet Geld und hoehere Geschwindigkeit erhoeht Druckverlust.

---

## 5. Was steckt in `K`

```text
K = 1 / (1/α₁ + δ/λ + r_f + 1/α₂)
```

`K` sinkt bei hoher Viskositaet, Fouling, dicker Wand oder zu niedriger Geschwindigkeit. Fouling und CIP gehoeren deshalb zur Auslegung.

---

## 6. Temperaturtriebkraft

![Temperaturprofile bei Gleich- und Gegenstrom](/images/lectures/heat-exchange/flow-temperature-profiles.svg)

```text
Δt_m = (Δt_gross - Δt_klein) / ln(Δt_gross / Δt_klein)
```

Gegenstrom ist meist effizienter als Gleichstrom. Regenerationssektionen nutzen heisses behandeltes Produkt zum Vorwaermen des kalten Zulaufs.

Hintergrund: [Tetra Pak Dairy Processing Handbook: Heat exchangers](https://dairyprocessinghandbook.tetrapak.com/chapter/heat-exchangers).

---

## 7. Auswahl

![Auswahl eines Waermeuebertragers fuer Lebensmittel](/images/lectures/heat-exchange/food-heat-exchanger-selection.svg)

| Apparat | Geeignet fuer | Beispiele |
|---|---|---|
| **Plattenwaermeuebertrager** | duennfluessige Produkte ohne grosse Partikel | Milch, klare Saefte, Bier |
| **Rohrwaermeuebertrager** | Produkte mit Partikeln oder hoeherer Viskositaet | Puerees, Saefte mit Fruchtfleisch, Saucen |
| **Schabewaermeuebertrager** | viskose, klebrige Produkte | Cremes, Marmeladen, Pasten |
| **Mantelbehaelter** | Chargen, Kochen, Temperieren | Sirupe, Fuellungen, Kochkessel |

Beispiele: [Alfa Laval heat transfer equipment](https://www.alfalaval.com/products/heat-transfer/) und [GEA heat exchangers](https://www.gea.com/en/products/heat-exchangers/).

---

## Kernaussagen

- Waermeuebertragung ist immer mit Produktqualitaet verbunden.
- Die zentrale Gleichung lautet `Q = K · F · Δt_m`.
- `K` enthaelt Filmwiderstaende, Wand und Fouling.
- Gegenstrom und Regeneration sparen Energie.
- Die Apparatewahl haengt von Viskositaet, Partikeln, Anbrennrisiko und Hygiene ab.
