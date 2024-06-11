---
title: 导入导出
date: 2020-10-01
tags: tag1
categories: Java
---
# 导入导出相关

## EasyPoi
http://doc.wupaas.com/docs/easypoi/easypoi-1c0u4mo8p4ro8


支持的导入导出字段类型 Integer,Long,Double,Date,LocalDateTime,String,Boolean，BigDecimal


`@Excel(name = "检出判断", width = 30, replace = { "正常_0", "异常_1","缺失_2" })`
	
	
	
## XWPFDocument相关
1. 通过文件路径获取word文件，返回XWPFDocument对象
2. 合并两个word
3. 合并某一行的几个列
3. 下载word文档，XWPFDocument
4. 在最底下插入一行，并将某一行的样式复制到新增行
5. 搜素表格中的关键字，返回行、列的下标
6. 将数据填充到行中
7. 搜索word中的关键字
8. 设置对角线