---
title: 'Java Study Notes(28) Java Stream'
date: 2019-07-03 13:12:17
tags: 
- Java
- Function Programming
categories: 
- Software Development
- Java Programming
notshow: true
---

# Overview

Stream is a new abstract layer introduced in Java 8. Stream represents a sequence of objects from a source, which supports aggregate operations. Following are the characteristics of a Stream 
* Sequence of elements: A stream provides a set of elements of specific type in a sequential manner. A stream gets/computes elements on demand. It never stores the elements
  
* Source: Stream takes Collections, Arrays, or I/O resources as input source.
  
* Aggregate operation: Stream supports aggregate operations like filter, map, limit, reduce, find, match and so on.
  
* intermediate method: Most of the stream operations return stream itself so that their result can be pipelined. These operations are called intermediate method. As a result we can chain zero or many calls to intermediate methods. collect() method is a termial operation which is normally present at the end of the pipelining operation
  
* Automatic iterations: Stream Operations do the iterations internally over the source elements provided in contrast to Collections where explicit iteration is required.

## Streams syntax

```
<R,A> R collect(Collector<? super T,A,R> collector)

Stream<T> filter(Predicate<? super T> predicate)

<R> Stream<R> map(Function<? super T,? extends R>mapper)
```


**.stream()** changes a list to a stream.
**.parallelStream()** Use multiple stream to increase the speed
**.filter()** take a boolean function to filter data.
**.collect()** change a stream to other output
* ex) .collect(Collectors.toList()) //Convert to list
* ex) .collector(Collectors.counting()) //Count number
  
**.distinct()** remove duplicate items

**.map(Data type::method)** change all the data based on one function
* ex) .map(Integer::valueOf)
* ex) .map(Employee::getSalary)
* ex) .map(e -> e.getSalary)

**limit(num)** Limit method is used to reduce the size of the stream. The following code segment shows how to print 10 random numbers using limit.

**sorted()** The 'sorted' method is used to sort the stream. The following code seg

**forEach** print every elements in a stream
```
Random random = new Random();
random.ints().limit(10).forEach(System.out::println);
```

```
ArrayList<Integer> numbers = new ArrayList<>();

numbers.stream().filter(n -> n%2 != 0);

List<Integer> filtered = stream.collect(Collectors.toList());
```
```
employeeList.stream()
            .map(Employee::getSalary)
            .distinct()
            .filter(n->n>80000)
            .collect(Collectors.counting());
```
