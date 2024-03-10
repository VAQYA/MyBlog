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

* 控制台背景颜色 黑：#1B1B1B

## 插件
[官网](https://plugins.jetbrains.com/)

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
- 修改代码保存后，在设置的自动部署时间内不改动代码，则触发自动热更新或手动执行Ctrl+F9 立即热加载

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

### Alibaba Cloud AI Coding Assistant
阿里巴巴的代码补全工具

### Mybatis Log Free
打印mybatis日志

### Grep Console
控制台的日志用不同颜色标识


## 快捷键

按着鼠标滚轮上下选择多行，同时修改



* Alt+8 快速唤出运行控制台 Services
* 在一行代码后面加.if，可快速生成if语句
* 在集合或数组后面加.for，可快速生成for循环语句
* fori  快速生成索引形式的for循环
* 在一个变量后面加.var，可快速定义新变量
* 在一行代码后面加.return，可快速生成return
* Ctrl+Alt+S   呼出Settings窗口  
* Ctrl+Alt+U 查看类关系图
* Ctrl+Shift+F9 热加载
* Ctrl+O 重写基类的方法
* Ctrl+I 实现/继承 接口/抽象类的方法
* Ctrl+Alt+U 生成UML类图
* Ctrl+U 跳转到父类
* Shift+Shift 全局搜索
* Ctrl+E 展示最近打开的文件
* Ctrl+【 光标回到当前大括号的开头
* Ctrl+ 】 光标回到当前大括号的结尾
* Ctrl+F12，显示当前文件的结构（eg:方法列表）
* Ctrl+Alt+T，把代码包在一个块内，例如：try/catch、if
* Ctrl+Enter，导入包
* Ctrl+Alt+L，格式化代码
* Ctrl+J，代码提示
* psvm 快速生成main方法
* Ctrl+空格 代码提示  
* Ctrl+Shift+Enter 补全代码（后面的分号）
* Ctrl+W 选中当前单词（代码块）
* Ctrl+W+W 选中当前字符串
* Ctrl+W+W+W 选中当前字符串包括前后的双引号
* Ctrl+Shift+/ 对整个代码块注释

* Alt+Shift+↑ 将当前行上移
* Ctrl+Shift+↑ 将整个方法上移
* (Ctrl)+(减号) 收起整个方法
* Ctrl+Alt+T 将代码块包围(try,catch等)

* 可以在右键本地历史记录中还原刚才的操作

* F2转到下一个错误出
* （Ctrl+F12）或（Alt+7） 打开当前文件的方法列表





## Debug相关

F8 单步调试，不进入函数内部    
F7 单步调试，进入函数内部  
Shift+F8 跳出函数  
F9 继续执行到下一个断点的位置或执行完程序
Ctrl+Shift+F8 查看断点  
调试时选中表达式，Ctrl+Shift+F8快速展示运行结果

断点处右击，勾选Suspend，选择为Thread，可进行多线程调试  
Variables中选中参数，右击可以修改值，实现动态设置运行时的变量  

Debug过程中，修改某个类，点击run->Reload Changed Classes重新加载类，可实现边修改边调试  

Debug过程中，想在当前立马结束，不让它继续执行后面的代码，`Debugger->Frames`,右击选择Force Return，然后F9就结束了     

点击 mute breakpoints ，就会忽略剩下的断点，直接运行完

断点时，选中表达式，按Ctrl+Alt+F8，快速展示值

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





### JRebel LS client not configured解决方案

核心思想是降级使用老版。

> TEAM URL整理：

https://jrebel.qekang.com/{GUID}
http://jrebel-license.jiweichengzhu.com/{GUID}

[在线guid](https://www.guidgen.com/)
激活时ReverseProxy_windows_amd64.exe保持运行

> 解决步骤：

1. 卸载jrebel
2. 删除了c盘用户下面的.jrebel文件，
3. 下载jrebel【地址：[JRebel and XRebel - IntelliJ IDEs Plugin | Marketplace](https://plugins.jetbrains.com/plugin/4441-jrebel-and-xrebel/versions)】
4. 备注：JREBEL 2022.2.2 XREBEL2021.3.1 
5. 解压到idea安装目录里面的pulgins的文件夹
6. 重启idea
7. 配置TEAM URL、email随意
8. 完成激活

9. 点击Work offline，设置为离线模式

## SVN
当前项目是SVN项目的话，已在idea中打开了，添加SVN关联
`VCS -> Enable Version Control Integration...`

