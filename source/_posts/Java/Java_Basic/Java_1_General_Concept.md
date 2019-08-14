---
title: 'Java Study Notes(1) General Concept'
date: 2019-05-30 18:06:52
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---

# JDK, JRE, JVM
**JDK(Java Development Kit)** is a tool used to to compile, document and package Java programs. It contains JRE + development tools.

**JRE(Java Runtime Environment)** refers to a runtime environment in which Java bytecode can be executed. It’s an implementation of the JVM which physically exists.

**JVM(Java Virtual Machine)** is an abstract machine. It is a specification that provides a run-time environment in which Java bytecode can be executed. 


# Java is statically, strongly, manifestly typed programming language

## Statically Typed vs. Dynamically Typed

**Statically Typed**: Data types are checked at compile time. Thus, varaible need to be defined before using. (Java)

**Dynamically Typed**: Types are checked at runtime. A target may hold a binding to any kind of object. (Python)

## Manifestly Typed vs. Type Inferred
**Manifestly Typed**: Variable types must be declared.

**Type Inferred**: Variable types are deduced by context (Thus no need to provide type) (Java 1.8 has introduced Type Inferred (Lambda Expression))

## Strongly Typed vs. Weakly Typed

**Strongly Typed**: Types are restricted within their own bounds
Once assigned a value of a particular kind, the object must obey rules about how it can interact with other objects

**Weakly Typed**: A value of one type can be treated as another
Example: a=10; b="10" add(a,b); C and PHP is weekly type

## Java is both compiler language and interpreted language

**Compiler languages**: Compilers convert source code to binary machine code
The **machine code** is platform dependent - it cannot be transferred from one platform to another

**Interpreted Languages**: Source code is written in languages such as Bash and SQL
An interpreter will read this code and perform the instructions.
These scripts can be run on any platform where the interpreter exists.

**Java is both**. 
**Java source code** is compiled to **Java Byte Code**. **Java Byte Code** is then interpreted by the **Java Virtual Machine(JVM)**. Thus, Java **write one and run anywhere**.
Java source code -> Convert to Java byte code(by compiler) -> Java virtual machine(Platform dependent) -> Machine code
