# Java Notes(25) Stream 



## Stream Creation

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



### 中间操作符

map(mapToInt,mapToLong,mapToDouble) 转换操作符，把比如A->B，这里默认提供了转int，long，double的操作符。
flatmap(flatmapToInt,flatmapToLong,flatmapToDouble) 拍平操作比如把 int[]{2,3,4} 拍平 变成 2，3，4 也就是从原来的一个数据变成了3个数据，这里默认提供了拍平成int,long,double的操作符。
limit 限流操作，比如数据流中有10个 我只要出前3个就可以使用。
distint 去重操作，对重复元素去重，底层使用了equals方法。
filter 过滤操作，把不想要的数据过滤。
peek 挑出操作，如果想对数据进行某些操作，如：读取、编辑修改等。
skip 跳过操作，跳过某些元素。
sorted(unordered) 排序操作，对元素排序，前提是实现Comparable接口，当然也可以自定义比较器。


### 终止操作符
Stream 的一系列操作必须要使用终止操作，否者整个数据流是不会流动起来的，即处理操作不会执行。

数据经过中间加工操作，就轮到终止操作符上场了；终止操作符就是用来对数据进行收集或者消费的，数据到了终止操作这里就不会向下流动了，终止操作符只能使用一次。
collect 收集操作，将所有数据收集起来，这个操作非常重要，官方的提供的Collectors 提供了非常多收集器，可以说Stream 的核心在于Collectors。
count 统计操作，统计最终的数据个数。
findFirst、findAny 查找操作，查找第一个、查找任何一个 返回的类型为Optional。
noneMatch、allMatch、anyMatch 匹配操作，数据流中是否存在符合条件的元素 返回值为bool 值。
min、max 最值操作，需要自定义比较器，返回数据流中最大最小的值。
reduce 规约操作，将整个数据流的值规约为一个值，count、min、max底层就是使用reduce。
forEach、forEachOrdered 遍历操作，这里就是对最终的数据进行消费了。
toArray 数组操作，将数据流的元素转换成数组。


```
List<String> strings = Arrays.asList("abc", "", "bc", "efg", "abcd","", "jkl");
List<String> filtered = strings.stream().filter(string -> !string.isEmpty()).collect(Collectors.toList());
```
