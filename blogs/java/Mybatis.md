---
title: Mybatis
date: 2019-04-09 00:17:45
categories: Java
tags:
---

# Mybatis

### foreach标签

<if test="query.employeeList != null  and query.employeeList.size()>0">
            
			and eil.account_id not in
            <foreach collection="query.employeeList" item="id" index="index" open="(" close=")" separator=",">
                #{id}
            </foreach>
</if>
not in ()会报错，所以要对queryemployeeList判空

collection 传入的集合，list、array、自定义的参数（@Param("query") ）
item 集合中迭代元素的别名
index list和数组中，index表示元素的序号，map中表示key 。 可选
open 代码的开始符号 
close 代码的结束符号
separator 分隔符

### in和exist
in没有用到索引

select *
from A 
where 1=1 
and exist （select 1 from B where 。。。） exist检测行的存在，返回的是true或false 

exist用于B表比A表数据大的情况

### if else
        <choose>
            <when test="pushMethod != null and pushMethod !='' ">
                and push_method = #{pushMethod}
            </when>
            <otherwise>
                and (push_method ='xmpp' or push_method = 'jpush')
            </otherwise>
        </choose>
		
		
### left
select CONCAT(LEFT(a.user_phone,3), '5个*' , right(a.user_phone,3))  as userPhone

### collection标签

    <resultMap id="userInfoForCall" type="cn.kinglian.phoneportal.model.vo.UserInfoForCallVo">
        <result column="audit_diseases" property="auditDiseases"/>
        <collection property="tagsList" column="{userId=id}" ofType="list" select="getTags">

        </collection>
    </resultMap>
	
		<select id="getTags" resultType="string">
        select name
        from user_tags ut
        left join tags t on t.id = ut.tags_id
        where ut.user_id = #{userId}
		</select>
	
	 <select id="getUserInfoForCall" resultMap="userInfoForCall" parameterType="string">
		SELECT u.id, u.avatar, u.account, u.real_name, u.gender, u.age, u.create_time, u.sfzh
		FROM USER u
		WHERE
		u.deleted != 1
		AND u.account_id = #{value}
	 </select>

### 延迟加载 VS 立即加载   
延迟加载：在真正需要数据时才发起查询，不用时不查询关联的数据，又叫做按需查询(懒加载)。多用于一对多、多对多，lazyLoadingEnabled属性设置，默认false  
立即加载：不管需不需要，只要调用方法，立即加载所有数据。多用于多对一、一对一，lazyLoadingEnabled属性设置，默认false  

### 一级缓存、二级缓存
一级缓存：是SQLSession级别的缓存，缓存的是对象，当SqlSession提交、关闭等其他更新数据库的操作后，一级缓存就会失效。默认开启
二级缓存：是SQLSessionFactory级别的缓存，缓存中存储的是数据，命中二级缓存时，通过存储的数据构造成对象再返回。默认关闭
查询顺序： 二级缓存->一级缓存->数据库数据


## queryWrapper是链式调用的

### and里用or 
```
//且不能忘了and
queryWrapper.and(wrapper -> wrapper.like("patient_name",query.getKeyword()).or().like("employee_phone",query.getKeyword()));  

```

### 大于小于
```
gt 大于，     .gt("create_time", startTime); 
ge 大于等于， .ge("create_time", startTime);
lt 小于，     .lt("create_time",endTime);
le 小于等于   .le("create_time",endTime);

查询条件： beginTime < create_time < endTime

```

<![CDATA[<=]]>
<![CDATA[>=]]>

### like
and nuclide like concat('%',${search.nuclide},'%')


### Mybatis-plus updateById
[更新null或空字符串](https://blog.csdn.net/l848168/article/details/92829930)



### 更新某个字段
可以直接更新，没必要先查出再判空；没有则更新失败，有就会更新成功

### 
public class RealDataServiceImpl extends ServiceImpl<RealDataMapper, RealData> implements IRealDataService
不需要重复引用RealDataMapper（@Autowired RealDataMapper realDataMapper）,  
直接用baseMapper即可


### and、or常用
```
// A and B
.eq("a", "A").eq("b",B);

// A or B
.eq("a", "A").or().eq("b",B);

// A or (B and C)
.eq("a", "A").or(i -> i.eq("b", "B").eq("c", "C"));

// A or (B or C)
.eq("a", "A").or(i -> i.eq("b", "B").or().eq("c", "C"));

// A and (B and C)
.eq("a", "A").and(i -> i.eq("b", "B").eq("c", "C"));

// A and (B or C)
.eq("a", "A").and(i -> i.eq("b", "B").or().eq("c", "C"));

```

### 查询一条数据
```
*ServiceImpl.java

	return this.lambdaQuery().eq(MonitoringObject::getSyncId, syncId).one();


```
### 更新
```
	List<String> membraneCodeList = Stream.of(membraneCode).collect(java.util.stream.Collectors.toList());
	this.lambdaUpdate().set(sampleId != null, MembraneWeighRecord::getSampleId, sampleId)
			.set(labPretreatmentId != null, MembraneWeighRecord::getLabPretreatmentId,labPretreatmentId)
			.in(MembraneWeighRecord::getMembraneCode, membraneCodeList)
			.update();

```
### 删除

```
//  LambdaQueryWrapper 相当于 new QueryWrapper().lambda();

	LambdaQueryWrapper<SampleDetectPlanUser> wrapper = new LambdaQueryWrapper<>();
	wrapper.eq(SampleDetectPlanUser::getPlanId, planId);
	this.remove(wrapper);
```







  














