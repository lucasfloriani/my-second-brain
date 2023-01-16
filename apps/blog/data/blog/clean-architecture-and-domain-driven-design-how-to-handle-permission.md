---
title: Clean architecture and Domain Driven Design - How to handle Permission
date: '2023-01-15'
tags: ['article', 'backend', 'architecture', 'cleanArchitecture', 'DDD', 'domainDrivenDesign', 'authentication', 'read', 'withResume']
draft: false
summary: The controllers would access the current user's credentials and pass that information to the interactors.. Normal web channel will probably have the session cookie with user_id in it....
description: The controllers would access the current user's credentials and pass that information to the interactors.. Normal web channel will probably have the session cookie with user_id in it....
---

# Clean architecture and Domain Driven Design - How to handle Permission

[Authorization and authentication in clean architecture](https://lessthan12ms.com/authorization-and-authentication-in-clean-architecture.html)

![Fallback text 1](/static/assets/pasted-image-20230101191301.png)

## Uncle Bob Thoughts

_"Security is an application specific concern, it belongs to the interactors.  The controllers would access the current user's credentials and pass that information to the interactors.  The interactors would use an authorization service to ensure that their particular interaction was authorized.  The business objects wouldn't know anything about it"_

PS 1: [Link with conversation](https://groups.google.com/g/clean-code-discussion/c/wHzmboOEHzo)
PS 2: [Interactors are the Use Case layer of the Clean Architecture](https://stackoverflow.com/questions/36098006/confusing-term-interactors-in-clean-architecture#:~:text=In%20the%20clean%20architecture%20approach,achieve%20the%20Use%20Case%20intention.)

## [Authorization and authentication in clean architecture](https://lessthan12ms.com/authorization-and-authentication-in-clean-architecture.html)

Ways of having authentication data retrieved:

-   Normal web channel will probably have the session cookie with `user_id` in it.
-   API web channel will probably have a header with access_token. And we can parse it and detect the author of the request.
-   Console input is trickier. Probably we will have to explicitly set the author of the request when running a command: `command --author_id=<ID>`.
-   Queued command (job) will also have some `user_id` data in it, which will set the caller id.

Most likely you will patch the data of the user authentication in a DTO to pass to the Use Case layer to decide if can continue or not.