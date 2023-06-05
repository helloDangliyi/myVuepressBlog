(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{427:function(t,s,e){t.exports=e.p+"assets/img/bg5.aca16073.png"},428:function(t,s,e){t.exports=e.p+"assets/img/bg7.148c9d10.png"},480:function(t,s,e){"use strict";e.r(s);var n=e(2),a=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[t._v("#")]),t._v(" 打包")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("main.ts")]),t._v("中组件库的引入方式改为:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import mUI from './components/index'\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("router/index.ts")]),t._v("中，路由模式改为哈希路由")]),t._v(" "),s("div",{staticClass:"language-typescript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createWebHashHistory "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-router'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRouter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    routes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    history"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWebHashHistory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("执行命令"),s("code",[t._v("npm run build")]),t._v(",对整个Vue项目进行打包，而不是像执行"),s("code",[t._v("npm run lib")]),t._v("那样打包成一个库")])])]),t._v(" "),s("h2",{attrs:{id:"部署到github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署到github"}},[t._v("#")]),t._v(" 部署到github")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("新增一个"),s("code",[t._v("github")]),t._v("仓库")]),t._v(" "),s("p",[t._v("仓库名称：imooc-element-components-web")]),t._v(" "),s("p",[t._v("描述：imooc-element-components在线演示网站")])]),t._v(" "),s("li",[s("p",[t._v("复制"),s("code",[t._v("dist")]),t._v("文件夹在桌面，分别为"),s("code",[t._v("dist")]),t._v("、"),s("code",[t._v("dist2")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("dist")]),t._v("文件上传到"),s("code",[t._v("github")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('git init\ngit add.\ngit commit -m "注释"\ngit branch -M main\ngit remote add origin git@github.com:helloDangliyi/imooc-element-components-web.git\ngit push -u origin main\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("刷新github就可以看见已经上传成功了。")])]),t._v(" "),s("li",[s("p",[t._v("配置静态页面")]),t._v(" "),s("p",[s("img",{attrs:{src:e(427),alt:"bg2"}})])]),t._v(" "),s("li",[s("p",[t._v("保存后就可以看见部署后的网址了。")])])]),t._v(" "),s("h2",{attrs:{id:"部署到码云"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署到码云"}},[t._v("#")]),t._v(" 部署到码云")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("新增一个码云仓库")]),t._v(" "),s("p",[t._v("仓库名称：imooc-element-components-web")]),t._v(" "),s("p",[t._v("描述：imooc-element-components在线演示网站")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("dist2")]),t._v("文件夹路径下")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('git init\ngit add.\ngit commit -m "注释"\ngit remote add origin https://gitee.com/DDangdang/imooc-element-components-web.git\ngit push -u origin "master"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("可以在服务中使用gieetPages")]),t._v(" "),s("p",[s("img",{attrs:{src:e(428),alt:"bg2"}})])]),t._v(" "),s("li",[s("p",[t._v("保存后就可以出现一个网站地址。")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);