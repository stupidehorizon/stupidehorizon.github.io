parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HkID":[function(require,module,exports) {
"use strict";function t(t,n){return o(t)||i(t,n)||r(t,n)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(s){i=!0,o=s}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}}function o(t){if(Array.isArray(t))return t}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Vector2D=void 0;var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;u(this,e),this.x=t,this.y=r}return s(e,[{key:"copy",value:function(){return new e(this.x,this.y)}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this}},{key:"scale",value:function(t){return this.x*=t,this.y*=t,this}},{key:"cross",value:function(t){return this.x*t.y-t.x*this.y}},{key:"dot",value:function(t){return this.x*t.x+t.y*this.y}},{key:"normalize",value:function(){return this.scale(1/this.length)}},{key:"rotate",value:function(e){var r=Math.cos(e),n=Math.sin(e),i=t(this,2),o=i[0],u=i[1];return this.x=o*r+u*-n,this.y=o*n+u*r,this}},{key:"length",get:function(){return Math.hypot(this.x,this.y)}},{key:"dir",get:function(){return Math.atan2(this.y,this.x)}}]),e}();exports.Vector2D=c;
},{}],"m0RS":[function(require,module,exports) {
"use strict";var t=require("../common/lib/vector2d.js");function r(t){return a(t)||o(t)||n(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,r){if(t){if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,r):void 0}}function o(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function a(t){if(Array.isArray(t))return i(t)}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var c=document.querySelector("canvas"),l=c.getContext("2d");function u(e,n,o,a,i,c){var l=(new t.Vector2D).rotate(i).scale(o),s=n.copy().add(l);(e.lineWidth=a,e.beginPath(),e.moveTo.apply(e,r(n)),e.lineTo.apply(e,r(s)),e.stroke(),a>2)&&(u(e,s,.9*o,.8*a,Math.PI/4+.5*(i+.2)+c*(Math.random()-.5),.9*c),u(e,s,.9*o,.8*a,Math.PI/4+.5*(i-.2)+c*(Math.random()-.5),.9*c));if(a<5&&Math.random()<.3){e.save(),e.strokeStyle="#c72c35";var y=6*Math.random()+3;e.lineWidth=y,e.beginPath(),e.moveTo.apply(e,r(s)),e.lineTo(s.x,s.y-2),e.stroke(),e.restore()}}l.translate(0,c.height),l.scale(1,-1),l.lineCap="round";var s=new t.Vector2D(256,0);u(l,s,50,10,Math.PI/2,3);
},{"../common/lib/vector2d.js":"HkID"}]},{},["m0RS"], null)
//# sourceMappingURL=/02_vector_tree.55227275.js.map