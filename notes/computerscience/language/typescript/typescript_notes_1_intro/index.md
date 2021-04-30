# TypeScript Notes 1 Intro


## Introduction

TypeScript is a statically-typed superset of JavaScript. TypeScript can be transferred to JavaScript.

## Environmental Setup

#### How to install TypeScript

```bash
npm install -g typescript
```

#### How to transfer TypeScript to JavaScript

```bash
npx tsc greeter.ts
```
```bash
npx tsc greeter.ts --out ../dist/greeter.js
```

#### How to run JavaScript in shell

```bash
node greeter.js
```


#### How to create configuration file

```
npx tsc --init
```

## Configuration

The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project.

Example tsconfig.json files:

```json
{
"compilerOptions": {
  "module": "commonjs",
  "noImplicitAny": true,
  "removeComments": true,
  "preserveConstEnums": true,
  "sourceMap": true
},
"files": [
  "core.ts",
  "sys.ts",
  "types.ts",
  "scanner.ts",
  "parser.ts",
  "utilities.ts",
  "binder.ts",
  "checker.ts",
  "emitter.ts",
  "program.ts",
  "commandLineParser.ts",
  "tsc.ts",
  "diagnosticInformationMap.generated.ts"
]
}
```

Below is with include and exclude

```json
{
"compilerOptions": {
  "module": "system",
  "noImplicitAny": true,
  "removeComments": true,
  "preserveConstEnums": true,
  "outFile": "../../built/local/tsc.js",
  "sourceMap": true
},
"include": ["src/**/*"],
"exclude": ["node_modules", "**/*.spec.ts"]
}
```




## Variable

Normally, in TypeScript, we use `let` keyword, as opposed to using traditional JavaScript `var` keywords to avoid issue with Scoping, capturing, and shadowing etc.

`let <variableName>: <type> = <inital value>`

```typescript
let found: boolean = true;
let grade: number = 88.6;
```

TypeScript is **Strongly Typed** that means we cannot use different type value in same variable. This will be detected in **compile time**.

However, there are types called `union` and `any`. This type of variable can be used for multiple type.

**Example**: Union

```typescript
let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
code = false; // Compiler Error

let empId: string | number;
empId = 111; // OK
empId = "E111"; // OK
empId = true; // Compiler Error
```


**Example**: any
```typescript
let myData: any = 40.0

myData = false;
myData = 'Test';
myData = 19;
```

In TypeScript, instead of String concatenation, we can also use template string, as below example

```typescript
let firstName: string = "testFirstName";
let lastName: string = "testLastName";

// String concatenation
console.log ("Hi" + firstName + " " + lastName)

// Template Strings
console.log(`Hi` ${firstName} ${lastName});
```


## Condition

### if else

```TypeScript
let x: number = 10, y = 20;

if (x > y) 
{
    console.log('x is greater than y.');
} 
else if (x < y)
{
    console.log('x is less than y.'); //This will be executed
}
else if (x == y) 
{
    console.log('x is equal to y');
}
```

### Ternary operator

```TypeScript
let x: number = 10, y = 20;

x > y? console.log('x is greater than y.'): console.log('x is less than or equal to y.')
```

### Switch

```TypeScript
switch(expression) { 
   case constant-expression1: { 
      //statements; 
      break; 
   } 
   case constant_expression2: { 
      //statements; 
      break; 
   } 
   default: { 
      //statements; 
      break; 
   } 
} 
```

## Loop

### for Loop

TypeScript supports the following three for loops:

* for loop

```TypeScript
for (let i = 0; i < 3; i++) {
  console.log ("Block statement execution no." + i);
}
```

* for..of loop

```TypeScript
let arr = [10, 20, 30, 40];
for (var val of arr) {
  console.log(val); // prints values: 10, 20, 30, 40
}

let str = "Hello World";
for (var char of str) {
  console.log(char); // prints chars: H e l l o  W o r l d
}
```


* for..in loop

```TypeScript
let arr = [10, 20, 30, 40];

for (var index in arr) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(arr[index]); // prints elements: 10, 20, 30, 40
}
```

### while Loop

TypeScript supports `while` loop and `do while` loop

* while loop

```TypeScript
let i: number = 2;

while (i < 4) {
    console.log( "Block statement execution no." + i )
    i++;
}
```

* do while loop

```TypeScript
let i: number = 2;
do {
    console.log("Block statement execution no." + i )
    i++;
} while ( i < 4)
```



