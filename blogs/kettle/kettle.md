---
title: kettle
date: 2020-10-01
tags: tag1
categories: 
---
Kettle是国外免费的开源轻量级ETL工具，是基于Java语言开发的，可以在Windows.Linux,UNIX系统上运行，且绿色不需安装，可用于各种数据库之间的连接。
 
## 组成的四大组件
Spoon组件，集成开发软件，用于构建作业和转换，执行或调试作业和转换，还可以用于监控ETL操作性能  
Pan组件，以命令行形式执行Spoon生成的转换程序  
Kitchen组件，以命令行的方式执行Spoon生成的作业程序  
Carte组件，是基于Jetty的轻量级HTTP服务器，主要用于监控HTTP执行作业和转换的进度

## 转换
主要用于数据抽取，转换和加载等，包括读取文件，过滤输出行，数据清洗或将数据加载到数据库中等步骤，转换中的步骤是通过跳连接的
如：从数据库中读取数据到Excel文本文件中

一个转换就是一个.ktr文件

## 作业
一个作业包含一个或多个作业项，且都是按照某种顺序进行执行的。
如：将作业数据加载到作业仓库中







配置环境变量
vim /etc/profile
```
export KETTLE=/export/softwares/data-integration
export PATH=${KETTLE}:$PATH

```
source /etc/profile #重新加载


赋予权限
chmod 777 *.sh

kettle缺失libwebkitgtk：
1. 下载
`wget ftp://ftp.pbone.net/mirror/ftp5.gwdg.de/pub/opensuse/repositories/home:/matthewdva:/build:/EPEL:/el7/RHEL_7/x86_64/webkitgtk-2.4.9-1.el7.x86_64.rpm`
2. 安装
`yum install webkitgtk-2.4.9-1.el7.x86_64.rpm`

验证是否安装成功,输出以下内容表示成功了
```
./pan.sh -version
./kitchen.sh -version


2019/10/09 08:49:09 - Pan - Kettle version 8.2.0.0-342, build 8.2.0.0-342, build date : 2018-11-14 10.30.55
2019/10/09 08:49:09 - Pan - Start of run.
ERROR: No repository provided, can't load transformation.

2019/10/09 08:13:21 - Kitchen - Kettle version 8.2.0.0-342, build 8.2.0.0-342, build date : 2018-11-14 10.30.55
2019/10/09 08:13:21 - Kitchen - Start of run.
ERROR: Kitchen can't continue because the job couldn't be loaded.
```

执行转换文件.ktr 
./pan.sh -file=/opt/kettle/work/test.ktr





















