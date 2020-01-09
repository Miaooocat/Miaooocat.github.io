---
title: 'Syntax of CSS'
date: 2019-04-14 18:06:52
tags: CSS
categories: 
- Website
- CSS
notshow: true
---
## About this page
This post is related to CSS. Cascading Style Sheets (CSS) tell the browser how to display the text and other content that you write in HTML. CSS is case-sensitive so be careful with your capitalization. CSS has been adopted by all major browsers and allows you to control the format of a webpage.
The syntax is what I learned from following source
1. [freeCodeCamp](https://www.freecodecamp.org/). 
2. [CSS Notes for Professionals](https://goalkicker.com/CSSBook/)
3. [css笔记](https://yuyang0.github.io/notes/css.html)

## Basic Syntax
Three way of using CSS
```
<!-- External Stylesheet -->
<link rel="stylesheet" href="/static/css/your.css" type="text/css" media="screen" />
<!--  Internal Styles -->
<style type="text/css" media="screen">
  p {
  color:red;
  font-size:12px;
  }
</style>
<!--Inline Styles -->
<p style="color: red; font-size: 12px;"></p>
```

## CSS Order Priority
In CSS, we often overwrite other style definition. There are rules to define the CSS order. If the CSS element in same level of priority, then, the one comes after will overwrite the one come before. If they are at different level of priority, then, we need to check their priority level.

1. !important: Highest priority
2. CSS wrote in **Inline Styles**  will overwrite others, except !important.
3. ID has next highest priority
4. Class is next highest priority than default (non-class block)

## CSS selector
```
p {color: red;}                 /*tag selector*/
body, ul, ol {}                 /*body,ul,ol标签, 有逗号就意味着平等*/

#nav {font-size: 12px;}         /*id selector*/
.sidebar {font-family:Times}    /*class selector*/

h1#content {}                       /*id为content的h1标签*/
h1.blue{}                           /*class为blue的h1标签*/

li a {text-decoration: none;}   /*descendant selector*/
li > a{text-decoration: none;}  /*和li a 的区别是这个只选择直接子节点(ie6不支持)*/
h1 + p{font-weight: bold;}      /*h1后面的第一个p节点(h1和p应该是平级的,也就是二者是兄弟节点)*/
li #content{}                   /*li下所有id为content的标签*/
li .blue{}

a:link {color: red}             /*pseudo-class selector*/
a[title] {color: red}           /*attribute selector 所有有title属性的a节点,不支持ie6及以下浏览器*/
a[href="http://www.baidu.com"] {color:red} /*所有href属性等于http://www.baidu.com的a节点*/
a[href^="http://www.baidu.com"]{color: red;} /*所有href属性以http://www.baidu.com开头的a节点*/
a[href$=".pdf"]{color: red;} /*所有指向pdf文档的a节点*/
```

### Style Color Change
```
<h2>CatPhotoApp</h2>
<h2 style="color: red;">CatPhotoApp</h2>
// Alternative way to change all style
<style>
  h2 {color: blue;}
</style>
// Alternative way to style by class
<style>
  .blue-text {
    color: blue;
  }
</style>
<h2 class="blue-text">CatPhotoApp</h2>
```
### Style Font Change
```
<style>
  p {
  // Change element p to font size 16px
  font-size: 16px;
  // Change element p to sans-serif, if sans-serif is not available, change to monospace
  font-family: sans-serif,monospace;
}
</style>
```
### To Import Font Library
```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
```

### Image 
```
<style>
// Change image size
  .larger-image {
    width: 500px;
  }
  // add borderline
  .thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
  }
</style>
// To have two classes
<img class="class1 class2">
```

### Set Background Color
```
.silver-background {
  background-color: silver;
}
```
### Set id of a element
Reference a class with .
Reference an id with #
```
#cat-photo-form {
  background-color: green;
}
<h2 id="cat-photo-app">
```

Three important properties control the space that surrounds each HTML element: padding, margin, and border.
An element's padding controls the amount of space between the element's content and its border.
An element's margin controls the amount of space between an element's border and surrounding elements.

Instead of specifying an element's padding-top, padding-right, padding-bottom, and padding-left properties individually, you can specify them all in one line, like this:

padding: 10px 20px 10px 20px;

id
class 
type (Selectors)


In the event of a conflict, the browser will use whichever CSS declaration came last.
The id attribute will always take precedence.
Override All Other Styles by using Important
!important

Create a custom CSS Variable
```
--penguin-skin: gray;
background: var(--penguin-skin);
```

### Attach a Fallback value to a CSS Variable
When using your variable as a CSS property value, you can attach a fallback value that your browser will revert to if the given variable is invalid.
```
// black is the fallback value here.
background: var(--penguin-skin, black);
```


Note: This fallback is not used to increase browser compatibilty, and it will not work on IE browsers. Rather, it is used so that the browser has a color to display if it cannot find your variable.

Cascading CSS variables


media query 

Adjust the Hover State of an Anchor Tag
```
<style>
  a {
    color: #000;
  } 
  a:hover {
  color: blue;
} 
</style>
<a href="http://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```


CSS treats each HTML element as its own box, which is usually referred to as the CSS Box Model

z-index change order of stack



 How the CSS @keyframes and animation Properties Work
 ```
 #anim {
  animation-name: colorful;
  animation-duration: 3s;
}
@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
 ```
Use CSS Animation to Change the Hover State of a Button
 ```
 <style>
  img:hover {
    animation-name: width;
    animation-duration: 500ms;
  }
  @keyframes width {
    100% {
      width: 40px;
    }
  }
</style>
<img src="https://bit.ly/smallgooglelogo" alt="Google's Logo" />
 ```

keyframes
 animation-fill-mode: forwards
 animation-name:
 animation-duration: 1000ms
 animation-iteration-count: infinite; or num;
 animation-timing-function: linear; or ease-out; or cubic-bezier(0.25, 0.25, 0.75, 0.75);

### Responsive Web Design Principles
Responsive Web Design is an approach to designing web content that responds to the constraints of different devices. 


#### Media Query
Media Queries introduced in CSS3 changes the presentation of content based on different viewport sizes. 
```
@media (max-width: 100px) { /* CSS Rules */ } // When viewport size less than 100px
@media (min-height: 350px) { /* CSS Rules */ } // When viewport size larger than 350px
```
The following code makes images responsive. 
```
img {
  max-width: 100%; // Set the size of the image that won't pass its orignal 100%
  display: block; 
  height: auto; // The height property of auto keeps the original aspect ratio of the image.
}
```
```
<style>
  h2{
      width: 80vw; // would be 10% of the viewport's width
  }
p{
      width: 75vmin; would be 70% of the viewport's smaller dimension
  }
</style>
```