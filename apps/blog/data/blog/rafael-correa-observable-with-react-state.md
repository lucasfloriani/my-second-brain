---
title: Rafael Correa - Observable with React State
date: '2016-03-08'
tags: ['article', 'architecture', 'react', 'observable', 'customHooks', 'functionalProgramming', 'immutability', 'read', 'withResume']
draft: true
summary: Implement it
description: Implement it
---

# Rafael Correa - Observable with React State

[Rafael Correa - Observable with React State](https://twitter.com/darklight9811/status/1583511244266344448)


Let's analyse the code by it's structure, it will be easier  by separating those functions

## Store.ts - Abstraction of observer logic

The main purpose of this file is to abstract all the boilerplate to create a observable callback function.

It will provide for us a config that you can filter what keys you can permit or not (`only` and `except`), another thing is the cache using localStorage.

And to finallize this file, it will provide a way to change the `only` and `except` array of possible property keys by recriating all the structure again (`Immutability`)

![Fallback text 1](/static/assets/pasted-image-20221027204335.png)

![Fallback text 2](/static/assets/pasted-image-20221027204351.png)

![Fallback text 3](/static/assets/pasted-image-20221027204409.png)


## Observer.ts - Gerenciate state and observers

It's our main file, it contains the internal state for react hooks and observers, it will gerenciate which observer will be triggered or not.

The most important part of this code is the useHook function, it will apply useState and useEffect that will be using the other abstract functions to update their state based on the observers

The observe function will have 2 invocation phases, the first one will be to pass the internal state it will have and the observers we want to start with. 

![Fallback text 4](/static/assets/pasted-image-20221027205218.png)


The second one will be to pass custom methods created by passing a callback function, which will have access to some methods that change state and observers.

![Fallback text 5](/static/assets/pasted-image-20221027205236.png)


With those steps done we will have our store ready to be used!

![Fallback text 6](/static/assets/pasted-image-20221027205306.png)


#### Code from Observer.ts

![Fallback text 7](/static/assets/pasted-image-20221027205400.png)

![Fallback text 8](/static/assets/pasted-image-20221027205414.png)

![Fallback text 9](/static/assets/pasted-image-20221027205429.png)

![Fallback text 10](/static/assets/pasted-image-20221027205447.png)

![Fallback text 11](/static/assets/pasted-image-20221027205502.png)

![Fallback text 12](/static/assets/pasted-image-20221027205524.png)

![Fallback text 13](/static/assets/pasted-image-20221027205536.png)

![Fallback text 14](/static/assets/pasted-image-20221027205550.png)

![Fallback text 15](/static/assets/pasted-image-20221027205607.png)

![Fallback text 16](/static/assets/pasted-image-20221027205621.png)


## Conclusion

- Interesting idea of selecting which data will trigger a state change in the internal useState hook, maybe we won't use it because react can join multiple changes of state together not rerender
- Good abstract function for creating observer callback
- Maybe we could have a logic that we can apply both states, methods, and observers together and not like a currying style
- It's similar to the logic from react-tracked that breaks the state into pieces and contexts to prevent rerenders
- It's performant?


