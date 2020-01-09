---
title: 'Java Study Notes(29) Logging'
date: 2019-09-29 13:12:17
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---

# What is log

Log is the information generated when running the application. It provides a trace to figure out circumstances or error that may happening in the program.

# Log4j2
Log4j2 is an open source library that's published and licnesed under Apache Software. 
The main advantage of Log4j2 is 
**1)** It allows us to send different log messages to different locations simultaneously. 
**2)** The configuration(xml, yaml, json, or properties file) can be external to the code. This allows logging to be turned off or on without recompiling the source code, and it can be configured even after deployment.

## Configuration
Each logger object needs **two** pieces of information
- A level / threshold (the minimum level of messages it will log)
- At least one appender (Where to send the messages)
- (option) A pattern layout for formatting


It should be noted that log4j2 property file configuration is different from the log4j property file. If file is not right, the following exception will be thrown.
```
ERROR StatusLogger No log4j2 configuration file found. Using default configuration: logging only errors to the console.
```

### Log Levels
Log levels could be different in different organizations. Normally, there are **DEBUG**, **INFO**, **WARN**, **ERROR**, and **FATAL** levels. Those log levels could be used as string to be monitored by apllication supporter.
**DEBUG**: Use for writing debugging messages. This log level should be hided in the production environment.
**INFO**: Use to trace the runtime events in the application. 
**WARN**: Use to record some business error. Application should be able to handle by itself with exceptions. 
**ERROR**: Use to record issues that cause unexpected or unacceptable behavior. This level should be monitored. 
**FATAL**: Use to record issues that stop the application or crash the server. This level should be reportted immediately.

#### Log Level hierarchy order

When the library decides whether to print a certain statement or not, it computes the effective level of the responsible Logger object (It is based on configuration. The default log level is **ERROR**.) and compares it with the LogEvent's level (depends on which method was used in the code – trace/debug/.../fatal). **If LogEvent's level is greater or equal to the Logger's level, the LogEvent is sent to appender(s) – "printed"**. 

```
public final static int OFF_INT = Integer.MAX_VALUE;
public final static int FATAL_INT = 50000;
public final static int ERROR_INT = 40000;
public final static int WARN_INT  = 30000;
public final static int INFO_INT  = 20000;
public final static int DEBUG_INT = 10000;
public static final int TRACE_INT = 5000; 
public final static int ALL_INT = Integer.MIN_VALUE; 
```

### Appenders
Loggers need to know where to send your request for logging

The log4j2API allows us to select from a variety of output destinations
- Files (FileAppender, RollingFileAppender)
- Console (ConsoleAppender)
- Databases (JdbcAppender, NoSqlAppender)
- Remote servers (SocketAppender, HTTPAppender)
- ...


## Basic Implementation of Using External Configuration File

```java
package com.dev;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
public class App
{
    public static void main( String[] args ) {
        // Set the system file
        System.setProperties("log4j.configurationFile","FILE_PATH")
        // It can be any string in the bracket. By convension, it uses class name
        Logger logger = LogManager.getLogger(App.class);;
        // Log4j will inspect log4j.configurationFile system property to determine log4j2 configuration file. 
        // Log4j configuration can be written in JSON, YAML and XML.
    	logger.trace("Configuration File Defined To Be :: "+System.getProperty("log4j.configurationFile"));
    }
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Configuration>
  <Appenders>
    <Console name="Console">
      <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n"/>
    </Console>
  </Appenders>
  <Loggers>
    <logger name="com.dev" level="trace">
      <AppenderRef ref="Console"/>
    </logger>
  </Loggers>
</Configuration>
```

# Reference

https://www.journaldev.com/7128/log4j2-example-tutorial-configuration-levels-appenders

