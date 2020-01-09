---
title: 'Java Study Notes(14) Generic'
date: 2019-06-14 12:06:52
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---

# Overview

Generics allow you to specify the type of object that another object should deal with in a dynamic way

# Java Generic Type Nameing Convension

* E - Element
* K - Key
* N - Number
* T - Type
* V - Value
* S,U,V etc. - 2nd, 3rd, 4th types

# Type Erasure

Generic type information does not exist at runtime. Generic type will be replaced with simple types.


# Example

It should be noted that only reference type can replace the generic type. Primitives are not allowed(Wrapper classes could help).
```
public class GenericClass<T>{
    public void add(T type){
    }
    public T get(String id){
    }
}
GenericClass<String> gc = new GenericClass<>();
```

# Polymorphism is not allowed

# Bounded Type Parameters
```
public class GenericClass<T extends Storable>{
    ...
}
```

# Wildcards
Wildcards give us more flexibility when creating references to generic types

```
GenClass<? extends Vehicle> gc = new GenClass<Car>()
```

Wild card are only used when creating the class, not the object. That says when using "new", we must specify a real type in the brackets.

