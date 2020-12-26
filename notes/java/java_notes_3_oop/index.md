# Java Notes(3) Object Oriented Language




## Object Oriented 
Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies the software development and maintenance.

### Class
- A class in Java can contain: **field(variable, attribute)**, **methods**, **constructors**, **blocks**, **nested class** and **interface**.
- Object is an instance of a class.
- There is only one way to define class in java using class keyword.
- The Object class is the parent class of all the classes in java by default.


### Constructor
- Constructor in java is a special type of method that is used to initialize the object.
- If there is no constructor in a class, compiler automatically creates a default constructor.
- There is no copy constructor in java. But, we can copy the values of one object to another like copy constructor in C++.
- A constructor can perform other tasks instead of initialization like object creation, starting a thread, calling method etc.
- You can perform any operation in the constructor as you perform in the method.
- Constructor must not have return type.
- Constructor name must be same as the class name.
- super() is added in each class constructor automatically by compiler if there is no super() or this()


### Instance initializer block
- Instance Initializer block is used to initialize the instance data member.
- It is created when instance of the class is created.
- It runs each time when object of the class is created.
- It is invoked after the parent class constructor is invoked (i.e. after super() constructor call).
- The instance Initializer block comes in the order in which they appear.




## Four Pillars of OOP

The main concepts in object oriented programming are **Inheritance**, **Polymorphism**, **Abstraction**, **Encapsulation**.

### Inheritance
- Inheritance (IS-A) is a mechanism in which one object acquires all the properties and behaviors of parent object.
- The extends keyword indicates that you are making a new class that derives from an existing class.
- Multiple inheritance is not supported in Java through class. We can use Interface to perform it.
- To reduce the complexity and simplify the language, multiple inheritance is not supported in java.
- If a class have an entity reference, it is known as Aggregation (HAS-A relationship).
- Inheritance should be used only if the relationship is-a is maintained throughout the lifetime of the objects involved; otherwise, aggregation is the best choice.


### Polymorphism
- Polymorphism is a concept by which we can perform a single action by different ways.
- There are two types of polymorphism in java: **compile time polymorphism** and **runtime polymorphism**.
- We can perform polymorphism in java by method overloading and method overriding.
- If you overload static method in java, it is the example of compile time polymorphism.
- In Runtime polymorphism (Dynamic Method Dispatch), an overridden method is resolved at runtime rather than compile-time.
- A Virtual Method is an inheritable and overridable method for which dynamic dispatch is facilitated.
- All non-static, non-final and non-private methods are Virtual Methods by default.
- When reference variable of Parent class refers to the object of Child class, it is known as upcasting.
- Method is overridden not the data members, so runtime polymorphism can't be achieved by data members.
- Connecting a method call to the method body is known as binding.
- There are two types of binding : Static binding (early binding) and Dynamic binding (late binding).

#### Method Overloading (compile time polymorphism)
- If a class has multiple methods having same name but different in parameters, it is known as Method Overloading.
- There are two ways to overload the method in java : by changing number of arguments, by changing the data type.
- In Java, Method Overloading is not possible by changing the return type of the method only because of ambiguity.
- Compile Time Error is better than Run Time Error. So, java compiler renders compiler time error if you declare the same method having same parameters.
- We can also overload Java main() method, but JVM calls main() method which receives string array as arguments only.
- One type is promoted to another implicitly if no matching datatype is found. eg. byte can be promoted to short, int, etc.
- If there are no matching type arguments method, and each method promotes similar number of arguments, there will be ambiguity.
- One type is not de-promoted implicitly for example double cannot be depromoted to any type implicitly.

#### Method Overriding (runtime polymorphism)
- If subclass (child class) has the same method as declared in the parent class, it is known as method overriding.
- Method must have same name and parameters as in the parent class for overriding.
- Method overriding is used to provide specific implementation of a method that is already provided by its super class. Also used for runtime polymorphism.
- We cannot override static method (not also main method) because static method is bound with class whereas instance method is bound with object. Static belongs to class area and instance belongs to heap area.
- Method Overriding with Access Modifier: if you are overriding a method, overridden method (i.e. declared in subclass) must not be more restrictive.
- Covariant Return Type: It is possible to override method by changing the return type if subclass overrides any method whose return type is Non-Primitive but it changes its return type to subclass type.


### Abstraction
- Abstraction is a process of hiding the implementation details and showing only functionality to the user.
- There are two ways to achieve abstraction in java : Abstract class and Interface.


#### Abstract class
- A class that is declared as abstract (keyword) is abstract class. It can have abstract and non-abstract methods.
- A method that is declared as abstract and does not have implementation is abstract method.
- Any method with a body is non-abstract method.
- An abstract class can have data member, abstract method, method body, constructor and even main() method.
- If there is any abstract method in a class, that class must be abstract.
- If extending any abstract class that have abstract method, we must either provide the implementation of the method or make this class abstract.

#### Interface
- An interface in java is a blueprint of a class. It has static constants and abstract methods.
- Since Java 8, we can have method body in interface. But we need to make it default or static method.
- The interface is a mechanism to achieve abstraction. It represents IS-A relationship.
- By using interface, we can support multiple inheritance.
- It can be also used to achieve loose coupling (coupling is degree of direct knowledge that one element has of another).
- The Java compiler adds public & abstract before the interface method. Adds public, static & final before data members.
- A class extends another class, an interface extends another interface but a class implements an interface.
- Multiple inheritance is not supported by class because of ambiguity. But, supported by interface because there is no ambiguity as implementation is provided by the implementation class.
- An interface with no member is called marker/tagged interface. For example: Serializable, Cloneable, Remote etc.
- Marker interface are used to provide essential information to JVM, so that JVM may perform some useful operation.
- An interface can have another interface i.e. known as nested interface.



### Encapsulation 
- Encapsulation is a process of wrapping code and data together into a single unit.
- To create a fully encapsulated class, make all data members of the class private, & use setter/getter methods to access data.
- By providing only setter or getter method, you can make the class read-only or write-only.







