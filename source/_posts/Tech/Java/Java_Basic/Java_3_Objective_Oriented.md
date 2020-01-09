---
title: 'Java Study Notes(3) Objective Oriented Concept'
date: 2019-06-03 12:06:52
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---

# Objective Oriented Language
**Object-oriented programming** is a programming model or approach where the programs are **organized around objects** rather than logic and functions. 

## Class
* Contain both data (attributes and behaviors)
* Provide blue prints which can be instantiated later
* Allow you to create custome data type
* Many build-in class is in Java Library

## Objects
* Objects are instances of classes that is created by the **new** key words. 
* Everything is extends from an object class

## Encapulation
Encapulation is the act of grouping together data and behaviour into a single unit. 

The goal of Encapsulations is 
1. High Cohesion: Each class should only do one thing, and is least possible to depend on others

2. Low coupling: Each class should hide their data from other class

* To achieve this in Java
    * **Variables** of a class is declared as **private**
    * Provide **public setter and getter methods** to modify and view the variables values.
    * Each classes should be more independent

In encapsulation, the variables of a class will be hidden from other classes, and can be accessed only through the methods of their current class. This helps with data hiding. 


## Abstraction
Abstraction is a process of hiding the implementation details from the user, only the functionality will be provided to the user.

Java use abstract classes and interfaces to achieve this.

## Inheritance
Inheritance is a process that one class acquires the properties(methods and fields) of another. Inheritance should follow a **IS-A relationship**.

The subclass could be called derived class, or child class. 

This is achieved in Java by keyword **extends**


## Polymorphism
Polymorphism: A single object can refer the super class or sub-class depending on the reference type which is called polymorphism.


There are two main types
1. Early Binding (Compile time) Static polymorphism
    * Occurs at compile time
    * All variable, static, private and final methods

2. Late Binding (Runtime) Dynamic polymorphism
    * Occurs at runtime
    * Occurs at runtime
    * All other methods


Polymorphism in Java is achieved by **Overloading** and **Overriding**

### Overloading
Within a same class (for child class, it will automatically take the method from parents class), the method has same signature but different parameter.

```java
public class Sum { 
  
    // Overloaded sum(). This sum takes two int parameters 
    public int sum(int x, int y) 
    { 
        return (x + y); 
    } 
  
    // Overloaded sum(). This sum takes three int parameters 
    public int sum(int x, int y, int z) 
    { 
        return (x + y + z); 
    } 
  
    // Overloaded sum(). This sum takes two double parameters 
    public double sum(double x, double y) 
    { 
        return (x + y); 
    } 
  
    // Start point
    public static void main(String args[]) 
    { 
        Sum s = new Sum(); 
        System.out.println(s.sum(10, 20)); 
        System.out.println(s.sum(10, 20, 30)); 
        System.out.println(s.sum(10.5, 20.5)); 
    } 

```

### Overriding
Child class has same method and same parameters with its parents class 

```java
// Base Class 
class Parent { 
    void show() 
    { 
        System.out.println("Parent's show()"); 
    } 
} 
  
// Inherited class 
class Child extends Parent { 
    // This method overrides show() of Parent 
    @Override
    void show() 
    { 
        System.out.println("Child's show()"); 
    } 
} 
  
// Driver class 
class Main { 
    public static void main(String[] args) 
    { 
        // If a Parent type reference refers 
        // to a Parent object, then Parent's 
        // show is called 
        Parent obj1 = new Parent(); 
        obj1.show(); 
  
        // If a Parent type reference refers 
        // to a Child object Child's show() 
        // is called. This is called RUN TIME 
        // POLYMORPHISM. 
        Parent obj2 = new Child(); 
        obj2.show(); 
    } 
} 
```