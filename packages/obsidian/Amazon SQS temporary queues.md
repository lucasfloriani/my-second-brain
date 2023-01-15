[Amazon SQS temporary queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-temporary-queues.html)
[Temporary Queue Client Now Available for Amazon SQS](https://aws.amazon.com/about-aws/whats-new/2019/07/temporary-queue-client-now-available-for-amazon-sqs/)

Temporary queues help you save development time and deployment costs when using common message patterns such as _request-response_. You can use the [Temporary Queue Client](https://github.com/awslabs/amazon-sqs-java-temporary-queues-client) to create high-throughput, cost-effective, application-managed temporary queues.

## How it works

The client maps multiple temporary queues onto a single Amazon SQS queue automatically, allowing your application to make fewer API calls and achieve higher throughput. When a temporary queue is no longer in use, the client cleans up the temporary queue automatically.

PS: So it needs one SQS to connect those Virtual ones

## Benefits

-   They serve as lightweight communication channels for specific threads or processes.
-   They can be created and deleted without incurring additional cost.
-   They are API-compatible with static (normal) Amazon SQS queues. This means that existing code that sends and receives messages can send messages to and receive messages from virtual queues.

## Virtual queues

_Virtual queues_ are local data structures that the Temporary Queue Client creates

- Creating a virtual queue creates only temporary data structures for consumers to receive messages in. Because a virtual queue makes no API calls to Amazon SQS, virtual queues incur no cost.
-   TPS quotas apply to all virtual queues across a single host queue. For more information, see [Quotas related to messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html). (Limitations)

When a producer calls the `SendMessage` or `SendMessageBatch` API action on a virtual queue URL, the Temporary Queue Client does the following:

1.  Extracts the virtual queue name.
2.  Attaches the virtual queue name as an additional message attribute.
3.  Sends the message to the host queue.

While the producer sends messages, a background thread polls the host queue and sends received messages to virtual queues according to the corresponding message attributes.

While the consumer calls the `ReceiveMessage` API action on a virtual queue URL, the Temporary Queue Client blocks the call locally until the background thread sends a message into the virtual queue. (This process is similar to message prefetching in the [Buffered Asynchronous Client](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-client-side-buffering-request-batching.html): a single API action can provide messages to up to 10 virtual queues.) Deleting a virtual queue removes any client-side resources without calling Amazon SQS itself.

## Request-response messaging pattern (virtual queues)

The most common use case for temporary queues is the _request-response_ messaging pattern, where a requester creates a _temporary queue_ for receiving each response message. To avoid creating an Amazon SQS queue for each response message, the Temporary Queue Client lets you create and delete multiple temporary queues without making any Amazon SQS API calls

The following diagram shows a common configuration using this pattern.

![[Pasted image 20221207212538.png]]


- [x] Read
- [x] Create resume
- [x] Put tag `read` and `withResume`

##### Tags
#article, #backend , #AWS, #SQS, #SQSVirtualQueue, #TemporarySQS, #websocket, #read, #withResume 
