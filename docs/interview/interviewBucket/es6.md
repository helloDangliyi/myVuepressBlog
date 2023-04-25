---
title: es6
date: 2023-4-14
categories:
  - interview
tags:
  - es6
---
## 有序和无序

- 有序：操作慢
- 无序：操作快，但是无序

**js-object 无序；array 有序**

```javascript
const obj = { 1:100,2:200,3:300}
obj.keys(obj) //['1', '2', '3']
// 位置改变
const obj = { 2:200,1:100,3:300}
obj.keys(obj) //['1', '2', '3']


const a = [100,200,300]
//下表为1,2,3
```

**Map和Object的区别**

- API不同，Map可以以任意类型为key

- Map是**有序结构**（重要）

  ```javascript
  const m = new Map([
          ['key1','hello'],
          ['key2','100'],
          ['key3',{ x:100}],
      ])
      
   m.forEach((item,index)=>{
      console.log(item,index);
  })
  
  const m = new map()
  // obj1,obj2
  m.set(obj1,obj2)  //关联，但是没有引用关系，保持独立
  m.get(obj1)//obj2
  ```

  

- Map操作同样很快

  

**Set和数组的区别**

  - API不同

  - Set 元素不能重复

  - Set 是无序结构，操作很快

    ```javascript
    const arr = [10,20,30,40]
    const set = new Set([10,20,30,40])
    
    set.add(50)
    set.delete(20)
    set .forEach(val => console.log(val)) //没有index
    
    //set 元素是不能重复的（数组去重）
    
    //Set是无序的（快）,arr是有序的（慢）
    ```

## 怎么理解 js 中变量提升和函数提升

- 在js中，变量或者函数的声明会被提升到当前作用域的顶部，这就是所谓的变量提升和函数提升


- 变量提升：只有变量的声明会被提升，赋值不会，如果在变量被声明之前就进行了访问或赋值，那么会得到一个 undefined 的值。

  ```javascript
  console.log(a)//undefined 
  var a =1
  
  // 相当于
  var a 
  console.log(a)//undefined 
  a =1
  console.log(a)//1
  ```

- 函数提升：，JavaScript 引擎会将当前作用域中所有函数的声明提前到函数作用域或全局作用域的顶部，这个过程就叫做函数提升。**函数提升与变量提升不同的是，函数声明会被整个提前到作用域的顶部，包括函数名和函数体，因此在函数声明之前就可以直接调用该函数。**

  ```javascript
  
  console.log(a);    // hello
  console.log(b);    //undefined     
  
  // 函数声明
  function a(){
      console.log('hello')
  }
  
  //函数表达式
  var b=function(){
      console.log('world')
  }
  ```

- **JS 中函数提升的优先级高于变量提升:**这意味着如果在同一个作用域中同时存在一个函数声明和一个变量声明，那么该函数的声明将被提升到该作用域的顶部，而变量将被提升到函数声明的下面。

>需要注意的是，函数表达式和箭头函数并不会被提升，只有函数声明才会被提升