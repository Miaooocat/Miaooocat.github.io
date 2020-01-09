---
title: 'Spring Integration - Channels'
date: 2019-10-06 19:51:52
tags: 
- Spring
- Java
categories: 
- Software Development
- Framework
notshow: true
---

# Important Point Summary:
By using a Queue Channel producer and consumer get decoupled and both happen in different threads

# Channel
Message need to travel from one component to another through **Channel**. 

## MessageChannel
Message channel interface has no receive method. Message being sent will **be delivered directly** to the Message Endpoint.

```java
package org.springframework.integration;

public interface MessageChannel {
    boolean send(Message<?> message);
    boolean send(Message<?> message, long timeout);
}
```

## SubscribableChannel
**SubscibableChannel** extends from MessageChannel takes responsibility for notifying subscribers when a message is available.

```java
package org.springframework.integration.core;

public interface SubscribableChannel extends MessageChannel {
    boolean subscribe(MessageHandler handler);
    boolean unsubscribe(MessageHandler handler);
}
```

## PollableChannel
**PollableChannel** extends from MessageChannel has the advantage that the consumer can choose when to process messages. The disadvantage is more computational overhead from more frequent polls that find no messages.

```java
package org.springframework.integration.core;

public interface PollableChannel extends MessageChannel {
    Message<?> receive();
    Message<?> receive(long timeout);
}
```


### Other Channel 

There are many different types of channel could be implemented in Spring Integration Framework. In general, they could be categorized into **Point-to-Point Channel**, **Publish-Subscribe Channel** and **Temporary Channel**.

#### Point-to-point Channel
Point-to-point Channel has only one receiver connected to it.

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



#### Publish-subscribe
Publish-subscribe channel can have several endpoints subscribed to it. Thus, the message will be handled to different receivers.

1. **PublishSubscribeChannel**: Implements SubscribableChannel. Subscribed receivers can be invoked consecutively through the producer’s thread. If we specify a TaskExecutor, receivers will be invoked in parallel through different threads.


#### Temporary channels
This is a special type of channel which is **created automatically** by endpoints that have no output channel explicitly defined. The channel created is a point-to-point anonymous channel. You can see it defined in the message header under the name **replyChannel**. 
These types of channels are **automatically deleted** once the response is sent. It is recommended that you don’t explicitly define an output channel if you don’t need it. The framework will handle it for you.




# Design Idea

## Basic Case
The xml example below utilize a default channel(SubscribableChannels). The message transmission is synchronous. A single thread is responsible for invoking all three services **sequentially**.

```xml
<channel id="bookingConfirmationRequests"/>
<service-activator 
                input-channel="bookingConfirmationRequests"
                output-channel="chargedBookings"
                ref="billForBookingService" />

<channel id="chargedBookings" />
<service-activator 
                input-channel="chargedBookings"
                output-channel="emailConfirmationRequests"
                ref="seatAvailabilityService" />

<channel id="emailConfirmationRequests" />
<outbound-channel-adapter channel="emailConfirmationRequests"
                ref="emailConfirmationService" />
```
## When Email Server is Overloaded
This basic configuration is ok, but some improvements could be made. Consider email server is sometimes overloaded and the
network sometimes fails. A way to improve a system is to consider what we can afford to do later. Billing the credit card and updating the seat availability are clearly things you need to do now so you can respond with confidence that the booking has been made. Sending the confirmation email isn’t time critical, and you don’t want to refuse bookings simply because the mail server is down. Therefore, i**ntroducing a queue between the mainline business logic execution** and the confirmation email service will allow you to do just that: **charge the card, update availability**, and **send the email confirmation when you can**.

```xml
<channel id="bookingConfirmationRequests"/>
<service-activator 
                input-channel="bookingConfirmationRequests"
                output-channel="chargedBookings"
                ref="billForBookingService" />
<channel id="chargedBookings" />
<service-activator 
                input-channel="chargedBookings"
                output-channel="emailConfirmationRequests"
                ref="seatAvailabilityService" />
<channel id="emailConfirmationRequests">
                <queue />
</channel>
<outbound-channel-adapter channel="emailConfirmationRequests"
                ref="emailConfirmationService" />
```

## Publish an Information to Mutiple Users
Sometimes, message should be passed to multiple consumers. To allow delivery of the same message to more than one consumer, a publish-subscribe channel is introduced after the availability check. The publish-subscribe channel doesn’t support queueing, but it does support asynchronous operation if we provide a task executor that delivers messages to each of the subscribers in separate threads. This approach may still **block the main thread sending the message on the channel**. The **task executor** is configured to use **the caller thread or block the caller thread when the underlying thread pool is exhausted**.

To ensure that a backlog in sending email confirmations doesn’t block either the sender thread or the entire thread pool for the task executor, we can connect the new publish-subscribe channel to the existing email confirmation queue by means of a **bridge**. **The bridge is an enterprise integration pattern that supports the connection of two channels**, which allows the publish-subscribe channel to deliver to the queue and then have the thread return immediately.

```xml
<channel id="bookingConfirmationRequests"/>
<service-activator 
                input-channel="bookingConfirmationRequests"
                output-channel="chargedBookings"
                ref="billForBookingService" />
<channel id="chargedBookings" />
<service-activator 
                input-channel="chargedBookings"
                output-channel="completedBookings"
                ref="seatAvailabilityService" />
<publish-subscribe-channel id="completedBookings" />
<bridge input-channel="completedBookings" 
        output-channel="emailConfirmationRequests" />
<channel id="emailConfirmationRequests">
                <queue />
</channel>
<outbound-channel-adapter channel="emailConfirmationRequests"
                ref="emailConfirmationService" />
```

# Priority Channel

Comparator could be implemented as well to help with the prioritizing certain request. An example could be seen in below.

```xml
<channel id="bookingConfirmationRequests">
                <priority-queue comparator="customerPriorityComparator" />
</channel>
<service-activator 
                input-channel="bookingConfirmationRequests"
                output-channel="chargedBookings"
<channel id="chargedBookings" />
<service-activator 
                input-channel="chargedBookings"
                output-channel="completedBookings"
                ref="seatAvailabilityService" />
<publish-subscribe-channel id="completedBookings" />
<bridge input-channel="completedBookings"
        output-channel="emailConfirmationRequests" />
<channel id="emailConfirmationRequests">
                <queue />
</channel>
<outbound-channel-adapter channel="emailConfirmationRequests"
                ref="emailConfirmationService" />
```

# Channel collaborators

## MessageDispatcher

Message Handler is a class that receive incoming request and return with response. Message dispatcher is a strategy interface that dispatch message to handler.

```java
package org.springframework.integration.dispatcher;

public interface MessageDispatcher {
    boolean addHandler(MessageHandler handler);
    boolean removeHandler(MessageHandler handler);
    boolean dispatch(Message<?> message);
}
```

Spring Integration provides **two dispatcher implementations** out of the box: **UnicastingDispatcher**, which, as the name suggests, delivers the message to at most one MessageHandler, and **BroadcastingDispatcher**, which delivers to zero or more.

The **UnicastingDispatcher provides an additional strategy interface, Load-BalancingStrategy**, shown in the next code snippet, which determines which single MessageHandler of potentially many should receive any given message. The only provided implementation of this is the **RoundRobinLoadBalancingStrategy**, which works through the list of handlers, passing one message to each in turn.

```java
package org.springframework.integration.dispatcher;
    public interface LoadBalancingStrategy {
    public Iterator<MessageHandler>
        getHandlerIterator(Message<?> message,List<MessageHandler> handlers);
}
```

It is not suggested to provide own implementations of MessageDispatcher. An example where a custom Message-Dispatcher could be appropriate is where different handlers are being used to deal with varying service levels. In this scenario, a custom dispatcher could **be used to prioritize messages** according to the defined service-level agreements. The dispatcher implementation could inspect the message and attempt to dispatch to the full set of handlers only where a message is determined to be high priority:

```java
public class ServiceLevelAgreementAwareMessageDispatcher implements MessageDispatcher {
    private List<MessageHandler> highPriorityHandlers;
    private List<MessageHandler> lowPriorityHandlers;
    public boolean dispatch(Message<?> message){
    boolean highPriority = isHighPriority(message); 
    boolean delivered = false;
    if(highPriority){
        delivered = attemptDelivery(highPriorityHandlers);
    }
    if(!delivered){
        delivered = attemptDelivery(lowPriorityHandlers);
    }
    return delivered;
}
...
}
```

## ChannelInterceptor

ChannelInterceptor is an implementation that notify you when a message traveling through the system. 

```java
package org.springframework.integration.channel;

public interface ChannelInterceptor {
    Message<?> preSend(Message<?> message,MessageChannel channel);
    void postSend(Message<?> message, MessageChannel channel,boolean sent);
    boolean preReceive(MessageChannel channel);
    Message<?> postReceive(Message<?> message,MessageChannel channel);
}
```

### preSend
**preSend** is invoked before a message is sent and returns the message that will be send to channel when the method returns. **If the method returns null**, **nothing is sent**. This allows the **filtering** of the messages.

### postSend
**postSend** is invoked after an attempt to send the message has been made. It indicates whether message was sent successful by its boolean value. This allows the implementation to monitor the message flow and learn which messages are sent and which ones fail.

### preReceive
**preReceive** applies **only if** the **channel is pollable**. It's invoked **when a component calls receive()** on the channel, but **before a Message is actually read** from that channel. It allows implementers to decide whether the channel can return a message to the caller.

### postReceive
**postReceive** applies only to pollable channels. It's invoked after a message is read from a channel but before it’s returned to the component that called receive(). If it returns null, then no message is received. This allows the implementer to control what, if anything, is actually received by the poller.

### Spring Integration Own Interceptors
Spring Integration has it own interceptors - **WireTap**. The implementation is below:

```
<channel id="monitoringChannel/>
<channel id="chargedBookings">
    ....
    <interceptors>
        <wire-tap channel="monitoringChannel"/>
    </interceptors>
</channel>
```

For each booking you charge, you send a copy of the message on the monitoring-Channel, where it can be analyzed by a monitoring handler independently of the main application flow.


### MessageSelector - Filtering

The filtering scenario is based on the idea that only certain types of messages can be sent to a given channel. For this purpose, Spring Integration provides a Message-SelectingInterceptor that uses a MessageSelector to decide whether a message is
allowed to be sent on a channel.

```java
public interface MessageSelector {
    boolean accept(Message<?> message);
}
```
```xml
<beans:bean id="typeSelector" class="org.springframework.integration.selector.PayloadTypeSelector">
    <beans:constructor-arg value="siia.channels.ChargedBooking" />
</beans:bean>
<beans:bean" id="typeSelectingInterceptor"
    class="org.springframework.integration.channel.interceptor.MessageSelectingInterceptor">
    <beans:constructor-arg ref="typeSelector"/>
</beans:bean>
<channel id="chargedBookings">
    ...
    <interceptors>
        <ref bean="typeSelectingInterceptor"/>
    </interceptors>
</channel>
```
