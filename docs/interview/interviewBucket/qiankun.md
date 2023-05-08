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

## 为什么选择微前端

我们会选择微前端是因为，之前有一个项目需要多个部门协调合作开发，考虑到跨部门开发一些资源的协调和沟通成本所以决定使用微前端，还有就是有些功能模块页面的复用（用户管理、权限管理等）之前是用的 iframe，设计到一些页面弹框的时候并不美观，综合考虑就用了微前端。