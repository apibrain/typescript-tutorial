import { defineConfig } from 'vitepress';
import type { DefaultTheme } from 'vitepress';

const sidebars = ():DefaultTheme.SidebarItem[] => [
  {
    text: "目录",
    collapsed: false,
    items: [
      { text: "简介", link: "/docs/intro" },
      { text: "基本用法", link: "/docs/basic" },
      { text: "any 类型", link: "/docs/any" },
      { text: "类型系统", link: "/docs/types" },
      { text: "数组", link: "/docs/array" },
      { text: "元组", link: "/docs/tuple" },
      { text: "symbol 类型", link: "/docs/symbol" },
      { text: "函数", link: "/docs/function" },
      { text: "对象", link: "/docs/object" },
      { text: "interface", link: "/docs/interface" },
      { text: "类", link: "/docs/class" },
      { text: "泛型", link: "/docs/generics" },
      { text: "Enum 类型", link: "/docs/enum" },
      { text: "类型断言", link: "/docs/assert" },
      { text: "模块", link: "/docs/module" },
      { text: "namespace", link: "/docs/namespace" },
      { text: "装饰器", link: "/docs/decorator" },
      { text: "装饰器（旧语法）", link: "/docs/decorator-legacy" },
      { text: "declare 关键字", link: "/docs/declare" },
      { text: "d.ts 类型声明文件", link: "/docs/d.ts" },
      { text: "类型运算符", link: "/docs/operator" },
      { text: "类型映射", link: "/docs/mapping" },
      { text: "类型工具", link: "/docs/utility" },
      { text: "注释指令", link: "/docs/comment" },
      { text: "tsconfig.json 文件", link: "/docs/tsconfig.json" },
      { text: "tsc 命令", link: "/docs/tsc" }
    ]
  }
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-Hans",
  title: "TypeScript 简明教程",
  description: "本教程是面向初学者的 Typescript 教程。本教程由浅及深地讲述了 Typescript 这门语言的用法，是一本不可多得的技术类教程。",
  cleanUrls: true,

  head: [
    ["link", {
      rel: "shortcut icon",
      href: "/favicon.png",
      type: "image/png"
    }]
  ],

  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark"
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/ts-logo-small.png",

    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: '/docs/intro' }
    ],

    search: {
      provider: "local",
      options: {
        // 似乎没起作用 😄
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    sidebar: sidebars(),

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    // 似乎没有起作用 😄
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    footer: {
      message: '<strong>TypeScript 简明教程</strong> | Powered by VitePress',
      copyright: `版权所有 &copy; ${new Date().getFullYear()} 阮一峰`
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/apibrain/typescript-tutorial' }
    ]
  }
})
