// ==UserScript==
// @name        Mobile to web
// @include     http://m.*
// @include     https://m.*
// @include     http://mobile.*
// @include     https://mobile.*
// @description redirect mobile pages to web ones
// @grant       none
// ==/UserScript==
if (!~window.location.href.indexOf("flickr.com"))
  window.location = window.location.href.replace(/:\/\/m(obile)?\./, '://www.');
