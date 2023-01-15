---
title: FrontendMasters - Advanced GraphQL v2
date: '2016-03-08'
tags: ['video', 'course', 'fullStack', 'architecture', 'graphQL', 'subscriptions', 'liveQueries', 'authentication', 'cache', 'directives', 'customDirectives']
draft: false
summary: Implement it
description: Implement it
---


[Advanced GraphQL v2](https://frontendmasters.com/courses/advanced-graphql-v2)
[Repo of the course](https://github.com/FrontendMasters/advanced-gql-v2)

## Authentication

The best place said in the couse to check if the user is authenticated by decrypting the JWT is inside of context (Apollo).

You can create helper functions that use currying to check the context if the user is logged in or have the correct role.
PS: Works awesome with AWS Cognito because it can have different roles


## Subscriptions vs Live Queries

![Fallback text 1](/static/assets/pasted-image-20221121202145.png)


## Errors

Apollo provides specific classes to extend our errors, those classes are ApolloError, AuthenticationError and UserInputError

## Testing

#### Testing Resolvers
- Unit test resolver functions
- Mock out data sources

#### Testing Schema (Not so common)
- Convert TypeDefs into Schema
- Unit test Object types
- Maybe use gql (GraphQL AST) to compare objects

#### Testing the server
- Integration testing the entire server
- Create a test client to use to issue queries and mutations with against a testing instance of your server
- Mock out variables, context, and data sources

Mocks configuration of ApolloServer can help you to mock the entire schema so that you can develop your backend while the frontend can use the mocks
PS 1: It doesn't hit your resolver with this config
PS 2: mockEntireSchema with false will only mock the schema for the fields that we didn't provide resolvers

![Fallback text 2](/static/assets/pasted-image-20221122153432.png)


#### Subscription testing (My input)
`apollo-server-testing` doesn't work well with subscription tests


### Testing with a good DX

Snapshot could be a good solution for the result of the resolver (queries/mutations)


## Directives

Allows you to add logic and metadata to your Schemas, Queries, or Mutations. Directives can act like middleware for yourSchemas, or post processing hooks for your Queries and Mutations.

You can multiple types of directives, like ones inside your schema of GraphQL server or even on the client side.

The autor of the course created in one company a directive that was used to track analitics of GraphQL usage.

#### Why use Directives?
- Fine-grain control down to the field level on your TypeDefs
- Code reusability
- Eliminate post processing on your clients after you query
- Extendable (You can use a directive inside a directive) (libraries of directives)
- Extremely powerful

#### Buildin directives from GraphQL
- @deprecated (Adds meta-data to our schema, used to deprecate a property, type, etc) (ServerSide)
- @skip (Skip directive to remove a property only if the statement is true) (ClientSide)
- @include (If directive to add a property only if the statement is true) (ClientSide)

[graphql-lodash](https://www.npmjs.com/package/graphql-lodash)  is a library with a lot of directives to improve queries

#### Custom Directives

- Requires a definition in your schema
- Create logic for when Directive is used

Apollo provides `SchemaDirectiveVisitor`, this one is a helper to work with the AST of GraphQL.

How to add in the schema:
![Fallback text 3](/static/assets/pasted-image-20221122182531.png)


Logic from the custom directive
![Fallback text 4](/static/assets/pasted-image-20221122182259.png)


Config in ApolloServer:
![Fallback text 5](/static/assets/pasted-image-20221122182216.png)


When a field doesn't have a resolver specifically, you can use the default resolver from GraphQL:
![Fallback text 6](/static/assets/pasted-image-20221122182700.png)


Most of the time the directive is a wrapper above the default resolver or a resolver we written:
![Fallback text 7](/static/assets/pasted-image-20221122182911.png)


You can also support the usage of multiple places with your custom directive:
![Fallback text 8](/static/assets/pasted-image-20221122190000.png)


We can receive schema arguments too:
![Fallback text 9](/static/assets/pasted-image-20221122190038.png)

![Fallback text 10](/static/assets/pasted-image-20221122190105.png)


To receive arguments from client side you need to configure your field args:
![Fallback text 11](/static/assets/pasted-image-20221122190717.png)

![Fallback text 12](/static/assets/pasted-image-20221122190907.png)


## Caching


### Application Caching

- Prefered way to cache GraphQL right now
- Dataloaders are cache per request

### HTTP Caching

#### apollo-cache-control

Has cache directives that you can use and helper functions to be used inside resolvers

#### Automatic Persisted Queries

Cache queries so that you can only call the ID generated for this query on cache instead of sending the entirely schema, good to reduce network usage

### Client Side Caching
- Apollo client handles this pretty well
- Use any client-side state management you already use (redux, vuex, rx, etc)
- Persisted Queries in coodination with the server

### How should you cache?
- If you're able to use HTTP Caching, enable it
- Cache external HTTP data sources
- Cache client-side

## My own strange ideias
- Cache directive, maybe connected to Redis or Lambda@Edge?

