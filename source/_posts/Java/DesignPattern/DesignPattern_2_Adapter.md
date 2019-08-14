---
title: 'Deisgn Pattern Notes(2) Adapter'
date: 2019-06-27 16:19:11
tags: 
- Java
categories: 
- Software Development
- Design Pattern
notshow: true
---

# Adapter Pattern
Adapter pattern is a **structural pattern** that is used so that two unrelated interfaces can work together. The object that joins these unrelated interface is called Adapter

# Life example

One of the great real life example of Adapter design pattern is mobile charger. Mobile battery needs 3 volts to charge but the normal socket produces either 120V(US) or 240V(India). So the mobile charger works as an adapter between mobile charging socket and the wall socket.

```
// wall socket
public class Socket {
    public Volt getVolt(){
        return new Volt(120);
    }
}
```

```
// Volt
public class Volt{
    private int volts;
    public Volt(int v){
        this.volts=v;
    }
    public int getVolts(){
        return volts;
    }
    public void setVolts(int volts){
        this.volts = volts;
    }
}
```
```
public interface SocketAdapter{
    public Volt get120Volt();
    public Volt get12Volt();
    public Volt get3Volt();
}
```
There are two approaches, but produce same result.
The first one is class adapter. The second one is object adapter.

**Class Adapter** uses java inheritance and extends the source interfaces.

**Object Adapter** uses Java Composition and adapter contains the source object.

## Adapter Design Pattern - Class Adapter

```
public class SocketClassAdapterImpl extends Socket implements SocketAdapter{
    @Override
    public Volt get120Volt(){
        return getVolt();
    }
    @Override
    public Volt get12Volt(){
        Volt v = getVolt();
        return convertVolt(v,10);
    }
    @Override
    public Volt get3Volt(){
        volt v = getVolt();
        return convertVolt(v,40);
    }
    private Volt convertVolt(Volt v, int i){
        return new Volt (v.getVolts()/i);
    }
}
```

## Adapter Design Pattern - Object Adapter
```
public class SocketObjectAdapterImpl implements SocketAdapter{
    private Socket sock = new Socket();

    @Override
    public Volt get120Volt(){
        return sock.getVolt();
    }

    @Override
    public Volt get12Volt(){
        Volt v = sock.getVolt();
        return convertVolt(v,10);
    }

    @Override
    public Volt get3Volt(){
        Volt v = sock.getVolt();
        return convertVolt(v,40);
    }

    private Volt convertVolt(Volt v int i){
        return new Volt(v.getVolts()/i);
    }
}
```

## Test program
```
public class AdapterPatternTest{
    public static void main(String[] args){
        testClassAdapter();
        testObjectAdapter();
    }
    private static void testObjectAdapter(){
        SocketAdapter sockAdapter = new SocketObjectAdapterImpl();
        Volt v3 = getVolt(sockAdapter,3);
        Volt v12 = getVolt(sockAdapter,12);
        Volt v120 = getVolt(sockAdapter,120);
        System.out.println("v3 volts using Object Adapter =" + v3.getVolts());
        System.out.println(v12 volts using Object Adapter =" + v12.getVolts()); 
        System.out.println(v120 volts using Object Adapter =" + v120.getVolts());
    }
    private static void testClassAdapter(){
        SocketAdapter sockAdapter = new SocketClassAdapterImpl();
        Volt v3 = getVolt(sockAdapter,3);
        Volt v12 = getVolt(sockAdapter,12);
        Volt v120 = getVolt(sockAdapter,120);
        System.out.println("v3 volts using Object Adapter =" + v3.getVolts());
        System.out.println(v12 volts using Object Adapter =" + v12.getVolts()); 
        System.out.println(v120 volts using Object Adapter =" + v120.getVolts());
    }
}

```