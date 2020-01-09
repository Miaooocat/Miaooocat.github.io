---
title: 'Java Study Notes(12) Collection'
date: 2019-06-12 12:06:52
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---

# Java Collections Framework
Java Collections Framework consists of three parts: **Interfaces**, **Implementation Classes** and **Algorithms**.

## Interfaces and Implemetation Classes

### Collection Interface
Collection Interface is the root of the collection hierarchy. A collection represents a group of objects known as its elements. The Java platform doesn�t provide any direct implementations of this interface. Three key interfaces extend it: **List**, **Queue**, **Set**

The interface has following methods:
* To check number of elements in the collection (size, isEmpty)

* To check whether a given object is in the collection (contains), 

* To add and remove an element from the collection (add, remove)

* To provide an iterator over the collection (iterator).

Collection interface also provides bulk operations methods such as (containsAll, addAll, removeAll, retainAll, clear).

The toArray methods are provided as a bridge between collections and older APIs that expect arrays on input.


### Set Interface

Set is a collection that cannot contain duplicate elements. This interface models the mathematical set abstraction and is used to represent sets, such as the deck of cards.

The Java platform contains three general-purpose Set implementations: HashSet, TreeSet, and LinkedHashSet. Set interface doesn�t allow random-access to an element in the Collection. You can use iterator or foreach loop to traverse the elements of a Set.

#### HashSet

Java HashSet is the basic implementation the Set interface that is backed by a HashMap. It makes **no guarantees for iteration order** of the set and **permits the null element**.

#### LinkedHashSet

#### TreeSet (Tree can be ordered and sorted)
TreeSet is an implementation based on a TreeMap. The elements are **ordered using their natural ordering**, or by a Comparator provided at set creation time, depending on which constructor is used.

### List Interface



### Queue Interface

Queue is a collection used to hold multiple elements prior to processing. Besides basic Collection operations, a Queue provides additional insertion, extraction, and inspection operations.

Queues typically, but do not necessarily, order elements in a FIFO (first-in-first-out) manner. Among the exceptions are priority queues, which order elements according to a supplied comparator or the elements� natural ordering. Whatever the ordering used, the head of the queue is the element that would be removed by a call to remove or poll. In a FIFO queue, all new elements are inserted at the tail of the queue.



### List:
#### ArrayList

#### Vector
Same as ArrayList, but is slower and thread safe.

### Queue:
#### PriorityQueue

### List and Queue
#### LinkedList
Doubly-linked list implementation of the List and Deque interfaces. Implements all optional list operations, and permits all elements (including null).

### Map:
#### HashMap
Hash table based implementation of the Map interface. This implementation provides all of the optional map operations and permits null values and the null key. HashMap class is roughly equivalent to Hashtable, except that it is unsynchronized and permits null. This class makes no guarantees for the order of the map.

#### TreeMap
A Red-Black tree based NavigableMap implementation. The map is sorted according to the natural ordering of its keys, or by a Comparator provided at map creation time, depending on which constructor is used.

#### LinkedHashMap

#### Hashtable

### In Summary

Tree and PriorityQueue classes are sorted and ordered.

Set class doesn't allow duplicated

Hash is not ordered and not sorted

## Algorithm

Algorithms are useful methods to provide some common functionalities, for example searching, sorting and shuffling.

# hashCode() and equal()

Returns an int hash code value for any given object 
Also defined in the Object class and can be overridden
Typically based on the same things being compared in equals
Buckets Objects together
Acts as a coarse grained equals()
Used as a way of narrowing down a search


If two objects are equal by equal method then they must have the same hash code.
If two objects have the same hash code they do not need to be equal by equal method.
