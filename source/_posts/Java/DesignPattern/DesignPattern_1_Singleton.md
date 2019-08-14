---
title: 'Deisgn Pattern Notes(1) Singleton'
date: 2019-06-27 16:19:11
tags: 
- Java
categories: 
- Software Development
- Design Pattern
notshow: true
---

# Singleton
The Singleton limits a class to have only one instance. Since there is only one Singleton instance, any instance fields of a singleton will occur only once per class, just like static fields.

Singletons often used to control access to resources, such as database connections or sockets.For example, if you have a license for only one connection for your databse or your JDBC driver has trouble with multithreading, the Singleton makes sure that only one connection is made or that only one thread can access the connection at a time.

# Implementation

## Example 1 Eager Initialization

In Eager initialization, the instance of Singleton Class is created at the time of class loading. 
```
public class Singleton {
    /* private and static access modifier 
    * limits the access and amount the object 
    * could created
    */
    private static Singleton singleton = new Singleton();
    /* A private Constructor prevents any other 
    * class from instantiating
    */
    private Singleton(){ }
    public static Singleton getInstance(){
        return singleton;
    }
    protected static void demoMethod(){
        System.out.println("demoMethod for singleton");
    }
}
```

```
public class SingletonDemon {
    public static void main (String[] args){
        Singleton temp = Singleton.getInstance();
        temp.demoMethod();
    }
}
```

This is the easiest method to create a singleton class but it has a lot of drawbacks as listed belwow.
1. It wastes memory, as object is created even if it is not used. It creates object when class is loading.
2. It can be destroyed with clone or serilization


## Example 2 Lazy initialization
```
public class LazyInitializedSingleton {
    /* private and static access modifier 
    * limits the access and amount the object 
    * could created
    */
    private static LazyInitializedSingleton singleton;
    /* A private Constructor prevents any other 
    * class from instantiating
    */
    private LazyInitializedSingleton(){}

    public static LazyInitializedSingleton getInstance(){
        // this if section is not thread safe
        if (singleton == null){
            singleton = new LazyInitializedSingleton();
        }
        return singleton;
    }
    protected static void demoMethod(){
        System.out.println("demoMethod for singleton");
    }
}
```

```
public class SingletonDemon {
    public static void main (String[] args){
        LazyInitializedSingleton temp = LazyInitializedSingleton.getInstance();
        temp.demoMethod();
    }
}
```
This implementation is not thread safe. If multiple threads are inside the if condition at the same time. it will destroy the singleton patten, and both threads will get the different instances of the singleton.

## Thread Safe Singleton
The way to create a thread-safe singleton class is to make the global access method synchronized.

```
public class ThreadSafeSingleton {
    /* private and static access modifier 
    * limits the access and amount the object 
    * could created
    */
    private static ThreadSafeSingleton singleton;
    /* A private Constructor prevents any other 
    * class from instantiating
    */
    private ThreadSafeSingleton(){}

    public static synchronized ThreadSafeSingleton getInstance(){
        if (singleton == null){
            singleton = new ThreadSafeSingleton();
        }
        return singleton;
    }
    protected static void demoMethod(){
        System.out.println("demoMethod for singleton");
    }
}
```

```
public class SingletonDemon {
    public static void main (String[] args){
        LazyInitializedSingleton temp = LazyInitializedSingleton.getInstance();
        temp.demoMethod();
    }
}
```

## Clone
Override the clone method from Object class

```
protected Object clone() throws CloneNotSupportedException{
    return single_instance;
}
```

## Serialization
The problem with serialized singleton class is that whenever we deserialize it, it will create a new instance of the class.

```
private Object readResolve(){
    return single_instance;
}
```




