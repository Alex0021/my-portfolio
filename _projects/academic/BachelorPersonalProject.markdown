---
layout: project
category: academic
date: 01-05-2022
title: Sensor Fusion for Height Monitoring
skills:
  - Sensors
  - Embedded
  - Fusion
  - I2C
  - UART
  - Realtime
---

Solo project developing a sensor fusion scheme to estimate vertical position and detect levitation on a prototype Hyperloop pod, as part of the Polyloop student initiative.

<div class="img-center">
  <img src="{{ "/assets/images/Schéma_global_projet.svg" | relative_url }}" width="800" alt="System overview">
</div>

---

## Problem

Detecting levitation requires precise real-time height estimation despite sensor noise, drift, and environmental variability. A single sensor is insufficient --- robust data fusion is essential.

---

## Approach

- Sensor characterization and noise analysis
- Fusion strategy design: from simple complementary filters to linear Kalman filtering
- Real-time signal processing on embedded hardware (I2C, UART)
- Iterative tuning and experimental validation on a physical prototype

---

## Outcome

A working height estimation pipeline validated on hardware, bridging estimation theory with real-world sensor constraints.

<div class="project-links" markdown="1">

[Project poster (PDF, French)]({{ "/assets/extras/Affiche-Projet3.pdf" | relative_url }}){:target="_blank"} --- [Watch the demo](https://youtu.be/c9kShqK1qEU){:target="_blank"}

</div>
