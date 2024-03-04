---
title: SpringMVC
date: 2019-04-09 00:17:45
categories: Java
tags: tag1
---

# SpringMVC
```
实现了MVC设计模式的请求驱动类型的轻量级框架，实现了把请求参数和业务对象绑定。
```
## SpringMVC的流程
```
1. tomcat的工作线程将用户发送的请求转交给前端控制器DispatcherServlet
2. 前端控制器DispatcherServlet调用处理器映射器HandlerMapping，请求获取处理器Handler(根据xml或注解@RequestMapping)
3. 处理器映射器HandlerMapping根据url找到具体的处理器(Handler对象)，生成处理器对象以及处理器拦截器HandlerIntercepter（如果有则生成），一并返回给前端控制器DispatcherServlet
4. 处理器映射器HandlerMapping调用处理器适配器HandlerAdapter
5. 处理器适配器HandlerAdapter经过适配后调用具体的处理器Handler
6. 处理器Handler执行完成返回ModelAndView
7. 处理器适配器HandlerAdapter将ModelAndView返回给前端控制器DispatcherServlet
8. 前端控制器DispatcherServlet将ModelAndView传给视图解析器ViewResolver
9. 视图解析器ViewResolver解析后返回具体的View
10. 前端控制器DispatcherServlet对View进行渲染视图（将模型数据填充到视图中）
11. 视图对象View将渲染后的视图返回给前端控制器DispatcherServlet
12. 前端控制器DispatcherServlet响应用户，将最终的视图返回


@ResponseBody 注解标识该方法的返回值。这样被标注的方法返回值，会直接写入 HTTP 响应体（而不会被视图解析器认为是一个视图对象）。
```
## SpringMVC和Struts2的区别
```
1. SpringMVC的入口是一个servlet，即前端控制器；Struts2入口是一个filter过滤器。
2. SpringMVC是基于方法开发的，一个url对应一个方法，请求参数传递到方法的形参，可以是单例也可以是多例（建议单例）；Struts2是基于类的，传递参数是通过类的属性，只能设计为多例。
3. SpringMVC通过参数解析器解析request的请求内容，并赋值给方法的形参，将数据和视图封装成ModelAndView对象，最后将ModelAndView对象中模型数据通过request域传输到页面；Struts2是通过值栈存储数据请求和响应的数据，通过OGNL存取数据。
```
## SpringMVC的常用注解
```
* @Controller 控制器的注解，不能用别的注解替代
* @RequestMapping 用于映射请求的url
* @RequestParam GET和POST请求传的参数会自动转换赋值到@RequestParam 所注解的变量上，例：@RequestParam(value="username")String username
* @RequestBody 常用来处理Content-Type为application/json, application/xml的数据；用来接收前端传递（不能用GET请求）给后端的json字符串中的数据（请求体中的数据），将json数据转为Java对象。
* @ResponseBody 将Controller下的方法返回的Java对象转换为json响应给客户
```
### SpringMVC是怎么和AJAX交互的
```
通过Jackson框架可以把直接转化成js可识别的json对象
1. 加入Jackson.jar
2. 配置json的映射
3. 在接收Ajax的方法里面可以直接返回Object、List数据，但方法前要加上`@ResponseBody`注解
```
## SpringMVC用什么对象从后台向前台传递数据
```
通过ModelMap对象，可以在这个对象里面用put方法，把数据添加到里面，前台可以通过EL表达式取出
```