---
layout: project
category: academic
date: 01-05-2022
title: Sensor Fusion for Height monitoring
skills:
  - Sensors
  - Embedded
  - Fusion
  - I2C
  - UART
  - Realtime
---

## Overview

This solo project focused on developing a sensor fusion scheme to accurately estimate vertical position and detect levitation on a prototype Hyperloop pod as part of the Polyloop student initiative. 

<div style="display:flex; justify-content:center">
<img src="{{ "/assets/images/Schéma_global_projet.svg" | relative_url }}" width="800">
</div>

The challenge was to combine noisy sensor measurements into a stable, real-time height estimate suitable for physical validation.

---

## Problem

Detecting levitation requires precise height estimation despite sensor noise, drift, and environmental variability. A single sensor is often insufficient, making robust data fusion essential for reliable state estimation.

---

## Approach

I designed and evaluated a fusion scheme combining complementary sensor measurements to improve stability and responsiveness. The work involved:

- Sensor characterization and noise analysis  
- Fusion strategy design and tuning  
- Real-time signal processing  
- Experimental validation on a physical prototype  

---

## Highlights

- End-to-end ownership of system design and validation  
- Practical sensor fusion, including simple complementary filter up to a more complex Kalman (linear) filter
- Experimental debugging and iterative tuning  
- Bridging theory with hardware testing  

---

## Demo & Extras

**One pager project poster**

► <a href="{{ "/assets/extras/Affiche-Projet3.pdf" | relative_url }}" target="_blank">Here is the PDF (In french)</a>

**Project demo**

► [Watch on Youtube]()

---

## Takeaway

This project strengthened my understanding of sensor behavior, signal fusion, and experimental validation in embedded systems. It highlighted how theoretical estimation techniques translate into real-world constraints when interacting with physical hardware.