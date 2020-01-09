---
title: 'Java Study Notes(2) Data Type'
date: 2019-06-02 12:06:52
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---

# Primitive data types 

* **Primitive types** are **predefined** in Java. 
* It cannot be used to **call methods**. 
* A **primitive type** need to have a value.
* The **size** of a primitive type **depends on the data type**
* * A **non-primitive types** starts with an **lowercase letter**.

boolean -- 1 bit -- Stores true or false values
byte -- 1 byte -- Stores whole numbers from -128 to 127
short -- 2 bytes -- Stores whole numbers from -32,768 to 32,767
char -- 2 bytes -- Stores a single character/letter or ASCII values
int	-- 4 bytes -- Stores whole numbers from -2,147,483,648 to 2,147,483,647
float -- 4 bytes -- Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits
long -- 8 bytes -- Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
double -- 8 bytes -- Stores fractional numbers. Sufficient for storing 15 decimal digits


# Non Primitive

* **Non-primitive types** are created by the programmer and is not defined by Java (**except for String**).
* * It can be used to **call methods**. 
* A **non-primitive** types can have **null** as value.
* A **non-primitive types** have all the **same size**.
* A **non-primitive types** starts with an **uppercase letter**.

## Reference type (Non-primitive)
User Created Object
Strings
Arrays
Classes
Wrapper Classes
Interface

### Wrapper Classes (Non-primitive)
Wrapper classes provide a way to use primitive data type as objects(Non-primitive type).
Primitive Data Type:
* byte -> Byte
* short -> Short
* int -> Interger
* long -> Long
* float -> Float
* double -> Double
* boolean -> Boolean
* char -> Character


# Primitive Type Casting

Widening Casting (automatically)
byte -> short -> char -> int -> long -> float -> double

```java
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

```java
public class MyClass{
    public static void main(String[] args){
        double myDouble = 9.88;
        int myInt = (int) myDouble; 
        System.out.println(myInt);
        System.out.println(myDouble);
    }
}
```