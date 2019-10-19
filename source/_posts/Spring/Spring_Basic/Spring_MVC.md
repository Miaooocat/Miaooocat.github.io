---
title: 'Spring MVC'
date: 2019-08-17 12:06:52
tags: 
- Web
- Java
categories: 
- Software Development
notshow: true
---

# MVC Recap
**Model**: Contains business logic and custom objects
**View**: Generates output representations for the user
**Controller**: Sends commands to the model and the view and passes objects around where required


# Spring MVC Introduction
Spring MVC is a spring's web framework. It implements the Front Controller pattern (Java EE pattern)
  - All requests are addressed to a central servlet
  - The servlet delegates requests to controller classes
  - Controllers do the request handling work
  - In Spring, this “central servlet” is known as the DispatcherServlet
Facilitates working with Servlets and JSP
  - No need to create a Servlet for each command

## Advantage of using Spring MVC
  - Encourages use of best practices and SOLID

  - Separation of concerns
    - Each role (controller, validator, servlet, view, model objects, etc.) can be fulfilled by a specialized object.

  - Simplification
    - Easy to configure.
    - Far fewer servlet mappings.
  - Form binding
    - Allows us to bind an object to a Spring form directly.
    - Spring populates the object with form data automatically, instead of having to retrieve form parameters one by one.


# Implementation
To make a spring MVC to work, we need to configue in the following files.

- pom.xml (for Maven) (ojdbc6, c3p0, hibernate-core, hibernate-c3p0, javax.servlet-api, jstl, spring-core, spring-context, spring-beans, spring-webmvc)
- persistence.xml (for database) (JPA hibernate)
- web.xml (for web servlet)
- dispatcher-servlet.xml (for spring bean)


## web.xml file 
DispatcherServlet is a Spring-provided class that extends HttpServlet. Like any servlet, it must be mapped in a web.xml:
```
<servlet>
    <servlet-name>dispatcher</servlet-name>
    <servlet-class>
        org.springframework.web.servlet.DispatcherServlet
    </servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>dispatcher</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```
servlet-name tag is important! Spring will try to load the application context from a file named servlet-name-servlet.xml inside WEB-INF.

## dispatcher-servlet.xml file

### Annotation
For annotation to work, we need to include this line in 
```
<context:annotation-config />
```
This will activate Spring Web MVC annotation scanning and will look for annotated classes in the given package.

### JSP and view

In order to obtain the view to send to the client, Spring consults a view resolver.

```
<bean class=
	"org.springframework.web.servlet.view.InternalResourceViewResolver">
    <property name="viewClass" value="org.springframework.web.servlet.view.JstlView" />
    <property name="prefix" value="/WEB-INF/views/" />
    <property name="suffix" value=".jsp" />
</bean>
```

## Controller
DispatcherServlet delegates request handling to regular Java classes:
  - @Controller marks these classes
  - @RequestMapping maps a URL to a method
        value: 		specifies mapped URL 
        method: 	specifies HTTP method
  - Methods return a String (logical name of the view to respond with)

```
@Controller
public class HomeController {

    @RequestMapping(value=“/register”, method=RequestMethod.POST)
    public String goToRegisterPage(){
        return “registration”;
    }
}
```
@RequestMapping(“/register”) can also be used, if we wish to specify only the URL.
```
@Controller
    public class HomeController {
        @RequestMapping(“/register”)
        public String goToRegisterPage(){
            return “registration”;
        }
    }
```

Methods annotated with @RequestMapping can take any number or type of parameters, as needed. For example:
  - An HttpServletRequest to access request data
  - Strings representing specific request parameters
  - A model object such as a User
  - Various others
  
```
@Controller
public class HomeController {
    @RequestMapping(“/register”)
    public String goToRegisterPage(HttpServletRequest req){
		String type = req.getParameter("userType");
		log(“Redirecting to registration page for “+type);
        return type+"registration";
    }
```

## @RequestParam -- An alternative way to get parameter from JSP page
Usually we get form parameters from the HttpServletRequest object:	
    req.getParameter(“paramName”);

Spring provides an **alternate way** using **@RequestParam**
```
@Controller
public class HomeController {
    @RequestMapping(“/register”)
    public String goToRegisterPage(@RequestParam String username){
        return “register/” + username;
    }
}
```
The request parameter could be stored into another string name
In the following code, the content in username variable is stored in the name
```
@Controller
public class HomeController {
    @RequestMapping(“/register”)
    public String goToRegisterPage(@RequestParam(value=“username”) String name){
        return “register/” + name;
    }
}
```

## @PathVariable
Binds a variable in the URL (a placeholder in the request mapping) to a method parameter
User-submitted data (such as a search term) can be displayed on the URL
```
@Controller
public class LibraryController {
    @RequestMapping(“/find/{title}”)
    public String getBook(@PathVariable String title){
        ...
    }
}
```
## Attributes
Spring facilitates how we pass around application data with the Model object:

```
@Controller
public class LibraryController {
    @RequestMapping(“/register”)
    public String goToRegisterPage(Model model){
        model.addAttribute(“attributeName”, new User());
        return “register”;
    }
}
```
This will become an attribute in the request scope, accessible by 
```
${attributeName}
${requestScope.attributeName}
```

## Spring Forms
Spring Forms is a feature that allows us to bind an object directly to a form on a view.
Normally, we would manually retrieve each piece of user data from a request:

```
<form action=“register” method=“POST”>
    Username: <input type=“text” name=“username” />
    Password: <input type=“password” name=“password” />	
    <input type=“submit” value=“Click Here” />
</form>
```

```
req.getParameter(“username”);
req.getParameter(“password”);
```
Spring form simplifies this process. Before using spring form on a JSP, we need to include to library in the jsp page.
```
<%@ taglib prefix=“s” uri=“http://www.springframework.org/tags” %>
<%@ taglib prefix=“sf” uri=“http://www.springframework.org/tags/form” %>
```
Additionally, the JSP must be passed the **modelAttribute object** (to which to bind the form) when it is first loaded!
```
@RequestMapping("/register")
public String goToRegisterPage(Model model){
     model.addAttribute("user", new User());
     return "registration";
}
```

```
<sf:form action="process" method="POST" modelAttribute="user">
    <sf:label path="username"> Username </sf:label>
    <sf:input type="text" path=“username” />
    <sf:label path="password"> Password </sf:label>	
    <sf:input type="password" path="password" />
    <input type="submit" value="Click Here" />
</sf:form>
```

**sf** is the tag library prefix, but we can use any prefix.
**modelAttribute** specifies the name of the Model attribute that holds the object this form will be bound to.
**path** specifies the property of the object to which a particular input is bound.

To retrieve the data
```
@RequestMapping(value=“/process”, method=“RequestMethod.POST) 
public String register(User user){
    log(user.getUsername()+” has registered!”);
    return “confirmation”;
}
```
This User object is populated with the data from the form!

