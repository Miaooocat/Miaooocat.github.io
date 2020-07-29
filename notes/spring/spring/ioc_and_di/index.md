# Spring Framework Notes - IOC/DI


## Inverse of Control (IOC) and Dependency Injection

Dependency Injection (DI) and inversion of Control are a design pattern. It allows the creation of dependent objects outside of a class and provides those objects to a class through different ways.

The basic principle is that beans define their dependencies (i.e. the other objects they work with) only through constructor arguments, arguments to a factory method, or properties which are set on the object instance after it has been constructed or returned from a factory method. 

For example, say your application has a text editor component and you want to provide spell checking. 

The standard code would look something like this:
```java
public class TextEditor {
    private SpellChecker checker;
    public TextEditor() {
        this.checker = new SpellChecker();
    }
}
```

The inverse controller code would look like this 
```java
public class TextEditor {

    private IocSpellChecker checker;

    public TextEditor(IocSpellChecker checker) {
        this.checker = checker;
    }
}
```
In the first code example we are instantiating SpellChecker (this.checker = new SpellChecker();), which means the TextEditor class directly depends on the SpellChecker class.

In the second code example we are creating an abstraction by having the SpellChecker dependency class in TextEditor's constructor signature (not initializing dependency in class). This allows us to call the dependency then pass it to the TextEditor class like so:

```java
SpellChecker sc = new SpellChecker; // dependency
TextEditor textEditor = new TextEditor(sc);
```
The client who create the TextEditor class has control over which SpellChecker implementation to use as this is injected into TextEditor signature


Spring use inverse of control and dependency injection. The following is the implementation by both xml or java

### XML Implementation
The following XML declares two beans, an InventoryService bean and a ProductService bean, and wires the Inven- toryService bean into ProductService via a constructor argument:

```xml
<bean id="inventoryService" class="com.example.InventoryService" />

<bean id="productService" class="com.example.ProductService" />
    <constructor-arg ref="inventoryService" />
</bean>
```


### Java Implementation
The @Configuration annotation indicates to Spring that this is a configuration class that will provide beans to the Spring application context. The configuration’s class methods are annotated with @Bean, indicating that the objects they return should be added as beans in the application context.
```java
@Configuration
public class ServiceConfiguration {
  @Bean
  public InventoryService inventoryService() {
    return new InventoryService();
  }
  @Bean
  public ProductService productService() {
    return new ProductService(inventoryService());
  }
}
```

## Dependency Injection Type
There are two types of dependency injection in Spring

### Type 1 Setter-based dependency injection
**Setter-based dependency injection** is accomplished by the container calling setter methods on your beans after invoking a no-argument constructor or no-argument static factory method to instantiate your bean.

```java
public class TextEditor {
   private SpellChecker spellChecker;

   // a setter method to inject the dependency.
   public void setSpellChecker(SpellChecker spellChecker) {
      System.out.println("Inside setSpellChecker." );
      this.spellChecker = spellChecker;
   }
   // a getter method to return spellChecker
   public SpellChecker getSpellChecker() {
      return spellChecker;
   }
   public void spellCheck() {
      spellChecker.checkSpelling();
   }
}
```

```java
public class SpellChecker {
   public SpellChecker(){
      System.out.println("Inside SpellChecker constructor." );
   }
   public void checkSpelling() {
      System.out.println("Inside checkSpelling." );
   }
}
```

```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
   public static void main(String[] args) {
      ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
      TextEditor te = (TextEditor) context.getBean("textEditor");
      te.spellCheck();
   }
}
```

```xml
<?xml version = "1.0" encoding = "UTF-8"?>

<beans xmlns = "http://www.springframework.org/schema/beans"
   xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation = "http://www.springframework.org/schema/beans
   http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">
   
   <!-- Definition for textEditor bean -->
   <bean id = "textEditor" class = "com.TextEditor">
      <property name = "spellChecker" ref = "spellChecker"/>
   </bean>

   <!-- Definition for spellChecker bean -->
   <bean id = "spellChecker" class = "com.SpellChecker"></bean>
</beans>
```

### Type 2 Constructor-based dependency injection

**Constructor-based dependency injection** is accomplished when the container invokes a class constructor with a number of arguments, each representing a dependency on the other class.

```java
public class TextEditor {
   private SpellChecker spellChecker;
   public TextEditor(SpellChecker spellChecker) {
      System.out.println("Inside TextEditor constructor." );
      this.spellChecker = spellChecker;
   }
   public void spellCheck() {
      spellChecker.checkSpelling();
   }
}
```

```java
public class SpellChecker {
   public SpellChecker(){
      System.out.println("Inside SpellChecker constructor." );
   }
   public void checkSpelling() {
      System.out.println("Inside checkSpelling." );
   }
}
```

```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
   public static void main(String[] args) {
      ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");

      TextEditor te = (TextEditor) context.getBean("textEditor");
      te.spellCheck();
   }
}
```

```xml
<?xml version = "1.0" encoding = "UTF-8"?>

<beans xmlns = "http://www.springframework.org/schema/beans"
   xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation = "http://www.springframework.org/schema/beans
   http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">

   <!-- Definition for textEditor bean -->
   <bean id = "textEditor" class = "com.TextEditor">
      <constructor-arg ref = "spellChecker"/>
   </bean>
   <!-- Definition for spellChecker bean -->
   <bean id = "spellChecker" class = "com.SpellChecker"></bean>
</beans>
```

#### Constructor arguments resolution
The order in which the constructor arguments are defined in a bean definition is the order in which those arguments are supplied to the appropriate constructor.

```java
public class Foo {
   public Foo(Bar bar, Baz baz) {
      // ...
   }
}
```

```xml
<beans>
   <bean id = "foo" class = "x.y.Foo">
      <constructor-arg ref = "bar"/>
      <constructor-arg ref = "baz"/>
   </bean>

   <bean id = "bar" class = "x.y.Bar"/>
   <bean id = "baz" class = "x.y.Baz"/>
</beans>
```

```java
public class Foo {
   public Foo(int year, String name) {
      // ...
   }
}
```

The container can also use type matching with simple types, if you explicitly specify the type of the constructor argument using the type attribute. For example −

```xml
<beans>

   <bean id = "exampleBean" class = "examples.ExampleBean">
      <constructor-arg type = "int" value = "2001"/>
      <constructor-arg type = "java.lang.String" value = "Zara"/>
   </bean>

</beans>
```

Finally, **the best way** to pass constructor arguments, use the index attribute to specify explicitly the index of constructor arguments. Here, the index is 0 based. For example −

```xml
<beans>
   <bean id = "exampleBean" class = "examples.ExampleBean">
      <constructor-arg index = "0" value = "2001"/>
      <constructor-arg index = "1" value = "Zara"/>
   </bean>
</beans>
```

