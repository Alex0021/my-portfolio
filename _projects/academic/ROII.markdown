---
layout: project
category: academic
date: 01-09-2024
title: VLOS-Constrained Inspection Planning for MAVs
skills:
  - MPC
  - MATLAB
  - Simulation
  - Optimization
  - UAV
---

## Overview

This semester project explored how a micro aerial vehicle (MAV) can autonomously perform inspection tasks while maintaining Visual Line-Of-Sight (VLOS) with a human operator — a real regulatory requirement in Switzerland.

<div style="display:flex; gap:25px; flex-wrap:wrap; justify-content:center">
  <img src="{{ "/assets/images/Human_VLOS_drone_inspection.jpg" | relative_url }}" width="350">
  <img src="{{ "/assets/images/ROII_project_cover_page.png" | relative_url }}" width="350">
</div>

The core challenge was designing a control framework that balances inspection objectives with safety and visibility constraints using Model Predictive Control (MPC). The work focused on problem formulation, simulation validation, and performance analysis under progressively complex scenarios.

---

## Problem

Autonomous inspection drones must satisfy multiple competing objectives:

- Follow an inspection trajectory  
- Maintain visibility with a ground operator  
- Respect regulatory distance limits  
- Avoid occlusions from obstacles  

Traditional planners often optimize one objective at the expense of others or lack formal constraint guarantees.

The goal was to design an MPC-based controller capable of maintaining VLOS conditions **while performing inspection**, even under environmental disturbances.

---

## What Was Novel

The project combined regulatory constraints, perception-inspired metrics, and trajectory optimization into a unified MPC formulation.

Key aspects included:

- Explicit modeling of operator visibility constraints  
- Occlusion-aware planning within the MPC framework  
- Dynamic switching between inspection-following and operator-following modes  
- Constraint smoothing via slack variables  

---

## Approach

### MPC formulation

A nonlinear MPC problem was designed with objectives for:

- Path tracking  
- Drone stability  
- Operator visibility  
- Inspection camera alignment  

Slack variables ensured feasibility while preserving constraint priority.

### Simulation pipeline

A MATLAB simulation environment was used to iterate quickly on formulation design. Three progressively complex scenarios were tested:

1. Baseline inspection with moving operator  
2. Constraint-driven path interruption  
3. Occlusion-aware inspection with obstacles  

For more details on the problem formulation and results, have a look at the <a href="{{ "/assets/extras/ROII_Final_Report.pdf" | relative_url }}" target="_blank">Full Report</a> !

---

## Results & Outcomes

- Working MPC formulation enforcing VLOS constraints  
- Stable inspection behavior under multi-objective trade-offs  
- Successful constraint switching when operator limits were approached  

The controller maintained visibility constraints while adapting inspection progression — demonstrating feasibility of regulation-aware autonomous planning.

---

## Takeaways & Future Directions

This project reinforced how real-world robotics constraints extend beyond motion planning into regulation, perception, and safety considerations.

Key learnings:

- Balancing competing objectives in MPC  
- Solver behavior under nonlinear constraints  
- Designing feasible formulations  

Future work includes integration into high-fidelity simulators, perception pipelines, and robustness to uncertainty.

---

## Demonstrations

Scenario recordings showing VLOS-aware inspection behavior: <a href="https://www.youtube.com/playlist?list=PL8cx2cevn_sbN0pgqydm0C-0Qm3tfScyd">Watch simulations →</a>
