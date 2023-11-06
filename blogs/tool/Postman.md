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

对应 Body-->form-data中的key、value

form-data中的参数会在HttpServletRequest  

```
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


### request转map
```
import java.util.HashMap;
import java.util.Map;

public Map<String, Object> convertParameterMap(HttpServletRequest request) {
    Map<String, String[]> parameterMap = request.getParameterMap();
    Map<String, Object> convertedMap = new HashMap<>();

    for (Map.Entry<String, String[]> entry : parameterMap.entrySet()) {
        String key = entry.getKey();
        String[] values = entry.getValue();

        if (values.length == 1) {
            // If there's only one value for the parameter, store it as an Object
            convertedMap.put(key, (Object) values[0]);
        } else {
            // If there are multiple values for the parameter, store them as an array of Objects
            Object[] objects = new Object[values.length];
            for (int i = 0; i < values.length; i++) {
                objects[i] = (Object) values[i];
            }
            convertedMap.put(key, objects);
        }
    }

    return convertedMap;
}

```