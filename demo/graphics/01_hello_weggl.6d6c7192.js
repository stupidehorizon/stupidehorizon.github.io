parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oAbD":[function(require,module,exports) {
var r=document.querySelector("canvas"),a=r.getContext("webgl"),e="\n  attribute vec2 position;\n  varying vec3 color;\n  void main() {\n    gl_PointSize = 1.0;\n    color = vec3(0.5 + position * 0.5, 0.0);\n    gl_Position = vec4(position * 0.5, 1.0, 1.0);\n  }\n",t="\n  precision mediump float;\n  varying vec3 color;\n  void main()\n  {\n    gl_FragColor = vec4(color, 1.0);\n  }    \n",o=a.createShader(a.VERTEX_SHADER);a.shaderSource(o,e),a.compileShader(o);var n=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(n,t),a.compileShader(n);var i=a.createProgram();function c(r,a,e,t){for(var o=Math.sin,n=Math.cos,i=2*Math.PI/t,c=[],v=0;v<t;v++){var h=v*i,l=r+e*n(h),s=a+e*o(h);c.push(l,s)}return new Float32Array(c)}function v(r,a,e,t,o){for(var n=Math.sin,i=Math.cos,c=Math.PI/o,v=[],h=0;h<2*o;h++){var l=h*c;if(h%2!=0){var s=r+t*i(l),A=a+t*n(l);v.push(s,A)}else{var u=r+e*i(l),d=a+e*n(l);v.push(u,d)}}return new Float32Array(v)}a.attachShader(i,o),a.attachShader(i,n),a.linkProgram(i),a.useProgram(i);var h=v(0,0,1,2,5),l=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,l),a.bufferData(a.ARRAY_BUFFER,h,a.STATIC_DRAW);var s=a.getAttribLocation(i,"position");a.vertexAttribPointer(s,2,a.FLOAT,!1,0,0),a.enableVertexAttribArray(s),a.clear(a.COLOR_BUFFER_BIT),a.drawArrays(a.TRIANGLE_FAN,0,h.length/2);
},{}]},{},["oAbD"], null)
//# sourceMappingURL=../01_hello_weggl.6d6c7192.js.map