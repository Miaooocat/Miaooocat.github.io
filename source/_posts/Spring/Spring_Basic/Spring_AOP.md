---
title: 'Spring Configuration'
date: 2019-08-14 18:06:52
tags: 
- Web
categories: 
- Software Development
notshow: true
---

# Aspect Oriented Programming

Another key component is the Aspect Oriented Programming(AOP framework. Aspect oriented programming addresses the problem of **cross-cutting concerns**, which would be any kind of code that is repeated in different method, but can't normally be completely refactored into its own module. Aspect oriented programming enables cohesive development by **separating business logic from cross-cutting concerns**. An example is like logging or verification.


# Proxy-based AOP
Spring uses one of AOP called proxy-based AOP. Spring builds proxy object around real object. The proxy object acts like our target object, while invoking other functionality in the background. In the implementation only proxy object will activate AOP functionality.

```
// Adding 	<aop:aspectj-autoproxy /> in xml file
Object obj = ctx.getBean("myObject");
obj.someMethod();
```
Calls that do not go through the proxy are not being watched by Spring
```
Object obj = new Object();
obj.someMethod();
```

# Terminology

Aspect: A combination of pointcuts and advice that demonstrates how a single or multiple cross cutting concerns are handled. In spring, aspects are implemented by using regular classes with @Aspect annotation

Join pont: A place in the code where advice can be placed. Any method can be a join point.

Pointcut: A specific pattern that will match a subset of join points. The “observed” code that advice methods can be applied to. 

Advice: The code(action) to handle a cross-cutting concern. It can be invoked at specified points

Weaving: Applying an aspect to a target object

Introduction: Dynamically adding a new method or attribute to an existing class



## XML-based AOP


## Annotation-based AOP