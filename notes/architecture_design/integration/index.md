# Integrtion


In enterprise environments, interaction between applications is important. This interaction allowed organizations to both share data and make use of functionality provided by other systems. 

Though enterprise application integration can take many different forms, from extract-transform-load jobs run overnight to all-encompassing service-oriented architecture (SOA) strategies, all approaches leverage one of four well-known integration
styles:

1. File-based integration
2. Shared-database integration
3. Remote Procedure Calls
4. Message-based integration

### Integrating applications by transferring files

The most basic approach is for one application to produce a file and for that file to be made available to another system. This approach is simple and generally interoperable because all that’s required is for interacting applications to be able to **read and write files**. Because the basic requirements for using file-based integration are simple, it’s a fairly common solution, but some of the limitations of filesystems mean that additional complexity may be created in applications having to deal with files.

One limitation is that filesystems aren’t transactional and don’t provide metadata about the current state and validity of a file. As a consequence, it’s hard to tell, for example, if another process is currently updating the file. 

In general, to work properly, this type of integration requires some strategies to ensure that the receiver doesn’t read inconsistent data, such as a half-written file. Also, it requires setting up a process by which corrupt files are moved out of the way to prevent repeated attempts to process them. 

Another significant drawback is that applications generally need to poll specific locations to discover if more files are ready to be processed, thus introducing additional application complexity and a potential for unnecessary delay.


### Interacting through a shared database

Databases are more advanced data storage mechanisms than files and alleviate some of the limitations of the filesystems. They provide atomic operations, well-defined data structures, and mechanisms that provide some guarantees on data consistency. Shared-database integration consists of providing the different applications with access to the same database. In general, shared databases are used in two scenarios:

1.  As a smarter form of data transfer, by defining a set of staging tables where the different applications can write data that will be consumed by the receiver applications. Compared with the filesystem style, this approach has the advantage that metadata, validation, and support for concurrent access are available out of the box for the transferred data.
  
2. By allowing different applications to share the same data. This has no direct correspondent to the filesystem style and has the advantage that changes made by one application are made available to everyone else in real-time (unlike the data transfer approach, which involves writing data in the file or staging tables and a certain lag until the recipient application makes use of it).

The challenges of shared-database integration are as follows:

1. One-size-fits-all is hardly true in software development, and the compromises necessary to implement a domain model (and subsequent database model) based on the needs of multiple business processes may result in a model that fits no one very well.

2. Sharing the same data model may create unwanted coupling between the different applications in the system. This may seriously affect their capabilities of evolving in the future because changing it will require all the other applications to change as well (at least in the parts that deal directly with the shared model).

3. Concurrent systems frequently writing the same set of data might face performance problems because exclusive access will need to be granted from time to time, so they will end up locking each other out.

4. Caching data in memory might be an issue because applications may not be aware when it becomes stale.

5. Database sharing works well with transferring data between applications but doesn’t solve the problem of invoking functionality in the remote application.


### Remote Procedure Calls

Remote Procedure Calls (RPC) is an integration style that tries to hide the fact that different services are running on different systems. The method invocation is serialized over the network to the service provider, where the service is invoked. The return value is then serialized and sent back to the invoker. This involves proxies and exporters (in Spring) or stubs and skeletons (in EJB). 

RPC would presumably allow architects to design scalable applications without developers having to worry about the differences between local and remote invocations.

The problem with this approach is that certain details about remoting can’t safely be hidden or ignored. Assuming that RPC can hide these details will lead to simplistic solutions and leaky abstractions. Dealing with problems properly will violate the
loose coupling we’ve come to enjoy.

RPC requires that parameters and return values of a service are serializable, which means they can be translated into an intermediate format that can be transmitted over the wire. From case to case, this can be achieved in different ways, such as through Java serialization or using XML marshalling through mechanisms such as Java Architecture for XML Binding (JAXB). This not only restricts the types that can be sent, it also requires that the application code deal with serialization or marshalling errors.

We’re probably not the first to tell you, but it’s worth mentioning again that the network isn’t reliable. You can assume that a local method invocation returns within a certain (reasonable) time with the return value or an exception, but with a network
connection in the mix, this can take much longer, and worse, it’s much less predictable. The trickiest part is that the service that’s invoked can return successfully, but the invoker doesn’t get the response. Assuming you don’t need to account for this is
usually a bad idea.

Finally, serializing arguments and return values harms interoperability. Sending a representation of some Serializable to an application written in Perl is wishful thinking at best. The need to know about the method name and argument order is
questionable.


### Message-based integration

Messaging is an integration style based on exchanging encapsulated data packets (messages) between components (endpoints) through connections (channels). As described at www.enterpriseintegrationpatterns.com, the packets should be small, and they should be shared frequently, reliably, immediately, and asynchronously. Potentially this resolves many of the problems of encapsulation and error handling associated with the previous three integration styles. It also provides an easy way to deal with sharing both data and functionality, and overall it’s the most recommended integration style when you have a choice.



