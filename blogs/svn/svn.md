---
title: Svn
date: 2020-10-01
tags: tag1
categories: SVN
---

### 本地
vaq
123456


### 文件颜色  
蓝色，不属于版本库的未知文件  
绿色，表示文件没有修改过  
红色，文件有修改  
黄色，有冲突

### 更新
右键，SVN Update

### 提交并说明提交信息  
右键，SVN Commit  

### 从服务器URL检出项目到本地  
1. 创建空文件夹  
2. 右键选择SVN Checkout  
3. 填入版本库URL，确定  
4. 输入用户名、密码 

### 回滚  
1. show log  
2. 点击想要回滚到的版本号，右键选择Revert to this Revision  
3. 目前只是本地回滚了，最后要提交到服务器

### 冲突时，点击文件对比  
SVN的Commit直接就上传到了服务器，相当于Git中的(Commit+Push)

Commit有冲突时，左边是服务器上的(Theirs)，右边是本地(Mine)要Commit的

### 不同版本的文件对比  
1. show log    
2. 选择版本号  
3. 双击下方的文件  

### run cleanup if it was interrupted  
删除有问题的文件，再cleanup








## 分支
branches是release版本的发布分支 
trunk是开发分支  
tags目录一般是只读的，这里存储阶段性的发布版本，只是作为一个里程碑的版本进行存档。


### 切换分支  
右键项目 —> Team —> 切换(S)...（Switch to another Branch/Tag/Revision...）