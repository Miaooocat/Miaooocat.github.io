# Javascript Notes 2 ES6


# JavaScript ES6

ECMAScript is a standardized version of JavaScript with the goal of unifying the language's specifications and features. The term **ECMAScript** is interchangeable with the term **JavaScript**.


## Basic Syntax

### `let` and `const`
- Variables declared with `let` and `const` are scoped to the block`{ }`, not to the function.
- Variables declared with `let` and `const` can only be accessed after they have been declared.
- They eliminate issues from hoisting.
- Variables declared with `let` can be reassigned, but can’t be redeclared in the same scope.
- Variables declared with `const` can’t be redeclared, or reassigned in the same scope.


### Mutateble `const` object

- Using the const declaration only prevents reassignment of the variable identifier. Value from the object can still be changed in the following method.

```js
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
```
- JavaScript also provides a function Object.freeze to prevent data mutation.
```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}
```


### Destructuring
- Data can be extracted from arrays and objects into distinct variables using destructuring.
  
#### From array

```js
const point = [10, 25, -34, 15, 9];

// destructuring
const [x, y, z] = point;
// x: 10
// y: 25
// z: -34

// ignore y
const [ x, , z ] = point;
// x: 10
// z: -34
```

#### From object

```js
const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const { type, carat } = gemstone;
// type: quartz
// carat: 21.29
```


### Template literals
- Template literals are string literals that include embedded expressions.
- Template literals in JavaScript are denoted with **backticks** ( \` ), and can template literals can contain placeholders which are represented using `${expression}`.
- Template literals can **preserve newlines** as part of the string.

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.
```


### Object literal shorthand
- If the properties have the same name as the variables being assigned to them in an object literal, variable names can be removed.

```js
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat,
  calculateWorth: function() {
    // ...
  }
};

// it is equivalent to
const gemstone = {
  type,
  color,
  carat,
  // shorthand method name
  calculateWorth() {
    // ...
  }
};
```


### Iteration
- Iterable protocol
  - Allow JavaScript objects to define or customize their iteration behavior.
- `for...of` loop
  - A loop that iterates over iterable objects.

#### Family of `for` loops
- `for` loop
  - Need to keep track of the counter and exit condition.

```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}
```

- `for...in` loop
  - Iterate with index.
  - Loop over all enumerable properties, including any additional properties of the array's prototype.

```js
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}
```

- `for...of` loop
  - Loop over any type of data that is iterable.
  - Only loop over the values in the object.

```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}
// custom function won't be included
```

#### The `iterable` protocol
- The `iterable` protocol is used for defining and customizing the iteration behavior of objects.
- Any object that is iterable can use the new `for...of` loop.
- For an object to be iterable, it must implement the `iterable` interface.
  - The iterator method is available via the constant `[Symbol.iterator]`.
  - The iterator method is a zero argument function that returns an iterator object.
  - An iterator object is an object that conforms to the iterator protocol.


#### the `iterator` protocol
- The `iterator` protocol is used to define a standard way that an object produces a sequence of values.
- This is done through implementing the `next()` method, a zero argument function that returns an object with two properties.
  - `value`: the data representing the next value in the sequence of values within the object.
  - `done`: a boolean representing if the iterator is done going through the sequence of values.
    - If `done` is `true`, then the iterator has reached the end of its sequence of values.
    - If `done` is `false`, then the iterator is able to produce another value in its sequence of values.

```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next());
// Object {value: 0, done: false}
console.log(arrayIterator.next());
// Object {value: 1, done: false}
console.log(arrayIterator.next());
// Object {value: 2, done: false}
```

```js
let randint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

create_random = {
    min: -1,
    max: 90,
    lenght: 100,
};

create_random[Symbol.iterator] = function() {
    return {
        start: 0,
        min: this.min,
        max: this.max,
        lenght: this.lenght,
        next() {
            this.start++;
            return this.start < this.lenght ? {
                done: false,
                value: randint(this.min, this.max)
            } : {
                done: true
            };
        }
    };
};

let array = Array.from(create_random);
console.log(array);
```


### Spread operator
- The spread operator (`...`) expands, or spreads, iterable objects into multiple elements.

```js
const primes = new Set([2, 3, 5, 7]);
console.log(...primes);
// 2 3 5 7
```

- This operator is useful for combining arrays.

```js
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];
```
```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
```


### Rest parameter
- The rest parameter (`...`) can represent an indefinite number of elements as an array.

```js
const order = [20.17, 18.67, "cheese", "eggs"];
const [total, subtotal, ...items] = order;
// total: 20.17
// subtotal: 18.67
// items: ["cheese", "eggs"]
```

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); 
// You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); 
// You have passed 4 arguments.
```

- Useful for defining variadic functions
  - Variadic functions are functions that take an indefinite number of arguments.

```js
// define variadic function with arguments object
function sum() {
  let total = 0;
  for(const argument of arguments) {
    total += argument;
  }
  return total;
}

// define variadic function with rest parameter
function sum(...nums) {
  let total = 0;
  for(const num of nums) {
    total += num;
  }
  return total;
}
```

## Functions

### Arrow functions
- The full name is arrow function expressions, because arrow functions are always expressions.
- Valid cases
  - Stored in a variable,
  - Passed as an argument to a function,
  - Stored in an object's property.
- Parameters
  - When there is only one parameter, the parentheses can be omitted.
  - When there is zero or multiple parameters, the parentheses cannot be omitted.
- Function body
  - Concise body syntax: when there is only a single expression, curly braces, `return`, and semi-colons can all be omitted.
  - Block body syntax: when there is more than a single expression.

Parentheses and return statement can be omitted when using arrow notation. 

```js
const fn0 = () => result;
const fn1 = _ => result;
const fn2 = singleParam => result;
const fn3 = (param1, param2) => result;
const fn4 = (param1, param2) => {
  return result;
};
```

```js
var myConcat1 = function(arr1, arr2) {
  return arr1.concat(arr2);
};

var myConcat2 = (arr1, arr2) =>  arr1.concat(arr2);
console.log(myConcat1([1, 2], [3, 4, 5]));
console.log(myConcat2([1, 2], [3, 4, 5]));
```


- When not to use arrow functions
  - Arrow functions are only expressions. There is no arrow function declaration.
  - There is a gotcha with the `this` keyword in arrow functions.


####  `this` and regular functions

| Function Call           | `this`                                                                    |
| ----------------------- | ------------------------------------------------------------------------- |
| With the `new` operator | The new object                                                            |
| With `call` / `apply`   | Specified by `call` / `apply`                                             |
| Method of an object     | The object the method is called from                                      |
| With no context         | - In non-strict mode: the global object<br/>- In strict mode: `undefined` |

####  `this` and arrow functions
- `this` is based on the function's surrounding context.
- The value of `this` inside an arrow function is the same as the value of `this` outside the function.

###  Default function parameters

```js
const fn1 = function (param1 = 'defaultValue1', param2 = 'defaultValue2') {
};
```

####  Defaults and destructuring arrays

```js
function createGrid([width = 5, height = 5]) {
  return `Generates a ${width} x ${height} grid`;
}

createGrid([]);             // Generates a 5 x 5 grid
createGrid([2]);            // Generates a 2 x 5 grid
createGrid([2, 3]);         // Generates a 2 x 3 grid
createGrid([undefined, 3]); // Generates a 5 x 3 grid
```

- The `createGrid()` function expects an array to be passed to it.
- It uses destructuring to set the first and second items in the array.
- If the array is empty or if it has only one item in it, then the default parameters kick in.

```js
createGrid();               // throws an error

function createGrid([width = 5, height = 5] = []) {
  return `Generates a ${width} x ${height} grid`;
}

createGrid();               // Generates a 5 x 5 grid
```

- The function expects an array to be passed in for destructuring.
  - Pass in non-array arguments will result in error.
  - Pass in an array, and then other arguments is fine.
- When no parameter is passed in, it throws an error.
- With `= []`, if `createGrid()` is called without any argument, it will use this default empty array. 

#### Defaults and destructuring objects
- A function can have an object be a default parameter and use object destructuring.
- An advantage of object defaults over array defaults is that it is easier to skip a parameter.

```js
function createSundae({scoops = 1, toppings = ['Hot Fudge']}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

createSundae({});
// Your sundae has 1 scoop with Hot Fudge toppings.
createSundae({scoops: 2});
// Your sundae has 2 scoops with Hot Fudge toppings.
createSundae({scoops: 2, toppings: ['Sprinkles']});
// Your sundae has 2 scoops with Sprinkles toppings.
createSundae({toppings: ['Cookie Dough']});
// Your sundae has 1 scoop with Cookie Dough toppings.
```

- The same issue applies to calling `createSundae` without any argument.
- Use `{scoops = 1, toppings = ['Hot Fudge']} = {}` to specify a default object value. 

### JavaScript class
- JavaScript classes are just a thin mirage over regular functions and prototypal inheritance.
  - The constructor function is called with the new keyword.
  - The constructor function, by convention, starts with a capital letter.
  - The constructor function controls the setting of data on the objects that will be created.
  - "Inherited" methods are placed on the constructor function's prototype object.

#### ES5 classes
```js
function Plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}

Plane.prototype.startEngines = function () {
  console.log('starting engines...');
  this.enginesActive = true;
};
```

#### ES6 classes
- ES6 provides a new `class` syntax.
- A `class` is just a function.
- When creating a new instance, the `new` keyword must be used. Otherwise, an error will be thrown.
- Use keyword `static` to mark a method as static.

```js
class Plane {
  // everything inside the constructor function
  // is inside the new constructor method
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  // methods are placed inside the class
  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}

typeof Plane; // function
```

- Benefits of classes
  - Less setup
  - Clearly defined constructor function
  - Everything is contained

### ES6 subclasses
- Use `super` and `extends` to extend a class.
- In the constructor function, `super` must be called before `this` can be used.

```js
// ES6 version

class Tree {
  constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
    this.size = size;
    this.leaves = leaves;
    this.leafColor = null;
  }

  changeSeason(season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
      this.size += 1;
    }
  }
}

class Maple extends Tree {
  constructor(syrupQty = 15, size, leaves) {
    // super as a function
    super(size, leaves);
    this.syrupQty = syrupQty;
  }

  changeSeason(season) {
    // super as an object
    super.changeSeason(season);
    if (season === 'spring') {
      this.syrupQty += 1;
    }
  }

  gatherSyrup() {
    this.syrupQty -= 3;
  }
}

// ES5 version

function Tree(size, leaves) {
  this.size = (typeof size === "undefined")? 10 : size;
  const defaultLeaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null};
  this.leaves = (typeof leaves === "undefined")?  defaultLeaves : leaves;
  this.leafColor;
}

Tree.prototype.changeSeason = function(season) {
  this.leafColor = this.leaves[season];
  if (season === 'spring') {
    this.size += 1;
  }
}

function Maple (syrupQty, size, leaves) {
  Tree.call(this, size, leaves);
  this.syrupQty = (typeof syrupQty === "undefined")? 15 : syrupQty;
}

Maple.prototype = Object.create(Tree.prototype);
// maple's prototype has been overwritten, so
// the constructor property and the original
// constructor function needs to be reconnected
Maple.prototype.constructor = Maple;

Maple.prototype.changeSeason = function(season) {
  Tree.prototype.changeSeason.call(this, season);
  if (season === 'spring') {
    this.syrupQty += 1;
  }
}

Maple.prototype.gatherSyrup = function() {
  this.syrupQty -= 3;
}
```


### Built-ins

#### Symbols
- A symbol is a unique and immutable data type that is often used to identify object properties.
- To create a symbol, write `Symbol()` with an optional string as its description.

```js
const sym1 = Symbol('apple');
console.log(sym1);
// Symbol(apple)
```

#### Uniqueness
- Each time a new symbol is created, regardless of the description.
- The description is only used to describe the symbol. It’s not used as part of the symbol itself.

```js
const sym2 = Symbol('banana');
const sym3 = Symbol('banana');
console.log(sym2 === sym3);
// false
```

#### Use case
- It is most often used to uniquely identify properties within an object.

```js
// use string as property keys, and the
// second banana overwrites the first one
const bowl = {
  'apple': { color: 'red', weight: 136.078 },
  'banana': { color: 'yellow', weight: 183.151 },
  'orange': { color: 'orange', weight: 170.097 },
  'banana': { color: 'yellow', weight: 176.845 }
};

// use symbol as property keys,
// and each symbol is unique
const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
```

### `Set`
- Sets are not indexed-based.
- Items in a `Set` cannot be accessed individually.

```js
// create
const set1 = new Set()
const set2 = new Set(array)

// modify
set1.add(element);    // return the set itself
set2.delete(element); // return true or false

// delete
set1.clear();

// check length
set1.size;

// check element existence
set2.has(element);

// retrieve all values
const iterator1 = set1.keys();   // return a SetIterator
const iterator2 = set1.values(); // return a SetIterator
```

#### `WeakSet`
- A normal `Set` with the following differences:
  - `WeakSet` only contains objects.
  - Not iterable and thus cannot be looped over.
  - Does not have a `.clear()` method.
- When an object is deleted, it will also be deleted from the `WeakSet`
 when garbage collection runs.
- `WeakSet` is useful when there needs an efficient, lightweight solution for creating groups of objects.

### `Map`
- Both the keys and the values can be objects, primitive values, or a combination of the two.

```js
const map = new Map();
map.set(key, value); // return the map itself
map.get(key);
map.delete(key);     // return true or false
map.clear();
map.has(key);
```

#### Looping through `Map`
- Default `MapIterator`

```js
const iterator1 = map.keys();
iterator1.next();

const iterator2 = map.values();
iterator2.next();
```

- `for...of` loop

```js
for (const [key, value] of map) {
  // ...
}
```

- `forEach` loop

```js
map.forEach((value, key) => fn(value, key));
```

#### `WeakMap`
- A normal `Map` with the following differences:
  - Only contain objects as keys.
  - Not iterable.
  - Does not have a `.clear()` method.
- When an object is deleted, the object key will also be deleted from the WeakMap when garbage collection runs.

### Promises
- A promise will start some work that will be done asynchronously.
- A Promise constructor takes a function with two functions.
  - When the promise succeeds, the `resolve` function will be called.
  - When the promise fails, the `reject` function will be called.

- A promise returns immediately.
- The promise object has a `.then()` method that takes in the `resolve` and `reject` functions.

```js
const promise = new Promise(function (resolve, reject) {
  if (successful) {
    resolve(arguments);
  } else {
    reject('Promise failed');
  }
});

promise.then((params) => {
  console.log(`Succeed: ${params}`);
}, (errorMessage) => {
  console.log(errorMessage);
});
```

### Proxies
- `Proxy` constructor takes in two items:
  - The object to be proxied.
  - The proxy handler object.
    - It contains the list of methods it will handle for the proxied object.
- Pass through proxy
  - `new Proxy(object, {})`
  - It just passes the request directly to the source object.

#### `get` trap
- Intercept calls to properties.
- Take over whenever any property on the proxy is accessed.

```js
const richard = {status: 'looking for work'};
const handler = {
  /**
   * @param target   the proxied object (richard)
   * @param propName the name of the property being accessed (status)
   */
  get(target, propName) {
    return target[propName];
  }
};
const agent = new Proxy(richard, handler);
```

#### `set` trap
- Intercepting code that will change a property.

```js
const richard = {status: 'looking for work'};
const handler = {
  /**
   * @param target   the proxied object (richard)
   * @param propName the name of the property being modified (payRate)
   * @param value    the new value to be set to propName (payRate)
   */
  set(target, propName, value) {
    // if the pay is being set, take 15% as commission
    if (propName === 'payRate') {
        value = value * 0.85;
    }
    target[propName] = value;
  }
};
const agent = new Proxy(richard, handler);
```

#### All traps
- `get` trap: handle calls to property access.
- `set` trap: handle setting the property to a new value.
- `apply` trap: handle being invoked (the object being proxied is a function).
- `has` trap: handle the using in operator.
- `deleteProperty` trap: handle if a property is deleted.
- `ownKeys` trap: handle when all keys are requested.
- `construct` trap: handle when the proxy is used with the new keyword as a constructor.
- `defineProperty` trap: handle when defineProperty is used to create a new property on the object.
- `getOwnPropertyDescriptor` trap: handle getting the property's descriptors.
- `preventExtenions` trap: handle calls to Object.preventExtensions() on the proxy object.
- `isExtensible` trap: handle calls to Object.isExtensible on the proxy object.
- `getPrototypeOf` trap: handle calls to Object.getPrototypeOf on the proxy object.
- `setPrototypeOf` trap: handle calls to Object.setPrototypeOf on the proxy object.

#### Proxies vs ES5 getter / setter
- With ES5's getter and setter methods, you need to know before hand the properties that are going to be get/set.
- With ES6 Proxies, we do not need to know the properties beforehand.

```js
var obj = {
  _age: 5,
  _height: 4,

  get age() {
    console.log(`getting the "age" property`);
    console.log(this._age);
  },
  get height() {
    console.log(`getting the "height" property`);
    console.log(this._height);
  }
};

obj.age;    // logs 'getting the "age" property' & 5
obj.height; // logs 'getting the "height" property' & 4
```

### Generators
- Use a generator to be able to pause a function mid-execution.
  - `function* name() { ... }`
- The asterisk of the generator can be placed anywhere between the `function` keyword and the function name.
- The community has coalesced into having the asterisk appear right next to the `function` keyword.
- Generators cannot be defined with fat arrow functions.
- Every call to `next()` will
  - Fulfill the previous yield expression if there is any;
  - Return the value following the next `yield`;
  - Pause at the same next `yield` statement.

```js
function* foo() {
  console.log(`function starts`);
  // the first next() returns 123 and pause here
  const a = (yield 123);
  console.log(`a: ${a}`);
  // the second next(456) replace (yield 123) with 456,
  // and assign it to a, print out a's value, and pause here
  yield a;
  console.log(`function ends`);
  // the third next() will print out the statement,
  // and return undefined
}

const iterator = foo();
iterator.next();
// function starts
// { value: 123, done: false }

iterator.next(456);
// a: 456
// { value: 456, done: false }

iterator.next();
// function ends
// { value: undefined, done: false }
```





Reference:
https://www.freecodecamp.org/learn/
https://github.com/tuliren/javascript-notes


