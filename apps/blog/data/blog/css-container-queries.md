---
title: CSS Container Queries
date: '2024-01-01'
tags: ['article', 'frontend', 'css', 'containerQueries', 'tailwind', 'read', 'withResume']
draft: false
summary: Only one 'not' condition is allowed per container query and cannot be used with the and or or keywords.. It is possible to nest container queries which has the same effect.. The following container qu...
description: Only one 'not' condition is allowed per container query and cannot be used with the and or or keywords.. It is possible to nest container queries which has the same effect.. The following container qu...
---

# CSS Container Queries

[What's new in CSS and UI - IO 2023 Edition](https://developer.chrome.com/blog/whats-new-css-ui-2023/)

[MDN Web Docs - @container](https://developer.mozilla.org/en-US/docs/Web/CSS/@container)

[Responsive CSS Will Never Be The Same](https://www.youtube.com/watch?v=rrLAg7xNERA)

[CSS container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries)

[@container and :has(): two powerful new responsive APIs landing in Chromium 105](https://developer.chrome.com/blog/has-with-cq-m105/)

[A guide to CSS container queries](https://blog.logrocket.com/css-container-queries-guide/)

[Basic concepts of logical properties and values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values)

[Using CSS Container Queries with Tailwind CSS](https://www.youtube.com/watch?v=NoP9oY7kdy8)

## Defining Container Queries Styles

Add the possibility of media queries for expecific portions of the UI, we don't need to rely only in the viewport size anymore.

![Fallback text 1](/static/assets/pasted-image-20230929193203.png)

Logical keywords can be used to define the container condition:

- `and` combines two or more conditions.
- `or` combines two or more conditions.
- `not` negates the condition. Only one 'not' condition is allowed per container query and cannot be used with the `and` or `or` keywords.

![Fallback text 2](/static/assets/pasted-image-20230929193256.png)

## Naming Containers

A containment context can be named using the [`container-name`](https://developer.mozilla.org/en-US/docs/Web/CSS/container-name) property.

![Fallback text 3](/static/assets/pasted-image-20230929193340.png)

The shorthand syntax for this is to use [`container`](https://developer.mozilla.org/en-US/docs/Web/CSS/container) in the form `container: <name> / <type>`, for example:

![Fallback text 4](/static/assets/pasted-image-20230929193405.png)

In container queries, the [`container-name`](https://developer.mozilla.org/en-US/docs/Web/CSS/container-name) property is used to filter the set of containers to those with a matching query container name:

![Fallback text 5](/static/assets/pasted-image-20230929193449.png)

## Nested Container Queries

It's not possible to target multiple containers in a single container query. It is possible to nest container queries which has the same effect.

The following query evaluates to true and applies the declared style if the container named `summary` is wider than `400px` and has an ancestor container wider than `800px`:

![Fallback text 6](/static/assets/pasted-image-20230929195425.png)

## Experimental Container Queries with style selector

Also at the moment we have the experimental version of using style checks in the rules of @container. The following container query checks if the [`computed_value`](https://developer.mozilla.org/en-US/docs/Web/CSS/computed_value) of the container element's `--accent-color` is `blue`:

![Fallback text 7](/static/assets/pasted-image-20230929200018.png)

_**Note:** If a custom property has a value of `blue`, the equivalent hexidecimal code `#0000ff` will not match unless the property has been defined as a color with [`@property`](https://developer.mozilla.org/en-US/docs/Web/CSS/@property) so the browser can properly compare computed values._

## Container units

- `cqw`: 1% of a query container's width
- `cqh`: 1% of a query container's height
- `cqi`: 1% of a query container's inline size
- `cqb`: 1% of a query container's block size
- `cqmin`: The smaller value of either `cqi` or `cqb`
- `cqmax`: The larger value of either `cqi` or `cqb`

## Differences between inline and block logical properties

The old way of handling CSS was by how boxes works, but sadly they don't fit good in examples where the text is vertical, to fullfill that gap the inline and block logical properties was created.

Both flex and grid are using those concepts to handle styling of elements in the DOM.

![Fallback text 8](/static/assets/pasted-image-20230930134702.png)

When we exchange for vertical align in CSS:

![Fallback text 9](/static/assets/pasted-image-20230930134720.png)

inline-size basically is the axios-x (horizontal), when we exchange the vertical writing mode it will take care of vertical elements, for block is going to be the oposite (axios-y/vertical).

`container-type: inline-size` only will make the axios-x available for use in the container declaration, `container-type: size` will make both axios-x and axios-y available.

## How Tailwind Deals With Container Queries?

You need to apply `@container` in the element that will heald the `container-type` and to apply the styling you will use the prefix sizes with the prefix `@`, for example `@md:grid-cols-2`