import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar:[
      {
        text: '测试',
        link: './'
      }
    ]
  }),
  lang:'zh-CN',
  title: '你好，VuePress',
  description: '这是我第一个VuePress站点',
})
