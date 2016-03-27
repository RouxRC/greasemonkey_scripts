// ==UserScript==
// @name        NetVibes
// @namespace   netvibes.com
// @grant       none
// @include     https://www.netvibes.com/privatepage/*
// ==/UserScript==

var node = document.createElement('script');
node.innerHTML = "function cleanLinks() { var links = document.getElementsByTagName('a'); for(var i=0; i<links.length; i++) { links[i].setAttribute('href', links[i].href.replace(/^.*news.google.com\\\/news\\\/url.*url=http/, 'http').replace(/([?&#](utm_(term|medium|source|campaign|content)|xtor|ens_id)=[^&#]*)+/, '')); } }"
document.body.appendChild(node);
window.setInterval(cleanLinks, 1000);

var node = document.createElement('style');
node.innerHTML = '.rssItemList li.read a:visited, .nv-feedList li.read a:visited, .rssItemList li.unread a:visited, .nv-feedList li.unread a:visited { color: #9C9 }';
document.body.appendChild(node);

var node = document.createElement('style');
node.innerHTML = '.rssItemList li.unread a, .nv-feedList li.unread a { font-weight: bold }';
document.body.appendChild(node);

var node = document.createElement('style');
node.innerHTML = '.nv-ir-content-wrapper { max-width: 3000px }';
document.body.appendChild(node);
