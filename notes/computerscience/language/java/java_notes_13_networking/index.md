# Java Notes(13) Networking



[Network Overview]({{<  ref "notes/computerScience/Middleware/Network/Network_Overview/index.en.md"  >}})


## Java.net

java.net is the library working with network development.


## ServerSocket and Socket

ServerSocket is used for server. Socket is used for client. Java Socket Programming provides facility to share data between different computing devices.


## Port Number

The port number is used to uniquely identify different applications. It acts as a communication endpoint between applications. The port number is associated with the IP address for communication between two applications. This allows application communicates to the application via same port number. 

When writting program, do not use port number less than 1024. Port number less than 1024 are normally reserverd by important applications.

Port 80: Http port
Port 21: FTP port
Port 25: SMTP Email
Port 110: POP3

TCP port number is not same with UDP port number. Each has 65536 ports.


## TCP Socket Programming

```java
import java.io.*;
import java.net.ServerSocket;
import java.net.*;

public class JavaTCPServer {
	 public static void main (String[] args) throws Exception{
	        // Create a server socket with port number 6666
	        ServerSocket serverSocket = new ServerSocket(6666);
	        while (true){
	            Socket socket = serverSocket.accept();
	            DataInputStream inputStream = new DataInputStream (socket.getInputStream());
	            System.out.println(inputStream.readUTF());
	            inputStream.close();
	            System.out.println("Client Connected");
	            socket.close();
	        }
	    }
}
```

```java
import java.io.*;
import java.net.*;

public class JavaTCPClient {
    public static void main (String[] args) throws Exception{
        // Create a client socket with local IP address and port number
        Socket socket = new Socket("127.0.0.1",8888);
        OutputStream outputStream= socket.getOutputStream();
        DataOutputStream dataOutputStream = new DataOutputStream(outputStream);
        dataOutputStream.writeUTF("Hello Server");
        dataOutputStream.flush();
        dataOutputStream.close();
    }
}
```

## UDP Programming

```java
import java.net.*;

public class JavaUDPServer {
	public static void main(String args[]) throws Exception {
		byte buf[] = new byte[1024];
		DatagramPacket dp = new DatagramPacket (buf,buf.length);
		DatagramSocket ds = new DatagramSocket(5678);
		while (true) {
			ds.receive(dp);
			System.out.println(new String(buf,0,dp.getLength()));
		}
	}
}
```

```java
import java.net.*;

public class JavaUDPClient {
	public static void main(String args[]) throws Exception {
		byte[] buf= (new String("Hello").getBytes());
        // Put address in the packet
		DatagramPacket dp = new DatagramPacket(
				buf,buf.length,new InetSocketAddress("127.0.0.0.1",5678));
        // To use 9999 port
		DatagramSocket ds = new DatagramSocket(9999);
		ds.send(dp);
		ds.close();
	}
}
```

