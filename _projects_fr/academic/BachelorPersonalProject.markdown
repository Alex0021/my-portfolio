---
layout: project
category: academic
date: 01-05-2022
title: "Fusion de capteurs pour la surveillance de hauteur"
lang: fr
skills:
  - Capteurs
  - Embarqué
  - Fusion
  - I2C
  - UART
  - Temps réel
---

Comment estimer avec précision la position verticale d'un pod Hyperloop et détecter sa lévitation, malgré le bruit et les limitations inhérentes aux capteurs embarqués ?

<div class="img-center">
  <img src="{{ "/assets/images/Schéma_global_projet.svg" | relative_url }}" width="800" alt="Vue d'ensemble du système">
</div>

## Problème

Projet individuel consistant à développer un schéma de fusion de capteurs pour estimer la hauteur en temps réel et détecter la lévitation sur un prototype de pod Hyperloop — réalisé dans le cadre de l'initiative étudiante Polyloop.

## Approche

- Caractérisation des capteurs et analyse du bruit
- Conception de la stratégie de fusion : des filtres complémentaires simples au filtre de Kalman linéaire
- Traitement du signal temps réel sur matériel embarqué (I2C, UART)
- Ajustement itératif et validation expérimentale sur prototype physique

## Résultat

Un pipeline d'estimation de hauteur fonctionnel et validé sur matériel, faisant le pont entre théorie de l'estimation et contraintes capteurs réelles.

<div class="project-links" markdown="1">

[Poster du projet (PDF, français)]({{ "/assets/extras/Affiche-Projet3.pdf" | relative_url }}){:target="_blank"} --- [Voir la démo](https://youtu.be/c9kShqK1qEU){:target="_blank"}

</div>
