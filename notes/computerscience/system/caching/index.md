# Caching


## What is Caching?

A cache is a short-term memory with limited amount of space. Implementation of caching give quick return of the data without taxing downstream levels. Caches can exist at all levels in software architecture, but are often found in the level nearest to the front end.


## Distributed Application Server Cache

What happens when there any multiple nodes that requires caches? It's still possible to have each node host to have its own caches. However, this approach increases the cache misses. Thus two options should be considedred:

1. Global caches
2. Distributed caches
  
CDNs (Content Delivery Network) are a kind of cache that comes into play for sites serving large amounts of static media. In a typical CDN setup, a request will first ask the CDN for a piece of static media. The CDN will check if it has it locally available. If it isn't available, the CDN will query the back-end servers, and cache it locally.

In the case that the system is not large enough to have its own CDN, we can ease a future transition by serving the static media off a separate subdomain using a lightweight HTTP server like Nginx, and cut-over the DNS from your servers to a CDN later.


## Cache Invalidation

Cache can cause issue of the cache is not coherent with the source of truth. For example, if the data is modified in the database, it should be invalidated in the cache; if not, this can cause inconsistent application behavior. This issue can be solved by cache invalidation. 

* **Write-through cache**: Write through cache scheme is to write data into the cache and the corresponding database simultaneously. This scheme ensures that nothing will get lost in case of a crash, power failure, or other system disruptions, but it has **higher latency** for **twice write operations**.


* **Write-around cache**: This technique is similar to write-through cache, but data is written directly to permanent storage, bypassing the cache. This can reduce write operations in the cache, but the disadvantage is the first read request will create a "cache miss", and ready from slower back-end storage and experience higher latency.

* **Write-back cache**: Data is written to cache alone, and confirmed to the client. The write to the permanent storage is done after certain intervals or under certain conditions. This results in low latency and high throughput for write-intensive applications. However, the system crash will cause the loss of the data.
  

## Cache eviction policies

Following are some of the most common cache eviction policies:

**First In First Out (FIFO)**: The cache evicts the first block accessed first without any regard to how often or how many times it was accessed before.
**Last In First Out (LIFO)**: The cache evicts the block accessed most recently first without any regard to how often or how many times it was accessed before.
**Least Recently Used (LRU)**: Discards the least recently used items first.
**Most Recently Used (MRU)**: Discards, in contrast to LRU, the most recently used items first.
**Least Frequently Used (LFU)**: Counts how often an item is needed. Those that are used least often are discarded first.
**Random Replacement (RR)**: Randomly selects a candidate item and discards it to make space when necessary.


