# TypeScript Notes 2 Function

## Function

### Named Functions

A named function is one where you declare and call a function by its given name. 

```TypeScript
function display() {
    console.log("Hello TypeScript!");
}

display(); //Output: Hello TypeScript 
```

Functions can also include parameter types and return type.

```TypeScript
function Sum(x: number, y: number) : number {
    return x + y;
}

Sum(2,3); // returns 5
```

### Anonymous Function

An anonymous function are stored in a variable. The function itself does not have a name. These  are invoked using the variable name that the function is stored in.

```TypeScript
let greeting = function() {
    console.log("Hello TypeScript!");
};

greeting(); //Output: Hello TypeScript! 
```

An anonymous function can also include parameter types and return type.

```TypeScript
let Sum = function(x: number, y: number) : number
{
    return x + y;
}

Sum(2,3); // returns 5
```


### Optional Parameters

TypeScript has an optional parameter functionality. The parameters that may or may not receive a value can be appended with a '?' to mark them as optional.

```TypeScript
function Greet(greeting: string, name?: string ) : string {
    return greeting + ' ' + name + '!';
}

Greet('Hello','Steve');//OK, returns "Hello Steve!"
Greet('Hi'); // OK, returns "Hi undefined!".
Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.
```

### Default Parameters

We can add default parameters to a function in case that there is no parameter passed.

```TypeScript
function Greet(name: string, greeting: string = "Hello") : string {
    return greeting + ' ' + name + '!';
}

Greet('Steve');//OK, returns "Hello Steve!"
Greet('Steve', 'Hi'); // OK, returns "Hi Steve!".
Greet('Bill'); //OK, returns "Hello Bill!"
```

We can use `undefined` to indicate we want to use default value. This is useful when we want default parameter at front.

```TypeScript
function Greet(greeting: string = "Hello", name: string) : string {
    return greeting + ' ' + name + '!';
}

Greet(undefined, 'Steve');//returns "Hello Steve!"
Greet("Hi", 'Steve'); //returns "Hi Steve!".
Greet(undefined, 'Bill'); //returns "Hello Bill!"
```
