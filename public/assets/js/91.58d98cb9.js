(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{702:function(r,e,a){"use strict";a.r(e);var t=a(5),s=Object(t.a)({},(function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h2",{attrs:{id:"本地调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地调试"}},[r._v("#")]),r._v(" 本地调试")]),r._v(" "),a("h3",{attrs:{id:"ip、端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ip、端口"}},[r._v("#")]),r._v(" ip、端口")]),r._v(" "),a("p",[r._v("172.26.6.108:9876\nlocalhost:9876")]),r._v(" "),a("h3",{attrs:{id:"启动nameserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动nameserver"}},[r._v("#")]),r._v(" 启动NameServer")]),r._v(" "),a("p",[r._v("D:\\DoWork\\rocketmq-all-4.7.0-bin-release\\bin 下进入cmd，执行start mqnamesrv.cmd")]),r._v(" "),a("h3",{attrs:{id:"启动broker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动broker"}},[r._v("#")]),r._v(" 启动Broker")]),r._v(" "),a("p",[r._v("D:\\DoWork\\rocketmq-all-4.7.0-bin-release\\bin 下进入cmd，执行start mqbroker.cmd -n 127.0.0.1:9876 autoCreateTopicEnable=true")]),r._v(" "),a("h3",{attrs:{id:"启动监控插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动监控插件"}},[r._v("#")]),r._v(" 启动监控插件")]),r._v(" "),a("p",[r._v("localhost:9876是在D:\\DoWork\\rocketmq-externals-master\\rocketmq-console\\src\\main\\resources下的application.properties配置的"),a("br"),r._v("\n编译打包：D:\\DoWork\\rocketmq-externals-master\\rocketmq-console下进入cmd，执行mvn clean package -Dmaven.test.skip=true"),a("br"),r._v("\n启动：D:\\DoWork\\rocketmq-externals-master\\rocketmq-console\\target下进入cmd，执行java -jar rocketmq-console-ng-2.0.0.jar，或直接双击start-rocketmq-console.sh")]),r._v(" "),a("h2",{attrs:{id:"消费模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消费模型"}},[r._v("#")]),r._v(" 消费模型")]),r._v(" "),a("p",[r._v("主题模型："),a("br"),r._v("\n发布者：消息的生产者"),a("br"),r._v("\n订阅者：消息的消费者"),a("br"),r._v("\n主题：存放消息的容器")]),r._v(" "),a("h2",{attrs:{id:"角色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#角色"}},[r._v("#")]),r._v(" 角色")]),r._v(" "),a("p",[a("strong",[r._v("Broker")]),a("br"),r._v("\n提供消息的接收、存储、拉取等功能，分为Master和Slave，一个Master对应多个Slave(通过制定相同的BrokerName，不同的BrokerId定义，BrokerId为0表示Master，非0表示Slave)")]),r._v(" "),a("p",[a("strong",[r._v("NameServer")]),r._v("\nBroker向它注册路由信息，Client向其获取路由信息，它本身是没有状态的，多个NameServer之间没有通信，可以横向扩展多台，Broker会和每一台NameServer建立长连接")]),r._v(" "),a("p",[a("strong",[r._v("Producer")]),r._v("\n消息队列的生产者，需要与NameServer建立连接，从NameServer获取Topic路由信息，并向提供Topic服务的Broker Master建立连接")]),r._v(" "),a("p",[a("strong",[r._v("Consumer")]),r._v("\n消息队列的消费者，同样与NameServer建立连接，从NameServer获取Topic路由信息，并向提供Topic服务的Broker Master，Slave建立连接")]),r._v(" "),a("p",[a("strong",[r._v("Topic")]),r._v("\n主题，用来区分不同类型的消息，发送和接收前都需要先创建Topic，一个Topic可以设置一个或多个Message Queue，"),a("br"),r._v("\n这样消息可以并行往各个队列Message Queue发送消息，消费者也可以并行的从多个Message Queue读取消息；"),a("br"),r._v("\n生产者和消费者必须在同一个Topic下才能通讯")]),r._v(" "),a("p",[a("strong",[r._v("Tag")]),r._v("\n可以看成是Topic的二级标签，同一个Topic下可以发送多个Tag消息，消费者可以消费指定Tag的消息，也可以使用通配符消费多个Tag的消息")]),r._v(" "),a("p",[a("strong",[r._v("groupName")]),r._v("\n可以不配置，则默认在同一个组。"),a("br"),r._v("\n一个生产者设置的组名为group1，两个消费者A和B组名也是group1，那么A和B只能有一个消费到消息；若A和B设置了不同的组名，就可以都消费到消息了。"),a("br"),r._v("\n为了项目的负载均衡；在集群中，保证了多个服务器中只有其中一个的消费者能够消费消息")]),r._v(" "),a("h2",{attrs:{id:"_2种消费类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2种消费类型"}},[r._v("#")]),r._v(" 2种消费类型")]),r._v(" "),a("ol",[a("li",[r._v("MQPullConsumer")]),r._v(" "),a("li",[r._v("MQPushConsumer")])]),r._v(" "),a("h1",{attrs:{id:"spring-boot整合rocketmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot整合rocketmq"}},[r._v("#")]),r._v(" Spring Boot整合RocketMQ")]),r._v(" "),a("p",[r._v("发送消息到Broker，需要先判断是否有此Topic")]),r._v(" "),a("p",[r._v('配置：#该消费者订阅的主题和tags("'),a("em",[r._v('"号表示订阅该主题下所有的tags),格式：topic~tag1||tag2||tag3;topic2~')]),r._v(";\nrocketmq.consumer.topics=DemoTopic~*;")]),r._v(" "),a("p",[r._v("同一个消费者指定多个tags:"),a("br"),r._v('\nconsumer.subscribe("topic1", "tag0||tag1||tag2");')]),r._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[r._v("framework:\n  rocketmq:\n    producer:\n      # 是否启用生产者\n      isOnOff: on\n      # 发送同一类消息的设置为同一个group，保证唯一,默认不需要设置，rocketmq会使用ip@pid(pid代表jvm名字)作为唯一标示\n      group-name: ${spring.application.name}\n      namesrv-addr: 172.26.6.194:9876\n      # 消息最大长度 默认1024*4(4M)\n      max-message-size: 4096\n      # 发送消息超时时间,默认3000\n      send-msg-time-out: 3000\n      # 发送消息失败重试次数，默认2\n      retry-times-when-send-failed: 2\n    consumer:\n      isOnOff: on\n      group-name: ${spring.application.name}\n      namesrv-addr: 172.26.6.194:9876\n      consume-thread-min: 5\n      consume-thread-max: 32\n      # 设置一次消费消息的条数，默认为1条\n      consume-message-batch-max-size: 1\n\n")])])]),a("h3",{attrs:{id:"清空消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清空消息"}},[r._v("#")]),r._v(" 清空消息")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("1. 停止rocketmq\n\n可以使用kill -9 命令强制停止rocketmq进程     \n\n2. 删除rocketmq日志\n\nrm -rf /root/logs/rocketmqlogs/*                        C:\\Users\\VAQ\\logs\\rocketmqlogs\n\n3. 删除rocketmq中topic等信息\n\nrm -rf /root/store/*                                    C:\\Users\\VAQ\\store\n\n4. [可选] 手工清空MQ里剩余的topic，示例命令如下：\n\ncd alibaba-rocketmq/bin\n\nsh mqadmin topicList -n 127.0.0.1:9876\n\nsh mqadmin deleteTopic -c HOSTNAME -n 127.0.0.1:9876 -t orderTopic\n\n5. 重新启动rocketmq，示例命令如下：\n\ncd alibaba-rocketmq/bin\n\nnohup sh mqnamesrv -n 192.168.1.167:9876 > /dev/null 2>&1 &\n\nnohup sh mqbroker -n 192.168.1.167:9876 > /dev/null 2>&1 &\n \n\nPS:\n\n1. 顺序必须是先停止rocketmq,再清空数据；如果顺序错误，可能会导致消息无法正常清除、rocketmq无法启动等问题\n\n2. 删除Topic不是必须的，但是删除的时候需要指定 -c，可以用服务器的hostname试试\n")])])]),a("h2",{attrs:{id:"公司"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公司"}},[r._v("#")]),r._v(" 公司")]),r._v(" "),a("p",[r._v("/usr/local/rocketmq/rocketmq-all-4.8.0-bin-release")]),r._v(" "),a("h2",{attrs:{id:"启动状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动状态"}},[r._v("#")]),r._v(" 启动状态")]),r._v(" "),a("p",[r._v("nohup.out中有The Name Server boot success. serializeType=JSON说明是启动成功状态")])])}),[],!1,null,null,null);e.default=s.exports}}]);