---
title: npm 
date: 2023-06-05
categories:
  - main-app
tags:
  - npm
---

Vue在开发中安装插件报错：

```javascript
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR! 
npm ERR! While resolving: @vue/eslint-config-standard@6.1.0
npm ERR! Found: eslint-plugin-vue@8.7.1
npm ERR! node_modules/eslint-plugin-vue
npm ERR!   dev eslint-plugin-vue@"^8.0.3" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer eslint-plugin-vue@"^7.0.0" from @vue/eslint-config-standard@6.1.0
npm ERR! node_modules/@vue/eslint-config-standard
npm ERR!   dev @vue/eslint-config-standard@"^6.1.0" from the root project      
npm ERR!
npm ERR! Conflicting peer dependency: eslint-plugin-vue@7.20.0
npm ERR! node_modules/eslint-plugin-vue
npm ERR!   peer eslint-plugin-vue@"^7.0.0" from @vue/eslint-config-standard@6.1.0      
npm ERR!   node_modules/@vue/eslint-config-standard
npm ERR!     dev @vue/eslint-config-standard@"^6.1.0" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR!
npm ERR! For a full report see:
npm ERR! C:\Users\dang\AppData\Local\npm-cache\_logs\2023-06-05T04_10_43_931Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\dang\AppData\Local\npm-cache\_logs\2023-06-05T04_10_43_931Z-debug-0.log
```

### 解决方案：在完整的指令后面添加--legacy-peer-deps

```javascript
npm i --legacy-peer-deps
```

### 原因

**为什么会出现上述错误：**

是因为npm版本过高的原因，高于7之后要求会更严格；
npm -V可以查看npm的版本
--legacy-peer-deps 标志  是在v7中引入的,目的是绕过peerDependency自动安装;它告诉 NPM 忽略项目中引入的各个modules之间的相同modules但不同版本的问题并继续安装。

