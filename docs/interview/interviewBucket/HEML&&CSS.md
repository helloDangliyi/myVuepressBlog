---
title: HEML&& CSS
date: 2023-4-12
categories:
  - interview
tags:
  - html
---



## HTML

1. offsetWidth = (内容宽度 + 内边距 + 边框)，无外边距

2. margin-top和margin-bottom 在纵向会重叠，而且以最大的数字为间隔

3. 空白的标签会重叠

4. margin负值问题

   - margin-top和margin-left 负值，元素向上、向左移动

   - margin-right 负值，右侧元素左移，自身不受影响

   - margin-bottom 负值，下方元素上移，自身不受影响

     ```
     <!-- css 样式:使用了margin-top;margin-left -->
     <style rel="stylesheet" type="text/css">
     .div {
         position:absolute;
         top:50%;
         left:50%;
         width:200px;
         height: 200px;
         margin-top: -100px;
         margin-left: -100px;
         /*margin-left: -100px 0 0 -100px;*/
         background:red;
     }
     </style>
     <!-- html 结构 -->
     <div class="div">margin: -100px;元素垂直居中</div>
     ```
   
5. `float`布局

   - 如何实现圣杯布局和双飞翼布局

     ```
     ...
     ```

     

   - 手写`clearfix`

     ```css
     /* 给父元素添加类，来清除浮动 */
     .clearfix::after{
       content:'';
       display:table;
       clear:both;
     }
     ```

     

6. flex布局

    ...

7. css-定位

    - absolute 和relative 分别依据什么定位？

      relative 根据自身定位

      absolute  最近一层的定位元素定位，定位元素指：absolute ，relative，fixed，body

    - 居中对齐有哪些实现方式？

      1. 水平居中
         -  inline元素：text-align:center
         - block元素：margin:auto 已知盒子宽度
         - absolue元素：left: 50% + margin-left 负值      已知盒子宽度
      2. 垂直居中
         - inline元素：line-heighe的值等于height的值
         - absolue元素：top: 50% + margin-top 负值      已知盒子高度
         - absolue元素：letf: 50% ，top:50% + transform: translate( -50%,-50%)
         - absolue元素：top,left,right,bottom=0 + margin:auto


8. rem 是，相对长度单位，相对于根元素，常用于响应式布局

   ```css
   <style>
   html {
   font-size: 100px；
   }
   
   div {
   font-size:0.1rem;// 根据html的 100px *0.1 = 10px
   }
   </style>
   ```

   

9. 手机网页视口尺寸

   - ```javascript
     window.screen.height //屏幕高度
     ```

   - ```javascript
     window.innerHeight  //网页视口高度 vh:网页视口高度的1/100;vw:网页视口高度的1/100
     ```

   - ```javascript
     document.body.clientHeight //body高度
     ```


















