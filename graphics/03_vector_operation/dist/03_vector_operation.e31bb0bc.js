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
})({"index.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var $ = function $(el) {
  return document.querySelector(el);
};

var $$ = function $$(el) {
  return document.querySelectorAll(el);
};

var Vector =
/*#__PURE__*/
function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector, [{
    key: "scale",
    value: function scale(n) {
      return new Vector(this.x * n, this.y * n);
    }
  }, {
    key: "normalise",
    value: function normalise() {
      return this.scale(1 / this.length);
    }
  }, {
    key: "reverse",
    value: function reverse() {
      return this.scale(-1);
    }
  }, {
    key: "add",
    value: function add(v) {
      return new Vector(this.x + v.x, this.y + v.y);
    }
  }, {
    key: "minus",
    value: function minus(v) {
      return this.add(v.reverse());
    }
  }, {
    key: "dot",
    value: function dot(v) {
      return this.x * v.x + this.y * v.y;
    }
  }, {
    key: "cross",
    value: function cross(v) {
      return this.x * v.y - this.y * v.x;
    }
  }, {
    key: "length",
    get: function get() {
      return Math.hypot(this.x, this.y);
    }
  }, {
    key: "dir",
    get: function get() {
      return Math.atan2(this.y, this.x);
    }
  }]);

  return Vector;
}();

var Canvas =
/*#__PURE__*/
function () {
  function Canvas(canvas) {
    var _this = this;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$axis = _ref.axis,
        axis = _ref$axis === void 0 ? true : _ref$axis,
        size = _ref.size,
        _ref$dash = _ref.dash,
        dash = _ref$dash === void 0 ? 8 : _ref$dash,
        _ref$color = _ref.color,
        color = _ref$color === void 0 ? 'black' : _ref$color;

    _classCallCheck(this, Canvas);

    var ctx = this.ctx = canvas.getContext('2d');
    if (!size) size = 512;
    this.size = size;
    this.dash = dash;
    this.color = color;
    var scale = this.scale = canvas.width / size;
    ctx.scale(scale, -scale);
    ctx.translate(size / 2, -size / 2);
    ctx.strokeStyle = color;
    if (axis) this.drawAxis();
    if (!window.mouseBinded) canvas.addEventListener('mousemove', function (e) {
      window.mouseBinded = true;
      var rect = canvas.getBoundingClientRect();
      var x = (e.clientX - rect.left) * (canvas.width / rect.width) / scale - size / 2;
      var y = size / 2 - (e.clientY - rect.top) * (canvas.height / rect.height) / scale;
      ctx.clearRect(-size / 2, -size / 2, size, size);

      var point = _toConsumableArray($$('[name=point]')).find(function (x) {
        return x.checked;
      }).value;

      if (point === 'P') {
        coordinates[0] = x;
        coordinates[1] = y;
      } else if (point === 'Q') {
        coordinates[2] = x;
        coordinates[3] = y;
      } else {
        coordinates[4] = x;
        coordinates[5] = y;
      }

      if (axis) _this.drawAxis();
      $('#dist1').innerHTML = dist.apply(void 0, coordinates.concat([true]));
      $('#dist2').innerHTML = dist.apply(void 0, coordinates);
      $('#P').innerHTML = coordinates.slice(0, 2);
      $('#Q').innerHTML = coordinates.slice(2, 4);
      $('#R').innerHTML = coordinates.slice(4);
    });
  }

  _createClass(Canvas, [{
    key: "drawAxis",
    value: function drawAxis() {
      var ctx = this.ctx,
          size = this.size,
          dash = this.dash;
      var O = {
        x: 0,
        y: 0
      };
      var X = {
        x: 1,
        y: 0
      };
      var Y = {
        x: 0,
        y: 1
      };
      this.line(O, X, true);
      this.line(O, Y, true);
      this.point(O, 'O');
    }
  }, {
    key: "text",
    value: function text(x, y, _text) {
      var filled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var ctx = this.ctx;
      ctx.scale(1, -1);
      ctx.font = "16px serif";
      filled ? ctx.fillText(_text, x, -y) : ctx.strokeText(_text, x, -y);
      ctx.scale(1, -1);
    } // 通过两点画坐标轴内的直线

  }, {
    key: "line",
    value: function line(A, B) {
      var _this2 = this;

      var dashed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var color = arguments.length > 3 ? arguments[3] : undefined;
      if (A.x === B.x && A.y === B.y) return;
      var p = this.size / 2;
      var ends = [{
        x: A.x + (p - A.y) / (B.y - A.y) * (B.x - A.x),
        y: p
      }, {
        x: A.x + (-p - A.y) / (B.y - A.y) * (B.x - A.x),
        y: -p
      }, {
        x: p,
        y: A.y + (p - A.x) / (B.x - A.x) * (B.y - A.y)
      }, {
        x: -p,
        y: A.y + (-p - A.x) / (B.x - A.x) * (B.y - A.y)
      }];
      ends.forEach(function (P) {
        return _this2.lineSeg(A, P, dashed, color);
      });
    }
  }, {
    key: "lineSeg",
    value: function lineSeg(_ref2, _ref3) {
      var x1 = _ref2.x,
          y1 = _ref2.y;
      var x2 = _ref3.x,
          y2 = _ref3.y;
      var dashed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var color = arguments.length > 3 ? arguments[3] : undefined;
      var ctx = this.ctx,
          dash = this.dash;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      if (dashed) ctx.setLineDash([dash, dash]);
      if (color) ctx.strokeStyle = color;
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.strokeStyle = this.color;
    }
  }, {
    key: "circle",
    value: function circle(x, y, r) {
      var filled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.ellipse(x, y, r, r, 0, 0, Math.PI * 2);
      filled ? ctx.fill() : ctx.stroke();
    }
  }, {
    key: "point",
    value: function point(_ref4, name) {
      var x = _ref4.x,
          y = _ref4.y;
      this.circle(x, y, 2, true);
      if (name) this.text(x, y, name, true);
    }
  }]);

  return Canvas;
}();

var coordinates = [0, 0, -100, 0, 100, 0];
var canvas = new Canvas($('canvas'), {
  axis: false
});
dist(0, 100, -100, 0, 100, 0, true);

function dist(x0, y0, x1, y1, x2, y2) {
  var seg = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var P = new Vector(x0, y0);
  var Q = new Vector(x1, y1);
  var R = new Vector(x2, y2);
  var QR = R.minus(Q);
  var QP = P.minus(Q);
  var RP = P.minus(R); //   const PN = new Vector(QR.y, -QR.x)
  //   const N = QR.length === 0 ? Q.scale(1) : new Vector(
  //     P.x * QR.x ** 2 + Q.x * QR.y ** 2 + QR.x * QR.y * (P.y - Q.y),
  //     P.y * QR.y ** 2 + Q.y * QR.x ** 2 + QR.x * QR.y * (P.x - Q.x)
  //   ).scale(1 / QR.length ** 2)

  var N = new Vector((QR.x * QP.x + QR.y * QP.y) / QR.length * (R.x - Q.x) / QR.length + Q.x, (QR.x * QP.x + QR.y * QP.y) / QR.length * (R.y - Q.y) / QR.length + Q.y);
  var PN = N.minus(P);
  if (!seg) return QP.cross(QR) / QR.length;
  canvas.point(P, 'P');
  canvas.point(Q, 'Q');
  canvas.point(R, 'R ');
  canvas.line(Q, R);
  canvas.lineSeg(Q, R, false, 'blue');

  if (QR.length === 0) {
    canvas.lineSeg(N, P);
    return QP.length;
  }

  if (PN.length > 0) canvas.point(N, 'N');
  var dotProduct = QR.dot(QP) / QR.length;

  if (dotProduct < 0) {
    canvas.lineSeg(N, P, true, 'green');
    canvas.lineSeg(P, Q, false, 'red');
    return QP.length;
  }

  if (dotProduct > QR.length) {
    canvas.lineSeg(N, P, true, 'green');
    canvas.lineSeg(P, R, false, 'red');
    return RP.length;
  }

  canvas.lineSeg(P, N, false, 'red');
  return QP.cross(QR) / QR.length;
}
},{}],"../../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64318" + '/');

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
//# sourceMappingURL=/03_vector_operation.e31bb0bc.js.map