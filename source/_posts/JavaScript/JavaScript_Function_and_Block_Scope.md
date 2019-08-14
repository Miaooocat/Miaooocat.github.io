---
title: 'JavaScript(2) Function and Scope'
date: 2019-07-17 16:19:11
tags: 
- JavaScript
categories: 
- Web Development
notshow: true
---

# IIFE
IIFE stands for Immediately Invoked Function Expression. ???It is a good way at protecting the scope of your function and the variables within it. It avoid the pollute of global variable???.

```
// Normal function
function addTogether() {
 var x = 20;
 var y = 20;
 var answer = x + y;
 console.log(answer);
 }
addTogether();
```

```
(function() {
 var x = 20;
 var y = 20;
 var answer = x + y;
 console.log(answer);
 })();
```

# Closures

Closure are nested function which has access to the outer scope. After the outer function is returned, by keeping a reference to the inner function (the closures) we prevent the outer scope to be destroyed.

```
function Person(pName){
    var _name = pName;

    // This function helps to return the var _name
    this.getName = function(){
        return _name;
    };
}

var me = new Person("Rodrigo");
me.getName();
```

```
var add = (function () {
    // The counter will not be destroyed
  var counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();
// the counter is now 3
```

# The this Keyword

```
let o ={
    carId: 123,
    getId: function(){
        console.log(this); //{carId: 123, getId: f}
        return this.carId;
    }
};

console.log(o.getId()); // 123
```

# call(), apply() and bind()

```
// Example of call()
let o = {
    carId: 123,
    getId: function(){
        return this.carId;
    }
};

let newCar = { carId: 456 };
console.log( o.getId.call(newCar) ); // 456
```

```
// Example of apply()
let o = {
    carId: 123,
    getId: function(prefix){
        return prefix + this.carId;
    }
};
let newCar = { carId: 456 };
console.log ( o.getId.apply(newCar, ['ID: ']) );
```

```
// Example of bind()

```

# Arrow Functions

# Default Parameters