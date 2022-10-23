(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{582:function(a,t,e){a.exports=e.p+"assets/img/SpringCloud架构.a24feade.png"},583:function(a,t,e){a.exports=e.p+"assets/img/DobboVSSpringCloud.c6557f95.png"},623:function(a,t,e){"use strict";e.r(t);var r=e(5),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"核心组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#核心组件"}},[a._v("#")]),a._v(" 核心组件")]),a._v(" "),r("h3",{attrs:{id:"_1-eureka"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-eureka"}},[a._v("#")]),a._v(" 1.Eureka")]),a._v(" "),r("ul",[r("li",[a._v("是微服务架构中的注册中心，专门负责服务的注册与发现。")]),a._v(" "),r("li",[a._v("Eureka Client组件： 每个服务中都有一个Eureka Client组件，负责将服务的信息注册到Eureka Server中，即告诉Eureka Server自己在哪台服务器上监听着哪个端口，")]),a._v(" "),r("li",[a._v("Eureka Server： 是注册中心，里面有一个注册表，保存了各个服务所在的机器和端口号。")]),a._v(" "),r("li",[a._v("各服务内的Eureka Client组件默认情况下，每隔30秒会发送一个请求到Eureka Server，来拉取最新有变化的服务信息。")]),a._v(" "),r("li",[a._v("心跳机制，Eureka默认每隔30秒发送一次心跳，通知Eureka Server，当前服务还活着。")])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-eureka</artifactId>\n\t\n//主启动类加上@EnableEurekaClient注解，开启Eureka\n  \n//代表内存注册表的类\npublic abstract class AbstractInstanceRegistry implements InstanceRegistry {\n\tprivate final ConcurrentHashMap<String, Map<String, Lease<InstanceInfo> > >  registry = new ConcurrentHashMap<String, Map<String, Lease<InstanceInfo> > >();\n}\n//ConcurrentHashMap中的key，是String类型，表示服务名称，比如"inventory-service"(库存服务)，value表示了一个服务的多个实例。 inventory-service可以有3个服务实例，每个实例部署在一台服务器上\n//Map中的key，也是String类型，表示服务实例的id，value中的类Lease的泛型InstanceInfo表示了服务实例的具体信息，包含了机器的主机名、ip地址、端口号等。Lease类里面维护了每个服务最近一次发送心跳的时间\n\n')])])]),r("ul",[r("li",[a._v("多级缓存机制 避免同时读写内存造成的并发冲突问题")])]),a._v(" "),r("blockquote",[r("p",[a._v("拉取注册表时（即读）")]),a._v(" "),r("blockquote",[r("ol",[r("li",[a._v("首先从ReadOnlyCacheMap里查缓存的注册表，")]),a._v(" "),r("li",[a._v("若没有再从ReadWriteCacheMap缓存中的注册表，")]),a._v(" "),r("li",[a._v("还没有，就从内存中获取实际的注册表数据")])])])]),a._v(" "),r("blockquote",[r("p",[a._v("注册表发生变更时（即写）")]),a._v(" "),r("blockquote",[r("ol",[r("li",[a._v("在内存中更新变更的注册表数据，同时过期掉ReadWriteCacheMap，（此过程不会影响ReadOnlyCacheMap提供别的服务读取注册表信息）")]),a._v(" "),r("li",[a._v("一段时间内（默认30秒），各服务拉取注册表会直接读取ReadOnlyCacheMap，")]),a._v(" "),r("li",[a._v("30秒后，Eureka发现ReadWriteCacheMap被清空了，就会清空ReadOnlyCacheMap中的缓存，")]),a._v(" "),r("li",[a._v("下次有服务拉取注册表时，会从内存中直接获取最新的数据，同时填充各个缓存。")])])])]),a._v(" "),r("p",[a._v("保证的是AP，即满足可用性和分区容错性。")]),a._v(" "),r("h3",{attrs:{id:"_2-feign"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-feign"}},[a._v("#")]),a._v(" 2.Feign")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-feign</artifactId>\n")])])]),r("p",[a._v("使用 @FeignClient 注解来指定提供者的名字"),r("br"),a._v("\n使用动态代理机制，根据@RequestMapping等注解，动态构造出要请求的服务的地址。")]),a._v(" "),r("p",[a._v("feign底层是使用了ribbon作为负载均衡的客户端，而ribbon的负载均衡也是依赖于eureka获得各个服务的地址，从Euraka本地的缓存列表里获取一台服务器，负载均衡，把请求直接用HTTP通信框架发送到指定机器上去。"),r("br"),a._v("\n将ribbon的REST风格调用方式封装为接口调用方式")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("问题： cannot retry due to redirection, in streaming mode executing POST http://jczx-web/imChat/sendChatMessage\n/imChat/sendChatMessage有权限认证\n")])])]),r("h3",{attrs:{id:"_3-ribbon"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-ribbon"}},[a._v("#")]),a._v(" 3.Ribbon")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-ribbon</artifactId>\n")])])]),r("p",[a._v("Ribbon会从Eureka Client获取对应的服务注册表，也就知道了所有的服务都部署在哪些机器上，在监听哪些端口号，"),r("br"),a._v("\n然后轮询算法，均匀的把请求分发到各个机器上(运行在消费者端)，实现负载均衡。")]),a._v(" "),r("h3",{attrs:{id:"_4-hystrix"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-hystrix"}},[a._v("#")]),a._v(" 4.Hystrix")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("\x3c!--Hystrix依赖--\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-hystrix</artifactId>\n    <version>1.4.6.RELEASE</version>\n</dependency>\n\x3c!--Dashboard流监控依赖--\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-hystrix-dashboard</artifactId>\n    <version>1.4.6.RELEASE</version>\n</dependency>\n")])])]),r("p",[a._v("是隔离、熔断、降级的框架"),r("br"),a._v("\n隔离：创建多个线程池，不同的服务走不同的线程池，避免服务雪崩"),r("br"),a._v("\n熔断：A服务调用B服务，B服务挂掉了，设置一段时间内请求B服务时直接返回，不必等待网络请求卡住无法响应。"),r("br"),a._v("\n降级：熔断之后，可先记录一下要做的B服务（以便后续补充服务），即没完成本来的任务只能降级完成相对简单低级的任务。")]),a._v(" "),r("p",[a._v("熔断相关参数：滑动窗口大小(20)、熔断器开关间隔(5s)、错误率(50%)"),r("br"),a._v("\n每当20个请求中有50%失败，熔断器就会打开，次数再调用服务，就会直接返回失败，不再调远程服务；"),r("br"),a._v("\n直到5秒钟之后，再重新检测触发条件，判断是否把熔断器关闭或者继续打开。")]),a._v(" "),r("h3",{attrs:{id:"_5-zuul"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-zuul"}},[a._v("#")]),a._v(" 5.Zuul")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("\t<groupId>org.springframework.cloud</groupId>\n\t<artifactId>spring-cloud-starter-zuul</artifactId>\n")])])]),r("p",[a._v("微服务网关，负责网络路由，所有请求都往网关走，网关根据请求中的一些特征，将请求转发给后台的各个服务。"),r("br"),a._v("\n好处很多，可以做统一的降级、限流、认证授权、安全等。")]),a._v(" "),r("p",[r("em",[a._v("Feign和Zuul")]),r("br"),a._v("\nZuul是对外暴露的唯一接口，相当于路由的controller的请求，而Ribbon和Feign路由了Service的请求；"),r("br"),a._v("\nZuul做为外层的负载均衡，而Ribbon和Feign做的是系统内部各个微服务的Service的调用的负载均衡。")]),a._v(" "),r("h3",{attrs:{id:"_6-config"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-config"}},[a._v("#")]),a._v(" 6.Config")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("\x3c!--Config服务端依赖--\x3e\n\t<groupId>org.springframework.cloud</groupId>\n\t<artifactId>spring-cloud-config-server</artifactId>\n\x3c!--Config客户端依赖--\x3e\n\t<groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-config</artifactId>\n")])])]),r("p",[a._v("将各个应用/系统/模块的配置文件存放在同一的地方然后进行管理")]),a._v(" "),r("h3",{attrs:{id:"_7-bus"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-bus"}},[a._v("#")]),a._v(" 7.Bus")]),a._v(" "),r("p",[a._v("管理和广播分布式系统中的消息，是用于将服务和服务实例与分布式消息系统链接在一起的事件总线。")]),a._v(" "),r("h3",{attrs:{id:"springcloud架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#springcloud架构"}},[a._v("#")]),a._v(" SpringCloud架构")]),a._v(" "),r("p",[r("img",{attrs:{src:e(582),alt:"SpringCloud架构"}})]),a._v(" "),r("h3",{attrs:{id:"dobbo-vs-springcloud"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dobbo-vs-springcloud"}},[a._v("#")]),a._v(" Dobbo VS SpringCloud")]),a._v(" "),r("p",[r("img",{attrs:{src:e(583),alt:"DobboVSSpringCloud"}})]),a._v(" "),r("h3",{attrs:{id:"rest-vs-rpc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rest-vs-rpc"}},[a._v("#")]),a._v(" REST VS RPC")]),a._v(" "),r("table",[r("thead",[r("tr",[r("th",[a._v("比较项")]),a._v(" "),r("th",{staticStyle:{"text-align":"center"}},[a._v("REST")]),a._v(" "),r("th",{staticStyle:{"text-align":"center"}},[a._v("RPC")])])]),a._v(" "),r("tbody",[r("tr",[r("td",[a._v("协议")]),a._v(" "),r("td",{staticStyle:{"text-align":"center"}},[a._v("HTTP")]),a._v(" "),r("td",{staticStyle:{"text-align":"center"}},[a._v("TCP")])]),a._v(" "),r("tr",[r("td",[a._v("性能")]),a._v(" "),r("td",{staticStyle:{"text-align":"center"}},[a._v("低")]),a._v(" "),r("td",{staticStyle:{"text-align":"center"}},[a._v("高")])]),a._v(" "),r("tr",[r("td",[a._v("灵活度")]),a._v(" "),r("td",{staticStyle:{"text-align":"center"}},[a._v("高")]),a._v(" "),r("td",{staticStyle:{"text-align":"center"}},[a._v("低")])])])]),a._v(" "),r("h3",{attrs:{id:"优质博客"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优质博客"}},[a._v("#")]),a._v(" 优质博客")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://forezp.blog.csdn.net/article/details/70148833",target:"_blank",rel:"noopener noreferrer"}},[a._v("史上最简单的 SpringCloud 教程"),r("OutboundLink")],1)]),a._v(" "),r("h2",{attrs:{id:"spring-cloud-alibaba"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-alibaba"}},[a._v("#")]),a._v(" Spring Cloud Alibaba")]),a._v(" "),r("h3",{attrs:{id:"nacos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nacos"}},[a._v("#")]),a._v(" Nacos")]),a._v(" "),r("p",[a._v("注册配置中心")]),a._v(" "),r("h4",{attrs:{id:"功能组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#功能组件"}},[a._v("#")]),a._v(" 功能组件")]),a._v(" "),r("p",[a._v("分为Server和Client")]),a._v(" "),r("h4",{attrs:{id:"server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[a._v("#")]),a._v(" Server")]),a._v(" "),r("p",[a._v("由Java编写，管理注册服务，向Client提供服务列表，保存并提供Client配置信息，服务治理功能")]),a._v(" "),r("h4",{attrs:{id:"client-项目模块-如appservice"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#client-项目模块-如appservice"}},[a._v("#")]),a._v(" Client(项目模块,如AppService)")]),a._v(" "),r("p",[a._v("可由多种语言编写，注册自身服务，获取服务列表，获取配置信息，维持心跳信息")]),a._v(" "),r("h4",{attrs:{id:"注册中心原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注册中心原理"}},[a._v("#")]),a._v(" 注册中心原理")]),a._v(" "),r("p",[a._v("Client每5秒向Server发送一次心跳，心跳带上服务名、ip、端口号等信息；同时Server主动发起健康检查，15没收到心跳视为实例不健康，30秒就剔除这个实例")]),a._v(" "),r("h4",{attrs:{id:"配置中心原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置中心原理"}},[a._v("#")]),a._v(" 配置中心原理")]),a._v(" "),r("p",[a._v("spring-cloud-starter-alibaba-nacos-discovery包中集成了Ribbon，在RestTemplate的Bean中加上注解@LoadBalance，可以做到服务发现与负载均衡，实现调用其他模块的接口；"),r("br"),a._v("\n也可用feign实现(达到以调用接口的形式调用)，feign的内部实现就是Ribbon")]),a._v(" "),r("h3",{attrs:{id:"sentinel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sentinel"}},[a._v("#")]),a._v(" Sentinel")]),a._v(" "),r("p",[a._v("可实现降级、熔断，功能类似于Hystrix，还记录了QPS\nfeign.sentinel.enabled=true  在feign中开启对Sentinel的支持，实现降级处理；"),r("br"),a._v('\nFeign中的接口上声明fallback属性指向定义的类@Feign(value="app-Service", fallback=CreditServiceFallback.class),'),r("br"),a._v("\n类中重写接口的方法，实现远程调用接口出错时来实现定义的CreditServiceFallback类中的降级处理业务")]),a._v(" "),r("p",[a._v("和Nacos一样也有页面支持，可在线操作")]),a._v(" "),r("h3",{attrs:{id:"seata"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#seata"}},[a._v("#")]),a._v(" Seata")]),a._v(" "),r("p",[a._v("微服务分布式事务解决方案\n@GlobalTransactional")]),a._v(" "),r("p",[a._v("全局锁，保证强一致，用的较少")])])}),[],!1,null,null,null);t.default=s.exports}}]);