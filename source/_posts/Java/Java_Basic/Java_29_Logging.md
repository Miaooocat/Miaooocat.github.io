---
title: 'Java Study Notes(29) Logging'
date: 2019-07-03 13:12:17
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---

# What is logging?
**When something goes wrong, the first point of call is the system logs**
Logs provide a trace to figure out circumstances that cause issues, both at runtime and during debugging.

Logs are the main piece of information available to Support consultants and Developers

Almost every large application devotes development efforts to logging, tracing, and/or auditing

Logs help isolate and identify where problems occur

# log4j2
Hierarchical logging framework
    - Different levels of severity for different messages
    - Inheritable configuration
Allows us to send differnt log messages to different locations simultaneously

Allows configuration to be external to the code
    - Logging can be turned off or made to log only certain events without recompiling the source code
    - Can be configured even after deployment to the client

# Key Componentss

Loggers
- Named objects that allow us to log messages according to level
  - One "root logger" object always exists
  - Child logger objects are created from configuration

Appenders
- Output destinations for log messages
- A single logger can have multiple appenders

Layouts
- Output formats for log messages
- A layout is set for each appender

# Loggers
```
// Create a log
Logger logger = LogManager.getLogger("MyLogger");
Logger logger = LogManager.getLogger(ClassName.class);
Logger logger = LogManager.getLogger();
```

# Appenders
Loggers need to know where to send your request for logging

The log4j2API allows us to select from a variety of output destinations
- Files (FileAppender, RollingFileAppender)
- Console (ConsoleAppender)
- Databases (JdbcAppender, NoSqlAppender)
- Remote servers (SocketAppender, HTTPAppender)
- ...


# Configuration
Each logger object needs two pieces of information
- A level / threshold (the minimum level of messages it will log)
- At least one appender (Where to send the messages)

## Log Message Level 
From least severe -> most severe
trace -> debug -> info -> warn -> error -> fatal

**Trace**: Use for debugging messags which let the developer know which parts of the source code have been reached. Examples including tracing method entry and exit. The level should only be used for developers.

**Debug**: Use for writing debugging messages

**Info**: Use for messages similar to the verbose mode of some applications: runtime events. Info and above should be considered public information.

**Warn**: Use for warning messages that logged to some log but the application is able to carry on without a problem. Examples may be loading default configuration if a file cannot be located.

**Error**

**Fatal**

Root Logger 
- error
- Console

Own logger 
- INFO
- File


# Example
```
09:57:06:934 [main] ERROR com.fdmgroup.logginApp - This is an error message
```