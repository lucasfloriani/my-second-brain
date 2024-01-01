[What's new in CSS and UI - IO 2023 Edition](https://developer.chrome.com/blog/whats-new-css-ui-2023/)

`vh` units doesn't work the way we intended with selecting the whole viewport, it sometimes selects more height than we want because of browser UI in mobile:

![[Pasted image 20231003201423.png]]

To resolve this issue, we now have new unit values on the web platform, including:

- Small viewport height and width (or `svh` and `svw`), which represent the smallest active viewport size.
- Large viewport height and width (`lvh` and `lvw`), which represent the largest size.
- Dynamic viewport height and width (`dvh` and `dvw`).

Dynamic viewport units change in value when the additional dynamic browser toolbars, such as the address at the top or tab bar at the bottom, are visible and when they are not.

![[Pasted image 20231003201605.png]]

Note that the dynamic viewport units do not take the presence of the Virtual Keyboard into account. From Chrome 108 you can [set a meta-tag to change this behavior](https://developer.chrome.com/blog/viewport-resize-behavior/#opting-in-to-a-different-behavior).

PS: Has good support from browsers

- [x] Read
- [x] Create resume
- [x] Put tag `read` and `withResume`

##### Tags
#article, #frontend, #css, #cssUnits, #dynamicViewportUnits, #read, #withResume 