---
title: MVVM
date: 2023-3-7
categories:
  - interview
tags:
  - vue2
---

1、什么是MVVM?

`视图模型双向绑定`，是`Model-View-ViewModel`的缩写。`Model`层代表数据模型，`View`代表UI组件，`ViewModel`是`View`和`Model`层的桥梁，数据会绑定到`viewModel`层并自动将数据渲染到页面中，视图变化的时候会通知`viewModel`层更新数据。

2、MVVM的优点：
1.低耦合。view 和 model 之间没有直接的关系，通过 viewModel 来完成数据双向绑定；
2.可重用性。你可以把一些视图逻辑放在一个Model里面，让很多View重用这段视图逻辑。
3.独立开发。开发人员可以专注于业务逻辑和数据的开发(ViewModel)，设计人员可以专注于页面设计。
4.可测试。ViewModel 的存在可以帮助开发者更好地编写测试代码。


3、vue底层原理
vue.js是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter和getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
Observer（数据监听器） : Observer的核心是通过Object.defineProprtty()来监听数据的变动，这个函数内部可以定义setter和getter，每当数据发生变化，就会触发setter。这时候Observer就要通知订阅者，订阅者就是Watcher

Watcher（订阅者） : Watcher订阅者作为Observer和Compile   之间通信的桥梁，主要做的事情是：
1、在自身实例化时往属性订阅器(dep)里面添加自己
2、自身必须有一个update()方法    
3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调

Compile（指令解析器） : Compile主要做的事情是解析模板指令，将模板中变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加鉴定数据的订阅者，一旦数据有变动，收到通知，更新试图。

4、data为什么是一个函数？
组件中的data写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份data，就会造成一个变了全都会变的结果。