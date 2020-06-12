# Java Study Notes(1) General Concept


# JDK, JRE, JVM
**JDK(Java Development Kit)** is a tool used by developer. It includes JRE, Java compiler and other tools(such as Javadoc). In Eclipse, it can compile Java program without JDK, since it has its own version of compiler. Yet, Maven in Eclipse still requires JDK.

**JRE(Java Runtime Environment)** refers to a runtime environment in which Java bytecode can be executed. It’s an implementation of the JVM which physically exists. JRE allow .class file to be executed.

**JVM(Java Virtual Machine)** is an abstract machine. It is a specification that provides a run-time environment in which Java bytecode can be executed. Our application is running on the JVM. JVM is often in an application server that deals with TCP/IP, HTTP, SSL protocol and so on. 

# Java is statically, strongly, manifestly typed programming language

## Statically Typed
**Statically Typed** means that data types are checked at compile time. Thus, varaible need to be defined before using. An opposite type is **Dynamically Typed**. In Dynamically Typed, yypes are checked at runtime. A target may hold a binding to any kind of object. An example could be found like Python.


## Strongly Typed 

**Strongly Typed** means that types are restricted within their own bounds. Once assigned a value of a particular kind, the object must obey rules about how it can interact with other objects. An opposite type is **weakly Typed**: A value of one type can be treated as another. **Example**: a=10; b="10" add(a,b); C and PHP is weekly type

## Manifestly Typed 
**Manifestly Typed** means that variable types must be declared. An opposite type is **Type Inferred**, where variable types are deduced by context. It should noted in Java 1.8, an Lambda Expression helps with Type inferred.

## Compiler language and interpreted language

Java is both **Compiler languages** and **Interpreted Languages**. **Java source code** is compiled to **Java Byte Code**. **Java Byte Code** is then interpreted by the **Java Virtual Machine(JVM)**. Thus, Java **write one and run anywhere**.

Java source code -> Convert to Java byte code(by compiler) -> Java virtual machine(Platform dependent) -> Machine code

