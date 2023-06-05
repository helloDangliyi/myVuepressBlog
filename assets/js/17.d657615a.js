(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{407:function(t,v,_){t.exports=_.p+"assets/img/bg7.4a1099b4.jpg"},445:function(t,v,_){"use strict";_.r(v);var s=_(2),a=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"状态码分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#状态码分类"}},[t._v("#")]),t._v(" 状态码分类")]),t._v(" "),v("ol",[v("li",[t._v("1XX服务器收到请求")]),t._v(" "),v("li",[t._v("2XX请求成功，如200")]),t._v(" "),v("li",[t._v("3XX重定向，如302")]),t._v(" "),v("li",[t._v("4XX客户端错误，如404，地址不存在等")]),t._v(" "),v("li",[t._v("5XX服务端错误，如500")])]),t._v(" "),v("h2",{attrs:{id:"常见状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见状态码"}},[t._v("#")]),t._v(" 常见状态码")]),t._v(" "),v("ul",[v("li",[t._v("200  请求成功")]),t._v(" "),v("li",[t._v("301 永久重定向 （配合location，浏览器自动处理）")]),t._v(" "),v("li",[t._v("302 临时重定向  （配合location，浏览器自动处理）")]),t._v(" "),v("li",[t._v("304资源未被修改")]),t._v(" "),v("li",[t._v("404 资源未找到，发送了一个后端没有的网址")]),t._v(" "),v("li",[t._v("403 没有权限，没有登录就去寻找用户信息")]),t._v(" "),v("li",[t._v("500 服务器错误")]),t._v(" "),v("li",[t._v("504网关超时")])]),t._v(" "),v("h2",{attrs:{id:"restful-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#restful-api"}},[t._v("#")]),t._v(" Restful API")]),t._v(" "),v("ul",[v("li",[t._v("一种新的API设计方法（早已推广使用）")]),t._v(" "),v("li",[t._v("传统API设计：把每个url当作一个功能")]),t._v(" "),v("li",[v("strong",[t._v("Restful API设计：把每个url当作一个唯一的资源")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("如何设计成一个资源？")]),t._v(" "),v("ul",[v("li",[t._v("尽量不用url参数\n"),v("ol",[v("li",[t._v("传统API设计：/api/list?pageIndex= 2")]),t._v(" "),v("li",[t._v("Restful API设计：/api/list/2")])])]),t._v(" "),v("li",[t._v("用method 表示操作类型(就是让接口地址加上对应的功能，可以让开发者看到这个地址是什么功能)\n"),v("ol",[v("li",[t._v("post 请求   /api/create-blog")]),t._v(" "),v("li",[t._v("patch 请求   /api/update-blog?id=100")]),t._v(" "),v("li",[t._v("get请求    /api/get-blog?id = 100")])])])])])])])]),t._v(" "),v("h2",{attrs:{id:"http-headers"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-headers"}},[t._v("#")]),t._v(" http headers")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("Request Headers")])]),t._v(" "),v("li",[v("p",[t._v("Response Headers")])]),t._v(" "),v("li",[v("p",[t._v("自定义header")]),t._v(" "),v("p",[t._v("以下面的格式显示在请求头：")]),t._v(" "),v("div",{staticClass:"language-javascript line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-javascript"}},[v("code",[v("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("headers")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'X-Requested-width'")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'XMLHttpRequest'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])])])]),t._v(" "),v("h2",{attrs:{id:"http缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http缓存"}},[t._v("#")]),t._v(" http缓存")]),t._v(" "),v("ol",[v("li",[t._v("关于缓存的介绍")])]),t._v(" "),v("ul",[v("li",[t._v("静态资源（jss  css  img） 可以被缓存")])]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[v("p",[t._v("http缓存策略（强制缓存+协商缓存）")]),t._v(" "),v("p",[v("strong",[t._v("强制缓存：")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("缓存可能会过期，会重新请求")])]),t._v(" "),v("li",[v("p",[t._v("Cache-Control")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("存在Response Headers中")])]),t._v(" "),v("li",[v("p",[t._v("控制强制缓存的逻辑")])]),t._v(" "),v("li",[v("p",[t._v("例如 Cache-Control：max-age = 31536000（单位是秒）")])])])])]),t._v(" "),v("p",[v("strong",[t._v("协商缓存：")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("服务器端缓存策略")]),t._v(" "),v("p",[t._v("服务器端判断这个资源是否可以用缓存的内容")])]),t._v(" "),v("li",[v("p",[t._v("服务器判断客户端资源，是否和服务端资源一样")])]),t._v(" "),v("li",[v("p",[t._v("一致则返回304（代表资源未被修改），否则返回200和最新的资源")])])]),t._v(" "),v("p",[v("img",{attrs:{src:_(407),alt:""}})])]),t._v(" "),v("li",[v("p",[t._v("刷新操作方式，对缓存的影响")]),t._v(" "),v("p",[t._v("三种操作")]),t._v(" "),v("ul",[v("li",[t._v("正常操作：地址栏输入 url ，点击链接，前进后退等")]),t._v(" "),v("li",[t._v("手动刷新：F5 或者点击刷新按钮")]),t._v(" "),v("li",[t._v("强制刷新：ctrl + F5")])]),t._v(" "),v("p",[t._v("对应的缓存策略")]),t._v(" "),v("ul",[v("li",[t._v("正常操作：强制缓存有效，协商缓存有效")]),t._v(" "),v("li",[t._v("手动刷新：强制缓存"),v("em",[t._v("失效")]),t._v("，协商缓存有效")]),t._v(" "),v("li",[t._v("强制刷新，强制缓存"),v("em",[t._v("失效")]),t._v("，协商缓存"),v("em",[t._v("失效")])])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);