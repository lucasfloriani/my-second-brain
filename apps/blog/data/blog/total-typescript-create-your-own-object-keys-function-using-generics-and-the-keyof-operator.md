---
title: TotalTypescript - Create your own 'objectKeys' function using generics and the 'keyof' operator
date: '2016-03-08'
tags: ['video', 'fullStack', 'typescript', 'objectKeys', 'read', 'withResume']
draft: true
summary: Implement it
description: Implement it
---

# TotalTypescript - Create your own 'objectKeys' function using generics and the 'keyof' operator

[TotalTypescript - Create your own 'objectKeys' function using generics and the 'keyof' operator](https://www.totaltypescript.com/tips/create-your-own-objectkeys-function-using-generics-and-the-keyof-operator)

Object.keys has an especific type issue in Typescript where it doesnt say correctly the keys of an object (key as string), which shows an error when trying to access inside of a forEach for example when you reuse the object:

![Fallback text 1](/static/assets/pasted-image-20221011205846.png)