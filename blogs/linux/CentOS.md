---
title: CentOS
date: 2020-10-01
tags: tag1
categories: Linux
---
### 删除用户
`userdel -r username`
提示有进程1187在占用，先强制停止此进程，再删除即可
`kill -9 1187`


### 查看CPU型号信息
`cat /proc/cpuinfo | grep name | cut -f2 -d: |uniq -c`

16  Intel(R) Xeon(R) Gold 5220 CPU @ 2.20GHz

### 查看内存信息
`cat /proc/meminfo | grep MemTotal`

MemTotal:       32778080 kB

### 查看磁盘大小
`fdisk -l | grep Disk`

`df -h`

### centos重启命令: 
	1.reboot   普通重启 
	2.shutdown -r now 立刻重启(root用户使用) 
	3.shutdown -r 10 过10分钟自动重启(root用户使用) 
	4.shutdown -r 20:35 在时间为20:35时候重启(root用户使用) 如果是通过shutdown命令设置重启的话,可以用shutdown -c命令取消重启 

### centos关机命令：
　　1、halt 立刻关机
　　2、poweroff 立刻关机
　　3、shutdown -h now 立刻关机(root用户使用)
　　4、shutdown -h 10 10分钟后自动关机
　　如果是通过shutdown命令设置关机的话，可以用shutdown -c命令取消重启


### 查看当前文件夹下文件的内存占用情况
`du -sh *`

### 查看总内存占用情况
`free -h`

### 查看排名前8的内存占用情况
ps aux | head -1;ps aux |grep -v PID |sort -rn -k +4 | head -8

### 查看某个端口占用情况
`netstat -lnp|grep 9901`
得到进程号12953
`ll /proc/12953/cwd` 命令得到当前进程的文件目录


### 磁盘、存储、分区
一般来说，vda，vdb为虚拟磁盘；真机中sda为第一块磁盘，sdb为第二块磁盘，a,b,c...以此类推；sro和cdrom是光盘
```
fdisk -l //查看磁盘情况
df -hk   //查看存储情况
lsblk    //查看分区和磁盘
```

