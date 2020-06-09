---
title: 'JavaScript(1) Baisc Language Features'
date: 2019-07-11 16:19:11
tags: 
- JavaScript
categories: 
- Web Development
notshow: true
---


# HelloWorld

```javascript
function greeting(parameterVariable) {
    console.log('Hello, World!');
    console.log('Welcome to 10 Days of JavaScript!');
}
```

# Convert Variable type

```javascript
function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    console.log(parseInt(firstInteger) + parseInt(secondInteger))
    console.log(parseFloat(firstDecimal)+parseFloat(secondDecimal))
    console.log(firstString+secondString)
}
```

# JavaScript in HTML
## JavaScript inside the HTML

```
<script type="text/javascript"> // 
    function sayHi(){
        alert("Hi!");
    }
</script>
```
## JavaScript as an external file
```
<script type="text/javascript" src="example1.js"></script>
```

# Type of JavaScript
JavaScript has 6 types that are 'undefined', 'boolean', 'string', 'number', 'object', 'function'

## typeof()
typeof() is not a function. It is an operator.
```
typeof(1); // number
typeof(true); // boolean
typeof('Hello'); // string
typeof(function(){}); // function
typeof({}); // object
typeof(null) // object
typeof(undefined) // undefined
typeof(NaN) // number
```

```
// Common type conversion
toString()
Number.parseInt()
Number.parseFloat()
```


# Variable
## VAR
var declarations are globally scoped or function/locally scoped. It is **globally scoped** when a var variable is **declared outside a function**. var is **function scoped** when it is **declared within a function**. This means that it is available and can be accessed only within that function.
To understand further, look at the example below.

```
    // Global Scoped
    var greeter = "hey hi";

    // Function Scoped
    function newFunction() {
        var hello = "hello";
    }
```

Here, greeter is globally scoped because it exists outside a function while hello is function scoped. So we cannot access the variable hello outside of a function. So if we do this:
```
    var tester = "hey hi";

    function newFunction() {
        var hello = "hello";
    }
    console.log(hello); // error: hello is not defined
```
```
// This will result undefined if we call a var before declare it

console.log(foo);
var foo = 1;
```
```
// This will result undefined if we call a var before declare it

console.log(foo);
var foo = 1;
```

```
// This will result error if we call a let before declare it
console.log(foo);
let foo = 1;
```

## LET
let is block scoped. What that means is that a variable created with the let keyword is available inside the “block{}” that it was created in as well as any nested blocks. 

## CONST
const is almost exactly the same as let. However, the only difference is that once you’ve assigned a value to a variable using const, you can’t reassign it to a new value.


# Rest Parameter
Parameter in a function with ... at the front called rest parameter. 
For rest parameter, you could put multiple arguments in side it. It should be noted rest parameter could only be placed at the end.

```
function sendCars(day, ...allCarIds){
    allCarIds.forEach( id => console.log(id))
}
sendCars('Monday', 1, 2, 3)
```

# Destructuring Arrays

Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables. 

```
// Example 1
let carIds = [1,2,5];
let [car1, car2, car3] = carIds;

console.log(car1, car2, car3);
```

```
// Example 2
//This combines the idea of destructuring Array and Rest parameter
let carIds = [1,2,5];
let car1, remainingCars;
let [car1, ... remainingCars] = carIds;
console.log(car1, car2, car3);

// Example 3
// Comma could be used to skip the parameter in array.
let [, ... remainingCars] = carIds;
console.log(remainingCars);
```
# Destructuring Objects
Destructuring Objects is similar to destructing an array but it use the {}. If the variable is declared first, we need to use ().

```
let car = { id: 5000, style: 'convertible' }
let { id, style } = car;

console.log(id, style);
```

```
let car = { id: 5000, style: 'convertible' }
let id, style;
// The bracket is required, otherwise it will get confused
({ id, style } = car);

console.log(id, style);
```

# Spread Syntax

```
function startCars(car1, car2, car3){
    console.log(car1, car2, car3);
}

let carIds = [100, 300, 500];
startCars(...carIds);
// 100 300 500
```

```
function startCars(car1, car2, car3){
    console.log(car1, car2, car3);
}

let carIds = 'abc';
startCars(...carIds);
// a b c
```



# Operator

##  Equality Operators

```
console.log(1 == 1); // true
console.log(1 === 1); // true
console.log(1 == true); // false
console.log(1 === true); // true
```

## Conditional Operators

```
// Easy If statement could be converted
console.log( 5 > 4 ? 'yes' : 'no')

```