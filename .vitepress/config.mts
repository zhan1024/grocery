import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";	// 改成自己的路径
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/grocery/",
  title: "ipei",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: "目录",
    outline: 'deep',
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '前端', items: [
          { text: 'Vue', link: '/vue-demo' },
          { text: 'React', link: '/react-demo' },
          { text: '小程序', link: '/wechat-demo' },
        ]
      },
      { text: '设计模式', link: '/designMode' },
      { text: 'Home', link: '/' },
      { text: '语雀', link: 'https://www.yuque.com/zhanwh/adc8xc/tus9046c6qx0yxc4?singleDoc# 《每日一题》' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: 'Vue', link: '/markdown-examples' },
          { text: 'React', link: '/react-demo' },
          { text: '小程序', link: '/wechat-demo' },
          { text: '原生Js', link: '/original' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhan1024/grocery' }
    ],
    footer: {
      copyright: "@2024-xiaozhan.com"
    }
  }
})
