---
layout: project
category: academic
date: 01-11-2023
title: Interpolation Project (C++)
skills:
  - C++20
  - CTest
  - Git
  - Eigen Lib
---

## How do we effectively apply modern C++20 features and linear algebra to build a mathematically grounded, testable application?

<div style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center; margin: 1rem 0;">
  <div style="flex: 1; margin-bottom: 0em; text-align: center;">
    <img src="{{ "/assets/images/lagrange_vs_chebyshev_plot.jpg" | relative_url }}" alt="Lagrange vs Chebyshev comparison" style="width: 70%; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <p style="margin-top: 0.25em; font-size: 0.95em; color: var(--color-text-secondary); font-style: italic;">Difference between Lagrange and Chebyshev interpolation methods</p>
  </div>
  <div style="flex: 1; margin-bottom: 0em; text-align: center;">
    <img src="{{ "/assets/images/natural_vs_clamped_plot.jpg" | relative_url }}" alt="Natural vs clamped spline comparison" style="width: 70%; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <p style="margin-top: 0.25em; font-size: 0.95em; color: var(--color-text-secondary); font-style: italic;">Difference between natural and clamped spline interpolation</p>
  </div>
</div>

---

## Problem

Revisit core C++ concepts while building something mathematically grounded. The goal was to gain fluency with C++20 features and the Eigen linear algebra library through a structured, testable application.

---

## Approach

- Matrix I/O parsing with structured data handling
- Multiple interpolation methods implemented and compared
- Clean module separation with defined interfaces
- Test suite using CTest for validation

---

## Outcome

A working interpolation tool that reinforced modern C++ practices (templates, smart pointers, structured bindings) and the importance of planning architecture early --- even for small applications.

<div class="project-links" markdown="1">

[View on GitHub](https://github.com/Alex0021/InterpolationProject){:target="_blank"}

</div>
