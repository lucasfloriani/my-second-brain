[AWS For Front-End Engineers v2](https://frontendmasters.com/courses/aws-v2)
[Repo of the course](https://github.com/stevekinney/aws-v2)

## Github Actions logic to deploy to S3 and invalidate Cloudfront cache

![[Pasted image 20221120191822.png]]


## AWS S3 Policies structure

![[Pasted image 20221120191906.png]]

-   **Principal** — _who_ can do the thing?
-   **Action** — _what_ can they do?
-   **Resource** — to _which_ things?

##### Real case example

![[Pasted image 20221120191957.png]]

## Lambda@Edge Functions

Lambda functions that you can run in the cache layers of Cloudfront, like a callback

![[Pasted image 20221120192146.png]]


## OAI - Origin Access Identity

It's a configuration for S3 buckets to only allow Cloudfront to get files from there, it's good to prevent costs.

![[Pasted image 20221120192304.png]]

## Combining CloudFront Functions with Lambda@Edge

For a given cache behavior, the following restrictions apply:

-   Each event type (viewer request, origin request, origin response, and viewer response) can have only one edge function association.
-   You cannot combine CloudFront Functions and Lambda@Edge in viewer events (viewer request and viewer response).

All other combinations of edge functions are allowed. The following table explains the allowed combinations.

![[Pasted image 20221120192551.png]]


- [x] Read
- [x] Create resume
- [x] Put tag `read` and `withResume`

##### Tags
#video, #course, #fullStack, #AWS , #lambda , #S3, #lambdaEdge , #OAI, #policies, #architecture , #deployment, #cloudFrontFunctions, #cloudFront
