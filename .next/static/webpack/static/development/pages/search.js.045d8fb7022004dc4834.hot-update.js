webpackHotUpdate("static/development/pages/search.js",{

/***/ "./src/pages/search.jsx":
/*!******************************!*\
  !*** ./src/pages/search.jsx ***!
  \******************************/
/*! exports provided: Search, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/vonnegut/drive/minnehack/src/pages/search.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var Search = function Search(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    userInput: ""
  }),
      state = _useState[0],
      setState = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1245080972" + " " + "spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1245080972" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-1245080972" + " " + "input-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "What's your trash can's code?"), __jsx("div", {
    className: "jsx-1245080972" + " " + "field-and-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    value: state.userInput,
    onChange: function onChange(e) {
      return setState({
        userInput: e.target.value
      });
    },
    className: "jsx-1245080972" + " " + "input-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("div", {
    style: {
      width: "30px"
    },
    className: "jsx-1245080972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("button", {
    onClick: function onClick() {
      if (state.userInput === "") {
        alert("Please type in a valid trash can id");
      } else {}
    },
    className: "jsx-1245080972" + " " + "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Do It"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1245080972",
    __self: this
  }, ".spacer.jsx-1245080972{-webkit-flex:1;-ms-flex:1;flex:1;}.container.jsx-1245080972{width:500px;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.input-label.jsx-1245080972{font-size:3vh;padding:30px;}.field-and-button.jsx-1245080972{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.submit.jsx-1245080972{width:150px;font-size:4vh;border-radius:10px;border:none;background-color:rgba(0,150,0,0.5);box-shadow:0 5px 20px 0 rgba(0,0,0,0.25);color:black;cursor:pointer;border:2px solid black;}.submit.jsx-1245080972:hover{box-shadow:0 5px 30px 0 rgba(0,0,0,0.5);-webkit-transition:0.3s ease all;transition:0.3s ease all;}.submit.jsx-1245080972:focus{outline:none;}.input-field.jsx-1245080972{width:350px;padding:10px 30px;font-size:4vh;border-radius:10px;border:none;box-shadow:0 5px 20px 0 rgba(0,0,0,0.25);border:2px solid black;}.input-field.jsx-1245080972:focus{outline:none;box-shadow:0 5px 30px 0 rgba(0,0,0,0.5);-webkit-transition:0.3s ease all;transition:0.3s ease all;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b25uZWd1dC9kcml2ZS9taW5uZWhhY2svc3JjL3BhZ2VzL3NlYXJjaC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NrQixBQUdrQixBQUdLLEFBT0UsQUFJRCxBQUdELEFBVytCLEFBSTlCLEFBR0QsQUFTQyxZQXhDRCxBQWNFLEFBa0JJLENBSHBCLEFBWTZDLENBbEM5QixVQU5BLEVBY00sQ0FQckIsR0F5QmdCLEdBcENoQixPQTRCMkIsSUFTTixDQWxCUCxRQTBCYSxJQXpCYSxNQWtCMUIsV0F4QmQsQ0F5QjhDLGlCQWxCQSxNQWhCdEIsQUF3QnhCLGFBaUJBLEtBTnlCLGlCQWxCWCxNQW1CZCxNQWxCaUIsZUFDUSxnQkFsQkosT0FtQnJCLHNGQWxCQSIsImZpbGUiOiIvVXNlcnMvdm9ubmVndXQvZHJpdmUvbWlubmVoYWNrL3NyYy9wYWdlcy9zZWFyY2guanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2ggPSAoe30pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgdXNlcklucHV0OiBcIlwiXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dC1sYWJlbFwiPldoYXQncyB5b3VyIHRyYXNoIGNhbidzIGNvZGU/PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1hbmQtYnV0dG9uXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiXG4gICAgICAgICAgICB2YWx1ZT17c3RhdGUudXNlcklucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U3RhdGUoeyB1c2VySW5wdXQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMHB4XCIgfX0gLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoc3RhdGUudXNlcklucHV0ID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgdHlwZSBpbiBhIHZhbGlkIHRyYXNoIGNhbiBpZFwiKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBEbyBJdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuc3BhY2VyIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0LWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDN2aDtcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5maWVsZC1hbmQtYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5zdWJtaXQge1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDR2aDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMCwgMC41KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDVweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJtaXQ6aG92ZXIge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcbiAgICAgICAgfVxuICAgICAgICAuc3VibWl0OmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5pbnB1dC1maWVsZCB7XG4gICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICAgICAgICBmb250LXNpemU6IDR2aDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDVweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuICAgICAgICAuaW5wdXQtZmllbGQ6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iXX0= */\n/*@ sourceURL=/Users/vonnegut/drive/minnehack/src/pages/search.jsx */"));
};
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=search.js.045d8fb7022004dc4834.hot-update.js.map