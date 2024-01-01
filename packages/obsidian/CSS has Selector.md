[What's new in CSS and UI - IO 2023 Edition](https://developer.chrome.com/blog/whats-new-css-ui-2023/)

With `:has()`, you can apply styles by checking to see if a parent element contains the presence of specific children, or if those children are in a specific state. This means, we essentially now have a parent selector.

In this example, an item with a "star" element gets a gray background applied to it, and an item with a checked checkbox a blue background.

![[Pasted image 20230930180737.png]]

PS 1: Don't use `:has()` at the top of the DOM tree, it can impact performance
PS 2: Sadly at the moment Firefox doesn't supports it, only when we active a feature flag

- [x] Read
- [x] Create resume
- [x] Put tag `read` and `withResume`

##### Tags
#article, #frontend, #css, #hasSelector, #read, #withResume 
