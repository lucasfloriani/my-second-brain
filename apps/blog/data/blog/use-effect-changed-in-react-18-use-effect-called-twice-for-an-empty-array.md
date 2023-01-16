---
title: useEffect changed in React 18 - useEffect called twice for an empty array
date: '2023-01-15'
tags: ['video', 'frontend', 'react', 'useEffect', 'concurrentMode', 'read', 'withResume']
draft: false
summary: ...
description: ...
---

# useEffect changed in React 18 - useEffect called twice for an empty array

[useEffect changed in React 18 - useEffect called twice for an empty array](https://www.youtube.com/watch?v=J3Mcbne1Iq4&ab_channel=BasaratCodes)

In the version 18 of React the strict mode in development will change the steps a component is rendered:

PS: Its a preparation for the concurrentMode

![Fallback text 1](/static/assets/pasted-image-20221008114549.png)

Its a way to force the developers to apply the unmount function inside the useEffect, preventing memory leaks inside our apps.