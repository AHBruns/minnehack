module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/trash-can/[id].jsx":
/*!**************************************!*\
  !*** ./src/pages/trash-can/[id].jsx ***!
  \**************************************/
/*! exports provided: Details, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/vonnegut/drive/minnehack/src/pages/trash-can/[id].jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Details = ({}) => {
  var _router$query, _router$query$id;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const fakeData = {
    breaks24hours: 23,
    breaks7days: 147,
    allBreaks: 23460,
    location: {
      latitude: 45,
      longitude: 45
    },
    breaks: [{
      timestamp: 1244534,
      length: 300
    }, {
      timestamp: 1243534,
      length: 256
    }, {
      timestamp: 1244514,
      length: 290
    }]
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3639944387" + " " + "spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-3639944387" + " " + "das-app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-3639944387" + " " + "trash-can-id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Trash Can: ", router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : (_router$query$id = _router$query.id) === null || _router$query$id === void 0 ? void 0 : _router$query$id.toUpperCase()), __jsx("div", {
    className: "jsx-3639944387" + " " + "metrics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3639944387" + " " + "singletons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx("ol", {
    className: "jsx-3639944387",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, fakeData.breaks.map(b => {
    return __jsx("li", {
      className: "jsx-3639944387",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, JSON.stringify(b));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3639944387",
    __self: undefined
  }, ".spacer.jsx-3639944387{-webkit-flex:1;-ms-flex:1;flex:1;}.das-app.jsx-3639944387{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.trash-can-id.jsx-3639944387{padding:20px;border:2px solid black;border-radius:20px;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b25uZWd1dC9kcml2ZS9taW5uZWhhY2svc3JjL3BhZ2VzL3RyYXNoLWNhbi9baWRdLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q2tCLEFBR2tCLEFBR00sQUFNQSxhQUNVLG9CQVR6QixHQVVxQixtQkFDVixTQUNYLFVBVHFCLDZGQUNJLG1HQUNELDhFQUN4QiIsImZpbGUiOiIvVXNlcnMvdm9ubmVndXQvZHJpdmUvbWlubmVoYWNrL3NyYy9wYWdlcy90cmFzaC1jYW4vW2lkXS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGNvbnN0IERldGFpbHMgPSAoe30pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgZmFrZURhdGEgPSB7XG4gICAgYnJlYWtzMjRob3VyczogMjMsXG4gICAgYnJlYWtzN2RheXM6IDE0NyxcbiAgICBhbGxCcmVha3M6IDIzNDYwLFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICBsYXRpdHVkZTogNDUsXG4gICAgICBsb25naXR1ZGU6IDQ1XG4gICAgfSxcbiAgICBicmVha3M6IFtcbiAgICAgIHtcbiAgICAgICAgdGltZXN0YW1wOiAxMjQ0NTM0LFxuICAgICAgICBsZW5ndGg6IDMwMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGltZXN0YW1wOiAxMjQzNTM0LFxuICAgICAgICBsZW5ndGg6IDI1NlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGltZXN0YW1wOiAxMjQ0NTE0LFxuICAgICAgICBsZW5ndGg6IDI5MFxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlclwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhcy1hcHBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRyYXNoLWNhbi1pZFwiPlxuICAgICAgICAgIFRyYXNoIENhbjoge3JvdXRlcj8ucXVlcnk/LmlkPy50b1VwcGVyQ2FzZSgpfVxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldHJpY3NcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZXRvbnNcIj48L2Rpdj5cbiAgICAgICAgICA8b2w+XG4gICAgICAgICAgICB7ZmFrZURhdGEuYnJlYWtzLm1hcChiID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxsaT57SlNPTi5zdHJpbmdpZnkoYil9PC9saT47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuc3BhY2VyIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5kYXMtYXBwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAudHJhc2gtY2FuLWlkIHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzO1xuIl19 */\n/*@ sourceURL=/Users/vonnegut/drive/minnehack/src/pages/trash-can/[id].jsx */"));
};
/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ }),

/***/ 5:
/*!********************************************!*\
  !*** multi ./src/pages/trash-can/[id].jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vonnegut/drive/minnehack/src/pages/trash-can/[id].jsx */"./src/pages/trash-can/[id].jsx");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map