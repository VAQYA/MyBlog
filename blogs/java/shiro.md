---
title: Shiro
date: 2019-04-06 10:52:56
categories: Java
tags:
---
[Apache Shiro是一个强大且易用的Java安全框架,执行身份验证、授权、密码和会话管理。](https://baike.baidu.com/item/shiro/17753571?fr=aladdin)

Shiro的核心部分是SecurityManager，负责安全认证和授权
### Subject 主体
> 代表了当前操作“用户”，是个抽象概念，不一定是指具体的人，与当前应用交互的任何东西都称为Subject，如第三方进程、后台帐户,网路爬虫、机器人。所有的Subject都绑定到SecurityManager，与Subject的所有交互，都委托给SecurityManager，SecurityManager才是实际的执行者。

> 通过SecurityUtils.getSubject()来获取Subject，Subject再获取Session对象subject.getSession(),这里的Session对象并不是HttpSession，它不需要依赖http服务器，Shiro的Session的默认实现类实现类：org.apache.shiro.mgt.DelegatingSession 

### SecurityManager 安全管理器
>相当于SpringMVC中的DispatchServlet，是Shiro的核心部分，所有具体的交互都通过它进行控制，SecurityManager管理着所有Subject、且负责进行认证、授权、会话、缓存的管理。

### AuthenticationInfo 角色信息集合
> 负责Subject认证。

### AuthorizationInfo 角色的权限信息集合
> 授权器，用来决定主题是否有权限进行相应的操作

### Realm 域
> 充当了Shiro与数据间的连接器，当用户执行角色登陆和权限验证时，Shiro会从应用配置的Realm中查找用户及其权限信息。相当于一个安全相关的DAO，封装了数据源的连接细节，并在需要时将数据提供给Shiro，配置Shiro时，必须至少指定一个Realm。
Realm提供AuthenticationInfo和AuthorizationInfo两个对象。

### SessionManager 会话管理
> 管理会话生命周期的组件

### CacheManager 缓存控制器
> 来管理用户、角色、权限等缓存的，因为这些数据基本上很少改变，放入缓存可以提高访问性能。类似于Map<String,Object>对象，通过put保存对象，get取回对象。

### Cryptgraphy 密码模块
> Shiro提供的加密组件，用于密码的加密解密。


1. 获取Subject对象。
2. 测试当前用户是否已经被认证，即是否已经登录，调用Subject的isAuthenticated（）方法。
3. 没有登录的话，把用户名和密码封装为UsernamePasswordToken对象，UsernamePasswordToken token = new UsernamePasswordToken（"username","password"）;
> 
* 创建表单页面
* 把请求提交到SpringMVC和Handler
* 获取用户名和密码

token.setRememberMe(true);

4. 调用Subject对象的login(token)方法执行登录。
> 登录时的几种异常
* UnknownAccountException 没有指定用户 。
* IncorrectCredentialsException 账户存在，密码不匹配。
* LockedAccountException 用户被锁定。
* AuthenticationException 前三种异常的父类。

5. 自定义Realm方法，从数据库中获取对应的记录，返回给Shiro
> 实际上需要继承org.apache.shiro.realm.AuthenticatingRealm类
> 实现doGetAuthenticationInfo（AuthenticationToken）方法
6. 由Shiro完成与密码的比对

执行登出 Subject对象的logout()方法。
判断是否有这个角色，Subject对象调用hasRole("username")方法。
判断用户是否有这种权限，Subject对象调用isPermitted(“)方法。
.ini配置文件规则：
用户名=密码，角色1，角色2
角色=权限1，权限2
即根据用户名找角色，再根据角色找权限。
角色= 类型：操作：实例

```
applicationContext.xml中配置
<bean id="shiroFilter" class="org.apache.shiro.spring.web.ShiroFilterFactoryBean">
	<propertry name="securityManager" ref="securityManager"/>
	<property name="loginUrl" value="/login.jsp"/>
	<property name="successUrl" value="/list.jsp"/>
	<property name="unauthorizedUrl" value="/unauthorized.jsp"/>
	
	<!--配置那些页面需要保护，以及访问这些页面需要的权限,首次配置优先
	anon 可以被匿名访问
	authc 必须认证（即登陆）后才能访问的页面
	logout 登出
	-->
	<propertry name="filterChainDefinitions">
	    <value>
		/login.jsp = anon
		/shiro/login = anon
		/shiro/logout = logout
		
		/** = authc
		</value>
	</propertry>
</bean>
	
```

ShiroRealm.java继承AuthenticationRealm类，重写方法doGetAuthenticationInfo（AuthenticationToken token），返回AuthenticationInfo对象
```
方法体：
1.把AuthenticationToken对象转换成UsernamePasswordToken对象
AuthenticationToken upToken = (UsernamePasswordToken)token;
2.从UsernamePasswordToken中获取username
String username = upToken.getUsername();
3.调用数据库的方法，从数据库中查询username对应的用户记录
4.判断异常并抛出
5.根据用户信息的情况，来构建AuthenticationInfo对象并返回，通常使用的实现类是SimpleAuthenticationInfo
Object principal = username;//认证的实体信息，可以是username，也可以是实体类对象。
Object credentials = "123456";//密码。
String realmName = getName();//获取当前realm对应的name

SimpleAuthenticationInfo info = new SimpleAuthenticationInfo(principal,credentials,realmName);
return info;
```

密码的比对,通过AuthenticatingRealm的credentialsMatcher属性进行密码的比对。

把字符串加密为MD5：替换当前Realm的credentialsMatcher属性，直接使用HashedCredentialsMatcher对象，并设置加密算法。

String hashAlgorithmName = "MD5";//加密方式
Object credentials = "123456";//初始密码
Object salt = null;//盐
int hashIterations = 1024;//加密次数
Object result = new SimpleHash(hashAlgorithmName,credentials,salt,hashIterations);//加密结果

授权需要继承AuthoriingRealm类，并实现其doGetAuthorizationInfo方法。AuthorIzingRealm类继承自AuthenticatingRealm，但其并没有实现这个方法，所以认证和授权只需要继承AuthorizingRealm即可，同时实现他的两个抽象方法。













