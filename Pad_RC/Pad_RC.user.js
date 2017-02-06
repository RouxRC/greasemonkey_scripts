// ==UserScript==
// @name        Pad RC
// @namespace   https://pad.regardscitoyens.org/p/affaires-courantes
// @include     https://pad.regardscitoyens.org/p/affaires-courantes
// @include     https://pad.regardscitoyens.org/p/Mails_RC
// @include     https://pad.regardscitoyens.org/p/todo-list
// @version     1
// @grant       none
// ==/UserScript==
var script = document.createElement("script");
script.type = 'text/javascript';
script.src = "https://bjperson.github.io/summarize-pad/summarize-pad.js";
document.body.appendChild(script);
