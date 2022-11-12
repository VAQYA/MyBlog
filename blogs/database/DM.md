---
title: 达梦
date: 2020-10-01
tags: tag1
categories: 数据库
---

### DBeaver连接

达梦连接
类名dm.jdbc.driver.DmDriver
URL模板jdbc:dm://172.26.2.24:5236/QMGXJ

## DM DB的启动过程

DM的启动主要按如下三个步骤进行：
1.读取配置文件（.ini）
2.读取控制文件(dm.ctl)
3.读取重做日志文件（.log） 和 数据文件(*.DBF)  

1，进入安装目录下的bin目录
我的目录是（/home/user/dmdbms/bin）

2, 找到【dm.ini】文件所在的目录，不知道文件在那的可以执行下面搜索命令

find -name dm.ini

3，在 /home/user/dmdbms/bin 目录下执行

后台启动，一般建议用后台启动
nohup ./dmserver /home/user/dmdba/dmdata/DAMENG/dm.ini &

前台启动（关闭窗口，数据库会关闭）
./dmserver /home/user/dmdba/dmdata/DAMENG/dm.ini


4，查询服务启动情况

netstat -lntp |grep dm
