---
title: javascript的类型
date: 2023-2-6
categories:
  - interview
tags:
  - javascript
---

```javascript
S 的数据类型
基本数据类型:String、Number、Null、Undefined、Boolean
引用数据类型:Object、Array、Function

当 ES6 问世，直至今日，又新增了两种基本数据类型：Symbol（ES 新增）、BigInt（ES10 新增）

typeof 变量名 可以检测数据类型

Object、Array和Null区分，都返回object
function 返回function
console.log(typeof Symbol)           // function
console.log(typeof Symbol());        // symbol
```
