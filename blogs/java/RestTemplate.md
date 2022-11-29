---
title: RestTemplate
date: 2020-10-01
tags: tag1
categories: Java
---

## Spring3.0后支持的http请求工具 RestTemplate

webClient：是Spring-webFlux包下的，非阻塞响应，最低java8支持函数式编程，性能好

RestTemplate：是Spring-webmvc包下的，满足RestFul原则，代码简单，默认依赖jdk的HTTP连接工具，对httpclient进行了封装

HttpClient:是apache httpClient包下的，代码复杂，需要资源回收


```java
public interface MultiValueMap<K, V> extends Map<K, List<V>>  //一个key可以存多个value
public class HttpHeaders implements MultiValueMap<String, String>, Serializable //请求头
public class RequestEntity<T> extends HttpEntity<T>  //请求实体
public class ResponseEntity<T> extends HttpEntity<T> //返回实体


  @Autowired
   RestTemplate restTemplate;

```
### GET请求
```java
1. 参数name、age在urlString路径上，用占位符依次表示{1}、{2}、、、

	String urlString1 = "https://nfys-test.kinglian.cn/serviceResourc/User/page?name={1}&age={2}";  
	name = "vaq", age = "18";
	ResponseEntity<User> responseEntity = restTemplate.getForEntity(urlString1, User.class, name, age); 

2. 参数map的key和占位符的key相对应

    String urlString2 = "https://nfys-test.kinglian.cn/serviceResourc/User/page?name={name}&age={age}";
	Map map = new HashMap();
	map.put("name","vaq");
	map.put("age","18");
	ResponseEntity<User> responseEntity = restTemplate.getForEntity(urlString2, User.class, map); 

3. 使用URI对象，参数可直接拼在地址上，但对中文参数要进行编码

	String name = "vaq", age = "18"; 
    String urlString3 = "https://nfys-test.kinglian.cn/serviceResourc/User/page?name="+URLEncoder.encode(name, "UTF-8")+"&age="+age;
	URI uri = URI.create(urlString3);
	ResponseEntity<User> responseEntity = restTemplate.getForEntity(urlString, User.class); 

User user = responseEntity.getBody();


### getForEntity和getForObject
getForEntity可以获取响应头、状态码等
getForObject只有响应体，相当于getForEntity().getBody();
```
### POST请求
```
地址URLString或者URI对象都可以

* 不要请求头时
1. 参数map对象，地址中参数占位符可有可无

MultiValueMap map = new LinkedMultiValueMap();
map.add("name","vaq");
restTemplate.postForEntity(urlString,map,User.class);

2. 传递JOSN数据或类对象
User user = new User();
user.setName("age");
restTemplate.postForEntity(urlString,user,User.class);

* 需要请求头时

//请求头
HttpHeaders httpHeaders = new HttpHeaders();
        MediaType mediaType = MediaType.APPLICATION_JSON_UTF8;
        httpHeaders.setContentType(mediaType);
        httpHeaders.add("Accept",MediaType.APPLICATION_JSON_VALUE);
//请求体		
Map<String,Object> map = new HashMap<>();
        Map body = new HashMap();
        body.put("roleId","1550246");
        body.put("roleType","1");
        map.put("body",body);
//创建请求实体并调用
HttpEntity<Map> httpEntity = new HttpEntity<>(map,httpHeaders);
ResponseEntity<String> responseEntity = restTemplate.postForEntity(urlString,httpEntity,String.class);

或者

RequestEntity requestEntity = RequestEntity.post(uri).header("Accept",MediaType.APPLICATION_JSON_VALUE).contentType(MediaType.APPLICATION_JSON_UTF8).body(map);
ResponseEntity<String> responseEntity1 = restTemplate.exchange(requestEntity,String.class);
```
3. form-data表单传值
```
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        MultiValueMap map = new LinkedMultiValueMap();
        map.add("pollutantCode",pollutantCode);
        HttpEntity requestBody = new HttpEntity(map, headers);

        ResponseEntity<String> responseEntity = restTemplate.postForEntity(urlString, requestBody, String.class);
        
```

### DELETE请求

### PUT请求

### 通用方法请求exchange,可用于封装类
```js
//相对于有请求头的Post请求，需指定方法类型
ResponseEntity<User> responseEntity = restTemplate.exchange("url",HttpMethod.GET,httpEntity,User.class);
User result = responseEntity.getBody();
```

### MediaType

问题背景：微信支付通知响应报文，之前是response.print,后来改为了@ResponseBody String，发现不好使了，即使业务成功，返回success应答，微信仍然一直通知到极限次数。

排查思路：找convertor，json转换器的没问题，但是他只支持application/json，二微信不接受application/json，string转换器没问题，然后看了看控制器代码，resopnseBody默认mediaType是 application/json,找到问题。

解决方案：制器代码 方法的 mapping 注解后面，增加produces = {"text/plain","application/xml"}


### 注意入参中的key有空格，将接收不到url参数
map.put("url ","https://www.baidu.com");

### RestTemplateBuilder
当有自定义的序列化和反序列话的类时候要通过RestTemplateBuilder.build()来注册RestTemplate，替代new RestTemplate();

### RestTemplate配置类实例
```java
@Configuration
public class RestTemplateConfig {
    @Autowired
    private RestTemplateBuilder restTemplateBuilder;

    @Bean
    public RestTemplate customRestTemplate(){
        RestTemplate restTemplate = restTemplateBuilder.build();

        // 客户端请求链接策略
        HttpComponentsClientHttpRequestFactory httpRequestFactory = new HttpComponentsClientHttpRequestFactory();
        // 请求超时时间（毫秒）
        httpRequestFactory.setConnectionRequestTimeout(10*1000);
        // 连接超时时间（毫秒）
        httpRequestFactory.setConnectTimeout(10*1000);
        // 读写超时时间(毫秒)
        httpRequestFactory.setReadTimeout(10*1000);
        httpRequestFactory.setHttpClient(httpClientBuilder().build());
        restTemplate.setRequestFactory(httpRequestFactory);


        return restTemplate;
    }

    /**
     * 设置Http连接管理器，连接池相关配置
     */
    private HttpClientBuilder httpClientBuilder(){
        HttpClientBuilder httpClientBuilder = HttpClientBuilder.create();
        httpClientBuilder.setConnectionManager(poolingConnectionManager());
        ConnectionKeepAliveStrategy connectionKeepAliveStrategy = ((httpResponse, httpContext) -> 20*1000);
        httpClientBuilder.setKeepAliveStrategy(connectionKeepAliveStrategy);
        httpClientBuilder.setRetryHandler(new DefaultHttpRequestRetryHandler());
        RequestConfig requestConfig = RequestConfig.custom()
                .setConnectionRequestTimeout(10*1000)
                .setConnectTimeout(10*1000)
                .setSocketTimeout(10*1000)
                .build();
        httpClientBuilder.setDefaultRequestConfig(requestConfig);
        return httpClientBuilder;
    }

    /**
     * 链接线程池管理，可以保持连接不断开（keep-alive）,这样速度会更快
     */
    private HttpClientConnectionManager poolingConnectionManager(){
        PoolingHttpClientConnectionManager poolingHttpClientConnectionManager = new PoolingHttpClientConnectionManager();
        poolingHttpClientConnectionManager.setMaxTotal(100);// 整个连接池的最大连接数
        poolingHttpClientConnectionManager.setDefaultMaxPerRoute(50);//每个路由的最大连接数
        poolingHttpClientConnectionManager.setValidateAfterInactivity(300);
        poolingHttpClientConnectionManager.closeIdleConnections(15, TimeUnit.SECONDS);
        poolingHttpClientConnectionManager.closeExpiredConnections();
        return poolingHttpClientConnectionManager;
    }
```


## 重试机制

基于spring-retry的注解方式实现  
**被重调的方法不能和当前方法属于同一个类**

@Retryable注解的方法在发生异常时会重试，参数说明：
value：当指定异常发生时会进行重试 ,HttpClientErrorException是RestClientException的子类。
include：和value一样，默认空。如果 exclude也为空时，所有异常都重试
exclude：指定异常不重试，默认空。如果 include也为空时，所有异常都重试
maxAttemps：最大重试次数，默认3
backoff：重试等待策略，默认空
@Backoff注解为重试等待的策略，参数说明：
delay：指定重试的延时时间，默认为1000毫秒
multiplier：指定延迟的倍数，比如设置delay=5000，multiplier=2时，第一次重试为5秒后，第二次为5x2=10秒，第三次为5x2x2=20秒。


1. pom引入依赖包
```
        <dependency>
            <groupId>org.springframework.retry</groupId>
            <artifactId>spring-retry</artifactId>
            <version>1.2.5.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>org.aspectj</groupId>
            <artifactId>aspectjweaver</artifactId>
        </dependency>
```
2. 配置类添加注解
在项目启动类或配置类上添加@EnabelRetry

3. 服务类
```
public interface IRetryService {
    String getPostHttpString(String urlString, HttpEntity<String> httpEntity);
}
```
```
@Slf4j
@Service
public class IRetryServiceImpl implements IRetryService {

    @Autowired
    private RestTemplateConfig restTemplateConfig;
    
    /**
     * 发起请求，返回异常时重试
     * @param urlString
     * @param httpEntity
     * @return
     */
    @Override
    @Retryable(value = RestClientException.class, maxAttempts = 5, backoff = @Backoff(delay = 5000L,multiplier = 2))
    public String getPostHttpString(String urlString, HttpEntity<String> httpEntity){
        System.out.println("发起远程API请求:" + DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now()));
        String responseEntity = restTemplateConfig.customRestTemplate().postForObject(urlString, httpEntity, String.class);
        return responseEntity;
    }
```

































