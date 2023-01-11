---
title: vueUse
date: 2023-01-06
categories:
  - frame
tags:
  - vueUse
---

## vueUse官网

[Get Started | VueUse](https://vueuse.org/guide/)

项目里安装

```js
npm i @vueuse/core -s
```

使用

```js
<script>
  import {(reactive, toRefs)} from "vue" 
  import {useDateFormat} from '@vueuse/core' 

  let time = new Date() //现在时间返回中国标准时间格式：Wed Jan11 2023 14:41:53 GMT+0800 (中国标准时间) 
  let newTime = useDateFormat(time,'YYYY年MM月DD日 HH时mm分') //2023年01月11日 14时44分
</script>
```

注意：

useDateFormat（）:第一个参数需要传入标准时间，若是时间戳需要转换。

## 时间的认识

### 时间（JS 常用时间类型）

1. GMT-格林尼治标准时

2. UTC-协调世时

3. 中国标准时间

   ```
   JS中new date()直接输出便是以下格式:
   `Thu Feb 28 2019 17:11:43 GMT+0800`(中国标准时间)
   JS默认中国标准时间是 GMT时间.由于我们国家采用的是东八区时间,因此是GMT +0800
   ```

4. ISO8601 标准时间格式

   ```
   `2019-02-28T09:51:45.540Z`,其中T表示合并,Z表示UTC时间
   ```

5. 时间戳(timestamp)

   时间戳是指格林威治时间1970年01月01日00时00分00秒(北京时间1970年01月01日08时00分00秒)起至现在的总秒数。
   java的date默认精度是毫秒，也就是说生成的时间戳就是13位的，而像c++或者php生成的时间戳默认就是10位的，因为其精度是秒。

   问题1：为什么会生成13位的时间戳，13位的时间戳和10时间戳分别是怎么来的date默认精度是毫秒，也就是说生成的时间戳就是13位的，有的时间戳默认就是10位的，因为其精度是秒。

   问题2：13位时间戳（毫秒）如何转换成10位时间戳（秒）
   第一种：通过substring方法，将13位的时间戳最后三位数字截取
   第二种：将13位时间戳除以1000取整。

   问题3：10位时间戳（秒） * 1000 就可换成13位时间戳（毫秒）

   ```js
   北京时间：2021-11-18 22:14:24
   时间戳：1637244864707 （毫秒） Math.round(new Date())
   时间戳：1637244864 （秒）      Math.round(new Date() / 1000)
   单位转换：1637244864 * 1000
   ```

   

