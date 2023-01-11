---
title: vueUse
date: 2023-01-06
categories:
  - frame
tags:
  - vueUse
---

## vueUse 官网

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

 let time = new Date() //现在时间返回中国标准时间格式：Wed Jan112023 14:41:53 GMT+0800 (中国标准时间) 
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

   时间戳是指格林威治时间 1970 年 01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数。
   java 的 date 默认精度是毫秒，也就是说生成的时间戳就是 13 位的，而像 c++或者 php 生成的时间戳默认就是 10 位的，因为其精度是秒。

   问题 1：为什么会生成 13 位的时间戳，13 位的时间戳和 10 时间戳分别是怎么来的？

    date 默认精度是毫秒，也就是说生成的时间戳就是 13 位的，有的时间戳默认就是 10 位的，因为其精度是秒。

   问题 2：13 位时间戳（毫秒）如何转换成 10 位时间戳（秒）
   第一种：通过 substring 方法，将 13 位的时间戳最后三位数字截取
   第二种：将 13 位时间戳除以 1000 取整。

   问题 3：10 位时间戳（秒） \* 1000 就可换成 13 位时间戳（毫秒）

```js
   北京时间：2021-11-18 22:14:24
   时间戳：1637244864707 （毫秒） Math.round(new Date())
   时间戳：1637244864 （秒）      Math.round(new Date() / 1000)
```
