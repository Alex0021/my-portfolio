---
layout: project
category: academic
date: 01-05-2023
title: Bachelor's Capstone -- Industrial Relay Monitoring Platform
skills:
  - Linux
  - Communication Protocol
  - API
  - C++
  - System Architecture
---

Team capstone project building a platform to monitor and control industrial protection relays from multiple vendors --- standardizing communication between field hardware and supervisory software.

<div class="img-center">
  <img src="{{ "/assets/images/RELAIS_Schema_V3.jpg" | relative_url }}" width="800" alt="System architecture diagram">
</div>

*Due to client sensitivity, implementation details are kept high-level.*

---

## Problem

Industrial relays from different vendors speak different protocols. Remote monitoring and control required a unified bridge between heterogeneous hardware and higher-level software, with reliable data handling and storage.

---

## Approach

- **Processing unit in C++** with an API layer for system interaction
- **IEC 61850 protocol** integration for relay communication
- Structured data flow between hardware, software, and system database
- Team of six with clear module responsibilities

---

## Outcome

A working monitoring platform bridging multi-vendor relays to a centralized interface. The project was the first phase of a larger initiative aimed at enabling AI-driven predictive maintenance from live device data.
