---
title: JavaScript进阶-常见内存泄露及如何避免
date: 2023-2-6
categories:
  - interview
tags:
  - javascript
---

在 JS 中，常见的内存泄露主要有 4 种,全局变量、闭包、DOM 元素的引用、定时器
参考原文：

[[JavaScript 进阶-常见内存泄露及如何避免 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904038064979981)](https://juejin.cn/post/6844904038064979981)

### JS 中 this 的五种情况

#### 1、作为普通函数调用，this 指向全局对象 window

#### 2、作为对象的方法调用， this 指向该对象

#### 3、构造器调用

当函数作为构造函数被使用时，this 指向返回的这个对象

```javascript
const MyClass = {
    this.name = 'className'
}

let obj = new MyClass()
console.log( obj.name ) // 'className'
```

#### 4、call 或 apply 调用

```javascript
const obj1 = {
  name: "TianGou Da",
  getName: function () {
    return this.name;
  },
};
const obj2 = {
  name: "TinaGou Ya",
};
console.log(obj1.getName()); //  输出: TianGou Da
console.log(obj1.getName.call(obj2)); // 输出：TinaGou Ya
```
