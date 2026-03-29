---
layout: project
category: academic
date: 01-09-2024
title: "Inspection sous contraintes VLOS pour drone"
lang: fr
skills:
  - MPC
  - MATLAB
  - Simulation
  - Optimisation
  - UAV
---

Développement d'un contrôleur de type **MPC** visant à garantir le maintien d'un contact visuel direct entre le drone et son opérateur (_hard constraint_), tout en assurant l'inspection d'un bâtiment (_soft constraint_).

<div class="img-row">
  <img src="{{ "/assets/images/Human_VLOS_drone_inspection.jpg" | relative_url }}" width="350" alt="Concept d'inspection drone VLOS">
  <img src="{{ "/assets/images/ROII_project_cover_page.png" | relative_url }}" width="350" alt="Couverture du projet">
</div>

## Problème

La réglementation actuelle impose l'obtention de permis spéciaux pour tout vol hors ligne de vue (_BVLOS_), ce qui alourdit considérablement la mise en œuvre d'inspections sur sites industriels. Une alternative plus souple consiste à maintenir un contact visuel permanent entre le drone et son pilote — s'affranchissant ainsi des contraintes administratives liées au BVLOS tout en conservant une flexibilité opérationnelle accrue.

## Approche

- **Formulation MPC non-linéaire** optimisant conjointement le suivi de trajectoire, la stabilité du drone, la visibilité opérateur et l'alignement caméra
- **Variables de relâchement (_slack_)** pour le lissage des contraintes et la garantie de faisabilité
- **Tests de scénarios progressifs** en MATLAB : inspection de base, interruption par contraintes et planification tenant compte des occlusions

## Résultat

- Preuve de concept d'un MPC fonctionnel maintenant les contraintes VLOS tout en adaptant la progression d'inspection
- Faisabilité démontrée d'une planification autonome conforme à la réglementation

<div class="project-links" markdown="1">

[Lire le rapport complet]({{ "/assets/extras/ROII_Final_Report.pdf" | relative_url }}){:target="_blank"} --- [Voir les simulations](https://www.youtube.com/playlist?list=PL8cx2cevn_sbN0pgqydm0C-0Qm3tfScyd){:target="_blank"}

</div>
