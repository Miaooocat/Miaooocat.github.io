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

# Channel
Message need to travel from one component to another through **Channel**. There are many different types of channel could be implemented in Spring Integration Framework.

## MessageChannel
Message channel, implemented below, has no receive method. Message being sent will be delivered directly to the Message Endpoint.
```
package org.springframework.integration;

public interface MessageChannel {
    boolean send(Message<?> message);
    boolean send(Message<?> message, long timeout);
}
```

## SubscribableChannel
Subscibable channel takes responsibility for notifying subscribers when a message is available.

```
package org.springframework.integration.core;

public interface SubscribableChannel extends MessageChannel {
    boolean subscribe(MessageHandler handler);
    boolean unsubscribe(MessageHandler handler);
}
```

## PollableChannel
The Pollable channel has the advantage that the consumer can choose when to process messages. The disadvantage is more computational overhead from more frequent polls that find no messages.

```
package org.springframework.integration.core;

public interface PollableChannel extends MessageChannel {
    Message<?> receive();
    Message<?> receive(long timeout);
}
```


## Example: Booking Services
The default essage 
```
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