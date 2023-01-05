---
title: 博客搭建
date: 2023-01-05
categories:
  - myVuepress
tags:
  - vue3
---

1. 安装光标效果插件

`npm add vuepress-plugin-cursor-effects -D`

2. 在 config.js 中添加配置

   `module.exports = {

   plugins: [

   ['cursor-effects', {

   size: 2, // size of the particle, default: 2

   shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'

   zIndex: 999999999, // z-index property of the canvas, default: 999999999

   }]

   ],

   }`
