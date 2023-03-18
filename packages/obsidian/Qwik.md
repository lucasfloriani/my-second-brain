[Página oficial](https://qwik.builder.io/)

![[Pasted image 20221006183236.png]]

## [Resumable vs Hydration](https://github.com/BuilderIO/qwik/blob/main/packages/docs/src/routes/docs/concepts/resumable/index.mdx)

#### How Hydration works?

When an SSR/SSG application boots up on a client, it requires that the framework on the client restores three pieces of information:

1.  Listeners - locate event listeners and install them on the DOM nodes to make the application interactive.
2.  Component tree - build up an internal data structure representing the application component tree.
3.  Application state - restore the application state.

#### Why Hydration is bad?

1.  The frameworks have to download all of the component code associated with the current page.
2.  The frameworks have to execute the templates associated with the components on the page to rebuild the listener location and the internal component tree.

![[Pasted image 20221005204620.png]]

Qwik is different because it does not require hydration to resume an application on the client. Not requiring hydration is what makes the Qwik application startup instantaneous.

All other frameworks' hydration **replays** all the application logic in the client. Qwik instead pauses execution in the server, and resumes execution in the client.

### Introducing Resumability

Resumability is about pausing execution in the server and resuming execution in the client without having to replay and download all of the application logic.

In order to achieve this, Qwik needs to solve the 3 problems (listeners, component tree, application state) in a way that is compatible with a no-code startup.

#### Listeners

Existing frameworks solve the event listener by downloading the components and executing their templates to collect event listeners that are then attached to the DOM. The current approach has these issues:

1.  Requires the template code to be eagerly downloaded.
2.  Requires template code to be eagerly executed.
3.  Requires the event handler code to be downloaded eagerly (to be attached).

Qwik still needs to collect the listener information, but this step is done as part of the SSR/SSG. The results of SSR/SSG are then serialized into HTML so that the browser does not need to do anything to resume the execution. Notice that the `on:click` attribute contains all of the information to resume the application without doing anything eagerly.

1.  Qwikloader sets up a single global listener instead of many individual listeners per DOM element. This step can be done with no application code present.
2.  The HTML contains a URL to the chunk and symbol name. The attribute tells Qwikloader which code chunk to download and which symbol to retrieve from the chunk.
3.  Finally, to make all of the above possible, Qwik's event processing implementation understands asynchronicity which allows insertion of asynchronous lazy loading.

#### Component Trees

Qwik collects component boundary information as part of the SSR/SSG and then serializes that information into HTML. The result is that Qwik can:

1.  Rebuild the component hierarchy information without the component code actually being present. The component code can remain lazy.
2.  Qwik can do this lazily only for the components which need to be re-rendered rather than all upfront.
3.  Qwik collects relationship information between stores and components. This creates a subscription model that informs Qwik which components need to be re-rendered as a result of state change. The subscription information also gets serialized into HTML.

#### Application State

The mental structures kinda remembers the way graph databases works (because of the observers)

**Limitations of JSON which Qwik solves:**
- Circular reference inside JSON, so called DAG that stands for Directed Acyclic Graph
- Support for different object types like DOM References or Function closures (if wrapped in QRL)

**Limitations of JSON that Qwik does not solve:**
- Serialization of classes (`instanceof` and prototype)
- Serialization of `Promises`, Streams, etc

### Downsides

 Is a trade of from the way we build applications, so we will have some limitations and differences that we should tackle but the framework API will provide for us tools to solve them.

### Other benefits of resumability

The most obvious benefit of using resumability is for server-side-rendering. However, there are secondary benefits:

-   Serializing existing PWA apps so that users don't lose context when they return to the application
-   Improved rendering performance because only changed components need to be re-rendered
-   Fine-grained lazy-loading
-   Decreased memory pressure, especially on mobile devices
-   Progressive interactivity of existing static websites

### My vision from Resumable vs Hydration:

It's an approach that remembers how svelte works under the hood, removing the Virtual DOM but going a step forward to rely more in the DOM API to create its framework.
Hydration is a concern for the frontend, using a different approach is a good improvement.

## [Progressively](https://github.com/BuilderIO/qwik/blob/main/packages/docs/src/routes/docs/concepts/progressive/index.mdx)

Progressively is about downloading code as the application needs, without having to download the entire codebase eagerly.

This connect with Qwik's [core tenant](https://github.com/BuilderIO/qwik/blob/main/packages/docs/src/routes/docs/think-qwik/index.mdx) which focus on delaying **the loading** and execution of JavaScript for as long as possible. Qwik needs to break up the application into many lazy loadable chunks to achieve that.

### Current state-of-the-art

-   Lazy loading boundaries are 100% delegated to the developer
-   Frameworks can only lazy load components that are not in the current render tree.


### Solution

#### Optimizer

Optimizer (described in-depth [here](https://github.com/BuilderIO/qwik/blob/main/packages/docs/src/routes/docs/advanced/optimizer/index.mdx)) is a code transformation that extracts functions into top-level importable symbols, which allows the Qwik runtime to lazy-load the JavaScript on an as-needed basis.

The Optimizer and Qwik runtime work together to achieve the desired result of fine-grained lazy loading.

Without the Optimizer, either:

-   The code would have to be broken up by the developer into importable parts. This would be unnatural to write an application, making for a bad DX.
-   The application would have to load a lot of unnecessary code as there would be no lazy-loaded boundaries.

#### Lazy-loading

Qwik declare components as async, so the structure already supports it from the ground up, different from the others in the market

In Qwik everything is lazy-loadable:

-   Component on-render (initialization block and render block)
-   Component on-watch (side-effects, only downloaded if inputs change)
-   Listeners (only downloaded on interaction)
-   Styles (Only downloaded if the server did not already provide them)

Lazy-loading is a core property of the framework and not an afterthought.

#### Optimizer and `$`

![[Pasted image 20221005215754.png]]

Notice the presence of `$` in the code. `$` is a marker that tells the Optimizer that the function following it should be lazy-loaded. (For a detailed discussion see [$ and Optimizer Rules](https://github.com/BuilderIO/qwik/blob/main/packages/docs/src/routes/docs/advanced/optimizer/index.mdx).) The `$` is a single character that hints to the Optimizer and the developer to let them know that asynchronous lazy-loading occurs here.

### My vision from Progressively:

- The assyncronous core is awesome!
- The structure in combination with the core that downloads the chunks is a good ideia, its abstract and reusable, reducing the amount of code the user needs to download

## [Optimizer](https://github.com/BuilderIO/qwik/blob/main/packages/docs/src/routes/docs/advanced/optimizer/index.mdx)

The Optimizer is code level transformation that runs as part of the rollup. (Optimizer is written in Rust (and available as WASM) for instant performance)

The Optimizer looks for `$` and applies a transformation that extracts the expression following the `$` and turns it into a lazy-loadable and importable symbol.

Let's start by looking at a simple `Counter` example:

![[Pasted image 20221005220846.png]]

The above code represents what a developer would write to describe the component. Below are the transformations that the Optimizer applies to the code to make the code lazy-loadable.

![[Pasted image 20221005220904.png]]

Notice that every occurrence of `$` results in a new lazy loadable symbol.

#### `$` and Optimizer Rules

Optimizer runs as part of the bundling step of building the application. The purpose of the Optimizer is to break up the application into many small lazy-loadable chunks. The Optimizer moves expressions (usually functions) into new files and leaves behind a reference pointing to where the expression was moved.

#### The meaning of `$`

Is used to assing a code that should be in a separated file chunk.

We use `$()` as a marker function for this purpose.

![[Pasted image 20221005221238.png]]

The Optimizer will generate:

![[Pasted image 20221005221255.png]]

Notice:

1.  All that the developer had to do was to wrap the function in the `$()` to signal to the Optimizer that the function should be moved to a new file and therefore lazy-loaded.
2.  The `onScroll` had to be implemented slightly differently as it needs to take into account the fact that the `QRL` of the function needs to be loaded before it can be used. In practice using `qImport` is rare in Qwik application as the Qwik framework provides higher-level APIs that rarely expect the developer to work with `qImport` directly.

However, wrapping code in `$()` is a bit inconvenient. For this reason, Optimizer implicitly wraps the first argument of any function call, which ends with `$`. (Additionally, one can use `implicit$FirstArg()` to automatically perform the wrapping and type matching of the function taking the `QRL`.)

![[Pasted image 20221005221427.png]]

Now the developer has a very easy syntax for expressing that a particular function should be lazy-loaded.

#### Symbol Extraction

Assume that you have this code:

![[Pasted image 20221005221546.png]]

The Optimizer breaks the code up into two files:

![[Pasted image 20221005221611.png]]

The result of Optimizer is that the `MyComp`'s `onMount` method was extracted into a new file. There are a few benefits to doing this:

-   A Parent component can refer to `MyComp` without pulling in `MyComp` implementation details.
-   The application now has more entry points, giving the bundler more ways to chunk up the codebase.


#### Optimizer Rules

Since not all valid JavaScript is valid Optimizer code, keep in mind the following rules:

-   All captured variables must be declared as a `const`.
-   All captured variables must be either:
    -   serializable
    -   importable (either `import` or `export` in this file)

The `$` is not only a marker for the Optimizer but also a marker for the developer to follow these rules.

**Imports RULE**: If a function that is being extracted by Optimizer refers to a top-level symbol, that symbol must either be imported or exported.

![[Pasted image 20221005222244.png]]

The reason for the above rule becomes obvious when the output is examined.

![[Pasted image 20221005222306.png]]

**Closures RULE**: If a function lexically captures a variable (or parameter), that variable must be (1) a `const` and (2) the value must be serializable.

![[Pasted image 20221005222405.png]]

Again looking at the generated code reveals why these rules must be so:

![[Pasted image 20221005222438.png]]

### My vision from Optimizer:

- Optimizer written in Rust is something awesome! We need more WASM!
- Good trade off by using `$` to get lazy load chunk logic automatically
- Good focus in immutability

## [Think Qwik](https://github.com/BuilderIO/qwik/blob/main/packages/docs/src/routes/docs/think-qwik/index.mdx)

A Qwik application only needs about 1KB of JavaScript to become interactive

#### Issue in others SPAs

Too much JavaScript manifests itself in two problems:

1.  **Network bandwidth**: A large amount of code is shipped to the client, which may take a long time on slow networks.
2.  **Startup time**: Once on the client, the code needs to be executed (as part of hydration) to get the site interactive.

To make matters worse, JavaScript is single-threaded; therefore, our complex sites can't take advantage of modern multi-core CPUs.

## [Docs](https://qwik.builder.io/docs)

Awesome CLI

#### Does Qwik generate too many small files?

In dev mode Qwik generates a lot of small files because it uses the Dev [Vite.js](https://vitejs.dev/) server, but in production mode Qwik bundles files in a more efficient way.

#### What is Qwik City?

[Qwik City](https://qwik.builder.io/qwikcity/overview/) is just an extra set of APIs on top of Qwik, think of it like _Qwik_ as the core, and _City_ as the extra APIs (routing, data loading, endpoints...).

Qwik City has Directory-based Routing (equal Next.js)

![[Pasted image 20221006183857.png]]

It uses `<Slot />`  for children


### My vision from Docs:

- Awesome CLI
- Routing based on directory is good (equal Next.js)
- `<Slot />`  for children
- Really different way to make API Calls, didnt like that much but its okay
- Native support for MDX
- Can use SSG or SSR
- Has middlewares for Cloudflare Pages, Netlify Edge, and Node
- O(1) complexity
- Simple documentation, maybe more things can make it better?


#### Tasks
- [x] Read
- [x] Create resume
- [x] Put tag `read` and `withResume`

##### Tags
#article, #architecture, #frontend, #SPA, #resumable, #hydration, #performance, #virtualDom, #serverSideRendering, #read, #withResume 
