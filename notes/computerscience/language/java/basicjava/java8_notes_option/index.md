# Java8 Optional class


Optional class is a container for null. The primary design goal for Optional is to be used **as the return value of functions when a return value might be absent**. The intent is that the **caller immediately check the Optional and extract the actual value if it's present**. If the value is absent, **the caller can substitute a default value, throw an exception, or apply some other policy**. This is typically done by chaining fluent method calls off the end of a stream pipeline (or other methods) that return Optional values.



### Optional class Declartion

```java
public final class Optional<T> extends Object
```


### Optional class method

1. Return an empty option class
```java
static <T> Optional<T> empty()
```

**Example:**

```java
@Test
public void whenCreatesEmptyOptional_thenCorrect() {
  Optional<String> empty = Optional.empty();
  assertFalse(empty.isPresent());
}
```

2. 判断其他对象是否等于Optional
   
```java
boolean equals(Object obj)
```

1. optionObject.filter()
  
Filter takes a predicate as an argument and returns an Optional object. If the wrapped value passes testing by the predicate, then the Optional is returned as-is. if the predicate returns false, then it will return an empty Optional:

```java
Optional<T> filter(Predicate<? super <T> predicate)
```

**Example:**

```java
@Test
public void whenOptionalFilterWorks_thenCorrect() {
    Integer year = 2016;
    Optional<Integer> yearOptional = Optional.of(year);
    boolean is2016 = yearOptional.filter(y -> y == 2016).isPresent();
    assertTrue(is2016);
    boolean is2017 = yearOptional.filter(y -> y == 2017).isPresent();
    assertFalse(is2017);
}
```

```java
public boolean priceIsInRange2(Modem modem2) {
     return Optional.ofNullable(modem2)
       .map(Modem::getPrice)
       .filter(p -> p >= 10)
       .filter(p -> p <= 15)
       .isPresent();
 }
```

4. flatMap()
   
flatMap is similiar to map method. The difference is that map transforms values only when they are unwrapped whereas flatMap takes a wrapped value and unwraps it before transforming it.

```java
<U> Optional<U> flatMap(Function<? super T,Optional<U>> mapper)
```

```java
public class Person {
    private String name;
    private int age;
    private String password;
 
    public Optional<String> getName() {
        return Optional.ofNullable(name);
    }
 
    public Optional<Integer> getAge() {
        return Optional.ofNullable(age);
    }
 
    public Optional<String> getPassword() {
        return Optional.ofNullable(password);
    }
 
    // normal constructors and setters
}
```

Normal way of creating object
```java
Person person = new Person("john", 26);
Optional<Person> personOptional = Optional.of(person);
```

```java
@Test
public void givenOptional_whenFlatMapWorks_thenCorrect2() {
    Person person = new Person("john", 26);
    Optional<Person> personOptional = Optional.of(person);
 
    Optional<Optional<String>> nameOptionalWrapper  
      = personOptional.map(Person::getName);
    Optional<String> nameOptional  
      = nameOptionalWrapper.orElseThrow(IllegalArgumentException::new);
    String name1 = nameOptional.orElse("");
    assertEquals("john", name1);
 
    String name = personOptional
      .flatMap(Person::getName)
      .orElse("");
    assertEquals("john", name);
}
```

5. optionObject.get()

This method is to get the value inside Optional container

The purpose of Optional is to avoid any unforeseen exceptions. However, this method is against the purpose of optional

```java
T get()
```

```java
@Test
public void givenOptional_whenGetsValue_thenCorrect() {
  Optional<String> opt = Optional.of("baeldung");
  String name = opt.get();
  assertEquals("baeldung", name);
}
```

If get value is null
```java
@Test(expected = NoSuchElementException.class)
public void givenOptionalWithNull_whenGetThrowsException_thenCorrect() {
  Optional<String> opt = Optional.ofNullable(null);
  String name = opt.get();
}
```

1. 返回存在值的哈希码，如果值不存在 返回 0。

```java
int hashCode()
```

7. optionObject.ifPresent()

This method is to replace the null check in Java

```java
void ifPresent(Consumer<? super T> consumer)
```

**Example:**
```java
@Test
public void givenOptional_whenIfPresentWorks_thenCorrect() {
  Optional<String> opt = Optional.of("Test");
  opt.ifPresent(name -> System.out.println(name.length()));
}
```

8. optionObject.isPresent()

This method will return true if the value is presented in Option
   
```java
boolean isPresent()
```

**Example:**
```java
@Test
public void givenOptional_whenIsPresentWorks_thenCorrect() {
  Optional<String> opt = Optional.of("Test");
  assertTrue(opt.isPresent());
  opt = Optional.ofNullable(null);
  assertFalse(opt.isPresent());
}
```

in Java 11, we can use isEmpty method
```java
@Test
public void givenAnEmptyOptional_thenIsEmptyBehavesAsExpected() {
    Optional<String> opt = Optional.of("Baeldung");
    assertFalse(opt.isEmpty());
 
    opt = Optional.ofNullable(null);
    assertTrue(opt.isEmpty());
}
```

9. optionalObject.map()

The map method returns the result of the computation wrapped inside a Optional. The value passing in the map bracket should not be option. Otherwise flagMap() should be used.

```java
<U>Optional<U> map(Function<? super T,? extends U> mapper)
```

```java
@Test
public void givenOptional_whenMapWorks_thenCorrect2() {
    String name = "baeldung";
    Optional<String> nameOptional = Optional.of(name);
 
    int len = nameOptional
     .map(String::length)
     .orElse(0);
    assertEquals(8, len);
}
```

```java
@Test
public void givenOptional_whenMapWorksWithFilter_thenCorrect() {
    String password = " password ";
    Optional<String> passOpt = Optional.of(password);
    boolean correctPassword = passOpt.filter(
      pass -> pass.equals("password")).isPresent();
    assertFalse(correctPassword);
 
    // Use the map to clean the String value
    correctPassword = passOpt
      .map(String::trim)
      .filter(pass -> pass.equals("password"))
      .isPresent();
    assertTrue(correctPassword);
}
```

10.   **Optional.of(Object)**

if the value is null, then a NullPointerException will be thrown, else the value will be returned.

```java
static <T> Optional<T> of(T value)
```

**Example:**
```java
@Test
public void givenNonNull_whenCreatesNonNullable_thenCorrect() {
  String name = "Test";
  Optional<String> opt = Optional.of(name);
  assertTrue(opt.isPresent());
}
```


```java
@Test(expected = NullPointerException.class)
public void givenNull_whenThrowsErrorOnCreate_thenCorrect() {
  String name = null;
  Optional.of(name);
}
```

1.   **Optional.ofNullable(Object)**
    
```java
static <T> Optional<T> ofNullable(T value)
```

ofNullable(Object) will return empty if the value is null, else it will return that value

```java
@Test
public void givenNonNull_whenCreatesNullable_thenCorrect() {
  String name = "baeldung";
  Optional<String> opt = Optional.ofNullable(name);
  assertTrue(opt.isPresent());
}
```


```java
@Test
public void givenNull_whenCreatesNullable_thenCorrect() {
  String name = null;
  Optional<String> opt = Optional.ofNullable(name);
  assertFalse(opt.isPresent());
}
```

1.   orElse()

The orElse() method is used to return default value or function result. The default method will be executed even the wrapped value is there.

**Example:**
```java
@Test
public void whenOrElseWorks_thenCorrect() {
    String nullName = null;
    String name = Optional.ofNullable(nullName).orElse("john");
    assertEquals("john", name);
}
```


1.   orElseGet()

The orElseGet() method return a result of a supplier function interface

```java
T orElseGet(Supplier<? extends T> other)
```
**Example:**
```java
@Test
public void whenOrElseGetWorks_thenCorrect() {
  String nullName = null;
  String name = Optional.ofNullable(nullName).orElseGet(() -> "john");
  assertEquals("john", name);
}
```

**IMPORTANT!!**

If orElse() or orElseGet() method returns the default method, both are same

```java
@Test
public void whenOrElseGetAndOrElseOverlap_thenCorrect() {
    String text = null;
 
    String defaultText = Optional.ofNullable(text).orElseGet(this::getMyDefault);
    assertEquals("Default Value", defaultText);
 
    defaultText = Optional.ofNullable(text).orElse(getMyDefault());
    assertEquals("Default Value", defaultText);
}
```
**Output:**
```
Getting default value...
Getting default value...
```

**orElse() will run the default method, even the wrapped value is presented, which might waste resource**
Thus, develiper need to make sure the method present in orElse() is not time consuming.

```java
@Test
public void whenOrElseGetAndOrElseDiffer_thenCorrect() {
    String text = "Text present";
 
    System.out.println("Using orElseGet:");
    String defaultText 
      = Optional.ofNullable(text).orElseGet(this::getMyDefault);
    assertEquals("Text present", defaultText);
 
    System.out.println("Using orElse:");
    defaultText = Optional.ofNullable(text).orElse(getMyDefault());
    assertEquals("Text present", defaultText);
}
```

**Output:**
```java
Using orElseGet:
Using orElse:
Getting default value...

```



1.   orElseThrow()

The orElseThrow() method follows from orElse() and orElseGet() and adds a new approach for handling an absent value. Instead of returning a default value when the wrapped value is not present, it throws an exception:

```java
<X extends Throwable> T orElseThrow(Supplier<? extends X> exceptionSupplier)
```

**Example:**
```java
@Test(expected = IllegalArgumentException.class)
public void whenOrElseThrowWorks_thenCorrect() {
  String nullName = null;
  String name = Optional.ofNullable(nullName).orElseThrow(
    IllegalArgumentException::new);
}
```


1.  返回一个Optional的非空字符串，用来调试

```java
String toString()
```



