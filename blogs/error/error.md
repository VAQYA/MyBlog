---
title: 报错
date: 2020-10-01
tags: tag1
categories: 报错
---
### 没有数据库驱动或者引入了多个驱动
```
Description:

Failed to configure a DataSource: 'url' attribute is not specified and no embedded datasource could be configured.

Reason: Failed to determine a suitable driver class


Action:

Consider the following:
	If you want an embedded database (H2, HSQL or Derby), please put it on the classpath.
	If you have database settings to be loaded from a particular profile you may need to activate it (no profiles are currently active).

Disconnected from the target VM, address: '127.0.0.1:57338', transport: 'socket'

Process finished with exit code 1
```


### mybatis-plus的依赖引入不正确
```
org.apache.ibatis.binding.BindingException: Invalid bound statement (not found)........selectList

		将
		<dependency>
			<groupId>com.baomidou</groupId>
			<artifactId>mybatis-plus</artifactId>
			<version>${mybatis-plus.version}</version>
		</dependency>
		改为
		<dependency>
			<groupId>com.baomidou</groupId>
			<artifactId>mybatis-plus-boot-starter</artifactId>
			<version>${mybatis-plus.version}</version>
		</dependency>
```

## 导出word时

### OPCPackage.open(inputStream);报错
org.apache.poi.openxml4j.exceptions.NotOfficeXmlFileException: No valid entries or contents found, this is not a valid OOXML (Office Open XML) file

解决：打开word文件，左右调整下列的距离就好了