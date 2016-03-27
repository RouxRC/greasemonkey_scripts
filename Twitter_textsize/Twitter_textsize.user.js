// ==UserScript==
// @name        Twitter textsize
// @namespace   twitter.com
// @include     https://twitter.com/*
// @grant       none
// ==/UserScript==
var elements = document.getElementsByClassName('js-tweet-text');
for(var i=0; i<elements.length; i++) { 
  elements[i].style.fontSize = '1em';
  elements[i].style.lineHeight = '1.6em';
}
