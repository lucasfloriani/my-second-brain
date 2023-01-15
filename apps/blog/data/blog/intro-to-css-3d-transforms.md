---
title: Intro to CSS 3D transforms
date: '2016-03-08'
tags: ['article', 'course', 'frontend', 'animations', 'css', '3D']
draft: false
summary: Implement it
description: Implement it
---


[Intro to CSS 3D transforms](https://3dtransforms.desandro.com/)

## It's all about the scene!

![Fallback text 1](/static/assets/pasted-image-20221128192742.png)


The `.scene` will house the 3D space. The `.card` acts as the 3D object. Two separate `.card__face` elements are used for the faces of the card. I recommend using this same pattern for any 3D transform: scene, object, and faces. Keeping the 3D space element and the object separate element establishes a paradigm that is simple to understand and easier to style.

An element’s `perspective` only applies to direct descendant children, in this case `.card`. In order for subsequent children to inherit a parent’s perspective, and live in the same 3D space, the parent can pass along its perspective with `transform-style: preserve-3d`. Without 3D `transform-style`, the faces of the card would be flattened with its parents, and the back face’s rotation would be nullified.

PS: The order of transform rules matter!

## Text in 3D environments

![Fallback text 2](/static/assets/pasted-image-20221128194326.png)


3D transforms affect text rendering. When you apply a 3D transform, browsers take a snap-shot of the element and then re-render those pixels with 3D transforms applied. As such, fonts don’t have the same anti-aliasing given their transformed size.

For the sake of our users, 3D transforms should not distort the interface. To resolve the distortion and restore pixel perfection to our cube, we can push back the 3D object, so that the front face will be positioned back at the Z origin.

![Fallback text 3](/static/assets/pasted-image-20221128194311.png)



