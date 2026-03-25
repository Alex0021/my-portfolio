---
layout: project
category: academic
date: 01-05-2024
title: Viewing Coverage Optimization of Aerial Swarms Using Local Sensing
skills:
  - Python
  - Swarm Robotics
  - Simulation
  - ROS2
  - Sim2Real
---

Explored how decentralized aerial drones can optimize collective viewing coverage using only locally detected neighbors --- from custom simulation to real Crazyflie swarm demonstrations.

<div class="img-row">
  <img src="{{ "/assets/images/2d_swarm_9_drones_zoom.png" | relative_url }}" width="280" alt="2D swarm simulation">
  <img src="{{ "/assets/images/webots_swarm9_topo3.png" | relative_url }}" width="280" alt="Webots 3D simulation">
  <img src="{{ "/assets/images/real_cf_wswarm7_dark.png" | relative_url }}" width="294" alt="Real Crazyflie swarm">
</div>

---

## Problem

Swarm robotics often assumes global information, which is unrealistic for real aerial systems. The challenge: can drones coordinate their viewing direction using only local neighbor detection?

---

## Approach

- **Custom Python simulator** with configurable neighbor selection, viewing algorithms, noise models, and automated parameter sweeps
- **Quantitative comparison** of multiple viewing strategies through reproducible experiment batches
- **Sim-to-real validation** on Crazyflie micro drones via ROS2, confirming that simulation results transfer to physical behavior

---

## Outcome

- Functional swarm simulator supporting automated experimentation
- Quantitative ranking of viewing strategies under varying conditions
- Successful real-drone demonstration of the best-performing algorithm
- IEEE-style research report documenting the full methodology

<div class="project-links" markdown="1">

[Read the project report]({{ "/assets/extras/RO1_LIS_Report_final.pdf" | relative_url }}){:target="_blank"} --- [Watch Crazyflie demos](https://youtube.com/playlist?list=PL8cx2cevn_sbnwVWY66kf_ksNLqBBo-WO){:target="_blank"}

</div>
