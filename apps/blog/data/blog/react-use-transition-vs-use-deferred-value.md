---
title: React - useTransition() vs useDeferredValue()
date: '2016-03-08'
tags: ['video', 'frontend', 'react', 'concurrentMode', 'useDeferredValue', 'useTransition', 'read', 'withResume']
draft: true
summary: Implement it
description: Implement it
---
# React - useTransition() vs useDeferredValue()


[React - useTransition() vs useDeferredValue()](https://academind.com/tutorials/react-usetransition-vs-usedeferredvalue)

### When Should You Use Which?

The difference is that `useTransition()` wraps the state updating code, whilst `useDeferredValue()` wraps a value that's affected by the state update. You don't need to (and shouldn't) use both together, since they achieve the same goal in the end.

Instead, it makes sense to prefer `useTransition()`, if you have some state update that should be treated with a lower priority and you have access to the state updating code. If you don't have that access, use `useDeferredValue()`.

