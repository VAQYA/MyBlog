# Web Service  

就是一个应用程序，它向外界暴露出一个能够通过web进行调用的API。

## WSDL
WSDL(Web Services Description Language), web服务描述语言，它是webservice服务端使用说明书，  
说明服务端接口、方法、参数和返回值，WSDL是随服务发布成功自动生成的，无需编写。
  
Service：相关端口的集合，包括其关联的接口、操作、消息等。  

Binding：特定端口类型的具体协议和数据格式规范  

portType: 服务端点，描述 web service可被执行的操作方法，以及相关的消息，通过binding指向portType  

message: 定义一个操作（方法）的数据参数  

types: 定义 web service 使用的全部数据类型  


## 根据服务端wsdl地址自动生成客户端代码
wsdl2java -encoding utf-8 -verbose http://10.42.1.211/skwebsrv/skwebsrv.asmx?wsdl  

-p 也就是package 对应java中的包  
-d 输入目录,生成.java文件会在该目录,会自动添加-p参数配置的包路径  
-client 生成客户端测试web service的代码.  
-server 生成服务器启动web service的代码.  
-impl 生成web service的实现代码.  
-ant  生成build.xml文件.  
-all 生成上面-client -server -impl -ant 对应的所有文件.  


## SOAP  
SOAP规范定义了SOAP消息的格式，以及怎样通过HTTP协议来使用SOAP。   
SOAP也是基于XML（标准通用标记语言下的一个子集）和XSD的，XML是SOAP的数据编码方式。   
SOAP不是WebService的专有协议
SOAP = Http + XML  

```
必需的 Envelope 元素  // 可把此 XML 文档标识为一条 SOAP 消息
可选的 Header 元素  // 包含头部信息
必需的 Body 元素  // 包含所有的调用和响应信息
可选的 Fault 元素  // 提供有关在处理此消息所发生错误的信息

```

### JaxWsProxyFactoryBean 
要求服务端的WebService必须是Java代码实现

### JaxWsDynamicClientFactory  
只需要指定服务器端wsdl文件的位置，然后指定要调用的方法和参数即可，不用关心服务器的实现。  

### JaxWsServerFactoryBean  
用JaxWsServerFactoryBean发布，需要独立的jetty包。  


































