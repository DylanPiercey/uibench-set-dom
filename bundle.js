!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(3),a=r(i),o=n(2),d=r(o);a.default.KEY="data-id";var u=[],c=function(e){var t=document.createElement("td");return t.setAttribute("class","TableCell"),t.setAttribute("data-id",e),t.appendChild(document.createTextNode(e)),t},l=function(e){var t=e.id,n=e.active,r=e.props,i=document.createElement("tr"),a=document.createDocumentFragment();i.setAttribute("data-id",t),a.appendChild(c("#"+t));for(var o=0;o<r.length;o++)a.appendChild(c(r[o]));return i.setAttribute("data-id",t),i.setAttribute("class",n?"TableRow active":"TableRow"),i.appendChild(a),i},s=function(e){var t=e.items;u.push((0,d.default)(window,".TableCell","click",function(e){console.log("Clicked"+e.delegateTarget.firstChild.nodeValue),e.stopPropagation()},!0));for(var n=document.createElement("table"),r=document.createElement("tbody"),i=document.createDocumentFragment(),a=0;a<t.length;a++)i.appendChild(l(t[a]));return n.setAttribute("class","Table"),r.appendChild(i),n.appendChild(r),n},m=function(e){var t=e.id,n=e.time,r=document.createElement("div");return r.setAttribute("class","AnimBox"),r.setAttribute("data-id",t),r.setAttribute("style","border-radius:"+n%10+"px;background:rgba(0,0,0,"+(.5+n%10/10)+")"),r},f=function(e){for(var t=e.items,n=document.createElement("div"),r=document.createDocumentFragment(),i=0;i<t.length;i++)r.appendChild(m(t[i]));return n.setAttribute("class","Anim"),n.appendChild(r),n},p=function(e){var t=e.id,n=document.createElement("li");return n.setAttribute("class","TreeLeaf"),n.appendChild(document.createTextNode(t)),n},h=function e(t){for(var n=t.children,r=document.createElement("ul"),i=document.createDocumentFragment(),a=0;a<n.length;a++){var o=n[a];i.appendChild(o.container?e(o):p(o))}return r.setAttribute("class","TreeNode"),r.appendChild(i),r},v=function(e){var t=e.root,n=document.createElement("div");return n.setAttribute("class","Tree"),n.appendChild(h(t)),n},b=function(e){u.map(function(e){return(0,e.destroy)()}),u=[];var t=document.createElement("div");switch(t.setAttribute("class","Main"),e.location){case"table":t.appendChild(s(e.table));break;case"anim":t.appendChild(f(e.anim));break;case"tree":t.appendChild(v(e.tree))}return t};window.uibench.init("Deku","2.0.0-rc16"),document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector("#App");window.uibench.run(function(e){(0,a.default)(t,b(e))},function(e){var n=document.createElement("pre");n.appendChild(document.createTextNode(JSON.stringify(e,null," "))),(0,a.default)(t,n)})})},function(e,t){function n(e,t){for(;e&&e.nodeType!==r;){if(e.matches(t))return e;e=e.parentNode}}var r=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}e.exports=n},function(e,t,n){function r(e,t,n,r,a){var o=i.apply(this,arguments);return e.addEventListener(n,o,a),{destroy:function(){e.removeEventListener(n,o,a)}}}function i(e,t,n,r){return function(n){n.delegateTarget=a(n.target,t),n.delegateTarget&&r.call(e,n)}}var a=n(1);e.exports=r},function(e,t,n){"use strict";function r(e,t){p(e&&e.nodeType,"You must provide a valid node to update."),e.nodeType===g&&(e=e.documentElement),t.nodeType===E?o(e,t):i(e,"string"==typeof t?h(t,e.nodeName):t),e[b]||(e[b]=!0,s(e))}function i(e,t){if(e.nodeType===t.nodeType)if(e.nodeType===C){if(u(e,t))return;if(o(e,t),e.nodeName===t.nodeName)a(e.attributes,t.attributes);else{for(var n=t.cloneNode();e.firstChild;)n.appendChild(e.firstChild);e.parentNode.replaceChild(n,e)}}else e.nodeValue!==t.nodeValue&&(e.nodeValue=t.nodeValue);else e.parentNode.replaceChild(t,m(e)),s(t)}function a(e,t){var n,r,i,a,o;for(n=e.length;n--;)r=e[n],a=r.namespaceURI,o=r.localName,(i=t.getNamedItemNS(a,o))||e.removeNamedItemNS(a,o);for(n=t.length;n--;)r=t[n],a=r.namespaceURI,o=r.localName,i=e.getNamedItemNS(a,o),i?i.value!==r.value&&(i.value=r.value):(t.removeNamedItemNS(a,o),e.setNamedItemNS(r))}function o(e,t){for(var n,r,a,o,u,c,l=e.firstChild,f=t.firstChild,p=0;l;)p++,n=l,r=d(n),l=l.nextSibling,r&&(c||(c={}),c[r]=n);for(l=e.firstChild;f;)p--,a=f,f=f.nextSibling,c&&(o=d(a))&&(u=c[o])?(delete c[o],u!==l?e.insertBefore(u,l):l=l.nextSibling,i(u,a)):l?(n=l,l=l.nextSibling,d(n)?(e.insertBefore(a,n),s(a)):i(n,a)):(e.appendChild(a),s(a));for(r in c)p--,e.removeChild(c[r]);for(;--p>=0;)e.removeChild(m(e.lastChild))}function d(e){if(e.nodeType===C){var t=e.getAttribute(r.KEY)||e.id;return t?v+t:void 0}}function u(e,t){return l(e)&&l(t)||c(e)===c(t)||e.isEqualNode(t)}function c(e){return e.getAttribute(r.CHECKSUM)||NaN}function l(e){return null!=e.getAttribute(r.IGNORE)}function s(e,t){return f(e,"mount")}function m(e,t){return f(e,"dismount")}function f(e,t){if(d(e)){var n=document.createEvent("Event"),r={value:e};n.initEvent(t,!1,!1),Object.defineProperty(n,"target",r),Object.defineProperty(n,"srcElement",r),e.dispatchEvent(n)}for(var i=e.firstChild;i;)i=f(i,t).nextSibling;return e}function p(e,t){if(!e)throw new Error("set-dom: "+t)}r.KEY="data-key",r.IGNORE="data-ignore",r.CHECKSUM="data-checksum";var h=n(4),v="_set-dom-",b=v+"mounted",C=1,g=9,E=11;e.exports=r},function(e,t,n){"use strict";var r=window.DOMParser&&new window.DOMParser,i=!1,a=!1;try{r.parseFromString("<br/>","text/html")&&(i=!0)}catch(e){var o=document.implementation.createHTMLDocument(""),d=o.documentElement,u=o.body;try{d.innerHTML+="",a=!0}catch(e){r.parseFromString("<br/>","application/xhtml+xml");var c=/(<body[^>]*>)([\s\S]*)<\/body>/}}e.exports=i?function(e,t){var n=r.parseFromString(e,"text/html");return"HTML"===t?n.documentElement:n.body.firstChild}:function(e,t){if("HTML"===t){if(a)return d.innerHTML=e,d;var n=e.match(c);if(n){var i=n[2],o=n.index+n[1].length,l=o+i.length;e=e.slice(0,o)+e.slice(l),u.innerHTML=i}for(var s=r.parseFromString(e,"application/xhtml+xml"),m=s.body;u.firstChild;)m.appendChild(u.firstChild);return s.documentElement}return u.innerHTML=e,u.firstChild}},function(e,t,n){e.exports=n(0)}]);