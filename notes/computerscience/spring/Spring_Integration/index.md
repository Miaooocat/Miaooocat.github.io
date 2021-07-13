# Spring Integration Notes(1) Overview 



## Spring Integration Basic Overview

Spring Integration is an open source framework that designed to enable the development of integration solutions typical of **event-driven architectures** and **messaging-centric architectures**. It requires dependency **spring intergration core**, which could be downloaded from Maven Central. 

```xml
<dependency>
    <groupId>org.springframework.integration</groupId>
    <artifactId>spring-integration-core</artifactId>
    <version>5.3.1.RELEASE</version>
</dependency>
```

Spring integration framework consists three parts, namely **message**, **message channel**, and **message endpoint**. In general. a **message** is a unit of information that can be passed between different **message endpoint** through **message channels**.


- Message: A message is a unit of information that can be passed between different components, called message endpoints.

- Message Channel: The message channel is the connection between multiple endpoints. The channel implementation manages the details of how and where a message is delivered but shouldn’t need to interact with the payload of a message.

- Message Endpoint: Message endpoints are the components that actually do something with the message.

## Spring Integration Design Concept

### Loose coupling and event-driven architecture





