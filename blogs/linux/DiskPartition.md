---
title: CentOS磁盘分区
date: 2020-10-01
tags: CentOS
categories: Linux
---
## 磁盘分区

磁盘`/dev/vdb`分成2个区，便会得到`/dev/vdb1`，`/dev/vdb2`两个分区

利用`fdisk`工具进行MBR分区，`fdisk`最大可支持2T的磁盘分区，超过2T的用`parted`，支持GPT，适用于大容量分区

1. 查看现有系统的磁盘空间
    `fdisk -l`

2. 给/dev/vdb磁盘分区
  ```
  fdisk /dev/vdb  // 选中/dev/vdb
  输入m //查看帮助信息
  输入n //新增分区
  输入p //选择基本分区
  输入1 //建1个分区
  回车、再回车
  输入w //保存
  ```
3. 同步分区到系统
    `partprobe`

4. 格式化分区
```
//用ext4格式对/dev/vdb1进行格式化
mkfs.ext4 /dev/vdb1
```
5. 挂载分区
```
mkdir /qm //创建新的文件夹，作为挂载点
mount /dev/vdb1 /qm
cp -r /abc/* /qm  //将abc文件夹下的内容复制到/qm（如果需要的话）
```
6. 查看挂载
`df -h`//可以看到/dev/vdb1了
7. 设置开机自动挂载
```
vim /etc/fstab 修改文件,尾部添加`/dev/vdb1 /qm ext4 defaults 0 0`
```
如果磁盘是根据分区的UUID动态挂载的（如华为云），则需要以下方式设置开机自动挂载
![开机自动挂载磁盘分区](../image/CentOS/开机自动挂载磁盘分区.png)



如果重启系统之后发现并没有挂载，检查remote-fs.target服务是否开启，直接影响到fstab开机自动挂载是否生效  
解决方案：开启并设置开机自启动就可以了。

```
systemctl start remote-fs.target
systemctl enable remote-fs.target
```



分区后/qm文件夹下会生成一个lost+found的目录

![lost+found](../image/CentOS/lost+found.png)

















