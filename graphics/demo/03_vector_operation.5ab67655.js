parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HkID":[function(require,module,exports) {
"use strict";function t(t,n){return o(t)||i(t,n)||r(t,n)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(s){i=!0,o=s}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}}function o(t){if(Array.isArray(t))return t}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Vector2D=void 0;var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;u(this,e),this.x=t,this.y=r}return s(e,[{key:"copy",value:function(){return new e(this.x,this.y)}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this}},{key:"scale",value:function(t){return this.x*=t,this.y*=t,this}},{key:"cross",value:function(t){return this.x*t.y-t.x*this.y}},{key:"dot",value:function(t){return this.x*t.x+t.y*this.y}},{key:"normalize",value:function(){return this.scale(1/this.length)}},{key:"rotate",value:function(e){var r=Math.cos(e),n=Math.sin(e),i=t(this,2),o=i[0],u=i[1];return this.x=o*r+u*-n,this.y=o*n+u*r,this}},{key:"length",get:function(){return Math.hypot(this.x,this.y)}},{key:"dir",get:function(){return Math.atan2(this.y,this.x)}}]),e}();exports.Vector2D=c;
},{}],"Ua5O":[function(require,module,exports) {
"use strict";var e=require("../common/lib/vector2d");function t(e){return o(e)||r(e)||i(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return l(e)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}var u=function(e){return document.querySelector(e)},h=function(e){return document.querySelectorAll(e)},y=function(){function e(n){var i=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.axis,l=void 0===o||o,c=r.size,s=r.dash,y=void 0===s?8:s,f=r.color,x=void 0===f?"black":f;a(this,e);var g=this.ctx=n.getContext("2d");c||(c=512),this.size=c,this.dash=y,this.color=x;var p=this.scale=n.width/c;g.scale(p,-p),g.translate(c/2,-c/2),g.strokeStyle=x,l&&this.drawAxis(),window.mouseBinded||n.addEventListener("mousemove",function(e){window.mouseBinded=!0;var r=n.getBoundingClientRect(),o=(e.clientX-r.left)*(n.width/r.width)/p-c/2,a=c/2-(e.clientY-r.top)*(n.height/r.height)/p;g.clearRect(-c/2,-c/2,c,c);var s=t(h("[name=point]")).find(function(e){return e.checked}).value;"P"===s?(d[0]=o,d[1]=a):"Q"===s?(d[2]=o,d[3]=a):(d[4]=o,d[5]=a),l&&i.drawAxis(),u("#dist1").innerHTML=v.apply(void 0,d.concat([!0])),u("#dist2").innerHTML=v.apply(void 0,d),u("#P").innerHTML=d.slice(0,2),u("#Q").innerHTML=d.slice(2,4),u("#R").innerHTML=d.slice(4)})}return s(e,[{key:"drawAxis",value:function(){this.ctx,this.size,this.dash;var e={x:0,y:0};this.line(e,{x:1,y:0},!0),this.line(e,{x:0,y:1},!0),this.point(e,"O")}},{key:"text",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=this.ctx;r.scale(1,-1),r.font="16px serif",i?r.fillText(n,e,-t):r.strokeText(n,e,-t),r.scale(1,-1)}},{key:"line",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;if(e.x!==t.x||e.y!==t.y){var o=this.size/2;[{x:e.x+(o-e.y)/(t.y-e.y)*(t.x-e.x),y:o},{x:e.x+(-o-e.y)/(t.y-e.y)*(t.x-e.x),y:-o},{x:o,y:e.y+(o-e.x)/(t.x-e.x)*(t.y-e.y)},{x:-o,y:e.y+(-o-e.x)/(t.x-e.x)*(t.y-e.y)}].forEach(function(t){return n.lineSeg(e,t,i,r)})}}},{key:"lineSeg",value:function(e,t){var n=e.x,i=e.y,r=t.x,o=t.y,l=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3?arguments[3]:void 0,c=this.ctx,s=this.dash;c.beginPath(),c.moveTo(n,i),c.lineTo(r,o),l&&c.setLineDash([s,s]),a&&(c.strokeStyle=a),c.stroke(),c.setLineDash([]),c.strokeStyle=this.color}},{key:"circle",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=this.ctx;r.beginPath(),r.ellipse(e,t,n,n,0,0,2*Math.PI),i?r.fill():r.stroke()}},{key:"point",value:function(e,t){var n=e.x,i=e.y;this.circle(n,i,2,!0),t&&this.text(n,i,t,!0)}}]),e}(),d=[0,0,-100,0,100,0],f=new y(u("canvas"),{axis:!1});function v(t,n,i,r,o,l){var a=arguments.length>6&&void 0!==arguments[6]&&arguments[6],c=new e.Vector2D(t,n),s=new e.Vector2D(i,r),u=new e.Vector2D(o,l),h=u.copy().sub(s),y=c.copy().sub(s),d=c.copy().sub(u),v=new e.Vector2D((h.x*y.x+h.y*y.y)/h.length*(u.x-s.x)/h.length+s.x,(h.x*y.x+h.y*y.y)/h.length*(u.y-s.y)/h.length+s.y),x=v.copy().sub(c);if(!a)return y.cross(h)/h.length;if(f.point(c,"P"),f.point(s,"Q"),f.point(u,"R "),f.line(s,u),f.lineSeg(s,u,!1,"blue"),0===h.length)return f.lineSeg(v,c),y.length;x.length>0&&f.point(v,"N");var g=h.dot(y)/h.length;return g<0?(f.lineSeg(v,c,!0,"green"),f.lineSeg(c,s,!1,"red"),y.length):g>h.length?(f.lineSeg(v,c,!0,"green"),f.lineSeg(c,u,!1,"red"),d.length):(f.lineSeg(c,v,!1,"red"),y.cross(h)/h.length)}v(0,100,-100,0,100,0,!0);
},{"../common/lib/vector2d":"HkID"}]},{},["Ua5O"], null)
//# sourceMappingURL=../03_vector_operation.5ab67655.js.map