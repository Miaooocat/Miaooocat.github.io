---
title: 'Java Study Notes(8) Casting'
date: 2019-06-08 12:06:52
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---
# Primitive casting
in Java 2 Data type

# Upcasting

Casting from a subclass to a superclass is called upcasting. 

Example
```
public class Animal{
    public void eat();
}
```

```
public class Cat extends Animal {
    public void eat(){
        //...
    }
    public void meow(){
        //...
    }
}
```
Now we can create an object of Cat class and assign it to the reference variable of type Cat.
```
Cat cat = new Cat();
```
And we can also assign it to the reference variable of type Animal
```
Animal animal = cat;
```
We could do it explicitly, but not necessary
```
Animal animal = (Animal) cat
```
Using upcasting, we've restrcted the number of methods available to Cat instance but haven;t changed the instance itself. Now we can't do anything that is specific to Cat --- we can't invoke meow() on the animal variable.

So, **what is the use of this?**

```
public class Dog extends Animal{
    public void eat(){
        //...
    }
}
```
```
public class AnimalFeeder{
    public void feed(List<Animal> animals){
        animal.forEach(animal ->{animal.eat()});
    }
}
```
```
List<Animal> animals = new ArrayList<>();
animals.add(new Cat());
animals.add(new Dog());
new AnimalFeeder().feed(animals);
```
The use of upcasting and polymorphism is that your cat and dog will all be treated as animal.


# Downcasting
Downcasting is to cast from a superclass to subclass. The cast need to be explicitly defined. Down casting helps super class to use method in sub class