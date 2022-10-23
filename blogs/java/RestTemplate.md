---
title: RestTemplate
date: 2020-10-01
tags: tag1
categories: Java
---

### Spring3.0后支持的http请求工具 RestTemplate
```
public interface MultiValueMap<K, V> extends Map<K, List<V>>  //一个key可以存多个value
public class HttpHeaders implements MultiValueMap<String, String>, Serializable //请求头
public class RequestEntity<T> extends HttpEntity<T>  //请求实体
public class ResponseEntity<T> extends HttpEntity<T> //返回实体


  @Autowired
   RestTemplate restTemplate;

```	
### GET请求
```
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
```
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








































