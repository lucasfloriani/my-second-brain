[Clean architecture - where to put input validation logic](https://stackoverflow.com/questions/57603422/clean-architecture-where-to-put-input-validation-logic)
[The Clean Architecture: Where should we put validation logics in the code](https://ikenox.info/blog/where-to-put-validation-in-clean-architecture)
[Clean architecture validation in domain vs data persistence layer?](https://softwareengineering.stackexchange.com/questions/351419/clean-architecture-validation-in-domain-vs-data-persistence-layer)
[Should domain layer have validation logic?](https://softwareengineering.stackexchange.com/questions/436453/should-domain-layer-have-validation-logic)
[DDD with web api, validation in domain or application layer?](https://softwareengineering.stackexchange.com/questions/396334/ddd-with-web-api-validation-in-domain-or-application-layer)
[Validation in Domain Driven Design](https://stackoverflow.com/questions/52883013/validation-in-domain-driven-design)
[Two-step validation](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-model-layer-validations#two-step-validation)
[The fallacy of the always-valid entity](https://jeffreypalermo.com/2009/05/the-fallacy-of-the-always-valid-entity)

![[Pasted image 20230101191301.png]]

## Uncle Bob Thoughts

Uncle Bob said in [here](https://groups.google.com/g/clean-code-discussion/c/latn4x6Zo7w/m/bFwtDI1XSA8J) that you can have validation in the Domain but it needs to be general validations like the business rules that we have in there and that it's a validation that we use on other use cases.

Each layer can have it's own validation, but it needs to have the same reasons and knowledge of the layer we are adding this validation.

**In each layer, the system should reject the input which breaks its layer’s responsibility. This is validation**

In Clean Architecture, a certain layer should NOT have validation logic which is not responsible for its layer.

## Possible validations in each layer

#### Validation in Frameworks & Drivers layer

For example, nginx will return `413 Entity Too Large` if the request is too large. This is a kind of validation. The other is verification of request reliability by SSL/TLS.  
In this layer, validation means protecting the system at low level.

#### Validation in Interface Adapter Layer

The responsibility of this layer is converting data from one’s format to another one’s. For example, converting request body JSON into Java (or Ruby or …) object.

For example. if JSON is malformed, system can’t continue to convert data so we will throw error. It’s validation.  
In this layer, validation specifies data serialization/deserialization protocol.

**But in this layer, we should NOT validate character length or numeric ranges or non-null constraints, etc.** **It is not the responsibility of this layer. The responsibility of this layer is converting data format.**

#### Validation in Application Layer

In this layer, as validation, we must ensure that domain objects can receive the input. We should reject the input which the domain object can’t be received.

For example, when some mandatory parameters are missing, it should be rejected because the domain object has no way to receive like that parameter.

#### Validation in Domain/Entity Layer

In this layer, validation is equivalent to domain rule.  
For example, in banking system, the rule `It's impossible to withdraw much money than remained balance` is exactly validation.

## What is happen if we put a validation logic to wrong layer

Above I discussed about the validation in each layer.  
By the way, if we mistake the placement of validation logic, what is happened?

#### When putting a validation logic more outer than correct layer

In such case, we will not be ale to keep DRY principle.  
Code duplication and copy & paste will occur. And unexpected code which doesn’t satisfy specification will be easily increased.

#### When putting a validation logic more inner than correct layer

In such case, we will struggle with restriction which is unneccesarry strong.  
A restriction from validation logic will be broadly applicated even though you don’t need it

## Input Validation and Invariants

_Business rules manifest themselves as invariants in the domain model and as input validation in application services._

![[Pasted image 20230101200451.png]]

This difference leads to different treatment of violations of these business rules. An invariant violation in the domain model is an exceptional situation and should be met with throwing an exception. On the other hand, there’s nothing exceptional in external input being incorrect. You shouldn’t throw exceptions in such cases and instead should use a `Result` class.

Here’s a picture that will help you form a right mental model:

![[Pasted image 20230101200708.png]]

Existing validation rules may not apply to historical data. For example, let’s say that your application didn’t require students to fill out their addresses, but now it does: any newly registered students must have a valid address.


## Reasons to put validation in Domain Layer (Not absolute)

1. A triangle is a concept that has 3 edges. The `edges.Count == 3` condition is inherently true for all triangles. If you violate it by, say, adding the 4th edge, the object would become a square, not a triangle. Or, to take the example Greg brings up: a unicorn without a horn is a horse, not a unicorn.
2. When there are multiple operations doing the same check, you have to be diligent to not miss it in any of those operations (Domain layer validation?).

## Reasons to not put validation in Domain Layer (Not absolute)

1.  Validation rules are context-dependent and can’t be equally applied across all use cases.
2.  The message returned during the validation is the responsibility of the presentation layer and should not reside in the domain layer.
3.  Existing validation rules may not apply to historical data.

## Summary of [Always Valid Domain Model](https://enterprisecraftsmanship.com/posts/always-valid-domain-model)

-   Domain classes should always guard themselves against becoming invalid.
-   Invariants define the domain class: that class is what it is because of them.
-   Input validation and domain invariants stem from the same business rules. The difference between the two is a matter of perspective:
    -   Business rules manifest themselves as invariants in the domain model.
    -   Business rules manifest themselves as input validation in application services.
-   Invariant violation is an exceptional situation; use exceptions.
-   Invalid input is not an exceptional situation; use a `Result` class.
-   There’s no difference between "data validation" and "business rules validation". All validations, not matter how simple, are a result of business requirements.
-   The validation context is part of the domain knowledge and should reside in the domain model:
    -   The domain model should provide an API for the application layer to use this knowledge for input validation.
    -   The domain model should use the same API for invariant checks.
-   To remove text messages from the domain layer, use error codes instead of text and convert those code to text in the presentation layer.
-   To strengthen validation requirements, create a separate class that would handle the new set of rules. Once all existing data adheres to the new rules, remove the old class.
-   To deal with large UI forms that you need to save before submitting, create a separate entity with less strict validation rules.

## More info

- Putting business logic in DAOs will invalidate the concept of DAOs;
- In the API validation (Application layer) we should only validate the schema of the data and some limitations like length, regex, etc;
- In the Domain layer we will have validations related only to the business rules. The field level validations like length check, regex etc which do not mean anything to business are kept out of business rule;
- We could have a duplication of some validations but it's the path that I found while reading everything;
- Two-step validation is a way to validate the DTOs and at the Domain level too ([.Net Microsoft documentation](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-model-layer-validations#two-step-validation))
- All validations, not matter how simple, are a result of business requirements and the negotiation between those requirements and technical limitations. The only distinction here is that some validations are simpler than others.

- [x] Read
- [x] Create resume
- [x] Put tag `read` and `withResume`

##### Tags
#article, #backend, #architecture, #cleanArchitecture, #DDD, #domainDrivenDesign , #validation, #read, #withResume 
