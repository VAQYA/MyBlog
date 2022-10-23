(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{644:function(e,t,a){"use strict";a.r(t);var n=a(5),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"netty的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netty的特点"}},[e._v("#")]),e._v(" Netty的特点")]),e._v(" "),a("p",[e._v("Netty是一个基于NIO框架，异步、事件驱动的网络通信框架，它大大简化了TCP、UDP服务器的网路编程。")]),e._v(" "),a("ul",[a("li",[e._v("高并发：基于NIO(NonBlocking I/O,非阻塞IO)")]),e._v(" "),a("li",[e._v("传输快：具有零拷贝特性，减少了不必要的内存拷贝，传输更快")]),e._v(" "),a("li",[e._v("封装好：封装了NIO操作的很多细节，提供了易于使用的调用接口")]),e._v(" "),a("li",[e._v("功能强大：预置了多种编解码功能，支持多种主流协议")])]),e._v(" "),a("h3",{attrs:{id:"netty的流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netty的流程"}},[e._v("#")]),e._v(" Netty的流程")]),e._v(" "),a("ol",[a("li",[e._v("创建客户端和服务器的启动类对象BootStrap和ServerBootStrap")]),e._v(" "),a("li",[e._v("创建多线程事件循环器，bossGroup线程和workerGroup线程，并将两个线程关联起来。bossGroup线程用于创建、连接、绑定socket，然后把这些socket传给workerGroup线程池。ServerBootStrap监听的一个端口对应一个bossGroup线程。")]),e._v(" "),a("li",[e._v("指定Channel的类型为NIOServerSocketChannel")]),e._v(" "),a("li",[e._v("指定ChannelHandler，通过匿名内部类ChannelInitializer类，重写initChannel方法，来配置ChannelHandler，并提供一个ChannelPipeline把ChannelHandler加入到ChannelPipeline中。")]),e._v(" "),a("li",[e._v("异步阻塞方式绑定服务器端口，并启动去接收进来的连接。")]),e._v(" "),a("li",[e._v("关闭启动类对象（调用shutdownGracefully()方法会在线程执行完毕后再退出）。")])]),e._v(" "),a("h3",{attrs:{id:"netty的零拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netty的零拷贝"}},[e._v("#")]),e._v(" Netty的零拷贝")]),e._v(" "),a("p",[e._v("包含三个方面：")]),e._v(" "),a("ol",[a("li",[e._v("Netty发送和接收ByteBuffer采用直接缓冲器(Direct Buffers)，使用堆外直接内存进行socket读写，省去了传统方法中堆内存(Heap Buffers)拷贝数据到直接内存这个步骤。")]),e._v(" "),a("li",[e._v("Netty采用了组合Buffer对象，可以聚合多个ByteBuffer对象，可以像操作一个Buffer对象一样对组合Buffer进行操作，避免了传统的通过内存拷贝的方式将多个Buffer组合成一个Buffer")]),e._v(" "),a("li",[e._v("Netty的文件传输采用了transferTo方法，可以直接将文件缓冲区的数据发给目标channel，避免了循环write的方式导致内存拷贝问题")])]),e._v(" "),a("h3",{attrs:{id:"netty和tomcat的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netty和tomcat的区别"}},[e._v("#")]),e._v(" Netty和Tomcat的区别")]),e._v(" "),a("p",[e._v("Tomcat是基于http协议的，而Netty可以自己解码编码字节流，自定义各种协议。")]),e._v(" "),a("h3",{attrs:{id:"netty的重要知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netty的重要知识"}},[e._v("#")]),e._v(" Netty的重要知识")]),e._v(" "),a("h4",{attrs:{id:"channel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel"}},[e._v("#")]),e._v(" Channel")]),e._v(" "),a("p",[e._v("传入和传出数据的通道，可打开和关闭")]),e._v(" "),a("h4",{attrs:{id:"eventloop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventloop"}},[e._v("#")]),e._v(" EventLoop")]),e._v(" "),a("p",[e._v("处理IO操作的多线程事件循环器，将每个Channel注册到一个EventLoop中")]),e._v(" "),a("h4",{attrs:{id:"channelpipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channelpipeline"}},[e._v("#")]),e._v(" ChannelPipeline")]),e._v(" "),a("p",[e._v("是Channel的数据管道，也保存了与Channel相关的ChannelHandler，可动态修改，有丰富的API以响应入站和出站（客户端--\x3e服务器）事件")]),e._v(" "),a("h4",{attrs:{id:"channelhandler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channelhandler"}},[e._v("#")]),e._v(" ChannelHandler")]),e._v(" "),a("p",[e._v("处理入站和出站数据的容器，分为ChannelInboundHandler输入业务处理和ChannelOutboundHandler输出业务处理；ChannelHandler被添加到ChannelPileline时，会被分配一个ChannelHandlerContext。")]),e._v(" "),a("h4",{attrs:{id:"channelhandlercontext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channelhandlercontext"}},[e._v("#")]),e._v(" ChannelHandlerContext")]),e._v(" "),a("p",[e._v("代表了ChannelHandler和ChannelPileline之间的绑定，可以获取底层的Channel，但主要是用于写出站数据")]),e._v(" "),a("h4",{attrs:{id:"channelfuture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channelfuture"}},[e._v("#")]),e._v(" ChannelFuture")]),e._v(" "),a("p",[e._v("异步操作结果，其addListener()方法注册了一个ChannelFutureListener，以便在某个操作完成（无论是否成功）时得到通知。")]),e._v(" "),a("h4",{attrs:{id:"回调"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回调"}},[e._v("#")]),e._v(" 回调")]),e._v(" "),a("p",[e._v("当一个新的连接已经被建立时，ChannelHandler 的 channelActive(ChannelHandlerContext ctx)回调方法将会被调用。")]),e._v(" "),a("h4",{attrs:{id:"channelread-channelhandlercontext-ctx-object-msg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channelread-channelhandlercontext-ctx-object-msg"}},[e._v("#")]),e._v(" ChannelRead(ChannelHandlerContext ctx，Object msg)")]),e._v(" "),a("p",[e._v("服务端每当从客户端收到新的数据时，被调用。")]),e._v(" "),a("h4",{attrs:{id:"encoder-将message-byte"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encoder-将message-byte"}},[e._v("#")]),e._v(" Encoder ，将Message--\x3eByte")]),e._v(" "),a("p",[e._v("Encoder最重要的实现类是"),a("code",[e._v("MessageToByteEncoder<T>")]),e._v("，这个类的作用就是将消息实体T从对象转换成byte，写入到ByteBuf，然后再丢给剩下的ChannelOutboundHandler传给客户端")]),e._v(" "),a("h4",{attrs:{id:"decoder-将byte-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decoder-将byte-message"}},[e._v("#")]),e._v(" Decoder ，将Byte--\x3eMessage")]),e._v(" "),a("p",[e._v("在服务端接收到数据时，将字节流转换为实体对象Message，但是和Encoder处理逻辑不一样，数据传到服务端有可能不是一次请求就能完成的，中间可能需要经过几次数据传输，并且每次传输多少数据也是不确定的，有两个重要方法，decode和decodeLast，默认是调用decode，decodeLast是只有在channel生命周期结束之前会调用一次")]),e._v(" "),a("h3",{attrs:{id:"netty两种发送消息的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netty两种发送消息的方式"}},[e._v("#")]),e._v(" Netty两种发送消息的方式")]),e._v(" "),a("ol",[a("li",[e._v("直接写入到Channel；消息会从ChannelPipeline的尾端开始流动。")]),e._v(" "),a("li",[e._v("写入与ChannelHandler的相关联的ChannelHandlerContext对象中；消息会从ChannelPileline中的下一个ChannelHandler中开始流动。")])]),e._v(" "),a("h3",{attrs:{id:"备注"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备注"}},[e._v("#")]),e._v(" 备注")]),e._v(" "),a("p",[e._v("netty5.0之后channelRead0已经改名为messageReceived")])])}),[],!1,null,null,null);t.default=r.exports}}]);