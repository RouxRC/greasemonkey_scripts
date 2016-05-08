// ==UserScript==
// @name        Médiapart
// @namespace   mediapart.fr
// @include     http://www.mediapart.fr/*
// @include     https://www.mediapart.fr/*
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// ==/UserScript==
if (~window.location.href.indexOf("?onglet=full"))
  $(".content-pager, .content-page-full").css('display', 'none');
else window.location = window.location.href + "?onglet=full";
