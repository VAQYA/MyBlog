---
title: 微信工作号
date: 2020-10-01
tags: tag1
categories: 第三方
---

### openID
每个用户针对每个公众号都会产生一个安全的openID，获取用户的openID无需用户同意，但基本信息需要用户授权

如果要在公众号和移动应用做用户共通，openID虽然不同，但用户基本信息中只有一个unionID

### access_token
所有接口的调用需要先获取access_token(接口调用凭据)，2小时内有效

### 接口
公众平台接口仅支持80接口

### 首次关注推送消息
欢迎词、介绍服务和入口

### 网页授权scope
1. snsapi_base，获取进入页面的用户的openid，静默授权
2. snsapi_userinfo，用户同意授权获取code，通过code获取access_token,再结合openid获取用户信息，需要用户手动授权

### 网页授权access_token和普通access_token区别（全局接口调用凭证）

