# Java Notes(8) String


String, in general, is a sequence of characters. But in Java, string is an object that represents a sequence of character. 

CharSequence Interface: The CharSequence interface is used to represent the sequence of characters. The Charsequence interface is extended in three class namely **String**, **StringBuffer**, and **StringBuilder** classes.

### String Class
1. By String literal
```
String s1 = "Welcome";
// This doesn't create a new instance.
String s2 = "Welcome"; 
```
In the above example, only one object will be created. Firstly, JVM will not find any string object with the value "Welcome" in string constant pool, that is why it will create a new object. After that it will find the string with the value "Welcome" in the pool, it will not create a new object but will return the reference to the same instance. 
This results that both **s1 == s2** and **s1.equal(s2)** return **true** value.

2. By new Keyword

```
String s1=new String("Welcome");
String s2=new String("Welcome");
s1 == s2 // return false
s1.equal(s2) // return true
```
In the above example, object will be created. There is some ambiguity of whether one or two object is created. 
In case of only one object being created, the object is created in non-pool heap memory. In case of two objects being created, the objects are created in both non-pool heap memory and and string constant pool.

```
//A new object is created if we modify the string
s2=s2.concat("world"); 
```
It will waste time and computation if we constantly modify the string. Thus, two new classes are introduced.

### StringBuffer Class
String buffer is slower than StringBuilder class but it is thread safe

```
public class Test{
  public static void main(String args[]){
    StringBuffer sBuffer = new StringBuffer("ABC");
    sBuffer.append("DEF");
    sBuffer.append("GHI");
    sBuffer.append("JKL");
    System.out.println(sBuffer);  
  }
}
```

### StringBuilder Class
String builder is fast but not thread safe.

```
public class Test{
  public static void main(String args[]){
    StringBuilder sBuilder=new StringBuilder("ABC");
    sBuffer.append("DEF");
    sBuffer.append("GHI");
    sBuffer.append("JKL");
    System.out.println(sBuilder);  
  }
}
```
