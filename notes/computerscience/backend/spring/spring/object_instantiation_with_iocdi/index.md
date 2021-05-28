# Spring Framework Notes 3 - Object Instantiation with IOC/DI


## Inverse of Control (IOC) and Dependency Injection

**Inversion of Control (IoC)**: Application get the objects that they need from an outside source.


**Dependency Injection (DI)**: Dependency Injection is one type of Inversion of Control. It allows the creation of dependent objects outside of a class and provides those objects to a class through constructor or through factory method.

#### Example

For example, a text editor want to have spell checking.

The standard code would look something like below:

```java
public class TextEditor {
    private SpellChecker checker;
    public TextEditor() {
        this.checker = new SpellChecker();
    }
}
```

The inverse controller code would look like below:

```java
public class TextEditor {

    private IocSpellChecker checker;

    public TextEditor(IocSpellChecker checker) {
        this.checker = checker;
    }
}
```

In the first code example we are instantiating SpellChecker `this.checker = new SpellChecker();`, which means the TextEditor class directly depends on the SpellChecker class.

In the second code example we are creating an abstraction by having the SpellChecker dependency class in TextEditor's constructor signature (not initializing dependency in class). This allows us to call the dependency then pass it to the TextEditor class like so:

```java
void main(){
   EnglishSpellChecker englishSpellChecker = new EnglishSpellChecker; // dependency
   FrenchSpellChecker frenchSpellChecker = new FrenchSpellChecker;

   // We can decide which spell checker being used
   TextEditor textEditor = new TextEditor(englishSpellChecker);
}
```

The client who create the TextEditor class has control over which SpellChecker implementation to use as this is injected into TextEditor signature

Spring uses dependency injection. The following is the implementation by both xml or java.

#### XML Implementation

The following XML declares two beans, an InventoryService bean and a ProductService bean, and wires the InventoryService bean into ProductService via a constructor argument:

```xml
<bean id="inventoryService" class="com.example.InventoryService" />

<bean id="productService" class="com.example.ProductService" />
    <constructor-arg ref="inventoryService" />
</bean>
```

#### Java Implementation

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

## Dependency Injection Inner Bean

There are two types of dependency injection in Spring.

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

The container can also use **type matching with types**, if you explicitly specify the type of the constructor argument using the type attribute. 

For example −

```xml
<beans>

   <bean id = "exampleBean" class = "examples.ExampleBean">
      <constructor-arg type = "int" value = "2001"/>
      <constructor-arg type = "java.lang.String" value = "Zara"/>
   </bean>

</beans>
```

Finally, **the best way** to pass constructor arguments, use the index attribute to specify explicitly the **index** of constructor arguments. Here, the index is 0 based. For example −

```xml
<beans>
   <bean id = "exampleBean" class = "examples.ExampleBean">
      <constructor-arg index = "0" value = "2001"/>
      <constructor-arg index = "1" value = "Zara"/>
   </bean>
</beans>
```


## Spring Injecting Collection

Java Collection class object can also be injected by using Spring Framework, see example below

```java
import java.util.*;

public class JavaCollection {
   List addressList;
   Set  addressSet;
   Map  addressMap;
   Properties addressProp;

   // a setter method to set List
   public void setAddressList(List addressList) {
      this.addressList = addressList;
   }
   
   // prints and returns all the elements of the list.
   public List getAddressList() {
      System.out.println("List Elements :"  + addressList);
      return addressList;
   }
   
   // a setter method to set Set
   public void setAddressSet(Set addressSet) {
      this.addressSet = addressSet;
   }
   
   // prints and returns all the elements of the Set.
   public Set getAddressSet() {
      System.out.println("Set Elements :"  + addressSet);
      return addressSet;
   }
   
   // a setter method to set Map
   public void setAddressMap(Map addressMap) {
      this.addressMap = addressMap;
   }
   
   // prints and returns all the elements of the Map.
   public Map getAddressMap() {
      System.out.println("Map Elements :"  + addressMap);
      return addressMap;
   }
   
   // a setter method to set Property
   public void setAddressProp(Properties addressProp) {
      this.addressProp = addressProp;
   }
   
   // prints and returns all the elements of the Property.
   public Properties getAddressProp() {
      System.out.println("Property Elements :"  + addressProp);
      return addressProp;
   }
}
```

```java

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
   public static void main(String[] args) {
      ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
      JavaCollection jc=(JavaCollection)context.getBean("javaCollection");

      jc.getAddressList();
      jc.getAddressSet();
      jc.getAddressMap();
      jc.getAddressProp();
   }
}
```



```xml
<?xml version = "1.0" encoding = "UTF-8"?>

<beans xmlns = "http://www.springframework.org/schema/beans"
   xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation = "http://www.springframework.org/schema/beans
   http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">

   <!-- Definition for javaCollection -->
   <bean id = "javaCollection" class = "com.JavaCollection">
      
      <!-- results in a setAddressList(java.util.List) call -->
      <property name = "addressList">
         <list>
            <value>INDIA</value>
            <value>Pakistan</value>
            <value>USA</value>
            <value>USA</value>
         </list>
      </property>

      <!-- results in a setAddressSet(java.util.Set) call -->
      <property name = "addressSet">
         <set>
            <value>INDIA</value>
            <value>Pakistan</value>
            <value>USA</value>
            <value>USA</value>
         </set>
      </property>

      <!-- results in a setAddressMap(java.util.Map) call -->
      <property name = "addressMap">
         <map>
            <entry key = "1" value = "INDIA"/>
            <entry key = "2" value = "Pakistan"/>
            <entry key = "3" value = "USA"/>
            <entry key = "4" value = "USA"/>
         </map>
      </property>
      
      <!-- results in a setAddressProp(java.util.Properties) call -->
      <property name = "addressProp">
         <props>
            <prop key = "one">INDIA</prop>
            <prop key = "one">INDIA</prop>
            <prop key = "two">Pakistan</prop>
            <prop key = "three">USA</prop>
            <prop key = "four">USA</prop>
         </props>
      </property>
   </bean>

</beans>
```



