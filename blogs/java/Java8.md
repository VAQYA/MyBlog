---
title: Java8
date: 2020-10-01
tags: tag1
categories: Java
---

## Java8


### JDK1.8对hash算法的优化
低16位融合了高16位和低16位的特征，避免了hash冲突

`(h = key.hashCode()) ^ (h >>> 16);`
hash值先右移16位，在同原值异或

### JDK1.8对寻址算法的优化
与运算替代取模，提升性能
之前是对数组长度取模 hash%length ，改为hash&(length-1)要求数组长度length是2的n次方
HashMap 默认的长度一定是 2 的指数幂，所以这一个等式 hash%length = hash&(length-1) 针对 HashMap 是永远成立的

### jdk1.8新特性
1. Lambda表达式，允许像对象一样传递匿名函数
2. Stream API,充分利用多核CPU，可以写出更简洁的代码
3. Date和Time API，使日期、时间更稳定、简单。
4. 接口中可以有普通方法和静态方法，普通方法必须由default修饰，静态方法必须有方法体
5. 重复注释，可以在一个类中多次使用同一个注释

### 变量
lambda表达式只能引用标记了final的外层局部变量，即不能lambda内部修改局部变量

### 双冒号
1. 类名::静态方法
2. 对象::实例方法
3. 类名::new

后面没()

### Optional
```
Student stu1 = null;
Student stu2 = new Student();
stu2.setId("123");

static<T> Optional<T>	ofNullable(T value); 	//value为空时则返回一个空的Optional实例，否则返回包含了value的Optional实例 

 T orElse(T other);	//返回值如果存在则返回，否则返回other 

Optional<Student> optionalA = Optional.ofNullable(stu1);
Student student = optionalA.orElse(stu2);  //如果stu1不为空则返回，否则返回stu2。


 public Optional<T> filter(Predicate<? super T> predicate);	//括号内方法必须返回boolea类型，结果为true则返回该optional对象，否则返回一个空optional对象 
  void	ifPresent(Consumer<? super T> consumer);	//如果存在值，则调用指定的逻辑，否则不做任何操作

Optional<Student> optionalB = Optional.ofNullable(stu2);
optionalB.filter(a->a.getId().equals("123")).ifPresent(o->{
	System.out.println(o.getId());
});


public <U> Optional<U> map(Function<? super T,? extends U> mapper);	//经过一系列操作，返回 U  
public <U> Optional<U> flatMap(Function<? super T,Optional<U>> mapper);	//经过一系列操作，返回Optional<U>   

optionalB.map(b->{
	b.setId("111");
	return b;
});
optionalB.flatMap(b->{
	b.setId("111");
	return Optional.ofNullable(b);
});


* static<T> Optional<T> empty();	//返回一个空的 Optional实例   
* T get();	//如果 Optional中有一个值，返回值，否则抛出 NoSuchElementException   
* public static <T> Optional<T> of(T value);	//返回具有 Optional的当前非空值的Optional,如果值为null，则NullPointerException
```

### Stream


### 初始化List
```
List<String> colors = Stream.of("blue", "red", "yellow").collect(java.util.stream.Collectors.toList());
```

### 
```
        List<String> userIds = Stream.of(byId.getFromUserId(), byId.getToUserId()).collect(toList());
        List<SysUser> userList = sysUserService.listByUserIds(userIds);
        Map<String, String> hashMap = userList.stream().collect(toMap(SysUser::getUserId, SysUser::getLoginId));
        String fromLoginId = hashMap.get(byId.getFromUserId());
        String toLoginId = hashMap.get(byId.getToUserId());
```


### 
```
Optional.ofNullable(list).orElse(new ArrayList<>()).forEach

```


























