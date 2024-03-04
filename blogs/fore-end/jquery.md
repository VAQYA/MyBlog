---
title: jQuery
date: 2020-10-01
tags: tag1
categories: 前端相关
---


1、通过id查找：<div id=”abc”>
var div=$(‘#abc’)    
2、通过tag查找：var ps = $(‘p’) 查找所有<p>的结点
3、通过class查找：var ps=$(“.red”)返回所有class包含red的结点
多个class，则var ps=$( ‘.red.blue’)
4、通过属性查找：  var email = $(‘[name=email]’)
var password = $(‘[type=password]’)
按属性前缀查找：var email = $(‘[name^=ema]’)
按属性后缀查找：var password = $(‘[type$=word]’)
5、组合查找： ① <input name=”email”>
var emailInput = $(‘input[name=email]’) 
② <p class=”red”>
var ps = $(‘p.red’)
6、多项选择器：
① $(’p,div’)  查找<p> 和<div>标签
② $(‘p.red,div.green’) 查找<p class=”red” > 和<div class=”green”>
7、查找
 在当前结点的子节点中查找 find( )
 在当前结点开始向上查找 parent( )
 当前结点的上一个元素 next（）、下一个元素prev（）
 8、过滤
 filter( ‘.red’) 只保留符合类是red的结点




Ajax的核心是通过XMLHttpRequest对象，使网页与服务器进行通信，获取非本页的内容，用于异步请求；Jsonp核心是动态添加&lt;script&gt;标签调用服务器提供的js脚本，用于跨域请求。Ajax也可以通过服务器代理解决跨域问题。

> jQery对Ajax异步进行了封装，几种常用的方式：$.ajax , $.post , $.get , $.getJSON
````

$.ajax({
    //常用的参数
	method //数据的提交方式，get或post
	url //数据的提交路径
	async //是否支持异步，默认true
	data //需要提交的数据
	dataType //服务器返回数据的类型，可指定HTML、xml、json、text
	success : function(){} //请求成功后的回调函数
	error : functin(){} //请求失败后的回调函数
});

$.post({
    contentType //发送post请求的格式，可指定text/plain,application/json 
})

````
> 
$(document).ready(function(){
    console.log("hello");
});
等同于
$(function()){
    console.log("hello");
});

````
bootstrapValidator插件API,使用前导入js文件bootstrapValidator.min.js

//获取当前表单的验证状态
var flag = $(formName).data("bootstrapValitor").isValid();

//触发全部验证
$(formName).data('bootstrapValidator').validate();

//触发指定字段的验证
$(formName).data(“bootstrapValidator”).validateField('fieldName');

//重置表单所有验证规则
$(formName).data("bootstrapValidator").resetForm();

````
JavaScript中数组的push方法，向数组的末尾添加一个或多个元素，并返回新的长度。

[jQuery中$.each()方法的使用](https://www.cnblogs.com/zhaixr/p/7069857.html)

























