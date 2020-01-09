---
title: 'Java Study Notes(19) Serialization'
date: 2019-09-12 11:20:52
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---

# What is Serialization

Serialization is a Java mechanism for converting an object's state (data of object) into a stream of bytes.

The stream can have a variety of destinations:

- A file
- Byte array
- Another location on the network

De-serialization is the reverse - restoring an object from a byte stream

# Common Uses of Serialization 

- Saving/restoring a game's state
  - Convert game state to a binary file, and could restore it later
- Transferring an object across a server or over a network
- Load balancing mechanisms in clustered architectures
  - When one server is overloaded, the request could be transfer to another server

# How to use?

To be serialized, an object must implement the java.io.Serializable interface

It does not define any methods, it only tells that the object could be serialize

- This kind of interface is called a **marker** or **tag**.

If attempt to serialize an object that is not serializable, a NotSerializableException will be thrown.



## Object to be Serialized
```
import java.io.Serializable;
// All objects inside this object need to serialized
// In the example Department class should also implements seriablizable
class User implements Serializable{
    private String username
    private String password;
    private Department department
}
```

# Non-Serializable Data

Static members and variable marked with key word **transit** is not seriablizable in default serialization.

```
class User implements Serializable{
    // Static is not seriablizable
    public static int userCount;
    private String username
    // any variable marked with transit is seriablizable
    private transit String password;
    private Department department
}
```



# Serialization and Inheritance
This is important when you extend to a thrid party class that is not seriablizable

## Serializable parent and serializable child
Child data is serialized including the inherited data from parents.

## Child data is serialized Inherited data is ingored
Child data is serialized, but **inherited data is ignored**, and become **default**.


# Custom Serialization


Create own method to avoid transit and write static variable

If the methods below are presented in the class, then JVM will use the following method instead of the default method

```
	// Customizing serialization
	private void writeObject (ObjectOutputStream oos) throws IOException {
        // This is to write static
		oos.writeInt(userCount);
        // This is to write transit
		oos.writeUTF(passWord);
		oos.writeObject(department);
        // This is to enable the default serialization
		oos.defaultWriteObject();
	}
```

```
	// Customizing deserialization
	private void readObject (ObjectInputStream ois) throws IOException, ClassNotFoundException{
        // This is to write static
		userCount = ois.readInt();
        // This is to write transit
		passWord = ois.readUTF();
		department = (Department) ois.readObject();
        // This is to enable the default serialization
		ois.defaultReadObject();
	}
}
```

# Versioning

when deserializaing, it is important to make sure that class information has not changes.
- If it cannot be fund, a ClassNotFoundException thrown

- If it has a different version ID, an invalidClassException is thrown.
  - Version number is automatically calculated by JVM based on the attributes and method

We could also define your own serialVersion_ID. Then if the version_ID is same, even data in class has changed you could do de-sterilization

# Example 

## SerializationApp Class
```
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class SerializationApp {
	public static void main(String[] args){
		Department department = new Department();
		User user = new User(1,"john.doe","1234",department,80000);
		serializeUser(user);
		System.out.println(User.userCount);
		
		User deSerializedUser = deSerializeUser();
		System.out.println(deSerializedUser);
		System.out.println(User.userCount);
	}

	private static User deSerializeUser() {
		try (FileInputStream fis = new FileInputStream("C:\\Users\\shihao.miao\\Desktop\\user.ser");
				ObjectInputStream ois = new ObjectInputStream(fis);){
			// Downcasting because return type of readObject() is Object
			// and u r converting Object (supertype) to User type
			return (User) ois.readObject();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	private static void serializeUser(User user) {
		try(FileOutputStream fos = new FileOutputStream("C:\\Users\\shihao.miao\\Desktop\\user.ser");
				ObjectOutputStream oos = new ObjectOutputStream(fos)){
			oos.writeObject(user);
			System.out.println("User object is serialized...");
			
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
```

## Department Class
```
import java.io.Serializable;

public class Department implements Serializable {
	static private String departmentName;
	private int deptId;
	public Department(String departmentName, int deptId) {
		super();
		this.departmentName = departmentName;
		this.deptId = deptId;
	}
	public Department() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getDepartmentName() {
		return departmentName;
	}
	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	public int getDeptId() {
		return deptId;
	}
	public void setDeptId(int deptId) {
		this.deptId = deptId;
	}
	@Override
	public String toString() {
		return "Department [departmentName=" + departmentName + ", deptId=" + deptId + "]";
	}	
}
```

## User class

```
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

public class User implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public static int userCount;
	private int id;
	private String userName;
	private transient String passWord;
	private Department department;
	private long salary;
	public User(int id, String userName, String passWord, Department department, long salary) {
		super();
		++ userCount;
		this.id = id;
		this.userName = userName;
		this.passWord = passWord;
		this.salary = salary;
		this.department = department;
	}
	public User() {
		super();
		++ userCount;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassWord() {
		return passWord;
	}
	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}
	public Department getDepartment() {
		return department;
	}
	public void setDepartment(Department department) {
		this.department = department;
	}
	public long getSalary() {
		return salary;
	}
	public void setSalary(long salary) {
		this.salary = salary;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", userName=" + userName + ", passWord=" + passWord + ", department=" + department
				+ ", salary=" + salary + "]";
	}
	
	// Customizing serialization
	private void writeObject (ObjectOutputStream oos) throws IOException {
		oos.writeInt(userCount);
		oos.writeUTF(passWord);
		oos.writeObject(department);
		oos.defaultWriteObject();
	}

	// Customizing deserialization
	private void readObject (ObjectInputStream ois) throws IOException, ClassNotFoundException{
		userCount = ois.readInt();
		passWord = ois.readUTF();
		department = (Department) ois.readObject();
		ois.defaultReadObject();
	}
}
```