---
title: React 18 useEffect Double Call for APIs - Emergency Fix
date: '2023-01-15'
tags: ['article', 'frontend', 'react', 'useEffect', 'concurrentMode', 'read', 'withResume']
draft: false
summary: ...
description: ...
---

# React 18 useEffect Double Call for APIs - Emergency Fix

[React 18 useEffect Double Call for APIs - Emergency Fix](https://javascript.plainenglish.io/react-18-useeffect-double-call-for-apis-emergency-fix-724b7ee6a646)

### Use an Abort Controller
Still makes 2 API calls but at least it aborts the first one

![Fallback text 1](/static/assets/pasted-image-20221008115541.png)

### Use react-query
It will deal with this issue and will bring a good amount of other benefits for your codebase