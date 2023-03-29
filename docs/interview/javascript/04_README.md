---
title: javascript的方法
date: 2023-3-6
categories:
  - interview
tags:
  - javascript
---

```javascript
/**
 * 解构对象给另一个对象
 * @param {Oject} obj 赋值对象
 * @param {Oject} data 解构对象
 * @param {Array} arr 解构参数
 */
const parseObj = (obj, data, arr) => {
  arr.forEach(item => {
    data[item] ? obj[item] = data[item] : ''
  })
}
```

```javascript
/**
 * 下载文件
 * @param {String} api 接口
 * @param {Object} params 请求参数
 *
 * @param {String} fileName 文件名
 */
const downloadFile = function(api, params, fileName, type = 'get', callback) {
  this.$store.state.fullscreenLoading = true
  axios({
    method: type,
    url: api,
    responseType: 'blob', // 接收返回的类型
    params: params
  }).then((res) => {
    const str = res.headers['content-disposition']
    if (!res || !str) {
      return
    }
    let suffix = ''
    // 截取文件名和文件类型
    if (str.lastIndexOf('.')) {
      fileName ? '' : fileName = decodeURI(str.substring(str.indexOf('=') + 1, str.lastIndexOf('.')))
      suffix = str.substring(str.lastIndexOf('.'), str.length)
    }
    //  如果支持微软的文件下载方式(ie10+浏览器)
    if (window.navigator.msSaveBlob) {
      try {
        const blobObject = new Blob([res.data])
        window.navigator.msSaveBlob(blobObject, fileName + suffix)
      } catch (e) {
        console.log(e)
      }
    } else {
      //  其他浏览器
      const url = window.URL.createObjectURL(res.data)
      const link = document.createElement('a')
      link.style.display = 'none'
      link.href = url
      link.setAttribute('download', fileName + suffix)
      document.body.appendChild(link)
      link.click()
    }
    this.$store.state.fullscreenLoading = false
    callback && callback()
  }).catch((err) => {
    console.log(err.message)
    this.$store.state.fullscreenLoading = false
  })
}
```

```javascript
/**
 * 防抖函数
 * @param {function} fn 函数
 * @param {number} delay 延迟
 */
const debounce = function(fn, delay = 500) {
  let timeout = null // 创建一个标记用来存放定时器的返回值
  return function() {
    clearTimeout(timeout) // 每当用户输入的时候把前一个 setTimeout clear 掉
    timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
      fn.apply(this, arguments)
    }, delay)
  }
}

```

```javascript
/**
 * 节流函数
 * @param {function} fn 函数
 * @param {number} delay 延迟
 */
const throttle = function(fn, delay = 500) {
  let canRun = true // 通过闭包保存一个标记
  return function() {
    if (!canRun) return // 在函数开头判断标记是否为true，不为true则return
    canRun = false // 立即设置为false
    setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
      fn.apply(this, arguments)
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
      canRun = true
    }, delay)
  }
}
```

