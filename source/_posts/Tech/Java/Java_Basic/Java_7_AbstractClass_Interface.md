---
title: 'Java Study Notes(7) Abstract and Interface'
date: 2019-06-07 12:06:52
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---

# Abstract class
An abstract class is a class that cannot be instantiated.
* It is marked with abstract modifier
* It can contains static member variables
* It can contains static method implementations
* It can contain abstract method or non-abstract method

## What is an abstract Methods
An abstract methods is a method with abstract modifier
* It has no method body
* It can only belong to an abstract class or interface
* If a concrete class inherits an abstract method, it must override the abstract method.

# Interface
An interface describes how the outside world (other classes) can interact with a class.

An interface is a list of abstract method.

Non-abstract method should be marked as default method.

When a class implements an interface:
    - It guarantees to provide the behavior listed by the interface
    - It gains the data type of that interface
Modifiers can be omitted
    - All methods are implicity public and abstract
    - All fields are implicityly public static and final

Interface could extend other interfaces even multiple at a time

Abstract class can defer the implementation of interfaces to child class.

## Interface default
The default keyword allows to implement non-abstract method in the interface. The implementing classes are still able to override it, but not required.

## Interface static
The static methods is allowed in the interface. Those method could be called through the name of the interface.
Its functionality is identical to static methods in classes.
```
public interface RandomGenerator{
    static int getRandomInt(int upperBound){
        return (int)(Math.random() * upperBound);
    }
}

int i = RandomGenerator.getRandomInt(50);
```

# Multiple Inheritance
Class does not allow extend multiple class. No diamond problem is allowed.
```
    A
  B   C
    D
```
If classes B and C override a method from class A in two different ways, which version does class D inherit?

Class allows multiple interfaces:
If diamond problem occurs, Java will force you to override this method in implementing classes to avoid the diamont problem.

# Usage
Abstract classes are part of the class hierarchy
- it meant to be extended by concrete classes
- A class can only have one parent class, abstract or not

Interfaces describle what an object can do
- A contract listing guaranteed behavior
- Multiple interfaces can be implemented at once.


