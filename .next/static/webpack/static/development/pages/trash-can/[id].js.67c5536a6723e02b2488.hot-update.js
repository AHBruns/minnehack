webpackHotUpdate("static/development/pages/trash-can/[id].js",{

/***/ "./src/pages/trash-can/[id].jsx":
/*!**************************************!*\
  !*** ./src/pages/trash-can/[id].jsx ***!
  \**************************************/
/*! exports provided: Details, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/vonnegut/drive/minnehack/src/pages/trash-can/[id].jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var Details = function Details(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var fakeData = {
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3964463689" + " " + "spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3964463689" + " " + "das-app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3964463689" + " " + "trash-can-id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Trash Can: ", router.query.id.toUpperCase()), __jsx("ol", {
    className: "jsx-3964463689",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3964463689",
    __self: this
  }, ".spacer.jsx-3964463689{-webkit-flex:1;-ms-flex:1;flex:1;}.das-app.jsx-3964463689{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.trash-can-id.jsx-3964463689{padding:20px;border:2px solid black;border-radius:20px;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b25uZWd1dC9kcml2ZS9taW5uZWhhY2svc3JjL3BhZ2VzL3RyYXNoLWNhbi9baWRdLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2tCLEFBR2tCLEFBR00sQUFLQSxhQUNVLG9CQVJ6QixHQVNxQixtQkFDVixTQUNYLFVBUnFCLDZGQUNJLG1HQUN6QiIsImZpbGUiOiIvVXNlcnMvdm9ubmVndXQvZHJpdmUvbWlubmVoYWNrL3NyYy9wYWdlcy90cmFzaC1jYW4vW2lkXS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGNvbnN0IERldGFpbHMgPSAoe30pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgZmFrZURhdGEgPSB7XG4gICAgYnJlYWtzMjRob3VyczogMjMsXG4gICAgYnJlYWtzN2RheXM6IDE0NyxcbiAgICBhbGxCcmVha3M6IDIzNDYwLFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICBsYXRpdHVkZTogNDUsXG4gICAgICBsb25naXR1ZGU6IDQ1XG4gICAgfSxcbiAgICBicmVha3M6IFtcbiAgICAgIHtcbiAgICAgICAgdGltZXN0YW1wOiAxMjQ0NTM0LFxuICAgICAgICBsZW5ndGg6IDMwMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGltZXN0YW1wOiAxMjQzNTM0LFxuICAgICAgICBsZW5ndGg6IDI1NlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGltZXN0YW1wOiAxMjQ0NTE0LFxuICAgICAgICBsZW5ndGg6IDI5MFxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlclwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhcy1hcHBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRyYXNoLWNhbi1pZFwiPlxuICAgICAgICAgIFRyYXNoIENhbjoge3JvdXRlci5xdWVyeS5pZC50b1VwcGVyQ2FzZSgpfVxuICAgICAgICA8L2gxPlxuICAgICAgICA8b2w+PC9vbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuc3BhY2VyIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5kYXMtYXBwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnRyYXNoLWNhbi1pZCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlscztcbiJdfQ== */\n/*@ sourceURL=/Users/vonnegut/drive/minnehack/src/pages/trash-can/[id].jsx */"));
};
/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ })

})
//# sourceMappingURL=[id].js.67c5536a6723e02b2488.hot-update.js.map