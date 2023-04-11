---
title: 面试2
date: 2023-4-11
categories:
  - interview
tags:
  - vue3
---

在 Vue 3 中，支持多个根节点的实现原理是使用了 Fragment（文档片段）。
Fragment 是一个 DOM 节点，它可以包含多个子节点，但它本身并不会被渲染到页面上。在 Vue 3 中，多个根节点实际上是使用 Fragment 包裹起来的。
而 fragment 跟 keep-alive 一样是一个不会被渲染出来的内置组件