# Java Study Notes(1) General Concept



# Java is statically, strongly, manifestly typed programming language

> Statically and Dynamically typed
**Statically Typed** means that data types are checked at compile time. Thus, varaible need to be defined before using. An opposite type is **Dynamically Typed**. In Dynamically Typed, tpes are checked at runtime. A target may hold a binding to any kind of object. An example could be found like Python.


> Strongly vs Weakly typed 

**Strongly Typed** means that types are restricted within their own bounds. Once assigned a value of a particular kind, the object must obey rules about how it can interact with other objects. An opposite type is **weakly Typed**: A value of one type can be treated as another. **Example**: a=10; b="10" add(a,b); C and PHP is weekly type

> Manifestly typed vs Type Inferred
**Manifestly Typed** means that variable types must be declared. An opposite type is **Type Inferred**, where variable types are deduced by context. It should noted in Java 1.8, an Lambda Expression helps with Type inferred.

> Compiler language vs interpreted language

Java is both **Compiler languages** and **Interpreted Languages**. **Java source code** is compiled to **Java Byte Code**. **Java Byte Code** is then interpreted by the **Java Virtual Machine(JVM)**. Thus, Java **write one and run anywhere**.

Java source code -> Convert to Java byte code(by compiler) -> Java virtual machine(Platform dependent) -> Machine code

