---
title: 'Spring Integration - Testing'
date: 2019-09-16 19:51:52
tags: 
- Spring
- Java
categories: 
- Software Development
- Framework
notshow: true
---

This is the summary notes for unit testing in spring integration framework after reading the book Spring Integration in Action. 

This page covers 
1. Test-driven development in the context of messaging
2. Hamcrest and Mockito matchers for messages
3. Testing asynchronous applications


# Matching Messages with Spring Integration testing framework

When a message being send to a system, it must comes out in some form or another, either through being consumed by an **outbound channel adapter**, **as another message being sent on a subsequent channel**, or **as an ErrorMessage being sent to the errorChannel**.

```
@Test
public void outputShouldContainDelayedFlight() {
    inputChannel.send(testMessage());
    Message output = outputChannel.receive();
    assertThat(((FlightDelayedEvent) output
    .getPayload()).getDelay(),  is(expectedDelay) );
}
```
The above method is complicated, as getting the delay requires a cast and two method invocations. In following sub-section, a easy method is introduced to match both payload and header.

## Unwrapping payloads

```
import static org.springframework.integration.matcher.PayloadMatcher.*;
```

This gives you two methods related to payloads 
1. hasPayload(T payload)
2. hasPayload(Matcher<?> payloadMatcher))

```
assertThat(outputChannel.receive(), hasPayload(expectedDelay));
assertThat(outputChannel.receive(), hasPayload(same(expectedDelay)));
assertThat(outputChannel.receive(), hasPayload(is(FlightDelay.class)));
```
Test Example:
In a scenario, a user could CreateTripCommand. This is sent into the system wrapped in a message. The message
goes through a splitter that chops the command into subcommands for rental cars, hotel rooms, and flights. We need to test if the splitter works as the way it should be.

```
@Autowired
MessageChannel tripCommands;

@Autowired
PollableChannel javaLegQuoteCommands;

@Test
public void splitterShouldSplitIntoSubcommands(){
    CreateTripCommand tripCommand = mock(CreateTripCommand.class);
    Message<CreateTripCommand> tripCommandMessage = MessageBuilder.withPayload(tripCommand).build();
    final Command carCommand = mock(Command.class);
    final Command flightCommand = mock(Command.class);
    final Command hotelCommand = mock(Command.class);
    given(tripCommand.getSubCommands()).willReturn(Arrays.asList(carCommand, flightCommand, hotelCommand));
    tripCommands.send(tripCommandMessage);
    List<Message<? extends Object>> received = Arrays.asList(javaLegQuoteCommands.receive(100),
    javaLegQuoteCommands.receive(100),
    javaLegQuoteCommands.receive(100));
    assertThat(received.size(), is(3));
}
```

## Expectations on headers


