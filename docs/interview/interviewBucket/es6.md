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
