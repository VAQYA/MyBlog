---
title: Netty
date: 2020-10-01
tags: tag1
categories: Java
---

### Netty的特点
Netty是一个基于NIO框架，异步、事件驱动的网络通信框架，它大大简化了TCP、UDP服务器的网路编程。
* 高并发：基于NIO(NonBlocking I/O,非阻塞IO)
* 传输快：具有零拷贝特性，减少了不必要的内存拷贝，传输更快
* 封装好：封装了NIO操作的很多细节，提供了易于使用的调用接口
* 功能强大：预置了多种编解码功能，支持多种主流协议

### Netty的流程
1. 创建客户端和服务器的启动类对象BootStrap和ServerBootStrap
2. 创建多线程事件循环器，bossGroup线程和workerGroup线程，并将两个线程关联起来。bossGroup线程用于创建、连接、绑定socket，然后把这些socket传给workerGroup线程池。ServerBootStrap监听的一个端口对应一个bossGroup线程。
3. 指定Channel的类型为NIOServerSocketChannel
4. 指定ChannelHandler，通过匿名内部类ChannelInitializer类，重写initChannel方法，来配置ChannelHandler，并提供一个ChannelPipeline把ChannelHandler加入到ChannelPipeline中。
5. 异步阻塞方式绑定服务器端口，并启动去接收进来的连接。
6. 关闭启动类对象（调用shutdownGracefully()方法会在线程执行完毕后再退出）。


### Netty的零拷贝
包含三个方面：
1. Netty发送和接收ByteBuffer采用直接缓冲器(Direct Buffers)，使用堆外直接内存进行socket读写，省去了传统方法中堆内存(Heap Buffers)拷贝数据到直接内存这个步骤。
2. Netty采用了组合Buffer对象，可以聚合多个ByteBuffer对象，可以像操作一个Buffer对象一样对组合Buffer进行操作，避免了传统的通过内存拷贝的方式将多个Buffer组合成一个Buffer
3. Netty的文件传输采用了transferTo方法，可以直接将文件缓冲区的数据发给目标channel，避免了循环write的方式导致内存拷贝问题

### Netty和Tomcat的区别
Tomcat是基于http协议的，而Netty可以自己解码编码字节流，自定义各种协议。

### Netty的重要知识

#### Channel  
传入和传出数据的通道，可打开和关闭

####  EventLoop  
处理IO操作的多线程事件循环器，将每个Channel注册到一个EventLoop中

####  ChannelPipeline  
是Channel的数据管道，也保存了与Channel相关的ChannelHandler，可动态修改，有丰富的API以响应入站和出站（客户端-->服务器）事件

####  ChannelHandler  
处理入站和出站数据的容器，分为ChannelInboundHandler输入业务处理和ChannelOutboundHandler输出业务处理；ChannelHandler被添加到ChannelPileline时，会被分配一个ChannelHandlerContext。  

####  ChannelHandlerContext  
代表了ChannelHandler和ChannelPileline之间的绑定，可以获取底层的Channel，但主要是用于写出站数据

####  ChannelFuture  
异步操作结果，其addListener()方法注册了一个ChannelFutureListener，以便在某个操作完成（无论是否成功）时得到通知。

#### 回调  
当一个新的连接已经被建立时，ChannelHandler 的 channelActive(ChannelHandlerContext ctx)回调方法将会被调用。

#### ChannelRead(ChannelHandlerContext ctx，Object msg)  
服务端每当从客户端收到新的数据时，被调用。

####  Encoder ，将Message-->Byte
Encoder最重要的实现类是`MessageToByteEncoder<T>`，这个类的作用就是将消息实体T从对象转换成byte，写入到ByteBuf，然后再丢给剩下的ChannelOutboundHandler传给客户端  

#### Decoder ，将Byte-->Message
在服务端接收到数据时，将字节流转换为实体对象Message，但是和Encoder处理逻辑不一样，数据传到服务端有可能不是一次请求就能完成的，中间可能需要经过几次数据传输，并且每次传输多少数据也是不确定的，有两个重要方法，decode和decodeLast，默认是调用decode，decodeLast是只有在channel生命周期结束之前会调用一次

###  Netty两种发送消息的方式
1. 直接写入到Channel；消息会从ChannelPipeline的尾端开始流动。
2. 写入与ChannelHandler的相关联的ChannelHandlerContext对象中；消息会从ChannelPileline中的下一个ChannelHandler中开始流动。

### 备注
netty5.0之后channelRead0已经改名为messageReceived
netty5版本bug多，已不维护，建议用用4.1版本






