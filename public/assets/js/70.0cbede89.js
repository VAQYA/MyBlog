(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{687:function(e,a,t){"use strict";t.r(a);var r=t(5),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"mybatis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybatis"}},[e._v("#")]),e._v(" Mybatis")]),e._v(" "),t("h3",{attrs:{id:"foreach标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#foreach标签"}},[e._v("#")]),e._v(" foreach标签")]),e._v(" "),t("if",{attrs:{test:"query.employeeList != null  and query.employeeList.size()>0"}},[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('\t\tand eil.account_id not in\n        <foreach collection="query.employeeList" item="id" index="index" open="(" close=")" separator=",">\n            #{id}\n        </foreach>\n')])])])]),e._v("\nnot in ()会报错，所以要对queryemployeeList判空\n"),t("p",[e._v('collection 传入的集合，list、array、自定义的参数（@Param("query") ）\nitem 集合中迭代元素的别名\nindex list和数组中，index表示元素的序号，map中表示key 。 可选\nopen 代码的开始符号\nclose 代码的结束符号\nseparator 分隔符')]),e._v(" "),t("h3",{attrs:{id:"in和exist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in和exist"}},[e._v("#")]),e._v(" in和exist")]),e._v(" "),t("p",[e._v("in没有用到索引")]),e._v(" "),t("p",[e._v("select *\nfrom A\nwhere 1=1\nand exist （select 1 from B where 。。。） exist检测行的存在，返回的是true或false")]),e._v(" "),t("p",[e._v("exist用于B表比A表数据大的情况")]),e._v(" "),t("h3",{attrs:{id:"if-else"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if-else"}},[e._v("#")]),e._v(" if else")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("    <choose>\n        <when test=\"pushMethod != null and pushMethod !='' \">\n            and push_method = #{pushMethod}\n        </when>\n        <otherwise>\n            and (push_method ='xmpp' or push_method = 'jpush')\n        </otherwise>\n    </choose>\n")])])]),t("h3",{attrs:{id:"left"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#left"}},[e._v("#")]),e._v(" left")]),e._v(" "),t("p",[e._v("select CONCAT(LEFT(a.user_phone,3), '5个*' , right(a.user_phone,3))  as userPhone")]),e._v(" "),t("h3",{attrs:{id:"collection标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#collection标签"}},[e._v("#")]),e._v(" collection标签")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('<resultMap id="userInfoForCall" type="cn.kinglian.phoneportal.model.vo.UserInfoForCallVo">\n    <result column="audit_diseases" property="auditDiseases"/>\n    <collection property="tagsList" column="{userId=id}" ofType="list" select="getTags">\n\n    </collection>\n</resultMap>\n\n\t<select id="getTags" resultType="string">\n    select name\n    from user_tags ut\n    left join tags t on t.id = ut.tags_id\n    where ut.user_id = #{userId}\n\t</select>\n\n <select id="getUserInfoForCall" resultMap="userInfoForCall" parameterType="string">\n\tSELECT u.id, u.avatar, u.account, u.real_name, u.gender, u.age, u.create_time, u.sfzh\n\tFROM USER u\n\tWHERE\n\tu.deleted != 1\n\tAND u.account_id = #{value}\n </select>\n')])])]),t("h3",{attrs:{id:"延迟加载-vs-立即加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#延迟加载-vs-立即加载"}},[e._v("#")]),e._v(" 延迟加载 VS 立即加载")]),e._v(" "),t("p",[e._v("延迟加载：在真正需要数据时才发起查询，不用时不查询关联的数据，又叫做按需查询(懒加载)。多用于一对多、多对多，lazyLoadingEnabled属性设置，默认false"),t("br"),e._v("\n立即加载：不管需不需要，只要调用方法，立即加载所有数据。多用于多对一、一对一，lazyLoadingEnabled属性设置，默认false")]),e._v(" "),t("h3",{attrs:{id:"一级缓存、二级缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一级缓存、二级缓存"}},[e._v("#")]),e._v(" 一级缓存、二级缓存")]),e._v(" "),t("p",[e._v("一级缓存：是SQLSession级别的缓存，缓存的是对象，当SqlSession提交、关闭等其他更新数据库的操作后，一级缓存就会失效。默认开启\n二级缓存：是SQLSessionFactory级别的缓存，缓存中存储的是数据，命中二级缓存时，通过存储的数据构造成对象再返回。默认关闭\n查询顺序： 二级缓存->一级缓存->数据库数据")]),e._v(" "),t("h2",{attrs:{id:"querywrapper是链式调用的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#querywrapper是链式调用的"}},[e._v("#")]),e._v(" queryWrapper是链式调用的")]),e._v(" "),t("h3",{attrs:{id:"and里用or"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#and里用or"}},[e._v("#")]),e._v(" and里用or")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//且不能忘了and\nqueryWrapper.and(wrapper -> wrapper.like("patient_name",query.getKeyword()).or().like("employee_phone",query.getKeyword()));  \n\n')])])]),t("h3",{attrs:{id:"大于小于"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大于小于"}},[e._v("#")]),e._v(" 大于小于")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('gt 大于，     .gt("create_time", startTime); \nge 大于等于， .ge("create_time", startTime);\nlt 小于，     .lt("create_time",endTime);\nle 小于等于   .le("create_time",endTime);\n\n查询条件： beginTime < create_time < endTime\n\n')])])]),e._v(" "),t("h3",{attrs:{id:"like"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#like"}},[e._v("#")]),e._v(" like")]),e._v(" "),t("p",[e._v("and nuclide like concat('%',${search.nuclide},'%')")]),e._v(" "),t("h3",{attrs:{id:"mybatis-plus-updatebyid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-plus-updatebyid"}},[e._v("#")]),e._v(" Mybatis-plus updateById")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/l848168/article/details/92829930",target:"_blank",rel:"noopener noreferrer"}},[e._v("更新null或空字符串"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"更新某个字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新某个字段"}},[e._v("#")]),e._v(" 更新某个字段")]),e._v(" "),t("p",[e._v("可以直接更新，没必要先查出再判空；没有则更新失败，有就会更新成功")]),e._v(" "),t("h3",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")])]),e._v(" "),t("p",[e._v("public class RealDataServiceImpl extends ServiceImpl<RealDataMapper, RealData> implements IRealDataService\n不需要重复引用RealDataMapper（@Autowired RealDataMapper realDataMapper）,"),t("br"),e._v("\n直接用baseMapper即可")]),e._v(" "),t("h3",{attrs:{id:"and、or常用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#and、or常用"}},[e._v("#")]),e._v(" and、or常用")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// A and B\n.eq("a", "A").eq("b",B);\n\n// A or B\n.eq("a", "A").or().eq("b",B);\n\n// A or (B and C)\n.eq("a", "A").or(i -> i.eq("b", "B").eq("c", "C"));\n\n// A or (B or C)\n.eq("a", "A").or(i -> i.eq("b", "B").or().eq("c", "C"));\n\n// A and (B and C)\n.eq("a", "A").and(i -> i.eq("b", "B").eq("c", "C"));\n\n// A and (B or C)\n.eq("a", "A").and(i -> i.eq("b", "B").or().eq("c", "C"));\n\n')])])]),t("h3",{attrs:{id:"查询一条数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询一条数据"}},[e._v("#")]),e._v(" 查询一条数据")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("*ServiceImpl.java\n\n\treturn this.lambdaQuery().eq(MonitoringObject::getSyncId, syncId).one();\n\n\n")])])]),t("h3",{attrs:{id:"更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[e._v("#")]),e._v(" 更新")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\tList<String> membraneCodeList = Stream.of(membraneCode).collect(java.util.stream.Collectors.toList());\n\tthis.lambdaUpdate().set(sampleId != null, MembraneWeighRecord::getSampleId, sampleId)\n\t\t\t.set(labPretreatmentId != null, MembraneWeighRecord::getLabPretreatmentId,labPretreatmentId)\n\t\t\t.in(MembraneWeighRecord::getMembraneCode, membraneCodeList)\n\t\t\t.update();\n\n")])])]),t("h3",{attrs:{id:"删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[e._v("#")]),e._v(" 删除")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//  LambdaQueryWrapper 相当于 new QueryWrapper().lambda();\n\n\tLambdaQueryWrapper<SampleDetectPlanUser> wrapper = new LambdaQueryWrapper<>();\n\twrapper.eq(SampleDetectPlanUser::getPlanId, planId);\n\tthis.remove(wrapper);\n")])])])],1)}),[],!1,null,null,null);a.default=s.exports}}]);