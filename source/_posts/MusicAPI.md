---
title: 'Hexo music player - Aplayer'
date: 2019-03-30 18:06:52
tags: 
- Hexo
- Javascript
categories: 
- Website
- Hexo
notshow: true
---
## About this post
This post is about to use Aplayer to set up a music player that can play music list from major music servers including netease, tencent, xiami, kugou and baidu in my blog (powered by hexo).

## Source
Aplayer is a HTML5 music player, and MetingJS is used to interprete music hyperlink. 
>hexo-tag-player Install Instruction: 
https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md

Following this instruction, you could add a music player in your blog. However, it requires you to build a music list. The list requires your to give music link yourself.
Thus, we could use the following code as an alternative that helps to transfer music playlist ID to music.

```
const apFixed = new APlayer({
  element: document.getElementById('aplayer'),
  mutex: true,
  theme: '#97dffd',
  order: 'random',
  lrcType: 3,
  fixed: true,
});
$.ajax({
  url: 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=60198',
  success: function (list) {
    apFixed.list.add(JSON.parse(list));
  }
});
```
## P.S.,
**禁止一切商用**
这是一个用来在海外免费听国内音乐的办法。现在就算买了会员也把音乐禁了。在不想用VPN翻回国情况下只能这么办。
原code 是从[bilibili前端大神DIYgod](https://diygod.me/)的网站上用inspect->source扒下来的.
