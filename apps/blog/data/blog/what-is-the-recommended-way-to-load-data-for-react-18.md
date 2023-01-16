---
title: What is the recommended way to load data for React 18
date: '2023-01-15'
tags: ['article', 'architecture', 'frontend', 'react', 'dataFetching', 'react18', 'fetch', 'read', 'withResume']
draft: false
summary: In Facebook they use Relay, but not always you will have a GraphQL API to implement it...
description: In Facebook they use Relay, but not always you will have a GraphQL API to implement it...
---

# What is the recommended way to load data for React 18

[What is the recommended way to load data for React 18?](https://www.reddit.com/r/reactjs/comments/vi6q6f/what_is_the_recommended_way_to_load_data_for)

## Why is bad to make API calls inside useEffect

- **Race conditions** if you don't use abort control
- **No instant back button**, it needs to refetch every data again instead of loading the previous page instantly like a normal HTML page
- **No content in initial HTML**, too much request data in the frontend (No exclusive to useEffect calls)
- **Slow navigations between screens** because of the amount of requests

## What are the good solutions

It's a old issue that all SPA libraries have when its only client-side.
Next.js and Remix solve this really well, for client-side React Query, useSWR and others are solving this in a good way too.
In Facebook they use Relay, but not always you will have a GraphQL API to implement it

## Why do they make useEffect run twice in the development env

To catch those issues and because sometimes we can't use Relay to solve them in the client-side, so they applied this change so we can check them before they appear in production.

## Conclusion

We don't have a definitive answer to those issues, you can use those solutions mentioned before for now.