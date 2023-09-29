---
title: windows命令
date: 2020-10-01
tags: tag1
categories: 软件工具
---

### 查看端口占用
netstat -ano|findstr 8080  
显示的最后一列数为pid:23412  

### 停止端口占用  
taskkill /pid 23412 /f  
/f表示强制停用