---
title: Maven
date: 2020-10-01
tags: tag1
categories: Java
---

## 打包报错

[ERROR]Failed to execute goal on project qm-mobile-api:Could not resolve dependencies for project com.qm:qm-mobile-api:jar:1.0.0-SNAPSHOT:Could not find artifact com.qm:qm-services:jar:1.0.0-SNAPSHOT->[Help 1]

A模块引入了B和C，B中依赖C，只是把C从A中的引入去掉，则打包时会提示Could not resolve dependencies for project B:jar Could not find artifact C:jar  

解决：

方式一：不要去掉A中对C的引用  

方式二：把B中对C的依赖也同时去掉


## 分离式部署项目
分离lib这样能够快速部署项目，第一次将全部jar包上传到服务器，后续再新增jar时，只需要将新打包的jar上传到服务器即可
































