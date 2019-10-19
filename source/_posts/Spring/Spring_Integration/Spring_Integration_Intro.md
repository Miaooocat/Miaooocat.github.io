---
title: 'Spring Integration - Basic'
date: 2019-09-16 19:51:52
tags: 
- Spring
- Java
categories: 
- Software Development
- Framework
notshow: true
---

# What could Spring Integration do?

1. It allows communication between components within an application by memory based messaging. This could make each software component be loosely coupled.

2. It allows communication with external systems. 

# Core concepts of Spring

The basic concepts of a message-driven architecture are: **message, message channel, and message endpoint**.

## Messages are sent to an endpoint.
## Endpoints are connected among them through MessageChannels
## An endpoint can receive messages from a MessageChannel

## Message
Message consisits header and payload.

```
public interface Message<T> {
    MessageHeaders getHeaders();
    T getPayload();
}
```
### Header
It contains meta-information about the message. It is a wrapper of a Map, but with its insertion operation marked as unsupported. The framework marks them as immutable. We could create our own customized headers in the form of key-value pair.

### Payload
It is just a normal Java class that contains the information that we want share. This could be any Java type.


### Create a message

```
// First Method
Message<String> message = MessageBuilder.withPayload("my message payload").setHeader("key1","value1").setHeader("key2","value2").build();

// Second Method 
Map<String,Object> headers = new HashMap<>();
headers.put("key1",value1);
headers.put("key2",value2);

Message<String> message = new GenericMessage<String>("my message payload", headers);
```

## Message Channel
A message channel is a pipe that connects endpoints, and where messages travel through. Producers send messages to a channel and consumers receive them from a channel. 


A message channel can also be used as an interception point or for message monitoring.
Depending on how a message is consumed, message channels are classified as follows:

### Point-to-point
   There's only one receiver connected to the message.
   It has several implementations:

1. **DirectChannel**: Implements SubsribableChannel.
   
    The message is sent to the subscriber through the same receiver’s thread. This communication is synchronous and the producer block until a response is received

2. **QueueChannel**: Implements PollableChannel.
    There’s one endpoint connected to the channel, no subscribers. This communication is asynchronous; the receiver will retrieve the message through a different thread.

3. **PriorityChannel**: Implements PollableChannel
    Similar to the QueueChannel but messages are ordered by priority instead of FIFO.
   
4. **RendezvousChannel**: Implements PollableChannel
    Similar to the QueueChannel but with zero capacity. The producer will block until the receiver invokes its receive() method.
    
5. **ExecutorChannel**: Implements SubscribableChannel
    Sending is delegated to a TaskExecutor. This means that the send() method will not block.


### Publish-subscribe
The channel can have several endpoints subscribed to it. Thus, the message will be handled by different receivers.

1. **PublishSubscribeChannel**: Implements SubscribableChannel. Subscribed receivers can be invoked consecutively through the producer’s thread. If we specify a TaskExecutor, receivers will be invoked in parallel through different threads.

### Temporary channels
This is a special type of channel which is created automatically by endpoints that have no output channel explicitly defined. The channel created is a point-to-point anonymous channel. You can see it defined in the message header under the name **replyChannel**. 
These types of channels are **automatically deleted** once the response is sent. It is recommended that you don’t explicitly define an output channel if you don’t need it. The framework will handle it for you.

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