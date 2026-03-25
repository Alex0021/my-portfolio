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

What started as running Home Assistant for a few automations quickly escalated into a fully virtualized home infrastructure. Like many post-pandemic homelabbers, curiosity got the better of me.

---

## What I Built

The lab runs on **Proxmox VE** with a **pfSense firewall** for routing and network segmentation. Services are isolated into VMs and containers so experiments don't take everything down --- *most of the time*.

<div class="img-center">
  <img src="{{ "/assets/images/2026_02_HomeLab_Services_background.png" | relative_url }}" width="700" alt="Homelab architecture">
</div>

This all looks like a well-organized structure --- **until something breaks** (don't ask).

Current stacks include monitoring & dashboards, a Docker playground for quick experiments, a media server that became a surprisingly practical family setup, home automations (I really geek out on this), and various OS workstations --- because you need every OS ;)

---

## Why It Matters to Me

Maintaining a homelab is an ongoing reminder that real systems are messy, and that's part of what makes them interesting. Debugging, organizing, improving incrementally --- it's a hands-on playground where I learn how interconnected services actually behave in practice.

Asking why all of this even exists is answering it.
