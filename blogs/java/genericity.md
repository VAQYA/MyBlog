---
title: 泛型
date: 2020-10-01
tags: tag2
categories: Java
---
## 泛型
```
List<E> 读作E的列表
不确定或不关心实际的类型参数，可用？代替

可用在类、接口、方法中，称为泛型类、泛型接口、泛型方法  
```
### 类型擦除
```
泛型是在编译器层次上实现的，编译器会去掉这个类型参数，生成的字节码中不包含泛型中的类型信息，这个过程就是类型擦除
eg: List<String>和List<Integer>编译后都会变成List
```
### 常用通配符
```
？ 表示不确定
T 表示具体的一个Java类型
K,V 表示键值对
E 表示 Element
```
### 只能extends(继承)泛型接口 
```
eg: public interface UserService extends IService<User>
```