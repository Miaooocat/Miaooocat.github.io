# Javascript Study Notes



## Overview

### 1.1 Use external JavaScript

```html
<html>
    <head>
        <script type="text/javascript" src="xxx.js"> </script>
    </head>
</html>
```

### 1.2. Variable and Operators


#### Variables

**var** declarations are globally scoped or function scoped while **let** and **const** are block scoped.
**var** variables can be updated and re-declared within its scope; **let** variables can be updated but not re-declared; **const** variables can neither be updated nor re-declared.

```javascript
  x=5;
  var x=5;
  let x=5;
  const x = 5;
```


#### Arithmetic Operators:
```javascript
  +, -, *, /, % (modulus), ++, --
```

#### Assignment Operators:

```javascript
  =, +=, -=, *=, /=, %=
```

#### String addition

```javascript
  x = "5" + "5" // result is "55"
  x = 5 + "5"   // result is still "55"
```

#### Comparison operators
```javascript
  ==      // equal to
  ===     // exactly equal to (value and type)
  !=      // not equal to
  >       // greater
  <       // less
  >=      // greater than or equal to
  <=      // less than or equal to
```

#### Conditional operator
```javascript
varname = (condition)? value1: value2
```

### 1.3. Controll Structure

```javascript
  if (condition) {
  ...
  }
```

```javascript
  if (condition) {
  ...
  } else {
  ...
  }
```

```javascript
  if (condition) 
  { ... }
  else if (condition)
  { ... }
  else 
  { ... }
```

```javascript
  switch(n)
  {
      case 1:
                  code block
                  break;
      case 2:
                  code block
                  break;
      default:
                  code default block
  }
```

```javascript
  for (var=startvalue; var <= endvalue; var+var+increment)
  {
      code;
  }
```


```javascript
  for (var in object) {
      code;
  }
```

```javascript
  do {
      code;
  } while (var <= endval);
```

```javascript
while (expression) {
      code;
}
```


### Implicit Type Conversion

"3" can be converted by 3 implicitly



### Strict equality

=== and !==

Check both type and value without type conversion


### 1.4. Functions

Function can be defined as:
```javascript
function func_name(var1, var2, ... )
{
    some code
}
```
The variables declared within a function is local to the function.

### 1.5. Event


Every element on a web page has certain events which can trigger a JavaScript. Examples such as:

* onLoad and onUnload: triggered when user enters or leaves the page

* onFocus, onBlur, and onChange: often used in combination with validation of form field.
  
```html
  <input type="text" size="30" id="email" onchange="checkEmail()">
```

* onMouseOver and onMouseOut - often used to create animated button
