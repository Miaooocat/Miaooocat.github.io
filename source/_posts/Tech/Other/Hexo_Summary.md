---
title: 'Summary of Building this Website'
date: 2019-03-30 18:06:52
tags: 
- Javascript
categories: 
- Website
- Hexo
notshow: true
---
## About this post
In here, I will present most of features that I have added to my website. This also includes some knowledge that I acquired during setting up this site.

---
## What is Hexo
Hexo is a blog framework that generate static site. It has several advantages
1. Support markdown
2. Node.js
3. Fast and simple
4. It can be connected to Github 

Installation and set-up is available in [Hexo Documentation](https://hexo.io/docs/).
In this site the theme NexT is used and is modified. The installation could be found in [NexT](https://theme-next.iissnan.com/).

## Hexo Command
```
hexo init [dir]     // Initializes a website in dir
hexo new [layout] <title>    //Creates a new article. If no layout is provided, Hexo will use the default_layout from _config.yml.
hexo g     // Generate static files in public directory
hexo s     // Open in local server
hexo clean    // Delete file in public
hexo d     // Deploy
git push -u origin feature_branch_name     // Back-up for all the file in a branch in github
```
## pjax
The pjax is a jQuery plugin that uses ajax and pushState to deliver a fast browsing experience. The pjax works by fetching HTML from server via ajax and replacing the content of a container element on your page with the loaded HTML. It then updates the current URL in the browser using pushState. This results in faster page navigation for two reasons:
1. No page resources (JS, CSS) get re-executed or re-applied;
2. If the server is configured for pjax, it can render only partial page contents and thus avoid the potentially costly full layout render.
  
The installation could be found in the [link](https://github.com/defunkt/jquery-pjax). Yet, it require you to understand some basic knowledge of node.js when setting up it.
 1. Import jQuery and jQuery.pjax
```
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery.pjax/1.9.6/jquery.pjax.min.js"></script>
```
 2. Change the a link to pjax style

```
$(document).pjax('.#menu a', '.pjax', {fragment:'.pjax', timeout:8000});
```
 3. To add some customrized things
```
$(document).on({
  'pjax:click': function() {
      ....
  },
  'pjax:start': function() {
      ....
  },
  'pjax:end': function() {
      ....
  }
});
```

## https encrypt
URL link that begins with HTTP uses a basic type of "hypertext transfer protocol" that focused on presenting the information, but cares less about the way the information transfer. This will lead to information leakage (for example: password, credit card).

HTTPS refers to same "hypertext transfer protocol" but establishes an encrypted connection between a web server and a browser. Now, HTTPS can also help with SEO in most search engines.

## Music player
Please check with this [link](https://miaocat.me/2019/03/30/MusicAPI/)

## Get own domain
After purchasing a domain, then add a CNAME file with domain name