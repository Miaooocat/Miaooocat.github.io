---
title: 'JDBC Study Notes(1)'
date: 2019-07-03 13:12:17
tags: 
- Java
- Database
categories: 
- Software Development
- Java Programming
notshow: true
---

# What is JDBC?
JDBC (Java DataBase Connectivity) is an API that enables Java applications to interact with databases.

# JDBC Class

**DriverManager**: The DriverManager class acts as an interface between the user and drivers. It keeps track of the drivers that are available and handles establishing a connection between a database and the appropriate driver. It contains several methods to keep the interaction between the user and drivers.

There is **only one concrete class** called **DriverManager**
- Which manages the drivers!
- Sets up JDBC for use by tell it:
  - The database vendor
  - Database location(URL)
  - Username & Password

```
Connection conn = DriverManager.getConnection(url,user,password)
```

# JDBC interface
1. **Connection**: The Connection object is created by using **getConnection()** method of DriverManager class. DriverManager is the factory for connection.
    
    - Used to establish a connection (session)
    - The link between the Java application and the database
    - Concretion is provided by DriverManager and is vendor specific

2. **Statement**: The Statement object is created by using **createStatement()** method of connection class
   - Used as encapsulating layer for SQL statements
   - Concretion is provided by Connection and is also vendor-specific
     - i.e. A MySQL statement differs from an Oracle Statement

3. **ResultSet**: The object of ResultSet maintains a cursor pointing to a row of a table. Initially, cursor points before the first row. The **executeQuery()** method of Statement interface returns the ResultSet object 
   - Encapsulates data returned from the database.
   - Representsa table of data.
   - Returned when we execute a SELECT query through JDBC

4. **DatabaseMetaData**: DatabaseMetaData interface provides methods to get metadata of a database product name, database product verson, driver name, name of the total number of tables, the name of the total number of views, etc. The **getMetaData()** method of Connection interface returns te object of DatabaseMetaData
   - Provides information about the database as a whole.
     - E.g. how is the database set up? Default values?

# Driver Manager and JDBC Drivers

## DriverManager

- Only concrete class in the API
- Will load the vendor specific driver
- Used to get a Connecton object


DriverManager needs to be given a driver

There are four types:
(* Important)
- Type 1 Driver -- JDBC-ODBC Bridge
  - It connects Java clients to ODBC calls
  - Slow, this is not supported after Java 8


- Type 2 Driver -- Native API Driver
  - It converts JDBC methods into calls to client-side API on the database side
  - Faster than type 1 drivers


- Type 3 Driver -- Network Protocol Driver (MiddleWare Driver)
  - Uses network protocol to communicate with a middle tier
  - Acts as proxy between the client and server


- Type 4 Driver -- Database Protocol Driver (Pure Java Driver)
  - Connects directly to databases, without any native code or middle tier.
  - Written in pure Java
  - Thin driver

# Implementation

## 
In this example, we will use the Oracle Thin Driver to connect to a database.


Steps for connectivity between Java program and database

Class.forName(“oracle.jdbc.driver.OracleDriver”);

 DriverManager.registerDriver(new oracle.jdbc.driver.OracleDriver())

Connection con = DriverManager.getConnection(url,user,password)