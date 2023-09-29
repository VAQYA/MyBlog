---
title: Postman
date: 2020-10-01
tags: tag1
categories: 软件工具
---

## Get

## Post
Post中形参为(DetectRecordQuery query),query有一个属性type，没有注解，则入参以form-data形式传入，key=type,value=1


## @RequestParam  请求参数 （Get,Post都可以用）
```
对应 Body-->form-data中的key、value

form-data中的参数会在HttpServletRequest  

required 表示是否必须，默认为 true，必须
defaultValue 可设置请求参数的默认值
value 为接收url的参数名（相当于key值）

```
## @RequestBody  请求体 （用在Post)
```
media type: application/json

对应 raw-->JSON 里写Json数据

```

## @PathVariable  路径变量 Get,Post都可以用）
参数值{id}拼接在路径上






apizza863592923

## 入参
入参为`List<String> code`或`String[] code`
当传入`code = "a,b,c"`时，会自动转换为数组，xml中可以直接用`<foreach>`标签



### application/x-www-form-urlencoded

前端：taskDetailIdList:{"a","b"} 后台：
前端：taskDetailIdList[0]@RequestParam("taskDetailIdList") Long[] taskDetailIdList