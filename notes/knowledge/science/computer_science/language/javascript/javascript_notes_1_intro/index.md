# Javascript Notes 1 Intro



## History of JavaScript
- LiveScript -> JavaScript
- [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) (ES5, ES6)
  - ECMAScript (ES) is a scripting-language specification standardized by Ecma International.
  - It was created to standardize JavaScript.
  - JavaScript has remained the best-known implementation of ECMAScript.
- ECMAScript (ES2016, ES2017)

## HTML, CSS vs JavaScript
- HTML and CSS
  - Markup language used to describe and define elements within a document.
- JavaScript
  - Programming language used to communicate instructions to a machine.


## Data Types

- Primitive types
  - `undefined`
  - `null`
  - String
  - Boolean
  - Number
- `null`
  - Data type
  - Value of nothing
- `undefined`
  - Data type
  - Absence of value, meaning nothing is assigned to a variable.
- `NaN`
  - Number type
  - Not a number
  - 'Hello' % 10 => `NaN`
    - Type coercion converts `Hello` to number, `NaN`
- Implicit type coercion
  - `"3"` can be converted by `3` implicitly

- Strict equality
  - `===` and `!==`
  - Check both type and value without type conversion


# Conditionals

## Truthy values and falsy values
- Every value in JavaScript has an inherent boolean value.
- Falsy values
  - `false`
  - `""`
  - `null` type
  - `undefined` type
  - `0`
  - `NaN`
- Truthy values
  - Everything else
  - `0.0`
  - `"null"`

## Switch statement
```js
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```
- Each `case` statement is equivalent to `===`


## Loop

- While loop
```js
while (<expression>) {
  <code-block>
}
```

- For loop
```js
for (<start>; <stop>; <step>) {
  <code-block>
}
```


## Functions

### Syntax
```js
function name(params) {
  // code block
}
```

### Parameter vs argument
- Parameter: a variable name that appears in the function declaration.
- Argument: a value that appears in the code when the function is invoked.
- Parameters are always passed by value.

### Return value
- A function always returns some value back to the caller.
- When return value is not specified, the function will return `undefined`.
  - E.g. `console.log`

### Scope
- Global scope
  - Variables defined outside of an function
- Function scope

### Shadowing
- Global variable can be overriden inside a function.
- Preventable by redeclaring the same variable in the function.

```js
// shadowing
var a = "a";
var b = "b";
function shadow() {
  a = "c";     // shadowing
  var b = "c"; // no shadowing
}

console.log(a); // a
console.log(b); // b
shadow();
console.log(a); // c, shadowed
console.log(b); // b
```

### Hoisting
- Before any JavaScript is executed, all function declarations are "hoisted" to the top of their current scope.
- Functions can be called before they are defined in a scope.
- Only declaration is hoisted. Assignment is not. So hoisted variables can still be undefined.
- The best practice is to define functions at the top of the scripts, and variables at the top of the functions.

```js
// only declaration is hoisted
function sayGreeting() {
  console.log(greeting);
  var greeting = "hello";
}
sayGreeting(); // undefined

// equivalent function
function sayGreeting() {
  var greeting;
  console.log(greeting);
  greeting = "hello";
}

// hoisting prevents access of global variable
var greeting = "hello";
function sayGreeting() {
  console.log(greeting); // undefined
  var greeting = "hello2";
}
sayGreeting(); // undefined
```

### Function as parameters
- A function passed into another function is called a **callback**.


### Function expressions
- A function stored in a variable.
- Anonymous function.

```js
var variable = function(params) {
  // anonymous function body
}

variable();
```

- Use the variable name to call the function.
- Function expressions are not hoisted.

```js
sayGreeting(); // sayGreetings is not a function
var sayGreeting = function() {
  console.log("hello");
}

// equivalent code
var sayGreeting;
sayGreeting();
sayGreeting = function() {
  console.log("hello");
}
```

### Named function expressions
```js
var variable = function name(params) {
  // function body
}
variable();
// call name() gives an error
```

### Inline function expressions
- Using function expressions that pass a function into another function inline, is really common in JavaScript.
```js
function movies(messageFunction, name) {
  messageFunction(name);
}

movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
```

- Anonymous inline function expressions are often used for function callbacks that are not going to be reused elsewhere.

```js
function movies(messageFunction, name) {
  messageFunction(name);
}

movies(function(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
```


## Array properties
- `length`

## Array methods
- `reverse()`
- `sort()`
- `push()`: return the length of the array after the push
- `pop()`
- `shift()`: remove first element, and return the removed element
- `join(delimiter)`: concatenate the elements into a string
- [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
  - Add or remove elements from anywhere in an array
  - Return an arrary of removed elements
  - Parameters
    - index
    - number of elements to remove
    - elements to add
  - `push(item)` is equivalent to `splice(array.length, 0, item)`
  - `pop()` is equivalent to `splice(-1, 1)` or `splice(array.length - 1, 1)`

## `forEach()`
  - element
  - index (optional)
  - array (optional)
- Return `undefined`
- Iterate through at most the number of elements before iteration
  - If new elements are added, they may be iterated as long as their index is wihtin the original iteration range.
  - If some elements are deleted, the iteration will not run into overflow issue.
- Iterate the next element according to index

```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

```js
a = [0, 1, 2];
a.forEach(function(element, index, array) {
  console.log("index " + index + " before: " + element + ", " + array);
  if (index === 1) {
    array.splice(index, 0, 10);
  }
  console.log("index " + index + " after:  " + element + ", " + array);
});

// index 0 before: 0, 0,1,2
// index 0 after:  0, 0,1,2
// index 1 before: 1, 0,1,2
// index 1 after:  1, 0,10,1,2
// index 2 before: 1, 0,10,1,2
// index 2 after:  1, 0,10,1,2
```
- In the example, an element is added to the array, but the iteration only goes through three elements.
- Element `1` is iterated through twice, because it is the second element before the change, and then pushed to the third position after the change, and the iteration goes from second to third position, regardless of the added element.

- Elemented are passed by value ([reference](https://stackoverflow.com/a/31298343))
```js
var arr = [{ num : 1 }, { num : 2 }, { num : 3 }];
arr.forEach(function(part, index) {
  // part and arr[index] point to the same object, so
  // changing the object that part points to also changes
  // the object that arr[index] points to
  part.num = 4;
});
console.log(arr);
// [{ num : 4 }, { num : 4 }, { num : 4 }]

var arr = [{ num : 1 }, { num : 2 }, { num : 3 }];

arr.forEach(function(part, index) {
  // change part to point to a new object will
  // not change the objects stored in arr
  part = 4;
});
console.log(arr);
// [{ num : 1 }, { num : 2 }, { num : 3 }]
```

## map()
- Return a new array from the original array

```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

## Object

- Objects are data structures that store data, and help track of that data by keys.
- Objects have properties and methods.
- `typeof` operator: return name of the data type
- Object-literal notation
```js
var umbrella = {
  color: 'red',
  isOpen: false,
  open: function() {
    umbrella.isOpen = true;
  }
}
```
- Data retrieval
  - Bracket notation: `umbrella['color']`
  - Dot notation: `umbrella.color`
- Naming conventions
  - Don't wrap property names in quotes.
  - Special propery names can be put inside quotes. But they are not compatible with dot notations.
  - Don't use numbers as first character as property names.
  - Don't include space or `-` in property names.
  - Use camel case for multi-word property names.


## Reference:
https://www.freecodecamp.org/learn/
https://github.com/tuliren/javascript-notes


