# JDBC Notes (1)



## Common Database URL

### JDBC Database URL for MySQL 
Driver class name: com.mysql.jdbc.Driver

Format of database URL:
```
jdbc:mysql://[host][,failoverhost...][:port]/[database][?propertyName1][=propertyValue1][&propertyName2][=propertyValue2]...

Examples:
jdbc:mysql://localhost:3306/test
jdbc:mysql://localhost:3306/test?user=root&password=secret
```

### JDBC Database URL for Oracle
Driver class name: oracle.jdbc.OracleDriver
Format of database URL:
```
jdbc:oracle:<drivertype>:@<database>
jdbc:oracle:<drivertype>:<user>/<password>@<database>

Examples:
jdbc:oracle:thin:@localhost:1521:testdb
jdbc:oracle:thin:root/secret@localhost:1521:testdb
jdbc:oracle:oci:@hoststring
jdbc:oracle:oci:@localhost:1521:testdb
jdbc:oracle:oci:root/secret@hoststring>
Jdbc:oracle:oci:root/secret@localhost:1521:testdb
```






## Driver

### Example of using Driver to get connection
```java
import java.sql.Driver;
import org.junit.Test;

public class JDBCTest{

  @Test
  public void testDriver(){
    // Create a Driver object
    Driver driver = new com.mysql.jdbc.Driver();
    // Prepare the database information
    String url = "jdbc:mysql://127.0.0.1:3306/test";
    Properties info = new Properties();
    // Use connect method of Driver object
    Connection connection = driver.connect(url,info);
    System.out.println(connection);
  }
}
```

Issue: High coupling when creating the Driver and its properties

Solution: create a properties file with all the external parametesres

jdbc.properties
```txt
driver = com.mysql.jdbc.Driver
jdbcUrl = jdbc:mysql://127.0.0.1:3306/test
user = root
password = 1234
```

```java
public Connection getConnection() throws Exception(){
  String driverClass = null;
  String jdbcUrl = null;
  String user = null;
  String password = null;

  // Read the class path jdbc.properties to get parameters
  InputStream in = this.getClass().getClassLoader().getResourceAsStream("jdbc.properties");
  Properties properties = new Properties();
  properties.load(in);
  driverClass = properties.getProperty("driver");
  jdbcUrl = properties.getProperty("jdbcUrl");
  user = properties.getProperty("user");
  password = properties.getProperty("password");

  // Use reflection to create Driver
  Driver driver = 
          (Driver) Class.forName(driverClass).newInstance();
  Properties info = new Properties();
  info.put("user",user);
  info.put("password",password);

  // Use the driver connection method to get connection
  Connection connection = driver.connect(jdbcUrl,info);
  return connection;
}

```

## Driver Manager

There are two advantages of using DriverManagers.
- 1. It uses its overloadding method getConnection() to get the database connection.
- 2. It can manage multiple Driver by passing different parameters.

```java
Connection getConnection(){
    // Step 1: Four parameters are required parameters in Driver Manager
    String driverClass = null;
    String jdbcUrl = null;
    String user = null;
    String password = null;

    // Step 2: Read the class path jdbc.properties to get parameters
    // This should be further simplified as to read the property only once
    InputStream in = this.getClass().getClassLoader().getResourceAsStream("jdbc.properties");
    properties.load(in);
    Properties properties = new Properties();
    driverClass = properties.getProperty("driver");
    jdbcUrl = properties.getProperty("jdbcUrl");
    user = properties.getProperty("user");
    password = properties.getProperty("password");

    // Step 3: load driver
    // DriverManager.registerDriver(Class.forName(driverClass).newInstance()))
    // The above method is already in a static block of the Driver manager. Thus, no need to define that again
    Class.forName(driverClass);

    // Step 4: Use getConnection() method to get the connection
    Connection connection = DriverManager.getConnection(jdbcUrl,user,password)
    System.out.println(connection);
    return connection;
}
```



## Statement

To use JDBC to run a INSERT/UPDATE/DELETE requires 
1. Get Connection
2. Create and execute Statement SQL query
3. Close Statement and then Connection

```java

@Test
public void testStatement(){

    Connection conn = null;
    Statement statement = null;
    try{
    // Step 1: get Database connection
    conn = getConnection();
    // Step 2: create Statment query
    String sql = "INSERT INTO customers (NAME, email, birth) VALUES ('XYZ','xyz@aa.com', '2000-02-01')";
    statement = conn.createStatement();
    // Step 3: Use execute update(sql) for INSERT/UPDATE/DELETE, but not SELECT
    statement.executeUpdate(sql);
    } catch (Exception e){
      e.printStackTrace();
    } finally {
      if (statement != null){
          statment.close();
      }
      if (conn != null ){
          conn.close();
      } 
    }
}
// The multiple try catch finally blocks are to avoid issue regards to exception raised before closing the connection
```

We can also wrap all the above method as a utility class.

## ResultSet

```java
@Test
public void testResultSet(){
  Connection conn = null;
  Statement statement = null;
  ResultSet rs = null;
  try {
    // Step 1: get Database connection
    conn = getConnection();
    // Step 2: create Statment query
    String sql = "SELECT id, name, email, birth FROM customers";
    statement = conn.createStatement();
    // Step 3: execute SQL query
    rs = statement.executeQuery(sql);

    // Step 4: Working on the ResultSet
    while (rs.next()){
      int id = rs.getInt(1);
      String name = rs.getString("name");
      String email = rs.getString(3);
      Date birth = rs.getDate(4);
    }
  catch (Exception e){
      e.printStackTrace();
    } finally {
      if (rs != null ){
          rs.close();
      } 
      if (statement != null){
          statment.close();
      }
      if (conn != null ){
          conn.close();
      } 

    }


  }

}
```


