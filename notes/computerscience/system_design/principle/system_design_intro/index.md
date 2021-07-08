# System Design


## System Design Question

When design a system, we need to consider following three questions in mind?

1. What are the different architectural pieces that can be used?

2. How do these pieces work with each other?

3. How can we best utilize these pieces: what are the right tradeoffs?


## Key Characteristics of Distributed Systems

### Scalability

#### Horizontal Scaling
Horizontal scaling means to scale up by adding more servers. An example regards to horizontal scaling are Cassandra and MongoDB, as both provides option to add more servers.

#### Vertical Scaling
Vertical scaling means to scale up by adding more power (CPU, RAM, Storage ...) to an existing server. An example regards to this is MySQL. MySQL allows switching from small machine to bigger one.

### Reliability

Reliability is the probability a system will fail in a given period. Reliability is an advantage of any distributed system, since any failing machine can be replaced by other healthy one. The reliability of the system is often achieved through redundancy of both software components and data. The failure of one server will be replaced by extra same copy of other servers.

### Availability

Availability, by defination, is the time a system remains operational to perform its required function in a specific period. It is different with reliability. In general, high reliability contributes to high availability. An example of high availability but not reliability application is like an application with many security issue in website. 


### Efficiency

Efficiency is generally measured by **the response time** (or latency) and the **throughput (or bandwidth)** which denotes the number of items delivered in a given time unit. 


### Serviceability or Manageability

Serviceability/Manageability is also an important consideration on how to design a distributed system. Serviceability/Manageability means how easy to diagonise and to fix a issue.




## Reference

https://www.educative.io/courses/grokking-the-system-design-interview/

