---
title: Servlet
date: 2020-10-01
tags: tag1
categories: Java
---
## HttpServletRequest

http://host:port/.../testRequest?key1=value1&key2=value3

### String getQueryString(); 
返回请求路径中的参数部分key1=value1&key2=value2&key2=value3

### String getParameter(String key);
返回请求路径中具体某个参数的值 getParameter(key1); 返回为value1

### Map<String, String[]> getParameterMap();
返回请求路径中所有参数，json格式
{"key1":["value1"],"key2":["value2","value3"]}



### 报错 java.lang.IllegalStateException: UT010004: Cannot call getReader(), getInputStream() already called
ServletRequest的getReader()和getInputStream()两个方法只能被调用一次，而且不能两个都调用


### 通过request获取post请求体的参数
        JsonNode jsonNode = null;
        BufferedReader reader = request.getReader();  // 或者BufferedReader reader = new BufferedReader(new InputStreamReader(request.getInputStream()));
		
        StringWriter writer = new StringWriter();
        try
        {
            int read;
            char[] buf = new char[1024];
            while( ( read = reader.read(buf) ) != -1 )
            {
                writer.write(buf, 0, read);
            }

            String s =  writer.getBuffer().toString();
            ObjectMapper objectMapper = new ObjectMapper();
            jsonNode = objectMapper.readTree(s);
        }
        finally{ writer.close(); }
        return jsonNode;

		
### Servlet生命周期
1. Tomcat创建Servlet实例  
2. Tomcat调用init()方法初始化实例
3. 处理服务，浏览器访问Servlet后，Servlet会调用Service方法处理请求  
4. 销毁，Tomcat关闭或长时间不使用Servlet时，调用destroy()方法
5. 卸载，调用destroy()方法后，等待垃圾回收。如果需要再次使用这个Servlet，会重新调用init()方法初始化。  


### 过滤器(Filter)
依赖于Servlet容器，用于过滤一些敏感的字符串、避免中文乱码、权限验证等，缺点是过滤器实例只能在容器初始化时调用一次。  
实际上就是实现Filter接口，重写doFilter()方法，通过注解/xml方式部署。  
````
public interface Filter {    
	void doFilter(ServletRequest request, ServletResponse response, FilterChain var3) throws IOException, ServletException;    
}

通过FilterChain，使用链式结构层层过滤  
public interface FilterChain {
    void doFilter(ServletRequest var1, ServletResponse var2) throws IOException, ServletException;
}  
  
  过滤器其实是责任链模式的一种实现。  
````

### 拦截器(Interceptor)
基于Java的反射机制，属于面向切面编程的一种运用，在Service方法之前后之后调用，可以在一个Controller生命周期调用多次，缺点是只能对Controller请求进行拦截，对其他 ，比如直接访问静态资源的请求无法拦截处理。

### 监听器  
实现特定接口的普通Java程序，监听Java对象的方法调用和属性改变。比如统计网站在线人数、自动踢人、定时清除Session。  


### 为什么说dispatchSevlet是线程安全的
SpringMVC只会初始化一次DispatcherServlet，只有一个实例，多线程访问时DispatcherServlet的内部属性也不会影响线程安全

### response.reset()
可以清除首部的空白行  



















