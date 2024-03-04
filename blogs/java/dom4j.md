---
title: dom4j
date: 2020-10-01
tags: tag1
categories: Java
---

# dom4j
开源xml解析包，把整个xml文档当成一个对象，把内容一次性装载进内存
### xml转map
	Map<String, String> map = new HashMap<>();
	SAXReader reader = new SAXReader();
	
	InputStream ins = request.getInputStream();
	Document doc = reader.read(ins);
	//获取根节点
	Element root = doc.getRootElement();
	List<Element> list = root.elements();
	for (Element e : list) {
		map.put(e.getName(), e.getText());
	}
	ins.close();