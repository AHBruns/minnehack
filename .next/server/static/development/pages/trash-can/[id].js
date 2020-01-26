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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-map-gl */ "react-map-gl");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/vonnegut/drive/minnehack/src/pages/trash-can/[id].jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const getDescriptor = length => {
  return length > 300 ? "large" : length > 200 ? "medium sized" : "small";
};

const Details = ({}) => {
  var _router$query, _router$query$id;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const fakeData = {
    breaks24hours: 23,
    breaks7days: 147,
    allBreaks: 23460,
    timeLeftFull: 2354,
    location: {
      latitude: 44.9728205,
      longitude: -93.2364423
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
    }, {
      timestamp: 1244534,
      length: 300
    }, {
      timestamp: 1243534,
      length: 256
    }, {
      timestamp: 1244514,
      length: 290
    }, {
      timestamp: 1244534,
      length: 300
    }, {
      timestamp: 1243534,
      length: 256
    }, {
      timestamp: 1244514,
      length: 290
    }, {
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
  const fakeCoordinates = [{
    latitude: 44.9728205,
    longitude: -93.2364423
  }, {
    latitude: -71,
    longitude: 44
  }, {
    latitude: -71,
    longitude: 18
  }, {
    latitude: -84,
    longitude: -1
  }, {
    latitude: 50,
    longitude: 8
  }, {
    latitude: 64,
    longitude: -47
  }, {
    latitude: 51,
    longitude: 3
  }, {
    latitude: 26,
    longitude: 82
  }, {
    latitude: -60,
    longitude: 8
  }, {
    latitude: -42,
    longitude: -63
  }, {
    latitude: 69,
    longitude: -9
  }]; // const [addrStrings, setAddrStrings] = useState([]);
  // useEffect(() => {
  //   setAddrStrings(
  //     fakeCoordinates.map(async cords => {
  //       const resp = await axios.get(
  //         `https://geocode.xyz/${cords.latitude},${cords.longitude}?geoit=json`
  //       );
  //       const jsonResp = resp.data;
  //       return `${jsonResp?.alt?.loc[0]?.stnumber} ${jsonResp?.alt?.loc[0]?.staddress}, ${jsonResp?.alt?.loc[0]?.city} ${jsonResp?.alt?.loc[0]?.prov}`;
  //     })
  //   );
  // }, []);

  const {
    0: isMinimized,
    1: setIsMinimized
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: viewport,
    1: setViewport
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    width: "100%",
    height: "100%",
    latitude: fakeData.location.latitude,
    longitude: fakeData.location.longitude,
    zoom: 5
  });
  const TOKEN = "pk.eyJ1IjoidG9wbCIsImEiOiJjazUycjRteXkwMHQwM2tyNXlyZWV6c21mIn0.qa9ZJMXqGBgfT--iIqn80w";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      zIndex: "0",
      filter: !isMinimized ? "blur(2px)" : ""
    },
    className: "jsx-1563983713",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, viewport, {
    onViewportChange: setViewport,
    mapboxApiAccessToken: TOKEN,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }), fakeCoordinates.map((cords, _) => __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["Marker"], {
    latitude: cords.latitude,
    longitude: cords.longitude,
    offsetTop: -34,
    offsetLeft: -14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, __jsx("p", {
    style: _objectSpread({
      filter: "",
      fontSize: "3vh",
      width: "28px",
      height: "34px",
      cursor: "pointer"
    }, isMinimized ? {
      filter: "drop-shadow(0 2px 5px rgba(0, 150, 0, 0.5)) drop-shadow(0 0px 2px rgba(0, 150, 0, 0.75))"
    } : {}),
    onClick: async () => {
      const resp = (await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`https://geocode.xyz/${cords.latitude},${cords.longitude}?geoit=json`)).data;
      alert(`This trash can's location is: ${resp.stnumber} ${resp.staddress}`);
    },
    className: "jsx-1563983713",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, "\uD83D\uDDD1"))))), __jsx("div", {
    className: "jsx-1563983713" + " " + "spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }), !isMinimized && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
    style: {
      fontSize: "2.5vh",
      zIndex: "1",
      margin: "0",
      margin: "auto",
      cursor: "pointer",
      padding: "10px",
      border: "solid 2px black",
      marginBottom: "10px",
      borderRadius: "10px",
      boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.25)",
      backgroundColor: "rgba(0, 150, 0, 0.5)"
    },
    onClick: e => setIsMinimized(true),
    className: "jsx-1563983713",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  }, "Minimize"), __jsx("div", {
    style: {
      zIndex: "1"
    },
    className: "jsx-1563983713" + " " + "das-app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-1563983713" + " " + "trash-can-id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, "Trash Can: ", router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : (_router$query$id = _router$query.id) === null || _router$query$id === void 0 ? void 0 : _router$query$id.toUpperCase()), __jsx("div", {
    className: "jsx-1563983713" + " " + "metrics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1563983713" + " " + "singletons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-1563983713" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: undefined
  }, "Metrics"), __jsx("div", {
    className: "jsx-1563983713" + " " + "metrics-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-1563983713" + " " + "breaks-24-hours metric",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }, "Last 24 Hours:", " ", fakeData.breaks24hours.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), __jsx("div", {
    className: "jsx-1563983713" + " " + "metric-spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }), __jsx("h2", {
    className: "jsx-1563983713" + " " + "breaks-7-days metric",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: undefined
  }, "Last 7 Days:", " ", fakeData.breaks7days.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), __jsx("div", {
    className: "jsx-1563983713" + " " + "metric-spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: undefined
  }), __jsx("h2", {
    className: "jsx-1563983713" + " " + "all-breaks metric",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }, "Total:", " ", fakeData.allBreaks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), __jsx("div", {
    className: "jsx-1563983713" + " " + "metric-spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: undefined
  }), __jsx("h2", {
    className: "jsx-1563983713" + " " + "left-full metric",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: undefined
  }, "Time Left Full: ", fakeData.timeLeftFull, "s"))), __jsx("div", {
    style: {
      width: "30px"
    },
    className: "jsx-1563983713",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1563983713" + " " + "breaks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-1563983713" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  }, "Breaks"), __jsx("ol", {
    className: "jsx-1563983713" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
  }, fakeData.breaks.map(b => {
    return __jsx("li", {
      className: "jsx-1563983713" + " " + "line-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: undefined
    }, "Something ", getDescriptor(b.length), " was thrown away on", " ", new Date(b.timestamp).toDateString());
  })))))), isMinimized && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
    style: {
      fontSize: "2.5vh",
      zIndex: "1",
      margin: "0",
      margin: "auto",
      cursor: "pointer",
      padding: "10px",
      border: "solid 2px black",
      marginBottom: "10px",
      borderRadius: "10px",
      boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.25)",
      backgroundColor: "rgba(0, 150, 0, 0.5)",
      position: "absolute",
      top: "100px",
      left: "15px"
    },
    onClick: e => setIsMinimized(false),
    className: "jsx-1563983713",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: undefined
  }, "Maximize")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1563983713",
    __self: undefined
  }, ".spacer.jsx-1563983713{-webkit-flex:1;-ms-flex:1;flex:1;}.metric-spacer.jsx-1563983713{height:20px;}.das-app.jsx-1563983713{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:750px;margin:auto;background-color:rgba(0,150,0,0.5);padding:30px;border-radius:20px;border:2px solid black;}.metric.jsx-1563983713{margin:0;}.heading.jsx-1563983713{margin:10px;margin-bottom:0;}.trash-can-id.jsx-1563983713{padding:20px;border-bottom:4px solid black;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;margin:auto;margin-bottom:30px;width:calc(100% - 40px);}.list.jsx-1563983713{padding:0;margin:0;max-height:310px;overflow:scroll;border-bottom:4px solid black;border-top:4px solid black;}.metrics.jsx-1563983713{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.line-item.jsx-1563983713{padding:10px;border:2px solid black;border-radius:10px;margin:10px;list-style-type:none;}.breaks.jsx-1563983713{-webkit-flex:1;-ms-flex:1;flex:1;}.metrics-wrapper.jsx-1563983713{border:2px solid black;padding:20px;border-radius:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b25uZWd1dC9kcml2ZS9taW5uZWhhY2svc3JjL3BhZ2VzL3RyYXNoLWNhbi9baWRdLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1U2tCLEFBR2tCLEFBR0ssQUFHQyxBQVlKLEFBR0csQUFJQyxBQVFILEFBUUMsQUFJRSxBQU9OLEFBR2dCLFNBcEN6QixDQWVXLENBUUksQ0F0Q2YsQUFrQmtCLENBSWMsQUFvQlAsTUFYTixJQXFCSixLQWpDZixLQXRCQSxBQW9EQSxHQWpCa0IsQUFXRyxBQVVBLE9BOUJHLFNBVVEsR0FXbEIsQUFVZCxZQVR1QixPQTFDRixRQStCUSxHQUs3QixHQU9BLHFCQVhBLFlBWGMsWUFDTyxtQkFDSyxlQXRCRCxTQXVCekIsMEZBdEJ3Qiw4RUFDVixZQUNBLFlBQzBCLG1DQUN6QixhQUNNLG1CQUNJLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvdm9ubmVndXQvZHJpdmUvbWlubmVoYWNrL3NyYy9wYWdlcy90cmFzaC1jYW4vW2lkXS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3RNYXBHTCwgeyBNYXJrZXIgfSBmcm9tIFwicmVhY3QtbWFwLWdsXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGdldERlc2NyaXB0b3IgPSBsZW5ndGggPT4ge1xuICByZXR1cm4gbGVuZ3RoID4gMzAwID8gXCJsYXJnZVwiIDogbGVuZ3RoID4gMjAwID8gXCJtZWRpdW0gc2l6ZWRcIiA6IFwic21hbGxcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBEZXRhaWxzID0gKHt9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBmYWtlRGF0YSA9IHtcbiAgICBicmVha3MyNGhvdXJzOiAyMyxcbiAgICBicmVha3M3ZGF5czogMTQ3LFxuICAgIGFsbEJyZWFrczogMjM0NjAsXG4gICAgdGltZUxlZnRGdWxsOiAyMzU0LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICBsYXRpdHVkZTogNDQuOTcyODIwNSxcbiAgICAgIGxvbmdpdHVkZTogLTkzLjIzNjQ0MjNcbiAgICB9LFxuICAgIGJyZWFrczogW1xuICAgICAge1xuICAgICAgICB0aW1lc3RhbXA6IDEyNDQ1MzQsXG4gICAgICAgIGxlbmd0aDogMzAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lc3RhbXA6IDEyNDM1MzQsXG4gICAgICAgIGxlbmd0aDogMjU2XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lc3RhbXA6IDEyNDQ1MTQsXG4gICAgICAgIGxlbmd0aDogMjkwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lc3RhbXA6IDEyNDQ1MzQsXG4gICAgICAgIGxlbmd0aDogMzAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lc3RhbXA6IDEyNDM1MzQsXG4gICAgICAgIGxlbmd0aDogMjU2XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lc3RhbXA6IDEyNDQ1MTQsXG4gICAgICAgIGxlbmd0aDogMjkwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lc3RhbXA6IDEyNDQ1MzQsXG4gICAgICAgIGxlbmd0aDogMzAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lc3RhbXA6IDEyNDM1MzQsXG4gICAgICAgIGxlbmd0aDogMjU2XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lc3RhbXA6IDEyNDQ1MTQsXG4gICAgICAgIGxlbmd0aDogMjkwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lc3RhbXA6IDEyNDQ1MzQsXG4gICAgICAgIGxlbmd0aDogMzAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lc3RhbXA6IDEyNDM1MzQsXG4gICAgICAgIGxlbmd0aDogMjU2XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lc3RhbXA6IDEyNDQ1MTQsXG4gICAgICAgIGxlbmd0aDogMjkwXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBjb25zdCBmYWtlQ29vcmRpbmF0ZXMgPSBbXG4gICAge1xuICAgICAgbGF0aXR1ZGU6IDQ0Ljk3MjgyMDUsXG4gICAgICBsb25naXR1ZGU6IC05My4yMzY0NDIzXG4gICAgfSxcbiAgICB7XG4gICAgICBsYXRpdHVkZTogLTcxLFxuICAgICAgbG9uZ2l0dWRlOiA0NFxuICAgIH0sXG4gICAge1xuICAgICAgbGF0aXR1ZGU6IC03MSxcbiAgICAgIGxvbmdpdHVkZTogMThcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhdGl0dWRlOiAtODQsXG4gICAgICBsb25naXR1ZGU6IC0xXG4gICAgfSxcbiAgICB7XG4gICAgICBsYXRpdHVkZTogNTAsXG4gICAgICBsb25naXR1ZGU6IDhcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhdGl0dWRlOiA2NCxcbiAgICAgIGxvbmdpdHVkZTogLTQ3XG4gICAgfSxcbiAgICB7XG4gICAgICBsYXRpdHVkZTogNTEsXG4gICAgICBsb25naXR1ZGU6IDNcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhdGl0dWRlOiAyNixcbiAgICAgIGxvbmdpdHVkZTogODJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhdGl0dWRlOiAtNjAsXG4gICAgICBsb25naXR1ZGU6IDhcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhdGl0dWRlOiAtNDIsXG4gICAgICBsb25naXR1ZGU6IC02M1xuICAgIH0sXG4gICAge1xuICAgICAgbGF0aXR1ZGU6IDY5LFxuICAgICAgbG9uZ2l0dWRlOiAtOVxuICAgIH1cbiAgXTtcbiAgLy8gY29uc3QgW2FkZHJTdHJpbmdzLCBzZXRBZGRyU3RyaW5nc10gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgc2V0QWRkclN0cmluZ3MoXG4gIC8vICAgICBmYWtlQ29vcmRpbmF0ZXMubWFwKGFzeW5jIGNvcmRzID0+IHtcbiAgLy8gICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLmdldChcbiAgLy8gICAgICAgICBgaHR0cHM6Ly9nZW9jb2RlLnh5ei8ke2NvcmRzLmxhdGl0dWRlfSwke2NvcmRzLmxvbmdpdHVkZX0/Z2VvaXQ9anNvbmBcbiAgLy8gICAgICAgKTtcbiAgLy8gICAgICAgY29uc3QganNvblJlc3AgPSByZXNwLmRhdGE7XG4gIC8vICAgICAgIHJldHVybiBgJHtqc29uUmVzcD8uYWx0Py5sb2NbMF0/LnN0bnVtYmVyfSAke2pzb25SZXNwPy5hbHQ/LmxvY1swXT8uc3RhZGRyZXNzfSwgJHtqc29uUmVzcD8uYWx0Py5sb2NbMF0/LmNpdHl9ICR7anNvblJlc3A/LmFsdD8ubG9jWzBdPy5wcm92fWA7XG4gIC8vICAgICB9KVxuICAvLyAgICk7XG4gIC8vIH0sIFtdKTtcbiAgY29uc3QgW2lzTWluaW1pemVkLCBzZXRJc01pbmltaXplZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdID0gdXNlU3RhdGUoe1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIGxhdGl0dWRlOiBmYWtlRGF0YS5sb2NhdGlvbi5sYXRpdHVkZSxcbiAgICBsb25naXR1ZGU6IGZha2VEYXRhLmxvY2F0aW9uLmxvbmdpdHVkZSxcbiAgICB6b29tOiA1XG4gIH0pO1xuICBjb25zdCBUT0tFTiA9XG4gICAgXCJway5leUoxSWpvaWRHOXdiQ0lzSW1FaU9pSmphelV5Y2pSdGVYa3dNSFF3TTJ0eU5YbHlaV1Y2YzIxbUluMC5xYTlaSk1YcUdCZ2ZULS1pSXFuODB3XCI7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgdG9wOiBcIjBcIixcbiAgICAgICAgICBsZWZ0OiBcIjBcIixcbiAgICAgICAgICByaWdodDogXCIwXCIsXG4gICAgICAgICAgYm90dG9tOiBcIjBcIixcbiAgICAgICAgICB6SW5kZXg6IFwiMFwiLFxuICAgICAgICAgIGZpbHRlcjogIWlzTWluaW1pemVkID8gXCJibHVyKDJweClcIiA6IFwiXCJcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFJlYWN0TWFwR0xcbiAgICAgICAgICB7Li4udmlld3BvcnR9XG4gICAgICAgICAgb25WaWV3cG9ydENoYW5nZT17c2V0Vmlld3BvcnR9XG4gICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e1RPS0VOfVxuICAgICAgICA+XG4gICAgICAgICAge2Zha2VDb29yZGluYXRlcy5tYXAoKGNvcmRzLCBfKSA9PiAoXG4gICAgICAgICAgICA8TWFya2VyXG4gICAgICAgICAgICAgIGxhdGl0dWRlPXtjb3Jkcy5sYXRpdHVkZX1cbiAgICAgICAgICAgICAgbG9uZ2l0dWRlPXtjb3Jkcy5sb25naXR1ZGV9XG4gICAgICAgICAgICAgIG9mZnNldFRvcD17LTM0fVxuICAgICAgICAgICAgICBvZmZzZXRMZWZ0PXstMTR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjN2aFwiLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjhweFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM0cHhcIixcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAuLi4oaXNNaW5pbWl6ZWRcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZHJvcC1zaGFkb3coMCAycHggNXB4IHJnYmEoMCwgMTUwLCAwLCAwLjUpKSBkcm9wLXNoYWRvdygwIDBweCAycHggcmdiYSgwLCAxNTAsIDAsIDAuNzUpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IHt9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcCA9IChcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgIGBodHRwczovL2dlb2NvZGUueHl6LyR7Y29yZHMubGF0aXR1ZGV9LCR7Y29yZHMubG9uZ2l0dWRlfT9nZW9pdD1qc29uYFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApLmRhdGE7XG4gICAgICAgICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgICAgYFRoaXMgdHJhc2ggY2FuJ3MgbG9jYXRpb24gaXM6ICR7cmVzcC5zdG51bWJlcn0gJHtyZXNwLnN0YWRkcmVzc31gXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDwn5eRXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvTWFya2VyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1JlYWN0TWFwR0w+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyXCIgLz5cbiAgICAgIHshaXNNaW5pbWl6ZWQgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogXCIyLjV2aFwiLFxuICAgICAgICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICAgICAgICBtYXJnaW46IFwiMFwiLFxuICAgICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgYm9yZGVyOiBcInNvbGlkIDJweCBibGFja1wiLFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMCA1cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSlcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMTUwLCAwLCAwLjUpXCJcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IHNldElzTWluaW1pemVkKHRydWUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE1pbmltaXplXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzLWFwcFwiIHN0eWxlPXt7IHpJbmRleDogXCIxXCIgfX0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidHJhc2gtY2FuLWlkXCI+XG4gICAgICAgICAgICAgIFRyYXNoIENhbjoge3JvdXRlcj8ucXVlcnk/LmlkPy50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0cmljc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZXRvbnNcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPk1ldHJpY3M8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0cmljcy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYnJlYWtzLTI0LWhvdXJzIG1ldHJpY1wiPlxuICAgICAgICAgICAgICAgICAgICBMYXN0IDI0IEhvdXJzOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge2Zha2VEYXRhLmJyZWFrczI0aG91cnNcbiAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIil9XG4gICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRyaWMtc3BhY2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJicmVha3MtNy1kYXlzIG1ldHJpY1wiPlxuICAgICAgICAgICAgICAgICAgICBMYXN0IDcgRGF5czp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtmYWtlRGF0YS5icmVha3M3ZGF5c1xuICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKX1cbiAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldHJpYy1zcGFjZXJcIiAvPlxuXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWxsLWJyZWFrcyBtZXRyaWNcIj5cbiAgICAgICAgICAgICAgICAgICAgVG90YWw6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7ZmFrZURhdGEuYWxsQnJlYWtzXG4gICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpfVxuICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0cmljLXNwYWNlclwiIC8+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibGVmdC1mdWxsIG1ldHJpY1wiPlxuICAgICAgICAgICAgICAgICAgICBUaW1lIExlZnQgRnVsbDoge2Zha2VEYXRhLnRpbWVMZWZ0RnVsbH1zXG4gICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMHB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVha3NcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPkJyZWFrczwvaDE+XG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgIHtmYWtlRGF0YS5icmVha3MubWFwKGIgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5lLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNvbWV0aGluZyB7Z2V0RGVzY3JpcHRvcihiLmxlbmd0aCl9IHdhcyB0aHJvd24gYXdheSBvbntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShiLnRpbWVzdGFtcCkudG9EYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHtpc01pbmltaXplZCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIuNXZoXCIsXG4gICAgICAgICAgICAgIHpJbmRleDogXCIxXCIsXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIwXCIsXG4gICAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXG4gICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgICBib3JkZXI6IFwic29saWQgMnB4IGJsYWNrXCIsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDVweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KVwiLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAxNTAsIDAsIDAuNSlcIixcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgdG9wOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgIGxlZnQ6IFwiMTVweFwiXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBzZXRJc01pbmltaXplZChmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTWF4aW1pemVcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNwYWNlciB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuICAgICAgICAubWV0cmljLXNwYWNlciB7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kYXMtYXBwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogNzUwcHg7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAwLCAwLjUpO1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuICAgICAgICAubWV0cmljIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRpbmcge1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIC50cmFzaC1jYW4taWQge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICB9XG4gICAgICAgIC5saXN0IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAzMTBweDtcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBibGFjaztcbiAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgLm1ldHJpY3Mge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmUtaXRlbSB7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmJyZWFrcyB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuICAgICAgICAubWV0cmljcy13cmFwcGVyIHtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHM7XG4iXX0= */\n/*@ sourceURL=/Users/vonnegut/drive/minnehack/src/pages/trash-can/[id].jsx */"));
};
/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ }),

/***/ 6:
/*!********************************************!*\
  !*** multi ./src/pages/trash-can/[id].jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vonnegut/drive/minnehack/src/pages/trash-can/[id].jsx */"./src/pages/trash-can/[id].jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "react-map-gl":
/*!*******************************!*\
  !*** external "react-map-gl" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-map-gl");

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