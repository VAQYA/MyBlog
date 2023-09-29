---
title: MySQL
date: 2020-10-01
tags: tag1
categories: 数据库
---


### 默认端口号
3306

### 三大范式

1. 列都是不可再分的  
2. 每张表只描述一件事情  
3. 不存在对非主键列的传递依赖

### if
if(a.status = #{status},1,0) 

### if、else语句

case 字段 when 值 then 结果 else 其他情况 end
case when 表达式（字段=值） then 结果 else 其他情况 end

### format（）
format(100.234,2) 四舍五入取两位小数 结果为100.23

### DISTINCT
只能放在最前面，只会查出一个字段值
select DISTINCT id，name 则只会查到id
可用group by id 查出多个字段值

### limit
limit 4 OFFSET 3 
等同于
limit 3，4
从第3个开始取4行

### and 和 or
and的优先级比or高，（）优先级更高，建议多用，没坏处

### not 否定
not in

### 正则表达式
REGEXP用法如like

### 拼接 CONCAT（）

### 取出空格整理数据
Trim()函数去掉值左右两边的空格
RTrim()去掉值右边的空格
LTrim()去掉值左边的空格

### select now()
返回当前时间与日期 2019-11-09 15:46:07

### Abs()
返回一个数的绝对值

### 聚集函数
AVG()平均数
COUNT()某列的行数
MAX()最大值
MIN()最小值
SUM()某列值之和

### where后不能跟聚集函数
因为where是对数据进行筛选，聚集函数是基于完整的所有数据进行计算

### null
某字段为null, where a is null 
某字段不为null, where a is not null 

### group by

select 
from
where       过滤行
group by
having      过滤分组
order by
limit

### 组合查询UNION
必须包含相同的列、表达式或聚集函数（查询的顺序可以不同,但类型必须相同，或可以隐式转换）

### UNION 和UNION ALL
union会自动去除重复的行，union all会返回所有的行（数据）

### UNION 的排序
多个select语句进行union，只有最后一条语句中的order by才生效

### 函数
timediff(a,b) 返回a-b的时间间隔，a和b表示日期或时间，必须格式一致

now() 返回当前日期时间
curdate() 当前日期
curtime() 当前时间 


1、round(x,d)  ，x指要处理的数，d是指保留几位小数

这里有个值得注意的地方是，d可以是负数，这时是指定小数点左边的d位整数位为0,同时小数位均为0；

2、round(x)  ,其实就是round(x,0),也就是默认d为0；

### 全文本搜索

1. normal：普通索引; unique：唯一索引; fulltext：全文本索引; spatial：空间索引
2. 要进行全文本搜索，必须索引被搜索的列 fulltext（）
3. Match中的值必须和fulltext的一致，且次序一致
```
select *
from user
//where Match(name) Against("zhangsan")   查询name中有zhangsan的数据
//where Match(name) Against("zhangsan" with query expansion)  查询扩张，第一行有zhangsan和lisi 第二行有只有lisi，但第二行也能被查出来

```
### 插入数据
insert into user (id , name , gender ,age ) values ( "1","张三",1,"18"),("2","李四",0,"19")

### 插入检索出的数据
insert into  user （id，name,gender,age)  select id ,name ,gender ,age from user_new  //并不要求两个表的列名相同

### 更新数据
update user set age = "28" , gender = 0  where id = "1"

### 删除数据
delete from user where id = "2" 

如果要删除所有数据，truncate user （更快，因为不是逐条删除，实际是删除了此表又重新创建了）

### 删除表
drop table [IF EXISTS] <表名1> [ , <表名2> , <表名3> …];

### in和exist
in没有用到索引

select *
from A 
where 1=1 
and exist （select 1 from B where 。。。） exist检测行的存在，返回的是true或false 

exist用于B表比A表数据大的情况

### 自动增长
Auto_increment 每个表只允许一个自动增长列

select last_insert_id() 函数，返回最后一个Auto_increment的值

### 默认值
插入列时default 指定默认值，不允许使用函数，只支持常量

### 重命名表
rename table user to user_new

### 视图
创建 create view shitu_name as select 。。。。。。

### 存储过程

1. 创建
create procedure procedure_name1()
begin 
select * from employee;
end

SQL语句后要有分号;

2. 调用
call procedure_name1()

3. 删除
drop procedure procedure_name1

4. 有参的存储过程
create procedure procedure_name2(in employee_id varchar , out employee_name varchar , out employee_age int)
begin 
select name into employee_name from employee where id = employee_id;
select age into employee_age from employee where id = employee_id;
end 

call procedure_name2(@employee_id, @employee_id , @employee_age)

### 事务
MyISAM 不支持
InnoDB 支持

## MySQL数据库设计规范

### 命名规范

1. 命名有意义，一眼知道表、字段是干什么用的
1. **表名、字段**名均使用 **小写字母**，单词间以下划线“_”分割，如：“device_model”。
2. 表名字段名长度禁止超过32个字符，为了统一规范，易于查询，**超过的单词尽量可读缩略的形式进行书写**
3. 普通索引名称以 **idx_** 开头，唯一索引以 **uk_** 开头。
4. 外键尽量以被引用表名称加 **_id** 组成，如：“device_id”。
5. 临时库、表名必须以tmp为前缀，并以日期为后缀，如：“tmp_device”
6. 备份库、表必须以bak为前缀，并以日期为后缀，如：“bak_device_20180611”
7. 避免使用NULL字段，NULL字段很难查询优化，NULL字段的索引需要额外空间，NULL字段的复合索引无效

### 基础规范
1. 统一使用 INNODB 存储引擎，除非某些特定原因再行商议。
2. 表字符集统一使用 **UTF8**，如果emoji等表情符号的存储需求，可申请使用 **UTF8MB4** 字符集。
3. **所有表、字段必须添加注释**，id 可除外， **type型(枚举)需指明主要值的含义**，如”1 公开课，2 线上课”。
4. 使用 **timestamp** 存储时间。
5. 表必需指定主键，尽量采用自增方式。
6. 不强制使用外键约束，此过程由业务端实现，提高性能。
7. 能不用 NOT IN 就不用 NOT IN，会把空和NULL给查出来。
8. 尽可能少的使用 TEXT、BLOB 类型。
9. 单表数据量建议控制在5000W以内，超过的表必须考虑水平切分。
10. 用 **DECIMAL代替FLOAT和DOUBLE**存储精确浮点数
11. 禁止在数据库中存储明文密码，把密码加密后存储
12.  注意limit分页效率。Limit越大，效率越低。可以改写limit，如：select id from t limit 10000, 10   改写为=>   select id from t where id > 10000 limit 10

### 索引优化规范
1. **对于复杂的查询，执行 explain，查看索引使用情况**。
2. 重要的 SQL 必须被索引，比如 UPDATE、DELETE 语句的 **WHERE条件列 ORDER BY、GROUP BY、DISTINCT的字段**。
3. 不在低基数列上建立索引，例如“性别”。
4. 如果是 **索引字段，一定要定义为not null**，因为 null 值会影响 cordinate 统计，影响优化器对索引的选择,不能保证有值，设置相应的默认值。
5. 单表索引个数尽量限制在5个以内。
6. 避免使大表的 JOIN。
7. 最左前缀原则，mysql 使用联合索引时，从左向右匹配，遇到断开或者范围查询时，无法用到后续的索引列。
8. 尽量减少直接使用 SELECT * 读取全部字段。
9. 使用 like 模糊匹配，%不要放首位。
10. 考虑适当的字段冗余，减少不必要的关联查询。

### 事务四大特性
* 原子性
* 一致性
* 隔离性
* 持久性

### 事务-隔离级别
@Transactional(isolation = Isolation.DEFAULT)在B方法上声明

1. Isolation.DEFAULT 使用数据库的隔离级别

2. Isolation.READ_UNCOMMITTED 读未提交 最低的隔离级别，事务未提交前就可以被其他事务读取（会出现 脏读、不可重复读、幻读）

3. Isolation.READ_COMMITTED 读已提交 一个事务提交后才能被其他事务读取 （会出现 不可重复读、幻读） SQL Server的默认级别

4. Isolation.REPEATABLE_READ 可重复读 保证多次读取同一数据时，其值都和开始时的数据一致，禁止读取到别的事务未提交的数据 （会出现幻读） MySQL的默认级别

5. Isolation.SERIALIZABLE 序列化 写会加写锁，读会加读锁，代价最高最可靠。

### 事务安全问题
脏读：一个事务读取了另一个事务未提交的数据
不可重复读：同一事务中，根据同一条件查询出的同一行记录的值不一致
幻读：同一事务中，根据同一条件查询出的记录行数不一致



### 索引
帮助快速获取数据的排好序的数据结构
索引的建立就是对数据的排序的过程

or的查询条件里必须要保证 OR 两端的条件都存在可以用的索引，该查询才可以使用索引   

主键索引：primary key,关键字不能重复、不能为null，同时增加主键约束  
唯一索引：unique index, 关键字不能重复，同时增加唯一约束  
普通索引：Normal index，对关键字没有要求  
全文索引：fulltext key，关键字的来源不是所有字段的数据，而是从字段中提取的特别关键词(MySQL的全文索引几乎不用，因为它不支持中文)   

### 约束
在MySQL中设置字段为唯一约束，程序中再插入相同字段的数据时会报错

### 二叉树
最多有两个子节点
左子结点元素<父节点元素<右子节点元素
#### 满二叉树
所有结点都有左右两个子节点，并且叶子都同一层。
#### 完全二叉树
按照层次给所有结点编号，编号是连续的 。 没有满二叉树完美，满二叉树也属于完全二叉树

### 二叉树的存储结构

#### 顺序存储结构
用一维数组存储二叉树的结点，
一般只用于存储完全二叉树。
#### 链表存储结构
数据域+指针域

### int和bigint

int 占4个字节，带符号范围 [-2^31,2^31-1]，无符号位[0,2^32-1]
bigint 占8个字节，带符号位 [-2^63,2^63-1],无符号位[0,2^64-1]

推荐自增主键用 int unsigned类型
MySQL中int(5)表示显示的宽度为5，但存放123456仍然能插入，默认宽度为11，指定zerofill则会补0

###
MySQL创建的B+Tree索引的根节点是常驻内存的，根节点中的指针域对应的数据在磁盘中。


### 存储引擎
是用来存储对象(记录和索引)的一种文件结构

1. InnoDB （聚集）:
   用的较多，擅长事务、数据的完整性及高并发处理，擅长更新、删除 

   .frm文件：存放表结构信息 
   .idb文件：存放数据和索引，非主键索引的叶结点存了主键，主键索引存储了和(与当前索引字段同行的其他字段)的数据，即叶结点包含了完整的数据记录。所以非主键索引需要两次检索，先检索到主键ID，再检索记录  
2. MyISAM : 
   数据文件和索引文件是分离的（非聚集）：  
   支持全文索引，数据的压缩存储，擅长快速读与写。
   .frm文件： 表结构信息 
   .MYD文件： 数据 
   .MYI文件： 索引 找到指定结点对应的数据指针位置，再从.myd文件中找到数据  
   

 ![存储引擎对比](../image/MySQL/存储引擎对比.png)  

### InnoDB下的当前读和快照读
当前读：加锁的select操作、update、insert、delete。会加锁，悲观锁的一种实现，读取的是记录的最新版本。  
快照读：不加锁的select操作，即不加锁的非阻塞读，避免了加锁，降低了开销。但读的不一定是最新的记录，可能是之前的历史版本。  

### 聚集索引、非聚集索引
聚集索引：数据行的物理顺序与列值(一般是主键的那一列)的逻辑顺序相同，一个表中只能有一个聚集索引。主键索引其实就是聚集索引
非聚集索引：索引的逻辑顺序与磁盘上行的物理存储顺序不同，一个表中可以有多个非聚集索引

### 行锁、表锁
InnoDB：支持行锁和表锁，默认行锁 
MyISM：只支持表锁

行锁：开销小、加锁快、不会出现死锁、锁定粒度大、发生锁冲突的概率高、并发量最低
表锁：开销大、加锁慢、会出现死锁、锁粒度小、发生锁冲突的概率小、并发度高   

### 读写锁 
分为互斥锁和共享锁
    
互斥锁(排他锁)：事务对数据加了互斥锁后可读取、修改数据;  加了互斥锁后其他事务就不能再加任何锁了
共享锁：事务对数据加了共享锁后只能读数据、不能写; 加了共享锁后其他事务还可以再加共享锁，但不能加互斥锁   

### primary key和second key
InnoDB中，主键索引的叶结点包含了完整的数据，非主键索引叶节点存的是主键的值

### 索引类型 
1. b-tree
2. hash
3. 全局索引FULLTEXT
4. R-Tree索引

### b+tree相对于bTree优化了范围查找
因为每个叶结点对应的数据段的第一个和最后一个都存了下一个数据块的指针，可直接顺着查找

### 联合索引

假设某个表有一个联合索引（c1,c2,c3,c4）以下选项哪些字段使用了该索引：
A where c1=x and c2=x and c4>x and c3=x  
B where c1=x and c2=x and c4=x order by c3  
C where c1=x and c4= x group by c3,c2  
D where c1=? and c5=? order by c2,c3  
E where c1=? and c2=? and c5=? order by c2,c3  

根据最左前缀原则
A:四个字段均使用了该索引

B:c1，c2字段使用了该索引

C:c1字段使用该索引

D:c1字段使用该索引

E:c1，c2字段使用了该索引

> 注意将区分度低的索引放在后面，如性别、状态；最左前缀匹配遇到范围查找就会停止匹配

### CSC16


### 索引优化
最左前缀原则


## 优化慢查询 - Explain
可以知道表的读取顺序、数据读取操作的类型、哪些索引可以使用、实际使用了哪些索引、表之间的引用、每张表有多少张被优化器查询等。

### 字段含义(共10列)

1. id 序列号，表示select子句的查询顺序
    值不同时，值越大优先级越高，值相同时从上往下执行

2. select_type 查询类型 ， 区分普通查询、联合查询、子查询等类型

	**select** 简单查询，不包括子查询和union
	**primary** 查询中包含任何复杂的子部分，最外层的查询就被标记为primary
	**subquery** select或where中包含子查询
	**derived** from中包含子查询(也称为派生表)  
	union union后的第二个查询语句
	union result 表示两个union的查询语句的查询结果，id为null
	
3. table表示这一行的数据是关于哪张表的

4. type 
  
   system 表示只有一行记录（系统表），是const的特例  
   const 表示通过一次索引就找到了，用于比较主键（primary key）或唯一索引（unique）  
   eq_ref 唯一性索引扫描，对于索引键，表中只有一条记录与之匹配。  
   ref 非唯一性索引扫描，   
   range 检索指定范围的行，where后有between，>,<,in等  
   index 只遍历索引树，索引文件比数据文件小  
   all 从硬盘全盘扫描，最慢了  
   
   以上查找类型效率递减，一般达到range级别就好，最好达到ref级别  
   
5. possible key 可能会用到的索引  

6. key 真正用到的索引  
   
   为null表示没有用到索引

7. key_len 索引可能会使用的最大长度，通过建表时的长度定义计算而来
```
key_len的长度计算公式：
varchr(10)变长字段且允许NULL    =  10 * ( character set：utf8=3,gbk=2,latin1=1)+1(NULL)+2(变长字段)
varchr(10)变长字段且不允许NULL  =  10 *( character set：utf8=3,gbk=2,latin1=1)+2(变长字段)

char(10)固定字段且允许NULL      =  10 * ( character set：utf8=3,gbk=2,latin1=1)+1(NULL)
char(10)固定字段且不允许NULL    =  10 * ( character set：utf8=3,gbk=2,latin1=1)
```
8. ref 显示索引的哪一列被使用了，如果可能的话，是一个常数

9. rows 估计出 要找到所需的行而要查找的行数，原则上值越小越好  

10. extra 关于MYSQL如何解析查询的额外信息  

### select语句的执行顺序：
from -> on -> join -> where -> group by -> 聚合函数 -> having -> 计算所有的表达式 -> select字段 -> DISTINCT -> order by对结果集进行排序
每个步骤都会产生一个虚拟表，用作下一个步骤的输入



### SQL注入
恶意添加输入or “a”=”a” 时恒成立
解决：用预编译语句 ？ ； mybatis中的mapper方式 # 

### MySQL性能优化：
① 当只要一行数据时，用limit 1；//找到一条结果后就停止搜索了
② 数据库引擎：
MyISAM ：适用于大量查询
InnoDB ：支持“行锁”，写操作时很优秀，还支持事务
③ 用not exists 代替 not in 
not exists 用到了连接中建立的索引的作用，not in 会和每条记录进行比较
④ 尽量不采用不利于索引的操作，如 not in ， in ， is null，is not null ， < > 等
⑤ limit基数比较大时，使用between and
alter table tName add index(字段名) 
⑥ 某个字段总要拿来搜索，就为其建立索引
索引可以提高select的效率，同时也降低了insert和update的效率，因为insert和update时可能会重建索引
7.避免在where语句后进行null值判断

### 创建存储过程
```

create procedure pr_add( a int , b int ) 
begin 
declare c int ;
if a is null  then set a = 0;
end if;
if b is null  then set b = 0;
end if; 
set c = a + b;
select c as sum;
调用存储过程 call pro_add( 10 , 20 );

触发器（实现级联更改）：
create Trigger Tri_name
before/after  insert/update/delete
on tbl_name 
for each row
begin 
包含SQL语句的程序体
end

```

### char和varchar
1. char(n)固定长度、占用内存多但效率更高一点; varchar(n)可变的字符类型;   
   都表示n个字符，注意是字符

2. char最大长度255个字符；varchar最大长度65535个字节，当UTF-8 字符集下，一个字符串最多需要三个字节，此时varchar(n)的n最大是65532/3 = 21844
3. 实际存储的是实际字符串+记录字符串长度的字节

### TIMESTAMP和DATETIME
timestamp：4个字节存储，只能存到2038年，跟时区有关
datetime：8个字节存储，只是保留文本表示的日期和时间

### 一个字符所占字节数

| 编码方式| 英文  | 中文  |
|  ----   | ----  | ----  |
| ASCII码 | 1     | 2     |
| UTF-8   | 1     | 3     |
| GBK     | 1     | 2     |
| Unicode | 2     | 2     |

### InnoDB  引擎的四大特性是什么？
1. 插入缓存
2. 二次写
3. 自适应哈希索引
4. 缓存池

### count(列名)、count(1)、count(*)
执行效果上：  
- count(列名)：只包括列名那一列，统计结果时会忽略列值为null的计数  
- count(1)：忽略所有列，用1表示代码行，统计结果时不会忽略列值为null的计数  
- count(*)：包括了所有列，统计结果时不会忽略列值为null的计数

执行效率上：  
- 列名为主键，count(列名)会比count(1)快  
- 列名不为主键，count(1)会比count(列名)快  
- 表中多个列并没有主键，count(1)比count(*)快  
- 表中有主键，count(主键)执行效率最优  
- 表中只有一个字段，count(*)最优

### 外键的优缺点
优点：由数据库自身保证数据的一致性、完整性；业务逻辑更清晰
缺点：设计外键的增删改都会涉及到检查操作，消耗资源；需要请求对其他表内部加锁可能出现死锁情况  

### a、b两张表连接
a表3条数据，b表5条数据  
from a left join b，查询最少3条，最多(3-1+5)=7条数据  
from a inner join b，查询最少0条，最多5条数据

### 数据库连接池
c3p0,dbcp,HikariCP,Druid

### SQL优化
查询语句：
> where后不要使用函数或表达式，或导致全表扫描而不能用索引
> where后尽量不要null判断、不要 !=或<> 
> 尽量不用not in。或用not exists代替，not in后面('a','b')里没有null时会查出非null的正常数据，('a','b',null)里面有null时，会查不到数据
> select语句只需要查询一条记录时用 limit 1
> EXPLAIN 优化SELECT语句
> 为搜索字段创建索引
> like '%abc%'不会走索引，而'abc%'会走索引
> 不要直接使用select * 导致这全局扫描  
> join代替子查询  
> OR改写成IN ，OR是n级别，IN是log(n)级别
> 对于连续数值，使用between and代替in
> 避免强制类型转换，使用同类型进行比较'123'和'123'比，123和123比

设计表：
> 每一张表都设置ID属性
> 对于枚举类型的值，最好用ENUM而不是VARCHAR，如性别、星期、类型
> 字段设计尽量NOT NULL

其他：
> 拆分大的delete、insert语句


### 遇到过的性能问题


### MVCC
What？ 多版本并发控制  
For? 一般在数据库的管理系统中，实现对数据库的并发访问。例如在MySQL的InnoDB中是为了提高数据库的并发性能，解决读写冲突，即使有读写冲突时也能做到不加锁、非阻塞并发读。  
How？ 基于3个隐式字段、undo日志、Read View等完成的   

> 隐式字段: 
DB_TRX_ID  6byte,记录最近修改/插入事务的ID  
DB_ROLL_PTR  7byte,回滚指针，指向这条记录的上一个版本。用于配合undo日志  
DB_ROLL_ID  6byte,隐式的自增ID(主键) 

> Read View
事务进行快照读操作时产生的读视图

> undo log 
1. insert undo log，在事务insert新纪录时产生的undo log，在事务回滚时需要，在事务提交后丢弃。  
2. update undo log，在事务update或delete时产生，不仅在事务回滚时需要，在快照读时也需要，所以不能随便删除，只有在快速读或事务回滚不涉及该日志时才会被purge线程线程统一清除  

```  
purge线程：更新或删除操作都会设置一个老记录的delete_bit，purge自己也维护了一个read view，
如果DB_TRX_ID相对于purge的read view可见，而且该条记录的delete_bit为true，那么这条记录就会被安全清除掉。
```

### Mysql binlog  
是二进制日志文件，用于记录mysql的数据更新或者潜在更新(比如DELETE语句执行删除而实际并没有符合条件的数据)，在mysql主从复制中就是依靠的binlog



### MySQL的优化

1. 存储引擎

2. 字段类型：

尽可能小（占用存储空间少）、尽可能定长（占用存储空间固定）、尽可能使用整数

**数值**：  

| 整型       | 有符号最小值、最大值 | 无符号最小值、最大值| 适用场景|
| --------   | :-----:          | :----:  |   :----            |  
| tinyint    | -128~127        |  0~255  | 年龄 255            |  
| smallint   | -2^15 ~ 2^15-1  |  0~2^16 | 端口号 65535        |  
| mediumint  | -2^23 ~ 2^23-1  |  0~2^24 | 注册会员用户 1600多万 |  
| int        | -2^31 ~ 2^31-1  |  0~2^32 | 编号 42亿           |  
| bigint     | -2^63 ~ 2^63-1  |  0~2^64 | 微博量 几百亿       |  

浮点型：float 4位、double 8位，内部存储方式是数值，是近似值而非精确值  
定点型：Decimal、Dumeric，内部存储方式是字符串，可以精确取出小数部分。 Decimal(M,D) 最大M位整数，D位小数  

**日期**：  

| 日期      |所占字节|      最小值        |       最大值        |
| --------  |:----- |:----                | :----               |
| Year      |   1   |  1901               | 2155                |
| Time      |   3   | -838:59:59          | 838:59:59           |
| Date      |   4   | 1000-01-01          | 9999-12-31          |
| TimeStamp |   4   | 1970-01-01 00:00:00 | 2038-01-19 03:14:07 |
| DataTime  |   8   | 1000-01-01 00:00:00 | 9999-12-31 23:59:59 |

TimeStemp可根据当前系统时间自动更新时间、插入null也是自动插入当前系统时间、会根据当前时区来存储和查询时间(存储时对当前时区进行转换，查询时再转换为当前的时区)  
也可用int(11)存放时间戳来替换DataTime，int占4个字节、查询快、排序效率高、计算时间差范围时比较方便  

**字符**  
字符集校对规则、字符集类型  
短文本定长用char、变长用varchar、长文本用text  

**属性**
无符号(Unsigned)、填充零(ZeroFill)、是否为空、默认值、主键、自动编码  

3. 索引：  
尽可能的使用唯一索引，重复值越少，索引效果越强    
充分利用左前缀，针对复合索引 
索引字段定义为非null，where后不要用null作为条件  
值分布较少的不适合建索引，如性别，索引多影响更新、插入，占更多的内存  
不用外键，用程序来保证约束  

4. 缓存：  
    读多写少采用缓存，如redis
5. 分区：  
分区只是将数据划分在多个位置存放，可以是相同的磁盘也可以在不同的机器上；  
分区后表面上还是一张表，只是数据散列到多个位置了，依然正常查询，db自动组织分区的数据；  
分区与存储引擎无关，是MySQL逻辑层完成的    
MySQL的分区算法：取余：key、hash 条件：List、Rang  
分区表无法使用外键约束  
所有的分区必须使用相同的存储引擎  


6. 分表：  
一张表分为多张，一次查询分为多次查询，再把结果代码实现组合起来返回给用户，MySQL5.1之后分表就很少用了，都是用分区代替分表。   
水平分表：多个表字段一样  
垂直分表：表字段不一样，可依据常用字段和非常用字段分开存数据  

7. 服务器：  
MySQL服务器支持复制功能，主从复制，主写从读，进行读写分离实现负载均衡  

8. SQL优化：  
并发性sql， 少用多表操作，拆分为多次执行，这样可能会增加查询缓存的利用率。  
大量数据插入， 多次insert或从文件载入；建议先关闭约束及索引，插入完成后再生成约束和索引。  
limit分页的使用，Limit越大，效率越低。使用条件过滤先精确定位到需要的数据上，如select id from t limit 10000, 10   改写为=>   select id from t where id > 10000 limit 10
慢查询日志的使用



慢查询优化：  
explain select SQL_NO_CACHE 




## SQL

### 获取明天一整天的数据
select  *
from statistic_data
where data_type = 0
and get_time >= DATE_FORMAT(DATE_ADD(now() ,INTERVAL 1 day),'%Y-%m-%d') 
and get_time < DATE_FORMAT(DATE_ADD(now() ,INTERVAL 2 day),'%Y-%m-%d')

### 排序
ORDER BY FIELD( r.onlineStatus , 0 , 2 )  , FIELD(r.title, "医师", "副主任医师", "主任医师" ) DESC



### CentOS7里操作命令
查看MySQL启动状态  service mysqld status
重启MySQL   service mysqld start  
启动报错，可能是使用的用户不对，用 service mysqld start --user=root

登录到MySQL    mysql -uroot -p123456
查看所有数据库 show databases;


## 报错

### 启动MySQL服务时
```
service mysqld start --user=root 启动MySQL服务时，
/var/log/mysqld.log中打印的错误日志

2022-06-18T02:53:34.911359Z 0 [System] [MY-010116] [Server] /usr/sbin/mysqld (mysqld 8.0.23) starting as process 16057
2022-06-18T02:53:35.040744Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
2022-06-18T02:55:25.086791Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
2022-06-18T02:57:20.000077Z 0 [System] [MY-011323] [Server] X Plugin ready for connections. Bind-address: '::' port: 33060, socket: /var/run/mysqld/mysqlx.sock
2022-06-18T02:57:26.622027Z 0 [System] [MY-010229] [Server] Starting XA crash recovery...

端口占用，可能是MySQL没有完全关闭，使用重启命令就好了
service mysqld restart --user=root

```

### tinyint(1)

数据库的字段类型Bool和Boolean是tinyint(1)的别名，0是false，其他都是true



|  返回的数值   | Java字段类型   |MySQL字段类型 | MySQL保存的数值 |
| ---- | ----- | ---- | ---- |
| true、false | Boolean | bit(1) | 只能存1、0 |
| 1、0 | Integer | bit(1) | 只能存1、0 |
|  -128~127    | Integer | tinyint、tinyint(1)、tinyint(4) | -128~127 |
| 好乱 | Boolean | tinyint(1)、tinyint(4) | -128~127 |
|      | Data、LocalDate | date | 2022-03-10 |
|      |       | time |      |
|      |       | datetime |      |
|      |       | timestamp |      |

### Date<--->date

```
入参和Java注解中的格式要对应一致，或者比注解中格式多，不然会报错

1.
入参：testDate：2022-03-10
Java：
@DateTimeFormat(pattern="yyyy-MM-dd")
private Date testDate;
MySQL：2022-03-10

2.
入参：testDate：2022-03-10 06:03
Java：
@DateTimeFormat(pattern="yyyy-MM-dd HH:mm")
private Date testDate;
MySQL：2022-03-10

3. 
入参：testDate：2022-03-10 06:03:25
Java：
@DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
private Date testDate;
MySQL：2022-03-10


4.
返回："testDate": "2022-03-09T16:00:00.000+00:00"
Java：private Date testDate;
MySQL：2022-03-10

5.
返回："testDate": "2022-03-09"
Java：@JsonFormat(pattern = "yyyy-MM-dd")
    private Date testDate;
MySQL：2022-03-10

6. 
返回："testDate": "2022-03-09 16:00"
Java：@JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private Date testDate;
MySQL：2022-03-10

7. 
返回："testDate": "2022-03-09 16:00:00"
Java：@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date testDate;
MySQL：2022-03-10

```


### LocalDate<--->date
```
入参只能这一种方式，其他会报错
1. 
入参：testDate：2022-03-11
Java：
@DateTimeFormat(pattern="yyyy-MM-dd")
private LocalDate testDate;
MySQL：2022-03-11


4.
返回："testDate": "2022-03-11"
Java：private LocalDate testDate;
MySQL：2022-03-11

5.
返回："testDate": "2022-03-11"
Java：@JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate testDate;
MySQL：2022-03-11

```

### LocalDateTime<--->date

```
入参和Java注解中的格式要对应一致，或者比注解中格式多，不然会报错
1.
入参：testDate：2022-03-12
Java：
@DateTimeFormat(pattern="yyyy-MM-dd")
private LocalDateTime testDate;
MySQL：2022-03-12

2.
入参：testDate：2022-03-12 06:03
Java：
@DateTimeFormat(pattern="yyyy-MM-dd HH:mm")
private LocalDateTime testDate;
MySQL：2022-03-12

3. 
入参：testDate：2022-03-12 06:03:25
Java：
@DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
private LocalDateTime testDate;
MySQL：2022-03-12


4.
返回："testDate": "2022-03-12T00:00:00"
Java：private LocalDateTime testDate;
MySQL：2022-03-12

5.
返回："testDate": "2022-03-12"
Java：@JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime testDate;
MySQL：2022-03-12

6. 
返回："testDate": "2022-03-12 16:00"
Java：@JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime testDate;
MySQL：2022-03-12

7. 
返回："testDate": "2022-03-12 16:00:00"
Java：@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime testDate;
MySQL：2022-03-12

```

datetime相比于date只是在数据库中存储了时分秒，和Java中类型对应关系是一样的



# Others
SELECT * FROM information_schema.innodb_trx

## 查看正在锁的事务
SELECT * FROM INFORMATION_SCHEMA.INNODB_LOCKS;
## 查看等待锁的事务
SELECT * FROM INFORMATION_SCHEMA.INNODB_LOCK_WAITS;
## 首先查询是否锁表
SHOW OPEN TABLES WHERE In_use > 0;
## 查询进程
SHOW PROCESSLIST;

kill 45760