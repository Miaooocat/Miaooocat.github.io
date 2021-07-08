# Data Partition


## Introduction

Data partitioning is a technique to break up a big database (DB) into many smaller parts. It is the process of splitting up a DB/table across multiple machines to improve the manageability, performance, availability, and load balancing of an application. The justification for data partitioning is that, after a certain scale point, it is cheaper and more feasible to scale horizontally by adding more machines than to grow it vertically by adding beefier servers.


## Partitioning Methods

### Horizontal partitioning(Data Sharding):

The basic idea is to put different row into different table based on certain criteria. 

The key problem with this approach is that if the value whose range is used for partitioning isn’t chosen carefully, then the partitioning scheme will lead to unbalanced servers. In the previous example, splitting location based on their zip codes assumes that places will be evenly distributed across the different zip codes. This assumption is not valid as there will be a lot of places in a thickly populated area like Manhattan as compared to its suburb cities.

### Vertical Partitioning:

In this scheme, we divide our data to store tables related to a specific feature in their own server. 


### Directory Based Partitioning: 

A loosely coupled approach to work around issues mentioned in the above schemes is to create a lookup service which knows your current partitioning scheme and abstracts it away from the DB access code. So, to find out where a particular data entity resides, we query the directory server that holds the mapping between each tuple key to its DB server. This loosely coupled approach means we can perform tasks like adding servers to the DB pool or changing our partitioning scheme without having an impact on the application.

## Partitioning Criteria

**Key or Hash-based partitioning**:

**List Partitioning**:

**Round-robin partitioning**:

**Composite partitioning**:


## Common Problems of Data Partitioning

On a partitioned database, there are many extra constraints on the different operations that can be performed. 

**Joins and Denormalization**: Performing joins on a database that across multiple machines is not feasible. A workaround is to denormalize the database so that queries that previously required joins can be performed from a single table.

**Referential integrity**: Enforce data integrity constraints such as foreign keys in a partitioned database can be extremely difficult.

**Rebalancing**: 

1. The data distribution is not uniform, e.g., there are a lot of places for a particular ZIP code that cannot fit into one database partition.

2. There is a lot of load on a partition, e.g., there are too many requests being handled by the DB partition dedicated to user photos.

