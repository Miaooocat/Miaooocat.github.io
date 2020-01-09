---
title: 'Java Study Notes(16) Exception and Error'
date: 2019-06-24 10:06:10
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---

## Overview
When an error occurs, Java creates an exception object, then the normal flow of the program stopped. JRE(Java Running Environment) tries to find the handdler for this exception.

Exception Handler is the block of code that can process the exception object. The logic to find the exception handler is to start the search in the method where error occurred, if no appropriate handler found, then move to the caller method and so on. 
```
|---|
| C |
|---|
| B |
|---|
| A |
|---|
```
So if methods call stack is A->B->C and exception is raised in method C, then the search for appropriate handler will move from C->B->A. If the top most method doesn’t ‘handle’ the exception, it is popped off the stack – **even if the method has not finished executing!** 


If appropriate exception handler is found, exception object is passed to the handler to process it. The handler is said to be **“catching the exception”**. If there are no appropriate exception handler found after all method being popped off from the stack, the program crashes and prints information about the exception.

Note that Java Exception handling is a framework that is used to handle runtime errors **(Unchecked exception)** only, **compile time errors (Checked exception) are not handled by exception handling** in java.

## Java Exception Handling Keywords
To create exception handler block, some specific keyword is used in Java.

**throw** – throw keyword is used to throw exception to the runtime to handle it.

**throws** – throws keyword is used in method signature to let caller program know the exceptions that might be thrown by the method. throws can be used with main() method, but is not recommend.


**try-catch** – try is the start of the block and catch is at the end of try block to handle the exceptions. Multiple catch blocks with a try and try-catch block are allowed. catch block requires **a parameter** that should be of type Exception. catch should follows the order from most specific to least specific

**finally** – finally block is optional and can be used only with try-catch block. finally block always gets executed, whether exception occurred or not. This is normally used to clean resources.

```
import java.io.FileNotFoundException;
import java.io.IOException;

public class ExceptionHandling {

	public static void main(String[] args) throws FileNotFoundException, IOException {
		try{
			testException(-5);
			testException(-10);
		}catch(FileNotFoundException e){
			e.printStackTrace();
		}catch(IOException e){
			e.printStackTrace();
		}finally{
			System.out.println("Releasing resources");			
		}
		testException(15);
	}
	
	public static void testException(int i) throws FileNotFoundException, IOException{
		if(i < 0){
			FileNotFoundException myException = new FileNotFoundException("Negative Integer "+i);
			throw myException;
		}else if(i > 10){
			throw new IOException("Only supported for index 0 to 10");
		}

	}

}

```

## Java Exception Hierarchy



```
                   +-----------+
				          | Throwable |
                   +-----------+
                    /         \
                   /           \
          +-------+          +-----------+
          | Error |          | Exception |
          +-------+          +-----------+
            /  |  \           /         \
          \________/                
                                    +------------------+
           unchecked     checked    | RuntimeException |
                                    +------------------+
                                     /   |    |      \
                                     \_________________/
                                          unchecked
```

## Checked Exceptions

This code will not compile because the PrintWriter constructor declares that it might throw a FileNotFoundException:
```
void myMethod() {
	PrintWriter pw = new PrintWriter("NonExistant.File");
}
```
```
// Option 1 (Do not use this at main function)
public void myMethod() throws FileNotFoundException {
  PrintWriter pw = new PrintWriter(“NonExistant.File”);
}
```
```
// Option 2
public void myMethod() {
     PrintWriter pw = null;
  try {
     pw = new PrintWriter(“NonExistant.File”);	// Line that can cause the problem
  } catch (FileNotFoundException e) {	// This is to create an object
     log.warn(e); 		// Do something to recover	
  } finally {
     pw.close();      // Code to clean up resources
  }
}
```



## Unchecked Exceptions
// This code compiles, but throws an ArrayIndexOutOfBoundsException at runtime:
```
void myMethod() {
	String[] stringArray = new String[5];
  	stringArray[5] = "oops";
}         		
```
Unchecked Exceptions indicate a problem internal to the program:
	- Caused by lack of defensive coding
	- Caused by improper use of the API
	- Should not be caught


(Throwable (Error(VirtualMachineError), Exception(RuntimeException,CheckedExceptions)) 
Throwable is a class.
Runtime Exception occurs at run time. (unchecked Exception): Caused by bugs and errors in the code
Checked Exception occurs at compile time.: Caused by situation outside the code's control

Unchecked Exceptions are caused by errors and bugs in code
Prevent them by implementing adequate if statements:
When casting check that the variable is the correct datatype
ClassCastException
When passed a reference variable as input check if it is null
NullPointerException
When doing division check that the divisor is not 0
ArithmeticException
When accessing arrays, check that the index is within the array bounds
IndexOutOfBoundsException
This is called defensive coding.



## Error
Errors indicate a serious problem:
	- External to the program
	- Cannot be recovered from
	- **Should not be caught** (Need to fix the bug)

## Catch Blocks
A try must be immediately followed by a catch or finally block
A try can have multiple catch blocks
	- Allows us to handle different exceptions in different ways
	- An exception will be caught by the **first matching catch block**
	- Catch blocks must be ordered from most to least specific
	- Catching ‘Exception’ is considered bad practice as it will catch everything in the hierarchy. Do not do this!

## finally 
The finally will almost always execute when the try block exits, whether it exits normally or an exception is thrown
Used to clean up resources
The finally will not execute if:
The JVM exits whilst in the try or catch
The thread is interrupted or killed

## Custom Exceptions
To create your own exception, create a class that:
Extends Exception for a checked exception
Extends RuntimeException for an unchecked exception
Typically includes constructors that take in a message and/or a cause.

```
public class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
    public MyException(String message, Throwable cause) {
        super(message, cause);
    }
}
```
Any code can throw an exception – your code, code written by someone else, or the environment. 
This is done with the throw keyword, when something goes wrong.

```
public void myMethod() throws MyException {
    if(some condition) {
        throw new MyException("message");
    }
}
```

Don't do this
```
 public void myMethod(){

    try {
       throw new MyException("message");
    }
    catch (MyException e) {
       // Do something to recover
       log.warn(e);
    }

 }
```

