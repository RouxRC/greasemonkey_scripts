// ==UserScript==
// @name        NetVibes
// @namespace   netvibes.com
// @grant       none
// @include     https://www.netvibes.com/privatepage/*
// ==/UserScript==

var node = document.createElement('script');
node.innerHTML = "function cleanLinks() { var links = document.getElementsByTagName('a'); for(var i=0; i<links.length; i++) { links[i].setAttribute('href', links[i].href.replace(/^.*news.google.com\\\/news\\\/url.*url=http/, 'http').replace(/([?&#](utm_(term|medium|source|campaign|content)|xtor|ens_id)=[^&#]*)+/, '').replace(/^(https?:\\\/\\\/www.mediapart.fr\\\/.*?)(\\\?onglet=full)?$/, '$1?onglet=full')); } }"
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

var node = document.createElement('style');
node.innerHTML = '#viewType-2 a:visited, #viewType-2 a:visited .item-preview-wrapper, #viewType-2 a:visited .item-title { color: #AAA }' +
'#viewType-2 a, #viewType-2 a .item-preview-wrapper, #viewType-2 a .item-title { color: #666 }';
document.body.appendChild(node);

var node = document.createElement('style');
node.innerHTML = '.nv-sidebar-right { display: none }';
document.body.appendChild(node);

