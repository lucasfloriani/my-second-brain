---
title: Flavoring - Flexible Nominal Typing for TypeScript
date: '2016-03-08'
tags: ['article', 'fullStack', 'typescript', 'opaqueTypes', 'flavorTypes', 'brandingTypes', 'architecture', 'read', 'withResume']
draft: true
summary: Implement it
description: Implement it
---

# Flavoring - Flexible Nominal Typing for TypeScript

[Flavoring - Flexible Nominal Typing for TypeScript](https://spin.atomicobject.com/2018/01/15/typescript-flexible-nominal-typing)

**Branding** is the usual approach of Opaque Types where we add an extra property like type to make numbers different from each other (PersonId !== ProductId)

The issue comes when we have a Product type and we need to assing a type generated from GraphQL for example, it wont match the id because codegen doesnt understand Opaque Types/Branding.

PS: Branding is the act of adding a name to something

### How to solve this issue?

Using the approach called **Flavor**! Its a technic to allow unbranded values to be implicity converted into the branded type, but doesnt allow implicit conversion between branded types.

![Fallback text 1](/static/assets/pasted-image-20221004195102.png)

![Fallback text 2](/static/assets/pasted-image-20221004195229.png)

### When we should choose Branding?

- When we want to write a code that can safely assume some upstream validation has occurred–e.g. a `DateStr` which must be in a valid ISO8601 format.
- A type error admitted by implicit conversion could lead to a dangerous error