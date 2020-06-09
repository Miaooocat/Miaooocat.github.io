---
title: 'FreeMarker'
date: 2020-03-30 13:59:52
tags: 
- Java
categories: 
- Software Development
notshow: true
---

Apache FreeMarker is a template engine follows the MVC (Model View Controller) pattern to generate text output (HTML web pages, e-mails, configuration files, source code, etc.) based on templates and changing data.

# Relationship between Template, Java Objects, and Output

## Template

```html
<html>
...
Hello $(name)!
...
</html>
```

## Java objects
```java
model.setName("World");
```

## Output
```html
<html>
...
Hello World!
...
</html>
```


 

# Template 

A template is a mix of the following sections:
* **Text**: Text that will be printed to the output as is.
* **Interpolation**: These sections will be replaced with a calculated value in the output. Interpolations are delimited by ${  }
* **FTL tags**: FTL tags are a bit similar to HTML tags, but they are not instructions to FreeMarker and will not be printed to the output
* **Comments**: Comments are similiar to HTML comments, but they are delimited by <#-- and -->. Comments will be ignored by FreeMarker.

```html
<html>
<head>
    <title>Welcome!</title>
</head>
<body>
    <#-- This is a comment -->
    <h1>Weclome ${user}!</h1>  <#-- user is an interpolation-->
    <p>We have these animals</p>
    <ul>
    <#list animals as animal>
        <li>${animal.name} for ${animal.price} Euros
    </#list>
    </ul>
</body>
</html>
```
FTL is case sensitive. So, **list** is good directive name, while **List** is not. Similiarly ${name} is not the same as ${Name} or ${NAME}.
Interpolations can only be used in text.
An FTL tag can't be inside another FTL tag nor inside an interpolation. 
Comments can be placed inside FTL tags and Interpolations.



# Directives

The FTL tags is used to call directives. The syntax follows:
```
<#directivename parameters>
<#directivename>
```

## List



## Boolean

```html
<# if cargo.weight < 100 > Light cargo </#if>
```
