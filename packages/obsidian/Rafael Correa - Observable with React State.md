[Rafael Correa - Observable with React State](https://twitter.com/darklight9811/status/1583511244266344448)

Let's analyse the code by it's structure, it will be easier  by separating those functions

## Store.ts - Abstraction of observer logic

The main purpose of this file is to abstract all the boilerplate to create a observable callback function.

It will provide for us a config that you can filter what keys you can permit or not (`only` and `except`), another thing is the cache using localStorage.

And to finallize this file, it will provide a way to change the `only` and `except` array of possible property keys by recriating all the structure again (`Immutability`)

![[Pasted image 20221027204335.png]]
![[Pasted image 20221027204351.png]]
![[Pasted image 20221027204409.png]]

## Observer.ts - Gerenciate state and observers

It's our main file, it contains the internal state for react hooks and observers, it will gerenciate which observer will be triggered or not.

The most important part of this code is the useHook function, it will apply useState and useEffect that will be using the other abstract functions to update their state based on the observers

The observe function will have 2 invocation phases, the first one will be to pass the internal state it will have and the observers we want to start with. 

![[Pasted image 20221027205218.png]]

The second one will be to pass custom methods created by passing a callback function, which will have access to some methods that change state and observers.

![[Pasted image 20221027205236.png]]

With those steps done we will have our store ready to be used!

![[Pasted image 20221027205306.png]]

#### Code from Observer.ts

![[Pasted image 20221027205400.png]]
![[Pasted image 20221027205414.png]]
![[Pasted image 20221027205429.png]]
![[Pasted image 20221027205447.png]]
![[Pasted image 20221027205502.png]]
![[Pasted image 20221027205524.png]]
![[Pasted image 20221027205536.png]]
![[Pasted image 20221027205550.png]]
![[Pasted image 20221027205607.png]]
![[Pasted image 20221027205621.png]]

## Conclusion

- Interesting idea of selecting which data will trigger a state change in the internal useState hook, maybe we won't use it because react can join multiple changes of state together not rerender
- Good abstract function for creating observer callback
- Maybe we could have a logic that we can apply both states, methods, and observers together and not like a currying style
- It's similar to the logic from react-tracked that breaks the state into pieces and contexts to prevent rerenders
- It's performant?


#### Tasks
- [x] Read
- [x] Create resume
- [x] Put tag `read` and `withResume`

##### Tags
#article, #architecture, #react, #observable, #customHooks, #functionalProgramming, #immutability, #read, #withResume
