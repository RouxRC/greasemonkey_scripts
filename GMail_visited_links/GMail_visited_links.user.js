// ==UserScript==
// @name        GMail visited links
// @namespace   mail.google.com
// @include     https://mail.google.com/*
// @grant       none
// ==/UserScript==

var node = document.createElement('style');
node.innerHTML = '.gt a:visited { color: #828 }';
document.body.appendChild(node);

