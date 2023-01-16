---
title: Operating Lambda Design principles in event-driven architectures – Part 2
date: '2016-03-08'
tags: ['article', 'architecture', 'lambda', 'eventDriven', 'read', 'withResume']
draft: true
summary: Implement it
description: Implement it
---

# Operating Lambda Design principles in event-driven architectures – Part 2

[Operating Lambda Design principles in event-driven architectures – Part 2](https://aws.amazon.com/blogs/compute/operating-lambda-design-principles-in-event-driven-architectures-part-2/)

Part 1:
[[Operating Lambda Understanding event-driven architecture – Part 1]]

### Type of action and correspondingly AWS service

![Fallback text 1](/static/assets/pasted-image-20220809200735.png)

### Other patterns and their respectively AWS service

![Fallback text 2](/static/assets/pasted-image-20220809200919.png)

For example, when **API Gateway** and **Lambda** interact, there is no concept of load balancing available since it is entirely managed by the services. You also have no direct control over which **Availability Zones** the services use when invoking functions at any point in time, or how and when Lambda execution environments are scaled up or destroyed.

Lambda provides an initializer before the handler where you can initialize database connections, libraries, and other resources. Since execution environments are reused where possible to improve performance, you can amortize the time taken to initialize these resources over multiple invocations. However, you should not store any variables or data used in the function within this global scope.

Any secrets or sensitive information should be stored in **AWS Systems Manager Parameter Store** or **AWS Secrets Manager** and loaded by the function

you can run cron tasks in serverless applications by using scheduled expressions for rules in **Amazon EventBridge**, these should be used sparingly or as a last-resort

### Make the architecture near real time

For example, it’s not best practice to use a batch process that triggers a Lambda function to fetch a list of new S3 objects. This is because the service may receive more new objects in between batches than can be processed within a 15-minute Lambda function.

![Fallback text 3](/static/assets/pasted-image-20220809201849.png)

Instead, the Lambda function should be invoked by the S3 service each time a new object is put into the S3 bucket. This approach is significantly more scalable and also invokes processing in near-real time.

![Fallback text 4](/static/assets/pasted-image-20220809201915.png)