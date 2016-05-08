// ==UserScript==
// @name        LeMonde.fr
// @namespace   lemonde.fr
// @include     http://www.lemonde.fr/*
// @grant       none
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// ==/UserScript==
$(".article_noscript").remove();
if ($(".ea_article").length)
  window.location = window.location.href.replace(/:\/\/www\./, '://abonnes.');
