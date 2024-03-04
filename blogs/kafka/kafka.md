---
title: Kafka
date: 2019-04-09 00:17:45
categories: KafKa
tags:
---

# Kafka

由多个broker组成，每个broker是一个节点；创建一个topic，这个topic会划分为多个partition，每个partition可以存在不同的broker上，每个partition就放一部分数据。
天然的分布式消息队列，一个topic数据分散放在多个机器上，每个机器放一部分数据，Kafka 0.8之前，没有HA机制，如果共三台服务器的话一台蹦了，就会损失1/3的数据；有HA机制，副本机制，Leader、Follower