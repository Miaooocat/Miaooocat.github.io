---
title: 'Java ServerPages (JSP)'
date: 2019-08-06 18:06:52
tags: 
- Java
- Web
categories: 
- Software Development
- Java Programming
notshow: true
---

# What is JSP?
Java Server Pages technology (JSP) is a server-side programming language used to create a dynamic web page in the form of HyperText Markup Language (HTML). JSP page is internally converted to servelt. It provides some additional features such as Expression Language(EL), Custom Tags(XML-style tags) that provides more concise developement. 

# Where to use it?

In a standard java EE MVC application, Servlets are typically used as the **Controller** and JSPs are used as the **View**. Why?

Servlet is easy to control model, as both are written in Java code. However, it is hard to read. It must print HTML as Strings to response stream.

JSP is Java code embedded in special tags and mixed with HTML. So it is hard to control other Java code. Since JSP is primarily written in HTML. Thus, it could replace view easiliy.


# How to use it

## JSP Life Cycle
JSPs have a similar lifecycle to servlets
1. A client requests a JSP page (www.example.com/index.jsp)
2. The JSP engine translates the page into a Java servlet (index_jsp.java)
3. The Java servlet file is compiled (index_jsp.class)
4. The web container loads the servlet, instantiates it and calls the jspInit() method
5. _jspService() can now be called to service this request and all subsequent requests to this JSP
6. When _jspService() is invoked, an output HTML file is generated and sent back to the client's browser

## JSP Scripting
There are four types of tags.
```
<% %> - Scriplet 
<%= %> - Expression
<%! %> - Declartion
<%@ %>   - Directive
```

### JSP tags - Scriptlets
A scriptlet tag allows other language code to be incorporated into the JSP. This code will be in the body of _jspService().

To make it as java code, we need to include 
```
%@page language="java"%>
```

```
<%@ page import="java.util.Random" %>
<body>
    <%
        int randomValue = new Random().nexInt(10);
        if (randomValue == 7){
            out.println(randomValue + "is 7! You win!");
        }
        else {
            out.println(randomValue + "is not 7. You lose.")
        }
    %>
</body>
```

### JSP tags - Expressions
An expression tag obtains the value of either a variable or a return value of a method
    - Value is converted to a String
    - Automatically printed to the HTML response

```
<p> The maximum of 2 and 3 is: <%= Math.max(2,3)%> </p>
```
### JSP tags - Declarations
A declaration tag declares variables/methods outside the _jspService() method. They can be static if required.

The method and variable declaration will go outside _jspService(). The invoking the method in an expression will go inside _jspService()

```
<!-- Declare the method -->
<%!
public boolean isEven (int num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}
%>
<!-- invoking the method -->
<%= isEven(21) %>
```

### JSP tags - Directives
Directive tags control how a JSP is processed.

```
<!-- Imports classes to be used by Scriptlet or Declarative tags -->

<%@ page import="java.util.Random,com.ServletExample">
```

```
<!-- Includes the contents of another file, which is parsed as a JSP -->

<%@ include file="pathname" %>
```

```
<!-- ErrorPage: if an error occurs during JSP parsing, 
the user will automatically be dircted towards the error page -->

<%@ page errorPage = "pathname" %>
```

# Expression Language(EL)

The JSP Expression Language (EL) provides a way to retrieve data **without the use of expression tags**. This is an alternation for Expression tag.
```
${ code }
```
EL allows retrieval of:
    - Values stored in maps(attributes, parameters)
    - Values stored in lists or arrays
    - Properties of objects following the JavaBean convention


# JSP Tag Library 
A tag library is a collection of customised tags that represent calls to Java methods.

To make use of a tag in tag library, the taglib directive is needed:
```
<%@ taglib uri = "/mytaglib.tld" prefix="mtl" %>

- uri denotes an identifier for the TLD (tag library desciptor)
- prefix denotes the prefix you will use for tags from this tag library
```

A tag handler is a Java class that is responsible for handling calls.
```
<!-- Sample tag without body -->
<mtl:tagname attribute1="value"/>
```

When the JSP is translated, the presence of the above tag will invoke a method of the tag handler
- Tag attribute and body data will be passed to the method

```
<!-- Sample tag with body -->
<mtl:tagname attribute1="value" attribute2="value">
    body content
</mtl:tagname>
```

## JSTL
JSP Standard Tag Library is a collection of tags that represent calls to Java methods. To use JSTL, a maven dependency should be included. In addition to that, the following code should be add at the top of the jsp code

```
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
```
To use JSTL helps to improves 

- Improves readability (for both humans and computers)
- No messy scritlet tags mixed with HTML content
- Front-end developers can code JSPs without needing to know Java


## Scripting vs. JSTL
```
<%= "hello world" %>
<c:out value ="hello world">
```

```
<% if (2==2){ %>
    The result is true
<% } %>
```

# Attributes
Attributes are String to Object mappings used to share data between web app components.

Add attributes to the HttpServletRequest object in a Servlet.
```
request.setAttribute("currentGuest", UserManager.getUser(username));
```

Retrieve them when access HttpServletRequest
```
User myUser = request.getAttribute("currentGuest");
```
