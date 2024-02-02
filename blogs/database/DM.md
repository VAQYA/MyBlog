---
title: 达梦
date: 2020-10-01
tags: tag1
categories: 数据库
---

COMPATIBLE_MODE  选择MySQL

## 常用
```

    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")


alter table "FSJCZX"."sample_detect_plan" add create_time datetime;
alter table "FSJCZX"."sample_detect_plan" add create_user_id varchar(50);
alter table "FSJCZX"."sample_detect_plan" add create_user_name varchar(100);
alter table "FSJCZX"."sample_detect_plan" add update_time datetime;
alter table "FSJCZX"."sample_detect_plan" add update_user_id varchar(50);
alter table "FSJCZX"."sample_detect_plan" add update_user_name varchar(100);
```

## DBeaver连接

达梦连接
类名dm.jdbc.driver.DmDriver
URL模板jdbc:dm://{host}[:{port}]/[{database}]

## DM DB的启动过程

DM的启动主要按如下三个步骤进行：
1.读取配置文件（.ini）
2.读取控制文件(dm.ctl)
3.读取重做日志文件（.log） 和 数据文件(*.DBF)  

1，进入安装目录下的bin目录
我的目录是（/home/user/dmdbms/bin）

2, 找到【dm.ini】文件所在的目录，不知道文件在那的可以执行下面搜索命令

find -name dm.ini

3，在 /home/user/dmdbms/bin 目录下执行

后台启动，一般建议用后台启动
nohup ./dmserver /home/user/dmdba/dmdata/DAMENG/dm.ini &

前台启动（关闭窗口，数据库会关闭）
./dmserver /home/user/dmdba/dmdata/DAMENG/dm.ini


4，查询服务启动情况

netstat -lntp |grep dm


## 注：
1. 使用达梦的迁移工具时，连mysql要像我们在代码里连数据库一样，指定编码，否则中文会乱码
2. 达梦表查询转换为实体，实体存在枚举字段，查询会报错
3. 达梦的Date类型字段，在实体用LocalDate会报错，要改成LocalDateTime
4. 达梦双引号包着的英文区分大小写
5. 查询中存在同名字段时，达梦默认取最后一个，MySQL默认取第一个

## 本地达梦
密码：dm863592923



## 与MySQL的区别

### 分组查询GROUP_CONCAT和WM_CONCAT
mysql用法  GROUP_CONCAT(c_remark SEPARATOR '!')  as remark    // 默认是,这里是将,改为！
达梦用法  REPLACE(WM_CONCAT("c_remark") ,',','!') as remark   
WM_CONCAT("c_remark")为null时直接REPLACE会报"试图在blob或者clob列上排序或比较"错误，应改为下面的方式  
REPLACE(  ,',','!') as remark

```
select
    CAST( concat_ws('=',td.spot_name,td.object_name,ifnull(td.sample_deadline,'')) AS VARCHAR) as uniqueKey,
    td.task_id,
    td.task_detail_id,
    td.spot_id,
    td.spot_name ,
    td.object_id,
    td.object_name,
    td.sample_deadline sampleDeadline,
    REPLACE( WM_CONCAT( DISTINCT td.project_id) , ',' , '、') as projectIds,
    REPLACE(WM_CONCAT(DISTINCT td.project_name) , ',' , '、')as projectNames    
from task_detail td
WHERE 1=1
AND task_id = 1588363669413154818
AND td.sample_deadline  >= '2023-01-01 00:00:00'
and td.is_deleted = 0 
group by DBMS_LOB.SUBSTR(uniqueKey)

```

### DATE_ADD、DATE_SUB和DATEADD
MySQL用法：DATE_ADD(a, INTERVAL b DAY)等同于DATE_SUB(a, INTERVAL -b DAY)  
达梦用法：DATEADD( DAY , b, a )  

### `和“
MySQL用法：a.`name`
达梦用法：a."name"


## 递归查询
```

SELECT id,parent_id,department_name,
	LEVEL, -- 层级
	SYS_CONNECT_BY_PATH(department_name, ''), --全名
	CONNECT_BY_ROOT department_name, --根节点名称
	CONNECT_BY_ISLEAF, --是否叶子节点
FROM sys_department d
where 1=1
AND CONNECT_BY_ROOT department_name like '广东省环境辐射监测中心' 
CONNECT BY PRIOR(id) = parent_id
        
```

## 将查询的字段转换成字符串返回
`SELECT CAST(field_name AS VARCHAR) FROM table_name;`

## 将参数id类型转换为字符串，防止字符串转换错误
`SELECT * FROM table_A WHERE a = CAST(#{id} AS VARCHAR)`

## 函数

### COALESCE
COALESCE 函数用于返回参数列表中的第一个非 NULL 表达式。如果所有参数都是 NULL，那么 COALESCE 返回 NULL

### DATEDIFF
获取两个时间相差的分钟数
```
SELECT DATEDIFF(MINUTE, MEASURE_BEGIN_TIME , MEASURE_END_TIME) AS minutes_difference
FROM detect_record 
```





## 增
```
alter table "FSJCZX"."table_test" add column("operate" VARCHAR(50));
comment on column "FSJCZX"."table_test"."operate" is '操作：锁定、申请解锁';
```
## 删
alter table "FSJCZX"."table_test" drop column "abc";

## 改（字段名）abc改成bcd

`alter table "FSJCZX"."table_test" alter column "abc" rename to "bcd";`

## 改（字段类型）改成INTEGER

`alter table "FSJCZX"."table_test" modify "abc" INTEGER;`

## 取消id自增
`alter table "SPOT_MONITORING_EXPAND" drop identity;`


## 更新
```
UPDATE detect_record dr 
LEFT JOIN task_detail td ON td.TASK_DETAIL_ID = dr.TASK_DETAIL_ID 
LEFT JOIN task t ON t.TASK_ID = td.TASK_ID 
SET dr.task_type = t.TASK_TYPE 
```



## SQL

### 获取监测项目id、名称列表，有重复名称的则获取update_time最新的那个projectId
```
 SELECT
	a.PROJECT_NAME AS "projectName",
	to_char(a.PROJECT_ID) AS "projectId",
	b.is_sample AS "isSample"
FROM
	( WITH RankedProjects AS (
	SELECT
		PROJECT_NAME,
		PROJECT_ID,
		ROW_NUMBER() 
		OVER (PARTITION BY PROJECT_NAME ORDER BY update_time DESC) AS row_num
	FROM
		MONITORING_PROJECT
	WHERE
		USABLE = 1 )
	SELECT
		DISTINCT PROJECT_NAME,
		PROJECT_ID
	FROM
		RankedProjects
	WHERE
		row_num = 1 ) a
LEFT JOIN MONITORING_PROJECT_TERM t ON
	t.PROJECT_TERM_NAME = a.PROJECT_NAME
LEFT JOIN PROJECT_BASE_TERM p ON
	p.PROJECT_TERM_ID = t.PROJECT_TERM_ID
LEFT JOIN MONITORING_PROJECT_BASE b ON
	b.PROJECT_BASE_ID = p.PROJECT_BASE_ID;
```









