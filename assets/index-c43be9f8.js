import{c4 as a,c5 as f}from"./index-67b5d19e.js";function n(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?n=function(e){return typeof e}:n=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}function i(t){return a(1,arguments),t instanceof Date||n(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function u(t){if(a(1,arguments),!i(t)&&typeof t!="number")return!1;var o=f(t);return!isNaN(Number(o))}function p(t,o){for(var e=t<0?"-":"",r=Math.abs(t).toString();r.length<o;)r="0"+r;return e+r}export{p as a,i as b,u as i};
