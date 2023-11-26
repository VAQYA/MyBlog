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

### 查看当前目录的存储占用情况
`du -s -h ./*`

### 复制文件夹v1到v2
`cp v1 -a v2`

### 设置文件夹lib所有权限
chmod -R 777 lib

### zip 

解压zip文件
`unzip abc.zip -d ./`

压缩成zip文件
`zip -r abc.zip ./abc`#将当前目录下的abc文件夹压缩为abc.zip文件

### 7z
安装
`yum install p7zip`

压缩test文件夹生成test.7z
`7za a -t7z -r test.7z test`
a  代表添加文件／文件夹到压缩包;
-t  是指定压缩类型，这里定为7z，可不指定，因为7za默认压缩类型就是7z。
-r 表示递归所有的子文件夹

解压test.7z
`7za x test.7z -r -o./`
x  代表解压缩文件，并且是按原始目录树解压（还有个参数 e 也是解压缩文件，但其会将所有文件都解压到根下，而不是自己原有的文件夹下）
-r 表示递归解压缩所有的子文件夹
-o 是指定解压到的目录，-o后是没有空格的，直接接目录。这一点需要注意。


  