---
title: Thymeleaf
date: 2020-10-01
tags: tag1
categories: 前端相关
---

可以不需要服务器的支持，能够以HTML的方式打开

## 后台操作

### Spring boot依赖  
```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-thymeleaf</artifactId>	
</dependency>
```

### thymeleaf 配置
```
spring.thymeleaf.mode=HTML5
spring.thymeleaf.encoding=UTF-8
spring.thymeleaf.content-type=text/html
```
##### 缓存设置为false, 这样修改之后马上生效，便于调试
```
spring.thymeleaf.cache=false
```
##### 上下文(项目路径名称)
```
server.context-path=/thymeleaf  
```

## 前端操作

### 声明当前文件是Thymeleaf  
```html
<html xmlns:th="http://www.thymeleaf.org">  
```

### @  
@方式引入，在渲染后的HTML里会自动生成上下文路径  
```html
//引入CSS 
<link rel="stylesheet" type="text/css" media="all"  th:href="@{/static/css/style.css}"/>

//引入js
<script type="text/javascript"  th:src="@{/static/js/thymeleaf.js}"></script>
```
