---
layout: project
category: academic
date: 01-05-2024
title: "Optimisation de la couverture visuelle d'un essaim de drones"
lang: fr
skills:
  - Python
  - Robotique en essaim
  - Simulation
  - ROS2
  - Sim2Real
---

Comment maximiser la couverture visuelle d'un essaim de drones en se basant uniquement sur des informations locales ?

<div class="img-row">
  <img src="{{ "/assets/images/2d_swarm_9_drones_zoom.png" | relative_url }}" width="280" alt="Simulation d'essaim 2D">
  <img src="{{ "/assets/images/webots_swarm9_topo3.png" | relative_url }}" width="280" alt="Simulation 3D Webots">
  <img src="{{ "/assets/images/real_cf_wswarm7_dark.png" | relative_url }}" width="294" alt="Essaim réel Crazyflie">
</div>

## Problème

Les essaims de drones sont des systèmes intrinsèquement complexes, où la communication centralisée représente un défi majeur. Le pilotage l'est tout autant : l'accès à une information visuelle complète y est souvent difficile, voire impossible. Dans ce projet, j'ai exploré plusieurs algorithmes d'optimisation visant à maximiser la couverture visuelle de l'essaim — en n'exploitant que les informations locales issues des drones voisins, sans aucune coordination globale.

## Approche

- **Simulateur Python personnalisé** avec sélection de voisins configurable, ajout facile d'algorithmes, modèles de bruit et balayage automatisé de paramètres
- **Comparaison quantitative** de multiples stratégies de vision via des lots d'expériences reproductibles
- **Validation sim-to-real** sur micro-drones Crazyflie via ROS2, démontrant une preuve de concept sur de réels drones!

## Résultat

- Simulateur d'essaim fonctionnel supportant l'expérimentation automatisée
- Classement quantitatif des stratégies de vision sous diverses conditions
- Démonstration réussie sur drones réels du meilleur algorithme
- Rapport de recherche au format IEEE documentant la méthodologie complète

<div class="project-links" markdown="1">

[Lire le rapport]({{ "/assets/extras/RO1_LIS_Report_final.pdf" | relative_url }}){:target="_blank"} --- [Voir les démos Crazyflie](https://youtube.com/playlist?list=PL8cx2cevn_sbnwVWY66kf_ksNLqBBo-WO){:target="_blank"}

</div>
