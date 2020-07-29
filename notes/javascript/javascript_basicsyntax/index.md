# Javascript Notes(1) Basic Syntax 



## Variable

### var vs let vs const

**var** declarations are globally scoped or function scoped while **let** and **const** are block scoped.

**var** variables can be updated and re-declared within its scope; **let** variables can be updated but not re-declared; **const** variables can neither be updated nor re-declared.


### Primitive types
undefined
null
String
Boolean
Number


### Implicit Type Conversion

"3" can be converted by 3 implicitly



### Strict equality

=== and !==

Check both type and value without type conversion


## Conditions

### Truthy values and falsy values
Every value in JavaScript has an inherent boolean value

**Falsy values**
false
""
null type
undefined type
0
NaN


**Truthy values**
Everything else
such as 
0.0
"null" or any ohter string

### Switch statement

Each case statement is equivalent to ===

```javascript
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

### Loops

#### While loop

```javascript
while (<expression>) {
  <code-block>
}
```

#### For loop

```javascript
for (<start>; <stop>; <step>) {
  <code-block>
}

```
