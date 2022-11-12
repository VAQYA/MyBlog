---
title: IDEA
date: 2020-10-01
tags: tag1
categories: 软件工具
---
# IntelliJ IDEA

* 主题  Darcual

* 字体  Source Code Pro

* 字体颜色  白色：#A9B8C7

* 背景颜色  灰黑：#2B2B2B

## 插件

### Alibaba Java Code Guidelines
- 阿里巴巴代码规范检测优化

### Activate-power-mode
- 不如跳舞、在线蹦迪
- Window下设置activate-power-mode：enable打开、particle粒子、shake抖动、combo标识、colorful颜色

### CamelCase
- Ctrl+Shift+U 驼峰式命名相互转换

### CodeGlance
- 侧边展示代码缩放图

### Codota
- 代码智能提示
- Ctrl+Shift+O 获取github上排名最高的相关代码段

### Free MyBatis plugin
- Mapper.java 和 Mapper.xml之间来回切换

### GsonFormat
- Alt+Insert Json数据转实体类

### Lombok
使用前在pom中引入包

### Java Stream Debugger
- Java流式调用步骤可视化

### JRebel
- 热加载插件

### Maven Helper
- 查看Maven依赖关系，将重复的依赖exclusion掉

### RESTfultoolkit
- Ctrl+Alt+N 根据url路径查找Controller并定位到方法  
- 右侧可看RestServices，展示项目中所有的url  
- 简单的http请求(包含参数)

### Rainbow Brackets
- 彩虹括号

### SequenceDiagram
- 查看函数调用时序图

### Translation
- Ctrl+Shift+Y 翻译

### VisualVM Launcher
性能监控测试器

### Free MyBatis plugin
快速从mapper接口跳转到xml文件

## 快捷键

按着鼠标滚轮上下选择多行，同时修改

* Ctrl+Alt+S   呼出Settings窗口  

* Ctrl+Alt+U 查看类关系图

* Alt+8 快速唤出运行控制台 Services

* Ctrl+Shift+F9 热加载

* Ctrl+O 重写基类的方法

* Ctrl+I 实现/继承 接口/抽象类的方法

* Ctrl+Alt+U 生成UML类图



## Debug相关

F8 单步调试，不进入函数内部    
F7 单步调试，进入函数内部  
Shift+F8 跳出函数  
F9 继续执行到下一个断点的位置或执行完程序
Ctrl+Shift+F8 查看断点  

断点处右击，勾选Suspend，选择为Thread，可进行多线程调试  
Variables中选中参数，右击可以修改值，实现动态设置运行时的变量  

Debug过程中，修改某个类，点击run->Reload Changed Classes重新加载类，可实现边修改边调试  

Debug过程中，想在当前立马结束，不让它继续执行后面的代码，`Debugger->Frames`,右击选择Force Return，然后F9就结束了     

点击 mute breakpoints ，就会忽略剩下的断点，直接运行完

## Git文件颜色   
红色，未加入版本控制  
绿色，已经加入控制暂未提交  
蓝色，当前已加入，已提交，有改动  
白色，之前已加入，已提交，无改动  
灰色：版本控制已忽略文件  

## 查看jar包冲突  
1. 选中Maven项目  
2. Show Dependencies  

展示图太小  Actual Size  
红色实现表示项目中有冲突的Jar包，  
红色虚线表示被多次引用的。

