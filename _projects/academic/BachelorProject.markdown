---
layout: project
category: academic
date: 01-05-2023
title: Bachelor’s Capstone – Industrial Relay Monitoring Platform
skills:
  - Linux
  - Comunication protocol
  - API
  - C++
  - System Architecture
---

## Overview

This bachelor’s capstone project focused on building a platform to monitor and control industrial protection relays from multiple vendors. The goal was to standardize communication between field hardware and higher-level software, enabling reliable remote interaction with industrial equipment.

The project was completed in a team of six, emphasizing system integration, collaboration, and real-world engineering constraints.

---

## Project Scope

The system acted as a bridge between industrial relays and a supervisory interface, supporting standardized communication and structured data exchange. The work involved combining hardware interaction, protocol handling, and software architecture in a cohesive platform.

<div style="display:flex; justify-content:center">
<img src="{{ "/assets/images/RELAIS_Schema_V3.jpg" | relative_url }}" width="1000">
</div>

Due to client sensitivity, implementation details are intentionally kept high-level.

---

## My Contribution

I worked on the development of the processing unit software in **C++**, focusing on:

- Implementing an API layer for system interaction  
- Managing communication with relays via the **IEC 61850** protocol  
- Structuring data flow between hardware and software components  

This required a detailed understanding of the relay communication protocol (IEC 61850) and reliable synchronization with the system database to securely store and organize operational data.

---

## Takeaway

This project gave me practical insight into the challenges of integrating industrial communication protocols into custom-built APIs and data acquisition systems. It highlighted the importance of reliability, structured data handling, and clear interface design when working with real hardware.

The work represented the first phase of a larger initiative aimed at centralizing live device data for future AI-driven analysis, with the long-term goal of enabling predictive maintenance strategies.