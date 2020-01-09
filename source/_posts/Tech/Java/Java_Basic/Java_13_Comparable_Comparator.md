---
title: 'Java Study Notes(14) Comparable vs Comparator'
date: 2019-06-13 12:06:52
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---

Comparable and comparator are interfaces to provide a sorting logic for the collection.

Example:
```
public class Employee {
    private int id;
    privaate String name;
    private int age;
    private long salary;
    public int getId(){
        return id;
    }
    public Employee(int id, String name, int age, int salary){
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
```
The above code gives an object with too many attributes. Thus, we need to use comparable or comparator to sort them.

## Java Comparable
The Comparable interface has **only one method compareTo(T obj)**. This interface is implemented at the class that required to build desired object.

In this method, it returns a negative, zero, or positive integer as the employee Id is less than, equal to or greater than the specified object.

In **Comparable method**, value must need to know how to be order. We could not define the order logic.

```
public class Employee {
    private int id;
    privaate String name;
    private int age;
    private long salary;
    public int getId(){
        return id;
    }
    public Employee(int id, String name, int age, int salary){
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
    @Override
    public int compareTo(Employee emp){
        return (this.id - emp.id);
    }
```
Then, in the main class, we could use **build in method of array.sort**. If it is a collection, we could use **Collections.sort**.
```
Employee[] empArr = new Employee[4];
empArr[0] = new Employee(10,"A",25,10000);
empArr[1] = new Employee(20,"B",29,20000);
empArr[2] = new Employee(4,"C",31,5000);
empArr[3] = new Employee(1,"D",32,50000);

Arrays.sort(empArr);
```

## Java Comparator

Unlike Comparable, Comparator should be in a separate class or (anonymous classes inside Employee class(implement Comparator interface)). We create multiple separate classes to compare by different members.

```
// Comparator to sort employees list or array in order of Salary
public static Comparator<Employee> SalaryComparator = new Comparator<Employee>(){
    @Override
    public int compare(Employee e1, Employee e2{
        return (int) (e1.getSalary() - e2.getSalary());
    }
};

// Comparator to sort employees list or array in order of Age
public static Comparator<Employee> AgeComparator = new Comparator<Employee>(){
    @Override
    public int compare(Employee e1, Employee e2{
        return e1.getAge() - e2.getAge();
    }
};
```