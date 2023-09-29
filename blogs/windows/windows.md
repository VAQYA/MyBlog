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
`netstat -lnp|grep 9901`
得到进程号12953
`ll /proc/12953/cwd` 命令得到当前进程的文件目录