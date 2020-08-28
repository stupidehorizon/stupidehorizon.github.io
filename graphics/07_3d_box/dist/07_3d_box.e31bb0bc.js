// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/gl-renderer/dist/gl-renderer.js":[function(require,module,exports) {
var define;
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["GlRenderer"] = factory();
	else
		root["GlRenderer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = (_renderer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var _default_vert_glsl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
/* harmony import */ var _default_vert_glsl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_default_vert_glsl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _default_frag_glsl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21);
/* harmony import */ var _default_frag_glsl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_default_frag_glsl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _default_feeback_vert_glsl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22);
/* harmony import */ var _default_feeback_vert_glsl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_default_feeback_vert_glsl__WEBPACK_IMPORTED_MODULE_10__);











var GLSL_LIBS = {};

function mapTextureCoordinate(positions) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var texVertexData = [];
  var len = positions.length;

  for (var i = 0; i < len; i++) {
    if (i % size < 2) texVertexData.push(0.5 * (positions[i] + 1));
  }

  return texVertexData;
}

function clearBuffers(gl, program) {
  var buffers = program._buffers;
  Object.values(buffers).forEach(function (buffer) {
    gl.deleteBuffer(buffer);
  });
  program._buffers = {};
}

function bindTexture(gl, texture, i) {
  gl.activeTexture(gl.TEXTURE0 + i);

  if (Array.isArray(texture._img)) {
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
  } else {
    gl.bindTexture(gl.TEXTURE_2D, texture);
  }

  return texture;
}

var uniformTypeMap = {
  int: '1i',
  ivec2: '2i',
  ivec3: '3i',
  ivec4: '4i',
  float: '1f',
  vec2: '2f',
  vec3: '3f',
  vec4: '4f',
  mat2: 'Matrix2fv',
  mat3: 'Matrix3fv',
  mat4: 'Matrix4fv',
  sampler1D: 'sampler1D',
  sampler2D: 'sampler2D',
  sampler3D: 'sampler3D',
  samplerCube: 'samplerCube',
  sampler1DShadow: 'sampler1DShadow',
  sampler2DShadow: 'sampler2DShadow',
  sampler2DRect: 'sampler2DRect',
  sampler2DRectShadow: 'sampler2DRectShadow'
};

var Renderer = /*#__PURE__*/function () {
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Renderer, null, [{
    key: "addLibs",
    value: function addLibs() {
      var libs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.assign(GLSL_LIBS, libs);
    }
  }, {
    key: "FLOAT",
    value: function FLOAT(points, buffer) {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["pointsToBuffer"])(points, Float32Array, buffer);
    }
  }, {
    key: "UNSIGNED_BYTE",
    value: function UNSIGNED_BYTE(points, buffer) {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["pointsToBuffer"])(points, Uint8Array, buffer);
    }
  }, {
    key: "UNSIGNED_SHORT",
    value: function UNSIGNED_SHORT(points, buffer) {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["pointsToBuffer"])(points, Uint16Array, buffer);
    }
  }, {
    key: "BYTE",
    value: function BYTE(points, buffer) {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["pointsToBuffer"])(points, Int8Array, buffer);
    }
  }, {
    key: "SHORT",
    value: function SHORT(points, buffer) {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["pointsToBuffer"])(points, Int16Array, buffer);
    }
  }]);

  function Renderer(canvas) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Renderer);

    this.options = Object.assign({}, Renderer.defaultOptions, opts);
    this.canvas = canvas;
    var gl;

    if (this.options.webgl2) {
      gl = canvas.getContext('webgl2', this.options);
    }

    if (gl == null) {
      gl = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["setupWebGL"])(canvas, this.options);
      this.aia_ext = gl.getExtension('ANGLE_instanced_arrays');
    }

    this.gl = gl;
    gl.viewport(0, 0, canvas.width, canvas.height); // gl.clearColor(1.0, 1.0, 1.0, 1.0);
    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    this.programs = [];
    this._events = {};
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Renderer, [{
    key: "_declareUniform",
    // WebGLRenderingContext.uniform[1234][fi][v]()
    // WebGLRenderingContext.uniformMatrix[234]fv()
    value: function _declareUniform(program, name) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '1f';
      var gl = this.gl;
      var uniform = gl.getUniformLocation(program, name);
      var value;
      var that = this;

      if (/^sampler/.test(type)) {
        var samplerMap = program._samplerMap;
        var textures = program._bindTextures;
        Object.defineProperty(program.uniforms, name, {
          get: function get() {
            return value;
          },
          set: function set(v) {
            value = v;
            var idx = samplerMap[name] != null ? samplerMap[name] : textures.length;
            textures[idx] = v;
            bindTexture(gl, v, idx);

            if (!samplerMap[name]) {
              samplerMap[name] = idx;
              gl.uniform1i(uniform, idx);
            } // gl.bindTexture(gl.TEXTURE_2D, null);


            if (that.options.autoUpdate) that.update();
          },
          configurable: false,
          enumerable: true
        });
      } else {
        var isMatrix = type.indexOf('Matrix') === 0;
        var isTypeV = !isMatrix && /v$/.test(type);
        var setUniform = gl["uniform".concat(type)].bind(gl);
        Object.defineProperty(program.uniforms, name, {
          get: function get() {
            return value;
          },
          set: function set(v) {
            value = v;

            if (typeof v === 'number') {
              v = [v];
            }

            if (isMatrix) setUniform(uniform, false, v);else if (isTypeV) setUniform(uniform, v);else setUniform.apply(void 0, [uniform].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(v)));
            if (that.options.autoUpdate) that.update();
          },
          configurable: false,
          enumerable: true
        });
      }
    }
  }, {
    key: "_draw",
    value: function _draw() {
      var _this = this;

      var program = this.program;
      program.meshData.forEach(function (meshData, meshIndex) {
        var positions = meshData.positions,
            cells = meshData.cells,
            instanceCount = meshData.instanceCount,
            cellsCount = meshData.cellsCount,
            attributes = meshData.attributes,
            uniforms = meshData.uniforms,
            textureCoord = meshData.textureCoord,
            enableBlend = meshData.enableBlend;
        var gl = _this.gl;
        var mode = meshData.mode != null ? meshData.mode : gl.TRIANGLES;

        if (typeof mode === 'string') {
          mode = gl[mode];
        }

        if (enableBlend) gl.enable(gl.BLEND);else gl.disable(gl.BLEND);
        gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers.verticesBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

        if (cells) {
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, program._buffers.cellsBuffer);
          gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, cells, gl.STATIC_DRAW);
        }

        var locations = [];

        if (attributes) {
          Object.values(attributes).forEach(function (_ref) {
            var name = _ref.name,
                data = _ref.data,
                divisor = _ref.divisor;
            gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers[name]);
            gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

            if (divisor != null) {
              var location = gl.getAttribLocation(program, name);

              if (location >= 0) {
                gl.enableVertexAttribArray(location);
                locations.push(location);

                if (gl.vertexAttribDivisor) {
                  gl.vertexAttribDivisor(location, divisor);
                } else if (_this.aia_ext) {
                  _this.aia_ext.vertexAttribDivisorANGLE(location, divisor);
                }
              }
            }
          });
        }

        if (uniforms) {
          Object.entries(uniforms).forEach(function (_ref2) {
            var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref2, 2),
                key = _ref3[0],
                value = _ref3[1];

            _this.uniforms[key] = value;
          });
        }

        var count;

        if (!cells) {
          var dimension = program._dimension;
          count = positions.length / dimension;
        }

        if (program._enableTextures && program._buffers.texCoordBuffer) {
          var texVertexData = textureCoord || mapTextureCoordinate(positions, program._dimension);
          gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers.texCoordBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, Renderer.FLOAT(texVertexData), gl.STATIC_DRAW);
        }

        if (instanceCount != null) {
          if (cells) {
            if (gl.drawElementsInstanced) {
              gl.drawElementsInstanced(mode, cellsCount, gl.UNSIGNED_SHORT, 0, instanceCount);
            } else if (_this.aia_ext) {
              _this.aia_ext.drawElementsInstancedANGLE(mode, cellsCount, gl.UNSIGNED_SHORT, 0, instanceCount);
            }
          } else if (gl.drawArraysInstanced) {
            gl.drawArraysInstanced(mode, 0, count, instanceCount);
          } else {
            _this.aia_ext.drawArraysInstancedANGLE(mode, 0, count, instanceCount);
          }

          locations.forEach(function (location) {
            if (gl.vertexAttribDivisor) {
              gl.vertexAttribDivisor(location, null);
            } else if (_this.aia_ext) {
              _this.aia_ext.vertexAttribDivisorANGLE(location, null);
            }
          });
        } else if (cells) {
          gl.drawElements(mode, cellsCount, gl.UNSIGNED_SHORT, 0);
        } else {
          gl.drawArrays(mode, 0, count);
        }
      });
    }
  }, {
    key: "deleteProgram",
    value: function deleteProgram(program) {
      var gl = this.gl;

      if (this.program === program) {
        this.startRender = false;

        if (this._renderFrameID) {
          cancelAnimationFrame(this._renderFrameID);
          delete this._renderFrameID;
        }

        gl.useProgram(null);
      }

      var idx = this.programs.indexOf(program);

      if (idx >= 0) {
        this.programs.splice(idx, 1);
      }

      clearBuffers(gl, program);
      gl.deleteProgram(program);
    }
    /**
      [{
        positions: ...
        cells: ...
        textureCoord: ...
        attributes: {name: {data:..., normalize: true}},
        uniforms: ...
      }]
     */

  }, {
    key: "setMeshData",
    value: function setMeshData(data) {
      var _this2 = this;

      if (!Array.isArray(data)) {
        data = [data];
      }

      var program = this.program;
      program.meshData = data.map(function (_ref4) {
        var mode = _ref4.mode,
            positions = _ref4.positions,
            instanceCount = _ref4.instanceCount,
            cells = _ref4.cells,
            cellsCount = _ref4.cellsCount,
            attributes = _ref4.attributes,
            uniforms = _ref4.uniforms,
            textureCoord = _ref4.textureCoord,
            enableBlend = _ref4.enableBlend;
        var meshData = {
          positions: Renderer.FLOAT(positions),
          uniforms: uniforms,
          enableBlend: !!enableBlend,
          textureCoord: Renderer.FLOAT(textureCoord)
        };

        if (cells) {
          meshData.cells = Renderer.USHORT(cells);
          meshData.cellsCount = cellsCount || meshData.cells.length;
        }

        if (mode != null) {
          meshData.mode = mode;
        }

        if (instanceCount != null) {
          if (!_this2.isWebGL2 && !_this2.aia_ext) throw new Error('Cannot use instanceCount in this rendering context, use webgl2 context instead.');else meshData.instanceCount = instanceCount;
        }

        if (attributes) {
          var copied = {};
          Object.entries(attributes).forEach(function (_ref5) {
            var _ref6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref5, 2),
                key = _ref6[0],
                value = _ref6[1];

            if (!program._attribute[key]) {
              // throw new Error(`Invalid attribute ${key}.`);
              if (false) {}
              program._attribute[key] = 'ignored';
            } else if (program._attribute[key] !== 'ignored') {
              var _program$_attribute$k = program._attribute[key],
                  name = _program$_attribute$k.name,
                  type = _program$_attribute$k.type;
              var buffer = value.data || value;

              if (Array.isArray(buffer)) {
                buffer = Renderer[type](buffer);
              }

              copied[key] = {
                name: name,
                data: buffer
              };

              if (value.divisor != null) {
                if (!_this2.isWebGL2 && !_this2.aia_ext) throw new Error('Cannot use divisor in this rendering context, use webgl2 context instead.');else copied[key].divisor = value.divisor;
              }
            }
          });
          meshData.attributes = copied;
        }

        return meshData;
      });
      if (this.options.autoUpdate) this.update();
    }
  }, {
    key: "createProgram",
    value: function createProgram(fragmentShader, vertexShader) {
      var _this3 = this;

      // this.deleteProgram();
      // this._events = {};
      var enableTextures = /^\s*uniform\s+sampler/mg.test(fragmentShader);
      if (fragmentShader == null) fragmentShader = _default_frag_glsl__WEBPACK_IMPORTED_MODULE_9___default.a;
      if (vertexShader == null) vertexShader = enableTextures ? _default_feeback_vert_glsl__WEBPACK_IMPORTED_MODULE_10___default.a : _default_vert_glsl__WEBPACK_IMPORTED_MODULE_8___default.a;
      var gl = this.gl;

      var program = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["createProgram"])(gl, vertexShader, fragmentShader);

      program.shaderText = {
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
      };
      program._buffers = {};
      program._attribute = {};
      program.uniforms = {};
      program._samplerMap = {};
      program._bindTextures = []; // console.log(vertexShader);

      var pattern = new RegExp("(?:attribute|in) vec(\\d) ".concat(this.options.vertexPosition), 'im');
      var matched = vertexShader.match(pattern);

      if (matched) {
        program._dimension = Number(matched[1]);
      }

      var texCoordPattern = new RegExp("(?:attribute|in) vec(\\d) ".concat(this.options.vertexTextureCoord), 'im');
      matched = vertexShader.match(texCoordPattern);

      if (matched) {
        program._texCoordSize = Number(matched[1]);
      }

      var attributePattern = /^\s*(?:attribute|in) (\w+?)(\d*) (\w+)/gim;
      matched = vertexShader.match(attributePattern);

      if (matched) {
        for (var i = 0; i < matched.length; i++) {
          var patt = /^\s*(?:attribute|in) (\w+?)(\d*) (\w+)/im;

          var _matched = matched[i].match(patt);

          if (_matched && _matched[3] !== this.options.vertexPosition && _matched[3] !== this.options.vertexTextureCoord) {
            var _matched2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_matched, 4),
                type = _matched2[1],
                size = _matched2[2],
                name = _matched2[3];

            if (type === 'mat') size = Math.pow(size, 2);
            program._buffers[name] = gl.createBuffer();
            program._attribute[name] = {
              name: name,
              type: type,
              size: Number(size) || 1
            };
          }
        }
      }

      var uniformPattern = /^\s*uniform\s+(\w+)\s+(\w+)(\[\d+\])?/mg;
      matched = vertexShader.match(uniformPattern) || [];
      matched = matched.concat(fragmentShader.match(uniformPattern) || []);
      matched.forEach(function (m) {
        var _matched = m.match(/^\s*uniform\s+(\w+)\s+(\w+)(\[\d+\])?/);

        var _matched$slice = _matched.slice(1),
            _matched$slice2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_matched$slice, 3),
            type = _matched$slice2[0],
            name = _matched$slice2[1],
            isTypeV = _matched$slice2[2];

        type = uniformTypeMap[type];
        isTypeV = !!isTypeV;

        if (type.indexOf('Matrix') !== 0 && isTypeV) {
          type += 'v';
        }

        _this3._declareUniform(program, name, type);
      });
      program._buffers.verticesBuffer = gl.createBuffer();
      program._buffers.cellsBuffer = gl.createBuffer();
      var vTexCoord = gl.getAttribLocation(program, this.options.vertexTextureCoord);
      program._enableTextures = vTexCoord >= 0;

      if (program._enableTextures) {
        program._buffers.texCoordBuffer = gl.createBuffer();
      }

      this.programs.push(program);
      return program;
    }
  }, {
    key: "useProgram",
    value: function useProgram(program) {
      var attrOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.startRender = false;

      if (this._renderFrameID) {
        cancelAnimationFrame(this._renderFrameID);
        delete this._renderFrameID;
      }

      var gl = this.gl;
      gl.useProgram(program); // this.program = program;

      var dimension = program._dimension;
      gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers.verticesBuffer);
      var vPosition = gl.getAttribLocation(program, this.options.vertexPosition);
      gl.vertexAttribPointer(vPosition, dimension, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(vPosition);

      if (program._enableTextures) {
        gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers.texCoordBuffer);
        var vTexCoord = gl.getAttribLocation(program, this.options.vertexTextureCoord);
        gl.vertexAttribPointer(vTexCoord, program._texCoordSize || 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(vTexCoord);
      }

      Object.entries(program._attribute).forEach(function (_ref7) {
        var _ref8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref7, 2),
            name = _ref8[0],
            item = _ref8[1];

        if (item !== 'ignored') {
          var size = item.size;
          var options = attrOptions[name] || {};
          var normalize = !!options.normalize;
          var bufferType = options.type || 'FLOAT';
          var key = options.key || name;
          if (bufferType === 'UBYTE') bufferType = 'UNSIGNED_BYTE';
          if (bufferType === 'USHORT') bufferType = 'UNSIGNED_SHORT';
          item.type = bufferType;

          if (key && key !== name) {
            program._attribute[key] = item;
          }

          gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers[name]);
          var attrib = gl.getAttribLocation(program, name); // console.log(size, gl[bufferType]);

          if (attrib >= 0) {
            gl.vertexAttribPointer(attrib, size, gl[bufferType], normalize, 0, 0);
            gl.enableVertexAttribArray(attrib);
          }
        }
      });

      if (!program.meshData) {
        var positions = [[-1, -1, 0, 1].slice(0, dimension), [1, -1, 0, 1].slice(0, dimension), [1, 1, 0, 1].slice(0, dimension), [-1, 1, 0, 1].slice(0, dimension)];
        var cells = [[0, 1, 3], [3, 1, 2]];
        this.setMeshData({
          positions: positions,
          cells: cells
        });
      }

      return program;
    }
  }, {
    key: "compileSync",
    value: function compileSync(frag, vert) {
      frag = frag || _default_frag_glsl__WEBPACK_IMPORTED_MODULE_9___default.a;
      var loaded = {};

      function _compile(content) {
        content = content.replace(/^\s*/mg, '');
        var includes = [];
        var matched = content.match(/^#pragma\s+include\s+.*/mg);

        if (matched) {
          // console.log(matched, url);
          for (var i = 0; i < matched.length; i++) {
            var m = matched[i];

            var _matched = m.match(/(?:<|")(.*)(?:>|")/);

            if (_matched) {
              var type = _matched[0].indexOf('<') === 0 ? 'lib' : 'link';
              var name = _matched[1];
              if (name === 'graph') name = 'graphics';

              if (!loaded[name]) {
                loaded[name] = true;

                if (type === 'lib') {
                  var c = _compile(GLSL_LIBS[name]); // eslint-disable-line no-await-in-loop


                  includes.push(c);
                } else if (type === 'link') {
                  throw new Error('Cannot load external links synchronously. Use compile instead of compileSync.');
                }
              } else {
                includes.push("/* included ".concat(name, " */"));
              }
            }
          }

          includes.forEach(function (inc) {
            content = content.replace(/^#pragma\s+include\s+.*/m, inc);
          });
        }

        return content;
      }

      var fragmentShader = _compile(frag);

      var vertexShader = vert ? _compile(vert) : null;
      var program = this.createProgram(fragmentShader, vertexShader);
      return program;
    }
  }, {
    key: "compile",
    value: function () {
      var _compile2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(frag, vert) {
        var loaded, _compile, _compile3, fragmentShader, vertexShader, program;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _compile3 = function _compile5() {
                  _compile3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(content) {
                    var includes, matched, i, m, _matched, type, name, c, _c;

                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            content = content.replace(/^\s*/mg, '');
                            includes = [];
                            matched = content.match(/^#pragma\s+include\s+.*/mg);

                            if (!matched) {
                              _context.next = 36;
                              break;
                            }

                            i = 0;

                          case 5:
                            if (!(i < matched.length)) {
                              _context.next = 35;
                              break;
                            }

                            m = matched[i];
                            _matched = m.match(/(?:<|")(.*)(?:>|")/);

                            if (!_matched) {
                              _context.next = 32;
                              break;
                            }

                            type = _matched[0].indexOf('<') === 0 ? 'lib' : 'link';
                            name = _matched[1];
                            if (name === 'graph') name = 'graphics';

                            if (loaded[name]) {
                              _context.next = 31;
                              break;
                            }

                            loaded[name] = true; // TODO: 这里可以优化成异步加载

                            if (!(type === 'lib')) {
                              _context.next = 21;
                              break;
                            }

                            _context.next = 17;
                            return _compile(GLSL_LIBS[name]);

                          case 17:
                            c = _context.sent;
                            // eslint-disable-line no-await-in-loop
                            includes.push(c);
                            _context.next = 29;
                            break;

                          case 21:
                            if (!(type === 'link')) {
                              _context.next = 29;
                              break;
                            }

                            _context.next = 24;
                            return Renderer.fetchShader(name);

                          case 24:
                            _c = _context.sent;
                            _context.next = 27;
                            return _compile(_c);

                          case 27:
                            _c = _context.sent;
                            // eslint-disable-line no-await-in-loop
                            includes.push(_c);

                          case 29:
                            _context.next = 32;
                            break;

                          case 31:
                            includes.push("/* included ".concat(name, " */"));

                          case 32:
                            i++;
                            _context.next = 5;
                            break;

                          case 35:
                            includes.forEach(function (inc) {
                              content = content.replace(/^#pragma\s+include\s+.*/m, inc);
                            });

                          case 36:
                            return _context.abrupt("return", content);

                          case 37:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));
                  return _compile3.apply(this, arguments);
                };

                _compile = function _compile4(_x3) {
                  return _compile3.apply(this, arguments);
                };

                frag = frag || _default_frag_glsl__WEBPACK_IMPORTED_MODULE_9___default.a;
                loaded = {};
                _context2.next = 6;
                return _compile(frag);

              case 6:
                fragmentShader = _context2.sent;

                if (!vert) {
                  _context2.next = 13;
                  break;
                }

                _context2.next = 10;
                return _compile(vert);

              case 10:
                _context2.t0 = _context2.sent;
                _context2.next = 14;
                break;

              case 13:
                _context2.t0 = null;

              case 14:
                vertexShader = _context2.t0;
                program = this.createProgram(fragmentShader, vertexShader);
                return _context2.abrupt("return", program);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function compile(_x, _x2) {
        return _compile2.apply(this, arguments);
      }

      return compile;
    }()
  }, {
    key: "load",
    value: function () {
      var _load = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(frag) {
        var vert,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                vert = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : null;
                _context3.next = 3;
                return Renderer.fetchShader(frag);

              case 3:
                frag = _context3.sent;

                if (!vert) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 7;
                return Renderer.fetchShader(vert);

              case 7:
                vert = _context3.sent;

              case 8:
                return _context3.abrupt("return", this.compile(frag, vert));

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function load(_x4) {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: "createTexture",
    value: function createTexture() {
      var _this4 = this;

      var img = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref9$wrapS = _ref9.wrapS,
          wrapS = _ref9$wrapS === void 0 ? this.gl.CLAMP_TO_EDGE : _ref9$wrapS,
          _ref9$wrapT = _ref9.wrapT,
          wrapT = _ref9$wrapT === void 0 ? this.gl.CLAMP_TO_EDGE : _ref9$wrapT,
          _ref9$minFilter = _ref9.minFilter,
          minFilter = _ref9$minFilter === void 0 ? this.gl.LINEAR : _ref9$minFilter,
          _ref9$magFilter = _ref9.magFilter,
          magFilter = _ref9$magFilter === void 0 ? this.gl.LINEAR : _ref9$magFilter;

      var gl = this.gl;
      var target = Array.isArray(img) ? gl.TEXTURE_CUBE_MAP : gl.TEXTURE_2D;
      this._max_texture_image_units = this._max_texture_image_units || gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
      gl.activeTexture(gl.TEXTURE0 + this._max_texture_image_units - 1);
      var texture = gl.createTexture();
      gl.bindTexture(target, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      var _this$canvas = this.canvas,
          width = _this$canvas.width,
          height = _this$canvas.height;

      if (img) {
        if (target === gl.TEXTURE_CUBE_MAP) {
          // For cube maps
          for (var i = 0; i < 6; i++) {
            gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img[i]);
          }
        } else {
          gl.texImage2D(target, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        }
      } else if (target === gl.TEXTURE_CUBE_MAP) {
        // For cube maps
        for (var _i = 0; _i < 6; _i++) {
          this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + _i, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }
      } else {
        gl.texImage2D(target, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      } // gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.


      gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, minFilter);
      gl.texParameteri(target, gl.TEXTURE_MAG_FILTER, magFilter); // Prevents s-coordinate wrapping (repeating).

      gl.texParameteri(target, gl.TEXTURE_WRAP_S, wrapS); // Prevents t-coordinate wrapping (repeating).

      gl.texParameteri(target, gl.TEXTURE_WRAP_T, wrapT);

      if (target === gl.TEXTURE_CUBE_MAP) {
        // gl.texParameteri(target, gl.TEXTURE_WRAP_R, gl.CLAMP_TO_EDGE);
        img.width = img[0].width;
        img.height = img[0].height;
      }

      gl.bindTexture(target, null);
      texture._img = img || {
        width: width,
        height: height
      };

      texture.delete = function () {
        _this4.deleteTexture(texture);
      };

      return texture;
    }
  }, {
    key: "deleteTexture",
    value: function deleteTexture(texture) {
      var image = texture._img;
      this.gl.deleteTexture(texture);

      if (typeof image.close === 'function') {
        // release ImageBitmap
        image.close();
      }
    }
  }, {
    key: "loadTexture",
    value: function () {
      var _loadTexture = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(source) {
        var _ref10,
            _ref10$useImageBitmap,
            useImageBitmap,
            img,
            _args4 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _ref10 = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {}, _ref10$useImageBitmap = _ref10.useImageBitmap, useImageBitmap = _ref10$useImageBitmap === void 0 ? true : _ref10$useImageBitmap;
                _context4.next = 3;
                return Renderer.loadImage(source, {
                  useImageBitmap: useImageBitmap
                });

              case 3:
                img = _context4.sent;
                return _context4.abrupt("return", this.createTexture(img));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function loadTexture(_x5) {
        return _loadTexture.apply(this, arguments);
      }

      return loadTexture;
    }()
  }, {
    key: "createFBO",
    value: function createFBO() {
      var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref11$color = _ref11.color,
          color = _ref11$color === void 0 ? 1 : _ref11$color,
          _ref11$blend = _ref11.blend,
          blend = _ref11$blend === void 0 ? false : _ref11$blend,
          _ref11$depth = _ref11.depth,
          depth = _ref11$depth === void 0 ? this.options.depth !== false : _ref11$depth,
          _ref11$stencil = _ref11.stencil,
          stencil = _ref11$stencil === void 0 ? !!this.options.stencil : _ref11$stencil;

      var gl = this.gl;
      var buffer = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, buffer);
      var textures = [];

      for (var i = 0; i < color; i++) {
        var texture = this.createTexture();
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, gl.TEXTURE_2D, texture, 0
        /* level */
        );
        textures.push(texture);
      }

      buffer.textures = textures;
      buffer.texture = textures[0];
      buffer.blend = blend;
      var _this$canvas2 = this.canvas,
          width = _this$canvas2.width,
          height = _this$canvas2.height; // Render buffers

      if (depth && !stencil) {
        buffer.depthBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, buffer.depthBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, buffer.depthBuffer);
      }

      if (stencil && !depth) {
        buffer.stencilBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, buffer.stencilBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.STENCIL_INDEX8, width, height);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.STENCIL_ATTACHMENT, gl.RENDERBUFFER, buffer.stencilBuffer);
      }

      if (depth && stencil) {
        buffer.depthStencilBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, buffer.depthStencilBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width, height);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, buffer.depthStencilBuffer);
      }

      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      return buffer;
    }
  }, {
    key: "bindFBO",
    value: function bindFBO() {
      var fbo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.fbo = fbo;
    }
  }, {
    key: "render",
    value: function render() {
      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref12$clearBuffer = _ref12.clearBuffer,
          clearBuffer = _ref12$clearBuffer === void 0 ? true : _ref12$clearBuffer;

      this.startRender = true;
      var gl = this.gl;
      var program = this.program;

      if (!program) {
        program = this.createProgram();
        this.useProgram(program);
      }

      if (this.fbo) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.fbo);
      }

      var depth = this.options.depth;

      if (depth) {
        gl.enable(gl.DEPTH_TEST);
      }

      this.gl.clear(this.gl.COLOR_BUFFER_BIT | (depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.options.stencil ? this.gl.STENCIL_BUFFER_BIT : 0));
      var lastFrameID = this._renderFrameID;

      this._draw();

      if (this.fbo) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      }

      if (this._renderFrameID === lastFrameID) {
        this._renderFrameID = null;
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.startRender) return;

      if (this._renderFrameID == null) {
        this._renderFrameID = requestAnimationFrame(this.render.bind(this));
      }
    }
  }, {
    key: "program",
    get: function get() {
      var gl = this.gl;
      return gl.getParameter(gl.CURRENT_PROGRAM);
    }
  }, {
    key: "isWebGL2",
    get: function get() {
      return typeof WebGL2RenderingContext !== 'undefined' && this.gl instanceof WebGL2RenderingContext;
    }
  }, {
    key: "enableTextures",
    get: function get() {
      return this.program && this.program._enableTextures;
    }
  }, {
    key: "uniforms",
    get: function get() {
      var program = this.program;

      if (!program || !program.uniforms) {
        throw Error('No avaliable program.');
      }

      return program.uniforms;
    }
  }]);

  return Renderer;
}();

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Renderer, "defaultOptions", {
  preserveDrawingBuffer: true,
  autoUpdate: true,
  vertexPosition: 'a_vertexPosition',
  vertexTextureCoord: 'a_vertexTextureCoord',
  webgl2: false
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Renderer, "UBYTE", Renderer.UNSIGNED_BYTE);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Renderer, "USHORT", Renderer.UNSIGNED_SHORT);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Renderer, "fetchShader", _helpers__WEBPACK_IMPORTED_MODULE_7__["fetchShader"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Renderer, "loadImage", _helpers__WEBPACK_IMPORTED_MODULE_7__["loadImage"]);



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(6);

var iterableToArrayLimit = __webpack_require__(7);

var unsupportedIterableToArray = __webpack_require__(8);

var nonIterableRest = __webpack_require__(10);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(9);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(12);

var iterableToArray = __webpack_require__(13);

var unsupportedIterableToArray = __webpack_require__(8);

var nonIterableSpread = __webpack_require__(14);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(9);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupWebGL", function() { return setupWebGL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgram", function() { return createProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointsToBuffer", function() { return pointsToBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchShader", function() { return fetchShader; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);




function create3DContext(canvas, opt_attribs) {
  var names = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];
  var context = null;

  for (var ii = 0; ii < names.length; ++ii) {
    try {
      context = canvas.getContext(names[ii], opt_attribs);
    } catch (e) {// no-empty
    }

    if (context) {
      break;
    }
  }

  return context;
}

function setupWebGL(canvas, opt_attribs) {
  var context = create3DContext(canvas, opt_attribs);

  if (!context) {
    throw new Error("Sorry, your browser doesn't support WebGL.");
  }

  return context;
}
function createProgram(gl, vertex, fragment) {
  var vertShdr = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertShdr, vertex);
  gl.compileShader(vertShdr);

  if (!gl.getShaderParameter(vertShdr, gl.COMPILE_STATUS)) {
    var msg = "Vertex shader failed to compile.  The error log is:".concat(gl.getShaderInfoLog(vertShdr));
    throw new Error(msg);
  }

  var fragShdr = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragShdr, fragment);
  gl.compileShader(fragShdr);

  if (!gl.getShaderParameter(fragShdr, gl.COMPILE_STATUS)) {
    var _msg = "Fragment shader failed to compile.  The error log is:".concat(gl.getShaderInfoLog(fragShdr));

    throw new Error(_msg);
  }

  var program = gl.createProgram();
  gl.attachShader(program, vertShdr);
  gl.attachShader(program, fragShdr);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    var _msg2 = "Shader program failed to link.  The error log is:".concat(gl.getProgramInfoLog(program));

    throw new Error(_msg2);
  }

  gl.deleteShader(vertShdr);
  gl.deleteShader(fragShdr);
  return program;
}
function pointsToBuffer(points) {
  var Type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Float32Array;
  var buffer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (buffer && !(buffer instanceof Type)) throw new TypeError('Wrong buffer type.');
  if (points == null) return points;
  if (points instanceof Type) return points;

  if (points[0] == null || points[0].length == null) {
    if (buffer) {
      buffer.set(points, 0);
      return buffer;
    }

    return new Type(points);
  }

  var deminsion = points[0].length;
  var len = points.length;

  if (!buffer) {
    buffer = new Type(deminsion * len);
  }

  var idx = 0;

  for (var i = 0; i < len; i++) {
    for (var j = 0; j < deminsion; j++) {
      buffer[idx++] = points[i][j];
    }
  }

  return buffer;
}
var imageCache = {};
function loadImage(src) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$useImageBitmap = _ref.useImageBitmap,
      useImageBitmap = _ref$useImageBitmap === void 0 ? true : _ref$useImageBitmap,
      _ref$alias = _ref.alias,
      alias = _ref$alias === void 0 ? null : _ref$alias;

  if (!imageCache[src]) {
    if (typeof Image === 'function') {
      var img = new Image();

      if (typeof src === 'string' && !((typeof location === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(location)) === 'object' && /^file:/.test(location.href)) // eslint-disable-line no-restricted-globals
      && !/^data:/.test(src)) {
        // base64 dont need crossOrigin - fix early webkit cross domain bug
        img.crossOrigin = 'anonymous';
      }

      imageCache[src] = new Promise(function (resolve) {
        img.onload = function () {
          if (useImageBitmap && typeof createImageBitmap === 'function') {
            createImageBitmap(img, {
              imageOrientation: 'flipY'
            }).then(function (bitmap) {
              imageCache[src] = bitmap;
              if (alias) imageCache[alias] = bitmap;
              resolve(bitmap);
            });
          } else {
            imageCache[src] = img;
            if (alias) imageCache[alias] = img;
            resolve(img);
          }
        };

        img.src = src;
      });
      if (alias) imageCache[alias] = imageCache[src];
    } else if (typeof fetch === 'function') {
      // run in worker
      return fetch(src, {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
      }).then(function (response) {
        return response.blob();
      }).then(function (blob) {
        return createImageBitmap(blob, {
          imageOrientation: 'flipY'
        }).then(function (bitmap) {
          imageCache[src] = bitmap;
          if (alias) imageCache[alias] = bitmap;
          return bitmap;
        });
      });
    }
  }

  return imageCache[src];
}
var shaderCache = {};
function fetchShader(_x) {
  return _fetchShader.apply(this, arguments);
}

function _fetchShader() {
  _fetchShader = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
    var res, content;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!shaderCache[url]) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", shaderCache[url]);

          case 2:
            _context.next = 4;
            return fetch(url);

          case 4:
            res = _context.sent;

            if (!(res.status >= 200 && res.status < 300)) {
              _context.next = 11;
              break;
            }

            _context.next = 8;
            return res.text();

          case 8:
            content = _context.sent;
            shaderCache[url] = content;
            return _context.abrupt("return", content);

          case 11:
            throw new Error('Shader loaded error.');

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchShader.apply(this, arguments);
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "attribute vec3 a_vertexPosition;\nvoid main() {\n\tgl_PointSize = 1.0;\n\tgl_Position = vec4(a_vertexPosition, 1);\n}\n"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "#ifdef GL_ES\nprecision mediump float;\n#endif\nvoid main() {\n\tgl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);\n}\n"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "attribute vec4 a_vertexPosition;\nattribute vec2 a_vertexTextureCoord;\nvarying vec2 vTextureCoord;\nvoid main() {\n\tgl_PointSize = 1.0;\n\tgl_Position = a_vertexPosition;\n\tvTextureCoord = a_vertexTextureCoord;\n}\n"

/***/ })
/******/ ])["default"];
});
},{}],"vertex.glsl":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nattribute vec3 a_vertexPosition;\nattribute vec3 colors;\nattribute vec3 normalVectors;\n\nvarying vec3 vColor;\nvarying float vCos;\n\nuniform mat3 transition;\n\nconst mat3 reverseZ = mat3(1.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,-1.0);\nconst vec3 lightPos = vec3(10.0, 10.0, 0.0);\n\nvoid main() {\n  mat3 modalMatrix = reverseZ * transition;\n  vec3 pos = modalMatrix * a_vertexPosition;\n  vColor = colors;\n  vCos = max(dot(normalize(modalMatrix * normalVectors), normalize(lightPos - pos)), 0.0);\n  gl_PointSize = 1.0;\n  gl_Position = vec4(pos, 1);\n}";
},{}],"fragment.glsl":[function(require,module,exports) {
module.exports = "#ifdef GL_ES\nprecision highp float;\n#define GLSLIFY 1\n#endif\n\nvarying vec3 vColor;\nvarying float vCos;\n\nconst vec4 lightColor = vec4(0.9, 1.0, 1.0, 1.0);\n\nvoid main() {\n  gl_FragColor.rgb = vColor + vCos * lightColor.a * lightColor.rgb;\n  // gl_FragColor.rgb = vColor;\n  gl_FragColor.a = lightColor.a;\n} ";
},{}],"../common/lib/math/functions/Mat3Func.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromMat4 = fromMat4;
exports.fromQuat = fromQuat;
exports.copy = copy;
exports.set = set;
exports.identity = identity;
exports.transpose = transpose;
exports.invert = invert;
exports.determinant = determinant;
exports.multiply = multiply;
exports.translate = translate;
exports.rotate = rotate;
exports.scale = scale;
exports.normalFromMat4 = normalFromMat4;
exports.projection = projection;
exports.add = add;
exports.subtract = subtract;
exports.multiplyScalar = multiplyScalar;
var EPSILON = 0.000001;
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */


function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */


function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */


function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */


function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */


function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */


function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */


function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */


function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */


function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}

;
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {mat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */


function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */


function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */


function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
},{}],"../common/lib/math/functions/Vec3Func.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.length = length;
exports.copy = copy;
exports.set = set;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.scale = scale;
exports.distance = distance;
exports.squaredDistance = squaredDistance;
exports.squaredLength = squaredLength;
exports.negate = negate;
exports.inverse = inverse;
exports.normalize = normalize;
exports.dot = dot;
exports.cross = cross;
exports.lerp = lerp;
exports.transformMat4 = transformMat4;
exports.transformMat3 = transformMat3;
exports.transformQuat = transformQuat;
exports.exactEquals = exactEquals;
exports.angle = void 0;
var EPSILON = 0.000001;
/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */


function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */


function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */


function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.sqrt(x * x + y * y + z * z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */


function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */


function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */


function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */


function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */


function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */


function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */


function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */


function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */


function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */


function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var uvx = qy * z - qz * y;
  var uvy = qz * x - qx * z;
  var uvz = qx * y - qy * x;
  var uuvx = qy * uvz - qz * uvy;
  var uuvy = qz * uvx - qx * uvz;
  var uuvz = qx * uvy - qy * uvx;
  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */


var angle = function () {
  var tempA = [0, 0, 0];
  var tempB = [0, 0, 0];
  return function (a, b) {
    copy(tempA, a);
    copy(tempB, b);
    normalize(tempA, tempA);
    normalize(tempB, tempB);
    var cosine = dot(tempA, tempB);

    if (cosine > 1.0) {
      return 0;
    } else if (cosine < -1.0) {
      return Math.PI;
    } else {
      return Math.acos(cosine);
    }
  };
}();
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


exports.angle = angle;

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _glRenderer = _interopRequireDefault(require("gl-renderer"));

var _vertex = _interopRequireDefault(require("./vertex.glsl"));

var _fragment = _interopRequireDefault(require("./fragment.glsl"));

var _Mat3Func = require("../common/lib/math/functions/Mat3Func");

var _Vec3Func = require("../common/lib/math/functions/Vec3Func");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var canvas = document.querySelector("canvas");
var renderer = new _glRenderer.default(canvas, {
  depth: true
});
var program = renderer.compileSync(_fragment.default, _vertex.default);
renderer.useProgram(program);
renderer.uniforms.transition = [1, 0, 0, 0, 1, 0, 0, 0, 1];
var startAngleX = 0;
var startAngleY = 0;
var startAngleZ = 0;

var updateTransition = function updateTransition() {
  var c = Math.cos(startAngleX += 0.003);
  var s = Math.sin(startAngleX);
  var rotateX = [1, 0, 0, 0, c, s, 0, -s, c];
  c = Math.cos(startAngleY += 0.003);
  s = Math.sin(startAngleY);
  var rotateY = [c, 0, s, 0, 1, 0, -s, 0, c];
  c = Math.cos(startAngleZ += 0.003);
  s = Math.sin(startAngleZ);
  var rotateZ = [c, -s, 0, s, c, 0, 0, 0, 1];
  var rotationsMatrix = [];
  (0, _Mat3Func.multiply)(rotationsMatrix, rotateX, rotateY);
  (0, _Mat3Func.multiply)(rotationsMatrix, rotationsMatrix, rotateZ);
  renderer.uniforms.transition = rotationsMatrix;
  requestAnimationFrame(updateTransition);
};

requestAnimationFrame(updateTransition); // const surfaceColors =  [[0.1,0,0], [0,0.1,0], [0,0,0.1], [0.1,0.1,0], [0,0.1,0.1], [0.1,0,0.1]];

var surfaceColors = [[0.1, 0, 0], [0.1, 0, 0], [0.1, 0, 0], [0.1, 0, 0], [0.1, 0, 0], [0.1, 0, 0]];

var createBox = function createBox(size) {
  var h = size / 2;
  var p = [[-h, -h, -h], [-h, h, -h], [h, h, -h], [h, -h, -h], [h, -h, h], [h, h, h], [-h, h, h], [-h, -h, h]];
  var positions = [];
  var cells = [];
  var colors = [];
  var normalVectors = [];
  var positionsLen = positions.length;

  var createSurface = function createSurface(a, b, c, d) {
    var ab = [];
    var ac = [];
    var normal = [];
    (0, _Vec3Func.subtract)(ab, p[b], p[a]);
    (0, _Vec3Func.subtract)(ac, p[c], p[a]);
    (0, _Vec3Func.cross)(normal, ab, ac);
    (0, _Vec3Func.normalize)(normal, normal);
    [a, b, c, d].forEach(function (i) {
      positions.push(p[i]);
      normalVectors.push(normal);
      colors.push(surfaceColors[positionsLen / 4 % 6]);
    });
    [[0, 1, 2], [0, 2, 3]].forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 3),
          a = _ref2[0],
          b = _ref2[1],
          c = _ref2[2];

      cells.push([positionsLen + a, positionsLen + b, positionsLen + c]);
    });
    positionsLen += 4;
  };

  createSurface(0, 1, 2, 3); // 后

  createSurface(5, 4, 3, 2); // 右

  createSurface(4, 5, 6, 7); // 前

  createSurface(7, 6, 1, 0); // 左

  createSurface(5, 2, 1, 6); // 上

  createSurface(0, 3, 4, 7); // 下

  return {
    positions: positions,
    colors: colors,
    cells: cells,
    normalVectors: normalVectors
  };
};

var boxData = createBox(1);
renderer.setMeshData([{
  positions: boxData.positions,
  attributes: {
    colors: boxData.colors,
    normalVectors: boxData.normalVectors
  },
  cells: boxData.cells
}]);
renderer.render();
},{"gl-renderer":"../node_modules/gl-renderer/dist/gl-renderer.js","./vertex.glsl":"vertex.glsl","./fragment.glsl":"fragment.glsl","../common/lib/math/functions/Mat3Func":"../common/lib/math/functions/Mat3Func.js","../common/lib/math/functions/Vec3Func":"../common/lib/math/functions/Vec3Func.js"}],"../../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60494" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/07_3d_box.e31bb0bc.js.map