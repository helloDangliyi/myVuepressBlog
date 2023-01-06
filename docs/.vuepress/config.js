module.exports = {
  theme: 'reco', //主题的使用
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  title: 'Dang',
  description: 'Welcome',//首页文档描述
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/head.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/myVuepressBlog/', // 这是部署到github仓库的名称相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  plugins: [
    ['cursor-effects', { 
      size: 2, // size of the particle, default: 2
      shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }],
    ['dynamic-title', {
      showIcon: '/head.png',
      showText: '客官欢迎回来~',
      hideIcon: '/head.png',
      hideText: '客官不要走嘛~',
      recoverTime: 2000,
   }],
   ['one-click-copy', {
    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
    copyMessage: '复制成功!', // default is 'Copied successfully!'
    toolTipMessage: '复制', // default is ''Copy to clipboard'
    duration: 2000, // prompt message display time
  }]
  ],
  themeConfig: {
    // codeTheme: 'tomorrow',
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // 导航栏配置
    nav: [ 
      { text: '首页', link: '/',icon: 'reco-home' },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date"
      },
      { 
        text: 'project', 
        icon: 'reco-blog',
        items:[
          {text: 'myVuepress',link: '/project/myVuepress/',},
          {text: 'bal',link: '/project/bal/引入svg/',}
        ]
      },
      {
        text: 'skill',
        icon: 'reco-blog',
        items: [
          { text: 'css', link: '/skill/css/'},
          { text: 'vue2', link: '/skill/frame/vue2/'},
          { text: 'vue3', link: '/skill/frame/vue3/setup语法糖'},
        ]
      },
    ],
    sidebar: {
      '/project/bal/' : [
        '引入svg',
        '引入sass'
      ],
      '/skill/frame/vue3/': [
        'setup语法糖',
        'setup语法糖copy'
      ],
    },
    logo: '/head.png',//导航栏左侧头像
    authorAvatar: '/head.png',//首页右侧信息栏头像
    type: "blog",
    // 标签
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/recoluan' },
        { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
      ]
    },
    // sidebar: 'auto', // 侧边栏配置
    // sidebarDepth: 2, // 侧边栏显示2级
    // 备案
    record: 'author dang',
    // recordLink: 'ICP 备案指向链接',
    // cyberSecurityRecord: '公安部备案文案',
    // cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间，只填写年份
    // startYear: '2023'，
    "lastUpdated": "Last Updated", //文章最近的更新时间
  }
}