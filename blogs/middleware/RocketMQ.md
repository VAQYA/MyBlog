---
title: RocketMQ
date: 2020-10-01
tags: tag1
categories: 中间件
---

## 本地调试

### ip、端口
 172.26.6.108:9876
localhost:9876

### 启动NameServer 
D:\DoWork\rocketmq-all-4.7.0-bin-release\bin 下进入cmd，执行start mqnamesrv.cmd  

### 启动Broker  
D:\DoWork\rocketmq-all-4.7.0-bin-release\bin 下进入cmd，执行start mqbroker.cmd -n 127.0.0.1:9876 autoCreateTopicEnable=true

### 启动监控插件
localhost:9876是在D:\DoWork\rocketmq-externals-master\rocketmq-console\src\main\resources下的application.properties配置的  
编译打包：D:\DoWork\rocketmq-externals-master\rocketmq-console下进入cmd，执行mvn clean package -Dmaven.test.skip=true  
启动：D:\DoWork\rocketmq-externals-master\rocketmq-console\target下进入cmd，执行java -jar rocketmq-console-ng-2.0.0.jar，或直接双击start-rocketmq-console.sh

## 消费模型
主题模型：   
发布者：消息的生产者  
订阅者：消息的消费者  
主题：存放消息的容器

## 角色
**Broker**  
 提供消息的接收、存储、拉取等功能，分为Master和Slave，一个Master对应多个Slave(通过制定相同的BrokerName，不同的BrokerId定义，BrokerId为0表示Master，非0表示Slave) 

**NameServer** 
Broker向它注册路由信息，Client向其获取路由信息，它本身是没有状态的，多个NameServer之间没有通信，可以横向扩展多台，Broker会和每一台NameServer建立长连接  

 **Producer**
消息队列的生产者，需要与NameServer建立连接，从NameServer获取Topic路由信息，并向提供Topic服务的Broker Master建立连接  

**Consumer**
消息队列的消费者，同样与NameServer建立连接，从NameServer获取Topic路由信息，并向提供Topic服务的Broker Master，Slave建立连接  

**Topic**
主题，用来区分不同类型的消息，发送和接收前都需要先创建Topic，一个Topic可以设置一个或多个Message Queue，  
这样消息可以并行往各个队列Message Queue发送消息，消费者也可以并行的从多个Message Queue读取消息；  
生产者和消费者必须在同一个Topic下才能通讯

**Tag**
可以看成是Topic的二级标签，同一个Topic下可以发送多个Tag消息，消费者可以消费指定Tag的消息，也可以使用通配符消费多个Tag的消息

**groupName**
可以不配置，则默认在同一个组。  
一个生产者设置的组名为group1，两个消费者A和B组名也是group1，那么A和B只能有一个消费到消息；若A和B设置了不同的组名，就可以都消费到消息了。    
为了项目的负载均衡；在集群中，保证了多个服务器中只有其中一个的消费者能够消费消息  

## 2种消费类型

1. MQPullConsumer  
2. MQPushConsumer  












# Spring Boot整合RocketMQ  
发送消息到Broker，需要先判断是否有此Topic  

配置：#该消费者订阅的主题和tags("*"号表示订阅该主题下所有的tags),格式：topic~tag1||tag2||tag3;topic2~*;
rocketmq.consumer.topics=DemoTopic~*;


同一个消费者指定多个tags:  
consumer.subscribe("topic1", "tag0||tag1||tag2");

```xml
framework:
  rocketmq:
    producer:
      # 是否启用生产者
      isOnOff: on
      # 发送同一类消息的设置为同一个group，保证唯一,默认不需要设置，rocketmq会使用ip@pid(pid代表jvm名字)作为唯一标示
      group-name: ${spring.application.name}
      namesrv-addr: 172.26.6.194:9876
      # 消息最大长度 默认1024*4(4M)
      max-message-size: 4096
      # 发送消息超时时间,默认3000
      send-msg-time-out: 3000
      # 发送消息失败重试次数，默认2
      retry-times-when-send-failed: 2
    consumer:
      isOnOff: on
      group-name: ${spring.application.name}
      namesrv-addr: 172.26.6.194:9876
      consume-thread-min: 5
      consume-thread-max: 32
      # 设置一次消费消息的条数，默认为1条
      consume-message-batch-max-size: 1

```

### 清空消息
```
1. 停止rocketmq

可以使用kill -9 命令强制停止rocketmq进程     

2. 删除rocketmq日志

rm -rf /root/logs/rocketmqlogs/*                        C:\Users\VAQ\logs\rocketmqlogs

3. 删除rocketmq中topic等信息

rm -rf /root/store/*                                    C:\Users\VAQ\store

4. [可选] 手工清空MQ里剩余的topic，示例命令如下：

cd alibaba-rocketmq/bin

sh mqadmin topicList -n 127.0.0.1:9876

sh mqadmin deleteTopic -c HOSTNAME -n 127.0.0.1:9876 -t orderTopic

5. 重新启动rocketmq，示例命令如下：

cd alibaba-rocketmq/bin

nohup sh mqnamesrv -n 192.168.1.167:9876 > /dev/null 2>&1 &

nohup sh mqbroker -n 192.168.1.167:9876 > /dev/null 2>&1 &
 

PS:

1. 顺序必须是先停止rocketmq,再清空数据；如果顺序错误，可能会导致消息无法正常清除、rocketmq无法启动等问题

2. 删除Topic不是必须的，但是删除的时候需要指定 -c，可以用服务器的hostname试试
```


## 公司
/usr/local/rocketmq/rocketmq-all-4.8.0-bin-release

## 启动状态
nohup.out中有The Name Server boot success. serializeType=JSON说明是启动成功状态