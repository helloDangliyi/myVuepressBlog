module.exports = {
  theme: 'reco', //主题的使用
  // \'s blog
  title: 'Dang',
  description: '嘿嘿',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/head.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    // 导航栏配置
    nav: [ 
      { text: '首页', link: '/' },
      { text: 'project', link: '/project/', icon: 'reco-date' },
      {
        text: 'skill',
        icon: 'reco-date',
        items: [
          { text: 'vue2', link: '/skill/frame/vue2/'},
          { text: 'vue3', link: '/skill/frame/vue3/'},
        ]
      },
    ],
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
    }
    // sidebar: 'auto', // 侧边栏配置
    // sidebarDepth: 2, // 侧边栏显示2级
  }
}