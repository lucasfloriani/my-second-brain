---
title: SOLID - The First 5 Principles of Object Oriented Design
date: '2023-01-15'
tags: ['article', 'architecture', 'fullStack', 'solid #read', 'withResume']
draft: false
summary: The AreaCalculator class should only be concerned with the sum of the areas of provided shapes.. It states that the high-level module must not depend on the low-level module, but they should depend on...
description: The AreaCalculator class should only be concerned with the sum of the areas of provided shapes.. It states that the high-level module must not depend on the low-level module, but they should depend on...
---

# SOLID - The First 5 Principles of Object Oriented Design

[SOLID - The First 5 Principles of Object Oriented Design](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)

_SOLID_ is an acronym for the first five object-oriented design (OOD) principles by Robert C. Martin (also known as [Uncle Bob](http://en.wikipedia.org/wiki/Robert_Cecil_Martin)).

## S - Single-responsability Principle

_A class should have one and only one reason to change, meaning that a class should have only one job._

Code without the principle:

![Fallback text 1](/static/assets/pasted-image-20221016175849.png)

![Fallback text 2](/static/assets/pasted-image-20221016175900.png)

![Fallback text 3](/static/assets/pasted-image-20221016175912.png)

![Fallback text 4](/static/assets/pasted-image-20221016175928.png)

The problem with the output method is that the `AreaCalculator` handles the logic to output the data.
Consider a scenario where the output should be converted to another format like JSON.
All of the logic would be handled by the `AreaCalculator` class. This would violate the single-responsibility principle. The `AreaCalculator` class should only be concerned with the sum of the areas of provided shapes. It should not care whether the user wants JSON or HTML.
To solve this we will create a separate class that will handle only the display format of the data from the `sum`

Code with the principle:

![Fallback text 5](/static/assets/pasted-image-20221016180114.png)

![Fallback text 6](/static/assets/pasted-image-20221016180126.png)

## O - Open-Closed Principle

_Objects or entities should be open for extension but closed for modification._

Code without principle:

![Fallback text 7](/static/assets/pasted-image-20221016181628.png)

The issue is that every time we have a different type of shape we will need to add more if statements there, to fix that we will make each Shape has their own area method

Code with principle:

![Fallback text 8](/static/assets/pasted-image-20221016181734.png)

![Fallback text 9](/static/assets/pasted-image-20221016181747.png)

![Fallback text 10](/static/assets/pasted-image-20221016181756.png)

![Fallback text 11](/static/assets/pasted-image-20221016181806.png)

![Fallback text 12](/static/assets/pasted-image-20221016181816.png)

![Fallback text 13](/static/assets/pasted-image-20221016181828.png)

![Fallback text 14](/static/assets/pasted-image-20221016181840.png)

## L - Liskov Substitution Principle

_Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T._

This means that every subclass or derived class should be substitutable for their base or parent class.

![Fallback text 15](/static/assets/pasted-image-20221016182251.png)

![Fallback text 16](/static/assets/pasted-image-20221016182307.png)

![Fallback text 17](/static/assets/pasted-image-20221016182337.png)

When you call the `HTML` method on the `$output2` object, you will get an `E_NOTICE` error informing you of an array to string conversion.

To fix this, instead of returning an array from the `VolumeCalculator` class sum method, return `$summedData`:

![Fallback text 18](/static/assets/pasted-image-20221016182437.png)

The `$summedData` can be a float, double or integer.

That satisfies the Liskov substitution principle.

PS: To be honest, I think they could show a better example of this principle, I will try to find it in another article later

## I - Interface Segregation Principle

_A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use_

This statement says about you putting the type of a parameter of a method being a specific class instead of an interface, this will make it required that everytime we use this method we will need to pass a value that needs all the methods of the class we added in the type, even tought we didn't use all those methods

Using the previous code, now we need to implement volume for three-dimensional shapes like `Cuboid` and `Spheroid`, to make that happen we could apply a volume method for our interface `ShapeInterface`, but this won't be right because flat shapes don't have volume.

![Fallback text 19](/static/assets/pasted-image-20221016183116.png)

To make our code use the principle, we will break those methods in different interfaces so we could apply only on classes that really use them.

![Fallback text 20](/static/assets/pasted-image-20221016183213.png)

To improve even forward we can create a interface for calculate too

![Fallback text 21](/static/assets/pasted-image-20221016183252.png)

## D - Dependency Inversion Principle

_Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions._

Instead of using the class directly, we can use the parent class or even the interface that is more abstract than the class directly. With that we can achieve `decoupling`.

Code without the principle:

![Fallback text 22](/static/assets/pasted-image-20221016183627.png)

Code with the principle:

![Fallback text 23](/static/assets/pasted-image-20221016183646.png)

![Fallback text 24](/static/assets/pasted-image-20221016183658.png)