---
layout: project
category: academic
date: 01-05-2023
title: "Plateforme de surveillance de relais industriels"
lang: fr
skills:
  - Linux
  - Protocole de communication
  - API
  - C++
  - Architecture système
---


Projet d'équipe de fin de Bachelor visant à construire une plateforme de surveillance et de contrôle de relais de protection industriels de différents fabricants --- en standardisant la communication entre le matériel de terrain et le logiciel de supervision.

<div class="img-center">
  <img src="{{ "/assets/images/RELAIS_Schema_V3.jpg" | relative_url }}" width="800" alt="Schéma d'architecture du système">
</div>

*En raison de la confidentialité du client, les détails de mise en oeuvre restent généraux.*

## Problème

Les relais industriels de différents fabricants utilisent des protocoles distincts. La surveillance et le contrôle à distance nécessitaient un pont unifié entre du matériel hétérogène et un logiciel de supervision, avec une gestion et un stockage fiables des données.

## Approche

- **Unité de traitement en C++** avec une couche API pour l'interaction système
- Intégration du **protocole IEC 61850** pour la communication avec les relais
- Flux de données structuré entre matériel, logiciel et base de données
- Équipe de six personnes avec des responsabilités modulaires définies

## Résultat

Une plateforme de surveillance fonctionnelle reliant des relais multi-fabricants à une interface centralisée. Le projet constituait la première phase d'une initiative plus large visant à permettre la maintenance prédictive par IA à partir de données temps réel.

