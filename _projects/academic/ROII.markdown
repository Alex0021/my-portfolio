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

Designed an MPC-based controller for autonomous drone inspection that enforces Visual Line-Of-Sight (VLOS) with the operator --- a real Swiss regulatory requirement.

<div class="img-row">
  <img src="{{ "/assets/images/Human_VLOS_drone_inspection.jpg" | relative_url }}" width="350" alt="VLOS drone inspection concept">
  <img src="{{ "/assets/images/ROII_project_cover_page.png" | relative_url }}" width="350" alt="Project cover">
</div>

---

## Problem

Autonomous inspection drones must simultaneously follow an inspection path, stay visible to a ground operator, respect distance limits, and avoid occlusions. Traditional planners often optimize one objective at the expense of others.

---

## Approach

- **Nonlinear MPC formulation** jointly optimizing path tracking, drone stability, operator visibility, and camera alignment
- **Slack variables** for constraint smoothing and feasibility guarantees
- **Progressive scenario testing** in MATLAB: baseline inspection, constraint-driven interruption, and occlusion-aware planning

---

## Outcome

- Working MPC that maintains VLOS constraints while adapting inspection progression
- Stable multi-objective trade-offs under competing constraints
- Demonstrated feasibility of regulation-aware autonomous planning

<div class="project-links" markdown="1">

[Read the full report]({{ "/assets/extras/ROII_Final_Report.pdf" | relative_url }}){:target="_blank"} --- [Watch simulations](https://www.youtube.com/playlist?list=PL8cx2cevn_sbN0pgqydm0C-0Qm3tfScyd){:target="_blank"}

</div>
