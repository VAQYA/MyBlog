---
title: JSON
date: 2020-10-01
tags: tag1
categories: Java
---

## jackson

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.core.type.TypeReference;

```
https://gitee.com/vaq/magisk/raw/master/json/restTemplate.json

{
    "data": {
        "oneFissionReward": {
            "gold": null,
            "money": 10,
            "code": 0,
            "message": "success"
        },
        "twoFissionReward": {
            "gold": null,
            "money": 10,
            "code": 0,
            "message": "success"
        },
        "selfReward": {
            "code": 0,
            "message": "success",
            "coupons": [
                {
                    "couponCode": "123456",
                    "money": 10
                },
                {
                    "couponCode": "789789",
                    "money": 20
                }
            ]
        }
    },
    "code": 0,
    "message": "success"
}
```


```
ObjectMapper objectMapper = new ObjectMapper();
String resultString =objectMapper.writeValueAsString(obj);	//Object转String
JsonNode resultJson = objectMapper.readTree(str);	//String转JsonNode
JsonNode dataJson = resultJson.get("data");	//JsonNode获取下一子级JsonNode

if(null != dataJson){
	JsonNode selfRewardJson = dataJson.get(selfReward);
	if(null != selfRewardJson){
		String code = selfRewardJson.get("code").asText();
		String message = selfRewardJson.findValue("message").textValue();
		JsonNode couponsJson = selfRewardJson.findValue("coupons");
            if(null != couponsJson){
				List<CouponsDTO> coupons = objectMapper.readValue(couponsJson.toString(), new TypeReference<List<CouponsDTO>>(){});  //JsonNode转List,不能用couponsJson.asText(),因为这个参数必须要有双引号包裹
			}
	}
}

```

### asText()、textValue()、toString()

String message = jsonNode.get("message").asText();	// success  
String message1 = jsonNode.get("message").textValue();	// success
String message2 = jsonNode.get("message").toString();	// "success"  

System.out.println("success".equals(message));  true
System.out.println("success".equals(message1));  true
System.out.println("success".equals(message2));	false

toString会**额外的**前后再加上""  

### JsonNode
if(null != jsonNode)
判断是否存在该节点，oneFissionReward为true，**gold也为true**，vaq为false

### 修改JsonNode的结点值
要先转成ObjectNode  
ObjectNode objectNode = (ObjectNode) dataJson;  
objectNode.put("coupon",couponCount);  

### jsonNode.get()和.findValue()
? ?

### String转List
```
1. 
import cn.hutool.json.JSONUtil;
List<PatientImgVo> list = JSONUtil.toList(JSONUtil.parseArray(jsonImgString), PatientImgVo.class);

2. 
import com.fasterxml.jackson.databind.ObjectMapper;
ObjectMapper objectMapper = new ObjectMapper();
List<PatientImgVo> imgUrlList = objectMapper.readValue(imgsUrlNode.toString(), new TypeReference<List<PatientImgVo>>(){});
```
### List转String
```
import com.fasterxml.jackson.databind.ObjectMapper;
String s = objectMapper.valueToTree(list).toString();
```

### 获取数据后给对象赋值
Integer code = jsonNode.get("code").intValue();  code是Integer类型
Object data = jsonNode.get("data");  获取的data是个JSON对象
String message = jsonNode.get("message").textValue(); message是String类型










