---
title: Introduction to Effect, Michael Arnaldi, WorkerConf 2022 Dornbirn
date: '2023-03-01'
tags: ['video', 'functionalProgramming', 'typescript', 'effectTS', 'read', 'withResume']
draft: false
summary: Effect is a lazy promise, describes your intention, and you execute the start after the configuration (effect to a fiber)....
description: Effect is a lazy promise, describes your intention, and you execute the start after the configuration (effect to a fiber)....
---

# Introduction to Effect, Michael Arnaldi, WorkerConf 2022 Dornbirn

[Introduction to Effect, Michael Arnaldi, WorkerConf 2022 Dornbirn](https://www.youtube.com/watch?v=zrNr3JVUc8I)

### Concurrency

We can have multiple ways to handle concurrency:

Simple Promise.all

![Fallback text 1](/static/assets/pasted-image-20230228212835.png)

Promise.all but for each N items, awaiting to resolve the N first to not blow the API

![Fallback text 2](/static/assets/pasted-image-20230228212852.png)

Always having N API calls at the same time running (a lot complex)

![Fallback text 3](/static/assets/pasted-image-20230228205546.png)

Sometimes we want to have the option to interrupt the api calls

![Fallback text 4](/static/assets/pasted-image-20230228213004.png)

And the option to retry when an error occur

![Fallback text 5](/static/assets/pasted-image-20230228213143.png)

And the list goes one...

- Logging
- Metrics
- Tracing
- Dependency Injection
- Etc

PS: Most of the code shown is hard to understand and hard to maintain

## Effect

The code before is hard to compose together, this is one point of why effect ts was created.

Effect is a lazy promise, describes your intention, and you execute the start after the configuration (effect to a fiber). This makes possible composability and higher order behaviour.

Let's redo those codes with effect!

![Fallback text 6](/static/assets/pasted-image-20230301211715.png)

It's good to create a file that exports what you need:

![Fallback text 7](/static/assets/pasted-image-20230301212257.png)

![Fallback text 8](/static/assets/pasted-image-20230301212733.png)

PS: _**never**_ it's the list of requirements it needs to run the effect

![Fallback text 9](/static/assets/pasted-image-20230301214428.png)

PS: unsafeRunAsyncWith is a helper function that wraps errors we don't expect to happen

![Fallback text 10](/static/assets/pasted-image-20230301215752.png)

![Fallback text 11](/static/assets/pasted-image-20230301220100.png)

![Fallback text 12](/static/assets/pasted-image-20230301220219.png)

![Fallback text 13](/static/assets/pasted-image-20230301220849.png)

![Fallback text 14](/static/assets/pasted-image-20230301221049.png)

![Fallback text 15](/static/assets/pasted-image-20230301221247.png)

![Fallback text 16](/static/assets/pasted-image-20230301221430.png)

PS: This program to run will need the requirements (Layer) of the TodoRepo (getTodo and getTodos)
![Fallback text 17](/static/assets/pasted-image-20230301221649.png)

![Fallback text 18](/static/assets/pasted-image-20230301221742.png)

### What Effect provide for us?

![Fallback text 19](/static/assets/pasted-image-20230301221921.png)

![Fallback text 20](/static/assets/pasted-image-20230301222034.png)