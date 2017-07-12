// ==UserScript==
// @name        LeMonde.fr
// @namespace   lemonde.fr
// @include     http://www.lemonde.fr/*
// @include     http://abonnes.lemonde.fr/*
// @grant       none
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// ==/UserScript==
$(".article_noscript, #navigation-generale, #header-page").remove();
if ($(".ea_article").length && !/abonnes.lemonde.fr/.test(window.location))
  window.location = window.location.href.replace(/:\/\/www\./, '://abonnes.');
