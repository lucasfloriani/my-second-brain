[Introduction to Effect, Michael Arnaldi, WorkerConf 2022 Dornbirn](https://www.youtube.com/watch?v=zrNr3JVUc8I)


### Concurrency

We can have multiple ways to handle concurrency:

Simple Promise.all

![[Pasted image 20230228212835.png]]

Promise.all but for each N items, awaiting to resolve the N first to not blow the API

![[Pasted image 20230228212852.png]]

Always having N API calls at the same time running (a lot complex)

![[Pasted image 20230228205546.png]]

Sometimes we want to have the option to interrupt the api calls

![[Pasted image 20230228213004.png]]

And the option to retry when an error occur

![[Pasted image 20230228213143.png]]

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

![[Pasted image 20230301211715.png]]

It's good to create a file that exports what you need:

![[Pasted image 20230301212257.png]]

![[Pasted image 20230301212733.png]]
PS: _**never**_ it's the list of requirements it needs to run the effect

![[Pasted image 20230301214428.png]]
PS: unsafeRunAsyncWith is a helper function that wraps errors we don't expect to happen

![[Pasted image 20230301215752.png]]

![[Pasted image 20230301220100.png]]

![[Pasted image 20230301220219.png]]

![[Pasted image 20230301220849.png]]

![[Pasted image 20230301221049.png]]

![[Pasted image 20230301221247.png]]

![[Pasted image 20230301221430.png]]
PS: This program to run will need the requirements (Layer) of the TodoRepo (getTodo and getTodos)
![[Pasted image 20230301221649.png]]
![[Pasted image 20230301221742.png]]

### What Effect provide for us?

![[Pasted image 20230301221921.png]]
![[Pasted image 20230301222034.png]]

- [x] Read
- [x] Create resume
- [x] Put tag `read` and `withResume`

##### Tags
#video, #functionalProgramming, #typescript, #effectTS, #read, #withResume 
