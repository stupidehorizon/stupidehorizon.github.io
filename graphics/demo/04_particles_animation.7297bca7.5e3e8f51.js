parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KsAZ":[function(require,module,exports) {
var define;
var r;function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}parcelRequire=function(n,o,e,a){var i,u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;function c(r,t){if(!o[r]){if(!n[r]){var e="function"==typeof parcelRequire&&parcelRequire;if(!t&&e)return e(r,!0);if(u)return u(r,!0);if(f&&"string"==typeof r)return f(r);var a=new Error("Cannot find module '"+r+"'");throw a.code="MODULE_NOT_FOUND",a}l.resolve=function(t){return n[r][1][t]||t},l.cache={};var i=o[r]=new c.Module(r);n[r][0].call(i.exports,l,i,i.exports,this)}return o[r].exports;function l(r){return c(l.resolve(r))}}c.isParcelRequire=!0,c.Module=function(r){this.id=r,this.bundle=c,this.exports={}},c.modules=n,c.cache=o,c.parent=u,c.register=function(r,t){n[r]=[function(r,n){n.exports=t},{}]};for(var l=0;l<e.length;l++)try{c(e[l])}catch(n){i||(i=n)}if(e.length){var m=c(e[e.length-1]);"object"==("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module?module.exports=m:"function"==typeof r&&r.amd&&r(function(){return m})}if(parcelRequire=c,i)throw i;return c}({gx1k:[function(r,t,n){var o=document.querySelector("canvas").getContext("webgl"),e=o.createShader(o.VERTEX_SHADER);o.shaderSource(e,"\n  attribute vec2 position;\n  uniform float u_rotation;\n  uniform float u_time;\n  uniform float u_duration;\n  uniform float u_scale;\n  uniform vec2 u_dir;\n  varying float vP;\n  void main() {\n    float p = min(1.0, u_time / u_duration);\n    float rad = u_rotation + 3.14 * 10.0 * p;\n    float scale = u_scale * p * (2.0 - p);\n    vec2 offset = 2.0 * u_dir * p * p;\n    mat3 translateMatrix = mat3(\n      1.0, 0.0, 0.0,\n      0.0, 1.0, 0.0,\n      offset.x, offset.y, 1.0\n    );\n    mat3 rotateMatrix = mat3(\n      cos(rad), sin(rad), 0.0,\n      -sin(rad), cos(rad), 0.0,\n      0.0, 0.0, 1.0\n    );\n    mat3 scaleMatrix = mat3(\n      scale, 0.0, 0.0,\n      0.0, scale, 0.0,\n      0.0, 0.0, 1.0\n    );\n    gl_PointSize = 1.0;\n    vec3 pos = translateMatrix * rotateMatrix * scaleMatrix * vec3(position, 1.0);\n    gl_Position = vec4(pos, 1.0);\n    vP = p;\n  }\n"),o.compileShader(e);var a=o.createShader(o.FRAGMENT_SHADER);o.shaderSource(a,"\n  precision mediump float;\n  \n  uniform vec4 u_color;\n  varying float vP;\n  void main()\n  {\n    gl_FragColor.xyz = u_color.xyz;\n    gl_FragColor.a = (1.0 - vP) * u_color.a;\n  }    \n"),o.compileShader(a);var i=o.createProgram();o.attachShader(i,e),o.attachShader(i,a),o.linkProgram(i),o.useProgram(i);var u=new Float32Array([-1,-1,0,1,1,-1]),f=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,f),o.bufferData(o.ARRAY_BUFFER,u,o.STATIC_DRAW);var c=o.getAttribLocation(i,"position");function l(){var r=[Math.random(),Math.random(),Math.random(),1],t=Math.random()*Math.PI,n=.05*Math.random()+.03,o=Math.random()*Math.PI*2;return{u_color:r,u_rotation:t,u_scale:n,u_time:0,u_duration:3,u_dir:[Math.cos(o),Math.sin(o)],startTime:performance.now()}}o.vertexAttribPointer(c,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(c);var m=[];requestAnimationFrame(function r(t){for(var n=0;n<5*Math.random();n++)m.push(l());o.clear(o.COLOR_BUFFER_BIT),m.forEach(function(r){r.u_time=(performance.now()-r.startTime)/1e3,function(r,t){var n=t.u_color,o=t.u_rotation,e=t.u_scale,a=t.u_time,u=t.u_duration,f=t.u_dir,c=r.getUniformLocation(i,"u_color");r.uniform4fv(c,n),c=r.getUniformLocation(i,"u_rotation"),r.uniform1f(c,o),c=r.getUniformLocation(i,"u_scale"),r.uniform1f(c,e),c=r.getUniformLocation(i,"u_time"),r.uniform1f(c,a),c=r.getUniformLocation(i,"u_duration"),r.uniform1f(c,u),c=r.getUniformLocation(i,"u_dir"),r.uniform2fv(c,f)}(o,r),o.drawArrays(o.TRIANGLES,0,u.length/2)}),m=m.filter(function(r){return r.u_time<=r.u_duration}),requestAnimationFrame(r)})},{}]},{},["gx1k"]);
},{}]},{},["KsAZ"], null)
//# sourceMappingURL=../04_particles_animation.7297bca7.5e3e8f51.js.map