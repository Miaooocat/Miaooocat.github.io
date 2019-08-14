---
title: 'Java Study Notes(6) Constructor'
date: 2019-06-03 12:06:52
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---

# Overview

A constructor in Java is a block of code that is used to initialize objects. The constructor is called when an object of a class is created. It can be used to set initial values for object attributes.

Constructors is similar to methods, but with **two key differences**:
1. **No return type**
2. **Must have same name as class**

Similiar to methods, constructor could be **overloaded** as need.

# Default Constructor
All classes must have a constructor. if there is no constructor availiable, the compiler insert a default constructor that has **no arguements** and **empty body**. The purpose of default constructor is to call super(). It should be noted that **if any user-defined constructors are present in the class, the default constructor is not generated.**


## this() and Super()
Every constructor **must** begin with a call to this() or super().
- These calls can have arguements
- If neighter is called, the compiler inserts a call to super()

super() calls a constructor in the parent class

this() calls another constructor in the same class. This should not confuse with keywork **this**. The purpose of this is to avoid duplication of code.

```
public class User{
    public String firstName;
    public String lastName;
    public User(){
        this("default_first","default_last");
    }
    public User(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

# Constructor chain

**Constructors are not inherited!!**
It uses constructor chaining. Constructor chaining is the sequence of constructors invoked through calls to this() and super()
    - Chain must be able to complete in order to compile

##Example
In this example, if we create a Admin object with no arguement. The order will be listed in the code

```
public class User {
    // Step 4 the name will be stored here
    public String name;
    // Step 3 super() from step 2 will go here 
    public User (String name){
        this.name = name;
    }
}
public class Admin extends User {
    // Step 1. It invokes when no argument presents
    public Admin(){
        this ("default_name")
    }
    // Step 2 this() from step 1 will go here
    public Admin(String name){
        super(name);
    }
}
```
