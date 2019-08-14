---
title: 'Markdown Syntax'
date: 2019-03-30 18:06:52
tags: Markdown
categories: 
- Others
notshow: true
---
## About this page
This page refers to the [Markdown guide basic syntax](https://www.markdownguide.org/basic-syntax). The purpose of making such document is to test out the different syntax of Markdown.

## 0. Important Note
 Using Markdown doesn't mean that we can't also use HTML. It is possible to add HTML tags to any Markdown file. 

## 1. Heading
To create a heading, add number signs (#) in front. The number of number signs correspnd to the heading level.
| Markdown            | 
|---------------------| 
| # Heading level 1   |
| ## Heading level 2  |
| ###### Heading level 6 | 
----
## 2. Emphasis
Markdown support emphasis by making text bold or italic.
| Markdown            | Rendered Output          |
|---------------------| -|
| * Italic*: |*Italic*|
| ** Bold**  | **Bold**|
| *** Bold and Italic*** |  ***Bold and Italic***|
| ~~ StrikeThrough~~ | ~~StrikeThrough~~|
    *No space in the above Markdown block


## 3. Blockquotes
To create a blockquote, add a > in front of a paragraph.
    > Reference
    >>Nested Blockquotes
>Reference
>>Nested Blockquotes
## 4. Divide line
To create a horizontal line, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves.
    --- 
    ***

---

## 5. Picture
To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title after the URL in the parentheses.

    ![Picture title](Picture address''Picture content when
    cursor move on that)
## 6. FlowChart
To create a flow chart, use the following format
    ```flow
    st=>start: Start
    op=>operation: My Operation
        cond=>condition: Yes or No?
    e=>end
    st->op->cond
    cond(no)->op
    cond(yes)->e
    ```
```flow
st=>start: Start
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(no)->op
cond(yes)->e
```
## 7. Table
Name|Name|Name
    ---(left alignment)|:--:(center)|---:(right alignment)
    Content|Content|Content
    Content|Content|Content
Name|Name|Name
---|:--:|---:
Content|Content|Content
Content|Content|Content

## 8. Code
To denote a word or phrase as code, enclose it in two tick marks `` (One at front, one at back).
`Hello World`
To create code blocks, indent every line of the block by at least four spaces or one tab, or enclose it in 6 tick marks ``` (Three in each side).
```
#include <stdio.h>
int main(){
    printf("Hello, World!");
    return 0;
}
```
## 9. Link
To create a link, enclose the link text in brackets (e.g., [Google]) and then follow it immediately with the URL in parentheses (e.g., (www.google.com)).
This is a hyperlink [Google](www.google.com)

## 10. URLs and Email Addresses
To quickly turn a URL or email address into a link, enclose it in angle brackets.
```
<https://www.markdownguide.org>
<fake@example.com>
```
The rendered output looks like this:
<https://www.markdownguide.org>
<fake@example.com>