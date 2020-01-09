---
title: 'Spring Integration - Overview'
date: 2019-09-16 19:51:52
tags: 
- Spring
- Java
categories: 
- Software Development
- Framework
notshow: true
---

# Summary
Spring Integration is an open source framework that designed to enable the development of integration solutions typical of **event-driven architectures** and **messaging-centric architectures**


# Dependency
It requires two dependencies **spring intergration core** and **spring integration file**, which could be downloaded from Maven Central. 


# Core concepts of Spring

Spring integration framework consists three parts, namely **message**, **message channel**, and **message endpoint**. In general. a **message** is a unit of information that can be passed between different **message endpoint** through **message channels**.




### Message Endpoint
Its target is to connect in a non-invasive manner, the application with the messaging framework. The endpoint will be mapped to a message channel in the same way the MVC controller is mapped to a URL pattern.

### Channel adapter -- Connects the application to an external system (Unidirectional)
The channel adapter is the endpoint that allows your application to connect with external systems.
There are four types of adapters

#### Inbound channel adapter 
It receives a message from an external system. It then enters to our messaging system through a message channel, where we will handle it.

#### Outbound channel adapter: 
Our message system creates a message and sends it to an external system.

### Gateway -- Connects the application to an external system (bidirectional)

#### Inbound gateway: Bidirectional. A message enters into the application and expects a response. The response will be sent back to the external system.

#### Outbound gateway: Bidirectional. The application creates a message and sends it to the external system. The gateway will then wait for a response.

### Service Activator -- Can invoke an operation on a service object

### Transformer -- Converts the content of a message
This endpoint is used for payload conversion. It converts the type of the payload to another type. For example, from String to XML document. Just take into account that transforming the payload will result in a new message (remember that the message is immutable!). This type of endpoint increases loose-coupling between producers and consumers, because the consumer doesn’t need to know what is the created type of the producer. The transformer will take care of it and deliver the content type the consumer is waiting for.


#### HeaderEnricher
It permits to add header values to the message.

#### ObjectToMapTransformer
Converts an Object to a Map, converting its attributes to map values.

#### ObjectToStringTransformer
Converts an Object to a String. It converts it by calling its toString() operation.

#### PayloadSerializingTransformer / PayloadDeserializingTransformer
Converts from Object to a byte array and the other way round.

```
public class Order implements Serializable {
    private static final long serialVersionUID = 1L; 
    private int id;
    private String description;

    public Order() {}
     
    public Order(int id, String description) {
        this.id = id;
        this.description = description;
    }
     
    @Override
    public String toString() {
        return String.valueOf(this.getId());
    }
     
    //Setters & Getters
}
```
```
<int:object-to-string-transformer input-channel="requestChannel" output-channel="transformedChannel"/>
```

```
<int:transformer ref="myTransformer" method="transform"
  input-channel="requestChannel" output-channel="transformedChannel"/>
```

```
@Component("myTransformer")
public class MyTransformer {
    public Order transform(Order requestOrder) {
        return new Order(requestOrder.getId(), requestOrder.getDescription()+"_modified");
    }
}
```

In this example, the method attribute of the transformer element is not necessary, since the transformer only has one method. If it had several methods, you would need to set the “method” attribute to tell the framework which method to invoke. Or if you prefer annotations, you could specify the method using @Transformer annotation at method level:

```
@Component("myTransformer")
public class MyTransformer {
     
    @Transformer
    public Order transform(Order requestOrder) {
        return new Order(requestOrder.getId(), requestOrder.getDescription()+"_modified");
    }
     
    public Order doOtherThings(Order requestOrder) {
        //do other things
    }
}
```

### Filter --- Determines if a message can continue its way to the output channel


### Router --- Decides to which channel the message will be sent


### Splitter --- Splits the message in several parts


### Aggregator --- Combines several messages into a single one