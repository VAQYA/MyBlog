---
title: 随笔
date: 2020-10-01
tags: tag1
categories: Java
---

# 
java中Runnable 和 Callable 有什么不同？
Runnable和Callable都代表那些要在不同的线程中执行的任务，Runnable从jdk1.0开始就有了，Callable是在jdk1.5出的，Callable的call（）方法可以返回值和抛出异常，而Runnable的run（）方法没有这些功能，Callable可以返回装载有返回结果的Future对象。
当run（）或者call（）方法执行完成后，线程会自动结束。


volatile是一个特殊的修饰符，只有成员变量才能使用它。在java并发程序缺少同步类的情况下，多线程对成员变量的操作对其他线程是透明的。volatile变量可以保证下一个读取操作在上一个写操作完成后进行。

Vector使用同步方法来实现线程安全的，ArrayList不是线程安全的。

如何在两个线程间实现共享数据？
通过共享对象，或者使用像阻塞队列这样的数据结构。

notify和notifyAll的区别？
notify不能唤醒某个具体线程，所以只有一个线程在等待的时候才有用，notifyAll唤醒所有线程，并允许他们之间争夺线程锁，确保至少有一个线程能继续运行。

wait、notify、notifyAll方法都是锁级别的操作，所 以把他们定义在Object中，因为锁属于对象。

sleep（）和wait（）方法的区别？
都用来暂停当前运行的程序，sleep（）方法是Thread方法，只是短暂暂停，不释放线程锁，wait( )是对象方法，会释放对象锁。

jsp的四大域对象：pageContext，request，session，application
九大内置对象：Request、Response、Session、Out、PageContext、Page、Exception、Application、Config

AJAX通过异步模式，可以实现局部刷新，在不更新整个页面的前提下维护数据，承担了一部分本来由服务器承担的工作，从而减少了大量用户下的服务器负载。

SpringMVC的常用注解：
@RequestMapping 用于请求url映射
@RequestBody 注释实现接收http请求的json数据，将json数据转换为java对象。
@ResponseBody 注释实现将controller方法返回对象转化为json相应给客户。

拦截器与过滤器的区别：
拦截器是基于java的反射机制，过滤器是基于函数回调的；
拦截器不依赖于servlet容器。
拦截器只能对action请求起作用，而过滤器则可以对几乎所有的请求起作用。
拦截器可以访问action上下文，值栈（本质是ArrayList）里的对象，而过滤器不能。
action声明周期中，拦截器可以多次被调用，而过滤器只能在容器中初始化时被调用。


Struts2和SpringMVC的区别
1.springmvc入口是一个servlet前端控制器(DispatcherServlet),struts2入口是一filter过滤器(StrutsPrepareAndExecuteFilter).
        2.struts2通过在action类中定义成员变量接收参数,(属性驱动和模型驱动),它只能使用多例模式管理action.
 springmvc通过在coontroller方法中定义形参接收参数,springmvc可以使用单例模式管理controller.      
        3.springmvc是基于方法开发的,注解开发中使用requestMapping将url和方法进行 映射,如果根据url找到controller类的方法生成一个handler处理器对象(只包括一个method).
struts2是基于类开发的,每个请求过来创建一个action实例,实例对象中有若干个方法.
开发中建议使用springmvc,springmvc方法更类似service业务方法.
        4.struts2采用值栈存储请求和相应的数据,通过OGNL存取数据,springmvc通过参数绑定期将request请求内容解析,并给方法形参赋值.
        5.struts2和springmvc的速度是相当的,由于struts2的漏洞较多,跟多企业使用springmvc

散列算法和加密都是将Object变成一串无意义的字符串，不同的是散列算法是单向的，不可复原。

因为每次接口调用都要搜索方法表，所以接口的调用慢于类调用