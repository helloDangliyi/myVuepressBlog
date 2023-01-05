---
title: 博客搭建
date: 2023-01-05
categories:
  - vuepress
tags:
  - vuepress
---

1. 安装光标效果插件

`npm add vuepress-plugin-cursor-effects -D`

在 config.js 中添加配置

```vue
module.exports = { plugins: [ ['cursor-effects', { size: 2, // size of the
particle, default: 2 shape: 'star', // ['star' | 'circle'], // shape of the
particle, default: 'star' zIndex: 999999999, // z-index property of the canvas,
default: 999999999 }] ], }
```

2. 安装动态标题

   `npm add vuepress-plugin-dynamic-title -D`

```vue
module.exports = {
plugins: [ ['dynamic-title', { showIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae', showText: '客官欢迎回来~', hideIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae', hideText: '客官不要走嘛~', recoverTime: 2000, }] ]
}
```


