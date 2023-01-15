---
title: Stronger JavaScript with Opaque Types
date: '2016-03-08'
tags: ['article', 'fullStack', 'typescript', 'opaqueTypes', 'architecture', 'read', 'withResume']
draft: true
summary: Implement it
description: Implement it
---
# Stronger JavaScript with Opaque Types


[Stronger JavaScript with Opaque Types](https://codemix.com/opaque-types-in-javascript)

### What is Opaque Types?

Is a way to enforce in the types that we are using a correct type that was declared for the context, even though the internal type we are passing can be equal (number for example).

Example of a code that doesnt ensure the correct usage of parameters because of the lack of Opaque Types:

![Fallback text 1](/static/assets/pasted-image-20221003203241.png)


![Fallback text 2](/static/assets/pasted-image-20221003203256.png)


This code is passing the amount first, even tought it expected the accountNumber

To ensure something like this in the Type level, we can use Opaque Types


### How to declare it?

![Fallback text 3](/static/assets/pasted-image-20221003203419.png)


A generic to abstract the logic for us:

![Fallback text 4](/static/assets/pasted-image-20221003203506.png)



#### How it affects the code?

Check this example bellow:

![Fallback text 5](/static/assets/pasted-image-20221003203604.png)


Using the code above in an application:

![Fallback text 6](/static/assets/pasted-image-20221003203616.png)



