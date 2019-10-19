---
title: 'Spring Implementation'
date: 2019-08-18 18:06:52
tags: 
- Web
categories: 
- Software Development
notshow: true
---

# Configuration

## Factory method
Spring incorporates a factory-method attribute which allows you to specify the factory responsible for creating an object
This can be internal or external to the object being created

```
<bean id=“bean” class=“com.MyFactory” factory-method=“createBean” scope=“prototype” />
```

Each time that bean is referenced it will actually call the factory method
If the factory method takes arguments, this can be specified by using the constructor-arg attribute


## Autowiring
Spring includes a feature called **autowiring**. This allows Spring to guess which dependencies to inject. This means you do not need to specify this manually. By default, it will check the class of the object. 

There are **4 types**
  - byName: Autowires by variable name and bean name
  - byType: Autowires by variable type and bean type
  - constructor: Autowires byType for constructors
  - autodetect: Autowires by constructor first and then byType
  
```
<bean id=“bean” class=“com.fdm.MyBean autowire=“byType” />
```
## Dependency
Class User might have two fields which must always be populated, but could have several field remaining unpopulated. Thus, there are need to check if the required fields are populated when Spring instantiates the beans. There are two solutions 
1. dependency-check attribute (deprecated)
   
2. @Required

### Dependency-check attribute
Dependency-check has different modes
  - **simple**: Ensures all primitive datatypes in a bean are set
  - **objects**: Ensures all Object datatypes in a bean are set
  - **all**: Ensures that all primitives and Objects in a bean are set
  
### @Required

@Required annotation allows fine control over **which properties should be set** and which should not. This annotation is **applied to the setter method** only.
If a property is listed as required but it is not set then Spring will throw an Exception that happens after compile time, but before run time.

```
public class User {
  private String username;

  @Required
  public void setUsername(String username){
    this.username = username;
  }
}
```

## Annotations
Annotations reduce the amount of work needed to be done in the xml
In order to use annotations you must have the following .xml configuration set

```
<context:annotation-config />
```

### Four key annotations to use in code
Annotations are **applied directly to class fields**. There are four types of annotations.
  - @Required (covered previously, should be annotated at setter method)
  - @Autowired
  - @Qualifier
  - @Resource

```
public class User{
  @Autowired
  private String username;
}
```
#### @Autowired
Also acts as @Required
Indicates that Spring should automatically inject a valid dependency into this field
Works byType

#### @Qualifier(“beanName”)
Provides an add-on to @Autowire. This Specifies the name of the bean to use.


### @Resource
This is a JSR-250 alternative to the spring annotations
Does not cause the program to couple to Spring
Acts as @Required, @Autowired and @Qualifier

```
public class User{
  @Resource(name=“name”)
  public String username
}
```

# Collection

Spring provides functionality for wiring collections
```
<map></map>
<list></list>
<array></array>
<props></props>
<set></set>
```
Makes injecting collections very straight forwards

Within the tags you should reference the bean or create the bean anonymously
This configuration works for list, set and array
```
<bean name=“myBean” class=“com.MyBean”>
  <property name=“myCollection”>
    <list>
      <ref bean=“myOtherBean” />
      ...
    </list>
  </property>
</bean>
```
```
<bean name=“myBean” class=“com.MyBean”>
  <property name=“myCollection”>
    <map>
      <entry key="Key 1" value="1" />
      <entry key="Key 2" value-ref="PersonBean" />
      <entry key="Key 3">
        <bean class="com.Person">
          <property name="name" value=“PersonX" />
        </bean>
      </entry>
    </map>
  </property>
</bean>
```

```
<bean name=“myBean” class=“com.MyBean”>
  <property name=“myCollection”>
    <props>
      <prop key=“MyValue”>TheStringValue</prop>
    </props>
  </property>
</bean>
```

Spring provides an additional namespace called util which can be used for generating collections of a specific type
```
<beans …
 xmlns:util=“http://www.springframework.org/schema/util”
  xsi:schemaLocation=“…
    http://www.springframework.org/schema/util
    http://www.springframework.org/schema/util/spring-util-3.1.xsd”>
  <bean name=“myBean” class=“com.fdm.MyBean”>
    <property name=“myCollection”>
      <util:set set-class=“java.util.TreeSet”>
        ...
      </util:set>
    </property>
  </bean>
</beans>
```

# Exception
Spring creates a well defined Exception called BeanCreationException
This Exception will be thrown if there are missing dependencies and various other issues which might occur
This Exception introduces an extra layer of protection by causing the application to fail early rather than late


Spring initialisation time happens after compile time, but before run time
