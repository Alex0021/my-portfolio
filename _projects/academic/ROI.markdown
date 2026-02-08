---
layout: project
category: academic
date: 01-05-2024
title: Viewing coverage optimization of Areal Swarms using local sensing
excerpt: Summary HERE
skills:
  - Python
  - Swarm Robotics
  - Simulation
  - ROS2
  - Sim2Real
---

## Overview

This semester research project explored how a swarm of aerial drones can coordinate their viewing direction using only local sensing. The work combined simulation design, algorithm evaluation, and a sim-to-real proof of concept using <a href="https://www.bitcraze.io/products/old-products/crazyflie-2-1/" target="_blank">Crazyflie</a> drones.

The project was conducted alongside regular coursework, requiring structured planning and autonomous execution over a full semester.

<div style="display:flex; gap:10px; flex-wrap:wrap;">
  <img src="{{ "/assets/images/2d_swarm_9_drones_zoom.png" | relative_url }}" width="280">
  <img src="{{ "/assets/images/webots_swarm9_topo3.png" | relative_url }}" width="280">
  <img src="{{ "/assets/images/real_cf_wswarm7_dark.png" | relative_url }}" width="294">
</div>

---

## Problem

Swarm robotics often assumes access to global information, which is unrealistic for real-world aerial systems. The goal was to evaluate how decentralized drones could optimize collective viewing coverage using only locally detected neighbors.

This required:

- Modeling swarm dynamics realistically  
- Designing evaluation metrics  
- Running reproducible experiments  
- Validating behavior beyond simulation  

---

## Novelty

Rather than focusing purely on control implementation, this project emphasized an **experimental pipeline**:

- A configurable swarm simulator designed for algorithm comparison  
- Automated parameter sweeps for repeatable experiments  
- Local-sensing viewing strategies evaluated quantitatively  
- Bridging simulation results to a real drone demonstration  

---

## Approach

### Simulator architecture

I designed a Python-based simulator modeling drones as point-mass agents with configurable:

- Neighbor selection strategies  
- Viewing direction algorithms  
- Noise models  
- Swarm parameters  

A GUI enabled rapid testing, while an autorun system generated systematic experiment batches.

### Experimental workflow

The simulator supported:

- Automated multi-run testing  
- Metric tracking  
- Data export for analysis  
- Visualization for debugging and validation  

This allowed objective comparison between strategies.

### Validation & sim-to-real

To reduce simulation bias:

- Algorithms were validated in a commercial simulator  
- A proof-of-concept swarm demo was implemented on Crazyflie drones  

This ensured theoretical results translated to physical behavior.

---

## Results & Outcomes

- Functional swarm simulator supporting automated experimentation  
- Quantitative comparison of viewing strategies  
- Successful sim-to-real demonstration on micro drones  
- IEEE-style research report documenting methodology  

<a href="{{ "/assets/extras/RO1_LIS_Report_final.pdf" | relative_url }}">Read the project report →</a>

---

## Takeaways & Future Directions

This project reinforced the importance of:

- Designing experiments before implementation  
- Building reproducible pipelines  
- Validating simulation assumptions  
- Structuring complex projects over time  

Future improvements could include obstacle modeling, additional swarm algorithms, and more tests against noisy conditions.

---

## Tools & Skills

**Technical**

- Python simulation architecture  
- ROS2 integration  
- Data analysis & visualization (matplotlib, numpy)  
- Experimental design  

**Workflow**

- Research-driven development  
- Autonomous planning  
- Debugging complex systems  
- Documentation & reporting  

---

## Demo

Crazyflie swarm demonstration: <a href="https://youtube.com/playlist?list=PL8cx2cevn_sbnwVWY66kf_ksNLqBBo-WO" target="_blank">Watch some cool demos :D →</a>

