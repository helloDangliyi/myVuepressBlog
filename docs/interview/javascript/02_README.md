---
title: setTimeout()比setInterval()稳定的原因
date: 2023-2-6
categories:
  - interview
tags:
  - javascript
---

参考文章：[[(34 条消息) setTimeout()比 setInterval()稳定的原因\_Carol 小朋友的博客-CSDN 博客](https://blog.csdn.net/lixinyi0622/article/details/86570045)](https://blog.csdn.net/lixinyi0622/article/details/86570045)

1、说一下 promise 的几个状态，能说一下大致原理吗?then 方法是宏任务还是微任务？
有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
then 方法是微任务。


2、能说一下 Eventloop 吗？
Eventloop事件循环分为两种:分别是浏览器事件循环和node.js事件循环。

浏览器事件循环的运行机制：整段script代码是一个宏任务，在执行宏任务的过程中会不断的有微任务加入到微任务队列中，当执行完一个宏任务后先看微任务队列里有没有微任务，如果有先把整队的微任务执行完，然后在执行下一个宏任务，如此以往形成eventloop。


[[js事件循环简单理解，微任务与宏任务运行顺序（二） - 简书 (jianshu.com)](https://www.jianshu.com/p/5731416e8346)](https://www.jianshu.com/p/5731416e8346)

1、从上往下，先执行整个模块的宏任务代码，遇到promise.then()、await微任务了，把微任务放到任务队列并标记为微任务。遇到宏任务的异步setTimeout，也把他放到放到任务队列里并标记为宏任务，等整体的script宏任务执行完毕，才去执行任务队列里的代码。规则：任务队列里的微任务先执行，且按照先进后执行的规则来执行

2、promise虽说属于微任务，但是准确说.then( )才是会被归类到任务队列里的微任务。promise里的代码会按宏任务顺序执行下来，不会被放到任务队列里

3、async也是如此，只有await下面的代码才属于微任务，会被归类到任务队列里。
有个注意点是：当代码碰到await时候，会先执行当前行的await右边代码，然后把await下面的所有代码放到微任务队列！请记住，await下面的都属于微任务

3、async await 用的多吗，和 promise 有什么异同？

async/await 在底层转换成了 promise 和 then 回调函数。
也就是说，这是 promise 的语法糖。
每次我们使用 await, 解释器都创建一个 promise 对象，然后把剩下的 async 函数中的操作放到 then 回调函数中。


4、那有用 axios 封装过请求吗，拦截器里你一般都做些什么，axios 取消请求的需求有做过吗？
