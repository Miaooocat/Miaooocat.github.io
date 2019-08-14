---
title: 'Java Study Notes(23) JSON and Jackson'
date: 2019-06-28 16:19:11
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---


JSON syntax is based on two constructs objects and arrays
    * Objects: sets of name(String)/value(String,number,boolean,null, Objects or Array) pairs
    * Arrays: ordered lists of values

# JSON

## JSON Object

Objects in JSON consist of name/value pairs surrounded by curly brack("{...}") and separated by commas

```
{
"name":"John Doe",
"Stream":"ITSM",
"academy":
    {
        "Location":"New York",
        "address":"14 Wall Street",
        "popUp":"false"
    },
    "signedOff" : false
}
```

## JSON Array

# Jackson 
- Previously "the standardJSON library for Java"
- Includes libraries to read and write JSON(as well as other data formats)
  - includes data-binding and streaming functionality
    - Data-binding
    - Streaming

## ObjectMapper class
The ObjectMapper class in Jackson provides a customizable entry point for reading/writing JSON from a java application
    * readValue(...) can be used to deserialize JSON
    * writeValue(...) can be used to serialize Java objects

## Annotations