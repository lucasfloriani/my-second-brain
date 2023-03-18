[Pratical CSS Scroll Snapping](https://css-tricks.com/practical-css-scroll-snapping)

CSS scroll snapping allows you to lock the viewport to certain elements or locations after a user has finished scrolling.
It was introduced in 2016.

## Browser support at the moment

![[Pasted image 20230318151103.png]]

## How to use

Scroll snapping is used by setting the [`scroll-snap-type`](https://www.w3.org/TR/css-scroll-snap-1/#scroll-snap-type) property on a container element and the [`scroll-snap-align`](https://www.w3.org/TR/css-scroll-snap-1/#scroll-snap-align) property on elements inside it. When the container element is scrolled, it will snap to the child elements you’ve defined

![[Pasted image 20230318151609.png]]

Scroll snap will have the same pattern as `flex` or `grid` where we have some specific properties for the parent and some for the children. The parent becomes a snap container.

### Parent properties

##### scroll-snap-type

- **mandatory**: The browser *has* to snap to a snap point whenever the user stops scrolling, if you scroll 50%+ of the element it will snap to the next/previous
- **proximity**:  The browser *may* snap to a snap point if it seems appropriate (needs to be really close to the next snap to move).

PS 1: **mandatory** make the user experience more consistent, but it can be dangerous when you have content with more height/width where it can skip the content.
![[Pasted image 20230318161706.png]]

PS 2: `scroll-snap-type` doesn't work on body, also in Safari it was mentioned that doesn't work on html too.

##### scroll-padding

By default, content will snap to the very edges of the container. You can change that by setting the `scroll-padding` property on the container. It follows the same syntax as the regular `padding` property.

This can be useful if your layout has elements that could get in the way of the content, like a fixed header.

### Children properties

##### scroll-snap-align

Lets you specify which part of the element is supposed to snap to the container. It has three possible values: `start`, `center`, and `end`.

![[Pasted image 20230318161939.png]]

These are relative to the scroll direction. If you’re scrolling vertically, `start` refers to the top edge of the element. If you’re scrolling horizontally, it refers to the left edge. `center` and `end` follow the same principle. You can set a different value for each scroll direction separated by a space.

##### scroll-snap-stop

By default, scroll snapping only kicks in when the user stops scrolling, meaning they can skip over several snap points before coming to a stop.

You can change this by setting `scroll-snap-stop: always` on any child element. This forces the scroll container to stop on that element before the user can continue to scroll.

At the time of this writing, no browser supports `scroll-snap-stop` natively, though there is a [tracking bug](https://bugs.chromium.org/p/chromium/issues/detail?id=823998) for Chrome.

#### Tasks
- [x] Read
- [x] Create resume
- [x] Put tag `read` and `withResume`

##### Tags
#article, #frontend, #animations, #css, #scrollSnap
