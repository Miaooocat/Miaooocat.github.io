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

A **message** is a generic wrapper around a discrete unit of data that sent from one component to another. The wrapper allows the framework to ignore the type of the content and to treat all messages in the same way
when dealing with dispatching and routing. When looking at the code, it has MessageHeader and Payload. 
**MessageHeader** is the metadata store in a **Map paired with String and Object** that used to identifies the message instance. One example is that message from same group could be aggregated by correlation information stored in MessageHeader. The **Payload** could be any Java object, and often is the useful information required to be sent.

```
package org.springframework.integration;

public interface Message<T> {
    MessageHeaders getHeaders();
    T getPayload();
}
```
Messages aren’t modifiable, as it avoid concurrency issues.. It can be noticed in the Message interface. There is no setter method. Even the MessageHeaders are an immutable Map: trying to set a header on a given Message instance will yield an UnsupportedOperation Exception. The way to create a message is by using Spring Integration’s **MessageBuilder**. An example is demonstrated in the following code.

```
Message<String> helloMessage = MessageBuilder.withPayload("Hello, world!").build();
```
In the above example, a new message is created with a String payload. We could also set up the message header information when creating a new message. See the code below.

```
Message<String> helloMessage =MessageBuilder.withPayload("Hello, world!")
                                            .setHeader("custom.header", "Value")
                                            .setHeaderIfAbsent("custom.header2", "Value2")
                                            .build();
```
or, we could create message from another message.
```
Message<String> anotherHelloMessage = MessageBuilder.fromMessage(helloMessage)
                                    .setHeader("custom.header", "ChangedValue")
                                    .setHeaderIfAbsent("custom.header2", "IgnoredValue")
                                    .build();
```