---
title: 'Java Study Notes(26) Lambder'
date: 2019-09-26 10:15:11
tags: 
- Java
- Function Programming
categories: 
- Software Development
- Java Programming
notshow: true
---

# Functional Interfaces
* A functional interface is a regular interface in Java with some constraints

* It can only have one abstract method inside of it

* It should be annotated using @FunctionalInterface above the class declaration

* It can have many defualt method
* 
```
@FunctionalInterface
public interface Predicate<T>{
    boolean test (T t)
}
```

# Why are they used?
There are many places where functional interfaces are used within Java. 

This enables flexibility with in the system through the dependency inversion principle.

Wherever a **functional interface** is being used as a **data type**, we can replace it using a lambda express

A lambda expression often represent small amount of functionality that does not constitute the addition of a full class into the code base.

# Lambda Syntax

## Implementation of anonymouse class

```
Predicate<String> predicate = new Predicate<String>(){
    @Override
    public boolean test(String value){
        return value.isEmpty();
    }
};
```

## Implementation of Lambda
```
Predicate p_Lambda_1 = (String value)->{return value.isEmpty}
```

If only one parameter is passed, there is no need for the surrounding brackets
```
Predicate p = value->{return value.isEmpty}
```
If the implementation only requires one line, then we can omit the return state 
```
Predicate p = value->value.isEmpty
```

if only have one method call inside the implementation, the implementation could be further simplified
```
Predicate<String> predicate = String::isEmpty;
```

# More Example

```
public static void main(String[] args){
    List <String> names = new ArrayList<>();
    names.add("John");
    names.add("Zuhi");
    names.add("Alex");

    Comparator<String> sortByName = new Comparator<String>(){
        @Override
        public int compare(String o1, String o2)
    }
}
```