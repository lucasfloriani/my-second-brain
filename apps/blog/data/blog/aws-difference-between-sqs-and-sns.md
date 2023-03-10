---
title: AWS - Difference between SQS and SNS
date: '2023-01-15'
tags: ['article', 'backend', 'AWS', 'SNS', 'SQS', 'websocket', 'read', 'withResume']
draft: false
summary: SNS is a distributed publish-subscribe service.. Amazon SNS is a fast, flexible, fully managed push notification service that lets you send individual messages or to bulk messages to large numbers of ...
description: SNS is a distributed publish-subscribe service.. Amazon SNS is a fast, flexible, fully managed push notification service that lets you send individual messages or to bulk messages to large numbers of ...
---

# AWS - Difference between SQS and SNS

[AWS - Difference between SQS and SNS](https://medium.com/awesome-cloud/aws-difference-between-sqs-and-sns-61a397bf76c5)

**SNS** is a distributed **publish-subscribe** service.
**SQS** is distributed **queuing** service.

## SNS (Simple Notification Service)

Amazon SNS is a fast, flexible, fully managed push notification service that lets you send individual messages or to bulk messages to large numbers of recipients. Amazon SNS makes it simple and cost effective to send push notifications to mobile device users, email recipients or even send messages to other distributed services.

SNS supports several end points such as Email, SMS, HTTP end point and SQS. If you want unknown number and type of subscribers to receive messages, you need SNS.

With Amazon SNS, you can send _push notifications_ to Apple, Google, Fire OS, and Windows devices , as well as to Android devices in China with Baidu Cloud Push. You can use SNS to send SMS messages to mobile device users in the US or to email recipients worldwide.

## SQS (Simple Queue Service)

Amazon SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.

**SQS** is distributed **queuing** system. Messages are not pushed to receivers. Receivers have to poll SQS to receive messages. Messages can be stored in SQS for short duration of time (max 14 days).

Messages can’t be received by multiple receivers at the same time. Any one receiver can receive a message, process and delete it. Other receivers do not receive the same message later. Polling inherently introduces some latency in message delivery in SQS unlike SNS where messages are immediately pushed to subscribers.

## Key Differences

#### Entity Type

- SQS: Queue (similar to JMS, MSMQ)
- SNS: Topic-Subscriber (Pub/Sub system)

#### Message consumption

- SQS: Pull Mechanism - Consumers poll messages from SQS.
- SNS: Push Mechanism - SNS pushes messages to consumers.

#### Persistence

- SQS: Messages are persisted for some duration in no consumer available. The retention period value is from 1 minute to 14 days. The default is 4 days
- SNS: No persistence. Whichever consumer is present at the time of message arrival, get the message and the message is deleted. If no consumers available then the message is lost.

In SQS the message delivary is guaranteed but in SNS it is not.

#### Consumer Type

- SQS: All the consumers are supposed to be identical and hence process the messages in exact same way.
- SNS: All the consumers are (supposed to be) processing the messages in different ways.

## Use cases

Choose **SNS** if:
- You would like to be able to publish and consume batches of messages
- You would like to allow same message to be processed in multiple ways
- Multiple subscribers are needed.

Choose **SQS** if:
- You need a simple queue with no particular additional requirements
- Decoupling two applications and allowing parallel asynchronous processing.
- Only one subscriber is needed

PS: We can design **fanout** pattern by using both SNS and SQS. In this pattern, a message published to an SNS topic is distributed to multiple SQS queues in parallel.

![Fallback text 1](/static/assets/pasted-image-20221205212837.png)

## Resume

SQS is mainly used to decouple applications. SNS distributes several copies of message to several subscribers.