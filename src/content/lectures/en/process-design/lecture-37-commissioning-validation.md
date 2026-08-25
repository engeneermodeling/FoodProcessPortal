---
title: "Commissioning, Acceptance and Validation of a Food Line"
topic: "process-design"
topic_title: "Design and Scale-Up"
lecture: 37
description: "A practical commissioning workflow for food lines: URS, FAT, SAT, installation checks, functional tests, trial product, CIP, calibration, records, deviations and acceptance criteria."
keywords: ["commissioning", "FAT", "SAT", "validation", "equipment acceptance", "CIP", "food line", "calibration"]
duration: "60 min"
difficulty: "intermediate"
author: "FoodProcessPortal"
updated: "2026-08-18"
---

# Lecture 37. Commissioning, Acceptance and Validation of a Food Line

## What You Will Learn

After this lecture you will be able to:

- distinguish commissioning, acceptance, verification and validation
- prepare a basic FAT, SAT and start-up plan
- define acceptance criteria for a food processing line
- check equipment, automation, CIP, sensors and personnel readiness
- describe what to do when deviations appear during start-up
- list the documents that should remain after the line is put into service

---

## 1. Start-Up Is More Than Pressing “Start”

Commissioning a food line is a controlled transition from project to stable production. It verifies whether equipment is installed correctly, automation reacts to deviations, CIP actually cleans the required circuits, and the target throughput can be achieved without compromising product quality or safety.

If commissioning is rushed, the plant inherits hidden problems: unstable temperature, poor pipe draining, untested interlocks, inaccurate sensors, unnecessary product losses, difficult cleaning and disputes with suppliers about what was actually agreed.

![Commissioning and acceptance stages](/images/lectures/process-design/commissioning-stages.svg)

---

## 2. From Requirements to Acceptance

Good commissioning starts before equipment is purchased. The user requirements or technical specification should define:

- product and recipe range
- throughput and operating pattern
- critical process parameters
- hygienic design and CIP requirements
- acceptable product losses
- automation, records and safety interlocks
- materials, seals, drainage and maintenance access
- acceptance criteria

Vague requirements make acceptance subjective. “The line must clean well” is weak. A better requirement is that after CIP the final rinse conductivity returns to a defined limit, inspection points show no product residue, and ATP or microbiological checks meet the plant program.

---

## 3. FAT and SAT

FAT means factory acceptance testing at the supplier site. It is performed before shipment to check completeness, basic mechanical operation, control cabinets, sensors, PLC/HMI functions, documentation and access to service points.

SAT means site acceptance testing. It checks the installed line in the real plant: installation, utilities, compressed air, steam, water, cooling, power, drainage, safety, integration with neighboring equipment and actual operation on site.

![Acceptance test loop](/images/lectures/process-design/acceptance-test-loop.svg)

FAT does not replace SAT because the supplier's workshop does not reproduce the plant's real piping, utilities, operators, products and operating schedule.

---

## 4. Installation and Functional Checks

Installation checks answer the question: “Is everything installed as required?” They cover labeling, materials, pipe slopes, drains, gaskets, valves, flow directions, access, guards, grounding and consistency with the P&ID.

Functional checks answer: “Does the system work as intended?” They include:

- start and stop of units
- emergency stops
- interlocks for low temperature, missing pressure, open lids or overfilling
- sensor signal correctness
- valve matrix operation
- CIP logic
- transitions between modes
- records of critical parameters

For automated systems, it is not enough for the HMI screen to look correct. The real equipment response must be checked.

---

## 5. Cold, Hot and Product Trials

Start-up usually progresses in stages.

Cold trials are performed without product: water, air, rotation, conveyors, valves, pumps, level sensors, tightness and drainage.

Hot trials add temperature, steam, hot water, cooling, thermal expansion, control stability and hot-surface safety.

Product trials reveal the real behavior of the line: viscosity, foaming, sticking, start-up and shutdown losses, quality stability, time to steady state and actual throughput.

It is unwise to begin with expensive product while water trials still reveal leaks or incorrect valve logic.

---

## 6. CIP, Calibration and Critical Parameters

CIP must be checked separately because a line may produce product but still clean poorly. The team verifies circuits, time, temperature, concentration, flow, turbulence, return flow, conductivity, complete draining, absence of dead legs and availability of records.

Sensors that affect quality or safety must be calibrated before acceptance. This includes temperature, pressure, level, flow, weight, pH, conductivity, metal detection, weighing systems and data recorders.

If pasteurization is a critical control point, it is not enough to “see the temperature.” The team must show that the sensor is accurate, the record is retained, deviations are captured, and product does not continue under unsafe conditions without a decision.

---

## 7. Readiness for the First Batch

Before the first industrial batch, a short readiness checklist is useful.

![Start-up readiness checklist](/images/lectures/process-design/startup-readiness-checklist.svg)

Check:

- approved recipes and operating modes
- cleanliness after CIP
- calibration of critical sensors
- availability of raw materials, packaging and auxiliary materials
- operator and shift-team readiness
- instructions for start-up, shutdown, emergencies and cleaning
- first-batch quality criteria
- product hold procedure for deviations
- responsible people from technology, quality, maintenance, automation and the supplier

The first batch should be treated as a controlled learning batch: more observations, more records and quick decisions on deviations.

---

## 8. Deviations and Corrective Actions

Deviations during commissioning are normal if they are controlled. For each deviation, record the fact, time, conditions, impact on product, temporary decision, corrective action and retest result.

Examples:

- a pump does not reach target flow - check rotation direction, NPSH, piping resistance and VFD settings
- CIP does not reach target temperature - check steam, heat exchanger, sensor, flow and heat losses
- product remains in a pipe after shutdown - check slopes, drainage, air blowing or pigging
- the HMI shows “normal” but a valve does not physically switch - check feedback, pneumatics and alarm logic

Acceptance does not mean that no problems occurred. It means that critical problems are closed and remaining punch-list items have an owner, deadline and risk assessment.

---

## 9. Documents After Start-Up

After the line is put into service, the plant should retain:

- current P&ID and line diagram
- FAT/SAT protocols
- installation and functional check protocols
- material and component certificates
- calibration records
- CIP programs and records
- operator instructions
- maintenance instructions
- spare-parts list
- deviation and corrective-action log
- first-batch acceptance criteria
- open-points list after commissioning

These documents are not just paperwork. They support stable production, operator training, deviation investigations and future upgrades.

---

## 10. Current Context

Useful materials:

- [FDA: Computerized Systems in Food Processing Industry](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/computerized-systems-food-processing-industry)
- [FDA: Process Validation - General Principles and Practices](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/process-validation-general-principles-and-practices)
- [FDA: Q7A GMP Guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/q7a-good-manufacturing-practice-guidance-active-pharmaceutical-ingredients)
- [ISPE: Commissioning and Qualification](https://ispe.org/topics/commissioning-qualification)

Some DQ/IQ/OQ/PQ terminology is more common in pharmaceutical work. In food manufacturing it should be used carefully: keep the logic of proving that the line is installed, works and consistently produces safe food under defined conditions, without importing unnecessary bureaucracy.

---

## Review Questions

1. How does FAT differ from SAT?
2. Why should acceptance requirements be defined before equipment is purchased?
3. What checks belong to a cold start-up?
4. Why should CIP be checked separately from production operation?
5. Which sensors require calibration before acceptance?
6. What should be recorded when a commissioning deviation occurs?
