---
title: Motion.js
date: '2023-03-18'
tags: ['library', 'frontend', 'motion', 'library', 'animations']
draft: true
summary: timeline is used to create complex sequences of animations across multiple elements.. flubber library is responsible for mashing the d attribute of the SVG path tag, they will create the adjustments b...
description: timeline is used to create complex sequences of animations across multiple elements.. flubber library is responsible for mashing the d attribute of the SVG path tag, they will create the adjustments b...
---

# Motion.js

[Motion.js](https://motion.dev)

### Info

![Fallback text 1](/static/assets/pasted-image-20230311144820.png)

![Fallback text 2](/static/assets/pasted-image-20230311144901.png)

![Fallback text 3](/static/assets/pasted-image-20230311144921.png)

![Fallback text 4](/static/assets/pasted-image-20230311145031.png)

![Fallback text 5](/static/assets/pasted-image-20230311145052.png)

### What can be done

![Fallback text 6](/static/assets/pasted-image-20230311145522.png)

![Fallback text 7](/static/assets/pasted-image-20230311145536.png)

![Fallback text 8](/static/assets/pasted-image-20230311145602.png)

### Debug

![Fallback text 9](/static/assets/pasted-image-20230311145653.png)

### Examples

##### SVG loading spinner

![Fallback text 10](/static/assets/pasted-image-20230317191126.png)

![Fallback text 11](/static/assets/pasted-image-20230317191155.png)

![Fallback text 12](/static/assets/pasted-image-20230317191405.png)

##### SVG path drawing timeline

![Fallback text 13](/static/assets/pasted-image-20230317191500.png)

![Fallback text 14](/static/assets/pasted-image-20230317191627.png)

![Fallback text 15](/static/assets/pasted-image-20230317192010.png)

`timeline` is used to create complex sequences of animations across multiple elements.
`at` is timer option, you can make a step in the animation start earlier like in the example.
`draw` from what I understand is a specific option only applied to SVG tags.

##### Scroll-triggered animation

![Fallback text 16](/static/assets/pasted-image-20230317192500.png)

![Fallback text 17](/static/assets/pasted-image-20230317192450.png)

![Fallback text 18](/static/assets/pasted-image-20230317192617.png)

PS: `inView` is powerful!

##### Animating HTML text

![Fallback text 19](/static/assets/pasted-image-20230317192801.png)

![Fallback text 20](/static/assets/pasted-image-20230317192813.png)

![Fallback text 21](/static/assets/pasted-image-20230317192857.png)

`animate` can receive a function in the first parameter, it will return the progress of the animation we setup (number), with that we can do the changes we want.

##### Morph SVG path

![Fallback text 22](/static/assets/pasted-image-20230317193214.png)

![Fallback text 23](/static/assets/pasted-image-20230317193235.png)

![Fallback text 24](/static/assets/pasted-image-20230317193252.png)

![Fallback text 25](/static/assets/pasted-image-20230317193702.png)

`flubber` library is responsible for mashing the d attribute of the SVG path tag, they will create the adjustments based on the progress we pass into it. The animation with motion is the same as others, the only difference is the usage of `flubber` as a helper library to animate.

This library is used to smoothly interpolate between 2D shapes, it will guess what is the best method to transition between them. Only used for this

##### P5

Example with canvas!

![Fallback text 26](/static/assets/pasted-image-20230317194428.png)

![Fallback text 27](/static/assets/pasted-image-20230317202702.png)

![Fallback text 28](/static/assets/pasted-image-20230317202721.png)

`P5` is a library used to handle with canvas.
`p5.setup` is the function that will be executed first.
`startAnimation` will be the function executed everytime we click on the canvas, it's responsability is to calculate based on X and Y clicked the intermediate values that will be drawn by `p5.draw`.
`x,y` let variables are used inside `p5.draw` to draw to the position clicked.
`p5.draw` is always drawing at 60 FPS.
`performance` is a variable available from `P5`, its related to the frames of the canvas.
`@motionone` is used to create the hue value used in the circle color.

##### Page progress bar

![Fallback text 29](/static/assets/pasted-image-20230317204004.png)

![Fallback text 30](/static/assets/pasted-image-20230317204022.png)

![Fallback text 31](/static/assets/pasted-image-20230317204035.png)

##### Element-based progress bar

![Fallback text 32](/static/assets/pasted-image-20230317205612.png)

![Fallback text 33](/static/assets/pasted-image-20230317205646.png)

![Fallback text 34](/static/assets/pasted-image-20230317205807.png)

##### Parallax and scroll-snapping

This animation is only related to the **H2** tag, the scroll animation was done by **scroll-snap**, this is a new css property that provide a way to animate the scroll a bit.

![Fallback text 35](/static/assets/pasted-image-20230317214231.png)

![Fallback text 36](/static/assets/pasted-image-20230317214301.png)

![Fallback text 37](/static/assets/pasted-image-20230317214325.png)

`header` has a `100vh` height, so it will take account the whole screen for the scroll animation.

##### Fade on enter/exit

![Fallback text 38](/static/assets/pasted-image-20230317214620.png)

![Fallback text 39](/static/assets/pasted-image-20230317214650.png)

![Fallback text 40](/static/assets/pasted-image-20230317214907.png)

PS: Maybe the offset is a custom one that take account of the start and end of the image in the scroll by using **start** and **end**

##### Video scrubbing

Video is playing by how much we scroll the page

![Fallback text 41](/static/assets/pasted-image-20230317215320.png)

![Fallback text 42](/static/assets/pasted-image-20230317215355.png)

![Fallback text 43](/static/assets/pasted-image-20230317215410.png)

`target` will make the scroll count only when the scroll has pass the start of the `article` tag.

##### 3D camera

Rotate the Porsche using the progress of the scroll

![Fallback text 44](/static/assets/pasted-image-20230317220050.png)

![Fallback text 45](/static/assets/pasted-image-20230317223818.png)

![Fallback text 46](/static/assets/pasted-image-20230317223839.png)

![Fallback text 47](/static/assets/pasted-image-20230317223906.png)

![Fallback text 48](/static/assets/pasted-image-20230317223930.png)

##### Custom easing function

![Fallback text 49](/static/assets/pasted-image-20230317233304.png)

![Fallback text 50](/static/assets/pasted-image-20230317233327.png)

![Fallback text 51](/static/assets/pasted-image-20230317233341.png)

## Comparison with other libraries

Compared with Anime.js and Greensock, Motion uses Web Animations API (WAAPI).

##### Benefits

-   Far smaller bundlesize
-   Hardware accelerated animations
-   Excellent value interpolation

##### Limitations

The main limitation of WAAPI is it can only animate CSS styles. So to animate HTML text, JavaScript values or SVG attributes like `d` we need to write custom animations:

![Fallback text 52](/static/assets/pasted-image-20230318135832.png)

### Comparison table

![Fallback text 53](/static/assets/pasted-image-20230318135919.png)

![Fallback text 54](/static/assets/pasted-image-20230318135930.png)

![Fallback text 55](/static/assets/pasted-image-20230318135943.png)

![Fallback text 56](/static/assets/pasted-image-20230318135954.png)

![Fallback text 57](/static/assets/pasted-image-20230318140007.png)

![Fallback text 58](/static/assets/pasted-image-20230318140024.png)

![Fallback text 59](/static/assets/pasted-image-20230318140036.png)

![Fallback text 60](/static/assets/pasted-image-20230318140049.png)

![Fallback text 61](/static/assets/pasted-image-20230318140103.png)

![Fallback text 62](/static/assets/pasted-image-20230318140114.png)

![Fallback text 63](/static/assets/pasted-image-20230318140127.png)

![Fallback text 64](/static/assets/pasted-image-20230318140140.png)

![Fallback text 65](/static/assets/pasted-image-20230318140149.png)