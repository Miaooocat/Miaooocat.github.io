# Python HTTP request by urllib


## Overview of urlib

Python urllib is a python library that fetch resource from an URL address.


## HTTP Request

### GET Request

```py
request = urllib2.Request(geturl)
response = urllib2.urlopen(request)
print response.read()
```


### POST方式

在request method中第二个parameter上面加入需要的data。

```py
import urllib
import urllib2

values = {"username":"testUser", "password":"XXXX"}
data = urllib.urlencode(values)
data = data.encode('ascii') # data should be bytes 
url = "wwww.google.com"
request = urllib2.Request(url, data)
response = urllib2.urlopen(request)
print response.read()
```

```python
import urllib.parse
import urllib.request

url = 'http://www.someserver.com/cgi-bin/register.cgi'
user_agent = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64)'
values = {'name': 'Michael Foord',
          'location': 'Northampton',
          'language': 'Python' }
headers = {'User-Agent': user_agent}

data = urllib.parse.urlencode(values)
data = data.encode('ascii')
request = urllib.request.Request(url, data, headers)
with urllib.request.urlopen(req) as response:
   the_page = response.read()
```

### Put and Delete

* PUT： PUT和POST极为相似，都是向服务器发送数据，但它们之间有一个重要区别，PUT通常指定了资源的存放位置，而POST则没有，POST的数据存放位置由服务器自己决定。

* DELETE：删除某一个资源。

```python
import urllib2
request = urllib2.Request(rui, data=data)
request.get_method=lambda:'PUT' # or 'DELETE'
response = urllib2.urlopen(request)
```



### Header

有些网站的访问是需要设置header的。Header info 可以在google chrome inspect中找到。Header里面包括了许许多多的信息，有文件编码、压缩方式、请求的agent等等

下面例子说明了怎么设置headers：

```python
import urllib
import urllib2

url = 'http://www.server.com/login'
user_agent = 'Mozilla/4.0 (compatible; MSTE 5.5; Windows NT)'
values = {'username':'cqc', 'password':'XXXX'}
headers = {'User-Agent':user_agent}
data = urllib.urlencode(values)
request = urllib2.Request(url, data, headers)
response = urllib2.urlopen(request)
page = response.read()
```

这样，我们设置了一个headeres，在构建request时传入，在请求时，就加入了headers传入，服务器若识别了是浏览器发出的请求，就会得到响应

有些服务器会识别headers的referer是不是它自己，如果不是，有的服务器就不会响应，所以我们还可以在headers中加入referer
因此我们可以构建referer

```python
headers = {'User-Agent':'Mozilla/4.0 (compatible; MSTE 5.5; Windows NT)',
             'Referer':'http://www.zhihu.com/articles'}
```
同上面的方法，在传送请求时将headers传入Request参数中，这样就能应对防反盗链了

另外，headers的一些属性，下面的需要特别注意一下


User-Agent : 有些服务器或 Proxy 会通过该值来判断是否是浏览器发出的请求
Content-Type : 在使用 REST 接口时，服务器会检查该值，用来确定 HTTP Body 中的内容该怎样解析。
application/xml ： 在 XML RPC，如 RESTful/SOAP 调用时使用
application/json ： 在 JSON RPC 调用时使用
application/x-www-form-urlencoded ： 浏览器提交 Web 表单时使用
在使用服务器提供的 RESTful 或 SOAP 服务时， Content-Type 设置错误会导致服务器拒绝服务

### Proxy Setting

urllib2默认会使用环境变量http_proxy来设置HTTP Proxy。假如一个网站它会检测某一段时间某个IP的访问次数，如果访问次数过多，它会禁止你的访问。所以你可以设置一些代理服务器来帮助你做工作，每隔一段时间换一个代理，这样网站就不法屏蔽程序了

Example：
```python
import urllib2
enable_proxy = True
proxy_handler = urllib2.ProxyHandler({"http":"http://some-proxy.com:8080"})
null_proxy_handler = urllib2.ProxyHanlder({})
if enbale_proxy:
	opener = urllib2.build_opener(proxy_handler)
else:
	opener = urllib2.build_opener(null_proxy_handler)
urllib2.install_opener(opener
```

### Timeout Setting

timeout的设置，可以设置等待多久超时，为了解决一些网站实在响应过慢而造成的影响

```python
import urllib2
response = urllib2.urlopen("http://www.baidu.com", timeout=10)
```

```python
import urllib2
response = urllib2.urlopen('http://www.baidu.com',data, 10)
```

### 使用DebugLog

```python
import urllib2
hrrpHandler = urllib2.HTTPHandler(debuglevel=1)
httpsHandler = urllib2.HTTOSHandler(debuglevel=1)
opener = urllib2.build_opener(httpHandler, httpsHandler)
urllib2.install_opener(opener)
response = urllib2.urlopen('http://www.baidu.com')
```
