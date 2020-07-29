# Spring Framework Notes - Beans, BeanFactory and the ApplicationContext


## Bean

Bean represents as an objects in Java. Bean need to contain the following points:

### The Bean class

The class attribute in bean is normally **mandatory**. The creation of bean object is through BeanFactory. It has three approaches.

**The first approach** is where the BeanFactory itself **directly creates the bean by calling its constructor** (equivalent to Java code calling new), the class attribute specifies the class of the bean to be constructed. 

```xml
<bean id="exampleBean"
      class="examples.ExampleBean"/>
<bean name="anotherExample"
      class="examples.ExampleBeanTwo"/> 
```

**The second approach** is to call a **static**, so-called **factory method**. The class attribute specifies the actual class containing the static factory method. This method returns the wanted object.

```xml
<bean id="exampleBean"
      class="examples.ExampleBean2"
      factory-method="createInstance"/>
```

**The third approach** is to call an **instance factory method**. The xml file need specify the factory bean as well.

```xml
<!-- The factory bean, which contains a method called
     createInstance -->
<bean id="myFactoryBean"
      class="...">
  ...
</bean>
<!-- The bean to be created via the factory bean -->
<bean id="exampleBean"
      factory-bean="myFactoryBean"
      factory-method="createInstance"/>
```

### The bean identifiers (id and name)

Every bean has one or more ids (also called identifiers, or names; these terms refer to the same thing). These ids must be unique within the BeanFactory or ApplicationContext the bean is hosted in. A bean will almost always have only one id, but if a bean has more than one id, the extra ones can essentially be considered aliases.


### singleton or not to singleton (prototype)

Beans are defined to be deployed in one of two modes: **singleton(default)** or **non-singleton**. When a bean is a singleton, only one shared instance of the bean will be managed and all requests for beans with an id or ids matching that bean definition will result in that one specific bean instance being returned. The non-singleton, prototype mode of a bean deployment results in the creation of a new bean instance every time a request for that specific bean is done. 

Spring **cannot manage the complete lifecycle of a non-singleton/prototype bean**, since after it is created, it is given to the client and the container does not keep track of it at all any longer. 


```xml
<bean id="exampleBean"
      class="examples.ExampleBean" singleton="false"/>
<bean name="yetAnotherExample"
      class="examples.ExampleBeanTwo" singleton="true"/>
```


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
   <bean id = "textEditor" class = "com.tutorialspoint.TextEditor">
      <property name = "spellChecker" ref = "spellChecker"/>
   </bean>

   <!-- Definition for spellChecker bean -->
   <bean id = "spellChecker" class = "com.tutorialspoint.SpellChecker"></bean>

</beans>
```

**Constructor-based dependency injection** is realized by invoking a constructor with a number of arguments, each representing a collaborator or property. Additionally, calling a static factory method with specific arguments, to construct the bean, can be considered almost equivalent, and the rest of this text will consider arguments to a constructor and arguments to a static factory method similarly. Although Spring generally advocates usage of setter-based dependency injection for most situations, it does fully support the constructor-based approach as well, since you may wish to use it with pre-existing beans which provide only multi-argument constructors, and no setters. Additionally, for simpler beans, some people prefer the constructor approach as a means of ensuring beans cannot be constructed in an invalid state.

The BeanFactory supports both of these variants for injecting dependencies into beans it manages.
