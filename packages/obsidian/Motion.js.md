[Motion.js](https://motion.dev)

### Info

![[Pasted image 20230311144820.png]]
![[Pasted image 20230311144901.png]]
![[Pasted image 20230311144921.png]]
![[Pasted image 20230311145031.png]]
![[Pasted image 20230311145052.png]]

### What can be done

![[Pasted image 20230311145522.png]]
![[Pasted image 20230311145536.png]]
![[Pasted image 20230311145602.png]]

### Debug

![[Pasted image 20230311145653.png]]

### Examples

##### SVG loading spinner

![[Pasted image 20230317191126.png]]
![[Pasted image 20230317191155.png]]
![[Pasted image 20230317191405.png]]

##### SVG path drawing timeline

![[Pasted image 20230317191500.png]]
![[Pasted image 20230317191627.png]]
![[Pasted image 20230317192010.png]]

`timeline` is used to create complex sequences of animations across multiple elements.
`at` is timer option, you can make a step in the animation start earlier like in the example.
`draw` from what I understand is a specific option only applied to SVG tags.

##### Scroll-triggered animation

![[Pasted image 20230317192500.png]]
![[Pasted image 20230317192450.png]]
![[Pasted image 20230317192617.png]]

PS: `inView` is powerful!

##### Animating HTML text

![[Pasted image 20230317192801.png]]
![[Pasted image 20230317192813.png]]
![[Pasted image 20230317192857.png]]

`animate` can receive a function in the first parameter, it will return the progress of the animation we setup (number), with that we can do the changes we want.

##### Morph SVG path

![[Pasted image 20230317193214.png]]
![[Pasted image 20230317193235.png]]
![[Pasted image 20230317193252.png]]
![[Pasted image 20230317193702.png]]

`flubber` library is responsible for mashing the d attribute of the SVG path tag, they will create the adjustments based on the progress we pass into it. The animation with motion is the same as others, the only difference is the usage of `flubber` as a helper library to animate.

This library is used to smoothly interpolate between 2D shapes, it will guess what is the best method to transition between them. Only used for this

##### P5

Example with canvas!

![[Pasted image 20230317194428.png]]
![[Pasted image 20230317202702.png]]
![[Pasted image 20230317202721.png]]

`P5` is a library used to handle with canvas.
`p5.setup` is the function that will be executed first.
`startAnimation` will be the function executed everytime we click on the canvas, it's responsability is to calculate based on X and Y clicked the intermediate values that will be drawn by `p5.draw`.
`x,y` let variables are used inside `p5.draw` to draw to the position clicked.
`p5.draw` is always drawing at 60 FPS.
`performance` is a variable available from `P5`, its related to the frames of the canvas.
`@motionone` is used to create the hue value used in the circle color.

##### Page progress bar

![[Pasted image 20230317204004.png]]
![[Pasted image 20230317204022.png]]
![[Pasted image 20230317204035.png]]

##### Element-based progress bar

![[Pasted image 20230317205612.png]]
![[Pasted image 20230317205646.png]]
![[Pasted image 20230317205807.png]]

##### Parallax and scroll-snapping

This animation is only related to the **H2** tag, the scroll animation was done by **scroll-snap**, this is a new css property that provide a way to animate the scroll a bit.

![[Pasted image 20230317214231.png]]
![[Pasted image 20230317214301.png]]
![[Pasted image 20230317214325.png]]

`header` has a `100vh` height, so it will take account the whole screen for the scroll animation.

##### Fade on enter/exit

![[Pasted image 20230317214620.png]]
![[Pasted image 20230317214650.png]]
![[Pasted image 20230317214907.png]]

PS: Maybe the offset is a custom one that take account of the start and end of the image in the scroll by using **start** and **end**

##### Video scrubbing

Video is playing by how much we scroll the page

![[Pasted image 20230317215320.png]]
![[Pasted image 20230317215355.png]]
![[Pasted image 20230317215410.png]]

`target` will make the scroll count only when the scroll has pass the start of the `article` tag.

##### 3D camera

Rotate the Porsche using the progress of the scroll

![[Pasted image 20230317220050.png]]
![[Pasted image 20230317223818.png]]
![[Pasted image 20230317223839.png]]
![[Pasted image 20230317223906.png]]
![[Pasted image 20230317223930.png]]

##### Custom easing function

![[Pasted image 20230317233304.png]]
![[Pasted image 20230317233327.png]]
![[Pasted image 20230317233341.png]]

## Comparison with other libraries

Compared with Anime.js and Greensock, Motion uses Web Animations API (WAAPI).

##### Benefits

-   Far smaller bundlesize
-   Hardware accelerated animations
-   Excellent value interpolation

##### Limitations

The main limitation of WAAPI is it can only animate CSS styles. So to animate HTML text, JavaScript values or SVG attributes like `d` we need to write custom animations:

![[Pasted image 20230318135832.png]]

### Comparison table

![[Pasted image 20230318135919.png]]
![[Pasted image 20230318135930.png]]
![[Pasted image 20230318135943.png]]
![[Pasted image 20230318135954.png]]
![[Pasted image 20230318140007.png]]
![[Pasted image 20230318140024.png]]
![[Pasted image 20230318140036.png]]
![[Pasted image 20230318140049.png]]
![[Pasted image 20230318140103.png]]
![[Pasted image 20230318140114.png]]
![[Pasted image 20230318140127.png]]
![[Pasted image 20230318140140.png]]
![[Pasted image 20230318140149.png]]

#### Tasks
- [X] Read
- [X] Create resume
- [X] Put tag `read` and `withResume`

##### Tags
#library, #frontend, #motion, #library, #animations
