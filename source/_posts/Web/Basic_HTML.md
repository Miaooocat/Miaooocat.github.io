---
title: 'Syntax of HTML and HTML5'
date: 2019-04-14 18:06:52
tags: HTML
categories: 
- Website
- HTML
notshow: true
---
## About this page
This post is related to HTML. HTML, or HyperText Markup Language, is a markup language used to describe the structure of a web page. The basic syntax is what I learned from [freeCodeCamp](https://www.freecodecamp.org/). The advanced syntax will be on going when I work on my projects.

###  HTML
HTML stands for Hyper Text Markup Language which is used for creating web pages and web applications. 
    
**Hyper Text:** HyperText simply means "Text within Text." A text has a link within it, is a hypertext. 
**Markup Language:** A markup language is a computer language that is used to apply layout and formatting conventions to a text document. 
**Web Page:** A web page is a document which is commonly written in HTML and translated by a web browser. 

### Tags
HTML documents contain two things:
  1. content, and
  2. tags
HTML tags are composed of three things: an opening tag, content and ending tag. Some tags are unclosed tags, such as ``<image> tag, <br> tag``. 

When a web browser reads an HTML document, the browser reads it from top to bottom and left to right. HTML tags are used to create HTML documents and render their properties. Each HTML tags have different properties.
```
<!--
Content is placed between tags to display data on the web page.
-->
<tag> content </tag>  
```

### Comment
```
<!--
Comment
-->
```
### Insert image
```
<!--alt element shows when image is not available-->
<img src="https://bit.ly/fcc-relaxing-cat" alt="No image.">
```
### 

### Link to Internal Sections of a Page with Anchor Elements
```
<a href="#footer">Jump to Bottom</a>
...
...
<footer id="footer">Here</footer>
```

### Nest an Anchor Element within a Paragraph
```
View more <a href="http://freecatphotoapp.com" target="_blank">cat photos</a>
```
### Make Deadlink
href="#"
```
<!--it will point back to the website-->
<a href="#">cat photos</a>
```
### Turn an Image into a Link
```
<a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="cat."></a>
```
### Create a Bulleted Unordered List
```
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
### Create an Ordered List
```
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
### Create a Text Field
```
<input type="text">
```
<input type="text">
### Add Placeholder Text to a Text Field
```
<input type="text" placeholder="this is placeholder text">
```
<input type="text" placeholder="this is placeholder text">

### Create a Form Element
```
<form action="/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
</form>
```
<form action="/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
</form>
### To Require a Field
```
<form action="/submit-cat-photo">
    <input type="text" required placeholder="cat photo URL">
    <button type="submit">Submit</button>
</form>
```
<form action="/submit-cat-photo">
    <input type="text" required placeholder="cat photo URL">
    <button type="submit">Submit</button>
</form>

### Create a Set of Radio Buttons
```
<form action="/I dont know">
  <label for="indoor"> 
    <input id="indoor" type="radio" name="indoor-outdoor">indoor
  </label>
  <label for="outdoor"> 
    <input id="outdoor" type="radio" name="indoor-outdoor">outdoor
  </label>
</form>
```
<form action="/I dont know">
  <label for="indoor"> 
    <input id="indoor" type="radio" name="indoor-outdoor">indoor
  </label>
  <label for="outdoor"> 
    <input id="outdoor" type="radio" name="indoor-outdoor">outdoor
  </label>
</form>

### Create a Set of Checkboxes
```
<form action="/I dont know">
    <label for="Checkbox1"><input id="Checkbox1" type="checkbox" name="check"> Checkbox1</label>
    <label for="Checkbox2"><input id="Checkbox2" type="checkbox" name="check"> Checkbox2</label>
    <label for="Checkbox3"><input id="Checkbox3" type="checkbox" name="personality"> Checkbox3</label>
</form>
```
<form action="/I dont know">
    <label for="Checkbox1"><input id="Checkbox1" type="checkbox" name="check"> Checkbox1</label>
    <label for="Checkbox2"><input id="Checkbox2" type="checkbox" name="check"> Checkbox2</label>
    <label for="Checkbox3"><input id="Checkbox3" type="checkbox" name="personality"> Checkbox3</label>
</form>

### Check Radio Buttons and Checkboxes by Default
```
<label><input type="checkbox" name="personality" checked> Loving</label>
<label><input type="radio" name="indoor-outdoor"> Indoor</label>
```
<label><input type="checkbox" name="personality" checked> Loving</label>
<label><input type="radio" name="indoor-outdoor"> Indoor</label>

### Nest Many Elements within a Single div Element
The div element, also known as a division element, is a general purpose container for other elements.

### Basic html format
```
<!DOCTYPE html>
<html>
  <head>
    <!-- metadata elements -->
  </head>
  <body>
    <!-- page contents -->
  </body>
</html>
```
## Advanced Syntax of HTML and HTML5
### Navigation
```
    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
```


The label tag wraps the text for a specific form control item, usually the name or label for a choice. This ties meaning to the item and makes the form more readable. The for attribute on a label tag explicitly associates that label with the form control and is used by screen readers.

# Add an Accessible Date Picker

```
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

# Keyboard Focus When Use Tab
<div tabindex="0">I need keyboard focus!</div>