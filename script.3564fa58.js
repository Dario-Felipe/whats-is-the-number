parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(F){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof g?r:g,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return T()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(F){return{type:"throw",arg:F}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function g(){}function d(){}function m(){}var w={};u(w,i,function(){return this});var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:r,done:!0}}return d.prototype=m,u(b,"constructor",m),u(m,"constructor",d),d.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),u(_.prototype,a,function(){return this}),t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),u(b,i,function(){return this}),u(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}
},{}],"Zvlv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={api:{URL:"https://us-central1-ss-devops.cloudfunctions.net/",params:{MIN:1,MAX:300}},classes:{RESULTS_CONTENT:"results-content",DISPLAY_CONTENT:"display-content",DISPLAY_TITLE:"display-title",DISPLAY:"display",SEGMENT:"segment",FILLED:"filled",PLAY_AGAIN_BUTTON:"play-again-button",HIDDEN:"hidden",ERROR:"error",SUCCESS:"success",SEARCH_INPUT:"search-input",SEND_BUTTON:"send-button"},guessResults:{NUMBER_IS_BIG:"É maior",NUMBER_IS_SMALL:"É menor",NUMBER_IS_RIGHT:"Você acertou!!!"},guessStatus:{SUCCESS:"success",ERROR:"error"},alertMessages:{ONLY_NUMBERS:"Apenas números são permitidos",NUMBER_MIN_MAX:"Palpite mínimo: 1, Palpite máximo: 300",SOMETHING_IS_WRONG:"Deu algo errado, tente novamente mais tarde :("}},s=e;exports.default=s;
},{}],"jMNs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../constants/index.js"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t,r,n,a,u,o){try{var s=e[u](o),c=s.value}catch(i){return void r(i)}s.done?t(c):Promise.resolve(c).then(n,a)}function n(e){return function(){var t=this,n=arguments;return new Promise(function(a,u){var o=e.apply(t,n);function s(e){r(o,a,u,s,c,"next",e)}function c(e){r(o,a,u,s,c,"throw",e)}s(void 0)})}}function a(){return u.apply(this,arguments)}function u(){return(u=n(regeneratorRuntime.mark(function t(){var r,n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("".concat(e.default.api.URL,"/rand")),n={min:e.default.api.params.MIN,max:e.default.api.params.MAX},Object.keys(n).forEach(function(e){r.searchParams.append(e,n[e])}),t.prev=3,t.next=6,fetch(r,{method:"GET"});case 6:return a=t.sent,t.abrupt("return",a.json());case 10:t.prev=10,t.t0=t.catch(3),alert(e.default.alertMessages.SOMETHING_IS_WRONG);case 13:case"end":return t.stop()}},t,null,[[3,10]])}))).apply(this,arguments)}var o=a;exports.default=o;
},{"../constants/index.js":"Zvlv"}],"zNyX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var e=t(require("../../constants/index.js"));function t(e){return e&&e.__esModule?e:{default:e}}function n(){document.querySelector(".".concat(e.default.classes.DISPLAY_CONTENT)).innerHTML=""}
},{"../../constants/index.js":"Zvlv"}],"lBcr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var e=a(require("../../constants/index.js"));function a(e){return e&&e.__esModule?e:{default:e}}function s(a,s){var r=[];switch(a){case"0":r=["A","B","C","D","E","F"];break;case"1":r=["B","C"];break;case"2":r=["A","B","D","E","G","H"];break;case"3":r=["A","B","C","D","G","H"];break;case"4":r=["B","C","F","G","H"];break;case"5":r=["A","C","D","F","G","H"];break;case"6":r=["A","C","D","E","F","G","H"];break;case"7":r=["A","B","C"];break;case"8":r=["A","B","C","D","E","F","G","H"];break;case"9":r=["A","B","C","D","F","G","H"];break;default:r=[]}Array.from(s.childNodes).forEach(function(a){r.includes(a.getAttribute("class").split(" ")[1])&&a.classList.add(e.default.classes.FILLED)})}
},{"../../constants/index.js":"Zvlv"}],"lamK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=s(require("../../constants/index.js")),t=s(require("./clear.js")),a=s(require("./fillSegments.js"));function s(e){return e&&e.__esModule?e:{default:e}}function r(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=Array.from(s.toString()),d=["A","B","C","D","E","F","G","H"];(0,t.default)(),r.forEach(function(t){var s=document.createElement("div");s.classList.add(e.default.classes.DISPLAY),d.forEach(function(t){var a=document.createElement("div");a.classList.add(e.default.classes.SEGMENT),a.classList.add(t),s.appendChild(a)}),(0,a.default)(t,s),document.querySelector(".".concat(e.default.classes.DISPLAY_CONTENT)).appendChild(s)})}
},{"../../constants/index.js":"Zvlv","./clear.js":"zNyX","./fillSegments.js":"lBcr"}],"F3fd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("./generate.js")),r=l(require("./fillSegments.js")),t=l(require("./clear.js"));function l(e){return e&&e.__esModule?e:{default:e}}var a={generateDisplay:e.default,fillSegments:r.default,clearDisplays:t.default},s=a;exports.default=s;
},{"./generate.js":"lamK","./fillSegments.js":"lBcr","./clear.js":"zNyX"}],"olNn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var e=t(require("../../constants/index.js"));function t(e){return e&&e.__esModule?e:{default:e}}function s(t){var s,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";null===(s=document.querySelector(".".concat(e.default.classes.DISPLAY_TITLE)))||void 0===s||s.remove();var l=document.querySelector("#".concat(e.default.classes.SEND_BUTTON)),a=document.querySelector(".".concat(e.default.classes.SEARCH_INPUT)),d=document.querySelector(".".concat(e.default.classes.RESULTS_CONTENT)),o=document.querySelector(".".concat(e.default.classes.PLAY_AGAIN_BUTTON)),u=document.createElement("h5");u.classList.add(e.default.classes.DISPLAY_TITLE),c.length&&(d.classList.add(c),o.classList.toggle(e.default.classes.HIDDEN),o.focus(),a.disabled=!0,l.disabled=!0),u.textContent=t,d.prepend(u)}
},{"../../constants/index.js":"Zvlv"}],"HDaQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;var e=t(require("../../constants/index.js")),a=t(require("../display/index.js")),u=t(require("./validate.js"));function t(e){return e&&e.__esModule?e:{default:e}}function l(t,l){t.preventDefault();var s,r,d=document.querySelector(".".concat(e.default.classes.SEARCH_INPUT));return d.value=Number(d.value),d.value.match(/^[0-9]+$/)?d.value<e.default.api.params.MIN||d.value>e.default.api.params.MAX?(alert(e.default.alertMessages.NUMBER_MIN_MAX),void(d.value="")):(d.value>l?s=e.default.guessResults.NUMBER_IS_SMALL:d.value<l?s=e.default.guessResults.NUMBER_IS_BIG:(s=e.default.guessResults.NUMBER_IS_RIGHT,r=e.default.guessStatus.SUCCESS),(0,u.default)(s,r),a.default.generateDisplay(d.value),void(d.value="")):(alert(e.default.alertMessages.ONLY_NUMBERS),void(d.value=""))}
},{"../../constants/index.js":"Zvlv","../display/index.js":"F3fd","./validate.js":"olNn"}],"r4bQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("./guess.js")),t=u(require("./validate.js"));function u(e){return e&&e.__esModule?e:{default:e}}var s={getGuess:e.default,validateGuess:t.default},r=s;exports.default=r;
},{"./guess.js":"HDaQ","./validate.js":"olNn"}],"mpVp":[function(require,module,exports) {
"use strict";require("regenerator-runtime/runtime");var e,t=u(require("./constants/index.js")),n=u(require("./services/api.js")),r=u(require("./functions/guess/index.js")),s=u(require("./functions/display/index.js"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,s,u,a){try{var c=e[u](a),i=c.value}catch(o){return void n(o)}c.done?t(i):Promise.resolve(i).then(r,s)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(r,s){var u=e.apply(t,n);function c(e){a(u,r,s,c,i,"next",e)}function i(e){a(u,r,s,c,i,"throw",e)}c(void 0)})}}var i=document.querySelector("#".concat(t.default.classes.SEND_BUTTON)),o=document.querySelector(".".concat(t.default.classes.PLAY_AGAIN_BUTTON));function l(){return d.apply(this,arguments)}function d(){return(d=c(regeneratorRuntime.mark(function u(){var a,c,l;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return c=document.querySelector(".".concat(t.default.classes.RESULTS_CONTENT)),l=document.querySelector(".".concat(t.default.classes.SEARCH_INPUT)),s.default.generateDisplay(),null===(a=document.querySelector(".".concat(t.default.classes.DISPLAY_TITLE)))||void 0===a||a.remove(),c.classList.remove(t.default.classes.SUCCESS,t.default.classes.ERROR),o.classList.add(t.default.classes.HIDDEN),i.disabled=!1,l.disabled=!1,u.next=10,(0,n.default)();case 10:(e=u.sent).value?l.focus():(r.default.validateGuess("ERRO",t.default.guessStatus.ERROR),s.default.generateDisplay(e.StatusCode));case 12:case"end":return u.stop()}},u)}))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",function(){l()}),o.addEventListener("click",function(){return l()}),i.addEventListener("click",function(t){return r.default.getGuess(t,e.value)});
},{"regenerator-runtime/runtime":"QVnC","./constants/index.js":"Zvlv","./services/api.js":"jMNs","./functions/guess/index.js":"r4bQ","./functions/display/index.js":"F3fd"}]},{},["mpVp"], null)
//# sourceMappingURL=script.3564fa58.js.map