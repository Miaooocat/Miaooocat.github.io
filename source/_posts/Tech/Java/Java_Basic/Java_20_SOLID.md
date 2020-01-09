---
title: 'Java Study Notes(20) SOLID'
date: 2019-09-20 13:20:52
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---

# What is good software design?

1. Code reuse
   - Can be reused for different data or applications

2. Scalability
   - Can handle increase in work or number of users

3. Extensibility
   - Easily extended or modified

4. Maintainability
   - Holds up to changing user needs

# Single Responsibility Principle
A class should only have one responsibility. Furthermore, it should only have one reason to change.
This helps with testing, lower coupling, and organization
* Testing: A class with one responsibiity will have far fewer test cases.
* Lower coupling: Less functionality in a single class will have fewer dependencies.
* Organization: Smaller, well-organized classes are easier to search than large class.
```
public class Employee {
    private String id;
    private String name;
    private Role title;

    // This two method should not be included
    public double calculateSalary(){...}
    public void storeToDatabase(){...}
}
```
```
public class Person
{
    private Long personId;
    private String firstName;
    private String lastName;
    private String age;
    private List<Account> accounts;
}

public class Account{
    private Long guid;
    private String accountNumber;
    private String status;
    private String type;
}
```

# Open Closed Principle
**Classes and functions should be open for extension but closed for modification.**
To introduce a new method, we should not change the existance code. To achieve this, we could use Abstract class or polymorphism.

- Open to extension
  - Can extend modules with new behavior
- Closed to modification
  - Behavior can be added without changing the source code of module
- Associated concepts
  - Abstraction
  - Polymorphism

```
```

# Liskov Substitution principle
**Subclasses should be substitutable for their base classes.**
Classes should correctly fulfill any expected behaviors inherited from super classes. This is related to inheritance and polymorphism.

```
// This is a bad example
class Rectange{
    private int x;
    private int y;
    public void setX(int x){
        this.x = x;
    }
    public void setY(int y){
        this.y = y;
    }
    public int getArea(){
        return x*y;
    }
}
```
```
// This is a bad example
// Use Rectangle to extends Square
class Square extends Rectangle{
    @Override
    public void setX (int x){
        this.x = x;
        this.y = x;
    }
    @Override
    public void setY (int y){
        this.y = y;
        this.x = y;
    }
}
```

# Interface Segregation Principle
Interface should be small, each dealing with one aspect of a problem. Clients should not be forced to implement unnecessary methods which they will not use.

```
// Bad case -- interface is too big, which results too many unnecessary method
public interface Car{
    Status open();
    Speed drive(Gas gas);
    Engine changeEngine(Engine newEngine);
}

public class Driver{
    public Driver(Car car){}
    public Speed ride(){
        this.car.open();
        return this.car.drive(new Gas(10));
    }
}

public class Mechanic{
    public Mechanic (Car car){}
    public Engine fixEngine(Engine newEngine){
        return this.car.changeEngine(newEngine);
    }
}
```

```
// Good case
public interface RidableCar{
    Status open();
    Speed drive(Gas gas)
}

public interface FixableCar{
    Engine changeEngine(Engine newEngine);
}

public class Driver{
}

public class Mechanic{
}
```



# Dependency Inversion Principle
Classes should depend upon abstract concepts rather than concrete implementations

**Bad Example**
```
public class Manager{
    private Worker worker;
    public void setWorker(Worker worker){
        this.worker = worker;
    }
    public Worker getWorker(){
        return worker;
    }
    public void manage(){
        worker.doWork();
    }
}
```
```
public class Worker{
    void doWork(){...}
}
```
```
public class RobotWorker{
    void doWork(){...}
}
```
**Good Example**
```
public class Manager{
    private IWorker worker;
    public void setWorker(IWorker worker){
        this.worker = worker;
    }
    public IWorker getWorker(){
        return worker;
    }
    public void manage(){
        worker.doWork();
    }
}
```
```
public interface IWorker{
    void doWork();
}
```
```
public class Worker implements IWorker{
    void doWork(){...}
}
```
```
public class RobotWorker implements IWorker{
    void doWork(){...}
}
```
