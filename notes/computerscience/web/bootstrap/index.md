# Bootstrap



## Introduction

Bootstrap is a free front-end framework that provide designed template for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins. Bootstrap gives the ability to easily create responsive designs.

## How to use Bootstrap 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Basic Bootstrap Template</title>
    <!-- Bootstrap CSS file -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
</head>
<body>
    <h1>Hello, world!</h1>
    <!-- JS files: jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>
</html>
```

## Containers

Bootstrap requires a containing element to wrap site contents.

Containers are used to pad the content inside of them, and there are two container classes available:

The .container class provides a responsive fixed width container
The .container-fluid class provides a full width container, spanning the entire width of the viewport
An illustration of the containers in bootstrap


### Fixed Container

Use the .container class to create a responsive, fixed-width container.

```html
<div class="container">
  <h1>My First Bootstrap Page</h1>
  <p>This is some text.</p>
</div>
```

### Fluid Container

Use the .container-fluid class to create a full width container, that will always span the entire width of the screen (width is always 100%):

```html
<div class="container-fluid">
  <h1>My First Bootstrap Page</h1>
  <p>This is some text.</p>
</div>
```

### Container Padding， Border and Color

Padding， Border and Color can be adjusted as following examples


```html
<div class="container pt-3"></div>

<div class="container p-3 my-3 border"></div>

<div class="container p-3 my-3 bg-dark text-white"></div>

<div class="container p-3 my-3 bg-primary text-white"></div>

```

### Responsive Containers

`.container-sm|md|lg|xl` classes can be used to create responsive containers.

```html
<div class="container-sm">.container-sm</div>
<div class="container-md">.container-md</div>
<div class="container-lg">.container-lg</div>
<div class="container-xl">.container-xl</div>
```

| Class           | Extra small<br><576px | Small<br>≥576px | Medium<br>≥768px | Large<br>≥992px | Extra large<br>≥1200px |
| --------------- | --------------------- | --------------- | ---------------- | --------------- | ---------------------- |
| `.container-sm` | 100%                  | 540px           | 720px            | 960px           | 1140px                 |
| `.container-md` | 100%                  | 100%            | 720px            | 960px           | 1140px                 |
| `.container-lg` | 100%                  | 100%            | 100%             | 960px           | 1140px                 |
| `.container-xl` | 100%                  | 100%            | 100%             | 100%            | 1140px                 |

