---
title: CSS text-wrap balance
date: '2024-01-01'
tags: ['article', 'frontend', 'css', 'textWrapBalance', 'read', 'withResume']
draft: false
summary: ...
description: ...
---

# CSS text-wrap balance

[What's new in CSS and UI - IO 2023 Edition](https://developer.chrome.com/blog/whats-new-css-ui-2023/)

[CSS text-wrap: balance](https://developer.chrome.com/blog/css-text-wrap-balance/)

It's a different way to handle texts, it will make the text between the lines have almost the same length, this can help with some designs that needs to have a text with the same width or height in each line, with that we don't need to have a div with a specific size to mimic the behaviour

![[text-wrap-balance.mp4]]

Balancing won't change the inline-size of the element

![Fallback text 1](/static/assets/pasted-image-20231003200049.png)

PS: This only work up to 4 lines of texts, we can use for titles or headlines