---
title: Dubbo
date: 2020-10-01
tags: tag1
categories: 分布式
---
# Nacos  
注册配置中心

### 功能
分为Server和Client

### Server  
由Java编写，管理注册服务，向Client提供服务列表，保存并提供Client配置信息，服务治理功能  

### Client
可由多种语言编写，注册自身服务，获取服务列表，获取配置信息，维持心跳信息  

### 注册中心原理
Client每5秒向Server发送一次心跳，心跳带上服务名、ip、端口号等信息；同时Server主动发起健康检查，15没收到心跳视为实例不健康，30秒就剔除这个实例  

### 配置中心原理  


### 启动
D:\DoWork\nacos\bin下进入cmd
windows下运行 startup.cmd -m standalone  
linux下运行 sh startup.sh -m standalone

### 主页
http://127.0.0.1:8848/nacos/index.html


