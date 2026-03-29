---
layout: project
category: academic
date: 01-11-2023
title: "Projet d'interpolation (C++)"
lang: fr
skills:
  - C++20
  - CTest
  - Git
  - Eigen Lib
---

Application d'interpolation 2D développée en C++ moderne dans le cadre d'un cours de programmation --- lecture de matrices depuis des fichiers et calcul de fonctions interpolées via plusieurs méthodes.

<div style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center; margin: 1rem 0;">
  <div style="flex: 1; margin-bottom: 0em; text-align: center;">
    <img src="{{ "/assets/images/lagrange_vs_chebyshev_plot.jpg" | relative_url }}" alt="Comparaison Lagrange vs Chebyshev" style="width: 70%; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <p style="margin-top: 0.25em; font-size: 0.95em; color: var(--color-text-secondary); font-style: italic;">Différence entre l'interpolation de Lagrange et de Chebyshev</p>
  </div>
  <div style="flex: 1; margin-bottom: 0em; text-align: center;">
    <img src="{{ "/assets/images/natural_vs_clamped_plot.jpg" | relative_url }}" alt="Comparaison splines naturelle vs serrée" style="width: 70%; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <p style="margin-top: 0.25em; font-size: 0.95em; color: var(--color-text-secondary); font-style: italic;">Différence entre une spline naturelle et une spline "clamped"</p>
  </div>
</div>

## Problème

Revisiter les concepts fondamentaux du C++ en construisant quelque chose de mathématiquement concret. L'objectif était de gagner en aisance avec les fonctionnalités du C++20 et la bibliothèque d'algèbre linéaire _Eigen_ à travers une application structurée et testable.

## Approche

- Parsing de matrices avec gestion structurée des données
- Implémentation et comparaison de plusieurs méthodes d'interpolation
- Séparation modulaire avec interfaces définies
- Suite de tests via CTest pour la validation

## Résultat

Un outil d'interpolation fonctionnel qui a renforcé les pratiques modernes du C++ (templates, smart pointers, structured bindings) et l'importance de planifier l'architecture en amont --- même pour de petites applications.

<div class="project-links" markdown="1">

[Voir sur GitHub](https://github.com/Alex0021/InterpolationProject){:target="_blank"}

</div>
