---
title: qiankun
date: 2023-5-8
categories:
  - interview
tags:
  - qiankun
---

## 微前端的原理

微前端的本质是通过监控路由的变化，根据配置的子应用路由匹配规则，匹配到相应的子应用，根据 entry 远程 fetch 获取 HTML 的内容，解析 HTML 里面的 script 标签和 css 标签，fetch 获取这些资源，执行获取的 script 代码，将 css 获取的内容添加到 HTML DOM 中；根据配置的路由渲染规则，将 HTML 渲染到配置的主应用目标节点 container 中。

