---
title: Dubbo
date: 2020-10-01
tags: tag1
categories: 分布式
---
# Dubbo
阿里巴巴开源的分布式服务框架，是一款高性能、轻量级的开源Java RPC框架。  

### English
provider 供应商  
registry 注册表  
Load Balance 负载均衡  
protocol 协议  
subscribe 订阅  

### 三大核心功能
1. 面向接口的远程方法调用
2. 智能容错和负载均衡
3. 服务自主注册和发现

### 核心部件
Remoting：网络通信框架，实现了sync-over-async和request-response消息机制。  
RPC：远程调用过程的抽象，支持负载均衡、容灾、集群。  
Registry：服务目录框架，用于服务的注册、服务事件的发布和订阅。  

### 