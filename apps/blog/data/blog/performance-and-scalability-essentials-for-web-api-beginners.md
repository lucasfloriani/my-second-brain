---
title: Performance and Scalability Essentials for Web API Beginners
date: '2023-03-18'
tags: ['article', 'backend', 'performance', 'javascript', 'node', 'API', 'cache', 'multithreading', 'loadBalancer', 'read', 'withResume']
draft: false
summary: Use multithreading when available.. In the post is used NGINX.. Use cache to return faster the requests that have the same input....
description: Use multithreading when available.. In the post is used NGINX.. Use cache to return faster the requests that have the same input....
---

# Performance and Scalability Essentials for Web API Beginners

[Performance and Scalability Essentials for Web API Beginners](https://kinda-silly-blog.vercel.app/posts/performance-and-scalability-essentials-for-web-api)

### How to test the API

[Artillery](https://www.artillery.io/docs/guides/guides/http-reference) is a library that helps us to test an API performance by making a lot of requests at once.

### Big O Notation

Use **Big O notation** to identify complex code in your codebase and try to descrease the complexity by refectoring it.

### Multithreading

Use multithreading when available. In node we can use NodeJs clustering to achieve this.

![Fallback text 1](/static/assets/pasted-image-20230318174335.png)

### Load Balancer

Implement load balancing. In the post is used NGINX.

![Fallback text 2](/static/assets/pasted-image-20230318174438.png)

### Cache

Use cache to return faster the requests that have the same input. Redis is used in the post.