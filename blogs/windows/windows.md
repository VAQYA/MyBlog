---
title: Windows
date: 2020-10-01
tags: tag1
categories: 常用
---
## 拆分大文件
用git bash命令，将access.log文件拆分成多个每个大小是100m的小文件
```
split access.log -b 100m
```

## 查看某个端口占用情况

`netstat -ano | findstr 9901`

`tasklist|findstr  12953` //查看进程

`taskkill /f /t /im java.exe`// 结束进程



`netstat -lnp|grep 9901`
得到进程号12953
`ll /proc/12953/cwd` 命令得到当前进程的文件目录

## 开始菜单固定程序没有图标
C:\Users\VAQ\AppData\Roaming\Microsoft\Windows\Start Menu\Programs，此文件夹下没有快捷方式的图标，复制进去就好了。