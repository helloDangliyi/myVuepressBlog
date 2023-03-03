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

2、能说一下 Eventloop 吗？
Eventloop事件循环分为两种:分别是浏览器事件循环和node.js事件循环。

浏览器事件循环的运行机制：整段script代码是一个宏任务，在执行宏任务的过程中会不断的有微任务加入到微任务队列中，当执行完一个宏任务后先看微任务队列里有没有微任务，如果有先把整队的微任务执行完，然后在执行下一个宏任务，如此以往形成eventloop。队列都是先入先出，但是跟栈的联系实在是没明白，就是栈的先进后出这个概念在eventloop里没明白。猜想：数据结构的栈在event里应该没什么联系，因为执行栈里也是先进的先执行的，不管是从微任务队列里进的还是从宏任务队列里进的，都是先进入到栈的先执行的

3、async await 用的多吗，和 promise 有什么异同？

async/await 在底层转换成了 promise 和 then 回调函数。
也就是说，这是 promise 的语法糖。
每次我们使用 await, 解释器都创建一个 promise 对象，然后把剩下的 async 函数中的操作放到 then 回调函数中。


4、那有用 axios 封装过请求吗，拦截器里你一般都做些什么，axios 取消请求的需求有做过吗？
