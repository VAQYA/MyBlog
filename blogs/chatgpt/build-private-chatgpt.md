---
title: 搭建个人ChatGPT(无需服务器)
date: 2024-02-25
tags: ChatGPT
categories: ChatGPT
meta:
  - name: description
    content: 使用GitHub和Vercel搭建个人ChatGPT,无需服务器
  - name: keywords
    content: 搭建,ChatGPT,Github,Vercel,服务器,个人,网站

---

## 先看成果
搭建好自己的私人ChatGPT，在国内不用魔法也能随时使用ChatGPT了

![搭建ChatGPT](https://files.mdnice.com/user/57040/92df15a7-2d8b-4ef2-8a6b-8e3e05651042.png)

![搭建GPT对话](https://files.mdnice.com/user/57040/d81adc1f-17a8-4f66-8a13-b7a4fff0e9fb.png)

以下介绍不需要服务器的最简易的部署方式

## 准备
1. GitHub账号
2. Vercel账号
3. Openai账号及ChatGPT的apikey
4. 可用的域名

目前发现可在Vercel中部署的热门GPT项目有ChatGPT-Next-Web、chatbot-ui、ChuanhuChatGPT、chatgpt-demo、BetterChatGPT、Anse、yakGPT、ChatChat，这里以最高star的[ChatGPT-Next-Web](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web)为例。

### 1.先将ChatGPT-Next-Webfork到自己的仓库

![](https://images.weserv.nl/?url=https://files.mdnice.com/user/57040/66cfbd7a-f8a3-41c8-a4dc-eac1a1a2f0a9.png)

### 2.注册、登录Vercel，添加GitHub账号并导入该项目，在环境变量中配置OPENAI_API_KEY

![](https://images.weserv.nl/?url=https://files.mdnice.com/user/57040/b187ca02-9963-44fe-b80f-76ba92759a3a.png)

![](https://images.weserv.nl/?url=https://files.mdnice.com/user/57040/9d62fb4b-6a54-452c-adc5-eb11f1040aa5.png)
### 3.分别在Vercel和域名服务商配置域名解析

![](https://images.weserv.nl/?url=https://files.mdnice.com/user/57040/26193f3a-1fcd-4024-8483-f45fb0dfea52.png)

![](https://images.weserv.nl/?url=https://files.mdnice.com/user/57040/788a27b8-fe45-4a12-a731-38e52c85253b.png)

### 4.结束
以上为搭建个人私有ChatGPT的方式，如果需要升级使用GPT4，请看这篇文章[如何升级ChatGPT Plus（GPT4）](https://vaq86.cn/blogs/chatgpt/upgrade-chatgptplus.html)，如果觉得麻烦可免费试用我搭建的这个GPT（https://chat.vaq86.cn），有任何Chat GPT相关的疑问欢迎添加我的微信咨询  

<img src="https://images.weserv.nl/?url=https://files.mdnice.com/user/57040/32e7ce8a-3d3c-4926-bcd1-7451cbf51aa5.png" style="zoom:33%;" />