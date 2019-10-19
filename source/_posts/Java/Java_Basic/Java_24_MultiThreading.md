---
title: 'Java Study Notes(24) Multi-Threading'
date: 2019-06-28 16:19:11
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---

# Concurrency Overview
**What is concurrent programming?**
Concurrency is when a program can perform more than one thing at once. In Java, this could be achieved by multithreading. Multithreading in java is a process of executing multiple threads simultaneusly. 

## How Concurrency Works
Each program gets a chance on the CPU for a short amount of time and then another program gets a chance(multitasking)

When programs are switched the following occurs:
    - Save old registers and load new registers
    - Save old memory maps and load new memory maps
    - Save old tables and load new tables
    - Save old lists and load new lists

# Multi-Threading vs. Multi-Process

## Multi-process:
* Each process has an address in memory. In other words, each process allocates a separate memory area.
* A process is heavyweight
* Cost of communication between the process is high
* Switching from one process to another requires some time for saving and loading registers, memory maps, updating lists, etc.

## Multi-thread:
* Threads share the same address space
* A thread is lightweight
* Cost of communication between the thread is low

# How Threading Works in Java
In Java, every application has at least one thread - the main thread:
    - Its set of instructions are the code in the main() method
    - Starts running when main() is invoked

We can create other threads
    - These will run concurrently with main thread 
    - Background system threads also compete with our threads for CPU time
    - The JVM's thread scheduler decides which one runs

# Thread States

```
public Thread.State getState()
```
Thread.State enum has following constants

**New**: A new thread begins its life cycle in the new state. It remains in this state until the program starts the thread. It is also referred to as a born thread.

**Runnable**: After a newly born thread is started, the thread becomes runnable. A thread in this state is considered to be executing its task.

**Waiting**: Sometimes, a thread transitions to the waiting state while the thread waits for another thread to perform a task. A thread transitions back to the runnable state only when another thread transitions back to the runnable state only when another tread signals the waiting thread to continue executing.

**Timed Waiting**: A runnable thread can enter the timed waiting state for a specified interval of time. A thread in  this state transitions back to the runnable state when that time interval expires or when the event it is waiting for occurs 

**Terminated(Dead)**: A runnable thread enters the terminated state when it complete its task or otherwise terminates.

# Thread Priorities
Every Java thread has a priority that helps the operating system determine the order in which threads are schedulled. Java thread priorities are in the range between MIN_PRIORIITY(a constant of 1) and MAX_PRIORITY (a constant of 10). By default, every thread is given priority NORM_PRIORITY(a constant of 5).

Threads with higher priority are more important to a program and should be allocated processor time before lower-priority threads. However, thread priorities cannot guarantee the order in which threads execute and are very much plaform dependent.

# Benefit of multithreading

- Perform background tasks
- Utilise multiple cores
- Improve responsive
- Deal with servral case at once

# Hazards

## Deadlock
    - A deadlock happens when you have two threads, both of which are holding a key the other thread wants
  
## Livelock
    - Thread A and and B react each others actions in a continuous loop and are unable to progress
    - Analogy: Two person enter in a elevator(only one person is allowed), both try to enter and leave. This process continuous in a infinity loop.
  
## Race Condition
    - The order in which threads execute affects the outcome.

## Starvation
    - (Resource) One thread is unable to get enough time on the CPU due to lack of resources and ends up blocked

# Solutions

## Re-entrant methods
A method is re-entrant if a program can be interrupted and safely be called again
    - It does not depend on the state of the containing class
    - It does not depend on any non-final static data
    - It does not depend on any data that might be changed by other parts of the program

## Synchronization
    Synchronization is a mechanism by which we can control access to data shared by threads:
    - A thread can obtain a lock on an object
    - This prevents other threads from using that object
    - Only one thread can hold the lock at a time

## Wait/Notify Mechanism
    Provides a flagging system that allows threads to coordinate their activities
        - Threads can register that they are waiting for a resources
        - Threads can notify other threads when a resources is available

## Lock
    A system to indicate whether an object is in use by a thread:
        - If a thread has a lock an object, that means the object is in use by that thread
        - Any other thread looking to acquire the lock will not be able to, unless multiple locks are available

## Atomic Operations
    Atomic means cannot be broken down

    Atomic operations are operations which either happen completely or do not happen at they cannot be broken up into small operations


# Implementation

They are two methods of implement of multi-threading design in Java. 
1. Extending the Thread class
2. Implementing the Runnable Interface

## Create a Thread by Extending a Thread Class

1. To override run() method in Thread class
2. Put the complete logic inside the run method

```
public class MyThread extends Thread {
    @Override
    public void run(){
        System.out.println("MyThread is in execution");
    }
}
```
To call this thread is to create a thread object and call its method
```
t = new MyThread ("Thread -1");
t.start();
```

## Issue of IS-A
This can lead to system design issue. 

## Preferred method is HAS-A

## Key Thread Methods

**start()**
Launches thread execution - the run() method is called by the JVM

**sleep(long millis)**


**yield()**

**join()**
The current running thread will wait for this thread to dead

```
muThread.join
```

## Synchronized Keyword



# Concurrency Package

The java.util.concurrent.atomic package:
* Provides solutions for performing atomic operations
* Deals with atomic primitive arithmetic
    - Caution: Atomic and non-atomic objects are not interchangeable



## Interview Practice

Is the following method thread-safe? How to make it thread-safe?

```
class MyCounter {
	private static int counter = 0;
	public static int getCount() {
		return counter++;
	}
}
```
The method is not thread-safe. 
First, the counter++ operation is not atomic, which means it consists more than one atomic operations. 

Second, the counter is a static varable that belong to the class. This is really similar to global variable. Thus, it is not safe.

Two solution to make it thread safe.
1) Add synchronized key word:
```
class MyCounter {
	private static int counter = 0;
	public static synchronized int getCount() {
		return counter++;
	}
}
```
2) Import java.util.concurrent.atomic.* package. Use the method inside it.
```
import java.util.concurrent.atomic.AtomicInteger; 
public class MyCounter {
	private static AtomicInteger counter = new AtomicInteger(0);
	public static int getCount() {
		return counter.getAndIncrement();
	}
}
```