---
title: 前端基础
date: 2020-10-01
tags: tag1
categories: 前端相关
---

## 浏览器的页面渲染
最终跑在浏览器中的代码，一次页面渲染的过程，会解析三种文件
1. 解析HTML/SVG/XHTML，生成一个DOM结构树；
2. 解析CSS文件，生成一个CSS规则树；  
3. 解析js文件，通过DOM API和CSS API来操作DOM结构树和CSS规则树。

- 浏览器本身不会执行js代码，是通过内置的JavaScript引擎（解释器）来执行，逐行解释然后由计算机去执行  
- CSS 规则树与 DOM 结构树结合，最终生成一个 Render 树（即最终呈现的页面，例如其中会移除 DOM 结构树中匹配到 CSS 里面display:none的 DOM 节点）  


## 单页应用
共用js、css；  
页面局部刷新或更改；  
www.vaq.com/#/index.html（如果VueRouter的model设置为history，则连接是www.vaq.com/#/index.html）  
容易实现页面跳转动画；  
数据传递容易；  
不利于seo

## 多页应用
不公用js、css；  
整页刷新  
www.vaq.com/index.html    
无法实现页面跳转动画；  
依赖url、cookie、localStorage等;  
seo实现简单    

## 浏览器输入一个url，一次完整的请求是什么？
1. 域名解析（DNS的寻址过程）  
2. 发起TCP的 3 次握手  
3. 建立TCP连接后发起http请求  
4. 服务器响应http请求，浏览器得到html代码  
5. 浏览器解析html代码，并请求 html 代码中的资源（如js、css、图片等，此处可能涉及HTTP缓存）  
6. 浏览器对页面进行渲染呈现给用户（浏览器的渲染原理）  

