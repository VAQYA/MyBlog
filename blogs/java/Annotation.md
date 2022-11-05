---
title: 注释
date: 2020-10-01
tags: tag1
categories: Java
---

### 定义
通过@interface定义，比接口多个@
注： 注解并不是代码本身的一部分。
### 元注解
可以注解到注解上的注解，是一种基本注解，有5种。
1. @Retention 说明注解的存活时间
取值：
 RetentionPolicy.SOURCE ,只在源码阶段保留，在编译器编译时将被丢弃忽视。
 Retention.CLASS , 注解只被保留在编译进行的时候，不会被加载到JVM
 Retention.RUNTIME , 可以保留在程序运行的时候，会被加载到JVM，所以程序运行时可以获取到它们。

2. @Documented 将注解中的元素包含到javadoc中
3. @Target 用于指定注解可以运用的地方
取值：
ElementType.TYPE , 可以给类型注解，如类、接口、枚举
ElementType.FIELD , 给属性注解
ElementType.METHOD , 方法
ElementType.PARAMETER , 形参
ElementType.CONSTRUCTOR , 构造器
ElementType.LOCAL_VARIABLE , 局部变量
ElementType.ANNOTATION_TYPE , 表示可以给注解进行注解
ElementType.PAKAGE, 包
ElementType.TYPE_PARAMETER , 指定参数类型（1.8之后）
ElementType.TYPE_USE , (1.8之后）

4. @Inherited 继承
注解Test被@Inherited注解，类A被Test所注解，类B继承A，则也拥有Test这个注解

5. @Repeatable 可重复（1.8之后）
被它注解的注解可以同时取多个

### 注解的属性
即成员变量，注解没有方法


### 常用注解
@Deprecated 标志已过时的元素
@Override 提醒子类要重写父类的此方法
@SuppressWarnings 忽略编译警告 ，应在尽可能小的范围内使用它
@SafeVarargs 提醒开发者不要用参数做不安全的操作，它会阻止编译器产生unchecked 警告
@FunctionalInterface 函数式接口注解，表示一个仅有一个方法的接口 （1.8加入）
@JsonFormat主要是后台到前台的时间格式的转换
@DateTimeFormat主要是前端到后台的时间格式的转换  
```
	//入参
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private LocalDateTime startTime;
	
	// xml中是SQL语句，只判null不能判''，否则会报错
	<if test="startTime !=null ">
        AND create_time <![CDATA[>=]]> #{startTime}
    </if>
	
	
```

### 作用
1. 提供信息给编译器
2. 编译阶段时的处理，软件工具可以根据注解生成代码、HTML文档，或做其他处理
3. 可以在程序运行时接受代码的处理。如用反射



### @Service和@Bean

### @Qualifier("name1")
一个接口可能有多个实现类，多个实现类上都有@Service, @Qualifier("name1")表示指明调用@Service("name1")的这个，name1必须是已经定义过@Service("name1")注解的名称，或@Bean("name1")过的


## Lombok
@Accessors(chain=true)，链式访问，该注解设置chain=true，生成setter方法返回this（也就是返回的是对象），代替了默认的返回void。
```
	//开起chain=true后可以使用链式的set
	User user=new User().setAge(31).setName("pollyduan");//返回对象
```

@Accessors(fluent = true)，与chain=true类似，区别在于getter和setter不带set和get前缀。
```
	//fluent=true开启后默认chain=true，故这里也可以使用链式set
	User user=new User().age(31).name("pollyduan");//不需要写set
```

## 实体类字段上的@TableField

value = "station_code" ，表示对应的数据库字段，相当于在xml中开启驼峰映射  
condition = SqlCondition.LIKE ，where条件自定义规则
exist = false ，表示该属性不是数据库表存在的字段
fill = FieldFill.INSERT ，插入
fill = FieldFill.INSERT_UPDATE 插入或更新

```java
//使用fill自动填充时配置填充数据
@Component
public class MybatisPlusAutoFillConfig implements MetaObjectHandler {

    @Override
    public void insertFill(MetaObject metaObject) {
        setFieldValByName("createTime", LocalDateTime.now(), metaObject);
        setFieldValByName("updateTime", LocalDateTime.now(), metaObject);
    }

    @Override
    public void updateFill(MetaObject metaObject) {
        setFieldValByName("updateTime", LocalDateTime.now(), metaObject);
    }

}
```

## Springframework

@Cacheable  

















