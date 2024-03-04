---
title: 设计模式
date: 2020-10-01
tags: tag1
categories: Java
---
# 设计模式

## 工厂模式
属于创建型模式，提供了一种创建对象的最佳方式，实现不同的条件下创建不同的实例

## 抽象工厂模式
相当于超级工厂，用于创建其他工厂


## 单例模式

### 懒汉模式 ：使用的时候再进行初始化，延迟加载

1. 保证线程安全
2. 防止指令重排
3. 双重检查优化

```java
//声明对象的引用
private static volatile Singleton object;
//私有化构造器
private Singleton (){

}
//返回对象实例
public static Singleton getInstance(){
	if(object == null){
		synchronized(Singleton.class){
			if(object == null){
				object = new Singleton();
			}
		}
	}
	return object;
}

```
### 饿汉模式 ：线程安全

```java
//声明对象的引用
private static Singleton object = new Singleton();
//私有化构造器，不允许外部类构建本类的实例
private Singleton (){

}
//返回对象实例
private static Singleton getInstance(){
	return object;
}
```

### 基于静态内部类的单例模式
```java
public class Singleton7{
       // 构造器私有化       
	   private Singleton7(){}    
	   
	   // 静态内部类不会在一开始被装载 所有没有内存消耗问题       
	   // JVM在装载静态内部类是线程安全的 只有在使用内部类才会去装载 所以线程是安全的       
	   private static class SingletonInstance {           
			private static final Singleton7 singleton7 = new Singleton7();
       }
       
	   // 提供静态公有获取方法       
	   public static synchronized Singleton7 getInstance(){           
			return SingletonInstance.singleton7;      
	   }
}
```

### 模板方法模式
定义一个操作中的算法的骨架，而将一些步骤延迟到子类中，如JdbcTemplate  

1. 抽象类中有基本方法和模板方法，模板方法中调用了一至多个基本方法，模板方法一般由final修饰
2. 继承了该抽象类的子类实现其基本方法


### 代理模式
扩展目标对象的功能，可以在目标对象的某个方法执行前后增加一些自定义的操作

#### 静态代理
1. 定义一个接口及其实现类  SmsService、SmsServiceImpl
2. 定义一个代理类同样实现这个接口 SmsProxy

3. 将目标对象注入进代理类 
```java
SmsService smsService = new SmsServiceImpl();
SmsProxy smsProxy = new SmsProxy(smsService);
```

#### JDK动态代理
从JVM角度，动态代理是运行时动态生成类字节码，并加载到JVM
1. 定义接口及其实现类
2. 创建JDK动态代理类，实现InvocationHandler接口并重写invoke方法，在invoke方法实现其他自定义操作逻辑
3. 通过Proxy.newProxyInstance(ClassLoader loader,Class<?>[] interfaces,InvocationHandler h);创建代理对象

```java
//接口
public interface SmsService {
    String send(String message);
}

//接口实现类
public class SmsServiceImpl implements SmsService {

    @Override
    public String send(String message) {
        System.out.println(message);
        return message;
    }
}

//JDK动态代理类
public class SmsInvocationHandler implements InvocationHandler {

    private final Object target;
    public SmsInvocationHandler(Object target) {
        this.target = target;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println("方法调用前的自定义操作");
        Object result = method.invoke(target,args);
        System.out.println("方法调用后的自定义操作");

        return result;
    }
}

//用来获取被代理对象的工厂类
public class JdkProxyFactory {
    public static Object createProxy(Object target){
        return Proxy.newProxyInstance(
                target.getClass().getClassLoader(), //目标类的类加载
                target.getClass().getInterfaces(), //接口代理类要实现的接口列表
                new SmsInvocationHandler(target) //代理对象对应的（实现了InvocationHandler接口的）代理类
        );
    }
}

//实际使用
SmsService smsService = (SmsService) JdkProxyFactory.createProxy(new SmsServiceImpl());
smsService.send("发送成功");

```

#### cglib动态代理
可以在运行期扩展Java类和实现Java接口，底层实现是通过ASM字节码处理框架来转换字节码并生成新的class（被代理类的子类）；速度上比jdk动态代理要快。
CGLIB 采用了非常底层的字节码技术，其原理是通过字节码技术为一个类创建子类，
并在子类中采用方法拦截的技术拦截所有父类方法的调用，顺势织入横切逻辑。
但因为采用的是继承，所以不能对final修饰的类进行代理。

#### 静态VS动态
> 静态代理的接口一旦新增方法，实现类和代理对象都必须修改，而动态代理无需修改代理类，降低了耦合度
> 静态代理在编译时就将接口、实现类、代理类这些都变成了一个个实际的 class 文件。而动态代理是在运行时动态生成类字节码，并加载到 JVM 中的。
#### JDK动态代理 VS cglib动态代理
> JDK动态代理只能只能代理实现了接口的类，而 CGLIB 可以代理未实现任何接口的类


### 迭代器模式
在容器中用到的，


### 适配器模式

### 装饰器模式
装饰者和被装饰者可以独立发展，不互相耦合，装饰模式是继承的一个替代模式，可以动态实现扩展一个实现类的功能

### 观察者模式
简单来讲就一句话：当一个对象变化时，其它依赖该对象的对象都会收到通知，并且随着变化！对象之间是一种一对多的关系。

I/O中用到了适配器模式和装饰者模式

### 策略模式
多个类实现同一接口，这些类的区别仅限于它们的行为，那么使用策略模式可以动态地让一个对象在许多行为中选择一种行为


### 项目中用到的设计模式
1. 单例模式-懒汉模式：创建线程池。
3. 代理模式-动态代理：统一异常处理@ControllerAdvice和@ExceptionHandler
4. 观察者模式：消息队列的发布订阅
5. 策略模式：支付模块中

































