(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{682:function(e,t,s){"use strict";s.r(t);var n=s(5),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"jackson"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jackson"}},[e._v("#")]),e._v(" jackson")]),e._v(" "),s("p",[e._v("import com.fasterxml.jackson.databind.ObjectMapper;\nimport com.fasterxml.jackson.databind.JsonNode;\nimport com.fasterxml.jackson.core.type.TypeReference;")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('https://gitee.com/vaq/magisk/raw/master/json/restTemplate.json\n\n{\n    "data": {\n        "oneFissionReward": {\n            "gold": null,\n            "money": 10,\n            "code": 0,\n            "message": "success"\n        },\n        "twoFissionReward": {\n            "gold": null,\n            "money": 10,\n            "code": 0,\n            "message": "success"\n        },\n        "selfReward": {\n            "code": 0,\n            "message": "success",\n            "coupons": [\n                {\n                    "couponCode": "123456",\n                    "money": 10\n                },\n                {\n                    "couponCode": "789789",\n                    "money": 20\n                }\n            ]\n        }\n    },\n    "code": 0,\n    "message": "success"\n}\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('ObjectMapper objectMapper = new ObjectMapper();\nString resultString =objectMapper.writeValueAsString(obj);\t//Object转String\nJsonNode resultJson = objectMapper.readTree(str);\t//String转JsonNode\nJsonNode dataJson = resultJson.get("data");\t//JsonNode获取下一子级JsonNode\n\nif(null != dataJson){\n\tJsonNode selfRewardJson = dataJson.get(selfReward);\n\tif(null != selfRewardJson){\n\t\tString code = selfRewardJson.get("code").asText();\n\t\tString message = selfRewardJson.findValue("message").textValue();\n\t\tJsonNode couponsJson = selfRewardJson.findValue("coupons");\n            if(null != couponsJson){\n\t\t\t\tList<CouponsDTO> coupons = objectMapper.readValue(couponsJson.toString(), new TypeReference<List<CouponsDTO>>(){});  //JsonNode转List,不能用couponsJson.asText(),因为这个参数必须要有双引号包裹\n\t\t\t}\n\t}\n}\n\n')])])]),s("h3",{attrs:{id:"astext-、textvalue-、tostring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#astext-、textvalue-、tostring"}},[e._v("#")]),e._v(" asText()、textValue()、toString()")]),e._v(" "),s("p",[e._v('String message = jsonNode.get("message").asText();\t// success'),s("br"),e._v('\nString message1 = jsonNode.get("message").textValue();\t// success\nString message2 = jsonNode.get("message").toString();\t// "success"')]),e._v(" "),s("p",[e._v('System.out.println("success".equals(message));  true\nSystem.out.println("success".equals(message1));  true\nSystem.out.println("success".equals(message2));\tfalse')]),e._v(" "),s("p",[e._v("toString会"),s("strong",[e._v("额外的")]),e._v('前后再加上""')]),e._v(" "),s("h3",{attrs:{id:"jsonnode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsonnode"}},[e._v("#")]),e._v(" JsonNode")]),e._v(" "),s("p",[e._v("if(null != jsonNode)\n判断是否存在该节点，oneFissionReward为true，"),s("strong",[e._v("gold也为true")]),e._v("，vaq为false")]),e._v(" "),s("h3",{attrs:{id:"修改jsonnode的结点值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改jsonnode的结点值"}},[e._v("#")]),e._v(" 修改JsonNode的结点值")]),e._v(" "),s("p",[e._v("要先转成ObjectNode"),s("br"),e._v("\nObjectNode objectNode = (ObjectNode) dataJson;"),s("br"),e._v('\nobjectNode.put("coupon",couponCount);')]),e._v(" "),s("h3",{attrs:{id:"jsonnode-get-和-findvalue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsonnode-get-和-findvalue"}},[e._v("#")]),e._v(" jsonNode.get()和.findValue()")]),e._v(" "),s("p",[e._v("? ?")]),e._v(" "),s("h3",{attrs:{id:"string转list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string转list"}},[e._v("#")]),e._v(" String转List")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("1. \nimport cn.hutool.json.JSONUtil;\nList<PatientImgVo> list = JSONUtil.toList(JSONUtil.parseArray(jsonImgString), PatientImgVo.class);\n\n2. \nimport com.fasterxml.jackson.databind.ObjectMapper;\nObjectMapper objectMapper = new ObjectMapper();\nList<PatientImgVo> imgUrlList = objectMapper.readValue(imgsUrlNode.toString(), new TypeReference<List<PatientImgVo>>(){});\n")])])]),s("h3",{attrs:{id:"list转string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list转string"}},[e._v("#")]),e._v(" List转String")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("import com.fasterxml.jackson.databind.ObjectMapper;\nString s = objectMapper.valueToTree(list).toString();\n")])])]),s("h3",{attrs:{id:"获取数据后给对象赋值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取数据后给对象赋值"}},[e._v("#")]),e._v(" 获取数据后给对象赋值")]),e._v(" "),s("p",[e._v('Integer code = jsonNode.get("code").intValue();  code是Integer类型\nObject data = jsonNode.get("data");  获取的data是个JSON对象\nString message = jsonNode.get("message").textValue(); message是String类型')])])}),[],!1,null,null,null);t.default=a.exports}}]);