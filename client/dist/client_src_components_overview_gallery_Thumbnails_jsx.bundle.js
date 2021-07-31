"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfec"] = self["webpackChunkfec"] || []).push([["client_src_components_overview_gallery_Thumbnails_jsx"],{

/***/ "./client/src/components/overview/gallery/Thumbnails.jsx":
/*!***************************************************************!*\
  !*** ./client/src/components/overview/gallery/Thumbnails.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../App.jsx */ \"./client/src/App.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar Thumbnails = function Thumbnails(props) {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_App_jsx__WEBPACK_IMPORTED_MODULE_1__.ProductContext),\n      _useContext2 = _slicedToArray(_useContext, 2),\n      product = _useContext2[0],\n      setProduct = _useContext2[1];\n\n  var photoList = props.currentStyle.photos;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (photoList) {\n      thumbnailList = photoList.map(function (photoUrls) {\n        /*#__PURE__*/\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n          src: photoUrls.thumbnail_url\n        });\n      });\n    }\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"thumbnails\"\n  }, thumbnailList || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Loading...\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Thumbnails);\n\n//# sourceURL=webpack://fec/./client/src/components/overview/gallery/Thumbnails.jsx?");

/***/ })

}]);