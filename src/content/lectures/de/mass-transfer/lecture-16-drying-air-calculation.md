---
title: "Trocknungsluft und Berechnung von Trocknern"
topic: "mass-transfer"
topic_title: "Stoffuebertragungsprozesse"
lecture: 16
description: "Feuchte Luft, Wassergehalt, relative Feuchte, Enthalpie, I-d-Diagramm, Luftmassenstrom sowie Stoff- und Waermebilanz eines Trockners."
keywords: ["Trocknungsluft", "feuchte Luft", "I-d-Diagramm", "Enthalpie", "Wassergehalt", "Trocknerberechnung"]
duration: "60 Min."
difficulty: "mittel"
author: "FoodProcessPortal"
updated: "2026-08-17"
---

# Vorlesung 16. Trocknungsluft und Berechnung von Trocknern

## Lernziele

Nach dieser Vorlesung koennen Sie Parameter feuchter Luft erklaeren, den typischen Luftweg im Trockner lesen, den Trockenluftstrom aus der verdampften Wassermenge berechnen und eine vereinfachte Waermebilanz aufstellen.

---

## 1. Warum Trocknungsluft wichtig ist

Luft liefert Waerme, nimmt Wasserdampf auf, transportiert ihn ab und beeinflusst Produkttemperatur, Aromaverlust und Oxidation.

![Parameter feuchter Luft fuer die Trocknung](/images/lectures/mass-transfer/humid-air-parameters.svg)

| Parameter | Symbol | Bedeutung |
|---|---|---|
| **Temperatur** | `t` | thermischer Zustand |
| **relative Feuchte** | `φ` | Naehe zur Saettigung |
| **Wassergehalt** | `d` | kg Dampf pro kg trockene Luft |
| **Enthalpie** | `I` | Waermeinhalt pro kg trockene Luft |
| **Taupunkt** | `t_tau` | Kondensationsrisiko |

---

## 2. Feuchtebilanz der Luft

```text
L = W / (d₂ - d₁)
```

`L` ist der Trockenluftstrom, `W` die verdampfte Wassermenge.

---

## 3. Luftweg

![Luftweg im Trockner im I-d-Diagramm](/images/lectures/mass-transfer/drying-air-path.svg)

Beim Erwaermen steigt Enthalpie und Temperatur, waehrend `d` fast konstant bleibt. Im Trockner nimmt die Luft Wasserdampf auf und `d` steigt.

---

## 4. Trocknerbilanz

![Stoff- und Waermebilanz eines Trockners](/images/lectures/mass-transfer/dryer-balance.svg)

```text
G₁ · (1 - w₁) = G₂ · (1 - w₂)
W = G₁ - G₂
W = L · (d₂ - d₁)
Q = L · (I₂ - I₁)
```

Reale Trockner enthalten zusaetzlich Verluste, Erwaermung von Material und Anlage sowie Umluft.

---

## Beispiel

`W = 120 kg/h`, `d₁ = 0,010`, `d₂ = 0,035 kg/kg trockene Luft`.

```text
L = 120 / (0,035 - 0,010) = 4800 kg trockene Luft/h
```

---

## Kernaussagen

- Trocknungsluft transportiert Waerme und Wasserdampf.
- Die Kernbilanz lautet `W = L · (d₂ - d₁)`.
- Erwaermung erhoeht Enthalpie und senkt relative Feuchte.
- Umluft spart Waerme, braucht aber Hygiene- und Staubkontrolle.
- Berechnungen muessen an Produktqualitaet geprueft werden.
