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

## Arrow Function

Arrow => can replace the function keyword. Parameters are passed in the parenthesis (), and the function expression is enclosed within the curly brackets { }.

```TypeScript
let sum = (x: number, y: number): number => {
    return x + y;
}

sum(10, 20); //returns 30
```
If there is no parameter in a function, we can use an empty bracket.

```TypeScript
let Print = () => console.log("Hello TypeScript");

Print(); //Output: Hello TypeScript
```

If the function body consists of only one statement then no need for the curly brackets and the return keyword, as shown below.

```TypeScript
let sum = (x: number, y: number) => x + y;

sum(3, 4); //returns 7
```


### Arrow Function as Property

A class can include an arrow function as a property, as shown below:

```TypeScript
class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    display = () => console.log(this.empCode +' ' + this.empName)
}
let emp = new Employee(1, 'Ram');
emp.display();
```

### Function Overloading

```TypeScript

function add(a:string, b:string):string;

function add(a:number, b:number): number;

function add(a: any, b:any): any {
    return a + b;
}

add("Hello ", "Steve"); // returns "Hello Steve" 
add(10, 20); // returns 30 
```



### Rest Parameters

Rest parameters can be used to pass n number of parameters easily. The compiler will create an array of arguments with the rest parameter name provided by us. The below is the example:

```TypeScript
function Greet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}

Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"

Greet("Hello");// returns "Hello !"
```

