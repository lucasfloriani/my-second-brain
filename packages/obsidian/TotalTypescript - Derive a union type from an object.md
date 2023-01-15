# TotalTypescript - Derive a union type from an object
[TotalTypescript - Derive a union type from an object](https://www.totaltypescript.com/tips/derive-a-union-type-from-an-object)

The logic is to use the declared object (`fruitCounts`) to create an union type so we can use the declared object as the source of truth.

If we did a simple mapped types, it will generate a type that needs all the properties of the object, so to achieve the union type we will need to make a "hack"

We will make each property has their own property again, with that we can select all those keys with an union an generate the union from the object that is the source of truth


![[Pasted image 20221010213127.png]]

- [x] Read
- [x] Create resume
- [x] Put tag `read` and `withResume`

##### Tags
#video, #fullStack , #typescript, #unionType, #typeof, #mappedTypes, #read,, #withResume 
