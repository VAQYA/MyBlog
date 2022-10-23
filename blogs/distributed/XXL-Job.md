---
title: XXL-JOB
date: 2020-10-01
tags: tag1
categories: 分布式
---

## 报错 
	
	java.lang.RuntimeException: xxl-job method-jobhandler param-classtype invalid,   
	 for[class com.qm.data.exchange.ts.webservice.job.TsDataJob#getDataTfcLatest] ,   
	 The correct method format like " public ReturnT<String> execute(String param) " .
	at com.xxl.job.core.executor.impl.XxlJobSpringExecutor.initJobHandlerMethodRepository  
	
	解决：  
	@XxlJob 注解的方法入参必须是一个String