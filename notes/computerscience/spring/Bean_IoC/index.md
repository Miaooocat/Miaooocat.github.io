# Spring Notes 1: Spring Bean and IoC


## IoC container and Spring Bean

**IoC container** and **Spring bean** can be treated as **object factory** and **object** respectively.


### IoC Container


IoC can be instantiated through below method.

```java
ApplicationContext context = 
      new ClassPathXmlApplicationContext(new String[] {"services.xml", "daos.xml"});

// an ApplicationContext is also a BeanFactory (via inheritance)
BeanFactory factory = context;

// getBean() method can be used to test if context get required object 
Company company = context.getBean("company", Company.class);
```

Normally, we will create **application context** by **refer**ring to a **configuration class**.

```java
 AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
 ctx.register(AppConfig.class);
 ctx.refresh();
 MyBean myBean = ctx.getBean(MyBean.class);
```

or we can simplify this by **define** that in a **XML** (Spring boot).

```xml
 <beans>
    <context:annotation-config/>
    <bean class="com.acme.AppConfig"/>
 </beans>
```

or by **@Configuration** and **@ComponentScan** annotation

```java
 @Configuration
 @ComponentScan("com.acme.app.services")
 public class AppConfig {
     // various @Bean definitions ...
 }
```



### Bean

Bean represents as an objects in Java. There are several ways of define the bean. In general, the spring bean is defined in xml file with its required tag properties.


Example:
```xml
<bean id="exampleBean"
      class="examples.ExampleBean"/>
<bean name="anotherExample"
      class="examples.ExampleBeanTwo" scope="singleton"/> 
```

#### Spring bean tag properties

* **name/id**: Unique identifier. 

* **class**: Mandatory field which need to include full package name.

* **scope**: The scope value can be prototype, singleton, request, session, and global session.

* **constructor-arg**: Used to inject the dependencies through bean constructor. This can be replaced by @autowired.

* **properties**: This is to inject dependencies through setter method.

* **autowiring mode**: If allow spring to autowire the config.

* **lazy-init** (lazy-initialization mode): Spring bean normally being created when context being defined. This can be controled to have bean created when requested.

* **init-method** (initialization method): Specify a callback method to be called after creating the bean.

* **destroy-method** (destruction method): Specify a callback method to be called after creating bean destroyed.


