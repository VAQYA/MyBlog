---
title: require.js 
date: 2020-10-01
tags: tag1  
categories: 前端相关
---
## 功能 
1. 会按需加载需要的js，不至于进入首页时加载过慢；  
2. 会先加载完引用的js后再使用，防止了引用外部js时加载太慢而阻塞页面渲染

## 使用 
```js
// 加载本地a.js
require(["js/a"],function(){
    alert("load finished");
});
```
==第一个参数是个数组，就算只加载a.js这一个模块，也要放在数组里，不能写.js后缀==；第二个参数是个函数，非必填。  



加载网络js时，需要用到require.config，paths可以对js重命名
```js
require.config({
    paths : {
        "bdQuery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"]   
    }
})
require(["bdQuery","js/a"],function($){
    $(function(){
        alert("load finished");  
    })
})
```
全局配置：  
`<script data-main="js/main" src="js/require.js"></script>`

引入非AMD规范的模块：  用shim