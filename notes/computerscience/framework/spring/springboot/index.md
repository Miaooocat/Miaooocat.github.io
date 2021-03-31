# Difference in Spring and Spring Boot



Spring Boot is an extension of the Spring framework which eliminated the boilerplate configurations required for setting up a Spring application. This notes highlight the difference between Spring Boot and Spring.

## Maven Dependencies

Spring looks **minimum dependencies** required to create an web application.

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-web</artifactId>
    <version>5.2.9.RELEASE</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>5.2.9.RELEASE</version>
</dependency>
```

Spring Boot requires only one dependency:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <version>2.3.4.RELEASE</version>
</dependency>
```

Another example is related to testing library. In Spring, we use the set of Spring Test, JUnit, Hamcrest, and Mockito libraries. In a Spring project, we should add all these libraries as dependencies. But in Spring Boot, we only need the starter dependency for testing to automatically include these libraries.

## MVC Configuration

Spring requires defining the dispatcher servlet, mappings, and other supporting configurations. This can be completed by tiher web.xml or an initializer class.

```java
public class MyWebAppInitializer implements WebApplicationInitializer {
 
    @Override
    public void onStartup(ServletContext container) {
        AnnotationConfigWebApplicationContext context
          = new AnnotationConfigWebApplicationContext();
        context.setConfigLocation("com.baeldung");
 
        container.addListener(new ContextLoaderListener(context));
 
        ServletRegistration.Dynamic dispatcher = container
          .addServlet("dispatcher", new DispatcherServlet(context));
         
        dispatcher.setLoadOnStartup(1);
        dispatcher.addMapping("/");
    }
}
```

Also a @EnableWebMvc annotation need to add to a @Configuration class and define a view-resolver to resolve the views returned from the controllers:

```java
@EnableWebMvc
@Configuration
public class ClientWebConfig implements WebMvcConfigurer { 
   @Bean
   public ViewResolver viewResolver() {
      InternalResourceViewResolver bean
        = new InternalResourceViewResolver();
      bean.setViewClass(JstlView.class);
      bean.setPrefix("/WEB-INF/view/");
      bean.setSuffix(".jsp");
      return bean;
   }
}
```

By comparison, Spring Boot only needs a couple of properties to make things work, once we've added the web starter:

```
spring.mvc.view.prefix=/WEB-INF/jsp/
spring.mvc.view.suffix=.jsp
```

## Application Bootstrap

The basic difference in bootstrapping of an application in Spring and Spring Boot lies with the servlet. Spring uses either the web.xml or SpringServletContainerInitializer as its bootstrap entry point. On the other hand, Spring Boot uses only Servlet 3 features to bootstrap an application.

### Spring

Spring use web.xml approach in steps:
1.  Servlet container (the server) reads web.xml
2.  The DispatcherServlet defined in the web.xml is instantiated by the container
3.  DispatcherServlet creates WebApplicationContext by reading WEB-INF/{servletName}-servlet.xml
4.  Finally, the DispatcherServlet registers the beans defined in the application context


Spring bootstraps use servlet 3+ approach

1.  The container searches for classes implementing ServletContainerInitializer and executes
2.  The SpringServletContainerInitializer finds all classes implementing WebApplicationInitializer
3.  The WebApplicationInitializer creates the context with XML or @Configuration classes
4.  The WebApplicationInitializer creates the DispatcherServlet with the previously created context

### Spring boot

The entry point of a Spring Boot application is the class which is annotated with @SpringBootApplication:

```java
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

By default, Spring Boot uses an embedded container to run the application. In this case, Spring Boot uses the public static void main entry-point to launch an embedded web server.

Also, it takes care of the binding of the Servlet, Filter, and ServletContextInitializer beans from the application context to the embedded servlet container.

Another feature of Spring Boot is that it automatically scans all the classes in the same package or sub packages of the Main-class for components.

Spring Boot provides the option of deploying it as a web archive in an external container as well. In this case, we have to extend the SpringBootServletInitializer:

```java
@SpringBootApplication
public class Application extends SpringBootServletInitializer {
    // ...
}
```


Here the external servlet container looks for the Main-class defined in the META-INF file of the web archive and the SpringBootServletInitializer will take care of binding the Servlet, Filter, and ServletContextInitializer.


