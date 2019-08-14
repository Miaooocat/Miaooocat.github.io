---
title: 'Java Study Notes(18) Maven'
date: 2019-06-25 12:06:52
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---

# Overview
Maven is a build tool.
    - It encourages convention over configuration
    - It is driven by a central repositiory
    - Installed as a command line tool

# The POM - Project Object Model

This is an XML file containing all configuration for a project:

- Contains full description of the project and dependencies used
- Identifies the project uniquely
  - **groupid** - The name of the pacakge
  - **artifactid** - The name of the project

# Dependency Management
Maven manages dependencies automatically
- It downloads required jars from a central repository
- Adds required jars to project
- Allows the specification of different scopes of dependencies

```
<dependencies>
    <! -- https://.....-->
    <dependency>
    <groupId></groupId>
    <artifactId></artifactId>
    <version></version>
    <scope></scope>
    </dependency>
</dependencies>
```
This depen

