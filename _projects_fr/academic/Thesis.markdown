---
layout: project
category: academic
date: 01-02-2026
title: "Essaim aérien adaptatif par suivi oculaire (Thèse en cours)"
lang: fr
skills:
  - Robotique en essaim
  - Unity
  - Machine Learning
  - Expérimentation
  - Contrôleur adaptatif
---

## Peut-on optimiser les performances d'un pilote d'essaim de drones en adaptant l'autonomie du système pour maintenir un effort mental optimal ?

<span class="status-badge">En cours</span>

<div class="img-side">
  <img src="{{ "/assets/images/ChatGPT-Thesis_poster_v2.png" | relative_url }}" alt="Poster concept de thèse" class="img-side-image">

  <div class="img-side-content" markdown="1">

**Contexte : Le Flow State**

On observe que pour une même tâche, les performances varient considérablement d'un individu à l'autre selon son niveau d'habileté. Un opérateur surqualifié risque de s'ennuyer et de se désengager, tandis qu'un opérateur sous-qualifié bascule dans l'anxiété — dans les deux cas, les performances en sont limitées. L'idéal se situe entre ces deux extrêmes, dans un état de concentration optimale connu sous le nom de _Flow State_.

**La thèse**

C'est dans ce contexte que je m'intéresse au pilotage d'essaims de drones — une tâche cognitivement exigeante où les interfaces actuelles ignorent généralement l'état mental de l'opérateur. Cette thèse vise à concevoir un système capable de surveiller la charge cognitive en temps réel, via le suivi oculaire, et d'adapter dynamiquement le niveau d'autonomie de l'essaim en conséquence — maintenant le pilote dans une zone d'engagement optimal, sans le surcharger.

  </div>
</div>

## Approche

- **Estimation de l'état cognitif** à partir de données de suivi oculaire à 60Hz et à des modèles d'apprentissage machine
- **Interface d'essaim adaptative** dans Unity, mappant dynamiquement l'état du pilote au comportement de l'essaim
- **Études utilisateurs** mesurant la performance, la charge cognitive et la stabilité de l'engagement
- **Validation matérielle** prévue avec des drones DJI pour le transfert sim-to-real

## Statut actuel

- Revue de littérature complétée
- Entrainements de différents modèles d'IA: _TabNet_ et _TCN_ pour une prédiction de 3 classes: low, medium, high
- Première étude utilisateur complétée: ceci pour valider les modèles et les entrainer sur nos propres données
- Design de la deuxième étude sur Unity: tester en live l'efficacité du système adaptatif

## Résultat attendu

Mon but est de pouvoir observer des différences significatives entre les utilisateurs disposant du système adaptatif et ceux qui ne l'ont pas au niveau de la performance pour une tâche donnée. Idéallement, je voudrais observer une hausse de performance pour les utilisateurs moins expérimentés et au moins des performances similaires pour les utilisateurs "experts".

**Plus d'infos à venir --- restez à l'affut !**
