---
title: 'Java Study Notes(27) Optionals (not Finished)'
date: 2019-07-03 10:15:11
tags: 
- Java
- Function Programming
categories: 
- Software Development
- Java Programming
notshow: true
---

# Method of deal with Null
Catch NullPointException is not a solution.

Check every return value is NULL


# Two Solution
1. Two types of Null Objects:
   * A representation of empty behavior

2. Could be due to an object changing state, such as a stream of data that has been closed

An optional absence of an object

# Represnting absence of objects

A BookStorage interface might declare methods for fetching individual information or fetching bulk information
```
class BookRepository{
    //Exclude storage code
    List<Book> getAllBooks(){
        //Code for bulk fetch
    }
    Book get (String isbn){

    }
}
```

Returning an "empty" array or an "empty" collection
* The

For single objects
* So far, null has been our empty object holder

This is what introduces the issues with NullPointerException

This can be done with another representation: Optional

Optionals
Represent a value that might be present
Uses generics: Optional<T> can represent any optional type.
An Optional 

# Creating Optionals

Optionals are constructed with one of three static factory methods

```
Optional<Book> optionalBook = repo.get(isbn);

if(optionalBook.isPresent()){
    Book book = optionalBook.get();
}

Book book = optionalBook.orElse(new Book(""))
```


Optionals should only be used as a return value

Optionals should not be used as parameters

In particular, it is fine to have nullable data in objects as private state
* This may or may not e