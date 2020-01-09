---
title: 'Spring Integration - Message'
date: 2019-10-06 19:51:52
tags: 
- Spring
- Java
categories: 
- Software Development
- Framework
notshow: true
---


# Message
A **message** is a generic wrapper around a discrete unit of data that sent from one component to another. The wrapper allows the framework **to ignore the type of the content** and to treat all messages in the same way when dealing with dispatching and routing. 

# Message Structure
A message has two object inside it, namely **MessageHeader** and **Payload**. 

```java
package org.springframework.integration;

public interface Message<T> {
    MessageHeaders getHeaders();
    T getPayload();
}
```

## MessageHeader
**MessageHeader** is the metadata store in a **Map paired with String and Object** that used to identifies the message instance. One example is that message from same group could be aggregated by correlation information stored in MessageHeader. 

## Payload
The **Payload** could be any Java object, and often is the useful information required to be sent.


# Message Properties

## Unmodifiable
Messages are not modifiable. This is achieved by 1) **having no setter method** in the Message interface and 2) MessageHeader are **immutable Map**. To set a header on a given Message instance will yield on **UnsupportedOperation Exception**

**Unmodifiable message** could **avoid concurency issues**.

# Message Creation

There are several ways of creating a message.

## 1. MessageBuilder.withPayload

We could create a message by using MessageBuilder.

```
Message<String> helloMessage = MessageBuilder.withPayload("Hello, world!").build();
```

In the above example, a new message is created with a String payload. We could also set up the message header information when creating a new message. See the code below.

```java
Message<String> helloMessage =MessageBuilder.withPayload("Hello, world!")
                                            .setHeader("custom.header", "Value")
                                            .setHeaderIfAbsent("custom.header2", "Value2")
                                            .build();
```

## 2. MessageBuilder.fromMessage

We could create message from another message by using .fromMessage
```java
Message<String> anotherHelloMessage = MessageBuilder.fromMessage(helloMessage)
                                    .setHeader("custom.header", "ChangedValue")
                                    .setHeaderIfAbsent("custom.header2", "IgnoredValue")
                                    .build();
```

## 3. Without Using MessageBuilder

We could create message without using message Builder, see the example below

```java
Map<String,Object> headers = new HashMap<>();
headers.put("key1",value1);
headers.put("key2",value2);

Message<String> message = new GenericMessage<String>("my message payload", headers);
```