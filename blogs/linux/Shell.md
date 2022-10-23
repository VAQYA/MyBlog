---
title: Shell
date: 2020-10-01
tags: tag1
categories: Linux
---

## CentOS

### CentOS7_64_1
192.168.0.6
root~12345678

https://downloads.mysql.com/archives/get/p/23/file/mysql-5.7.37-linux-glibc2.12-x86_64.tar.gz

### MySQL

root密码 mysql863592
VSQL 123456

root 123456

## Shell

### 切换到测试服接口日志目录
cd /mnt/logs/nfys-2.0-all-log/logs

/开头表示根目录，否则（没有/）表示当前目录下的子文件夹。
./ 当前文件夹下
../ 父级文件夹下


### 打开某一日志实时显示
tail -f nfys-umc.log


### 打开某一日志
vim nfys-umc.log

### 查看/编辑文件
vi nfys-umc.log
按i进入编辑模式
Esc退出编辑模式

### 搜索 
`:/ 按n向下跳转到搜索的关键字，按N向上跳转`  
`:? 按n向上跳转到搜索的关键字，按N向下跳转`

### 保存但不退出
:w

### 强保存但不退出
:w!

### 不保存退出
:q

### 不保存强制退出
:q!

### 保存并退出
:wq

### 强保存并退出
:wq!

### 放弃所有修改
:e!

### 将vi暂停
Ctrl+Z 	

### 复制
Ctrl + Insert

### 粘贴
Shift + Insert

### 回到上级目录
cd ..

### 回到上两级目录
cd ../..

### 切换到用户目录
cd ~

### 创建目录xx
mkdir xx

### 展示当前文件夹下的所有文件及文件夹
ls

### 复制整个文件夹下的所有文件
sz dir_name/*

### 下载某个文件
sz nfys-umc.log

### 补全命令
Tab  连按两下列出所有可用命令

### 本行开头、结尾
Home End 

### 上下翻页
PgUp PgDn

### 清屏
Ctrl+L 或 clear

## Linux

### 删除已经输入的命令
Ctrl+c

### 往回删除一个单词
Ctrl+w

### 删除光标前的
Ctrl+u

### 删除光标后的
Ctrl+k

### 移动光标到字符头
Ctrl+a

### 移动光标到字符尾
Ctrl+e



### Linux 虚拟机

节点与节点、
节点与宿主机、
节点与外网

SSH终端：SecureCRT
SFTP文件传输工具：Transmit


bootProto=dhcp 自动配置ip地址，ip会变
bootProto=static ip地址改为静态的


### 管理套件
rpm

yum 基于rpm包管理，能够从指定服务器自动下载RPM包并且安装

### 根据字符串查找文件
grep

### 判读是否有安装过MySQL
rpm -qi | grep -i mysql

### 
yum -y install 






### 查看CPU物理个数
grep 'physical id' /proc/cpuinfo | sort -u

### 查看每个物理CPU的核数
grep 'core id' /proc/cpuinfo | sort -u | wc -l

### 查看总的逻辑CPU个数
grep 'processor' /proc/cpuinfo | sort -u | wc -l 

### 查看CPU型号
dmidecode -s processor-version



一般一核对应一个线程，又有超线程技术，一个核心可以有两个线程，8核16线程，可在线程池中创建17个线程


### 查看端口占用
netstat -ano|findstr 8080  
  
显示的最后一列数为pid:23412  

### 停止端口占用  
taskkill /pid 23412 /f  
/f表示强制停用





### 10个常用Linux命令，简要说作用
- mkdir 文件夹名 新建文件夹
- mv filename new_filename 重命名文件或文件夹
- sz filename  下载文件到本地
- ./bin.sh start 启动服务命令
- tail -f 日志文件名  查看日志
- cd /home 进入home目录
- ls 查看目录
- find -name filename 根据文件名查找特定文件
- cd .. 返回上一级
- tail -f -n 100 日志文件  打印最新的100条日志信息




## QM

### 添加防火墙端口号
firewall-cmd --zone=public --add-port=9876/tcp --permanent
### 使添加的端口号生效
firewall-cmd --reload 
### 查看访问的端口
firewall-cmd --zone=public --list-ports


### 在当前目录下 运行/停止/重启/查看运行状态 jczx-web.sh
/bin/sh jczx-web.sh start/stop/restart/status



### 查看MySQL的安装路径
whereis mysql

### 查找指定文件在哪儿
find / -name abc.txt

### 解压文件
unzip jczx-app-20220405.zip -d /opt/jczx

### 设置文件夹lib所有权限
chmod -R 777 lib

### 解压
centos下
安装7z yum install p7zip -y

解压7z 7za x abc.7z
解压zip unzip -r abc.zip 









## CentOS

### 查看CPU型号信息
cat /proc/cpuinfo | grep name | cut -f2 -d: |uniq -c

16  Intel(R) Xeon(R) Gold 5220 CPU @ 2.20GHz

### 查看内存信息
cat /proc/meminfo | grep MemTotal

MemTotal:       32778080 kB

### 查看磁盘大小
fdisk -l | grep Disk

df -h

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