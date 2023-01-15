# Stronger JavaScript with Opaque Types
[Stronger JavaScript with Opaque Types](https://codemix.com/opaque-types-in-javascript)

### What is Opaque Types?

Is a way to enforce in the types that we are using a correct type that was declared for the context, even though the internal type we are passing can be equal (number for example).

Example of a code that doesnt ensure the correct usage of parameters because of the lack of Opaque Types:

![[Pasted image 20221003203241.png]]

![[Pasted image 20221003203256.png]]

This code is passing the amount first, even tought it expected the accountNumber

To ensure something like this in the Type level, we can use Opaque Types


### How to declare it?

![[Pasted image 20221003203419.png]]

A generic to abstract the logic for us:

![[Pasted image 20221003203506.png]]


#### How it affects the code?

Check this example bellow:

![[Pasted image 20221003203604.png]]

Using the code above in an application:

![[Pasted image 20221003203616.png]]


#### Tasks
- [x] Read
- [x] Create resume
- [x] Put tag `read` and `withResume`

##### Tags
#article, #fullStack , #typescript, #opaqueTypes, #architecture , #read, #withResume 
