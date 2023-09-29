---
title: Activiti5
date: 2020-10-01
tags: tag1
categories: 工作流
---
## 常用Service
>仓库服务：RepositoryService，用来部署流程图  
运行时服务：RuntimeService，开启流程实例  
任务服务：TaskService，获取任务  
历史服务：HistoryService，查询历史任务执行流程  
用户服务：IdentityService，操作用户信息，用户分组信息等

## 初始化Activiti所需要的的25张表

```java
// 引擎配置
ProcessEngineConfiguration pec = ProcessEngineConfiguration.createStandaloneProcessEngineConfiguration();
pec.setJdbcDriver("com.mysql.cj.jdbc.Driver");
pec.setJdbcUrl("jdbc:mysql://localhost:3306/db_activiti");
pec.setJdbcUsername("root");
pec.setJdbcPassword("123456");
pec.setDatabaseSchemaUpdate(ProcessEngineConfiguration.DB_SCHEMA_UPDATE_TRUE);// 入参true，表示自动创建和更新表

// 初始化数据库并返回流程引擎对象
ProcessEngine pe = pec.buildProcessEngine();
```
还可以通过ProcessEngines获取默认activiti.cfg.xml文件的配置的流程引擎实例
`rocessEngine pe2 = ProcessEngines.getDefaultProcessEngine();`

## 部署流程定义

主要是RepositoryService
```java
RepositoryService repositoryService = pe1.getRepositoryService();//获取部署相关Service
repositoryService.createDeployment()
                .name("工作流任务名称").addClasspathResource()//从类路径下获取.bpmn20.xml文件
                .addInputStream()//通过文件流获取
                .addString()//通过字符串获取
                .deploy();//部署
```
删除流程定义
`processEngine.getRepositoryService().deleteDeployment(deploymentId, force);`//force为true时，表示级联删除，除了act_re_procdef外还会删除act_re_deployment、act_hi_procinst等

## 启动流程实例

主要是RuntimeService
```java
RuntimeService runtimeService = pe1.getRuntimeService();
//启动一个流程实例
ProcessInstance pi = runtimeService.startProcessInstanceByKey(key_);
//其中key_是act_re_procdef.KEY_字段
pi.getProcessDefinitionId(); // 获取流程定义id
```

## 查看任务、完成当前环节的任务

```java
TaskService taskService = pe1.getTaskService();
List<Task> list = taskService.createTaskQuery()
                    .taskAssignee("张三")//指定某个人,当多用户时，指定候选人用taskCandidateUser("张三")
                    .list();//获取任务列表
//任务api       
task.getProcessInstanceId();//获取流程实例id
task.getProcessDefinitionId(); //获取流程定义id

taskService.complete(taskId);//调用此方法来完成当前环节的任务
```

## 流程变量
任务流程执行过程中需要将一些数据带给后面的任务中，流程变量会存在act_ru_variable表中

1. 通过taskService设置/获取流程变量，通过taskId绑定（用户任务表act_ru_task.ID_）
```java
taskService.setVariable(taskId1,key,value);//  将变量赋值给taskId1此任务下；此任务结束之后，在下一个任务通过taskService.getVariable(taskId2,key);也能够获取到变量的内容

taskService.setVariables(taskId,map);//赋值map格式的流程变量
taskService.setVariableLocal(taskId,key,value);//局部流程变量，只能当前taskId1能够获取，后续的taskId2则获取不到
```
2. 通过runtimeService设置/获取流程变量，通过executionId绑定，（执行对象表act_ru_execution.ID_）
```java
runtimeService.setVariable(executionId,key,value);//executionId不会变，不像taskId总会变每个流程都会创建一条任务数据
runtimeService.getVariable(executionId,key);//获取流程变量
runtimeService.setVariables(taskId,map);//赋值map格式的流程变量
```

3. 启动流程时就设置流程变量
```java
runtimeService.startProcessInstanceByKey(processDefinitionKey,map);//processDefinitionKey是流程定义表的id(act_re_procdef.KEY_)
```
4. 完成任务时设置流程变量
```java
taskService.complete(taskId,map);//完成taskId的任务，顺便设置流程变量
```

## 流程控制网关Gateways
多线路时：流程图中如果有分叉线，在其中一条线A中Condition expression写上条件 ${age==18}，则在前一个任务完成时，如果设置的流程变量.setVariable(taskId,age,18);就会走A线指向的后续流程
### 排他网关Exclusive gateway
几条线路只能有一条线路向下运行。使用排他网关会有个默认的执行线路，即没有写条件的那个。如果所有线路都写上了条件，就跟多线路一样了
### 并行网关Parallel gateway
几条线路会同时执行，不需要写条件。

## 任务分配
### 个人任务分配
1. 流程图配置中写死
流程图任务节点的Assignee属性中写死用户
2. 使用流程变量
流程图任务节点的Assignee属性中写流程变量${userId}
3. TaskListener监听实现
(1).MyListener实现了TaskListener接口，并重写notify的方法
```java
public class MyListener implements TaskListener {
    @Override
    public void notify(DelegateTask delegateTask) {
        delegateTask.setAssignee("张三");
    }
}
```
(2).流程图任务节点的Execution listeners属性中，写上监听接口的实现类MyListener

### 多人任务分配
分配任务给多个人，只要有一个人办理就能继续往下执行
1. 流程图配置中写死
流程图任务节点的Candidate Users属性中写死多个用户，用逗号隔开eg: 张三,李四
2. 使用流程变量
流程图任务节点的Candidate Users属性中写流程变量${userIds}，环节设置流程变量taskService.setVariable(taskId,userIds,"张三,李四")
3. TaskListener监听实现
    (1).MyListener实现了TaskListener接口，并重写notify的方法
```java
public class MyListener implements TaskListener {
    @Override
    public void notify(DelegateTask delegateTask) {
        delegateTask.addCandidateUser("张三");
        delegateTask.addCandidateUser("李四");
    }
}
```
  (2).流程图任务节点的Execution listeners属性中，写上监听接口的实现类MyListener
### 组任务分配

分配任务给一个组，这个组里的人都可以操作
1. 流程图配置中写死
    流程图任务节点的Candidate Groups属性中写死一个组的id（act_id_group.ID_），用逗号隔开eg: 张三,李四  

2. 使用流程变量
    流程图任务节点的Candidate Groups属性中写流程变量${groupId}，环节设置流程变量taskService.setVariable(taskId,groupId,"张三,李四");  

3. TaskListener监听实现
    (1).MyListener实现了TaskListener接口，并重写notify的方法
```java
  public class MyListener implements TaskListener {
      @Override
      public void notify(DelegateTask delegateTask) {
          delegateTask.addCandidateGroup(groupId);
      }
  }
```
  (2).流程图任务节点的Execution listeners属性中，写上监听接口的实现类MyListener

### 25张表说明

act_evt_log，日志
act_ge_*，ge即general，通用数据

>act_ge_bytearray，资源文件表
act_ge_property，系统配置表

act_hi_*，hi即history，包含了历史数据
>act_hi_actinst，活动节点历史表，相对于历史任务表多了对开始、结束节点的信息记录  
act_hi_attachment  
act_hi_comment  
act_hi_detail  
act_hi_identitylink，身份联系历史表  
act_hi_procinst，流程实例历史表  
act_hi_taskinst，历史任务表  
act_hi_varinst

act_id_*，id即identity，包含了身份信息，如用户、组等
>act_id_group，分组表  
act_id_info，用户扩展信息表  
act_id_membership，关联关系表  
act_id_user，用户信息表

act_re_*，re即repository，包含了流程定义和流程静态资源（图片、规则等）
>act_re_deployment，流程部署表
act_re_model  
act_re_procdef，流程定义表，和act_re_deployment是一对一的关系，act_re_procdef.DEPLOYMENT_ID_ =act_re_deployment.ID_

act_ru_*，ru即runtime，表示运行时的数据，只在流程实例执行过程中保存数据，执行结束后就会删除这些记录
>act_ru_event_subscr  
act_ru_execution，流程实例运行时，执行对象表  
act_ru_identitylink，流程实例运行时，身份联系表  
act_ru_job  
act_ru_task，流程实例运行时，用户任务表  
act_ru_variable，流程实例运行时，流程变量表

## *.bpmn20.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:activiti="http://activiti.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.activiti.org/processdef">
  <process id="process" isExecutable="true">
    <startEvent id="start"></startEvent>
    <userTask id="usertask1" name="记录录入" activiti:candidateUsers="${usertask1_users}"></userTask>
    <sequenceFlow id="sid-E5A7BFED-C9F2-4E74-8FA2-2B72BE330F40" sourceRef="start" targetRef="usertask1"></sequenceFlow>
    <userTask id="usertask2" name="记录审核" activiti:candidateUsers="${usertask2_users}"></userTask>
    <endEvent id="end"></endEvent>
    <sequenceFlow id="usertask2_tran" name="记录审核" sourceRef="usertask2" targetRef="end"></sequenceFlow>
    <sequenceFlow id="usertask1_tran" name="记录录入" sourceRef="usertask1" targetRef="usertask2"></sequenceFlow>
  </process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_process">
    <bpmndi:BPMNPlane bpmnElement="process" id="BPMNPlane_process">
      <bpmndi:BPMNShape bpmnElement="start" id="BPMNShape_start">
        <omgdc:Bounds height="30.0" width="30.0" x="230.66666666666669" y="130.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="usertask1" id="BPMNShape_usertask1">
        <omgdc:Bounds height="80.0" width="100.0" x="390.0" y="105.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="usertask2" id="BPMNShape_usertask2">
        <omgdc:Bounds height="80.0" width="100.0" x="600.0" y="105.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="end" id="BPMNShape_end">
        <omgdc:Bounds height="28.0" width="28.0" x="840.0" y="131.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge bpmnElement="usertask1_tran" id="BPMNEdge_usertask1_tran">
        <omgdi:waypoint x="490.0" y="145.0"></omgdi:waypoint>
        <omgdi:waypoint x="600.0" y="145.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="usertask2_tran" id="BPMNEdge_usertask2_tran">
        <omgdi:waypoint x="700.0" y="145.0"></omgdi:waypoint>
        <omgdi:waypoint x="840.0" y="145.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-E5A7BFED-C9F2-4E74-8FA2-2B72BE330F40" id="BPMNEdge_sid-E5A7BFED-C9F2-4E74-8FA2-2B72BE330F40">
        <omgdi:waypoint x="260.6666666666667" y="145.0"></omgdi:waypoint>
        <omgdi:waypoint x="390.0" y="145.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>
```

# Other

IDEA中插件，actiBPM插件停止维护了，使用Activiti BPMN visualizer插件替代，但是Activiti BPMN visualizer只能识别`.bpmn20.xml`结尾的文档
