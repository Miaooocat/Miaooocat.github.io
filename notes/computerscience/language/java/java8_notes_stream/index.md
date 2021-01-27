# Java8 Stream 



A stream represents a sequence of elements and supports different kind of operations to perform computations upon those elements:

```java
List<String> myList =
    Arrays.asList("a1", "a2", "b1", "c2", "c1");

myList
    .stream()
    .filter(s -> s.startsWith("c"))
    .map(String::toUpperCase)
    .sorted()
    .forEach(System.out::println);
```

## Stream Creation

Calling the method stream() on a list of objects returns a regular object stream. 

```java
Arrays.asList("a1", "a2", "a3")
    .stream()
    .findFirst()
    .ifPresent(System.out::println);
```
But we don't have to create collections in order to work with streams as we see in the next code sample Stream.of().

```java
Stream.of("a1", "a2", "a3")
    .findFirst()
    .ifPresent(System.out::println);  // a1
```
Stream.of() to create a stream from a bunch of object references.

### Primitive Streams

Besides regular object streams Java 8 ships with special kinds of streams for working with the primitive data types int, long and double. As you might have guessed it's IntStream, LongStream and DoubleStream.

IntStreams can replace the regular for-loop utilizing IntStream.range():

```java
IntStream.range(1, 4)
    .forEach(System.out::println);
```


### Empty Stream

```java
	Stream<String> streamEmpty = Stream.empty();
```

```java
public Stream<String> streamOf(List<String> list) {
  return list == null || list.isEmpty() ? Stream.empty() : list.stream();
}
```

### Stream of Collection

```java
Collection<String> collection = Arrays.asList("a", "b", "c");
Stream<String> streamOfCollection = collection.stream();
```


### Stream of Array

Array can also be a source of a Stream:

```java
Stream<String> streamOfArray = Stream.of("a", "b", "c");
```
They can also be created out of an existing array or of a part of an array:

```java
String[] arr = new String[]{"a", "b", "c"};
Stream<String> streamOfArrayFull = Arrays.stream(arr);
Stream<String> streamOfArrayPart = Arrays.stream(arr, 1, 3);
```

### Stream.builder()

When builder is used the desired type should be additionally specified in the right part of the statement, otherwise the build() method will create an instance of the Stream<Object>:

```java
Stream<String> streamBuilder =
  Stream.<String>builder().add("a").add("b").add("c").build();
```

### Stream.generate()

The generate() method accepts a Supplier<T> for element generation. As the resulting stream is infinite, developer should specify the desired size or the generate() method will work until it reaches the memory limit:

```java
Stream<String> streamGenerated =
  Stream.generate(() -> "element").limit(10);
```


### Stream.iterate()

Another way of creating an infinite stream is by using the iterate() method:

```java
Stream<Integer> streamIterated = Stream.iterate(40, n -> n + 2).limit(20);
```
The first element of the resulting stream is a first parameter of the iterate() method. For creating every following element the specified function is applied to the previous element. In the example above the second element will be 42.


### Stream of Primitives

Java 8 offers a possibility to create streams out of three primitive types: int, long and double. As Stream<T> is a generic interface and there is no way to use primitives as a type parameter with generics, three new special interfaces were created: IntStream, LongStream, DoubleStream.

Using the new interfaces alleviates unnecessary auto-boxing allows increased productivity:

```java
IntStream intStream = IntStream.range(1, 3);
LongStream longStream = LongStream.rangeClosed(1, 3);
```

The **range(int startInclusive, int endExclusive)** method creates an ordered stream from the first parameter to the second parameter. It increments the value of subsequent elements with the step equal to 1. The result doesn't include the last parameter, it is just an upper bound of the sequence.

The **rangeClosed(int startInclusive, int endInclusive)** method does the same with only one difference – the second element is included. These two methods can be used to generate any of the three types of streams of primitives.

Since Java 8 the Random class provides a wide range of methods for generation streams of primitives. For example, the following code creates a DoubleStream, which has three elements:

```java
Random random = new Random();
DoubleStream doubleStream = random.doubles(3);
```

### Stream of String

String can also be used as a source for creating a stream.

With the help of the chars() method of the String class. Since there is no interface CharStream in JDK, the IntStream is used to represent a stream of chars instead.

```java
IntStream streamOfChars = "abc".chars();
```

The string can be breaked into substring according to specified RegEx:

```java
Stream<String> streamOfString =
  Pattern.compile(", ").splitAsStream("a, b, c");
```

### Stream of File

Java NIO class Files allows to generate a Stream<String> of a text file through the lines() method. Every line of the text becomes an element of the stream:

```java
Path path = Paths.get("C:\\file.txt");
Stream<String> streamOfStrings = Files.lines(path);
Stream<String> streamWithCharset = 
  Files.lines(path, Charset.forName("UTF-8"));
```
The Charset can be specified as an argument of the lines() method.

```
List<String> strings = Arrays.asList("abc", "", "bc", "efg", "abcd","", "jkl");
List<String> filtered = strings.stream().filter(string -> !string.isEmpty()).collect(Collectors.toList());
```

## Intermediate and Termial Operation

Stream operations are either **intermediate** or **terminal**. Intermediate operations return a stream so we can chain multiple intermediate operations without using semicolons. Terminal operations are either void or return a non-stream result. In the above example filter, map and sorted are intermediate operations whereas forEach is a terminal operation.

Streams can be created from various data sources, especially collections. Lists and Sets support new methods stream() and parallelStream() to either create a sequential or a parallel stream.

### Intermediate Operation

**map**(mapToInt,mapToLong,mapToDouble) It allows elements of a Stream to be transformed into something else by mapping them to another value or type
**flatmap**(flatmapToInt,flatmapToLong,flatmapToDouble):  It taking a Function that goes from a type T to a return type R. Thre result stream are flattened.
**limit** it creates a new stream that only contains the first n elements of the stream it is applied on.
**distint** filter out any duplicates by using equal method
**filter**: Filter elements out in a stream.
**Skip**：Skip the number of elements in the device
**peek** 挑出操作，如果想对数据进行某些操作，如：读取、编辑修改等。
**sorted**: Sorted by using natural order or defined comparator.

### Termial Operation

**collect**: To build data structures containing a specific collection of elements. 
  
- Collect to Set
  
```java
.collect(Collectors.toSet())
```

- Collect to List

```java
.collect(Collectors.toList())
```

- Collect to General Collection
  
```java
.collect(Collectors.toCollection(LinkedList::new))
.collect(Collectors.toCollection(LinkedHashSet::new))
.collect(Collectors.toCollection(PriorityQueue::new))
```

- Collect to Array

```java
.toArray(String[]::new)
```

- Collect to Map

Collectors.toMap() takes two Functions corresponding to a key-mapper and a value-mapper

```java
.collect(Collectors.toMap(,))
```

- Collect GroupingBy

There is a very useful Collector named groupingBy() which divides the elements into different groups, depending on some property whereby the property is extracted by something called a "classifier". 

```java
.collect(Collectors.groupingBy(,))
```

- Collect GroupingBy Using Downstream Collector
There is an overloaded version of groupingBy() that allows the use of a custom "downstream collector" to get better control over the resulting Map. Below is an example of how the special downstream collector counting() is applied to count, rather than collecting, the elements of each bucket.

```java
.collect(Collectors.groupingBy(s -&gt;s.charAt(0),counting()))
```

**count** count the number of element in a Stream.

**findFirst、findAny** 查找操作，查找第一个、查找任何一个 返回的类型为Optional。
**noneMatch、allMatch、anyMatch** 匹配操作，数据流中是否存在符合条件的元素 返回值为bool 值。
**min,max,average**: return the aggregate value of a stream
**reduce** 规约操作，将整个数据流的值规约为一个值，count、min、max底层就是使用reduce。
**forEach、forEachOrdered**: They both take a Consumer and terminates the Stream without returning anything. 
**toArray** 数组操作，将数据流的元素转换成数组。
**anyMatch()**: return a boolean to see if the value existed

## Reference

Java 8 Stream Tutorial
https://winterbe.com/posts/2014/07/31/java8-stream-tutorial-examples/

Become a Master of Java Streams, Part 3: Terminal Operations
https://dzone.com/articles/become-a-master-of-java-streams-part-1-creating-st
https://dzone.com/articles/become-a-master-of-java-streams-part-2-intermediat
https://dzone.com/articles/become-a-master-of-java-streams-part-3-terminal-op
