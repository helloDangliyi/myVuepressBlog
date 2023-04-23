---
title: JS-WEB-API
date: 2023-4-14
categories:
  - interview
tags:
  - javascript
---

## 事件绑定、事件冒泡、事件代理

1. 事件代理，即事件委托。**事件代理就是利用事件冒泡或者事件捕获的机制把一系列的内层元素事件绑定到外层元素上。**

## 同源策略

- ajax请求时，浏览器要求当前网页和server必须同源（安全）
- 同源：协议、域名、端口，三者必须一致

## 加载图片css js可无视同源策略

## 跨域

- 所有跨域，都必须经过server端允许和配合
- 未经server端允许就实现跨域，说明浏览器有漏洞，危险信号

1. **JSONP解决跨域**

   - <script>可绕过跨域限制

   - 服务器可以任意动态拼接数据返回

   - 所以，<script> 就可以获得跨域的数据，只要服务端愿意返回


## 手写简易ajax

```javascript
// 手写一个简易的ajax
function ajax(url){
    const p = new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open('GET',url,true)
        xhr.onreadystatechange= function () {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(
                        JSON.parse(xhr.responseText)
                    )
                }else if(xhr.status === 404) {
                    reject(new Error('404 not found'))
                }
            }
        }

        xhr.send(null)
    })
    
    return p 
}

const url = '/data/jsonp.js'
ajax(url).then(res=>{
    console.log('res: ', res);
}).catch(err=>{
    console.log('err: ', err);
})
```

## cookie、localStorage、sessionStorage

1. cookie缺点
   - 存储大小，最大4KB
   - http请求时需要发送到服务端，增加请求数据量
   - 只能用document.cookie = ' ... '来修改，太过简陋
2. localStorage、sessionStorage
   - HTML5专门为存储而设计，最大可设计5M
   - API简单易用setItem 、getItem
   - 不会随着http请求被发送出去
3. localStorage数据会永久存储，除非代码或手动删除
4. sessionStorage数据只存在于当前会话，浏览器关闭则清空

**三者区别：**

- 容量
- API易用性
- 是否会跟着http请求发送出去

## 获取当前页面 url 参数

```javascript
// const url = 'https://www.xxx.com/path/index.html?a=100&b=200&c=300#anchor'
function query(name) {
    const search = location.search.substr(1) // 去掉前面的 `?`
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
    const res = search.match(reg)
    if (res === null) {
        return null
    }
    return decodeURIComponent(res[2])
}
console.log( query('a') )// 100
console.log( query('c') )//300
```

新的 API `URLSearchParams`

```javascript
function query(name) {
    const pList = new URLSearchParams(location.search)
    renturn pList.get(name)    
}
```

