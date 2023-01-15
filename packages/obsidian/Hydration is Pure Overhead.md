# Hydration is Pure Overhead
[Hydration is Pure Overhead](https://www.builder.io/blog/hydration-is-pure-overhead)

Hydration is a solution to add interactivity to server-rendered HTML.

### Digging deeper into hydration

The hard part of hydration is knowing `WHAT` event handlers we need and `WHERE` they need to be attached.

-   `WHAT`: The event handler is a closure that contains the behavior of the event handler. It is what should happen if a user triggers this event.
-   `WHERE`: The location of the DOM element where the `WHAT` needs to be attached to (includes the event type.)

The added complication is that `WHAT` is a closure that closes over `APP_STATE` and `FRAMEWORK_STATE`:

-   `APP_STATE`: the state of the application. `APP_STATE` is what most people think of as the state. Without `APP_STATE`, your application has nothing dynamic to show to the user.
-   `FRAMEWORK_STATE`: the internal state of the framework. Without `FRAMEWORK_STATE`, the framework does not know which DOM nodes to update or when the framework should update them. Examples are component-tree, and references to render functions.

So how do we recover `WHAT` (`APP_STATE` + `FRAMEWORK_STATE`) and `WHERE`? By downloading and executing the components currently in the HTML. The download and execution of rendered components in HTML is the expensive part.

In other words, hydration is a hack to recover the `APP_STATE` and `FRAMEWORK_STATE` by eagerly executing the app code in the browser and involves:

1.  downloading component code
2.  executing component code
3.  recovering the `WHAT`(`APP_STATE` and `FRAMEWORK_STATE`) and `WHERE` to get event handler closure
4.  attaching `WHAT` (the event handler closure) to `WHERE` (a DOM element)

### Resumability

![[Pasted image 20221007171948.png]]



#### Tasks
- [x] Read
- [x] Create resume
- [x] Put tag `read` and `withResume`

##### Tags
#article, #architecture, #frontend, #hydration, #SPA, #performance, #virtualDom, #read, #withResume
