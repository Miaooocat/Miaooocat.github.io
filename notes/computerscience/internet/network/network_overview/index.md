# Network



## **OSI Model**

The Open Systems Interconnection (OSI) model is a conceptual model created by the International Organization for Standardization which enables diverse communication systems to communicate using standard protocols.

<table class="alt"> 
<tbody><tr> 
  <th id="table_layer"><strong>Layer</strong></th> 
  <th id="table_Protocol_data_unit"><strong>Protocol data unit (PDU)</strong></th> 
  <th id="table_function"><strong>Function</strong></th> 
</tr> 
<tr> 
<td headers="table_layer">Application (应用层)</td> 
<td headers="table_Protocol_data_unit">Data</td> 
<td headers="table_function">High-level APIs, including resource sharing, remote file access, ex: HTTP, HTTPS,FTP,SSH and etc..</td> 
</tr> 
<tr> 
<td headers="table_layer">Presentation (表示层)</td> 
<td headers="table_Protocol_data_unit">Data</td> 
<td headers="table_function">Translation of data between a networking service and an application; including character encoding, data compression and encryption/decryption</td> 
</tr> 
<tr> 
<td headers="table_layer">Session(会话层)</td> 
<td headers="table_Protocol_data_unit">Data</td> 
<td headers="table_function">Managing communication sessions, i.e., continuous exchange of information in the form of multiple back-and-forth transmissions between two nodes</td> 
</tr> 
<tr> 
<td headers="table_layer">Transport(传输层)</td> 
<td headers="table_Protocol_data_unit">Segment,Datagram</td> 
<td headers="table_function">Reliable transmission of data segments between points on a network, including segmentation, acknowledgement and multiplexing, ex: TCP</td> 
</tr> 
<tr> 
<td headers="table_layer">Network (网络层)</td> 
<td headers="table_Protocol_data_unit">Packet</td> 
<td headers="table_function">	Structuring and managing a multi-node network, including addressing, routing and traffic control, ex: IP</td> 
</tr> 
<tr> 
<td headers="table_layer">Data link (数据链路层)</td> 
<td headers="table_Protocol_data_unit">Frame</td> 
<td headers="table_function">Reliable transmission of data frames between two nodes connected by a physical layer</td> 
</tr> 
<tr> 
<td headers="table_layer">Physical (物理层)</td> 
<td headers="table_Protocol_data_unit">Bit, Symbol</td> 
<td headers="table_function">Transmission and reception of raw bit streams over a physical medium，ex: electricity</td> 
</tr> 
</tbody></table>

## TCP/IP Model

 The TCP/IP model is a concise version of the OSI model. It only contains four layers.

 <table class="alt"> 
<tbody><tr> 
  <th id="table_layer"><strong>Layer</strong></th> 
  <th id="table_Protocol_data_unit"><strong>Protocol data unit (PDU)</strong></th> 
  <th id="table_function"><strong>Function</strong></th> 
</tr> 
<tr> 
<td headers="table_layer">Application (应用层)</td> 
<td headers="table_Protocol_data_unit">Data</td> 
<td headers="table_function">High-level APIs, including resource sharing, remote file access, ex: HTTP, HTTPS,FTP,SSH and etc..</td> 
</tr> 
<tr> 
<td headers="table_layer">Transport (传输层)</td> 
<td headers="table_Protocol_data_unit">Segment</td> 
<td headers="table_function">Translation of data between a networking service and an application; including character encoding, data compression and encryption/decryption</td> 
</tr> 
<tr> 
<td headers="table_layer">Internet Layer(网络互连层)</td> 
<td headers="table_Protocol_data_unit"></td> 
<td headers="table_function">Managing communication sessions, i.e., continuous exchange of information in the form of multiple back-and-forth transmissions between two nodes</td> 
</tr> 
<tr> 
<td headers="table_layer">Network Access</td> 
<td headers="table_Protocol_data_unit">Packet</td> 
<td headers="table_function">WIFI</td> 
</tr> 
</tbody></table>

In both model, the upper layer only communicates with the one layer that below it. All the data from application layer is wrapped in each layer, and transmitted, and then unwrapped.

## IP

IP is a unique number assigned to a node of a network 

## TCP vs UDP Protocol

TCP is a connection-oriented protocol, once a connection is established, data is sent bidirectional. 

- Bank Transcation is through TCP

UDP is a connectionless protocol。 Data comes with no sequencing. UDP is faster, but information does not guarantee delivery.

- Game/Vido is with UDP connection


## Socket

Network programming often related to socket. A network socket is a software structure within a network node of a computer network that serves as an endpoint for sending and receiving data across the network. 


## Java Implementation

```
[Java Network Implementation]({{<  ref "notes/ComputerScience/Internet/Network/Network_Overview/index.en.md"  >}})
```
