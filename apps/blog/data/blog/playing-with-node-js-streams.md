---
title: Playing with Node.js Streams
date: '2016-03-08'
tags: ['article', 'fullStack', 'streams', 'node', 'read', 'withResume']
draft: true
summary: Implement it
description: Implement it
---

# Playing with Node.js Streams

[Playing with Node.js Streams](https://kinda-silly-blog.vercel.app/posts/nodejs-streams)

## Types of Streams

-   **Readable Stream** (This stream is used to read data on demand)    
-   **Writable Stream** (This stream is used to write data on demand)
-   **Duplex Stream** (Stream that are both Readable and Writable)
-   **Transform Stream** (Duplex stream that can modify or transform data)

## How to work with Streams?

Is important to know that if you want to work with Streams you'll need to work with a pipeline. To do this, you can use the pipe method of a readable stream, for example:

![Fallback text 1](/static/assets/pasted-image-20221005201233.png)

Also, we have some utils to deal with that, for example, the `pipeline` function that you can import from the `stream` module:

![Fallback text 2](/static/assets/pasted-image-20221005201245.png)

## Examples of Usages

#### Dealing with Gigabytes of archives

For this example, I've created a .txt file with 50GB of size, so if you try to handle this large archive not using streams, you'll probably end up with something like this:

![Fallback text 3](/static/assets/pasted-image-20221005201837.png)

The problem here is that the file is too large, so the node can't upload the entire file into memory to work with. Because of that, if you try to run this code with a file larger than 2 GB in size, you will get an error like this one:

![Fallback text 4](/static/assets/pasted-image-20221005201853.png)

So the solution here is simple, we can use readable, transform, and writable streams to deal with this file on demand:

![Fallback text 5](/static/assets/pasted-image-20221005201910.png)

And it's solved. In this case, the node transformed all letters of this giant txt file (50 GB of size) in upper case in 193.94 seconds, doing this on demand!

#### Streaming Video with a REST API

You surely are used to streaming videos. Probably many of the platforms you use every day like YouTube, Netflix, Prime Video, etc, use this medium to stream videos in real-time, now the question remains how to do this using Node.Js?

You can certainly build a simple endpoint that will take a video file and serve it simply to your front- end, something like this:

![Fallback text 6](/static/assets/pasted-image-20221005201942.png)

The problem with this code above is that your front-end will download all the file and after that load the video to the user and you probably know that videos can have a considerable size, so it can take a while to load and your user will be waiting all this time, the good news is that we can solve this using the Node.Js Streams, in case you don't know, the express response is a stream, this allows us to do something like:

![Fallback text 7](/static/assets/pasted-image-20221005202017.png)

And It's solved! Here we're defining a readable stream that will start from some size and ends in another one, so combining that with the 206 HTTP status code that means Partial Content, we can stream our video in chunks to the front-end.