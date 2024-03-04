# WebSocket

## SpringBoot集成WebSocket

### 原生注解方式

#### pom.xml

```
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-websocket</artifactId>
</dependency>
```

#### WebSocketConfig
通过这个配置类，SpringBoot才能扫描关于WebSocket的注解
```
/*
 * *
 *  * blog.coder4j.cn
 *  * Copyright (C) 2016-2019 All Rights Reserved.
 *
 */
package cn.coder4j.study.example.websocket.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

/**
 * @author buhao
 * @version WebSocketConfig.java, v 0.1 2019-10-18 15:45 buhao
 */
@Configuration
@EnableWebSocket
public class WebSocketConfig {

    @Bean
    public ServerEndpointExporter serverEndpoint() {
        return new ServerEndpointExporter();
    }
}
```
#### WsServerEndpoint组件
@ServerEndpoint("/myWs")
通过这个，Springboot知道暴露出去的ws应用的路径，类似于@RequestMapping();如果启动端口是8080，则可以通过 ws://127.0.0.1:8080/myWs 来连接应用
@OnOpen
连接成功后会触发这个注释的方法，该方法有个Session参数
@OnClose
连接断开后触发，也有Session参数
@OnMessage
客户端发送消息到服务端时，会触发，有个String入参，表示客户端传入的值
@OnError
建立连接时出现异常时，会触发，有Session入参

服务端发送消息到客户端：
import javax.websocket.Session;
session.getBasicRemote().sendText(message);
sessioin是已经建立过连接的session



### Session

WebSocket的Session不能被序列化，所以不能直接放入redis







































