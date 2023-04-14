---
title: 面试题
date: 2023-4-14
categories:
  - interview
tags:
  - javascript
---







## async/Promis的关系

- 执行async函数，返回的是Promise对象

  

- await相当于Promise的then

  

- try...catch可捕获异常，代替了Promise的catch

## Js的设计模式



## 还有for in 和for of的区别



## 原型和原型链



## ES6的循环遍历



## $netxTike原理

https://juejin.cn/post/7177681326861418556



## 手写promise

- 手写promise是一个经常考察的问题，它不是是十几行代码就能解决完的，至少需要几十行代码。

- 非常常用的API。

- promise有一个叫做promise  a+ 的规范的代码：
  - 手写的话不现实，
  - 完全手写没必要，写了之后也不会使用。
  - 主要是为了考察你的编码能力

  

## 深拷贝
  
  ```javascript
  // 深拷贝
  function deepClone(obj = {}) {
      if (typeof obj !== 'object' || obj == null ) {
          // 不是对象或者数组形式，或是 null ，直接返回
          return obj
      }
  
      // 初始化返回结果
      let result
      if (obj instanceof Array) {
          result = []
      } else {
          result = {}
      }
  
      // 变量
      for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
              // 保证不是原型属性（原型和原型链部分会讲解）
  
              // 递归调用
              result[key] = deepClone(obj[key])
          }
      }
  
      // 返回结果
      return result
  }
  
  const obj1 = { x: 100, y: 200 }
  const obj2 = deepClone(obj1)
  obj1.x = 101
  console.log(obj2) // x: 100
  ```
  
  
  
  

