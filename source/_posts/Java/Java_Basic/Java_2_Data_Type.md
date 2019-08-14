---
title: 'Java Study Notes(2) Data Type'
date: 2019-06-01 12:06:52
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---

# Primitive data types 
boolean -- 1 bit -- Stores true or false values
byte -- 1 byte -- Stores whole numbers from -128 to 127
short -- 2 bytes -- Stores whole numbers from -32,768 to 32,767
char -- 2 bytes -- Stores a single character/letter or ASCII values
int	-- 4 bytes -- Stores whole numbers from -2,147,483,648 to 2,147,483,647
float -- 4 bytes -- Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits
long -- 8 bytes -- Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
double -- 8 bytes -- Stores fractional numbers. Sufficient for storing 15 decimal digits

# Reference type (Non-primitive)
User Created Object
Strings
Arrays
Classes
Interface

----
The **main difference** between primitive and non-primitive data types are:

* **Primitive types** are **predefined** in Java. **Non-primitive types** are created by the programmer and is not defined by Java (**except for String**).

* **Non-primitive types** can be used to **call methods** to perform certain operations, while primitive types cannot.
* A **primitive type** has always a value, while **non-primitive** types can be **null**.
* A **primitive type** starts with a **lowercase letter**, while **non-primitive types** starts with an **uppercase letter**.
* The **size** of a primitive type **depends on the data type**, while **non-primitive types** have all the **same size**.

# Wrapper Classes
Wrapper classes provide a way to use primitive data type as objects.
Primitive Data Type
byte -> Byte
short -> Short
int -> Interger
long -> Long
float -> Float
double -> Double
boolean -> Boolean
char -> Character

# Primitive Type Casting

Widening Casting (automatically)
byte -> short -> char -> int -> long -> float -> double

```
public class MyClass{
    public static void main(String[] args){
        int myInt = 9;
        double myDouble = myInt; // auto-casting
        System.out.println(myInt);
        System.out.println(myDouble);
    }
}
```

Narrowing Casting
double -> float -> long -> int -> char -> short -> byte

```
public class MyClass{
    public static void main(String[] args){
        double myDouble = 9.88;
        int myInt = (int) myDouble; 
        System.out.println(myInt);
        System.out.println(myDouble);
    }
}
```