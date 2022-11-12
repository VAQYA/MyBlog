---
title: 开发规范
date: 2020-10-01
tags: tag1
categories: Java
---
### 常量 

缓存相关的常量放在CacheConsts类下，系统配置相关常量放在ConfigConsts下

### 静态变量、静态方法

直接用类名调用，不要用对象调用。 

### 判空
Collection的实现类调用了addAll方法后，下次使用要对集合判空

### 工具类Arrays
Arrays.asList()把数组转成集合后，不能使用修改集合相关的方法。

### 泛型通配符
< ? extends T> 接收数据时，此集合(即? )不要用add 方法
< ? super T> 接收数据时，此集合(即？)不要用get方法

### 泛型赋值
无泛型限制定义的集合赋值给泛型限制的集合时，要进行instanceof判断，避免ClassCastException异常

### 遍历
不要在for循环中进行remove和add操作，要用iterator

### 集合去重
利用set集合的唯一性，转换为Set
Set<?> set = new HashSet<>(arrayList);