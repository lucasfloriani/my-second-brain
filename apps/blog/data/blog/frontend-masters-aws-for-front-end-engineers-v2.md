---
title: FrontendMasters - AWS For Front-End Engineers v2
date: '2023-01-15'
tags: ['video', 'course', 'fullStack', 'AWS', 'lambda', 'S3', 'lambdaEdge', 'OAI', 'policies', 'architecture', 'deployment', 'cloudFrontFunctions', 'cloudFront']
draft: true
summary: Each event type (viewer request, origin request, origin response, and viewer response) can have only one edge function association.. The following table explains the allowed combinations....
description: Each event type (viewer request, origin request, origin response, and viewer response) can have only one edge function association.. The following table explains the allowed combinations....
---

# FrontendMasters - AWS For Front-End Engineers v2

[AWS For Front-End Engineers v2](https://frontendmasters.com/courses/aws-v2)

[Repo of the course](https://github.com/stevekinney/aws-v2)

## Github Actions logic to deploy to S3 and invalidate Cloudfront cache

![Fallback text 1](/static/assets/pasted-image-20221120191822.png)

## AWS S3 Policies structure

![Fallback text 2](/static/assets/pasted-image-20221120191906.png)

-   **Principal** — _who_ can do the thing?
-   **Action** — _what_ can they do?
-   **Resource** — to _which_ things?

##### Real case example

![Fallback text 3](/static/assets/pasted-image-20221120191957.png)

## Lambda@Edge Functions

Lambda functions that you can run in the cache layers of Cloudfront, like a callback

![Fallback text 4](/static/assets/pasted-image-20221120192146.png)

## OAI - Origin Access Identity

It's a configuration for S3 buckets to only allow Cloudfront to get files from there, it's good to prevent costs.

![Fallback text 5](/static/assets/pasted-image-20221120192304.png)

## Combining CloudFront Functions with Lambda@Edge

For a given cache behavior, the following restrictions apply:

-   Each event type (viewer request, origin request, origin response, and viewer response) can have only one edge function association.
-   You cannot combine CloudFront Functions and Lambda@Edge in viewer events (viewer request and viewer response).

All other combinations of edge functions are allowed. The following table explains the allowed combinations.

![Fallback text 6](/static/assets/pasted-image-20221120192551.png)