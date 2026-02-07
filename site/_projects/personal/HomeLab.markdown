---
layout: project
category: personal
date: 01-01-2023
title: Personal Homelab
skills:
  - Self-Hosting
  - Proxmox
  - Docker
  - Linux
  - Networking
---


## Overview

Like many people, I got pulled into homelabbing during the post-pandemic wave of curiosity around self-hosting and home infrastructure. It started very simply — running Home Assistant for a few small automations — but curiosity escalated quickly. Before long, I was rebuilding everything into a fully virtualized setup centered around Proxmox.

What began as experimentation turned into a hands-on playground: learning containerization, organizing services, and eventually running a reliable media server for my family. Each addition brought small surprises and real lessons in maintenance, debugging, and system reliability.

Even at this scale — just scratching the surface — you start to appreciate how interconnected systems behave in practice. More than anything, this lab exists because I genuinely enjoy tinkering with infrastructure: breaking things, fixing them, and learning how real systems fit together.

## Architecture

The lab is built around **Proxmox VE**, which lets me isolate services into virtual machines and containers without turning the system into chaos. A **pfSense firewall** handles routing and segmentation so experiments stay controlled.

<div style="display:flex; justify-content:center">
<img src="/assets/images/2026_02_HomeLab_Services_background.png" width="700">
</div>

This all seems like a well organized and managed structure — **until something breaks (don't ask me)**

---

## Services

Each stack exists because I wanted to try something, solve a real need, or just geek out on infrastructure:

**Monitoring**  
System metrics, dashboards, and uptime tracking — All the good stuff!

**Docker stack**  
Game-changer to test stuff without blowing up the whole architecture.

**Media**  
A personal streaming setup that turned into a surprisingly practical family server.

**Automation**  
I really geek out on the whole *Home Automations* idea!

**Workstations**  
Because you need every OS ;)

---

## Why all of this even exists?

 — Asking the question is answering it —

Maintaining a homelab has reinforced how important debugging, organization, and incremental improvements are when dealing with interconnected services. It’s an ongoing reminder that real systems are messy, and that’s part of what makes them interesting (*and why I like them!*)