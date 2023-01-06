---
title: vue3项目(JS)引入sass
date: 2023-01-05
categories:
  - project
tags:
  - sass
---

# 安装

## 1、使用 npm 下载插件

```js
npm install node-sass sass-loader -D
```

## 2、vue.config.js 配置 scss

```js
module.exports = defineConfig({
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [],
    },
  },
});
```
