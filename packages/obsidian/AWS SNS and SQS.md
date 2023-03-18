[AWS SNS and SQS](https://sunamjohn.medium.com/aws-sns-and-sqs-8c4138d0577)

## Amazon Simple Notification Service (SNS)

Is a fully managed messaging service for both application-toapplication (A2A) and application-to-person (A2P) communication.

- It consists of two important parts, one is _Topics_ and the other is _Subscriptions_.
- SNS works on **PubSub Model**
- From being a **PubSub**, there are always two parties, one is _Publisher_ and the other is _Subscriber_

PS: When a message is put in SNS, it will be provided to all listeners of the topic this message was added

![[Pasted image 20221205210512.png]]


## AWS Simple Message Queue Service (SQS)

Is a fully managed message queuing service. Using SQS, we can send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be always available.

- _Producer_ adds the messages in the queue and _Consumer_ will receive the message and remove from the queue.

PS: In a real-world scenario we would came to some situations where we use both of them together.

- [x] Read
- [x] Create resume
- [x] Put tag `read` and `withResume`

##### Tags
#article, #backend , #AWS, #SNS, #SQS, #websocket, #read, #withResume 
