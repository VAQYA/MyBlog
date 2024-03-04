---
title: RabbitMQ
date: 2020-10-01
tags: tag1
categories: 中间件
---
## RabbitMQ

### 默认端口号
client端通信口5672
管理口15672
server间内部通信口25672

delivery Mode 发送方式
durable 持久的
persistent 持久的 
confirm 确认


### 优点
1. 系统解耦
2. 异步调用
3. 流量削峰



### 流程 （动态路由为例）
生产者
1. 创建连接工厂
2. 连接工厂对象创建连接
3. 连接对象创建通道
4. 通道对象声明交换器
5. 通道对象发布消息（传入交换器名称、路由key、消息内容）
消费者
1. 创建连接工厂
2. 连接工厂对象创建连接
3. 连接对象创建通道
4. 通道对象声明交换器
5. 声明队列（传入队列名称、是否持久化、是否独占模式、消费者断开连接时是否删除、其他参数）
6. 通道对象绑定队列到交换器（传入队列名、交换器名、路由键）
7. 创建消费者对象（传入通道对象）并重写处理方法handleDelivery（）对消息进行处理确认等
8. 渠道对象消费消息并向服务器进行应答 分为以下两种

/* autoAck为true时应答服务器，消息就会从队列中立即删除，不再往其他Consumer转发,如果不设置ack确认，RabbitMQ会认为消息没有被正常消费，消息会重新进入队列中。

1. 被动消费模式 channel.basicConsume(String queueName, Boolean autoAck,Consumer callback);
2. 主动消费模式 GetResponse response = channel.basicGet(Sring queueName,Boolean true); 


### 消息队列
是一种应用间的异步协作机制

### 消息Message
由消息头和消息体组成，消息头包括：路由键、优先权、持久性存储等属性。

### 网络连接Connection
网络连接，比如TCP连接

### 信道Channel
是进行路由工作的实体，负责按照routing_key将message传输给queue，
建立和销毁TCP连接都是很昂贵的开销，所以引入信道，它是独立的双向数据流通道，一个连接中可有多个信道，发送消息、接收消息、订阅队列都是通过信道完成的，
每条TCP连接上可以有无数条信道，每个channel都有唯一对应的ID，一个channel只能单独由一个线程使用，在channel上的message是有序的

channel.getNextPublishSeqNo();  在确认模式下，返回要发布的下一条消息的序列号

### 交换机Exchange
用来接收生产者发送的消息并且路由给服务器中的队列，
内部实现为保存binding关系的查找表

### 消息队列Queue
用来保存消息，直到被消费者消费掉，
具有自己的Erlang进程

### 生产者producer
向交换机发布消息的应用程序

### 消费者Consumer
从一个消息队列中取得消息的应用程序



## 应答确认Ack机制（acknowledged 确认）
应答后，队列就把这条消息删除了，释放队列的内存空间

### 手动确认
channel.basicQos(1); // 限制发送给当前消费者消息的数量为1，默认为0表示不限制
在接收到Consumer的ack前，服务器不会将新的Message分发给它 ，
不设置的话服务器会均匀分配给每个消费者一些消息，设置了的话则每次分给一个消费者一条消息，
这样所有消费者运行完后，运行快的消费者会比运行慢的消费者多消费消息，达到能者多劳。

channel.basicAck(deliveryTag,false);
参数2：如果为true，则确认所有消息（包括提供的传递标记）；如果为false，则仅确认提供的传递标记。

### 重新放入队列消费（long deliveryTag, boolean multiple, boolean requeue）
channel.basicNack(deliveryTag,false,true);  multiple为true时，拒绝标记之前的所有消息，为false时只拒绝当前标记的消息

channel.basicReject(deliveryTag,true); 相对于basicNack只少了multiple

### 抛弃此条消息
channel.basicNack(deliveryTag,false,false);

生产者把消息发给虚拟主机

### 交换机的features
D  durable: true
译为耐用的表示存储在磁盘
I  internal: true 

### 
@RabbitListener(queuesToDeclare = "smsQueue")
相当于
@RabbitListener (queueToDeclare = @Queue(value = "smsQueue", durable = "true", exclusive = "false", autoDelete = "false")) //默认为 持久化、非独占、非自动删除


### topic订阅模式/动态路由
routingKey中*代表一个单词，#代表一个或多个单词

方法上写上监听注解
```
@RabbitListener( bindings = { 
							@QueueBinding( 
									value = @Queue,   //此时不声明队列的value则会创建一个临时队列
									key = {"user.#","order.*"}, 
									exchange = @Exchange(
													type = "topic", 
													name = "topicTest1"
													)
										) 
							} 
				) 

```

### RabbitMQ的集群

#### 普通集群
队列只保存在master结点，其他结点存了MQ的Exchange所有信息（除队列外），消费者可以在任意结点获取队列信息进行消费
#### 镜像集群

### 负载均衡器LVS

### interview相关

### 使用RabbitMQ有什么好处
1. 解耦 A调用系统B和C，如果加入系统D，还需要修改A的代码，用上消息队列A作为生产者发送消息给队列，B、C、D等消费者直接消费即可
2. 异步 非必要的业务异步进行，加快响应速度
3. 削峰 并发量大时所有请求直接访问数据库，可能会造成数据库异常

### broker、cluster？
broker 
cluster

### 消息如何分发的？
队列的消息轮询(round-robin)发送给消费者，每条消息只会分发给一个订阅的消费者(前提是消费者正确处理消息并确认)

### 消息是怎么路由的？

生产者将消息发布到交换器上，消息创建时会获得一个路由键
通过路由键可以把队列绑定到交换器上，
消息到达交换器后，RabbitMQ会将消息的路由键和队列的路由键相匹配，消息会投递到相应队列中。

### 交换器类型
direct：路由键完全匹配，消息就投递到相应队列
fanout: 交换器收到消息广播到所有绑定的队列上
topic：可用通配符匹配相应的路由键

### channel.BasicQos(0, 1, false);
在接收到Consumer的ack前，RabbitMQ不会将新的Message分发给它

### 如何保证消息最大程度的不丢失并且被正确消费？
1. 生产者确认

	将信道设置为确认模式，则信道上发布的消息就会指派一个唯一的ID（从1开始），消息被发送到RabbitMQ服务器后，
	服务器就会发送一个确认（Basic.Ack）给生产者，包括消息的唯一ID，
	消息丢失的话会发送一个（Basic.Nack），生产者可以在回调方法中处理Nack指令

   * 事务 
    channel.txSelect(); //将当前信道设置为事务模式
	 channel.txCommit(); //事务提交
	 channel.Rollback(); //事务回滚
	 影响性能，不建议使用
	
   * 发送方确认
   
    1. 单条消息确认
       channel.confirmSelect(); 将信道设置成确认模式
	     channel.waitForconfirms(); 等待发送消息的确认，消息发送成功则返回true，否则返回false
	
	2. 多条消息确认
	 将消息放在缓存中，发送批量消息后调用waitforconfirms方法，返回为false则清空缓存重写发送所有消息
	
    3. 异步确认 （性能最好）
	 渠道对象调用addConfirmListener方法传入ConfirmListener接口重写handleAck和handleNack方法
	
2. 持久化   将队列标识为持久化，durable设为true; 将消息Message标识为持久化deliveryMode=2 
3. 消费者确认   自动确认改为在执行完业务之后在finally中手动确认，只有确认了，RabbitMQ才会把消息从队列中删除

### 如何避免消息重复投递或重复消费？
RabbitMQ会对生产者发送的每条消息生成一个messageId，作为去重和幂等的依据

1. 消费者消费后将messageId作为主键插入数据库中，消费前先判断数据库中有没有存在这条数据
2. 将message存入redis作为消费记录，消费前先判断redis中有么有消费记录

### 死信队列

### 哪种情况下会进入死信队列？
1. 消息被否定，并且requeue为false
2. 消息在队列的存活时间超过设置的TTL时间
3. 消息数量超过最大队列长度

如果配置了死信队列，则上面的消息会进入死信队列，否则被丢弃

### 如何配置死信队列？

1.  声明业务交换器、
	声明死信交换器 DEAD_LETTER_EXCHANGE
	
2. 	声明业务队列, 同时设置上业务队列的死信交换器和死信队列路由键参数, argument.put("x-dead-letter-exchange", DEAD_LETTER_EXCHANGE); argument.put("x-dead-letter-routing-key",DEAD_LETTER_QUEUEA_ROUTING_KEY);                                                      
	声明死信队列
	
3. 	将业务队列绑定到业务交换器上、
	将死信队列绑定到死信交换器上（同时设置上路由键DEAD_LETTER_QUEUEA_ROUTING_KEY）

	

Map<String, Object> argument = new HashMap<String, Object>(); 
// 统一设置队列中的所有消息的过期时间 
argument.put("x-message-ttl", 30000); 
// 设置超过多少毫秒没有消费者来访问队列，就删除队列的时间 
argument.put("x-expires", 20000); 
// 设置队列的最新的N条消息，如果超过N条，前面的消息将从队列中移除掉 
argument.put("x-max-length", 4); 
// 设置队列的内容的最大空间，超过该阈值就删除之前的消息
argument.put("x-max-length-bytes", 1024); 
// 将删除的消息推送到指定的交换机，一般x-dead-letter-exchange和x-dead-letter-routing-key需要同时设置
argument.put("x-dead-letter-exchange", "exchange.dead"); 
// 将删除的消息推送到指定的交换机对应的路由键 
argument.put("x-dead-letter-routing-key", "routingkey.dead"); 
// 设置消息的优先级，优先级大的优先被消费 
argument.put("x-max-priority", 10); 
channel.queueDeclare(QUEUE_NAME, false, false, false, argument); 


​	
#### 幂等
任意多次执行所产生的影响与执行一次的影响相同例如redis的set操作



### RabbitMQ的底层架构原理，逻辑架构、物理架构以及数据持久化机制？



## 你们RabbitMQ的最高峰QPS每秒是多少？线上如何部署的，部署了多少台机器，机器的配置如何？





订单超时时、支付状态等，都要再查询数据库，双重判断保证消息准确性























