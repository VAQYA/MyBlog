---
title: VuePress
date: 2020-10-01
tags: tag1
categories: 前端相关
---

## npm 方式

## init
npm install @vuepress-reco/theme-cli -g
theme-cli init my-blog

## install
cd my-blog
npm install

## run
npm run dev

## build
npm run build

build时，当前的Node.js版本可能不支持，建议用  
Nodejs: 14.16.0  
vuepress: 1.8.2  
vuepress-theme-reco: 1.6.10  


当用git管理有.git文件夹时，再npm run build，插件`"vuepress-plugin-sitemap": "^2.3.1"`会报错


## 规范
```
1. 分类的名称可以随意起名，没必要一定有此文件夹名
2. 文件夹名称不能是中文名
3. 注意博客内容中出现的 <>、[]可能会导致编译报错
4. 文件和文件夹名不能为中文、不能有空格
5. 头部冒号后面有空格，如categories: 前端相关
```













